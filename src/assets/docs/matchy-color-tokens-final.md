# Matchy — Color

## Overview
Our color palette represents Matchy's full range of options — a thoughtful combination of warm, vibrant, and neutral tones. This page covers primary/secondary usage, accent and status colors, and accessibility guidance for applying color correctly.

## Color Palette (Primitives)

| Swatch | Name | Hex | Token |
|---|---|---|---|
| 🟧 | Cream Beige | #FFF5EC | `matchy-color-cream-beige` |
| 🟫 | Clay | #D9CEC4 | `matchy-color-clay` |
| 🟡 | Panna Yellow | #FFE136 | `matchy-color-panna-yellow` |
| 🟣 | Disruptive Lilac | #CBB8FF | `matchy-color-disruptive-lilac` |
| 🔴 | Wool Coral | #FF6872 | `matchy-color-wool-coral` |
| 🟠 | Brick Denim | #F05A1A | `matchy-color-brick-denim` |
| ⬛ | Leather | #383838 | `matchy-color-leather` |

## Usage

### Primary color
The primary color is displayed most frequently across screens and components, used to convey high-emphasis actions.

| Token | Hex |
|---|---|
| `matchy-color-primary` | #FFE136 |

### Secondary color
Used alongside primary for lower-emphasis actions and supporting UI.

| Token | Hex |
|---|---|
| `matchy-color-secondary` | #383838 |

### Accent color
Offers ways to accent the UI when primary doesn't fit the layout, or to highlight something important. Split into two roles:

| Role | Token | Hex |
|---|---|---|
| Useful accent | `matchy-color-accent-useful` | #D9CEC4 |
| Highlight accent | `matchy-color-accent-highlight` | #F05A1A |

### Shopping color
Primary color to indicate shopping-related features.

| Token | Hex |
|---|---|
| `matchy-color-shopping` | #CBB8FF |

### Background and status color
Used behind text or applied to other elements to deliver specific messages: information, success, warning, and error.

| Name | Token | Hex |
|---|---|---|
| Default | `matchy-color-background-default` | #FFF5EC |
| Info | `matchy-color-background-info` | #CBB8FF |
| Success | `matchy-color-background-success` | #B8E434 |
| Warning | `matchy-color-background-warning` | #EF8F28 |
| Error | `matchy-color-background-error` | #D32F2F |
| Neutral | `matchy-color-background-neutral` | #D9CEC4 |

### Typography and icon color
Used on text elements such as headings and body copy.

| Name | Token | Hex |
|---|---|---|
| Default | `matchy-color-typography-and-icon-default` | #383838 |
| Subtle | `matchy-color-typography-and-icon-subtle` | #D9CEC4 |
| Contrast | `matchy-color-typography-and-icon-contrast` | #FFF5EC |

## Accessibility

Aligns with [WCAG 2.2](https://www.w3.org/TR/WCAG22/), which establishes the standard for contrast between text and its background. Don't use color exclusively to convey meaning — color should only be used as an enhancement.

### Audited pairs — with takeaways

*Pares sin uso real en el sistema (n/a) fueron removidos de la tabla; quedan solo las combinaciones con una decisión o nota real detrás.*

| Color A | Color B | Contrast | WCAG | Takeaway |
|---|---|---|---|---|
| Cream Beige | Panna Yellow | 1.22:1 | 🚫 Fail | Don't use together. |
| Cream Beige | Success | 1.38:1 | 🚫 Fail | Cream Beige is the default page background — Success appears as small accent fills (badges/icons), not as text over full cream areas, so this isn't a practical risk. |
| Cream Beige | Clay | 1.44:1 | 🚫 Fail | Cream Beige is the default background — Clay is used as a surface/fill on top of it, not as text. |
| Cream Beige | Disruptive Lilac | 1.65:1 | 🚫 Fail | Cream Beige is the default background — Lilac appears as accent fills, not as text over full cream areas. |
| Cream Beige | Warning | 2.26:1 | 🚫 Fail | Cream Beige is the default background — Warning appears as accent fills, not as text over full cream areas. |
| Cream Beige | Wool Coral | 2.61:1 | 🚫 Fail | Used only within photography/imagery — not a UI text-and-background pairing. |
| Cream Beige | Brick Denim | 3.16:1 | ⚠️ Large text/UI | Appropriate for headline-weight titles, not body copy. |
| Cream Beige | Error | **4.63:1** (corrected) | ✅ AA | |
| Cream Beige | Leather | 10.91:1 | ✅ AAA | Default, always-safe text/background pairing. |
| Panna Yellow | Leather | 8.98:1 | ✅ AAA | Reliable pairing — dark text on Primary yellow. |
| Success | Leather | 7.93:1 | ✅ AAA | Reliable pairing — dark text on Success fills. |
| Clay | Leather | 7.58:1 | ✅ AAA | Reliable pairing — dark text on Clay fills. |
| Disruptive Lilac | Leather | 6.62:1 | ✅ AA (not AAA) | Strong pairing — dark text on Lilac fills. |
| Wool Coral | Leather | 4.18:1 | ✅ AA | Passes for normal text on Coral fills. |
| Clay | Disruptive Lilac | 1.15:1 | 🚫 Fail | Very low contrast — don't place directly adjacent without a separating border or neutral divider. |
| Clay | Warning | 1.57:1 | 🚫 Fail | Low contrast — avoid direct adjacency without a separating border. |
| Clay | Brick Denim | 2.20:1 | 🚫 Fail | Low contrast — avoid direct adjacency without separation. |
| Clay | Error | 3.22:1 (recalculated) | ⚠️ Large text/UI | Avoid as a direct text pairing. |
| Disruptive Lilac | Warning | 1.37:1 | 🚫 Fail | Very low contrast — avoid direct adjacency without separation. |
| Brick Denim | Leather | 3.45:1 | ⚠️ Large text/UI | Appropriate for headline-weight titles, not body copy. |
