# F5 — Precios · TANE (tane.mx)

- **Sitio:** TANE — https://tane.mx/ (tienda en https://mx.tane.com/, Shopify)
- **Fecha de la investigación:** 13 nov 2026 — primer día del Buen Fin 2026 (13–17 nov 2026)
- **Frente:** F5 (precios) · Fase 2, WO-E-LARPING
- **Método:** lectura pública de home y fichas de producto (texto crawleado, JSON-LD `Product.offers`) + búsqueda web con contenido crawleado. Sin inicio de sesión, sin compras, sin contacto.
- **Moneda:** MXN, salvo indicación expresa.
- **Etiquetas usadas en todo el documento:** **OBSERVADO** (visto, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada) / **NO VERIFICADO**.

## 1. Resumen ejecutivo

- **OBSERVADO:** en las 3 fichas de producto leídas el 13 nov 2026 (crawl ~19:50 UTC / 13:50 CST) el precio es **único, de lista, sin precio tachado, sin etiqueta de descuento y sin mención de Buen Fin**. Precios: $11,000 / $13,900 / $29,900.
- **OBSERVADO:** en la home crawleada el mismo día (~19:49 UTC) **no aparece en el texto extraído ninguna mención de "Buen Fin", "% de descuento", "oferta" ni cupón**. Solo aparecen etiquetas de "Lanzamiento".
- **OBSERVADO:** el sitio sí anuncia dos beneficios de precio/condiciones: **meses sin intereses** y **envío gratis**, ambos ligados a un widget que menciona **$10,000** (ver §4: la cifra es ambigua, no es un umbral confirmado).
- **OBSERVADO:** el envío estándar a todo México es **sin costo** según las fichas; la entrega el mismo día cuesta **$300** y al día siguiente **$150** (solo CDMX y Zona Metropolitana).
- **OBSERVADO:** existe **folleto/certificado de garantía** (imprescindible para cambios y reparaciones; validación de calidad de 10 días hábiles) y las **piezas personalizadas/grabadas no admiten cambios**.
- **Pista inicial — veredicto:** la pista ("en lujo se vende sin rebajar") **se sostiene en lo observado hoy**: precio de lista fijo, sin rebaja visible ni siquiera el primer día del Buen Fin. La palanca comercial no es el descuento, es el financiamiento (MSI) + el envío + la garantía.

## 2. Tabla de precios observados por categoría

Frescura: todos los precios de esta tabla son **observados-frescos** (crawl 13 nov 2026, ~19:50 UTC = 13:50 CST, primer día del Buen Fin). Un precio de un crawl viejo se marcaría como observado-estancado; aquí no es el caso.

| Categoría | Pieza (nombre en ficha) | Precio de venta | Precio tachado | Descuento calculado | Etiqueta de promo | Disponibilidad | URL | Fecha de crawl |
|---|---|---|---|---|---|---|---|---|
| Gargantilla / collar | GARGANTILLA XOCOLATE CADENA — plata .925, vermeil oro amarillo 23 kt y vermeil oro rosa 18 kt, hecha a mano | **$29,900** | — (ninguno) | 0% (no hay tachado) | Ninguna | InStock | https://mx.tane.com/products/gargantilla-xocolate-cad | 13 nov 2026, ~19:50 UTC |
| Anillo | ANILLO LAZOS CORDEL — plata .925, 13 diamantes cultivados en laboratorio, 0.195 ct totales; tallas 55, 60, 70, 75 y 80 al mismo precio | **$11,000** | — (ninguno) | 0% (no hay tachado) | "Lanzamiento" (en home; no es descuento) | InStock | https://mx.tane.com/products/anillo-lazos-diamantes-c | 13 nov 2026, ~19:50 UTC |
| Anillo | ANILLO CHURUMBELA 2.0 VERMEIL — plata .925, vermeil oro amarillo 23 kt y vermeil oro rosa 18 kt; tallas 6, 7, 8 y 9 al mismo precio | **$13,900** | — (ninguno) | 0% (no hay tachado) | Ninguna | InStock | https://mx.tane.com/products/anillo-churumbela-2-0-ve | 13 nov 2026, ~19:50 UTC |

Notas sobre la tabla:

- **OBSERVADO:** en las 3 fichas el JSON-LD `Product.offers` trae **un solo precio** (sin `compare-at-price` ni precio anterior). No se calculó ningún descuento porque no hay base para calcularlo; el 0% de la tabla significa "sin rebaja observada", no una promoción del 0%.
- **OBSERVADO:** el precio **no varía por talla** en los dos anillos leídos: todas las variantes cuestan lo mismo ($11,000 y $13,900 respectivamente). No hay recargo por talla en lo observado.
- **OBSERVADO:** la home (https://tane.mx/, crawl 13 nov 2026 ~19:49 UTC) trae un bloque JSON-LD `Product.offers` con **Price: 0.0 MXN, Availability: OutOfStock**. Eso es un artefacto del crawler en la home (no corresponde a ninguna pieza) y **no se toma como precio**; se deja constancia para no confundirlo con un precio real.
- **Rango observado (solo 3 piezas, muestra pequeña):** $11,000–$29,900. **INFERIDO (confianza baja, por muestra de n=3):** el ticket de la tienda online arranca en cinco cifras; no se observó ninguna pieza por debajo de $10,000 en las fichas leídas. No es un rango del catálogo, es el rango de lo leído.

### 2.1 Categorías vistas en home sin precio observado

**OBSERVADO:** la home lista estas categorías/piezas (nombres visibles, sin precio en el texto extraído): dijes, collares y gargantillas (Alma Triada, Xocolate Praliné, Jardín para Frida, Prehispánica), anillos (Alma Triada, Xocolate Tablilla, Lazos Torzal, Orbital Vermeil), aretes (Alma Vermeil Rosa, Corazón Anudado, Xocolate Praliné, Alma Triada), pulseras (Lazos, Xocolate Cadena, Xocolate Praliné, Matilda, Alma Triada), y línea TANE RACING (dijes de llantas, esclava, llavero, trofeo F1 GP CDMX edición conmemorativa y coleccionable oficial).

**NO VERIFICADO:** el precio de ninguna de esas piezas. Se intentaron abrir 4 fichas más (aretes Alma Vermeil Rosa, pulsera Xocolate Praliné, collar Jardín para Frida, trofeo F1 GP CDMX) y la lectura devolvió **429 (límite de peticiones)**; conforme a la regla del frente, **no se reintentó**. Sus precios quedan sin verificar, no se estiman.

## 3. Promociones

### 3.1 Descuento directo / precio tachado

- **OBSERVADO:** **ningún descuento directo en lo leído.** Ni la home ni las 3 fichas muestran precio tachado, porcentaje, "antes/ahora" ni etiqueta de oferta (crawls 13 nov 2026, ~19:49–19:50 UTC, primer día del Buen Fin).
- **OBSERVADO:** la única etiqueta comercial visible en home es **"Lanzamiento"** (colección Lazos / Corazón Anudado Vermeil Rosa y línea TANE RACING). Lanzamiento ≠ descuento: no lleva precio rebajado asociado en lo observado.

### 3.2 Buen Fin 2026 (13–17 nov)

- **OBSERVADO:** el Buen Fin 2026 dura del 13 al 17 de noviembre de 2026 (fuente: términos de BBVA y Creditea y notas de prensa consultadas; ver §8). La investigación se hizo el día 1.
- **OBSERVADO:** en el texto extraído de la home de tane.mx del 13 nov **no aparece la expresión "Buen Fin"** ni ninguna promoción asociada a esa fecha. **Límite:** la extracción es de texto; un banner gráfico o un pop-up no recogido por el crawler podría existir y no se vería aquí. Lo que se afirma es "sin mención en el texto crawleado", no "sin promoción en absoluto".
- **INFERIDO (confianza media):** si TANE participara en el Buen Fin con rebaja de precio, lo esperable sería verlo en home o en ficha el día 1; no verlo en ninguno de los dos puntos sugiere que **no hay rebaja de Buen Fin en el catálogo online, o que su participación, si existe, es solo vía MSI bancario** (ver §4). Es inferencia, no hecho.

### 3.3 Cupones, bundles, descuento por volumen, liquidación

- **NO VERIFICADO:** cupones (no se observó ningún código ni campo de cupón en lo leído; el checkout no se abrió).
- **NO VERIFICADO:** bundles / sets con precio conjunto. **OBSERVADO (contexto):** la home muestra piezas de la misma colección (p. ej. Lazos, Xocolate, Alma) pero cada ficha es de pieza individual; no se observó precio de conjunto.
- **NO VERIFICADO:** descuento por volumen o venta por volumen (mayoreo). **OBSERVADO:** la home enlaza "Regalos corporativos" (sin precio en lo leído); eso es un canal B2B, no una tarifa por volumen publicada.
- **NO VERIFICADO:** sección de liquidación / remate / outlet. **OBSERVADO:** en la home crawleada no aparece ninguna sección con ese nombre en el texto extraído. No se afirma que no exista; no se encontró en lo leído.

## 4. Meses sin intereses (MSI)

- **OBSERVADO (home, 13 nov 2026 ~19:49 UTC, texto literal):** "¡Felicidades! Su pedido está calificado para meses sin intereses Agrega $ 10,000 más para obtener meses sin intereses".
- **OBSERVADO (home, mismo crawl, texto literal):** "¡Felicidades! Su pedido está calificado para envío gratis Agrega $ 10,000 más para enviío gratis" [sic].
- **Análisis de la cifra $10,000:** el texto es contradictorio en sí mismo ("calificado" y a la vez "agrega $10,000 más") y corresponde a un widget de progreso de carrito (típico de Shopify) leído con el carrito vacío. **INFERIDO (confianza baja-media):** el umbral para MSI y para envío gratis podría ser de **$10,000** (el widget con carrito vacío muestra como "faltante" el umbral completo), pero **no se puede confirmar** sin un carrito con importe conocido ni sin la página de términos de pago. Se registra como hipótesis de umbral, no como hecho.
- **NO VERIFICADO:** número de meses ofrecidos (3, 6, 9, 12, 18…), bancos participantes, monto mínimo real, tarjetas participantes y si el MSI es estructural (todo el año) o solo de temporada (Buen Fin). Ninguna ficha leída muestra el desglose de mensualidades.
- **Contexto externo (no es TANE):** **OBSERVADO** en fuentes generales que durante el Buen Fin 2026 los bancos ofrecen MSI (p. ej. BBVA: 3 MSI desde $3,000 con Tarjeta Negocios, vigencia 13–17 nov 2026). Esto explica que TANE pueda ofrecer MSI en Buen Fin **vía banco** aunque no rebaje el precio. No se transfiere a TANE como hecho: es contexto del mercado, no evidencia de su oferta.

## 5. Venta por volumen

- **NO VERIFICADO:** no hay tarifa por volumen, mayoreo ni precio escalonado por cantidad en ninguna ficha ni en la home leída.
- **OBSERVADO:** existe el canal "Regalos corporativos" (enlace en home y en pie de fichas). **INFERIDO (confianza baja):** el volumen, si existe, se negocia por ese canal y no es un precio publicado. No se contactó ni se abrió esa página; queda como pista para otro frente, no como hallazgo de precios.

## 6. Costos adicionales observados

Todos **OBSERVADO** en las fichas leídas (13 nov 2026, ~19:50 UTC; texto de "ENVÍOS", "CAMBIOS" y "DEVOLUCIONES", idéntico en las 3 fichas):

| Concepto | Costo observado | Condiciones observadas |
|---|---|---|
| Envío Estándar — todo México | **Sin costo** | 3–5 días hábiles en república; 1–3 días hábiles en CDMX y Zona Metropolitana; en temporada alta el plazo se amplía a 5–10 días hábiles |
| Retiro en tienda — Boutique Masaryk, Polanco, CDMX | **Sin costo** | Listo en 48 h hábiles (lun–vie), con aviso por correo |
| Entrega mismo día — CDMX y Zona Metropolitana | **$300 MXN** | Pedido antes de las 11:00 h (lun–jue); entrega límite 21:00 h; según código postal |
| Entrega día siguiente — CDMX y Zona Metropolitana | **$150 MXN** | Pedido antes de las 11:00 h; entrega 24 h después; según código postal |
| Cambios | Gratuitos (solo compras en www.tane.mx) | Dentro de 60 días, producto en perfecto estado, embalaje y etiquetas intactos, con factura/recibo y folleto de garantía originales; cambio por otro de igual valor |
| Devoluciones | Gratuitas (solo compras en www.tane.mx) | Mismas condiciones de 60 días; recolección agendada con la paquetería; validación de calidad de 10 días hábiles |
| Seguro de envío | **NO VERIFICADO** | No se menciona seguro en el texto de envíos leído |

- **Tensión observada (se deja constancia, no se resuelve):** las fichas dicen "Envío Estándar — Sin costo" sin condición de monto, mientras el widget de la home habla de "agrega $10,000 más para envío gratis". **INFERIDO (confianza baja):** o bien el estándar es gratis siempre y el widget se refiere a otra modalidad, o bien el umbral de $10,000 aplica y el texto de la ficha omite la condición. No se puede decidir con lo leído; el checkout no se abrió.
- **OBSERVADO:** no hay costo de envío visible sumado al precio en ficha; el precio de lista es el precio de la pieza y el envío estándar no añade nada en lo leído.

## 7. Garantía y personalización (papel en el precio)

- **OBSERVADO:** cada compra incluye **folleto de garantía** y **certificado de garantía**: "Para cualquier reparación o cambio de producto, es imprescindible presentar el certificado de garantía. El tiempo de validación de piezas por parte de nuestro departamento de calidad es de 10 días hábiles para dar respuesta." (fichas, 13 nov 2026).
- **OBSERVADO:** **"No se permiten cambios en piezas personalizadas, grabadas y/o descontinuadas."** La personalización/grabado existe como opción (se menciona como categoría excluyente), pero **NO VERIFICADO:** su costo adicional (si lo hay), el proceso y el plazo. No se observó ningún precio de grabado ni de pieza a medida.
- **OBSERVADO:** la colección "TANE por Ti" (pulseras) tiene régimen aparte: **"No hay cambios, devoluciones ni cancelaciones sin ninguna excepción. Cada venta realizada bajo la campaña TANE por Ti es final."** Es una venta final, sin devolución — un dato de precio/riesgo relevante: en esa campaña el cliente asume todo el riesgo post-compra.
- **INFERIDO (confianza media):** garantía + cambios/devoluciones gratuitos a 60 días + envío estándar gratis funcionan como **sustitutos del descuento**: son el "valor añadido" que justifica pagar el precio de lista. La personalización, al no admitir cambio, es el contraejemplo: ahí el cliente paga por unicidad y pierde flexibilidad.
- **NO VERIFICADO:** duración de la garantía en años, cobertura exacta (defectos de fabricación, piedras, vermeil), ni costo de reparaciones fuera de garantía. El texto leído solo exige el certificado y fija 10 días hábiles de validación.

## 8. Efecto de espera — ¿tiene el cliente motivo para esperar a una promo?

**HIPÓTESIS (argumentada, derivada de lo observado):** **no, en lo observado hoy no hay motivo para esperar.** Argumentos:

1. **No hay rebaja ni siquiera el día 1 del Buen Fin.** Si el mayor evento de descuentos del año en México no mueve el precio de lista en home ni en 3 fichas, la expectativa racional de una rebaja futura es baja. Esperar no compra descuento, solo pospone la compra.
2. **El precio es de lista y estable por talla.** Sin precio tachado ni escalonado, no hay "precio ancla" que haga rentable esperar: no hay referencia de un precio anterior más alto al que volver.
3. **Lo que sí podría ganarse esperando es financiamiento, no precio.** Si el MSI es de temporada (bancario, Buen Fin), esperar al Buen Fin podría dar más meses; pero el Buen Fin ya está en curso (13–17 nov) y el MSI ya se anuncia en home hoy, así que ese beneficio ya está disponible, no es futuro.
4. **Riesgo de esperar: disponibilidad y lanzamientos.** Las piezas son hechas a mano y varias se marcan como "Lanzamiento" (ediciones que pueden agotarse); además, las piezas personalizadas/grabadas y las descontinuadas no admiten cambio. **HIPÓTESIS:** en lujo hecho a mano, esperar arriesga perder la pieza concreta más que ganar un descuento.
5. **Excepción — HIPÓTESIS:** el único motivo plausible para esperar sería una **venta privada, un lanzamiento con precio introductorio o una pieza de la campaña TANE por Ti** (venta final, posiblemente con condición especial no observada). Ninguna de las tres se observó con precio; quedan como hipótesis, no como recomendación.

**Conclusión de la hipótesis:** el efecto de espera en TANE es **débil o nulo en precio**; la decisión de compra se juega en financiamiento (MSI), disponibilidad de la pieza y confianza (garantía/devolución), no en cazar una rebaja.

## 9. Comparación con tiendas comparables

**Resultado: NO VERIFICADO — no se encontró una pieza equivalente con precio comparable en tienda comparable.**

- **Intentos:** El Palacio de Hierro vende TANE (canal oficial mencionado en las propias fichas de TANE para cambios/devoluciones). **OBSERVADO** en búsqueda (crawl ~1 h antes de la consulta, 13 nov 2026): la categoría "Aretes TANE | El Palacio de Hierro" lista **44 artículos**, pero el fragmento crawleado **no incluye ningún precio**. Sin precio por pieza, no hay comparación.
- **OBSERVADO (referencia de piso, no comparación):** bodas.com.mx indica que en Tane Orfebres "se pueden comprar piezas de joyería para boda desde $2,300" (crawl hace ~17 h, 13 nov 2026; URL https://www.bodas.com.mx/joyeria/tane-orfebres--e262237). Es un "desde" de un directorio de bodas, sin pieza identificada ni fecha de vigencia; **no es un precio de tane.mx ni una pieza comparable** y no se usa como comparador.
- **Mercado secundario — NO comparable, se excluye de la comparación:** Morton Subastas / BidSquare vende piezas TANE usadas en subasta (p. ej. anillo de oro amarillo 18k vendido en $14,000 en ene 2024; collar de plata .925 vendido en $3,800 en jul 2024; set collar+aretes+anillo vendido en $8,000 en dic 2023). Son precios de remate de piezas de segunda mano, con fecha de subasta de 2021–2024, y **no son precios de retail vigente**; usarlos como comparador falsearía el análisis. Se citan solo para dejar constancia de que existen y por qué se descartan.
- **Otras joyerías mexicanas (Tous, María Salinas, Essentta, Aurium, etc.):** aparecen en búsquedas genéricas de garantía/personalización, pero **no se encontró la misma pieza** (mismo material, peso y diseño) con precio en ninguna de ellas. Conforme a la regla del frente, si no hay misma pieza, **NO VERIFICADO** y no se inventa comparación.
- **INFERIDO (confianza baja, por contexto de mercado):** el ticket observado ($11,000–$29,900) sitúa a TANE por encima de la joyería de plata de moda masiva y en el rango de joyería fina nacional; pero sin una pieza gemela con precio en otro retailer, esto es posicionamiento cualitativo, no comparación de precios.

## 10. Lista final

### Observado
- Home tane.mx crawleada 13 nov 2026 ~19:49 UTC: sin mención de Buen Fin, descuento, cupón ni liquidación en el texto extraído; etiquetas "Lanzamiento"; widget de MSI y envío gratis que menciona $10,000 (texto literal contradictorio, ver §4).
- 3 fichas con precio único de lista, sin tachado, sin promo, InStock, crawl 13 nov 2026 ~19:50 UTC: Gargantilla Xocolate Cadena $29,900; Anillo Lazos Cordel $11,000 (tallas 55–80, mismo precio); Anillo Churumbela 2.0 Vermeil $13,900 (tallas 6–9, mismo precio).
- Envío estándar todo México sin costo (3–5 días hábiles); retiro Boutique Masaryk sin costo (48 h hábiles); mismo día $300; día siguiente $150 (CDMX/ZM, antes de las 11:00 h).
- Cambios y devoluciones gratuitos solo en www.tane.mx, 60 días, con factura/recibo y folleto de garantía originales; validación de calidad 10 días hábiles; certificado de garantía imprescindible para cambios/reparaciones.
- Piezas personalizadas, grabadas y/o descontinuadas sin cambios; campaña "TANE por Ti" con venta final sin cambios, devoluciones ni cancelaciones.
- El Palacio de Hierro lista 44 artículos de aretes TANE (sin precio en el fragmento crawleado); bodas.com.mx indica "desde $2,300" para joyería de boda Tane (directorio, sin pieza identificada).
- Buen Fin 2026: 13–17 nov 2026 (términos bancarios y prensa).

### Inferido
- (Confianza media) La pista de lujo sin rebaja se sostiene: precio de lista fijo, sin descuento ni en el día 1 del Buen Fin; la palanca es MSI + envío + garantía, no la rebaja.
- (Confianza baja-media) El umbral de MSI y envío gratis podría ser $10,000, por el widget de home con carrito vacío; no confirmado.
- (Confianza baja) Envío estándar gratis siempre vs. umbral de $10,000: tensión no resuelta entre ficha y widget de home.
- (Confianza media) Garantía + devolución 60 días + envío gratis actúan como sustitutos del descuento.
- (Confianza baja) El ticket observado ($11,000–$29,900, n=3) sugiere posicionamiento de joyería fina, por encima de plata de moda masiva.

### Hipótesis
- Efecto de espera débil o nulo en precio: esperar no compra descuento; solo arriesga disponibilidad de piezas hechas a mano / lanzamientos.
- El único motivo plausible para esperar sería una venta privada, precio introductorio de lanzamiento o condición especial de la campaña TANE por Ti; ninguna observada.
- Si existe venta por volumen, se negociaría por el canal "Regalos corporativos", no como precio publicado.

### No verificado
- Precios de aretes, pulseras, collares, dijes y línea TANE RACING (4 fichas intentadas; lectura 429, sin reintento por regla del frente).
- Número de meses MSI, bancos, monto mínimo real y vigencia (estructural vs. Buen Fin).
- Cupones, bundles, descuento por volumen, liquidación/remate/outlet.
- Costo y proceso de personalización/grabado y de pieza a medida; duración y cobertura exacta de la garantía; seguro de envío.
- Comparación de precios con tienda comparable (misma pieza): sin pieza gemela con precio en otro retailer; El Palacio no dio precios en lo crawleado; subastas descartadas por ser mercado secundario.
- Si existe un banner gráfico/pop-up de Buen Fin no recogido por la extracción de texto de la home.

## 11. Fuentes consultadas

1. https://tane.mx/ — home, crawl 13 nov 2026 ~19:49 UTC (texto + JSON-LD).
2. https://mx.tane.com/products/gargantilla-xocolate-cad — ficha, crawl 13 nov 2026 ~19:50 UTC, $29,900.
3. https://mx.tane.com/products/anillo-lazos-diamantes-c — ficha, crawl 13 nov 2026 ~19:50 UTC, $11,000.
4. https://mx.tane.com/products/anillo-churumbela-2-0-ve — ficha, crawl 13 nov 2026 ~19:50 UTC, $13,900.
5. https://www.bodas.com.mx/joyeria/tane-orfebres--e262237 — "desde $2,300", crawl hace ~17 h (13 nov 2026).
6. https://www.elpalaciodehierro.com/marcas/tane/aretes/ — 44 artículos, sin precios en el fragmento (crawl ~1 h antes, 13 nov 2026).
7. https://www.bbva.mx/content/dam/public-web/mexico/documents/tycs/TyC_BuenFin_2026_3MSI.pdf — Buen Fin 2026, 13–17 nov, 3 MSI desde $3,000 (contexto bancario, no TANE).
8. https://www.creditea.mx/promo-cupones — Buen Fin 2026, 13–17 nov (contexto).
9. Búsquedas web 13 nov 2026: "TANE joyería México precios", "site:tane.mx precio" (sin resultados), "TANE Buen Fin MSI", "TANE MSI", "TANE garantía personalizado grabado" (estas dos últimas devolvieron resultados genéricos de MSI y de otras joyerías, sin datos específicos de TANE; se usan solo como contexto de mercado, no como evidencia de TANE).
10. Morton Subastas / BidSquare (varios lotes TANE 2021–2024) — mercado secundario, citado solo para descartarlo como comparador.

## 12. Límites

- **Muestra pequeña:** 3 fichas con precio de un catálogo amplio; el rango $11,000–$29,900 no describe el catálogo.
- **429 sin reintento:** 4 fichas más (aretes, pulsera, collar, trofeo F1) no se pudieron leer; sus precios quedan sin verificar por regla del frente.
- **Texto crawleado, no navegador:** no se abrió el checkout, no se vio el carrito con importes, no se vieron banners gráficos/pop-ups ni el desglose de MSI por banco. El umbral de $10,000 y la ausencia de promo de Buen Fin se afirman solo sobre el texto extraído.
- **Foto fija del día 1 del Buen Fin:** los precios son del 13 nov 2026; una promo lanzada los días 14–17 nov no quedaría recogida.
- **Sin datos personales:** no se extrajo ni se incluye ningún dato personal.
- **Nada publicado ni contactado.**
