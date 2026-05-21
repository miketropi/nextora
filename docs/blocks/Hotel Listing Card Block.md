# Hotel listing card block — Nextora spec

**Status:** Implemented (`blocks/hotel-listing-card/`)  
**Version:** 1.1 (aligned with Nextora theme standards)  
**For:** AI agents and implementers

---

## 0. Nextora alignment (read first)

This spec describes a **property / hotel listing card** UI. Before implementation, follow theme standards — **do not** build it as a standalone plugin or static `save.js` block.

| Topic | Original spec (v1.0) | **Nextora requirement** |
|--------|----------------------|-------------------------|
| Block name | `custom/property-listing-card` | **`nextora/hotel-listing-card`** |
| Folder | `property-listing-card/` | **`blocks/hotel-listing-card/`** |
| Text domain | `property-listing-card` | **`nextora`** |
| Category | `widgets` | **`design`** (content card; use `media` if grouped with galleries) |
| Registration | Standalone PHP plugin file | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) — **no** separate plugin |
| Render | Static `save.js` | **Dynamic `render.php`** (no `save.js`) |
| Editor entry | `index.js` / `edit.js` | **`index.tsx`** + **`edit.tsx`** → esbuild → `index.js` |
| Build | `@wordpress/scripts` / `wp-scripts` | **`npm run build:blocks`** ([`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs)) |
| Imports | `wp.*` globals manually | **`@wordpress/*`** in source → shimmed to `window.wp.*` at build |
| Colors / type | Hard-coded hex + `--plc-*` tokens | **`theme.json` presets** + `var(--wp--preset--color--*)`; block CSS in `style.css` |
| Wrapper | `useBlockProps()` only | **`get_block_wrapper_attributes()`** in `render.php` + `useBlockProps()` in editor |
| Scroll motion | Not specified | **`enableScrollAnimation`** toggle + GSAP ScrollTrigger (content block pattern) |
| PHP quality | Not specified | **`npm run lint:php:all`** after `render.php`; `declare(strict_types=1);` |
| Scaffold | Manual file tree | **`npm run gen -- --name=hotel-listing-card --ns=nextora --category=design`** then customize |

**Authoritative references**

- [`docs/blocks.md`](../blocks.md) — block standards  
- [`AGENTS.md`](../../AGENTS.md) § Theme blocks  
- Skills: **`nextora-add-theme-block`**, **`nextora-theme-styling-and-tokens`**  
- Cursor rule: [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc)

**Visual reference:** attach `docs/blocks/hotel-listing-card-reference.png` when available (original spec referenced `reference-ui.png`; file not in repo yet).

---

## 1. Overview

Gutenberg block that renders a single **property / hotel listing card**: hero image, property name, nightly price, location (pin icon), and star rating with review count. Fully editable in the Site Editor; frontend output must match the reference layout.

The card is **content**, not site chrome — it should inherit Global Styles (background, text, link colors) and only add sidebar overrides when presets are insufficient.

---

## 2. Block identity & registration

### 2.1 `block.json` metadata

| Property | Value |
|----------|--------|
| `name` | `nextora/hotel-listing-card` |
| `title` | `Hotel listing card` |
| `category` | `design` |
| `icon` | `building` (Dashicon) or `admin-home` |
| `description` | Card for a property or hotel: image, name, price, location, and rating. |
| `textdomain` | `nextora` |
| `apiVersion` | `3` |
| `editorScript` | `file:./index.js` (built from TS) |
| `style` | `file:./style.css` |
| `editorStyle` | `file:./editor.css` |
| `render` | `file:./render.php` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.multiple` | `true` |
| `supports.color` | `{ "background": true, "text": true, "link": true }` |
| `supports.spacing` | `{ "padding": true, "margin": true }` |
| `supports.typography` | `{ "fontSize": true, "lineHeight": true }` (optional; card has fixed hierarchy in v1) |

### 2.2 Scaffold

```bash
npm run gen -- --name=hotel-listing-card --ns=nextora --category=design
```

Then replace generated stubs with this spec. Run **`npm run build:blocks`** after editor/CSS changes.

---

## 3. Block attributes

Define in `block.json`. Prefer **attachment ID** for images (same as [`blocks/image-gallery-grid/`](../../blocks/image-gallery-grid/)).

| Attribute | Type | Default | Control | Notes |
|-----------|------|---------|---------|--------|
| `imageId` | `number` | `0` | `MediaUpload` | Primary image source |
| `imageAlt` | `string` | `""` | Derived / sidebar | From attachment or manual override |
| `propertyName` | `string` | `"La Brisa Vales"` | `RichText` → `h3` | Stored HTML allowed: `strong`, `em` only on front (KSES) |
| `price` | `string` | `"$980"` | `RichText` → `span` | |
| `priceLabel` | `string` | `"/Night"` | `RichText` → `span` | |
| `location` | `string` | `"Ubud, Bali, Indonesia"` | `RichText` → `span` | |
| `rating` | `string` | `"4.9"` | `RichText` → `span` | |
| `reviewCount` | `string` | `"1,982"` | `RichText` → `span` | |
| `showRating` | `boolean` | `true` | **Settings** → `ToggleControl` | Panel title **Settings** |
| `showLocation` | `boolean` | `true` | **Settings** → `ToggleControl` | |
| `enableScrollAnimation` | `boolean` | `true` | **Animation** → **Animate on scroll** | Required Nextora content-block pattern |
| `cardBorderRadius` | `number` | `16` | **Appearance** → `RangeControl` | Optional override; empty = theme default |
| `imageBorderRadius` | `number` | `12` | **Appearance** → `RangeControl` | Optional override |
| `backgroundColor` | `string` | `""` | **Colors** (via `supports.color`) | Preset slug or empty = theme |
| `textColor` | `string` | `""` | **Colors** | Preset slug or empty = theme |

**Removed from v1.0:** `imageUrl` as primary storage — resolve URL in `render.php` via `wp_get_attachment_image()` when `imageId` is set.

**Optional later:** `starColor` under **Appearance** only if `--wp--preset--color--*` cannot match reference gold star.

---

## 4. Design tokens (theme-first)

Map reference UI to Nextora presets in [`theme.json`](../../theme.json). Use **`style.css`** with fallbacks — not raw hex as the only source.

| UI role | Reference (v1.0) | **Nextora token (default)** |
|---------|------------------|-----------------------------|
| Card background | `#FFFFFF` | `var(--wp--preset--color--base, #fff)` |
| Title / price | `#1A1A2E` | `var(--wp--preset--color--contrast, …)` |
| Price suffix | `#A0AEC0` | `var(--wp--preset--color--secondary, …)` |
| Meta text (location, reviews) | `#718096` | `var(--wp--preset--color--secondary, …)` |
| Star fill | `#F6C23E` | `--nextora-hlc-star` in block `style.css`, fallback `#F6C23E` |
| Card shadow | `0 4px 24px rgba(0,0,0,0.08)` | `--nextora-hlc-shadow` on block root |
| Page background in mock | `#E2E8F0` | **Not part of block** — editor canvas / template only |

Block-scoped custom properties (set on root from attributes when overrides exist):

```css
.nextora-hlc {
  --nextora-hlc-card-radius: 16px;   /* or from cardBorderRadius attribute */
  --nextora-hlc-image-radius: 12px;
  --nextora-hlc-max-width: 25rem;     /* ~400px */
}
```

Use BEM prefix **`nextora-hlc`** (nextora hotel listing card), not generic `property-card`, to avoid clashes.

---

## 5. UI anatomy

### 5.1 Card container

- Background: preset **`base`** (or `supports.color` background)
- Border radius: `--nextora-hlc-card-radius`
- Box shadow: `--nextora-hlc-shadow`
- Max width: `--nextora-hlc-max-width`; `width: 100%` below breakpoint
- Padding: `var(--wp--preset--spacing--30, 0.75rem)` or `12px` if no preset step fits

### 5.2 Image

- Aspect ratio: `16 / 10`
- `object-fit: cover`
- Border radius: `--nextora-hlc-image-radius`
- Placeholder: neutral surface using **`secondary`** at low opacity; upload control in editor
- Front: `wp_get_attachment_image( $imageId, 'large', false, [ 'class' => 'nextora-hlc__image', … ] )`

### 5.3 Content rows

**Row 1 — name & price:** flex, space-between, baseline aligned  
**Row 2 — location & rating:** flex, space-between, center aligned, `margin-top` ~`0.5rem`

Typography sizes from reference (20px / 14px) may live in block CSS; prefer preset font sizes where close enough (`medium`, `small`).

Icons: inline SVG, `16×16`, `aria-hidden="true"`, `currentColor` for pin; star uses `--nextora-hlc-star`.

---

## 6. Markup & rendering

### 6.1 Dynamic render (required)

**No `save.js`.** All frontend HTML from [`render.php`](../../blocks/post-grid/render.php) pattern:

- File docblock: `@var array<string, mixed> $attributes`, `@var WP_Block $block`
- `get_block_wrapper_attributes()` for root wrapper classes + inline styles (radius, colors)
- When `enableScrollAnimation` is true: `data-nextora-scroll-reveal="1"` on root
- Escape: `esc_url`, `esc_attr`, `esc_html`, `wp_kses_post` / limited KSES for RichText fields

```html
<div {wrapper_attributes} data-nextora-scroll-reveal="1">
  <article class="nextora-hlc__card">
    <div class="nextora-hlc__media">
      <!-- wp_get_attachment_image or placeholder -->
    </div>
    <div class="nextora-hlc__body">
      <div class="nextora-hlc__row nextora-hlc__row--primary">
        <h3 class="nextora-hlc__name">…</h3>
        <div class="nextora-hlc__price">
          <span class="screen-reader-text">Price per night:</span>
          <span class="nextora-hlc__price-value">…</span>
          <span class="nextora-hlc__price-label">…</span>
        </div>
      </div>
      <div class="nextora-hlc__row nextora-hlc__row--meta">
        <!-- location + rating rows; respect showLocation / showRating -->
      </div>
    </div>
  </article>
</div>
```

### 6.2 Editor (`edit.tsx`)

- **`useBlockProps()`** on root; mirror BEM classes where practical for WYSIWYG
- **`MediaUpload`** / **`MediaPlaceholder`** for image (pattern: header block logo or gallery grid)
- **`RichText`** for text attributes (same tags as v1.0 table)
- **`InspectorControls`** panel titles aligned with sibling blocks:
  - **Settings** — visibility toggles
  - **Appearance** — radius overrides (help: *Empty uses theme default.*)
  - **Animation** — **Animate on scroll** + standard help from [`docs/blocks.md`](../blocks.md)
  - **Colors** — from `supports.color` (no duplicate hex pickers unless needed)
- Optional: **`ServerSideRender`** for preview parity ([`blocks/post-grid/edit.tsx`](../../blocks/post-grid/edit.tsx)) — if inline canvas markup diverges, prefer SSR for validation

---

## 7. Scroll animation

Per [`docs/blocks.md`](../blocks.md) § Scroll animation:

| Item | Implementation |
|------|----------------|
| Attribute | `enableScrollAnimation` (default `true`) |
| PHP | `data-nextora-scroll-reveal="1"` when enabled |
| JS | `view.ts` + `viewScript` in `block.json` only if animation needed |
| Library | GSAP + ScrollTrigger; **`once: true`** |
| A11y | Skip animation when `prefers-reduced-motion: reduce` |
| Guard | `data-nextora-hotel-listing-card-scroll-init="1"` after init |
| Reference | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |

Subtle fade/slide-up on the card root is enough for v1.

---

## 8. File structure (Nextora)

```
blocks/hotel-listing-card/
├── block.json          # metadata, attributes, supports, render, scripts
├── index.tsx           # registerBlockType
├── edit.tsx            # editor UI
├── types.ts            # HotelListingCardAttributes (optional)
├── render.php          # server render (required)
├── style.css           # front + editor shared
├── editor.css          # editor-only tweaks
├── view.ts             # scroll reveal (if enableScrollAnimation)
├── view.js             # built by build:blocks
├── index.js            # built — do not edit by hand
└── index.asset.php     # built — do not edit by hand
```

**Not used:** `save.js`, `property-listing-card.php`, plugin header, `icons.js` (inline SVG in `edit.tsx` / PHP helper).

Shared SVG may live in `inc/` or a small TS module under the block folder if reused.

---

## 9. SVG icons

Same visual spec as v1.0 (crosshair location pin, filled star). Requirements:

- Decorative → `aria-hidden="true"`
- Pin stroke: `currentColor` (inherits meta text color)
- Star fill: `var(--nextora-hlc-star, #F6C23E)`
- Output in PHP via escaped inline SVG or `wp_kses` allowlist

---

## 10. Accessibility

Unchanged intent from v1.0:

- Meaningful `imageAlt` on hero image
- Property name as **`h3`** (one card = one heading; avoid multiple `h3` in a grid without context — document that listing **grids** should use a wrapping query block later)
- Screen reader text for price and rating (dynamic string with rating + review count)
- Logical DOM order: image → name/price → location/rating

---

## 11. Responsive behavior

| Viewport | Behavior |
|----------|----------|
| `> 768px` | `max-width: var(--nextora-hlc-max-width)`; align wide/full via block supports |
| `480px – 768px` | `width: 100%` of container |
| `< 480px` | Full width; reduce padding via `spacing` support or `--wp--preset--spacing--20` |

---

## 12. Quality & verification

Before merge:

```bash
npm run build:blocks
npm run lint:php:all    # render.php
npm run typecheck       # edit.tsx / view.ts
npm run ci              # optional full local CI
```

Pre-commit (Husky) runs PHP lint on staged files; CI runs on PRs to `main` / `develop`.

---

## 13. Acceptance criteria

1. Block inserter: **Design** category, title **Hotel listing card**, namespace **`nextora/hotel-listing-card`**.
2. Inline edit for all text fields; image upload/replace/remove via **`MediaUpload`**.
3. **Settings** / **Appearance** / **Animation** panels match [`docs/blocks.md`](../blocks.md) patterns.
4. Frontend rendered via **`render.php`** only; no block validation errors.
5. Default look uses **theme presets**; wide/full alignment works.
6. **`enableScrollAnimation`** toggle works; respects reduced motion.
7. Responsive layout matches reference spacing and hierarchy.
8. Accessibility requirements (§10) met.
9. Multiple instances on a page do not conflict (BEM prefix **`nextora-hlc`**).
10. WordPress **6.4+**; passes **`npm run lint:php:all`** and **`npm run typecheck`**.

---

## 14. Implementation checklist (agent)

Use skill **`nextora-add-theme-block`** end-to-end:

- [ ] Scaffold with `npm run gen -- --name=hotel-listing-card --ns=nextora --category=design`
- [ ] `block.json`: attributes from §3, `supports` from §2, `enableScrollAnimation`
- [ ] `render.php`: escaped output, `get_block_wrapper_attributes()`, attachment image, scroll `data-*`
- [ ] `edit.tsx`: RichText + MediaUpload + Inspector panels (§6.2)
- [ ] `style.css`: `--wp--preset--*` + `--nextora-hlc-*`; no stray global hex
- [ ] `view.ts`: scroll reveal if animation enabled
- [ ] `npm run build:blocks` + `npm run lint:php:all` + `npm run typecheck`
- [ ] Compare sidebar labels/help with **post-grid**, **image-gallery-grid**, **call-to-action**

---

## 15. Out of scope (v1)

- Query loop / multiple cards from CPT (future **hotel listing grid** block)
- WooCommerce / booking plugin integration
- Map links, external URLs, favorite/save actions
- i18n beyond **`nextora`** text domain

---

## Appendix A — v1.0 → Nextora mapping

| v1.0 doc section | Action |
|------------------|--------|
| §2 `custom/property-listing-card` | → §2 `nextora/hotel-listing-card` |
| §5 HTML `property-card__*` | → §6 `nextora-hlc__*` |
| §6 `--plc-*` hex tokens | → §4 theme presets + `--nextora-hlc-*` |
| §7 `edit.js` | → §6 `edit.tsx` |
| §8 `save.js` + plugin PHP | → §8 `render.php` only |
| §10 plugin `register_block_type` | → automatic via `blocks/blocks.php` |
| §14 `wp-scripts` | → §2 `npm run build:blocks` |
