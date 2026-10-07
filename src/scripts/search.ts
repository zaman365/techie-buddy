// Client-side search over /search-index.json (built in src/pages/search-index.json.ts).
// German-aware: umlauts and ß are folded so "grün", "gruen" and "grun" all match,
// prefixes and small typos match, and a synonym table bridges German and English terms.

export type Kind = 'service' | 'catalog' | 'sector' | 'page';

export interface Entry {
  k: Kind;
  t: string; // title
  m: string; // meta line (category or outcome)
  u: string; // url
  p?: string; // price display
  d?: string; // turnaround
  w?: string; // extra keywords (already normalised)
  n?: 1; // notfall
  r?: 1; // primary entry (launch tier) for suggestions
}

interface Prepared extends Entry {
  tt: string[];
  wt: string[];
  mt: string[];
}

export interface Result {
  entry: Entry;
  score: number;
}

export interface Grouped {
  label: string;
  id: string;
  results: Entry[];
}

const STOP_RAW =
  'a an auf aus bei bin bis da das dass dem den der des die du ein eine einen einem einer er es für hat haben ich im in ist ja kann man mein meine meinen meiner mich mir mit nach nicht noch nur oder ohne seit sich sie sind so uns unser unsere unseren und vom von vor war was wenn wie wir wird wurde zu zum zur the my is was our has have of and or to for on'.split(
    ' '
  );

const SYNONYMS_RAW: string[][] = [
  ['gesperrt', 'sperre', 'sperrung', 'blockiert', 'suspendiert', 'suspended', 'blocked', 'banned', 'deaktiviert', 'eingeschrankt', 'unterdruckt', 'suppressed', 'abgelehnt', 'rejected', 'limitation'],
  ['gehackt', 'hack', 'hacked', 'gekapert', 'kompromittiert', 'compromised', 'hijacked', 'malware', 'angriff'],
  ['kaputt', 'defekt', 'broken', 'streikt', 'fehler', 'error', 'ausgefallen', 'ausfall', 'down', 'offline', 'stopped', 'failure', 'notfall', 'notaufnahme', 'rettung', 'retten', 'reparieren', 'reparatur', 'repair', 'rescue'],
  ['website', 'webseite', 'homepage', 'internetseite', 'site', 'wordpress'],
  ['email', 'mail', 'postfach', 'outlook', 'mailbox', 'inbox'],
  ['rechnung', 'invoice', 'erechnung', 'xrechnung', 'zugferd'],
  ['barrierefreiheit', 'barrierefrei', 'bfsg', 'accessibility', 'wcag'],
  ['datenschutz', 'dsgvo', 'gdpr', 'cookie', 'cookies', 'consent', 'einwilligung', 'abmahnung', 'impressum', 'privacy'],
  ['ki', 'ai', 'chatgpt', 'gpt', 'gemini', 'perplexity', 'kunstliche', 'llm', 'bot', 'chatbot'],
  ['forderung', 'fordermittel', 'zuschuss', 'grant', 'grants', 'sab', 'subsidy', 'funding', 'forderprogramm'],
  ['bewertung', 'bewertungen', 'rezension', 'rezensionen', 'review', 'reviews', 'sterne', 'kununu', 'ruf', 'reputation'],
  ['termin', 'termine', 'buchung', 'booking', 'appointment', 'kalender', 'calendar', 'noshow'],
  ['handy', 'smartphone', 'iphone', 'android', 'phone', 'telefon'],
  ['excel', 'tabelle', 'spreadsheet', 'sheets', 'formel', 'formeln'],
  ['backup', 'sicherung', 'datensicherung', 'restore'],
  ['passwort', 'password', 'kennwort', 'zugang', 'login', 'anmeldung'],
  ['betrug', 'scam', 'fraud', 'phishing', 'fake', 'betruger'],
  ['steuer', 'steuerberater', 'datev', 'elster', 'finanzamt'],
  ['kasse', 'kassensystem', 'tse', 'pos', 'kartenterminal', 'kartenzahlung', 'sumup'],
  ['solar', 'pv', 'photovoltaik', 'balkonkraftwerk', 'wallbox', 'marktstammdatenregister', 'mastr'],
  ['auto', 'eauto', 'elektroauto', 'ev', 'thg', 'quote'],
  ['instagram', 'facebook', 'meta', 'social', 'tiktok'],
  ['google', 'maps', 'unternehmensprofil', 'profil', 'gbp'],
  ['shop', 'onlineshop', 'shopify', 'woocommerce', 'checkout', 'store'],
  ['amazon', 'seller', 'asin', 'fba', 'marktplatz', 'marketplace'],
  ['mitarbeiter', 'mitarbeitende', 'personal', 'recruiting', 'bewerber', 'fachkrafte', 'azubi', 'employee'],
  ['wlan', 'wifi', 'router', 'internet', 'netzwerk'],
  ['drucker', 'printer', 'scanner']
];

const URGENT_RAW = ['notfall', 'dringend', 'sofort', 'gehackt', 'hacked', 'gesperrt', 'kaputt', 'ausgefallen', 'down', 'offline', 'betrug', 'heute', 'eilig', 'urgent', 'emergency', 'weg'];

// Word lists are folded with the same normaliser as the index.
const STOP = new Set(STOP_RAW.map(normalize));
const SYNONYMS = SYNONYMS_RAW.map((g) => [...new Set(g.map(normalize))]);
const URGENT = new Set(URGENT_RAW.map(normalize));

/** Lowercase, fold ß and umlauts (both "ä" and "ae" become "a"), strip punctuation. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ae/g, 'a')
    .replace(/oe/g, 'o')
    .replace(/ue/g, 'u')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function tokens(s: string): string[] {
  return normalize(s)
    .split(' ')
    .filter((t) => t.length > 0);
}

function lev(a: string, b: string, max: number): number {
  // Optimal string alignment distance: insert, delete, substitute, swap neighbours.
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let best = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      best = Math.min(best, d[i][j]);
    }
    if (best > max) return max + 1;
  }
  return d[a.length][b.length];
}

function matchToken(q: string, t: string): number {
  if (t === q) return 1;
  if (q.length >= 2 && t.startsWith(q)) return 0.85;
  if (q.length >= 4 && t.includes(q)) return 0.6;
  if (q.length >= 4) {
    const max = q.length >= 7 ? 2 : 1;
    if (lev(q, t, max) <= max) return 0.45;
    if (q.length >= 6 && t.length > q.length && lev(q, t.slice(0, q.length), max) <= max) return 0.4;
  }
  return 0;
}

function bestIn(q: string, list: string[]): number {
  let best = 0;
  for (const t of list) {
    const m = matchToken(q, t);
    if (m > best) best = m;
    if (best === 1) break;
  }
  return best;
}

function alternatives(q: string): { term: string; factor: number }[] {
  const alts = [{ term: q, factor: 1 }];
  if (q.length < 3) return alts;
  for (const group of SYNONYMS) {
    if (group.some((w) => w === q || (w.startsWith(q) && q.length >= 4))) {
      for (const w of group) if (w !== q) alts.push({ term: w, factor: 0.85 });
    }
  }
  return alts;
}

let prepared: Prepared[] | null = null;
let loading: Promise<Prepared[]> | null = null;

export function loadIndex(): Promise<Prepared[]> {
  if (prepared) return Promise.resolve(prepared);
  loading ??= fetch('/search-index.json', { credentials: 'same-origin' })
    .then((r) => {
      if (!r.ok) throw new Error(`Index ${r.status}`);
      return r.json() as Promise<{ items: Entry[] }>;
    })
    .then((data) => {
      prepared = data.items.map((e) => ({
        ...e,
        tt: tokens(e.t),
        wt: e.w ? e.w.split(' ') : [],
        mt: tokens(e.m)
      }));
      return prepared;
    })
    .catch((err) => {
      loading = null;
      throw err;
    });
  return loading;
}

export function search(index: Prepared[], query: string): Result[] {
  const qs = tokens(query).filter((t) => !STOP.has(t));
  if (!qs.length) return [];
  const urgent = qs.some((q) => URGENT.has(q));
  const altsPerToken = qs.map(alternatives);
  const need = qs.length === 1 ? 1 : Math.ceil(qs.length * 0.5);
  const out: Result[] = [];
  for (const e of index) {
    let score = 0;
    let matched = 0;
    for (const alts of altsPerToken) {
      let tokenBest = 0;
      for (const { term, factor } of alts) {
        const s = Math.max(3 * bestIn(term, e.tt), 2 * bestIn(term, e.wt), 1 * bestIn(term, e.mt)) * factor;
        if (s > tokenBest) tokenBest = s;
      }
      if (tokenBest > 0) matched++;
      score += tokenBest;
    }
    if (matched < need) continue;
    score *= (matched / qs.length) ** 2;
    if (e.k === 'service') score *= 1.15;
    if (e.k === 'page' || e.k === 'sector') score *= 0.9;
    if (urgent && e.n) score *= 1.3;
    out.push({ entry: e, score });
  }
  out.sort((a, b) => b.score - a.score);
  // Drop the long tail of weak matches.
  const floor = out.length ? out[0].score * 0.3 : 0;
  return out.filter((r) => r.score >= floor);
}

const LIMITS: Record<string, number> = { notfall: 3, service: 7, catalog: 6, sector: 3, page: 3 };

export function group(results: Result[], urgent = false): Grouped[] {
  const buckets: Record<string, Entry[]> = { notfall: [], service: [], catalog: [], sector: [], page: [] };
  const best: Record<string, number> = {};
  for (const { entry, score } of results) {
    const key = entry.k === 'service' && entry.n && buckets.notfall.length < LIMITS.notfall ? 'notfall' : entry.k;
    if (buckets[key].length < LIMITS[key]) {
      buckets[key].push(entry);
      best[key] = Math.max(best[key] ?? 0, score);
    }
  }
  const labels: Record<string, string> = { notfall: 'Notfall', service: 'Leistungen', catalog: 'Katalog', sector: 'Branchen', page: 'Seiten' };
  // Strongest group first; urgent queries always lead with Notfall.
  const order = Object.keys(labels)
    .filter((k) => buckets[k].length)
    .sort((a, b) => (urgent && a === 'notfall' ? -1 : urgent && b === 'notfall' ? 1 : (best[b] ?? 0) - (best[a] ?? 0)));
  return order.map((k) => ({ id: k, label: labels[k], results: buckets[k] }));
}

/** True when the query contains a word that signals urgency. */
export function isUrgent(query: string): boolean {
  return tokens(query).some((q) => URGENT.has(q));
}

/** Suggestions for an empty query: urgent fixes and the launch services. */
export function suggestions(index: Prepared[]): Grouped[] {
  const urgent = index.filter((e) => e.k === 'service' && e.n).slice(0, 3);
  const top = index.filter((e) => e.k === 'service' && e.r).slice(0, 5);
  return [
    { id: 'notfall', label: 'Gerade passiert?', results: urgent },
    { id: 'top', label: 'Häufig gesucht', results: top }
  ];
}

/** Filter helper for list pages: every query token must prefix-match a word (or a synonym). */
export function matchesText(words: string[], query: string): boolean {
  const qs = tokens(query).filter((t) => !STOP.has(t));
  if (!qs.length) return true;
  return qs.every((q) => alternatives(q).some(({ term }) => words.some((w) => w.startsWith(term) || (term.length >= 4 && w.includes(term)))));
}
