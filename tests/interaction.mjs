// Keyboard and behaviour checks for the interactive parts (brief section 13).
//   node tests/interaction.mjs   (against tests/serve.mjs)
import { chromium } from '@playwright/test';

const base = process.env.BASE_URL ?? 'http://localhost:4322';
const results = [];
const check = (name, ok, detail = '') => results.push({ name, ok: Boolean(ok), detail });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

// Desktop: mega menu disclosure + Esc returns focus
{
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  const trigger = page.locator('button[data-menu="mm-leistungen"]');
  await trigger.focus();
  await page.keyboard.press('Enter');
  check('mega menu opens with Enter', (await trigger.getAttribute('aria-expanded')) === 'true' && (await page.locator('#mm-leistungen').isVisible()));
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  const inPanel = await page.evaluate(() => document.getElementById('mm-leistungen').contains(document.activeElement));
  check('Tab moves into the mega menu', inPanel);
  await page.keyboard.press('Escape');
  check('Esc closes menu', (await trigger.getAttribute('aria-expanded')) === 'false' && !(await page.locator('#mm-leistungen').isVisible()));
  check('focus returns to trigger', await trigger.evaluate((el) => el === document.activeElement));

  // Wissen dropdown
  const w = page.locator('button[data-menu="mm-wissen"]');
  await w.click();
  check('Wissen dropdown opens', await page.locator('#mm-wissen').isVisible());
  await page.mouse.click(10, 600);
  check('click outside closes dropdown', !(await page.locator('#mm-wissen').isVisible()));

  // Palette via Ctrl+K
  await page.keyboard.press('Control+k');
  const dialog = page.locator('dialog[data-palette]');
  check('Ctrl+K opens palette', await dialog.evaluate((d) => d.open));
  const input = dialog.locator('[data-search-input]');
  check('palette input focused', await input.evaluate((el) => el === document.activeElement));
  await page.waitForSelector('#cp-results [role=option]');
  check('palette shows suggestions when empty', (await dialog.locator('[role=option]').count()) > 3);
  await input.fill('Amazon hat mein Listing gesperrt');
  await page.waitForTimeout(250);
  const first = await dialog.locator('[role=option]').first().innerText();
  check('palette finds the GPSR/listing fix', /Listing|GPSR|Amazon/.test(first), first.split('\n')[0]);
  const ad1 = await input.getAttribute('aria-activedescendant');
  await page.keyboard.press('ArrowDown');
  const ad2 = await input.getAttribute('aria-activedescendant');
  check('ArrowDown moves the active option', ad1 && ad2 && ad1 !== ad2);
  await page.keyboard.press('Escape');
  check('Esc closes palette', !(await dialog.evaluate((d) => d.open)));
  await page.keyboard.press('Control+k');
  await input.fill('website gehackt');
  await page.waitForTimeout(250);
  await Promise.all([page.waitForURL((u) => u.pathname !== '/', { timeout: 5000 }).catch(() => {}), page.keyboard.press('Enter')]);
  check('Enter opens the result', /website-gehackt-rettung|alle-leistungen/.test(page.url()), page.url());
}

// Search relevance spot checks
{
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  const queries = [
    ['e-rechnung', /E-Rechnung/],
    ['excel kaputt', /Excel/],
    ['drucker', /Drucker/],
    ['abmahnung', /DSGVO|Cookie|Datenschutz|Rechtstexte|BFSG/],
    ['chatgpt', /KI-Sichtbarkeit|ChatGPT/],
    ['förderung', /Förder|SAB/],
    ['foerderung', /Förder|SAB/],
    ['instagram gehackt', /Instagram/],
    ['balkonkraftwerk', /Balkonkraftwerk/],
    ['wlan', /WLAN/],
    ['hacked website', /Website/],
    ['kasse tse', /Kasse|TSE/],
    ['eltern', /Eltern/],
    ['excle', /Excel/]
  ];
  await page.keyboard.press('Control+k');
  const input = page.locator('dialog[data-palette] [data-search-input]');
  for (const [q, re] of queries) {
    await input.fill(q);
    await page.waitForTimeout(200);
    const titles = await page.locator('#cp-results [role=option] .sr-opt__title').allInnerTexts();
    check(`search "${q}"`, titles.slice(0, 3).some((t) => re.test(t)), titles.slice(0, 3).join(' | '));
  }
}

// Mobile: sheet + hero command bar
{
  const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  const btn = page.locator('[data-sheet-open]');
  await btn.click();
  const sheet = page.locator('dialog[data-sheet]');
  check('mobile sheet opens', await sheet.evaluate((d) => d.open));
  check('sheet button aria-expanded', (await btn.getAttribute('aria-expanded')) === 'true');
  await page.keyboard.press('Escape');
  check('Esc closes sheet', !(await sheet.evaluate((d) => d.open)));
  check('focus back on Menü button', await btn.evaluate((el) => el === document.activeElement));
  const hero = page.locator('[data-cbar-input]');
  await hero.fill('Excel');
  await page.waitForTimeout(300);
  check('hero command bar shows live results', (await page.locator('[data-cbar-panel]').isVisible()) && (await page.locator('[data-cbar-results] [role=option]').count()) > 0);
  check('hero combobox aria-expanded', (await hero.getAttribute('aria-expanded')) === 'true');
  await page.keyboard.press('Escape');
  check('Esc closes hero results', !(await page.locator('[data-cbar-panel]').isVisible()));
  await page.locator('[data-chip]').first().click();
  await page.waitForTimeout(300);
  check('chip fills the command bar', (await hero.inputValue()).length > 0 && (await page.locator('[data-cbar-panel]').isVisible()));
}

// Filters on /alle-leistungen/
{
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto(base + '/alle-leistungen/?moment=g06', { waitUntil: 'networkidle' });
  const total = await page.locator('[data-row]').count();
  const shown = Number(await page.locator('[data-count]').innerText());
  check('moment filter from URL applies', shown > 0 && shown < total, `${shown}/${total}`);
  check('BFSG audit listed under g06', await page.locator('#l-01').isVisible());
  await page.selectOption('#f-cat', 'zuhause');
  await page.waitForTimeout(200);
  check('filters reflected in URL', page.url().includes('bereich=zuhause') && page.url().includes('moment=g06'), page.url());
  await page.locator('[data-reset]').click();
  await page.waitForTimeout(200);
  check('reset shows everything', Number(await page.locator('[data-count]').innerText()) === total);
  await page.fill('#f-q', 'xyzxyz');
  await page.waitForTimeout(250);
  check('zero-result state appears', await page.locator('[data-empty]').isVisible());
  await page.goto(base + '/alle-leistungen/#c252-17', { waitUntil: 'networkidle' });
  check('catalog anchor row visible', await page.locator('#c252-17').isVisible());
}

// Accordion, sort, checks, contact prefill
{
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.goto(base + '/so-laeufts/', { waitUntil: 'networkidle' });
  const sum = page.locator('.accordion summary').first();
  await sum.focus();
  await page.keyboard.press('Enter');
  check('accordion opens with Enter', await page.locator('.accordion details').first().evaluate((d) => d.open));

  await page.goto(base + '/preise/', { waitUntil: 'networkidle' });
  await page.locator('button[data-sort="price"]').focus();
  await page.keyboard.press('Enter');
  const sortState = await page.locator('th:has(button[data-sort="price"])').getAttribute('aria-sort');
  const firstPrice = Number(await page.locator('#price-table tbody tr').first().getAttribute('data-sort-price'));
  check('price column sorts descending on second activation', sortState === 'descending' && firstPrice >= 1000, `${sortState} ${firstPrice}`);

  await page.goto(base + '/wissen/bfsg-check/', { waitUntil: 'networkidle' });
  const pick = async (name, value) => {
    await page.locator(`input[name="${name}"][value="${value}"]`).focus();
    await page.keyboard.press('Space');
  };
  await page.locator('[data-next]').click();
  check('check requires an answer', await page.locator('[data-error]').isVisible());
  await pick('b2c', 'ja');
  await page.locator('[data-next]').click();
  await pick('online', 'ja');
  await page.locator('[data-next]').click();
  await pick('produkte', 'nein');
  await page.locator('[data-next]').click();
  await pick('mitarbeitende', 'unter10');
  await page.locator('[data-next]').click();
  await pick('umsatz', 'bis2');
  await page.locator('[data-submit]').click();
  const res = await page.locator('[data-result]').innerText();
  check('BFSG check: micro-enterprise exempt for services', /ausgenommen/.test(res), res.split('\n')[0]);
  check('result receives focus', await page.locator('[data-result]').evaluate((el) => el === document.activeElement));

  await page.goto(base + '/wissen/foerder-check/', { waitUntil: 'networkidle' });
  for (const [n, v] of [['sachsen', 'ja'], ['groesse', 'unter10'], ['erstes', 'ja'], ['budget', '5bis10'], ['begonnen', 'nein']]) {
    await pick(n, v);
    const next = page.locator('[data-next]');
    if (await next.isVisible()) await next.click();
  }
  await page.locator('[data-submit]').click();
  check('Förder check: good fit', /Gute Ausgangslage/.test(await page.locator('[data-result]').innerText()));

  await page.goto(base + '/kontakt/?leistung=gpsr-rettung-amazon&text=Listings%20gesperrt', { waitUntil: 'networkidle' });
  check('contact prefill service', (await page.inputValue('#c-service')) === 'GPSR-Rettung für Amazon-Seller');
  check('contact prefill text', (await page.inputValue('#c-message')) === 'Listings gesperrt');
  await page.locator('[data-contact] button[type=submit]').click();
  check('contact validation marks missing fields', (await page.locator('#c-name').getAttribute('aria-invalid')) === 'true');
  await page.goto(base + '/kontakt/?katalog=c252-17', { waitUntil: 'networkidle' });
  check('contact prefill catalog row', (await page.inputValue('#c-service')).length > 0, await page.inputValue('#c-service'));
}

await browser.close();
let failed = 0;
for (const r of results) {
  if (!r.ok) failed++;
  console.log(`${r.ok ? '✓' : '✗'} ${r.name}${r.detail ? `  [${r.detail}]` : ''}`);
}
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exitCode = failed ? 1 : 0;
