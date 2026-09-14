# Matchy — Spacing, Radii, Elevation & Motion Foundations

---

## 1. Spacing & Layout

**Base unit: 4px.** Every spacing value is a multiple of 4, matching Gestalt's boint system.

| Token | Value |
|---|---|
| `matchy-space-xs` | 4px |
| `matchy-space-sm` | 8px |
| `matchy-space-md` | 16px |
| `matchy-space-lg` | 24px |
| `matchy-space-xl` | 32px |
| `matchy-space-2xl` | 48px |
| `matchy-space-3xl` | 64px |

**Layout:**
- Mobile gutter: `matchy-space-md` (16px) · Desktop gutter: `matchy-space-lg` (24px)
- Max content width: 1200px
- Grid: 4 columns mobile / 8 tablet / 12 desktop

**Accessibility:**
- Interactive elements need a minimum touch target of 44×44px (WCAG 2.5.5/2.5.8), even if the visible icon or label is smaller — pad the tap area, don't shrink it.
- Keep at least `matchy-space-sm` (8px) between adjacent tappable elements (e.g. like/dislike buttons) to avoid accidental taps.

---

## 2. Radii

| Token | Value | Typical use |
|---|---|---|
| `matchy-radius-none` | 0px | Full-bleed images |
| `matchy-radius-sm` | 8px | Chips, tags, small badges |
| `matchy-radius-md` | 12px | Cards, inputs |
| `matchy-radius-lg` | 16px | Modals, sheets |
| `matchy-radius-full` | 9999px | Pills, avatars, primary CTAs |

**Accessibility:**
- Radius has no direct a11y impact, but if a container uses `overflow: hidden` with a large radius, make sure the focus ring on any element inside it isn't visually clipped.

---

## 3. Elevation

Pinterest's own Gestalt leans flat — depth comes mostly from warm surface color and generous rounding, not shadows, since their masonry grid relies on the content itself for visual interest. Matchy diverges slightly here on purpose: the swipe deck needs a physical "stacked cards" feel, so a light, Material-style elevation scale is used for that interaction, while the rest of the UI stays close to flat.

| Token | Shadow | Use |
|---|---|---|
| `matchy-elevation-0` | none | Default surface |
| `matchy-elevation-1` | `0 1px 2px rgba(0,0,0,0.08)` | Cards at rest |
| `matchy-elevation-2` | `0 4px 8px rgba(0,0,0,0.12)` | Swipe card (active/top of stack) |
| `matchy-elevation-3` | `0 8px 24px rgba(0,0,0,0.16)` | Modals, sheets |

**Accessibility:**
- Never use elevation alone to communicate state (e.g. an error card) — pair it with color and an icon/label, since shadow differences aren't perceivable to low-vision users.
- Keep enough contrast between an elevated surface and the background behind it so the edge is distinguishable without relying on the shadow.

---

## 4. Motion

| Token | Duration | Use |
|---|---|---|
| `matchy-motion-fast` | 120ms | Micro-interactions (button press, toggle) |
| `matchy-motion-base` | 200ms | Standard transitions (hover, tab switch) |
| `matchy-motion-slow` | 320ms | Modals, sheets, page transitions |

**Easing:**
- `matchy-easing-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — default for most transitions
- `matchy-easing-enter`: ease-out — elements entering the screen
- `matchy-easing-exit`: ease-in — elements leaving the screen

**Accessibility:**
- Respect `prefers-reduced-motion` — the system setting people with motion sensitivity turn on to reduce or remove animations — by disabling or shortening decorative animation (page transitions, parallax) for users who have it on, but keep essential functional feedback (e.g. the swipe card's response to a drag) since removing it would break the core interaction.
