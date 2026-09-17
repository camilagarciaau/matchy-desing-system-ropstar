# Swipe Deck

## Onboarding intro

Before the deck starts, show a one-time intro screen explaining the gesture:

- A sample card with a dashed vertical divider down the middle, a hand icon with an X on the left ("NO ME GUSTA" / "Skip") and a hand icon with a heart on the right ("ME GUSTA" / "Add to list"), each with a small directional arrow.
- Copy stating how many items are coming: "With {N} choices, we'll get a good sense of your style."
- An "Entendido" ("Got it") button inside the card to dismiss the explanation.
- A "Siguiente" ("Next") CTA below the card to actually start the deck.

## Loading state

Instead of a generic spinner, show a single rotated card (using the same peeking-card stack treatment) with a short fashion quote centered on it (e.g. attributed to a designer), while the first batch of items loads.

## Header

The deck lives inside a persistent header, not a standalone full-screen view:

- Left: profile icon, filter icon.
- Center: Ropstar wordmark logo.
- Right: saved-list icon (heart) — shows the user's running list of liked items.
- Below the deck: a text link ("Regresar a Ropstar.co" / "Back to Ropstar.co") as a secondary way out of the swipe flow, separate from the header nav.

## Interaction

- Swipe right (or tap the like button) to add an item to the user's "buy later" list, swipe left (or tap the dislike button) to skip it.
- Tapping the card itself (not swiping) is reserved for opening product details — the gesture should be wired up, but the actual product detail view isn't being built yet.
- `react-tinder-card` handles the drag gesture and swipe-out animation.
- The stack shows the current card on top with 2 cards peeking behind it, offset and using `matchy-color-panna-yellow` and `matchy-color-disruptive-lilac` as the peeking card backgrounds.
- A progress bar at the bottom fills based on how many cards have been reviewed out of the total in the session.

## Product info

Below each card, show: item name, price, and size (e.g. "Blazer fluido verde militar / $42.000 / Talla M") — pulled from the same mock data as the image.

## Data

Each card needs an id, a product image, name, price, and size. Every item always has a real photo — there's no per-card missing-image state to design for. Real product photos are supplied separately — add them to the project's assets folder and wire them into the mock session data (no backend for this showcase).

## States

| State | Behavior |
|---|---|
| Default | Card visible, draggable |
| Swiping | Card follows the drag gesture with rotation (`react-tinder-card` default) |
| Swiped out | Card animates off-screen, next card in the stack becomes active |
| Empty | The user has reviewed every item in the full inventory — show an empty state message |

**Empty state copy** (per the Content foundation's empty-state pattern): "That's everything for now — check back later for more."

## Controls

| Control | Icon | Default style | Pressed / last-action style |
|---|---|---|---|
| Undo | `RotateCcw` (`lucide-react`), `matchy-icon-size-md` | Outlined circle, `matchy-color-cream-beige` background, `matchy-color-brick-denim` border, dark icon | — (utility action, no persistent pressed state) |
| Dislike | `X` (`lucide-react`), `matchy-icon-size-lg` | Outlined circle, `matchy-color-cream-beige` background, `matchy-color-brick-denim` border, dark icon | Filled circle, `matchy-color-brick-denim` background, white icon |
| Add to list | `Heart` (`lucide-react`), `matchy-icon-size-lg` | Outlined circle, `matchy-color-cream-beige` background, `matchy-color-brick-denim` border, dark icon | Filled circle, `matchy-color-brick-denim` background, white icon |
| Buy now | Shopping bag icon (`lucide-react` `ShoppingBag`), `matchy-icon-size-lg` | Outlined circle, `matchy-color-cream-beige` background, `matchy-color-brick-denim` border, dark icon | Included in the layout now, but not functional yet — no checkout flow behind it |

- **Undo** reverts the last swipe action (bring back the previous card, undo the like/skip). This is a new 3rd control alongside dislike/add-to-list.
- The filled state briefly appears on whichever of dislike/add-to-list was just used (tapped or triggered via swipe), as a visual confirmation of the last action before the card animates out — this also doubles as an accessibility cue, giving non-visual-gesture users clear feedback on what just happened.
- All controls trigger the same outcome as their equivalent gesture (swipe for like/dislike) — this is also the accessible path for anyone who can't perform a drag gesture.

## Motion

- Card swipe-out transition: `matchy-motion-base` (200ms), `matchy-easing-standard`.
- Respect `prefers-reduced-motion`: skip the card fly-out animation, but keep the functional outcome (card removed, progress updated) — the swipe result matters more than the flourish.

## Accessibility

- All buttons need accessible names ("Add to list", "Skip this item", "Undo last action", "Buy now") — icon alone isn't enough.
- The dislike/add-to-list buttons are not a fallback, they're a first-class way to use the deck — required for anyone who can't perform a swipe gesture.
- Don't rely on the swipe gesture alone to convey progress — the progress bar and remaining-count give non-gesture users the same context.
- The pressed/last-action button fill is a visual confirmation cue — pair it with an `aria-live` announcement (e.g. "Added to list" / "Skipped") so screen reader users get the same feedback.
