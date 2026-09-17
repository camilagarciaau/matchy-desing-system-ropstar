# Buttons & links — Swipe Deck (Patterns → Playground)

Review of every **button** and **link-like control** in the swipe flow (Patterns → Playground), based only on what the code renders today.

**Findings from the code:**

**Buttons (3)**

1. **Button** (`@/components/ui/button`) — **Start swiping**, **See saves**.
2. **ControlButton** (`@/components/patterns/swipe-deck/control-button`) — circular icon-only Undo / Dislike / Like.
3. **PlaygroundRestart** (`@/components/patterns/playground-restart`) — text + icon **Restart** above the deck.
**Links / link-styled UI (2)**

4. **View this item** — real native `<a href="#playground">` on the active product card footer.
5. **Back to Ropstar.co** — class `.swipe-deck-back-link`, but rendered as a **`<p>`**, not an `<a>` (no `href`, not interactive in code).

Also relevant: `Button` exposes `variant="link"` in `button.tsx`, but **no swipe screen uses that variant**.

---

# Button

Source: `src/components/ui/button.tsx`  
Swipe usage: `OnboardingScreen` (“Start swiping”), `EmptyScreen` (“See saves”).

## 1. Preview

**Live preview (as used in swipe):** full-width or inline primary CTA with Manrope button type class overrides applied via `className` in the swipe screens.

**Ver código** (toggle — source used in swipe):

```tsx
<Button
  type="button"
  className="matchy-button-primary w-full bg-matchy-primary font-normal text-matchy-typography-default hover:bg-matchy-primary/90"
  onClick={onStartSwiping}
>
  Start swiping
</Button>
```

```tsx
<Button
  type="button"
  className="matchy-button-primary self-start bg-matchy-primary font-normal text-matchy-typography-default hover:bg-matchy-primary/90"
  onClick={onSeeSaves}
>
  See saves
  {likedCount > 0 ? ` (${likedCount})` : ""}
</Button>
```

**Base component preview (default variants, no swipe overrides):**

```tsx
<Button>Button</Button>
```

**`variant="link"` exists on the component (not used in swipe):**

```tsx
<Button variant="link">Link-styled button</Button>
```

## 2. Overview

**What it is:** Shared UI button built with `cva` (`buttonVariants`). Renders a native `<button>` by default, or Radix `Slot.Root` when `asChild` is true. Sets `data-slot="button"`, `data-variant`, and `data-size` on the root.

**When to use (in this flow):** Text CTAs with a verb + object — onboarding **Start swiping** and empty **See saves**. Use `variant="link"` only when you need button semantics with link appearance (not currently used in swipe; swipe’s real navigation text uses a native `<a>` or a non-interactive `<p>` — see below).

**Composition / variants (from `buttonVariants` in code):**

| Axis | Values in code | Default |
|------|----------------|---------|
| `variant` | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` | `default` |
| `size` | `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg` | `default` |

**`link` variant classes in code:** `text-foreground underline-offset-4 hover:underline` (still a `<button>` unless `asChild`).

**Swipe-specific note:** The swipe screens do **not** pass `variant` or `size`. They rely on defaults and override look with `className` (`matchy-button-primary`, `bg-matchy-primary`, `font-normal`, etc.).

**States expressed in the shared class string:** `disabled` (`disabled:pointer-events-none disabled:opacity-50`), `focus-visible` ring/border, `aria-invalid` destructive border/ring, plus each variant’s own `hover:` styles. No `pressed` / `data-pressed` API on `Button`.

## 3. Import

```ts
import { Button } from "@/components/ui/button"
```

(`buttonVariants` is also exported from the same module.)

## 4. API / Props

Declared props on `Button` (plus any native `<button>` attribute via `...props`):

| Name | Type | Default | What it does |
|------|------|---------|--------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` (from `VariantProps<typeof buttonVariants>`) | `"default"` | Selects the visual variant class set. |
| `size` | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"default"` | Selects the size class set. |
| `asChild` | `boolean` | `false` | If `true`, renders `Slot.Root` instead of `"button"` and merges props onto the child. |
| `className` | `string` (via `ComponentProps<"button">` / `cn`) | — | Merged into `buttonVariants({ variant, size, className })`. |
| `...props` | `React.ComponentProps<"button">` | — | Forwarded to the root (`type`, `disabled`, `onClick`, `children`, ARIA attrs, etc.). |

In swipe, the props actually passed are: `type="button"`, `className`, `onClick`, and text `children`.

## 5. Accessibility

| Topic | What the code does |
|-------|--------------------|
| Role | Native `<button>` when `asChild={false}` (implicit `role="button"`). With `asChild`, role depends on the child element — not set by `Button`. |
| Accessible name | From `children` text (swipe: “Start swiping”, “See saves…”). No `aria-label` in swipe usage. |
| Keyboard | Native button: Enter / Space activate when focused. No custom key handlers in `Button`. |
| `tabIndex` | Not set by `Button`; browser default (`0` when enabled, skipped when `disabled`). |
| Focus visible | Classes: `outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`. |
| Disabled | Native `disabled` supported via `...props`; styles `disabled:pointer-events-none disabled:opacity-50`. |

## 6. Related

| Component | When to use instead |
|-----------|---------------------|
| **ControlButton** | Circular icon-only Undo / Dislike / Like under the swipe card. |
| **PlaygroundRestart** | Playground-only text+icon reset above the deck. |
| **View this item** (`<a>`) | In-card product deep link (navigation), not a primary filled CTA. |
| **Back to Ropstar.co** | Exit copy under the deck; today a non-interactive `<p>` (see that section). |
| **`Button variant="link"`** | Same `Button` API with link look; still button semantics unless `asChild` wraps an `<a>`. Unused in swipe. |

---

# ControlButton

Source: `src/components/patterns/swipe-deck/control-button.tsx`.  
Styles: `.swipe-deck-control` in `src/components/patterns/swipe-deck/swipe-deck.css`.  
Usage: Undo, Skip (dislike), Save (like) in the deck phase.

Live docs: Components → Buttons (`#control-button`).

## 1. Preview

**Live preview:** 56×56 (`size-14`) circular control; secondary fill; contrast icon; accent-highlight fill when `:active` or `data-pressed="true"`.

**Ver código** (toggle — component definition):

```tsx
function ControlButton({
  label,
  pressed,
  disabled,
  onClick,
  children,
}: {
  label: string
  pressed?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      data-pressed={pressed ? "true" : undefined}
      onClick={onClick}
      onPointerDown={(event) => event.stopPropagation()}
      className="swipe-deck-control pressable inline-flex size-14 items-center justify-center rounded-full disabled:pointer-events-none"
    >
      {children}
    </button>
  )
}
```

**Ver código** (toggle — swipe usage example):

```tsx
<ControlButton
  label="Save item"
  pressed={lastAction === "like"}
  onClick={() => {
    void triggerSwipe("like")
  }}
>
  <MatchyIcon token="matchy-icon-heart" size="lg" color="white" />
</ControlButton>
```

## 2. Overview

**What it is:** Swipe-deck-only circular icon button. Always `type="button"`. Name comes from required `label` → `aria-label`. Optional `pressed` maps to `data-pressed="true"`. `onPointerDown` calls `stopPropagation()` so presses don’t start a card drag.

**When to use:** Only the three deck controls (undo / dislike / like).

**Composition / variants:** No `variant` or `size` props. Visual system is fixed via classes + CSS:

- Layout classes: `swipe-deck-control pressable inline-flex size-14 … rounded-full`
- Default: `--matchy-color-secondary` background, contrast text/icon color, `border: none`, `transition: var(--matchy-motion-instant)`, min touch target tokens
- Pressed / active: `:enabled:active` or `[data-pressed="true"]` → `--matchy-color-accent-highlight` background
- Disabled: `:disabled` keeps secondary background, sets subtle icon/text color, `opacity: 1`; class also adds `disabled:pointer-events-none`

**Children in code:** always a `MatchyIcon` (`matchy-icon-undo` / `close` / `heart`), sometimes with extra `className` (`opacity-40` when undo disabled; `fill-current` when like is pressed).

## 3. Import

```ts
import { ControlButton } from "@/components/patterns/swipe-deck/control-button"
```

## 4. API / Props

Only these props exist on `ControlButton` (no `...rest`, no `className` prop):

| Name | Type | Default | What it does |
|------|------|---------|--------------|
| `label` | `string` | *(required)* | Sets `aria-label` on the `<button>`. |
| `pressed` | `boolean \| undefined` | `undefined` | If truthy, sets `data-pressed="true"` (accent fill via CSS). |
| `disabled` | `boolean \| undefined` | `undefined` | Sets native `disabled`. |
| `onClick` | `() => void \| undefined` | `undefined` | Click handler. |
| `children` | `ReactNode` | *(required)* | Button contents (icons in current usage). |

Hardcoded (not props): `type="button"`, `onPointerDown` stopPropagation, fixed `className` string above.

## 5. Accessibility

| Topic | What the code does |
|-------|--------------------|
| Role | Native `<button>` (implicit `role="button"`). |
| Accessible name | `aria-label={label}` — swipe labels: `"Undo last action"`, `"Skip this item"`, `"Save item"`. |
| Keyboard | Native button activation (Enter / Space). No custom key handlers. |
| `tabIndex` | Not set; browser default. Disabled buttons are not focusable via the `disabled` attribute. |
| Focus visible | **No** `focus-visible` classes on `ControlButton` and **no** `:focus-visible` rules under `.swipe-deck-control` in `swipe-deck.css`. Focus styling is whatever the browser / global CSS provide (none defined for this control in these files). |
| Disabled | `disabled={disabled}` + `disabled:pointer-events-none`; CSS uses subtle contrast token for color. |
| Gesture conflict | `onPointerDown` → `stopPropagation()` so the control doesn’t initiate `react-tinder-card` drag. |

## 6. Related

| Component | When to use instead |
|-----------|---------------------|
| **Button** | Labeled text CTAs (Start swiping, See saves). |
| **PlaygroundRestart** | Demo “Restart” above the playground deck. |
| **View this item** (`<a>`) | Product detail navigation from the card footer. |
| **Back to Ropstar.co** | Exit copy under the shell (currently non-interactive `<p>`). |

---

# PlaygroundRestart

Source: `src/components/patterns/playground-restart.tsx`.  
Sits above `<SwipeDeck />` in Patterns → Playground; remounts the deck via `key`.

Live docs: Components → Buttons (`#playground-restart`).
## 1. Preview

**Live preview:** Inline text control — small undo icon + the word “Restart”; underline on hover (link-like look, button semantics).

**Ver código** (toggle — full component):

```tsx
function PlaygroundRestart({
  label,
  onRestart,
}: {
  label: string
  onRestart: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onRestart}
      className="matchy-label-3 inline-flex items-center gap-[var(--matchy-space-xs)] text-matchy-typography-default underline-offset-4 hover:underline"
    >
      <MatchyIcon
        token="matchy-icon-undo"
        size="sm"
        color="default"
        aria-hidden="true"
      />
      Restart
    </button>
  )
}
```

**Usage in Playground:**

```tsx
<PlaygroundRestart
  label="Restart swipe deck"
  onRestart={() => setSwipeDeckKey((value) => value + 1)}
/>
```

## 2. Overview

**What it is:** Playground-only reset control. Native `<button type="button">` with visible “Restart” text and a decorative undo icon (`aria-hidden="true"`). Visually closer to a text link (`hover:underline`) than to filled `Button` / circular `ControlButton`.

**When to use:** Only to remount/reset the swipe demo in Playground. Not part of the product swipe deck phases.

**Composition / variants:** No variant or size API. Single fixed class string (`matchy-label-3`, flex, underline on hover). No pressed/disabled props in the component.

## 3. Import

```ts
import { PlaygroundRestart } from "@/components/patterns/playground-restart"
```

## 4. API / Props

| Name | Type | Default | What it does |
|------|------|---------|--------------|
| `label` | `string` | *(required)* | Sets `aria-label` on the button. |
| `onRestart` | `() => void` | *(required)* | Called on click (Playground bumps `swipeDeckKey`). |

Hardcoded: `type="button"`, visible children (`MatchyIcon` + `"Restart"`), fixed `className`.

## 5. Accessibility

| Topic | What the code does |
|-------|--------------------|
| Role | Native `<button>`. |
| Accessible name | `aria-label={label}` (usage: `"Restart swipe deck"`). Visible text is also “Restart”; icon is `aria-hidden="true"`. |
| Keyboard | Native button activation. No custom key handlers. |
| `tabIndex` | Not set; browser default. |
| Focus visible | **No** `focus-visible` classes on this button in `playground.tsx`. |
| Disabled | No `disabled` prop or handling. |

## 6. Related

| Component | When to use instead |
|-----------|---------------------|
| **Button** | Product CTAs with primary fill (Start swiping, See saves). |
| **ControlButton** | Circular icon-only Undo / Dislike / Like inside the deck. |
| **View this item** (`<a>`) | Real navigation link on the product card. |
| **Back to Ropstar.co** | Exit label under the deck (today a `<p>`, not a button or link). |
| **`Button variant="link"`** | Shared button with underline hover look; unused in swipe. |

---

# View this item

Source: inline native `<a>` in `swipe-deck.tsx` (active deck card footer). Not a shared component.

## 1. Preview

**Live preview:** Underlined contrast text under name / price · size, left-accented meta block on the product photo.

**Ver código** (toggle — exact markup in swipe):

```tsx
<a
  href="#playground"
  className="matchy-label-2 mt-2 inline-block text-matchy-typography-contrast underline underline-offset-4"
  onPointerDown={(event) => event.stopPropagation()}
>
  View this item
</a>
```

Parent context in code: the footer wrapper is `pointer-events-none`; this `<a>` does **not** set `pointer-events-auto`.

## 2. Overview

**What it is:** The only real hyperlink inside `SwipeDeck`. Always-on underline (`underline underline-offset-4`), `matchy-label-2`, contrast typography color. `href` is currently the literal `"#playground"` (docs hash, not a product URL).

**When to use (in this flow):** Product deep-link affordance on the active card (“view details”), separate from like/dislike controls and from filled CTAs.

**Composition / variants:** No component API. Single hardcoded class string + `href` + `onPointerDown` stopPropagation (avoids starting a card drag when interacting with the link).

## 3. Import

None — inline JSX in `src/components/patterns/swipe-deck/swipe-deck.tsx`. There is no `Link` component import in the swipe files.

## 4. API / Props

Not a component. Attributes present on the element in code:

| Name | Type / value in code | Default | What it does |
|------|----------------------|---------|--------------|
| `href` | `"#playground"` | *(hardcoded)* | Navigation target (docs playground hash). |
| `className` | `matchy-label-2 mt-2 inline-block text-matchy-typography-contrast underline underline-offset-4` | *(hardcoded)* | Type + contrast + always underlined. |
| `onPointerDown` | `(event) => event.stopPropagation()` | *(hardcoded)* | Stops the event from reaching the tinder-card drag handlers. |
| children | `"View this item"` | *(hardcoded)* | Visible link text / accessible name. |

No `target`, `rel`, `aria-*`, `tabIndex`, or `className` props abstraction.

## 5. Accessibility

| Topic | What the code does |
|-------|--------------------|
| Role | Native `<a href>` → link semantics. |
| Accessible name | Visible text “View this item”. |
| Keyboard | Native link: focused via Tab; activated with Enter (browser default). No custom key handlers. |
| `tabIndex` | Not set; browser default for links with `href`. |
| Focus visible | **No** `focus-visible` classes on this `<a>` in swipe code. |
| Pointer / hit testing | Ancestor `.matchy-card-footer` has `pointer-events-none`. Interactive children (e.g. View this item) need `pointer-events-auto`. |
| Drag conflict | `onPointerDown` stopPropagation is present for when pointer events reach the link. |

## 6. Related

| Component | When to use instead |
|-----------|---------------------|
| **Button** | Primary actions that change deck phase (Start swiping, See saves). |
| **`Button variant="link"`** | Button semantics with link look — not used here; this control is a real `<a>`. |
| **Back to Ropstar.co** | Exit from the deck shell; currently a `<p>`, not an `<a>`. |
| **ControlButton** | Like / dislike / undo — not navigation. |
| **PlaygroundRestart** | Demo reset — button with link-like underline on hover. |

---

# Back to Ropstar.co

Source: inline in `DeckShell` (`swipe-deck.tsx`). Styled by `.swipe-deck-back-link` in `swipe-deck.css`.

## 1. Preview

**Live preview:** Centered `matchy-label-3` line under the card / controls slot.

**Ver código** (toggle — exact markup):

```tsx
<p className="swipe-deck-back-link matchy-label-3">Back to Ropstar.co</p>
```

**CSS applied:**

```css
.swipe-deck-back-link {
  margin-top: var(--matchy-space-md);
  text-align: center;
  color: var(--matchy-color-typography-and-icon-default);
}
```

## 2. Overview

**What it is:** Exit copy rendered on every `DeckShell` phase (onboarding, loading, deck, empty). Named like a link in CSS (`.swipe-deck-back-link`) and in product copy, but **implemented as a `<p>`** — no `href`, no `onClick`, no `<a>`, no `role="link"`.

**When it appears:** Always at the bottom of `DeckShell`, below optional `below` content (controls).

**Composition / variants:** No variants. Classes: `swipe-deck-back-link matchy-label-3`. No underline in the CSS/classes shown above.

## 3. Import

None — inline in `DeckShell` inside `swipe-deck.tsx`.

## 4. API / Props

Not a component. Element attributes in code:

| Name | Type / value in code | Default | What it does |
|------|----------------------|---------|--------------|
| `className` | `swipe-deck-back-link matchy-label-3` | *(hardcoded)* | Spacing, centering, default typography color + label-3 type. |
| children | `"Back to Ropstar.co"` | *(hardcoded)* | Visible text. |

No `href`, handlers, or ARIA attributes.

## 5. Accessibility

| Topic | What the code does |
|-------|--------------------|
| Role | Native `<p>` → paragraph/text, **not** a link or button. |
| Accessible name | Plain text content only; not an interactive control. |
| Keyboard | Not focusable; not in the tab order. |
| `tabIndex` | Not set (and not applicable as an interactive control). |
| Focus visible | N/A — not focusable. |
| Interaction | None in code — cannot navigate to Ropstar.co as implemented. |

## 6. Related

| Component | When to use instead |
|-----------|---------------------|
| **View this item** (`<a>`) | Real navigational link pattern already used on the card. |
| **Button** / **`Button variant="link"`** | If the exit should be an action or a link-styled button with focus/keyboard support. |
| **PlaygroundRestart** | Link-styled **button** used for demo reset (not for leaving to Ropstar.co). |
| **ControlButton** | Deck gesture actions, not exit navigation. |
