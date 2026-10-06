// KI & Automatisierung.
export default [
{
  id: "16",
  name: "KI-Sichtbarkeits-Audit: Empfiehlt ChatGPT deine Marke?",
  problem: "Fragt man ChatGPT nach meinem Produkt, empfiehlt es nur die Konkurrenz.",
  summary: "Wir testen, ob ChatGPT, Gemini, Perplexity und Co. deine Marke empfehlen, zeigen dir die echten Antworten und liefern eine Fix-Liste, sortiert nach Wirkung.",
  inc: [
    "Tests mit typischen Kundenfragen über mehrere KI-Assistenten",
    "Dokumentation der Antworten mit Screenshots",
    "Vergleich mit den genannten Wettbewerbern",
    "Fix-Liste für Website, Profile und Inhalte, nach Wirkung sortiert"
  ],
  exc: [
    "Umsetzung der Fixes (separat zum Festpreis)",
    "Zusage, dass KI-Assistenten dich künftig nennen"
  ],
  needs: [
    "Deine Marke, Website und wichtigsten Produkte",
    "Zwei bis drei Wettbewerber, falls bekannt"
  ],
  steps: [
    "Du nennst Marke und Produkte.",
    "Festpreis und Zahlungslink.",
    "Tests, Auswertung und Fix-Liste.",
    "Bericht mit Screenshots in 48 Stunden."
  ],
  result: "Ein Bericht mit den echten KI-Antworten, deiner Position gegenüber Wettbewerbern und einer priorisierten Fix-Liste.",
  note: "Audit-Preis, Umsetzung separat",
  fact: null,
  faq: [
    ["Was ist AEO oder GEO?", "Answer Engine Optimization und Generative Engine Optimization: Maßnahmen, damit KI-Assistenten deine Marke finden, verstehen und empfehlen können."],
    ["Kann man KI-Empfehlungen garantieren?", "Nein. KI-Antworten ändern sich. Wir verbessern die Grundlagen, auf die diese Systeme zugreifen, und dokumentieren den Ausgangszustand."]
  ],
  rel: ["25", "12", "FT"],
  guard: false
},
{
  id: "17",
  name: "KI-Kundenservice-Bot für deine Website",
  problem: "Wir beantworten jeden Tag dieselben zwanzig Fragen, oft nach Feierabend.",
  summary: "Ein Chatbot, trainiert auf deine FAQ, Produkte und Regeln, beantwortet Fragen auf Deutsch rund um die Uhr. Einrichtung plus drei Monate Feinabstimmung, danach als monatliche Betreuung.",
  inc: [
    "Aufbereitung deiner FAQ, Produkte und Regeln als Wissensbasis",
    "Einrichtung und Einbau auf deiner Website",
    "Übergabe an einen Menschen bei offenen Fragen",
    "3 Monate Feinabstimmung",
    "Danach Pflege und Tuning für 49 €/Monat"
  ],
  exc: [
    "Kosten des KI-Anbieters oder der Chat-Plattform",
    "Beratung zu medizinischen oder rechtlichen Inhalten",
    "Rechtliche Prüfung des Einsatzes"
  ],
  needs: [
    "Deine häufigsten Fragen und Antworten",
    "Produkt- oder Leistungsinformationen",
    "Zugang zur Website"
  ],
  steps: [
    "Du schickst FAQ und Infos.",
    "Festpreis und Zahlungslink.",
    "Aufbau, Tests mit echten Fragen und Einbau.",
    "Livegang und Feinabstimmung."
  ],
  result: "Ein laufender Bot auf deiner Website, dokumentierte Wissensbasis und ein klarer Weg zum Menschen.",
  note: "Einrichtung plus 49 €/Monat Pflege",
  fact: null,
  faq: [
    ["Wo laufen die Daten?", "Wir wählen mit dir einen Anbieter, der zu deinen Datenschutzanforderungen passt, und dokumentieren die Einstellungen. Die rechtliche Bewertung bleibt bei deiner Datenschutzberatung."],
    ["Kann ich die Betreuung kündigen?", "Ja. Die Konditionen stehen im Angebot, bevor du zahlst."]
  ],
  rel: ["18", "04", "40"],
  guard: false
},
{
  id: "18",
  name: "Automatisierungs-Sprint mit Make, n8n oder Zapier",
  problem: "Wir tippen jede Woche dieselben Daten von einem Programm ins andere.",
  summary: "Ein wiederkehrender Ablauf, etwa Rechnungen, Auftragsweiterleitung, Bewertungsanfragen oder Berichts-Mails, wird in einer Woche komplett automatisiert und dokumentiert.",
  inc: [
    "Aufnahme des Ablaufs mit dir",
    "Umsetzung in Make, n8n oder Zapier",
    "Tests mit echten Daten",
    "Fehlerbenachrichtigung, falls etwas hakt",
    "Dokumentation für dich"
  ],
  exc: [
    "Lizenzkosten der Tools",
    "Mehr als ein Ablauf (jeder weitere zum Festpreis)",
    "Programmierung eigener Schnittstellen"
  ],
  needs: [
    "Beschreibung des Ablaufs mit Beispiel",
    "Zugänge zu den beteiligten Tools"
  ],
  steps: [
    "Du beschreibst den Ablauf.",
    "Festpreis und Zahlungslink.",
    "Umsetzung und Tests.",
    "Übergabe mit Dokumentation."
  ],
  result: "Ein laufender, dokumentierter Ablauf, der ohne Handarbeit läuft.",
  note: "Festpreis pro Ablauf",
  fact: null,
  faq: [
    ["Welches Tool ist das richtige?", "Das hängt von deinen Programmen und deinem Datenschutzbedarf ab. n8n lässt sich zum Beispiel selbst hosten. Wir empfehlen, was passt."],
    ["Was, wenn sich später etwas ändert?", "Für laufende Pflege gibt es eine monatliche Betreuung deiner Automationen."]
  ],
  rel: ["17", "20", "56"],
  guard: false
},
{
  id: "19",
  name: "KI-Produktfotos aus Handyaufnahmen",
  problem: "Ein Fotoshooting können wir uns für 200 Produkte nicht leisten.",
  summary: "Aus deinen Handyfotos werden Produktbilder in Studioqualität: freigestellte Hintergründe, Lifestyle-Szenen und Model-Aufnahmen über einen KI-Workflow. 20 Bilder pro Paket.",
  inc: [
    "20 bearbeitete Bilder",
    "Freistellung und saubere Hintergründe",
    "Lifestyle-Szenen passend zu deiner Marke",
    "Formate für Marktplätze, Shop und Social Media"
  ],
  exc: [
    "Fotoshooting vor Ort",
    "Darstellungen, die das Produkt verfälschen",
    "Nutzung von Markenlogos Dritter"
  ],
  needs: [
    "Handyfotos deiner Produkte (gutes Licht reicht)",
    "Beispiele für den gewünschten Stil"
  ],
  steps: [
    "Du schickst Fotos und Stilbeispiele.",
    "Festpreis und Zahlungslink.",
    "Bearbeitung und Vorschau.",
    "Eine Korrekturrunde, dann Übergabe aller Dateien."
  ],
  result: "20 fertige Bilder in allen benötigten Formaten.",
  note: "für 20 Bilder",
  fact: null,
  faq: [
    ["Darf ich KI-Bilder auf Amazon nutzen?", "Bilder müssen das Produkt korrekt zeigen und die Bildrichtlinien der Plattform erfüllen. Wir achten darauf, dass nichts verfälscht wird."]
  ],
  rel: ["08", "FT", "14"],
  guard: false
},
{
  id: "20",
  name: "KI-Sprechstunde: 90 Minuten für deinen Betrieb",
  problem: "Alle reden über KI. Was davon bringt meinem Betrieb wirklich etwas?",
  summary: "Ein bezahltes 1:1-Gespräch über 90 Minuten: wo KI in deinem Betrieb konkret Zeit oder Geld spart, welche Tools passen und was du dir sparen kannst. Mit schriftlicher Zusammenfassung.",
  inc: [
    "90 Minuten 1:1, online oder vor Ort in Chemnitz",
    "Vorab-Fragebogen zu deinen Abläufen",
    "Konkrete Einsatzideen mit Aufwand und Nutzen",
    "Schriftliche Zusammenfassung mit Tool-Empfehlungen"
  ],
  exc: [
    "Umsetzung (auf Wunsch als eigene Leistung)",
    "Rechtliche Bewertung"
  ],
  needs: [
    "Ausgefüllter Vorab-Fragebogen",
    "Terminwunsch"
  ],
  steps: [
    "Du buchst und füllst den Fragebogen aus.",
    "Wir bereiten uns auf deine Abläufe vor.",
    "90 Minuten Sprechstunde.",
    "Zusammenfassung mit Empfehlungen."
  ],
  result: "Eine schriftliche Liste mit sinnvollen KI-Einsätzen für deinen Betrieb, Tools und nächsten Schritten.",
  note: "für 90 Minuten",
  fact: null,
  faq: [
    ["Ist das die bezahlte Diagnose für alles andere?", "Ja. Für Festpreis-Leistungen gibt es kein kostenloses Erstgespräch. Wenn du erst einmal sortieren willst, ist die KI-Sprechstunde der Einstieg."],
    ["Wann ist ein Termin möglich?", "In der Regel noch in derselben Woche."]
  ],
  rel: ["04", "18", "17"],
  guard: false
},
{
  id: "FT",
  name: "KI-Content-Starterpaket: Fotos, Posts, Google-Profil",
  problem: "Ich weiß, dass ich mehr posten sollte, aber ich habe weder Zeit noch Bilder.",
  summary: "Für Läden und Restaurants: Produktfotos werden aufbereitet, zehn Social-Media-Beiträge erstellt und dein Google-Unternehmensprofil optimiert. Als Paket, ohne dass du KI-Tools lernen musst.",
  inc: [
    "Aufbereitung deiner Produkt- oder Gerichtsfotos",
    "10 Social-Media-Beiträge mit Text",
    "Optimierung deines Google-Unternehmensprofils",
    "Übergabe als Paket zum Planen oder Veröffentlichen"
  ],
  exc: [
    "Laufendes Posten (auf Wunsch als Betreuung)",
    "Werbeanzeigen",
    "Fotoshooting"
  ],
  needs: [
    "Handyfotos",
    "Infos zu Angebot und Aktionen",
    "Zugang zu Google-Profil und Social-Media-Konten"
  ],
  steps: [
    "Du schickst Fotos und Infos.",
    "Festpreis und Zahlungslink.",
    "Bearbeitung, Texte und Profiloptimierung.",
    "Übergabe des Pakets."
  ],
  result: "Aufbereitete Bilder, zehn fertige Beiträge und ein optimiertes Google-Profil.",
  note: "Festpreis als Paket",
  fact: null,
  faq: [
    ["Posten ihr auch für mich?", "Das Paket liefert fertige Beiträge. Laufendes Posten gibt es als monatliche Betreuung."]
  ],
  rel: ["19", "25", "16"],
  guard: false
}
];
