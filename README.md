# Matchy design system (Ropstar)

Local design-system docs and playground for Matchy / Ropstar.

## Source layout

Pieces live by **domain**, not by file type:

| Area | Path | What belongs here |
| --- | --- | --- |
| Foundations | `src/foundations/<name>/` | Tokens, CSS, and foundation docs (`docs.tsx`) |
| Components | `src/components/<name>/` | Matchy-branded components + their CSS + docs |
| Patterns | `src/patterns/<name>/` | Composed flows (e.g. swipe deck, home) |
| shadcn primitives | `src/components/ui/` | Unthemed / lightly wired shadcn primitives only |

### Matchy vs `components/ui/`

- **Matchy components** live under `src/components/<name>/` (for example `src/components/button/button.tsx`). Import those paths in app and docs code.
- **`src/components/ui/`** is reserved for stock shadcn primitives (Input, Dialog, Card, Badge, etc.) that are not Matchy-documented surfaces.
- Do **not** run `npx shadcn add button` (or similar) expecting to update the Matchy Button — the CLI writes to `components/ui/` and would create a conflicting `components/ui/button.tsx` instead of editing `components/button/button.tsx`. Matchy button styles are in `src/foundations/buttons/matchy-buttons.css`.

## Scripts

```bash
npm install
npm run dev
npm run build
```
