# Informe consolidado — Charly · Fase 2, WO-E-LARPING

- **Sitio:** https://www.charly.com/ (marca visible: Charly — «Charly México»; calzado y ropa deportiva, marca mexicana)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 2 de la WO-E-LARPING (Oleada 1: Buna / Ahal / Charly)
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

**OBSERVADO.** Charly es una marca mexicana grande y antigua de calzado y ropa deportiva (origen 1949/1950 como Campanita, giro a deportivo en 1977, sede León, Guanajuato; sociedad Inter Tenis S.A. de C.V.; distribuidora oficial de Skechers en México desde 2010), que vende en https://www.charly.com/ sobre **Magento / Adobe Commerce** (confirmado por `robots.txt`, `/graphql` y cabeceras; PWA Studio / Venia 13.3.0), con origen en Platform.sh y borde Fastly. No es Shopify: es el anti-F4T3 en stack, en escala y en modelo.

**El negocio en una frase:** fabricante con marca propia que vende por **descuento selectivo por modelo/color** (del −15% al −60% sobre precio de lista, con el −60% como techo y el −20%/−40% como niveles frecuentes), apoyado en una red física de 150–200 tiendas propias y 3,500–5,000 puntos de venta, más marketplaces y departamentales; el Buen Fin 2026 etiqueta y profundiza descuentos que ya existían, no los crea.

**Tres rasgos que la distinguen:**
1. **Autoridad externa real y densa:** patrocinador oficial del Comité Olímpico Mexicano (París 2024, convenio citado hasta Los Ángeles 2028; Dakar 2026 juvenil con "Raíces del Futuro"), viste a clubes de Liga MX (León, Santos, Atlante, Atlas en 2026), página propia en Wikipedia y cobertura de prensa de negocio (Expansión, ago 2026). La autoridad la construyen los patrocinios, no un blog propio (no se encontró blog en charly.com).
2. **Omnicanalidad como sistema de drenaje:** no hay Mystery Box ni liquidación agresiva en la propia web; el excedente y las tallas extremas se liquidan fuera de su escaparate — terceros en Amazon (stock de 1–5 unidades por talla), outlets desde $349 y Walmart a $399.01 — mientras la web protege el precio de lista.
3. **Ausencia de prueba social en la propia tienda:** todas las fichas muestran "(Sin reseñas)", no hay perfil localizable en Trustpilot y las políticas propias (envíos, devoluciones, reembolsos, atención) no pudieron leerse (429 en las lecturas directas, sin reintento). Cero quejas públicas verificables atribuibles a charly.com en 16 búsquedas dirigidas — un silencio que puede ser buena operación o fricción absorbida por las 168 tiendas físicas; con fuentes públicas no se puede distinguir.

**Pista previa corregida:** «es una marca grande: es probable que NO sea Shopify; no asumas plataforma, verifícala». Verificado: Shopify **descartado** (cero marcadores en home, ficha y bundle); Magento/Adobe Commerce **confirmado** (robots.txt "#Magento theme robots.txt", `/graphql` con `store_name: "Charly México"`, PWA Studio 13.3.0 / Venia UI 10.3.0). La colección PFX de $1,899–$1,999 citada en el dato de partida existe **en tiendas físicas y retailers** (Distrito Magazine), mientras en charly.com la base observada de los PFX es **$1,699**: hay brecha de precio por canal, no un error de dato (ver §9, C1).

---

## 1. Qué es Charly

**OBSERVADO.** Empresa mexicana fundada en 1949 en León, Guanajuato (como Campanita, calzado infantil; giro a deportivo y nombre Charly en 1977). Diseña, fabrica y comercializa calzado, ropa deportiva y accesorios; desde 2010 es distribuidora oficial de Skechers en México. Opera a través de Inter Tenis S.A. de C.V. (política de privacidad de charly.com; contacto: contactotiendaonline@charly.com, 800-925-1001). [Wikipedia "Charly (marca)"; Expansión, 16 ago 2026]

**OBSERVADO.** Red física grande, con cifras que difieren entre fuentes: ~168 tiendas propias y más de 3,500 puntos de venta (Wikipedia); "más de 150 tiendas y alrededor de 3,500 puntos de venta entre México y Estados Unidos" (Expansión, ago 2026); "más de 175 tiendas y 5,000 puntos de venta" (perfil de Grupo Charly en Computrabajo); "200 tiendas a nivel nacional" (oferta de empleo). Rango reportado: **150–200 tiendas propias; 3,500–5,000 puntos de venta**. Existe un CEDIS en León (vacante "Coordinador de Operaciones CEDIS": recibo, surtido, acomodo, valor agregado, empaque y despacho).

**OBSERVADO.** Catálogo (13 nov 2026): tienda en línea con 5 categorías visibles — HOMBRE, MUJER, FÚTBOL, KIDS y Nuevo — y un catálogo ancho: la búsqueda del sitio devuelve "1315 elementos" para un término (INFERIDO, confianza media-alta, que es el tamaño del catálogo, no las coincidencias de la búsqueda). Colección temática Día de Muertos con 11 resultados ($349–$1,399, 3 con etiqueta PROMOCIÓN). Colección PFX (performance: Akoyo PFX, Turso PFX, Akoyo Trail PFX; tecnologías ActiveFoam 2.0, Contour Fit, Hi-Trac Rubber 2.0, MotionKnit, Dual Geometry System) a $1,899–$1,999 en tiendas físicas y retailers especializados.

**OBSERVADO.** Precios de referencia en charly.com (13 nov 2026, Buen Fin): chamarra Winter $1,099 (Nuevo, sin descuento); playera Día de Muertos $499 (Nuevo); Tenis Cicero Sala 26 $999 → $799.20 (−20%); Tachones Stingr PFX $1,699; Hotcross 26 $999; jersey Atlas Local 24-25 $1,599 → $639 (−60%); jersey Atlas Local manga larga 26-27 $1,799 (sin descuento).

---

## 2. Front end (F2.1)

**OBSERVADO.** Home (extracción de texto de solo 32 líneas; sitio pesado en JS/imágenes): título "Calzado y Ropa Deportiva"; categorías HOMBRE, MUJER, FÚTBOL, KIDS; productos "Nuevo" ($499–$1,099); secciones "CALZADO FÚTBOL" y "TENIS DEPORTIVOS MUJER". Banner: **"Envío Estándar Gratis en compras mayores a $999"**. Aviso offline de PWA ("You are offline. Some features may be unavailable.") visible vía snippet.

**OBSERVADO.** Ficha estándar: breadcrumb Inicio + categoría + etiqueta de campaña (BUEN FIN o PROMOCIÓN); "(Sin reseñas)" + "Añadir reseña" en todas las fichas consultadas; ITEM # de 10 dígitos (p. ej. Leggera 1087246002, Atlas 5020045600, Stingr PFX Jr 1065288001); precio tachado + descuento; selectores Color / Talla / "GUÍA DE TALLAS +" (presente en todas las fichas leídas y en ≥10 productos vía snippets) / Cantidad; acordeones Descripción / Detalles / Reseñas; sección "COMPLEMENTA TU ESTILO" (venta cruzada). JSON-LD `Product.offers` con precio de lista (no el precio con descuento) e InStock, inyectado en cliente.

**OBSERVADO.** Dos patrones de URL de producto conviviendo: `/{ITEM#}-{slug}` (p. ej. `/1087560002-tachones-de-piel-…`) y `/{slug}-{ITEM#}-mx` (p. ej. `/jersey-atlas-local-para-hombre-24-25-5020045600-mx`), además de la forma corta `/{ITEM#}-310`. Búsqueda: `/search.html?query=…`, "1315 elementos", bloque PRODUCTOS SUGERIDOS (3), "Ordenar por", resultados con etiquetas PROMOCIÓN / Nuevo. La relevancia de búsqueda es débil en consultas compuestas (INFERIDO, confianza media: "Sudadera día de muertos" devuelve playeras y gorras).

**INFERIDO (confianza alta).** Plataforma Magento 2: patrón `/search.html?query=`, `data-pb-style` (Page Builder de Magento 2) filtrado en la ficha del jersey Atlas, parámetro `?media_type=image`, patrones de URL. Confirmado por F2.2 (ver §3).

**NO VERIFICADO.** Contenido de la guía de tallas (probable modal JS); valores del selector de tallas y disponibilidad por talla; carrito, pasos del checkout, métodos de pago y MSI; header/menú/footer/newsletter (no aparecen en ninguna extracción — ausencia en extracción ≠ ausencia en el sitio); filtros en colección y búsqueda (solo se vio "Ordenar por"); URLs de las categorías HOMBRE/MUJER/FÚTBOL/KIDS; términos y condiciones, política de envíos y devoluciones (no se encontró su URL); vista móvil real; rendimiento medido; app móvil propia (la app "Charly" de Google Play hallada es de delivery en Paraguay, no relacionada). Lectura directa de la ficha Legendario 1087560002: 429, no reintentada (sus datos se documentan vía búsqueda).

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** Magento / Adobe Commerce confirmado: `robots.txt` abre con "#Magento theme robots.txt" y bloquea rutas clásicas (`/index.php/`, `/checkout/`, `/app/`, `/lib/`, `/*.php$`, `/catalog/`, `/customer/`, `/sendfriend/`, `/review/`, `/*SID=`); endpoint `/graphql` responde como Magento (GET sin consulta → 500 JSON con `X-Magento-Cache-Id` y cookie `PHPSESSID`; POST con `storeConfig` → 200 con `store_name: "Charly México"`). Front-end: PWA Studio / Venia 13.3.0 (`pwa-studio: 13.3.0, @magento/venia-ui: ~10.3.0, @magento/pagebuilder: ~8.2.1, @apollo/client: ~3.5.0`; rutas `/venia-static/`; `manifest.json` PWA "Charly", `theme_color #E75F00`). Cero menciones de Luma/RequireJS: el front es 100% PWA.

**OBSERVADO.** Hosting/origen: Platform.sh (`x-platform-server: i-e537556aeb1f2c8b`); borde CDN: Fastly (`X-Served-By: cache-sjc1000094-SJC` y `cache-ewr-kewr1740042-EWR`, `X-Cache: MISS`). Sin marcadores de Cloudflare en las muestras. Bundles JS servidos desde el propio dominio; imágenes con `data-media-backend="https://www.charly.com/media/"`.

**OBSERVADO.** Pagos en el código del front: tarjeta vía **Braintree Hosted Fields** (`code: "braintree"`, `payment_method_nonce`, `HostedFieldsConfig`; CSP `*.braintreegateway.com`); **PayPal Express** (`code: "paypal_express"`); **PayPal Smart Payment Buttons** (`code: "paypalspb"`). Tipos GraphQL `ApplePayConfig`, `GooglePayConfig` y `FastlaneConfig` presentes (configuración de Braintree) — ofrecimiento real en checkout NO VERIFICADO. Cero menciones de Mercado Pago, Conekta, Openpay, Stripe directo, Kueski, Aplazo, OXXO o SPEI en home, ficha y bundle `client.js` (1,5 MB revisado).

**OBSERVADO.** Terceros: **Klaviyo** (script onsite `static.klaviyo.com/onsite/js/TVBK5w/klaviyo.js`); **Adobe Launch** (primer script del `<head>`, `launch-85cf71e759d2-staging.min.js` — la librería cargada se llama "staging"; ver §9); Adobe Experience Cloud / Audience Manager (dominios en CSP: `amcglobal.sc.omtrdc.net`, `dpm.demdex.net`, `commerce.adobe.net`); **Adobe Live Search** (CSP: `*.magento-datasolutions.com`, `*.magento-ds.com`) y **Product Recommendations** (componente en el bundle; CSP `magento-recs-sdk.adobe.net`); **New Relic** APM/RUM (agente NREUM, `applicationID: 1044320521`, `accountID: 4347296`); **Sentry** (CSP `*.sentry-cdn.com`, `*.sentry.io`); **ThreatMetrix** anti-fraude (`h64.online-metrix.net` en CSP); **Sansec** (detección Magecart; `report_uri` en CSP); reCAPTCHA (CSP); **Google Maps Places** (script `maps.googleapis.com/maps/api/js?libraries=places&region=MX&language=es` — localizador de tiendas); Adobe Fonts (Typekit). GA4/Google Ads/GTM, Meta Pixel y TikTok/Pinterest: sin IDs en el HTML inicial (se sirven vía Adobe Launch, según CSP); el subdominio `demo-1.conversionsapigateway.com` sugiere un gateway de Conversions API de Meta (confianza media).

**INFERIDO (confianza alta).** Es **Adobe Commerce (de pago) sobre Adobe Commerce Cloud**: la combinación Platform.sh + Fastly + New Relic es la infraestructura de Commerce Cloud, y Live Search + Product Recommendations son servicios exclusivos de la edición de pago, no de Magento Open Source. La edición y la versión del core no son observables directamente desde fuera.

**NO VERIFICADO.** Comercio agéntico (UCP/MCP/`agents.md`): las lecturas de `/agents.md` y `/.well-known/ucp` **expiraron (timeout, ~19:20 UTC) y no se reintentaron** — resultado desconocido, no un 404; cero menciones en home, ficha y bundle. Contenido del sitemap (`/media/sitemap/sitemap.xml`): lectura con **429**, no reintentada. Consulta `products` por GraphQL: dos POST expiraron (30 s y 60 s, 0 bytes); el endpoint existe pero la consulta de catálogo no devolvió datos. Versión del core; adquirente en México, marcas de tarjeta y esquema de MSI; IDs de GA4/Ads/GTM/Pixel/TikTok/CAPI; proveedor de reseñas; logística/ERP/inventario; interior del checkout y post-compra.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** SEO técnico estándar de Magento y cuidado: `robots.txt` con Googlebot y Googlebot-image con todo permitido; sitemap declarado en `https://www.charly.com/media/sitemap/sitemap.xml`; JSON-LD `Product.offers` (precio MXN, disponibilidad InStock) en fichas; título de home "Charly | Calzado y Ropa Deportiva". `site:charly.com` devuelve fichas de producto (jerseys Atlas/Atlante/León 26-27, tachones Hotcross 26, Legendario 26 PFX, Zinetik 26, tenis Luno Día de Muertos): el catálogo está indexado.

**OBSERVADO.** Autoridad externa real y densa: patrocinador oficial del COM en París 2024 (uniformes de traslado, entrenamiento y competencia en 9 disciplinas; diseño México 68 + jaguar + bandera; colección a la venta $899–$1,599, calzado $499–$1,999); convenio con el COM citado hasta Los Ángeles 2028; viste a la delegación juvenil en Dakar 2026 con "Raíces del Futuro" (62 atletas; presentada 17 oct 2026; a la venta en tiendas desde 19 oct y en charly.com desde 21 oct); Liga MX 2026: León, Santos, Atlante y Atlas; Wikipedia: ficha "Charly (marca)" (Inter Tenis S.A. de C.V., fundación 1949, sede León, ~168 tiendas, +3,500 puntos de venta, distribuidora oficial de Skechers, sitio citado `http://www.charly.com.mx`); Expansión (16 ago 2026) con la historia de la empresa familiar; listados de categoría (Merca20, 25 jun 2026; DondeIrDeCompras; blog de Martí); Distrito Magazine (colección PFX, Charly Recycle — materiales hasta 80% reciclados, donación a ONG, limpiezas de playas y cenotes — y "Raíces del Futuro"); podcasts de historia de marca (GRITones ep. 135; Los Aficionados, 8 ene 2026).

**OBSERVADO.** Distribución multicanal: Amazon México con tienda de marca CHARLY (modelo 1086601001 con 4.1/5 en 29 reseñas, ASIN B0CGMN9KH8, nº 860 en Calzado de Tenis para Hombre); productos en Sears, Walmart (tenis a $399.01, Radio Fórmula dic 2025), Coppel ($892 vs $1,115, jul 2025), Pakar (UTM de Facebook en su URL) y Martí (Neovolution 2.0 TF, $520). Buen Fin 2026: Charly listada como tienda participante (Cazaofertas); Picodi: "Hasta 50%" con vigencia hasta 17/11/26; AM León (12 nov 2026): hasta 50% en calzado Charly en Altacia.

**INFERIDO (confianza alta).** La estrategia digital es **autoridad + distribución omnicanal**, no SEO de contenido propio: la autoridad la construyen los patrocinios y la prensa, no un blog (no se encontró blog en charly.com); la venta se reparte entre tienda propia, 150+ tiendas, ~3,500 puntos de venta y marketplaces/departamentales. La reputación vive en los retailers, no en la tienda propia: "(Sin reseñas)" en charly.com, `/review/` bloqueado en robots, reseñas solo en Amazon/Sears. Charly está mejor preparada para ser citada en respuestas de IA que F4T3 por autoridad editorial, no por infraestructura (confianza media-alta): Wikipedia + prensa nacional convergente + listados de categoría, sin `/agents.md` observable ni UCP/MCP.

**INFERIDO (confianza media).** La home pierde visibilidad en el top 10 de marca exacta frente a terceros con más autoridad (Wikipedia, Expansión, Infobae), posiblemente por repartir autoridad entre `charly.com` y `charly.com.mx`. Los dos patrones de URL de producto sugieren migración o dos generaciones de URLs; riesgo menor de duplicidad si no hay canónicas/redirecciones.

**NO VERIFICADO.** Posiciones reales en Google/Bing, tráfico orgánico, volúmenes de búsqueda; citas en respuestas de ChatGPT / Google AI Overviews / Perplexity; contenido y frescura del sitemap (429); existencia o no de `/agents.md` / UCP / MCP (429 en lectura directa; la búsqueda devolvió cero resultados relevantes; el `robots.txt` no los enlaza — no se afirma que no existan); meta description de la home, JSON-LD de `Organization`, `BreadcrumbList`, Core Web Vitals; seguidores y gasto publicitario; dominio canónico (`charly.com.mx` ¿redirige a `charly.com`?); existencia de blog con otra ruta; catálogo completo en Amazon; presencia en Mercado Libre.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Ecosistema **multirred y segmentado por vertical**, opuesto al monocanal de F4T3: dos cuentas de Instagram confirmadas por fuentes de la propia marca y su prensa — **@charlymxoficial** (marca general) y **@charlyfutbol** (fútbol) — más dos en X/Twitter: **@CharlyMxOfi** (bio: "·Orgullosamente Mexicanos· Llevamos lo mejor del deporte a la vida diaria #SienteTusColores ¡síguenos! FB: Charly IG: charlymxoficial") y **@CharlyFutbol**. Facebook: existencia inferida (bio de X + comunicados CHARLY USA); handle y URL sin confirmar.

**OBSERVADO.** El embudo es **omnicanal físico + digital**: red social → charly.com o tienda física (150+ tiendas, ~3,500 puntos de venta) o tienda del club → ficha de producto con descuento visible en precio. No hay una promo única dominante como el 6X1 de F4T3: la palanca es el **lanzamiento de jerseys por club y las colaboraciones culturales**, reforzadas por sorteos de boletos (mecánica "sigue + comenta": CHARLY vs. CHARLY; trivia Xolos vs. Pachuca) y por el Buen Fin 13–17 nov 2026 (hasta 50% según agregadores y prensa local).

**OBSERVADO.** Drops y colaboraciones (2025–2026): COM/París 2024 y Dakar 2026 ("Raíces del Futuro"); colección PFX (Tenis Turso $1,999); #UnSoloLatir con Cristian Martinoli (Mundial 2026, nov 2025); Chapulín Colorado (2026, $799–$899, post de @CharlyFutbol 16 abr 2026); Día de Muertos con Metzican y Jacobo y María Ángeles; "Espíritus de los Muertos" (2026); Call of Duty Warzone (may 2025); Midnight Runners (mar 2025); Triple AAA (2022, 6 clubes); Disney/Star Wars x Xolos (2019); Club de Cuervos. Clubes 2026: León, Santos, Atlante, Atlas (+ regreso de Atlético San Luis); bajas: Xolos a Reebok, Pachuca y Querétaro a Skechers. Gignac como embajador histórico con línea de 8 productos (dato 2020; vigencia NO VERIFICADA). Short de creadora con "Outfit by: @charlymxoficial #CHARLYSquad #Ad".

**OBSERVADO.** **No se observó banner de Buen Fin ni enlaces sociales en el texto rastreado de la home** (32 líneas): la home muestra categorías, Winter $1,099, Día de Muertos $499 y Cicero Sala 26 $999 → $799.20, sin banner promocional visible en el extracto. La etiqueta BUEN FIN sí existe como categoría/breadcrumb en las fichas (ver §6). HIPÓTESIS (confianza baja): la promo de Buen Fin en línea vive en banners de imagen que el lector de texto no captó; exige verificación visual.

**NO VERIFICADO.** Seguidores en ninguna red con fuente oficial (la única cifra es un espejo de terceros de X, @CharlyMxOfi ~24K, sin fecha determinable; ninguna cifra de Instagram). Ritmo de publicación, captions, bio completa y seguidores de Instagram: la lectura de los perfiles devolvió **429** y no se reintentó. Handle oficial de TikTok ni canal oficial de YouTube (las búsquedas están dominadas por homónimos; hay evidencia de activación en TikTok en lanzamientos de jerseys, sin handle localizado; no se encontró TikTok Shop). Contenido concreto de Instagram (formatos, Reels, stories destacadas, product tagging / tienda de Instagram). Códigos de descuento oficiales, landings de promo con URL propia o parámetros UTM. Anuncios pagados (no se consultó ninguna biblioteca de anuncios). Vigencia del vínculo con Gignac y Greta Espinoza.

---

## 6. Precios (F2.5)

**OBSERVADO.** Charly vende a precio tachado con descuento **por modelo y por color, no uniforme**: sobre el mismo precio base de $1,699 (línea PFX) conviven −20%, −50% y −60% según el modelo. Descuentos observados en fichas crawleadas el 12–13 nov 2026: **−15% a −60%**, con el −60% como techo y el −20%/−40% como niveles más frecuentes. Escalones redondos de 5 puntos (15/20/30/40/50/60), sin valores intermedios. No hay un porcentaje único de tienda ni una escalera por volumen.

| Producto observado | Venta | Tachado | Descuento | Etiqueta |
|---|---|---|---|---|
| Tachones Legendario 26 PFX, negro (1087560002) | $679.60 | $1,699.00 | −60% | BUEN FIN |
| Tachones Stingr PFX, negro/amarillo (1087323005) | $1,359.20 | $1,699.00 | −20% | BUEN FIN |
| Tachones Stingr PFX, morado/coral, mujer (1043036001) | $849.50 | $1,699.00 | −50% | — |
| Tachones Stingr PFX Jr, azul, niño (1065288001) | $1,359.20 | $1,699.00 | −20% | — |
| Tachones Stingr, blanco/verde (1087322006) | $399.60 | $999.00 | −60% | — |
| Tenis Quest 2.0, negro (1087605001) | $734.30 | $1,049.00 | −30% | BUEN FIN |
| Tenis Leggera, rey (1087246002) | $539.40 | $899.00 | −40% | BUEN FIN |
| Tenis Voila, negro/naranja (1087475007) | $599.50 | $1,199.00 | −50% | BUEN FIN |
| Tenis Pearl City, negro, mujer (1059971002) | $799.20 | $999.00 | −20% | BUEN FIN |
| Jersey Atlas Local 24-25 (5020045600) | $639.00 | $1,599.00 | −60% | BUEN FIN |
| Playera León 25-26, niño (5095418998) | $259.60 | $649.00 | −60% | — |
| Sudadera Leyendas Hugo Sánchez (5007059998) | $599.40 | $999.00 | −40% | — |

**OBSERVADO.** Dos capas de etiqueta: **BUEN FIN** (la mayoría de las fichas con descuento vistas) y **PROMOCIÓN** (al menos el Quest 2.0). El caso Quest 2.0 es la única evidencia directa de que el Buen Fin **profundiza** un descuento preexistente: crawl ~11 nov $891.65 (−15%, PROMOCIÓN) → crawl ~12 nov $734.30 (−30%, BUEN FIN), mismo ITEM 1087605001. F1 observó el mismo patrón el mismo día en otro modelo (Action: $979.30 vs $839.40 en dos rastreos).

**OBSERVADO.** Lo nuevo y la temporada vigente se venden a precio completo: chamarras Winter $1,099, playera Día de Muertos $499, Tenis Luno Día de Muertos $1,099, jersey Atlas 26-27 manga larga $1,799, Tenis Eléctrico TR $1,299 y Tenis Baku City $999, sin descuento en los crawls del 12–13 nov 2026. La temporada anterior se liquida: jersey Atlas Local 24-25 a −60% mientras el 26-27 está a precio completo; playera León 25-26 a −60%.

**OBSERVADO.** Envío Estándar gratis en compras mayores a **$999** (home, crawl 13 nov 2026). No se observó bundle, 2x1, pack ni escalera por cantidad. INFERIDO: el umbral de $999 interactúa con los descuentos de forma que empuja el ticket — un par rebajado al −60% ($679.60) no alcanza el envío gratis por sí solo; un par a precio completo de $1,099–$1,299 sí.

**CORRECCIÓN APLICADA (ver §9, C2).** Los precios de Tenis Relax ($599 → $479.20, −20%) y Tenis Breaker 2.0 ($1,199 → $599.50, −50%) provienen de crawls de hace ~122 y ~164 días respectivamente: son precios observados-estancados, **no evidencia de precio vigente el 13 nov 2026**, y no se citan como precios de Buen Fin. Lo mismo aplica al Statem City ($999 → $599, −40%, crawl ~23 oct 2026): sugiere que el −40% ya existía antes del Buen Fin, no que sea precio del 13 nov.

**INFERIDO.** El precio "real" de Charly es el precio con descuento por modelo; el tachado es el precio de lista de la temporada. El descuento funciona como **liquidación selectiva por modelo/color** — el patrón clásico de calzado para mover tallas y colores remanentes — más que como rebaja general de temporada. El descuento existe desde meses antes del Buen Fin (crawls de junio, julio y octubre de 2026); el Buen Fin lo etiqueta y, al menos en un caso documentado, lo profundiza. Efecto de espera (HIPÓTESIS argumentada): el cliente tiene motivo para esperar al cambio de temporada y al Buen Fin para el modelo que ya quiere; lo mitigan la novedad a precio completo, el riesgo de perder su talla y la fecha de fin del Buen Fin (17 nov). Sin urgencia construida en la ficha: no se observó contador, stock visible ni fecha de fin del descuento por producto.

**NO VERIFICADO.** Descuento por talla concreta dentro del mismo modelo/color (no se pudo abrir ninguna ficha con selector de tallas); existencia de una sección Outlet/Liquidación; MSI en charly.com (la búsqueda `site:charly.com "meses sin intereses"` no devolvió resultados); costo de envío por debajo de $999, plazos y envío exprés; cambios/devoluciones; cupones y "segundo par al 50%/20%" (solo existen en el agregador Picodi, no verificados en la tienda); colección/landing propia de Buen Fin (no observada; la etiqueta BUEN FIN solo se vio como breadcrumb de ficha); comparación mismo modelo charly.com vs. Amazon (ningún listado de Amazon del mismo modelo observado).

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Fabricación propia + CEDIS central + red física como almacén distribuido: Charly diseña, fabrica y comercializa; sede León; CEDIS en León con recibo, surtido, acomodo, valor agregado, empaque y despacho (vacante operativa). Origen de fabricación mixto por modelo: México en varios, pero **Vietnam** (Tenis Vali 1087618004, $774.91; Tenis Ambex 1087456002, $764.44) y **China** (1086279007, $818.06) en otros (listados de Amazon). En Amazon México Charly se vende vía terceros (Stylo Zapaterias, Roma Zapaterias, La Fontana Zapaterías), enviado por Amazon (FBA), $529–$899, con stock por talla visible y bajo ("Sólo queda(n) 5 en stock", "Sólo queda(n) 1 en stock").

**OBSERVADO.** Un solo dato logístico publicado por la tienda: **Envío Estándar gratis en compras mayores a $999**. Ninguna mensajería es nombrada en ninguna página pública de charly.com revisada. Plazo de entrega: NO VERIFICADO (ninguna página pública lo publica; las políticas no se localizaron y la lectura directa falló con 429). Costo por debajo de $999 y envío exprés: NO VERIFICADO. Rastreo: NO VERIFICADO.

**OBSERVADO.** **No existe Mystery Box ni caja sorpresa en charly.com** (búsqueda sin resultados). La salida de excedente observable es multicanal: terceros en Amazon con stock de 1–5 unidades por talla; outlets multimarca con tenis Charly desde $349 en CDMX (Plaza Izazaga) y desde $500 en recorridos de 2026; Walmart con un modelo Charly para mujer a $399.01 (dic 2025). El mismo tipo de producto: $799–$1,699 en charly.com; $529–$899 en Amazon; desde $349 en outlets; $399.01 en Walmart. El canal de liquidación vende **por debajo del precio online** de la marca.

**HIPÓTESIS (H1–H7, F2.6).** H1 — inventario propio centralizado en CEDIS León + tiendas como segundo nivel de stock (confianza media-alta). H2 — tiendas físicas como válvula de excedente y tallas extremas (media). H3 — la talla es el problema central: la corrida fragmenta el stock por modelo (alta como descripción estructural; media como descripción de Charly concreto). H4 — el drenaje de inventario es retail + terceros, no la web (media). H5 — parte del catálogo importado (Vietnam/China) con reposición más larga que el nacional (media-alta el hecho; media la consecuencia). H6 — no necesita Mystery Box: red + terceros absorben el resto sin descontar en su web (media-alta como patrón; baja como intención deliberada documentada). H7 — el −20% online en Buen Fin es protección de precio, no falta de stock (media; **matizada en §9, C3**: es el descuento visible en portada; el catálogo llega al −60%).

**MODELO PROPIO (no son cifras de Charly).** Para una tienda mexicana de calzado del mismo perfil, con ticket de referencia de 1 par a $799.20 (Cicero Sala 26 en Buen Fin; lista $999) y 1 par PFX a $1,899: el umbral de envío gratis ($999) es el centro del modelo — como el par medio cuesta ~$999 de lista, casi todo pedido de calzado es "gratis" para el cliente y la guía ($110–$200 supuesta) la absorbe la empresa. El Buen Fin rompe el umbral: al precio promo ($799.20) el pedido cae por debajo de $999 — o el cliente paga envío, o la empresa lo absorbe (margen en negativo en el Caso A), o el umbral se suspende en promo; **qué hace Charly en este caso: NO VERIFICADO** (checkout no consultado). La devolución por talla es el costo logístico clave del calzado (provisión supuesta $60–$150 por pedido, 8–19% del ticket): un cambio por talla es guía de ida + guía de vuelta + reingreso a stock. La tienda física es el mejor antídoto contra la devolución por talla. Sensibilidad clave: si la tasa de cambio/devolución por talla supera ~25% de los pedidos online, el Caso A deja de ser rentable aunque el costo de producto esté en el rango bajo.

**NO VERIFICADO.** Mensajerías utilizadas; plazo de entrega; costo de envío por debajo de $999 y envío exprés; política de cambios/devoluciones de charly.com (plazo, quién paga la guía, cambio en tienda física, reembolso vs. crédito, exclusiones en promo); rastreador de pedidos; si la tienda online se surte desde el CEDIS, desde tiendas o ambos; ship-from-store o click-and-collect; total de SKUs y stock por talla en charly.com; qué hace Charly con el umbral de $999 cuando el precio promo cae por debajo; tarifas negociadas, costos reales y tasa real de devolución por talla; cobertura internacional de charly.com; volumen de ventas online y peso real de la tienda online frente al retail.

---

## 8. Pain points (F2.7)

**OBSERVADO.** **Hallazgo central: no se encontró ninguna queja pública verificable y atribuible a charly.com en esta investigación.** Tras 16 búsquedas dirigidas (reseñas, quejas, reembolsos, envíos, tallas, calidad, Trustpilot, Reddit/foros, TikTok, Facebook, Amazon, Buen Fin) no apareció ni un solo reclamo directo de un cliente de charly.com: ni por reembolso, ni por envío tardío o perdido, ni por talla, ni por calidad, ni por atención al cliente.

**OBSERVADO.** La ausencia de un corpus de reseñas es verificable: no se localizó ningún perfil de charly.com en Trustpilot (las búsquedas solo devuelven empresas con nombre parecido: Charles & Keith, Charly's Way Academy, Charlies UK, Carly, Chamaripa); las fichas de producto de la propia tienda muestran **"(Sin reseñas)"**; las únicas valoraciones con texto agregado que existen son las de marketplaces y revendedores (Amazon México: 4.1/5 en 29 reseñas, 4.3/5 en 13, 5.0/5 en 1; Sears y Sanborns: 4/5 en 1 cada uno), con bases muy pequeñas y **sin que el texto de ninguna reseña negativa haya podido leerse**. No se reporta ningún porcentaje de satisfacción ni conteo de quejas: no existe fuente pública que los respalde.

**OBSERVADO (canal tercero, NO es charly.com).** La fricción documentada vive en los revendedores, con reglas opuestas según el canal: **Stylo.mx** — cambio/devolución por talla o defecto gratuito, 30 días; reembolso solo como **saldo a favor en Stylo.mx** (no efectivo ni tarjeta), reflejado en 8 días; "por el momento, no se realizan cancelaciones". **Pakar.com** — devolución en 60 días naturales con **reembolso por el mismo medio de pago** (tarjeta 3–31 días hábiles; Aplazo/Kueski 60–90 días), guía sin costo con vigencia de 5 días, costos de envío no devueltos en ningún caso. **Klass Sport** — 15 días naturales; **sin cambios ni devoluciones en mercancía con descuento igual o mayor al 30%** (en liquidación/ofertas solo cambios por talla, sujetos a disponibilidad); flete gratis desde $1,499.00; confirmación de cobro en 48–72 h; entrega en ~5 días hábiles; hasta 3 intentos de entrega. Atribuir estas políticas a Charly sería un error: son de esos vendedores, no de charly.com.

**OBSERVADO.** Única queja atribuible a la marca (indirecta, de segunda mano): en un podcast de negocios (Los Aficionados Deportes, 8 ene 2026) se señala que "algunos aficionados se han quejado de que ciertos diseños pueden parecerse entre sí o que la marca se enfoca más en la cantidad que en la exclusividad", y que parte del producto se importa de Asia. No es una queja de un comprador en línea sobre un producto recibido. Señal editorial positiva: Merca20 (25 jun 2026) describe los tenis Charly con "tecnologías de amortiguación, plantillas con memoria de forma y suelas de alta tracción, características que suelen encontrarse en productos mucho más costosos de marcas internacionales".

**INFERIDO.** La ausencia de quejas puede deberse tanto a buena operación como a que las fricciones se resuelven en las ~168 tiendas físicas antes de escalar a internet; con fuentes públicas no se puede distinguir entre ambas. La exclusión de cambios en mercancía con descuento ≥30% en un revendedor, combinada con descuentos de Buen Fin del 40–50%, es el punto de fricción más probable del ecosistema Charly en esta temporada — **si** charly.com aplicara una exclusión parecida sin avisar en la ficha, el cliente que se equivoca de talla en Buen Fin se enteraría después de pagar; su política real no pudo leerse, así que esto es hipótesis de trabajo, no hallazgo. Sin reseñas en la propia tienda, el cliente de charly.com compra a ciegas en talla y calidad; la decisión se apoya en la marca y en el precio, no en la voz de otros clientes.

**NO VERIFICADO.** La política propia de charly.com en su totalidad (reembolsos, cambios por talla, devoluciones, garantía, plazos y costos de envío, canales y tiempos de atención). Los dos intentos de lectura directa (home y ficha de producto) devolvieron error 429 el 13 nov 2026; no se reintentaron. Que la ausencia de quejas signifique satisfacción general. Contenido de las reseñas de Amazon/Sears/Sanborns. Quejas en comentarios de Instagram/TikTok no indexados, mensajes directos, tienda física o Profeco (fuera del alcance de este método). Si las fichas "(Sin reseñas)" reflejan cero reseñas reales o un widget que no carga en lectura de texto.

---

## 9. Verificación global (cierre de sitio)

Contradicciones entre frentes, correcciones aplicadas y puntos que quedan como tensión declarada (no resueltos en silencio).

### C1 — Precio PFX: $1,699 online vs $1,899–$1,999 en físico (CORREGIDO)
F2.5 §8.1 marcó como NO VERIFICADO el precio en tiendas físicas de la colección PFX ($1,899–$1,999, dato de partida de la WO) porque no encontró fuente pública en su sesión. F2.6 O6 **sí lo observó** en Distrito Magazine: "desde $1,899 hasta $1,999 en tiendas CHARLY físicas y retailers especializados". Corrección: el precio físico **está observado en prensa**; la base online observada es $1,699 (F2.5, fichas PFX). No hay error de dato: hay **brecha de precio por canal** (físico ~12–18% por encima del online en el tope de gama). Se consigna así en §§1 y 6.

### C2 — Precios de crawls viejos no son precios del 13 nov (CORREGIDO)
F2.5 documentó con honestidad la frescura: Tenis Relax ($599 → $479.20) con crawl de hace ~122 días y Tenis Breaker 2.0 ($1,199 → $599.50) con crawl de hace ~164 días. En este consolidado **no se citan como precios vigentes del 13 nov 2026 ni como precios de Buen Fin**; se consignan solo como observados-estancados. El Statem City ($999 → $599, crawl ~23 oct 2026) se usa solo como evidencia de que el −40% ya existía antes del Buen Fin, no como precio del día.

### C3 — "Descuento online moderado −20%" (MATIZADO)
F2.6 (O9/H7) describe el descuento online de Buen Fin como moderado (−20% observado en portada) y lo lee como protección de precio. La muestra de F2.6 fue la portada + 3 fichas; F2.5, con ~25 fichas, observa descuentos de hasta −60% en el catálogo. Corrección: el −20% es lo que muestra la **portada** (Cicero Sala 26); el catálogo llega al −60% por modelo. H7 se mantiene como hipótesis, pero matizada: la protección de precio, si existe, es **silenciosa** (el descuento profundo vive en la ficha, no en la home) y no una ausencia de descuento profundo online.

### C4 — Buen Fin: etiqueta en fichas sí, banner en home no captado (TENSIÓN DECLARADA, NO RESUELTA)
F2.4 no observó banner de Buen Fin ni enlaces sociales en el texto rastreado de la home (32 líneas). F2.1/F2.5 observan la etiqueta BUEN FIN como breadcrumb/categoría en las fichas de producto (Legendario 26 PFX, Leggera, Pearl City, Quest 2.0, Voila, Zinetik 26 Jr, Stingr PFX, jersey Atlas 24-25). No hay contradicción: son superficies distintas. Lo que queda sin resolver es **si la home lleva un banner de Buen Fin**: el lector de texto no captó banners de imagen. Hipótesis de F2.4 (confianza baja): la promo vive en banners de imagen. Exige verificación visual; no se afirma ni se niega.

### C5 — Comercio agéntico: desconocido, no ausente (CORREGIDO)
F2.2: lecturas de `/agents.md` y `/.well-known/ucp` con **timeout** (~19:20 UTC), no reintentadas. F2.3: lectura de `/agents.md` con **429**, no reintentada; la búsqueda `"charly.com" agents.md` devolvió cero resultados relevantes y el `robots.txt` no enlaza `/agents.md`, UCP ni MCP. Corrección: el estado es **NO VERIFICADO** — un timeout y un 429 no prueban ausencia ni existencia. No se afirma que Charly carezca de infraestructura agentic, a diferencia de F4T3 donde sí está confirmada.

### C6 — Sitemap: contenido desconocido (SIN RESOLVER)
F2.2 y F2.3: la lectura de `https://www.charly.com/media/sitemap/sitemap.xml` devolvió **429**, no reintentada. Solo se conoce su URL (declarada en `robots.txt`). Número total de productos indexados, frescura y canibalización entre los dos patrones de URL quedan NO VERIFICADOS.

### C7 — Número de tiendas y puntos de venta (RANGO, NO CIFRA ÚNICA)
Wikipedia ~168 tiendas / >3,500 puntos; Expansión >150 / ~3,500; Computrabajo >175 / 5,000; oferta de empleo 200 tiendas. Se reporta el rango **150–200 tiendas propias; 3,500–5,000 puntos de venta** en todo el informe. Ninguna fuente se elige en silencio.

### C8 — Dominio canónico (SIN RESOLVER)
Wikipedia cita `http://www.charly.com.mx` como sitio de la marca; toda la investigación se hizo sobre `charly.com`. No se verificó si `charly.com.mx` redirige a `charly.com` o son dos sitios. F2.3 lo marca como posible reparto de autoridad SEO entre ambos dominios (INFERIDO, confianza media).

### C9 — Rango de descuento: 40–50% vs 15–60% (COMPATIBLE)
F2.7 cita descuentos de ~40–50% en fichas; F2.5 observa −15% a −60%. No hay contradicción: F2.7 describe los ejemplos que muestreó; F2.5 el rango completo observado en ~25 fichas. Se consigna el rango −15% a −60% con techo −60%.

### C10 — El umbral de $999 se rompe con el precio promo (TENSIÓN DECLARADA)
F2.5 §2.3 y F2.6 §5.3 coinciden: un par rebajado al −60% ($679.60) o el Cicero Sala 26 a $799.20 caen por debajo del umbral de envío gratis ($999). Qué hace Charly en ese caso — el cliente paga envío, la empresa lo absorbe o el umbral se suspende en promo — **NO VERIFICADO** (el checkout no se consultó). Es la primera pregunta a resolver antes de copiar el umbral.

### C11 — Adobe Launch "staging" (SEÑALADO, NO RESUELTO)
F2.2 observó que la librería de Adobe Launch cargada en producción se llama `launch-85cf71e759d2-staging.min.js`. HIPÓTESIS: o el entorno de producción carga por descuido la librería de staging, o el nombre es solo el del build. No se puede distinguir desde fuera; queda marcado para contraste.

### C12 — Falsos positivos descartados (MÉTODO)
F2.6 y F2.7 descartaron como evidencia varias empresas con nombre parecido: `charolo.com` (CHAROLO, empresa distinta), Charles & Keith, Charly's Way Academy, Charlies UK, Carly, Chamaripa, Charly García (tienda argentina), Charo. También se descartaron quejas de Skechers en Trustpilot (Skechers es distribuida por Grupo Charly en México, pero esas reseñas son de Skechers Suecia/España, no de Charly). Nada de esas fuentes se usa como evidencia de Charly.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Políticas propias de charly.com en su totalidad:** envíos (costo por debajo de $999, plazos, exprés, mensajería), cambios/devoluciones (plazo, quién paga la guía, cambio en tienda, reembolso vs. crédito, exclusiones en promo), reembolsos y atención al cliente (canales, horarios, tiempos). Causa: lecturas directas con 429 (sin reintento por regla) y páginas de política no localizadas en buscadores. Es el hueco mayor del informe: el corazón del frente F2.7 queda como NO VERIFICADO, no como ausente.
2. **Comercio agéntico:** `/agents.md`, `/.well-known/ucp`, MCP (timeout y 429; ver C5).
3. **Sitemap:** contenido, frescura, total de productos indexados, canónicas entre los dos patrones de URL (429; ver C6).
4. **Checkout real:** métodos de pago ofrecidos en pantalla (Apple Pay / Google Pay / Fastlane solo existen como tipos de configuración), MSI por banco, comportamiento del umbral de $999 con precio promo (ver C10), disponibilidad real por talla.
5. **Ritmo y captions de Instagram:** perfiles con 429; seguidores de Instagram sin fuente oficial; handle oficial de TikTok y canal oficial de YouTube no localizados; Facebook sin handle confirmado.
6. **Reseñas:** contenido de las reseñas de Amazon/Sears/Sanborns (solo puntuaciones agregadas, bases de 1–29); si "(Sin reseñas)" es cero reseñas reales o un widget que no carga en lectura de texto.
7. **SEO/GEO real:** posiciones en Google/Bing, tráfico orgánico, presencia en respuestas de ChatGPT / AI Overviews / Perplexity, gasto publicitario, dominio canónico (ver C8).
8. **Precios vigentes de Relax y Breaker 2.0** el 13 nov 2026 (crawls de 122 y 164 días; ver C2).
9. **Descuento por talla concreta** dentro del mismo modelo/color; existencia de sección Outlet/Liquidación en charly.com.
10. **Interior de la empresa:** stock por talla en charly.com, si la tienda online se surte desde el CEDIS, desde tiendas o ambos, ship-from-store / click-and-collect, tarifas negociadas, tasa real de devolución por talla, volumen de ventas online vs. retail, cobertura internacional de charly.com.
11. **Vigencia de vínculos:** Gignac como embajador (dato 2020), Greta Espinoza; fecha de los posts de X reproducidos en espejos.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **El descuento selectivo por modelo/color es el mecanismo, no la excepción.** El mismo precio base ($1,699) con −20%, −50% y −60% según el modelo/color, y la temporada anterior liquidada al −60% mientras la vigente va a precio completo, es liquidación por rotación sin rincón de remates: el descuento vive en la ficha, bajo PROMOCIÓN o BUEN FIN. Para la empresa nueva: si el surtido es por tallas, el descuento por modelo/color/talla es la válvula; pero hay que mostrar la escasez (Charly no muestra stock por talla en los extractos) o la espera se vuelve racional para el cliente.
2. **El umbral de envío gratis debe calibrarse al precio del par medio, y probarse contra el precio promo.** El umbral de $999 cubre casi todo pedido a precio de lista, pero el Buen Fin lo rompe ($799.20). Antes de copiarlo: decidir qué pasa cuando el precio promo cae por debajo del umbral, y publicarlo.
3. **La red física es el colchón de postventa; sin tiendas, la postventa es el producto.** Charly absorbe fricción de talla y cambio en 150–200 tiendas (y por eso, probablemente, no hay quejas visibles en línea). Una empresa nueva sin tiendas debe diseñar el cambio por talla gratis y visible como si fuera su única tienda, con guía prepagada y reenvío rápido — y publicar una sola política de reembolso igual en todos los canales, porque en el ecosistema Charly el mismo par tiene reglas opuestas según el revendedor (saldo a favor en Stylo.mx vs. reembolso al medio de pago en Pakar.com).
4. **La autoridad se compra con patrocinios o se construye con contenido; no hay atajo.** Charly no tiene blog y no lo necesita: COM, Liga MX, Wikipedia y prensa nacional le regalan la autoridad. Una marca nueva sin patrocinios tiene que construir esa autoridad con contenido propio y con reseñas visibles por modelo — justo el hueco que Charly deja: "(Sin reseñas)" en todas sus fichas.
5. **La infraestructura enterprise es el costo de la escala, no el punto de partida.** Adobe Commerce Cloud + PWA Studio + Fastly + Platform.sh + Klaviyo + Adobe Launch + New Relic + Live Search + Product Recommendations es el stack de una marca con 75 años de canal tradicional. Para la empresa nueva (Fase 3/4), el contraste con F4T3 (Shopify + Cloudflare) marca los dos extremos: empezar ligero como F4T3, con la arquitectura de Charly como referencia de a dónde se llega, no de dónde se empieza.
6. **El Buen Fin profundiza, no inaugura.** El caso Quest 2.0 (−15% PROMOCIÓN → −30% BUEN FIN en un día) y los crawls de junio–octubre muestran que el descuento es estructural. Para la empresa nueva: no diseñar la promo de temporada como evento aislado, sino como profundización fechada de una mecánica permanente — y avisar en la ficha cualquier exclusión de cambios por promoción, porque en Buen Fin el cliente compra en oferta y se entera después de que no puede cambiar la talla.
7. **Cuidado con la etiqueta del descuento en el checkout.** Los descuentos de Charly son "redondos" (escalones de 5 puntos) y el tachado es el precio de lista de temporada. Si la empresa nueva replica el tachado, que el precio de lista sea un precio real al que el producto se haya vendido, no un ancla permanente: el cliente aprende rápido cuándo el tachado no es el precio real.

---

## Fuentes

- https://www.charly.com/ — home (lectura 13 nov 2026, 15:00 UTC; extracto de 32 líneas; banner de envío gratis >$999)
- https://www.charly.com/robots.txt — "#Magento theme robots.txt" (13 nov 2026, 19:20 UTC)
- https://www.charly.com/graphql — POST `storeConfig` → `store_name: "Charly México"` (13 nov 2026)
- https://www.charly.com/politica-de-privacidad — Inter Tenis S.A. de C.V., contactotiendaonline@charly.com, 800-925-1001
- Fichas de charly.com vía resultados de búsqueda (crawls 12–13 nov 2026): Legendario 26 PFX 1087560002, Stingr PFX 1087323005 / 1043036001 / 1065288001, Stingr 1087322006, Zinetik 26 Jr 1065454002, Blaze Yt 1065199001, Hotcross 26 1087564002, Neovolution 2.0 1086955009, Quest 2.0 1087605001, Leggera 1087246002, Voila 1087475007, Breaker 2.0 1059879004, Eléctrico TR 1086958003, Pearl City 1059971002, Statem City 1086333001, Baku City 1087677002, Luno Día de Muertos 1038231001, Relax 1086427003, Cicero Sala 26 (home), jersey Atlas 24-25 5020045600, jersey Atlas 26-27 ML 5020488994, sudadera Leyendas Hugo Sánchez 5007059998, playera León 25-26 5095418998
- https://www.charly.com/colecciones/dia-de-muertos — 11 resultados, $349–$1,399
- https://www.charly.com/search.html?query=Sudadera día de muertos — "1315 elementos"
- https://es.wikipedia.org/wiki/Charly_(marca)
- https://expansion.mx/empresas/2026/08/16/empresa-familiar-charly-marca-viste-a-equipos-de-la-liga-mx — Expansión, 16 ago 2026
- https://distritomagazine.com.mx/charly-se-posiciona-en-el-mercado-deportivo-de-alto-rendimiento-con-la-nueva-coleccion-pfx-para-un-performance-optimo/ — colección PFX $1,899–$1,999
- https://www.merca20.com/las-marcas-de-tenis-que-son-mexicanas-originarias-de-guanajuato-son-mas-baratas-y-no-le-piden-nada-a-nike-adidas-y-reebok/ — Merca20, 25 jun 2026
- https://www.am.com.mx/leon/2026/11/12/descuentos-de-hasta-70-y-mas-compradores-asi-se-prepara-leon-para-el-buen-fin-1865195.html — AM León, 12 nov 2026
- https://cazaofertas.com.mx/el-buen-fin/tiendas-participantes-el-buen-fin-2026/
- https://www.picodi.com/mx/charly — agregador de cupones (no es la tienda)
- Listados de Amazon México (terceros, FBA): https://www.amazon.com.mx/dp/B0C4D2XVHS · https://www.amazon.com.mx/dp/B0DQ65YFW7 · https://www.amazon.com.mx/dp/B0F46TB9XW · https://www.amazon.com.mx/dp/B0BPN1GWW2 · https://www.amazon.com.mx/dp/B0BLF9KT2L · https://www.amazon.com.mx/dp/B09NCDWNVV · https://www.amazon.com.mx/dp/B0G99173C9 · https://www.amazon.com.mx/dp/B0C5P1QCZS
- https://stylo.mx/products/calzado-1086451001-textil-negro — Stylo.mx (revendedor)
- https://klasssport.com.mx/store/categorias/lista-de-precios11/tenis-dama-correr/tenis-charly-mujer/?ids_modelos=2 — Klass Sport (revendedor)
- https://pakar.com/products/cod-143649-f — Pakar.com (revendedor)
- https://www.radioformula.com.mx/estilo-de-vida/el-outlet-de-cdmx-donde-encuentras-tenis-y-zapatos-charly-andrea-aeropostale-y-mas-desde-99-20260605-0038.html — outlets desde $349 (jun 2026)
- https://www.radioformula.com.mx/estilo-de-vida/walmart-casi-regala-estos-tenis-charly-son-modernos-comodos-y-cuestan-menos-de-400-pesitos-20251202-0071.html — Walmart $399.01 (dic 2025)
- https://grabjobs.co/mexico/job/full-time/retail/coordinador-de-operaciones-cedis-hiring-now-18358009 — vacante CEDIS León
- https://podscan.fm/podcasts/losaficionadosdeportes/episodes/charly-deportes-la-campanita-de-una-tienda-deportiva-1 — podcast, 8 ene 2026
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/charly/`, 13 nov 2026)
