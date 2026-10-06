// Generates the Open Graph images (1200×630) and the apple-touch-icon with the
// preinstalled Chromium. Output is committed under public/; rerun after renaming
// categories:  node scripts/og-images.mjs
import { chromium } from '@playwright/test';
import { readFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const categories = JSON.parse(readFileSync(join(root, 'src/content/categories.json'), 'utf8'));
const site = JSON.parse(readFileSync(join(root, 'src/content/site.json'), 'utf8'));
// Fonts as data URIs: pages created with setContent() cannot load file:// fonts.
const dataUri = (f) => `data:font/woff2;base64,${readFileSync(join(root, 'public/fonts', f)).toString('base64')}`;
const font = dataUri('geist-latin.woff2');
const mono = dataUri('geist-mono-latin.woff2');
mkdirSync(join(root, 'public/og'), { recursive: true });

const mark = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#60D0CF"/><g fill="none" stroke="#0D1B31" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 11.5 6.5 16l4.5 4.5"/><path d="M21 11.5 25.5 16 21 20.5"/><path d="m17.6 9.5-3.2 13"/></g></svg>`;

const page = (title, kicker, label) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Geist;src:url(${font}) format('woff2');font-weight:100 900}
@font-face{font-family:GeistMono;src:url(${mono}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#070B12;color:#EEF2F7;font-family:Geist;position:relative;overflow:hidden}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(ellipse 80% 80% at 70% 20%,#000 20%,transparent 75%)}
.glow{position:absolute;right:-120px;top:-160px;width:720px;height:620px;background:radial-gradient(closest-side,rgba(96,208,207,.22),transparent)}
.wrap{position:absolute;inset:64px 72px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:14px;font-weight:650;font-size:30px;letter-spacing:-.03em}
.kicker{margin-top:auto;color:#A3AFC2;font-size:26px;letter-spacing:-.01em}
h1{margin-top:14px;font-size:${title.length > 28 ? 64 : 76}px;line-height:1.02;letter-spacing:-.045em;font-weight:600;max-width:980px}
.pl{margin-top:34px;display:inline-flex;border:1px solid rgba(255,255,255,.2);border-radius:999px;font-family:GeistMono;font-size:24px;align-self:flex-start}
.pl span{padding:10px 20px}.pl span+span{border-left:1px solid rgba(255,255,255,.2);color:#60D0CF}
</style></head><body><div class="grid"></div><div class="glow"></div><div class="wrap">
<div class="brand">${mark(44)}TechieBuddy</div>
<p class="kicker">${kicker}</p><h1>${title}</h1>
<div class="pl"><span>${label[0]}</span><span>${label[1]}</span></div></div></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROME ?? '/opt/pw-browsers/chromium' });
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
const jobs = [
  { file: 'default', title: site.brand.promise.replace(/\.\s/g, '.<br>'), kicker: 'Digitale Probleme, gelöst zum Festpreis', label: ['Festpreis', '24–72 h'] },
  ...categories.map((c) => ({ file: c.slug, title: c.name, kicker: c.short, label: [`${c.counts.named + c.counts.catalog} Fixes`, 'Festpreis'] }))
];
for (const j of jobs) {
  await p.setContent(page(j.title, j.kicker, j.label), { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: join(root, 'public/og', `${j.file}.png`) });
}
// apple-touch-icon 180×180 (solid background, no transparency)
await p.setViewportSize({ width: 180, height: 180 });
await p.setContent(`<html><body style="margin:0;background:#60D0CF">${mark(180)}</body></html>`);
await p.screenshot({ path: join(root, 'public/apple-touch-icon.png'), clip: { x: 0, y: 0, width: 180, height: 180 } });
await browser.close();
console.log(`✓ ${jobs.length} OG images + apple-touch-icon`);
