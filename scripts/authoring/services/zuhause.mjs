// Zuhause, Familie & Energie. All prices for private customers incl. VAT.
export default [
{
  id: "30",
  name: "Betrugs-Erste-Hilfe für Privatpersonen",
  problem: "Ich habe auf einen Link geklickt und meine Bankdaten eingegeben. Was jetzt?",
  summary: "Nach Phishing, Fake-Shop oder gekapertem WhatsApp: Wir begrenzen den Schaden, sperren und sichern deine Konten, helfen bei der Meldung an Bank und Polizei und prüfen dein Gerät.",
  inc: [
    "Sofort-Check: Was ist passiert, was ist betroffen?",
    "Konten sperren, Passwörter ändern, Sitzungen beenden",
    "Hilfe bei Bankmeldung und Online-Anzeige bei der Polizei",
    "Prüfung deines Geräts",
    "Neue Sicherheitseinstellungen und Zwei-Faktor-Anmeldung"
  ],
  exc: [
    "Rückholung von Geld (das entscheidet deine Bank)",
    "Rechtsberatung",
    "Ermittlungen gegen Täter"
  ],
  needs: [
    "Was passiert ist, mit Screenshots",
    "Zugriff auf dein Handy oder deinen Computer",
    "Telefonnummer deiner Bank"
  ],
  steps: [
    "Du schilderst kurz, was passiert ist.",
    "Festpreis und Zahlungslink.",
    "Start noch am selben Tag: Schadensbegrenzung und Meldungen.",
    "Absicherung und kurze Zusammenfassung für dich."
  ],
  result: "Gesicherte Konten, erstattete Meldungen an Bank und Polizei und ein Gerät mit sicheren Einstellungen.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Was soll ich sofort tun?", "Wenn Bankdaten betroffen sind: Ruf deine Bank an oder nutze den Sperr-Notruf 116 116. Danach helfen wir beim Rest."],
    ["Bekomme ich mein Geld zurück?", "Das entscheidet deine Bank. Wir helfen dir, den Fall vollständig und schnell zu melden."]
  ],
  rel: ["32", "26", "73"],
  guard: false
},
{
  id: "31",
  name: "Kinderschutz auf allen Geräten einrichten",
  problem: "Mein Kind hat ein Handy und ich habe keine Ahnung, was es darauf sieht.",
  summary: "Wir richten Jugendschutz auf allen Geräten der Familie richtig ein: Family Link oder Bildschirmzeit, Filter im Heimnetz, Einschränkungen für YouTube und TikTok, Spielzeiten. Mit 30 Minuten Erklärung für dich.",
  inc: [
    "Family Link (Android) oder Bildschirmzeit (Apple)",
    "Filter im Heimnetz (DNS-Filter)",
    "Einschränkungen für YouTube, TikTok und App-Stores",
    "Zeitlimits für Spiele und Konsolen",
    "30 Minuten Erklärung für die Eltern"
  ],
  exc: [
    "Überwachung von Nachrichteninhalten",
    "Hardware wie neue Router",
    "Pädagogische Beratung"
  ],
  needs: [
    "Alle Geräte der Kinder und Zugang zu den Eltern-Konten",
    "Alter der Kinder und eure Regeln"
  ],
  steps: [
    "Du nennst Geräte und Alter der Kinder.",
    "Festpreis und Zahlungslink.",
    "Einrichtung bei dir zu Hause oder per Fernhilfe.",
    "Erklärung und kurze Anleitung zum Anpassen."
  ],
  result: "Jugendschutz auf allen Geräten, eine Anleitung zum Anpassen und Eltern, die wissen, was eingestellt ist.",
  note: "pro Familie",
  fact: null,
  faq: [
    ["Kann mein Kind das umgehen?", "Kein Schutz ist perfekt. Wir richten es so ein, dass Umgehungen schwer sind, und zeigen dir, woran du sie erkennst."]
  ],
  rel: ["32", "35", "73"],
  guard: false
},
{
  id: "32",
  name: "Familien-Sicherheitspaket",
  problem: "Wir nutzen überall dasselbe Passwort. Irgendwann geht das schief.",
  summary: "Der digitale Sicherheitsgurt für die Familie: Passwortmanager für alle, Zwei-Faktor-Anmeldung auf wichtigen Konten, Check auf geleakte Daten, Sicherung unersetzlicher Fotos und ein Notfallblatt.",
  inc: [
    "Passwortmanager für alle Familienmitglieder",
    "Zwei-Faktor-Anmeldung auf den wichtigsten Konten",
    "Check, ob eure Daten in bekannten Datenlecks auftauchen",
    "Sicherung unersetzlicher Daten",
    "Ein Notfallblatt für den Ernstfall"
  ],
  exc: [
    "Kosten für Passwortmanager oder Speicher",
    "Reparatur von Geräten"
  ],
  needs: [
    "Zugriff auf die Geräte der Familie",
    "Liste der wichtigsten Konten"
  ],
  steps: [
    "Du nennst Personen und Geräte.",
    "Festpreis und Zahlungslink.",
    "Ein halber Tag Einrichtung bei dir oder per Fernhilfe.",
    "Übergabe des Notfallblatts."
  ],
  result: "Ein eingerichteter Passwortmanager, abgesicherte Konten, gesicherte Daten und ein Notfallblatt.",
  note: "Festpreis pro Haushalt",
  fact: null,
  faq: [
    ["Ist ein Passwortmanager sicher?", "Ein seriöser Passwortmanager mit starkem Hauptpasswort und Zwei-Faktor-Anmeldung ist deutlich sicherer als wiederverwendete Passwörter."]
  ],
  rel: ["30", "31", "33"],
  guard: false
},
{
  id: "33",
  name: "Foto-Chaos-Rettung",
  problem: "30.000 Fotos auf drei Handys, zwei Laptops und vier USB-Sticks. Und eine Festplatte macht komische Geräusche.",
  summary: "Wir machen aus verstreuten Fotos eine geordnete Familienbibliothek: Dubletten entfernt, nach Jahren sortiert, in der Cloud und lokal gesichert.",
  inc: [
    "Zusammenführung aus Handys, Laptops, USB-Sticks und Festplatten",
    "Entfernung von Dubletten",
    "Ordnung nach Jahr und Ereignis",
    "Sicherung in der Cloud und lokal",
    "Anleitung, wie es künftig ordentlich bleibt"
  ],
  exc: [
    "Datenrettung von defekten Datenträgern im Labor",
    "Kosten für Speicher oder Cloud",
    "Bildbearbeitung"
  ],
  needs: [
    "Alle Geräte und Datenträger",
    "Wunsch: welche Cloud, welcher Speicher"
  ],
  steps: [
    "Du nennst Geräte und ungefähre Menge.",
    "Festpreis und Zahlungslink.",
    "Zusammenführung, Ordnung und Sicherung.",
    "Übergabe mit Anleitung."
  ],
  result: "Eine geordnete, doppelt gesicherte Fotobibliothek für die ganze Familie.",
  note: "Festpreis für eine übliche Familienmenge",
  fact: null,
  faq: [
    ["Was, wenn die alte Festplatte defekt ist?", "Solange sie noch lesbar ist, sichern wir zuerst. Bei echten Hardwareschäden empfehlen wir ein Datenrettungslabor."]
  ],
  rel: ["71", "32", "35"],
  guard: false
},
{
  id: "34",
  name: "Digitaler Nachlass: Ordnung und Zugang",
  problem: "Mein Vater ist gestorben, und wir kommen an keines seiner Konten.",
  summary: "Zwei Wege: Wir ordnen deinen digitalen Nachlass zu Lebzeiten (Kontenliste, Notfallzugang) oder helfen Hinterbliebenen, Konten über die offiziellen Wege der Anbieter zu erreichen und zu schließen.",
  inc: [
    "Vorsorge: Liste aller Konten, Abos und Geräte",
    "Vorsorge: Notfallzugang und sichere Aufbewahrung",
    "Hinterbliebene: Übersicht der Konten der verstorbenen Person",
    "Hinterbliebene: Anträge bei Anbietern über offizielle Wege",
    "Kündigung von Abos und Sicherung von Fotos, wo möglich"
  ],
  exc: [
    "Rechtsberatung oder Erbschaftsfragen",
    "Formulierung von Vollmachten (dafür Notariat oder Anwalt)",
    "Zugriff ohne Nachweis der Berechtigung"
  ],
  needs: [
    "Vorsorge: deine Geräte und Konten",
    "Hinterbliebene: Sterbeurkunde, Erbnachweis oder Vollmacht"
  ],
  steps: [
    "Du schilderst deine Situation.",
    "Festpreis je nach Umfang und Zahlungslink.",
    "Bestandsaufnahme und Anträge.",
    "Übergabe mit Dokumentation."
  ],
  result: "Eine geordnete Konten-Übersicht und, je nach Fall, ein Notfallzugang oder gestellte Anträge bei den Anbietern.",
  note: "Festpreis je nach Umfang",
  fact: null,
  faq: [
    ["Kommt ihr in jedes Konto?", "Nein. Wir gehen nur über die offiziellen Wege der Anbieter. Manche verlangen Erbnachweise, manche gewähren keinen Zugang, sondern nur die Löschung."]
  ],
  rel: ["71", "32", "73"],
  guard: true
},
{
  id: "35",
  name: "Neuer PC oder neues Handy: Daten-Umzug",
  problem: "Ich habe ein neues Handy und Angst, dass meine Fotos und WhatsApp-Chats weg sind.",
  summary: "Wir ziehen alles vom alten aufs neue Gerät um: Daten, WhatsApp-Verlauf, Banking-Apps, Drucker und E-Mail. Damit dein Wochenende dir gehört.",
  inc: [
    "Datenübertragung vom alten aufs neue Gerät",
    "WhatsApp-Verlauf umziehen",
    "Banking-Apps neu einrichten (mit dir)",
    "E-Mail und Drucker einrichten",
    "Altgerät auf Wunsch sicher löschen"
  ],
  exc: [
    "Kosten für Geräte oder Zubehör",
    "Datenrettung von defekten Geräten"
  ],
  needs: [
    "Beide Geräte, geladen",
    "Deine Zugangsdaten (Apple-ID, Google-Konto, Banking)"
  ],
  steps: [
    "Du nennst altes und neues Gerät.",
    "Festpreis und Zahlungslink.",
    "Ein Termin bei dir oder in Chemnitz.",
    "Kurzer Check, ob alles da ist."
  ],
  result: "Ein eingerichtetes neues Gerät mit allen Daten, Chats und Apps.",
  note: "Festpreis pro Gerät",
  fact: null,
  faq: [
    ["Auch von Android zu iPhone?", "Ja, auch der Wechsel zwischen den Systemen ist möglich. Bei WhatsApp prüfen wir vorher den Weg."]
  ],
  rel: ["51", "32", "73"],
  guard: false
},
{
  id: "65",
  name: "Smarte Sicherheitstechnik mit Förder-Check",
  problem: "Bei den Nachbarn wurde eingebrochen. Wir wollen Kameras und eine Alarmanlage, die wirklich funktionieren.",
  summary: "Wir richten Kameras, Alarm- und Zutrittssysteme für Wohnung, Haus oder kleinen Laden richtig ein und prüfen, ob aktuell Förderungen für Einbruchschutz in Frage kommen.",
  inc: [
    "Beratung zur passenden Technik",
    "Einrichtung von Kameras, Alarm und Zutritt",
    "Sichere Zugänge und App-Einrichtung",
    "Check, ob aktuell Förderungen für Einbruchschutz verfügbar sind"
  ],
  exc: [
    "Kosten für Hardware",
    "Elektroinstallation durch Fachbetrieb",
    "Garantie auf Förderung"
  ],
  needs: [
    "Grundriss oder Fotos der Räume",
    "Router- und WLAN-Zugang"
  ],
  steps: [
    "Kurzes Gespräch zu Objekt und Wünschen.",
    "Festpreis und Zahlungslink.",
    "Termin vor Ort: Einrichtung und Test.",
    "Übergabe mit Anleitung."
  ],
  result: "Eingerichtete, abgesicherte Sicherheitstechnik und eine Einschätzung zu möglichen Förderungen.",
  note: "Festpreis für die Einrichtung, Hardware separat",
  fact: null,
  faq: [
    ["Darf ich Kameras überall aufhängen?", "Nicht überall. Öffentliche Bereiche und Nachbargrundstücke sind tabu. Klär Einzelheiten mit deiner Rechtsberatung; wir richten den Blickwinkel entsprechend ein."]
  ],
  rel: ["77", "75", "32"],
  guard: true
},
{
  id: "71",
  name: "Familienarchiv digitalisieren",
  problem: "Dias, Fotoalben und VHS-Kassetten liegen im Keller, und das Haus wird bald verkauft.",
  summary: "Dias, Negative, Fotoalben, VHS- und Super-8-Filme werden zu einem geordneten digitalen Familienarchiv, bevor die Erinnerungen verloren gehen.",
  inc: [
    "Digitalisierung von Dias, Negativen, Fotos und Videos",
    "Ordnung nach Jahr, Person oder Ereignis",
    "Übergabe auf Datenträger und in der Cloud",
    "Teilen mit der Familie"
  ],
  exc: [
    "Aufwendige Restaurierung beschädigter Bilder",
    "Kosten für Datenträger und Speicher"
  ],
  needs: [
    "Die Materialien",
    "Wunsch, wie sortiert werden soll"
  ],
  steps: [
    "Du schätzt die Menge.",
    "Festpreis nach Sichtung und Zahlungslink.",
    "Digitalisierung und Ordnung.",
    "Übergabe an die Familie."
  ],
  result: "Ein digitales Familienarchiv, gesichert und mit der Familie teilbar.",
  note: "Festpreis nach Sichtung der Menge",
  fact: null,
  faq: [
    ["Bekomme ich die Originale zurück?", "Ja, vollständig."]
  ],
  rel: ["33", "34", "73"],
  guard: false
},
{
  id: "73",
  name: "Eltern-Technik-Abo",
  problem: "Meine Eltern rufen bei jeder App-Frage an, und ich wohne 400 km weg.",
  summary: "Einmal im Monat kommt jemand Kompetentes vorbei, dazwischen gibt es Fernhilfe: Handy, E-Rezept-App, Videoanrufe, Drucker und die Frage, ob eine Nachricht Betrug ist.",
  inc: [
    "Ein Hausbesuch pro Monat (Chemnitz und Umgebung)",
    "Fernhilfe zwischen den Besuchen",
    "Handy, Tablet, Drucker, Fernseher",
    "E-Rezept-App und Videoanrufe mit der Familie",
    "Zweite Meinung bei verdächtigen Nachrichten"
  ],
  exc: [
    "Hardware-Kosten und Reparaturen",
    "Notdienst nachts",
    "Pflege oder Betreuung außerhalb der Technik"
  ],
  needs: [
    "Adresse und Erreichbarkeit deiner Eltern",
    "Ihr Einverständnis"
  ],
  steps: [
    "Du buchst für deine Eltern.",
    "Erster Besuch: Bestandsaufnahme und Einrichtung.",
    "Monatliche Besuche, dazwischen Fernhilfe.",
    "Kurzer Bericht an dich nach jedem Besuch, wenn deine Eltern einverstanden sind."
  ],
  result: "Eltern, die mit ihrer Technik zurechtkommen, und ein Kind, das nicht mehr jeden Abend telefonischer Support ist.",
  note: "monatlich kündbar nach Konditionen im Angebot",
  fact: null,
  faq: [
    ["Wo bietet ihr Hausbesuche an?", "In Chemnitz und Umgebung. Für andere Orte fragen wir nach, ob es eine Lösung gibt."],
    ["Wer bucht und bezahlt?", "Meistens die erwachsenen Kinder. Deine Eltern müssen einverstanden sein."]
  ],
  rel: ["30", "35", "32"],
  guard: false
},
{
  id: "74",
  name: "Balkonkraftwerk anmelden",
  problem: "Das Balkonkraftwerk hängt, aber vor dem Marktstammdatenregister drücke ich mich.",
  summary: "Wir melden dein Balkonkraftwerk korrekt im Marktstammdatenregister an, mit deinen Anlagendaten, in 24 Stunden.",
  inc: [
    "Registrierung im Marktstammdatenregister",
    "Prüfung der Angaben aus deinem Datenblatt",
    "Bestätigung als PDF für deine Unterlagen"
  ],
  exc: [
    "Elektroinstallation",
    "Prüfung, ob deine Anlage zulässig montiert ist"
  ],
  needs: [
    "Datenblatt oder Fotos vom Typenschild (Modul und Wechselrichter)",
    "Datum der Inbetriebnahme",
    "Zählernummer"
  ],
  steps: [
    "Du schickst Datenblatt und Zählernummer.",
    "Festpreis und Zahlungslink.",
    "Registrierung in 24 Stunden.",
    "Bestätigung per E-Mail."
  ],
  result: "Eine erledigte Registrierung mit Bestätigung für deine Unterlagen.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Muss ich mein Balkonkraftwerk anmelden?", "Ja, Balkonkraftwerke müssen im Marktstammdatenregister registriert werden."]
  ],
  rel: ["75", "76", "77"],
  guard: true
},
{
  id: "75",
  name: "PV-Anlage und Wallbox: Anmeldung und Monitoring",
  problem: "Der Installateur ist weg, die Apps verwirren mich, und ich sehe meine Zahlen nicht.",
  summary: "Wir erledigen die Registrierung im Marktstammdatenregister und beim Netzbetreiber, richten Wechselrichter- und Monitoring-Apps ein und erklären dir dein Verbrauchs-Dashboard.",
  inc: [
    "Registrierung im Marktstammdatenregister",
    "Unterstützung bei der Meldung an den Netzbetreiber",
    "Einrichtung von Wechselrichter- und Monitoring-Apps",
    "Wallbox-App einrichten",
    "Erklärung deines Verbrauchs-Dashboards"
  ],
  exc: [
    "Elektroinstallation und Inbetriebnahme",
    "Steuerliche Fragen zur Anlage"
  ],
  needs: [
    "Datenblätter, Inbetriebnahmeprotokoll",
    "Zugangsdaten der Anlage"
  ],
  steps: [
    "Du schickst Unterlagen.",
    "Festpreis und Zahlungslink.",
    "Registrierung und App-Einrichtung.",
    "Kurze Erklärung, was du wo siehst."
  ],
  result: "Erledigte Registrierungen und Apps, die dir deine Zahlen zeigen.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Macht ihr auch die Steuer für die PV-Anlage?", "Nein. Steuerliche Fragen klärt deine Steuerberatung."]
  ],
  rel: ["74", "77", "76"],
  guard: true
},
{
  id: "76",
  name: "THG-Quote für E-Auto-Besitzer",
  problem: "Ich habe gehört, man bekommt fürs E-Auto jährlich Geld. Wie geht das?",
  summary: "Wir beantragen deine jährliche THG-Quote über einen seriösen Anbieter. Pauschal, in 30 Minuten erledigt.",
  inc: [
    "Auswahl eines seriösen Anbieters",
    "Beantragung mit deinem Fahrzeugschein",
    "Erinnerung im nächsten Jahr"
  ],
  exc: [
    "Höhe der Auszahlung (legt der Anbieter fest)",
    "Steuerberatung"
  ],
  needs: [
    "Foto des Fahrzeugscheins",
    "Deine Bankverbindung für die Auszahlung"
  ],
  steps: [
    "Du schickst Fahrzeugschein und Bankverbindung.",
    "Festpreis und Zahlungslink.",
    "Beantragung in 30 Minuten.",
    "Bestätigung per E-Mail."
  ],
  result: "Ein gestellter Antrag bei einem seriösen Anbieter mit Bestätigung.",
  note: "Festpreis pro Fahrzeug und Jahr",
  fact: null,
  faq: [
    ["Wie viel bekomme ich?", "Das hängt vom Anbieter und Jahr ab. Den aktuellen Betrag siehst du vor der Beantragung."]
  ],
  rel: ["74", "75", "77"],
  guard: true
},
{
  id: "77",
  name: "Dynamischer Stromtarif und Smart Home zum Sparen",
  problem: "Ich habe einen dynamischen Stromtarif, aber die Spülmaschine läuft trotzdem zur teuersten Zeit.",
  summary: "Wir richten dein Zuhause so ein, dass es günstigen Strom von allein nutzt: Tarifwechsel, smarte Steckdosen und Automationen für Spülmaschine, Wallbox oder Wärmepumpe.",
  inc: [
    "Check, ob ein dynamischer Tarif zu dir passt",
    "Unterstützung beim Tarifwechsel",
    "Smarte Steckdosen und Automationen",
    "Einbindung von Wallbox oder Wärmepumpe, wo möglich",
    "Erklärung, wo du die Ersparnis siehst"
  ],
  exc: [
    "Kosten für Geräte und Smart Meter",
    "Elektroinstallation",
    "Zusage einer bestimmten Ersparnis"
  ],
  needs: [
    "Letzte Stromrechnung",
    "Liste deiner großen Verbraucher",
    "WLAN-Zugang"
  ],
  steps: [
    "Du schickst Rechnung und Geräteliste.",
    "Festpreis und Zahlungslink.",
    "Termin vor Ort: Einrichtung der Automationen.",
    "Übergabe mit Erklärung."
  ],
  result: "Ein Zuhause, das Strom zu günstigen Zeiten nutzt, und eine Übersicht, wo du das siehst.",
  note: "Festpreis, Geräte separat",
  fact: null,
  faq: [
    ["Brauche ich einen Smart Meter?", "Für dynamische Tarife in der Regel ja. Wir klären mit dir, wie du einen bekommst."]
  ],
  rel: ["75", "74", "65"],
  guard: false
}
];
