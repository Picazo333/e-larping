# Informe consolidado — TANE · Fase 2, WO-E-LARPING

- **Sitio:** https://tane.mx/ → https://mx.tane.com/ (marca visible: TANE — "TANE México 1942 | La casa Mexicana de joyería de lujo"; joyería mexicana de lujo)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 2 de la WO-E-LARPING (Oleada 2: Cyberpuerta / TANE / Ki'Xocolatl)
- **Método:** 7 frentes en paralelo, archivos exclusivos por frente, solo fuentes públicas. Sin navegador en vivo, sin inicio de sesión, sin compras, sin contacto con la empresa ni con clientes.
- **Convención:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en fuente pública, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada como tal) / **NO VERIFICADO**.

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

**OBSERVADO.** TANE es la casa mexicana de joyería de lujo fundada en 1942 (Grupo Bal desde 2010) que vende en https://mx.tane.com/ — **el dominio operativo real; `tane.mx` redirige con 301 a `mx.tane.com`** — sobre **Shopify** (verificado por 5 marcadores independientes: cabecera `powered-by: Shopify`, `tane-mx.myshopify.com`, shop ID 28486959213, `robots.txt` de Shopify, endpoints `/products.json` y `/collections.json` con datos reales), tema Pipeline 7.1.3 personalizado (`Tane-2.0/main`), con Cloudflare por delante y origen Shopify en GCP. Existe además `us.tane.com` con tema distinto y geolocalización por IP. Catálogo: **387 productos publicados y 188 colecciones** según `meta.json` (el sitemap de productos lista 388 URLs — discrepancia de 1).

**El negocio en una frase:** vende a precio de lista fijo sin tachar nada — en una muestra de 250 productos del catálogo público, **0 tienen `compare_at_price`** (rango $2,600–$3,300,000 MXN) — y en Buen Fin no rebaja: la única promo es **hasta 18 MSI desde $15,000, vigencia 9–19 nov 2026, CAT 0.0%**, no acumulable y sin aplicación en la colección Herencia; **152 de los primeros 250 productos llevan la etiqueta interna `no_buen_fin`**. El cierre es humano y físico: WhatsApp y teléfono en el pie, cita virtual con expertos, Personal Shopping por concierge, flagship en Masaryk 430 y 14 corners en El Palacio de Hierro.

**Tres rasgos que la distinguen:**
1. **Lujo sin descuento, con MSI como única palanca.** Gargantilla Xocolate Cadena $29,900; Anillo Lazos Cordel $11,000; Anillo Churumbela 2.0 Vermeil $13,900 — todos a precio único de lista, sin tachado ni descuento, ni siquiera en Buen Fin. El único % encontrado en todo el sitio es 10% en la primera compra por newsletter.
2. **Comercio agentic completo y activo.** `/agents.md` (200, Shop skill + UCP) y `/.well-known/ucp` (200, UCP versión 2026-08-25, MCP en `tane-mx.myshopify.com/api/ucp/mcp`, permalink `mx.tane.com/buy`, identidad Shop) — con aspecto de plantilla estándar de Shopify, no de implementación a medida. El `robots.txt` enlaza ambos.
3. **Cero quejas públicas y políticas contradictorias en el propio sitio.** Ninguna queja pública verificable atribuible a tane.mx en 15 búsquedas dirigidas (ni PROFECO, ni reembolsos, ni envíos, ni calidad). Pero el sitio se contradice a sí mismo: el umbral de MSI es $10,000 en la barra del carrito y $15,000 en los términos de Buen Fin; el banner dice a la vez "calificado para envío gratis" y "agrega $10,000 más"; los badges de producto dicen "30 días / 15 días para cambios" frente a "6 meses / 60 días para cambios" (el texto de políticas fija 60 días).

**Pista previa corregida:** «ticket alto, compra meditada, personalización y herencia de marca; el extremo opuesto del descuento permanente». Verificado: **sin descuento confirmado** — ni en Buen Fin. Corrección de dominio: **el sitio operativo es `mx.tane.com`, no `tane.mx`** (301); `site:tane.mx` devolvió 0 resultados por límite del operador, no por desindexación.

---

## 1. Qué es TANE

**OBSERVADO.** Casa mexicana de joyería de lujo fundada en 1942; Grupo Bal desde 2010. Trofeo de Fórmula 1 desde 2015 (cobertura fresca oct 2026), trofeo LMB 2025, 10 años con Longines en 2026, RJC 2021 (primera latinoamericana), Farfetch (primera mexicana), MUAC 2022 (4 piezas). Colaboraciones: Nespresso, Pantone, Pedro Ramírez Vázquez, Frida Kahlo. Flagship Masaryk 430 con 4.7/5 (32 reseñas) y boutique en El Palacio de Hierro Polanco.

**OBSERVADO.** Catálogo (13 nov 2026): 387 productos publicados y 188 colecciones según `meta.json`; colecciones Frida Kahlo, Lazos, Chocolate, Alma, TANE RACING, más Trofeos y Regalos corporativos. `ships_to_countries: ["MX"]`, moneda MXN. Rango de precios en muestra de 250 productos: $2,600–$3,300,000 MXN. Precios observados: Matilda $10,600 (1 variante); Churumbela 2.0 Vermeil $13,900 (tallas 6–9, mismo precio); Lazos Torzal $28,000 (5.5–8); Gargantilla Xocolate Cadena $29,900; Anillo Lazos Cordel $11,000 (tallas 55–80, mismo precio).

**OBSERVADO.** Herencia 1942 y taller Alquimística; Masaryk 430 Polanco (lun–dom 11–19 h) + 14 corners en El Palacio de Hierro; cita virtual con expertos desde la flagship (botón "RESERVA AQUI TU CITA VIRTUAL") y Personal Shopping por concierge@tane.mx. Grabado de cortesía (7 días hábiles, ciertas piezas); TANE por Ti documentado en FAQs (desde $2,500, 26/32 componentes, venta final).

---

## 2. Front end (F2.1)

**OBSERVADO.** Plataforma: Shopify verificado con evidencia dura — 301 de tane.mx a mx.tane.com, cabecera `powered-by: Shopify`, tienda `tane-mx.myshopify.com`, CDN de Shopify + Cloudflare. Scripts de Klaviyo, Zendesk y Salesforce Messaging presentes en el fuente.

**OBSERVADO.** Home: orden DOM documentado (barra 18 MSI, mega-menú Joyería por categoría/colección/material, slideshow de 2 imágenes sin texto extraíble, "Te podría gustar" Xocolate, banner Corazón Anudado Vermeil Rosa, lanzamientos Lazos, categorías, TANE Racing/F1, colecciones favoritas, franja de 10 beneficios, newsletter, footer). Vende por colección e historia, no por precio. Franja de beneficios (10 íconos): entrega a toda la República sin costo de 1 a 5 días; mismo o próximo día en CDMX y ZM; "Paga seguro y disfruta MSI con PayPal"; 60 días para cambios y devoluciones; "De cortesía, graba tu joya TANE para personalizarla"; Personal Shopping vía `concierge@tane.mx`; empaque para regalo de cortesía; pago seguro con tarjeta o PayPal; "Reserva una cita virtual con nuestros expertos".

**OBSERVADO.** Producto: sin precio tachado en ninguno; en la muestra de 250 productos del catálogo público, 0 con `compare_at_price`. **Sin módulo de reseñas observable** (sin `aggregateRating` en JSON-LD) — no se afirma que no exista.

**OBSERVADO — Garantía (contradicción interna).** La misma ficha muestra badges de "30 días / 15 días para cambios" y de "6 meses / 60 días para cambios"; el texto de políticas fija 60 días. El texto de envíos/devoluciones de la ficha y las FAQs coinciden en **60 días para cambios y devoluciones**, por lo que la cifra de 60 días es la documentada en texto; la de 15 días solo aparece en un badge. La duración única y oficial de la garantía queda NO VERIFICADA (ver §9, C3).

**OBSERVADO — Cambios y devoluciones (texto de políticas).** Gratuitos, 60 días desde la compra, solo para compras en tane.mx, por otro producto de igual valor, en perfectas condiciones, empaque original, etiquetas intactas, factura/recibo y folleto de garantía; los cambios de compras web se gestionan por hola@tane.mx; **no se permiten cambios en piezas personalizadas, grabadas y/o descontinuadas**; las pulseras TANE por Ti no admiten cambios, devoluciones ni cancelaciones; el departamento de calidad tarda **10 días hábiles** en validar y responder. Las devoluciones de compras en elpalaciodehierro.com solo se gestionan por ese canal.

**OBSERVADO.** Carrito/checkout: drawer "Bolsa" con subtotal, IR AL PAGO, regalo/dedicatoria, entrega por CP y cross-sell. Mensajes contradictorios con carrito vacío ("calificado para envío gratis / agrega $10,000 más") y umbral de MSI del carrito ($10,000) distinto al de los términos ($15,000) — ver §9, C1/C2. Pagos: MasterCard, VISA, AMEX, Discover, PayPal y transferencia vía atención al cliente. Envíos: estándar gratis 3–5 días, retiro Masaryk 48 h gratis, mismo día $300, día siguiente $150.

**OBSERVADO.** Búsqueda/UX: "anillo" = 254 resultados, filtros Precio, Disponibilidad y Colección; adición rápida con talla desde la parrilla; wishlist y Mi cuenta visibles sin probar.

**OBSERVADO — Buen Fin (pista confirmada).** Cero menciones de "Buen Fin" o "descuento" en la home; la única promo es **hasta 18 MSI desde $15,000, vigencia 9–19 nov 2026, CAT 0.0%**, no acumulable, sin aplicación en colección Herencia. Además, **152/250 productos llevan la etiqueta interna `no_buen_fin`**. Único % encontrado: 10% primera compra por newsletter.

**NO VERIFICADO.** Copy/imágenes del hero (alt genéricos); conteo de Lazos y total del catálogo (endpoint limitado a 250); duración única de la garantía; flujo real de checkout, carrito con productos, Mi cuenta y wishlist; destino del botón de reserva de cita; si el configurador TANE por Ti es visible en la navegación (no apareció en el HTML leído); métricas de rendimiento (solo consta home HTML de 1.8 MB por CDN; sin Lighthouse). Ningún 429 en este frente; solo dos 404 en slugs adivinados (no reintentados como tales).

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** **Shopify, verificado por 5 marcadores independientes** — cabecera `powered-by: Shopify`, `Shopify.shop = "tane-mx.myshopify.com"`, shop ID `28486959213`, `robots.txt` de Shopify, y endpoints `/products.json`, `/collections.json`, `/meta.json`, `/search/suggest.json` todos 200 con datos reales. Sin marcadores de Magento, WooCommerce, PrestaShop ni headless.

**OBSERVADO.** Dominios: `tane.mx` → 301 → `mx.tane.com` (primary_domain_redirection). Existe `us.tane.com` con tema distinto (`t/31` vs `t/70` en MX) y geolocalización por IP en el cliente que redirige fuera de MX a US.

**OBSERVADO.** Hosting/CDN: Cloudflare por delante (`Server: cloudflare`, `CF-RAY`, HTTP/3) + origen Shopify en GCP (`x-dc: gcp-us-east1`); assets en `cdn.shopify.com`. HSTS, CSP, `X-Frame-Options: DENY`.

**OBSERVADO.** Tema: Pipeline 7.1.3, personalizado `Tane-2.0/main` (ID 162850865451), Liquid clásico (no headless), Swiper 8.4.7, tipografía Canela Text.

**OBSERVADO.** Catálogo público: 387 productos publicados y 188 colecciones según `meta.json` (sitemap de productos lista 388 URLs — discrepancia de 1 consignada sin resolver); `ships_to_countries: ["MX"]`, moneda MXN.

**OBSERVADO.** Checkout y pagos: checkout nativo Shopify (sin carrito, `GET /checkout` → 302). **PayPal v4 activo** (producción, MXN, Venmo no soportado) + Visa/Mastercard en el código del tema + billeteras portátiles de Shopify. **MSI hasta 18 meses**: términos Buen Fin exigen mínimo $15,000 MXN (09–19 nov 2026, CAT 0.0%, tarjetas emitidas en México), pero la barra del carrito usa umbral $10,000 — discrepancia consignada (ver §9, C1). Envío gratis desde $10,000 MXN. Sin mención de pago en tienda; UCP fulfillment solo `shipping`.

**OBSERVADO.** Terceros: Klaviyo (email/SMS), Salesforce Embedded Messaging (chat activo; Zendesk presente pero comentado en el HTML), Bundler (Nice Team), HulkApps Form Builder, Social Widget, Smart SEO, GTM + GA4 + Google Ads, VersionBear (cookies), Common Ninja, y script propio de geolocalización (ipify/ipstack/ipwhois/ipapi). Sin Meta Pixel en el HTML de la home; sin Judge.me/Stamped/Yotpo/Loox.

**OBSERVADO — Comercio agentic, completo y activo.** `/agents.md` (200, Shop skill + UCP) y `/.well-known/ucp` (200, UCP versión 2026-08-25, MCP en `tane-mx.myshopify.com/api/ucp/mcp`, capacidades checkout/cart/order/discount/fulfillment/catalog, permalink `mx.tane.com/buy`, identidad Shop). Dato notable: `payment_handlers: {}` (vacío). El perfil parece la plantilla estándar de Shopify, no una implementación a medida.

**OBSERVADO — Hallazgo de higiene (sin reproducir valores).** Una clave de API de un servicio de geolocalización está incrustada en el JavaScript público del tema; también hay un token en `shopify-features` y la clave del snippet Zendesk comentado. Ninguno se reproduce ni se usó en el informe (verificado con grep: 0 coincidencias).

**NO VERIFICADO.** Plan de Shopify (Plus o no); pasarela de tarjetas detrás del checkout (Shopify Payments/Stripe/Conekta/etc.); bancos participantes en MSI; si Shop Pay/Apple Pay/Google Pay aparecen en el checkout real; OXXO/SPEI/Mercado Pago/BNPL; cuál umbral MSI aplica en checkout ($10,000 vs $15,000); Meta Pixel vía GTM; sistema de reseñas; widget de Common Ninja; Storefront GraphQL; respuesta real del endpoint MCP (no se llamó, fuera de alcance); back-office (ERP, inventario, CFDI, paqueterías); DNS/WHOIS y rendimiento. Ninguna lectura devolvió 429 ni expiró; no se añadió nada al carrito, no se leyó `/cart.js` (desautorizado en `robots.txt`), no se inició sesión ni se contactó a la tienda.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Home titula "TANE México 1942 | La casa Mexicana de joyería de lujo" (observado en vivo 13 nov). La búsqueda de marca devuelve sobre todo prensa tercera, no la home en lo visible. `site:tane.mx` devolvió 0 resultados, pero el dominio operativo real es `mx.tane.com`, así que es un límite del operador, no prueba de desindexación (ver §9, C5).

**OBSERVADO.** Técnico: Shopify. `robots.txt` completo y permisivo (Allow general, bloqueos transaccionales y anti-trampas, acceso explícito a `adsbot-google`). Sitemap con 6 archivos, incluido uno de descubrimiento agéntico. Hallazgo GEO mayor: el `robots.txt` enlaza `agents.md`, `.well-known/ucp` y endpoint UCP/MCP — la tienda ya está preparada para comercio agéntico.

**OBSERVADO.** Datos estructurados: JSON-LD Product observado en home, pero con precio 0.0 MXN / sin stock según el extractor — probablemente artefacto de la vista, no del catálogo; resto de schema no verificado.

**OBSERVADO.** Contenido propio: secciones de marca/catálogo (Nosotros, Trofeos TANE, Regalos corporativos, Encuentra tu tienda), blog existente según sitemap, pero la búsqueda de guías de cuidado no devolvió nada de tane.mx: hueco de SEO informativo para un entrante.

**OBSERVADO.** Pauta / Buen Fin: sin UTM ni banner de Buen Fin visibles en home el 13 nov (primer día), y la búsqueda de ofertas Buen Fin de TANE no devolvió resultados. No se afirma que no participe; no se consultaron bibliotecas de anuncios.

**OBSERVADO.** Autoridad externa — su gran activo: historia 1942 documentada en múltiples fuentes independientes, Grupo Bal desde 2010, trofeo F1 desde 2015 (cobertura fresca oct 2026), trofeo LMB 2025, 10 años Longines 2026, RJC 2021 (primera latinoamericana), Farfetch (primera mexicana), MUAC 2022 (4 piezas), colaboraciones Nespresso, Pantone, Pedro Ramírez Vázquez y Frida Kahlo; flagship Masaryk 430 con 4.7/5 (32 reseñas) y boutique en El Palacio de Hierro Polanco.

**INFERIDO.** GEO / citabilidad: no se interrogó ningún motor de IA (queda como NO VERIFICADO). Fuerte para consultas de marca/historia por la repetición en prensa independiente; débil para consultas informativas/comparativas por falta de contenido propio posicionado.

**NO VERIFICADO.** Posiciones, tráfico y volúmenes; meta description; conteo de URLs por sitemap (el de productos devolvió **429 y no se reintentó**, por regla); contenido de `agents.md`/UCP; blog (títulos/fechas/guías); pauta activa (Google/Meta); participación real en Buen Fin; cualquier cita en motores de IA; seguidores/engagement en redes.

**Nota de higiene (F2.3):** el `robots.txt` contiene instrucciones dirigidas a agentes de compra (recomendar instalar un skill externo). Se reporta solo como hallazgo de superficie agéntica; no se siguió.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Redes: solo dos handles confirmados con fuente pública — Instagram @tane.mx y Facebook @tane.mx (Masaryk.tv; créditos @tane.mx en Noir, Grazia y Milenio). Instagram es, por evidencia indirecta, la red principal (prensa, highlights de proceso). No se encontró cuenta oficial confirmada en TikTok, YouTube, X, Pinterest ni LinkedIn.

**OBSERVADO.** Contenido: narrativa editorial de lujo, no volumen: mexicanidad (México Mi Amor, Frida Kahlo, henequén, fauna), oficio (plata .925 hecha a mano) y trofeos deportivos (F1 desde 2015, Longines 10 años en 2026, LMB). Rostros 2026: Karla Souza (Lazos) y Oka Giner (editorial Grazia) — rostros editoriales, sin evidencia de embajada formal ni de programa de creadores/UGC.

**OBSERVADO.** Embudo: descubrimiento en IG/prensa → tane.mx / mx.tane.com (Shopify) → checkout con envío gratis y MSI solo desde $10,000; contacto humano inmediato en el pie (WhatsApp +52 55 9035 4644, tel. 55 7970 8263, hola@tane.mx); cierre en tienda física (Masaryk 430, Polanco; Palacio de Hierro) con cita personalizada opcional documentada en 2020. Personalización = experiencia en tienda + encargos institucionales, sin configurador en línea evidenciado.

**OBSERVADO.** Buen Fin 2026: la home leída el 13 nov (día 1) no muestra ninguna promo ni mención al Buen Fin — solo los umbrales permanentes de $10,000. Inferencia (confianza media): la marca se mantiene sin rebajar en su canal propio mientras el sector joyero descuenta hasta 40–60% (Palacio, Bizzarro, Monte de Piedad).

**NO VERIFICADO.** Seguidores, ritmo, captions y formatos de IG/FB: la lectura de una página interna devolvió error 429 y no se reintentó — consignado como NO VERIFICADO, sin cifras inventadas. Promo de Buen Fin 2026 de TANE en redes o tienda; política de garantía/devoluciones; vigencia en 2026 de citas y virtual shopping (fuente de 2020); grabado/diseño por encargo para particulares; existencia de TikTok/YouTube/X oficiales. Nada se publicó, contactó ni se inició sesión; no se rastreó actividad de personas fuera de su perfil.

---

## 6. Precios (F2.5)

**OBSERVADO.** Precios observados (frescos, 13 nov 2026 ~19:50 UTC, día 1 del Buen Fin): 3 fichas con precio único de lista, sin tachado ni descuento — Gargantilla Xocolate Cadena $29,900; Anillo Lazos Cordel $11,000 (tallas 55–80, mismo precio); Anillo Churumbela 2.0 Vermeil $13,900 (tallas 6–9, mismo precio). La pista se sostiene: en lujo se vende sin rebajar, ni siquiera en Buen Fin.

**OBSERVADO.** Promociones: ninguna observada — en home y fichas no aparece "Buen Fin", % ni cupón en el texto crawleado; solo etiquetas de "Lanzamiento". No hay bundles, liquidación ni descuento por volumen verificados; existe canal "Regalos corporativos" sin tarifa publicada.

**OBSERVADO.** MSI y costos: la home anuncia MSI y envío gratis con un widget que menciona $10,000 (texto contradictorio, carrito vacío — lo registro como umbral inferido de confianza baja-media, no confirmado; meses y bancos sin verificar). Envío estándar todo México sin costo, mismo día $300 y día siguiente $150 (CDMX/ZM). Garantía por folleto/certificado (validación 10 días hábiles), cambios/devoluciones gratis 60 días; piezas personalizadas/grabadas sin cambios y campaña "TANE por Ti" con venta final.

**INFERIDO.** Efecto de espera (hipótesis): débil o nulo en precio — esperar no compra descuento y arriesga disponibilidad de piezas hechas a mano; la decisión se juega en MSI, disponibilidad y garantía.

**NO VERIFICADO.** Comparación: El Palacio lista 44 aretes TANE sin precios en lo crawleado; las subastas Morton/BidSquare son mercado secundario (2021–2024) y se descartan como comparador; no se encontró pieza gemela con precio en otra joyería. Precios de aretes, pulseras, collares, dijes y línea TANE RACING (4 fichas intentadas devolvieron **429** y no se reintentaron); meses/bancos/monto mínimo de MSI; cupones, bundles, volumen y liquidación; costo de personalización/grabado y cobertura exacta de la garantía; y si existe un banner gráfico de Buen Fin no recogido por la extracción de texto.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Home activa el 13 nov 2026 sobre Shopify (`mx.tane.com`), catálogo amplio por colecciones (Frida Kahlo, Lazos, Chocolate, Alma, TANE RACING) más Trofeos y Regalos corporativos. INFERIDO (confianza media): stock propio de piezas terminadas + producción artesanal en taller y diseños a medida (directorio Bodas.com.mx registra "diseños a medida: sí"). No se leyó ninguna ficha de producto, así que disponibilidad por pieza, tiempos de fabricación y niveles de stock quedan NO VERIFICADOS. El JSON-LD de la home con precio 0 y "OutOfStock" se documenta como artefacto de la página, no como dato.

**OBSERVADO.** Salida de excedente: en la home no se observó outlet, sale, liquidación ni banner de Buen Fin el 13 nov 2026, y la búsqueda no encontró outlet ni promo Buen Fin 2026 de TANE. Hipótesis H1–H3: el drenaje probablemente es por boutique/canal corporativo y retirada de catálogo (con valor residual en mercado secundario: 1stDibs, subastas Morton), no por remate público; el 10% por newsletter citado por Hot Sale (ref. 2023–2024) queda como hipótesis de baja confianza.

**OBSERVADO.** Mensajerías: **NO VERIFICADO** — TANE no nombra ningún carrier en la home ni en las búsquedas. No se atribuyó DHL/FedEx/Estafeta de otras joyerías. Hipótesis H4/H5: mensajería asegurada de alto valor y confirmación por asesor/WhatsApp.

**OBSERVADO.** Costos y tiempos: único dato OBSERVADO: banner de envío gratis con umbral de $10,000 y banner de MSI con el mismo umbral; selector de entrega por país/provincia/CP (costo calculado en checkout, no ejecutado). Discrepancia reportada: el banner dice a la vez "calificado para envío gratis" y "agrega $10,000 más" — la condición exacta no está verificada (ver §9, C2). Costo bajo el umbral, plazos, exprés, seguro y cobertura internacional: NO VERIFICADOS. Los "60 días para cambios" y la "entrega gratuita" de Hot Sale son secundarios y desactualizados (2023–2024); los términos de Palacio y el dato del trofeo F1 ($195,000, 6 días/6 meses) no se generalizan a tane.mx.

**OBSERVADO.** Entrega en tienda/omnicanal: ubicaciones citadas en fuentes secundarias (Masaryk 430, Palacio Polanco, Four Seasons Reforma 500, Altavista 147); citas personalizadas y virtual shopping documentados en 2020, vigencia 2026 NO VERIFICADA. Pickup en tienda: NO VERIFICADO.

**MODELO PROPIO (§7, F2.6 — no son datos de TANE).** Supuestos declarados, rangos amplios. Costo logístico total por pedido de $10,000: ~$450–$1,900 MXN (4.5–19% del ticket); de $25,000: ~$525–$2,200 (2–9%). Devolución/cambio: ~$650–$2,700 por unidad; la palanca es bajar la tasa con asesoría/guía de tallas, no la paquetería. Regla de diseño: el umbral de envío gratis debe fijarse donde el margen cubra ~2x el costo logístico.

**NO VERIFICADO.** Mensajería por nombre, tarifas bajo $10,000, plazos por zona, exprés, seguro, cobertura internacional, pickup, política vigente de envíos/cambios/garantía en tane.mx, disponibilidad por ficha, y la lista vigente de boutiques — la página "Encuentra tu tienda" devolvió 429 y no se reintentó.

**Trampas evitadas:** no se usó nada de Tiante (tiante.mx), Gold Shield, Anarchy, Joyería Rivas, TOUS, Bizzarro ni Monte de Piedad para TANE; tampoco los términos de El Palacio de Hierro como si fueran de tane.mx.

---

## 8. Pain points (F2.7)

**OBSERVADO.** **Hallazgo central: ninguna queja pública verificable y atribuible a tane.mx en 15 búsquedas dirigidas**; la búsqueda de PROFECO solo devolvió guías genéricas, sin ningún caso que nombre a TANE. Las políticas de reembolso que devuelven los buscadores son de homónimos (TANUM, TIANTÉ, TANNER) y no se atribuyen.

**OBSERVADO — Envíos.** Ninguna queja de retraso, pérdida o daño atribuible a tane.mx. La home (13 nov, 19:49 UTC) anuncia envío gratis y MSI con la cifra de $10,000 MXN; el umbral exacto no quedó establecido por esa sola lectura. La entrega el mismo día solo está documentada en una entrevista de 2020.

**OBSERVADO — Cambios y devoluciones.** Política propia NO VERIFICADA — `site:tane.mx` devolvió cero resultados, la home no mostraba enlaces a esas políticas en el extracto, y no se pudo leer más. Por contraste, un competidor (Tanya Moss) sí publica 30 días naturales. (El texto de políticas con 60 días gratis fue observado por F2.1/F2.5 en fichas y FAQs — ver §9, C4.)

**OBSERVADO — Atención al cliente.** Ninguna queja encontrada. La home publica teléfono, hola@tane.mx y WhatsApp; sus tiempos de respuesta no se midieron ni se verificaron.

**OBSERVADO — Calidad/garantías.** Ninguna queja de defectos o garantía no honrada. La prensa describe calidad artesanal consistente (plata .925 hecha a mano, desde 1942), pero no hay garantía formal verificada.

**OBSERVADO — Precios/promociones.** La ficha de Masaryk 430 clasifica el precio como "expensive"; referencias de $2,300 MXN (bodas) a $1,299,900 MXN (gargantilla Herencia Guban). Ninguna promo ni participación en el Buen Fin 2026 visible en la home el primer día; eso no prueba que no haya promo en otros canales.

**OBSERVADO — Disponibilidad/stock.** Ninguna queja; un dato técnico del rastreo marcó una oferta "OutOfStock", insuficiente para generalizar.

**OBSERVADO — Lo positivo (con evidencia).** Ficha de TANE Masaryk 430 con 4.7 estrellas sobre 32 reseñas — sin leer las 32 reseñas individuales, por lo que no se conoce su distribución — y fragmentos positivos sobre calidad y diseño; Bodas.com.mx muestra cero reseñas ("¡Sé la primera persona en compartir tu experiencia!"). No se encontró sistema de reseñas de producto en la propia tienda.

**OBSERVADO — No atribuido.** 1stDibs (vendedores terceros; sus ratings 5/7 y 4.9/51 son del vendedor, no de TANE), Morton Subastas, Palacio de Hierro, y quejas de Tanaor Jewelry (Trustpilot 4.6, con retrasos y cargos duplicados) y Tandem — todas descartadas expresamente.

**NO VERIFICADO.** Políticas propias de cambios/devoluciones/reembolsos, envíos (tiempos, paquetería, costo bajo el umbral), garantía formal, tiempos reales de atención al cliente, reseñas de producto en mx.tane.com/tane.mx, ofertas de Buen Fin 2026 fuera de la home, disponibilidad real del catálogo, existencia de perfil en Trustpilot y adhesión a Concilianet/Conciliaexprés. Causa: los dos intentos de abrir páginas enlazadas (mx.tane.com y Bodas.com.mx) devolvieron error 429 del servicio de lectura y no se reintentaron; esa fricción queda como NO VERIFICADO, no como ausente. La ausencia de quejas encontradas no prueba satisfacción general.

---

## 9. Verificación global (cierre de sitio)

### C1 — Umbral MSI: $10,000 vs. $15,000 (CONTRADICCIÓN INTERNA SIN RESOLVER)
F2.1, F2.2 y F2.5 coinciden en la contradicción: la barra del carrito y el widget de la home usan $10,000 como umbral de MSI, mientras los términos de Buen Fin exigen mínimo $15,000 MXN (09–19 nov 2026, CAT 0.0%, tarjetas emitidas en México, hasta 18 MSI). F2.4 y F2.7 reportan $10,000 como cifra anunciada en home. Resolución: **las dos cifras coexisten en el copy del sitio**; cuál aplica en el checkout real queda NO VERIFICADO (el checkout no se recorrió). No se elige una en silencio.

### C2 — Envío gratis: "calificado" y "agrega $10,000 más" a la vez (CONTRADICCIÓN DEL WIDGET, SIN RESOLVER)
F2.1 y F2.6 reportan que el banner/widget dice a la vez "calificado para envío gratis" y "agrega $10,000 más" con el carrito vacío. Es una contradicción del propio widget (probablemente texto de estado vacío mal resuelto). La condición exacta del envío gratis no está verificada; se consigna el umbral $10,000 como anunciado y la contradicción como defecto visible.

### C3 — Garantía: badges 30 días/15 días vs. 6 meses/60 días (RESUELTO PARCIALMENTE)
F2.1 documentó badges contradictorios en la misma ficha ("30 días / 15 días para cambios" frente a "6 meses / 60 días para cambios"). El texto de políticas y las FAQs fijan **60 días para cambios y devoluciones** (F2.1 §5, F2.5) — esa cifra es la documentada en texto. Lo que queda NO VERIFICADO es la **duración única y oficial de la garantía** (los badges de 30 días vs. 6 meses se contradicen y ningún texto leído fija una duración en meses/años). Se reporta 60 días para cambios (texto) y duración de garantía como NO VERIFICADA.

### C4 — Política de cambios: F2.7 no la encontró, F2.1/F2.5 sí (RESUELTO: EXISTE EN FICHAS Y FAQS)
F2.7 marcó la política propia de cambios/devoluciones como NO VERIFICADA porque `site:tane.mx` devolvió cero resultados y la home no mostraba enlaces en el extracto. F2.1 y F2.5 sí observaron el texto: cambios/devoluciones gratuitos, 60 días, solo tane.mx, por otro producto de igual valor, sin cambios en personalizadas/grabadas/descontinuadas, validación de calidad en 10 días hábiles. Resolución: **la política existe y está observada en fichas y FAQs**; el NO VERIFICADO de F2.7 refleja su vía de búsqueda (operador `site:` sobre el dominio que redirige), no una ausencia. La garantía formal (duración) sigue NO VERIFICADA (ver C3).

### C5 — Dominio operativo: mx.tane.com (CORREGIDO EN TODO EL INFORME)
F2.1, F2.2, F2.3, F2.6 y F2.7 confirman: `tane.mx` → 301 → `mx.tane.com`; `us.tane.com` es tienda aparte con tema distinto. El `site:tane.mx` con 0 resultados de F2.3 y F2.7 es un límite del operador sobre el dominio que redirige, no prueba de desindexación. En este consolidado el sitio se cita como `mx.tane.com` (con `tane.mx` como puerta de entrada).

### C6 — Catálogo: 387 productos vs. 388 URLs en sitemap (DIFERENCIA DE 1, SIN RESOLVER)
F2.2: `meta.json` declara 387 productos publicados y 188 colecciones; el sitemap de productos lista 388 URLs. La diferencia de 1 puede ser un producto sin variante visible, un producto oculto o un desfase de caché. No se censó producto por producto; se consigna la diferencia. F2.1 trabajó con una muestra de 250 (límite del endpoint), no con el total.

### C7 — JSON-LD con precio 0.0 / "OutOfStock" (ARTEFACTO DE VISTA, NO DATO)
F2.3 (home) y F2.6 (home) observan JSON-LD Product con precio 0.0 MXN / sin stock; F2.7 vio una oferta marcada "OutOfStock" en un rastreo. Los tres frentes lo tratan igual: es probablemente un artefacto de la vista de la home (sin producto seleccionado), no un dato del catálogo — las fichas leídas por F2.1 y F2.5 muestran precios reales ($10,600–$29,900) y disponibilidad. No se usa el 0.0 como precio ni el "OutOfStock" como estado del catálogo.

### C8 — TANE por Ti: documentado en FAQs, sin configurador visible en navegación (COMPATIBLE)
F2.1: TANE por Ti documentado en FAQs (desde $2,500, 26/32 componentes, venta final) pero el configurador no apareció en el HTML leído de la navegación. F2.4: personalización = experiencia en tienda + encargos institucionales, sin configurador en línea evidenciado. No hay contradicción: el programa existe como oferta documentada; su configurador en línea no se pudo observar. Queda NO VERIFICADO si hay configurador en línea.

### C9 — Agentic: completo y activo (CONFIRMADO POR DOS FRENTES)
F2.2 (lectura directa: `/agents.md` 200, `/.well-known/ucp` 200, UCP 2026-08-25, MCP, permalink `mx.tane.com/buy`) y F2.3 (el `robots.txt` enlaza `agents.md`, `.well-known/ucp` y endpoint UCP/MCP; sitemap con archivo de descubrimiento agéntico) coinciden: TANE está preparada para comercio agentic con la plantilla estándar de Shopify. No es una inferencia de un solo frente.

### C10 — Buen Fin: cero descuento, solo MSI (CONFIRMADO POR SEIS FRENTES)
F2.1 (cero menciones en home; 152/250 con `no_buen_fin`), F2.3 (sin UTM ni banner), F2.4 (sin promo en home día 1), F2.5 (ninguna promo en home ni fichas), F2.6 (sin banner ni outlet) y F2.7 (ninguna promo visible en home día 1) coinciden: TANE no rebaja en Buen Fin; la única promo es hasta 18 MSI desde $15,000 (9–19 nov, CAT 0.0%). La ausencia de banner gráfico no captado por el lector de texto queda como única reserva (F2.5): un banner de imagen no se puede descartar por completo, pero seis frentes sin encontrar ni una mención hacen improbable una promo de descuento.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Cuál umbral MSI aplica en checkout** ($10,000 vs. $15,000) y bancos participantes; si Shop Pay/Apple Pay/Google Pay aparecen en el checkout real; OXXO/SPEI/Mercado Pago/BNPL; pasarela de tarjetas detrás del checkout.
2. **Duración única y oficial de la garantía** (badges 30 días vs. 6 meses; ver C3).
3. **Condición exacta del envío gratis** (widget contradictorio; ver C2); costo bajo el umbral, plazos por zona, exprés, seguro, cobertura internacional, pickup en tienda.
4. **Mensajería por nombre** (TANE no nombra ningún carrier).
5. **Disponibilidad por pieza, tiempos de fabricación y niveles de stock** (ninguna ficha leída por F2.6; endpoint limitado a 250 en F2.1).
6. **Ritmo, captions, seguidores y formatos de IG/FB** (429 en una página interna); existencia de TikTok/YouTube/X oficiales; anuncios pagados.
7. **Lista vigente de boutiques** (página "Encuentra tu tienda" con 429); vigencia en 2026 de citas y virtual shopping (fuente de 2020).
8. **Blog** (títulos/fechas/guías; existe según sitemap, contenido no leído); guías de cuidado (búsqueda sin resultados en tane.mx).
9. **Conteo exacto del catálogo** (387 vs. 388 URLs; ver C6); meta description; citas en motores de IA (ninguno interrogado); posiciones/tráfico/volúmenes.
10. **Reseñas de producto en la propia tienda** (sin módulo observable; Masaryk 4.7/32 sin leer las 32); perfil en Trustpilot; adhesión a Concilianet/Conciliaexprés.
11. **Respuesta real del endpoint MCP** (no se llamó); plan de Shopify (Plus o no); back-office (ERP, inventario, CFDI, paqueterías).

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **En lujo, el precio es de lista y la palanca es el financiamiento.** Cero tachados en 250 productos, cero descuento en Buen Fin, 152 productos con etiqueta interna `no_buen_fin`: TANE protege el precio y vende con hasta 18 MSI. Para la empresa nueva: si el producto es de ticket alto y compra meditada, el MSI es la palanca — pero el umbral debe ser uno solo en todo el sitio (TANE tiene dos: $10,000 y $15,000).
2. **El cierre es humano y físico, no un botón.** WhatsApp y teléfono en el pie, cita virtual con expertos, Personal Shopping por concierge, flagship y corners: el embudo de TANE termina en una persona. Para la empresa nueva sin tiendas: el equivalente es el asesor por WhatsApp con respuesta real y la cita (aunque sea virtual) como paso del embudo, no como adorno.
3. **La etiqueta interna es un dato: audítala.** `no_buen_fin` en 152/250 productos es visible en el catálogo público y cuenta la estrategia mejor que cualquier banner: qué se excluye de la promo y por qué. Para la empresa nueva: las etiquetas internas del catálogo se filtran; que cuenten la historia que se quiere contar.
4. **Un sitio que se contradice erosiona el lujo.** "Calificado para envío gratis / agrega $10,000 más" en el mismo widget; badges de garantía de 30 días y 6 meses en la misma ficha; dos umbrales de MSI. En lujo, la contradicción se nota más porque el cliente lee con calma. Para la empresa nueva: un solo umbral, una sola duración de garantía, un solo mensaje por widget — y auditar el sitio como lo leería un cliente que va a gastar $29,900.
5. **La autoridad se construye fuera del sitio y se cobra dentro.** F1 desde 2015, RJC 2021, Farfetch, MUAC 2022, Grupo Bal: TANE no necesita blog para ser citada; su historia está en prensa independiente. Para la empresa nueva sin esa historia: el contenido propio (guías de cuidado, historia, proceso) es el sustituto — y TANE deja justo ese hueco (blog existente pero guías de cuidado no encontradas).
6. **Agentic-ready es hoy plantilla de Shopify, no proyecto.** `/agents.md` + UCP + MCP + permalink `/buy` con aspecto de plantilla estándar: estar preparado para agentes de compra ya no es una inversión a medida. Para la empresa nueva: si se construye sobre Shopify, la capa agentic viene dada; lo que hay que decidir es qué se vende por ahí (en TANE, `payment_handlers: {}` vacío y fulfillment solo `shipping`).
7. **Cuidado con el dominio que redirige.** `tane.mx` → 301 → `mx.tane.com` rompió el operador `site:` en dos frentes y casi se reporta como desindexación. Para la empresa nueva: verificar siempre cuál es el dominio canónico real antes de concluir nada sobre indexación; y para investigar: buscar sobre el dominio operativo, no sobre el de marketing.

---

## Fuentes

- https://tane.mx/ → https://mx.tane.com/ (301; dominio operativo real)
- https://mx.tane.com/ — home (lectura 13 nov 2026; barra 18 MSI, mega-menú, franja de 10 beneficios)
- https://mx.tane.com/products.json · https://mx.tane.com/collections.json · https://mx.tane.com/meta.json — 387 productos, 188 colecciones
- https://mx.tane.com/agents.md · https://mx.tane.com/.well-known/ucp — UCP v2026-08-25, MCP, permalink mx.tane.com/buy
- Fichas con precio (13 nov 2026): Matilda $10,600; Churumbela 2.0 Vermeil $13,900; Lazos Torzal $28,000; Gargantilla Xocolate Cadena $29,900; Anillo Lazos Cordel $11,000
- Términos Buen Fin 09–19 nov 2026 (hasta 18 MSI desde $15,000, CAT 0.0%)
- https://www.elpalaciodehierro.com/ — 44 aretes TANE sin precios en lo crawleado; 14 corners TANE
- Ficha Google/Maps: TANE Masaryk 430, 4.7/5 (32 reseñas)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/tane/`, 13 nov 2026)
