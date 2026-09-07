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
