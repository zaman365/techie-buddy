# techiebuddy.de

Static website for TechieBuddy: fixed-price fixes for Amazon, shop and compliance problems.

- No build step. Plain HTML, CSS and a small script.
- Fonts (Space Grotesk, DM Sans) are self-hosted under `assets/fonts` (SIL OFL, see `OFL.txt`). No Google Fonts, no cookies, no tracking.
- Security headers and caching live in `_headers` (Cloudflare Pages format).

## Deploy (Cloudflare Pages)

Connect this repository in Cloudflare Pages with:

- Framework preset: None
- Build command: *(empty)*
- Build output directory: `/`

Every push to `main` deploys automatically.

## Before going fully public

1. Fill in every highlighted placeholder in `impressum.html` and `datenschutz.html`.
2. Make sure `info@techiebuddy.de` receives mail (e.g. Cloudflare Email Routing).
3. Remove the `X-Robots-Tag: noindex` line from `_headers` so search engines can index the site.
