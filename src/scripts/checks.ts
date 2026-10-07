// Self-checks (BFSG, Förderung): step through the questions, evaluate in the browser.
// Nothing is sent or stored.
type Answers = Record<string, string>;
interface Outcome {
  tone: 'ok' | 'warn' | 'info';
  title: string;
  text: string;
  cta: { label: string; href: string; primary?: boolean }[];
}

const CAVEAT = 'Orientierung, keine Rechtsberatung. Verbindlich klärt das nur eine Anwältin oder ein Anwalt.';

function bfsg(a: Answers, links: Record<string, string>): Outcome {
  const audit = { label: 'BFSG-Audit anfragen', href: links['01'], primary: true };
  if (a.b2c === 'nein')
    return {
      tone: 'ok',
      title: 'Wahrscheinlich nicht betroffen',
      text: 'Das BFSG schützt Verbraucherinnen und Verbraucher. Wenn du ausschließlich an Unternehmen verkaufst, fällt dein Angebot in der Regel nicht darunter. Barrierefreiheit bleibt trotzdem ein Qualitätsmerkmal.',
      cta: [{ label: 'Alle Compliance-Leistungen', href: '/leistungen/compliance/' }]
    };
  if (a.produkte === 'ja')
    return {
      tone: 'warn',
      title: 'Wahrscheinlich betroffen',
      text: 'Für erfasste Produkte wie Computer, Smartphones, E-Book-Reader oder Selbstbedienungsterminals gelten Pflichten auch für kleine Händler. Die Ausnahme für Kleinstunternehmen betrifft nur Dienstleistungen.',
      cta: [audit]
    };
  if (a.online === 'nein')
    return {
      tone: 'ok',
      title: 'Wahrscheinlich nicht erfasst',
      text: 'Ohne Online-Vertragsabschluss mit Verbrauchern (etwa eine reine Info-Website) fällt deine Website in der Regel nicht unter das BFSG. Ändert sich das, etwa durch einen Shop oder eine Buchungsfunktion, lohnt ein neuer Blick.',
      cta: [{ label: 'Website-Leistungen ansehen', href: '/leistungen/website-shop/' }]
    };
  const micro = a.mitarbeitende === 'unter10' && a.umsatz === 'bis2';
  if (micro)
    return {
      tone: 'ok',
      title: 'Wahrscheinlich ausgenommen',
      text: 'Kleinstunternehmen mit weniger als 10 Beschäftigten und höchstens 2 Mio. € Jahresumsatz oder Bilanzsumme sind bei Dienstleistungen vom BFSG ausgenommen. Ein barrierearmer Shop bringt trotzdem mehr Kundschaft, und Wachstum kann die Lage ändern.',
      cta: [{ label: 'BFSG-Audit trotzdem ansehen', href: links['01'] }]
    };
  if (a.umsatz === 'unklar')
    return {
      tone: 'info',
      title: 'Unklar: kurz prüfen lassen',
      text: 'Ob die Ausnahme für Kleinstunternehmen greift, hängt an Umsatz oder Bilanzsumme. Im Audit klären wir die Geltung zuerst, bevor wir prüfen.',
      cta: [audit]
    };
  return {
    tone: 'warn',
    title: 'Wahrscheinlich betroffen',
    text: 'Du schließt online Verträge mit Verbrauchern und bist kein Kleinstunternehmen. Seit dem 28. Juni 2025 muss dein Angebot dann barrierefrei sein. Ein Audit zeigt, wo du stehst, mit priorisierter Fix-Liste.',
    cta: [audit]
  };
}

function foerder(a: Answers, links: Record<string, string>): Outcome {
  const radar = { label: 'Fördermittel-Check anfragen', href: links['63'] };
  if (a.sachsen === 'nein')
    return {
      tone: 'info',
      title: 'SAB-Förderung passt nicht',
      text: 'Die Digitalisierungsförderung der SAB gilt für Betriebe in Sachsen. Für andere Bundesländer gibt es eigene Programme; der Fördermittel-Check findet, was gerade offen ist.',
      cta: [{ ...radar, primary: true }]
    };
  if (a.begonnen === 'ja')
    return {
      tone: 'warn',
      title: 'Wahrscheinlich zu spät für diesen Antrag',
      text: 'Der Antrag muss vor Projektstart gestellt werden. Wenn schon Aufträge vergeben sind, ist dieses Vorhaben in der Regel nicht mehr förderfähig. Für ein nächstes Projekt planen wir den Antrag von Anfang an mit.',
      cta: [{ ...radar, primary: true }]
    };
  if (a.groesse === '50plus')
    return {
      tone: 'info',
      title: 'Programm prüfen',
      text: 'Die Förderung richtet sich an kleine Unternehmen. Bei deiner Größe kommen eher andere Programme in Frage.',
      cta: [{ ...radar, primary: true }]
    };
  const notes: string[] = [];
  if (a.budget === 'unter5') notes.push('Unsere förderfähigen Projektbündel liegen meist bei 5.000 bis 10.000 €; kleinere Vorhaben lassen sich oft sinnvoll bündeln.');
  if (a.erstes !== 'ja') notes.push('Ob ein früheres gefördertes Projekt die Förderung einschränkt, prüfen wir im Einzelfall.');
  return {
    tone: notes.length ? 'info' : 'ok',
    title: notes.length ? 'Gute Ausgangslage, mit offenen Punkten' : 'Gute Ausgangslage',
    text: `Dein Vorhaben passt in das Raster der SAB-Förderung für erste Digitalisierungsprojekte: bis zu 60 % für berechtigte Vorhaben. ${notes.join(' ')} Programm, förderfähige Kosten und Bedingungen prüfen wir vor dem Antrag neu.`,
    cta: [
      { label: 'Förderung prüfen lassen', href: links['62'], primary: true },
      { label: 'Mehr zur Förderung', href: '/foerderung/' }
    ]
  };
}

document.querySelectorAll<HTMLFormElement>('[data-check]').forEach((form) => {
  const kind = form.dataset.check as 'bfsg' | 'foerder';
  const links: Record<string, string> = JSON.parse(form.dataset.links ?? '{}');
  const steps = [...form.querySelectorAll<HTMLFieldSetElement>('fieldset[data-step]')];
  const prev = form.querySelector<HTMLButtonElement>('[data-prev]')!;
  const next = form.querySelector<HTMLButtonElement>('[data-next]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const error = form.querySelector<HTMLElement>('[data-error]')!;
  const result = form.querySelector<HTMLElement>('[data-result]')!;
  const progress = form.querySelector<HTMLElement>('[data-progress]');
  let i = 0;

  const show = (n: number, focus = true) => {
    i = n;
    steps.forEach((s, j) => (s.hidden = j !== i));
    prev.hidden = i === 0;
    next.hidden = i === steps.length - 1;
    submit.hidden = i !== steps.length - 1;
    error.hidden = true;
    if (progress) progress.style.width = `${(i / steps.length) * 100}%`;
    if (focus) steps[i].querySelector<HTMLInputElement>('input')?.focus();
  };
  const answered = () => Boolean(steps[i].querySelector('input:checked'));

  next.addEventListener('click', () => {
    if (!answered()) {
      error.hidden = false;
      return;
    }
    show(i + 1);
  });
  prev.addEventListener('click', () => show(i - 1));
  form.addEventListener('change', () => (error.hidden = true));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!answered()) {
      error.hidden = false;
      return;
    }
    const a: Answers = Object.fromEntries(new FormData(form).entries()) as Answers;
    const out = kind === 'bfsg' ? bfsg(a, links) : foerder(a, links);
    result.replaceChildren();
    const box = document.createElement('div');
    box.className = `result result--${out.tone}`;
    const h = document.createElement('h2');
    h.className = 'result__title';
    h.textContent = out.title;
    const p = document.createElement('p');
    p.className = 'result__text';
    p.textContent = out.text;
    const cav = document.createElement('p');
    cav.className = 'meta';
    cav.textContent = CAVEAT;
    const ctas = document.createElement('div');
    ctas.className = 'cluster';
    for (const c of out.cta) {
      const a2 = document.createElement('a');
      a2.className = `btn ${c.primary ? 'btn--primary' : 'btn--secondary'}`;
      a2.href = c.href;
      a2.textContent = c.label;
      ctas.append(a2);
    }
    const again = document.createElement('button');
    again.type = 'button';
    again.className = 'btn btn--ghost';
    again.textContent = 'Neu starten';
    again.addEventListener('click', () => {
      form.reset();
      result.hidden = true;
      show(0);
    });
    ctas.append(again);
    box.append(h, p, cav, ctas);
    result.append(box);
    result.hidden = false;
    steps.forEach((s) => (s.hidden = true));
    prev.hidden = next.hidden = submit.hidden = true;
    if (progress) progress.style.width = '100%';
    result.focus();
  });

  show(0, false);
});
