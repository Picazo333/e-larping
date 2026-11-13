# F4T3 (FATE™) — Redes sociales + embudo

| Campo | Dato |
|---|---|
| **Sitio investigado** | https://www.f4t3.co/ (tienda mexicana de moda / streetwear, Shopify) |
| **Fecha de la investigación** | 13 de noviembre de 2026 |
| **Frente** | F1.4 — Redes sociales + embudo (Fase 1, WO-E-LARPING) |
| **Método** | Solo fuentes públicas: lectura de texto del sitio propio y de sus perfiles enlazados (`browser.open`) y búsqueda pública (`browser.search`). Sin inicio de sesión, sin seguir cuentas, sin mensajes, sin contacto. Sin navegador en vivo: **no hay capturas de pantalla**; todo lo observado se describe en texto. |
| **Etiquetas usadas** | **OBSERVADO** = visto directamente con URL y fecha · **INFERIDO** = deducción con evidencia y confianza declarada · **NO VERIFICADO** = no se pudo constatar con las fuentes disponibles |

## Resumen ejecutivo

- F4T3 opera públicamente con **dos redes confirmadas**: **Instagram (@f4t3.co, verificada, 164,831 seguidores)** y **YouTube** (al menos un video de campaña enlazado desde la propia home). TikTok probablemente existe con el mismo handle, pero **no quedó confirmado** con una visita al perfil.
- **No hay rastro observable de Facebook, X/Twitter, Pinterest ni WhatsApp** en el sitio ni en búsqueda pública. Eso no prueba que no existan, solo que la tienda no los enlaza ni aparecen.
- El embudo observable es corto y directo: **red → home de la tienda (o video de campaña) → landing de promo → ficha de producto con mecánica de bundle → checkout**. La palanca central de conversión es la **promo 6X1 en playeras** (6 por $1,299) reforzada por el **Buen Fin 13–17 nov 2026** (hasta 80% off, 12 meses sin intereses) y por **prueba social** ("MÁS DE 168,783 PERSONAS USAN FATE™" + reseñas de clientes bajo el handle @f4t3.co).
- **Límite mayor del informe:** no se pudo constatar el ritmo de publicación ni transcribir captions de Instagram — la lectura del perfil devolvió solo metadatos (sin publicaciones, bio completa ni fechas). Tampoco se pudo abrir la landing de promo ni el video de TikTok citado: el lector de páginas devolvió error 429 (límite de peticiones) al final de la sesión. Ver §8 y §9.

---

## 1. Instagram — la red principal

- **Handle:** @f4t3.co — **OBSERVADO.** URL del perfil: https://www.instagram.com/f4t3.co/
- **Nombre visible:** "FATE." — **OBSERVADO.**
- **Tipo de cuenta:** business — **OBSERVADO.**
- **Verificación:** cuenta verificada — **OBSERVADO.**
- **Seguidores:** 164,831 · **Seguidos:** 77 — **OBSERVADO** (lectura del perfil, 13 nov 2026). Es la única cifra de audiencia de redes que se pudo constatar con fuente directa.
- **Sitio web en bio:** http://f4-t3.co — **OBSERVADO.** Ese dominio resuelve en la misma tienda: al abrirlo se obtiene un contenido idéntico al home de https://www.f4t3.co/ (lectura 13 nov 2026, 19:08 UTC). Es decir, la bio de Instagram apunta al dominio corto `f4-t3.co`, que es un alias del dominio principal `f4t3.co`.
- **Cómo enlaza hacia la tienda:** la bio enlaza directo al home de la tienda (sin intermediario tipo Linktree visible en lo consultado) — **OBSERVADO** el destino; **INFERIDO** (confianza media) que no usa agregador de enlaces, porque el campo "Website" del perfil apunta directo al dominio de la tienda.
- **Presencia en el propio sitio:** la home de f4t3.co enlaza a Instagram en su sección "RESEÑAS DE CLIENTES" y muestra el handle @f4t3.co como rúbrica de esa sección — **OBSERVADO** (home, 13 nov 2026). Es la única red social nombrada con su handle dentro de la tienda. Esto convierte a Instagram en el canal de **prueba social**: las reseñas se presentan bajo la identidad de Instagram de la marca, no como texto anónimo.
- **Tipo de contenido que publica:** **NO VERIFICADO.** La lectura del perfil no devolvió publicaciones, Reels, captions, stories destacadas ni fechas. No se puede afirmar frecuencia, formato dominante ni temas de los posts con la evidencia disponible.
- **Ritmo de publicación:** **NO VERIFICADO** (mismo motivo). No se reporta ninguna frecuencia estimada: inventarla violaría la regla del frente.

### Lo que sí se puede decir del contenido (INFERIDO, confianza media-baja)

Los ejes de campaña visibles en la tienda y en YouTube son, con alta probabilidad, los mismos que alimentan Instagram, porque la marca reutiliza los mismos nombres y piezas en todos sus puntos de contacto observados:

| Eje | Dónde se observó | Uso probable en Instagram |
|---|---|---|
| EFFORTLESS (campaña, "behind the brand") | Home + video de YouTube (§2) | Contenido de proceso / editorial de campaña |
| WRITTEN IN THE STARS (New Arrivals FW26) | Home | Lanzamientos y re-stocks |
| Not All Angels (best seller) | Home, ficha de producto | Producto héroe / best sellers |
| Destino Studios (longsleeve a rayas) | Home, ficha de producto | Novedad con descuento |
| 6X1 + Buen Fin | Home (hero) | Contenido promocional con urgencia temporal |

Esto es una inferencia de coherencia de marca, **no** una observación de posts. La confirmación exige una revisión visual del feed que este frente no pudo hacer (sin navegador en vivo).

---

## 2. YouTube — canal de campaña / "FATE STUDIOS"

- **Video observado:** "EFFORTLESS — BEHIND THE BRAND" — **OBSERVADO.** URL: https://www.youtube.com/watch?v=67FNT5hpZvo
- **Cómo se encontró:** enlazado desde la sección "BEHIND THE BRAND" de la home de f4t3.co — **OBSERVADO** (la home incrusta la miniatura del video con enlace a YouTube).
- **Descripción textual del video (transcripción literal de la fuente):**

> "Proceso detrás de nuestra campaña EFFORTLESS.
> Una selección de nuestros best sellers, reinterpretados desde la esencia de FATE.
> More to come.
> FATE STUDIOS
> f4t3.co"

Fuente: página del video en YouTube, lectura 13 nov 2026.

- **Análisis de estructura (método Cambridge/reels, aplicado a lo observable):**
  - **Gancho / promesa:** "el proceso detrás de la campaña" — contenido *behind the scenes*, no venta directa. El valor prometido es mirar dentro de la marca.
  - **Cuerpo:** una selección de best sellers "reinterpretados desde la esencia de FATE" — el producto aparece como protagonista editorial, no como catálogo.
  - **CTA:** la descripción cierra con "f4t3.co" (dominio pelado, sin UTM visible en el texto obtenido) y la firma "FATE STUDIOS". El clic lleva a la tienda. No se observó CTA verbal ni tarjeta en el video (no se reprodujo el video; solo se leyó su página).
  - **Serie:** "More to come" indica que el video se plantea como entrega de una serie de contenidos de marca, no como pieza única.
- **Nombre del canal:** **NO VERIFICADO.** La firma "FATE STUDIOS" aparece dentro de la descripción del video, pero la lectura de la página no devolvió el nombre del canal, su handle (@...), su número de suscriptores ni la fecha de publicación. No se afirma que el canal se llame "FATE STUDIOS".
- **Vistas, duración, fecha de publicación, otros videos del canal:** **NO VERIFICADO.**
- **Ritmo de publicación en YouTube:** **NO VERIFICADO.** Con un solo video observado no se puede estimar frecuencia.
- **Papel en el embudo (INFERIDO, confianza media):** YouTube funciona como canal de **profundidad de marca** (branding / consideración), no como canal de venta directa: el video vive incrustado en la home ("BEHIND THE BRAND") y su descripción deriva a la tienda. Es el único contenido de formato largo observado en todo el ecosistema de la marca.

---

## 3. TikTok — existencia probable, no confirmada

- **Evidencia principal:** un video público de TikTok de un tercero menciona el handle de la marca. Caption textual del video (resultado de búsqueda pública, 13 nov 2026):

> "Fate devuélveme mi dinero porfavor @f4t3.co"

  - Autor del video (cuenta de TikTok): @3duant. Métricas publicadas en el resultado de búsqueda: 5,395 me gusta, 246 comentarios.
  - URL del video: https://www.tiktok.com/@3duant/video/7623653860220882184 (no se pudo abrir la página por el límite 429; ver §9).
  - Fecha de publicación del video: **NO VERIFICADA** en la fuente consultada.

- **Qué prueba y qué no prueba:**
  - **INFERIDO (confianza media):** existe una cuenta de TikTok con el handle @f4t3.co. Una mención con @ en TikTok solo puede dirigirse a una cuenta existente en la plataforma, y el handle coincide exactamente con el de Instagram.
  - **NO VERIFICADO:** que esa cuenta sea el perfil oficial activo de la tienda, su número de seguidores, su contenido, su frecuencia de publicación, si tiene link en bio, si usa TikTok Shop o si publica los mismos ejes de campaña.
  - **NO VERIFICADO:** si la tienda enlaza TikTok desde algún lugar. La home de f4t3.co **no** contiene la palabra "TikTok" en el texto rastreado (búsqueda en página, 13 nov 2026). Si TikTok existe como canal oficial, la tienda no lo anuncia en su home.
- **Señal de fricción post-compra (OBSERVADO en el caption citado):** el video es una reclamación pública de reembolso ("devuélveme mi dinero"). Es evidencia de que (a) hay clientes que intentan resolver reembolsos mencionando a la marca en TikTok, y (b) el embudo social de F4T3 tiene una vía de queja visible fuera de sus canales controlados. No se revisaron los comentarios del video ni la actividad de ninguna persona más allá de este video público citado como fuente; no se extrajeron datos personales.
- **Ruido de marca — advertencia importante (OBSERVADO en búsquedas):** la palabra "FATE" está dominada en TikTok y en buscadores por la **fábrica argentina de neumáticos FATE** (cierre de planta en febrero de 2026, ~920 despidos), con varios videos virales de análisis político sobre ese cierre. Esos videos **no** son de la tienda de ropa ni la mencionan. Cualquier medición de "FATE" en TikTok sin filtrar por @f4t3.co / f4t3.co se contamina con esa conversación. Este frente descartó esos resultados como no pertinentes.

---

## 4. Facebook, X/Twitter, Pinterest, WhatsApp y otras redes — sin evidencia

| Red | Estado |
|---|---|
| Facebook | **Sin evidencia.** La palabra "Facebook" no aparece en el texto rastreado de la home (búsqueda en página, 13 nov 2026). Las búsquedas públicas de `FATE "f4t3" Facebook` no devolvieron ninguna página oficial de la tienda. **NO VERIFICADO** si existe una página no enlazada. |
| X / Twitter | **Sin evidencia.** Ninguna mención en el sitio ni en búsquedas públicas. **NO VERIFICADO.** |
| Pinterest | **Sin evidencia.** **NO VERIFICADO.** |
| WhatsApp (canal de atención o ventas) | **Sin evidencia.** No aparece número ni botón de WhatsApp en el texto rastreado de la home. **NO VERIFICADO** si existe en páginas no rastreadas (p. ej., contacto o checkout). |
| Newsletter / email | **Sin evidencia en el texto rastreado** de la home. **NO VERIFICADO** (el rastreo no mostró formulario de suscripción; no se afirma que no exista). |
| TikTok Shop | **Sin evidencia** de tienda dentro de TikTok. **NO VERIFICADO.** |

**Lectura (INFERIDA, confianza media):** el ecosistema social de F4T3 es deliberadamente estrecho: Instagram como canal principal y YouTube como canal de campaña. No hay una estrategia visible de presencia en todas las redes; la concentración está en el canal donde está su audiencia (Instagram, ~165k seguidores).

---

## 5. Embudo comercial — recorrido observable de red → tienda → compra

### 5.1 Ruta 1: Instagram → tienda (ruta principal, INFERIDA a partir de puntos observados)

1. **Descubrimiento en Instagram** — el usuario ve contenido de la marca en @f4t3.co (contenido no verificable en este informe; ver §1). La cuenta es business y verificada.
2. **Bio → tienda** — el enlace de la bio apunta a http://f4-t3.co, que resuelve en el home de la tienda — **OBSERVADO** el destino.
3. **Home con promo activa** — al aterrizar, el usuario ve en el primer pantallazo: banner de Buen Fin (MIPYMES · El Buen Fin, 13 al 17 de noviembre), "PLAYERAS 6X1", "HASTA 80% OFF EN TODO LO DEMÁS" y "HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE" — **OBSERVADO** (13 nov 2026).
4. **Prueba social inmediata** — bajo el hero: "MÁS DE 168,783 PERSONAS USAN FATE™" — **OBSERVADO.** (Nota: es una cifra distinta de los 164,831 seguidores de Instagram; la relación entre ambas cifras **NO ESTÁ VERIFICADA**. No se afirma que el contador del sitio se alimente de seguidores, compradores o ambos.)
5. **Entrada a catálogo por best sellers o por categoría** — "Mas buscados / Best sellers" con el producto héroe "Not All Angels Tee Black & Black" a $1,299.00 en 6X1; categorías: Hoodies, T-Shirts, Sin Mangas, Jeans, Crop / Baby Tee's, Polo, Jackets, Gorras — **OBSERVADO.**
6. **Mecánica de bundle en la ficha de producto** — ejemplos observados:
   - "Not All Angels Tee Black & Black": $1,299.00, **6X1** — 6 playeras por $1,299 (es decir, ~$216.50 por pieza) — **OBSERVADO.**
   - "Destino Studios Striped Longsleeve Ivory w/ Black": $599.00 (antes $1,499.00), 60% OFF, **$419 al llevar 6 o más** — **OBSERVADO.** El descuento por volumen es explícito en la ficha.
7. **Checkout** — tienda Shopify con pago a meses sin intereses (12 MSI) durante el Buen Fin — **OBSERVADO** el ofrecimiento en el hero; el flujo de checkout en sí **NO** se recorrió (no se inició ninguna compra).

### 5.2 Ruta 2: YouTube → tienda (ruta de marca)

1. El usuario ve "EFFORTLESS — BEHIND THE BRAND" (video incrustado en la sección "BEHIND THE BRAND" de la home, o en YouTube) — **OBSERVADO.**
2. La descripción del video cierra con "f4t3.co" — **OBSERVADO.** No hay código de descuento ni UTM visible en el texto obtenido.
3. El aterrizaje es el mismo home con la misma promo de Buen Fin y la misma mecánica 6X1 — **INFERIDO** (el enlace apunta al dominio raíz, no a una landing de campaña específica observable).

### 5.3 Ruta 3: TikTok → tienda (NO VERIFICADA)

Si la cuenta @f4t3.co existe en TikTok, su ruta hacia la tienda no pudo observarse (sin acceso al perfil). El único punto de contacto TikTok → marca observado es inverso: un cliente menciona a la marca para reclamar un reembolso (§3).

### 5.4 Elementos del embudo que SÍ se observaron (y su función)

| Elemento | Función en el embudo | Estado |
|---|---|---|
| Hero de Buen Fin con fecha límite (17 nov) | Urgencia temporal | OBSERVADO |
| 6X1 en playeras ($1,299 por 6) | Aumento de ticket por bundle; ancla de precio por pieza (~$216.50) | OBSERVADO |
| Hasta 80% off en todo lo demás | Amplitud de la oferta; puerta de entrada barata | OBSERVADO |
| 12 MSI | Reducción de fricción de pago | OBSERVADO |
| Contador "168,783 personas usan FATE™" | Prueba social numérica | OBSERVADO (cifra sin verificar su origen) |
| Sección "RESEÑAS DE CLIENTES @f4t3.co" | Prueba social con identidad de Instagram | OBSERVADO |
| Best sellers + categorías en home | Acortar el camino al producto | OBSERVADO |
| "BEHIND THE BRAND" (video YouTube) | Consideración / confianza de marca | OBSERVADO |
| Códigos de descuento alfanuméricos | — | NO OBSERVADO (ningún código visible en lo rastreado) |
| Landing de promo dedicada (URL propia de Buen Fin / 6X1) | — | NO VERIFICADA (los enlaces del hero no se pudieron abrir por el 429; ver §9) |
| Link-in-bio agregador (Linktree y similares) | — | NO OBSERVADO |
| Anuncios (Meta Ads, TikTok Ads) | — | NO VERIFICADO (no se afirma que existan ni que no existan; no se consultó biblioteca de anuncios) |

### 5.5 Lectura del embudo (INFERIDO, confianza media-alta)

El embudo de F4T3 es **monocanal en origen (Instagram), promocional en el medio (bundle + Buen Fin) y de prueba social en el cierre**. No se observó captura de datos previa a la compra (sin newsletter visible), ni retargeting verificable, ni canal de atención conversacional (WhatsApp/DM) anunciado en el sitio. La conversión se juega en tres cosas: que el contenido de Instagram mueva al clic en bio, que la promo 6X1 justifique llevar 6 piezas en vez de 1, y que la fecha límite del Buen Fin cierre la decisión. La fricción visible es reputacional: hay reclamaciones públicas de reembolso en TikTok (§3) y la marca comparte nombre con una empresa en crisis en Argentina, lo que contamina su descubrimiento en buscadores y en TikTok.

---

## 6. Contenidos — ritmos, tipos, temas y ganchos

### 6.1 Ritmos de publicación

**NO VERIFICADO en ninguna red.** No se pudo constatar frecuencia (posts por semana, Reels por mes) en Instagram, YouTube ni TikTok. La lectura del perfil de Instagram no devolvió fechas de publicación y la búsqueda pública no indexa los posts de la cuenta. Cualquier cifra de ritmo sería inventada. **Pendiente para una revisión con navegador en vivo.**

### 6.2 Tipos de contenido

| Tipo | Red | Estado |
|---|---|---|
| Video de campaña / behind the scenes (largo) | YouTube | OBSERVADO (1 video, "EFFORTLESS — BEHIND THE BRAND") |
| Foto de producto / editorial | Instagram | NO VERIFICADO (no se vio el feed) |
| Reels / video corto | Instagram, TikTok | NO VERIFICADO |
| Stories / stories destacadas | Instagram | NO VERIFICADO (no visibles sin app/navegador en vivo) |
| UGC / reseñas de clientes | Instagram → home de la tienda | OBSERVADO como sección en la tienda ("RESEÑAS DE CLIENTES @f4t3.co"); los posts originales en Instagram NO VERIFICADOS |
| Contenido promocional (Buen Fin, 6X1) | Sitio (hero) | OBSERVADO en el sitio; su réplica en redes NO VERIFICADA |

### 6.3 Temas y ganchos recurrentes (observados en sitio + descripción de YouTube)

- **"EFFORTLESS"** — el esfuerzo invisible / la naturalidad como identidad de marca. Gancho de campaña, no de producto.
- **"WRITTEN IN THE STARS"** — destino / estrellas como marco de la colección FW26.
- **"Not All Angels"** — nombre de producto con carga narrativa (ángeles, dualidad), best seller.
- **"Destino Studios"** — submarca / línea con nombre propio dentro del catálogo.
- **"6X1"** — el gancho comercial dominante: multiplicar piezas por el mismo precio.
- **"MÁS DE 168,783 PERSONAS USAN FATE™"** — pertenencia / masa crítica como gancho de confianza.
- **"BEHIND THE BRAND"** — transparencia del proceso como gancho de contenido.

### 6.4 Captions representativos — transcripciones

Solo dos textos pudieron transcribirse con fuente verificable. **No se pudo transcribir ningún caption de Instagram** (el feed no fue accesible en texto).

**A. Descripción del video de YouTube "EFFORTLESS — BEHIND THE BRAND"** (fuente: https://www.youtube.com/watch?v=67FNT5hpZvo, 13 nov 2026):

> "Proceso detrás de nuestra campaña EFFORTLESS.
> Una selección de nuestros best sellers, reinterpretados desde la esencia de FATE.
> More to come.
> FATE STUDIOS
> f4t3.co"

**B. Caption del video de TikTok que menciona a la marca** (fuente: resultado de búsqueda pública, video https://www.tiktok.com/@3duant/video/7623653860220882184, localizado 13 nov 2026; fecha de publicación no verificada):

> "Fate devuélveme mi dinero porfavor @f4t3.co"

(5,395 me gusta, 246 comentarios según el resultado de búsqueda. Es contenido de un cliente, no de la marca; se cita solo como evidencia del handle en TikTok y de fricción post-compra.)

**C. Textos de la tienda que funcionan como copy de embudo** (fuente: https://www.f4t3.co/, 13 nov 2026) — no son captions de redes, pero son el copy que el tráfico social encuentra al aterrizar:

- "PLAYERAS 6X1"
- "HASTA 80% OFF EN TODO LO DEMÁS"
- "HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE"
- "MÁS DE 168,783 PERSONAS USAN FATE™"
- "Mas buscados / Best sellers. Nuestras piezas mas buscadas."
- "New Arrivals / Nuevos productos. Nuestros lanzamientos mas recientes o re-stocks."
- "WRITTEN IN THE STARS"

---

## 7. Análisis estilo Cambridge/reels — qué se puede concluir y qué no

Aplicando el marco de reverse engineering de contenido (ritmo, estructura, CTA) a lo efectivamente observado:

- **Ritmo:** no evaluable. Sin fechas de publicación no hay cadencia que medir. Es el hueco principal de este frente.
- **Estructura del contenido (INFERIDO de las dos piezas observadas):** gancho de marca o de proceso ("detrás de la campaña", "behind the brand") → producto como protagonista editorial (best sellers reinterpretados) → CTA mínimo (el dominio pelado en la descripción; el botón en la bio). Es una estructura de **contenido de marca que vende sin parecer anuncio**, opuesta al formato "oferta directa" del hero de la tienda. La tienda y las redes juegan papeles distintos: la red construye deseo, la tienda cierra con promo.
- **CTA:** el único CTA textual observado en social es "f4t3.co" en la descripción de YouTube y el enlace de bio en Instagram. No se observaron CTAs del tipo "comenta X", "link en bio para el drop", códigos ni "desliza arriba". **NO VERIFICADO** si existen en posts concretos.
- **Coherencia cross-canal (OBSERVADO):** los nombres de campaña y producto son idénticos en la tienda y en YouTube (EFFORTLESS, best sellers, f4t3.co). La marca no fragmenta su mensaje por canal, al menos en lo observable.
- **Lo que falta para cerrar el análisis:** ver el feed de Instagram (formatos, frecuencia, captions, highlights, link de bio completo, tienda de Instagram / product tagging), ver el perfil de TikTok, y medir si el tráfico social aterriza en landings con UTM o en el home genérico.

---

## 8. Lista final — observado / inferido / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

1. Home de https://www.f4t3.co/: hero Buen Fin 13–17 nov, "PLAYERAS 6X1", "HASTA 80% OFF EN TODO LO DEMÁS", "HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE", "MÁS DE 168,783 PERSONAS USAN FATE™", best seller "Not All Angels Tee Black & Black" $1,299 6X1, "Destino Studios Striped Longsleeve Ivory w/ Black" $599 (antes $1,499) / $419 llevando 6+, categorías (Hoodies, T-Shirts, Sin Mangas, Jeans, Crop/Baby Tee's, Polo, Jackets, Gorras), sección "BEHIND THE BRAND" y sección "RESEÑAS DE CLIENTES @f4t3.co".
2. La home enlaza a Instagram (https://www.instagram.com/f4t3.co/) y a un video de YouTube. Las palabras "TikTok" y "Facebook" no aparecen en el texto rastreado de la home.
3. Perfil de Instagram https://www.instagram.com/f4t3.co/: "FATE.", cuenta business, verificada, 164,831 seguidores, 77 seguidos, web en bio http://f4-t3.co.
4. http://f4-t3.co/ resuelve en el mismo home de la tienda (contenido idéntico).
5. Video de YouTube https://www.youtube.com/watch?v=67FNT5hpZvo ("EFFORTLESS — BEHIND THE BRAND") y su descripción textual completa (ver §2 y §6.4A).
6. Video público de TikTok con el caption "Fate devuélveme mi dinero porfavor @f4t3.co" (5,395 me gusta, 246 comentarios según el resultado de búsqueda).
7. Las búsquedas de "FATE" en TikTok y en web están dominadas por la fábrica argentina de neumáticos FATE (cierre feb 2026), no por la tienda de ropa.

### INFERIDO (con evidencia y confianza)

1. Instagram es la red principal de F4T3 (única enlazada por handle desde la tienda + cuenta verificada + ~165k seguidores). Confianza: **alta**.
2. Existe una cuenta de TikTok @f4t3.co (la mención con @ solo puede dirigirse a una cuenta existente; handle idéntico al de Instagram). Confianza: **media**. No se confirma que sea el perfil oficial activo ni su contenido.
3. YouTube es canal de branding/consideración, no de venta directa (video de proceso, CTA solo el dominio). Confianza: **media**.
4. El embudo es: red → bio/enlace → home con promo → bundle 6X1 → checkout con MSI; la urgencia del Buen Fin y la prueba social son los aceleradores. Confianza: **media-alta** (todos los eslabones salvo el primero están observados).
5. Los ejes de campaña del sitio (EFFORTLESS, WRITTEN IN THE STARS, Not All Angels, Destino Studios) se replican probablemente en Instagram. Confianza: **media-baja** (coherencia observada entre sitio y YouTube, sin ver el feed).
6. La tienda no usa agregador tipo Linktree en la bio de Instagram (el campo web apunta directo al dominio). Confianza: **media**.
7. No hay estrategia visible de Facebook, X ni WhatsApp. Confianza: **media** (ausencia en sitio + búsquedas sin resultados; no es prueba de inexistencia).

### NO VERIFICADO

1. Ritmo de publicación en ninguna red (frecuencia de posts/Reels/videos).
2. Contenido concreto de Instagram: formatos, captions, Reels, stories destacadas, product tagging / tienda de Instagram, link de bio completo.
3. Contenido, seguidores, bio y actividad del presunto TikTok @f4t3.co; existencia de TikTok Shop.
4. Nombre del canal de YouTube, suscriptores, fecha y vistas del video EFFORTLESS, y si hay más videos.
5. Existencia o no de página de Facebook, cuenta de X, Pinterest o WhatsApp de atención.
6. Existencia de newsletter, códigos de descuento, landings de promo con URL propia o parámetros UTM.
7. Relación entre "168,783 personas usan FATE™" (sitio) y 164,831 seguidores (Instagram): cifras distintas, origen no verificado.
8. Anuncios pagados (Meta Ads, TikTok Ads): no se consultó ninguna biblioteca de anuncios.
9. Fecha de publicación del video de TikTok citado en §3.

---

## 9. Fuentes consultadas y límites

### Fuentes consultadas (13 nov 2026)

1. https://www.f4t3.co/ — home de la tienda (lectura de texto, 19:07 UTC).
2. http://f4-t3.co/ — dominio de la bio de Instagram (lectura de texto, 19:08 UTC; contenido idéntico al home).
3. https://www.instagram.com/f4t3.co/ — perfil de Instagram (lectura de metadatos del perfil; sin publicaciones devueltas).
4. https://www.youtube.com/watch?v=67FNT5hpZvo — video "EFFORTLESS — BEHIND THE BRAND" (lectura de la página del video).
5. Búsquedas públicas (13 nov 2026): `F4T3 tienda streetwear México Instagram TikTok`; `f4t3.co Instagram @f4t3`; `"f4t3.co" Instagram FATE ropa`; `"FATE" "f4t3" TikTok streetwear Mexico`; `tiktok "@f4t3.co" FATE`; `FATE "f4t3" Facebook tienda ropa México`; `"FATE STUDIOS" YouTube f4t3 EFFORTLESS`; `"f4t3" Instagram reel EFFORTLESS WRITTEN IN THE STARS`; `"instagram.com/f4t3.co" OR "@f4t3.co" reel playera`; `"EFFORTLESS" "BEHIND THE BRAND" FATE video YouTube`; `FATE tienda "f4t3.co" X Twitter WhatsApp contacto`; `"f4t3.co" "Buen Fin" OR "6X1" playeras`; `"FATE" ropa "f4t3" opiniones reseñas tienda en línea México`.
6. Video de TikTok https://www.tiktok.com/@3duant/video/7623653860220882184 — citado solo vía su ficha en resultados de búsqueda (caption y métricas publicados); la página no se pudo abrir (ver límites).

### Límites de lo verificado

- **Sin navegador en vivo:** no se pudo recorrer el feed de Instagram, ver stories destacadas, reproducir el video de YouTube ni abrir el perfil de TikTok. **No hay capturas de pantalla.** Todo lo reportado es texto obtenido por lectura de páginas y búsqueda.
- **Límite 429 del lector de páginas:** al final de la sesión, el servicio de lectura devolvió error 429 (máximo de peticiones excedido) y no se pudieron abrir: la landing de promo 6X1 / 80% off del hero, ni el video de TikTok citado. Esas dos aperturas quedan pendientes; no se reintentaron por instrucción de no repetir la petición bloqueada.
- **Instagram no devuelve el feed en lectura de texto:** el perfil solo expuso metadatos (nombre, verificación, seguidores, web). Por eso el ritmo, los formatos y los captions de Instagram quedan como NO VERIFICADO y no se estimaron.
- **Búsqueda pública ruidosa:** "FATE" colisiona con la fábrica argentina de neumáticos y con otras marcas (Fate Clothing Co. de San Diego, FATED A.O.G., etc.). Solo se usaron resultados que mencionan explícitamente `f4t3.co` o `@f4t3.co`; el resto se descartó como no pertinente.
- **Sin inicio de sesión ni interacción:** no se siguió ninguna cuenta, no se enviaron mensajes, no se reprodujeron videos, no se inició ninguna compra y no se consultaron bibliotecas de anuncios. No se extrajeron datos personales en masa ni se rastreó la actividad de ninguna persona fuera de su perfil; la única mención a un tercero es el video público citado como fuente en §3 y §6.4B.
- **Cifras:** las únicas métricas de audiencia en este informe son las dos citadas con fuente y fecha (164,831 seguidores de Instagram; "168,783 personas" del home). No se reportan likes, alcance, reproducciones ni tasas de ninguna publicación de la marca, porque no se observaron.

### Recomendación de seguimiento (para el equipo, no ejecutado por este frente)

Para cerrar los huecos, hace falta una pasada con navegador en vivo sobre: feed de Instagram @f4t3.co (últimos 30 días: formatos, frecuencia, captions, highlights, product tagging), perfil de TikTok @f4t3.co (confirmar existencia y contenido), canal de YouTube (nombre, suscriptores, catálogo), y las landings del hero (6X1 y 80% off) con sus UTM. Con eso se puede medir ritmo real y completar el análisis de estructura/CTA por pieza.
