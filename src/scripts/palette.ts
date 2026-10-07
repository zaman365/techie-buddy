// ⌘K / Strg+K / "/" opens the command palette from anywhere.
import { Combobox } from './combobox.ts';

const dialog = document.querySelector<HTMLDialogElement>('[data-palette]');
if (dialog) {
  const input = dialog.querySelector<HTMLInputElement>('[data-search-input]')!;
  const list = dialog.querySelector<HTMLElement>('[data-search-results]')!;
  const status = dialog.querySelector<HTMLElement>('[data-search-status]');
  const cb = new Combobox({ input, list, status, suggest: true });
  let opener: Element | null = null;

  const openPalette = (prefill = '') => {
    if (dialog.open) return;
    opener = document.activeElement;
    document.querySelector<HTMLDialogElement>('[data-sheet]')?.close();
    dialog.showModal();
    input.value = prefill;
    input.focus();
    cb.prime();
    void cb.render();
  };
  (window as unknown as { tbOpenPalette: typeof openPalette }).tbOpenPalette = openPalette;

  document.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest('[data-palette-open]');
    if (t) {
      e.preventDefault();
      openPalette();
    }
  });
  dialog.querySelector('[data-palette-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (opener instanceof HTMLElement) opener.focus();
  });

  document.addEventListener('keydown', (e) => {
    const target = e.target as HTMLElement;
    const typing = target.closest('input, textarea, select, [contenteditable]');
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (dialog.open) dialog.close();
      else openPalette();
    } else if (e.key === '/' && !typing && !dialog.open) {
      e.preventDefault();
      openPalette();
    }
  });
}
