// German public copy for categories, sectors and buying moments.
export const categories = {
  compliance: {
    short: "Barrierefreiheit, Datenschutz, E-Rechnung, Fristen",
    intro: "Gesetzliche und Plattform-Pflichten technisch umgesetzt: Barrierefreiheit, Datenschutz, E-Rechnung, Verpackung, Zeiterfassung, Kasse und Lieferanten-Fragebögen. Wir setzen um, die rechtliche Bewertung bleibt bei deiner Beratung.",
    problems_from: ["01", "05", "03", "68", "78"]
  },
  marktplaetze: {
    short: "Gesperrte Listings, Varianten, Otto, TikTok Shop",
    intro: "Gesperrte Listings, kaputte Varianten, Freischaltungen und neue Verkaufskanäle: Amazon, Otto, Kaufland, TikTok Shop und Google Shopping, gelöst von jemandem, der selbst dort verkauft.",
    problems_from: ["02", "09", "10", "11", "24"]
  },
  website: {
    short: "Neue Website, gehackte Seite, Speed, Tracking",
    intro: "Neue Websites in 48 Stunden, Rettung gehackter Seiten, Ladezeit, Messung und eigene Bestellseiten. Für größere Vorhaben gibt es feste Pakete.",
    problems_from: ["22", "21", "28", "23", "59"]
  },
  ki: {
    short: "Sichtbarkeit in ChatGPT, Bots, Automationen",
    intro: "Sichtbarkeit in ChatGPT und anderen KI-Assistenten, Kundenservice-Bots, automatisierte Abläufe und KI-Produktfotos. Pragmatisch eingesetzt, wo es wirklich Zeit spart.",
    problems_from: ["16", "18", "17", "20"]
  },
  kunden: {
    short: "Google-Profil, Bewertungen, Termine, WhatsApp",
    intro: "Gefunden werden, erreichbar sein, Termine füllen: Google-Unternehmensprofil, Bewertungen, WhatsApp, Online-Buchung, Booking.com und Social-Media-Konten.",
    problems_from: ["25", "26", "40", "43", "41"]
  },
  buero: {
    short: "E-Mail, Backup, Excel, DATEV, Sicherheit",
    intro: "E-Mail, Backups, Excel- und Datenbank-Rettung, DATEV, Windows-Umstieg, EU-Cloud und Cyber-Versicherung: die Technik, die im Büro einfach laufen muss.",
    problems_from: ["56", "29", "53", "54", "79"]
  },
  wachstum: {
    short: "Förderung, Ausschreibungen, Personal, Nachfolge",
    intro: "Förderprogramme nutzen, öffentliche Aufträge erschließen, Mitarbeitende gewinnen, internationale Fachkräfte ankommen lassen und die Nachfolge vorbereiten.",
    problems_from: ["62", "36", "69", "64", "88"]
  },
  zuhause: {
    short: "Kinderschutz, Betrug, Fotos, Eltern, Solar",
    intro: "Für Privathaushalte: Kinderschutz, Familien-Sicherheit, Fotos, digitaler Nachlass, Technik-Betreuung für die Eltern, Balkonkraftwerk, PV und THG-Quote. Alle Preise inklusive Mehrwertsteuer.",
    problems_from: ["73", "30", "31", "33", "74"]
  },
  "branchen-pakete": {
    short: "Handwerk, Praxen, Vereine, Creator, Hofläden",
    intro: "Fertige Digital-Pakete für Betriebe mit eigenen Abläufen: Handwerk, Praxen, Vereine und Gemeinden, Creator, Bestatter, Jagd, Reitställe, Fahrschulen, Hofläden und Marktstände.",
    problems_from: ["38", "42", "49", "85", "87"]
  }
};

export const sectors = {
  "online-handel": {
    icon: "shopping-cart",
    short: "Amazon, Otto, TikTok Shop, Shopify und Pflichten",
    intro: "Für Händlerinnen und Händler auf Amazon, Otto, Kaufland, TikTok Shop und im eigenen Shop: gesperrte Listings, Feed-Fehler, GPSR, Verpackung, Datenschutz und Barrierefreiheit, gelöst aus eigener Verkaufserfahrung.",
    problems: ["Amazon hat meine Listings wegen fehlender GPSR-Angaben gesperrt.", "Meine Varianten sind zerschossen.", "Google Shopping hat die Hälfte meiner Produkte abgelehnt."]
  },
  handwerk: {
    icon: "hammer",
    short: "Website, Google, Personal, Software und Förderung",
    intro: "Für Handwerksbetriebe und lokale Dienstleister: gefunden werden, Mitarbeitende gewinnen, Angebote und Rechnungen digital, Zeiterfassung und Förderprojekte in Sachsen.",
    problems: ["Wir finden keine Gesellen.", "Wer in der Nähe sucht, findet zuerst die Konkurrenz.", "Angebote schreiben wir in Word, Rechnungen in Excel."]
  },
  "praxen-salons": {
    icon: "calendar-check",
    short: "Terminbuchung, Erinnerungen, Anamnese, Fax-Ausstieg",
    intro: "Für Arztpraxen, Therapie, Salons und Studios: weniger Telefon, weniger Terminausfälle, digitale Formulare und ein sicherer Weg weg vom Fax.",
    problems: ["Das Telefon klingelt den ganzen Tag, nur für Termine.", "Jede Woche erscheinen Kunden nicht.", "Unsere Patienten füllen Papierbögen aus, die keiner lesen kann."]
  },
  "gastronomie-hotellerie": {
    icon: "utensils",
    short: "Speisekarte, Bestellseite, Kasse, Booking.com",
    intro: "Für Restaurants, Cafés, Pensionen und Ferienwohnungen: digitale Speisekarte mit Allergenen, eigene Bestellseite ohne Provision, Kassen-Pflichten und mehr Buchungen.",
    problems: ["Lieferando nimmt uns bis zu 30 Prozent Provision ab.", "Das TSE-Zertifikat unserer Kasse läuft ab.", "Wir hatten schon zwei Doppelbuchungen."]
  },
  "vereine-gemeinden": {
    icon: "users",
    short: "Mitglieder, Beiträge, Spenden, Ad Grants",
    intro: "Für Vereine, gemeinnützige Organisationen und Gemeinden: Mitgliederverwaltung mit Beitragseinzug, Online-Spenden, Livestreams und die Prüfung, ob Google Ad Grants für euch in Frage kommen.",
    problems: ["Unsere Mitgliederliste versteht nur der Kassenwart.", "Wir haben kein Budget für Werbung.", "Wir wollen Veranstaltungen übertragen."]
  },
  "kanzleien-bueros": {
    icon: "briefcase",
    short: "E-Mail, DATEV, Backups, EU-Cloud, Fragebögen",
    intro: "Für Kanzleien, Steuer- und Ingenieurbüros und Selbständige: E-Mail und Cloud, DATEV, Backups, Excel, Datenschutz und die Fragebögen von Kunden und Versicherern.",
    problems: ["Der Einzige, der unsere IT kannte, ist weg.", "Die Versicherung will wissen, ob wir MFA haben.", "Gestern hat die Tabelle noch funktioniert."]
  },
  "creator-coaches": {
    icon: "mic",
    short: "Podcast, Buchung, KI-Sichtbarkeit, Automationen",
    intro: "Für Creator, Coaches und Podcaster: Podcast-Technik, Buchung mit Bezahlung, Automationen und Sichtbarkeit in KI-Assistenten.",
    problems: ["Mein Podcast ist immer noch nicht online.", "Interessenten buchen, zahlen nicht und finden den Zoom-Link nicht.", "ChatGPT empfiehlt nur die Konkurrenz."]
  },
  "familien-senioren": {
    icon: "heart-handshake",
    short: "Kinderschutz, Betrug, Fotos, Eltern-Technik",
    intro: "Für Familien und ältere Menschen: Kinderschutz auf allen Geräten, Hilfe nach Betrug, Ordnung in den Fotos und regelmäßige Technik-Betreuung für die Eltern.",
    problems: ["Meine Eltern rufen bei jeder App-Frage an.", "Ich habe auf einen Link geklickt und meine Bankdaten eingegeben.", "Mein Kind hat ein Handy, und ich weiß nicht, was es sieht."]
  },
  energie: {
    icon: "sun",
    short: "Balkonkraftwerk, PV, Wallbox, THG-Quote",
    intro: "Für Haushalte mit Balkonkraftwerk, PV-Anlage, Wallbox oder E-Auto: Registrierungen, Monitoring, THG-Quote und ein Zuhause, das günstigen Strom von allein nutzt. Alle Preise inklusive Mehrwertsteuer.",
    problems: ["Vor dem Marktstammdatenregister drücke ich mich.", "Der Installateur ist weg, und die Apps verwirren mich.", "Man bekommt fürs E-Auto Geld? Wie geht das?"]
  },
  nachfolge: {
    icon: "key-round",
    short: "Übergabe vorbereiten, Betrieb modernisieren",
    intro: "Für Inhaber vor der Übergabe und für neue Eigentümer: Systeme dokumentieren, Zugänge sichern und den übernommenen Betrieb digital modernisieren.",
    problems: ["Ich will übergeben, und die IT kennt nur ich.", "Ich habe einen Betrieb mit Fax und Papier übernommen.", "Der alte Webmaster hat die Domain."]
  },
  "internationale-fachkraefte": {
    icon: "globe",
    short: "Ankommen, Onboarding, Agentur-Technik",
    intro: "Für internationale Fachkräfte, Studierende und ihre Arbeitgeber: digital ankommen in Deutschland, mehrsprachiges Onboarding und Technik für Vermittlungsagenturen. Auf Deutsch, Englisch und Bengali.",
    problems: ["SIM, Bank, ELSTER: Alles ist digital, aber auf Deutsch.", "Unsere neuen Pflegekräfte kommen nächsten Monat.", "Unsere Vermittlung läuft über WhatsApp und Papier."]
  },
  "laendliche-nischen": {
    icon: "tractor",
    short: "Jagd, Reitställe, Fahrschulen, Hofläden, Märkte",
    intro: "Für Betriebe auf dem Land und mit eigenen Abläufen: Wildkameras, Stallverwaltung, Fahrschul-Buchung, Selbstbedienungsläden und Kartenzahlung am Marktstand.",
    problems: ["Auf dem Markt fragen alle, ob sie mit Karte zahlen können.", "Einsteller und Reitstunden laufen über WhatsApp.", "Wir eröffnen einen Selbstbedienungs-Hofladen."]
  }
};

export const moments = {
  g01: { quote: "Mein Konto wurde gesperrt.", intro: "Marktplatz, Zahlungsanbieter, Google-Profil oder Werbekonto gesperrt: Wir finden die Ursache und bereiten die Wiederherstellung über die offiziellen Wege vor." },
  g02: { quote: "Seit heute geht nichts mehr.", intro: "E-Mail, Website, WLAN, Drucker oder Kasse fallen aus. Viele dieser Fixes starten noch am selben Werktag." },
  g03: { quote: "Jemand fängt an oder hört auf.", intro: "Neue Mitarbeitende brauchen Zugänge am ersten Tag, ausscheidende müssen sauber gesperrt werden. Ohne geteilte Passwörter." },
  g04: { quote: "Wir gründen, ziehen um oder eröffnen.", intro: "Neue Firma, neues Büro, neuer Standort: Domain, E-Mail, Internet, Kasse und Google-Profil richtig von Anfang an." },
  g05: { quote: "Software gekauft, aber nicht eingerichtet.", intro: "Das Tool ist bezahlt, aber keiner hat Zeit, es einzurichten. Wir machen es nutzbar: CRM, Newsletter, Buchung, Teams und mehr." },
  g06: { quote: "Eine Pflicht oder Frist steht an.", intro: "Barrierefreiheit, E-Rechnung, Verpackung, Kasse, Zeiterfassung oder Datenschutz: technisch umgesetzt, bevor die Frist drückt." },
  g07: { quote: "Kunden finden oder erreichen uns nicht.", intro: "Falsche Öffnungszeiten, kein Rückruf, unauffindbar in Maps: Wir sorgen dafür, dass dich deine Kundschaft findet und erreicht." },
  g08: { quote: "Es kommen weniger Anfragen.", intro: "Anfragen, Verkäufe oder Buchungen gehen zurück. Wir finden die Hürden im Shop, im Formular oder im Google-Profil und räumen sie weg." },
  g09: { quote: "Wir haben ein Problem mit Bewertungen.", intro: "Zu wenige Bewertungen, eine unfaire Kritik oder ein schlechter Ruf als Arbeitgeber: mit ehrlichen, regelkonformen Wegen." },
  g10: { quote: "Das Portal macht mich fertig.", intro: "ELSTER, BundID, Vergabeportale, Förderanträge und PDF-Formulare: Wir machen Portale und Papierkram bedienbar." },
  g11: { quote: "Wir übergeben oder ziehen um.", intro: "Nachfolge, Verkauf oder Systemwechsel: Daten, Konten und Zugänge sicher übertragen, ohne dass etwas verloren geht." },
  g12: { quote: "Wir hatten einen Sicherheitsvorfall.", intro: "Phishing, gekaperte Postfächer, verlorene Laptops oder der Fragebogen der Cyber-Versicherung: eindämmen, absichern, dokumentieren." },
  g13: { quote: "Neues Gerät oder neue Technik vor Ort.", intro: "Neuer Laptop, neues Handy, Drucker, Router, Kamera oder Kartenterminal: eingerichtet, abgesichert, erklärt." },
  g14: { quote: "Unsere Daten sind ein Chaos.", intro: "Verstreute Dateien, Dubletten, kaputte Tabellen und alte Archive: geordnet, bereinigt und wieder zugänglich." },
  g15: { quote: "Die Website ist neu oder geändert.", intro: "Nach dem Start oder Relaunch: Messung, Weiterleitungen, Spam-Schutz, Backups und Überwachung prüfen und reparieren." },
  g16: { quote: "Termine und Nachrichten laufen durcheinander.", intro: "Verpasste Anrufe, verstreute Nachrichten, Terminausfälle: ein klarer Kanal und automatische Erinnerungen." },
  g17: { quote: "Saison oder Event steht vor der Tür.", intro: "Weihnachtsmarkt, Messe, Pop-up oder Saisonstart: Kartenzahlung, Anmeldung, WLAN und Öffnungszeiten rechtzeitig fertig." },
  g18: { quote: "Zu viele Kleinigkeiten auf einmal.", intro: "Wenn sich Kleinkram stapelt oder du laufende Betreuung willst: Aufräumtage, Checks und feste monatliche Pakete." },
  g19: { quote: "Zu Hause oder bei den Eltern hakt es.", intro: "Handy, Fernseher, E-Rezept, Fotos oder Betrugsschutz: Hilfe für Privathaushalte und ältere Menschen, Preise inklusive Mehrwertsteuer." }
};

// Buying moments per named service (merged catalog rows add theirs automatically).
export const serviceMoments = {
  "01": ["g06"], "02": ["g01", "g06"], "03": ["g06"], "04": ["g06"], "05": ["g06"], "06": ["g06"], "07": ["g06"],
  "08": ["g08"], "09": ["g01"], "10": ["g01"], "11": ["g01"], "12": ["g08"], "13": ["g04"], "14": ["g04"], "15": ["g08"],
  "16": ["g07", "g08"], "17": ["g16"], "18": ["g18", "g05"], "19": ["g08"], "20": ["g18"], "21": ["g04", "g15"],
  "22": ["g02", "g12"], "23": ["g08", "g15"], "24": ["g01", "g08"], "25": ["g07", "g04"], "26": ["g01", "g12"],
  "27": ["g11", "g02"], "28": ["g02", "g07"], "29": ["g03", "g11"], "30": ["g12", "g19"], "31": ["g19"], "32": ["g19", "g12"],
  "33": ["g14", "g19"], "34": ["g19", "g11"], "35": ["g13", "g19"], "36": ["g03"], "37": ["g05", "g16"], "38": ["g05"],
  "39": ["g08"], "40": ["g16"], "41": ["g16", "g05"], "42": ["g05"], "43": ["g09"], "44": ["g13"], "45": ["g08"],
  "46": ["g16"], "47": ["g08"], "48": ["g10"], "49": ["g05"], "50": ["g17"], "51": ["g06", "g13"], "52": ["g04"],
  "53": ["g12"], "54": ["g05", "g10"], "55": ["g18"], "56": ["g14", "g02"], "57": ["g14", "g11"], "58": ["g11", "g14"],
  "59": ["g15"], "60": ["g05"], "61": ["g16"], "62": ["g10"], "63": ["g10"], "64": ["g10"], "65": ["g13"], "66": ["g06"],
  "67": ["g06"], "68": ["g06"], "69": ["g11"], "70": ["g11"], "71": ["g19", "g11"], "72": ["g07"], "73": ["g19", "g18"],
  "74": ["g10"], "75": ["g10", "g13"], "76": ["g10"], "77": ["g13"], "78": ["g06", "g10"], "79": ["g12", "g10"],
  "80": ["g09"], "81": ["g11"], "82": ["g11"], "83": ["g13"], "84": ["g05"], "85": ["g05"], "86": ["g13"],
  "87": ["g17", "g13"], "88": ["g10"], "89": ["g18"], "90": ["g03"], "FT": ["g08"]
};
