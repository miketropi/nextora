---
name: nextora-add-theme-block
description: Adds or extends a Nextora theme block under blocks/ using block.json, editor source, render.php, and esbuild output. Runs when the user creates a block, edits block registration, block.json, block editor UI, ServerSideRender, render.php, view.js, or npm run gen/build:blocks for Nextora.
disable-model-invocation: true
---

# Nextora — add or change a theme block

## Before you edit

- Read [`AGENTS.md`](../../../AGENTS.md) § **Theme blocks (`blocks/`)** and the **docs index** if the block ties to spotlight, modals, etc.
- Registration is automatic: one subdirectory of `blocks/` with `block.json` → [`blocks/blocks.php`](../../../blocks/blocks.php) calls `register_block_type( $block_dir )`.

## Scaffold

1. From theme root: `npm run gen` (see [`scripts/gen-block.mjs`](../../../scripts/gen-block.mjs)).
2. Set **namespace**, **name**, and **title** in `block.json`; align `textdomain` with `nextora`.

## Implement

1. **Editor:** Edit the generated editor entry (e.g. `*.tsx`). Use `@wordpress/*` imports — the build rewrites them to `window.wp.*` via [`scripts/build-blocks.mjs`](../../../scripts/build-blocks.mjs). If you need a package not in `WP_PACKAGES`, add it there.
2. **Render:** Implement PHP in `render.php` (escape output, use presets/classes consistent with `theme.json`).
3. **Front script (optional):** If the block ships `view.js` / `view.css`, register them in `block.json` and keep behavior aligned with existing blocks (see `blocks/image-gallery-slide/`, etc.).

## Build and verify

1. Run `npm run build:blocks` or `npm run watch` so **`index.js`** and **`index.asset.php`** exist and match dependencies.
2. Confirm WordPress loads the block (Site Editor or post editor) without console errors from missing `wp-*` handles.

## Reference blocks in repo

- [`blocks/hero-section/`](../../../blocks/hero-section/) — structured layout block.
- [`blocks/spotlight-search/`](../../../blocks/spotlight-search/) — modal + REST patterns; see [`docs/spotlight-search.md`](../../../docs/spotlight-search.md).

## Checklist

- [ ] `block.json` valid; `render.php` escapes output.
- [ ] `npm run build:blocks` (or full `npm run build`) run after source changes.
- [ ] No hand-edits to `index.js` / `index.asset.php` as the source of truth.
