# Foundations vs Swipe Deck — inconsistencias

Comparación de las páginas en `src/pages/foundations/*` (y los tokens que documentan) contra el Swipe Deck en Patterns → Playground (`src/components/patterns/swipe-deck/*`, `src/pages/patterns/playground.tsx`). Solo listado; sin proponer fixes.

Sources checked: Color, Typography, Spacing, Radii, Elevation, Motion, Icons (plus Content and Logo where they intersect the pattern).

## Elevation

- Foundations documenta **`matchy-elevation-2`** como “Swipe card (active/top of stack)”; el swipe aplica **`elevation-3`** al card shell.
- Además el card añade sombras hardcodeadas (`0 12px 28px…`, `0 2px 6px…`) fuera de la escala.
- Controles usan `drop-shadow` custom + `elevation-2`; peeks usan `elevation-1` (eso sí calza con “cards at rest”).
- A11y de Elevation: no basar estado solo en sombra / contraste de superficie elevada — los botones cream sobre fondo cream del deck dependen casi solo de la sombra para verse.

## Radii

- Foundations: **cards → `matchy-radius-md` (12px)**; **modals/sheets → `lg` (16px)**.
- El swipe usa **`matchy-radius-lg`** en card, peeks, overlay y stage.
- El contenedor del deck usa Tailwind `rounded-xl`, no un token Matchy de radii.

## Spacing

- Escala documentada (`space-xs`…`3xl`, gutters) casi no se usa: paddings/gaps van en utilidades Tailwind (`px-4`, `py-5`, `gap-4`, `mt-8`, `space-y-3`).
- `gap-4` (16px) entre like/dislike cumple el mínimo de 8px (`space-sm`), pero no referencia el token.
- Touch target: controles `size-14` (56px) sí cumplen el mínimo 44px documentado.

## Color

- Pressed / active usa `text-white` en vez del token de contraste documentado (`matchy-color-typography-and-icon-contrast` / cream).
- Footer “Back to Ropstar.co” usa `text-matchy-leather/70` (opacidad ad-hoc) en lugar del token subtle o un rol semántico.
- Tokens semánticos documentados poco o nada usados en el pattern: p. ej. `accent-highlight` (se usa el primitivo `brick-denim`), `background-default`, `shopping`, status backgrounds.
- Overlay con `color-mix` + blur sobre leather: no está definido como token de superficie en Color.
- Botones cream sobre fondo cream del root: mismo color de superficie que el background default — el par cream/cream no aparece como pairing de UI contrastada en Accessibility (el borde se apoya en sombra).

## Typography

- El swipe **no usa** las clases/tokens de type scale (`matchy-heading-*`, `matchy-label-*`, `matchy-paragraph`, `matchy-button-*`, `matchy-emotional-*`).
- Tipografía ad-hoc: `text-lg` / `text-sm` / `text-xs` + `font-semibold` / `font-medium` / `italic`.
- Quotes de loading en itálica: no hay estilo itálico en la type scale.
- Momento emocional de discovery (loading / match): Foundations reserva **Halaney / Grand Hotel** para frases cortas de match; el swipe no lo usa.
- Nombre de producto y precio no mapean a Label 2 / Label 3 documentados.
- CTAs “Got it” / “See saved clothes” no usan `matchy-button-primary`.
- Párrafo del empty state centrado: Foundations tipografía dice **no centrar** texto de lectura largo.

## Content (voz, rules, terminología)

- Writing rules: **sentence case**, no ALL CAPS — onboarding pone **DISLIKE / LIKE** en `uppercase`.
- CTA rules: verbo + objeto directo — **“Got it”** es vago frente a ese patrón.
- Terminología: usar **“Save”**, no favorite/list variants — el swipe dice “Add to list”, “See saved clothes”, “Added to list”, “Saved list…”.
- Empty pattern documentado: qué falta + acción positiva (ej. “No matches yet — swipe…”); el copy actual (“That's everything for now…”) no sigue esa estructura.
- Links: Content pide **bold** en el texto del link; Typography dice no usar underline para énfasis. “View this item” va **underline** y no bold, y no es un link real.
- Alt text: Content pide describir ítem con detalle (ej. talla); el alt es solo `item.name`.

## Icons

- Foundations pide tamaños del scale (`sm/md/lg`) y preferiblemente el sistema `MatchyIcon` + colores `icon-default` / `icon-contrast`.
- Like/dislike/`RotateCcw` usan Lucide directo con `size-6` (24px ≈ `lg`) — tamaño OK, pero sin el componente/tokens de color en pressed (`text-white` otra vez).
- Restart del playground usa icono **14px** (`size-3.5`), por debajo del mínimo documentado (`sm` = 16px).

## Motion

- Variables `--swipe-deck-motion` / easing se declaran pero el feedback de botones es `transition-none` (consciente); poco uso real de `motion-fast/base/slow` y `easing-enter/exit` en el pattern.
- `prefers-reduced-motion` sí se respeta en loading y `flickOnSwipe` — alineado con Motion a11y (mantener drag funcional).

## Logo

- Sin uso del logo/lockup en el swipe; no hay inconsistencia directa (solo ausencia de marca visual Ropstar dentro del deck, más allá del texto “Back to Ropstar.co”).

## Resumen por severidad percibida

**Fuertes (chocan con un token/uso explícito):** elevation del card top (`2` vs `3` + extras); radii de card (`md` vs `lg`); type scale ignorada; ALL CAPS en onboarding; terminología Save vs “list”; underline en “View this item”; `text-white` vs contrast token.

**Medias:** spacing sin tokens; empty/Got it copy; alt incompleto; Restart icon menor a 16px; cream-on-cream + sombra.

**Menores / alineadas:** gap ≥ 8px; touch ≥ 44px; icon size 24px en controles; primary yellow en CTAs principales; reduced-motion en drag.
