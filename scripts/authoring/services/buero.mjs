// Büro-IT, Daten & Sicherheit.
export default [
{
  id: "29",
  name: "Der IT-Mensch ist weg: Übergabe-Audit",
  problem: "Der Einzige, der unsere Systeme kannte, hat die Firma verlassen.",
  summary: "Wir erfassen alles: Domains, Hosting, Lizenzen, Admin-Konten und Backups. Wir holen verlorene Zugänge über offizielle Wege zurück und dokumentieren alles in einer Übergabe-Mappe.",
  inc: [
    "Bestandsaufnahme aller Systeme, Konten und Verträge",
    "Wiederherstellung fehlender Admin-Zugänge über offizielle Wege",
    "Prüfung der Backups",
    "Übergabe-Mappe mit allen Zugängen und Zuständigkeiten",
    "Liste der Risiken mit Prioritäten"
  ],
  exc: [
    "Behebung aller gefundenen Probleme (separat zum Festpreis)",
    "Zugriffe ohne Nachweis der Berechtigung"
  ],
  needs: [
    "Was du schon weißt: Rechnungen, E-Mails von Anbietern, Passwortlisten",
    "Eine Ansprechperson mit Entscheidungsbefugnis"
  ],
  steps: [
    "Kurzes Gespräch zu bekannten Systemen.",
    "Festpreis und Zahlungslink.",
    "Bestandsaufnahme und Wiederherstellung von Zugängen.",
    "Übergabe der Mappe und Risiko-Liste."
  ],
  result: "Eine vollständige Übergabe-Mappe, zurückgeholte Zugänge und eine priorisierte Risiko-Liste.",
  note: "Festpreis für eine übliche Kleinbetriebs-IT",
  fact: null,
  faq: [
    ["Was, wenn wir ein Passwort gar nicht mehr haben?", "Dann gehen wir über die Wiederherstellungswege der Anbieter, mit Nachweisen, dass das Konto deiner Firma gehört."],
    ["Gibt es das auch zur Vorbereitung eines Verkaufs?", "Ja. Für Inhaber, die übergeben oder verkaufen wollen, gibt es die Nachfolge-Dokumentation."]
  ],
  rel: ["69", "27", "53"],
  guard: false
},
{
  id: "51",
  name: "Windows 10: Umstieg oder Weiterbetrieb klären",
  problem: "Unsere PCs laufen noch mit Windows 10. Was müssen wir jetzt tun?",
  summary: "Wir prüfen jeden PC: Ist Windows 11 möglich, lohnt sich ein Gerätetausch oder reicht vorerst ein Sicherheitsupdate-Programm? Dann führen wir den Umstieg durch und ziehen deine Daten mit um.",
  inc: [
    "Kompatibilitäts-Check für Windows 11",
    "Empfehlung: Upgrade, Austausch oder Übergangslösung",
    "Upgrade auf Windows 11 mit Datensicherung",
    "Übernahme von Daten und wichtigen Programmen",
    "Kurzprotokoll je Gerät"
  ],
  exc: [
    "Kosten für neue Hardware oder Lizenzen",
    "Kosten für das kostenpflichtige Business-ESU-Programm",
    "Reparatur defekter Hardware"
  ],
  needs: [
    "Liste der Geräte oder Zugang vor Ort",
    "Zugangsdaten der Benutzerkonten",
    "Lizenzen wichtiger Programme"
  ],
  steps: [
    "Du nennst Anzahl und Art der Geräte.",
    "Festpreis pro Gerät und Zahlungslink.",
    "Check, Upgrade und Datenübernahme.",
    "Protokoll je Gerät."
  ],
  result: "Geräte auf einem unterstützten Stand, übernommene Daten und ein Protokoll je PC.",
  note: "pro PC",
  fact: "Microsoft hat die kostenlosen erweiterten Sicherheitsupdates (ESU) für Privatkunden bis zum 12. Oktober 2027 verlängert. Für Unternehmen gibt es ein eigenes, kostenpflichtiges ESU-Programm. Wir klären, was für deine Geräte gilt.",
  faq: [
    ["Muss ich sofort umsteigen?", "Nicht unbedingt. Für Privatgeräte laufen kostenlose Sicherheitsupdates bis Oktober 2027, für Firmen gibt es ein kostenpflichtiges Programm. Wir rechnen mit dir durch, was günstiger ist."],
    ["Macht ihr das auch für Privat-PCs?", "Ja. Für Privathaushalte gibt es außerdem den Umzugs-Service auf ein neues Gerät."]
  ],
  rel: ["35", "53", "52"],
  guard: false
},
{
  id: "52",
  name: "Profi-E-Mail mit eigener Domain",
  problem: "Wir schreiben Kunden immer noch von einer GMX-Adresse.",
  summary: "Aus kanzlei-mueller@gmx.de wird info@kanzlei-mueller.de: mit Microsoft 365 oder Google Workspace, kompletter Übernahme deiner alten Mails, Signaturen und eingerichteten Handys.",
  inc: [
    "Einrichtung von Microsoft 365 oder Google Workspace",
    "Postfächer auf deiner Domain mit sauberer DNS-Authentifizierung",
    "Übernahme der bisherigen E-Mails, Kontakte und Kalender",
    "Signaturen für alle Postfächer",
    "Einrichtung auf PCs und Handys"
  ],
  exc: [
    "Lizenzkosten für Microsoft 365 oder Google Workspace",
    "Domainkosten",
    "Mehr als die vereinbarte Zahl an Postfächern"
  ],
  needs: [
    "Zugang zum alten Postfach",
    "Domain oder Wunschdomain",
    "Liste der Personen und Geräte"
  ],
  steps: [
    "Du nennst Domain, Postfächer und Geräte.",
    "Festpreis und Zahlungslink.",
    "Einrichtung, Umzug und Test.",
    "Übergabe mit Zugangsmappe."
  ],
  result: "Professionelle E-Mail-Adressen auf deiner Domain, alle alten Mails übernommen, alle Geräte eingerichtet.",
  note: "Festpreis für ein kleines Team, Lizenzen separat",
  fact: null,
  faq: [
    ["Gehen alte Mails verloren?", "Nein. Wir übernehmen Mails, Kontakte und Kalender und prüfen das Ergebnis mit dir."],
    ["Microsoft oder Google?", "Das hängt von deinen Programmen und Gewohnheiten ab. Wir empfehlen, was zu dir passt."]
  ],
  rel: ["53", "81", "29"],
  guard: false
},
{
  id: "53",
  name: "Backup-Airbag: 3-2-1-Sicherung mit Test",
  problem: "Wir haben kein richtiges Backup. Wenn der Rechner stirbt, ist alles weg.",
  summary: "Wir richten eine automatische Sicherung nach der 3-2-1-Regel ein, lokal und in der Cloud, und testen die Wiederherstellung. Den Schritt, den die meisten überspringen. Alles auf einer Seite dokumentiert.",
  inc: [
    "Sicherungskonzept nach der 3-2-1-Regel",
    "Automatische lokale Sicherung",
    "Verschlüsselte Cloud-Sicherung",
    "Getestete Wiederherstellung",
    "Einseitige Dokumentation mit Notfallschritten"
  ],
  exc: [
    "Kosten für Festplatten, NAS oder Cloud-Speicher",
    "Datenrettung von defekten Datenträgern"
  ],
  needs: [
    "Liste der Geräte und wichtigen Datenorte",
    "Zugang zu den Geräten"
  ],
  steps: [
    "Du nennst Geräte und Datenorte.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Testwiederherstellung.",
    "Übergabe der Dokumentation."
  ],
  result: "Eine laufende, getestete Sicherung und eine Seite, auf der steht, was im Ernstfall zu tun ist.",
  note: "Festpreis, Hardware und Speicher separat",
  fact: null,
  faq: [
    ["Was heißt 3-2-1?", "Drei Kopien deiner Daten, auf zwei verschiedenen Medien, eine davon außer Haus, zum Beispiel in der Cloud."],
    ["Prüft ihr die Sicherung danach regelmäßig?", "Auf Wunsch als monatliche Backup-Kontrolle in der Betreuung."]
  ],
  rel: ["79", "29", "56"],
  guard: false
},
{
  id: "54",
  name: "DATEV Unternehmen online anbinden",
  problem: "Mein Steuerberater will, dass ich DATEV Unternehmen online nutze, aber ich komme mit der Einrichtung nicht klar.",
  summary: "Wir richten DATEV Unternehmen online ein: Scan-Ablauf für Belege, Bankanbindung, Routine für den Beleg-Upload und eine Stunde Einweisung. Die Schuhkarton-Buchhaltung hat ein Ende.",
  inc: [
    "Einrichtung des Zugangs mit deiner Steuerberatung",
    "Bankanbindung",
    "Scan- und Upload-Ablauf für Belege (Handy und Scanner)",
    "Routine für wiederkehrende Belege",
    "1 Stunde Einweisung"
  ],
  exc: [
    "Steuerberatung und Buchhaltung",
    "DATEV-Lizenzkosten",
    "Nacherfassung alter Belege"
  ],
  needs: [
    "Freischaltung durch deine Steuerberatung",
    "Online-Banking-Zugang",
    "Scanner oder Smartphone"
  ],
  steps: [
    "Du klärst die Freischaltung mit deiner Steuerberatung.",
    "Festpreis und Zahlungslink.",
    "Einrichtung von Bank, Scan und Upload.",
    "Einweisung und Kurzanleitung."
  ],
  result: "Ein laufender digitaler Belegfluss zu deiner Steuerberatung und eine Kurzanleitung für den Alltag.",
  note: "Festpreis inkl. 1 Stunde Einweisung",
  fact: null,
  faq: [
    ["Arbeitet ihr mit meiner Steuerberatung zusammen?", "Ja, wir stimmen die Einrichtung mit ihr ab. Steuerliche Fragen beantwortet sie, wir kümmern uns um die Technik."],
    ["Bin ich Steuerberater, kann ich Mandanten schicken?", "Ja. Auf der Partnerseite steht, wie das ohne Provision funktioniert."]
  ],
  rel: ["03", "66", "56"],
  guard: true
},
{
  id: "55",
  name: "SaaS-Kosten-Audit: 14 Tools bezahlt, 6 genutzt",
  problem: "Jeden Monat gehen Abos ab, und keiner weiß mehr, wofür.",
  summary: "Wir erfassen alle Software-Abos, finden Überschneidungen und ungenutzte Lizenzen und liefern eine Kündigungsliste sowie günstigere Tarifoptionen.",
  inc: [
    "Inventur aller Abos aus Kontoauszügen und Rechnungen",
    "Abgleich mit der tatsächlichen Nutzung",
    "Überschneidungen und ungenutzte Lizenzen",
    "Kündigungsliste mit Fristen",
    "Günstigere Tarifoptionen"
  ],
  exc: [
    "Kündigung in deinem Namen ohne Freigabe",
    "Vertrags- oder Rechtsberatung"
  ],
  needs: [
    "Kontoauszüge oder Kreditkartenabrechnungen der letzten 12 Monate",
    "Liste der Nutzer"
  ],
  steps: [
    "Du schickst Abrechnungen.",
    "Festpreis und Zahlungslink.",
    "Inventur und Nutzungsabgleich.",
    "Bericht mit Kündigungsliste und Einsparung."
  ],
  result: "Eine vollständige Abo-Übersicht, eine Kündigungsliste mit Fristen und die geschätzte jährliche Einsparung.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Kündigt ihr auch?", "Auf Wunsch ja, nach deiner Freigabe für jede einzelne Kündigung."]
  ],
  rel: ["29", "58", "52"],
  guard: false
},
{
  id: "56",
  name: "Excel-Notaufnahme",
  problem: "Gestern hat die Tabelle noch funktioniert, heute steht überall #BEZUG!.",
  summary: "Kaputte Formeln, beschädigte Dateien, #BEZUG!-Katastrophen: Wir reparieren deine Excel-Datei und bauen auf Wunsch fragile Monster-Tabellen zu stabilen, dokumentierten Werkzeugen um.",
  inc: [
    "Diagnose und Reparatur von Formeln und Bezügen",
    "Wiederherstellung beschädigter Dateien, soweit möglich",
    "Absicherung gegen Wiederholung (Schutz, Prüfregeln)",
    "Kurze Dokumentation der Logik"
  ],
  exc: [
    "Datenrettung ohne lesbare Datei oder Sicherung",
    "Umbau zu einer Datenbank (dafür gibt es eine eigene Leistung)",
    "Steuerliche oder kaufmännische Prüfung der Inhalte"
  ],
  needs: [
    "Die Datei (oder eine Kopie)",
    "Was sie tun soll und was gerade schiefgeht"
  ],
  steps: [
    "Du schickst die Datei und beschreibst das Problem.",
    "Festpreis je nach Umfang und Zahlungslink.",
    "Reparatur und Test mit dir.",
    "Übergabe mit Dokumentation."
  ],
  result: "Eine funktionierende Datei, abgesichert und dokumentiert.",
  note: "Festpreis nach Blick auf die Datei",
  fact: null,
  faq: [
    ["Ist meine Datei bei euch sicher?", "Wir arbeiten mit der Datei nur für den Auftrag und löschen sie nach Abschluss. Sensible Daten kannst du vorher anonymisieren."],
    ["Geht das auch mit Google Sheets?", "Ja."]
  ],
  rel: ["57", "58", "18"],
  guard: false
},
{
  id: "57",
  name: "Access-Datenbank retten und ablösen",
  problem: "Unser ganzes Lager läuft über eine Access-Datenbank von 2005, und keiner traut sich ran.",
  summary: "Wir stabilisieren die alte Datenbank, exportieren die Daten sauber und ziehen sie in ein wartbares System um, zum Beispiel Airtable oder eine passende Branchenlösung.",
  inc: [
    "Analyse von Tabellen, Formularen und Abläufen",
    "Sicherung und Stabilisierung des Bestands",
    "Sauberer Datenexport",
    "Migration in ein wartbares System",
    "Einweisung und Dokumentation"
  ],
  exc: [
    "Lizenzkosten des neuen Systems",
    "Entwicklung komplexer Individualsoftware"
  ],
  needs: [
    "Kopie der Datenbank",
    "Ansprechperson, die die Abläufe kennt"
  ],
  steps: [
    "Du schickst eine Kopie der Datenbank.",
    "Analyse und Festpreis.",
    "Stabilisierung, Export und Migration.",
    "Parallelbetrieb, Einweisung und Übergabe."
  ],
  result: "Deine Daten in einem wartbaren System, dokumentiert, mit eingewiesenem Team.",
  note: "Festpreis nach Analyse der Datenbank",
  fact: null,
  faq: [
    ["Läuft der Betrieb währenddessen weiter?", "Ja. Wir planen einen Parallelbetrieb, bis das neue System sicher läuft."]
  ],
  rel: ["56", "58", "29"],
  guard: false
},
{
  id: "58",
  name: "Daten-Umzug zwischen Systemen",
  problem: "Der neue Anbieter sagt: einfach die CSV importieren. Es klappt einfach nicht.",
  summary: "Kundenlisten vom alten ins neue CRM, Produktdaten von Shop zu Shop, Kontakte aus Outlook in die Cloud: bereinigt, Felder zugeordnet und geprüft.",
  inc: [
    "Export aus dem alten System",
    "Bereinigung und Entfernung von Dubletten",
    "Zuordnung der Felder",
    "Import und Stichprobenkontrolle",
    "Protokoll des Umzugs"
  ],
  exc: [
    "Lizenzkosten",
    "Neuaufbau von Prozessen im Zielsystem"
  ],
  needs: [
    "Zugang zu altem und neuem System",
    "Welche Daten mitkommen sollen"
  ],
  steps: [
    "Du nennst Quelle, Ziel und Datenmenge.",
    "Festpreis und Zahlungslink.",
    "Export, Bereinigung, Import.",
    "Kontrolle mit dir und Übergabe."
  ],
  result: "Deine Daten vollständig und sauber im neuen System, mit Protokoll.",
  note: "Festpreis für einen Umzug",
  fact: null,
  faq: [
    ["Was passiert mit Dubletten?", "Wir führen sie nach Regeln zusammen, die wir vorher mit dir festlegen."]
  ],
  rel: ["56", "57", "52"],
  guard: false
},
{
  id: "79",
  name: "Cyber-Versicherung: Anforderungen technisch erfüllen",
  problem: "Die Versicherung will wissen, ob wir MFA und getestete Backups haben. Haben wir nicht.",
  summary: "Wir setzen genau um, was der Fragebogen deiner Cyber-Versicherung verlangt: MFA überall, getestete Backups, Update-Routine, Passwortmanager. So kannst du die Fragen wahrheitsgemäß beantworten.",
  inc: [
    "Abgleich des Versicherungsfragebogens mit dem Ist-Zustand",
    "Zwei-Faktor-Anmeldung für alle wichtigen Konten",
    "Backup mit getesteter Wiederherstellung",
    "Update-Routine und Passwortmanager",
    "Nachweismappe für die Versicherung"
  ],
  exc: [
    "Versicherungsberatung oder Zusage der Annahme",
    "Hardware- und Lizenzkosten",
    "Ausfüllen des Fragebogens in deinem Namen"
  ],
  needs: [
    "Der Fragebogen der Versicherung",
    "Zugang zu den betroffenen Systemen"
  ],
  steps: [
    "Du schickst den Fragebogen.",
    "Festpreis und Zahlungslink.",
    "Umsetzung der geforderten Maßnahmen.",
    "Übergabe der Nachweismappe."
  ],
  result: "Umgesetzte Schutzmaßnahmen und eine Nachweismappe, mit der du den Fragebogen ehrlich beantworten kannst.",
  note: "Festpreis für ein kleines Team",
  fact: null,
  faq: [
    ["Nimmt mich die Versicherung danach sicher an?", "Das entscheidet die Versicherung. Wir setzen die geforderten Maßnahmen technisch um und dokumentieren sie."],
    ["Bin ich Versicherungsmakler, kann ich Kunden schicken?", "Ja. Auf der Partnerseite steht, wie das funktioniert."]
  ],
  rel: ["53", "78", "29"],
  guard: true
},
{
  id: "81",
  name: "EU-Cloud-Umzug für Kanzleien und Praxen",
  problem: "Mandanten fragen, ob ihre Daten bei uns in einer US-Cloud liegen.",
  summary: "Wir ziehen Dateien und Kalender aus US-Clouds in EU-gehostete Dienste wie Nextcloud oder IONOS um: verschlüsselt, mit klaren Zugriffsrechten und dokumentiert für deine Datenschutz-Unterlagen.",
  inc: [
    "Auswahl eines EU-gehosteten Dienstes",
    "Umzug von Dateien und Kalendern",
    "Verschlüsselung und Zugriffsrechte",
    "Dokumentation für dein Datenschutz-Verzeichnis",
    "Einweisung fürs Team"
  ],
  exc: [
    "Datenschutzrechtliche Beratung",
    "Lizenz- und Hostingkosten",
    "Umzug von Fachsoftware-Datenbanken"
  ],
  needs: [
    "Zugang zu den bisherigen Diensten",
    "Liste der Nutzer und Rechte"
  ],
  steps: [
    "Bestandsaufnahme von Daten und Nutzern.",
    "Festpreis und Zahlungslink.",
    "Einrichtung, Umzug und Rechte.",
    "Parallelphase, Einweisung und Übergabe."
  ],
  result: "Deine Dateien und Kalender in einer EU-Cloud, mit dokumentierten Rechten und Einstellungen.",
  note: "Festpreis nach Datenmenge und Nutzerzahl",
  fact: null,
  faq: [
    ["Ist danach alles DSGVO-konform?", "Wir setzen die technische Seite sauber um und dokumentieren sie. Die rechtliche Bewertung trifft deine Datenschutzberatung."]
  ],
  rel: ["82", "52", "53"],
  guard: true
},
{
  id: "82",
  name: "Fax-Ausstieg für Praxen und Kanzleien",
  problem: "Wir faxen immer noch Befunde und Schriftsätze. Das muss doch anders gehen.",
  summary: "Wir ersetzen das Faxgerät durch den passenden sicheren digitalen Kanal für deinen Beruf, richten ihn ein und schulen dein Team.",
  inc: [
    "Analyse, wer dir faxt und an wen du faxt",
    "Auswahl des passenden digitalen Kanals für deinen Beruf",
    "Einrichtung und Test",
    "Einweisung fürs Team",
    "Plan für den Übergang"
  ],
  exc: [
    "Kosten für Kommunikationsdienste oder Kartenlesegeräte",
    "Berufsrechtliche Beratung"
  ],
  needs: [
    "Liste der häufigsten Fax-Kontakte",
    "Zugang zu Praxis- oder Kanzleisoftware"
  ],
  steps: [
    "Du schickst die Kontaktliste.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Test des neuen Kanals.",
    "Einweisung und Übergang."
  ],
  result: "Ein eingerichteter digitaler Kanal, ein eingewiesenes Team und ein Plan, das Faxgerät abzuschalten.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Welcher Kanal ist der richtige?", "Das hängt vom Beruf ab: In Praxen etwa KIM, in Kanzleien das beA. Wir richten ein, was für dich vorgesehen ist."]
  ],
  rel: ["81", "42", "52"],
  guard: true
}
];
