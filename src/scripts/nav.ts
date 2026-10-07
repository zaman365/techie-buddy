// Navigation: compacting pill, mega menus (disclosure pattern), mobile sheet.
const header = document.querySelector<HTMLElement>('[data-nav]');
const root = document.documentElement;

// Compact on scroll past 80 px.
let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    root.toggleAttribute('data-scrolled', window.scrollY > 80);
    ticking = false;
  });
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Platform-specific shortcut hint.
if (!/Mac|iPhone|iPad/.test(navigator.platform)) {
  document.querySelectorAll<HTMLElement>('[data-kbd]').forEach((k) => (k.textContent = 'Strg K'));
}

if (header) {
  const triggers = [...header.querySelectorAll<HTMLButtonElement>('[data-menu]')];
  let openId: string | null = null;
  let hoverTimer = 0;

  const panel = (id: string) => document.getElementById(id);

  const close = (focusTrigger = false) => {
    if (!openId) return;
    const t = triggers.find((b) => b.dataset.menu === openId);
    panel(openId)?.setAttribute('hidden', '');
    t?.setAttribute('aria-expanded', 'false');
    root.removeAttribute('data-menu-open');
    openId = null;
    if (focusTrigger) t?.focus();
  };

  const open = (id: string) => {
    if (openId === id) return;
    close();
    const t = triggers.find((b) => b.dataset.menu === id);
    panel(id)?.removeAttribute('hidden');
    t?.setAttribute('aria-expanded', 'true');
    root.setAttribute('data-menu-open', '');
    openId = id;
  };

  for (const t of triggers) {
    const id = t.dataset.menu!;
    t.addEventListener('click', () => (openId === id ? close() : open(id)));
  }

  // Hover intent on real pointers: open after 120 ms, close after leaving for 200 ms.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const zones = [...triggers, ...triggers.map((t) => panel(t.dataset.menu!)).filter(Boolean)] as HTMLElement[];
    for (const z of zones) {
      z.addEventListener('mouseenter', () => {
        window.clearTimeout(hoverTimer);
        const id = z.dataset.menu ?? z.id;
        hoverTimer = window.setTimeout(() => open(id), openId ? 0 : 120);
      });
      z.addEventListener('mouseleave', () => {
        window.clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(() => close(), 200);
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && openId) {
      e.preventDefault();
      close(true);
    }
  });
  document.addEventListener('click', (e) => {
    if (openId && !header.contains(e.target as Node)) close();
  });
  header.addEventListener('focusout', (e) => {
    const next = e.relatedTarget as Node | null;
    if (openId && next && !header.contains(next)) close();
  });
  // Closing on navigation inside the panel keeps the bfcache state clean.
  header.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('[data-panel] a')) close();
  });
}

// Mobile sheet (<dialog>): modal, Esc closes natively.
const sheet = document.querySelector<HTMLDialogElement>('[data-sheet]');
const sheetOpeners = document.querySelectorAll<HTMLElement>('[data-sheet-open]');
if (sheet) {
  let opener: HTMLElement | null = null;
  sheetOpeners.forEach((b) =>
    b.addEventListener('click', () => {
      opener = b;
      sheet.showModal();
      b.setAttribute('aria-expanded', 'true');
    })
  );
  sheet.addEventListener('close', () => {
    sheetOpeners.forEach((b) => b.setAttribute('aria-expanded', 'false'));
    opener?.focus();
  });
  sheet.querySelector('[data-sheet-close]')?.addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) sheet.close();
  });
  sheetOpeners.forEach((b) => b.setAttribute('aria-expanded', 'false'));
}
