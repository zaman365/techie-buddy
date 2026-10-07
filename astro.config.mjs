// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that must not appear in the sitemap: the component reference and the
// unreviewed legal drafts (see src/content/site.json → legal).
const EXCLUDED = ['/styleguide/', '/agb/', '/widerruf/', '/404'];

export default defineConfig({
  site: 'https://techiebuddy.de',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Strict CSP (style-src 'self'): no inline <style>, everything as files.
    inlineStylesheets: 'never'
  },
  // Shorter markup than the default attribute strategy.
  scopedStyleStrategy: 'class',
  vite: {
    build: {
      // Strict CSP (script-src 'self'): never inline scripts or assets as data.
      assetsInlineLimit: 0,
      // One stylesheet for the whole site: a single render-blocking request, cached across pages.
      cssCodeSplit: false
    }
  },
  prefetch: false,
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.some((p) => page.includes(p))
    })
  ]
});
