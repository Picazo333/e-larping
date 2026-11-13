# BUNA — Redes sociales + embudo

| Campo | Dato |
|---|---|
| **Sitio investigado** | https://buna.mx/ (café de especialidad mexicano, Shopify; cafeterías en CDMX: Roma, Condesa y La Tostadora en Doctores) |
| **Fecha de la investigación** | 13 de noviembre de 2026 |
| **Frente** | F1.4 — Redes sociales + embudo (Fase 2, WO-E-LARPING) |
| **Método** | Solo fuentes públicas: lectura de texto de la home del sitio propio (`browser.open`, 13 nov 2026, 19:20 UTC) y búsqueda pública (`browser.search`). Sin inicio de sesión, sin seguir cuentas, sin mensajes, sin contacto. Sin navegador en vivo: **no hay capturas de pantalla**; todo lo observado se describe en texto. |
| **Etiquetas usadas** | **OBSERVADO** = visto directamente con URL y fecha · **INFERIDO** = deducción con evidencia y confianza declarada · **HIPÓTESIS** = derivación marcada como tal · **NO VERIFICADO** = no se pudo constatar con las fuentes disponibles |

## Resumen ejecutivo

- Buna opera públicamente con **una red confirmada: Instagram (@bunamx)**, citada como su Instagram en dos fuentes independientes (MexBest, 1 oct 2026; revista Laguna, n.º 01, mayo 2020). No se pudo leer el perfil: la apertura devolvió error 429 y no se reintentó. Seguidores, bio, ritmo y captions quedan como **NO VERIFICADO**.
- El hallazgo central de este frente es el **paid social**: dos URLs de producto indexadas con parámetros UTM completos de Meta demuestran campañas de adquisición pagadas en Instagram Feed y en otras superficies de Meta, con audiencias de engagers de Facebook e Instagram (180 días), lookalikes y público de extranjeros en México. Es la evidencia más dura del embudo de Buna.
- El embudo observable es: **anuncio Meta → ficha de producto con UTM → elección compra única vs. suscripción → checkout**. La palanca central no es un descuento de temporada sino la **suscripción recurrente** (cada 2, 4 ó 6 semanas, 15% de descuento según la home, envío gratis en el primer pedido, pausa/cancelación libre) reforzada por el canal físico: tres cafeterías y eventos/talleres en La Tostadora.
- **No se observó ninguna promo de Buen Fin** en el texto rastreado de la home el primer día del Buen Fin 2026 (13 nov). No se afirma que no exista en otro lugar del sitio o en redes; solo que la home no la anuncia.
- **Límite mayor del informe:** no se pudo constatar el ritmo de publicación ni transcribir captions de Instagram — la lectura del perfil devolvió 429 — y tampoco se pudo abrir la página "Somos BUNA" (mismo 429). Ver §8 y §9.

---

## 1. Instagram — la red principal (confirmada, no legible)

- **Handle:** @bunamx — **OBSERVADO** en dos fuentes de terceros:
  - MexBest, "5 cafeterías para celebrar el Día Internacional del Café" (1 oct 2026): "Instagram: @bunamx" en la ficha de BUNA (direcciones Ámsterdam 285, Condesa / C. Orizaba 42, Roma Norte). Fuente: https://mex-best.mx/bebidas/2026/10/01/cafeterias-que-puedes-visitar-para-celebrar-el-dia-internacional-del-cafe/
  - MexBest, "Dónde tomar café después de un run en Roma/Condesa" (23 jul 2025): "Instagram: @bunamx" para Buna Roma. Fuente: https://mex-best.mx/bebidas/2025/07/23/donde-tomar-cafe-despues-correr-roma-condesa/amp/
  - Revista Laguna n.º 01 (mayo 2020): "Cuentos ricos — Encuéntralos en nuestras redes @bunamx". Fuente: https://lagunamexico.com/wp-content/uploads/2022/07/Laguna-No.-01.pdf
- **Perfil en Instagram:** https://www.instagram.com/bunamx/ — **NO VERIFICADO.** La apertura de la página devolvió error 429 (límite de peticiones) y no se reintentó por regla del frente. Por tanto, no se pudo constatar: nombre visible, verificación, seguidores, seguidos, bio, enlace de bio, publicaciones, Reels, stories destacadas ni product tagging.
- **Seguidores:** **NO VERIFICADO.** No se reporta ninguna cifra: ninguna fuente pública consultada publica el conteo de @bunamx.
- **Sitio web en bio / cómo enlaza hacia la tienda:** **NO VERIFICADO** (perfil no legible). **HIPÓTESIS:** la bio enlaza a buna.mx, directamente o vía agregador; es el patrón estándar y el dominio es el único destino de tienda observado, pero no se pudo comprobar.
- **Presencia en el propio sitio:** la home rastreada (13 nov 2026) **no muestra enlaces visibles a redes sociales en el texto obtenido** (58 líneas; el texto no incluye pie de página ni iconos sociales). **NO VERIFICADO** si el pie de página de buna.mx enlaza a Instagram u otras redes — el rastreo no llegó a esa zona.
- **Tipo de contenido que publica / ritmo de publicación:** **NO VERIFICADO** (mismo motivo). No se reporta ninguna frecuencia estimada: inventarla violaría la regla del frente.
- **Serie de contenido con nombre propio (OBSERVADO en fuente histórica):** "Cuentos ricos" — la revista Laguna (mayo 2020) remite a las redes de Buna con esa rúbrica. Es la única serie de contenido de Buna con nombre documentado en las fuentes consultadas. Su formato actual, frecuencia y vigencia en 2026 son **NO VERIFICADOS** (la cita tiene más de 6 años).

### Lo que sí se puede decir del contenido (INFERIDO, confianza media-baja)

Los ejes visibles en la tienda son, con alta probabilidad, los mismos que alimentan Instagram, porque la marca reutiliza los mismos nombres y piezas en todos sus puntos de contacto observados:

| Eje | Dónde se observó | Uso probable en Instagram |
|---|---|---|
| "Café rico que conserva ecosistemas" (misión / conservación) | Home, fichas de producto, blog | Contenido de misión, campo, productores, ecosistemas |
| Dalia / Alebrije / Datura / Maui Ome (mezclas con nombre propio) | Home, fichas, colecciones | Producto héroe / lanzamientos / ediciones especiales |
| "Cuentos ricos" (serie) | Revista Laguna, mayo 2020 | Contenido narrativo / historias |
| Ciclo del café: del campo a La Tostadora | Blog (2022), home | Contenido educativo / proceso (tostado, métodos) |
| La Tostadora: talleres, pláticas, eventos, catas | Home, prensa (InStyle, CDMX Secreta) | Contenido de comunidad / eventos presenciales |
| Suscripción recurrente | Home, fichas de producto | Contenido de conversión / retención |

Esto es una inferencia de coherencia de marca, **no** una observación de posts. La confirmación exige una revisión visual del feed que este frente no pudo hacer (sin navegador en vivo y con el perfil bloqueado por 429).

---

## 2. Paid social (Meta) — el canal de adquisición documentado

Este es el hallazgo más sólido del frente: **dos URLs de producto de buna.mx indexadas en búsqueda pública llevan parámetros UTM completos de campañas pagadas de Meta**. Las URLs se citan íntegras porque son la evidencia.

### 2.1 Campaña 1 — Café Dalia, Instagram Feed, retargeting + lookalike

URL observada (fuente: resultado de búsqueda pública, 13 nov 2026):

> https://buna.mx/products/cafe-dalia?utm_content=Engagers+Fb+e+Instagram+180+d%C3%ADas_CRDyn_AON_LAL&utm_source=meta_Instagram_Feed&variant=39419744026694&utm_medium=paid_social&utm_campaign=%5BEPY_META_ACQ_RT_MAX_ATC_AON%5D+-+Copia&audience_type=new_customer&utm_id=120209206308700259&utm_term=120209206308500259&campaign_id=120209206308700259&ad_id=120209206381140259

Parámetros desglosados — **OBSERVADO**:

| Parámetro | Valor |
|---|---|
| `utm_source` | `meta_Instagram_Feed` |
| `utm_medium` | `paid_social` |
| `utm_campaign` | `[EPY_META_ACQ_RT_MAX_ATC_AON] - Copia` |
| `utm_content` | `Engagers Fb e Instagram 180 días_CRDyn_AON_LAL` |
| `audience_type` | `new_customer` |
| `utm_id` / `campaign_id` | `120209206308700259` |
| `utm_term` / `ad_id` | `120209206308500259` / `120209206381140259` |
| `variant` | `39419744026694` (suscripción 2 kg, en grano, de Café Dalia) |

Lectura de la nomenclatura — **INFERIDO (confianza media)** — la decodificación de abreviaturas internas no está documentada por la marca y puede leerse de otro modo:

- `EPY` = prefijo interno de campaña (posiblemente agencia o cuenta; no verificado).
- `META_ACQ` = adquisición en Meta.
- `RT` = retargeting (coherente con la audiencia "Engagers Fb e Instagram 180 días").
- `MAX_ATC` = optimización para el evento "añadir al carrito" (AddToCart) con puja de máximo valor/conversiones.
- `AON` = always-on (campaña permanente, no estacional).
- `CRDyn` = creativo dinámico (dynamic creative).
- `LAL` = lookalike (público similar).
- `- Copia` = duplicado de una campaña original (práctica habitual de escalado o test A/B en Meta Ads).
- `audience_type=new_customer` = la campaña se define como adquisición de clientes nuevos.

### 2.2 Campaña 2 — Miel Apis Inmunis, otras superficies de Meta, público extranjero

URL observada (fuente: resultado de búsqueda pública, 13 nov 2026):

> https://buna.mx/products/miel-apis-inmunis?variant=40300092325958&utm_content=Extranjeros+en+M%C3%A9xico_Collection_+AllProd&utm_source=meta_Others&utm_medium=paid_social&utm_campaign=%5BEPY_META_ACQ_INT_MAX_ATC_AON%5D+English&campaign_id=120209444393460259&ad_id=120210219227650259&audience_type=new_customer

Parámetros desglosados — **OBSERVADO**:

| Parámetro | Valor |
|---|---|
| `utm_source` | `meta_Others` |
| `utm_medium` | `paid_social` |
| `utm_campaign` | `[EPY_META_ACQ_INT_MAX_ATC_AON] English` |
| `utm_content` | `Extranjeros en México_Collection_AllProd` |
| `audience_type` | `new_customer` |
| `campaign_id` / `ad_id` | `120209444393460259` / `120210219227650259` |

Lectura — **INFERIDO (confianza media)**: segunda campaña de adquisición, esta vez por intereses (`INT`) y en inglés, dirigida a extranjeros residentes en México, con toda la colección de productos como destino (`Collection_AllProd`). La existencia de dos campañas con estructuras de nombre paralelas (`ACQ_RT_…` y `ACQ_INT_…`, ambas `MAX_ATC_AON`) indica una **estructura de cuenta Meta con al menos dos líneas de adquisición always-on**: una de retargeting/lookalike en Instagram Feed y otra de intereses en inglés.

### 2.3 Qué prueba y qué no prueba el UTM

- **OBSERVADO:** Buna corre (o corrió) publicidad pagada en Meta con destino directo a fichas de producto, optimizada para añadir al carrito, con audiencias de engagers de Facebook e Instagram de 180 días, lookalikes y extranjeros en México. Los `campaign_id` y `ad_id` son distintos entre ambas campañas: son dos campañas reales, no una sola URL reutilizada.
- **INFERIDO (confianza alta):** el paid social es un canal de adquisición activo y estructurado, no un experimento aislado. La nomenclatura `AON` (always-on) y el sufijo `- Copia` apuntan a gestión profesional continua de Meta Ads.
- **NO VERIFICADO:** creativos de los anuncios (imagen/video/copy), presupuesto, fechas de vigencia, resultados (CTR, CPA, ROAS), si las campañas siguen activas el 13 nov 2026, ni si existe publicidad en TikTok o Google. No se consultó ninguna biblioteca de anuncios.
- **Advertencia de método:** las URLs con UTM llegaron vía el índice de búsqueda, no por clic en un anuncio. No se observó el anuncio en sí ni su copy. La fecha de indexación no consta; los parámetros pudieron generarse en cualquier momento anterior. Lo que es seguro es que esas campañas existieron con esos parámetros.

---

## 3. X / Twitter, Facebook, TikTok, YouTube y otras redes

| Red | Estado |
|---|---|
| Facebook (página orgánica) | **Sin evidencia de página propia.** Ninguna búsqueda devolvió una página de Facebook de Buna. **PERO:** Facebook sí existe como fuente de audiencia pagada: la campaña 1 usa la audiencia "Engagers Fb e Instagram 180 días" (`utm_content`, §2.1). **INFERIDO (confianza media):** Buna tiene presencia publicitaria en Facebook aunque su página orgánica no se haya localizado. Existencia de la página: **NO VERIFICADA**. |
| X / Twitter | **Evidencia histórica, vigencia no verificada.** Excélsior (18 mar 2014, aniversario 108 de la colonia Juárez) cita: "Buna Café Rico, Havre #83 @buna_mx https://www.twitter.com/buna_mx". Fuente: https://www.excelsior.com.mx/comunidad/2014/03/18/949322?amp — El handle **@buna_mx** es distinto del actual de Instagram (@bunamx). No se encontró actividad reciente ni confirmación de que la cuenta siga activa en 2026. Estado actual: **NO VERIFICADO**. |
| TikTok | **Sin evidencia.** Ninguna búsqueda devolvió una cuenta de TikTok de Buna México. El único resultado de TikTok con nombre parecido es @bunacafe.col (Colombia), una marca distinta — **descartado como ruido, no pertinente**. **NO VERIFICADO** si existe @bunamx u otra cuenta en TikTok. |
| YouTube | **Sin evidencia.** Ninguna búsqueda devolvió un canal de YouTube de Buna. **NO VERIFICADO**. |
| Pinterest | **Sin evidencia.** **NO VERIFICADO**. |
| WhatsApp (canal de atención o ventas) | **Sin evidencia.** No aparece número ni botón de WhatsApp en el texto rastreado de la home ni en las fichas de producto consultadas vía búsqueda. Las fichas dicen: "Nuestro equipo está a solo un correo electrónico o chat de distancia" (§5.4) — el "chat" no se identifica. **NO VERIFICADO** si ese chat es WhatsApp, Shopify Inbox u otro. |
| Newsletter / email | **Sin evidencia en el texto rastreado** de la home. **NO VERIFICADO** (el rastreo no mostró formulario de suscripción; no se afirma que no exista). |
| Podcast (audio, no red social) | Mención de contexto: el fundador Lalo Pérez Varona fue entrevistado en el podcast Apasionados (ep. 009, 12 abr 2021) y la cofundadora Ana Elena en Disruptivo (19 mar 2019). Son apariciones en medios de terceros, no canales propios de Buna. |

**Lectura (INFERIDA, confianza media):** el ecosistema social de Buna es estrecho y asimétrico: Instagram como única red orgánica confirmada, y Meta (Facebook + Instagram) como canal pagado estructurado. No hay estrategia visible de presencia en todas las redes; la concentración está en el canal donde está su audiencia (Instagram) y en la compra de tráfico medible hacia la ficha de producto.

---

## 4. Embudo comercial — recorrido observable de red → tienda → compra

### 4.1 Ruta 1: Anuncio Meta → ficha de producto (ruta principal, OBSERVADA en sus eslabones)

1. **Descubrimiento en paid social** — el usuario ve un anuncio de Buna en Instagram Feed u otra superficie de Meta — **INFERIDO** (el anuncio en sí no se observó; los UTM de §2 prueban que la campaña existe).
2. **Clic con UTM completo** — el enlace del anuncio lleva directo a la ficha de producto con los parámetros de campaña, audiencia y anuncio — **OBSERVADO** (las dos URLs de §2).
3. **Ficha de producto con elección de compra** — la ficha ofrece dos tipos de compra, con variantes por presentación (340 gr / 2 kg) y molido (molido medio / en grano) — **OBSERVADO** (precios en §4.4).
4. **Checkout** — tienda Shopify; el flujo de checkout en sí **NO** se recorrió (no se inició ninguna compra).

### 4.2 Ruta 2: Instagram orgánico → tienda (INFERIDA, no observada)

1. El usuario ve contenido de @bunamx (contenido no verificable en este informe; ver §1).
2. Bio → tienda (destino **NO VERIFICADO**; hipótesis: buna.mx).
3. El aterrizaje probable es la home, cuyo primer mensaje es la suscripción (§4.3).

### 4.3 Ruta 3: Canal físico → tienda online (OBSERVADA en sus piezas)

1. El usuario visita una de las cafeterías: Buna 42 (C. Orizaba 42, Roma Norte), Buna Condesa (Ámsterdam 285) o La Tostadora (Dr. Lucio 181 / Doctor Erazo 172, Doctores — las fuentes difieren en la calle; ver §8) — **OBSERVADO** (direcciones en MexBest, InStyle, Hotbook, CDMX Secreta, pos.do).
2. En La Tostadora: recorridos por tostadora, laboratorio y almacén; talleres, pláticas, catas y eventos — **OBSERVADO** (home: "ven a La Tostadora (tu casa) a eventos como talleres, pláticas y mucho más"; InStyle 18 oct 2025; CDMX Secreta 20 sep 2023).
3. La home convierte esa experiencia física en suscripción online: "Forma parte de la comunidad BUNA y ven a La Tostadora (tu casa) a eventos…" — **OBSERVADO** (home, 13 nov 2026).
4. **INFERIDO (confianza media):** el local físico es la parte superior del embudo de confianza — probar el café en barra, conocer el proceso — y la suscripción online es la retención. Es el inverso de F4T3: aquí la tienda física alimenta la tienda online, no al revés.

### 4.4 Elementos del embudo que SÍ se observaron (y su función)

| Elemento | Función en el embudo | Estado |
|---|---|---|
| Suscripción recurrente en home: "Recibe productos ricos de manera recurrente en la puerta de tu casa" | Retención / recompra automática | OBSERVADO (home, 13 nov 2026) |
| 15% de descuento en todas tus compras (suscriptores) | Incentivo de suscripción | OBSERVADO en home — ver discrepancia en §4.5 |
| Envío gratis en tu primer pedido | Reducción de fricción de primera compra | OBSERVADO (home) |
| Pedidos automáticos cada 2, 4 ó 6 semanas | Cadencia de recompra elegida por el cliente | OBSERVADO (home) |
| "Pausa o cancela cuando quieras y tan amigos como siempre" | Reducción del riesgo percibido de suscribirse | OBSERVADO (home) |
| Compra única vs. suscripción en cada ficha | El cliente elige el compromiso en el punto de compra | OBSERVADO (fichas Dalia, Alebrije, Datura, Maui, Miel Apis Inmunis) |
| Precios con descuento por suscripción: Dalia 340 g $350 única / $335 suscripción; Alebrije $350 / $335; Datura $365 / $360; Maui $395 / $395; Miel Apis Inmunis $270 / $270; suscripción 2 kg Dalia $1,290 | Ancla de precio y micro-descuento de suscripción | OBSERVADO (fichas, vía búsqueda, 13 nov 2026) |
| Video de misión en home ("Somos BUNA" + video widgetic) | Consideración / confianza de marca | OBSERVADO (home: enlace "Somos BUNA" y archivo mp4 de Widgetic) |
| Blog educativo ("¿Cómo es el ciclo del café de Buna?", 28 abr 2022) | Consideración / SEO / autoridad | OBSERVADO (https://buna.mx/blogs/info/como-es-el-ciclo-del-cafe-de-buna) |
| "Echemos el cafecito virtual" — correo o chat de contacto en fichas | Atención pre-compra | OBSERVADO (fichas de producto) |
| Prueba social de terceros: Buna 42, 4.5★, 1,567 reseñas en Google (pos.do) | Confianza en el local físico | OBSERVADO en pos.do (fuente de terceros, 13 nov 2026) |
| Comunidad + eventos presenciales en La Tostadora | Retención y pertenencia | OBSERVADO (home) |
| Promo de Buen Fin (13–17 nov 2026) | — | NO OBSERVADA en la home rastreada el 13 nov (ver §4.5) |
| MSI / meses sin intereses | — | NO OBSERVADO en lo rastreado |
| Códigos de descuento alfanuméricos | — | NO OBSERVADO |
| Landing de promo dedicada (URL propia de Buen Fin) | — | NO OBSERVADA |
| Link-in-bio agregador (Linktree y similares) | — | NO VERIFICADO (perfil no legible) |

### 4.5 Dos discrepancias que se dejan marcadas (NO VERIFICADAS, no resueltas)

1. **15% vs. micro-descuento en ficha.** La home promete a los suscriptores "un 15% de descuento en todas tus compras", pero las fichas muestran descuentos de suscripción mucho menores: Dalia $350 → $335 (~4.3%), Datura $365 → $360 (~1.4%), y Maui y Miel Apis Inmunis sin diferencia ($395/$395 y $270/$270). **INFERIDO (confianza baja):** el 15% podría aplicarse en el checkout o a compras posteriores, no al precio de lista de la ficha; o la home puede estar desactualizada. No se pudo comprobar sin recorrer el checkout. No se afirma que haya error; se deja como inconsistencia observada entre dos piezas del mismo sitio.
2. **Ausencia de Buen Fin en la home el día 1.** La home rastreada el 13 nov 2026 (19:20 UTC), primer día del Buen Fin 2026 (13–17 nov), no contiene en su texto las palabras "Buen Fin", ni banner de oferta, ni fecha límite. **OBSERVADO** (ausencia en el texto rastreado). Esto **no prueba** que Buna no participe: la promo podría vivir en redes, en anuncios, en una landing o en las cafeterías físicas. Pero sí prueba que, a diferencia de F4T3, Buna no convierte su home en un escaparate de Buen Fin el día del arranque.

### 4.6 Lectura del embudo (INFERIDO, confianza media-alta)

El embudo de Buna es **pagado en origen (Meta Ads a ficha de producto), de suscripción en el medio y físico-comunitario en el cierre**. No se observó captura de datos previa a la compra (sin newsletter visible), ni bundle, ni urgencia temporal. La conversión se juega en tres cosas: que el anuncio de Meta lleve al producto correcto (Dalia como puerta de entrada), que la elección suscripción-vs-única empuje al cliente a la recurrencia con el 15% y el envío gratis del primer pedido, y que la experiencia física (cata, taller, tostadora) convierta al comprador en miembro de la comunidad. La fricción visible es la contraria a la de F4T3: no hay reclamaciones públicas observadas, sino una promesa de descuento (15%) que las fichas no reflejan en el precio de lista — un punto a verificar antes de replicar el modelo.

---

## 5. Contenidos — ritmos, tipos, temas y ganchos

### 5.1 Ritmos de publicación

**NO VERIFICADO en ninguna red.** No se pudo constatar frecuencia (posts por semana, Reels por mes) en Instagram ni en ninguna otra red. La lectura del perfil de Instagram devolvió 429 y la búsqueda pública no indexa los posts de @bunamx. Cualquier cifra de ritmo sería inventada. **Pendiente para una revisión con navegador en vivo.**

### 5.2 Tipos de contenido

| Tipo | Red | Estado |
|---|---|---|
| Video de misión / marca ("Somos BUNA", mp4 de Widgetic) | Sitio (home) | OBSERVADO (enlace + archivo de video en la home) |
| Blog educativo (ciclo del café, productores, procesos) | Sitio (blog) | OBSERVADO (1 artículo, 28 abr 2022) |
| "Cuentos ricos" (serie con nombre propio) | Redes @bunamx (según Laguna, 2020) | OBSERVADO el nombre y la remisión; formato y vigencia NO VERIFICADOS |
| Foto de producto / editorial | Instagram | NO VERIFICADO (no se vio el feed) |
| Reels / video corto | Instagram, TikTok | NO VERIFICADO |
| Stories / stories destacadas | Instagram | NO VERIFICADO (no visibles sin app/navegador en vivo) |
| UGC / reseñas de clientes | Google (1,567 reseñas de Buna 42, pos.do) | OBSERVADO en tercero; su réplica en redes NO VERIFICADA |
| Contenido promocional (Buen Fin) | Sitio, redes | NO OBSERVADO en la home; en redes NO VERIFICADO |
| Talleres, catas, recorridos de tostadora | Presencial (La Tostadora) | OBSERVADO en home y prensa; su cobertura en redes NO VERIFICADA |

### 5.3 Temas y ganchos recurrentes (observados en sitio + prensa)

- **"Café rico que conserva ecosistemas"** — la misión como identidad: un hábito cotidiano que regenera ecosistemas mexicanos. Gancho de propósito, no de precio.
- **"¿Qué si a través de un hábito tan cotidiano como tomar café pudiéramos promover la conservación de nuestros ecosistemas?"** — pregunta retórica de la home; gancho de misión.
- **"Del campo a tu mesa" / "Productos ricos, del campo a tu mesa"** — trazabilidad y origen como gancho de confianza.
- **Dalia / Alebrije / Datura / Maui Ome** — nombres propios de mezclas con perfil de sabor (notas de cata: piloncillo, chocolate, nuez, almendra, toronja, lima, caramelo). El producto se vende por historia y sabor, no por descuento.
- **"Cuentos ricos"** — narrativa como formato de contenido.
- **"Recibe productos ricos de manera recurrente en la puerta de tu casa"** — la comodidad de la suscripción como gancho comercial.
- **"Pausa o cancela cuando quieras y tan amigos como siempre"** — tono cercano y sin fricción como gancho de retención.
- **"La Tostadora (tu casa)"** — el espacio físico como comunidad, no solo como punto de venta.
- **Buna + Agárica** — colaboración con hongos funcionales (melena de león, chaga, reishi) en cafés y mieles; gancho de innovación/bienestar.

### 5.4 Captions representativos — transcripciones

**No se pudo transcribir ningún caption de Instagram** (el feed no fue accesible en texto y el perfil devolvió 429). Los textos que siguen son copy del sitio y de fuentes de terceros, citados como lo que el tráfico social encuentra al aterrizar — no son captions de redes.

**A. Copy de la home (fuente: https://buna.mx/, lectura 13 nov 2026, 19:20 UTC):**

> "Productos ricos, del campo a tu mesa"
> "¿Qué si a través de un hábito tan cotidiano como tomar café pudiéramos promover la conservación de nuestros ecosistemas?"
> "Recibe productos ricos de manera recurrente en la puerta de tu casa."
> "Obtén un 15 % de descuento en todas tus compras."
> "Envío gratis en tu primer pedido."
> "Programa tus pedidos automáticos y recíbelos cada 2, 4 ó 6 semanas."
> "Pausa o cancela cuando quieras y tan amigos como siempre."
> "Súmate a nuestra misión y ayúdanos a regenerar ecosistemas mexicanos con cada pedido."
> "Forma parte de la comunidad BUNA y ven a La Tostadora (tu casa) a eventos como talleres, pláticas y mucho más."
> "Haz tu primer pedido"

**B. Copy de fichas de producto (fuente: resultados de búsqueda pública, 13 nov 2026):**

> "Creamos DALIA para tu comfort. Esta mezcla de cafés ricos tiene notas a piloncillo, nibs de cacao, caramelo y nuez. Perfecto para cualquier momento."
> "Tomar Alebrije es embarcarse en una aventura. Esta mezcla de cafés ricos con notas a almendra, toronja, lima y caramelo es ideal para los paladares que siempre están buscando sabores nuevos y sensaciones extraordinarias."
> "Por fin un café rico descafeinado. Datura pasa por un proceso compuesto únicamente de agua y filtración en el que los granos de café pierden alrededor del 98 % de su cafeína antes de ser tostados."
> "Echemos el cafecito virtual — ¿Tienes preguntas sobre nuestro proyecto? Nuestro equipo está a solo un correo electrónico o chat de distancia."

**C. Rúbrica de contenido histórica (fuente: revista Laguna n.º 01, mayo 2020):**

> "Cuentos ricos — Encuéntralos en nuestras redes @bunamx"

**D. Mención histórica en X/Twitter (fuente: Excélsior, 18 mar 2014):**

> "Buna Café Rico — Havre #83 @buna_mx https://www.twitter.com/buna_mx"

---

## 6. Análisis estilo Cambridge/reels — qué se puede concluir y qué no

Aplicando el marco de reverse engineering de contenido (ritmo, estructura, CTA) a lo efectivamente observado:

- **Ritmo:** no evaluable. Sin fechas de publicación no hay cadencia que medir. Es el hueco principal de este frente.
- **Estructura del contenido (INFERIDO de las piezas observadas):** gancho de misión o de proceso ("¿qué si tomar café conservara ecosistemas?", "del campo a tu mesa", ciclo del café) → producto con nombre propio y notas de cata como protagonista editorial → CTA de suscripción ("haz tu primer pedido", "recibe productos ricos de manera recurrente"). Es una estructura de **contenido de propósito que vende por pertenencia**, opuesta al formato "oferta directa" del hero de F4T3. La tienda y las redes (en lo inferible) juegan el mismo papel: la misión construye deseo, la suscripción lo convierte en ingreso recurrente.
- **CTA:** el único CTA textual observado en el ecosistema es "Haz tu primer pedido" (home) y el enlace "Somos BUNA" (misión). No se observaron CTAs del tipo "comenta X", "link en bio", códigos ni "desliza arriba". **NO VERIFICADO** si existen en posts concretos.
- **Coherencia cross-canal (OBSERVADO):** los nombres de producto y la frase "café rico" son idénticos en la tienda, el blog y la prensa (Dalia, Alebrije, Datura, Maui Ome, "Cuentos ricos"). La marca no fragmenta su mensaje por canal, al menos en lo observable.
- **Diferencia estructural vs. F4T3 (INFERIDO, confianza media):** F4T3 convierte con bundle + urgencia + MSI en una sola compra; Buna convierte con suscripción + comunidad + canal físico en compras repetidas. El ticket de Buna es menor ($335–$395 por bolsa de 340 g) pero el modelo busca LTV, no ticket único. El paid social de Buna aterriza en ficha de producto (no en home genérica), lo que indica optimización por ATC, coherente con su nomenclatura `MAX_ATC`.
- **Lo que falta para cerrar el análisis:** ver el feed de Instagram @bunamx (últimos 30 días: formatos, frecuencia, captions, highlights, product tagging, link de bio), confirmar o descartar TikTok y la página de Facebook, ver los creativos de las campañas Meta (copy e imagen del anuncio de Dalia y de la miel), y recorrer el checkout para resolver la discrepancia del 15%.

---

## 7. Lista final — observado / inferido / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

1. Home de https://buna.mx/ (lectura 19:20 UTC): "Productos ricos, del campo a tu mesa"; café, chocolate y miel; pregunta de misión sobre conservación de ecosistemas; enlace "Somos BUNA" y video (Widgetic mp4); bloque de suscripción con 15% de descuento, envío gratis en primer pedido, pedidos cada 2/4/6 semanas, pausa/cancelación libre, comunidad y eventos en La Tostadora; CTA "Haz tu primer pedido". Sin mención de Buen Fin en el texto rastreado.
2. Handle de Instagram @bunamx citado en MexBest (1 oct 2026 y 23 jul 2025) y en revista Laguna n.º 01 (mayo 2020, "Cuentos ricos… en nuestras redes @bunamx").
3. Dos URLs de producto con UTM completos de Meta paid social: Café Dalia (`utm_source=meta_Instagram_Feed`, campaña `[EPY_META_ACQ_RT_MAX_ATC_AON] - Copia`, audiencia "Engagers Fb e Instagram 180 días_CRDyn_AON_LAL", `audience_type=new_customer`, campaign_id 120209206308700259, ad_id 120209206381140259) y Miel Apis Inmunis (`utm_source=meta_Others`, campaña `[EPY_META_ACQ_INT_MAX_ATC_AON] English`, audiencia "Extranjeros en México_Collection_AllProd", campaign_id 120209444393460259, ad_id 120210219227650259).
4. Precios de compra única vs. suscripción en fichas: Dalia 340 g $350/$335, 2 kg suscripción $1,290; Alebrije $350/$335; Datura $365/$360; Maui $395/$395; Miel Apis Inmunis $270/$270.
5. "Echemos el cafecito virtual" — contacto por correo o chat — en fichas de producto.
6. Blog: "¿Cómo es el ciclo del café de Buna?" (https://buna.mx/blogs/info/como-es-el-ciclo-del-cafe-de-buna, 28 abr 2022).
7. Tres espacios físicos documentados en prensa: Buna 42 (Orizaba 42, Roma Norte), Buna Condesa (Ámsterdam 285) y La Tostadora (Doctores; las fuentes difieren entre Dr. Lucio 181 y Doctor Erazo 172); talleres, catas y recorridos de tostadora en La Tostadora.
8. Mención histórica de X/Twitter: @buna_mx (Excélsior, 18 mar 2014).
9. Buna 42: 4.5★, 1,567 reseñas en Google (pos.do, consultado 13 nov 2026).
10. La palabra "TikTok" no aparece asociada a Buna México en ninguna búsqueda; el único @bunacafe.* en TikTok es @bunacafe.col (Colombia), marca distinta.

### INFERIDO (con evidencia y confianza)

1. Instagram es la red principal de Buna (única red orgánica confirmada por fuentes de terceros en 2025 y 2026). Confianza: **alta** para la existencia del handle; **media** para que sea el canal principal (sin ver el feed ni el pie del sitio).
2. Buna corre publicidad pagada estructurada en Meta: al menos dos campañas always-on de adquisición optimizadas a añadir al carrito, una de retargeting/lookalike en Instagram Feed y otra de intereses en inglés para extranjeros en México. Confianza: **alta** (dos campañas con IDs distintos y nomenclatura paralela).
3. Facebook existe como superficie de audiencia pagada ("Engagers Fb e Instagram 180 días") aunque no se localizara su página orgánica. Confianza: **media**.
4. El embudo es: anuncio Meta → ficha de producto con UTM → compra única vs. suscripción → retención por cadencia 2/4/6 semanas + comunidad física en La Tostadora. Confianza: **media-alta** (todos los eslabones salvo el anuncio en sí están observados).
5. El local físico es la parte superior del embudo de confianza y la suscripción online es la retención (el modelo busca LTV, no ticket único). Confianza: **media**.
6. Los ejes de contenido del sitio (misión/conservación, mezclas con nombre propio, "Cuentos ricos", ciclo del café, La Tostadora) se replican probablemente en Instagram. Confianza: **media-baja** (coherencia observada entre sitio, blog y prensa, sin ver el feed).
7. El 15% de descuento de la home podría aplicarse en checkout o a compras posteriores, no al precio de lista de la ficha. Confianza: **baja** (es una reconciliación posible, no verificada).

### HIPÓTESIS (derivadas, marcadas)

1. La bio de Instagram @bunamx enlaza a buna.mx (directo o vía agregador). Sin evidencia directa.
2. El "chat" de "Echemos el cafecito virtual" podría ser WhatsApp o Shopify Inbox. Sin evidencia.

### NO VERIFICADO

1. Ritmo de publicación en ninguna red (frecuencia de posts/Reels/videos).
2. Contenido concreto de Instagram: bio, seguidores, seguidos, verificación, formatos, captions, Reels, stories destacadas, product tagging / tienda de Instagram, link de bio.
3. Existencia o no de cuenta de TikTok de Buna México, página de Facebook orgánica, canal de YouTube, Pinterest o cuenta activa de X/Twitter (@buna_mx, última evidencia 2014).
4. Creativos, copy, presupuesto, vigencia y resultados de las campañas Meta observadas por UTM; no se consultó ninguna biblioteca de anuncios.
5. Existencia de newsletter, códigos de descuento, landings de promo con URL propia, MSI o promo de Buen Fin en algún canal de Buna.
6. Resolución de la discrepancia 15% (home) vs. micro-descuento en fichas ($350→$335, etc.); requiere recorrer el checkout.
7. Dirección exacta de La Tostadora: las fuentes difieren (Dr. Lucio 181 vs. Doctor Erazo 172, Doctores).
8. Página "Somos BUNA" (su apertura devolvió 429; no se reintentó).
9. Si el pie de página de buna.mx enlaza a redes sociales (el rastreo de la home no incluyó esa zona).

---

## 8. Fuentes consultadas y límites

### Fuentes consultadas (13 nov 2026)

1. https://buna.mx/ — home de la tienda (lectura de texto, 19:20 UTC).
2. https://www.instagram.com/bunamx/ — perfil de Instagram: apertura devolvió 429; no se reintentó.
3. https://buna.mx/blogs/info/como-es-el-ciclo-del-cafe-de-buna — artículo del blog (vía búsqueda).
4. Búsquedas públicas (13 nov 2026): `Buna café especialidad México buna.mx Instagram`; `instagram.com "buna" café "buna.mx" perfil`; `"Buna" café TikTok Facebook YouTube "La Tostadora"`; `"@bunamx" Instagram Buna café seguidores`; `Buna café TikTok "bunamx" OR "buna.mx" video`; `Buna café Facebook página YouTube canal "buna.mx" Buen Fin`; `"buna.mx" OR "Buna" café "Buen Fin" descuento promoción noviembre 2026`; `"bunamx" reel OR reels OR "Cuentos ricos" Instagram Buna`; `"Buna" "café rico" Facebook página WhatsApp newsletter suscripción`.
5. Fuentes de terceros citadas: MexBest (1 oct 2026 y 23 jul 2025), revista Laguna n.º 01 (mayo 2020) y n.º 04 (jun 2020), InStyle (18 oct 2025), CDMX Secreta (20 sep 2023), Hotbook, pos.do (1,567 reseñas Google de Buna 42), Poblanerías (2 oct 2021), Excélsior (18 mar 2014), Local.mx (23 abr 2020), SmartFood (30 mar 2021), The Happening (31 ene 2022), Revista Flow (15 abr 2025).
6. URLs de producto con UTM (vía índice de búsqueda): Café Dalia y Miel Apis Inmunis (ver §2.1 y §2.2).

### Límites de lo verificado

- **Sin navegador en vivo:** no se pudo recorrer el feed de Instagram, ver stories destacadas, reproducir el video de la home ni abrir la página "Somos BUNA". **No hay capturas de pantalla.** Todo lo reportado es texto obtenido por lectura de páginas y búsqueda.
- **Límite 429 del lector de páginas:** durante la sesión el servicio de lectura devolvió error 429 (máximo de peticiones excedido) en dos aperturas: el perfil de Instagram https://www.instagram.com/bunamx/ y la página "Somos BUNA" (enlace desde la home). Esas dos aperturas quedan pendientes; no se reintentaron por instrucción de no repetir la petición bloqueada.
- **Instagram no devuelve el feed en lectura de texto (y aquí ni siquiera el perfil):** por eso el ritmo, los formatos, los captions, los seguidores y la bio de Instagram quedan como NO VERIFICADO y no se estimaron.
- **Búsqueda pública ruidosa:** "Buna" colisiona con otras marcas (Bunacafe.col en Colombia, Bunna Café en Guatemala, Buna en otros países). Solo se usaron resultados que mencionan explícitamente `buna.mx`, `@bunamx` o `@buna_mx`; el resto se descartó como no pertinente.
- **UTM vía índice de búsqueda:** las campañas Meta se conocen por sus parámetros en URLs indexadas, no por haber visto los anuncios. No se afirma nada sobre creativos, copy, presupuesto o vigencia.
- **Sin inicio de sesión ni interacción:** no se siguió ninguna cuenta, no se enviaron mensajes, no se reprodujeron videos, no se inició ninguna compra y no se consultaron bibliotecas de anuncios. No se extrajeron datos personales en masa ni se rastreó la actividad de ninguna persona fuera de su perfil; las únicas personas nombradas son los fundadores (Lalo Pérez Varona, Ana Elena) en su condición pública de fundadores, citados por medios de terceros.
- **Cifras:** las únicas métricas en este informe son las citadas con fuente y fecha (precios de fichas; 1,567 reseñas Google de Buna 42 en pos.do; IDs de campaña/anuncio de Meta). No se reportan seguidores, likes, alcance, reproducciones ni tasas de ninguna publicación de la marca, porque no se observaron.

### Recomendación de seguimiento (para el equipo, no ejecutado por este frente)

Para cerrar los huecos, hace falta una pasada con navegador en vivo sobre: feed de Instagram @bunamx (últimos 30 días: formatos, frecuencia, captions, highlights, product tagging, link de bio), confirmación/descarte de TikTok y de la página de Facebook, los creativos de las dos campañas Meta (Dalia e "Extranjeros en México"), la página "Somos BUNA", el pie de página de buna.mx (enlaces sociales) y un recorrido de checkout para resolver la discrepancia del 15% de suscripción. Con eso se puede medir ritmo real y completar el análisis de estructura/CTA por pieza.
