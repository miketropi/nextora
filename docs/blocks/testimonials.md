# Block: Testimonials

## Overview

The **Testimonials** block (`nextora/testimonials`) is a Nextora content block: a full-width slider for social proof, case studies, and editorial stories.

Editors insert **one block** in the inserter. Inside it they add **testimonial items** — each item is a two-column slide with native **Image**, **Heading**, and **Paragraph** blocks.

The carousel uses **Swiper 11** (theme dependency; see [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/)).

---

## Theme context

| Item | Value |
|------|--------|
| Inserter block | `nextora/testimonials` only |
| Text domain | `nextora` |
| Category | `design` |
| Child block (not in inserter) | `nextora/testimonial-item` |
| Registration | [`blocks/blocks.php`](../../blocks/blocks.php) — one folder per block with `block.json` |
| Standards | [`docs/blocks.md`](../blocks.md), [`AGENTS.md`](../../AGENTS.md) |

Implementation uses **two block folders** (`testimonials/` + `testimonial-item/`) because WordPress requires a registered block for each inner slide. Only **Testimonials** appears in the block library.

---

## Architecture

```
nextora/testimonials                  ← wrapper (slider, shared heading, nav, scroll reveal)
│   attributes: heading, slider options, enableScrollAnimation…
│
└── nextora/testimonial-item          ← repeatable inner slide (inserter: false)
    │   parent: ["nextora/testimonials"]
    │   two-column layout
    │
    ├── Column left  → core/image
    └── Column right → core/heading, core/paragraph (one or more)
```

### Wrapper (`nextora/testimonials`)

- Swiper init, pagination, optional arrows, autoplay
- Shared section heading + optional accent (does **not** change per slide)
- Optional scroll reveal (`enableScrollAnimation`)
- Editors add / remove / reorder **testimonial items**

### Item (`nextora/testimonial-item`)

- One Swiper slide per item
- **Two columns:** image left (~50%), text right (~50%)
- Allowed inner blocks: **`core/image`**, **`core/heading`**, **`core/paragraph`**
- Default template places one image (left) and heading + paragraph (right)
- `templateLock: "contentOnly"` — edit text and media; fixed column structure

---

## Design reference

| Element | Detail |
|---------|--------|
| Layout | Split slide: image left, text right |
| Image | Full-bleed, `object-fit: cover` in left column |
| Heading | Per item — `core/heading` in right column |
| Paragraph | Per item — `core/paragraph` in right column (quote, attribution, context) |
| Section heading | Shared on wrapper — does not slide |
| Accent | Optional SVG squiggle above shared heading |
| Navigation | Dots on by default; arrows off by default |
| Tokens | `var(--wp--preset--color--*)`, spacing and font presets from [`theme.json`](../../theme.json) |

---

## Attributes

### `nextora/testimonials`

| Attribute | Type | Default | Purpose |
|-----------|------|---------|---------|
| `heading` | `string` | `"Real Lives, Lasting Change"` | Shared section title |
| `headingLevel` | `number` | `2` | H1–H6 |
| `showAccent` | `boolean` | `true` | Decorative line above heading |
| `accentColor` | `string` | `""` | Preset slug or custom; empty = theme default |
| `autoplay` | `boolean` | `false` | Autoplay |
| `autoplayDelay` | `number` | `5000` | Interval (ms) |
| `speed` | `number` | `600` | Transition (ms) |
| `showPagination` | `boolean` | `true` | Dot pagination |
| `showNav` | `boolean` | `false` | Prev / next arrows |
| `loop` | `boolean` | `true` | Loop / rewind |
| `pauseOnHover` | `boolean` | `true` | Pause autoplay on hover |
| `effect` | `string` | `"slide"` | `"slide"` or `"fade"` |
| `enableScrollAnimation` | `boolean` | `true` | Scroll reveal ([`docs/blocks.md`](../blocks.md)) |

### `nextora/testimonial-item`

No custom attributes. Content lives in inner blocks.

**Allowed blocks:** `core/image`, `core/heading`, `core/paragraph`.

**Default template:**

```json
[
  [
    "core/image",
    {
      "align": "full",
      "sizeSlug": "large",
      "linkDestination": "none",
      "className": "nextora-testimonial-item__image"
    }
  ],
  [
    "core/heading",
    {
      "level": 3,
      "placeholder": "Heading",
      "className": "nextora-testimonial-item__heading"
    }
  ],
  [
    "core/paragraph",
    {
      "placeholder": "Write testimonial text…",
      "className": "nextora-testimonial-item__paragraph"
    }
  ]
]
```

In `edit.tsx`, use the same list for `allowedBlocks` on `InnerBlocks` / `useInnerBlocksProps`.

---

## Render output

### Wrapper

```html
<section class="wp-block-nextora-testimonials nextora-testimonials nextora-testimonials--loading"
         data-nextora-scroll-reveal="1">
  <div class="nextora-testimonials__layout">
    <div class="nextora-testimonials__carousel" data-swiper-opts="{…}">
      <div class="swiper nextora-testimonials__swiper">
        <div class="swiper-wrapper">
          <!-- each nextora/testimonial-item → .swiper-slide -->
        </div>
      </div>
      <!-- optional arrows + pagination -->
    </div>
    <div class="nextora-testimonials__heading-panel">
      <!-- accent + shared heading — outside .swiper-wrapper -->
    </div>
  </div>
</section>
```

### Item

```html
<div class="swiper-slide nextora-testimonial-item">
  <div class="nextora-testimonial-item__image-col">
    <!-- core/image -->
  </div>
  <div class="nextora-testimonial-item__content-col">
    <!-- core/heading, core/paragraph -->
  </div>
</div>
```

**PHP:** Prefer `$block->inner_blocks` on the item. Route `core/image` to the left column; `core/heading` and `core/paragraph` to the right column in template order.

---

## Front-end behaviour

Follow [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts):

- `viewScript` on wrapper → `view.ts` bundles Swiper
- `nextora-testimonials--loading` → `--ready` after init
- `data-nextora-testimonials-init-pending` / `data-nextora-testimonials-inited` guards
- Width polling before mount; `loop` vs `rewind` by slide count
- Disable autoplay when `prefers-reduced-motion: reduce`
- GSAP ScrollTrigger when `data-nextora-scroll-reveal="1"`

Do **not** enqueue Swiper from `functions.php`.

---

## Editor controls

### Testimonials (wrapper)

| Panel | Controls |
|-------|----------|
| **Content** | Shared heading (RichText on canvas), heading level, show accent |
| **Colors** | Accent color (empty = theme default) |
| **Settings** | Effect, loop, speed |
| **Autoplay** | Enable, interval, pause on hover |
| **Navigation** | Pagination, arrows |
| **Animation** | Animate on scroll |

### Testimonial item

- No wrapper Inspector — edit **Image**, **Heading**, and **Paragraph** inline on the canvas
- `editor.css`: two-column preview; no carousel motion in the editor
- **+** on wrapper adds another testimonial item

---

## CSS

Scope: `.nextora-testimonials`, `.nextora-testimonial-item`.

```css
.nextora-testimonial-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 520px;
}
.nextora-testimonial-item__image-col img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nextora-testimonial-item__content-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--wp--preset--spacing--30);
  padding: var(--wp--preset--spacing--70) var(--wp--preset--spacing--60);
}
```

Responsive: single column below ~767px; image column ~280px tall.

After CSS changes: **`npm run build:blocks`** (or **`npm run build`**).

---

## File structure

```
blocks/
├── testimonials/              ← inserter block
│   ├── block.json
│   ├── index.tsx
│   ├── edit.tsx
│   ├── save.tsx
│   ├── render.php
│   ├── style.css
│   ├── editor.css
│   └── view.ts                → view.js
│
└── testimonial-item/          ← child only (parent + inserter: false)
    ├── block.json
    ├── index.tsx
    ├── edit.tsx
    ├── save.tsx
    ├── render.php
    ├── style.css
    └── editor.css
```

Generated: `index.js`, `index.asset.php`, `view.js` — do not edit by hand.

---

## Development workflow

```bash
npm run gen -- --name=testimonials --category=design --ns=nextora
npm run gen -- --name=testimonial-item --category=design --ns=nextora
# Adjust block.json: parent, template, allowedBlocks, viewScript on wrapper

npm run build:blocks
npm run lint:php:all      # after render.php
npm run typecheck         # after edit.tsx / view.ts
```

---

## Implementation checklist

- [ ] Inserter shows **Testimonials** only (`nextora/testimonials`)
- [ ] `nextora/testimonial-item` has `parent` + `"inserter": false`
- [ ] Item allows only `core/image`, `core/heading`, `core/paragraph`
- [ ] Two-column split in `render.php` via `$block->inner_blocks`
- [ ] Shared heading outside `.swiper-wrapper`
- [ ] Swiper + scroll reveal per [`docs/blocks.md`](../blocks.md)
- [ ] `textdomain: nextora`; PHP lint + block build pass

---

## Notes for agents

1. Document and ship **one user-facing block** — Testimonials. `testimonial-item` is an internal child.
2. No separate author or quote blocks — use **Paragraph** for quote and attribution text.
3. **`templateLock: "contentOnly"`** on items — fixed slots; editors change content only.
4. Rename legacy `testimonial-slide` / `testimonial-author` to this model if still present in the codebase.

### Related

| Resource | Use for |
|----------|---------|
| [`docs/blocks.md`](../blocks.md) | Tokens, animation, JS init |
| [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/) | Swiper pattern |
| [`blocks/page-title/`](../../blocks/page-title/) | InnerBlocks wrapper |
| `.cursor/skills/nextora-add-theme-block/SKILL.md` | Block workflow |
