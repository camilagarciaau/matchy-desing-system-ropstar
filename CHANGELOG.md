# Changelog

Significant Matchy / Ropstar design-system changes. Newest first.
Do not use loose audit `.md` files under `docs/` for this — append here instead.

## 2026-09-17
- Home pattern and marketplace pieces: filters, story cards, seller avatar, save toast, banners, product grid; `ProductCardFace variant="marketplace"` (replaces standalone HomeProductCard).
- Domain folder layout: `src/foundations/<name>/`, `src/components/<name>/`, `src/patterns/<name>/` with co-located `docs.tsx`; archived loose docs under `docs/archive/`.
- Agent rules (`AGENTS.md` / `CLAUDE.md`), README layout notes, and `npm run lint:tokens` for Matchy class-name conventions.
- Removed colliding type-scale classes `matchy-button-primary` / `matchy-button-secondary` (button fills stay on `matchy-btn--*`).
- Renamed `matchy-home-product-grid` → `matchy-marketplace-grid`; migrated swipe class/CSS-var prefix `swipe-deck-*` → `matchy-swipe-deck-*`.
- Team Support → Repo governance page (indexes live `AGENTS.md` / `CHANGELOG.md`, documents domain layout and `lint:tokens`).

## 2026-09-16
- Documented and shipped Buttons, Product Card (`ProductCardFace`), and Loading (`LoadingScreen`) component pages.
- Swipe deck in Patterns → Playground: inventory of flow pieces; foundations-vs-swipe audit then alignment (elevation-4, radii, type/content tokens, MatchyIcon controls, motion-instant) per archived notes.

## 2026-09-14
- Initial repo scaffold.
- Foundations complete: color, typography, spacing, radii, elevation, motion, content, logo, icons (tokens + docs site).
