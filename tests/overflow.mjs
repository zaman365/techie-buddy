// Debug helper: lists the elements that stick out past a 320 px viewport.
//   node tests/overflow.mjs /some/path/ [/other/path/]
import { chromium } from '@playwright/test';
const pages = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 320, height: 720 } });
const p = await ctx.newPage();
for (const path of pages) {
  await p.goto('http://localhost:4322' + path, { waitUntil: 'networkidle' });
  const out = await p.evaluate(() => {
    const W = document.documentElement.clientWidth;
    const res = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.right > W + 1 && r.width > 0) {
        const parentOver = el.parentElement && el.parentElement.getBoundingClientRect().right > W + 1;
        if (!parentOver) res.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} right=${Math.round(r.right)} text="${(el.textContent||'').trim().slice(0,50)}"`);
      }
    }
    return res.slice(0, 6);
  });
  console.log(path, '\n  ' + out.join('\n  '));
}
await b.close();
