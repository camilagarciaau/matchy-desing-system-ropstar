# Changes to swipe (foundations alignment)

Changelog of updates made to align Patterns → Playground Swipe Deck with Foundations. Also notes documentation added where the pattern needed an explicit exception.

## Code — Swipe Deck

### Elevation
1. Active product photo card uses **`matchy-elevation-4`** (full-bleed image depth token).

### Radii
4. Product photo cards / peeks / overlays stay at **`matchy-radius-lg` (16px)**.
5. Deck frame (`.swipe-deck-root`) uses **`matchy-radius-md` (12px)** instead of Tailwind `rounded-xl`.

### Spacing
6. Component paddings/gaps use spacing tokens (`--matchy-space-xs` … `--matchy-space-xl`, `--matchy-touch-target-min`) via CSS / inline styles.
7. Like / dislike / undo row gap uses **`matchy-space-sm`**.

### Color & controls
3. Heart, X, and undo controls have a **leather/secondary border** (`1.5px`).
8. Pressed / `:active` text (and icon contrast) use **`matchy-color-typography-and-icon-contrast`** (via `MatchyIcon` color `white` → contrast cream), not raw `text-white`.
9. “Back to Ropstar.co” uses **`matchy-label-3`** + **`matchy-color-typography-and-icon-default`** (no ad-hoc `/70` opacity).
10. Semantic tokens wired in:
    - `background-default` — deck surface / control fill
    - `accent-highlight` — pressed control fill (replaces primitive brick-denim class)
    - `shopping` — deck border + left accent on product footer
    - `background-info` — spinner track tint
    - `primary` — primary CTAs
    - `secondary` — control/peek borders and peek fills

### Typography & content
12. Type scale classes: `matchy-paragraph`, `matchy-label-2`, `matchy-label-3`, `matchy-button-primary`, `matchy-emotional-sm`.
13. Loading spinner shows a fashion quote; attribution uses **`matchy-emotional-sm`**.
14. Empty-state body is **left-aligned** (`matchy-paragraph`).
15. Removed ALL CAPS / `uppercase` from onboarding labels.
16. CTA **“Start swiping”** (verb + object) replaces “Got it”.
17. Terminology **Save**: “Save item”, “See saves”, live “Saved” / “Saves has…”.
18. Empty copy: **“No matches left — open your saves to keep shopping.”** + **See saves**.
19. **View this item** is a real `<a>`, bold via `matchy-label-2`, with underline.
20. Image `alt` is **`${name}, ${size}`**.

### Icons
21. Controls use **`MatchyIcon`** (`heart`, new `close`, new `undo`) at size **`lg`**, with default/contrast color tokens.
22. Playground Restart uses **`MatchyIcon` undo at `sm` (16px)**.

### Motion
23. Card shell and control press feedback use **`matchy-motion-instant`** (`transition: none`) instead of a hard-coded exception.

## Code — Icons foundation

- Added tokens: `matchy-icon-close` (X), `matchy-icon-undo` (RotateCcw).

## Documentation updates

| Page | What was documented |
|------|---------------------|
| **Elevation** | Scale includes `matchy-elevation-4` for full-bleed swipe product photos |
| **Radii** | `md` = cards/inputs/**swipe deck frame**; `lg` = modals/sheets/**swipe product photo cards** |
| **Color** | “Swipe overlay blur” — leather + `blur(16px)` as pattern overlay, not a color token |
| **Typography** | Italic allowed on short swipe loading quotes only |
| **Motion** | Scale includes `matchy-motion-instant` (`transition: none`) for gesture / mid-drag feedback |

## Files touched

- `src/components/patterns/swipe-deck/swipe-deck.tsx`
- `src/components/patterns/swipe-deck/swipe-deck.css`
- `src/pages/patterns/playground.tsx`
- `src/foundations/icons/index.tsx`
- `src/pages/foundations/elevation.tsx`
- `src/pages/foundations/radii.tsx`
- `src/pages/foundations/color.tsx`
- `src/pages/foundations/typography.tsx`
- `src/pages/foundations/motion.tsx`
- `docs/changes-to-swipe.md` (this file)
