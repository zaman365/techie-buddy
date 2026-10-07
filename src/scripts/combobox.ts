// Combobox controller shared by the ⌘K palette and the hero command bar.
// ARIA: input[role=combobox] + aria-activedescendant, results[role=listbox] with grouped options.
import { loadIndex, search, group, suggestions, isUrgent, type Entry, type Grouped } from './search.ts';

const KIND_LABEL: Record<Entry['k'], string> = {
  service: 'Leistung',
  catalog: 'Katalog',
  sector: 'Branche',
  page: 'Seite'
};

let uid = 0;
const recent: string[] = []; // in memory only, never stored

export interface ComboboxOptions {
  input: HTMLInputElement;
  list: HTMLElement;
  status?: HTMLElement | null;
  /** Called to show or hide the list (hero bar uses a floating panel). */
  onToggle?: (open: boolean) => void;
  /** Show suggestions when the query is empty. */
  suggest?: boolean;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text) node.textContent = text;
  return node;
}

function priceLabel(price: string, time?: string): HTMLElement {
  const pl = el('span', 'pl pl--s');
  const p = el('span', 'pl__price');
  p.append(el('span', 'sr-only', 'Preis: '), price);
  pl.append(p);
  if (time) {
    const t = el('span', 'pl__time');
    t.append(el('span', 'sr-only', ', Lieferzeit: '), time);
    pl.append(t);
  }
  return pl;
}

export class Combobox {
  private opts: ComboboxOptions;
  private options: HTMLElement[] = [];
  private active = -1;
  private prefix = `cb${++uid}`;
  private timer = 0;

  constructor(opts: ComboboxOptions) {
    this.opts = opts;
    const { input } = opts;
    input.addEventListener('input', () => this.queue());
    input.addEventListener('keydown', (e) => this.onKey(e));
    input.addEventListener('focus', () => this.prime(), { once: true });
    opts.list.addEventListener('mousemove', (e) => {
      const opt = (e.target as HTMLElement).closest<HTMLElement>('[role=option]');
      if (opt) this.setActive(this.options.indexOf(opt), false);
    });
    opts.list.addEventListener('click', (e) => {
      const opt = (e.target as HTMLElement).closest<HTMLElement>('[data-fill]');
      if (opt) {
        e.preventDefault();
        input.value = opt.dataset.fill ?? '';
        input.focus();
        this.queue();
      }
    });
  }

  /** Load the index on first focus so the first keystroke is instant. */
  prime(): void {
    loadIndex()
      .then(() => {
        if (!this.opts.input.value && this.opts.suggest) this.render();
      })
      .catch(() => this.renderError());
  }

  reset(): void {
    this.opts.input.value = '';
    this.render();
  }

  private queue(): void {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => this.render(), 60);
  }

  async render(): Promise<void> {
    const { input, list, status } = this.opts;
    const q = input.value.trim();
    let index;
    try {
      index = await loadIndex();
    } catch {
      this.renderError();
      return;
    }
    list.replaceChildren();
    this.options = [];
    this.active = -1;
    input.removeAttribute('aria-activedescendant');

    if (!q) {
      if (!this.opts.suggest) {
        this.opts.onToggle?.(false);
        return;
      }
      const groups = suggestions(index);
      if (recent.length) {
        const g = el('div', 'sr-group');
        g.setAttribute('role', 'group');
        const id = `${this.prefix}-recent`;
        const label = el('div', 'sr-group__label', 'Zuletzt gesucht');
        label.id = id;
        g.setAttribute('aria-labelledby', id);
        g.append(label);
        for (const r of recent) {
          const opt = el('div', 'sr-opt');
          opt.setAttribute('role', 'option');
          opt.id = `${this.prefix}-o${this.options.length}`;
          opt.dataset.fill = r;
          opt.append(el('span', 'sr-opt__title', r));
          g.append(opt);
          this.options.push(opt);
        }
        list.append(g);
      }
      this.renderGroups(groups);
      if (status) status.textContent = '';
      this.opts.onToggle?.(true);
      return;
    }

    const groups = group(search(index, q), isUrgent(q));
    const count = groups.reduce((n, g) => n + g.results.length, 0);
    if (!count) {
      const empty = el('div', 'sr-empty');
      const strong = el('strong', '', 'Nichts gefunden.');
      const p = el('p', '', 'Schildere dein Problem, wir haben vermutlich trotzdem eine Lösung.');
      const a = el('a', 'btn btn--primary btn--sm', 'Problem schildern');
      a.href = `/kontakt/?text=${encodeURIComponent(q)}`;
      a.setAttribute('role', 'option');
      a.id = `${this.prefix}-o0`;
      this.options.push(a);
      empty.append(strong, p, a);
      list.append(empty);
    } else {
      this.renderGroups(groups);
    }
    if (status) status.textContent = count ? `${count} Ergebnisse` : 'Keine Ergebnisse';
    this.opts.onToggle?.(true);
    if (this.options.length) this.setActive(0, false);
  }

  private renderGroups(groups: Grouped[]): void {
    for (const g of groups) {
      if (!g.results.length) continue;
      const wrap = el('div', 'sr-group');
      wrap.setAttribute('role', 'group');
      const id = `${this.prefix}-g-${g.id}`;
      const label = el('div', 'sr-group__label', g.label);
      label.id = id;
      wrap.setAttribute('aria-labelledby', id);
      wrap.append(label);
      for (const e of g.results) wrap.append(this.option(e));
      this.opts.list.append(wrap);
    }
  }

  private option(e: Entry): HTMLElement {
    const a = el('a', 'sr-opt');
    a.href = e.u;
    a.tabIndex = -1;
    a.setAttribute('role', 'option');
    a.id = `${this.prefix}-o${this.options.length}`;
    const title = el('span', 'sr-opt__title');
    if (e.n) {
      const dot = el('span', 'dot-danger');
      dot.setAttribute('aria-hidden', 'true');
      title.append(dot);
    }
    title.append(e.t);
    const meta = el('span', 'sr-opt__meta', `${KIND_LABEL[e.k]} · ${e.m}`);
    a.append(title, meta);
    if (e.p) a.append(priceLabel(e.p, e.d));
    a.addEventListener('click', () => this.remember());
    this.options.push(a);
    return a;
  }

  private renderError(): void {
    const { list } = this.opts;
    list.replaceChildren();
    const box = el('div', 'sr-empty');
    box.append(el('strong', '', 'Die Suche ist gerade nicht erreichbar.'));
    const a = el('a', 'link-arrow', 'Alle Leistungen ansehen');
    a.href = '/alle-leistungen/';
    box.append(a);
    list.append(box);
    this.opts.onToggle?.(true);
  }

  private setActive(i: number, scroll = true): void {
    if (!this.options.length) return;
    const n = this.options.length;
    this.active = ((i % n) + n) % n;
    this.options.forEach((o, j) => o.setAttribute('aria-selected', String(j === this.active)));
    const cur = this.options[this.active];
    this.opts.input.setAttribute('aria-activedescendant', cur.id);
    if (scroll) cur.scrollIntoView({ block: 'nearest' });
  }

  private remember(): void {
    const q = this.opts.input.value.trim();
    if (!q) return;
    const i = recent.indexOf(q);
    if (i >= 0) recent.splice(i, 1);
    recent.unshift(q);
    recent.length = Math.min(recent.length, 4);
  }

  private onKey(e: KeyboardEvent): void {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.setActive(this.active + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.setActive(this.active - 1);
    } else if (e.key === 'Home' && e.ctrlKey) {
      this.setActive(0);
    } else if (e.key === 'Enter') {
      const cur = this.options[this.active] ?? this.options[0];
      if (!cur) {
        const q = this.opts.input.value.trim();
        if (q) window.location.href = `/kontakt/?text=${encodeURIComponent(q)}`;
        return;
      }
      e.preventDefault();
      if (cur.dataset.fill !== undefined) {
        cur.click();
        return;
      }
      this.remember();
      const href = cur.getAttribute('href');
      if (href) window.location.href = href;
    }
  }
}
