/**
 * validate-content.ts
 *
 * Validates the public content in src/content/ and prints the counts the content
 * report relies on. Runs before every build (npm run build → prebuild) and exits
 * non-zero on any schema or reference error, so a broken edit never ships.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  serviceSchema,
  catalogRowSchema,
  categorySchema,
  sectorSchema,
  momentSchema,
  CATEGORY_IDS
} from '../src/lib/schemas.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const content = join(root, 'src', 'content');
const readJson = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

const errors: string[] = [];
const err = (msg: string) => errors.push(msg);

function check<T>(schema: { safeParse: (v: unknown) => any }, value: unknown, where: string): T | null {
  const r = schema.safeParse(value);
  if (!r.success) {
    for (const issue of r.error.issues) err(`${where}: ${issue.path.join('.') || '(root)'} – ${issue.message}`);
    return null;
  }
  return r.data as T;
}

// ------------------------------------------------------------- load + schema
const serviceFiles = readdirSync(join(content, 'services')).filter((f) => f.endsWith('.json'));
const services = serviceFiles
  .map((f) => check<any>(serviceSchema, readJson(join(content, 'services', f)), `services/${f}`))
  .filter(Boolean) as any[];
const catalog = (readJson(join(content, 'catalog.json')) as unknown[])
  .map((r: any, i) => check<any>(catalogRowSchema, r, `catalog[${r?.key ?? i}]`))
  .filter(Boolean) as any[];
const categories = (readJson(join(content, 'categories.json')) as unknown[])
  .map((c: any) => check<any>(categorySchema, c, `categories[${c?.id}]`))
  .filter(Boolean) as any[];
const sectors = (readJson(join(content, 'sectors.json')) as unknown[])
  .map((s: any) => check<any>(sectorSchema, s, `sectors[${s?.id}]`))
  .filter(Boolean) as any[];
const moments = (readJson(join(content, 'moments.json')) as unknown[])
  .map((m: any) => check<any>(momentSchema, m, `moments[${m?.id}]`))
  .filter(Boolean) as any[];

// ------------------------------------------------------------- references
const byId = new Map(services.map((s) => [s.id, s]));
const slugs = new Set<string>();
for (const s of services) {
  if (slugs.has(s.slug)) err(`duplicate slug ${s.slug}`);
  slugs.add(s.slug);
  for (const r of s.related) if (!byId.has(r)) err(`service ${s.id}: related id ${r} does not exist`);
  if (s.related.includes(s.id)) err(`service ${s.id}: relates to itself`);
  const cat = categories.find((c) => c.id === s.category);
  if (!cat?.services.includes(s.id)) err(`service ${s.id}: not listed in category ${s.category}`);
  if (s.audience === 'b2c' && s.price.vat !== 'inkl. MwSt.') err(`service ${s.id}: B2C price must be inkl. MwSt.`);
  if (s.audience === 'b2b' && s.price.vat !== 'zzgl. MwSt.') err(`service ${s.id}: B2B price must be zzgl. MwSt.`);
  if (!/ €/.test(s.price.display)) err(`service ${s.id}: price display needs a non-breaking space before €`);
}
for (const c of categories) for (const id of c.services) if (!byId.has(id)) err(`category ${c.id}: unknown service ${id}`);
for (const s of sectors) for (const id of s.services) if (!byId.has(id)) err(`sector ${s.id}: unknown service ${id}`);

const rowKeys = new Set(catalog.map((r) => r.key));
for (const r of catalog) {
  if (r.mergedInto && !byId.has(r.mergedInto) && !rowKeys.has(r.mergedInto)) err(`catalog ${r.key}: merged into unknown ${r.mergedInto}`);
  if (r.mergedInto && rowKeys.has(r.mergedInto) && catalog.find((x) => x.key === r.mergedInto)?.mergedInto)
    err(`catalog ${r.key}: merge chain via ${r.mergedInto}`);
  if (!moments.find((m) => m.id === r.moment)) err(`catalog ${r.key}: unknown moment ${r.moment}`);
}

// ------------------------------------------------------------- internal language
const FORBIDDEN = [/goldmine/i, /\bhot\b/i, /panik/i, /angst verkauft/i, /fear buys/i, /zero competition/i, /guilt-carrying/i, /\bscore/i, /dhaka/i, /\bmargin/i];
// Unpublished internal names, stored as SHA-256 so this public file does not reveal them.
// Matched case-sensitively in capitals (the German number "zehn" stays allowed).
const FORBIDDEN_HASHES = new Set([
  'ea046f21a685bb15772e6107cc2968a5ed48151fc07c421b63a517fc822e1d91',
  '3cccf71a642a66c0ac8c4b2f13c2c9c8fe23189572948d6cdc54ca45a2284b1f'
]);
function scan(dir: string) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) scan(p);
    else if (/\.(json|astro|ts|md)$/.test(f)) {
      const text = readFileSync(p, 'utf8');
      for (const re of FORBIDDEN) {
        // "Score" may appear in the English catalog keywords (e.g. "security score sprint"); flag everything else.
        const hits = text.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')) ?? [];
        for (const h of hits) {
          if (/score/i.test(h) && /catalog\.json$/.test(p)) continue;
          err(`internal language "${h}" in ${relative(root, p)}`);
        }
      }
      for (const word of new Set(text.match(/\b[A-ZÄÖÜ]{4,}\b/g) ?? [])) {
        if (FORBIDDEN_HASHES.has(createHash('sha256').update(word).digest('hex'))) err(`unpublished internal name in ${relative(root, p)}`);
      }
    }
  }
}
scan(content);

// ------------------------------------------------------------- report
const listed = catalog.filter((r) => !r.mergedInto);
const mergedNamed = catalog.filter((r) => r.mergedInto && byId.has(r.mergedInto));
const mergedRows = catalog.filter((r) => r.mergedInto && rowKeys.has(r.mergedInto));
const pad = (s: string | number, n: number) => String(s).padEnd(n);

console.log('\nTechieBuddy content check');
console.log('─'.repeat(52));
console.log(`${pad('Named services (must be 91)', 40)}${services.length}`);
console.log(`${pad('Catalog rows (public, from source)', 40)}${catalog.length}`);
console.log(`${pad('  merged into a named service', 40)}${mergedNamed.length}`);
console.log(`${pad('  merged into another catalog row', 40)}${mergedRows.length}`);
console.log(`${pad('  listed as own catalog entry', 40)}${listed.length}`);
console.log(`${pad('Total offers on the site', 40)}${services.length + listed.length}`);
console.log('\nPer category (named + catalog):');
for (const id of CATEGORY_IDS) {
  const n = services.filter((s) => s.category === id).length;
  const c = listed.filter((r) => r.category === id).length;
  console.log(`  ${pad(id, 18)}${pad(n, 4)}+ ${c}`);
}
console.log('\nPer sector (named + catalog):');
for (const s of sectors) console.log(`  ${pad(s.id, 28)}${pad(s.services.length, 4)}+ ${listed.filter((r) => r.sectors.includes(s.id)).length}`);
console.log('\nPer buying moment (catalog):');
for (const m of moments) console.log(`  ${m.id} ${pad(m.name, 48)}${listed.filter((r) => r.moment === m.id).length}`);

const todo: string[] = [];
function findTodos(dir: string) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) findTodos(p);
    else if (/\.(astro|ts|json|md)$/.test(f)) {
      readFileSync(p, 'utf8')
        .split('\n')
        .forEach((line, i) => {
          if (line.includes('TODO_TUTUL')) todo.push(`${relative(root, p)}:${i + 1}`);
        });
    }
  }
}
findTodos(join(root, 'src'));
console.log(`\nTODO_TUTUL markers in src/: ${todo.length}`);
for (const t of todo) console.log(`  ${t}`);

if (errors.length) {
  console.error(`\n✗ ${errors.length} content error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('\n✓ Content valid.\n');
