// Screenshot helper: node tests/shoot.mjs <outdir> <path> [<path> ...]
// Uses the preinstalled Chromium. Captures 390, 768 and 1440 px full-page shots.
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const [outDir, ...paths] = process.argv.slice(2);
const base = process.env.BASE_URL ?? 'http://localhost:4321';
const widths = (process.env.WIDTHS ?? '390,1440').split(',').map(Number);
mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME ?? '/opt/pw-browsers/chromium' });
const errors = [];
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 800 ? 844 : 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${w}] ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`[${w}] pageerror ${e.message}`));
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    const name = (p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '_')) + `-${w}.png`;
    const full = process.env.FULL !== '0';
    await page.screenshot({ path: `${outDir}/${name}`, fullPage: full });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) errors.push(`[${w}] ${p} horizontal overflow ${overflow}px`);
  }
  await ctx.close();
}
await browser.close();
if (errors.length) console.log(errors.join('\n'));
console.log('done');
