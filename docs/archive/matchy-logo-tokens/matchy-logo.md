# Logo

> **Asset note:** the token is what's documented and referenced throughout the system. The underlying file (`black initial.svg`, `initial cream.svg`, `yellow initial.svg`, `black logo.svg`, `cream logo.svg`) is an implementation detail — those 5 files are supplied separately for Cursor to bring into the project's assets folder.

## Lockup

The primary lockup combines the "ROPSTAR" wordmark with the "Я" monogram, set in the brand's custom logotype — distinct from Manrope/Degular, which are reserved for UI text.

## Monogram

The standalone "Я" mark is used wherever space is too tight for the full wordmark: favicon, app icon, avatar placeholder, loading state.

## Color variants

**Monogram** — use only where the full wordmark won't fit or would be illegible at that size: favicon, app icon, avatar placeholder, loading state, or any UI slot under ~32px wide. If there's enough room for the wordmark to stay legible, use the wordmark instead.

| Token | File | Use |
|---|---|---|
| `matchy-logo-monogram-black` | `black initial.svg` | Default, on light backgrounds |
| `matchy-logo-monogram-cream` | `initial cream.svg` | On dark or colored backgrounds |
| `matchy-logo-monogram-yellow` | `yellow initial.svg` | Accent / marketing |

**Wordmark**

| Token | File | Use |
|---|---|---|
| `matchy-logo-wordmark-black` | `black logo.svg` | Default, on light backgrounds |
| `matchy-logo-wordmark-cream` | `cream logo.svg` | On dark or colored backgrounds |

Only the black and cream variants exist for the full wordmark — yellow is a monogram-only accent, not a full lockup color. In core product UI (nav bars, headers), stick to black or cream; the yellow monogram is for marketing/decorative use only.

## Clear space

Keep a minimum clear space around the logo equal to the height of the "Я" monogram, on all sides. No other text, icon, or edge should sit inside that zone.

## Minimum size

Don't scale the full wordmark below the point where "ROPSTAR" stays legible (roughly 80px wide in digital contexts). Below that, switch to the monogram alone instead of shrinking the full lockup further.

## Usage

| ✅ Do | ❌ Don't |
|---|---|
| Use the monogram alone in tight spaces (nav icon, favicon, loading state) | Stretch or distort the logo |
| Use an approved color variant that has enough contrast against its background | Recolor outside the 5 approved files |
| Keep the clear space intact | Add shadows, gradients, or other effects to the logo |
