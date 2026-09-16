# Component & pattern list — Swipe Deck (Patterns → Playground)

Inventory of UI pieces that make up the Ropstar Match swipe flow shown in **Patterns → Playground**. Status reflects whether each already has a dedicated Design System docs page under **Foundations** / **Components**, or is new and only lives in the Playground implementation today.

**Note:** The **Components** nav section is currently empty — nothing under Components has its own page yet. Foundations coverage is noted where tokens or content rules apply, even if there is no reusable component page.

---

## Pattern (orchestrator)

### 1. SwipeDeck
- **Role in the flow:** Root pattern. Owns phases (`onboarding` → `loading` → `deck` → `empty`), inventory, swipe history, undo, live announcements, and reduced-motion behavior.
- **Docs status:** **New** — showcased only under Patterns → Playground. No dedicated Components or Patterns page of its own (Playground is a demo host, not a Swipe Deck spec page).

---

## Flow screens / states

### 2. OnboardingScreen
- **Role in the flow:** First screen. Explains dislike (left) vs like (right) over a sample product photo, then CTAs into the deck via **Start swiping**.
- **Docs status:** **New** — no own page. Overlay treatment is referenced under Foundations → Color (“Swipe overlay blur”); CTA copy rules come from Foundations → Content (Button / CTA).

### 3. LoadingScreen
- **Role in the flow:** Brief wait after onboarding. Shows a fashion quote + spinner over the product photo while the deck “loads.”
- **Docs status:** **Documented** under Components → Loading (`#loading`). No blur scrim. Quote italic exception under Foundations → Typography.

### 4. Deck (active swipe phase)
- **Role in the flow:** Main interaction: drag/flick the top card (or use controls) to save or skip; stack peeks behind the active card.
- **Docs status:** **New** as a composed pattern. Gesture timing / `matchy-motion-instant` noted under Foundations → Motion; card depth under Foundations → Elevation (`elevation-4`); radii under Foundations → Radii.

### 5. EmptyScreen
- **Role in the flow:** End of inventory. Message + **See saves** CTA with liked count.
- **Docs status:** **New** as UI. Empty-state *copy structure* is documented under Foundations → Content (“Empty state”); there is no Empty State component page.

---

## Structural / visual pieces inside the deck

### 6. DeckShell
- **Role in the flow:** Shared layout for all phases: peek stack + card slot, optional controls slot below the card, and the **Back to Ropstar.co** exit link.
- **Docs status:** **New** — no own page.

### 7. PeekStack
- **Role in the flow:** Two non-interactive cards behind the active face to sell the “deck of cards” depth.
- **Docs status:** **New** — no own page. Peek colors/borders use Foundations color/secondary tokens; elevation/radii called out on Foundations pages in relation to swipe.

### 8. ProductCardFace / product photo card
- **Role in the flow:** Full-bleed product image shell used in onboarding, loading, empty, and (as the drag surface) in the active deck.
- **Docs status:** **Documented** under Components → Product Card (`#product-card`). Elevation-4 and radius-lg also under Foundations → Elevation and Radii.

### 9. Product meta footer (name, price · size, “View this item”)
- **Role in the flow:** Bottom-of-image product identity + deep-link affordance on the active card; sits in the scrim so text stays readable.
- **Docs status:** **New** — no own page. Type tokens from Foundations → Typography; shopping accent + contrast type from Foundations → Color; alt-text guidance from Foundations → Content.

### 10. Swipe controls row (Undo / Dislike / Like)
- **Role in the flow:** Accessible, first-class actions under the card: undo last swipe, skip, save. Mirrors left/right gestures; pressed state flashes last action.
- **Docs status:** **New** — no Components page. Icons and a11y naming guidance live under Foundations → Icons; touch-target spacing under Foundations → Spacing.

### 11. ControlButton
- **Role in the flow:** Circular icon-only control used by undo / dislike / like.
- **Docs status:** **New** — no own page (not the shared `Button` component).

### 12. “Back to Ropstar.co” link
- **Role in the flow:** Secondary exit from the swipe experience, below controls.
- **Docs status:** **New** as UI chrome in the pattern — no Components page. Label style uses Foundations type/color tokens.

---

## Shared building blocks used by the flow

### 13. Button (`@/components/ui/button`)
- **Role in the flow:** Primary CTAs — **Start swiping** (onboarding) and **See saves** (empty).
- **Docs status:** **Code exists**, but **not documented** — Components nav has no Button page yet. CTA wording rules are under Foundations → Content.

### 14. MatchyIcon (`matchy-icon-heart` / `close` / `undo`)
- **Role in the flow:** Like, dislike, and undo glyphs in onboarding + controls; Restart on Playground also uses undo.
- **Docs status:** **Documented in Foundations → Icons** (MatchyIcon API, sizes, colors, heart sample). Tokens `matchy-icon-close` and `matchy-icon-undo` exist in the foundation code for swipe but are **not yet listed** in the Icons page samples.

### 15. PlaygroundRestart
- **Role in the flow:** Playground-only control to remount/reset the deck demo (not part of the product swipe UX itself).
- **Docs status:** **New** — demo chrome only; no Foundations/Components page.

---

## Summary

| # | Name | In swipe flow | Docs status |
|---|------|---------------|-------------|
| 1 | SwipeDeck | Orchestrates all phases | New (Playground only) |
| 2 | OnboardingScreen | Intro + Start swiping | New |
| 3 | LoadingScreen | Quote + spinner wait | Components → Loading |
| 4 | Deck (active phase) | Swipe / save / skip | New |
| 5 | EmptyScreen | End of inventory | New UI; Content covers empty-state copy |
| 6 | DeckShell | Shared frame + back link | New |
| 7 | PeekStack | Cards behind the top card | New |
| 8 | ProductCardFace | Product photo shell | Components → Product Card |
| 9 | Product meta footer | Name, price, size, link | New |
| 10 | Swipe controls row | Undo / Dislike / Like | New |
| 11 | ControlButton | Icon control primitive | New |
| 12 | Back to Ropstar.co | Exit link | New |
| 13 | Button | Primary CTAs | Code only — no Components page |
| 14 | MatchyIcon | Control / onboarding icons | Foundations → Icons |
| 15 | PlaygroundRestart | Demo reset | New (demo only) |
