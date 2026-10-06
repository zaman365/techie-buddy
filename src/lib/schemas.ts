// Zod schemas for the public content. Shared by src/content.config.ts and scripts/validate-content.ts.
import { z } from 'astro/zod';

export const CATEGORY_IDS = [
  'compliance',
  'marktplaetze',
  'website',
  'ki',
  'kunden',
  'buero',
  'wachstum',
  'zuhause',
  'branchen-pakete'
] as const;

export const SECTOR_IDS = [
  'online-handel',
  'handwerk',
  'praxen-salons',
  'gastronomie-hotellerie',
  'vereine-gemeinden',
  'kanzleien-bueros',
  'creator-coaches',
  'familien-senioren',
  'energie',
  'nachfolge',
  'internationale-fachkraefte',
  'laendliche-nischen'
] as const;

const nonEmpty = z.string().trim().min(1);
const categoryId = z.enum(CATEGORY_IDS);
const sectorId = z.enum(SECTOR_IDS);

export const serviceSchema = z.object({
  id: z.string().regex(/^(\d{2}|FT)$/),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: categoryId,
  categorySlug: z.string(),
  alsoIn: z.array(categoryId),
  sectors: z.array(sectorId),
  tier: z.enum(['launch', 'launch-reserve', 'next', 'catalog']),
  audience: z.enum(['b2b', 'b2c']),
  name: nonEmpty.max(60),
  problem: nonEmpty,
  summary: nonEmpty,
  includes: z.array(nonEmpty).min(3).max(6),
  excludes: z.array(nonEmpty).min(2).max(4),
  needs: z.array(nonEmpty).min(1),
  steps: z.array(nonEmpty).min(3).max(5),
  result: nonEmpty,
  price: z.object({
    type: z.enum(['fixed', 'from', 'range', 'project', 'recurring']),
    from: z.number().positive(),
    to: z.number().positive().optional(),
    monthly: z.number().positive().optional(),
    display: nonEmpty,
    note: z.string(),
    vat: z.enum(['zzgl. MwSt.', 'inkl. MwSt.'])
  }),
  turnaround: nonEmpty,
  tags: z.array(z.enum(['notfall', 'abo', 'pflicht', 'erprobt'])),
  factNote: z.string().nullable(),
  guardrail: z.boolean(),
  faq: z.array(z.object({ q: nonEmpty, a: nonEmpty })).min(2).max(4),
  related: z.array(z.string()).length(3),
  seo: z.object({ title: nonEmpty.max(60), description: nonEmpty.max(155) }),
  stripePaymentLink: z.union([z.literal(''), z.string().url()]),
  moments: z.array(z.string().regex(/^g\d{2}$/)).min(1),
  keywords: z.array(z.string())
});

export const catalogRowSchema = z.object({
  id: z.string(),
  key: z.string().regex(/^c(252|240)-\d+$/),
  name: nonEmpty.max(60),
  outcome: nonEmpty,
  category: categoryId,
  moment: z.string().regex(/^g\d{2}$/),
  sectors: z.array(sectorId),
  audience: z.enum(['b2b', 'b2c']),
  recurring: z.boolean(),
  price: z.object({ band: z.number().positive(), display: nonEmpty, vat: z.enum(['zzgl. MwSt.', 'inkl. MwSt.']) }),
  urgency: z.enum(['heute', '48h', 'termin']),
  turnaround: nonEmpty,
  delivery: z.enum(['remote', 'vor-ort', 'hybrid']),
  mergedInto: z.string().nullable(),
  keywords: z.array(z.string())
});

export const categorySchema = z.object({
  id: categoryId,
  slug: z.string(),
  name: nonEmpty,
  icon: nonEmpty,
  order: z.number(),
  short: nonEmpty,
  intro: nonEmpty,
  services: z.array(z.string()).min(1),
  problems: z.array(z.object({ id: z.string(), quote: nonEmpty })),
  counts: z.object({ named: z.number(), catalog: z.number() })
});

export const sectorSchema = z.object({
  id: sectorId,
  order: z.number(),
  name: nonEmpty,
  icon: nonEmpty,
  short: nonEmpty,
  intro: nonEmpty,
  problems: z.array(nonEmpty).min(1),
  services: z.array(z.string()).min(1),
  catalogCount: z.number()
});

export const momentSchema = z.object({
  id: z.string().regex(/^g\d{2}$/),
  name: nonEmpty,
  quote: nonEmpty,
  intro: nonEmpty,
  count: z.number()
});
