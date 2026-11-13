#!/usr/bin/env node
/**
 * Sirve public/ de la tienda generada con un servidor node plano
 * (sin dependencias) para comprobar los assets estáticos con curl.
 * Uso: node test/serve-static.mjs [ruta-a-la-tienda] [puerto]
 *      curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" http://localhost:8787/ ...
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STORE = path.resolve(process.argv[2] || path.join(__dirname, "..", "ejemplo"));
const PORT = Number(process.argv[3] || 8787);
const PUB = path.join(STORE, "public");
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8", ".md": "text/markdown; charset=utf-8", ".xml": "application/xml", ".json": "application/json" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p === "/") p = "/index.html";
  if (p === "/.well-known/ucp") { res.writeHead(200, { "content-type": "application/json" }); res.end(fs.readFileSync(path.join(PUB, ".well-known/ucp"))); return; }
  const file = path.join(PUB, p);
  if (!file.startsWith(PUB) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync(path.join(PUB, "404.html")));
    return;
  }
  res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
server.listen(PORT, () => console.log(`Sirviendo ${PUB} en http://localhost:${PORT}/`));
