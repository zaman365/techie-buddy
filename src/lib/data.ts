// Typed access to the public content collections, cached per build.
import { getCollection } from 'astro:content';
import type { z } from 'astro/zod';
import type { serviceSchema, catalogRowSchema, categorySchema, sectorSchema, momentSchema } from './schemas.ts';
import siteJson from '../content/site.json';

export type Service = z.infer<typeof serviceSchema>;
export type CatalogRow = z.infer<typeof catalogRowSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Sector = z.infer<typeof sectorSchema>;
export type Moment = z.infer<typeof momentSchema>;
export type Site = typeof siteJson;

export const site: Site = siteJson;

const TIER_ORDER: Record<Service['tier'], number> = { launch: 0, 'launch-reserve': 1, next: 2, catalog: 3 };

let cache: Promise<Data> | null = null;

export interface Data {
  services: Service[];
  serviceById: Map<string, Service>;
  catalog: CatalogRow[];
  /** Catalog rows listed as their own entry (not merged). */
  catalogListed: CatalogRow[];
  categories: Category[];
  categoryById: Map<string, Category>;
  sectors: Sector[];
  sectorById: Map<string, Sector>;
  moments: Moment[];
  momentById: Map<string, Moment>;
  totalOffers: number;
}

async function build(): Promise<Data> {
  const [svc, cat, cats, secs, moms] = await Promise.all([
    getCollection('services'),
    getCollection('catalog'),
    getCollection('categories'),
    getCollection('sectors'),
    getCollection('moments')
  ]);
  const services = svc.map((e) => e.data as Service).sort((a, b) => a.id.localeCompare(b.id, 'de', { numeric: true }));
  const catalog = cat.map((e) => e.data as CatalogRow).sort(byKey);
  const categories = cats.map((e) => e.data as Category).sort((a, b) => a.order - b.order);
  const sectors = secs.map((e) => e.data as Sector).sort((a, b) => a.order - b.order);
  const moments = moms.map((e) => e.data as Moment).sort((a, b) => a.id.localeCompare(b.id));
  const catalogListed = catalog.filter((r) => !r.mergedInto);
  return {
    services,
    serviceById: new Map(services.map((s) => [s.id, s])),
    catalog,
    catalogListed,
    categories,
    categoryById: new Map(categories.map((c) => [c.id, c])),
    sectors,
    sectorById: new Map(sectors.map((s) => [s.id, s])),
    moments,
    momentById: new Map(moments.map((m) => [m.id, m])),
    totalOffers: services.length + catalogListed.length
  };
}

function byKey(a: CatalogRow, b: CatalogRow): number {
  const [ca, na] = a.key.slice(1).split('-').map(Number);
  const [cb, nb] = b.key.slice(1).split('-').map(Number);
  return cb - ca || na - nb;
}

export function getData(): Promise<Data> {
  cache ??= build();
  return cache;
}

/** Launch tier first, then next wave, then the rest; stable by id. */
export function byTier(a: Service, b: Service): number {
  return TIER_ORDER[a.tier] - TIER_ORDER[b.tier] || a.id.localeCompare(b.id, 'de', { numeric: true });
}

export function serviceUrl(s: Pick<Service, 'categorySlug' | 'slug'>): string {
  return `/leistungen/${s.categorySlug}/${s.slug}/`;
}
export function categoryUrl(c: Pick<Category, 'slug'>): string {
  return `/leistungen/${c.slug}/`;
}
export function sectorUrl(s: Pick<Sector, 'id'>): string {
  return `/branchen/${s.id}/`;
}
export function catalogUrl(r: Pick<CatalogRow, 'key'>): string {
  return `/alle-leistungen/#${r.key}`;
}
export function inquiryUrl(target: { service?: string; katalog?: string }): string {
  if (target.service) return `/kontakt/?leistung=${encodeURIComponent(target.service)}`;
  if (target.katalog) return `/kontakt/?katalog=${encodeURIComponent(target.katalog)}`;
  return '/kontakt/';
}

/** Rounded-down count for copy, e.g. 405 → "über 400". */
export function countPhrase(n: number): string {
  const floor = Math.floor(n / 100) * 100;
  return n > floor ? `über ${floor}` : String(n);
}

export const TAG_LABEL: Record<Service['tags'][number], string> = {
  notfall: 'Notfall',
  abo: 'Abo',
  pflicht: 'Pflicht',
  erprobt: 'Erprobt'
};
export const TAG_TITLE: Record<Service['tags'][number], string> = {
  notfall: 'Start noch am selben Werktag möglich',
  abo: 'Laufende Betreuung',
  pflicht: 'Gesetzliche Pflicht oder Frist',
  erprobt: 'Ablauf im eigenen Betrieb erprobt'
};
