# Análisis de la landing MetaPro Summit (evento.metapro.academy/summit)

Fecha: 7 de septiembre de 2026. Base para la nueva landing Summit 2026 (5º aniversario).

## 1. Dónde vive la landing actual

| Campo | Valor |
|---|---|
| Plataforma | GoHighLevel (GHL), subcuenta DEFI HOUSE SL (`kfKaFrSWBIS0536cPtFb`) |
| Funnel | "EVENTO FREEDOM" (`SZ34NZdyinc9t9mor5Gr`), dominio evento.metapro.academy |
| Paso / página | "Evento SUMMIT" → `/summit`, página `4WlB18Lv6wdNFNSf5ixY` (última edición 04/08/2026) |
| Páginas hermanas | `/summit-gracias` (gracias), `/summit-ext` (variante externa), `/summit25-grabaciones` |
| Tipo de paso | optin_funnel_page, con pagos en modo live (venta de entradas dentro de GHL) |
| Tracking | GTM-585V6RM, Meta Pixel 145195601562174, Cookiebot |
| Admisión ligada | Funnel "Agendamiento de llamadas": `/rellena-admision-summit`, `/admision-summit-sabado`, `/admision-summit-domingo` |

La página en sí no se puede renderizar desde este entorno (bloqueo de red al dominio) y la API pública de GHL no expone el HTML de la página. La estructura de abajo se reconstruye a partir de la transcripción "Summit 2025" del Google Doc "SUMMIT 2026" (carpeta 5.SUMMIT/2026), de las secciones globales del funnel y del inventario de assets del KB.

## 2. Sistema visual del funnel (secciones globales)

- Fondo negro (`var(--black)`) en cabecera y bloque de compra; texto blanco.
- Acento dorado: `#BA9349` (dominante), `#c29b43`, `#d9a464`. Navy puntual `#01082a`.
- Tipografía por variables del builder (`--headlinefont` / `--contentfont`), no fijada en las secciones globales.
- Cabecera con vídeo Vimeo (player 1051107432) en una de las variantes.
- Footer específico "Footer evento summit" + "footer evento global summit" con enlace a metapro.academy/aviso y disclaimer legal.
- El sistema aprobado para landings nuevas (LANDINGS_FACTORY) es Source Serif 4 + Libre Franklin, paleta navy/oro/marfil en oklch. Es el mismo universo cromático que la landing actual.

## 3. Estructura actual (Summit 2025), sección a sección

| # | Sección | Contenido actual | Elementos visuales |
|---|---|---|---|
| 0 | Masthead | Logo + CTA | — |
| 1 | Hero | Antetítulo "5º aniversario · Madrid, 14-15 nov (Palacio de la Prensa)" · H1 "METAPRO SUMMIT 2026" · sub "Convención Anual de la Comunidad Líder en Finanzas Descentralizadas" · claim "Dos días que transformarán tu futuro financiero" · CTA "Reserva tu entrada ahora (Solo 500 plazas)" | Fila de fotos de ponentes |
| 2 | ¿Por qué no puedes faltar? | 4 argumentos (aprender en vivo · comunidad · oportunidades · celebración) | 4 bloques |
| 3 | Una experiencia mucho más completa | Acceso anticipado a estrategias, materiales, grabaciones, networking, VIP | Texto |
| 4 | Programa especial 5º aniversario | Conferencias · Workshops · Paneles · Networking · nota "programa definitivo más adelante" | 4 bloques |
| 5 | Ponentes | Profesores MetaPro + invitados + bio Ángel (Forbes, TED) | Grid de fotos |
| 6 | Una cita para celebrar | Texto de comunidad | — |
| 7 | ¿Cómo quieres vivir el evento? | 3 entradas: Online 49→24 € · General 149→97 € · VIP 297→225 € | Tarjetas de precio |
| 8 | Beneficios de las entradas | Lista mezclada (workbook, comunidad privada, grabaciones 1 año, guía, merchandising, primeras filas, Q&A, desayuno, cena-cóctel) | Lista |
| 9 | Últimas entradas a precio reducido | Urgencia early bird + CTA | CTA |
| 10 | Horarios | Check-in 09:00 · inicio 10:00 · comida 14-16 · tarde 16:00 · fin 19-20 h | Lista |
| 11 | FAQ | Dónde · se graba · General vs VIP · un solo día · horarios | Acordeón |
| 12 | Cierre | "No dejes que te lo cuenten" · 500 plazas · CTA | CTA |
| 13 | Comunidad | Galería de fotos | Galería |
| 14 | Otras ediciones | Galería ediciones anteriores | Galería |
| 15 | Footer | Legal + aviso | — |

Problemas detectados en la versión actual (el propio doc los lista): mezcla 4º y 5º aniversario, fechas distintas en varios bloques, horarios inconsistentes, beneficios repetidos entre Online/General/VIP, bloque de ponentes incompleto.

## 4. Nueva estructura (copy "LANDING SUMMIT 2026" del doc) y mapeo

| Sección nueva | Cambio respecto a la actual |
|---|---|
| Hero | Mismo esqueleto. Claim nuevo: "2 días para seguir mejorando como inversor". |
| Este año, más estrategia, más IA y más patrimonio | Sustituye a "¿Por qué no puedes faltar?". Introduce la nueva visión. |
| Tu patrimonio es mucho más que tu dinero (4 capitales) | Sección NUEVA. 4 cuadros: financiero · físico · cognitivo · emocional y social. |
| Qué vas a trabajar en Summit'26 | Sustituye a "Experiencia más completa". 4 ejes: DeFi · IA · tokenización · gestión patrimonial. |
| Programa especial 5º aniversario | Igual (4 formatos). |
| Aprende junto a quienes ya lo están aplicando | Ponentes: profesores + invitados. Lista de invitados aún con huecos. |
| La gran cita anual de la comunidad | Sustituye a "Una cita para celebrar". Galería Summit'25. |
| ¿Cómo quieres vivir Summit'26? | Se ELIMINA la entrada Online. Quedan General (149→97 €) y VIP (297→225 €), early bird hasta 1 de octubre. Beneficios ya separados por modalidad. |
| Horarios | Cerrados: 09:00-09:45 check-in · 10:00 inicio · 14-16 comida · 16:00 tarde · 20:00 fin. |
| FAQ | Cambio de fondo: el evento NO se graba (antes sí). Entradas no reembolsables. |
| Cierre | Igual. |
| Otras ediciones · Comunidad | Galería + 4 vídeos (Workshop BCN, Dubái'26, Croacia'26, Dubái'25). |

## 5. Datos pendientes de cerrar antes de construir

1. Merchandising en entrada General: marcado "POR CONFIRMAR".
2. Invitados: "DOCTOR LONGEVIDAD" y "INVITADO EXPERTO IA" sin nombre; confirmar Eric Sánchez, Juanma Pincho, José Luis Cava, Miguel Ángel Sepúlveda, Arantxa Coca, Toño Álvarez.
3. Olga Vázquez aparece como profesora pero no tiene foto en el inventario. Ángel Pardo tampoco tiene URL válida de foto en el inventario (sí en metaproacademy.es).
4. Vídeo "Mastermind Dubái'26" no está en el inventario de assets (sí Dubái'25, Croacia'26, Workshop BCN, Summit'25).
5. Confirmar que 500 plazas y early bird hasta el 1 de octubre son ciertos (la escasez solo se muestra si es real).
6. Decidir destino del CTA: checkout GHL actual (producto General / VIP) y página de gracias `/summit-gracias`.

## 6. Pasos recomendados

1. Captura de referencia: pantallazo full-page de `/summit` en escritorio y móvil (o clon de la página en GHL) para fijar el diseño de partida. Desde este entorno no se puede abrir el dominio.
2. Cerrar el copy en el Google Doc "SUMMIT 2026": resolver los 6 puntos pendientes y marcar la versión como final.
3. Construir el mapa sección a sección (tabla del punto 4) con texto viejo → texto nuevo, listo para pegar.
4. Preparar assets: fotos de los 8 profesores + invitados (mismo encuadre y tratamiento), galería Summit'25, 4 vídeos, portada summit.
5. Construir. Dos vías:
   - A) Clonar la página `/summit` en GHL como nuevo paso, sustituir textos, precios, ponentes y FAQ, y eliminar la tarjeta Online. Mantiene el checkout y el tracking actuales. Es la vía más rápida y fiel al "usar la landing como base".
   - B) Construir un HTML nuevo con LANDINGS_FACTORY (tokens metapro, macroestructura no usada: Split Studio, Narrative Workflow y diagnostic-funnel ya están gastadas), publicado en lp.metapro.academy, con los CTA apuntando al checkout de GHL. Más diseño, más control, pero el pago sigue viviendo en GHL.
6. QA: sin scroll horizontal a 320/375/414/768/1440, ningún CTA a dos líneas en móvil, todas las imágenes cargan, checkout de principio a fin, UTMs llegan al CRM, disclaimer y "entradas no reembolsables" visibles, ninguna cifra sin fuente.
7. Publicar, redirigir `/summit` (o renombrar el paso), actualizar `/summit-gracias` y registrar la versión final en el KB (Inventario de pruebas → Oferta).

## 7. Análisis visual (capturas aportadas el 07/09/2026: hero, por qué no faltar, beneficios, programa, ponentes)

### Sistema visual real
- Paleta: navy profundo (hero y bandas oscuras), navy medio (secciones), negro puro en "Ponentes", oro/tostado `#BA9349`–`#C9A063` como único acento, blanco para texto.
- Tipografía: display serif de alto contraste en cursiva y mayúsculas para todos los títulos; subtítulos serif bold en oro; cuerpo sans grotesca; leads en sans bold oro.
- Componentes: barra superior informativa (aniversario / lugar y fechas), logo + "SUMMIT'26", composición recortada de 8 ponentes con Ángel en el centro y línea de suelo dorada, botón oro con texto blanco y microcopy de escasez, filetes horizontales oro y gris alternados, iconos lineales dentro de cuadrado con borde oro, tarjetas 2×2 con relleno tostado sólido y radio grande, carrusel de un ponente por vista.
- Layout: contenedor ~1200 px, títulos alineados a la izquierda, párrafos a todo el ancho, mucho aire vertical, sin masthead sticky ni CTA intermedio entre el hero y (presumiblemente) los precios.

### Lo que funciona y se conserva
1. Hero: barra de datos arriba, logo de edición, subtítulo, composición de ponentes, claim + CTA con escasez. Es la pieza más fuerte de la página.
2. Paleta navy + oro: reconocible y coherente con Freedom y el sistema de landings.
3. Filetes finos en oro como separadores y los iconos lineales en cuadrado con borde: ligeros y premium.
4. Bloque de autoridad de Ángel con sellos Forbes y TED.

### Fallos a corregir en la nueva versión
1. Logo del hero sobre un rectángulo navy más claro que el fondo: se ve la caja de la imagen. Usar PNG transparente o igualar el fondo.
2. Títulos en serif cursiva y mayúsculas en todas las secciones: pesados, difíciles de leer y contrarios a la regla de la casa "sin cursivas en titulares". Reservar la cursiva al h1 o eliminarla.
3. Fondos incoherentes: hero navy, secciones navy medio, "Beneficios" partido en dos tonos, "Ponentes" en negro puro. Fijar dos tonos (navy y navy profundo) alternados y una sola banda clara para la autoridad.
4. Medida de lectura de ~1150 px en "Por qué no puedes faltar": líneas demasiado largas. Limitar a ~70 caracteres.
5. Tarjetas de programa con relleno tostado sólido: título blanco cursivo sobre tostado no cumple contraste AA y el bloque pesa demasiado. Pasar a tarjeta oscura con borde oro y título en oro.
6. Ponentes en carrusel de uno en uno: baja densidad, foto en blanco y negro frente a color en el hero, y el texto de Ángel queda junto a la foto de otro ponente. Sustituir por rejilla de 8 profesores + fila de invitados, todas en color y mismo encuadre. Marco Ferreiro es un resto de 2025.
7. Icono y texto de "grabaciones" en Beneficios: en 2026 no se graba. Eliminar.
8. Sin CTA entre el hero y los precios: añadir CTA tras Programa y tras Ponentes, y barra CTA fija en móvil.
9. Tono del copy actual ("queremos vivirlo contigo", "será brutal"): por debajo del posicionamiento premium. El copy nuevo del doc ya lo corrige.

### Pendiente de ver
Resto de ponentes, "Una cita para celebrar", tarjetas de precios, lista de beneficios por entrada, urgencia, horarios, FAQ, cierre, galerías, footer, la página tras el CTA (checkout) y la versión móvil del hero y de los precios.

## 8. Análisis visual, segunda tanda (precios, horarios + FAQ, cierre + comunidad, otras ediciones + footer)

### Precios
- Dos tarjetas (General / VIP) con cabecera de color, precio tachado en rojo, banda "OFERTA EARLY BIRD" en condensada, 9 filas de beneficios con check verde / aspa roja y botón "COMPRAR MI ENTRADA".
- Fallos: aparece un tercer oro (amarillo en General, tostado en VIP) y la VIP no se distingue como opción recomendada; el tachado rojo y los iconos verde/rojo rompen la paleta y leen a outlet; la primera fila de General es un aspa roja (empieza en negativo); hay una línea violeta perdida bajo "Asientos reservados"; no figura la fecha límite del early bird; sigue "grabaciones durante un año", que en 2026 desaparece.
- La lista de 2026 ya viene separada por modalidad (General 4 puntos, VIP 7). Diseño propuesto: dos tarjetas con el mismo oro, VIP con borde oro y etiqueta "Recomendada", precio oficial en gris tachado sin rojo, early bird en oro con "hasta el 1 de octubre", solo lo que incluye cada una (sin aspas), botón oro en ambas y microcopy "Entradas no reembolsables" bajo el botón.

### Horarios y FAQ
- "¡No esperes más y reserva tu entrada!" es texto, no botón: urgencia sin CTA.
- Tres versiones distintas del horario en la misma página (bloque Horarios: fin 19:00 · FAQ: sábado hasta 20 h, domingo 18/19 h · copy nuevo: fin 20:00). Errata "chekin".
- FAQ numerada en desorden (5, 1, 2, 3, 4), todas las respuestas abiertas (sin acordeón), "¿Se grabará?" responde que sí (contradice 2026) y la respuesta de "un solo día" es coloquial.
- El bloque de horarios y el footer usan una segunda sans (Poppins) distinta a la del resto: dos familias sans en la misma página.

### Cierre y comunidad
- El cierre en caja con borde oro, titular oro + blanco y CTA idéntico al hero es el mejor componente de la segunda mitad. Se conserva.
- Tras el cierre hay una banda vacía de ~80 px con cambio de tono: espacio muerto.
- "Comunidad" muestra 6 vídeos-testimonio reales (alumnos con acreditación en photocall MetaPro) sin nombre ni rol y después del CTA final: la prueba social llega cuando el visitante ya ha decidido. Debe subir antes de los precios y llevar nombre + perfil.

### Otras ediciones y footer
- "Otras ediciones" muestra tres vídeos de Freedom (Bilbao, Málaga, Madrid '25), no del Summit. Existe vídeo del Summit 2025 en el inventario: es el que debe ir aquí.
- Footer: logo, ©2026, "prohibida la entrada a menores", disclaimer y banda oro con el aviso de riesgo. Sobra la nota "* Datos extraídos de un grupo de inversores… 6 meses": es un resto de Freedom que no referencia nada en esta página. Falta enlace visible a aviso legal / privacidad / cookies (solo "este link" sin estilo).

### Inconsistencias transversales confirmadas
1. Tres estilos de título: serif cursiva mayúsculas (secciones), serif cursiva frase ("Comunidad:", "Preguntas frecuentes"), serif redonda mayúsculas (cierre).
2. Tres tonos de oro y dos familias sans.
3. Restos de 2025 y de Freedom: Marco Ferreiro, vídeos Freedom, nota de 6 meses, grabaciones, 4º aniversario.
4. Ningún CTA entre el hero y los precios; ninguna prueba social antes de los precios; sin masthead ni barra fija.

## 9. Orden de secciones propuesto para Summit'26

1. Masthead sticky (logo Summit'26 + fechas + CTA "Reservar entrada").
2. Hero (conservado): barra de datos, logo, subtítulo, ponentes, claim nuevo + CTA.
3. Este año: más estrategia, más IA y más patrimonio (introducción de la nueva visión).
4. Tu patrimonio es mucho más que tu dinero: cuatro capitales (2×2, iconos lineales en cuadrado con borde oro, numerales I–IV).
5. Qué vas a trabajar en Summit'26 (4 ejes) + CTA.
6. Programa especial 5º aniversario (4 tarjetas oscuras con borde oro).
7. Ponentes: rejilla de 8 profesores + fila de invitados, color, mismo encuadre. Banda clara de autoridad para Ángel (Forbes, TED).
8. La gran cita anual: galería Summit'25 + vídeo Summit 2025 + testimonios con nombre (la prueba, antes del precio).
9. Entradas General / VIP (rediseñadas) + horarios en una sola versión + "no reembolsables".
10. FAQ en acordeón, sin numerar, con la respuesta honesta sobre grabaciones.
11. Cierre en caja con borde oro + CTA.
12. Comunidad MetaPro: 4 vídeos (Workshop BCN, Dubái'25, Croacia'26, Dubái'26 si se aporta).
13. Footer con legal completo y enlaces a aviso, privacidad y cookies.
14. Barra CTA fija en móvil.

## 10. Revisión de los heros nuevos del diseñador (móvil y escritorio)

### Bloqueante
- **Fechas:** los diseños dicen "15 y 16. NOV". El copy aprobado, el inventario del KB y la landing actual dicen **14 y 15 de noviembre**. En 2026 el 14 es sábado y el 15 domingo; 15-16 sería domingo-lunes y el copy habla de "cena-cóctel el sábado". Hay que fijar la fecha oficial antes de seguir.

### Copy
- El claim sigue siendo el de 2025 ("Dos días que transformarán tu futuro financiero. ¡Queremos vivirlo contigo!"). El aprobado para 2026 es "2 días para seguir mejorando como inversor".
- Subtítulo y etiqueta de aniversario correctos.

### Composición de ponentes
- Ahora son 9 personas; el copy lista 8 profesores. Confirmar quién es la novena y que la selección coincide con la lista final.
- Tratamiento fotográfico desigual: temperaturas de color distintas (chaqueta roja, fondos cálidos y fríos), escalas incoherentes (la persona de camisa rosa parece lejana; la de camisa celeste, más cercana que la fila delantera), alturas de cabeza dispares y halo en los recortes de pelo. Pedir una gradación común (sombras frías hacia navy, saturación contenida), escala por filas (trasera menor, delantera mayor) y cabezas alineadas por fila.

### Mejoras conseguidas respecto al hero actual
- Logo sin caja de fondo.
- Fecha en recuadro con borde: más visible.
- Claim en serif redonda, no cursiva; cursiva solo en subtítulo y fecha. Es la dirección tipográfica a extender al resto de la página.
- CTA tostado con texto navy: mejor contraste que el blanco anterior.
- Versión móvil bien resuelta: apilado claro y CTA a todo el ancho.

### Para la construcción
- Si el hero se entrega como una sola imagen, el texto no es seleccionable, no indexa, no escala por breakpoints y no se puede cambiar sin volver al diseñador. Pedir capas: fondo con focos (JPG), composición de ponentes (PNG transparente, en dos tamaños), logo Summit'26 (SVG o PNG), y el texto se construye en HTML.
- En móvil el CTA queda al final del hero; asegurar que entra en el primer viewport o cubrirlo con la barra fija.
