# Expanding Cards Block

**Status:** To be implemented as `nextora/expanding-cards`.  
**For:** AI Agent Development  
**Reference:** [Original design spec — expanding card gallery with hover scale + click modal]

Follow [`docs/blocks.md`](../blocks.md) and `AGENTS.md` § Theme blocks when implementing. Editor item-edit modal follows `text-list-hover-image` pattern. Scroll animation follows `image-gallery-grid` GSAP pattern.

---

## 1. Overview

A horizontal row of image cards that expand on hover (CSS flex-grow transition). Clicking a card opens a full-screen detail modal showing the image, heading, description, and a CTA button with a hardcoded `paw-print` Lucide icon. Navigation between cards is via prev/next arrows inside the modal (declarative `data-nextora-modal-open`).

**Design philosophy:** The row feels organic — hover expands one card while others shrink slightly. Dark overlay fades on inactive cards. Content (heading, description, button) fades in only on the expanded card. The modal is a preview/detail overlay, not a lightbox — it combines the full image with descriptive text and a CTA.

---

## 2. Block Architecture

Single dynamic block — no inner blocks.

| Block | Role |
|---|---|
| **Expanding Cards** (`nextora/expanding-cards`) | Section wrapper. Contains a `cards[]` repeater array. Renders flex row on front-end. Each card is a `<button>` triggering the Nextora declarative modal system. Inline detail modal rendered per card after the row. |

---

## 3. block.json Metadata

| Property | Value |
|---|---|
| `name` | `nextora/expanding-cards` |
| `title` | `Expanding Cards` |
| `category` | `design` |
| `icon` | `layout` |
| `description` | Horizontal expanding card gallery with hover grow effect and full-screen detail modal. |
| `textdomain` | `nextora` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.anchor` | `true` |
| `supports.color` | `{ background: true, text: false, link: false }` |
| `supports.spacing` | `{ padding: true, margin: true, blockGap: true }` |
| `editorScript` | `file:./index.js` |
| `editorStyle` | `file:./editor.css` |
| `style` | `file:./style.css` |
| `viewScript` | `file:./view.js` |
| `render` | `file:./render.php` |

---

## 4. Attributes

### 4.1 Cards repeater

| Attribute | Type | Default | Description |
|---|---|---|---|
| `cards` | `array` | 4 preset cards | Array of card objects |

Default cards:

```json
[
  {
    "id": "1",
    "imageId": 0,
    "imageUrl": "",
    "imageAlt": "",
    "heading": "Discover Adventure",
    "description": "Explore breathtaking landscapes and unforgettable experiences.",
    "buttonText": "Start adoption",
    "buttonUrl": "#"
  },
  {
    "id": "2",
    "imageId": 0,
    "imageUrl": "",
    "imageAlt": "",
    "heading": "Find Your Companion",
    "description": "Meet your perfect match waiting for a loving home.",
    "buttonText": "Start adoption",
    "buttonUrl": "#"
  },
  {
    "id": "3",
    "imageId": 0,
    "imageUrl": "",
    "imageAlt": "",
    "heading": "Make a Difference",
    "description": "Every adoption changes a life — theirs and yours.",
    "buttonText": "Start adoption",
    "buttonUrl": "#"
  },
  {
    "id": "4",
    "imageId": 0,
    "imageUrl": "",
    "imageAlt": "",
    "heading": "Join Our Family",
    "description": "Become part of a community that truly cares.",
    "buttonText": "Start adoption",
    "buttonUrl": "#"
  }
]
```

### 4.2 Card item shape (`ExpandingCardItem`)

| Field | Type | Default | Control |
|---|---|---|---|
| `id` | `string` | auto-generated | — |
| `imageId` | `number` | `0` | MediaUpload |
| `imageUrl` | `string` | `""` | MediaUpload |
| `imageAlt` | `string` | `""` | TextControl (in modal) |
| `heading` | `string` | `""` | TextControl (in modal) |
| `description` | `string` | `""` | TextareaControl (in modal) |
| `buttonText` | `string` | `"Start adoption"` | TextControl (in modal) |
| `buttonUrl` | `string` | `"#"` | TextControl (in modal) |

### 4.3 Layout

| Attribute | Type | Default | Control | Range |
|---|---|---|---|---|
| `cardHeight` | `number` | `400` | RangeControl | 200–800, step 10 |
| `cardGap` | `number` | `10` | RangeControl | 0–30, step 2 |
| `cardBorderRadius` | `number` | `12` | RangeControl | 0–24, step 2 |
| `inactiveOverlayOpacity` | `number` | `0.3` | RangeControl | 0–0.8, step 0.05 |
| `contentPadding` | `number` | `24` | RangeControl | 8–60, step 4 |
| `contentMaxWidth` | `string` | `"1200px"` | TextControl | — |
| `headingSize` | `string` | `"medium-plus"` | SelectControl | `small` … `xx-large` |
| `descriptionSize` | `string` | `"small"` | SelectControl | `small` … `x-large` |
| `buttonSize` | `string` | `"small"` | SelectControl | `small` … `large` |

### 4.4 Colors

All color attributes use the standard slug-storage pattern (`docs/blocks.md` § Custom colour options).

| Attribute | Default | Picker Label |
|---|---|---|
| `headingColor` | `""` | Heading |
| `descriptionColor` | `""` | Description |
| `overlayBackgroundColor` | `""` | Overlay |
| `buttonTextColor` | `""` | Button text |
| `buttonBackgroundColor` | `""` | Button background |

### 4.5 Animation

| Attribute | Type | Default |
|---|---|---|
| `enableScrollAnimation` | `boolean` | `true` |

---

## 5. Paw-print icon (hardcoded)

The `lucide-paw-print` icon is a hardcoded inline SVG in both `render.php` and `edit.tsx` — no dependency on `advanced-icon/lucide.php`. The icon is rendered inside every card's button, before the button text.

**Lucide paw-print node data** (used to build the SVG):

```
1 circle:  cx=11 cy=4  r=2
2 circle:  cx=18 cy=8  r=2
3 circle:  cx=20 cy=16 r=2
4 path:    d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
```

The button does **not** expose icon settings — the paw-print is always there. Only `buttonText` and `buttonUrl` are editable per card.

---

## 6. Editor (`edit.tsx`)

Follows `text-list-hover-image/edit.tsx` pattern closely.

### 6.1 Sidebar panels

| Panel | Controls |
|---|---|
| **Cards** (initialOpen) | Card list with thumbnail + title preview. Each row: Edit (opens modal), ↑, ↓, Remove. Bottom: "Add card" button. |
| **Layout** (initialOpen=false) | cardHeight, cardGap, cardBorderRadius, inactiveOverlayOpacity, contentPadding, contentMaxWidth |
| **Typography** (initialOpen=false) | headingSize, descriptionSize, buttonSize |
| **Colors** (PanelColorSettings) | headingColor, descriptionColor, overlayBackgroundColor, buttonTextColor, buttonBackgroundColor |
| **Animation** | ToggleControl: "Animate on scroll" with standard help text |

### 6.2 Edit card Modal (`ItemModal` component)

Two-column layout matching `text-list-hover-image`:

- **Left column (220px):** MediaUpload for card image + imageAlt TextControl
- **Right column:** heading TextControl, description TextareaControl, buttonText TextControl, buttonUrl TextControl (placeholder: `#`)
- **Footer:** Save + Cancel buttons

### 6.3 Editor preview

Renders all cards as a static horizontal grid (no hover expand). Each card shows its image (or placeholder), heading, description, and a paw-print button preview. Cards are evenly sized in the editor.

---

## 7. Front-end (`render.php`)

### 7.1 Section container

- CSS custom properties via inline `style` for all layout & color settings
- `data-nextora-scroll-reveal="1"` when scroll animation enabled
- `class="wp-block-nextora-expanding-cards"` from `get_block_wrapper_attributes()`

### 7.2 Card row

A flex row of `<button>` elements with `data-nextora-modal-open="excard-{id}"`. Each button is one flex item in the row.

Structure per card:

```html
<button type="button"
  class="nextora-expanding-cards__card"
  data-nextora-modal-open="excard-{id}"
  aria-label="View details: {heading}"
>
  <!-- Background image -->
  <span class="nextora-expanding-cards__card-bg" aria-hidden="true"
    style="background-image: url(….)"></span>
  
  <!-- Dark overlay (shown on inactive cards) -->
  <span class="nextora-expanding-cards__card-overlay" aria-hidden="true"></span>
  
  <!-- Content (visible on hover/expanded) -->
  <span class="nextora-expanding-cards__card-content">
    <span class="nextora-expanding-cards__card-heading">{heading}</span>
    <span class="nextora-expanding-cards__card-description">{description}</span>
    <span class="nextora-expanding-cards__card-button">
      <!-- Paw-print SVG -->
      <svg class="nextora-expanding-cards__card-button-icon" viewBox="0 0 24 24" …>
        <!-- 3 circles + 1 path -->
      </svg>
      {buttonText}
    </span>
  </span>
</button>
```

### 7.3 Modal layer (one per card, rendered after the flex row)

Each modal uses the `docs/modal.md` declarative pattern:

```html
<div class="nextora-modal" id="excard-{id}" hidden data-nextora-modal aria-hidden="true">
  <div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
  <div class="nextora-modal__surface nextora-modal__surface--lg" 
       data-nextora-modal-surface role="dialog" aria-modal="true"
       aria-labelledby="excard-{id}-title" tabindex="-1">
    
    <button type="button" class="nextora-modal__close" data-nextora-modal-dismiss aria-label="Close">
      <!-- × SVG -->
    </button>
    
    <!-- Modal image (full width) -->
    <div class="nextora-expanding-cards__modal-image">
      <img src="…" alt="…" />
    </div>
    
    <!-- Modal body -->
    <div class="nextora-modal__body">
      <h2 class="nextora-expanding-cards__modal-heading" id="excard-{id}-title">{heading}</h2>
      <p class="nextora-expanding-cards__modal-description">{description}</p>
      <a class="nextora-expanding-cards__modal-button" href="{buttonUrl}">
        <!-- Paw-print SVG -->
        {buttonText}
      </a>
    </div>
    
    <!-- Prev/Next navigation -->
    <button type="button" class="nextora-expanding-cards__modal-prev"
      data-nextora-modal-open="excard-{prev-id}" aria-label="Previous card">
      ←
    </button>
    <button type="button" class="nextora-expanding-cards__modal-next"
      data-nextora-modal-open="excard-{next-id}" aria-label="Next card">
      →
    </button>
  </div>
</div>
```

Prev/Next buttons use `data-nextora-modal-open="excard-{adjacent-id}"` — the modal system auto-closes current and opens the target declaratively.

### 7.4 Placeholder image

When the card has no `imageUrl`, render a themed placeholder via PHP (`get_theme_file_uri('assets/images/placeholder/general-img-square.png')`).

### 7.5 Color resolution

Follow the standard `docs/blocks.md` PHP color resolution:

```
1. 8-digit hex (alpha) — pass through
2. sanitize_hex_color() for 3/6-digit hex
3. Preset slug → var(--wp--preset--color--{slug})
4. Empty → leave CSS property unset
```

---

## 8. CSS (`style.css`)

### 8.1 Card row

```css
.nextora-expanding-cards__row {
  display: flex;
  gap: var(--nextora-ec-gap);
  height: var(--nextora-ec-height);
  overflow: hidden;
  border-radius: var(--nextora-ec-radius);
}
```

### 8.2 Card

```css
.nextora-expanding-cards__card {
  position: relative;
  flex: 1;
  overflow: hidden;
  border-radius: var(--nextora-ec-radius);
  transition: flex 0.5s ease-in-out;
  /* no border, no padding */
  cursor: pointer;
}

/* Expanded on hover/active */
.nextora-expanding-cards__card:hover {
  flex: 2.5;
}
```

### 8.3 Background image

```css
.nextora-expanding-cards__card-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.nextora-expanding-cards__card:hover .nextora-expanding-cards__card-bg {
  transform: scale(1.05);
}
```

### 8.4 Overlay

```css
.nextora-expanding-cards__card-overlay {
  position: absolute;
  inset: 0;
  background: var(--nextora-ec-overlay-bg, #000);
  opacity: var(--nextora-ec-overlay-opacity);
  transition: opacity 0.4s ease;
}

.nextora-expanding-cards__card:hover .nextora-expanding-cards__card-overlay {
  opacity: 0.15;
}
```

### 8.5 Content (hidden → visible on hover)

```css
.nextora-expanding-cards__card-content {
  position: absolute;
  bottom: var(--nextora-ec-content-padding);
  left: var(--nextora-ec-content-padding);
  right: var(--nextora-ec-content-padding);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s;
  z-index: 2;
}

.nextora-expanding-cards__card:hover .nextora-expanding-cards__card-content {
  opacity: 1;
  transform: translateY(0);
}
```

### 8.6 Heading, Description, Button

```css
.nextora-expanding-cards__card-heading {
  font-size: var(--wp--preset--font-size--{headingSize});
  font-weight: 700;
  color: var(--nextora-ec-heading-color, #fff);
  line-height: 1.2;
}

.nextora-expanding-cards__card-description {
  font-size: var(--wp--preset--font-size--{descriptionSize});
  color: var(--nextora-ec-description-color, rgba(255,255,255,0.85));
  line-height: 1.5;
}

/* Button in card — outline pill */
.nextora-expanding-cards__card-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.5rem 1.25rem;
  border: 1.5px solid var(--nextora-ec-button-text-color, #fff);
  border-radius: 999px;
  color: var(--nextora-ec-button-text-color, #fff);
  background: var(--nextora-ec-button-bg-color, transparent);
  font-size: var(--wp--preset--font-size--{buttonSize});
  font-weight: 600;
  white-space: nowrap;
}

.nextora-expanding-cards__card-button-icon {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
}
```

### 8.7 Modal styles

```css
.nextora-expanding-cards__modal-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--wp--preset--spacing--small, 0.5rem) var(--wp--preset--spacing--small, 0.5rem) 0 0;
}

.nextora-expanding-cards__modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nextora-expanding-cards__modal-heading { … }
.nextora-expanding-cards__modal-description { … }
.nextora-expanding-cards__modal-button { … }

/* Prev/Next floating buttons */
.nextora-expanding-cards__modal-prev,
.nextora-expanding-cards__modal-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 44px;
  height: 44px;
  border: none;
  background: rgba(0,0,0,0.4);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.nextora-expanding-cards__modal-prev { left: 1rem; }
.nextora-expanding-cards__modal-next { right: 1rem; }
```

### 8.8 Responsive

On mobile (max-width: 767px), switch to stacked vertical cards with fixed image height + visible content (no hover-only reveal). No modals on mobile — each card becomes a link to `buttonUrl`.

---

## 9. Scroll animation (`view.ts`)

Follows `text-list-hover-image/view.ts` pattern — IntersectionObserver with `has-scroll-animation` + `is-visible` class toggling.

- Only run if `data-nextora-scroll-reveal="1"`
- Staggered item reveal via nth-child transition-delay in CSS
- Respect `prefers-reduced-motion: reduce` → immediate visible
- Guard attribute: `data-nextora-excards-inited="1"`

```ts
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initExpandingCardScroll(root: HTMLElement): void {
  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') return;
  
  if (REDUCED_MOTION) {
    root.classList.add('is-visible');
    return;
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  observer.observe(root);
}

function initRoot(root: HTMLElement): void {
  if (root.hasAttribute('data-nextora-excards-inited')) return;
  root.setAttribute('data-nextora-excards-inited', '1');
  initExpandingCardScroll(root);
}
```

---

## 10. Checklist

- [ ] `block.json` — textdomain `nextora`, proper supports, `enableScrollAnimation`
- [ ] `types.ts` — `ExpandingCardItem`, `ExpandingCardsAttributes`
- [ ] `index.tsx` — `registerBlockType`, `save: () => null`
- [ ] `edit.tsx` — Sidebar panels (Cards, Layout, Typography, Colors, Animation), ItemModal for editing each card
- [ ] `render.php` — Flex row + card HTML + modal layer for each card, paw-print SVG, color resolution, placeholder fallback
- [ ] `style.css` — Hover expand flex, overlay, content transition, modal layout, responsive mobile
- [ ] `editor.css` — Modal two-column layout, editor card preview
- [ ] `view.ts` — Scroll reveal via IntersectionObserver
- [ ] `npm run build:blocks` — no errors
- [ ] `npm run lint:php:all` — passes
- [ ] `npm run typecheck` — passes
