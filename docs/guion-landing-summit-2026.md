# Guion de construcción · Landing MetaPro Summit'26

Mapa sección a sección para maquetar la nueva landing sobre la base de la actual. Copy: `docs/copy-summit-2026.md` (canónico, no se reescribe). Diseño de partida: análisis en `docs/analisis-landing-summit.md`.

Convenciones de toda la página:
- Dos fondos alternados: navy (`#0B1A3D`) y navy profundo (`#050D2B`). Una sola banda clara (marfil) para autoridad/ponentes. Nada de negro puro.
- Un solo oro (`#BA9349`; hover `#C9A063`). Se elimina el amarillo de la tarjeta General.
- Títulos en serif redonda (sin cursiva), sentence case o mayúsculas según la sección, siempre el mismo criterio. Cursiva solo para énfasis dentro de párrafo.
- Una sola sans para el cuerpo (la que use el chasis del funnel). Se retira Poppins y la grotesca condensada.
- Medida de lectura máxima 64ch. Escala móvil: cuerpo 16-17 px, títulos 28-32 px.
- CTA principal siempre el mismo texto: **RESERVA TU ENTRADA AHORA** → ancla `#entradas`. En las tarjetas de precio, **COMPRAR ENTRADA GENERAL / COMPRAR ENTRADA VIP** → checkout GHL.
- Iconos: lineales, en cuadrado de borde oro (estilo actual de "Beneficios"). Sin emojis.
- Sin escasez que no sea cierta: "500 plazas" y "hasta el 1 de octubre" solo si se confirman.

| # | Sección | Fondo | Componente | Copy | Assets | Notas de diseño |
|---|---|---|---|---|---|---|
| 0 | Masthead sticky | navy profundo 90% + blur | Logo Summit'26 pequeño a la izquierda · "14 y 15 nov · Madrid" en el centro (oculto <560 px) · botón oro "Reservar entrada" a la derecha | — | logo Summit'26 (PNG/SVG) | Nuevo. No existe en la actual. Botón `white-space: nowrap`. |
| 1 | Hero | imagen | Imagen única del diseñador (escritorio y móvil, fecha 14-15, claim nuevo) SIN botón pintado. Debajo, en HTML: botón oro + microcopy "Solo 500 plazas disponibles." | HERO | hero-desktop.jpg (≥1920 px) · hero-mobile.jpg (≥1080 px) | `alt`: "MetaPro Summit'26, 14 y 15 de noviembre, Palacio de la Prensa, Madrid". H1 en HTML (visualmente oculto). Fondo de página igual al navy del arte. |
| 2 | Este año, más estrategia… | navy profundo | Título 2 líneas + lede en bold + 2 párrafos, columna de 64ch alineada a la izquierda | ESTE AÑO… | — | Sustituye a "¿Por qué no puedes faltar?". Sin filetes entre párrafos. |
| 3 | Cuatro capitales | navy | Título + intro + rejilla 2×2 de tarjetas oscuras (fondo navy profundo, borde oro 1 px, radio 14 px) con numeral I–IV en oro, título en serif y una línea de texto. Frase de cierre en bold centrada | TU PATRIMONIO… | 4 iconos lineales (moneda, corazón/pulso, cerebro, personas) opcionales | Sección NUEVA. Es el corazón del reposicionamiento: darle aire. En móvil, una columna. |
| 4 | Qué vas a trabajar | navy profundo | Título + 4 columnas con icono en cuadrado de borde oro, título corto en oro y texto. CTA centrado debajo | QUÉ VAS A TRABAJAR… | 4 iconos lineales | Reutiliza el componente de "Beneficios" actual sin los separadores en cruz. **CTA nº 2.** |
| 5 | Programa 5º aniversario | navy | Título + lede + 4 tarjetas 2×2 oscuras con borde oro (NO relleno tostado). Nota final en cursiva pequeña | PROGRAMA ESPECIAL… | — | Título de tarjeta en oro, serif redonda. Contraste AA garantizado. |
| 6 | Ponentes | **marfil (única banda clara)** | Título + intro. Rejilla de 8 profesores (4×2 escritorio, 2×4 móvil): foto color, mismo encuadre 4:5. Bloque "Invitados especiales" con el texto de "iremos desvelando". Sello Forbes 100 Creativos 2022 + TED junto a Ángel | APRENDE JUNTO A… | fotos: Carmen, David, Xavi, Joan, Jesús, Pablo Ríos (inventario) · **faltan Ángel y Olga** · sellos Forbes/TED | **Pendiente decisión: mostrar nombres bajo las fotos o solo fotos.** Los invitados no se publican hasta que Ángel lo indique. Sin carrusel. |
| 7 | La gran cita anual | navy profundo | Título + 3 párrafos cortos + galería de 8 fotos (4×2, 1:1) + 6 vídeos-testimonio en lite-embed (3×2) | LA GRAN CITA… | galeria-evento-01…08 · 6 vídeos Vimeo de la landing actual (pedir IDs) | La prueba social va AQUÍ, antes del precio. Testimonios sin nombre si así se decide. |
| 8 | Entradas | navy | Título. 2 tarjetas: General y VIP con el mismo oro; VIP con borde oro y etiqueta "Recomendada". Precio oficial en gris tachado (sin rojo), early bird grande en oro, línea "Hasta el 1 de octubre". Solo lo que incluye (checks oro, sin aspas). Botón por tarjeta. Microcopy bajo cada botón: "Entradas no reembolsables" | ¿CÓMO QUIERES VIVIR… | — | `id="entradas"`. Botones → checkout GHL de cada producto. En móvil, VIP primero. |
| 9 | Horarios y dudas | navy | Tira compacta bajo las tarjetas: 5 líneas de horario en dos columnas + "¿Tienes alguna duda?" con el email enlazado | HORARIOS | — | Una única versión de horario en toda la página (fin 20:00). |
| 10 | FAQ | navy profundo | Acordeón `<details>` cerrado por defecto, sin numerar, 5 preguntas | PREGUNTAS FRECUENTES | — | Respuesta de grabaciones: "No". |
| 11 | Cierre | navy | Caja con borde oro 1 px (componente actual), titular oro + blanco, párrafo, frase de plazas en bold, CTA centrado | CIERRE | — | **CTA nº 3.** |
| 12 | Otras ediciones | navy profundo | Título + vídeo Summit 2025 en lite-embed (grande) + fila de 4-7 fotos de ediciones anteriores | OTRAS EDICIONES | vídeo kMAf6FJut54 · galeria-evento-09…15 | Se retiran los vídeos de Freedom. |
| 13 | Comunidad | navy | Título + 4 vídeos lite-embed (2×2) con pie: Workshop Barcelona · Mastermind Dubái'25 · Mastermind Croacia'26 · Mastermind Dubái'26 | COMUNIDAD | 1WTZpAySzgU · GlKfKmMMoaQ · z1GfcGWi_UU · **Dubái'26: falta URL** | Si no llega la URL de Dubái'26, se publican 3 y se dice. |
| 14 | Footer | navy profundo | Logo MetaPro, ©2026, "Prohibida la entrada a menores de 18 años", disclaimer de riesgo en banda oro, enlaces a Aviso legal · Privacidad · Cookies | texto legal actual, sin la nota "* Datos extraídos…" | logo-metapro | Enlace de riesgos con estilo de enlace visible. |
| 15 | Barra CTA fija (móvil) | navy profundo 95% | Botón oro a todo el ancho "RESERVA TU ENTRADA AHORA" → `#entradas`, visible tras pasar el hero, oculta al llegar a #entradas | — | — | Nuevo. `padding-bottom` en body para no tapar el footer. |

## Assets que faltan (bloquean secciones)
1. Hero definitivo escritorio + móvil con fecha 14-15 y claim nuevo (sección 1).
2. Fotos de Ángel Pardo y Olga Vázquez con el mismo encuadre que el resto (sección 6).
3. IDs de los 6 vídeos-testimonio Vimeo de la landing actual (sección 7).
4. URL del vídeo Mastermind Dubái'26 (sección 13).
5. Iconos lineales para cuatro capitales y cuatro ejes, o se resuelven con SVG propios (secciones 3 y 4).

## Decisiones pendientes de Ángel
- Vía de construcción: clonar la página en GHL (recomendada) o HTML nuevo con LANDINGS_FACTORY.
- Nombres bajo las fotos de profesores: sí / no.
- "Doctor longevidad": nombre o se omite de la lista interna.
- Confirmar 500 plazas y early bird hasta el 1 de octubre como datos reales.
- Corregir ya el hero móvil de producción (4º aniversario, 15-16 nov) o esperar a la nueva landing.

## Estado de construcción (07/09/2026, noche)

- Vía elegida: HTML nuevo con LANDINGS_FACTORY. Slug `summit26`. Borrador privado: https://wixyn-landings-factory.vercel.app/borradores/metapro/summit26
- Código versionado en `landing/summit26.html`.
- QA propia: sin scroll horizontal a 320/375/414/768/1440, ningún CTA a dos líneas en móvil, consola sin errores, sin cursivas en titulares, sin colores ni fuentes literales fuera de tokens, una sola banda marfil, cierre en banda profunda.
- Provisional hasta recibir material: hero en HTML (sin la imagen del diseñador), botones de compra enlazando a la landing actual `evento.metapro.academy/summit`, sección de ponentes sin fotos ni nombres, Comunidad con 3 vídeos (falta Dubái'26), galería con fotos genéricas de eventos.
- Aviso: la colección "Inventario de pruebas" del KB está archivada desde el 19/08; `obtener_pruebas` devuelve inventario vacío. Los datos de esta landing salen del doc definitivo aprobado por Ángel.

## Imágenes ajustadas (07/09/2026, v2 del borrador)

- Hero: foto de escenario MetaPro (Ángel ante el público, rótulo M dorado) con degradado a navy + logotipo oficial Summit'26 (asset del inventario, fundido con `mix-blend-mode` y máscara radial para eliminar la caja de fondo).
- Tira de prensa bajo el hero (La Vanguardia, ABC, El País, Forbes, El Español, Expansión, Negocios, elEconomista), asset del inventario.
- Banda marfil: tarjeta del fundador (foto de Ángel con el libro, asset de Freedom) + fila de 7 retratos del claustro e invitado (Carmen Blanco, Xavi Molleví, David Bello, Jesús de Pablos, Joan Caules, Pablo Ríos, Éric Sánchez) sin nombres, según instrucción.
- Galería "Otras ediciones": 6 fotos de eventos MetaPro sin marca Freedom visible, todas por debajo de 700 KB.
- Todos los assets se sirven desde el CDN de GHL (`storage.googleapis.com/msgsndr/...`), el mismo almacén que usa el inventario.
- Pendiente de calidad: los retratos de Joan Caules, Pablo Ríos y Éric Sánchez están en PNG de 2–2,5 MB; conviene reexportarlos en JPEG en la mediateca de GHL. Falta el retrato de Olga Vázquez.
