# Testimonial Carousel Block

**Version:** 1.1  
**Status:** Implemented as **`nextora/testimonial-carousel`** in [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/). When changing behavior, follow **§15** and [`docs/blocks.md`](../blocks.md); do not copy §1–§14 plugin patterns as-is.  
**For:** AI Agent Development

§1–§14 below are the **product / UX spec** (reference design). **§15** maps that spec to the Nextora theme (`blocks/`, `docs/blocks.md`, Cursor rules/skills). **Do not implement** from §1–§14 alone — follow §15 when building.

---

## 1. Overview

This document specifies a Gutenberg block that renders a **minimalist, centered testimonial carousel**. The design is clean and editorial — a single large quote occupies the center of the section, crossfading (fade transition) between testimonials. Below the quote sits a **trust indicator** row: a counter text (e.g., "3500+ people trust us") paired with an overlapping avatar stack.

**Reference:** The attached screenshot shows a warm, earthy-toned section with a small decorative icon + label at the top, a large serif quote in the center, and an avatar group + trust counter at the bottom. Navigation is via small pagination dots.

**Design philosophy:** Less is more. The testimonial text is the hero — all other UI elements (icon, dots, avatars) are secondary and understated. The fade transition keeps the layout stable (no horizontal movement), making the section feel calm and refined.

---

## 2. Block Architecture — Two-Block System

| Block | Role |
|---|---|
| **Testimonial Carousel** (`custom/testimonial-carousel`) | Parent wrapper — section styling, Swiper config (fade transition), pagination, arrows, trust indicator, top icon/label |
| **Testimonial Slide** (`custom/testimonial-slide`) | Child block — individual testimonial: quote text, author name, author role/title, optional author photo |

The parent accepts **only** Testimonial Slide blocks as direct children.

---

## 3. Block 1 — Testimonial Carousel (Parent)

### 3.1 block.json Metadata

| Property | Value |
|---|---|
| `name` | `custom/testimonial-carousel` |
| `title` | `Testimonial Carousel` |
| `category` | `design` |
| `icon` | `format-quote` (Dashicon) |
| `description` | A minimalist, centered testimonial carousel with fade transitions, trust counter, and avatar stack. |
| `textdomain` | `testimonial-carousel` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.multiple` | `true` |
| `supports.anchor` | `true` |

### 3.2 Attributes — Top Decorator

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `showTopIcon` | `boolean` | `true` | ToggleControl | Show/hide the decorative icon above the label |
| `topIconType` | `string` | `"sparkle"` | SelectControl | Icon type: `"sparkle"`, `"quote"`, `"star"`, `"heart"`, `"custom-svg"` |
| `customIconSvg` | `string` | `""` | TextareaControl | Custom SVG markup (when `topIconType = "custom-svg"`) |
| `topIconSize` | `number` | `20` | RangeControl (12–40) | Icon size in px |
| `topIconColor` | `string` | `""` | ColorPicker | Icon color (empty = inherits text at 50% opacity) |
| `showTopLabel` | `boolean` | `true` | ToggleControl | Show/hide the label text below the icon |
| `topLabelText` | `string` | `"Testimonials"` | RichText | Small label text (e.g., "With Harmony", "What They Say") |

### 3.3 Attributes — Carousel Settings

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `effect` | `string` | `"fade"` | SelectControl | Transition effect: `"fade"`, `"slide"`, `"creative"` |
| `speed` | `number` | `600` | RangeControl (200–2000, step 100) | Transition duration in ms |
| `autoplay` | `boolean` | `true` | ToggleControl | Enable autoplay |
| `autoplayDelay` | `number` | `6000` | RangeControl (2000–15000, step 500) | Autoplay interval in ms |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause on mouse hover |
| `loop` | `boolean` | `true` | ToggleControl | Infinite loop |
| `showPagination` | `boolean` | `true` | ToggleControl | Show pagination dots |
| `showArrows` | `boolean` | `false` | ToggleControl | Show prev/next arrow buttons |
| `arrowPosition` | `string` | `"below-dots"` | SelectControl | Arrow placement: `"below-dots"`, `"sides"`, `"bottom-corners"` |

### 3.4 Attributes — Trust Indicator

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `showTrustIndicator` | `boolean` | `true` | ToggleControl | Show/hide the trust counter + avatar row |
| `trustText` | `string` | `"3500+ people trust us"` | RichText | Trust counter text |
| `trustAvatars` | `array` | `[]` | MediaUpload (gallery) | Array of avatar image objects: `{ id, url, alt }` |
| `trustAvatarSize` | `number` | `36` | RangeControl (24–56) | Avatar diameter in px |
| `trustAvatarOverlap` | `number` | `10` | RangeControl (0–20) | Negative margin overlap between avatars in px |
| `trustAvatarBorderWidth` | `number` | `2.5` | RangeControl (0–5, step 0.5) | Border width around each avatar |
| `trustAvatarBorderColor` | `string` | `""` | ColorPicker | Avatar border color (empty = matches section background) |
| `trustAvatarFallback` | `string` | `"initials"` | SelectControl | When no photo: `"initials"` (letter from alt), `"icon"` (user icon), `"none"` |
| `trustPosition` | `string` | `"below-quote"` | SelectControl | Trust row position: `"below-quote"`, `"above-dots"`, `"bottom"` |

### 3.5 Attributes — Section Style

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `backgroundColor` | `string` | `"#EDEAE4"` | ColorPicker | Section background (warm beige from reference) |
| `textAlign` | `string` | `"center"` | AlignmentToolbar | Content alignment |
| `contentMaxWidth` | `string` | `"680px"` | TextControl | Max-width of the centered content area |
| `paddingTop` | `number` | `80` | RangeControl (0–200) | Section top padding in px |
| `paddingBottom` | `number` | `80` | RangeControl (0–200) | Section bottom padding in px |
| `paginationColor` | `string` | `"#C5C2BB"` | ColorPicker | Inactive dot color |
| `paginationActiveColor` | `string` | `"#8A8A80"` | ColorPicker | Active dot color |
| `arrowColor` | `string` | `"#8A8A80"` | ColorPicker | Arrow icon color |
| `arrowBorderColor` | `string` | `"#C5C2BB"` | ColorPicker | Arrow button border color |

### 3.6 InnerBlocks Configuration

```js
<InnerBlocks
  allowedBlocks={['custom/testimonial-slide']}
  template={[
    ['custom/testimonial-slide'],
    ['custom/testimonial-slide'],
    ['custom/testimonial-slide'],
  ]}
  templateLock={false}
  renderAppender={InnerBlocks.ButtonBlockAppender}
/>
```

---

## 4. Block 2 — Testimonial Slide (Child)

### 4.1 block.json Metadata

| Property | Value |
|---|---|
| `name` | `custom/testimonial-slide` |
| `title` | `Testimonial Slide` |
| `category` | `design` |
| `icon` | `testimonial` (Dashicon) |
| `description` | A single testimonial slide with quote, author name, and role. |
| `textdomain` | `testimonial-carousel` |
| `parent` | `["custom/testimonial-carousel"]` |
| `supports.html` | `false` |
| `supports.reusable` | `false` |

### 4.2 Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `quoteText` | `string` | `""` | RichText | The testimonial quote body |
| `authorName` | `string` | `""` | RichText | Author's full name |
| `authorRole` | `string` | `""` | RichText | Author's title/role/company |
| `authorPhotoUrl` | `string` | `""` | MediaUpload | Author headshot URL (optional, displayed inline with the author line) |
| `authorPhotoId` | `number` | `0` | — | WP attachment ID |
| `showAuthorPhoto` | `boolean` | `false` | ToggleControl | Show small author photo next to name |
| `rating` | `number` | `0` | RangeControl (0–5) | Star rating (0 = hidden, 1–5 = show stars) |
| `quoteColor` | `string` | `""` | ColorPicker | Override quote text color for this slide |
| `authorColor` | `string` | `""` | ColorPicker | Override author text color for this slide |

---

## 5. Frontend HTML Structure

### 5.1 Parent — Testimonial Carousel

```html
<div class="wp-block-testimonial-carousel alignfull"
     data-effect="fade"
     data-speed="600"
     data-autoplay="true"
     data-autoplay-delay="6000"
     data-pause-on-hover="true"
     data-loop="true"
     style="--tc-bg: #EDEAE4;
            --tc-padding-top: 80px;
            --tc-padding-bottom: 80px;
            --tc-content-max-width: 680px;
            --tc-dot-color: #C5C2BB;
            --tc-dot-active: #8A8A80;
            --tc-arrow-color: #8A8A80;
            --tc-arrow-border: #C5C2BB;
            --tc-avatar-size: 36px;
            --tc-avatar-overlap: 10px;
            --tc-avatar-border: 2.5px;
            --tc-avatar-border-color: #EDEAE4;">

  <div class="testimonial-carousel__inner">

    <!-- Top Decorator -->
    <div class="testimonial-carousel__top">
      <div class="testimonial-carousel__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><!-- sparkle icon --></svg>
      </div>
      <p class="testimonial-carousel__label">With Harmony</p>
    </div>

    <!-- Swiper Carousel -->
    <div class="swiper testimonial-carousel__swiper">
      <div class="swiper-wrapper">
        <!-- Testimonial Slide blocks render here -->
      </div>
    </div>

    <!-- Trust Indicator -->
    <div class="testimonial-carousel__trust">
      <span class="testimonial-carousel__trust-text">3500+ people trust us</span>
      <div class="testimonial-carousel__avatars">
        <img class="testimonial-carousel__avatar" src="..." alt="Elena" />
        <img class="testimonial-carousel__avatar" src="..." alt="Marco" />
        <img class="testimonial-carousel__avatar" src="..." alt="Kim" />
        <span class="testimonial-carousel__avatar testimonial-carousel__avatar--count"
              aria-label="And many more">+</span>
      </div>
    </div>

    <!-- Pagination Dots -->
    <div class="testimonial-carousel__pagination swiper-pagination"></div>

    <!-- Arrows (optional) -->
    <div class="testimonial-carousel__arrows testimonial-carousel__arrows--below-dots">
      <button class="testimonial-carousel__arrow testimonial-carousel__arrow--prev"
              aria-label="Previous testimonial">
        <svg aria-hidden="true"><!-- chevron left --></svg>
      </button>
      <button class="testimonial-carousel__arrow testimonial-carousel__arrow--next"
              aria-label="Next testimonial">
        <svg aria-hidden="true"><!-- chevron right --></svg>
      </button>
    </div>

  </div>
</div>
```

### 5.2 Child — Testimonial Slide

```html
<div class="swiper-slide testimonial-slide">

  <!-- Optional Star Rating -->
  <div class="testimonial-slide__rating" aria-label="5 out of 5 stars">
    <svg>★</svg><svg>★</svg><svg>★</svg><svg>★</svg><svg>★</svg>
  </div>

  <!-- Quote -->
  <blockquote class="testimonial-slide__quote">
    From the ancient wonders to the stunning landscapes of Greece,
    enjoy every step of your journey with Armonia Excursions!
  </blockquote>

  <!-- Author -->
  <div class="testimonial-slide__author">
    <!-- Optional inline author photo -->
    <img class="testimonial-slide__author-photo" src="..." alt="Elena" />
    <p class="testimonial-slide__author-line">
      — <strong class="testimonial-slide__author-name">Elena Papadopoulos</strong>,
      <span class="testimonial-slide__author-role">Happy Traveler</span>
    </p>
  </div>

</div>
```

---

## 6. CSS Specification

### 6.1 Design Tokens

| Variable | Default | Description |
|---|---|---|
| `--tc-bg` | `#EDEAE4` | Section background (warm beige) |
| `--tc-padding-top` | `80px` | Top padding |
| `--tc-padding-bottom` | `80px` | Bottom padding |
| `--tc-content-max-width` | `680px` | Content area max width |
| `--tc-icon-color` | `currentColor` at 50% opacity | Top icon color |
| `--tc-label-color` | `#6B6B60` | Label text color |
| `--tc-quote-font` | `serif` | Quote font family |
| `--tc-quote-size` | `clamp(1.25rem, 3vw, 1.75rem)` | Quote font size |
| `--tc-quote-weight` | `500` | Quote font weight |
| `--tc-quote-color` | `#2C2C28` | Quote text color |
| `--tc-quote-line-height` | `1.45` | Quote line height |
| `--tc-author-color` | `#8A8A80` | Author text color |
| `--tc-author-name-color` | `#5A5A52` | Author name (strong) color |
| `--tc-trust-color` | `#6B6B60` | Trust text color |
| `--tc-dot-color` | `#C5C2BB` | Inactive dot |
| `--tc-dot-active` | `#8A8A80` | Active dot |
| `--tc-arrow-color` | `#8A8A80` | Arrow icon color |
| `--tc-arrow-border` | `#C5C2BB` | Arrow button border |
| `--tc-avatar-size` | `36px` | Avatar diameter |
| `--tc-avatar-overlap` | `10px` | Avatar overlap |
| `--tc-avatar-border` | `2.5px` | Avatar border width |
| `--tc-avatar-border-color` | `var(--tc-bg)` | Avatar border (matches section bg) |
| `--tc-star-color` | `#D4A843` | Star rating fill color |

### 6.2 Core Styles

```css
/* ---- Section ---- */
.wp-block-testimonial-carousel {
  background-color: var(--tc-bg, #EDEAE4);
  padding: var(--tc-padding-top, 80px) 24px var(--tc-padding-bottom, 80px);
}

.testimonial-carousel__inner {
  max-width: var(--tc-content-max-width, 680px);
  margin: 0 auto;
  text-align: center;
}

/* ---- Top Decorator ---- */
.testimonial-carousel__icon {
  margin-bottom: 6px;
}
.testimonial-carousel__icon svg {
  width: 20px;
  height: 20px;
  color: var(--tc-icon-color, currentColor);
  opacity: 0.5;
}

.testimonial-carousel__label {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--tc-label-color, #6B6B60);
  font-weight: 500;
  margin: 0 0 28px;
}

/* ---- Swiper Container ---- */
.testimonial-carousel__swiper {
  overflow: hidden;
}
.testimonial-carousel__swiper .swiper-slide {
  opacity: 0 !important;
  transition: opacity var(--tc-speed, 600ms) ease;
}
.testimonial-carousel__swiper .swiper-slide-active {
  opacity: 1 !important;
}

/* ---- Quote ---- */
.testimonial-slide__quote {
  font-family: var(--tc-quote-font, var(--font-serif, Georgia, serif));
  font-size: var(--tc-quote-size, clamp(1.25rem, 3vw, 1.75rem));
  font-weight: var(--tc-quote-weight, 500);
  line-height: var(--tc-quote-line-height, 1.45);
  color: var(--tc-quote-color, #2C2C28);
  margin: 0;
  padding: 0;
  border: none;
  quotes: none;
}

/* ---- Star Rating ---- */
.testimonial-slide__rating {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-bottom: 16px;
}
.testimonial-slide__rating svg {
  width: 18px;
  height: 18px;
  fill: var(--tc-star-color, #D4A843);
}

/* ---- Author ---- */
.testimonial-slide__author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}
.testimonial-slide__author-photo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.testimonial-slide__author-line {
  font-size: 14px;
  color: var(--tc-author-color, #8A8A80);
  margin: 0;
}
.testimonial-slide__author-name {
  color: var(--tc-author-name-color, #5A5A52);
  font-weight: 600;
}
.testimonial-slide__author-role {
  color: var(--tc-author-color, #8A8A80);
  font-weight: 400;
}

/* ---- Trust Indicator ---- */
.testimonial-carousel__trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}
.testimonial-carousel__trust-text {
  font-size: 13px;
  color: var(--tc-trust-color, #6B6B60);
  font-weight: 500;
}

/* Avatar Stack */
.testimonial-carousel__avatars {
  display: flex;
  align-items: center;
}
.testimonial-carousel__avatar {
  width: var(--tc-avatar-size, 36px);
  height: var(--tc-avatar-size, 36px);
  border-radius: 50%;
  border: var(--tc-avatar-border, 2.5px) solid var(--tc-avatar-border-color, #EDEAE4);
  object-fit: cover;
  margin-left: calc(-1 * var(--tc-avatar-overlap, 10px));
}
.testimonial-carousel__avatar:first-child {
  margin-left: 0;
}

/* Avatar count badge (+N) */
.testimonial-carousel__avatar--count {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6B6B60;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 600;
}

/* Avatar initials fallback */
.testimonial-carousel__avatar--initials {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
}

/* ---- Pagination Dots ---- */
.testimonial-carousel__pagination {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 28px;
}
.testimonial-carousel__pagination .swiper-pagination-bullet {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tc-dot-color, #C5C2BB);
  opacity: 1;
  transition: all 0.3s ease;
}
.testimonial-carousel__pagination .swiper-pagination-bullet-active {
  width: 20px;
  border-radius: 4px;
  background: var(--tc-dot-active, #8A8A80);
}

/* ---- Arrows ---- */
.testimonial-carousel__arrows {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.testimonial-carousel__arrows--below-dots {
  margin-top: 12px;
}

.testimonial-carousel__arrow {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 0.5px solid var(--tc-arrow-border, #C5C2BB);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--tc-arrow-color, #8A8A80);
  transition: background 0.2s, color 0.2s;
}
.testimonial-carousel__arrow:hover {
  background: var(--tc-arrow-color, #8A8A80);
  color: #FFFFFF;
}
.testimonial-carousel__arrow svg {
  width: 16px;
  height: 16px;
}

/* Arrows — sides position */
.testimonial-carousel__arrows--sides {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
}
.testimonial-carousel__arrows--sides .testimonial-carousel__arrow {
  pointer-events: all;
}
```

### 6.3 Responsive & Reduced Motion

```css
@media (max-width: 768px) {
  .testimonial-carousel__inner {
    padding: 0 8px;
  }

  .testimonial-carousel__trust {
    flex-direction: column;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .testimonial-slide__quote {
    font-size: 1.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .testimonial-carousel__swiper .swiper-slide {
    transition: none;
  }
  .testimonial-carousel__arrow {
    transition: none;
  }
}
```

---

## 7. Swiper.js Initialization (view.js)

```js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wp-block-testimonial-carousel').forEach((section) => {
    const el = section.querySelector('.swiper');
    if (!el) return;

    const d = section.dataset;

    new Swiper(el, {
      effect: d.effect || 'fade',
      fadeEffect: { crossFade: true },
      speed: parseInt(d.speed) || 600,
      loop: d.loop !== 'false',
      slidesPerView: 1,

      autoplay: d.autoplay === 'true' ? {
        delay: parseInt(d.autoplayDelay) || 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: d.pauseOnHover === 'true',
      } : false,

      pagination: {
        el: section.querySelector('.testimonial-carousel__pagination'),
        clickable: true,
      },

      navigation: {
        prevEl: section.querySelector('.testimonial-carousel__arrow--prev'),
        nextEl: section.querySelector('.testimonial-carousel__arrow--next'),
      },

      keyboard: { enabled: true },
      a11y: {
        prevSlideMessage: 'Previous testimonial',
        nextSlideMessage: 'Next testimonial',
      },
    });
  });
});
```

**Critical:** For the `fade` effect, Swiper requires `slidesPerView: 1` and `fadeEffect: { crossFade: true }`. The `crossFade: true` option ensures the outgoing slide fades out while the incoming slide fades in simultaneously — without it, slides stack opaquely and the transition looks broken.

---

## 8. Top Icon SVG Presets

Each icon — viewBox `0 0 24 24`, stroke: `currentColor`, stroke-width: `1.5`, fill: `none`:

| `topIconType` | Description |
|---|---|
| `"sparkle"` | 3 sparkle/star shapes of varying sizes (as in reference screenshot) |
| `"quote"` | Opening quotation mark `"` — two curved strokes |
| `"star"` | Single 5-point star, stroke only |
| `"heart"` | Heart shape, stroke only |
| `"custom-svg"` | User pastes raw SVG markup into a textarea field |

---

## 9. Avatar Stack — Implementation Details

### 9.1 Overlapping Stack

Avatars stack left-to-right with negative `margin-left` on all except the first:

```
[Avatar 1][Avatar 2][Avatar 3][+N]
          ←overlap→
```

The border color **must match the section background** so the overlap edge blends naturally. Default: `--tc-avatar-border-color` inherits `--tc-bg`.

### 9.2 Fallback Behavior

When no avatar photo is provided (empty `trustAvatars` array or missing URL):

- **`"initials"`** — render a colored circle with the first letter of the `alt` text. Assign background colors from a preset palette cycling through earthy tones: `#C49A6C`, `#7B8F6A`, `#A0785C`, `#6A7B8F`, `#8F6A7B`.
- **`"icon"`** — render a user silhouette SVG icon inside a colored circle.
- **`"none"`** — hide the avatar stack entirely, show only the trust text.

### 9.3 "+N" Count Badge

If more than the displayed avatars exist (e.g., user uploaded 4 but trust text says "3500+"), show a final circle with `+` as the text, styled with a neutral dark background and white text.

---

## 10. Editor (edit.js) Behavior

### 10.1 Parent — Testimonial Carousel

- Render the top decorator (icon + label) with inline editing.
- Show child slides **stacked vertically** in the editor, each inside a bordered card with "Testimonial 1", "Testimonial 2" labels. No carousel in the editor.
- Render the trust indicator below with avatar thumbnails and editable trust text.
- Show pagination dot and arrow previews (static, non-functional).

### 10.2 Child — Testimonial Slide

- **Quote:** `RichText`, `tagName="blockquote"`, `placeholder="Write testimonial quote..."`, styled with serif font in the editor.
- **Author Name:** `RichText`, `tagName="strong"`, `placeholder="Author Name"`
- **Author Role:** `RichText`, `tagName="span"`, `placeholder="Title, Company"`
- **Rating:** Star selector in InspectorControls (0 = hidden, 1–5 = show that many filled stars).
- **Author Photo:** `MediaUpload` in InspectorControls for an optional small headshot.

### 10.3 Inspector Panel — Testimonial Carousel (Parent)

**PanelBody: "Top Decorator"**

- `ToggleControl` — Show Icon
- `SelectControl` — Icon Type (sparkle / quote / star / heart / custom-svg) *(when visible)*
- `TextareaControl` — Custom SVG *(when type = custom-svg)*
- `RangeControl` — Icon Size (12–40 px) *(when visible)*
- `ColorPicker` — Icon Color *(when visible)*
- `ToggleControl` — Show Label

**PanelBody: "Carousel"**

- `SelectControl` — Transition Effect (fade / slide / creative)
- `RangeControl` — Speed (200–2000 ms)
- `ToggleControl` — Loop

**PanelBody: "Autoplay"**

- `ToggleControl` — Enable Autoplay
- `RangeControl` — Delay (2000–15000 ms) *(when autoplay)*
- `ToggleControl` — Pause on Hover *(when autoplay)*

**PanelBody: "Navigation"**

- `ToggleControl` — Show Pagination Dots
- `ColorPicker` — Dot Color *(when visible)*
- `ColorPicker` — Active Dot Color *(when visible)*
- `ToggleControl` — Show Arrows
- `SelectControl` — Arrow Position (below-dots / sides / bottom-corners) *(when arrows visible)*
- `ColorPicker` — Arrow Color *(when arrows visible)*

**PanelBody: "Trust Indicator"**

- `ToggleControl` — Show Trust Indicator
- `MediaUpload` — Avatar Images (gallery mode) *(when visible)*
- `RangeControl` — Avatar Size (24–56 px) *(when visible)*
- `RangeControl` — Avatar Overlap (0–20 px) *(when visible)*
- `RangeControl` — Avatar Border Width (0–5 px) *(when visible)*
- `ColorPicker` — Avatar Border Color *(when visible)*
- `SelectControl` — No-Photo Fallback (initials / icon / none) *(when visible)*
- `SelectControl` — Trust Position (below-quote / above-dots / bottom) *(when visible)*

**PanelBody: "Section Style"**

- `ColorPicker` — Background Color
- `TextControl` — Content Max Width
- `RangeControl` — Padding Top (0–200 px)
- `RangeControl` — Padding Bottom (0–200 px)

### 10.4 Inspector Panel — Testimonial Slide (Child)

**PanelBody: "Rating"**

- `RangeControl` — Star Rating (0–5, 0 = hidden)

**PanelBody: "Author Photo"**

- `ToggleControl` — Show Author Photo
- `MediaUpload` — Photo *(when visible)*

**PanelBody: "Colors (Override)"**

- `ColorPicker` — Quote Color (override section default)
- `ColorPicker` — Author Color (override section default)

---

## 11. File Structure

```
testimonial-carousel/
├── testimonial-carousel/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   ├── save.js
│   ├── style.css
│   ├── editor.css
│   └── view.js                       // Swiper init (frontend only)
│
├── testimonial-slide/
│   ├── block.json
│   ├── index.js
│   ├── edit.js
│   ├── save.js
│   ├── style.css
│   └── editor.css
│
├── icons.js                          // Sparkle, quote, star, heart, chevrons, user SVGs
├── testimonial-carousel.php          // Plugin registration
└── package.json
```

---

## 12. PHP Registration

```php
<?php
/**
 * Plugin Name: Testimonial Carousel Block
 * Description: A minimalist Gutenberg testimonial carousel with fade transitions and trust indicator.
 * Version: 1.0.0
 * Text Domain: testimonial-carousel
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function tc_register_blocks() {
    register_block_type( __DIR__ . '/testimonial-carousel' );
    register_block_type( __DIR__ . '/testimonial-slide' );
}
add_action( 'init', 'tc_register_blocks' );

function tc_enqueue_swiper() {
    if ( has_block( 'custom/testimonial-carousel' ) ) {
        wp_enqueue_style(
            'swiper-css',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
            [],
            '11.0.0'
        );
        wp_enqueue_script(
            'swiper-js',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
            [],
            '11.0.0',
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'tc_enqueue_swiper' );
```

---

## 13. Accessibility

- Quote uses `<blockquote>` semantic element.
- Rating uses `aria-label="X out of 5 stars"` on the container; individual star SVGs get `aria-hidden="true"`.
- Arrow buttons: `aria-label="Previous testimonial"` / `"Next testimonial"`.
- All SVG icons: `aria-hidden="true"`.
- Pagination dots: Swiper's built-in `a11y` module handles tab/role attributes.
- Avatar images: `alt` text with person's name.
- `"+N"` avatar count badge: `aria-label="And many more"`.
- Keyboard: left/right arrows navigate slides when carousel is focused.
- `prefers-reduced-motion`: all transitions disabled.

---

## 14. Acceptance Criteria

1. Both blocks register correctly — parent in "Design", child only inside parent.
2. Top decorator (icon + label) displays correctly and is configurable.
3. All 5 icon presets (sparkle, quote, star, heart, custom-svg) render correctly.
4. Quote text displays in serif font, centered, at the correct responsive size.
5. Author name + role display below the quote with correct styling and optional inline photo.
6. Star rating (0–5) conditionally renders above the quote.
7. **Fade transition** works — slides crossfade smoothly with no layout shift.
8. Autoplay cycles through testimonials at the configured interval.
9. Pagination dots render with elongated active dot style.
10. Optional arrows render and function at the configured position.
11. Trust indicator displays: counter text + overlapping avatar stack.
12. Avatar border color matches section background for seamless overlap effect.
13. Avatar fallback (initials with earthy palette) works when no photos are provided.
14. `prefers-reduced-motion` disables all transitions.
15. Multiple instances on one page work independently.
16. No block validation errors on save/reload.
17. Works with WordPress 6.4+ and Swiper 11+.

---

## 15. Notes for AI Agent

- Use `@wordpress/scripts` for the build toolchain.
- **Fade effect requires** `slidesPerView: 1` and `fadeEffect: { crossFade: true }` in Swiper — without `crossFade`, slides overlap opaquely instead of blending.
- The warm beige background (`#EDEAE4`) is the default but fully customizable. The earthy tone palette throughout (muted greens, browns, grays) gives the block a premium, organic feel.
- The avatar border color auto-matching the section background is a subtle but critical detail — if the border is white on a beige background, the overlap looks wrong.
- The quote uses `font-family: serif` (or theme's `--font-serif` variable) — this is intentional to contrast with the sans-serif UI elements and give the testimonial text an editorial, trustworthy feel.
- In the editor, show slides stacked vertically with labels — do NOT initialize Swiper.
- `save.js` for the parent wraps `<InnerBlocks.Content />` inside `<div class="swiper ..."><div class="swiper-wrapper">...</div></div>`.
- `save.js` for the child adds `className="swiper-slide"` to the slide wrapper.
- The reference screenshot shows no arrows — they are hidden by default (`showArrows: false`) but available as an option.
- The elongated active dot (width: 20px, border-radius: 4px) is a custom pagination style consistent with the Team Section block spec.

---

## 15. Nextora theme implementation addendum (do not use generic spec as-is)

This section maps §1–§14 to the **Nextora** block theme (`wp-content/themes/nextora/`). **Do not** ship a standalone plugin, CDN Swiper, `@wordpress/scripts` package, or static `save.js` carousel HTML. **Do not implement** until this addendum is agreed — §1–§14 remain the functional/product spec.

### 15.1 Identity and registration

| Spec (§2–§4) | Nextora |
|--------------|---------|
| `custom/testimonial-carousel` | **`nextora/testimonial-carousel`** |
| `custom/testimonial-slide` | **`nextora/testimonial-slide`** *only if* two-block architecture is chosen (§15.2) |
| `textdomain` `testimonial-carousel` | **`nextora`** |
| Category `design` | **`design`** (content band; pairs with `nextora/team-section`, `nextora/call-to-action`) |
| Plugin `testimonial-carousel.php` + CDN Swiper (§12) | **None** — auto-registration via [`blocks/blocks.php`](../../blocks/blocks.php) |
| `index.js` + `edit.js` + `save.js` | **`index.tsx`**, **`edit.tsx`**, **`types.ts`**, **`save.tsx` → `null`**, **`render.php`** |

Scaffold (single-block path): `npm run gen -- --name=testimonial-carousel --ns=nextora --category=design`

Optional block styles (warm band / contrast band): `blocks/testimonial-carousel/register-styles.php` required from `blocks/blocks.php` — same pattern as [`blocks/team-section/register-styles.php`](../../blocks/team-section/register-styles.php) and [`blocks/scrolling-promotion/register-styles.php`](../../blocks/scrolling-promotion/register-styles.php).

### 15.2 Architecture: recommended vs spec

| Approach | Description | Nextora recommendation |
|----------|-------------|------------------------|
| **A — Spec (§2)** | Parent `InnerBlocks` + child `nextora/testimonial-slide` | Possible but **heavier**: dynamic parent must merge header/trust attrs with **`$content`** for slides (see [`blocks/call-to-action/render.php`](../../blocks/call-to-action/render.php)). Child needs `save.tsx` with `swiper-slide` class or server render. |
| **B — Single block** | One `nextora/testimonial-carousel`, `testimonials[]` attribute array | **Recommended v1** — matches implemented [`nextora/team-section`](../../blocks/team-section/) and [`nextora/scrolling-promotion`](../../blocks/scrolling-promotion/): repeater in inspector, all markup from **`render.php`**, no InnerBlocks validation edge cases. |

If **B** is chosen, drop §2 two-block table from implementation; map §4 slide fields into each `testimonials[]` object (see §15.9). Editor shows slides **stacked vertically** in the canvas (§10.1); carousel + fade is **front-end only**.

### 15.3 File structure (revised)

**Single-block (recommended):**

```text
blocks/testimonial-carousel/
├── block.json
├── index.tsx
├── edit.tsx
├── types.ts
├── member-utils.ts          # optional: normalizeTestimonials(), createTestimonialId()
├── testimonial-edit-form.tsx # optional: modal form (mirror team-section member modal)
├── render.php
├── style.css
├── editor.css
├── view.ts                  # Swiper fade + GSAP scroll reveal
├── register-styles.php      # optional band presets
└── (generated) index.js, index.asset.php, view.js, view.css
```

**Two-block (if required):**

```text
blocks/testimonial-carousel/   # parent — section attrs + swiper shell in render.php
blocks/testimonial-slide/      # child — save.tsx or render.php per slide
```

**Remove from generic spec:** nested plugin folders (§11), root `package.json`, CDN enqueue (§12), standalone `icons.js` npm package, hand-edited `index.js` / `view.js`.

### 15.4 Front-end output: `render.php`, not `save.js`

- Top decorator, trust row, pagination, arrows from **attributes**, escaped (`wp_kses_post` for RichText fields; **strict KSES** for `customIconSvg` if kept).
- Carousel: Swiper markup with **`swiper` / `swiper-wrapper` / `swiper-slide`**; each slide from `testimonials[]` or parsed inner content.
- **`get_block_wrapper_attributes()`** on the section root with inline CSS variables — class prefix **`nextora-testimonial-carousel`**, not only `wp-block-testimonial-carousel`.
- Trust avatars: **`wp_get_attachment_image( $id, … )`** when `photoId` is set; do not persist bare `url` as source of truth (editor may resolve URL via `core` store for preview only).
- Slide author photo: same — **`authorPhotoId`** + attachment API on front; drop **`authorPhotoUrl`** from stored attrs (spec §4.2).
- Color attrs: preset slug or hex → `var(--wp--preset--color--{slug})` via helper like `nextora_scrolling_promotion_resolve_color()` in [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php).

Pass Swiper options to JS as **`data-swiper-opts`** JSON on the carousel root (pattern: [`blocks/team-section/render.php`](../../blocks/team-section/render.php), [`blocks/image-gallery-slide/render.php`](../../blocks/image-gallery-slide/render.php)), **not** the many `data-effect` / `data-speed` attributes in §5.1.

### 15.5 Class and CSS variable naming

| Spec (§5–§6) | Nextora |
|--------------|---------|
| `wp-block-testimonial-carousel` | `wp-block-nextora-testimonial-carousel` + BEM **`nextora-testimonial-carousel`** |
| `testimonial-carousel__*` | **`nextora-testimonial-carousel__*`** |
| `testimonial-slide__*` | **`nextora-testimonial-carousel__slide__*`** (single block) or **`nextora-testimonial-slide__*`** (child block) |
| `--tc-*` | **`--nextora-testimonial-*`** (e.g. `--nextora-testimonial-bg`, `--nextora-testimonial-dot-active`, `--nextora-testimonial-avatar-size`) |

Default colors: use **`var(--wp--preset--color--*)`** when custom color attrs are empty — **not** committed hex from the mock (`#EDEAE4`, `#C5C2BB`, etc.) except as **block style preset** defaults in `register-styles.php`.

Typography: theme default is **Hanken Grotesk** ([`theme.json`](../../theme.json)); there is **no serif preset** today. For the editorial quote look (§6.1 `--tc-quote-font`):

- **v1:** use **`var(--wp--preset--font-family--sans)`** at a larger size / medium weight, or
- optional attribute **`quoteFontFamily`** (preset slug) under **Layout**, or
- add a serif preset to `theme.json` in a separate design task — do not hard-code `Georgia` in committed CSS without a token fallback chain.

Spacing: prefer **`theme.json`** presets (`var(--wp--preset--spacing--*)`) for section padding where `supports.spacing` applies.

### 15.6 Swiper.js (`view.ts` + npm)

| Spec (§7, §12) | Nextora |
|----------------|---------|
| Global `Swiper` from CDN | **`import Swiper from 'swiper'`** + modules in **`view.ts`**, built to **`view.js`** via `npm run build:blocks` |
| `view.js` + `DOMContentLoaded` only | **Idempotent `initRoot()`** per section; `DOMContentLoaded` + optional **`nextora-testimonial-carousel-reinit`** event; guards **`data-nextora-testimonial-swiper-inited="1"`** / **`data-nextora-testimonial-swiper-pending="1"`** |
| Read config from `dataset` on section | Parse **`data-swiper-opts`** JSON from PHP |
| Fade effect (§7) | Import **`EffectFade`** from `swiper/modules` + **`import 'swiper/css/effect-fade'`**; `effect: 'fade'`, `fadeEffect: { crossFade: true }`, **`slidesPerView: 1`** — required |
| Manual opacity on `.swiper-slide` (§6.2) | **Do not duplicate** in CSS when using Swiper's fade module — let Swiper manage opacity; CSS overrides in §6.2 conflict with bundled fade |
| — | Root classes **`nextora-testimonial-carousel--loading`** → **`--ready`** after init ([`docs/blocks.md`](../blocks.md) JS layout table) |
| Width polling | If carousel container width is 0 on first paint, poll like [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) before mount |
| `prefers-reduced-motion` | Disable autoplay; skip aggressive transitions; carousel may still init for keyboard / pagination |

`block.json`: `"viewScript": "file:./view.js"`, `"style": "file:./view.css"` with Swiper CSS imported from **`view.ts`** (pattern: [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts)).

**Do not** `wp_enqueue_script` Swiper from a CDN in theme PHP.

**Swiper modules (minimum):** `EffectFade`, `Pagination`, `Navigation`, `Autoplay`, `Keyboard`, `A11y`.

**Defer v1:** `effect: "creative"` (§3.3) — adds `EffectCreative` + tuning; ship **fade** (default) and optionally **slide** only.

### 15.7 Scroll animation (`docs/blocks.md`)

Testimonial carousel is a **content band** (decorator + quote + trust row). Include:

| Item | Nextora |
|------|---------|
| Attribute | **`enableScrollAnimation`** — `boolean`, default `true` |
| Sidebar | Panel **Animation** → **Animate on scroll** (standard help from [`docs/blocks.md`](../blocks.md)) |
| PHP | `data-nextora-scroll-reveal="1"` on **block root** when enabled |
| JS | **GSAP + ScrollTrigger** in **`view.ts`**, `once: true`; run **after** Swiper layout is ready; soft timeline (header/quote area then trust row) — pattern [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) (page-title-style `fromTo`, reveal-pending CSS, fallback timeout) |
| Reduced motion | No scroll reveal; no autoplay |

Fade transition (Swiper) and scroll reveal (GSAP) are **independent** — both respect reduced motion.

### 15.8 Design system and inspector panels

**Prefer `supports.color` / `supports.spacing` on the section** before duplicating every §3.5 / §3.6 picker.

| Spec attrs | Nextora approach |
|------------|------------------|
| `backgroundColor`, text colors | **`supports.color`** on wrapper + sidebar **Colors** (`PanelColorSettings`) for scoped overrides (`paginationColor`, `paginationActiveColor`, `arrowColor`, `quoteColor`, …) |
| `paddingTop` / `paddingBottom` | **`supports.spacing`** or RangeControls under **Layout** |
| `contentMaxWidth` | **Layout** panel `TextControl` (same help string as team-section: `e.g. 680px, 42rem`) |
| `textAlign` | **`supports.align`** is wide/full only — use **`textAlign`** attribute + class modifier if center-only is insufficient; default **center** via CSS |
| Per-slide `quoteColor` / `authorColor` | Optional v1 — section-level CSS vars first; per-slide overrides in modal if needed |

**Panel titles (inspector)** — use Nextora-standard names:

| Panel | Contents |
|-------|----------|
| **Content** | Top label (`topLabelText` RichText in canvas); trust text (`trustText` RichText) |
| **Top decorator** | `showTopIcon`, `topIconType`, `customIconSvg`, icon size/color, `showTopLabel` |
| **Testimonials** | Compact list + **Edit** → modal (recommended, mirror [`blocks/team-section/`](../../blocks/team-section/)); add / reorder / remove |
| **Carousel** | `effect` (fade \| slide v1), `speed`, `loop` |
| **Autoplay** | Autoplay toggle, delay, pause on hover |
| **Navigation** | Pagination toggle + colors; arrows toggle + **`arrowPosition`** (below-dots \| sides) — defer **bottom-corners** unless designed |
| **Trust indicator** | Show toggle, avatar gallery (`trustAvatars[]`), size/overlap/border, fallback mode, position |
| **Layout** | Padding, content max width, optional quote typography |
| **Colors** | Section + pagination + arrow overrides |
| **Animation** | **Animate on scroll** |

Use **`@wordpress/components` `Modal`** for testimonial editing in the block editor — **not** theme front-end `data-nextora-modal` ([`docs/modal.md`](../modal.md) is front-end only).

### 15.9 `testimonials[]` attribute shape (single-block recommended)

```json
{
  "testimonials": {
    "type": "array",
    "default": []
  }
}
```

Each item:

```json
{
  "id": "testimonial-1",
  "quoteText": "",
  "authorName": "",
  "authorRole": "",
  "authorPhotoId": 0,
  "authorPhotoAlt": "",
  "showAuthorPhoto": false,
  "rating": 0,
  "quoteColor": "",
  "authorColor": ""
}
```

Trust avatars (separate from slide author photos):

```json
{
  "trustAvatars": [
    { "id": 0, "alt": "Elena" }
  ]
}
```

- Stable **`id`** string per testimonial row (generate on add — `createTestimonialId()` like team-section).
- **`normalizeTestimonials()`** must **preserve empty draft rows** in the editor (tags/social pattern from team-section `member-utils.ts`).
- **`rating`:** `0` = hidden; `1–5` = filled stars in PHP render.

### 15.10 Editor behavior

| Spec (§10) | Nextora |
|------------|---------|
| Swiper in editor | **No** — stacked slide cards with labels (§10.1); static pagination/arrow preview |
| `edit.js` | **`edit.tsx`** — RichText in canvas for label, trust text, quote preview; full fields in **modal** |
| `ColorPicker` | Use **`PanelColorSettings`** / theme color palette — align with team-section |
| `MediaUpload` | `allowedTypes`: image + common MIMEs — reuse [`TEAM_SECTION_MEDIA_TYPES`](../../blocks/team-section/types.ts) pattern or shared constant |
| `custom-svg` top icon | Textarea in inspector; sanitize on save/render; prefer preset inline SVGs in PHP/TS over raw user SVG on front when possible |

### 15.11 Icons

| Spec (§8, §11) | Nextora |
|----------------|---------|
| Shared `icons.js` | **Inline SVG map** in `edit.tsx` + PHP (`nextora_testimonial_carousel_icon_svg()`) for sparkle, quote, star, heart, chevrons |
| Dashicons | **Editor only** if needed; **no Dashicons** on front end |

### 15.12 Accessibility (additions)

Keep §13, plus:

- When **`enableScrollAnimation`** runs, ensure final state is visible without JS (reveal-pending CSS + GSAP fallback — team-section pattern).
- Swiper **`keyboard`** + **`a11y`** modules enabled in `view.ts`.
- `<blockquote>` for quote; rating container `aria-label="X out of 5 stars"`; decorative SVGs `aria-hidden="true"`.
- Trust **`+`** badge: `aria-label` translatable string (`nextora` text domain).

### 15.13 Extensibility hooks (plan)

- `nextora_testimonial_carousel_testimonials`
- `nextora_testimonial_carousel_wrapper_classes`
- `nextora_testimonial_carousel_wrapper_attributes`
- `nextora_testimonial_carousel_swiper_options` (filter JSON for `data-swiper-opts`)

Mirror naming from [`nextora_team_section_*`](../../blocks/team-section/render.php) filters.

### 15.14 Build and quality

- `npm run build:blocks` after TS/CSS; never hand-edit `index.js`, `index.asset.php`, `view.js`
- `npm run typecheck` for `edit.tsx` / `view.ts` / `types.ts`
- `npm run lint:php` on `render.php` (`declare(strict_types=1);`, PHPStan)
- Add row to **Reference blocks** in [`docs/blocks.md`](../blocks.md) when implemented

### 15.15 Closest reference blocks

| Need | Block |
|------|--------|
| Fade/slide Swiper, `data-swiper-opts`, loading → ready | [`blocks/team-section/`](../../blocks/team-section/) (horizontal slide); import **EffectFade** for this block |
| Swiper width polling, init guards | [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts) |
| Items repeater + PHP render | [`blocks/team-section/`](../../blocks/team-section/), [`blocks/counters/`](../../blocks/counters/) |
| Modal member/testimonial editing | [`blocks/team-section/member-edit-form.tsx`](../../blocks/team-section/member-edit-form.tsx) |
| Scroll reveal toggle + GSAP timeline | [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| Color resolve helper | [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) |
| InnerBlocks + `$content` (only if §15.2 A) | [`blocks/call-to-action/`](../../blocks/call-to-action/) |
| Elongated pagination bullet CSS | [`blocks/team-section/style.css`](../../blocks/team-section/style.css) |

### 15.16 Acceptance criteria additions (Nextora)

1. Block registered as **`nextora/testimonial-carousel`** with **`textdomain` `nextora`**.
2. **`npm run lint:php`** and **`npm run typecheck`** pass.
3. Swiper + EffectFade loaded from **bundled `view.js`**, not CDN.
4. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and autoplay.
5. Trust avatars and slide author photos use **attachment IDs** + **`wp_get_attachment_image`** on the front.
6. Empty color attributes fall back to **`theme.json`** presets, not spec hex defaults in CSS.
7. Inspector panel titles match [`docs/blocks.md`](../blocks.md) (**Content**, **Layout**, **Colors**, **Animation**, etc.).
8. Multiple instances on one page init **independently** (per-root Swiper + init guards).
9. **Fade crossfade** works without manual `.swiper-slide { opacity }` CSS fighting Swiper.
10. Editor testimonial editing uses **modal** (or equivalent spacious UI), not cramped sidebar-only fields.

### 15.17 What not to add (v1)

- Standalone plugin or `@wordpress/scripts` package at repo root
- CDN Swiper CSS/JS (§12)
- Static carousel HTML in post content via `save.js`
- Two-block InnerBlocks complexity unless product explicitly requires per-slide blocks in the inserter
- `effect: "creative"` until fade + slide are stable
- Hard-coded mock hex palette in committed `style.css` (use presets + CSS vars + optional block styles)
- Theme front-end modal layer for editor forms
- Persisting `authorPhotoUrl` / avatar `url` in attributes as canonical media source