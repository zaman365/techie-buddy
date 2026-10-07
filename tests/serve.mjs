// Minimal static server for QA: serves dist/ like Cloudflare Pages, including the
// headers from dist/_headers (so CSP violations show up in the browser) and _redirects.
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { gzipSync } from 'node:zlib';

const dist = join(process.cwd(), 'dist');
const port = Number(process.env.PORT ?? 4322);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };

function parseHeaders() {
  const rules = [];
  let cur = null;
  for (const line of readFileSync(join(dist, '_headers'), 'utf8').split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    if (!line.startsWith(' ')) {
      cur = { pattern: line.trim(), headers: {} };
      rules.push(cur);
    } else if (cur) {
      const i = line.indexOf(':');
      cur.headers[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return rules;
}
const rules = parseHeaders();
const redirects = readFileSync(join(dist, '_redirects'), 'utf8')
  .split('\n')
  .filter((l) => l.trim() && !l.startsWith('#'))
  .map((l) => l.trim().split(/\s+/));
const match = (pattern, path) => new RegExp('^' + pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$').test(path);

createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  let path = decodeURIComponent(url.pathname);
  for (const [from, to, code] of redirects) if (from === path) return res.writeHead(Number(code), { Location: to }).end();
  for (const r of rules) if (match(r.pattern, path)) for (const [k, v] of Object.entries(r.headers)) res.setHeader(k, v);
  let file = join(dist, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file) && !extname(file) && existsSync(file + '/index.html')) {
    return res.writeHead(308, { Location: path + '/' }).end();
  }
  if (!existsSync(file)) {
    res.statusCode = 404;
    file = join(dist, '404.html');
  }
  res.setHeader('Content-Type', TYPES[extname(file)] ?? 'application/octet-stream');
  const body = readFileSync(file);
  // Compress text like Cloudflare does, so Lighthouse numbers are realistic.
  if (/gzip/.test(req.headers['accept-encoding'] ?? '') && /\.(html|css|js|json|svg|xml|txt)$/.test(file)) {
    res.setHeader('Content-Encoding', 'gzip');
    return res.end(gzipSync(body));
  }
  res.end(body);
}).listen(port, () => console.log(`serving dist on http://localhost:${port}`));
