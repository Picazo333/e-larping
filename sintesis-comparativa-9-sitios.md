# Síntesis comparativa — 9 e-commerce mexicanos · Fase 2, WO-E-LARPING

- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Alcance:** F4T3 (Fase 1) + 9 sitios de la Fase 2: Buna, Ahal, Charly (Oleada 1), Cyberpuerta, TANE, Ki'Xocolatl (Oleada 2), El Sótano, Gandhi, Bandido Studio (Oleada 3). Total: 10 informes (1 de Fase 1 + 9 de Fase 2), 63 frentes de Fase 2 (7 por sitio × 9) + 7 de Fase 1.
- **Método:** 7 frentes por sitio (front end, back end + stack, SEO/GEO, redes + embudo, precios, logística como hipótesis, pain points), solo fuentes públicas. Sin navegador en vivo, sin inicio de sesión, sin compras, sin contacto con empresas ni clientes.
- **Convención:** OBSERVADO / INFERIDO / NO VERIFICADO en cada afirmación. Nada de lo aquí citado es métrica inventada: cada cifra lleva su fuente en el informe de su sitio.
- **Nota de plan:** por instrucción directa de Miguel (13 nov 14:04), el paralelismo se hizo visible: los 9 sitios corrieron A LA VEZ (no en oleadas de 3). La Oleada 1 (Buna/Ahal/Charly) se quedó como estaba y los 6 restantes se añadieron en paralelo sin esperar a que terminara. El resultado es este documento: 9 informes + esta síntesis.

---

## 0. Tabla maestra de los 9 (+ F4T3)

| # | Sitio | Industria | Plataforma | Precio | Promo dominante | Buen Fin 2026 (13 nov) | Agentic | Quejas públicas |
|---|---|---|---|---|---|---|---|---|
| 0 | F4T3 (f4t3.co) | Moda/streetwear | Shopify | Tachado ~2.5×; 6X1 $1,299 | Venta por volumen −10/−20/−30% | Re-etiquetado de la promo estructural + 12 MSI | agents.md, UCP/MCP | 1 queja pública (TikTok reembolso) |
| 1 | Buna (buna.mx) | Café de especialidad | Shopify (ID 14076980) | 340 g $310–$395; 2 kg −31,5% por gramo | Suscripción (15% prometido vs. 0–7,2% real); mayoreo −25% | Sin evidencia de promo propia de Buen Fin | UCP/MCP nativo | Cero quejas tras 15 búsquedas |
| 2 | Ahal (ahal.mx) | Cosmética natural | Shopify (ID 6793053) | Sin rebaja de lista; 3X2 en toda la tienda | 3X2 + envío gratis >$2,000 + regalo por umbral | Sin oferta propia de Buen Fin | UCP/MCP nativo | Cero quejas directas tras 13 búsquedas |
| 3 | Charly (charly.com) | Deporte/calzado | Magento/Adobe Commerce (PWA Studio) | Descuento por modelo/color, −15% a −60% | PROMOCIÓN estructural + BUEN FIN temporal | Activo 40–60% en fichas | Desconocido (timeout + 429) | Cero quejas atribuibles tras 16 búsquedas |
| 4 | Cyberpuerta (cyberpuerta.mx) | Tecnología | OXID eShop (propia) | Precio único, sin tachado | Financiera: 12 MSI + 17–18 bonificaciones bancarias vía PayPal | Domina el sitio (landing 13–17 nov) | Desconocido (fallo sin código HTTP) | Denso: Trustpilot 1.9/5 (51) vs. Google Play 4.67/5 (13,553) |
| 5 | TANE (mx.tane.com) | Joyería/lujo | Shopify (ID 28486959213) | Precio de lista fijo; 0/250 con `compare_at_price` | Ninguna (solo 18 MSI desde $15,000) | Sin descuento; solo 18 MSI, 9–19 nov, CAT 0.0% | UCP/MCP completo y activo | Cero quejas en 15 búsquedas |
| 6 | Ki'Xocolatl (kixocolatl.mx) | Chocolate | Shopify (Goodwin v2.1) | Ningún precio vigente verificable | Envío gratis >$2,000 y ≤2 kg (permanente) | Sin evidencia observable el 13 nov | UCP/MCP nativo | Cero quejas en 18 búsquedas |
| 7 | El Sótano (elsotano.com) | Libros (cadena mediana) | PHP propio (sin SaaS) | Descuento por título (−10% integrado; 15/20/25% en Derecho) | Por título, no de campaña | Participante según terceros; sin evidencia propia en texto | Cero (404 en ambos endpoints) | Cero quejas en 20 búsquedas |
| 8 | Gandhi (gandhi.com.mx) | Libros (gigante) | VTEX (Store Framework 2.x) | "Precio Gandhi" = lista −10% exacto, con tachado | −10% estructural permanente | Participante confirmado; mecánica no legible | Desconocido (403, no ausencia) | Cero quejas en 18 búsquedas |
| 9 | Bandido Studio (bandidostudio.com) | Diseño/iluminación | WordPress + WooCommerce | Ningún precio publicado | Ninguna (venta por cotización) | Sin evidencia | Cero (404 en ambos endpoints) | Cero quejas en 15 búsquedas |

**Sustituciones de la fase (2):** Minerva → Ki'Xocolatl (cervezaminerva.mx muestra "Coming Soon", sin tienda propia; vende vía Amazon/Mercado Libre/retail) y Canasta Rosa → El Sótano (canastarosa.com carga pero última captura hace 160 días y sin actividad pública en 2026 — marketplace zombi). Bandido Studio se mantiene con salvedad (sin checkout observable). El modelo marketplace (inventario de terceros) queda sin caso en esta fase — hueco anotado.

---

## 1. Plataforma: el mapa de la fase

**Shopify domina (5 de 9):** F4T3, Buna, Ahal, TANE, Ki'Xocolatl. Todos con UCP/MCP nativo (plantilla estándar, no implementación a medida) y con `/products.json` abierto. Es la vía de arranque: catálogo por API, checkout nativo, agentic dado.

**SaaS pesado (1):** Gandhi en VTEX (Store Framework 2.x, OMS + Sales App, omnicanal real, API de catálogo JSON pública). Es el techo SaaS de la fase: el omnicanal es el negocio, no un canal más.

**Magento (1):** Charly en Adobe Commerce (PWA Studio 13.3.0 / Venia UI 10.3.0, origen Platform.sh + CDN Fastly, GraphQL, Braintree + PayPal). Fabricante con 150–200 tiendas + 3,500–5,000 puntos de venta: la plataforma sigue al modelo (fabricante omnicanal), no al revés.

**Propias (2):** Cyberpuerta (OXID eShop + front Nuxt) y El Sótano (PHP propio + Cloudflare). Las dos con catálogo grande y equipo técnico propio. Ninguna de las dos es replicable como arranque.

**WooCommerce sin tienda (1):** Bandido Studio (WordPress + WooCommerce con `/checkout/` en 404). La plataforma instalada no es el negocio: el catálogo está vivo (actualizado el 13 nov) pero no hay tienda transaccional.

**Lección para la Fase 3/4:** empezar en Shopify (como F4T3), con VTEX como referencia de a dónde se llega cuando el omnicanal es el negocio. Las propias (OXID, PHP) y Magento son destinos, no arranques. Y auditar el checkout como un cliente (¿existe la ruta? ¿hay precios? ¿hay carrito?) antes de afirmar que "la tienda está en X".

---

## 2. Precios: cuatro lógicas, no una

| Lógica | Sitios | Cómo se ve |
|---|---|---|
| **Tachado 2.5× + volumen** | F4T3, Charly | F4T3: tachado ~2.5×, 6X1 $1,299, escalera −10/−20/−30%. Charly: descuento por modelo/color, −15% a −60%; lo nuevo a precio completo, temporada anterior liquidada al −60%. |
| **Precio único, promo financiera** | Cyberpuerta | Sin tachado en ~30 fichas; el descuento es banco + MSI (12 MSI, BBVA 16% solo 13 nov, Banamex hasta 30%). Precio de mercado verificable en dos pestañas. |
| **Precio de lista fijo, sin rebaja** | Ahal, TANE | Ahal: no rebaja precio de lista en tienda propia (3X2 + envío gratis + regalo por umbral); Liverpool canibaliza (Mask & Scrub $570 vs. $830). TANE: 0/250 con `compare_at_price`; solo 18 MSI. |
| **Precio por título / estructural −10%** | Buna, El Sótano, Gandhi | Buna: −10% integrado en suscripción (prometido 15% vs. real 0–7,2%); formato 2 kg = −31,5% por gramo. El Sótano: −10% integrado, 15/20/25% en Derecho, sin tachado visible. Gandhi: −10% exacto con tachado explícito, estructural permanente. |
| **Opaco / sin precio** | Ki'Xocolatl, Bandido | Ki'Xocolatl: ningún precio vigente verificable en texto público. Bandido: ningún precio publicado; venta por cotización. |

**El precio único del libro es un caso aparte.** La Ley del Libro fija el precio en El Sótano y Gandhi: no hay tachado 2.5× ni % general. La promo es por título, por cesta (2×1, sorteo SAT ≥$250) o por experiencia. Para la empresa nueva: si vende libros, la promo no puede ser de precio.

**Lección:** la lógica de precio sigue al producto, no a la plataforma. Moda liquida por modelo/color; tecnología compite en financiamiento; lujo protege el precio y vende con MSI; libros descuentan por título; chocolate y diseño de autor esconden el precio (y pierden al cliente que compara).

---

## 3. Buen Fin 2026 (13 nov, día 1): quién lo usa y cómo

| Sitio | Buen Fin el 13 nov |
|---|---|
| F4T3 | Re-etiquetado de la promo estructural + 12 MSI |
| Charly | Activo 40–60% en fichas (dos capas: PROMOCIÓN estructural + BUEN FIN temporal) |
| Cyberpuerta | Domina el sitio: landing 13–17 nov, hasta 12 MSI, 17–18 promos bancarias vía PayPal |
| Gandhi | Participante confirmado; "Destacados de Buen Fin" en home; mecánica no legible (el −10% es estructural, no se atribuye) |
| El Sótano | Participante según terceros (Cazaofertas); sin evidencia propia en texto |
| TANE | Sin descuento; solo hasta 18 MSI desde $15,000, 9–19 nov, CAT 0.0%; 152/250 con `no_buen_fin` |
| Buna, Ahal, Ki'Xocolatl, Bandido | Sin evidencia observable de promo propia el 13 nov |

**Tres formas de usar el Buen Fin:** (1) como campaña (Cyberpuerta, Charly: landing + % + MSI); (2) como rótulo (Gandhi, El Sótano: participante, mecánica no legible en texto); (3) como no-evento (TANE: solo MSI; Buna/Ahal/Ki'Xocolatl/Bandido: sin evidencia). **Lección:** el Buen Fin no es obligatorio. TANE y Ahal no rebajan y no pierden por ello; lo que pierde es el sitio que dice participar y no muestra la mecánica.

---

## 4. Comercio agentic: la plantilla ya llegó, la implementación no

| Estado | Sitios |
|---|---|
| **UCP/MCP nativo confirmado (plantilla Shopify)** | F4T3, Buna, Ahal, TANE, Ki'Xocolatl (5) — `/agents.md` 200, `/.well-known/ucp` 200, UCP v2026-08-25, MCP, permalink `/buy`, `payment_handlers: {}` |
| **Cero confirmado (404 en ambos endpoints)** | El Sótano, Bandido Studio (2) |
| **Desconocido (no ausencia)** | Charly (timeout + 429), Cyberpuerta (fallo sin código HTTP), Gandhi (403) |

**Hallazgo:** estar agentic-ready es hoy plantilla de Shopify, no proyecto. Los 5 Shopify de la fase lo tienen con aspecto de plantilla estándar. Lo que hay que decidir no es si se implementa, sino qué se vende por ahí (en TANE y Ki'Xocolatl, `payment_handlers: {}` vacío y fulfillment solo `shipping`). **Lección para la Fase 3:** si se construye sobre Shopify, la capa agentic viene dada; lo que hay que construir es el contenido que el humano (y el motor de IA) cita: precios visibles, FAQ, fichas indexadas. Un agente puede comprar en Ki'Xocolatl, pero un humano no puede comparar ahí.

---

## 5. SEO/GEO: quién cita y quién no

| Sitio | SEO de marca | SEO genérico | Contenido propio | GEO (citabilidad) |
|---|---|---|---|---|
| F4T3 | Fuerte | Moderado | Colecciones de promo permanente | No evaluado en Fase 1 |
| Buna | Fuerte | Débil | Blog muerto desde abr 2022 | Débil (sin contenido) |
| Ahal | Fuerte | Moderado | Blog activo + AHAL Revista | Fuerte (autoridad + contenido) |
| Charly | Fuerte (autoridad externa alta) | Fuerte | Sin contenido editorial propio ni reseñas | Fuerte por autoridad, débil por contenido |
| Cyberpuerta | Fuerte | Moderado | Textos de categoría de plantilla; configurador como activo GEO | A favor: crawlers de IA permitidos + JSON-LD; en contra: sin comparativas propias |
| TANE | Fuerte (prensa) | Débil | Blog existe; guías de cuidado no encontradas | Fuerte en marca/historia; débil en informativas |
| Ki'Xocolatl | Fuerte (marca) | Ausente del top 10 | Sin blog activo observable; sin FAQ | Fuerte en historia/premio (en terceros); débil en propio |
| El Sótano | Fuerte | Invisible | Sin blog; robots bloquea `/noticias/` y rutas temáticas | Citable como tienda, no como autoridad |
| Gandhi | Fuerte | Débil (Buscalibre/Péndulo ganan) | Fino en dominio; real fuera (podcast, Tinta, Lee Más) | Muy citable en factual/transaccional; débil en recomendación |
| Bandido | Fuerte | Ausente (guías y competidores con precio ganan) | Glosario + FAQ + fichas técnicas con datos duros | Citable como autoridad; casi incitable como compra |

**Patrones:** (1) Todos dominan su búsqueda de marca; casi ninguno gana la genérica transaccional. (2) El contenido que cita vive a menudo fuera del dominio (prensa, podcast, satélites) — y el dominio no lo enlaza. (3) El robots.txt puede bloquear justo lo que vende (El Sótano bloquea `/noticias/`, `/categoria/`, `/autor/`, `/editorial/`). (4) El marcado `Product` con precio+stock es el activo estructurado más replicable (El Sótano, Gandhi, Cyberpuerta, TANE lo tienen; Ki'Xocolatl no lo expone en texto). **Lección:** la genérica transaccional la gana quien tiene precio visible + contenido que responde; la de marca se gana con historia y prensa, no con SEO técnico.

---

## 6. Redes y embudo: tres embudos, no uno

| Embudo | Sitios | Cómo cierra |
|---|---|---|
| **Comunitario + consultivo + financiero** | Cyberpuerta (CyberLeague, Discord, Twitch, configurador de PC, 12 MSI), Charly (drops, jerseys, omnicanal) | Herramienta o drop → checkout con MSI |
| **Editorial + humano + físico** | TANE (IG/prensa → WhatsApp/teléfono → cita → tienda), Bandido (prensa/ferias/IG → PDF → formulario → showroom → cotización), Ahal (embudo educativo: landing "CÓMO USAR" → kit/mini → checkout) | Asesor o cita; el botón es una persona |
| **Omnicanal con tienda como ancla** | Gandhi (redes + Revista Lee+ + podcast + eventos/clubes → web con envío gratis o sucursal; Tinta como retención), El Sótano (4 pasos web + Boletín + wishlist + lealtad; Amazon como cliente y competidor), Buna (IG única red orgánica; suscripción como eje) | Web o sucursal; la tienda física retiene |

**Ritmo/captions de Instagram NO VERIFICADOS en los 9 sitios** (429 recurrente en perfiles; feeds no devueltos). Las cifras de seguidores que sí se verificaron: Ahal IG @ahal_bio 160,715; Gandhi TikTok @librerias.gandhi 430.9k (caché ~183 días); Ki'Xocolatl IG 13,234 / FB 18,346. **Lección:** el embudo sigue al ticket y al producto. Ticket alto y compra meditada (TANE, Bandido) cierran con persona; ticket medio y catálogo (Gandhi, Cyberpuerta) cierran con herramienta o tienda; suscripción (Buna, Ahal) cierra con el kit de entrada. Para la empresa nueva: elegir el embudo por el ticket, no por la moda del canal.

---

## 7. Logística: el pickup, el umbral y la rotura

| Sitio | Stock | Drenaje | Mensajerías | Envío gratis | Devoluciones |
|---|---|---|---|---|---|
| F4T3 | No documentado en Fase 1 | Promo permanente + liquidación | No documentado | No documentado | Solo crédito en tienda (fricción) |
| Buna | 18 productos declarados vs. 25 tarjetas | Mayoreo −25%; formato 2 kg | No nombradas | CDMX >$890 / resto >$1,499 | Sin política publicada (fricción) |
| Ahal | Caducidad como diferencia estructural | No se liquida (caduca) | No nombradas | >$2,000 | Descargo por alergias (fricción) |
| Charly | Fabricante, CEDIS León; stock en Amazon FBA 1–5 por talla | Red física + terceros; outlets $349–$399 | No nombradas | >$999 | Devolución por talla 8–19% del ticket |
| Cyberpuerta | Conteo exacto por SKU ("Solo 1–7 pzas.") | Por evento (Buen Fin, Pre Buen Fin) | Logos en "Quiénes somos" (Paquetexpress, Estafeta, DHL) | Solo marcas seleccionadas | Hasta 30 días (14 si golpeado/sellado); penalización hasta 30% |
| TANE | Stock propio + taller artesanal (inferido) | Boutique/corporativo + retirada de catálogo (hipótesis) | No nombradas | Desde $10,000 (widget contradictorio) | Gratis 60 días; sin cambios en personalizadas |
| Ki'Xocolatl | Stock propio limitado o lote (inferido) | Multicanal (boutiques, souvenir, hoteles) | Estafeta y FedEx (mayo 2025) | >$2,000 y ≤2 kg (permanente) | No hay devoluciones (2 h para reclamar defecto) |
| El Sótano | Disponibilidad débil en muestra (10/29) | Curaduría editorial (30%/20%/10%) | Solo de tercero (Estafeta/FedEx/Borzo) | >$450 (solo tercero; >$389 en abr 2025) | Reclamo 5 días; reembolso 10–15 días (solo tercero) |
| Gandhi | >5M títulos; sin conteos por SKU | "Oportunidades"/saldos; promo por fondo 10–20% | Ninguna nombrada | "Siempre" (rótulo; $99 según tercero) | Sin cambios ni devoluciones (la más restrictiva) |
| Bandido | Bajo pedido / lotes pequeños (inferido) | Exhibición-venta (sin outlet) | Ninguna nombrada | Sin costo publicado | Sin política publicada |

**Patrones:** (1) El pickup es la ventaja logística (Gandhi: 70% pickup; El Sótano: recolección en sucursal; TANE/Bandido: retiro en tienda/showroom). (2) El envío gratis por umbral es incentivo de cesta, no beneficio universal (Buna $890/$1,499; Ahal $2,000; Ki'Xocolatl $2,000; El Sótano ~$450 = 2 libros). (3) La devolución es donde se pierde lo que el precio gana (F4T3: solo crédito; Cyberpuerta: penalización 30%; Gandhi: ninguna; Ki'Xocolatl: ninguna; El Sótano: 10–15 días). (4) Casi nadie nombra su mensajería en el propio sitio (solo Ki'Xocolatl: Estafeta/FedEx; Cyberpuerta: logos). **Lección:** publicar la mensajería, el umbral real y la política de devoluciones en el propio sitio; el silencio en los tres es fricción que el cliente descubre en checkout.

---

## 8. Pain points: dónde duele y dónde no hay nada que explotar

| Sitio | Quejas públicas | Política vs. realidad | Señal agregada |
|---|---|---|---|
| F4T3 | 1 queja (TikTok reembolso, 5,395 likes) | Solo crédito en tienda; sin cambios en promo; entregas hasta ~12 días | Sin agregada |
| Buna | Cero tras 15 búsquedas | Sin política de envío/devoluciones publicada | Buna 42: 4.5★/1,567 vs. 4.8/1,031 sin reconciliar |
| Ahal | Cero directas tras 13 búsquedas | Descargo por alergias ("no somos responsables" ×2); errores Liquid en landings | Loox 3,555 reseñas (4.7/5 en home: 5,209, sin reconciliar) |
| Charly | Cero atribuibles tras 16 búsquedas | Reventa: Stylo.mx solo saldo a favor; Klass Sport excluye ≥30% de descuento | "(Sin reseñas)" en todas las fichas |
| Cyberpuerta | **Denso** (11 búsquedas) | Promete 2 días de respuesta / reembolso 5 días; casos de 30 días y 6 meses; negativas contradictorias; soporte que no escala | Trustpilot 1.9/5 (51) vs. Google Play 4.67/5 (13,553) |
| TANE | Cero en 15 búsquedas | Política 60 días (texto) vs. badges contradictorios | Masaryk 4.7/32 |
| Ki'Xocolatl | Cero en 18 búsquedas | "No existen devoluciones"; reclamación 2 h; aviso COVID 2020 vigente | Santa Lucía 4.7/5 (48) |
| El Sótano | Cero en 20 búsquedas | Reembolso 10–15 días (solo tercero); sin política oficial legible (429) | Picodi 3.97/5 (636); sucursales 4.0–4.5 |
| Gandhi | Cero en 18 búsquedas | "Sin cambios ni devoluciones" (la más restrictiva); sin queja que la confirme ni la desmienta | Sin agregada para gandhi.com.mx; sucursales 4.2–4.5/5 |
| Bandido | Cero en 15 búsquedas | Sin política publicada; garantía solo por contacto directo | Sin agregada; prensa de diseño sólida |

**Hallazgo central:** solo 2 de 10 sitios tienen quejas públicas densas (Cyberpuerta y, en menor medida, F4T3). Los otros 8 reportan cero quejas atribuibles — y en todos se consigna como **baja visibilidad, no como satisfacción probada** (las reclamaciones viven en correo/teléfono/DM/tienda, canales no indexables). **Lección:** no hay escándalo que explotar en 8 de 10 sitios; la oportunidad es de fricción, no de descontento: reembolso en 3–5 días (no 10–15 ni 30), devolución gratuita, disponibilidad verificada antes del cobro, política publicada y cumplida. Y la excepción (Cyberpuerta) enseña lo contrario: publicar la política y no cumplirla es peor que no publicarla — Trustpilot 1.9/5 es el precio.

---

## 9. Verificación global final de la fase

### Sustituciones (2, ya registradas en la verificación de la fase)
- **Minerva → Ki'Xocolatl:** cervezaminerva.mx muestra "Coming Soon" (parking del hosting); sin tienda propia; vende vía Amazon/Mercado Libre/retail.
- **Canasta Rosa → El Sótano:** canastarosa.com carga pero última captura hace 160 días (6 jun 2026) y sin actividad pública en 2026 (prensa 2020–2022; fundadora pasó a MyStore) — marketplace zombi. Nota: El Sótano duplica la industria de Gandhi (libros); el contraste útil es escala (Gandhi gigante omnichannel vs. El Sótano cadena mediana); el modelo marketplace (inventario de terceros) queda sin caso en esta fase — hueco anotado para la síntesis.

### El plan cambió a mitad de fase (y se cumplió)
Por instrucción directa de Miguel (13 nov 14:04): paralelizar, y que el paralelismo SE VEA — NO en oleadas de 3. La Oleada 1 (Buna/Ahal/Charly) se quedó como estaba y los 6 restantes se añadieron en paralelo sin esperar a que terminara. Resultado: los 9 sitios corrieron a la vez; 63 frentes de Fase 2 (21 Oleada 1 + 21 Oleada 2 + 21 Oleada 3) + 7 de Fase 1 (F4T3) = 70 frentes en total. Esta síntesis es el cierre que pedía el cambio de plan: informe por sitio + síntesis comparativa de los 9 + verificación global al cierre.

### Huecos recurrentes (toda la fase)
1. **429 sin reintento** en políticas, perfiles de IG, sitemaps y PDFs (Cyberpuerta, TANE, Ki'Xocolatl, El Sótano, Gandhi, Bandido). Es la causa principal de huecos; se consigna como NO VERIFICADO, no como ausencia.
2. **Ritmo/captions de Instagram NO VERIFICADOS en los 9 sitios** (feeds no devueltos; perfiles con 429). Ningún informe de la fase afirma ritmo, formatos ni captions de IG.
3. **Checkout real no recorrido en ningún sitio** (por método: sin carrito, sin sesión, sin compra). MSI por banco, costo final de envío por CP y métodos en pantalla quedan NO VERIFICADOS en los 9.
4. **Posiciones, tráfico y volúmenes no medidos en ningún sitio** (sin herramientas de medición). Ningún informe afirma rankings ni tráfico.
5. **Citas en motores de IA no interrogadas en ningún sitio.** La citabilidad GEO es evaluada por contenido, no medida.
6. **Mensajerías casi nunca nombradas en el propio sitio** (solo Ki'Xocolatl y Cyberpuerta por logos). En 7 de 9 sitios, la mensajería queda NO VERIFICADA o solo de tercero.
7. **Homónimos y trampas documentadas en casi todos los sitios:** Dportenis (Cyberpuerta, Gandhi), Xiocolat (Ki'Xocolatl), Tanaor/Tanum/Tianté/Tanner (TANE), restaurante Bandido (Bandido Studio), Gandi.net/Gandys (Gandhi), *Slendrina: The Cellar* y novela *El sótano* (El Sótano), charolo.com (Charly), Duku/Safebuild (Cambridge, fuera de fase). Cada informe documenta qué se descartó y por qué.

### Contradicciones entre sitios (no dentro de un sitio)
1. **"Envío gratis siempre" (Gandhi) vs. umbral en todos los demás.** Gandhi es el único con rótulo de gratis siempre; los demás tienen umbral ($450–$2,000) o gratis solo por marca. El rótulo de Gandhi no se verificó en checkout.
2. **El −10% con tachado (Gandhi) vs. −10% integrado sin tachado (El Sótano, Buna).** Misma industria, mismo %, mecánica opuesta: Gandhi lo muestra, El Sótano lo esconde en el precio. El que lo muestra es verificable; el que lo esconde depende del snippet.
3. **Shopify con agentic (5) vs. Shopify sin agentic (0).** No hay Shopify de la fase sin UCP/MCP: la plantilla lo trae. Los no-Shopify se dividen entre cero confirmado (El Sótano, Bandido) y desconocido (Charly, Cyberpuerta, Gandhi).
4. **Precio único del libro (El Sótano, Gandhi) vs. tachado 2.5× (F4T3, Charly).** La Ley del Libro es el límite estructural que explica la diferencia; no es decisión de cada tienda.
5. **Cero quejas (8 sitios) vs. quejas densas (Cyberpuerta).** No es que 8 tiendas sean perfectas: es que sus reclamaciones no viven en canales indexables. Cyberpuerta es la excepción porque su postventa sí deja rastro público.

### Qué NO se puede afirmar con esta fase
- Ningún ranking de "mejor tienda" (sin tráfico, sin conversión, sin NPS comparables).
- Ninguna tasa de disponibilidad del catálogo (las cifras de OutOfStock son muestras, no censos).
- Ninguna cifra de seguidores/engagement de Instagram (feeds no devueltos).
- Ningún precio "vigente" de Ki'Xocolatl ni de Bandido Studio (ninguno verificable).
- Ninguna afirmación sobre checkout, MSI por banco o costo final de envío (checkout no recorrido).
- Ninguna cita real en motores de IA (ninguno interrogado).

### Archivos entregados (Fase 2 completa)
- Informes consolidados: `informes/buna/informe-buna.md`, `informes/ahal/informe-ahal.md`, `informes/charly/informe-charly.md`, `informes/cyberpuerta/informe-cyberpuerta.md`, `informes/tane/informe-tane.md`, `informes/kixocolatl/informe-kixocolatl.md`, `informes/elsotano/informe-elsotano.md`, `informes/gandhi/informe-gandhi.md`, `informes/bandido/informe-bandido.md`
- Esta síntesis: `informes/sintesis-comparativa-9-sitios.md`
- Frentes por sitio: `informes/<sitio>/f1-frontend.md` … `f7-pain-points.md` (7 por sitio, 63 en total)
- Verificación de actividad de la fase: `informes/verificacion-fase2.md`
- Nada subido al repo (lo hace el agente principal al recibir las entregas).

---

## 10. Lecciones para la Fase 3 y la Fase 4 (síntesis)

1. **Empezar en Shopify, con la capa agentic dada.** 5 de 9 sitios lo confirman: catálogo por API, checkout nativo, UCP/MCP de plantilla. Lo que hay que construir es el contenido que cita el humano y el motor de IA.
2. **Publicar el precio en la ficha, con tachado si hay descuento.** El precio visible es el ticket de entrada a la genérica transaccional y a la comparación en dos pestañas. Ki'Xocolatl y Bandido pierden al cliente que compara; Gandhi lo gana con el tachado explícito.
3. **La promo sigue al producto, no a la plataforma.** Moda liquida por modelo/color; tecnología compite en financiamiento; lujo protege el precio y vende con MSI; libros descuentan por título; suscripción vende por kit de entrada. Elegir la lógica por el producto, no copiar la del vecino.
4. **El embudo sigue al ticket.** Ticket alto y compra meditada cierran con persona (asesor, cita, showroom); ticket medio y catálogo cierran con herramienta o tienda (configurador, pickup); suscripción cierra con el kit de entrada. Elegir el embudo por el ticket.
5. **El pickup es la ventaja logística.** Gandhi (70% pickup), El Sótano (recolección), TANE/Bandido (retiro): sin tienda, el equivalente es el punto de entrega. No prometer "envío gratis siempre" sin un pickup que lo sostenga.
6. **Publicar la mensajería, el umbral real y la política de devoluciones — y cumplirlos.** El silencio en los tres es fricción que el cliente descubre en checkout; la política publicada y no cumplida (Cyberpuerta, Trustpilot 1.9/5) es peor que no publicarla.
7. **El contenido que cita vive donde se pueda citar.** Glosario + FAQ + fichas técnicas (Bandido), blog + revista (Ahal), podcast + Tinta (Gandhi): el contenido es el activo GEO. Pero si vive fuera del dominio, el dominio debe citarlo y enlazarlo; si no, el motor cita el satélite, no la tienda.
8. **No bloquear lo que vende.** El Sótano bloquea en robots justo sus rutas temáticas; Gandhi no tiene blog; Ki'Xocolatl no indexa sus fichas. Para la empresa nueva: categorías, guías y comparativas indexables y abiertas a crawlers de IA; marcado `Product` con precio+stock en cada ficha.
9. **La fricción es la oportunidad, no el escándalo.** En 8 de 10 sitios no hay descontento público que explotar; hay fricción silenciosa (reembolso lento, devolución con costo, stock no verificado antes del cobro, precio no visible). Resolverla es la propuesta.
10. **Verificar el dominio antes de concluir nada.** `tane.mx` → 301 → `mx.tane.com` rompió el operador `site:` en dos frentes; Dportenis, Xiocolat, el restaurante Bandido y charolo.com contaminaron búsquedas en cinco sitios. Para la empresa nueva y para investigar: el dominio canónico real primero, la cifra después.
