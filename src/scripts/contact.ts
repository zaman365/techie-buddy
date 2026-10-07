// Contact form: prefill from the URL, validate, build a mailto link or copy the text.
// Nothing leaves the browser except through the visitor's own e-mail program.
const form = document.querySelector<HTMLFormElement>('[data-contact]');
if (form) {
  const data = JSON.parse(form.querySelector('[data-contact-data]')?.textContent ?? '{}') as {
    services: Record<string, string>;
    catalog: Record<string, string>;
    special: Record<string, string>;
    email: string;
    lang: 'de' | 'en';
    msg: { error: string; opened: string; copied: string };
  };
  const f = form.elements as unknown as Record<string, HTMLInputElement>;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const params = new URLSearchParams(location.search);
  const en = data.lang === 'en';

  const leistung = params.get('leistung');
  const katalog = params.get('katalog');
  const text = params.get('text');
  if (leistung) f.service.value = data.services[leistung] ?? data.special[leistung] ?? '';
  else if (katalog) f.service.value = data.catalog[katalog] ?? '';
  if (text) f.message.value = text.slice(0, 2000);
  const question = params.get('art') === 'frage';

  const setStatus = (msg: string, withMail = false) => {
    status.replaceChildren(msg);
    if (withMail) {
      const a = document.createElement('a');
      a.href = `mailto:${data.email}`;
      a.textContent = data.email;
      status.append(' ', a, '.');
    }
  };

  const validate = (): boolean => {
    const missing: HTMLInputElement[] = [];
    for (const k of ['name', 'email', 'message']) if (!f[k].value.trim()) missing.push(f[k]);
    if (f.email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value.trim())) missing.push(f.email);
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
    if (missing.length) {
      missing.forEach((el) => el.setAttribute('aria-invalid', 'true'));
      missing[0].focus();
      setStatus(data.msg.error);
      return false;
    }
    return true;
  };

  const compose = () => {
    const service = f.service.value.trim();
    const subject = `${question ? (en ? 'Question' : 'Frage') : en ? 'Request' : 'Anfrage'}: ${service || (en ? 'Other problem' : 'Anderes Problem')}`;
    const lines = [
      f.message.value.trim(),
      '',
      '—',
      `Name: ${f.name.value.trim()}`,
      `E-Mail: ${f.email.value.trim()}`,
      `${en ? 'Service' : 'Leistung'}: ${service || '-'}`,
      f.url.value.trim() ? `${en ? 'Website' : 'Website/Shop'}: ${f.url.value.trim()}` : '',
      `${en ? 'Language' : 'Sprache'}: ${f.language.value}`
    ].filter((l, i, arr) => l !== '' || arr[i - 1] !== '');
    return { subject, body: lines.join('\n') };
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { subject, body } = compose();
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(data.msg.opened, true);
  });

  form.querySelector('[data-copy]')?.addEventListener('click', async () => {
    if (!validate()) return;
    const { subject, body } = compose();
    const full = `${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(full);
      setStatus(data.msg.copied, true);
    } catch {
      // Clipboard blocked: show the full text in a read-only field, selected, so it can be copied by hand.
      let out = form.querySelector<HTMLTextAreaElement>('[data-copy-out]');
      if (!out) {
        out = document.createElement('textarea');
        out.className = 'textarea';
        out.readOnly = true;
        out.rows = 8;
        out.dataset.copyOut = '';
        out.setAttribute('aria-label', en ? 'Text to copy' : 'Text zum Kopieren');
        status.after(out);
      }
      out.value = full;
      out.focus();
      out.select();
      setStatus(en ? 'Copying is blocked in this browser. The text below is selected; copy it by hand.' : 'Kopieren ist in diesem Browser gesperrt. Der Text unten ist markiert; kopiere ihn von Hand.');
    }
  });
}
