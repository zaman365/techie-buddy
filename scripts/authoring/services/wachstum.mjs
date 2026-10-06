// Förderung, Team & Nachfolge.
export default [
{
  id: "36",
  name: "Mitarbeiter-Funnel für Handwerksbetriebe",
  problem: "Wir finden keine Gesellen. Auf Stellenanzeigen meldet sich niemand.",
  summary: "Eine mobile Karriereseite und eine Bewerbung über WhatsApp in 60 Sekunden: fünf Fragen, kein Lebenslauf, kein Anschreiben. Dazu zwei Anzeigenmotive für deine Region.",
  inc: [
    "Mobile Karriereseite mit Einblick in den Betrieb",
    "Bewerbung in 60 Sekunden: 5 Fragen per WhatsApp oder Formular",
    "Benachrichtigung bei neuen Bewerbungen",
    "Zwei lokale Anzeigenmotive",
    "Kurze Anleitung zum schnellen Rückmelden"
  ],
  exc: [
    "Anzeigenbudget",
    "Vorauswahl oder Gespräche mit Bewerbenden",
    "Zusage von Einstellungen"
  ],
  needs: [
    "Infos zu Stellen, Benefits und Team",
    "Fotos vom Betrieb und von Baustellen",
    "Zugang zur Website"
  ],
  steps: [
    "Du schickst Stelleninfos und Fotos.",
    "Festpreis und Zahlungslink.",
    "Aufbau von Seite, Bewerbungsweg und Motiven.",
    "Livegang und Übergabe."
  ],
  result: "Eine fertige Karriereseite, ein laufender Bewerbungsweg und zwei Anzeigenmotive.",
  note: "Festpreis, Anzeigenbudget separat",
  fact: null,
  faq: [
    ["Ist das auch etwas für Pflege oder Gastronomie?", "Ja, das Prinzip funktioniert in jeder Branche. Für Pflegeeinrichtungen gibt es im Katalog eine eigene Variante."],
    ["Passt das zu Förderprogrammen?", "Als Teil eines größeren Digitalisierungsprojekts kann es förderfähig sein. Wir prüfen das im Förder-Check."]
  ],
  rel: ["39", "80", "62"],
  guard: false
},
{
  id: "62",
  name: "SAB-geförderte Digitalisierungsprojekte in Sachsen",
  problem: "Ich will digitalisieren, aber 9.000 € kann ich nicht einfach so ausgeben.",
  summary: "Wir bündeln passende Leistungen zu einem förderfähigen Digitalisierungsprojekt von 5.000 bis 10.000 €, unterstützen dich beim SAB-Antrag vor Projektstart und setzen das Projekt danach um. Die SAB fördert berechtigte Erstprojekte mit bis zu 60 %.",
  inc: [
    "Kostenloses Erstgespräch zum Projekt",
    "Projektarchitektur aus passenden Leistungen",
    "Angebot und Unterlagen für den Antrag",
    "Unterstützung im SAB-Portal (du stellst den Antrag)",
    "Umsetzung nach Bewilligung"
  ],
  exc: [
    "Garantie auf Förderung (entscheidet die SAB)",
    "Fördermittelberatung im rechtlichen Sinn",
    "Projektstart vor Antragstellung"
  ],
  needs: [
    "Unternehmensdaten (Sitz in Sachsen, Größe, Umsatz)",
    "Dein Vorhaben in Stichpunkten",
    "Zugang zum SAB-Förderportal"
  ],
  steps: [
    "Kostenloses Erstgespräch: Passt dein Vorhaben?",
    "Projektarchitektur und Angebot.",
    "Du stellst den Antrag vor Projektstart, wir unterstützen.",
    "Umsetzung nach Bewilligung."
  ],
  result: "Ein förderfähig geplantes Projekt, vollständige Antragsunterlagen und nach Bewilligung die Umsetzung.",
  note: "Projektbudget, bis zu 60 % förderfähig für berechtigte Erstprojekte",
  fact: "Laut Programm-Flyer der SAB können berechtigte erste Digitalisierungsprojekte mit bis zu 60 % gefördert werden. Ob das Programm aktuell verfügbar ist, welche Kosten förderfähig sind und dass der Antrag vor Projektstart gestellt wird, prüfen wir für jeden Fall neu.",
  faq: [
    ["Wer stellt den Antrag?", "Du. Antragsteller ist immer dein Unternehmen. Wir bereiten Unterlagen und Angebot vor und begleiten dich im Portal."],
    ["Darf ich vorher schon anfangen?", "Nein. Der Antrag muss vor Projektstart gestellt werden. Deshalb beginnt die Umsetzung erst nach der Bewilligung."],
    ["Ist eine Förderung sicher?", "Nein. Die Entscheidung trifft die SAB. Wir prüfen vorher, ob dein Vorhaben gute Chancen hat, und sagen es dir ehrlich."]
  ],
  rel: ["63", "36", "21"],
  guard: true
},
{
  id: "63",
  name: "Fördermittel-Check für Digitalisierung",
  problem: "Ich weiß, dass es Förderprogramme gibt, aber nicht, welche gerade für mich passen.",
  summary: "Ein bezahlter Check: Welche aktuell offenen Programme von Bund und Land passen zu deinem Betrieb, was ist förderfähig, welche Fristen gelten und wie läuft der Antrag?",
  inc: [
    "Abgleich deines Betriebs mit aktuell offenen Programmen",
    "Was förderfähig ist und was nicht",
    "Fristen und Antragsschritte",
    "Kurzbericht mit Empfehlung"
  ],
  exc: [
    "Antragstellung (auf Wunsch als Projekt)",
    "Garantie auf Förderung",
    "Steuer- oder Rechtsberatung"
  ],
  needs: [
    "Unternehmensdaten: Sitz, Größe, Umsatz",
    "Geplantes Vorhaben und Budget"
  ],
  steps: [
    "Du füllst einen kurzen Fragebogen aus.",
    "Festpreis und Zahlungslink.",
    "Recherche und Abgleich.",
    "Kurzbericht in 48 Stunden."
  ],
  result: "Ein Kurzbericht mit passenden Programmen, Fristen und nächsten Schritten.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Gibt es eine kostenlose Ersteinschätzung?", "Ja, der Förder-Check im Bereich Wissen gibt dir eine erste Orientierung im Browser. Der bezahlte Check prüft die aktuelle Programmlage für deinen Fall."]
  ],
  rel: ["62", "64", "65"],
  guard: true
},
{
  id: "64",
  name: "eVergabe: Zugang zu öffentlichen Aufträgen",
  problem: "Öffentliche Ausschreibungen wären interessant, aber die Portale sind ein Albtraum.",
  summary: "Wir richten deine Konten auf den relevanten Vergabeplattformen ein, stellen Suchaufträge für dein Gewerk und deine Region ein und begleiten dich bei der ersten digitalen Angebotsabgabe.",
  inc: [
    "Registrierung auf den relevanten Vergabeplattformen",
    "Suchaufträge für Gewerk und Region",
    "Technische Voraussetzungen für die Abgabe",
    "Begleitung der ersten digitalen Angebotsabgabe"
  ],
  exc: [
    "Kalkulation oder Inhalt deines Angebots",
    "Zusage eines Zuschlags",
    "Rechtsberatung zum Vergaberecht"
  ],
  needs: [
    "Unternehmensdaten und Nachweise",
    "Gewerk, Region und gewünschte Auftragsgrößen"
  ],
  steps: [
    "Du nennst Gewerk und Region.",
    "Festpreis und Zahlungslink.",
    "Registrierung und Suchaufträge.",
    "Begleitung der ersten Abgabe."
  ],
  result: "Eingerichtete Konten, laufende Suchaufträge und eine begleitete erste Abgabe.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Gewinnt ihr die Aufträge für mich?", "Nein. Wir räumen die technische Hürde aus dem Weg. Den Auftrag gewinnt dein Angebot."]
  ],
  rel: ["63", "62", "52"],
  guard: true
},
{
  id: "69",
  name: "Nachfolge-Ready: digitale Übergabe dokumentieren",
  problem: "Ich will meinen Betrieb in zwei Jahren übergeben. Die IT kennt nur ich.",
  summary: "Wir erfassen alle Systeme, Konten, Lizenzen und digitalen Abläufe und dokumentieren sie in einem sauberen Übergabe-Dossier. Das macht die Übergabe planbar und den Betrieb für Nachfolger verständlicher.",
  inc: [
    "Inventur aller Systeme, Konten und Lizenzen",
    "Dokumentation der digitalen Abläufe",
    "Klärung, welche Konten auf wen laufen",
    "Übergabe-Dossier mit Zugangskonzept",
    "Liste der Risiken vor der Übergabe"
  ],
  exc: [
    "Unternehmensbewertung",
    "Rechts- und Steuerberatung zur Nachfolge",
    "Behebung aller Risiken (separat zum Festpreis)"
  ],
  needs: [
    "Zeit für zwei bis drei Gespräche",
    "Zugang zu den Systemen oder eine Person mit Zugang"
  ],
  steps: [
    "Kurzes Gespräch zum Zeitplan der Übergabe.",
    "Festpreis und Zahlungslink.",
    "Inventur und Dokumentation.",
    "Übergabe des Dossiers."
  ],
  result: "Ein Übergabe-Dossier, das Nachfolger, Käufer oder Berater direkt nutzen können.",
  note: "Festpreis",
  fact: null,
  faq: [
    ["Bin ich M&A-Berater oder IHK-Nachfolgeberater, kann ich das empfehlen?", "Ja. Auf der Partnerseite steht, wie die Zusammenarbeit funktioniert."]
  ],
  rel: ["70", "29", "71"],
  guard: false
},
{
  id: "70",
  name: "Modernisierungs-Sprint für neue Inhaber",
  problem: "Ich habe einen Betrieb übernommen: Fax, Papier und eine Website von 2009.",
  summary: "Ein Sprint über zwei bis drei Wochen: E-Mail auf eigener Domain, Online-Terminbuchung, passende Software und ein Google-Auftritt, der zum neuen Betrieb passt.",
  inc: [
    "Bestandsaufnahme der übernommenen Technik",
    "E-Mail auf eigener Domain",
    "Online-Terminbuchung oder Anfrageweg",
    "Einrichtung passender Branchensoftware",
    "Google-Unternehmensprofil aktualisiert",
    "Übergabe aller Konten auf dich"
  ],
  exc: [
    "Lizenz- und Hardwarekosten",
    "Neue Website (auf Wunsch als Paket)"
  ],
  needs: [
    "Zugänge, die du vom Vorgänger bekommen hast",
    "Deine Prioritäten für die ersten Monate"
  ],
  steps: [
    "Erstgespräch zu Prioritäten.",
    "Festpreis je nach Umfang und Zahlungslink.",
    "Sprint in festgelegter Reihenfolge.",
    "Übergabe mit Dokumentation."
  ],
  result: "Ein modernisierter Grundstock: E-Mail, Buchung, Software und Google-Auftritt, alles auf deinen Namen.",
  note: "Festpreis je nach Umfang",
  fact: null,
  faq: [
    ["Kann das gefördert werden?", "Möglicherweise, wenn es als Digitalisierungsprojekt geplant wird. Wir prüfen das im Förder-Check."]
  ],
  rel: ["69", "62", "52"],
  guard: false
},
{
  id: "88",
  name: "Ankommens-Tech-Paket für Newcomer",
  problem: "Ich bin neu in Deutschland. SIM, Bank, Versicherung, ELSTER: Alles ist digital, aber auf Deutsch.",
  summary: "Die digitale Hälfte des Ankommens, in deiner Sprache (Englisch oder Bengali): deutsche SIM, Bankkonto, Krankenkassen-App, ELSTER-Grundlagen, Bahn- und ÖPNV-Apps und der sichere Umgang mit PayPal und Klarna.",
  inc: [
    "Termin auf Englisch oder Bengali",
    "SIM-Karte und Handyvertrag verstehen",
    "Bankkonto und Banking-App einrichten",
    "Krankenkassen-App und ELSTER-Grundlagen",
    "Bahn- und ÖPNV-Apps",
    "Sicher bezahlen: PayPal, Klarna und Betrugsmaschen"
  ],
  exc: [
    "Rechts-, Aufenthalts- oder Steuerberatung",
    "Gebühren von Banken und Anbietern",
    "Behördengänge in deinem Namen"
  ],
  needs: [
    "Pass und Meldebescheinigung",
    "Dein Smartphone",
    "Was schon erledigt ist"
  ],
  steps: [
    "Du schreibst uns auf Englisch, Bengali oder Deutsch.",
    "Festpreis und Zahlungslink.",
    "Termin vor Ort in Chemnitz oder online.",
    "Checkliste für die nächsten Schritte."
  ],
  result: "Eingerichtete Apps und Konten, verständlich erklärt, und eine Checkliste für alles Weitere.",
  note: "pro Person",
  fact: null,
  faq: [
    ["Do you speak English?", "Yes. We also offer this in Bengali (বাংলা)."],
    ["Können Arbeitgeber das für neue Mitarbeitende buchen?", "Ja. Für Arbeitgeber gibt es außerdem das Onboarding-Kit für internationale Fachkräfte."]
  ],
  rel: ["90", "89", "35"],
  guard: true
},
{
  id: "89",
  name: "Technik für Recruiting-Agenturen (Bangladesch → Deutschland)",
  problem: "Wir vermitteln Pflegekräfte aus Bangladesch, und alles läuft über WhatsApp und Papier.",
  summary: "Wir bauen Bewerberportal, Dokumenten-Workflow, Videointerview-Setup und Status-Dashboards für Agenturen, die Fachkräfte und Auszubildende nach Deutschland vermitteln, zweisprachig und als laufende Betreuung.",
  inc: [
    "Bewerberportal mit strukturierter Erfassung",
    "Workflow für Dokumente und Nachweise",
    "Setup für Videointerviews",
    "Status-Dashboard für Agentur und Arbeitgeber",
    "Zweisprachige Umsetzung (Deutsch/Englisch, Bengali auf Anfrage)"
  ],
  exc: [
    "Rechtliche Beratung zu Visa und Anerkennung",
    "Vermittlungsleistung",
    "Lizenzkosten der Tools"
  ],
  needs: [
    "Ablauf deiner Vermittlung",
    "Dokumente und Status, die erfasst werden sollen"
  ],
  steps: [
    "Erstgespräch zu deinem Ablauf.",
    "Projektangebot zum Festpreis.",
    "Aufbau in Etappen.",
    "Laufende Betreuung."
  ],
  result: "Ein Portal mit Dokumenten-Workflow und Dashboard, dokumentiert und betreut.",
  note: "Projekt plus monatliche Betreuung nach Umfang",
  fact: null,
  faq: [
    ["Wie wird die Betreuung abgerechnet?", "Als monatliche Pauschale nach Umfang, festgelegt im Angebot."]
  ],
  rel: ["90", "88", "36"],
  guard: true
},
{
  id: "90",
  name: "Onboarding-Kit für Arbeitgeber internationaler Fachkräfte",
  problem: "Unsere neuen Pflegekräfte aus dem Ausland kommen nächsten Monat. Wie bereiten wir das vor?",
  summary: "Mehrsprachige Onboarding-Seiten, Dokumenten-Checklisten und die Technik-Einrichtung in der Ankunftswoche: Für Pflegeheime, Hotels und Handwerksbetriebe, die international einstellen.",
  inc: [
    "Mehrsprachige Onboarding-Seite",
    "Checklisten für Dokumente und erste Schritte",
    "Plan für die Ankunftswoche",
    "Technik-Einrichtung für die neuen Mitarbeitenden (wie im Ankommens-Paket)",
    "Ansprechpartner-Übersicht"
  ],
  exc: [
    "Aufenthalts- und arbeitsrechtliche Beratung",
    "Wohnungssuche und Behördengänge",
    "Übersetzung offizieller Dokumente"
  ],
  needs: [
    "Anzahl und Herkunftssprachen der neuen Mitarbeitenden",
    "Infos zu Betrieb, Abläufen und Ansprechpersonen"
  ],
  steps: [
    "Kurzes Gespräch zu Anzahl und Zeitplan.",
    "Festpreis und Zahlungslink.",
    "Aufbau von Seite und Checklisten.",
    "Einrichtung in der Ankunftswoche."
  ],
  result: "Eine fertige Onboarding-Seite, Checklisten und eingerichtete Technik für deine neuen Mitarbeitenden.",
  note: "Festpreis für ein Ankunftsteam",
  fact: null,
  faq: [
    ["Passt das zum Mitarbeiter-Funnel?", "Ja. Viele Betriebe verbinden beides: erst gewinnen, dann gut ankommen lassen."]
  ],
  rel: ["88", "36", "89"],
  guard: true
}
];
