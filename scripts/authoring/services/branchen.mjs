// Spezial-Lösungen für Branchen.
export default [
{
  id: "38",
  name: "Handwerker-Software einrichten",
  problem: "Angebote schreiben wir in Word, Rechnungen in Excel und Termine im Kopf.",
  summary: "Digitale Angebote, Rechnungen und Einsatzplanung: Wir wählen mit dir das passende Tool, etwa ToolTime, Plancraft oder Craftboxx, übernehmen deine Kundendaten, richten Vorlagen ein und schulen dein Team eine Stunde.",
  inc: [
    "Auswahl der passenden Handwerker-Software",
    "Übernahme deiner Kundendaten",
    "Vorlagen für Angebote und Rechnungen",
    "Einsatzplanung und mobile Nutzung",
    "1 Stunde Schulung fürs Team"
  ],
  exc: [
    "Lizenzkosten der Software",
    "Steuerliche Beratung zu Rechnungen"
  ],
  needs: [
    "Kundenliste (Excel oder Export)",
    "Beispiel-Angebote und Rechnungen",
    "Logo und Firmendaten"
  ],
  steps: [
    "Du schickst Kundenliste und Beispiele.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Datenübernahme.",
    "Schulung und Übergabe."
  ],
  result: "Eine eingerichtete Software mit deinen Kunden, Vorlagen und einem geschulten Team.",
  note: "Festpreis, Lizenz separat",
  fact: null,
  faq: [
    ["Welche Software ist die beste?", "Das hängt von Gewerk und Teamgröße ab. Wir empfehlen ohne Bindung an einen Anbieter."]
  ],
  rel: ["66", "03", "36"],
  guard: false
},
{
  id: "42",
  name: "Anamnese digital: Papierbögen aufs Tablet",
  problem: "Unsere Patienten füllen Papierbögen aus, die wir danach kaum lesen können.",
  summary: "Anamnese- und Einwilligungsbögen werden zu datenschutzgerecht eingerichteten digitalen Formularen auf dem Tablet oder vorab online. Lesbare Daten statt Handschrift.",
  inc: [
    "Umsetzung deiner Bögen als digitale Formulare",
    "Ausfüllen am Tablet oder vorab online",
    "Datenschutzgerechte technische Einrichtung",
    "Übergabe an deine Praxissoftware oder als PDF",
    "Einweisung fürs Team"
  ],
  exc: [
    "Medizinische oder rechtliche Prüfung der Inhalte",
    "Kosten für Tablets und Lizenzen",
    "Schnittstellen, die deine Praxissoftware nicht anbietet"
  ],
  needs: [
    "Deine aktuellen Bögen",
    "Name der Praxissoftware"
  ],
  steps: [
    "Du schickst deine Bögen.",
    "Festpreis und Zahlungslink.",
    "Umsetzung und Testlauf.",
    "Einweisung und Übergabe."
  ],
  result: "Digitale Bögen, die deine Patientinnen und Patienten ausfüllen und die dein Team sofort lesen kann.",
  note: "Festpreis, Lizenzen separat",
  fact: null,
  faq: [
    ["Ist das datenschutzkonform?", "Wir richten die Technik nach anerkannten Anforderungen ein und dokumentieren sie. Die rechtliche Bewertung bleibt bei deiner Datenschutzberatung."]
  ],
  rel: ["41", "82", "81"],
  guard: true
},
{
  id: "49",
  name: "Vereins-Digitalisierung: Mitglieder und Beiträge",
  problem: "Unsere Mitgliederliste ist eine Excel-Datei, die nur der Kassenwart versteht.",
  summary: "Wir richten eine Vereinsverwaltung wie easyVerein oder Campai ein, mit SEPA-Beitragseinzug, Newsletter und einer gemeinsamen Cloud für den Vorstand.",
  inc: [
    "Einrichtung der Vereinssoftware",
    "Übernahme der Mitgliederliste",
    "SEPA-Lastschrift für Beiträge",
    "Newsletter an Mitglieder",
    "Gemeinsame Ablage für den Vorstand"
  ],
  exc: [
    "Lizenzkosten",
    "Steuer- oder Vereinsrechtsberatung",
    "Buchhaltung"
  ],
  needs: [
    "Mitgliederliste",
    "Beitragsordnung",
    "Bankverbindung und Gläubiger-ID"
  ],
  steps: [
    "Du schickst Mitgliederliste und Beitragsordnung.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Datenübernahme.",
    "Einweisung für den Vorstand."
  ],
  result: "Eine laufende Vereinsverwaltung mit Beitragseinzug und ein eingewiesener Vorstand.",
  note: "Festpreis, Lizenz separat",
  fact: null,
  faq: [
    ["Brauchen wir eine Gläubiger-ID?", "Für den SEPA-Einzug ja. Wir zeigen dir, wie du sie bei der Bundesbank beantragst."]
  ],
  rel: ["50", "48", "52"],
  guard: false
},
{
  id: "50",
  name: "Online-Spenden und Livestream für Gemeinden",
  problem: "Unsere Gemeinde will online Spenden annehmen und Veranstaltungen übertragen.",
  summary: "Wir richten Spendenwege wie PayPal Giving, betterplace oder twingle ein und bauen ein einfaches Livestream-Set für Gottesdienste, Gebete und Veranstaltungen.",
  inc: [
    "Einrichtung eines Online-Spendenwegs",
    "Einbau auf Website und Social Media",
    "Einfaches Livestream-Set mit Ablaufplan",
    "Einweisung für Ehrenamtliche"
  ],
  exc: [
    "Kosten für Kamera und Mikrofon",
    "Gebühren der Spendenplattformen",
    "Steuerliche Fragen zu Spendenquittungen"
  ],
  needs: [
    "Nachweis der Gemeinnützigkeit",
    "Ort und Art der Veranstaltungen"
  ],
  steps: [
    "Kurzes Gespräch zu Raum und Bedarf.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Probestream.",
    "Einweisung und Übergabe."
  ],
  result: "Ein laufender Spendenweg und ein Livestream-Set, das Ehrenamtliche bedienen können.",
  note: "Festpreis, Hardware separat",
  fact: null,
  faq: [
    ["Welche Technik brauchen wir?", "Für den Anfang oft weniger als gedacht. Wir empfehlen passende Geräte für euer Budget."]
  ],
  rel: ["49", "48", "21"],
  guard: false
},
{
  id: "60",
  name: "Podcast-Technik komplett einrichten",
  problem: "Ich habe ein Mikrofon gekauft, aber mein Podcast ist immer noch nicht online.",
  summary: "Hosting, RSS-Feed, Verteilung auf Spotify und Apple Podcasts, Cover, Intro und Outro sowie ein Ablauf für jede neue Folge. In einer Woche vom Mikrofon zur ersten veröffentlichten Folge.",
  inc: [
    "Podcast-Hosting und RSS-Feed",
    "Anmeldung bei Spotify und Apple Podcasts",
    "Cover nach Plattformvorgaben",
    "Intro und Outro",
    "Veröffentlichung der ersten Folge und Ablauf für weitere"
  ],
  exc: [
    "Schnitt laufender Folgen",
    "Musiklizenzen",
    "Hosting-Kosten"
  ],
  needs: [
    "Name und Thema des Podcasts",
    "Erste Folge als Aufnahme"
  ],
  steps: [
    "Du schickst Name, Thema und Aufnahme.",
    "Festpreis und Zahlungslink.",
    "Einrichtung, Cover und Veröffentlichung.",
    "Übergabe mit Ablauf für neue Folgen."
  ],
  result: "Ein veröffentlichter Podcast mit erster Folge und ein Ablauf für jede weitere.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Schneidet ihr auch meine Folgen?", "Nicht im Paket. Wir zeigen dir einen einfachen Ablauf dafür."]
  ],
  rel: ["61", "FT", "18"],
  guard: false
},
{
  id: "61",
  name: "Coach-Stack: Buchung, Zahlung und Zoom in einem Ablauf",
  problem: "Interessenten buchen, zahlen nicht und finden den Zoom-Link nicht.",
  summary: "Calendly, Stripe, Zoom und Erinnerungsmails werden zu einem nahtlosen Ablauf verbunden, dazu eine klare Angebotsseite.",
  inc: [
    "Buchung mit Calendly oder ähnlichem Tool",
    "Bezahlung über Stripe bei der Buchung",
    "Automatischer Zoom-Link",
    "Erinnerungsmails",
    "Einseitige Angebotsseite"
  ],
  exc: [
    "Lizenz- und Transaktionsgebühren",
    "Texte für dein Coaching-Angebot (auf Wunsch extra)"
  ],
  needs: [
    "Angebote mit Dauer und Preis",
    "Zugänge zu Kalender, Stripe und Zoom"
  ],
  steps: [
    "Du nennst Angebote und Tools.",
    "Festpreis und Zahlungslink.",
    "Verknüpfung und Testbuchungen.",
    "Übergabe mit Anleitung."
  ],
  result: "Ein Ablauf von der Buchung bis zum Termin, der ohne Handarbeit funktioniert.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Funktioniert das auch mit anderen Tools?", "Ja, oft mit Alternativen zu Calendly oder Zoom. Wir prüfen das vor der Zahlung."]
  ],
  rel: ["41", "18", "60"],
  guard: false
},
{
  id: "72",
  name: "Bestatter-Digital-Paket",
  problem: "Angehörige wohnen weit weg und fragen, ob sie die Trauerfeier online verfolgen können.",
  summary: "Online-Kondolenzseiten, Livestream für weit entfernte Angehörige, ein gepflegter Google-Auftritt und digitale Terminanfragen für Bestattungshäuser.",
  inc: [
    "Online-Kondolenzseiten",
    "Einfaches Livestream-Set für Trauerfeiern",
    "Google-Unternehmensprofil",
    "Digitale Terminanfrage",
    "Einweisung fürs Team"
  ],
  exc: [
    "Hardwarekosten",
    "Begleitung einzelner Trauerfeiern (auf Anfrage)"
  ],
  needs: [
    "Zugang zur Website",
    "Räumlichkeiten für den Livestream"
  ],
  steps: [
    "Kurzes Gespräch zu Abläufen.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Probestream.",
    "Einweisung und Übergabe."
  ],
  result: "Kondolenzseiten, ein Livestream-Set und ein digitaler Anfrageweg, den dein Team selbst bedient.",
  note: "Festpreis, Hardware separat",
  fact: null,
  faq: [
    ["Ist das pietätvoll umsetzbar?", "Ja. Livestreams sind nur mit Zustimmung der Familie und auf Wunsch geschützt zugänglich."]
  ],
  rel: ["34", "71", "25"],
  guard: false
},
{
  id: "83",
  name: "Jagd digital: Wildkamera und Revier-Apps",
  problem: "Meine Wildkamera schickt keine Bilder, und die Revier-App ist leer.",
  summary: "Mobilfunk-Wildkameras richtig einrichten, Revier-Apps aufsetzen und Fotos sinnvoll ablegen.",
  inc: [
    "Einrichtung von Wildkameras mit Mobilfunk",
    "Alarme und Bildübertragung",
    "Einrichtung einer Revier-App",
    "Ablage und Freigabe der Fotos"
  ],
  exc: [
    "Kosten für Kameras und SIM-Karten",
    "Montage im Revier außerhalb des vereinbarten Termins"
  ],
  needs: [
    "Kameras und SIM-Karten",
    "Revierdaten für die App"
  ],
  steps: [
    "Du nennst Kameras und App-Wunsch.",
    "Festpreis und Zahlungslink.",
    "Ein Termin vor Ort.",
    "Übergabe mit Kurzanleitung."
  ],
  result: "Funktionierende Kameras mit Bildübertragung und eine eingerichtete Revier-App.",
  note: "Festpreis für einen Termin",
  fact: null,
  faq: [
    ["Kommt ihr ins Revier?", "Ja, im Rahmen des vereinbarten Termins in der Region Chemnitz."]
  ],
  rel: ["84", "86", "87"],
  guard: false
},
{
  id: "84",
  name: "Stall digital für Pferdebetriebe",
  problem: "Einsteller, Reitstunden und Rechnungen laufen bei uns über WhatsApp und Zettel.",
  summary: "Wir richten eine Stallverwaltung ein, dazu Online-Buchung für Reitstunden und den Einzug von Zahlungen.",
  inc: [
    "Einrichtung einer Stallverwaltungs-Software",
    "Online-Buchung für Reitstunden",
    "Zahlungseinzug und Rechnungen",
    "Einweisung"
  ],
  exc: [
    "Lizenzkosten",
    "Steuerliche Beratung"
  ],
  needs: [
    "Liste der Einsteller und Angebote",
    "Bankverbindung"
  ],
  steps: [
    "Du schickst Angebote und Einstellerliste.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Tests.",
    "Einweisung und Übergabe."
  ],
  result: "Eine laufende Stallverwaltung mit Buchung und Zahlung.",
  note: "Festpreis, Lizenz separat",
  fact: null,
  faq: [
    ["Gibt es dafür passende Software?", "Ja, es gibt spezialisierte Lösungen für Pferdebetriebe. Wir empfehlen, was zu deiner Größe passt."]
  ],
  rel: ["85", "41", "83"],
  guard: false
},
{
  id: "85",
  name: "Fahrschule digitalisieren",
  problem: "Wir sind ausgebucht und ertrinken in Telefonaten und Papier.",
  summary: "Online-Buchung, Anbindung der Theorie-App, WhatsApp Business und Google-Bewertungen: ein abgestimmtes Paket für Fahrschulen.",
  inc: [
    "Online-Buchung von Fahrstunden",
    "Anbindung der Theorie-App",
    "WhatsApp Business",
    "System für Google-Bewertungen",
    "Einweisung"
  ],
  exc: [
    "Lizenzkosten",
    "Fahrschul-Verwaltungssoftware-Wechsel (prüfen wir vorher)"
  ],
  needs: [
    "Angebote und Fahrlehrer-Kalender",
    "Zugänge zu bestehenden Tools"
  ],
  steps: [
    "Du nennst deine Tools.",
    "Festpreis und Zahlungslink.",
    "Einrichtung und Tests.",
    "Einweisung und Übergabe."
  ],
  result: "Buchung, Kommunikation und Bewertungen laufen digital und abgestimmt.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Funktioniert das mit unserer Verwaltungssoftware?", "Wir prüfen die Anbindung vor der Zahlung."]
  ],
  rel: ["41", "37", "43"],
  guard: false
},
{
  id: "86",
  name: "Selbstbedienung rund um die Uhr: Hofladen und Automaten",
  problem: "Wir eröffnen einen Selbstbedienungs-Hofladen. Wer kümmert sich um Zutritt, Kamera und Bezahlung?",
  summary: "Für Container-Läden, Hofautomaten und Selbstbedienungs-Shops: Zutrittskontrolle, Kameras, bargeldlose Zahlung und Fernüberwachung, alles aufeinander abgestimmt.",
  inc: [
    "Zutrittskontrolle",
    "Kamerasystem mit sicherem Fernzugriff",
    "Bargeldlose Zahlung",
    "Fernüberwachung und Alarme",
    "Einweisung"
  ],
  exc: [
    "Hardware und Elektroinstallation",
    "Bau des Ladens oder Automaten"
  ],
  needs: [
    "Standort mit Strom und Internet",
    "Gewählte Hardware oder Budget"
  ],
  steps: [
    "Kurzes Gespräch zu Standort und Hardware.",
    "Festpreis und Zahlungslink.",
    "Einrichtung vor Ort und Tests.",
    "Übergabe mit Notfallplan."
  ],
  result: "Ein Laden, der rund um die Uhr verkauft, mit Zutritt, Zahlung und Überwachung, die zusammenspielen.",
  note: "Festpreis je nach Umfang, Hardware separat",
  fact: null,
  faq: [
    ["Liefert ihr auch die Automaten?", "Nein. Wir richten die Technik ein, die Hardware kommt vom Hersteller oder Fachbetrieb."]
  ],
  rel: ["87", "65", "83"],
  guard: false
},
{
  id: "87",
  name: "Kartenzahlung für Marktstände",
  problem: "Auf dem Wochenmarkt fragen ständig Leute, ob sie mit Karte zahlen können.",
  summary: "SumUp oder Zettle einrichten, Preise anlegen und ein Schild „Wir nehmen Karte“ für deinen Stand. Am selben Tag erledigt.",
  inc: [
    "Einrichtung von SumUp, Zettle oder ähnlich",
    "Artikel und Preise anlegen",
    "Belege per E-Mail oder SMS",
    "Schild „Wir nehmen Karte“ als Druckdatei"
  ],
  exc: [
    "Kosten für das Kartenlesegerät",
    "Transaktionsgebühren",
    "Kassenführung nach Steuerrecht (klärst du mit deiner Steuerberatung)"
  ],
  needs: [
    "Smartphone und Kartenlesegerät (oder Budget dafür)",
    "Preisliste",
    "Bankverbindung"
  ],
  steps: [
    "Du schickst Preisliste.",
    "Festpreis und Zahlungslink.",
    "Einrichtung am selben Tag.",
    "Testzahlung und Übergabe."
  ],
  result: "Ein einsatzbereites Kartenterminal mit deinen Preisen und ein Schild für den Stand.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Lohnt sich das für kleine Umsätze?", "Die meisten Anbieter haben keine Grundgebühr, nur eine Gebühr pro Zahlung. Wir rechnen es mit dir durch."]
  ],
  rel: ["86", "44", "37"],
  guard: false
}
];
