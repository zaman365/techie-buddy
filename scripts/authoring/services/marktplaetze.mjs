// Amazon & Marktplätze.
export default [
{
  id: "02",
  name: "GPSR-Rettung für Amazon-Seller",
  problem: "Amazon hat meine Listings wegen fehlender GPSR-Angaben gesperrt.",
  summary: "Wir machen deinen Katalog GPSR-konform, per Flat-File statt Handarbeit: Herstellerangaben, verantwortliche Person und Sicherheitsinformationen. Gesperrte Listings bringen wir zur erneuten Prüfung.",
  inc: [
    "Abgleich deines Katalogs mit den GPSR-Pflichtfeldern",
    "Hersteller und verantwortliche Person in der EU hinterlegen",
    "Sicherheitsinformationen und Warnhinweise im Katalog",
    "Massenänderung per Flat-File statt Einzelbearbeitung",
    "Wiedereinreichung unterdrückter oder gesperrter Listings"
  ],
  exc: [
    "Rechtliche Bewertung deiner Produktsicherheit",
    "Erstellung von Sicherheitsdokumenten oder Prüfberichten",
    "Entscheidung von Amazon über die Freischaltung"
  ],
  needs: [
    "Zugang zu Seller Central (Nutzerberechtigung, kein Passwort)",
    "Herstellerdaten und Kontakt der verantwortlichen Person",
    "Vorhandene Sicherheitsinformationen zu deinen Produkten"
  ],
  steps: [
    "Du schickst Katalogumfang und gesperrte ASINs.",
    "Festpreis je nach Katalogumfang und Zahlungslink.",
    "Flat-File-Aufbereitung, Upload und Kontrolle der Fehlerberichte.",
    "Wiedereinreichung und Übergabe mit Vorher-Nachher-Nachweis."
  ],
  result: "Ein GPSR-vollständiger Katalog, ein Upload-Protokoll und eine Liste der wieder eingereichten Listings.",
  note: "pro Katalog-Batch, Festpreis je nach Katalogumfang",
  fact: null,
  faq: [
    ["Garantiert ihr, dass Amazon die Listings freischaltet?", "Nein. Wir liefern vollständige Daten und reichen sauber ein. Ob Amazon freischaltet, entscheidet Amazon."],
    ["Wie groß ist ein Katalog-Batch?", "Das hängt von Varianten und Datenlage ab. Du bekommst den Festpreis nach einem kurzen Blick auf deinen Katalog, bevor du zahlst."],
    ["Habt ihr das schon gemacht?", "Ja. Im eigenen Betrieb haben wir 91 Amazon-Produkte GPSR-konform gemacht, mit genau diesem Ablauf."]
  ],
  rel: ["09", "06", "11"],
  guard: true
},
{
  id: "08",
  name: "A+ Content, der Rückfragen und Retouren senkt",
  problem: "Meine Produktseite sieht hübsch aus, aber Kunden fragen ständig nach der Größe und schicken zurück.",
  summary: "Drei A+ Module mit deutschem Text, gebaut nach einer Methode aus dem eigenen Betrieb: Passform, Größen und die häufigsten Retourengründe werden beantwortet, bevor sie zur Frage werden.",
  inc: [
    "Analyse von Rezensionen, Fragen und Retourengründen",
    "Konzept für 3 A+ Module mit klarer Reihenfolge",
    "Deutsche Texte für alle Module",
    "Bildvorgaben oder Gestaltung aus deinem Material",
    "Upload in Seller Central"
  ],
  exc: [
    "Fotoshooting",
    "Premium-A+ oder Markenshop-Seiten",
    "Freigabe durch Amazon"
  ],
  needs: [
    "Zugang zu Seller Central mit Markenregistrierung",
    "Produktfotos und Größentabellen",
    "Wenn vorhanden: Retourengründe und Kundenfragen"
  ],
  steps: [
    "Du nennst das Produkt und schickst dein Bildmaterial.",
    "Festpreis und Zahlungslink.",
    "Analyse, Konzept, Text und Gestaltung der Module.",
    "Upload, Einreichung und Übergabe der Dateien."
  ],
  result: "Drei eingereichte A+ Module mit deutschem Text, dazu die Dateien und die Analyse für weitere Produkte.",
  note: "pro Produkt",
  fact: null,
  faq: [
    ["Brauche ich eine Markenregistrierung?", "Ja, A+ Content setzt die Amazon-Markenregistrierung voraus. Falls sie fehlt, sagen wir dir vorher, was nötig ist."],
    ["Woher kommt die Methode?", "Aus dem eigenen Betrieb: Wir haben sie für eine eigene Modemarke entwickelt, mit Fokus auf Passform, Größen und Retourengründe."]
  ],
  rel: ["12", "19", "09"],
  guard: false
},
{
  id: "09",
  name: "Flat-File-Chirurgie: Varianten und Massenänderungen",
  problem: "Meine Varianten sind zerschossen, und die Massenänderung hängt seit Tagen.",
  summary: "Parent-Child-Beziehungen reparieren, Varianten zurückholen, Kategorien und Attribute in großen Mengen ändern: per Flat-File und mit erprobten Werkzeugen statt Handarbeit im Seller Central.",
  inc: [
    "Diagnose der Fehlerberichte und Katalogkonflikte",
    "Reparatur von Parent-Child-Beziehungen und Variationen",
    "Massenänderungen an Kategorien und Attributen",
    "Upload und Kontrolle des Verarbeitungsberichts"
  ],
  exc: [
    "Neuanlage ganzer Kataloge",
    "Fälle, die nur der Seller-Support lösen kann (wir bereiten den Fall vor)",
    "Texte und Bilder"
  ],
  needs: [
    "Zugang zu Seller Central (Nutzerberechtigung)",
    "Betroffene ASINs oder SKUs",
    "Screenshots der Fehlermeldungen"
  ],
  steps: [
    "Du schickst die betroffenen ASINs und Fehlermeldungen.",
    "Festpreis je nach Umfang und Zahlungslink.",
    "Flat-File-Korrektur, Upload und Kontrolle.",
    "Übergabe mit Upload-Protokoll und Tipp gegen Wiederholung."
  ],
  result: "Funktionierende Variantenfamilien oder umgesetzte Massenänderungen, belegt durch den Verarbeitungsbericht.",
  note: "pro Fix, je nach Umfang",
  fact: null,
  faq: [
    ["Was ist ein Flat-File?", "Eine Excel-Vorlage von Amazon, mit der viele Produkte auf einmal angelegt oder geändert werden. Richtig eingesetzt spart sie Stunden Handarbeit."],
    ["Geht dabei etwas verloren?", "Wir sichern den Ausgangszustand vor jedem Upload und arbeiten mit Kontroll-Uploads, damit Bewertungen und Verkaufsrang erhalten bleiben."]
  ],
  rel: ["02", "12", "24"],
  guard: false
},
{
  id: "10",
  name: "Amazon-Konto gesperrt? Maßnahmenplan in 24 h",
  problem: "Amazon hat mein Verkäuferkonto gesperrt. Jeder Tag kostet Umsatz.",
  summary: "Wir analysieren die Ursache der Sperrung und schreiben einen professionellen Maßnahmenplan (Plan of Action), der zeigt, was passiert ist, was du geändert hast und wie es nicht wieder passiert.",
  inc: [
    "Analyse der Sperrbegründung und Kontozustandsdaten",
    "Ursachenanalyse mit dir",
    "Maßnahmenplan auf Deutsch oder Englisch",
    "Checkliste der Belege, die Amazon sehen will",
    "Begleitung bei der Einreichung"
  ],
  exc: [
    "Garantie auf Wiederherstellung (die Entscheidung trifft Amazon)",
    "Rechtsberatung",
    "Fälschung oder Beschönigung von Belegen"
  ],
  needs: [
    "Zugang zu Seller Central oder Screenshots der Benachrichtigungen",
    "Rechnungen, Lieferantendaten und weitere angeforderte Belege",
    "Ehrliche Angaben zum Hergang"
  ],
  steps: [
    "Du schickst die Sperrbenachrichtigung.",
    "Festpreis und Zahlungslink.",
    "Ursachenanalyse und Entwurf des Maßnahmenplans zur Freigabe.",
    "Einreichung und Übergabe aller Dokumente."
  ],
  result: "Ein eingereichter Maßnahmenplan mit Belegmappe und ein Präventionsplan für deinen Account.",
  note: "Festpreis pro Fall",
  fact: null,
  faq: [
    ["Wird mein Konto sicher wieder freigeschaltet?", "Das kann niemand versprechen. Wir liefern einen vollständigen, ehrlichen und gut belegten Maßnahmenplan. Die Entscheidung trifft Amazon."],
    ["Wie schnell geht es?", "Den Plan bekommst du innerhalb von 24 Stunden, sobald Zahlung und Unterlagen vorliegen."]
  ],
  rel: ["11", "02", "09"],
  guard: false
},
{
  id: "11",
  name: "Marktplatz-Freischaltung: Merchant Center, Pinterest, TikTok",
  problem: "Google Merchant Center hat meinen Shop gesperrt, und ich verstehe die Begründung nicht.",
  summary: "Bei Sperren und Ablehnungen in Google Merchant Center, Pinterest oder TikTok Shop finden wir die Ursache und liefern einen konkreten Fix-Plan, auf Wunsch mit Umsetzung.",
  inc: [
    "Diagnose von Sperrgrund, Feed und Shop",
    "Prüfung von Pflichtseiten, Domain und Verifizierung",
    "Fix-Plan mit Reihenfolge und Zuständigkeiten",
    "Vorbereitung der erneuten Prüfung"
  ],
  exc: [
    "Garantie auf Freischaltung (entscheidet die Plattform)",
    "Größere Shop-Umbauten (separat zum Festpreis)",
    "Werbebudget"
  ],
  needs: [
    "Zugang zum betroffenen Konto (Nutzerberechtigung)",
    "Screenshots der Sperrmeldung",
    "Zugang zum Shop-Backend für die Umsetzung"
  ],
  steps: [
    "Du schickst die Sperrmeldung.",
    "Festpreis und Zahlungslink.",
    "Diagnose und Fix-Plan.",
    "Umsetzung auf Wunsch und erneute Prüfung beantragen."
  ],
  result: "Eine klare Diagnose, ein umsetzbarer Fix-Plan und, wenn beauftragt, die eingereichte erneute Prüfung.",
  note: "Diagnose und Fix-Plan",
  fact: null,
  faq: [
    ["Welche Plattformen deckt ihr ab?", "Google Merchant Center, Pinterest, TikTok Shop und Meta Commerce. Eine Pinterest-Ablehnung haben wir im eigenen Betrieb selbst gelöst."],
    ["Ist die Umsetzung im Preis enthalten?", "Der Preis umfasst Diagnose und Fix-Plan. Die Umsetzung bekommst du danach zum Festpreis, wenn du willst."]
  ],
  rel: ["24", "10", "14"],
  guard: false
},
{
  id: "12",
  name: "Listing-Audit mit neuem deutschem Text",
  problem: "Meine Listings klingen wie aus dem Übersetzer, und sie verkaufen nicht.",
  summary: "Wir prüfen Titel, Bullet Points, Backend-Suchbegriffe und Bildfolge und schreiben das Listing in natürlichem Deutsch neu. Du bekommst einen Bericht, den du weitergeben kannst.",
  inc: [
    "Audit von Titel, Bullet Points, Beschreibung und Backend-Suchbegriffen",
    "Prüfung der Bildfolge mit Empfehlungen",
    "Neuer deutscher Text, suchwortbasiert",
    "Bericht mit Vorher-Nachher-Vergleich"
  ],
  exc: [
    "Neue Fotos oder Grafiken",
    "A+ Content (eigene Leistung)",
    "Werbekampagnen"
  ],
  needs: [
    "ASIN oder Link zum Listing",
    "Zugang zu Seller Central für den Upload (optional)"
  ],
  steps: [
    "Du schickst die ASIN.",
    "Festpreis und Zahlungslink.",
    "Audit, Suchwortrecherche und Neutext.",
    "Übergabe als Bericht, auf Wunsch mit Upload."
  ],
  result: "Ein Bericht mit Audit und neuem Text, bereit zum Upload.",
  note: "pro Listing",
  fact: null,
  faq: [
    ["Schreibt ihr auch für andere Marktplätze?", "Ja, Otto, Kaufland und eigene Shops auf Anfrage. Der Festpreis gilt pro Listing."],
    ["Verbessert das sicher mein Ranking?", "Ein besserer Text hilft bei Auffindbarkeit und Conversion. Das Ranking hängt aber von vielen Faktoren ab, die niemand allein steuert."]
  ],
  rel: ["08", "15", "19"],
  guard: false
},
{
  id: "13",
  name: "Otto-Marktplatz: Onboarding bis zum ersten Listing",
  problem: "Wir wollen auf Otto verkaufen, kommen aber durch den Bewerbungsprozess nicht durch.",
  summary: "Wir begleiten dich von der Bewerbung über das Mapping deiner Produktdaten bis zu den ersten Live-Listings. Das Otto-Onboarding haben wir im eigenen Betrieb selbst durchlaufen.",
  inc: [
    "Vorbereitung und Begleitung der Händlerbewerbung",
    "Mapping deiner Produktdaten auf das Otto-Format",
    "Anlage der ersten Listings",
    "Kontrolle der Fehlerberichte im Partnerportal"
  ],
  exc: [
    "Zulassungsentscheidung von Otto",
    "Provisionen und Gebühren von Otto",
    "Laufende Kontoführung (auf Wunsch als Betreuung)"
  ],
  needs: [
    "Firmendaten und Unterlagen für die Bewerbung",
    "Produktdaten (Export aus Shop oder Amazon)",
    "Zugang zum Otto-Partnerportal nach der Zulassung"
  ],
  steps: [
    "Kurzer Check, ob dein Sortiment zu Otto passt.",
    "Festpreis und Zahlungslink.",
    "Bewerbung, Datenmapping und erste Listings.",
    "Übergabe mit Anleitung für weitere Produkte."
  ],
  result: "Ein Otto-Account mit ersten Live-Listings, dokumentiertem Datenmapping und einer Anleitung für den Rest deines Sortiments.",
  note: "Festpreis für das Onboarding",
  fact: null,
  faq: [
    ["Nimmt Otto jeden Händler auf?", "Nein, Otto prüft Bewerbungen. Wir bereiten sie bestmöglich vor; die Entscheidung trifft Otto."],
    ["Warum dauert es zwei Wochen?", "Ein Teil der Zeit liegt bei Otto: Prüfung der Bewerbung und Freischaltung. Die Lieferzeit startet, wenn Zahlung, Unterlagen und Daten vorliegen."]
  ],
  rel: ["14", "24", "06"],
  guard: false
},
{
  id: "14",
  name: "TikTok Shop einrichten",
  problem: "Ich will auf TikTok Shop verkaufen, aber die Einrichtung ist undurchsichtig.",
  summary: "Wir richten deinen TikTok Shop ein, synchronisieren deine Produkte und planen die ersten shoppable Inhalte. Unsere eigene Marke ist dort live: Du bekommst dokumentierte Erfahrung, keine Theorie.",
  inc: [
    "Einrichtung des Shops und der Verkäuferdaten",
    "Produkt-Synchronisation mit deinem Shop",
    "Versand- und Rückgabeeinstellungen",
    "Plan für die ersten shoppable Inhalte"
  ],
  exc: [
    "Produktion von Videos",
    "Influencer-Kooperationen",
    "Entscheidung von TikTok über die Freischaltung"
  ],
  needs: [
    "Firmendaten und Unterlagen für die Verifizierung",
    "Zugang zu deinem Shop-System",
    "Dein TikTok-Konto"
  ],
  steps: [
    "Kurzer Check von Sortiment und Unterlagen.",
    "Festpreis und Zahlungslink.",
    "Einrichtung, Synchronisation und Tests.",
    "Übergabe mit Inhaltsplan."
  ],
  result: "Ein eingerichteter TikTok Shop mit synchronisierten Produkten und einem Plan für die ersten Inhalte.",
  note: "Festpreis für die Einrichtung",
  fact: null,
  faq: [
    ["Erstellt ihr auch die Videos?", "Nein. Wir liefern den Plan, welche Inhalte du wie mit Produkten verknüpfst. Für KI-gestützte Produktbilder gibt es eine eigene Leistung."],
    ["Welche Shop-Systeme unterstützt ihr?", "Gängige Systeme wie Shopify; für andere Systeme klären wir den Weg vor der Zahlung."]
  ],
  rel: ["13", "19", "FT"],
  guard: false
},
{
  id: "15",
  name: "Amazon-PPC-Audit: Werbebudget-Verschwendung finden",
  problem: "Meine Werbekosten steigen, aber der Umsatz nicht.",
  summary: "In 48 Stunden finden wir verschwendetes Werbebudget in deinen Amazon-Kampagnen: fehlende negative Keywords, ausufernde Auto-Kampagnen und Kannibalisierung. Du bekommst eine priorisierte Maßnahmenliste.",
  inc: [
    "Analyse der Suchbegriffsberichte",
    "Lücken bei negativen Keywords",
    "Auto-Kampagnen mit hohen Kosten ohne Umsatz",
    "Kannibalisierung zwischen Kampagnen",
    "Priorisierte Maßnahmenliste mit geschätzter Einsparung"
  ],
  exc: [
    "Laufende Kampagnenbetreuung (auf Anfrage als monatlicher Check)",
    "Werbebudget",
    "Umsatzversprechen"
  ],
  needs: [
    "Lesezugriff auf die Amazon-Werbekonsole",
    "Ziel-ACoS oder andere Zielwerte, falls vorhanden"
  ],
  steps: [
    "Du gibst uns Lesezugriff.",
    "Festpreis und Zahlungslink.",
    "Auswertung der letzten Monate.",
    "Bericht mit Maßnahmenliste in 48 Stunden."
  ],
  result: "Ein Bericht mit Fundstellen, geschätzter Einsparung und einer Liste, die du selbst oder mit uns umsetzt.",
  note: "Festpreis für das Audit",
  fact: null,
  faq: [
    ["Setzt ihr die Änderungen auch um?", "Auf Wunsch ja, zum Festpreis nach dem Audit. Als monatlicher Check ist das Audit auch als Betreuung möglich."],
    ["Brauche ich Schreibzugriff?", "Für das Audit reicht Lesezugriff."]
  ],
  rel: ["12", "08", "09"],
  guard: false
},
{
  id: "24",
  name: "Produktfeed reparieren: Google Shopping und Idealo",
  problem: "Google Shopping hat die Hälfte meiner Produkte abgelehnt. Fehlende GTINs, sagt der Bericht.",
  summary: "Wir beheben Feed-Fehler, abgelehnte Produkte und fehlende GTINs in Google Merchant Center und Idealo, damit deine Produkte wieder ausgespielt werden können.",
  inc: [
    "Diagnose der Feed- und Produktfehler",
    "Korrektur von GTIN, Marke, Kategorie und Pflichtattributen",
    "Anpassung der Feed-Regeln oder des Exports",
    "Erneute Einreichung und Kontrolle"
  ],
  exc: [
    "Sperren auf Kontoebene (dafür gibt es die Marktplatz-Freischaltung)",
    "Werbekampagnen und Budget",
    "Neuanlage fehlender GTINs bei GS1"
  ],
  needs: [
    "Zugang zu Merchant Center oder Idealo-Händlerkonto",
    "Zugang zu Shop oder Feed-Tool"
  ],
  steps: [
    "Du schickst einen Screenshot der Diagnose.",
    "Festpreis und Zahlungslink.",
    "Korrektur der Daten und Feed-Regeln.",
    "Neueinreichung und Übergabe mit Protokoll."
  ],
  result: "Ein bereinigter Feed, ein Protokoll der Änderungen und die Liste der wieder eingereichten Produkte.",
  note: "Festpreis pro Feed",
  fact: null,
  faq: [
    ["Was, wenn mir GTINs fehlen?", "Wir zeigen dir, für welche Produkte GTINs nötig sind und wie du sie bekommst, oder setzen eine zulässige Ausnahme, wo es passt."],
    ["Ist das dasselbe wie eine Kontosperre?", "Nein. Bei einer Sperre des ganzen Kontos hilft die Marktplatz-Freischaltung."]
  ],
  rel: ["11", "09", "59"],
  guard: false
}
];
