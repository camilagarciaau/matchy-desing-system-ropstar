# Matchy / Ropstar — agent rules

## Commands
- `npm run dev` — docs site (Vite)
- `npm run build` — `tsc -b && vite build`
- `npm run typecheck` / `npm run lint` — as needed
- `npm run lint:tokens` — Matchy class-name conventions (`scripts/lint-tokens.mjs`)

## Layout
- Domain folders: `src/foundations/<name>/`, `src/components/<name>/`, `src/patterns/<name>/` (co-locate code + CSS + `docs.tsx`).
- `src/components/ui/` = stock shadcn primitives only. Matchy components are **not** there.
- Never run `npx shadcn add button` (or similar) to “update” Matchy — it writes `components/ui/` and conflicts. See README.

## CSS class names
- Mandatory `matchy-` prefix.
- Tone/color modifiers: **double hyphen** — `matchy-btn--primary`, `--leather`, `--white`, `--purchase`, `--line`.
- Type/shape: **single hyphen** — `matchy-btn-icon`.

## Component docs template
Numbered sections only: **1. Preview → 2. Overview → 3. Import → 4. API / Props → 5. Accessibility**. Do **not** add a Related section.

## Reuse before inventing
Extend an existing component with a variant/modifier; don’t add a parallel component. Precedents: ControlButton → Button; HomeProductCard → `ProductCardFace variant="marketplace"`.

## Honesty in Foundations
If Spacing / Radii / Elevation / Motion (or similar) has no real known “why”, say so — don’t invent brand narrative. Prefer citing borrowed standards (e.g. Gestalt) when that’s the actual reason.

## Docs source of truth
Live docs = code + Foundations/Components pages. Do **not** add loose `.md` under `docs/` (historical files stay in `docs/archive/` untouched).
Decision / change history lives in `CHANGELOG.md` (dated entries; skip trivial copy/visual tweaks).
