// Price and turnaround formatting (German conventions, non-breaking spaces).
export const NBSP = ' ';

/** 1500 -> "1.500" */
export function num(n: number): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** 1500 -> "1.500 €" */
export function eur(n: number): string {
  return `${num(n)}${NBSP}€`;
}

export type PriceType = 'fixed' | 'from' | 'range' | 'project' | 'recurring';

export interface PriceFacts {
  type: PriceType;
  from: number;
  to?: number;
  monthly?: number;
  retainer?: boolean;
}

export function priceDisplay(p: PriceFacts): string {
  const monthly = p.monthly ? `${eur(p.monthly)}/Monat` : '';
  switch (p.type) {
    case 'recurring':
      return monthly || `${eur(p.from)}/Monat`;
    case 'range':
    case 'project':
      return `${num(p.from)}–${num(p.to ?? p.from)}${NBSP}€`;
    case 'from': {
      const base = `ab${NBSP}${eur(p.from)}`;
      if (p.retainer) return `${base} + Betreuung`;
      return monthly ? `${base} + ${monthly}` : base;
    }
    default:
      return monthly ? `${eur(p.from)} + ${monthly}` : eur(p.from);
  }
}

const TURNAROUND: Record<string, string> = {
  'same day': 'am selben Tag',
  'start in 24h': 'Start in 24 h',
  '1 visit / remote': '1 Termin oder Fernhilfe',
  '1 visit': '1 Termin vor Ort',
  '1 session': '1 Termin',
  'half day': '½ Tag',
  '1 day': '1 Tag',
  'this week': 'diese Woche',
  'per device': 'pro Gerät',
  'grant-paced': 'je nach Förderverfahren',
  ongoing: 'laufend',
  'before their deadline': 'vor deiner Frist',
  projects: 'je Projekt',
  '30 min': '30 min'
};

/** "72h" -> "72 h", "1–2 weeks" -> "1–2 Wochen", "same day" -> "am selben Tag" */
export function turnaroundDe(src: string): string {
  const s = src.trim();
  if (TURNAROUND[s]) return TURNAROUND[s];
  const h = s.match(/^(\d+(?:–\d+)?)h$/);
  if (h) return `${h[1]}${NBSP}h`;
  const w = s.match(/^(\d+(?:–\d+)?) weeks?$/);
  if (w) return `${w[1]}${NBSP}${w[1] === '1' ? 'Woche' : 'Wochen'}`;
  throw new Error(`Unknown turnaround: ${src}`);
}

export function vatLabel(audience: 'b2b' | 'b2c'): string {
  return audience === 'b2c' ? 'inkl. MwSt.' : 'zzgl. MwSt.';
}

/** Filter bucket: same day, up to 48 h, up to a week, or planned/project. */
export type TurnaroundBucket = 'heute' | '48h' | 'woche' | 'projekt';

export function turnaroundBucket(label: string): TurnaroundBucket {
  if (/selben Tag|30\smin|½ Tag/.test(label)) return 'heute';
  if (/Start in 24/.test(label)) return '48h';
  const h = label.match(/(\d+)(?:–(\d+))?\sh$/);
  if (h) return Number(h[2] ?? h[1]) <= 48 ? '48h' : 'woche';
  if (/^1\sTag|diese Woche|^1\sWoche|pro Gerät|^1 Termin/.test(label)) return 'woche';
  return 'projekt';
}
