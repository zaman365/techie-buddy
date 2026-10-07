// QA sweep (brief section 13): run against tests/serve.mjs (dist/ with real headers).
//   node tests/qa.mjs            all checks
// Checks every page at 320 px for horizontal scroll, console errors, CSP violations
// and requests to other origins; runs axe on the key templates at 390 and 1440 px.
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const base = process.env.BASE_URL ?? 'http://localhost:4322';
const dist = join(process.cwd(), 'dist');
const pages = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') pages.push('/' + p.slice(dist.length + 1).replace(/index\.html$/, ''));
  }
})(dist);
pages.sort();

const problems = [];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

// 1. Every page at 320 px: overflow, console errors, CSP, foreign requests.
{
  const ctx = await browser.newContext({ viewport: { width: 320, height: 720 } });
  await ctx.addInitScript(() => {
    window.__csp = [];
    document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(`${e.violatedDirective} ${e.blockedURI}`));
  });
  const page = await ctx.newPage();
  let current = '';
  page.on('console', (m) => {
    if (m.type() === 'error') problems.push(`console error on ${current}: ${m.text()}`);
  });
  page.on('pageerror', (e) => problems.push(`page error on ${current}: ${e.message}`));
  page.on('request', (r) => {
    const u = new URL(r.url());
    if (!['localhost', '127.0.0.1'].includes(u.hostname) && !u.protocol.startsWith('data')) problems.push(`foreign request on ${current}: ${r.url()}`);
  });
  for (const p of pages) {
    current = p;
    const res = await page.goto(base + p, { waitUntil: 'networkidle' });
    if (p !== '/404/' && res.status() !== 200) problems.push(`status ${res.status()} for ${p}`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (overflow > 0) problems.push(`horizontal scroll ${overflow}px at 320 on ${p}`);
    const csp = await page.evaluate(() => window.__csp);
    for (const v of csp) problems.push(`CSP violation on ${p}: ${v}`);
    const h1 = await page.locator('h1').count();
    if (h1 !== 1) problems.push(`${h1} h1 elements on ${p}`);
  }
  await ctx.close();
}

// 2. axe on key templates at 390 and 1440.
const axePages = ['/', '/leistungen/amazon-marktplaetze/gpsr-rettung-amazon/', '/leistungen/zuhause-familie-energie/eltern-technik-abo/', '/leistungen/compliance/', '/alle-leistungen/', '/kontakt/', '/wissen/bfsg-check/', '/wissen/foerder-check/', '/preise/', '/notfall/', '/branchen/handwerk/', '/wissen/pflichten-kalender/', '/pakete/', '/en/', '/bn/', '/impressum/'];
for (const width of [390, 1440]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();
  for (const p of axePages) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    for (const v of r.violations) problems.push(`axe ${width}px ${p}: ${v.id} (${v.impact}) ×${v.nodes.length} – ${v.nodes[0].target.join(' ')}`);
  }
  await ctx.close();
}

// 3. Internal links resolve to a file in dist/.
const linkRe = /href="(\/[^"#?]*)(?:[?#][^"]*)?"/g;
const seen = new Set();
for (const p of pages) {
  const html = readFileSync(join(dist, p, 'index.html'), 'utf8');
  for (const m of html.matchAll(linkRe)) {
    const href = m[1];
    if (seen.has(href)) continue;
    seen.add(href);
    const target = join(dist, href);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    const redirect = readFileSync(join(dist, '_redirects'), 'utf8').includes(href + ' ');
    if (!ok && !redirect) problems.push(`broken internal link ${href} (first seen on ${p})`);
  }
}

await browser.close();
console.log(`Checked ${pages.length} pages, axe on ${axePages.length} pages × 2 widths, ${seen.size} internal link targets.`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const pr of [...new Set(problems)]) console.log(' - ' + pr);
  process.exitCode = 1;
} else console.log('✓ No problems found.');
