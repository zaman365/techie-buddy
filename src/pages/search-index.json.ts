// Static search index for the ⌘K palette and the hero command bar (loaded lazily).
import type { APIRoute } from 'astro';
import { getData, serviceUrl, categoryUrl, sectorUrl, catalogUrl } from '../lib/data.ts';
import { normalize, type Entry } from '../scripts/search.ts';

const PAGES: { t: string; m: string; u: string; w: string }[] = [
  { t: 'Alle Leistungen', m: 'Gesamtes Angebot filtern', u: '/alle-leistungen/', w: 'katalog menu liste alles übersicht' },
  { t: 'Preisübersicht', m: 'Alle Festpreise als Tabelle', u: '/preise/', w: 'preise kosten preisliste festpreis tabelle' },
  { t: 'Notfall-Hilfe', m: 'Start noch am selben Werktag möglich', u: '/notfall/', w: 'notfall dringend sofort heute schnell hilfe' },
  { t: 'Pakete und Betreuung', m: 'Websites, Shops, Abos', u: '/pakete/', w: 'pakete projekt website shop app abo betreuung wartung starter business ecommerce' },
  { t: 'Förderung in Sachsen', m: 'SAB-Digitalisierungszuschuss', u: '/foerderung/', w: 'förderung zuschuss sab sachsen digitalisierung' },
  { t: 'So läuft’s', m: 'Ablauf, Prinzipien, Fragen', u: '/so-laeufts/', w: 'ablauf prozess lieferzeit zahlung bericht faq' },
  { t: 'Pflichten-Kalender', m: 'Fristen 2025 bis 2028', u: '/wissen/pflichten-kalender/', w: 'fristen pflichten kalender termine deadline gesetz' },
  { t: 'BFSG-Check', m: 'Gilt das Barrierefreiheitsgesetz für mich?', u: '/wissen/bfsg-check/', w: 'bfsg barrierefreiheit check test pflicht' },
  { t: 'Förder-Check', m: 'Passt ein Förderprogramm?', u: '/wissen/foerder-check/', w: 'förderung check test sab zuschuss' },
  { t: 'Partnerprogramm', m: 'Für Steuerberater, Makler, Agenturen', u: '/partner/', w: 'partner empfehlung steuerberater makler webdesigner' },
  { t: 'Über uns', m: 'Wer hinter TechieBuddy steht', u: '/ueber-uns/', w: 'über uns team chemnitz wer' },
  { t: 'Kontakt', m: 'Problem schildern, Festpreis bekommen', u: '/kontakt/', w: 'kontakt anfrage email schreiben formular' },
  { t: 'Impressum', m: 'Rechtliches', u: '/impressum/', w: 'impressum anbieter' },
  { t: 'Datenschutz', m: 'Rechtliches', u: '/datenschutz/', w: 'datenschutz privacy' },
  { t: 'Barrierefreiheit', m: 'Erklärung zur Barrierefreiheit', u: '/barrierefreiheit/', w: 'barrierefreiheit erklärung' },
  { t: 'English', m: 'TechieBuddy in English', u: '/en/', w: 'english englisch' },
  { t: 'বাংলা', m: 'TechieBuddy auf Bengali', u: '/bn/', w: 'bengali bangla' }
];

function words(...parts: (string | undefined)[]): string {
  return [...new Set(normalize(parts.filter(Boolean).join(' ')).split(' '))].filter((w) => w.length > 1).join(' ');
}

export const GET: APIRoute = async () => {
  const { services, catalogListed, categoryById, categories, sectors } = await getData();
  const items: Entry[] = [];

  for (const s of services) {
    const cat = categoryById.get(s.category)!;
    items.push({
      k: 'service',
      t: s.name,
      m: cat.name,
      u: serviceUrl(s),
      p: s.price.display,
      d: s.turnaround,
      w: words(s.problem, s.keywords.join(' '), s.includes.join(' ')),
      ...(s.tags.includes('notfall') ? { n: 1 as const } : {}),
      ...(s.tier === 'launch' ? { r: 1 as const } : {})
    });
  }
  for (const r of catalogListed) {
    items.push({
      k: 'catalog',
      t: r.name,
      m: r.outcome,
      u: catalogUrl(r),
      p: r.price.display,
      d: r.turnaround,
      w: words(r.keywords.join(' '), categoryById.get(r.category)!.name)
    });
  }
  for (const c of categories) items.push({ k: 'page', t: c.name, m: `Bereich · ${c.short}`, u: categoryUrl(c), w: words(c.intro) });
  for (const s of sectors) items.push({ k: 'sector', t: s.name, m: s.short, u: sectorUrl(s), w: words(s.intro) });
  for (const p of PAGES) items.push({ k: 'page', t: p.t, m: p.m, u: p.u, w: words(p.w) });

  return new Response(JSON.stringify({ v: 1, items }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
