// Sortable tables: <th aria-sort> with a button; rows carry data-sort-<key> values.
document.querySelectorAll<HTMLTableElement>('[data-sortable]').forEach((table) => {
  const tbody = table.tBodies[0];
  const status = document.querySelector<HTMLElement>(`[data-sort-status="${table.id}"]`);
  table.querySelectorAll<HTMLButtonElement>('[data-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.sort!;
      const th = btn.closest('th')!;
      const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
      table.querySelectorAll('th[aria-sort]').forEach((h) => h.setAttribute('aria-sort', 'none'));
      th.setAttribute('aria-sort', dir);
      const numeric = btn.dataset.type === 'number';
      const rows = [...tbody.rows];
      rows.sort((a, b) => {
        const av = a.dataset[`sort${key[0].toUpperCase()}${key.slice(1)}`] ?? '';
        const bv = b.dataset[`sort${key[0].toUpperCase()}${key.slice(1)}`] ?? '';
        const c = numeric ? Number(av) - Number(bv) : av.localeCompare(bv, 'de');
        return dir === 'ascending' ? c : -c;
      });
      tbody.append(...rows);
      if (status) status.textContent = `Sortiert nach ${btn.textContent?.trim()}, ${dir === 'ascending' ? 'aufsteigend' : 'absteigend'}`;
    });
  });
});
