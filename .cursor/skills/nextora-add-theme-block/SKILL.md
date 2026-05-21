---
name: nextora-add-theme-block
description: Adds or extends a Nextora theme block under blocks/ using block.json, editor source, render.php, and esbuild output. Runs when the user creates a block, edits block registration, block.json, block editor UI, ServerSideRender, render.php, view.js, or npm run gen/build:blocks for Nextora.
disable-model-invocation: true
---

# Nextora — add or change a theme block

## Before you edit

- Read [`AGENTS.md`](../../../AGENTS.md) § **Theme blocks** and **[`docs/blocks.md`](../../../docs/blocks.md)** (tokens, scroll animation, JS init loading, consistent controls).
- Registration: [`blocks/blocks.php`](../../../blocks/blocks.php) — one folder with `block.json` per block.

## Scaffold

1. `npm run gen -- --name=slug --ns=nextora` ([`scripts/gen-block.mjs`](../../../scripts/gen-block.mjs)).
2. Set `block.json`: `textdomain` `nextora`, `category` (`theme` for chrome, `media`/`design` for content), `supports.color` / `spacing` / `typography` as needed.

## Implement — design system

1. **Default look** — `theme.json` presets + `get_block_wrapper_attributes()`; CSS via `var(--wp--preset--color--*)` and `@theme` tokens ([`nextora-theme-styling-and-tokens`](../../skills/nextora-theme-styling-and-tokens/SKILL.md)).
2. **Overrides (optional)** — Only if Global Styles are not enough: sidebar panel **Colors** / **Appearance**, consistent attribute names and help text ([`docs/blocks.md`](../../../docs/blocks.md)).

## Implement — scroll animation (most content blocks)

1. `block.json`: `"enableScrollAnimation": { "type": "boolean", "default": true }`.
2. `edit.tsx`: **Animation** panel → **Animate on scroll** (`ToggleControl`) with standard help from `docs/blocks.md`.
3. `render.php`: if enabled, `data-nextora-scroll-reveal="1"` on root (or inner wrapper).
4. `view.ts`: GSAP ScrollTrigger, `once: true`, guard with init attribute; **no animation** when `prefers-reduced-motion: reduce`. Pattern: [`blocks/image-gallery-grid/view.ts`](../../../blocks/image-gallery-grid/view.ts).

## Implement — JS layout (carousel / slider)

1. `viewScript` in `block.json`; bundle in `view.ts`.
2. CSS: reserve space (`aspect-ratio` / `min-height`); **`nextora-{slug}--loading`** → **`--ready`**.
3. Init: pending/inited `data-*` attributes; idempotent init; width-ready polling if needed — [`blocks/image-gallery-slide/view.ts`](../../../blocks/image-gallery-slide/view.ts).

## Editor & render

1. Editor: `@wordpress/*` → built to `window.wp.*` ([`scripts/build-blocks.mjs`](../../../scripts/build-blocks.mjs)).
2. `render.php`: escape output; align classes with `style.css`.
3. Match **labels, panel titles, and help** to the closest existing block (header, galleries, hero, spotlight).

## Build and verify

1. `npm run build:blocks` or `npm run watch`.
2. Site Editor: block loads, scroll toggle works, JS blocks show loading → ready without layout jump.

## Reference blocks

| Block | Use for |
|-------|---------|
| [`blocks/hero-section/`](../../../blocks/hero-section/) | Layout, supports |
| [`blocks/spotlight-search/`](../../../blocks/spotlight-search/) | Modal + REST |
| [`blocks/image-gallery-grid/`](../../../blocks/image-gallery-grid/) | Scroll reveal (GSAP) |
| [`blocks/image-gallery-slide/`](../../../blocks/image-gallery-slide/) | Swiper init / loading |
| [`blocks/header/`](../../../blocks/header/) | Utilities, tokens via `currentColor` |
| [`docs/blocks/Hotel Listing Card Block.md`](../../../docs/blocks/Hotel%20Listing%20Card%20Block.md) | Hotel listing card spec (design category) |
| [`docs/blocks/Hero Slider Block System.md`](../../../docs/blocks/Hero%20Slider%20Block%20System.md) | Slide wrapper + slide item carousel spec (Swiper + InnerBlocks) |

## Checklist

- [ ] Follows [`docs/blocks.md`](../../../docs/blocks.md) (tokens, animation toggle, JS init if applicable, consistent UI).
- [ ] `render.php` escaped; `npm run build:blocks` run.
- [ ] No hand-edits to generated `index.js` / `index.asset.php`.
