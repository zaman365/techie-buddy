// Hero command bar: live results under the input, chips, and the cycling placeholder.
import { Combobox } from './combobox.ts';

const bar = document.querySelector<HTMLElement>('[data-commandbar]');
if (bar) {
  const input = bar.querySelector<HTMLInputElement>('[data-cbar-input]')!;
  const panel = bar.querySelector<HTMLElement>('[data-cbar-panel]')!;
  const list = bar.querySelector<HTMLElement>('[data-cbar-results]')!;
  const status = bar.querySelector<HTMLElement>('[data-cbar-status]');

  const toggle = (open: boolean) => {
    panel.hidden = !open;
    input.setAttribute('aria-expanded', String(open));
  };
  const cb = new Combobox({ input, list, status, suggest: false, onToggle: toggle });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) {
      e.stopPropagation();
      toggle(false);
    }
  });
  document.addEventListener('click', (e) => {
    if (!bar.contains(e.target as Node)) toggle(false);
  });
  bar.addEventListener('focusout', (e) => {
    if (!bar.contains(e.relatedTarget as Node | null)) toggle(false);
  });
  input.addEventListener('focus', () => {
    if (input.value.trim()) void cb.render();
  });

  bar.querySelectorAll<HTMLAnchorElement>('[data-chip]').forEach((chip) =>
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      input.value = chip.dataset.chip ?? '';
      input.focus();
      void cb.render();
    })
  );

  // Typewriter placeholder: types a real problem, pauses, clears, next one.
  const phrases: string[] = JSON.parse(input.dataset.placeholders ?? '[]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (phrases.length > 1 && !reduced) {
    let p = 0;
    let c = phrases[0].length;
    let deleting = true;
    let paused = false;
    const tick = () => {
      if (document.activeElement === input || input.value) {
        input.placeholder = 'Was ist kaputt?';
        paused = true;
        window.setTimeout(tick, 600);
        return;
      }
      if (paused) {
        paused = false;
        c = 0;
        deleting = false;
      }
      const word = phrases[p];
      if (!deleting) {
        c++;
        input.placeholder = word.slice(0, c);
        if (c >= word.length) {
          deleting = true;
          window.setTimeout(tick, 2200);
          return;
        }
        window.setTimeout(tick, 42);
      } else {
        c--;
        input.placeholder = word.slice(0, Math.max(c, 0));
        if (c <= 0) {
          deleting = false;
          p = (p + 1) % phrases.length;
          window.setTimeout(tick, 300);
          return;
        }
        window.setTimeout(tick, 18);
      }
    };
    window.setTimeout(tick, 2600);
  }
}
