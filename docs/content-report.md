# Content report – techiebuddy.de v2

Stand: 6. Oktober 2026. Generated content lives in `src/content/`; the German copy is authored in `scripts/authoring/` and synced with the internal brief data by `npm run content:sync`. `npm run content:check` (runs before every build) validates schemas and prints the counts below.

## Counts

| | |
|---|---|
| Named services (each with its own detail page) | **91** |
| Catalog rows in the source (252 + 240 catalogs) | 492 |
| … marked as source duplicates (`public: false`) | 30 |
| … public rows | 462 |
| … merged into a named service | 93 |
| … merged into another catalog row (same job, different wording) | 55 |
| … listed as their own catalog entry | **314** |
| **Total offers on the site** (91 + 314) | **405** → copy says „über 400“ |
| Pages built | 139 (135 in the sitemap; styleguide, AGB/Widerruf drafts and 404 excluded) |

Per category (named + catalog): Compliance 10 + 15 · Amazon & Marktplätze 10 + 12 · Website & Shop 8 + 43 · KI & Automatisierung 6 + 4 · Sichtbarkeit, Termine & Bewertungen 11 + 56 · Büro-IT, Daten & Sicherheit 12 + 141 · Förderung, Team & Nachfolge 9 + 10 · Zuhause, Familie & Energie 13 + 11 · Spezial-Lösungen für Branchen 12 + 22.

Per buying moment and per sector: run `npm run content:check`.

## Merges

Every merge is listed in [`content-merges.md`](content-merges.md) (generated). All obvious cases from the brief are merged: GPSR data repair → #02, cookie consent repair → #05 (plus Google Consent Mode → #05), whistleblower tool → #67, e-invoice readiness → #03, cash-register reporting and TSE → #68, accessibility quick-fix → #01, family archive → #71, parent tech-care → #73, tender portal → #64, cyber-insurance questionnaire → #79, supplier questionnaire → #78, new-owner sprint → #70, digital succession inventory → #69. Further merges found: Merchant Center disapprovals and product feed diagnostics → #24, Meta Commerce and Pinterest merchant rejections → #11, variation family repair → #09, white-screen/website-down/hack triage → #22, domain email setups → #52, Google profile launch/tune-up → #25, appointment and Calendly setups → #41, WhatsApp Business setups → #37, review systems → #43, kununu cleanup → #80, Zapier/Make first automation and automation hunt → #18, job software for trades → #38, membership software → #49, LUCID/VerpackG → #06, working-time tools → #66, Excel repairs → #56, Access assessment → #57, CRM/catalog import and CSV cleanup → #58, EU file platform for law firms → #81, phone migrations → #35, scam account check → #30, digital estate inventory → #34, solar/PV/THG registrations → #74/#75/#76, arrival setup → #88, international employee setup → #90, no-show workflows → #40, QR menu → #44, card payment for market vendors → #87, self-service shop → #86, stable/driving school/hunting setups → #84/#85/#83, subscription waste → #55, funding fit check → #63, SAB portal workspace → #62.

Merged rows are not listed separately; their German and English names become search keywords of the target, and the target takes the lower price band and the faster urgency.

## How catalog rows were mapped

- **Translation:** each row got an outcome-first German name (≤ 60 characters) and a one-sentence outcome (`scripts/authoring/catalog-de.txt`).
- **Category:** assigned by hand per row, guided by the buying moment (g06 → Compliance, g12/g13/g14/office IT → Büro-IT, g15 → Website, g07/g09/g16 → Sichtbarkeit, marketplace/payment/ads accounts in g01 → Marktplätze).
- **Sectors:** derived from the source sector text with keyword rules in `scripts/build-content.ts` (e.g. „Restaurants“ → Gastronomie, „Trades“ → Handwerk). Rows for „All SMBs“ stay sector-neutral.
- **Recurring offers:** the 20 recurring rows of moment g18 are flagged as „Abo“, show „laufend“ and appear under Betreuung on /pakete/.
- **Audience:** rows for households, families, seniors, solar/EV owners and newcomers are B2C and show „inkl. MwSt.“.

## Assumptions (please confirm)

1. **VAT:** B2B prices are shown „zzgl. MwSt.“; B2C services (field `audience: b2c`) show „inkl. MwSt.“, treating the source price as gross.
2. **Catalog prices** are shown as „ab {Preisband} €“ with „Richtpreis, Festpreis nach kurzer Prüfung“.
3. **Turnaround translations:** `24h` → „24 h“, `1 week` → „1 Woche“, `same day` → „am selben Tag“, `start in 24h` → „Start in 24 h“, `1 visit / remote` → „1 Termin oder Fernhilfe“, `half day` → „½ Tag“, `projects` → „je Projekt“; catalog „Scheduled“ → „nach Termin“.
4. **Price displays:** #89 „ab 1.500 € + Betreuung“ (source: „+ retainer“), #62 „5.000–10.000 €“ (project budget), #17/#40 setup + monthly fee, #73 „49 €/Monat“.
5. **Not published:** the „more savings than the audit costs, or it's free“ promise for #15 and #55 is internal and was left out until you confirm it as a public guarantee.
6. **Colour token:** `--text-3` is `#7D8BA1` instead of `#6E7C92`, because the brief value fails WCAG AA (4.2:1) on raised surfaces.
7. **Icons:** Lucide is licensed ISC (the brief says MIT); compatible, noted for completeness.
8. **SAB example:** the Förderung page shows a 9.000 € example („bis zu 5.400 €“ at 60 %) as an explicitly labelled calculation without guarantee.
9. **Partner page:** referred customers pay the same public fixed prices as everyone else (no surcharge); conditions for non-tax partners „auf Anfrage“.
10. **Proof points:** used exactly as listed in `proof_points_allowed`, brand unnamed.

## Fact checks

Dates applied from `fact_checks_2026_10_06` (Windows 10 consumer ESU to 12.10.2027; E-Rechnung reception since 2025, issuing from 2027/2028; AI Act Annex III 02.12.2027 and product-embedded 02.08.2028, Art. 4 already applies; EUDR 30.12.2026 / 30.06.2027; BFSG since 28.06.2025 with the micro-enterprise exemption for services; SAB checked per client). Additional calendar entries: Zeiterfassung (BAG, 13.09.2022), Hinweisgeberschutz (17.12.2023 for 50–249 staff), Kassenmeldung via ELSTER (since 01.01.2025).

**Verification:** the primary-source URLs could not be fetched from the build environment (egress proxy blocked them). Every date was cross-checked by web search against secondary sources on 6 Oct 2026 and matches. Please re-open the primary links once before going public. „Stand: 6. Oktober 2026“ is shown on the Pflichten-Kalender, checks and fact notes.

## TODO_TUTUL

1. **Impressum:** company/name, address, managing director/owner, register court and number, VAT ID, phone, responsible person (§ 18 MStV) – `src/pages/impressum.astro`. Then set `legal.impressumComplete: true` in `src/content/site.json` and remove `X-Robots-Tag: noindex` from `public/_headers`.
2. **Datenschutz:** controller name and address; confirm the AVV with Cloudflare; payment provider section once Stripe is live – `src/pages/datenschutz.astro`.
3. **Stripe payment links:** fill `stripePaymentLink` per service in `src/content/services/*.json`; the CTA switches to „Jetzt buchen“ automatically.
4. **WhatsApp:** set `contact.whatsapp` in `src/content/site.json` (digits only, international format) to show the WhatsApp buttons.
5. **B2C prices:** confirm that source prices for private customers are gross (incl. VAT).
6. **Own brand:** decide whether the own fashion brand may be named in proof points (currently unnamed).
7. **Bengali review:** all Bengali text on `/bn/` (and the Bengali labels „বাংলা“, „বাংলায় পড়ুন“) is **needs_review** by a native speaker.
8. **AGB and Widerruf:** have both drafted/reviewed by a lawyer, then set `legal.agbReviewed` / `legal.widerrufReviewed` to show them in the footer and sitemap.
9. **Über uns:** a real photo of the operator (no stock), optionally name and a short bio – placeholder in `src/pages/ueber-uns.astro`.
10. **Scope details not in the sources** (currently phrased neutrally): GPSR batch size (#02), number of feedback rounds (#19, #21, #39, #44), mailboxes included in #52, units included in #46, what the #40 monthly fee covers, whether domain and hosting are extra for #21, refund/rework rules (AGB).
11. **Money-back promise** for #15/#55: publish or keep internal.

## Bengali content – needs_review

Marked for native review: H1, intro, audience line, six service one-liners, „So läuft’s“ steps, contact block and button labels on `/bn/`.
