# Block: Instagram Feed

**Version:** 1.0  
**Status:** Implemented as **`nextora/instagram-feed`** in [`blocks/instagram-feed/`](../../blocks/instagram-feed/).  
**For:** AI Agent Development  
**Related:** [`docs/blocks/testimonials.md`](./testimonials.md) (repeater + modal edit pattern), [`docs/blocks/Our Team Section Block.md`](./Our%20Team%20Section%20Block.md) (header + carousel + corner edit button), [`docs/modal.md`](../modal.md) (front-end lightbox)

When building, follow this document and [`docs/blocks.md`](../blocks.md). Reuse patterns from [`blocks/team-section/`](../../blocks/team-section/), [`blocks/blog-list-carousel/`](../../blocks/blog-list-carousel/), and [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/) where noted.

---

## Overview

The **Instagram Feed** block (`nextora/instagram-feed`) renders a **curated Instagram-style feed section**:

- **Header row:** Small uppercase eyebrow (e.g. *Follow us on Instagram*), large **@handle**, and an outline **Follow on Instagram** CTA aligned to the right.
- **Feed row:** Horizontal **Swiper** carousel of square tiles (images or muted-loop videos). Tiles are clickable.
- **Lightbox:** Clicking a tile opens a **two-column modal** — media on the left (black frame, prev/next arrows), caption sidebar on the right (@handle, caption, *View on Instagram* link, close button).

The design is minimal and editorial — square crops, generous spacing, and typography from [`theme.json`](../../theme.json). Content is **manually curated in the editor** (WP Media Library); there is **no Instagram API integration in v1**.

**Reference mock (approved design):**

| Area | Content |
|------|---------|
| Header — eyebrow | Small caps label, e.g. **FOLLOW US ON INSTAGRAM** |
| Header — handle | Large bold sans-serif, e.g. **@yourbrand** |
| Header — CTA | Outline pill button, e.g. **Follow on Instagram** (top-right on desktop) |
| Feed | Row of **5** square tiles (1:1), light gray placeholder or uploaded media, subtle rounded corners |
| Lightbox — media | Full-height image or video on black background; circular prev/next chevrons on left/right edges |
| Lightbox — sidebar | White panel: **@yourbrand**, caption text (with emoji support), **View on Instagram** link at bottom, **×** close top-right |

**Design philosophy:** Looks like an Instagram highlight reel without requiring Meta API keys. Editors upload images/videos and paste captions + permalinks. Front-end lightbox reuses the theme modal layer for focus trap, Escape, and reduced motion.

**Not in scope for v1:** Live Instagram oEmbed/API sync, comments/likes in lightbox, masonry grid (carousel only), auto-import from hashtag.

---

## Theme context

| Item | Value |
|------|--------|
| **Block name** | `nextora/instagram-feed` |
| **Title** | Instagram Feed |
| **Category** | `design` |
| **Text domain** | `nextora` |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `render.php`, `types.ts`, `style.css`, `editor.css`, `view.css`, `view.ts`, `post-edit-form.tsx`, `post-utils.ts` |
| **Build** | `npm run build:blocks` — do **not** hand-edit `index.js` / `index.asset.php` / `view.js` |
| **Scaffold** | `npm run gen -- --name=instagram-feed --ns=nextora --category=design` |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), [`docs/modal.md`](../modal.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**.

---

## Scope and intent

Use `nextora/instagram-feed` on homepages, footers, and campaign landing pages where a **brand Instagram presence** should be showcased — fashion, lifestyle, nonprofit storytelling, product launches.

The block is a **single dynamic block** with a `posts[]` repeater (same data model approach as [`nextora/team-section`](../../blocks/team-section/) and [`nextora/testimonials`](../../blocks/testimonials/)), not InnerBlocks.

**Manual curation rationale:** Avoids API tokens, rate limits, and GDPR concerns. Editors mirror their Instagram grid by uploading the same assets and pasting permalinks. Optional future v2: REST proxy to Instagram Basic Display / Graph API behind a feature flag.

---

## Architecture

```
nextora/instagram-feed                 ← single dynamic block, no InnerBlocks
├── attributes.posts[]                 ← feed item objects (media, caption, link)
├── attributes.eyebrowText / handle*   ← section header copy
├── attributes.showButton / button*    ← Follow CTA (team-section CTA pattern)
├── attributes.slidesPerView*          ← responsive Swiper breakpoints
├── attributes.spaceBetween / loop     ← carousel layout
├── attributes.autoplay*               ← autoplay toggle, delay, pause on hover
├── attributes.showPagination / arrows ← navigation chrome
├── attributes.enableScrollAnimation   ← GSAP scroll reveal on section enter
├── render.php                         ← header + Swiper slides + modal markup + data-swiper-opts
├── view.ts                            ← Swiper init + modal open/sync + scroll reveal
├── post-edit-form.tsx                 ← editor Modal fields (image/video, caption, URL)
└── post-utils.ts                      ← normalizePosts(), createPostId(), resolveMediaUrl()
```

### Why single block + repeater

- Feed rows are structured data (media type, attachment ID, caption, permalink) — not freeform nested layout.
- Lightbox must stay in sync with carousel index; a repeater + PHP render is simpler than parent/child InnerBlocks.
- Aligns with [`nextora/team-section`](../../blocks/team-section/) (corner **Edit** on canvas tiles + inspector list).

### Distinction from similar blocks

| Feature | `nextora/instagram-feed` | `nextora/image-gallery-slide` | `nextora/team-section` |
|---------|--------------------------|----------------------------------|------------------------|
| Purpose | Instagram-style feed + lightbox | Generic image slider | Team member cards |
| Header | Eyebrow + @handle + Follow CTA | None | Eyebrow + heading + CTA |
| Tile shape | Square (1:1) | Configurable aspect | Portrait card |
| Lightbox | Two-column modal w/ caption | None (v1) | None |
| Video | Yes (attachment or external URL) | No | No |
| Editor list | Horizontal tiles + corner Edit | Thumbnail strip | Cards + corner Edit |

---

## Block registration

| Property | Value |
|----------|--------|
| `name` | `nextora/instagram-feed` |
| `title` | Instagram Feed |
| `category` | `design` |
| `icon` | `instagram` (Dashicon) |
| `description` | Curated Instagram-style feed with square tiles, carousel, and lightbox popup. |
| `render` | `file:./render.php` (dynamic) |
| `editorScript` | `file:./index.js` (built from `index.tsx`) |
| `viewScript` | `file:./view.js` (built from `view.ts`) |
| `style` / `editorStyle` | `file:./view.css`, `file:./editor.css` |
| `supports.align` | `wide`, `full` |
| `supports.color` | `background`, `text`, `link` |
| `supports.spacing` | `margin`, `padding` |
| `supports.typography` | `fontSize`, `lineHeight` (section-level) |
| `supports.html` | `false` |
| Inner blocks | none — `save.tsx` returns `null` |

---

## Attributes schema

### Content — section header

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `eyebrowText` | `string` | `"Follow us on Instagram"` | RichText (canvas) or TextControl | Small caps label above handle |
| `handleText` | `string` | `"@yourbrand"` | RichText (canvas) | Display handle (include `@` or auto-prefix in PHP) |
| `handleLevel` | `number` | `2` | SelectControl (2–4) | Heading tag level for handle |
| `headerLayout` | `string` | `"split"` | SelectControl | `"split"` (label left, button right), `"stacked"`, `"left-aligned"` — mirror team-section |
| `contentMaxWidth` | `string` | `"1200px"` | TextControl | Inner shell max width |

### Content — Follow CTA

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `showButton` | `boolean` | `true` | ToggleControl | Show Follow button in header |
| `buttonText` | `string` | `"Follow on Instagram"` | TextControl | CTA label |
| `buttonUrl` | `string` | `"https://instagram.com/yourbrand"` | URLInput | Profile or post URL |
| `buttonTarget` | `boolean` | `true` | ToggleControl | Open in new tab (`rel="noopener noreferrer"`) |
| `buttonStyle` | `string` | `"outline"` | SelectControl | `"outline"`, `"solid"`, `"link"` — match team-section |
| `buttonBorderRadius` | `number` | `50` | RangeControl (0–50) | Pill radius |

### Content — posts repeater

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `posts` | `array` | 5 sample items | Canvas tiles + inspector list + modal | Feed rows (see item schema) |

### Layout — tiles

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `tileAspectRatio` | `string` | `"1/1"` | SelectControl | `"1/1"` (v1 only; defer `"4/5"`) |
| `tileBorderRadius` | `number` | `8` | RangeControl (0–24) | Corner radius on feed tiles |
| `tileBackground` | `string` | `""` | Color control | Placeholder tile fill; empty = `var(--wp--preset--color--neutral)` or theme muted token |
| `showTileOverlay` | `boolean` | `false` | ToggleControl | Optional hover scrim + Instagram icon |
| `tileImageSize` | `string` | `"large"` | SelectControl | WP image size slug for front-end `src` |

### Carousel (Swiper) — full options

Align attribute names and sidebar panel structure with [`nextora/blog-list-carousel`](../../blocks/blog-list-carousel/) and [`nextora/team-section`](../../blocks/team-section/).

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `slidesPerView` | `number` | `5` | RangeControl (1–6, step 0.5) | Desktop slides visible |
| `slidesPerViewTablet` | `number` | `3` | RangeControl (1–4, step 0.5) | Tablet (`≥768px`) |
| `slidesPerViewMobile` | `number` | `2.15` | RangeControl (1–3, step 0.05) | Mobile peek |
| `spaceBetween` | `number` | `16` | RangeControl (0–48) | Gap between tiles (px) |
| `speed` | `number` | `500` | RangeControl (200–2000) | Transition duration (ms) |
| `loop` | `boolean` | `false` | ToggleControl | Infinite loop |
| `freeMode` | `boolean` | `false` | ToggleControl | Momentum scrolling |
| `grabCursor` | `boolean` | `true` | ToggleControl | Grab cursor on desktop |
| `autoplay` | `boolean` | `false` | ToggleControl | Enable autoplay |
| `autoplayDelay` | `number` | `5000` | RangeControl (2000–15000) | Autoplay interval (ms) |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause autoplay on hover |
| `showPagination` | `boolean` | `false` | ToggleControl | Dots below carousel (default off per mock) |
| `paginationType` | `string` | `"bullets"` | SelectControl | `"bullets"`, `"fraction"`, `"progressbar"` |
| `showArrows` | `boolean` | `false` | ToggleControl | Prev/next on carousel (distinct from lightbox arrows) |
| `arrowStyle` | `string` | `"minimal"` | SelectControl | Match image-gallery-slide / blog-list-carousel |

### Lightbox

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableLightbox` | `boolean` | `true` | ToggleControl | Open modal on tile click |
| `lightboxShowArrows` | `boolean` | `true` | ToggleControl | Prev/next inside lightbox media pane |
| `lightboxShowCaption` | `boolean` | `true` | ToggleControl | Caption in sidebar |
| `lightboxLinkText` | `string` | `"View on Instagram"` | TextControl | Footer link label |
| `lightboxHandleOverride` | `string` | `""` | TextControl | Sidebar @handle; empty = `handleText` block attribute |

### Colors (scoped overrides)

Prefer **`supports.color`** on the block wrapper first. Add scoped attributes only when needed:

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `eyebrowColor` | `string` | `""` | Eyebrow label |
| `handleColor` | `string` | `""` | @handle heading |
| `buttonColor` | `string` | `""` | CTA text |
| `buttonBorderColor` | `string` | `""` | CTA border (outline style) |
| `tileOverlayColor` | `string` | `""` | Hover overlay |
| `paginationColor` | `string` | `""` | Inactive bullets |
| `paginationActiveColor` | `string` | `""` | Active bullet |
| `lightboxSidebarBackground` | `string` | `""` | Modal sidebar panel |

Empty values fall back to **`theme.json`** presets via `var(--wp--preset--color--*)` — not mock hex in committed CSS.

### Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | Fade/slide section in when block enters viewport |

Standard help text from [`docs/blocks.md`](../blocks.md): *Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.*

### Post item schema

Each entry in `attributes.posts`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stable key (`createPostId()` — mirror [`member-utils.ts`](../../blocks/team-section/member-utils.ts)) |
| `mediaType` | `string` | yes | `"image"` or `"video"` |
| `mediaId` | `number` | yes* | WP attachment ID (image or self-hosted video) |
| `mediaAlt` | `string` | no | Alt text for images; decorative video poster may use empty + `aria-hidden` on decorative layers |
| `videoUrl` | `string` | no | External video URL when not using attachment (optional v1 — prefer attachment) |
| `posterId` | `number` | no | Video poster attachment ID |
| `caption` | `string` | no | Lightbox sidebar copy (plain text + emoji; allow `core/bold`, `core/link` in editor only if stored as sanitized HTML) |
| `permalink` | `string` | no | Instagram post URL for *View on Instagram* |
| `order` | `number` | no | Explicit sort; default array order |

\* Editor allows draft rows with `mediaId: 0` and shows gray placeholder tile; front end **skips** slides where both `mediaId` and `videoUrl` are empty.

**Video behavior (front end):**

- Prefer `<video>` from attachment with `muted`, `playsinline`, `loop`, `controls` in lightbox; feed tile shows poster or first frame with optional subtle play icon overlay.
- Respect **`prefers-reduced-motion: reduce`**: no autoplay in feed tile; show poster only until user opens lightbox.

Example default items (5 placeholders matching mock):

```json
[
  {
    "id": "1",
    "mediaType": "image",
    "mediaId": 0,
    "mediaAlt": "",
    "caption": "Introducing our new collection ✨",
    "permalink": "https://instagram.com/p/example"
  }
]
```

Duplicate the object with ids `"2"`–`"5"` and varied placeholder captions in `block.json` defaults.

---

## Design system

1. **Presets first** — Section background, text, and link colors from `supports.color` + scoped overrides. CTA uses team-section button tokens (`--nextora-team-btn-*` or shared `--nextora-cta-*` if extracted).
2. **CSS variables** — Prefix **`--nextora-instagram-*`** (e.g. `--nextora-instagram-tile-radius`, `--nextora-instagram-tile-gap`, `--nextora-instagram-lightbox-media-bg`).
3. **Typography** — Eyebrow: small caps, letter-spacing, preset `small` or custom clamp. Handle: bold, large (`clamp(1.75rem, 4vw, 2.75rem)`). Caption in lightbox: comfortable reading size, preserve line breaks.
4. **Header** — CSS Grid split layout at desktop (`1fr auto`); stack on mobile (handle then full-width button). Match [`nextora-team-section__header`](../../blocks/team-section/style.css).
5. **Tiles** — `aspect-ratio: 1 / 1`, `object-fit: cover`, `overflow: hidden`. Hover: optional scale `1.02` (match post-grid card hover from [`docs/blocks.md`](../blocks.md)).
6. **Lightbox** — Custom modal surface variant `nextora-modal__surface--instagram` (~90vw max, ~85vh max). Media column ~62%, sidebar ~38%; stack vertically below `768px` (media top, caption below). Media background `#000` via `--nextora-instagram-lightbox-media-bg`, not hard-coded in unrelated selectors.
7. **Carousel arrows (lightbox)** — Reuse SVG paths and dimensions from [`blocks/image-gallery-slide/view.css`](../../blocks/image-gallery-slide/view.css); circular black/white chevrons on media edges per mock.

---

## Class and CSS variable naming

| Concept | Nextora |
|---------|---------|
| Root | `wp-block-nextora-instagram-feed` + **`nextora-instagram-feed`** |
| Header | `nextora-instagram-feed__header`, `__eyebrow`, `__handle`, `__cta` |
| Carousel | `nextora-instagram-feed__swiper`, `__slide`, `__tile`, `__tile-media`, `__tile-video`, `__tile-play` |
| Lightbox | `nextora-instagram-feed__lightbox`, `__lightbox-media`, `__lightbox-sidebar`, `__lightbox-caption`, `__lightbox-link` |
| Pagination / arrows | `nextora-instagram-feed__pagination`, `__arrow--prev`, `__arrow--next` |
| Modifiers | `nextora-instagram-feed--header-split`, `--loading`, `--ready`, `--lightbox-open` |
| Variables | `--nextora-instagram-tile-radius`, `--nextora-instagram-tile-gap`, `--nextora-instagram-content-max-width`, `--nextora-instagram-lightbox-media-bg`, `--nextora-instagram-lightbox-sidebar-bg` |

---

## Render output

### High-level HTML

```html
<div
  class="wp-block-nextora-instagram-feed nextora-instagram-feed nextora-instagram-feed--header-split alignfull nextora-instagram-feed--loading"
  style="--nextora-instagram-content-max-width: 1200px; --nextora-instagram-tile-radius: 8px; --nextora-instagram-tile-gap: 16px;"
  data-swiper-opts="{...}"
  data-nextora-scroll-reveal="1"
  data-nextora-instagram-handle="@yourbrand"
>
  <div class="nextora-instagram-feed__shell">

    <header class="nextora-instagram-feed__header">
      <div class="nextora-instagram-feed__header-copy">
        <p class="nextora-instagram-feed__eyebrow">Follow us on Instagram</p>
        <h2 class="nextora-instagram-feed__handle">@yourbrand</h2>
      </div>
      <div class="nextora-instagram-feed__cta">
        <a class="nextora-instagram-feed__btn nextora-instagram-feed__btn--outline" href="https://instagram.com/yourbrand" target="_blank" rel="noopener noreferrer">
          Follow on Instagram
        </a>
      </div>
    </header>

    <div class="nextora-instagram-feed__carousel-wrap">
      <div class="swiper nextora-instagram-feed__swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide nextora-instagram-feed__slide">
            <button
              type="button"
              class="nextora-instagram-feed__tile"
              data-nextora-instagram-open="0"
              aria-label="Open Instagram post 1"
            >
              <span class="nextora-instagram-feed__tile-media">
                <img src="..." alt="" width="..." height="..." loading="lazy" decoding="async" />
              </span>
            </button>
          </div>
          <!-- one slide per post -->
        </div>
      </div>
      <!-- optional carousel arrows + pagination -->
    </div>

  </div>

  <!-- Lightbox: theme modal contract (docs/modal.md) -->
  <div
    id="nextora-instagram-feed-{blockId}"
    class="nextora-modal nextora-instagram-feed__lightbox"
    hidden
    data-nextora-modal
    aria-hidden="true"
  >
    <div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
    <div
      class="nextora-modal__surface nextora-modal__surface--instagram"
      data-nextora-modal-surface
      role="dialog"
      aria-modal="true"
      aria-labelledby="nextora-instagram-feed-{blockId}-title"
      tabindex="-1"
    >
      <div class="nextora-instagram-feed__lightbox-layout">
        <div class="nextora-instagram-feed__lightbox-media" data-nextora-instagram-lightbox-media>
          <!-- active slide img or video; Swiper or manual index sync -->
          <button type="button" class="nextora-instagram-feed__arrow nextora-instagram-feed__arrow--prev" aria-label="Previous post">
            <!-- chevron -->
          </button>
          <button type="button" class="nextora-instagram-feed__arrow nextora-instagram-feed__arrow--next" aria-label="Next post">
            <!-- chevron -->
          </button>
        </div>
        <aside class="nextora-instagram-feed__lightbox-sidebar">
          <div class="nextora-instagram-feed__lightbox-header">
            <p id="nextora-instagram-feed-{blockId}-title" class="nextora-instagram-feed__lightbox-handle">@yourbrand</p>
            <button type="button" class="nextora-modal__close" data-nextora-modal-dismiss aria-label="Close">
              <span class="nextora-modal__close-icon" aria-hidden="true">…</span>
            </button>
          </div>
          <div class="nextora-instagram-feed__lightbox-caption" data-nextora-instagram-lightbox-caption>
            <p>Introducing our new collection ✨</p>
          </div>
          <a class="nextora-instagram-feed__lightbox-link" href="https://instagram.com/p/example" target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </aside>
      </div>
    </div>
  </div>
</div>
```

### Swiper architecture (feed carousel)

Single Swiper instance on `.nextora-instagram-feed__swiper`:

- **`slidesPerView`** + **`breakpoints`** from PHP (`slidesPerViewMobile` / tablet / desktop).
- Modules: `Pagination`, `Autoplay`, `Keyboard`, `A11y`, `FreeMode` (when enabled).
- Pass options as **`data-swiper-opts`** JSON from PHP (pattern: [`blocks/blog-list-carousel/render.php`](../../blocks/blog-list-carousel/render.php)).
- Tile click **does not** navigate Swiper automatically unless opening lightbox at that index.

**Do not** enqueue Swiper from a CDN — bundle in **`view.ts`** via `npm run build:blocks`.

### Lightbox architecture

**Recommended v1 — Theme modal + index sync:**

1. Each tile is `<button type="button">` with `data-nextora-instagram-open="{index}"`.
2. `view.ts` listens for clicks, sets active index, updates media/caption/link DOM, calls `openModalById()` from [`resources/ts/lib/modal.ts`](../../resources/ts/lib/modal.ts).
3. Lightbox prev/next updates index and media without closing modal; wrap at ends unless `loop` is also enabled for lightbox (default: wrap when `posts.length > 1`).
4. On open: focus close button or dialog surface; on close: restore focus to triggering tile.
5. **Do not** use `@wordpress/components` `Modal` on the front end.

Optional enhancement: second Swiper inside lightbox media pane synced to feed index — defer unless manual DOM swap is insufficient for video reload edge cases.

---

## PHP render callback (`render.php`)

Requirements:

- `declare(strict_types=1);`
- `@var array<string, mixed> $attributes`, `@var WP_Block $block`
- `get_block_wrapper_attributes()` for color/spacing supports
- `nextora_instagram_feed_resolve_color()` — same preset/hex pattern as team-section / blog-list-carousel
- Normalize items via `nextora_instagram_feed_normalize_post()`; filter `nextora_instagram_feed_posts`
- Image: **`wp_get_attachment_image( $media_id, $tile_image_size, false, [...] )`**
- Video: attachment URL via `wp_get_attachment_url()`; output `<video>` in lightbox template with poster from `posterId`
- Escape all text; caption via `wp_kses_post()` with allowed tags matching editor storage
- Permalink and button URL: `esc_url()`; external links `target="_blank"` `rel="noopener noreferrer"`
- Unique modal id: `nextora-instagram-feed-{ $block->parsed_block['attrs']['anchor'] ?? wp_unique_id() }`
- When `enableScrollAnimation` is true, output `data-nextora-scroll-reveal="1"`
- When `enableLightbox` is false, render tiles as `<a href="{permalink}">` fallback (no modal markup)
- Wrapper classes: `--loading` until JS sets `--ready`
- Localize lightbox strings via `wp_localize_script` or inline `data-*` only if needed; prefer PHP `esc_attr__()` for `aria-label`

After editing: **`npm run lint:php:all`**.

---

## Front-end behavior (`view.ts`)

| Item | Standard |
|------|----------|
| **Swiper modules** | `Pagination`, `Autoplay`, `Keyboard`, `A11y`, `FreeMode` (conditional) |
| **Init** | Idempotent `initRoot()` per block; guards `data-nextora-instagram-feed-inited="1"` |
| **Loading** | `nextora-instagram-feed--loading` → `--ready` after init ([`docs/blocks.md`](../blocks.md)) |
| **Width polling** | If container width is 0 on first paint, poll like [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| **Lightbox** | Import `openModalById`, `closeModal` from [`resources/ts/lib/modal.ts`](../../resources/ts/lib/modal.ts); ensure `initModals()` already ran globally |
| **Lightbox nav** | Arrow buttons + Left/Right keyboard when modal open; do not steal focus from input elements |
| **Video** | Load/play video on lightbox open; pause and reset on close |
| **Reduced motion** | Disable carousel autoplay; skip scroll reveal; no feed-tile video autoplay |
| **Scroll reveal** | GSAP + ScrollTrigger when `data-nextora-scroll-reveal="1"` — fade header then tiles; `once: true`; pattern [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| **Re-init event** | Optional `nextora-instagram-feed-reinit` for dynamic content |

Import Swiper CSS from **`view.ts`**. Style file: **`view.css`**.

---

## Editor (`edit.tsx`)

Mirror [`blocks/team-section/edit.tsx`](../../blocks/team-section/edit.tsx) for canvas + [`blocks/testimonials/edit.tsx`](../../blocks/testimonials/edit.tsx) for inspector list:

### Canvas (primary editing surface)

- **Header:** Inline RichText for eyebrow + handle; non-functional CTA preview (span styled as button).
- **Feed row:** Static horizontal list or simplified Swiper-free flex row showing **all posts** as square tiles (scroll horizontally if overflow).
- **Each tile:** `article.nextora-instagram-feed__tile--editable` with:
  - **Corner Edit button** — `button.nextora-instagram-feed__tile-edit` (top-right), opens `@wordpress/components` **`Modal`** + `post-edit-form.tsx`. Pattern: [`nextora-team-section__card-edit`](../../blocks/team-section/editor.css).
  - Media preview (image or video poster), gray placeholder when empty.
  - Optional type badge (`Image` / `Video`) in corner opposite Edit.
- **Add tile** — `+ Add post` below row (primary button).
- **No Swiper in editor** — avoids double-init; matches testimonials/team-section approach.

### Inspector panels

| Panel | Contents |
|-------|----------|
| **Posts** | Compact list (index, media type icon, caption excerpt); Edit / Up / Down / Remove; Add post |
| **Header layout** | Layout preset, heading level, content max width |
| **Follow button** | Show toggle, text, URL, target, style, border radius |
| **Layout** | Tile radius, gap (preview), tile background, overlay toggle |
| **Carousel** | Slides per view (mobile/tablet/desktop), space between, speed, loop, freeMode, grabCursor |
| **Autoplay** | Toggle, delay, pause on hover |
| **Navigation** | Pagination toggle + type; carousel arrows toggle + style |
| **Lightbox** | Enable toggle, sidebar handle override, link text, lightbox arrows toggle |
| **Colors** | Eyebrow, handle, button, tile overlay, pagination, lightbox sidebar |
| **Animation** | Animate on scroll |

Use **`@wordpress/components` `Modal`** for post editing — **not** front-end `data-nextora-modal`.

### Post edit form (`post-edit-form.tsx`)

| Field | Control | Notes |
|-------|---------|-------|
| Media type | `SelectControl` | Image / Video |
| Image | `MediaUpload` | Sets `mediaId`, `mediaAlt` |
| Video | `MediaUpload` (`allowedTypes: ['video']`) | Sets `mediaId`; optional poster upload |
| Caption | `TextareaControl` or `RichText` | Stored sanitized |
| Permalink | `TextControl` + validation hint | Instagram URL |
| Remove media | Button | Clears ids |

All strings: **`__('…', 'nextora')`**.  
**`normalizePosts()`** preserves empty draft rows in editor (team-section pattern).

---

## Accessibility

- Section handle uses proper heading level (`h2` default).
- Feed tiles: `<button type="button">` when lightbox enabled; descriptive `aria-label` e.g. `Open Instagram post {n}` — translated via `nextora` text domain.
- Decorative play icon on video tiles: `aria-hidden="true"`.
- Lightbox: theme modal — `role="dialog"`, `aria-modal`, focus trap, Escape closes, focus restore ([`docs/modal.md`](../modal.md)).
- Lightbox prev/next: `<button type="button">` with `aria-label="<?php echo esc_attr__( 'Previous post', 'nextora' ); ?>"` / `'Next post'`.
- Images: non-empty `alt` when informative; empty alt + `aria-hidden` only for purely decorative feed thumbnails if caption carries meaning (prefer meaningful alt).
- Video in lightbox: visible controls; no autoplay with sound.
- Reduced motion: no carousel autoplay, no feed video autoplay, no scroll reveal animation.
- Scroll reveal: `--reveal-pending` CSS ensures content visible without JS.

---

## Extensibility hooks (plan)

- `nextora_instagram_feed_posts`
- `nextora_instagram_feed_wrapper_classes`
- `nextora_instagram_feed_wrapper_attributes`
- `nextora_instagram_feed_swiper_options`
- `nextora_instagram_feed_lightbox_post` — filter per-item data before lightbox render

Mirror naming from [`nextora_team_section_*`](../../blocks/team-section/render.php) / [`nextora_blog_list_carousel_*`](../../blocks/blog-list-carousel/render.php) filters.

---

## Closest reference blocks

| Need | Block |
|------|--------|
| Header split + CTA button styling | [`blocks/team-section/`](../../blocks/team-section/) |
| Corner Edit on canvas card | [`blocks/team-section/edit.tsx`](../../blocks/team-section/edit.tsx) + `editor.css` |
| Repeater list + modal form | [`blocks/testimonials/`](../../blocks/testimonials/), [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/) |
| Full Swiper option set | [`blocks/blog-list-carousel/`](../../blocks/blog-list-carousel/) |
| Carousel arrows + pagination CSS | [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/) |
| Theme modal / focus trap | [`resources/ts/lib/modal.ts`](../../resources/ts/lib/modal.ts), [`docs/modal.md`](../modal.md) |
| Scroll reveal + GSAP | [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| Color resolve helper | [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) |
| Video attachment handling | WP core `video` block patterns + `wp_get_attachment_url()` |

---

## Acceptance criteria

1. Block registered as **`nextora/instagram-feed`** with **`textdomain` `nextora`**.
2. Header matches mock: eyebrow, **@handle**, outline **Follow on Instagram** CTA (split layout desktop).
3. Feed renders **square** tiles in Swiper with configurable slides-per-view breakpoints (default ~5 desktop).
4. Editor canvas shows **list of tiles** with **Edit button in corner** opening modal form; supports **image and video** items.
5. Clicking a tile opens **two-column lightbox** per mock: black media pane with arrows, white sidebar with handle, caption, *View on Instagram* link, close control.
6. Lightbox prev/next cycles posts; video plays in modal; pauses on close.
7. **`npm run lint:php:all`** and **`npm run typecheck`** pass.
8. Swiper loaded from **bundled `view.js`**, not CDN.
9. Lightbox uses **theme modal** (`data-nextora-modal`), not a bespoke untrapped overlay.
10. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and autoplay.
11. Media uses **attachment IDs** + **`wp_get_attachment_image`** / attachment video URL on the front.
12. Empty color attributes fall back to **`theme.json`** presets.
13. Multiple instances on one page init **independently** (unique modal ids).
14. Mobile: header stacks; lightbox stacks media above caption; carousel shows peek slide on mobile.
15. Document row added to **Reference blocks** in [`docs/blocks.md`](../blocks.md) when implemented.

---

## What not to add (v1)

- Instagram Graph API / oEmbed auto-sync
- InnerBlocks / per-post child blocks
- CDN Swiper
- Hard-coded mock hex palette in committed CSS
- `@wordpress/components` Modal on the front end
- Comments, likes, or share counts in lightbox
- Standalone plugin package

---

## Build and quality

- `npm run build:blocks` after TS/CSS changes
- `npm run typecheck` for `edit.tsx`, `view.ts`, `types.ts`, `post-edit-form.tsx`
- `npm run lint:php:all` on `render.php`
- Add entry to [`docs/blocks.md`](../blocks.md) reference table when shipped
