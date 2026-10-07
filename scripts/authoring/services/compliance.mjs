// Compliance & Pflichten. German public copy, authored from services.json.
export default [
{
  id: "01",
  name: "BFSG-Audit: Barrierefreiheit prüfen, Fix-Liste erhalten",
  problem: "Das Barrierefreiheitsgesetz gilt seit Juni 2025. Betrifft das meinen Shop überhaupt?",
  summary: "Wir klären zuerst, ob das BFSG für dich gilt, und prüfen deinen Shop dann nach WCAG 2.1 AA. Du bekommst einen Bericht mit priorisierter Fix-Liste; die Umsetzung gibt es auf Wunsch zum Festpreis.",
  inc: [
    "Geltungs-Check: Fällt dein Angebot unter das BFSG?",
    "Prüfung der wichtigsten Seiten und Abläufe nach WCAG 2.1 AA",
    "Tastaturbedienung, Kontraste, Beschriftungen, Struktur und Formulare",
    "Bericht mit Barrieren nach Priorität und konkreter Fix-Liste",
    "Festpreis-Angebot für die Umsetzung, wenn du willst"
  ],
  exc: [
    "Rechtliche Bewertung deiner Pflichten (dafür ist eine Anwältin oder ein Anwalt zuständig)",
    "Umsetzung der Fixes (separat zum Festpreis nach dem Audit)",
    "Änderungen an Drittanbieter-Tools, auf die du keinen Zugriff hast"
  ],
  needs: [
    "Link zu deinem Shop oder deiner Website",
    "Beschäftigtenzahl und Jahresumsatz für den Geltungs-Check",
    "Testzugang, falls Bereiche nur nach Login erreichbar sind"
  ],
  steps: [
    "Du schilderst kurz dein Angebot, wir schätzen ein, ob das BFSG für dich gilt.",
    "Du bekommst Festpreis und Zahlungslink.",
    "Wir prüfen mit Tastatur, Screenreader und Kontrastmessung nach WCAG 2.1 AA.",
    "Du erhältst den Bericht und ein Festpreis-Angebot für die Umsetzung."
  ],
  result: "Ein weiterleitbarer Prüfbericht: Einschätzung zur Geltung, gefundene Barrieren nach Priorität und eine konkrete Fix-Liste.",
  note: "Audit-Preis, Umsetzung separat zum Festpreis",
  fact: "Das BFSG gilt seit dem 28. Juni 2025 für erfasste Produkte und Dienstleistungen. Kleinstunternehmen (weniger als 10 Beschäftigte und höchstens 2 Mio. € Jahresumsatz oder Jahresbilanzsumme) sind bei Dienstleistungen ausgenommen. Deshalb prüfen wir zuerst, ob das Gesetz für dich überhaupt gilt.",
  faq: [
    ["Gilt das BFSG auch für meinen kleinen Shop?", "Nicht unbedingt. Kleinstunternehmen sind bei Dienstleistungen ausgenommen. Unser kostenloser BFSG-Check gibt dir eine erste Orientierung; im Audit klären wir die Einschätzung für deinen Fall."],
    ["Ist das Audit eine Rechtsberatung?", "Nein. Wir prüfen und setzen technisch um. Ob und wie das Gesetz für dich gilt, kann verbindlich nur eine Anwältin oder ein Anwalt beurteilen."],
    ["Was kostet die Umsetzung?", "Das hängt von den gefundenen Barrieren ab. Nach dem Audit bekommst du einen Festpreis für die Umsetzung, bevor irgendetwas beginnt."]
  ],
  rel: ["05", "21", "23"],
  guard: true
},
{
  id: "03",
  name: "E-Rechnung einrichten: empfangen und senden",
  problem: "Mein Steuerberater sagt, ich muss E-Rechnungen empfangen können. Wie geht das technisch?",
  summary: "Wir richten den Empfang von XRechnung und ZUGFeRD ein, wählen mit dir das passende Tool und bauen einen Ablauf, der zu deiner Buchhaltung passt. Auch für das spätere Versenden wirst du vorbereitet.",
  inc: [
    "Bestandsaufnahme: Wie kommen Rechnungen heute rein und raus?",
    "Empfang von XRechnung und ZUGFeRD einrichten",
    "Auswahl eines passenden Tools für deine Größe",
    "Ablauf für Prüfung, Weitergabe und Archivierung",
    "Kurze Anleitung für dein Team"
  ],
  exc: [
    "Steuerliche Beratung (bleibt bei deiner Steuerberatung)",
    "Lizenzkosten für Software",
    "Buchhaltung oder Belegerfassung"
  ],
  needs: [
    "Zugang zu deinem Rechnungs- oder Buchhaltungsprogramm",
    "Die E-Mail-Adresse, an die Rechnungen gehen sollen",
    "Kontakt zu deiner Steuerberatung, falls Abstimmung nötig ist"
  ],
  steps: [
    "Du schickst uns, wie Rechnungen heute bei dir laufen.",
    "Festpreis und Zahlungslink.",
    "Wir richten Empfang, Tool und Ablauf ein und testen mit Beispielrechnungen.",
    "Übergabe mit Anleitung und Check für das spätere Versenden."
  ],
  result: "Du kannst E-Rechnungen empfangen und lesen, der Ablauf ist dokumentiert und dein Team weiß, was zu tun ist.",
  note: "Festpreis, zzgl. eventueller Software-Lizenzen",
  fact: "Seit 2025 müssen inländische Unternehmen E-Rechnungen empfangen können. Für das Versenden gelten Übergangsregeln: Sie enden grundsätzlich Ende 2026, für Unternehmen mit bis zu 800.000 € Vorjahresumsatz Ende 2027. Ausnahmen, etwa für Kleinunternehmer, bleiben bestehen.",
  faq: [
    ["Muss ich schon E-Rechnungen verschicken?", "Das hängt von deinem Umsatz und den Übergangsregeln ab. Empfangen können musst du sie bereits. Was für dich beim Versenden gilt, klärt deine Steuerberatung; wir setzen es technisch um."],
    ["Reicht ein PDF per E-Mail nicht mehr?", "Für den Empfang im B2B-Bereich nicht: Eine E-Rechnung ist ein strukturiertes Datenformat wie XRechnung oder ZUGFeRD. Wir richten ein, dass du sie lesen und weiterverarbeiten kannst."],
    ["Arbeitet ihr mit DATEV?", "Ja, wir richten den Ablauf so ein, dass er zu deiner Buchhaltung passt. Für die Anbindung an DATEV Unternehmen online gibt es eine eigene Leistung."]
  ],
  rel: ["54", "66", "52"],
  guard: true
},
{
  id: "04",
  name: "KI-Kompetenz und KI-Richtlinie nach EU AI Act",
  problem: "Mein Team nutzt ChatGPT. Müssen wir dafür nach dem AI Act etwas nachweisen?",
  summary: "Wir erfassen, welche KI-Tools bei dir im Einsatz sind, schreiben eine verständliche KI-Richtlinie und schulen dein Team zwei Stunden lang. So erfüllst du die schon geltende Pflicht zur KI-Kompetenz praktisch.",
  inc: [
    "Bestandsaufnahme: welche KI-Tools wofür genutzt werden",
    "Einordnung der Anwendungen nach Risiko (technische Einschätzung)",
    "KI-Richtlinie als Dokument für dein Team",
    "2 Stunden Schulung zu KI-Kompetenz (Art. 4 AI Act)",
    "Teilnahmenachweis für deine Unterlagen"
  ],
  exc: [
    "Rechtliche Bewertung einzelner KI-Systeme",
    "Konformitätsbewertung für Hochrisiko-KI",
    "Lizenzkosten für KI-Tools"
  ],
  needs: [
    "Liste der genutzten Tools oder Zugang zu einer Ansprechperson",
    "Termin für die Teamschulung (vor Ort in Chemnitz oder online)"
  ],
  steps: [
    "Kurzer Fragebogen zu deiner KI-Nutzung.",
    "Festpreis und Zahlungslink.",
    "Bestandsaufnahme und Entwurf der Richtlinie zur Abstimmung.",
    "Schulung des Teams und Übergabe aller Unterlagen."
  ],
  result: "Eine dokumentierte KI-Bestandsaufnahme, eine Richtlinie für dein Team und ein Nachweis über die Schulung zur KI-Kompetenz.",
  note: "Festpreis inkl. 2 Stunden Schulung",
  fact: "Die Pflicht zur KI-Kompetenz (Art. 4 AI Act) gilt bereits. Die Regeln für Hochrisiko-KI wurden verschoben: für Anwendungen nach Anhang III ab dem 2. Dezember 2027, für in Produkte eingebettete Hochrisiko-KI ab dem 2. August 2028.",
  faq: [
    ["Betrifft der AI Act auch kleine Firmen?", "Wer KI-Tools beruflich einsetzt, muss für ausreichende KI-Kompetenz der Beschäftigten sorgen. Das gilt unabhängig von der Größe. Weitere Pflichten hängen davon ab, wie du KI einsetzt."],
    ["Ist die Richtlinie rechtlich geprüft?", "Nein. Wir liefern eine praktische, technische und organisatorische Grundlage. Für eine rechtliche Prüfung gibst du sie an deine Rechtsberatung weiter."],
    ["Kann die Schulung online stattfinden?", "Ja, online oder vor Ort in Chemnitz und Umgebung."]
  ],
  rel: ["20", "17", "18"],
  guard: true
},
{
  id: "05",
  name: "DSGVO-Quickcheck und Consent-Fix",
  problem: "Mein Meta-Pixel feuert vor der Einwilligung. Was ist sonst noch falsch?",
  summary: "Wir prüfen Cookie-Banner, Pixel und Tags, Google Consent Mode v2 sowie Impressum und Datenschutzerklärung auf technische Fehler. Du bekommst in 24 Stunden einen klaren Bericht; die Fixes gibt es zum Festpreis.",
  inc: [
    "Check: Welche Skripte und Pixel laden vor der Einwilligung?",
    "Prüfung von Cookie-Banner und Einwilligungskategorien",
    "Google Consent Mode v2 für Werbe- und Analysekonten",
    "Sichtprüfung: Sind Impressum und Datenschutzerklärung erreichbar und vollständig verlinkt?",
    "Bericht mit Belegen und Fix-Liste"
  ],
  exc: [
    "Erstellung oder rechtliche Prüfung von Rechtstexten",
    "Umsetzung der Fixes (separat zum Festpreis)",
    "Abmahnungs- oder Rechtsberatung"
  ],
  needs: [
    "Link zu deiner Website oder deinem Shop",
    "Zugang zum Consent-Tool oder Tag-Manager für die Umsetzung"
  ],
  steps: [
    "Du schickst den Link.",
    "Festpreis und Zahlungslink.",
    "Wir messen, was vor und nach der Einwilligung lädt, und dokumentieren es.",
    "Bericht in 24 Stunden, auf Wunsch Umsetzung zum Festpreis."
  ],
  result: "Ein Bericht mit Screenshots und Netzwerk-Belegen: was vor der Einwilligung lädt, was falsch konfiguriert ist und wie es behoben wird.",
  note: "Check-Preis, Fixes zum Festpreis nach dem Check",
  fact: null,
  faq: [
    ["Schützt mich das vor einer Abmahnung?", "Niemand kann Abmahnungen ausschließen. Der Check senkt das Risiko, weil technische Fehler gefunden und behoben werden, bevor andere sie finden."],
    ["Schreibt ihr meine Datenschutzerklärung?", "Nein. Rechtstexte kommen von deiner Rechtsberatung oder einem Generator. Wir bauen sie korrekt ein und sorgen dafür, dass die Technik dazu passt."],
    ["Woher wisst ihr, dass das funktioniert?", "Den Fehler mit dem Meta-Pixel vor der Einwilligung haben wir im eigenen Shop gefunden und behoben."]
  ],
  rel: ["01", "59", "23"],
  guard: true
},
{
  id: "06",
  name: "VerpackG und LUCID: Registrierung erledigt",
  problem: "Ich will auf Amazon verkaufen und soll mich bei LUCID registrieren. Wo fange ich an?",
  summary: "Wir erledigen mit dir die LUCID-Registrierung, richten die Systembeteiligung für deine Verpackungen ein und tragen die Daten bei deinen Marktplätzen ein. Für Neu-Seller in 24 Stunden erledigt.",
  inc: [
    "Registrierung im Verpackungsregister LUCID",
    "Einrichtung der Systembeteiligung (Lizenzierung deiner Verpackungen)",
    "Eintrag der Registrierungsnummer bei deinen Marktplätzen",
    "Kurze Übersicht der wiederkehrenden Meldungen"
  ],
  exc: [
    "Kosten der Systembeteiligung (zahlst du direkt an den Anbieter)",
    "Rechtliche Einordnung von Sonderfällen",
    "Laufende Mengenmeldungen (auf Wunsch als eigene Leistung)"
  ],
  needs: [
    "Firmendaten und Ansprechperson",
    "Geschätzte Verpackungsmengen nach Material",
    "Zugang zu deinem Seller- oder Marktplatzkonto"
  ],
  steps: [
    "Du schickst Firmendaten und Verpackungsmengen.",
    "Festpreis und Zahlungslink.",
    "Registrierung, Systembeteiligung und Eintrag bei den Marktplätzen.",
    "Übergabe mit Fristen-Übersicht."
  ],
  result: "LUCID-Nummer, abgeschlossene Systembeteiligung und hinterlegte Daten in deinen Marktplatzkonten, mit Übersicht der Folgetermine.",
  note: "Festpreis, Lizenzgebühren des Systems separat",
  fact: null,
  faq: [
    ["Brauche ich LUCID auch als kleiner Händler?", "Wer verpackte Ware an Endkunden in Deutschland verschickt, muss in der Regel registriert sein. Im Zweifel klärt das deine Rechtsberatung; die technische Umsetzung übernehmen wir."],
    ["Was kostet die Lizenzierung der Verpackungen?", "Das hängt von Menge und Material ab und wird direkt an das duale System gezahlt. Unser Festpreis deckt die Einrichtung."]
  ],
  rel: ["02", "07", "14"],
  guard: true
},
{
  id: "07",
  name: "EUDR-Check: Betrifft dich die Entwaldungsverordnung?",
  problem: "Ich verkaufe Möbel und Papierwaren. Fällt das unter die EUDR, und was muss ich vorbereiten?",
  summary: "Wir prüfen, welche deiner Produkte unter die EU-Entwaldungsverordnung fallen, welche Geodaten nötig sind und wie du die Sorgfaltserklärung vorbereitest. Du bekommst einen klaren Plan mit Fristen.",
  inc: [
    "Produkt-Check: Welche Artikel und Zolltarifnummern sind betroffen?",
    "Übersicht der nötigen Geolokalisierungs- und Lieferantendaten",
    "Vorbereitung der Sorgfaltserklärung oder der vereinfachten Erklärung für Kleinst- und Kleinunternehmen",
    "Fristen-Plan für dein Unternehmen",
    "Vorlage für Lieferantenanfragen"
  ],
  exc: [
    "Rechtliche Bewertung im Einzelfall",
    "Beschaffung der Daten bei deinen Lieferanten",
    "Abgabe der Erklärung in deinem Namen"
  ],
  needs: [
    "Produktliste mit Material und, falls vorhanden, Zolltarifnummern",
    "Angaben zu Lieferanten und Herkunftsländern",
    "Unternehmensgröße für die Fristen-Einordnung"
  ],
  steps: [
    "Du schickst Produktliste und Lieferantendaten.",
    "Festpreis und Zahlungslink.",
    "Wir ordnen Produkte zu und erarbeiten Datenbedarf und Fristen.",
    "Übergabe von Bericht, Plan und Vorlagen."
  ],
  result: "Ein Bericht mit betroffenen Produkten, Datenbedarf, deinem Fristen-Plan und einer Vorlage für Lieferantenanfragen.",
  note: "Festpreis für den Check",
  fact: "Die EUDR-Fristen wurden aufgeteilt: 30. Dezember 2026 für große und mittlere Marktteilnehmer (und Kleinst- und Kleinunternehmen, die bereits unter die EU-Holzhandelsverordnung fallen), 30. Juni 2027 für alle anderen Kleinst- und Kleinunternehmen. Der genaue Produktumfang wird je Artikel geprüft.",
  faq: [
    ["Welche Produkte sind betroffen?", "Die Verordnung erfasst unter anderem Holz, Papier, Kautschuk, Kaffee, Kakao, Soja, Palmöl und Rinder sowie daraus hergestellte Produkte. Welche deiner Artikel konkret betroffen sind, prüfen wir anhand der Produktliste."],
    ["Ab wann gilt das für mich?", "Das hängt von deiner Unternehmensgröße ab. Den passenden Termin findest du im Pflichten-Kalender und im Bericht."]
  ],
  rel: ["06", "78", "02"],
  guard: true
},
{
  id: "66",
  name: "Zeiterfassung einrichten in 48 Stunden",
  problem: "Wir schreiben Arbeitszeiten auf Zettel. Reicht das noch?",
  summary: "Wir wählen mit dir ein passendes Zeiterfassungs-Tool, richten es ein, erklären es deinem Team und sorgen für einen Export, den deine Steuerberatung weiterverarbeiten kann.",
  inc: [
    "Auswahl eines Tools passend zu Teamgröße und Arbeitsweise",
    "Einrichtung von Mitarbeitenden, Arbeitszeitmodellen und Pausenregeln",
    "Kurze Einweisung fürs Team (App und Browser)",
    "Export für Lohnbuchhaltung oder Steuerberatung"
  ],
  exc: [
    "Arbeitsrechtliche Beratung",
    "Lizenzkosten für das Tool",
    "Lohnabrechnung"
  ],
  needs: [
    "Liste der Mitarbeitenden und Arbeitszeitmodelle",
    "Ansprechperson in der Lohnbuchhaltung, falls ein Export abgestimmt werden soll"
  ],
  steps: [
    "Kurzer Fragebogen zu Team und Arbeitsweise.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Test mit einer Probewoche.",
    "Einweisung und Übergabe der Zugänge."
  ],
  result: "Ein laufendes Zeiterfassungssystem, eingewiesenes Team und ein getesteter Export für die Lohnbuchhaltung.",
  note: "Festpreis, Tool-Lizenz separat",
  fact: null,
  faq: [
    ["Ist Zeiterfassung Pflicht?", "Nach der Rechtsprechung des Bundesarbeitsgerichts müssen Arbeitgeber Arbeitszeiten systematisch erfassen. Details zur Umsetzung in deinem Betrieb klärt deine Rechts- oder Steuerberatung."],
    ["Welche Tools nutzt ihr?", "Je nach Bedarf zum Beispiel Clockodo oder timr. Wir empfehlen, was zu deinem Team passt, und haben keine Bindung an einen Anbieter."]
  ],
  rel: ["03", "54", "38"],
  guard: true
},
{
  id: "67",
  name: "Hinweisgeber-Meldekanal einrichten",
  problem: "Wir haben über 50 Mitarbeitende und noch keinen Meldekanal für Hinweisgeber.",
  summary: "Wir richten einen digitalen Meldekanal ein, dokumentieren den internen Ablauf und erstellen einen einseitigen Aushang für dein Team. So steht der Kanal, den das Hinweisgeberschutzgesetz verlangt.",
  inc: [
    "Auswahl und Einrichtung eines digitalen Meldetools",
    "Zugriffsrechte für die zuständige Meldestelle",
    "Dokumentation des internen Ablaufs",
    "Einseitiger Aushang für Mitarbeitende"
  ],
  exc: [
    "Rechtliche Prüfung des Verfahrens",
    "Bearbeitung eingehender Meldungen",
    "Lizenzkosten für das Meldetool"
  ],
  needs: [
    "Benennung der internen oder externen Meldestelle",
    "Unternehmensdaten und Logo für den Aushang"
  ],
  steps: [
    "Kurze Abstimmung zu Größe und Zuständigkeiten.",
    "Festpreis und Zahlungslink.",
    "Einrichtung von Tool, Rechten und Ablauf.",
    "Übergabe mit Dokumentation und Aushang."
  ],
  result: "Ein funktionierender Meldekanal, ein dokumentierter Ablauf und ein Aushang zum Verteilen.",
  note: "Festpreis, Tool-Lizenz separat",
  fact: null,
  faq: [
    ["Ab wann brauche ich einen Meldekanal?", "Unternehmen mit in der Regel mindestens 50 Beschäftigten müssen eine interne Meldestelle einrichten. Ob das für dich gilt, klärt im Zweifel deine Rechtsberatung."],
    ["Bearbeitet ihr auch die Meldungen?", "Nein. Wir bauen den Kanal und den Ablauf. Die Bearbeitung liegt bei der benannten Meldestelle."]
  ],
  rel: ["79", "78", "66"],
  guard: true
},
{
  id: "68",
  name: "Kassen-Compliance: TSE erneuern und Kasse melden",
  problem: "Das TSE-Zertifikat meiner Kasse läuft ab, und ich weiß nicht, wie die ELSTER-Meldung geht.",
  summary: "Wir prüfen den Status deiner Kasse und der TSE, koordinieren Verlängerung oder Austausch und übermitteln die Kassenmeldung technisch über ELSTER.",
  inc: [
    "Statusprüfung von Kasse und TSE-Zertifikat",
    "Koordination von Verlängerung oder Austausch der TSE",
    "Vorbereitung der Kassendaten",
    "Technische Übermittlung der Kassenmeldung über ELSTER",
    "Übersicht der nächsten Fristen"
  ],
  exc: [
    "Steuerliche Beratung",
    "Kosten für neue TSE-Hardware oder Kassensoftware",
    "Reparatur der Kasse selbst"
  ],
  needs: [
    "Zugang zur Kasse oder zum Kassenanbieter",
    "ELSTER-Zugang deines Unternehmens",
    "Kaufbelege oder Seriennummern der Kassen"
  ],
  steps: [
    "Du schickst Kassenmodell und Zugänge.",
    "Festpreis und Zahlungslink.",
    "Statusprüfung, TSE-Koordination und Datenvorbereitung.",
    "Übermittlung der Meldung und Übergabe der Bestätigung."
  ],
  result: "Eine gültige TSE, eine übermittelte Kassenmeldung mit Bestätigung und eine Übersicht der kommenden Fristen.",
  note: "pro Kasse",
  fact: null,
  faq: [
    ["Wie oft muss die TSE erneuert werden?", "TSE-Zertifikate laufen nach einigen Jahren ab, häufig nach etwa fünf. Wir prüfen den Stand deiner Kasse."],
    ["Macht ihr meine Steuererklärung?", "Nein. Wir übernehmen die technische Meldung der Kassen. Steuerliche Fragen klärt deine Steuerberatung."]
  ],
  rel: ["44", "03", "54"],
  guard: true
},
{
  id: "78",
  name: "Fragebogen-Feuerwehr: Lieferanten-Selbstauskünfte",
  problem: "Unser größter Kunde will bis Freitag einen ESG-Fragebogen. Wir wissen nicht, was wir antworten sollen.",
  summary: "Wir sortieren, was gefragt ist, sammeln, was bei dir schon existiert, entwerfen ehrliche Antworten und markieren echte Lücken mit einem Plan. Rechtzeitig vor deiner Frist.",
  inc: [
    "Sichtung des Fragebogens (z. B. LkSG, ESG, NIS2)",
    "Sammlung vorhandener Nachweise und Dokumente",
    "Entwurf ehrlicher Antworten zur Freigabe durch dich",
    "Liste offener Lücken mit Maßnahmenplan"
  ],
  exc: [
    "Rechtliche Bewertung von Pflichten",
    "Zertifizierungen oder Audits",
    "Antworten, die nicht durch Nachweise gedeckt sind"
  ],
  needs: [
    "Den Fragebogen und die Frist",
    "Ansprechperson für Rückfragen",
    "Vorhandene Dokumente (Richtlinien, Zertifikate, IT-Infos)"
  ],
  steps: [
    "Du schickst Fragebogen und Frist.",
    "Festpreis nach Umfang und Zahlungslink.",
    "Sichtung, Nachweissammlung und Antwortentwurf.",
    "Freigabe durch dich, Übergabe von Antworten und Lückenplan."
  ],
  result: "Ein ausgefüllter Fragebogen zur Freigabe, eine Nachweismappe und ein Plan für die offenen Punkte.",
  note: "Festpreis je nach Umfang des Fragebogens",
  fact: null,
  faq: [
    ["Schafft ihr das bis zu meiner Frist?", "Wir starten, sobald Zahlung, Fragebogen und Ansprechperson da sind, und richten den Ablauf an deiner Frist aus. Ist die Frist zu knapp für den Umfang, sagen wir das vor der Zahlung."],
    ["Schreibt ihr Antworten, die gut klingen?", "Wir schreiben Antworten, die stimmen. Wo etwas fehlt, benennen wir die Lücke und den Weg, sie zu schließen."]
  ],
  rel: ["79", "67", "07"],
  guard: true
}
];
