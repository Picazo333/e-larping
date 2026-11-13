# Informe consolidado — Ki'Xocolatl · Fase 2, WO-E-LARPING

- **Sitio:** https://kixocolatl.mx/ (marca visible: Ki'Xocolatl — "Ki'Xocolatl | Compra chocolate mexicano en línea"; chocolate mexicano, Mérida)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 2 de la WO-E-LARPING (Oleada 2: Cyberpuerta / TANE / Ki'Xocolatl)
- **Método:** 7 frentes en paralelo, archivos exclusivos por frente, solo fuentes públicas. Sin navegador en vivo, sin inicio de sesión, sin compras, sin contacto con la empresa ni con clientes.
- **Convención:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en fuente pública, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada como tal) / **NO VERIFICADO**.
- **Nota de sustitución:** Ki'Xocolatl ocupa el lugar de Cervecería Minerva en la lista de la Fase 2: cervezaminerva.mx muestra "Coming Soon" (parking del hosting), sin tienda propia (vende vía Amazon/Mercado Libre/retail), por lo que Minerva quedó fuera y Ki'Xocolatl — suplente previsto — ocupa su lugar.

## Frentes y archivos fuente

| Frente | Dimensión | Archivo |
|---|---|---|
| F2.1 | Front end | `f1-frontend.md` |
| F2.2 | Back end + stack | `f2-backend-stack.md` |
| F2.3 | SEO/GEO + presencia digital | `f3-seo-geo.md` |
| F2.4 | Redes sociales + embudo | `f4-redes-embudo.md` |
| F2.5 | Precios | `f5-precios.md` |
| F2.6 | Logística como hipótesis | `f6-logistica-hipotesis.md` |
| F2.7 | Pain points | `f7-pain-points.md` |

---

## 0. Resumen ejecutivo

**OBSERVADO.** Ki'Xocolatl es una marca de chocolate mexicano (Mérida; fundador Mathieu Brees; Plantación Ticul de 289 ha, +120,000 árboles resembrados, 20+ años; certificación Cacao Trace; premio AVPA-París 2021: oro a Mejor Chocolate de Origen + bronce Fantasía, entre 180 chocolates de 40 países) que vende en https://kixocolatl.mx/ sobre **Shopify** (confirmado: cabecera `powered-by: Shopify`, `kixocolatl.myshopify.com`, `robots.txt` y sitemap de Shopify, checkout `/checkouts/cn/…/es-mx`), tema Goodwin v2.1 personalizado + constructor EComposer, con **109 productos y 32 colecciones** vía `/products.json` y `/collections.json`, y **agentic-ready con UCP nativo de Shopify** (`/agents.md` 200, perfil UCP v2026-08-25, MCP, `sitemap_agentic_discovery.xml`).

**El negocio en una frase:** una tienda opaca en texto público — la home crawleada el 13 nov 2026 no muestra ningún precio ni banner, el buscador no indexa ninguna ficha de producto y **no se pudo verificar el precio vigente de ningún producto** — que vende marca/origen/autoridad y regalo turístico (tabletas trilingües y marquetas como souvenirs, 4 sucursales en Mérida + 8 en otros estados, museo Choco-Story Uxmal como embudo de experiencia), con envío gratis >$2,000 MXN y ≤2 kg como única mecánica de precio fresca, y **sin devoluciones** por ser alimento (reclamación por defecto solo dentro de 2 horas).

**Tres rasgos que la distinguen:**
1. **Invisible para el buscador, visible para el turista.** Domina su búsqueda de marca pero está ausente del top 10 genérico ("chocolate artesanal mexicano comprar en línea"); `site:kixocolatl.mx` devuelve solo 3 páginas (Acerca, Aviso de Privacidad, Términos) y 0 productos/colecciones/blogs. La venta se apoya en boutiques físicas y turismo, no en SEO transaccional.
2. **Agentic-ready de plantilla, tienda opaca de contenido.** UCP/MCP nativo completo (como Ahal y TANE: plantilla estándar de Shopify) convive con una home de 28 líneas extraíbles, sin precios visibles y sin blog activo observable. La infraestructura para agentes existe; el contenido para humanos es mínimo en texto.
3. **La política más dura de la fase, sin quejas.** "No existen devoluciones de productos por la naturaleza del mismo", reclamación por defecto solo dentro de 2 horas con foto, envío no reembolsable, entrega con INE + foto obligatorias, fecha de entrega no garantizada con un aviso COVID de junio de 2020 todavía publicado — y **cero quejas públicas** por retraso, extravío o chocolate derretido en 18 búsquedas dirigidas. Además: ni Políticas ni Términos mencionan derretido, temperatura, hielo seco ni suspensión estacional.

**Pista previa corregida:** Ki'Xocolatl era suplente de Minerva o de Buna; entró por Minerva (sin tienda propia). Verificado: Shopify **confirmado** (no solo inferido); "Compra chocolate mexicano en línea" es su título real de home.

---

## 1. Qué es Ki'Xocolatl

**OBSERVADO.** Marca de chocolate mexicano de Mérida, fundada por Mathieu Brees. Plantación Ticul: 289 ha, +120,000 árboles resembrados, 20+ años de historia. Certificación Cacao Trace. Premio AVPA-París 2021: oro a Mejor Chocolate de Origen + bronce Fantasía (180 chocolates de 40 países, corroborado por 4 medios). Chocolate premium 75% cacao (100% sustentable, certificado Cacao Trace, ideal para postres/coberturas).

**OBSERVADO.** Familias enumeradas en home: cacao, marquetas, confitados, barras y ediciones especiales. Indicios externos: familias "Chocolate sin azúcar, Confitados, Especiales, Higiene y belleza, Repostería" (ficha de lugar) y líneas de boutique según prensa 2023–2024 (blanco/oscuro/semi-amargo/amargo, sin azúcar, vegano, café, repostería profesional, cuidado corporal con cacao). Catálogo público: **109 productos, 32 colecciones** (vía `/products.json` y `/collections.json`).

**OBSERVADO.** Red física: 4 sucursales en Mérida + 8 en otros estados (cifras 2024–2025); boutiques en zonas turísticas (Santa Lucía, Roma, Polanco, Condesa). Sucursal Santa Lucía: 4.7/5 basada en 48 reseñas en la ficha de Google/Places (local físico, no tienda en línea). Museo Choco-Story Uxmal (mismo fundador) como embudo de experiencia: visita → degustación → tienda de regalos.

---

## 2. Front end (F2.1)

**OBSERVADO.** Plataforma: Shopify, inferido con confianza alta por la firma del CDN — todas las imágenes de la home se sirven desde `www.kixocolatl.mx/cdn/shop/files/` con parámetros `{width}x` y `?v=`. Tema, apps y pasarelas no verificados por este frente (confirmados por F2.2, ver §3).

**OBSERVADO.** Home (única página leída directamente, 13 nov 2026 19:49 UTC): titular "Vive la experiencia ki'xocolatl®" que empuja boutiques físicas al mismo nivel que la compra en línea; familias enumeradas: cacao, marquetas, confitados, barras y ediciones especiales. Bloque "CHOCOLATE PREMIUM 75% CACAO" (100% sustentable, certificado Cacao Trace, ideal para postres/coberturas), secciones "KI'XOCOLATL EN TU COCINA" y "EL MEJOR CACAO DE MÉXICO", y bloque del fundador Mathieu Brees. La extracción fue muy parcial (28 líneas, sin menú, footer ni grid de productos), así que el orden y la ausencia de elementos no se certifican. Mensaje: marca/origen/autoridad, no precio ni urgencia.

**OBSERVADO.** Colecciones y producto: no verificados — el buscador no indexa ninguna URL interna de colección/producto del sitio. Ningún precio vigente del sitio encontrado; el único precio citado ($110/barra, Dónde Ir jul 2023, boutique física) se marca desactualizado y no vigente.

**NO VERIFICADO.** Carrito, checkout, búsqueda y UX (no se pudieron observar sin navegador en vivo ni añadir al carrito, prohibido). No se emiten juicios de UX ni métricas de rendimiento (no se inventa Lighthouse). Contenido y ángulo regalo/turismo en la tienda en línea (fuerte en prensa externa: tabletas trilingües y marquetas recomendadas como souvenirs, sabores de platillos regionales — Cochinita Pibil, Poc Chuc, Donia Way —; no verificado si la tienda en línea tiene colección/mensaje de regalo). Buen Fin: en el texto extraído de la home no aparece mención a Buen Fin/descuento, y la búsqueda no halló ninguna promo de Ki'Xocolatl para 2026 — pero con extracción parcial, la existencia o ausencia de promo queda como **no verificada**.

**NO VERIFICADO (causa principal).** El servicio de lectura devolvió **429** al intentar leer "Acerca de" y no se reintentó ni se rodeó por otra vía — solo la home fue leída directamente. Quedaron sin leer: Acerca de (solo fragmentos del índice de búsqueda), todas las colecciones, todas las fichas de producto, carrito, checkout, buscador y políticas.

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** **Plataforma: Shopify, confirmado sin asumir.** Evidencia convergente: cabecera `powered-by: Shopify`, `Shopify.shop = "kixocolatl.myshopify.com"`, `Shopify.theme` en el HTML, `robots.txt` y sitemap generados por Shopify, checkout `/checkouts/cn/…/es-mx`. Sin marcadores de Magento/WooCommerce/custom.

**OBSERVADO.** Hosting/CDN: Shopify sobre Google Cloud (`x-dc: gcp-us-central1`), frontal Cloudflare (`Server: cloudflare`, `CF-RAY`, `cf-cache-status: DYNAMIC`). DNS: `198.18.118.119` / `198.18.118.120`. HTTPS + HSTS. Moneda MXN, idioma es-MX.

**OBSERVADO.** Front/tema: tema Goodwin v2.1, copia personalizada ("Copy of KiXocolatl Clickster Shop", id 115417022633); constructor de páginas **EComposer**; jQuery + lodash del tema.

**OBSERVADO.** API de catálogo pública: `/products.json` y `/collections.json` abiertos (HTTP 200): **109 productos, 32 colecciones**. `/search.json` devuelve HTML, no JSON.

**OBSERVADO.** Pagos: checkout de Shopify en dominio propio (302 observado, sin carrito). **PayPal v4 confirmado** en el HTML; Visa/MasterCard/American Express mencionadas en los términos del HTML; pago acelerado (Shop Pay/billeteras) inferido con confianza alta por PaymentButton + CSS de portable-wallets. Sin rastro de Conekta, OpenPay, Mercado Pago, OXXO ni SPEI en la home.

**OBSERVADO.** Terceros: GTM `GTM-KRGRHJ4`, Meta Pixel con Conversions API (`facebookCapiEnabled: true`), Monorail de Shopify, HulkApps (Volume Discount + Product Options), WhatsApp (`wa.me/9993696239`), enlace Cacao-Trace, Instagram/Facebook. Sin marcadores de email marketing, app de reseñas ni chat en vivo en la home.

**OBSERVADO — Comercio agentic, hallazgo destacado.** La tienda es **agentic-ready con UCP nativo de Shopify**. `/agents.md` (HTTP 200), `/.well-known/ucp` (perfil UCP versión `2026-08-25`, MCP en `kixocolatl.myshopify.com/api/ucp/mcp`, capacidades: checkout, cart, fulfillment solo shipping, discount, catalog search/lookup, identity linking vía Shop, permalink `/buy`; `payment_handlers: {}`), cabecera `Link: rel="ucp"` en todas las respuestas, y `sitemap_agentic_discovery.xml` apuntando a `agents.md`. Todo con aspecto de plantilla estándar de Shopify, no integración a medida.

**NO VERIFICADO.** Plan y versión de Shopify (SaaS, sin versión pública); listado exacto de métodos de pago del checkout (meses sin intereses, OXXO, SPEI — solo visible con carrito, fuera de alcance); contenido interno del contenedor GTM; email marketing, app de reseñas y chat por widget (ausencia solo en la home); emisor del certificado TLS (la lectura directa falló por intercepción del proxy local, no por el sitio); funcionamiento real del endpoint MCP (no invocado); políticas de envío/términos (las rutas `/policies/…` probadas dieron 404). **Ninguna lectura devolvió 429 ni expiró** en este frente, por lo que no hubo resultados "desconocidos" por rate limit.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Buscador y marca: la marca domina su búsqueda de marca — home con título "Ki'Xocolatl | Compra chocolate mexicano en línea" (observado 13 nov 2026) y fichas de lugar de Mérida arriba, con la sucursal Santa Lucía en 4.7★ / 48 reseñas. En cambio, en la búsqueda genérica "chocolate artesanal mexicano comprar en línea" no apareció en el top 10 observado (ganaron MaríaCacao, Nawal, Cuna de Piedra y Amazon): SEO de marca/reputación, no de categoría transaccional.

**OBSERVADO.** Indexación y técnica: `site:kixocolatl.mx` devolvió solo 3 páginas (Acerca, Aviso de Privacidad, Términos) y 0 resultados para productos/colecciones/blogs — muestra, no conteo. robots.txt es el estándar permisivo de Shopify, con líneas de `agents.md` y UCP/MCP para agentes de compra. El sitemap índice lista 5 sub-sitemaps (productos, páginas, colecciones, blogs y uno agentic); los sub-sitemaps de páginas, blogs y colecciones devolvieron **429 y no se reintentaron**, por lo que su contenido es desconocido, no ausente.

**OBSERVADO.** GEO / citabilidad: no se interrogó a ningún motor de IA (NO VERIFICADO). Lo que tiene a favor: historia con datos duros (Plantación Ticul 289 ha, +120,000 árboles resembrados, 20+ años), premio AVPA-París 2021 (oro Mejor Chocolate de Origen + bronce Fantasía, 180 chocolates de 40 países, corroborado por 4 medios) y certificación Cacao Trace. Lo que le falta: sin páginas-respuesta ni FAQ, sin blog activo observable, sin datos estructurados diferenciadores observables, y su contenido más citado (el premio) vive en medios de terceros, no en su dominio.

**OBSERVADO.** Autoridad y canales: cobertura turística/gastronómica sólida y repetida (Yucatán Today 2024, Heraldo 2025, Donde Ir 2021/2023, Food and Travel, The Happening 2025, Airbnb como recomendación local) y red física de 4 sucursales en Mérida + 8 en otros estados (cifras 2024–2025). Canales: IG `kixocolatl` y `@kixocolatl_cdmx`, FB "Ki Xocolatl" y pedidos por WhatsApp; sin cuenta oficial de TikTok encontrada por este frente (ver §9, C5: F2.4 sí encontró el handle con 2 videos indexados) y sin presencia observada en Amazon/Mercado Libre (lo que aparece es "Xiocolat", marca distinta). **Buen Fin:** cero resultados de la marca y ninguna mención en el extracto de la home el 13 nov 2026.

**NO VERIFICADO.** Posiciones/tráfico/volúmenes (sin herramientas de medición); contenido de los sub-sitemaps (429, sin reintento); JSON-LD y meta description (la lectura de texto no expone código fuente); publicidad pagada y UTM (no se consultó Ad Library); citación real en motores de IA (no interrogados); seguidores/engagement en redes; número actual de sucursales y vigencia de las de CDMX; ficha de TripAdvisor; artículos de blog y venta en marketplaces.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Cuentas oficiales: **tres redes confirmadas**. Instagram @kixocolatl: cuenta business, **13,234 seguidores, 955 seguidos**, bio enlaza a kixocolatl.mx (lectura directa de perfil, 13 nov 2026). Facebook @kixocolatl: cuenta profesional, **18,346 seguidores** (misma fecha; ~39% más que Instagram). TikTok @kixocolatl existe (dos videos indexados), y hay una cuenta local CDMX @kixocolatl_cdmx citada por Donde Ir (2023) y Food and Travel para Roma/Polanco. Sin evidencia de X, YouTube o Pinterest.

**OBSERVADO.** Contenido: no se pudo observar ritmo, formatos ni captions en ninguna red — Instagram y Facebook solo devolvieron la ficha del perfil (sin feed), y TikTok y @kixocolatl_cdmx devolvieron 429 y no se reintentaron por regla. Los ejes temáticos reportados son solo los del sitio y prensa (origen "del grano a la barra", certificación Cacao Trace, misión de cuatro pilares, fundador Mathieu Brees, "Ki'Xocolatl en tu cocina"), marcados como inferencia, no como posts observados.

**OBSERVADO.** Embudo: **omnicanal y turístico** — bio de Instagram → kixocolatl.mx (Shopify) o boutique física; la home lo dice en su primer mensaje ("Vive la experiencia ki'xocolatl® — Visita nuestras boutiques físicas…"). El regalo es el posicionamiento: tabletas trilingües y marquetas como souvenirs, más línea de higiene y belleza. El museo Choco-Story Uxmal (mismo fundador) funciona como embudo de experiencia: visita → degustación → tienda de regalos. No se encontró rastro de paid social con UTM ni colaboraciones/embajadores nombrados.

**OBSERVADO.** Buen Fin 2026: no se constató ninguna promo de Ki'Xocolatl — ni en el texto rastreado de la home el 13 nov (primer día, 19:49 UTC), ni en ninguna búsqueda pública. No se afirma que no exista; solo que no hay evidencia observable.

**NO VERIFICADO.** Ritmo y captions en las tres redes; seguidores/bio/actividad de TikTok y de @kixocolatl_cdmx (ambos 429, no reintentados); existencia de X/YouTube/Pinterest, newsletter y WhatsApp; cualquier campaña pagada (no se consultaron bibliotecas de anuncios); promo de Buen Fin en redes o tienda física; pie de página del sitio (enlaces sociales) y checkout; relación formal con el EcoMuseo del Cacao de Ticul; precios vigentes de barras (los citados son de prensa 2023–2025).

---

## 6. Precios (F2.5)

**OBSERVADO.** Precios observados: la tienda es opaca en texto público — la home crawleada el 13 nov 2026 (19:49 UTC) no muestra ningún precio ni banner, y el buscador no indexa ninguna ficha de producto de `kixocolatl.mx` (solo home, "Acerca de" y "Términos"). El único precio atribuible a la marca es histórico y estancado: **barra $110 MXN** (dondeir.com, publicado 7 jul 2023). No se inventó ningún precio; todas las categorías (barras, marquetas, confitados, kits/boxes, especiales, repostería) quedan con precio NO VERIFICADO.

**OBSERVADO.** Promociones: no se observó ninguna promo de Buen Fin el día 1 (ni en home ni en búsquedas), ni cupones, ni MSI, ni descuento por volumen, ni suscripción/club, ni liquidación. La única mecánica de precio documentada con frescura de hoy es el **envío gratis en órdenes >$2,000 MXN y ≤2 kg**, con exclusión expresa de Especiales, Repostería, Kits, Boxes y productos ≥1 kg (Términos, crawl 13 nov 2026).

**OBSERVADO.** Costos adicionales: precios en MXN con IVA desglosado y envío excluido; pago con Visa/MC/Amex/PayPal (sin MSI mencionado); **no hay devoluciones** por ser alimento, solo reclamación por defecto dentro de 2 horas de la recepción y sin reembolso del envío. La página de políticas de envío no pudo leerse: devolvió **429 y no se reintentó**, por regla del frente.

**INFERIDO.** Efecto de espera (hipótesis): no hay motivo estructural para esperar — no hay promo temporal observada y el único ahorro (envío gratis) es permanente; el incentivo real es de cesta (llegar a $2,000), no de calendario. La única razón plausible para esperar sería una edición de temporada, motivo de surtido, no de precio.

**OBSERVADO (comparación).** El comparable más cercano, Chocolates Rocío, vende la barra artesanal a **$160 MXN** estable 2024→2026 (jun 2026) y el lingote a $1,200; Cacep barra 85 g a **$118** en Rappi (~10 nov 2026). El segmento 2026 se acota en ~$118–$160 por barra. Se documenta y excluye explícitamente a **Xiocolat** (otra marca, $489–$2,599), trampa frecuente de búsqueda por el nombre similar. El Chocolate del Bienestar ($14/$38/$96) se incluye solo como piso no comparable.

**NO VERIFICADO.** El precio vigente de **todos** los productos de la tienda; existencia de promo de Buen Fin en checkout/redes/boutique; volumen/mayoreo, cupones, MSI, suscripción, kits/boxes (precio y composición); costo de envío bajo el umbral; precios de boutique física actuales y en marketplaces. La afirmación sobre Buen Fin vale solo para el 13 nov (crawl 13:49 CST); una promo lanzada 14–17 nov no quedaría reflejada.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Inventario: en Términos §1.3/§1.6, la confirmación del pedido no confirma disponibilidad ni precio; hay verificación previa al envío y el contrato nace solo con la Confirmación de Envío. INFERIDO (media): flujo compatible con stock propio limitado o lote, sin poder distinguirlo. H1–H3 formuladas con falsadores.

**OBSERVADO.** Salida de excedente: no se encontró outlet, remate ni liquidación de Ki'Xocolatl en búsqueda ni en políticas. El drenaje OBSERVADO es multicanal: boutiques (prensa: 4 Mérida + 8 otros estados en 2024, Roma/Polanco en CDMX), souvenir turístico y presencia en hoteles/tiendas/supermercados/farmacias. Logística inversa casi nula por contrato: no hay devoluciones (§1.8.1), reclamación por calidad solo 2 h con foto, envío no reembolsable.

**OBSERVADO.** Mensajerías: solo **Estafeta y FedEx**, nombradas en los tres niveles de Políticas de Envío (mayo 2025). Términos solo dice "empresas de logística" genérico. No se inventó ninguna otra mensajería.

**OBSERVADO.** Costos y tiempos (solo publicado, mayo 2025): Gratis ≥$2,000 MXN (excepto zonas extendidas, ≤2 kg volumétricos, excluye Especiales/Repostería/Kits/Boxes/≥1 kg), 1–4 días; Estándar $400, 2–6 kg, 2–6 días; Volumen $495, 6–8 kg, 2–4 días. Corte: lun–mié y antes del jueves 15:00 sale ese día a ruta; fuera de ese rango, sale el lunes. Tarifa para <2 kg y <$2,000 solo se ve en checkout.

**OBSERVADO (ausencia en las páginas leídas) — Calor.** Ni Políticas ni Términos mencionan derretido, temperatura, hielo seco ni suspensión estacional. Contexto sectorial citado aparte (14–18 °C óptimo, refrigerado 5–10% más caro). H7–H8 sobre gestión no declarada o asumida como merma.

**MODELO PROPIO (§6, F2.6 — no son cifras de Ki'Xocolatl).** Con supuestos declarados S1–S8 y rangos amplios, costo logístico por pedido ~$210–$515+merma (ligero), ~$395–$790+merma (medio), ~$585–$1,020+merma (pesado). Ninguna cifra del modelo es dato de Ki'Xocolatl; las tarifas publicadas solo se usan como ancla externa. El envío gratis solo conviene desde ~$1,800–$2,200 de ticket.

**OBSERVADO — Discrepancias reportadas (no resueltas).** Plazo invertido Estándar (2–6 días) vs Volumen (2–4 días); línea de Volumen que dice "envío estándar"; nota COVID jun 2020 (sin garantía de fecha) vs plazos 2025; tarifas con rótulo "MAYO 2025" aún publicadas el 13 nov 2026 sin actualización de Buen Fin; conteo de sucursales sin total único; "asociación Choco-Story" (prensa) vs Choco-Story como museo independiente. Se evitó atribuir a Ki'Xocolatl políticas de CacaoMex, Que Bo! u otras marcas.

**NO VERIFICADO.** Stock por SKU y conteo de agotados (la lectura de `/collections/all` devolvió 429; por regla no se reintentó), producción por lote vs stock, outlet/saldos, mensajerías distintas de Estafeta/FedEx, exprés, pickup, envío internacional, tarifa ligera no-gratis y >8 kg, recargo de zona extendida, promoción de envío Buen Fin 2026, empaque térmico/hielo seco, suspensión por calor, número actual de sucursales, y cualquier costo/margen interno de Ki'Xocolatl.

---

## 8. Pain points (F2.7)

**OBSERVADO.** Reembolsos/devoluciones (política, no queja): los Términos leídos el 13 nov 2026 dicen "No existen devoluciones de productos por la naturaleza del mismo", reclamación por defecto solo dentro de **2 horas** desde la recepción (con foto, por teléfono), y reembolso —si procede— solo del valor de los productos, envío no reembolsable. Es la fricción de política más dura del frente; no se encontró ningún cliente quejándose de haberla sufrido.

**OBSERVADO.** Envíos: fecha de entrega no garantizada con un aviso COVID de junio 2020 todavía publicado; envío gratis solo >$2,000 MXN y ≤2 kg, excluyendo Especiales, Repostería, Kits, Boxes y ≥1 kg; entrega con INE + foto obligatorias; reposición por extravío solo si se comprueba pérdida legítima ante la paquetería. **Cero quejas públicas por retraso, extravío o chocolate derretido en 18 búsquedas dirigidas.**

**OBSERVADO — Lo positivo (con evidencia).** Sucursal Santa Lucía con 4.7/5 basada en 48 reseñas en la ficha de Google/Places (local físico, no tienda en línea); consejos de locales en Airbnb con texto legible ("el mejor chocolate de México", "chocolate exquisito", "mejores souvenirs"); prensa positiva (medalla de oro AVPA 2021, certificación Cacao Trace). Sin perfil en Trustpilot, sin listados con reseñas en Amazon/Mercado Libre, sin promo de Buen Fin 2026 encontrada. La ausencia de quejas se reporta como hallazgo de baja visibilidad, no como prueba de satisfacción.

**OBSERVADO — Separación de revendedores.** Ningún resultado de Amazon/Mercado Libre era Ki'Xocolatl (eran Xiocolat, Lindt, Sicao, etc.); la única queja de "servicio muy malo" en resultados era de Kaokao (Cozumel), no de Ki'Xocolatl, y se excluyó expresamente.

**NO VERIFICADO.** Contenido de la página de políticas de envío (`/pages/politicas-de-envio`): el intento de lectura devolvió **429 y no se reintentó** por regla del encargo — plazos estándar, paqueterías, costo bajo el umbral y tratamiento de chocolate derretido quedan sin verificar. Reseñas de producto dentro de kixocolatl.mx, página propia de reembolso separada de los Términos, tiempos de respuesta de correo/teléfono/WhatsApp, precios actuales en línea y promos de Buen Fin, embalaje con control de temperatura, comentarios de Instagram/Facebook (sin inicio de sesión) y quejas en PROFECO no indexadas en web. Cada afirmación del informe lleva etiqueta OBSERVADO / INFERIDO (con confianza) / HIPÓTESIS / NO VERIFICADO; no se inventaron porcentajes, conteos de quejas ni puntuaciones, y no se reprodujeron datos personales de ningún reclamante.

---

## 9. Verificación global (cierre de sitio)

### C1 — Precios vigentes: ninguno verificado (HUECO CENTRAL, DECLARADO)
F2.1 (ningún precio vigente del sitio encontrado; solo $110/barra de jul 2023, desactualizado) y F2.5 (precio vigente de **todos** los productos NO VERIFICADO; segmento ~$118–$160/barra solo por comparables) coinciden. F2.2 confirma el catálogo (109 productos) pero no leyó precios. Resolución: **este informe no contiene ningún precio vigente de Ki'Xocolatl**; el único precio atribuible a la marca es histórico ($110, jul 2023). No se cita como vigente en ningún apartado.

### C2 — Tarifas de envío mayo 2025 aún publicadas en nov 2026 (SIN ACTUALIZAR, REPORTADO)
F2.6: las tarifas publicadas llevan rótulo "MAYO 2025" y siguen publicadas el 13 nov 2026 sin actualización de Buen Fin. F2.5 confirma la misma mecánica (gratis >$2,000 y ≤2 kg, con exclusiones) desde los Términos con crawl del 13 nov 2026. Resolución: la mecánica de envío gratis es vigente en los Términos (crawl 13 nov); las tarifas Estándar $400 / Volumen $495 son de mayo 2025 y no se sabe si siguen vigentes. Se consignan con su fecha.

### C3 — Plazo invertido Estándar vs. Volumen (DISCREPANCIA SIN RESOLVER)
F2.6: Estándar $400, 2–6 kg, **2–6 días**; Volumen $495, 6–8 kg, **2–4 días**. El envío más pesado y caro tarda menos que el estándar. Además, una línea de Volumen dice "envío estándar". No se pudo resolver con fuentes públicas; se reporta como discrepancia de la propia política, no como error de lectura.

### C4 — Nota COVID jun 2020 vs. plazos 2025 (DOCUMENTO DESACTUALIZADO, REPORTADO)
F2.6 y F2.7: la fecha de entrega no está garantizada con un aviso COVID de junio de 2020 todavía publicado, conviviendo con plazos de 2025 (1–4 días gratis, 2–6 días estándar). Es un documento desactualizado visible al cliente; se reporta como tal.

### C5 — TikTok: handle con 2 videos vs. "sin cuenta oficial encontrada" (RESUELTO A FAVOR DE F2.4, CON MATIZ)
F2.3 no encontró cuenta oficial de TikTok en sus búsquedas y lo marcó NO VERIFICADO. F2.4 encontró el handle **@kixocolatl con dos videos indexados** (https://www.tiktok.com/@kixocolatl/video/7622886337934331166 y .../7626113628382579998) y descartó expresamente los homónimos (@xocolatl_confi, @xocoatltuxtlachico2, @xolxocolate_oficial, etc.). Resolución: **el handle @kixocolatl existe con 2 videos indexados**; lo que queda NO VERIFICADO es el perfil (seguidores, bio, ritmo, captions — lectura con 429) y, por tanto, su estatus oficial no está confirmado por el perfil mismo. Se consigna el handle como existente y su oficialidad como no verificada por perfil.

### C6 — Catálogo: 109 productos por API vs. 0 indexados (BRECHA DE INDEXACIÓN, NO AUSENCIA)
F2.2: `/products.json` y `/collections.json` abiertos con 109 productos y 32 colecciones. F2.1 y F2.3: el buscador no indexa ninguna URL interna de producto/colección (`site:` solo 3 páginas). No hay contradicción: el catálogo existe y es legible por API, pero no está indexado en búsqueda. Es un hallazgo de SEO (brecha de indexación), no de catálogo.

### C7 — Sucursales: 4 + 8 (CIFRAS DE PRENSA 2024–2025, SIN TOTAL ÚNICO)
F2.1, F2.3 y F2.6 coinciden: 4 sucursales en Mérida + 8 en otros estados (cifras de prensa 2024–2025). F2.6 señala que no hay un total único y F2.3 que la vigencia de las de CDMX no está verificada. Se consignan las cifras con su fecha y la vigencia como NO VERIFICADA.

### C8 — Choco-Story: "asociación" vs. museo independiente (SIN RESOLVER)
F2.6: la prensa habla de "asociación Choco-Story" mientras Choco-Story Uxmal es un museo independiente del mismo fundador. F2.4 documenta el museo como embudo de experiencia (visita → degustación → tienda de regalos). La relación formal con el EcoMuseo del Cacao de Ticul queda NO VERIFICADA (F2.4). Se consigna el museo como embudo y la relación formal como no verificada.

### C9 — Agentic: completo y activo (CONFIRMADO POR DOS FRENTES)
F2.2 (lectura directa: `/agents.md` 200, `/.well-known/ucp` 200, perfil UCP 2026-08-25, MCP, `Link: rel="ucp"`, `sitemap_agentic_discovery.xml`) y F2.3 (robots.txt con líneas de `agents.md` y UCP/MCP; sitemap índice con sub-sitemap agentic) coinciden: Ki'Xocolatl está preparada para comercio agentic con la plantilla estándar de Shopify. Ninguna lectura devolvió 429 en F2.2.

### C10 — Buen Fin: cero evidencia en cuatro frentes (AUSENCIA OBSERVADA EL 13 NOV, CON RESERVA)
F2.1 (sin mención en el texto extraído de la home), F2.3 (cero resultados de la marca), F2.4 (ninguna promo constatada en home ni búsquedas) y F2.5 (ninguna promo el día 1; la afirmación vale solo para el 13 nov, crawl 13:49 CST) coinciden: no hay evidencia observable de promo de Buen Fin de Ki'Xocolatl. Reserva de F2.5: una promo lanzada 14–17 nov no quedaría reflejada; y la extracción parcial de la home (28 líneas) no permite afirmar la ausencia en toda la tienda. Se consigna como ausencia observada el 13 nov, no como hecho sobre toda la campaña.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Precio vigente de todos los productos** (ver C1); kits/boxes (precio y composición); volumen/mayoreo, cupones, MSI, suscripción.
2. **Contenido de la página de políticas de envío** (`/pages/politicas-de-envio`, 429); plazos estándar, costo bajo el umbral, tarifa ligera no-gratis y >8 kg, recargo de zona extendida, exprés, pickup, envío internacional.
3. **Empaque térmico / hielo seco / suspensión por calor** (ausencia en las páginas leídas; ver §7); stock por SKU y conteo de agotados (`/collections/all` con 429).
4. **Ritmo, captions y seguidores de TikTok y @kixocolatl_cdmx** (429); feed de IG/FB (solo ficha de perfil); existencia de X/YouTube/Pinterest, newsletter y WhatsApp como canal visible; campañas pagadas.
5. **Contenido de los sub-sitemaps** (páginas/blogs/colecciones con 429); JSON-LD y meta description; posiciones/tráfico/volúmenes; citas en motores de IA (ninguno interrogado).
6. **Número actual de sucursales y vigencia de las de CDMX**; ficha de TripAdvisor; artículos de blog; venta en marketplaces.
7. **Reseñas de producto dentro de kixocolatl.mx**; tiempos de respuesta de correo/teléfono/WhatsApp; página propia de reembolso separada de los Términos; quejas en PROFECO no indexadas.
8. **Funcionamiento real del endpoint MCP** (no invocado); contenido interno del contenedor GTM; listado exacto de métodos de pago del checkout (MSI, OXXO, SPEI).
9. **Producción por lote vs. stock**; outlet/saldos; mensajerías distintas de Estafeta/FedEx; cualquier costo/margen interno.
10. **Relación formal con el EcoMuseo del Cacao de Ticul** y con Choco-Story (ver C8); vigencia de la asociación.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **El catálogo existe aunque Google no lo vea — pero el cliente no compra por API.** 109 productos legibles por `/products.json` y 0 indexados en búsqueda: Ki'Xocolatl vende por boutique y turismo, no por SEO. Para la empresa nueva: la indexación de producto es infraestructura de venta, no de vanidad — si el buscador no indexa las fichas, el cliente que busca "chocolate artesanal comprar en línea" nunca llega.
2. **La opacidad de precio es una decisión con costo.** Ningún precio vigente verificable en texto público: el cliente no puede comparar sin entrar a la tienda. Para la empresa nueva: publicar el precio en la ficha y en el texto indexable es lo que permite comparar y citar; la opacidad protege el margen de boutique y pierde el cliente de búsqueda.
3. **El envío gratis por cesta, no por calendario.** >$2,000 y ≤2 kg, permanente, con exclusiones explícitas: el incentivo es llegar al ticket, no esperar a una fecha. Para la empresa nueva: un umbral permanente con exclusiones claras es más limpio que una promo fechada — pero hay que publicar también la tarifa por debajo del umbral (aquí solo se ve en checkout).
4. **En alimento, la política de no-devolución debe ser visible antes del pago.** "No existen devoluciones", reclamación en 2 horas con foto, envío no reembolsable, entrega con INE + foto: es la política más dura de la fase y está en los Términos. Para la empresa nueva: si no hay devoluciones, que esté en la ficha y en el checkout, no solo en los Términos; y que la ventana de reclamación por defecto sea humana (2 horas es un plazo que el cliente no puede cumplir si no está en casa).
5. **El calor es un riesgo logístico que hay que declarar o gestionar.** Ni Políticas ni Términos mencionan derretido, temperatura ni hielo seco; cero quejas por chocolate derretido en 18 búsquedas. Para la empresa nueva: si el producto es sensible al calor, declarar el empaque térmico y la suspensión estacional (o asumir la merma) antes de vender en verano; el silencio es una apuesta, no una estrategia.
6. **El museo es el embudo.** Choco-Story Uxmal (visita → degustación → tienda de regalos) y las boutiques en zonas turísticas son la adquisición de Ki'Xocolatl; las redes (13,234 en IG, 18,346 en FB) son el recordatorio, no el origen. Para la empresa nueva sin museo: la experiencia (degustación, taller, visita) es el sustituto del embudo físico — y el regalo (tabletas trilingües, marquetas) es el producto que viaja.
7. **Agentic-ready de plantilla no sustituye el contenido.** UCP/MCP completo con la tienda opaca en texto: un agente puede comprar, pero un humano no puede comparar. Para la empresa nueva: la capa agentic viene dada en Shopify; lo que hay que construir es el contenido que el humano (y el motor de IA) cita: precios visibles, FAQ, historia con datos y fichas indexadas.

---

## Fuentes

- https://kixocolatl.mx/ — home (lectura 13 nov 2026, 19:49 UTC; 28 líneas extraíbles)
- https://kixocolatl.mx/products.json · https://kixocolatl.mx/collections.json — 109 productos, 32 colecciones
- https://kixocolatl.mx/agents.md · https://kixocolatl.mx/.well-known/ucp — UCP v2026-08-25, MCP, sitemap_agentic_discovery.xml
- https://kixocolatl.mx/pages/terminos-y-condiciones — Términos (envío gratis >$2,000 y ≤2 kg; no devoluciones; reclamación 2 h)
- https://kixocolatl.mx/pages/politicas-de-envio — Políticas de Envío (mayo 2025; Estafeta y FedEx; Estándar $400; Volumen $495) — contenido parcial por 429
- https://www.dondeir.com/ (7 jul 2023) — barra $110 MXN (boutique física, desactualizado)
- https://www.tiktok.com/@kixocolatl/video/7622886337934331166 · https://www.tiktok.com/@kixocolatl/video/7626113628382579998 — TikTok @kixocolatl (2 videos indexados)
- Ficha Google/Places: Ki'Xocolatl Santa Lucía, 4.7/5 (48 reseñas)
- Comparables: Chocolates Rocío (barra $160, jun 2026); Cacep barra 85 g $118 (Rappi, ~10 nov 2026)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/kixocolatl/`, 13 nov 2026)
