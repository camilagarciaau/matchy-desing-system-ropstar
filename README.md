<p align="center">
  <img src="src/assets/docs/matchy-logo-tokens/black%20logo.svg" alt="Ropstar" width="220" />
</p>

# Matchy

Matchy is the design system behind **Ropstar** — a secondhand fashion discovery experience. This repo is a living docs site and playground: foundations, reusable components, and composed patterns, built as a portfolio case study rather than a published npm package.

## Run it

```bash
npm install
npm run dev        # docs site → http://localhost:5173
npm run build      # typecheck + production bundle
npm run lint:tokens  # Matchy class-name conventions
```

## What’s inside

The system is organized **by domain**, not by file type. Each piece keeps its tokens or implementation, styles, and docs page together.

| Area | Path | Role |
| --- | --- | --- |
| **Foundations** | `src/foundations/<name>/` | Color, typography, spacing, radii, elevation, motion, content, logo, icons — plus shared button surface styles |
| **Components** | `src/components/<name>/` | Matchy UI with docs: Button, Product Card, Loading, Story Card, Avatar, Filters, Save Toast |
| **Patterns** | `src/patterns/<name>/` | Composed flows — Home (marketplace grid, stories, banners) and the Swipe Deck discovery experience |
| **Docs chrome** | `src/components/docs/` | Shell for the documentation site itself |

Open **Patterns → Playground** in the running app to try Home and Match side by side.

## Matchy components vs `components/ui/`

Matchy-branded surfaces live under `src/components/<name>/` (for example `src/components/button/button.tsx`). Import those paths in app and docs code. Styles for Matchy button tones live in `src/foundations/buttons/matchy-buttons.css`.

`src/components/ui/` is only for stock **shadcn** primitives (Input, Dialog, Card, Badge, and similar) that are not Matchy-documented product surfaces.

> [!WARNING]
> Do **not** run `npx shadcn add button` (or similar) expecting to update the Matchy Button. The CLI writes under `components/ui/` and will create a conflicting `components/ui/button.tsx` instead of editing `components/button/button.tsx`.

## Conventions for coding agents

Project rules for naming, docs structure, reuse-before-inventing, and honesty in foundations live in [`AGENTS.md`](./AGENTS.md) (also pulled in via `CLAUDE.md`). Prefer that file over inventing parallel process docs.
