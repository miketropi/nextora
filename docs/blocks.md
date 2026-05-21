# Nextora theme blocks — development standards

Use this when adding or changing blocks under `blocks/`. Registration: [`blocks/blocks.php`](../blocks/blocks.php). Scaffold: `npm run gen -- --name=my-block --ns=nextora`.

## Design system (default)

1. **Presets first** — Colors, fonts, spacing, and layout widths come from [`theme.json`](../theme.json). Enable `supports.color`, `supports.spacing`, and `supports.typography` in `block.json` so Global Styles apply in the editor and via `get_block_wrapper_attributes()` on the front end.
2. **CSS variables** — In `style.css` / block CSS, prefer `var(--wp--preset--color--*)`, `var(--wp--preset--font-size--*)`, `var(--wp--preset--spacing--*)`, and shared `--nextora-*` tokens from [`resources/css/app.css`](../resources/css/app.css) `@theme`. Avoid raw hex unless mapping a user-picked override (below).
3. **Tailwind in markup** — Editor preview and PHP may use utility classes (`text-contrast`, `bg-base`) only when they mirror presets; new block-specific layout belongs in `blocks/<name>/style.css` with `@layer` if added to the global bundle via `@source`.
4. **Build** — After `style.css` / `view.ts` changes: `npm run build:blocks` (and `npm run build:css` if the block is scanned from `app.css` `@source`). Do not commit hand-edited `index.js` / `index.asset.php`.

## Style overrides (when the agent adds them)

Add custom attributes **only** when Global Styles / `supports.color` are not enough (per-slide background, carousel chrome, band behind images, etc.).

| Convention | Detail |
|------------|--------|
| **Naming** | `backgroundColor`, `textColor`, or scoped names (`imageAreaBackground`, `overlayTextColor`). Store preset slug (`primary`) or sanitized hex; in PHP map preset slugs to `var(--wp--preset--color--{slug})`. |
| **Sidebar** | Panel title **Colors** or **Appearance**; control labels match sibling blocks (e.g. “Image area background”, not one-off wording). |
| **Help text** | One line: what the control affects and that empty = theme default. |
| **Front end** | Inline `style` on the affected element or a BEM modifier; do not fight `get_block_wrapper_attributes()` for the whole block unless intentional. |

## Scroll animation (required pattern)

Every **content** block that benefits from motion should expose an editor toggle and honor reduced motion.

| Item | Standard |
|------|----------|
| **Attribute** | `enableScrollAnimation` — `boolean`, default `true`. |
| **Sidebar** | Panel **Animation** → `ToggleControl` label **Animate on scroll** (`nextora`). Help: *Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.* |
| **PHP** | When enabled, add `data-nextora-scroll-reveal="1"` on the block root (or a dedicated inner wrapper). When disabled, omit the attribute. |
| **JS** | In `view.ts` / `view.js`: run only if `data-nextora-scroll-reveal="1"`; use **GSAP + ScrollTrigger** (see [`blocks/image-gallery-grid/view.ts`](../blocks/image-gallery-grid/view.ts)) with `once: true` and `prefers-reduced-motion: reduce` → no animation. |
| **Init guard** | `data-nextora-{block}-scroll-init="1"` after setup to avoid double init. |

Existing reference: **image gallery grid** — scroll reveal for bento/editorial layouts (no toggle yet; new blocks should add the toggle).

## JavaScript layout blocks (carousel, slider, etc.)

Blocks that **depend on JS** for layout must avoid FOUC / broken first paint.

| Phase | Standard |
|-------|----------|
| **Markup** | Stable dimensions in CSS (`aspect-ratio`, `min-height`, `overflow: hidden`) so space is reserved before init. |
| **Loading** | Root class `nextora-{slug}--loading` until init completes; then `nextora-{slug}--ready`. Optional subtle opacity or skeleton in `style.css`. |
| **Pending** | `data-nextora-{slug}-init-pending="1"` while waiting (e.g. width measurement); remove when done. |
| **Done** | `data-nextora-{slug}-inited="1"` (or block-specific name already in use, e.g. `data-swiper-inited`). |
| **Init** | Idempotent `initRoot()`; `DOMContentLoaded` + optional custom event for re-render (e.g. `nextora-image-gallery-reinit`). |
| **Motion** | Respect `prefers-reduced-motion`; carousel may still init but skip autoplay / aggressive transitions. |

Reference: [`blocks/image-gallery-slide/view.ts`](../blocks/image-gallery-slide/view.ts) (`swiperInitPending`, width polling before mount).

## UI consistency across blocks

When adding controls, align with existing blocks:

| Control type | Align with |
|--------------|------------|
| Layout preset | **Image gallery grid** — `SelectControl` + layout class `nextora-{prefix}--layout-{slug}`. |
| Icon-only actions | **Header** utilities — `2.5rem` ghost control, `rounded-md`, `currentColor`. |
| Modals / search | **Spotlight search** — `data-nextora-modal`, shared modal CSS. |
| Spacing / align | `supports.align` `wide` / `full`; `category`: **`theme`** for site chrome blocks, **`media`** / **`design`** for content as appropriate. |
| Text domain | Always **`nextora`**. Block name: **`nextora/{slug}`**. |

Before shipping, compare sidebar structure and help strings with the closest existing block; reuse panel titles (**Settings**, **Layout**, **Animation**, **Colors**).

## Checklist (new block)

- [ ] `block.json`: `textdomain` `nextora`, sensible `supports`, `enableScrollAnimation` if content animates on scroll.
- [ ] `render.php`: escaped output, `get_block_wrapper_attributes()`, scroll data attribute when enabled.
- [ ] `style.css`: presets / `--wp--preset--*`; loading/ready states if `viewScript` present.
- [ ] `edit.tsx`: Animation toggle; color overrides only if needed; help text consistent.
- [ ] `view.ts` (if needed): scroll reveal + init loading pattern; reduced motion.
- [ ] `npm run build:blocks` (and `npm run build` if CSS/TS global).

## Related docs

- [`AGENTS.md`](../AGENTS.md) — theme overview and build pipeline.
- [`docs/blocks/Hotel Listing Card Block.md`](./blocks/Hotel%20Listing%20Card%20Block.md) — **Hotel listing card** block spec (implemented).
- [`docs/blocks/Hero Slider Block System.md`](./blocks/Hero%20Slider%20Block%20System.md) — **Slide wrapper + slide item** carousel spec (implemented).
- [`docs/modal.md`](./modal.md), [`docs/spotlight-search.md`](./spotlight-search.md) — shared UI patterns.
- Skill: `.cursor/skills/nextora-add-theme-block/SKILL.md`
- Skill: `.cursor/skills/nextora-theme-styling-and-tokens/SKILL.md`
