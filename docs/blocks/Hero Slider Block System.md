# Hero slider block system — Nextora spec

**Status:** Implemented (`blocks/slide-wrapper/`, `blocks/slide-item/`)  
**Version:** 1.1 (aligned with Nextora theme standards)  
**For:** AI agents and implementers

---

## 0. Nextora alignment (read first)

This spec describes a **two-block hero carousel**: a parent slider wrapper and child slide items with InnerBlocks. Before implementation, follow theme standards — **do not** build it as a standalone plugin, static-only `save.js` blocks, or a Swiper CDN enqueue.

| Topic | Original spec (v1.0) | **Nextora requirement** |
|--------|----------------------|-------------------------|
| Wrapper block | `custom/slide-wrapper` | **`nextora/slide-wrapper`** |
| Slide block | `custom/slide-item` | **`nextora/slide-item`** |
| Folders | plugin `hero-slider/slide-wrapper/`, `slide-item/` | **`blocks/slide-wrapper/`**, **`blocks/slide-item/`** |
| Text domain | `hero-slider` | **`nextora`** |
| Category | `design` | **`design`** (full-width content hero; not `theme` site chrome) |
| Registration | Standalone plugin `hero-slider.php` | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) — **no** separate plugin |
| Wrapper render | Static `save.js` + data attributes | **Dynamic `render.php`** + **`save.tsx`** (`InnerBlocks.Content` only) |
| Slide render | Static `save.js` | **Dynamic `render.php`** + **`save.tsx`** (`InnerBlocks.Content` only) |
| Editor entry | `index.js` / `edit.js` | **`index.tsx`** + **`edit.tsx`** → esbuild → `index.js` |
| Build | `@wordpress/scripts` / `wp-scripts` | **`npm run build:blocks`** ([`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs)) |
| Swiper | CDN enqueue in PHP | **npm `swiper@11`** bundled in wrapper **`view.ts`** (see [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts)) |
| Swiper config | Many `data-*` attributes on root | Prefer **`data-swiper-opts`** JSON from `render.php` (same pattern as image gallery slide) |
| Colors / chrome | Hard-coded `#FFFFFF` pickers | **`theme.json` presets** + `PanelColorSettings` / `supports.color`; empty = theme default |
| CSS tokens | `--sw-*`, `--si-*` | Block-scoped **`--nextora-sw-*`** (wrapper), **`--nextora-si-*`** (slide item) |
| BEM classes | `slide-wrapper__*`, `slide-item__*` | **`nextora-sw__*`**, **`nextora-si__*`** (root: `.nextora-sw`, `.nextora-si`) |
| Wrapper | `useBlockProps()` only | **`get_block_wrapper_attributes()`** in `render.php` + `useBlockProps()` in editor |
| JS init | `DOMContentLoaded` only | **Loading → ready** classes + **`data-swiper-init-pending`** / **`data-swiper-inited`**; width polling before mount |
| Scroll motion | Not specified | **Not applicable** to wrapper (above-the-fold hero). Do **not** add `enableScrollAnimation` on the slider wrapper in v1. |
| Background media | `backgroundImageUrl` primary | **`backgroundImageId`** (+ resolve URL in PHP via attachment API) |
| PHP quality | Not specified | **`declare(strict_types=1);`**, **`npm run lint:php:all`** after `render.php` |
| Scaffold | Manual plugin tree | Two folders: **`npm run gen -- --name=slide-wrapper --ns=nextora --category=design`** and **`npm run gen -- --name=slide-item --ns=nextora --category=design`** (set `parent` on slide item) |

**Authoritative references**

- [`docs/blocks.md`](../blocks.md) — tokens, JS init loading, consistent controls  
- [`AGENTS.md`](../../AGENTS.md) § Theme blocks  
- Skills: **`nextora-add-theme-block`**, **`nextora-theme-styling-and-tokens`**  
- Cursor rule: [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc)  
- **Pattern references only** (do not extend or modify these blocks): **[`nextora/image-gallery-slide`](../../blocks/image-gallery-slide/)** (Swiper init), **[`nextora/call-to-action`](../../blocks/call-to-action/)** (background overlay), any block using **`save.tsx` + `render.php` + InnerBlocks**

**Visual reference:** attach `docs/blocks/slide-wrapper-reference.png` when available (original spec referenced `reference-ui.png`; file not in repo yet).

> **Independent block system.** This is a **new** two-block carousel — **`nextora/slide-wrapper`** + **`nextora/slide-item`**. It is **not** related to, and must **not** be merged with or named after, **[`nextora/hero-section`](../../blocks/hero-section/)** (static two-column hero). Implement as two new folders under `blocks/` only.

---

## 1. Overview

Two Gutenberg blocks for a full-width hero carousel:

| Block | Role |
|-------|------|
| **`nextora/slide-wrapper`** | Parent — Swiper engine, navigation, pagination, autoplay, dimensions, transition settings |
| **`nextora/slide-item`** | Child — one slide: background image/video/color, overlay, and **InnerBlocks** (heading, paragraph, buttons, etc.) |

The wrapper accepts **only** `nextora/slide-item` as direct children. Each slide is an InnerBlocks container editable with core blocks.

**Reference UI:** Full-width hero with background photo, large uppercase heading (mixed white + italic accent), subtitle, outline CTA button, and left/right arrows (see reference image when attached).

---

## 2. Block 1 — Slide wrapper (`nextora/slide-wrapper`)

### 2.1 `block.json` metadata

| Property | Value |
|----------|--------|
| `name` | `nextora/slide-wrapper` |
| `title` | `Slide wrapper` |
| `category` | `design` |
| `icon` | `slides` (Dashicon) |
| `description` | Carousel wrapper for Slide item blocks with navigation, pagination, and autoplay. |
| `textdomain` | `nextora` |
| `apiVersion` | `3` |
| `editorScript` | `file:./index.js` (built from TS) |
| `style` | `file:./style.css` |
| `editorStyle` | `file:./editor.css` |
| `viewScript` | `file:./view.js` (built from `view.ts`) |
| `render` | `file:./render.php` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.multiple` | `true` |
| `supports.color` | `{ "background": true, "text": true, "link": true }` (optional chrome; arrows often use `Appearance` overrides) |
| `supports.spacing` | `{ "padding": true, "margin": true }` |
| `supports.dimensions` | `{ "minHeight": true }` (prefer over raw height strings where possible) |

### 2.2 Attributes

Align control names with **`nextora/image-gallery-slide`** where they overlap.

| Attribute | Type | Default | Control | Notes |
|-----------|------|---------|---------|--------|
| `slidesPerView` | `number` | `1` | **Settings** → `RangeControl` (1–5) | Hero v1: keep default `1` |
| `slidesPerGroup` | `number` | `1` | **Settings** → `RangeControl` (1–5) | |
| `spaceBetween` | `number` | `0` | **Settings** → `RangeControl` (0–100) | px |
| `speed` | `number` | `500` | **Settings** → `RangeControl` (100–2000, step 100) | ms |
| `loop` | `boolean` | `true` | **Settings** → `ToggleControl` | Use Swiper **`rewind`** fallback when loop + fractional SPV unsafe (see image gallery slide) |
| `effect` | `string` | `"slide"` | **Settings** → `SelectControl` | `"slide"`, `"fade"` (v1); defer `"creative"` unless needed |
| `autoplay` | `boolean` | `true` | **Autoplay** → `ToggleControl` | |
| `autoplayDelay` | `number` | `5000` | **Autoplay** → `RangeControl` (1000–15000) | Shown when autoplay on |
| `pauseOnHover` | `boolean` | `true` | **Autoplay** → `ToggleControl` | Maps to Swiper `pauseOnMouseEnter` |
| `showArrows` | `boolean` | `true` | **Navigation** → `ToggleControl` | Label **Show navigation** (match gallery slide) |
| `showDots` | `boolean` | `true` | **Pagination** → `ToggleControl` | Label **Show pagination** |
| `arrowStyle` | `string` | `"minimal"` | **Navigation** → `SelectControl` | `"minimal"`, `"circle"`, `"square"` |
| `arrowSize` | `number` | `24` | **Navigation** → `RangeControl` (16–48) | px |
| `arrowColor` | `string` | `""` | **Appearance** → `PanelColorSettings` | Preset slug or hex; empty = `var(--wp--preset--color--base, #fff)` |
| `dotColor` | `string` | `""` | **Appearance** → `PanelColorSettings` | Inactive dot |
| `dotActiveColor` | `string` | `""` | **Appearance** → `PanelColorSettings` | Active dot |
| `dotSize` | `number` | `10` | **Pagination** → `RangeControl` (6–20) | px |
| `sliderHeight` | `string` | `"80vh"` | **Dimensions** → `TextControl` | CSS height; help: *Uses theme min-height support when empty.* |
| `sliderMinHeight` | `string` | `"500px"` | **Dimensions** → `TextControl` | |

**Removed from v1.0 as separate attrs:** `fadeSpeed` — use `speed` when `effect === "fade"`.

**Not in v1:** `enableScrollAnimation` on wrapper (hero is typically first viewport).

### 2.3 InnerBlocks (editor)

```tsx
<InnerBlocks
  allowedBlocks={['nextora/slide-item']}
  template={[['nextora/slide-item'], ['nextora/slide-item']]}
  orientation="horizontal"
  renderAppender={InnerBlocks.ButtonBlockAppender}
/>
```

**`save.tsx` (required):** serialize children only:

```tsx
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
  return (
    <div {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </div>
  );
}
```

**`render.php`:** output Swiper shell; inject rendered slide markup from `$content` or `$block->inner_blocks`. Strip duplicate save wrapper if needed (pattern: [`blocks/call-to-action/render.php`](../../blocks/call-to-action/render.php) — InnerBlocks + dynamic render).

### 2.4 Inspector panels

Use panel titles consistent with [`docs/blocks.md`](../blocks.md) and **image gallery slide**:

| Panel | Controls |
|-------|----------|
| **Settings** | Slides per view/group, space between, effect, speed, loop |
| **Autoplay** | Enable, delay, pause on hover |
| **Navigation** | Show arrows, arrow style, arrow size |
| **Pagination** | Show dots, dot size |
| **Appearance** | Arrow color, dot colors (help: *Empty uses theme default.*) |
| **Dimensions** | Slider height, min height |

### 2.5 Frontend markup (dynamic)

Root uses `get_block_wrapper_attributes()`. Inner init root uses BEM **`nextora-sw`** and JSON config (preferred over many `data-*` keys):

```html
<div {wrapper_attributes}>
  <div class="nextora-sw nextora-sw--loading"
       data-swiper-opts="{…json…}"
       style="--nextora-sw-height: 80vh; --nextora-sw-min-height: 500px;">
    <div class="swiper nextora-sw__swiper">
      <div class="swiper-wrapper">
        <!-- Rendered nextora/slide-item blocks (swiper-slide) -->
      </div>
    </div>
    <button type="button" class="nextora-sw__arrow nextora-sw__arrow--prev" aria-label="Previous slide">…</button>
    <button type="button" class="nextora-sw__arrow nextora-sw__arrow--next" aria-label="Next slide">…</button>
    <div class="nextora-sw__pagination"></div>
  </div>
</div>
```

After Swiper init: remove **`nextora-sw--loading`**, add **`nextora-sw--ready`**, set **`data-swiper-inited="1"`**.

### 2.6 Frontend JS (`view.ts`)

- Import **Swiper 11** from npm (`Navigation`, `Pagination`, `Autoplay`, `Keyboard`, `A11y`, `EffectFade` when needed).
- Import Swiper CSS in `view.ts` or dedicated `view.css` (see image gallery slide).
- Parse **`data-swiper-opts`**; idempotent init; **`data-swiper-init-pending`** during width poll.
- **`prefers-reduced-motion: reduce`:** disable autoplay; keep manual nav; shorten or skip transition.
- Optional reinit event: `nextora-slide-wrapper-reinit` (mirror gallery slide).
- **Do not** init Swiper in the editor — slides stack vertically for editing.

---

## 3. Block 2 — Slide item (`nextora/slide-item`)

### 3.1 `block.json` metadata

| Property | Value |
|----------|--------|
| `name` | `nextora/slide-item` |
| `title` | `Slide item` |
| `category` | `design` |
| `icon` | `format-image` |
| `description` | One hero slide: background, overlay, and inner content blocks. |
| `textdomain` | `nextora` |
| `parent` | `["nextora/slide-wrapper"]` |
| `supports.html` | `false` |
| `supports.reusable` | `false` |
| `render` | `file:./render.php` |
| `style` | `file:./style.css` |
| `editorStyle` | `file:./editor.css` |

No `viewScript` on the slide block (motion lives on the wrapper).

### 3.2 Attributes

| Attribute | Type | Default | Control | Notes |
|-----------|------|---------|---------|--------|
| `backgroundType` | `string` | `"image"` | **Background** → `SelectControl` | `"image"`, `"video"`, `"color"` |
| `backgroundImageId` | `number` | `0` | `MediaUpload` | Primary source; resolve in PHP |
| `backgroundImageAlt` | `string` | `""` | **Background** → `TextControl` | |
| `backgroundVideoId` | `number` | `0` | `MediaUpload` | mp4 from library |
| `backgroundPosition` | `string` | `"center center"` | `FocalPointPicker` | When type = image |
| `backgroundSize` | `string` | `"cover"` | **Background** → `SelectControl` | `cover`, `contain`, `auto` |
| `backgroundColor` | `string` | `""` | **Colors** / `PanelColorSettings` | When type = color; preset slug |
| `overlayColor` | `string` | `""` | **Overlay** → `PanelColorSettings` | Empty → contrast at default opacity |
| `overlayOpacity` | `number` | `0.4` | **Overlay** → `RangeControl` (0–1, step 0.05) | |
| `overlayGradient` | `string` | `""` | **Overlay** → gradient control | Optional; overrides solid when set |
| `contentMaxWidth` | `string` | `"600px"` | **Content layout** → `TextControl` | |
| `contentAlign` | `string` | `"left"` | `AlignmentToolbar` | `left`, `center`, `right` |
| `contentVerticalAlign` | `string` | `"center"` | **Content layout** → `SelectControl` | `top`, `center`, `bottom` |
| `contentPaddingTop` | `number` | `60` | **Content layout** → `RangeControl` | px, 0–200 |
| `contentPaddingBottom` | `number` | `60` | same | |
| `contentPaddingLeft` | `number` | `80` | same | |
| `contentPaddingRight` | `number` | `80` | same | |

**Removed from v1.0:** `backgroundImageUrl`, `backgroundVideoUrl` as primary storage.

### 3.3 InnerBlocks (editor)

```tsx
const ALLOWED_BLOCKS = [
  'core/heading',
  'core/paragraph',
  'core/buttons',
  'core/button',
  'core/image',
  'core/spacer',
  'core/group',
  'core/columns',
];

const TEMPLATE = [
  ['core/heading', { level: 2, placeholder: 'Slide heading…', textColor: 'base' }],
  ['core/paragraph', { placeholder: 'Slide description…', textColor: 'base' }],
  ['core/buttons', {}, [
    ['core/button', { text: 'Donate now', className: 'is-style-outline' }],
  ]],
];

<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
```

Use preset slugs (`base`, `primary`) for default text colors — not raw `#FFFFFF`.

### 3.4 Inspector panels

| Panel | Controls |
|-------|----------|
| **Background** | Type, image/video upload, focal point, size, alt text |
| **Overlay** | Color, opacity, optional gradient |
| **Content layout** | Max width, vertical align, padding sides |
| **Colors** | Background when type = color (via supports / panel) |

**Block toolbar:** `AlignmentToolbar` for horizontal content alignment.

### 3.5 Frontend markup (dynamic)

Slide root: **`swiper-slide nextora-si`** (+ valign modifier). Render background via attachment APIs; overlay and content layers unchanged in intent from v1.0:

```html
<div class="swiper-slide nextora-si nextora-si--valign-center" style="…padding…">
  <div class="nextora-si__background" role="img" aria-label="…"></div>
  <!-- or video / color variant -->
  <div class="nextora-si__overlay"></div>
  <div class="nextora-si__content" style="max-width: …; text-align: …;">
    <!-- InnerBlocks output -->
  </div>
</div>
```

**`save.tsx`:** same `InnerBlocks.Content` pattern as wrapper.

---

## 4. Design tokens (theme-first)

Map v1.0 reference UI to Nextora presets in [`theme.json`](../../theme.json). Block CSS in `style.css` with fallbacks.

| UI role | Reference (v1.0) | **Nextora default** |
|---------|------------------|---------------------|
| Arrow / dot on dark slide | `#FFFFFF` | `var(--wp--preset--color--base, #fff)` |
| Inactive dot | `rgba(255,255,255,0.5)` | `--nextora-sw-dot-color` with alpha |
| Overlay | `#000` @ 40% | `var(--wp--preset--color--contrast, #000)` + opacity attr |
| Heading on slide | `#FFFFFF` | InnerBlocks / preset **`base`** on dark overlay |
| Heading accent (peach) | `#F4C6A0` | Preset **`secondary`** or **`primary`** if close; inline format in core Heading |
| Button outline | white border/text | Core button **`is-style-outline`** + theme link colors |

Block-scoped properties (set from attributes when overrides exist):

```css
.nextora-sw {
  --nextora-sw-height: 80vh;
  --nextora-sw-min-height: 500px;
  --nextora-sw-arrow-color: var(--wp--preset--color--base, #fff);
  --nextora-sw-arrow-size: 24px;
  --nextora-sw-dot-color: rgba(255, 255, 255, 0.5);
  --nextora-sw-dot-active: var(--wp--preset--color--base, #fff);
  --nextora-sw-dot-size: 10px;
}
.nextora-si {
  --nextora-si-overlay: rgba(0, 0, 0, 0.4);
  --nextora-si-content-max-width: 600px;
}
```

Typography in reference mock (clamp sizes, uppercase heading) stays in **`nextora-si__content`** scoped rules or Global Styles — avoid global element selectors.

---

## 5. CSS summary

Port v1.0 §4.2 rules with renamed classes:

| v1.0 | Nextora |
|------|---------|
| `.wp-block-slide-wrapper` | `.nextora-sw` (+ wrapper from `get_block_wrapper_attributes()`) |
| `.slide-wrapper__arrow` | `.nextora-sw__arrow` |
| `.slide-wrapper__dots` | `.nextora-sw__pagination` |
| `.slide-item` | `.nextora-si` |
| `.slide-item__background` | `.nextora-si__background` |
| `.slide-item__overlay` | `.nextora-si__overlay` |
| `.slide-item__content` | `.nextora-si__content` |
| `.slide-item--valign-*` | `.nextora-si--valign-*` |

**Loading state:** `.nextora-sw--loading` (reserved height, optional reduced opacity) → `.nextora-sw--ready`.

### Responsive (unchanged intent)

| Viewport | Behavior |
|----------|----------|
| `> 1024px` | Full layout |
| `768px – 1024px` | Reduced padding; heading clamp |
| `< 768px` | Padding `24px 20px`; content full width; smaller arrows or hide on smallest breakpoints (document in CSS) |

---

## 6. File structure (Nextora)

```
blocks/slide-wrapper/
├── block.json
├── index.tsx
├── edit.tsx
├── save.tsx              # InnerBlocks.Content only
├── types.ts              # optional
├── render.php
├── style.css
├── editor.css
├── view.ts               # Swiper init
├── view.js               # built
├── index.js              # built — do not edit
└── index.asset.php       # built — do not edit

blocks/slide-item/
├── block.json            # parent: ["nextora/slide-wrapper"]
├── index.tsx
├── edit.tsx
├── save.tsx
├── types.ts              # optional
├── render.php
├── style.css
└── editor.css
```

**Not used:** plugin header PHP, root `hero-slider/` plugin folder, CDN Swiper enqueue, standalone `icons.js` (inline SVG in TS/PHP), static-only `save.js` for full markup.

Shared chevron SVGs may live in `blocks/slide-wrapper/icons.tsx` or mirror [`blocks/image-gallery-slide/edit.tsx`](../../blocks/image-gallery-slide/edit.tsx).

---

## 7. Editor behavior

### 7.1 Slide wrapper

- `useBlockProps()` + `useInnerBlocksProps()` on wrapper.
- Toolbar badge: slide count (e.g. “2 slides”).
- **Stack slides vertically** in the editor — no Swiper in editor.
- Optional later: preview toggle (out of scope v1).
- Label each slide card “Slide 1”, “Slide 2” in `editor.css`.

### 7.2 Slide item

- Live background + overlay behind InnerBlocks (z-index stack).
- Video type: poster / first frame in editor, not autoplay video.
- `FocalPointPicker` updates background position live.

---

## 8. Accessibility

Keep v1.0 §9 intent; strings use text domain **`nextora`**:

- Arrow `aria-label` via `esc_attr__()`.
- Decorative SVGs: `aria-hidden="true"`.
- Image background: `role="img"` + `aria-label` from alt text.
- Video background: decorative → `aria-hidden="true"` on `<video>`.
- Swiper **`A11y`** module enabled (messages localized).
- Autoplay pauses on focus within slide / `pauseOnMouseEnter` when enabled.
- Keyboard: Swiper `keyboard.enabled`; left/right when focused.
- InnerBlocks retain core semantics (`h2`, `p`, etc.).

---

## 9. Swiper configuration (reference)

Build config in **`render.php`** → `data-swiper-opts`. Example shape (extend for effect, slidesPerGroup, pauseOnHover):

```json
{
  "loop": true,
  "autoplay": true,
  "autoplayDelay": 5000,
  "pauseOnHover": true,
  "showNav": true,
  "showPagination": true,
  "spaceBetween": 0,
  "speed": 500,
  "slidesPerView": 1,
  "slidesPerGroup": 1,
  "effect": "slide"
}
```

Init in `view.ts` following [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts): modules array, loop vs rewind, width polling, no `navigation: undefined`.

---

## 10. Quality & verification

Before merge:

```bash
npm run build:blocks
npm run lint:php:all    # both render.php files
npm run typecheck       # edit.tsx, view.ts
npm run ci              # optional full local CI
```

Pre-commit (Husky) runs PHP lint on staged files; CI runs on PRs to `main` / `develop`.

---

## 11. Acceptance criteria

1. Inserter: **Slide wrapper** under **Design**; **Slide item** only inside a wrapper (`parent` enforced).
2. Add/remove slides via block appender; default template creates two slides.
3. Image, video, and color backgrounds render on the front end; overlay opacity/gradient correct.
4. InnerBlocks fully editable per slide.
5. Slider settings (speed, loop, autoplay, arrows, dots, effect) drive Swiper on the front end only.
6. Arrow styles (minimal, circle, square) and conditional arrow/dot output work.
7. **`nextora-sw--loading` → `--ready`** without layout jump; multiple sliders on one page do not conflict.
8. Accessibility requirements (§8) met; reduced motion honored.
9. No block validation errors on save/reload.
10. WordPress **6.4+**; passes **`npm run lint:php:all`** and **`npm run typecheck`**.

---

## 12. Implementation checklist (agent)

Use skill **`nextora-add-theme-block`** end-to-end:

- [ ] Scaffold **`slide-wrapper`** and **`slide-item`**; set `parent` on slide item `block.json`
- [ ] Wrapper: attributes §2.2, panels §2.4, `render.php` + `save.tsx`, `view.ts` Swiper init
- [ ] Slide item: attributes §3.2, InnerBlocks template §3.3, `render.php` + `save.tsx`
- [ ] `style.css`: `--wp--preset--*` + `--nextora-sw-*` / `--nextora-si-*`; loading/ready states
- [ ] Compare sidebar labels/help with **image-gallery-slide** and **call-to-action**
- [ ] `npm run build:blocks` + `npm run lint:php:all` + `npm run typecheck`

---

## 13. Out of scope (v1)

- Editor live Swiper preview toggle
- Swiper **creative** effect
- `enableScrollAnimation` on wrapper
- Standalone plugin distribution
- WooCommerce / donation plugin wiring (CTA is a core Button block)
- Query-driven slides from CPT

---

## Appendix A — v1.0 → Nextora mapping

| v1.0 doc section | Action |
|------------------|--------|
| §2 `custom/slide-wrapper` | → §2 `nextora/slide-wrapper` |
| §3 `custom/slide-item` | → §3 `nextora/slide-item` |
| §4 `--sw-*` / `--si-*` | → §4 `--nextora-sw-*` / `--nextora-si-*` |
| §5 plugin folder tree | → §6 `blocks/slide-wrapper/`, `blocks/slide-item/` |
| §7 plugin PHP + CDN Swiper | → §2.6 npm Swiper in `view.ts`; registration via `blocks/blocks.php` |
| §5 / §8 `save.js` full markup | → `render.php` + minimal `save.tsx` (InnerBlocks only) |
| §10 many `data-*` attrs | → §2.5 `data-swiper-opts` JSON |
| §12 `@wordpress/scripts` | → `npm run build:blocks` |
| §12 Notes CDN / save.js | → §0 alignment table |
