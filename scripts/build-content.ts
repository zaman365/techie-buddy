/**
 * build-content.ts
 *
 * Syncs the internal brief data (_context/data, never committed) with the German
 * public copy authored in scripts/authoring/ and writes the public content the site
 * is built from into src/content/. Run it once after changing either side:
 *
 *   npm run content:sync
 *
 * The output in src/content/ is committed. Internal fields (scores, stages,
 * internal descriptions, flags, buyer notes) are never copied over.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { priceDisplay, turnaroundDe, vatLabel, eur, NBSP, type PriceFacts } from '../src/lib/format.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ctx = join(root, '_context', 'data');
const authoring = join(root, 'scripts', 'authoring');
const out = join(root, 'src', 'content');

if (!existsSync(ctx)) {
  console.error('✗ _context/data not found. Unzip the brief pack into the repo root first (it stays git-ignored).');
  process.exit(1);
}

const readJson = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const writeJson = (p: string, data: unknown) => {
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
};
const load = async (p: string) => import(pathToFileURL(p).href);

const site = readJson(join(ctx, 'site.json'));
const servicesSrc = readJson(join(ctx, 'services.json')).services as any[];
const catalogSrc = readJson(join(ctx, 'catalog.json'));

const taxonomy = await load(join(authoring, 'taxonomy.mjs'));
const siteDe = await load(join(authoring, 'site-de.mjs'));
const { faqExtra } = await load(join(authoring, 'services', '_faq-extra.mjs'));

// ---------------------------------------------------------------- services
const authored = new Map<string, any>();
for (const f of readdirSync(join(authoring, 'services')).filter((f) => !f.startsWith('_'))) {
  for (const s of (await load(join(authoring, 'services', f))).default) authored.set(s.id, s);
}

const TAGS: Record<string, string> = {
  notfall: 'notfall',
  abo: 'abo',
  'pflicht-frist': 'pflicht',
  'bewaehrter-ablauf': 'erprobt'
};

const categoryById = new Map<string, any>(site.categories.map((c: any) => [c.id, c]));

function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : text;
}

function seoDescription(s: any, priceLabel: string, vat: string, turnaround: string): string {
  const tail = ` ${priceLabel} ${vat}, Lieferzeit ${turnaround}.`;
  const first = firstSentence(s.summary);
  if ((first + tail).length <= 155) return first + tail;
  if (first.length <= 155) return first;
  const cut = first.slice(0, 152);
  return cut.slice(0, cut.lastIndexOf(' ')) + ' …';
}

const missingCopy: string[] = [];
const servicesOut: any[] = [];
for (const src of servicesSrc) {
  const a = authored.get(src.id);
  if (!a) {
    missingCopy.push(src.id);
    continue;
  }
  const facts: PriceFacts = {
    type: src.price.type,
    from: src.price.from,
    to: src.price.to,
    monthly: src.price.recurring_monthly,
    retainer: /retainer/i.test(src.price_source)
  };
  const display = priceDisplay(facts);
  const turnaround = turnaroundDe(src.turnaround_source);
  const vat = vatLabel(src.audience);
  const cat = categoryById.get(src.category);
  const faq = a.faq.map(([q, ans]: [string, string]) => ({ q, a: ans }));
  if (faqExtra[src.id]) faq.push({ q: faqExtra[src.id][0], a: faqExtra[src.id][1] });
  const title = `${a.name} | TechieBuddy`.length <= 60 ? `${a.name} | TechieBuddy` : a.name;

  servicesOut.push({
    id: src.id,
    slug: src.slug,
    category: src.category,
    categorySlug: cat.slug,
    alsoIn: src.also_in.filter((x: string) => categoryById.has(x)),
    sectors: src.sectors,
    tier: src.tier,
    audience: src.audience,
    name: a.name,
    problem: a.problem,
    summary: a.summary,
    includes: a.inc,
    excludes: a.exc,
    needs: a.needs,
    steps: a.steps,
    result: a.result,
    price: {
      type: facts.type,
      from: facts.from,
      ...(facts.to ? { to: facts.to } : {}),
      ...(facts.monthly ? { monthly: facts.monthly } : {}),
      display,
      note: a.note,
      vat
    },
    turnaround,
    tags: src.public_tags.map((t: string) => TAGS[t]).filter(Boolean),
    factNote: a.fact ?? null,
    guardrail: Boolean(a.guard),
    faq,
    related: a.rel,
    seo: { title, description: seoDescription(a, display, vat, turnaround) },
    stripePaymentLink: src.stripe_payment_link || '',
    moments: [...(taxonomy.serviceMoments[src.id] ?? [])] as string[],
    keywords: [] as string[]
  });
}

// ---------------------------------------------------------------- catalog
type Row = {
  key: string;
  category: string;
  merged: string;
  flags: string;
  name: string;
  outcome: string;
};
const CAT_CODES: Record<string, string> = {
  co: 'compliance',
  mp: 'marktplaetze',
  we: 'website',
  ki: 'ki',
  ku: 'kunden',
  bu: 'buero',
  wa: 'wachstum',
  zh: 'zuhause',
  br: 'branchen-pakete'
};
const rowsDe = new Map<string, Row>();
for (const line of readFileSync(join(authoring, 'catalog-de.txt'), 'utf8').split('\n')) {
  if (!/^c2\d\d-/.test(line)) continue;
  const [key, cat, merged, flags, name, outcome] = line.split('|');
  if (!CAT_CODES[cat]) throw new Error(`Unknown category code ${cat} in ${key}`);
  rowsDe.set(key, { key, category: CAT_CODES[cat], merged, flags, name, outcome });
}

const SECTOR_RULES: [RegExp, string][] = [
  [/e-commerce|marketplace|online businesses|brand|importer|exporter|advertiser/, 'online-handel'],
  [/local business|trades|retail|lead-based|saxony/, 'handwerk'],
  [/restaurant|hospitality|hotel|food/, 'gastronomie-hotellerie'],
  [/practice|doctor|salon|practitioner/, 'praxen-salons'],
  [/association|club|school/, 'vereine-gemeinden'],
  [/law firm|professional|consultant|office|freelancer|founder|start-up|regulated/, 'kanzleien-bueros'],
  [/creator|creative/, 'creator-coaches'],
  [/household|famil|senior|adult children/, 'familien-senioren'],
  [/solar|ev owners/, 'energie'],
  [/business buyer|succession|acquired/, 'nachfolge'],
  [/newcomer|migrant|hiring internationally/, 'internationale-fachkraefte'],
  [/market vendor|markets|farm|horse|driving|hunter|rural/, 'laendliche-nischen']
];
const sectorsFor = (sectorEn: string, category: string): string[] => {
  const s = sectorEn.toLowerCase();
  const ids = SECTOR_RULES.filter(([re]) => re.test(s)).map(([, id]) => id);
  if (!ids.length && category === 'zuhause') ids.push('familien-senioren');
  return [...new Set(ids)];
};

const URGENCY: Record<string, { id: string; label: string }> = {
  'Same day': { id: 'heute', label: 'am selben Tag' },
  '48h': { id: '48h', label: `48${NBSP}h` },
  Scheduled: { id: 'termin', label: 'nach Termin' }
};
const URGENCY_RANK: Record<string, number> = { 'Same day': 0, '48h': 1, Scheduled: 2 };
const DELIVERY: Record<string, string> = { Remote: 'remote', Onsite: 'vor-ort', Hybrid: 'hybrid' };

const allRows = catalogSrc.rows as any[];
const srcByKey = new Map(allRows.map((r) => [r.key, r]));

// Lower price band / faster urgency from the source duplicates ("show one entry, price 'ab' the lower band").
const best = new Map<string, { band: number; urgency: string; aliases: string[] }>();
for (const r of allRows.filter((r) => r.public)) best.set(r.key, { band: r.price_band_eur, urgency: r.urgency, aliases: [] });
for (const r of allRows.filter((r) => !r.public && r.duplicate_of)) {
  const b = best.get(r.duplicate_of)!;
  b.band = Math.min(b.band, r.price_band_eur);
  if (URGENCY_RANK[r.urgency] < URGENCY_RANK[b.urgency]) b.urgency = r.urgency;
  b.aliases.push(r.name_en);
}
// Same for catalog rows merged into another catalog row.
for (const de of rowsDe.values()) {
  if (!de.merged.startsWith('c2')) continue;
  const src = srcByKey.get(de.key)!;
  const b = best.get(de.merged)!;
  b.band = Math.min(b.band, best.get(de.key)!.band);
  if (URGENCY_RANK[best.get(de.key)!.urgency] < URGENCY_RANK[b.urgency]) b.urgency = best.get(de.key)!.urgency;
  b.aliases.push(src.name_en, de.name, ...best.get(de.key)!.aliases);
}

const serviceById = new Map(servicesOut.map((s) => [s.id, s]));
const catalogOut: any[] = [];
const missingRows: string[] = [];
for (const src of allRows.filter((r) => r.public)) {
  const de = rowsDe.get(src.key);
  if (!de) {
    missingRows.push(src.key);
    continue;
  }
  const b = best.get(src.key)!;
  const recurring = de.flags.includes('r');
  const audience = de.flags.includes('c') ? 'b2c' : 'b2b';
  const merged = de.merged || null;
  if (merged && !merged.startsWith('c2') && !serviceById.has(merged)) throw new Error(`${src.key} merged into unknown service ${merged}`);
  if (merged && /^\d|FT/.test(merged)) {
    const svc = serviceById.get(merged)!;
    svc.keywords.push(de.name, src.name_en, ...b.aliases);
    if (!svc.moments.includes(src.moment)) svc.moments.push(src.moment);
  }
  catalogOut.push({
    id: src.key,
    key: src.key,
    name: de.name,
    outcome: de.outcome,
    category: de.category,
    moment: src.moment,
    sectors: sectorsFor(src.sector_en, de.category),
    audience,
    recurring,
    price: {
      band: b.band,
      display: `ab${NBSP}${eur(b.band)}`,
      vat: vatLabel(audience as 'b2b' | 'b2c')
    },
    urgency: URGENCY[b.urgency].id,
    turnaround: recurring ? 'laufend' : URGENCY[b.urgency].label,
    delivery: DELIVERY[src.delivery],
    mergedInto: merged,
    keywords: [src.name_en, ...b.aliases].filter((x, i, arr) => arr.indexOf(x) === i)
  });
}

for (const s of servicesOut) {
  s.keywords = [...new Set(s.keywords)];
  s.moments.sort();
}

// ---------------------------------------------------------------- taxonomy
const visibleRows = catalogOut.filter((r) => !r.mergedInto);
const categoriesOut = site.categories.map((c: any, i: number) => {
  const t = taxonomy.categories[c.id];
  return {
    id: c.id,
    slug: c.slug,
    name: c.name_de,
    icon: c.icon === 'home' ? 'house' : c.icon,
    order: i + 1,
    short: t.short,
    intro: t.intro,
    services: c.services,
    problems: t.problems_from.map((id: string) => ({ id, quote: serviceById.get(id)!.problem })),
    counts: {
      named: c.services.length,
      catalog: visibleRows.filter((r) => r.category === c.id).length
    }
  };
});

const sectorsOut = site.sectors.map((s: any, i: number) => {
  const t = taxonomy.sectors[s.id];
  return {
    id: s.id,
    order: i + 1,
    name: s.name_de,
    icon: t.icon,
    short: t.short,
    intro: t.intro,
    problems: t.problems,
    services: s.services,
    catalogCount: visibleRows.filter((r) => r.sectors.includes(s.id)).length
  };
});

const momentsOut = catalogSrc.moments.map((m: any) => ({
  id: m.id,
  name: m.name_de,
  quote: taxonomy.moments[m.id].quote,
  intro: taxonomy.moments[m.id].intro,
  count: visibleRows.filter((r) => r.moment === m.id).length
}));

// ---------------------------------------------------------------- site
const siteOut = {
  brand: {
    name: site.brand.name,
    domain: site.brand.domain,
    url: `https://${site.brand.domain}`,
    promise: site.brand.promise_de,
    promiseLines: site.brand.promise_de.split(/(?<=\.)\s+/)
  },
  contact: {
    email: 'info@techiebuddy.de',
    hours: site.contact.hours,
    hoursSchema: 'Mo-Fr 09:00-18:00',
    location: 'Chemnitz, Sachsen',
    serviceArea: 'Remote in ganz Deutschland, vor Ort in Chemnitz und Sachsen',
    languages: site.contact.languages,
    phone: '',
    whatsapp: ''
  },
  launch: site.launch,
  principles: siteDe.principles,
  filter: siteDe.filter,
  process: siteDe.process,
  notDoing: siteDe.notDoing,
  packages: siteDe.packages,
  pillars: siteDe.pillars,
  recurring: siteDe.recurring,
  proof: siteDe.proof,
  proofBrand: { name: '', publish: false },
  guardrail: siteDe.guardrail,
  asOf: siteDe.asOf,
  deadlines: siteDe.deadlines,
  faq: siteDe.faq,
  legal: {
    impressumComplete: false,
    agbReviewed: false,
    widerrufReviewed: false
  }
};

// ---------------------------------------------------------------- write
rmSync(join(out, 'services'), { recursive: true, force: true });
for (const s of servicesOut) writeJson(join(out, 'services', `${s.id.toLowerCase()}-${s.slug}.json`), s);
writeJson(join(out, 'catalog.json'), catalogOut);
writeJson(join(out, 'categories.json'), categoriesOut);
writeJson(join(out, 'sectors.json'), sectorsOut);
writeJson(join(out, 'moments.json'), momentsOut);
writeJson(join(out, 'site.json'), siteOut);

// Merge list for the content report (generated, committed).
{
  const lines = [
    '# Katalog-Zusammenführungen',
    '',
    'Generiert von `scripts/build-content.ts`. Katalogzeilen, die dieselbe Aufgabe beschreiben wie eine benannte Leistung oder eine andere Katalogzeile, werden nicht separat gelistet. Ihre Namen dienen als Suchbegriffe für das Ziel; Preis „ab“ übernimmt das niedrigere Preisband, die Lieferzeit die schnellere Dringlichkeit.',
    '',
    '## In benannte Leistungen zusammengeführt',
    '',
    '| Katalog | Quelle (EN) | Deutsch | → Leistung |',
    '|---|---|---|---|'
  ];
  for (const r of catalogOut.filter((r) => r.mergedInto && serviceById.has(r.mergedInto)))
    lines.push(`| ${r.key} | ${r.keywords[0]} | ${r.name} | #${r.mergedInto} ${serviceById.get(r.mergedInto)!.name} |`);
  lines.push('', '## In andere Katalogzeilen zusammengeführt (Dubletten)', '', '| Katalog | Quelle (EN) | → Ziel | Ziel (DE) |', '|---|---|---|---|');
  const byKey = new Map(catalogOut.map((r) => [r.key, r]));
  for (const r of catalogOut.filter((r) => r.mergedInto && byKey.has(r.mergedInto)))
    lines.push(`| ${r.key} | ${r.keywords[0]} | ${r.mergedInto} | ${byKey.get(r.mergedInto)!.name} |`);
  lines.push('', '## Dubletten aus der Quelle (bereits markiert, public: false)', '', '| Katalog | Quelle (EN) | → Ziel |', '|---|---|---|');
  for (const r of allRows.filter((r) => !r.public)) lines.push(`| ${r.key} | ${r.name_en} | ${r.duplicate_of} |`);
  mkdirSync(join(root, 'docs'), { recursive: true });
  writeFileSync(join(root, 'docs', 'content-merges.md'), lines.join('\n') + '\n');
}

console.log(`✓ ${servicesOut.length} services, ${catalogOut.length} catalog rows (${visibleRows.length} listed, ${catalogOut.length - visibleRows.length} merged)`);
if (missingCopy.length) console.log(`! services without German copy: ${missingCopy.join(', ')}`);
if (missingRows.length) console.log(`! catalog rows without German copy: ${missingRows.join(', ')}`);
