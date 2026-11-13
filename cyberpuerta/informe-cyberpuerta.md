# Informe consolidado — Cyberpuerta · Fase 2, WO-E-LARPING

- **Sitio:** https://cyberpuerta.mx/ (marca visible: Cyberpuerta — "principal retailer de tecnología y hardware en México, fundada en 2008")
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

**OBSERVADO.** Cyberpuerta es un retailer mexicano de tecnología y hardware (fundado en 2008) que vende en https://cyberpuerta.mx/ sobre **OXID eShop (OXID eSales)** — confirmado por `robots.txt` (`index.php?cl=basket/account/register/review/search`, `fnc=tobasket`, `/core/`, `/views/`, `/EXCEPTION_LOG.txt`, rutas heredadas en alemán `/warenkorb/`, `/mein-konto/`, `/agb/`, sitemap en `/export/google/sitemap-mx.xml`) — con front Nuxt inferido (`/pcb2/_nuxt/`, confianza media). No es Shopify, Magento ni WooCommerce: es plataforma propia, no replicable como arranque. Catálogo declarado de **+55,000 productos** (una página antigua decía 30,000).

**El negocio en una frase:** vende a precio único de mercado, sin tachado — el descuento del Buen Fin es financiero, no de etiqueta: hasta 12 MSI en toda la tienda y 17–18 bonificaciones bancarias vía PayPal (BBVA 16% solo el 13 nov, Banamex hasta 30%, HSBC hasta 30%, Scotiabank hasta 25% cashback). El diferenciador es el **Configurador de PC con validación de compatibilidad + Asistente con IA** y ensamble propio. Y el contraste: la postventa es el frente con más material de queja de toda la fase — Trustpilot 1.9/5 (51 reseñas) frente a Google Play 4.67/5 (13,553 valoraciones) — con reembolsos que tardan meses, negativas de cambio contradictorias con la política publicada y atención al cliente como pain point transversal.

**Tres rasgos que la distinguen:**
1. **Precio transparente, promo financiera.** En ~30 fichas muestreadas no hay precio tachado: un solo precio de venta (GPU $5,209 RTX 3050 a $50,219 RTX 4000 Ada; laptops $11,289–$86,189). Los únicos dos tachados observados en todo el estudio son de un dígito (−5% y −4%) en un listado. El mismo SKU comparado (MSI RTX 5070 Shadow 2X OC) cuesta $11,869 en Cyberpuerta vs. $11,630.07 en Dimercom (+2.1%): precio de mercado sin prima ni ganga.
2. **Embudo comunitario + consultivo.** Seis redes confirmadas (FB, IG, TikTok, X, Discord, Twitch + YouTube activo); CyberLeague con torneos de LoL/FC 2026 (registro en Start.gg + Discord obligatorio, finales en Twitch/Facebook); el configurador de PC como medio del embudo; el cierre es financiero (12 MSI, bonificaciones bancarias, $100 de saldo por app y $100 por 5 opiniones).
3. **Postventa como talón de Aquiles.** La política promete respuesta de reportes en máx. 2 días hábiles y reembolso por transferencia hasta 5 días hábiles; las quejas narran esperas de 30 días y 6 meses sin solución, una GPU XFX retenida casi un mes y devuelta "sin falla", una RTX 5080 pagada y una Radeon 9070 genérica recibida (con queja ante PROFECO), y un cliente al que no le escalan a supervisor con una compra de 2 máquinas de >$100,000 MXN cada una.

**Pista previa corregida:** «e-commerce mexicano de tecnología con catálogo enorme y ticket alto; otra lógica de precios (sin tachado 2.5×, con precios de mercado muy transparentes)». Verificado: **sin tachado 2.5× confirmado** — el descuento es financiero (banco + MSI), no de margen de producto. La plataforma no era la esperada: OXID eShop propio, no un SaaS.

---

## 1. Qué es Cyberpuerta

**OBSERVADO.** Retailer de tecnología y hardware en México, fundado en 2008. Home titula "Hardware, Computadoras, Laptops & Más | Cyberpuerta.mx". Catálogo declarado de +55,000 productos (una página antigua decía 30,000). Jerarquía por departamento en URLs `.html` (`/Computo-Hardware/Componentes/Tarjetas-de-Video/`); páginas de categoría tipo SEO por marca/uso; Guías de Compra por categoría.

**OBSERVADO.** Pagos declarados: SPEI, tarjeta, PayPal, efectivo OXXO, con factura (ver §9, C3: F2 no verificó tarjeta directa/SPEI/OXXO en una página propia de pagos). Envíos desde $134 MXN; entrega estándar en 1–4 días hábiles; rastreo en línea con número de guía; protección contra daños, pérdida o robo. Paqueterías como logos en "Quiénes somos": Paquetexpress, Estafeta, DHL (ver §9, C2).

**OBSERVADO.** Diferenciador: Configurador de PC con validación de compatibilidad + Asistente con IA que sugiere la configuración; ensamble propio (garantía 30 días, ~2 semanas, sin devolución por descontento).

---

## 2. Front end (F2.1)

**OBSERVADO.** Home: la extracción de texto salió casi vacía (solo el bloque de registro y la descripción de retailer fundado en 2008). INFERIDO (confianza media): es una app JS renderizada en cliente; el orden real de secciones, banners, header, menú, buscador y footer quedan NO VERIFICADOS — es la mayor laguna del frente.

**OBSERVADO.** Buen Fin domina el sitio: landing 13–17 nov, hasta 12 MSI en toda la tienda, 17 promos bancarias **vía PayPal** (BBVA 16% solo 13 nov, mín. $5,000, tope $2,500; Banorte 15%; Banamex hasta 30%); Pre Buen Fin 9–12 nov con hasta 15%. Los descuentos observados son financieros, no tachados en ficha (ver §9, C1: 17 vs. 18 promos entre rastreos).

**OBSERVADO.** Producto: 9 GPUs con precio JSON-LD ($10,469 RTX 5060 Ti InStock a $37,549 RTX 5080); ficha con SKU, envío ($148 en el ejemplo), ventana de entrega y stock en piezas; anomalía: la mayoría figura "Discontinued" en JSON-LD pese a precio vigente. Sin precio tachado, variantes ni reseñas observadas.

**NO VERIFICADO.** Home completa (secciones/header/footer/buscador); segunda mitad de la landing Buen Fin (líneas 285–685: resto de bancos y FAQ); contenido directo de Configurador, Servicio de ensamble y Pre Buen Fin; fichas de producto leídas directamente (solo snippets JSON-LD); carrito y checkout; buscador/filtros/ordenación; reseñas de producto; rango de precios del catálogo; rendimiento medido. Causa: el servicio de lectura devolvió **429** en tres lecturas (continuación de Buen Fin, Servicio de ensamble, Pre Buen Fin); no se reintentaron.

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** **OXID eShop (OXID eSales) confirmado** por `robots.txt` (leído 13 nov 2026): `index.php?cl=basket/account/register/review/search`, `fnc=tobasket`, `/core/`, `/views/`, `/EXCEPTION_LOG.txt`, rutas heredadas en alemán (`/warenkorb/`, `/mein-konto/`, `/agb/`), sitemap en `/export/google/sitemap-mx.xml`. StoreLeads lo corrobora clasificándolo como "Custom Cart" (no SaaS). No es Shopify, Magento ni WooCommerce (inferido, confianza media — la ausencia de marcadores es débil sin HTML crudo). Front Nuxt inferido por F2.1 (`/pcb2/_nuxt/`).

**OBSERVADO.** Subdominio propio `cdn.cyberpuerta.mx` sirviendo archivos. **Pagos: PayPal con meses sin intereses** (página propia del sitio, índice rastreado el 13 nov). Amex solo como indicio (lista Shop Small de Amex México). **Terceros: NO VERIFICADO** — sin HTML crudo no se pudo listar analítica, píxeles, chat, email ni proveedor de reseñas; solo existen las rutas propias de OXID (`cl=newsletter`, `cl=review`).

**OBSERVADO.** Comercio agentic — **DESCONOCIDO, no ausencia**: `/agents.md` y `/.well-known/ucp` fallaron sin código HTTP. El `robots.txt` sí regula crawlers de IA: GPTBot, ClaudeBot y PerplexityBot con las mismas restricciones que el resto; Google-Extended permitido.

**NO VERIFICADO.** Hosting/CDN (sin cabeceras ni DNS; proveedor de CDN desconocido); versión y edición de OXID, tema/front-end, servidor web; API `/api/` (existe como ruta bloqueada en robots; su función es inferida, no observada); checkout real y métodos de pago distintos de PayPal; todos los terceros; contenido del sitemap declarado y de `/sitemap.xml` (lecturas fallidas). Causa: el lector de páginas se saturó (429) tras leer home y `robots.txt`; por regla no se reintentó ninguna lectura fallida.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Home titula "Hardware, Computadoras, Laptops & Más | Cyberpuerta.mx" y se vende como "principal retailer de tecnología y hardware en México, fundada en 2008". La consulta `site:` devuelve casi solo producto y categoría (rastreo de 1–7 días), con URLs jerárquicas descriptivas en español; lo editorial no pesa en los resultados de marca.

**OBSERVADO.** `robots.txt` leído completo (444 líneas): Baidu/Yandex bloqueados, pero GPTBot, ClaudeBot y PerplexityBot tienen permitido el contenido público (solo se les cierran rutas internas/transaccionales) y Google-Extended tiene `Allow: /`. El sitemap real es un índice con **51 sub-sitemaps** (facetas, marcas, categoría, CMS, reseñas y 37 de artículos), lastmod 12 nov 2026; `/sitemap.xml` en raíz da 404 (ver §9, C4).

**OBSERVADO.** JSON-LD `Product/offers` con precio MXN y disponibilidad en todas las fichas consultadas, más `aggregateRating` (ej. 4.7 con 180 ratings). Pauta observable por huellas UTM: Meta DPA (`facebook/paid-social/dpa`), retargeting display y `srsltid` de Google Ads/Shopping.

**OBSERVADO.** Sellos declarados (Asociación de Internet, DigiCert, ISO 9001, GPTW 2024); prensa: Think&Start 2014, nominación CNN Expansión top 3 tiendas 2011 (vía Pubrio, fuente secundaria), ENIUN feb 2026; afiliados vía TradeTracker. Trustpilot mixto y reciente: se elogian precio y entrega rápida, y las quejas se concentran en postventa, garantías rechazadas y devoluciones. App iOS 4.8/5 con 3.9 k calificaciones. Canales: FB, IG, X, TikTok y YouTube activo con Shorts de Buen Fin; Buen Fin 2026 con landing propia (13–17 nov, hasta 12 MSI, 18 promos PayPal).

**INFERIDO.** A favor para GEO: crawlers de IA permitidos + JSON-LD de precio/disponibilidad. En contra: textos de categoría de plantilla sin fuentes ni autoría, sin comparativas propias con datos, y reseñas propias envejecidas (ejemplos de 2022). Su activo GEO más fuerte, como hipótesis, es el configurador de PC con Asistente con IA.

**NO VERIFICADO.** Posiciones, tráfico y volúmenes de búsqueda; total de URLs indexadas; contenido de los sub-sitemaps (el de artículos devolvió 429 y no se reintentó); marcado `Organization`/`BreadcrumbList`/`FAQPage` (sin HTML crudo); campañas activas y gasto (sin revisar bibliotecas de anuncios); citas en motores de IA (ninguno interrogado); score agregado de Trustpilot y seguidores sociales; presencia en comparadores de hardware y PROFECO; vigencia de sellos; existencia/contenido de un blog editorial.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** **6 redes confirmadas** por las descripciones oficiales de YouTube de la marca (leídas 13 nov 2026): Facebook `/Cyberpuerta`, Instagram `@cyberpuertamx`, TikTok `@cyberpuerta.mx`, X `@cyberpuerta`, Discord (invitación oficial) y Twitch `/cyberpuertamx`, más canal de YouTube activo. LinkedIn solo aparece mencionado en un directorio de terceros sin URL: NO VERIFICADO.

**OBSERVADO.** Contenido: solo 3 piezas transcribibles — video de YouTube "Rift Ascension" (desenlace de torneo, 45 equipos), Short de Buen Fin "111626 CP Buenfin V3 1a1" (tercera versión de la pieza) y un TikTok "¿Es lo mismo jugar en una TV que en un monitor gamer?" (27K likes, 111 comentarios según búsqueda). Contenido utilitario y comunitario, con CTA recurrente al configurador "Arma tu PC". Una vacante oficial de 2024 documenta producción in-house de video corto multiplataforma + lives en Twitch.

**OBSERVADO.** Embudo: **comunitario en origen** (CyberLeague: torneos LoL/FC 2026 con registro en Start.gg + Discord obligatorio y finales en Twitch/Facebook), **consultivo en el medio** (configurador de PC) y **financiero en el cierre** (12 MSI, bonificaciones bancarias vía PayPal, $100 de saldo por app y $100 por 5 opiniones). Sorteos con dos vías: social (seguir/etiquetar/repostear, sorteo en vivo por Twitch) y por compra (Game Factor, Xtreme/DXT). No hay evidencia de drops, embajadores ni códigos de creador; sí co-promociones con marcas (Xtreme, DXT, Game Factor, Patriot, AMD, Vorago, Naceb).

**OBSERVADO.** Buen Fin 2026 (landing oficial): 13–17 nov, "Tu buen momento. Tu Buen Fin.", hasta 12 MSI en toda la tienda, 17 promociones vía PayPal (BBVA hasta 16% solo 13 nov, Banorte 15%, Banamex hasta 30%, Klar 10% cashback), precedido por Pre Buen Fin 9–12 nov con hasta 15%.

**NO VERIFICADO.** Seguidores/suscriptores/miembros en todas las redes, ritmo de publicación en todas las redes, contenido concreto de Instagram/Facebook/X (feed, captions, stories, product tagging), nombre/handle/suscriptores del canal de YouTube, frecuencia de streams de Twitch, LinkedIn, WhatsApp, drops/embajadores, sorteo activo en nov 2026, newsletter con incentivo y anuncios pagados. Motivo principal: la lectura directa de los perfiles de Instagram, TikTok, Facebook y X devolvió **429** el 13 nov 2026 y no se reintentó; tampoco se pudo abrir el video de TikTok citado. Discrepancia consignada sin resolver: 17 vs. 18 promociones bancarias en la landing entre rastreos (~12 nov vs. 13 nov) — ver §9, C1.

---

## 6. Precios (F2.5)

**OBSERVADO.** ~30 fichas con precio, fecha de crawl y URL cada una. GPU $5,209 (RTX 3050) a $50,219 (RTX 4000 Ada); laptops $11,289–$86,189; procesadores $2,889–$11,679 (dos con crawl fresco del propio 13 nov: i9-13900F $11,589, i9-13900K $11,679); RAM $166–$29,969; almacenamiento $1,229–$24,759; Apple $13,339–$108,309. **En ninguna ficha muestreada hay precio tachado: precio único de venta.**

**OBSERVADO.** La pista se confirma en lo esencial: en tecnología Cyberpuerta no usa el tachado 2.5× típico de moda. Los únicos dos tachados observados en todo el estudio son de un dígito en un listado (producto no identificado): −5% ($25,540→$24,309) y −4% ($26,736→$25,539). **El descuento real del Buen Fin es financiero, no de etiqueta.**

**OBSERVADO.** Landing de Buen Fin (crawl fresco 13 nov, 19:49 UTC): hasta 12 MSI en toda la tienda y 17–18 promos bancarias vía PayPal, sin % directo sobre producto: BBVA 16% solo el 13 nov / 15% del 14–17 (mín. $5,000, tope $2,500/día), Banamex hasta 30% desde 12 MSI, HSBC hasta 30%, Scotiabank hasta 25% cashback, DiDi 20%, Falabella 15%, Klar 10%, entre otras. El descuento directo sí existió en el Pre Buen Fin (9–12 nov, hasta 15% en seleccionados + envíos gratis por marca + bundles). Cupón: solo $100 en primera compra (mín. $700), citado por dos agregadores, no verificado en el sitio propio. MSI verificado aritméticamente en ficha (Toshiba 20TB $17,039 → $1,419.91/mes a 12 MSI).

**OBSERVADO.** No hay descuento por volumen público; empresas es cotización personalizada (chat/email/teléfono). Sí existe sección Outlet (`/Outlet/`, SKUs `-cpoutlet-`, ej. Dell G15 RTX 4050 $15,389, i9-12900F $6,139), pero todos los precios son observado-estancados (fichas discontinuadas en el crawl) y sin % de descuento verificable.

**OBSERVADO.** Costos adicionales: envío desde $134 (Quiénes somos, 13 nov), $128–$148 por ficha, entrega 1–4 días hábiles; envío gratis solo en marcas seleccionadas no identificadas. Garantía extendida como add-on en ficha: $2,149–$7,079 (12–30% del precio base).

**INFERIDO (confianza alta).** El precio de lista es precio de mercado — transparente y comparable — y la palanca promocional es financiera (banco + MSI), no de margen de producto. Efecto de espera (hipótesis argumentada): esperar al Buen Fin desde semana normal sí vale (MSI + bonificación bancaria); dentro del Buen Fin el mejor día es el 13 nov (BBVA 16% vs. 15% después); para quien paga sin tarjeta participante, el Pre Buen Fin (15% directo) probablemente fue mejor ventana; esperar al Cyber Monday (30 nov) es una apuesta sin evidencia propia de 2026.

**OBSERVADO (comparación).** Único mismo-SKU encontrado: MSI RTX 5070 Shadow 2X OC, Cyberpuerta $11,869 vs. Dimercom $11,630.07 (+2.1%), precio de mercado sin prima ni ganga. Amazon/Mercado Libre mismo modelo: NO VERIFICADO.

**NO VERIFICADO.** Que el cupón de $100 funcione hoy; los % de agregadores (hasta 60% GPU, 40% laptops) no aparecieron en ninguna fuente propia; monto del descuento por bundle / configurador de PC; marcas del envío gratis; descuento por volumen/mayoreo; % del Outlet vs. precio regular; mismo SKU en Amazon México y Mercado Libre; si los precios incluyen IVA; topes de HSBC/Santander/Afirme. Dos lecturas directas (Pre Buen Fin y una ficha RTX 5070) devolvieron **429 y no se reintentaron**; la mayoría de precios son crawls del 12 nov (observado-estancado) y varias fichas de laptop están discontinuadas. Dos precios inverosímiles se reportan y no se usan: kit RAM DDR5 64GB a $4,839 (vs. módulo 32GB a $12,949) y placa ASUS Z790 HERO en Outlet a $511.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Cyberpuerta publica conteo exacto por SKU ("Solo 1–7 pzas." en gama alta/nicho; decenas/cientos en volumen) con fechas de inicio de existencias, y mensajes de "fuera del mercado, no volvamos a tener existencia" (`Discontinued`). INFERIDO (alta): opera con stock propio/controlado, no como escaparate sin inventario. H1/H2: abastecimiento directo de marca/distribuidor autorizado y stock escaso real en nicho.

**OBSERVADO.** Existe categoría `/Outlet/` (sufijo `-cpoutlet-`, 4 ejemplos `Discontinued` con precio vigente: i9-12900F $6,139, Tab A9 Plus $3,009), pero su condición no se declara en ninguna ficha. El drenaje visible es precio + evento: Buen Fin 13–17 nov (hasta 12 MSI), Pre Buen Fin 9–12 nov "hasta agotar unidades", y promos por marca con envíos gratis. H3/H4: drenaje por evento, no por remate; los descontinuados se quedan listados y parte migra a Outlet.

**OBSERVADO.** Mensajerías: **NO VERIFICADO** (ver §9, C2). La tienda solo dice "la paquetería" en genérico y "rastreo con número de guía" en las páginas consultadas por este frente. Trampa evitada y documentada: el "envíos por DHL / gratis desde $999" es de Dportenis, no de Cyberpuerta; tampoco se atribuyen CyberShop ni EssentialsMX.

**OBSERVADO.** Costos y tiempos por producto (sin tabla general): $128–$138 celulares/tablets, $158 laptop gamer, $300 TV 43", $464 videowall, $484 TV 50", $653 trituradora, $872 TV 65", "¡Gratis!" en algunos productos y promos por marca. Plazo declarado 1–4 días hábiles (zonas extendidas variable), con seguro de envío y reporte automático si el tránsito supera 4 días la fecha máxima estimada. Discrepancias reportadas: piso "desde $134" vs. $128 observado; política 1–4 días hábiles vs. ventana por producto 13–19 nov.

**OBSERVADO.** Logística inversa: devolución hasta 30 días (14 días si golpeado o sellado), garantía hasta día 365, reembolso hasta 5 días hábiles, devolución de sellado sin reembolso de envíos y penalización de hasta 30%, producto recibido en máximo 7 días desde la guía.

**MODELO PROPIO (§7, F2.6 — no son cifras de Cyberpuerta).** Tabla por cesta con supuestos declarados y rangos amplios (chica $195–$590, media $400–$1,340, grande/frágil $810–$2,780 por pedido con provisión de devolución), anclada en los costos observados de Cyberpuerta y en la comparativa Profeco oct 2026 ($297–$1,039 para 5 kg).

**NO VERIFICADO.** Mensajería(s) usada(s); umbral general de envío gratis; variación por CP/peso; opción exprés y hora de corte; significado y tamaño del Outlet; drenaje por marketplaces/liquidadores; número y ubicación de CEDIS; recogida en tienda; costo/cobertura del seguro; tasa real de devoluciones y plazo real en Buen Fin. La apertura directa de "Quiénes somos" devolvió 429 y no se reintentó — su contenido se cita solo desde el fragmento de búsqueda (ver §9, C2).

---

## 8. Pain points (F2.7)

**OBSERVADO.** Método: 11 búsquedas web dirigidas el 13 nov 2026 + lectura directa de 3 páginas (Trustpilot, guía oficial "Generar un reporte" de cyberpuerta.mx y ficha de Google Play). Sin inicio de sesión, compras ni contacto. Sin nombres, correos ni teléfonos de quienes se quejan.

**OBSERVADO — Reembolsos.** La política oficial promete respuesta de reportes en máx. 2 días hábiles y reembolso por transferencia hasta 5 días hábiles tras recibir datos, pero sin el costo de envío y con penalización de hasta 30%. Las quejas narran esperas de 30 días (discos duros, 4 jun 2026) y 6 meses sin solución (monitor, 6 may 2025), y una devolución de PayPal Fest sin el envío y con demora mientras el cargo seguía en tarjeta.

**OBSERVADO — Envíos.** La tienda promete 1–4 días hábiles. Se documenta un equipo prometido en 1 semana que a las 2 semanas no se había enviado y luego otra semana de espera (22 sep 2026), y un caso de empaque deficiente con imposibilidad de reclamar en la app (19 oct 2026). Lo positivo también existe: GPU de Buen Fin llegada al día siguiente (11 nov 2026).

**OBSERVADO — Cambios y devoluciones.** Patrón repetido de negativa sin motivo claro o contradictorio con la política publicada: error en modelo con artículo cerrado sin devolución (13 may 2026), tarjeta madre dañada con plazo de 24 h alegado frente a 14 días en página (4 ago 2025, anterior a la actualización de la política del 30/09/2025), gabinete golpeado sin cambio culpando al cliente (19 nov 2025).

**OBSERVADO — Atención al cliente.** El pain point transversal: guion de política repetido sin resolver, imposibilidad percibida de escalar a supervisor/gerente y silencio en correo, WhatsApp o X (casos del 1 jun, 4 jun y 24 nov 2026; este último, compra de 2 máquinas de >$100,000 MXN c/u). En Google Play la tienda deriva los casos al correo, sin desenlace visible.

**OBSERVADO — Calidad / garantías.** El caso más costoso: GPU XFX retenida casi un mes y devuelta como "sin falla" sin reproducir apagones que el cliente reproducía siempre, con negativa a corregir la dirección de devolución (1 jun 2026). Suman RAM con capacitor mal soldado y NVMe Asus publicado que llegó Acer (25 may 2026), y producto distinto al pagado: RTX 5080 pagada, Radeon 9070 genérica recibida, con acusación de mentir al cliente y queja ante PROFECO (28 nov 2025, única mención de PROFECO encontrada).

**OBSERVADO — Precios / promociones.** Solo un caso de MSI no respetados (PayPal Fest, 9 sep 2025) y uno de laptop bajada ~$5,000 MXN al día siguiente sin ajuste (27 may 2025). No se encontró evidencia de inflación de precios previa al Buen Fin 2026 atribuible a Cyberpuerta.

**OBSERVADO — Disponibilidad / stock.** Concentrado en ensambles y ofertas ya pagadas: PC de >$50,000 MXN sin stock de memoria a los 2 días ni de enfriador a los 8 días (22 dic 2025), y lavadora en oferta cancelada por falta de existencias sin devolver el dinero de la garantía (4 feb 2026). Un cliente elogia, en cambio, que el carrito no deja agregar lo que no hay.

**OBSERVADO — Lo positivo (con evidencia).** Precio competitivo, entrega rápida y producto correcto/bien embalado cuando todo sale bien (11 nov 2026, 23 feb 2026, 13 jul 2026). Puntuaciones agregadas con base, sin mezclarlas: **Trustpilot 1.9/5 (51 reseñas) vs. Google Play 4.67/5 (13,553 valoraciones)** — brecha que se reporta como dato, no como satisfacción general.

**OBSERVADO — Revendedores / marketplaces.** Ninguna queja encontrada atribuible a revendedores ni a tienda oficial en Mercado Libre/Amazon en las 11 búsquedas; Amazon/ML solo aparecen como alternativa a la que los clientes dicen irse. Nada de este informe se atribuye a esos canales.

**NO VERIFICADO.** Tiempo promedio real de reembolso, tasa de entregas tardías y de cancelaciones por stock, tiempos reales de soporte por canal, desenlace de los casos citados (incluida la queja ante PROFECO), inflación de precios en Buen Fin 2026, contenido de videos de YouTube (solo títulos), hilos de Reddit/X legibles, existencia/reputación de tienda oficial en marketplaces, y cualquier fricción exclusiva de Términos y Condiciones — esa página devolvió error 429 y no se reintentó, por lo que queda NO VERIFICADO, no ausente. No se inventó ningún porcentaje, conteo total de quejas ni puntuación fuera de las dos agregadas citadas con su base.

---

## 9. Verificación global (cierre de sitio)

### C1 — Promos bancarias: 17 vs. 18 (DISCREPANCIA ENTRE RASTREOS, SIN RESOLVER)
F2.1 y F2.4 observan 17 promociones bancarias vía PayPal en la landing de Buen Fin; F2.3 observa 18 promos PayPal; F2.5 consigna 17–18. F2.4 lo deja consignado: 17 vs. 18 entre rastreos (~12 nov vs. 13 nov). La landing cambió entre crawls (se añadió o se retiró una promo bancaria) o el conteo depende de dónde se corte la lista. Se reporta como **17–18 promos bancarias vía PayPal** con la discrepancia declarada; no se elige una cifra en silencio.

### C2 — Mensajerías: logos en "Quiénes somos" vs. no encontradas por F2.6 (RESUELTO A FAVOR DE F2.1, CON MATIZ)
F2.1 observó como logos en la página "Quiénes somos" a Paquetexpress, Estafeta y DHL (con URL `https://www.cyberpuerta.mx/Quienes-somos/`). F2.6 marcó las mensajerías como NO VERIFICADO porque en las páginas que consultó la tienda solo dice "la paquetería" en genérico. Resolución: **las tres mensajerías están observadas como logos en "Quiénes somos"** (F2.1); el NO VERIFICADO de F2.6 refleja sus propias páginas consultadas, no una ausencia. Matiz: un logo en "Quiénes somos" no confirma qué mensajería lleva cada pedido hoy; la mensajería por pedido sigue sin verificarse (checkout no consultado). La trampa de Dportenis (envíos por DHL / gratis desde $999) sigue descartada: es de otra tienda.

### C3 — Pagos declarados vs. no verificados en página propia (MATIZADO)
F2.1 consigna como declarados SPEI, tarjeta, PayPal y efectivo OXXO (con factura). F2.2 solo pudo verificar PayPal con MSI en una página propia del sitio; tarjeta directa, SPEI, OXXO y BNPL quedaron NO VERIFICADOS para Cyberpuerta (no encontró página del sitio que los mencione). Resolución: los cuatro medios están **declarados en el copy del sitio** (F2.1), pero **no verificados en una página propia de pagos ni en checkout** (F2.2). Se consignan como declarados, no como verificados en checkout.

### C4 — Sitemap: lectura fallida vs. índice con 51 sub-sitemaps (RESUELTO)
F2.2 no pudo leer el contenido del sitemap declarado ni de `/sitemap.xml` (lecturas fallidas). F2.3 sí leyó el índice: **51 sub-sitemaps** (facetas, marcas, categoría, CMS, reseñas y 37 de artículos), lastmod 12 nov 2026; `/sitemap.xml` en raíz da 404. Resolución: el sitemap existe como índice con 51 sub-sitemaps; el contenido de los sub-sitemaps (salvo el de artículos, con 429) queda NO VERIFICADO.

### C5 — "Discontinued" en JSON-LD vs. Outlet (COMPATIBLE)
F2.1 observó que la mayoría de las GPUs muestreadas figuran "Discontinued" en JSON-LD pese a precio vigente. F2.5 y F2.6 observan la sección `/Outlet/` con SKUs `-cpoutlet-` y fichas discontinuadas con precio vigente. No hay contradicción: los descontinuados se quedan listados (con precio) y parte migra a Outlet; la condición del producto de Outlet no se declara en ninguna ficha.

### C6 — Piso de envío $134 vs. $128 observado (DISCREPANCIA MENOR, REPORTADA)
"Quiénes somos" dice envíos "desde $134 MXN"; F2.6 observó $128 en celulares/tablets. F2.6 lo reporta como discrepancia: el piso declarado no coincide con el menor costo observado por producto. Se consignan ambas cifras con su fuente.

### C7 — Plazo 1–4 días vs. ventana por producto 13–19 nov (COMPATIBLE, CON MATIZ)
La política declara 1–4 días hábiles; F2.1 observó en una ficha concreta una ventana de entrega 13–19 nov (6 días). F2.1 lo marca como dato puntual, no como contradicción general: la ventana real depende del producto/destino. Se consigna así.

### C8 — Catálogo +55,000 vs. 30,000 (CAMBIO EN EL TIEMPO)
F2.1: catálogo declarado de +55,000 productos, con una página antigua que decía 30,000. No es contradicción: es crecimiento (o cambio de criterio de conteo) entre la página antigua y la actual. Se consigna la cifra vigente (+55,000) y la antigua como referencia.

### C9 — Trustpilot 1.9/5 vs. Google Play 4.67/5 (BRECHA REPORTADA, NO MEZCLADA)
F2.7: Trustpilot 1.9/5 (51 reseñas) vs. Google Play 4.67/5 (13,553 valoraciones). F2.3 añade app iOS 4.8/5 (3.9 k calificaciones) y Trustpilot mixto y reciente. No se mezclan: son poblaciones distintas (quejas web vs. usuarios de app). La brecha se reporta como dato; no se infiere satisfacción general.

### C10 — Agentic: desconocido, no ausente (CONFIRMADO POR DOS FRENTES)
F2.2: `/agents.md` y `/.well-known/ucp` fallaron sin código HTTP. F2.3: el `robots.txt` regula crawlers de IA (GPTBot, ClaudeBot, PerplexityBot con restricciones; Google-Extended permitido). El estado es **DESCONOCIDO**: ni F2.2 ni F2.3 pudieron establecer si existe infraestructura agentic. No se afirma que no exista.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Home completa** (secciones/header/footer/buscador) — extracción casi vacía por app JS renderizada en cliente (F2.1).
2. **Checkout real y carrito:** métodos de pago ofrecidos en pantalla, MSI por banco, costo final de envío por CP, disponibilidad real por SKU.
3. **Comercio agentic:** `/agents.md`, `/.well-known/ucp`, MCP (fallos sin código HTTP; ver C10).
4. **Terceros:** analítica, píxeles, chat, email, proveedor de reseñas (sin HTML crudo).
5. **Hosting/CDN, versión y edición de OXID, tema/front-end, servidor web.**
6. **Contenido de los sub-sitemaps** (salvo el índice con 51 entradas); `Organization`/`BreadcrumbList`/`FAQPage`; blog editorial.
7. **Ritmo, captions, seguidores y contenido concreto de redes** (perfiles con 429); nombre/handle/suscriptores del canal de YouTube; LinkedIn; WhatsApp; anuncios pagados.
8. **Precios:** cupón de $100 (funcionamiento hoy); % de agregadores; descuento por bundle/configurador; marcas del envío gratis; % del Outlet vs. precio regular; mismo SKU en Amazon/ML; si los precios incluyen IVA; topes de HSBC/Santander/Afirme.
9. **Logística:** mensajería por pedido (ver C2); umbral general de envío gratis; variación por CP/peso; exprés y hora de corte; tamaño del Outlet; drenaje por marketplaces/liquidadores; CEDIS (número/ubicación); recogida en tienda; costo/cobertura del seguro; tasa real de devoluciones y plazo real en Buen Fin.
10. **Pain points:** tiempo promedio real de reembolso, tasa de entregas tardías y cancelaciones por stock, tiempos reales de soporte por canal, desenlace de los casos citados (incluida la queja ante PROFECO), inflación de precios en Buen Fin 2026, Términos y Condiciones (429).
11. **SEO/GEO real:** posiciones, tráfico, volúmenes, citas en motores de IA (ninguno interrogado), gasto publicitario, presencia en comparadores y PROFECO, vigencia de sellos.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **En tecnología, el precio es de mercado y la promo es financiera.** Sin tachado, sin ancla 2.5×: el cliente compara el SKU en dos pestañas y el que gana es el que tiene mejor MSI + bonificación bancaria. Para la empresa nueva: si vende productos comparables (mismo SKU en varios lados), la palanca no es el tachado sino el financiamiento y el banco — y hay que verificar el precio contra el comparador, no contra un tachado inventado.
2. **El configurador es el embudo, no el banner.** Cyberpuerta convierte con una herramienta (configurador de PC + Asistente con IA + ensamble propio) y una comunidad (CyberLeague, Discord, Twitch), no con un % de descuento. Para la empresa nueva: una herramienta que resuelva la decisión del cliente vale más que una landing de promo; la comunidad (torneos, Discord) es adquisición que no depende de pauta.
3. **La postventa es donde se pierde lo que el precio gana.** Política que promete 2 días de respuesta y reembolso en 5 días, contra casos de 30 días y 6 meses; negativas de cambio contradictorias con la política; soporte que no escala. Trustpilot 1.9/5 contra Google Play 4.67/5: el que se queja va a Trustpilot, el que usa la app no. Para la empresa nueva: publicar la política y cumplirla es el mínimo; medir el tiempo real de reembolso y el tiempo real de respuesta por canal antes de escalar ventas.
4. **El stock visible es confianza — y el "Discontinued" también.** Publicar el conteo exacto por SKU ("Solo 1–7 pzas.") y mantener listados los descontinuados con precio es transparencia que el cliente valora (un cliente elogia que el carrito no deja agregar lo que no hay). Para la empresa nueva: mostrar disponibilidad real por SKU y no borrar lo descontinuado sin decirlo.
5. **Plataforma propia: el costo de no ser SaaS.** OXID eShop + front Nuxt es una operación con equipo técnico propio, no un arranque. Para la empresa nueva (Fase 3/4): empezar ligero como F4T3 (Shopify), con la arquitectura de Cyberpuerta como referencia de a dónde se llega cuando el catálogo es de 55,000 SKUs, no de dónde se empieza.
6. **El Outlet necesita condición declarada.** Existe `/Outlet/` con SKUs `-cpoutlet-`, pero ninguna ficha declara la condición del producto. Para la empresa nueva: si hay outlet, que la ficha diga qué es (reacondicionado, abierto, descontinuado, último) y qué % representa frente al precio regular; si no, el cliente asume lo peor.
7. **Cuidado con los homónimos en la investigación.** Dportenis ("envíos por DHL / gratis desde $999"), CyberShop, EssentialsMX y "Patufos" aparecieron buscando "Cyberpuerta envíos" con cifras parecidas. Para la empresa nueva: verificar siempre el dominio de la fuente antes de citar una política; una cifra con el dominio equivocado es peor que un NO VERIFICADO.

---

## Fuentes

- https://cyberpuerta.mx/ — home (lectura 13 nov 2026; extracción casi vacía por app JS)
- https://www.cyberpuerta.mx/Quienes-somos/ — envíos desde $134, 1–4 días hábiles, paqueterías (logos: Paquetexpress, Estafeta, DHL)
- https://cyberpuerta.mx/robots.txt — OXID eShop (444 líneas; GPTBot/ClaudeBot/PerplexityBot regulados; Google-Extended Allow)
- https://cyberpuerta.mx/export/google/sitemap-mx.xml — sitemap (índice con 51 sub-sitemaps, lastmod 12 nov 2026)
- Landing Buen Fin 13–17 nov 2026 (hasta 12 MSI, 17–18 promos bancarias vía PayPal) y Pre Buen Fin 9–12 nov (hasta 15%)
- Fichas con precio JSON-LD (crawls 12–13 nov 2026): GPUs RTX 3050–RTX 4000 Ada, laptops MSI/HP/Dell, procesadores i9-13900F/K, RAM Kingston, almacenamiento Toshiba 20TB ($17,039 → $1,419.91/mes a 12 MSI)
- https://cyberpuerta.mx/Outlet/ — sección Outlet (SKUs `-cpoutlet-`)
- https://www.trustpilot.com/ — Cyberpuerta 1.9/5 (51 reseñas) · Google Play 4.67/5 (13,553 valoraciones) · App iOS 4.8/5 (3.9 k calificaciones)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/cyberpuerta/`, 13 nov 2026)
