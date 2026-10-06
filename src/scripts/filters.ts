// /alle-leistungen/: client-side filters over the server-rendered list.
// Filters are mirrored in the URL (?q=&moment=&bereich=&branche=&preis=&zeit=&ort=) so views are shareable.
import { matchesText, normalize } from './search.ts';

const root = document.querySelector<HTMLElement>('[data-filters]');
if (root) {
  const form = root.querySelector<HTMLFormElement>('form')!;
  const rows = [...document.querySelectorAll<HTMLElement>('[data-row]')];
  const count = document.querySelector<HTMLElement>('[data-count]')!;
  const empty = document.querySelector<HTMLElement>('[data-empty]')!;
  const emptyLink = document.querySelector<HTMLAnchorElement>('[data-empty-link]');
  const reset = root.querySelector<HTMLButtonElement>('[data-reset]')!;
  const words = new Map(rows.map((r) => [r, normalize(r.dataset.text ?? '').split(' ')]));
  const KEYS = ['q', 'moment', 'bereich', 'branche', 'preis', 'zeit', 'ort'] as const;
  type Key = (typeof KEYS)[number];

  const field = (k: Key) => form.elements.namedItem(k) as HTMLInputElement | HTMLSelectElement | null;

  // Initial state from the URL.
  const params = new URLSearchParams(location.search);
  for (const k of KEYS) {
    const v = params.get(k);
    const f = field(k);
    if (v && f) f.value = v;
  }

  const priceOk = (price: number, band: string) => {
    if (!band) return true;
    if (band === '600') return price >= 600;
    return price <= Number(band);
  };

  const apply = (push: boolean) => {
    const v = Object.fromEntries(KEYS.map((k) => [k, (field(k)?.value ?? '').trim()])) as Record<Key, string>;
    let shown = 0;
    for (const r of rows) {
      const d = r.dataset;
      const ok =
        (!v.moment || (d.moments ?? '').split(' ').includes(v.moment)) &&
        (!v.bereich || d.cat === v.bereich || (d.also ?? '').split(' ').includes(v.bereich)) &&
        (!v.branche || (d.sectors ?? '').split(' ').includes(v.branche)) &&
        priceOk(Number(d.price), v.preis) &&
        (!v.zeit || d.time === v.zeit) &&
        (!v.ort || (v.ort === 'vor-ort' ? d.delivery !== 'remote' : d.delivery !== 'vor-ort')) &&
        matchesText(words.get(r)!, v.q);
      r.hidden = !ok;
      if (ok) shown++;
    }
    count.textContent = String(shown);
    empty.hidden = shown > 0;
    if (emptyLink) emptyLink.href = `/kontakt/?text=${encodeURIComponent(v.q)}`;
    const active = KEYS.some((k) => v[k]);
    reset.hidden = !active;
    if (push) {
      const qs = new URLSearchParams();
      for (const k of KEYS) if (v[k]) qs.set(k, v[k]);
      const url = `${location.pathname}${qs.toString() ? `?${qs}` : ''}${location.hash}`;
      history.replaceState(null, '', url);
    }
  };

  let t = 0;
  form.addEventListener('input', () => {
    window.clearTimeout(t);
    t = window.setTimeout(() => apply(true), 80);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    apply(true);
  });
  reset.addEventListener('click', () => {
    form.reset();
    for (const k of KEYS) {
      const f = field(k);
      if (f) f.value = '';
    }
    apply(true);
    field('q')?.focus();
  });
  apply(false);

  // A hash to a specific catalog row should always show that row.
  const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
  if (target?.hidden) {
    form.reset();
    apply(true);
  }
  target?.scrollIntoView({ block: 'center' });
}
