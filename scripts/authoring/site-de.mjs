// Public site data in German. Rewritten from site.json; internal fields are not carried over.
export const principles = [
  { id: "festpreis", title: "Festpreis statt Angebotsrunde", text: "Jede Leistung steht mit Preis auf der Website. Du weißt vor dem Start, was es kostet. Kein Erstgespräch, kein Stundenzettel." },
  { id: "lieferzeit", title: "Lieferzeit auf jedem Angebot", text: "Die Lieferzeit steht neben dem Preis, wie auf einem Versandetikett. Sie startet, sobald Zahlung, Zugänge und Unterlagen vollständig sind." },
  { id: "vorkasse", title: "Zahlung vorab per Link", text: "Du zahlst per Zahlungslink, dann läuft die Uhr. Keine Rechnungsschleifen, kein Nachverhandeln über den Umfang." },
  { id: "bericht", title: "Ein Bericht, den du weitergeben kannst", text: "Am Ende steht ein Nachweis: Vorher-Nachher-Belege, Checkliste und ein kurzer Bericht für dich, dein Team oder deine Steuerberatung." }
];

export const filter = [
  { q: "Ist es akut?", a: "Etwas ist kaputt, gesperrt, verloren oder gesetzlich fällig. Nicht bloß „wäre schön“." },
  { q: "Ist es zu klein für eine Agentur?", a: "Unter etwa 1.000 € antwortet kaum eine Agentur. Genau dort fangen wir an." },
  { q: "Lässt es sich in Stunden lösen?", a: "Klarer Umfang, schnelle Lieferung, fester Preis." },
  { q: "Passiert es immer wieder?", a: "Dasselbe Problem trifft viele. Ein erprobter Ablauf löst es zuverlässig für alle." }
];

export const process = [
  { step: 1, title: "Problem schildern", text: "Über das Formular oder per E-Mail. Ein paar Sätze reichen, Screenshots helfen." },
  { step: 2, title: "Festpreis und Zahlungslink", text: "Schriftlich: was enthalten ist, was nicht, Lieferzeit und Preis. Dazu ein Zahlungslink." },
  { step: 3, title: "Bezahlen, die Uhr läuft", text: "Die Lieferzeit startet, sobald Zahlung, Zugänge und Unterlagen vollständig sind." },
  { step: 4, title: "Lösung mit Nachweis", text: "Vorher-Nachher-Belege, Checkliste, kurzer Bericht, Übergabe aller Zugänge und ein Tipp zur Vorbeugung." }
];

export const notDoing = [
  { title: "Keine Stundenabrechnung", text: "Du kaufst ein gelöstes Problem, keine Zeit." },
  { title: "Keine Rechtsberatung", text: "Wir setzen technisch und organisatorisch um. Dein Anwalt sagt, was. Wir bauen, wie." },
  { title: "Kein Lock-in", text: "Zugänge, Domains und Konten laufen auf dich. Du kannst jederzeit gehen." },
  { title: "Keine falschen Versprechen", text: "Ob Amazon, Google oder eine Förderstelle zustimmt, entscheiden sie. Wir liefern die Arbeit vollständig und belegt." }
];

export const packages = [
  { id: "starter", name: "Starter", for: "Für kleine Unternehmen und Selbständige", price: 999, featured: false,
    features: ["5-seitige Website", "Responsive Design", "Kontaktformular", "Basis-SEO", "1 Monat Support"] },
  { id: "business", name: "Business", for: "Für wachsende Unternehmen", price: 2499, featured: true,
    features: ["10-seitige Website", "Individuelles Design", "CMS-Integration", "SEO-Optimierung", "Analytics-Einrichtung", "3 Monate Support"] },
  { id: "e-commerce", name: "E-Commerce", for: "Für professionelle Online-Shops", price: 4999, featured: false,
    features: ["Shopify-Store-Einrichtung", "Bis zu 50 Produkte", "Zahlungsanbieter", "Versandkonfiguration", "Mobile Optimierung", "6 Monate Support"] }
];

export const pillars = [
  { name: "Webentwicklung", icon: "monitor-smartphone", text: "Schnelle, moderne Websites, die dein Angebot klar zeigen und aus Besuchern Anfragen machen.", features: ["Responsive Design", "SEO-optimiert", "CMS-Integration", "Wartung und Support"] },
  { name: "Mobile Apps", icon: "smartphone", text: "Apps für iOS und Android, nativ oder plattformübergreifend. Preis nach Umfang, als individuelles Angebot.", features: ["iOS und Android", "Cross-Platform", "UI/UX-Design", "Store-Veröffentlichung"] },
  { name: "E-Commerce", icon: "shopping-bag", text: "Online-Shops mit Shopify, WooCommerce oder individuell, gebaut auf Conversion.", features: ["Shopify-Einrichtung", "Zahlungsanbieter", "Amazon-Storefront", "Conversion-Optimierung"] },
  { name: "IT-Support", icon: "wrench", text: "Schnelle Hilfe bei technischen Problemen, damit dein Betrieb weiterläuft.", features: ["Fehlerbehebung", "Performance-Optimierung", "Sicherheitsupdates", "Notfall-Hilfe, Start am selben Werktag möglich"] }
];

export const recurring = [
  { id: "compliance-wache", name: "Compliance-Wache", price: "99 €/Monat", text: "Monatliches Monitoring von Datenschutz, Barrierefreiheit und Marktplatz-Pflichten mit klarem Eskalationsweg.", service: null },
  { id: "no-show", name: "No-Show-Killer", price: "299 € + 29 €/Monat", text: "Automatische Terminerinnerungen per SMS oder WhatsApp.", service: "40" },
  { id: "ki-bot", name: "KI-Kundenservice-Bot", price: "599 € + 49 €/Monat", text: "Einrichtung, danach Pflege und Feinabstimmung.", service: "17" },
  { id: "eltern", name: "Eltern-Technik-Abo", price: "49 €/Monat", text: "Ein Hausbesuch pro Monat plus Fernhilfe, gebucht von den erwachsenen Kindern.", service: "73", b2c: true },
  { id: "agentur", name: "Recruiting-Agentur-Betreuung", price: "ab 1.500 € + Betreuung", text: "Portal, Dokumenten-Workflow und Dashboards je Agentur.", service: "89" },
  { id: "ppc", name: "Monatlicher PPC-Check", price: "auf Anfrage", text: "Das Amazon-PPC-Audit als monatliche Prüfung.", service: "15" },
  { id: "wartung", name: "Wartung nach Projekten", price: "1, 3 oder 6 Monate inklusive", text: "In den Projektpaketen enthalten, danach als Wartungsvertrag.", service: null }
];

export const proof = [
  { value: "91", label: "Amazon-Produkte GPSR-konform gemacht" },
  { value: "Otto", label: "Marktplatz-Onboarding selbst durchlaufen" },
  { value: "TikTok Shop", label: "eigene Modemarke live" },
  { value: "Consent", label: "Meta-Pixel-Fehler vor der Einwilligung im eigenen Shop gefunden und behoben" },
  { value: "A+", label: "eigene Methode für A+ Content: Passform, Größen, Retourengründe" },
  { value: "Headless", label: "Speed- und Conversion-Audit eines Shopify-Hydrogen-Shops" }
];

export const guardrail = "Steuer-, Rechts-, Medizin-, Förder- und andere regulierte Themen setzen wir technisch oder organisatorisch um. Das ist keine Rechts-, Steuer- oder Fachberatung. Entscheidungen triffst du; wo nötig, prüft eine qualifizierte Fachperson wie Anwältin, Steuerberater oder Förderstelle.";

export const asOf = { iso: "2026-10-06", label: "6. Oktober 2026" };

// Pflichten-Kalender. Dates checked against the fact checks of 6 Oct 2026.
export const deadlines = [
  { id: "zeiterfassung", date: "2022-09-13", dateLabel: "seit 13.09.2022", status: "gilt",
    title: "Arbeitszeiterfassung", who: "Alle Arbeitgeber mit Beschäftigten.",
    what: "Beginn, Ende und Dauer der täglichen Arbeitszeit systematisch erfassen. Grundlage ist ein Beschluss des Bundesarbeitsgerichts; ein Gesetz mit Details steht noch aus.",
    service: "66", source: "Bundesarbeitsgericht, 1 ABR 22/21", url: "https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/" },
  { id: "hinschg", date: "2023-12-17", dateLabel: "seit 17.12.2023", status: "gilt",
    title: "Hinweisgeber-Meldestelle", who: "Unternehmen mit in der Regel 50 oder mehr Beschäftigten (ab 250 Beschäftigten bereits seit 02.07.2023).",
    what: "Eine interne Meldestelle einrichten, die mündliche und schriftliche Meldungen annimmt.",
    service: "67", source: "Hinweisgeberschutzgesetz (HinSchG)", url: "https://www.gesetze-im-internet.de/hinschg/" },
  { id: "e-rechnung-empfang", date: "2025-01-01", dateLabel: "seit 01.01.2025", status: "gilt",
    title: "E-Rechnungen empfangen", who: "Alle inländischen Unternehmen im B2B-Geschäft, auch Kleinunternehmer.",
    what: "E-Rechnungen im Format XRechnung oder ZUGFeRD empfangen und verarbeiten können.",
    service: "03", source: "Bundesfinanzministerium, FAQ E-Rechnung", url: "https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html" },
  { id: "kassenmeldung", date: "2025-01-01", dateLabel: "seit 01.01.2025", status: "gilt",
    title: "Kassen beim Finanzamt melden", who: "Betriebe mit elektronischen Kassen oder Aufzeichnungssystemen.",
    what: "Kassen und TSE über „Mein ELSTER“ melden. Neue Systeme innerhalb eines Monats nach Anschaffung, ältere Systeme mussten bis 31.07.2025 gemeldet sein. TSE-Zertifikate laufen nach einigen Jahren ab und müssen erneuert werden.",
    service: "68", source: "ELSTER, Mitteilung nach § 146a Abs. 4 AO", url: "https://www.elster.de/eportal/formulare-leistungen/alleformulare/aufzeichnung146a" },
  { id: "ai-act-art4", date: "2025-02-02", dateLabel: "seit 02.02.2025", status: "gilt",
    title: "KI-Kompetenz (AI Act, Art. 4)", who: "Unternehmen, die KI-Systeme beruflich einsetzen.",
    what: "Für ausreichende KI-Kompetenz der Beschäftigten sorgen, die KI-Tools nutzen.",
    service: "04", source: "EU-Kommission, KI-Rechtsrahmen", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
  { id: "bfsg", date: "2025-06-28", dateLabel: "seit 28.06.2025", status: "gilt",
    title: "Barrierefreiheit (BFSG)", who: "Anbieter erfasster Produkte und Dienstleistungen für Verbraucher, etwa Online-Shops. Kleinstunternehmen (unter 10 Beschäftigte, höchstens 2 Mio. € Umsatz oder Bilanzsumme) sind bei Dienstleistungen ausgenommen.",
    what: "Website und Shop nach den Anforderungen des BFSG barrierefrei gestalten und eine Erklärung zur Barrierefreiheit veröffentlichen.",
    service: "01", source: "Bundesfachstelle Barrierefreiheit", url: "https://www.bundesfachstelle-barrierefreiheit.de/SharedDocs/Downloads/DE/BFSG-Newsletter/bfsg-newsletter-1-2025.pdf?__blob=publicationFile" },
  { id: "eudr-gross", date: "2026-12-30", dateLabel: "30.12.2026", status: "frist",
    title: "EUDR für große und mittlere Unternehmen", who: "Große und mittlere Marktteilnehmer mit Holz, Papier, Kautschuk, Kaffee, Kakao, Soja, Palmöl oder Rindern, sowie Kleinst- und Kleinunternehmen, die schon unter die EU-Holzhandelsverordnung fallen.",
    what: "Entwaldungsfreiheit nachweisen: Geodaten und Sorgfaltspflichten für betroffene Produkte.",
    service: "07", source: "EU-Kommission, EUDR", url: "https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en" },
  { id: "e-rechnung-versand-gross", date: "2027-01-01", dateLabel: "01.01.2027", status: "frist",
    title: "E-Rechnungen versenden (Vorjahresumsatz über 800.000 €)", who: "Unternehmen mit mehr als 800.000 € Vorjahresumsatz im inländischen B2B-Geschäft.",
    what: "Rechnungen an Unternehmen als E-Rechnung ausstellen. Ausnahmen, etwa für Kleinbetragsrechnungen, bleiben bestehen.",
    service: "03", source: "Bundesfinanzministerium, FAQ E-Rechnung", url: "https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html" },
  { id: "eudr-klein", date: "2027-06-30", dateLabel: "30.06.2027", status: "frist",
    title: "EUDR für Kleinst- und Kleinunternehmen", who: "Alle übrigen Kleinst- und Kleinunternehmen mit betroffenen Produkten.",
    what: "Vereinfachte Erklärung und Nachweise für betroffene Produkte vorbereiten.",
    service: "07", source: "EU-Kommission, EUDR", url: "https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en" },
  { id: "windows-10", date: "2027-10-12", dateLabel: "12.10.2027", status: "frist",
    title: "Windows 10: Ende der kostenlosen Sicherheitsupdates für Privatgeräte", who: "Privatgeräte im kostenlosen ESU-Programm. Für Unternehmen gibt es ein eigenes, kostenpflichtiges Programm.",
    what: "Auf Windows 11 umsteigen, Gerät tauschen oder für Firmengeräte das bezahlte ESU-Programm prüfen.",
    service: "51", source: "Microsoft", url: "https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025" },
  { id: "ai-act-anhang3", date: "2027-12-02", dateLabel: "02.12.2027", status: "frist",
    title: "AI Act: Hochrisiko-KI nach Anhang III", who: "Anbieter und Betreiber von Hochrisiko-KI, etwa in Personalauswahl, Bildung oder kritischer Infrastruktur.",
    what: "Pflichten für Hochrisiko-KI nach Anhang III erfüllen. Die Frist wurde durch das KI-Omnibus-Paket verschoben.",
    service: "04", source: "EU-Kommission, KI-Rechtsrahmen", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
  { id: "e-rechnung-versand-alle", date: "2028-01-01", dateLabel: "01.01.2028", status: "frist",
    title: "E-Rechnungen versenden (alle Unternehmen)", who: "Alle Unternehmen im inländischen B2B-Geschäft. Kleinunternehmer bleiben vom Ausstellen ausgenommen.",
    what: "Die Übergangsregeln für kleinere Unternehmen enden; E-Rechnungen werden Standard.",
    service: "03", source: "Bundesfinanzministerium, FAQ E-Rechnung", url: "https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html" },
  { id: "ai-act-produkte", date: "2028-08-02", dateLabel: "02.08.2028", status: "frist",
    title: "AI Act: Hochrisiko-KI in Produkten", who: "Hersteller von Produkten mit eingebetteter Hochrisiko-KI, etwa Maschinen oder Medizinprodukte.",
    what: "Pflichten für in Produkte eingebettete Hochrisiko-KI erfüllen.",
    service: "04", source: "EU-Kommission, KI-Rechtsrahmen", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }
];

export const faq = [
  { q: "Warum Festpreis statt Stundensatz?", a: "Weil du ein gelöstes Problem kaufst, keine Zeit. Jede Leistung hat Umfang, Lieferzeit und klare Ausschlüsse. Passt dein Fall nicht, sagen wir das vor der Zahlung." },
  { q: "Wie schnell geht es wirklich?", a: "Die Lieferzeit steht auf jedem Angebot, meist 24 bis 72 Stunden. Sie startet, sobald Zahlung, Zugänge und Unterlagen vollständig sind." },
  { q: "Was, wenn Amazon oder Google trotzdem ablehnt?", a: "Wir liefern die vereinbarte Arbeit vollständig und mit Nachweis. Ob eine Plattform freischaltet, entscheidet die Plattform. Garantien, die niemand halten kann, geben wir nicht." },
  { q: "Ist das Rechtsberatung?", a: "Nein. Wir setzen technisch und organisatorisch um. Rechtliche Bewertungen gehören zu Anwältin oder Steuerberater. Dein Anwalt sagt, was. Wir bauen, wie." },
  { q: "Brauche ich einen Termin?", a: "Für Festpreis-Leistungen nicht. Für Projekte ab 999 € und Förderprojekte gibt es ein kostenloses Erstgespräch." },
  { q: "Wer hat danach meine Zugänge?", a: "Du. Wir arbeiten mit Zugängen, die du vergibst und jederzeit entziehen kannst, und übergeben alles dokumentiert." },
  { q: "In welchen Sprachen kann ich mich melden?", a: "Deutsch, Englisch und Bengali." }
];
