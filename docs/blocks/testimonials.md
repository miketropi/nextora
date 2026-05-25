# Block: Testimonials (Split Layout)

**Version:** 1.0  
**Status:** Implemented as **`nextora/testimonials`** in [`blocks/testimonials/`](../../blocks/testimonials/).  
**For:** AI Agent Development  
**Related:** [`docs/blocks/Testimonial Carousel.md`](./Testimonial%20Carousel.md) (`nextora/testimonial-carousel` — centered fade layout with trust avatars; **different block**)

When building, follow this document and [`docs/blocks.md`](../blocks.md). Reuse patterns from [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/) and [`blocks/team-section/`](../../blocks/team-section/) where noted — do not copy the centered-carousel spec as-is.

---

## Overview

The **Testimonials** block (`nextora/testimonials`) renders a **split-screen testimonial carousel**:

- **Left column:** Full-height portrait photo of the person giving the testimonial (changes with each slide).
- **Right column:** White content panel with a decorative icon, section heading, quote, author attribution, and pagination dots.

The design is editorial and human-centered — the portrait anchors the story while the quote and metadata stay easy to scan. Slides crossfade (photo and text in sync); pagination sits at the **bottom-left** of the content panel.

**Reference mock (approved design):**

| Area | Content |
|------|---------|
| Left | Large portrait photo (subject of the testimonial), edge-to-edge, full section height |
| Right — top | Small **orange wavy line** icon (accent decorator) |
| Right — heading | Bold sans-serif title, e.g. **Real Lives, Lasting Change** |
| Right — quote | Curly quotation marks wrapping body copy, e.g. *“Thanks to the sponsorship program, I was able to continue my education and now I'm pursuing my dream career in engineering.”* |
| Right — attribution | **Name** in bold, then `/ Age - Location` in regular weight, e.g. **Zainab** / 16 Years - Lagos, Nigeria |
| Right — bottom | Three **ring-style pagination dots** — active slide shows a solid inner dot inside a circle outline; inactive slides are outline only |

**Design philosophy:** Split layout puts faces first. Typography is clean sans-serif (Hanken Grotesk via [`theme.json`](../../theme.json)). Accent color for the wavy icon uses the theme **primary** preset — not hard-coded orange hex in committed CSS.

**Not in scope for this block:** Trust counter row, overlapping avatar stack, centered single-column layout — those belong to **`nextora/testimonial-carousel`**.

---

## Theme context

| Item | Value |
|------|--------|
| **Block name** | `nextora/testimonials` |
| **Title** | Testimonials |
| **Category** | `design` |
| **Text domain** | `nextora` |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `render.php`, `types.ts`, `style.css`, `editor.css`, `view.ts` |
| **Build** | `npm run build:blocks` — do **not** hand-edit `index.js` / `index.asset.php` / `view.js` |
| **Scaffold** | `npm run gen -- --name=testimonials --ns=nextora --category=design` |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**.

---

## Scope and intent

Use `nextora/testimonials` on campaign, nonprofit, and impact landing pages where **real people and their stories** should be visually prominent — sponsorship programs, community impact, case studies with portraits.

The block is a **single dynamic block** with a `testimonials[]` repeater (same data model approach as [`nextora/testimonial-carousel`](../../blocks/testimonial-carousel/)), not InnerBlocks.

---

## Architecture

```
nextora/testimonials                    ← single dynamic block, no InnerBlocks
├── attributes.testimonials[]           ← slide objects (quote, author, photo, meta)
├── attributes.headingText              ← section heading (right panel)
├── attributes.showTopIcon / topIcon*   ← wavy accent decorator
├── attributes.imagePosition            ← left | right
├── attributes.imageColumnRatio         ← e.g. 50 (percent width of image column)
├── attributes.effect / speed / loop    ← Swiper transition (default fade)
├── attributes.autoplay*                ← autoplay toggle, delay, pause on hover
├── attributes.showPagination           ← ring-style dots (bottom-left)
├── attributes.enableScrollAnimation    ← GSAP scroll reveal on section enter
├── render.php                        ← split markup + Swiper slides + data-swiper-opts
├── view.ts                           ← Swiper (EffectFade) + scroll reveal
└── testimonial-edit-form.tsx         ← modal editor (mirror testimonial-carousel)
```

### Why single block + repeater

- Testimonial rows are structured data (quote, name, age, location, portrait) — not freeform nested layout.
- Portrait and quote must stay in sync per slide; a repeater + PHP render is simpler than parent/child InnerBlocks.
- Aligns with [`nextora/team-section`](../../blocks/team-section/) and [`nextora/testimonial-carousel`](../../blocks/testimonial-carousel/).

### Distinction from `nextora/testimonial-carousel`

| Feature | `nextora/testimonials` | `nextora/testimonial-carousel` |
|---------|------------------------|--------------------------------|
| Layout | Split: portrait + content panel | Centered single column |
| Photo | Large per-slide portrait (left/right column) | Optional small inline author photo |
| Section heading | Large bold title in content panel | Small uppercase label above quote |
| Author meta | Name / Age - Location | Name, role/title |
| Trust row | None | Counter + avatar stack |
| Pagination | Bottom-left, ring bullets | Centered below content |
| Default transition | Fade (photo + text together) | Fade |

---

## Block registration

| Property | Value |
|----------|--------|
| `name` | `nextora/testimonials` |
| `title` | Testimonials |
| `category` | `design` |
| `icon` | `format-quote` |
| `description` | Split-screen testimonial carousel with portrait photos, section heading, and ring pagination. |
| `render` | `file:./render.php` (dynamic) |
| `editorScript` | `file:./index.js` (built from `index.tsx`) |
| `viewScript` | `file:./view.js` (built from `view.ts`) |
| `style` / `editorStyle` | `file:./view.css`, `file:./editor.css` |
| `supports.align` | `wide`, `full` |
| `supports.color` | `background`, `text`, `link` |
| `supports.spacing` | `margin` |
| `supports.html` | `false` |
| Inner blocks | none — `save.tsx` returns `null` |

---

## Attributes schema

### Content — section (right panel)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `headingText` | `string` | `"Real Lives, Lasting Change"` | RichText (canvas) or TextControl | Section heading above the quote |
| `headingLevel` | `number` | `2` | SelectControl (2–4) | Heading tag level |
| `showTopIcon` | `boolean` | `true` | ToggleControl | Show decorative icon above heading |
| `topIconType` | `string` | `"wave"` | SelectControl | `"wave"`, `"sparkle"`, `"quote"`, `"custom-svg"` |
| `customIconSvg` | `string` | `""` | TextareaControl | Custom SVG when `topIconType = custom-svg` |
| `topIconSize` | `number` | `24` | RangeControl (16–40) | Icon size in px |
| `topIconColor` | `string` | `""` | Color control | Empty = `var(--wp--preset--color--primary)` |

### Content — testimonials repeater

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `testimonials` | `array` | 3 sample items | Inspector list + modal | Slide rows (see item schema) |

### Layout

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `imagePosition` | `string` | `"left"` | SelectControl | `"left"`, `"right"` — portrait column side |
| `imageColumnRatio` | `number` | `50` | RangeControl (40–60) | Image column width as % of row |
| `minSectionHeight` | `string` | `"min(32rem, 70vh)"` | TextControl | Minimum section height (CSS length) |
| `contentPadding` | `string` | `""` | TextControl | Inner padding for content panel; empty = theme spacing preset |
| `showPagination` | `boolean` | `true` | ToggleControl | Ring-style pagination dots |
| `showArrows` | `boolean` | `false` | ToggleControl | Optional prev/next controls on content panel |
| `contentBackgroundColor` | `string` | `""` | Color control | Right panel background; empty = `var(--wp--preset--color--base)` |

### Carousel (Swiper)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `effect` | `string` | `"fade"` | SelectControl | `"fade"` (v1), optionally `"slide"` later |
| `speed` | `number` | `600` | RangeControl (200–2000) | Transition duration (ms) |
| `loop` | `boolean` | `true` | ToggleControl | Infinite loop |
| `autoplay` | `boolean` | `true` | ToggleControl | Enable autoplay |
| `autoplayDelay` | `number` | `6000` | RangeControl (2000–15000) | Autoplay interval (ms) |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause autoplay on hover |

### Colors (scoped overrides)

Prefer **`supports.color`** on the block wrapper first. Add scoped attributes only when needed:

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `headingColor` | `string` | `""` | Section heading |
| `quoteColor` | `string` | `""` | Quote body |
| `authorNameColor` | `string` | `""` | Bold author name |
| `authorMetaColor` | `string` | `""` | Age / location line |
| `paginationColor` | `string` | `""` | Inactive ring |
| `paginationActiveColor` | `string` | `""` | Active ring + inner dot |

Empty values fall back to **`theme.json`** presets via `var(--wp--preset--color--*)` — not mock hex in committed CSS.

### Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | Fade/slide content in when block enters viewport |

Standard help text from [`docs/blocks.md`](../blocks.md): *Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.*

### Testimonial item schema

Each entry in `attributes.testimonials`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stable key (`createTestimonialId()` — mirror [`testimonial-utils.ts`](../../blocks/testimonial-carousel/testimonial-utils.ts)) |
| `quoteText` | `string` | yes | Testimonial quote (render with typographic `"` `"` via CSS `quotes` or `<q>`) |
| `authorName` | `string` | yes | Person's name (bold in attribution line) |
| `authorAge` | `string` | no | e.g. `"16 Years"` |
| `authorLocation` | `string` | no | e.g. `"Lagos, Nigeria"` |
| `portraitId` | `number` | yes* | WP attachment ID for left-column portrait |
| `portraitAlt` | `string` | no | Alt text; fallback to author name |

\* Editor should allow draft rows with `portraitId: 0` and show placeholder in canvas; front end skips empty slides or shows neutral placeholder per product decision (recommend: skip slide if both `quoteText` and `portraitId` empty).

**Attribution format (front end):**

```text
{Name} / {authorAge} - {authorLocation}
```

Omit `/` segment when age and location are both empty. Use ` — ` or `, ` only if design requires — default mock uses ` / ` between name and age, ` - ` between age and location.

Example default items (match mock tone):

```json
[
  {
    "id": "1",
    "quoteText": "Thanks to the sponsorship program, I was able to continue my education and now I'm pursuing my dream career in engineering.",
    "authorName": "Zainab",
    "authorAge": "16 Years",
    "authorLocation": "Lagos, Nigeria",
    "portraitId": 0,
    "portraitAlt": ""
  }
]
```

---

## Design system

1. **Presets first** — Content panel background, text, and heading colors from `supports.color` + scoped overrides. Accent icon uses **primary** preset when `topIconColor` is empty.
2. **CSS variables** — Prefix **`--nextora-testimonials-*`** (e.g. `--nextora-testimonials-image-ratio`, `--nextora-testimonials-content-bg`, `--nextora-testimonials-dot-active`).
3. **Typography** — Heading: preset large/bold sans. Quote: comfortable reading size (`clamp()`), regular weight. Attribution: name semibold/bold, meta regular/muted via `color-mix(in srgb, currentColor 65%, transparent)`.
4. **Split grid** — CSS Grid or flex on `.nextora-testimonials__layout`: two equal-ish columns at desktop; stack **image on top, content below** below `768px` (configurable breakpoint in CSS, not attribute v1).
5. **Portrait** — `object-fit: cover`, `width/height: 100%`, min-height inherited from section. Use `wp_get_attachment_image()` with appropriate `sizes` for half-viewport width.
6. **Pagination** — Custom ring bullets (not Swiper default filled disks): hollow circle ~12px, active state adds centered 4–6px filled dot. Align **`justify-content: flex-start`** in content panel footer. Style reference: [`blocks/team-section/style.css`](../../blocks/team-section/style.css) elongated bullets — adapt to ring variant.

---

## Class and CSS variable naming

| Concept | Nextora |
|---------|---------|
| Root | `wp-block-nextora-testimonials` + **`nextora-testimonials`** |
| Layout | `nextora-testimonials__layout`, `__media`, `__content` |
| Header | `nextora-testimonials__decor`, `__heading` |
| Carousel | `nextora-testimonials__swiper`, `__slide` |
| Quote | `nextora-testimonials__quote` |
| Author | `nextora-testimonials__author`, `__author-name`, `__author-meta` |
| Pagination | `nextora-testimonials__pagination` |
| Modifiers | `nextora-testimonials--image-left`, `--image-right`, `--loading`, `--ready` |
| Variables | `--nextora-testimonials-image-ratio`, `--nextora-testimonials-min-height`, `--nextora-testimonials-content-bg`, `--nextora-testimonials-dot-color`, `--nextora-testimonials-dot-active` |

---

## Render output

### High-level HTML

```html
<div
  class="wp-block-nextora-testimonials nextora-testimonials nextora-testimonials--image-left alignfull nextora-testimonials--loading"
  style="--nextora-testimonials-image-ratio: 50%; --nextora-testimonials-min-height: min(32rem, 70vh);"
  data-swiper-opts="{...}"
  data-nextora-scroll-reveal="1"
>
  <div class="nextora-testimonials__layout">

    <!-- Media column: fades with active slide -->
    <div class="nextora-testimonials__media">
      <div class="swiper nextora-testimonials__media-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide nextora-testimonials__media-slide">
            <figure class="nextora-testimonials__figure">
              <img class="nextora-testimonials__portrait" src="..." alt="Zainab" width="..." height="..." loading="lazy" decoding="async" />
            </figure>
          </div>
          <!-- one media slide per testimonial -->
        </div>
      </div>
    </div>

    <!-- Content column -->
    <div class="nextora-testimonials__content">
      <div class="nextora-testimonials__content-inner">

        <div class="nextora-testimonials__decor" aria-hidden="true">
          <!-- wavy SVG icon -->
        </div>

        <h2 class="nextora-testimonials__heading">Real Lives, Lasting Change</h2>

        <div class="swiper nextora-testimonials__content-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide nextora-testimonials__slide">
              <blockquote class="nextora-testimonials__quote">
                <p>Thanks to the sponsorship program…</p>
              </blockquote>
              <footer class="nextora-testimonials__author">
                <strong class="nextora-testimonials__author-name">Zainab</strong>
                <span class="nextora-testimonials__author-meta">/ 16 Years - Lagos, Nigeria</span>
              </footer>
            </div>
          </div>
        </div>

        <div class="nextora-testimonials__footer">
          <div class="nextora-testimonials__pagination swiper-pagination"></div>
          <!-- optional arrows -->
        </div>

      </div>
    </div>

  </div>
</div>
```

### Swiper architecture (recommended v1)

**Option A — Dual linked Swipers (recommended):** Two Swiper instances (media + content) controlled by one controller / shared index via `controller.control` or manual sync in `view.ts`. Both use **`effect: 'fade'`** and **`fadeEffect: { crossFade: true }`**. Keeps portrait and quote locked without cramming both into one slide template.

**Option B — Single Swiper:** Each slide contains both portrait and content; CSS grid inside slide recreates split layout. Simpler JS but heavier DOM and trickier height alignment — defer unless dual sync proves fragile.

Pass options as **`data-swiper-opts`** JSON from PHP (pattern: [`blocks/testimonial-carousel/render.php`](../../blocks/testimonial-carousel/render.php)).

**Do not** enqueue Swiper from a CDN — bundle in **`view.ts`** via `npm run build:blocks`.

---

## PHP render callback (`render.php`)

Requirements:

- `declare(strict_types=1);`
- `@var array<string, mixed> $attributes`, `@var WP_Block $block`
- `get_block_wrapper_attributes()` for color/spacing supports
- `nextora_testimonials_resolve_color()` — same preset/hex pattern as testimonial-carousel
- Normalize items via `nextora_testimonials_normalize_item()`; filter `nextora_testimonials_items`
- Portrait: **`wp_get_attachment_image( $portrait_id, 'large', false, [...] )`**
- Escape all text; `<blockquote>` for quote; decorative SVG `aria-hidden="true"`
- When `enableScrollAnimation` is true, output `data-nextora-scroll-reveal="1"`
- Wrapper classes: `--loading` until JS sets `--ready`

After editing: **`npm run lint:php:all`**.

---

## Front-end behavior (`view.ts`)

| Item | Standard |
|------|----------|
| **Swiper modules** | `EffectFade`, `Pagination`, `Autoplay`, `Keyboard`, `A11y`; optional `Controller` if dual instances |
| **Init** | Idempotent `initRoot()` per block; guards `data-nextora-testimonials-swiper-inited="1"` |
| **Loading** | `nextora-testimonials--loading` → `--ready` after init ([`docs/blocks.md`](../blocks.md)) |
| **Width polling** | If container width is 0 on first paint, poll like [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| **Reduced motion** | Disable autoplay; skip scroll reveal; carousel may still init for keyboard/pagination |
| **Scroll reveal** | GSAP + ScrollTrigger when `data-nextora-scroll-reveal="1"` — soft fade of content panel (and optionally media); `once: true`; pattern [`blocks/testimonial-carousel/view.ts`](../../blocks/testimonial-carousel/view.ts) |
| **Re-init event** | Optional `nextora-testimonials-reinit` for dynamic content |

Import Swiper CSS from **`view.ts`** (`swiper/css`, `swiper/css/effect-fade`, pagination). Style file: **`view.css`**.

---

## Editor (`edit.tsx`)

Mirror [`blocks/testimonial-carousel/edit.tsx`](../../blocks/testimonial-carousel/edit.tsx):

- **Canvas:** Split preview (simplified — static first slide or tabbed slide index); heading RichText editable inline.
- **Inspector — Testimonials:** Compact list with reorder, add, remove; **Edit** opens **`Modal`** + [`testimonial-edit-form.tsx`](../../blocks/testimonials/testimonial-edit-form.tsx) fields: quote, name, age, location, portrait upload.
- **No Swiper in editor** — show slide stack or single-slide preview with slide indicator.
- **`normalizeTestimonials()`** preserves empty draft rows in editor (team-section pattern).
- All strings: **`__('…', 'nextora')`**.

### Suggested inspector panels

| Panel | Contents |
|-------|----------|
| **Content** | Heading text/level; top icon toggle, type, size, color |
| **Testimonials** | Repeater list + modal edit |
| **Layout** | Image position, column ratio, min height, content background, content padding |
| **Carousel** | Effect (fade), speed, loop |
| **Autoplay** | Toggle, delay, pause on hover |
| **Navigation** | Pagination toggle; arrows toggle (optional v1) |
| **Colors** | Heading, quote, author, pagination overrides |
| **Animation** | Animate on scroll |

Use **`@wordpress/components` `Modal`** for testimonial editing — not front-end `data-nextora-modal`.

---

## Accessibility

- Section heading uses proper heading level (`h2` default).
- `<blockquote>` / `<cite>` or `<footer>` for quote attribution.
- Pagination bullets: Swiper `a11y` module; each bullet reachable by keyboard.
- Portrait `alt` from `portraitAlt` or author name.
- Decorative wavy icon: `aria-hidden="true"`.
- Reduced motion: no autoplay, no scroll reveal animation.
- Scroll reveal: reveal-pending CSS ensures content visible without JS (team-section pattern).

---

## Extensibility hooks (plan)

- `nextora_testimonials_items`
- `nextora_testimonials_wrapper_classes`
- `nextora_testimonials_wrapper_attributes`
- `nextora_testimonials_swiper_options`

Mirror naming from [`nextora_testimonial_carousel_*`](../../blocks/testimonial-carousel/render.php) filters.

---

## Closest reference blocks

| Need | Block |
|------|--------|
| `testimonials[]` repeater + modal | [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/) |
| Dual/sync Swiper, fade | [`blocks/testimonial-carousel/view.ts`](../../blocks/testimonial-carousel/view.ts) |
| Split layout + image column | [`blocks/arc-gallery-section/`](../../blocks/arc-gallery-section/) (layout inspiration) |
| Ring / custom pagination CSS | [`blocks/team-section/style.css`](../../blocks/team-section/style.css) |
| Scroll reveal + GSAP | [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| Color resolve helper | [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) |

---

## Acceptance criteria

1. Block registered as **`nextora/testimonials`** with **`textdomain` `nextora`**.
2. Split layout matches mock: portrait column + white content panel with icon, heading, quote, attribution, bottom-left ring pagination.
3. Photo and quote **stay in sync** on slide change (fade transition default).
4. **`npm run lint:php:all`** and **`npm run typecheck`** pass.
5. Swiper loaded from **bundled `view.js`**, not CDN.
6. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and autoplay.
7. Portraits use **attachment IDs** + **`wp_get_attachment_image`** on the front.
8. Empty color attributes fall back to **`theme.json`** presets.
9. Multiple instances on one page init **independently**.
10. Mobile: columns **stack** (image above content); pagination remains visible and usable.
11. Document row added to **Reference blocks** in [`docs/blocks.md`](../blocks.md) when implemented.

---

## What not to add (v1)

- Trust counter / avatar stack (use `nextora/testimonial-carousel` instead)
- InnerBlocks / per-slide child blocks
- CDN Swiper
- Hard-coded mock hex palette in committed CSS
- `effect: "creative"` until fade is stable
- Standalone plugin package

---

## Build and quality

- `npm run build:blocks` after TS/CSS changes
- `npm run typecheck` for `edit.tsx`, `view.ts`, `types.ts`
- `npm run lint:php:all` on `render.php`
- Add entry to [`docs/blocks.md`](../blocks.md) reference table when shipped
