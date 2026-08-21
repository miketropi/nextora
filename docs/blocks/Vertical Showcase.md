# Vertical Showcase Block

**Version:** 1.0
**Status:** Spec for **`nextora/vertical-showcase`** in [`blocks/vertical-showcase/`](../../blocks/vertical-showcase/). When building, follow this doc plus [`docs/blocks.md`](../blocks.md) and [`AGENTS.md`](../../AGENTS.md); do not copy the React reference §2 as-is.
**For:** AI Agent Development

---

## 1. Overview

This document specifies a Gutenberg block that renders a **vertical tabbed service showcase**. Two columns:

- **Left — vertical tab list.** Each row is a numbered service (`/01`, `/02`, …) with a large title. The active row expands to reveal its description, and a thin progress bar fills vertically along the left edge as autoplay advances.
- **Right — image gallery.** A single large, rounded image frame crossfades/slides vertically between the active service's image. Prev/next arrow buttons sit in the bottom-right corner. Hovering the image pauses autoplay.

The original React reference has no heading/kicker section — that has been intentionally **removed** (no section heading or "(SERVICES)" eyebrow in this block).

**Design philosophy:** Editorial and calm — the title list is the hero, the image is the supporting visual, and the vertical progress bar communicates the autoplay rhythm.

---

## 2. Reference component (design/behaviour only)

The original `VerticalTabs` component (heading section removed). **Do not** copy `motion/react`, `@hugeicons/*`, `cn()`, or Tailwind classes into the theme — map them via §3.

```tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Creating beautiful, functional, and user-centric digital experiences.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  },
  {
    id: "02",
    title: "Framer Development",
    description: "Building high-performance, animated websites with Framer.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200",
  },
  {
    id: "03",
    title: "Branding",
    description:
      "Defining your brand's visual identity and voice for a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => handleNext(), AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  return (
    <section className="w-full bg-background py-8 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left " +
                      "border-t border-border/50 first:border-0 " +
                      (isActive ? "text-foreground" : "text-muted-foreground/60 hover:text-foreground")
                    }
                  >
                    {/* progress rail */}
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted">
                      {isActive && (
                        <div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-foreground origin-top"
                          style={{
                            animation: isPaused ? "none" : `vsProgress ${AUTO_PLAY_DURATION}ms linear forwards`,
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
                        {service.title}
                      </span>
                      {isActive && (
                        <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-muted/30 border border-border/40">
                <img
                  src={SERVICES[activeIndex].image}
                  alt={SERVICES[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center" aria-label="Previous" />
                  <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center" aria-label="Next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Prompt → Nextora mapping

| Reference (React) | Nextora block |
|---|---|
| `VerticalTabs` component | **`nextora/vertical-showcase`** (dynamic, server-rendered via `render.php`) |
| `SERVICES` const array | **`items[]` attribute** (repeater) |
| `motion/react` slide/expand animation | **CSS transitions + vanilla TS state** (`activeIndex`, `direction`) — no framer-motion |
| `@hugeicons/*` arrows | **Inline SVG chevrons** (match `image-gallery-slide`) |
| `cn()` / Tailwind utility classes | **BEM `nextora-vertical-showcase__*`** + `var(--wp--preset--*)` tokens |
| `AUTO_PLAY_DURATION` | **`autoplayDuration`** attribute (ms) |
| `setInterval` autoplay + pause-on-hover | **`view.ts`** interval + pause handlers |
| Hard-coded Unsplash URLs | **`imageId`** + `wp_get_attachment_image()` (media library) |
| Heading "(SERVICES)" section | **Removed** — no heading in this block |

---

## 4. `block.json` specification

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "nextora/vertical-showcase",
  "title": "Vertical Showcase",
  "category": "design",
  "description": "A vertical list of services that crossfade into a large image, with autoplay and a progress indicator.",
  "keywords": ["services", "showcase", "tabs", "list", "image", "nextora"],
  "textdomain": "nextora",
  "icon": "format-gallery",
  "supports": {
    "html": false,
    "align": ["wide", "full"],
    "anchor": true,
    "color": { "background": true, "text": false, "link": false },
    "spacing": { "padding": true, "margin": true, "blockGap": true },
    "typography": { "fontSize": true, "lineHeight": true }
  },
  "attributes": { /* §4.1 */ },
  "editorScript": "file:./index.js",
  "viewScript": "file:./view.js",
  "style": "file:./style.css",
  "editorStyle": "file:./editor.css",
  "render": "file:./render.php"
}
```

### 4.1 Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `items` | `array` | `[]` | repeater (§5) | List items: `{ id, title, description, imageId, imageUrl, imageAlt }` |
| `autoplay` | `boolean` | `true` | ToggleControl | Auto-advance between items |
| `autoplayDuration` | `number` | `5000` | RangeControl (2000–15000, step 250) | Autoplay interval in ms |
| `titleSize` | `string` | `"medium-plus"` | SelectControl | Item title font-size preset slug |
| `descriptionSize` | `string` | `"small"` | SelectControl | Description font-size preset slug |
| `titleColor` | `string` | `""` | ColorPicker | Item title color (empty = theme default) |
| `descriptionColor` | `string` | `""` | ColorPicker | Description color (empty = theme default) |
| `numberColor` | `string` | `""` | ColorPicker | Number `/01` color (empty = theme default) |
| `activeIndicatorColor` | `string` | `""` | ColorPicker | Active progress rail color (empty = theme default) |
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | Reveal block on scroll |

**Item shape:**

```json
{
  "id": "vs-item-1",
  "title": "Web Design",
  "description": "Creating beautiful, functional, and user-centric digital experiences.",
  "imageId": 0,
  "imageUrl": "",
  "imageAlt": ""
}
```

Default `items[]` ships with three sample rows matching §2 (`Web Design`, `Framer Development`, `Branding`) — `imageId: 0`, empty `imageUrl` (no committed stock URLs).

---

## 5. Editor / backend settings

Mirror **`blocks/text-list-hover-image/edit.tsx`** (`createItemId()`, `normalizeItems()`, `EMPTY_ITEM`, `ItemModal`, `FONT_SIZE_OPTIONS`, `FONT_WEIGHT_OPTIONS`) and `blocks/advanced-icon/color-utils` for colour storage.

### 5.1 Inspector panels

| Panel | Contents |
|---|---|
| **Items** | Compact rows (thumb + title) with Edit / Move up / Move down / Remove; **Add item** button; item **Modal** for full fields |
| **Autoplay** | `ToggleControl` — Enable autoplay; `RangeControl` — Duration (2000–15000 ms) |
| **Typography** | `SelectControl` — Item title font size; `SelectControl` — Description font size |
| **Colors** | `PanelColorSettings` — Title / Description / Number / Active indicator color |
| **Animation** | `ToggleControl` — Animate on scroll (standard help from `docs/blocks.md`) |

### 5.2 Item modal fields

| Field | Control |
|---|---|
| Image | `MediaUpload` + `MediaUploadCheck` (`allowedTypes: ['image']`), preview, Replace/Remove |
| Image alt text | `TextControl` |
| Title | `TextControl` |
| Description | `TextareaControl` (`rows={3}`) |

### 5.3 Colours — slug storage (required)

Follow `docs/blocks.md` § Custom colour options exactly:

- Scoped attribute names (`titleColor`, `descriptionColor`, `numberColor`, `activeIndicatorColor`) — **never** `backgroundColor`/`textColor`.
- `onChange` → `normalizeColorForStorage(value, lookupPalette)`; picker `value` → `colorValueForPicker(...)`.
- `PanelColorSettings` with `enableAlpha`, `colors={colorPalette}` from `useThemeColorPalette()`.

---

## 6. Frontend HTML structure

```html
<div class="wp-block-nextora-vertical-showcase" style="--nextora-vs-title-size: ...; --nextora-vs-title-color: ...;"
     data-nextora-scroll-reveal="1" data-nextora-vs-autoplay="5000">
  <div class="nextora-vertical-showcase__grid">

    <!-- Left: list -->
    <div class="nextora-vertical-showcase__list" role="tablist" aria-label="Services">
      <button class="nextora-vertical-showcase__item nextora-vertical-showcase__item--active"
              role="tab" aria-selected="true" data-nextora-vs-index="0">
        <span class="nextora-vertical-showcase__item-rail" aria-hidden="true"></span>
        <span class="nextora-vertical-showcase__item-number" aria-hidden="true">/01</span>
        <span class="nextora-vertical-showcase__item-body">
          <span class="nextora-vertical-showcase__item-title">Web Design</span>
          <span class="nextora-vertical-showcase__item-description">Creating beautiful…</span>
        </span>
      </button>
      <!-- …more items… -->
    </div>

    <!-- Right: image gallery -->
    <div class="nextora-vertical-showcase__gallery">
      <div class="nextora-vertical-showcase__frame">
        <img class="nextora-vertical-showcase__image nextora-vertical-showcase__image--active" data-nextora-vs-index="0" alt="Web Design" />
        <!-- …stacked image layers… -->
        <div class="nextora-vertical-showcase__image-gradient" aria-hidden="true"></div>
        <div class="nextora-vertical-showcase__controls">
          <button class="nextora-vertical-showcase__arrow nextora-vertical-showcase__arrow--prev" aria-label="Previous"></button>
          <button class="nextora-vertical-showcase__arrow nextora-vertical-showcase__arrow--next" aria-label="Next"></button>
        </div>
      </div>
    </div>

  </div>
</div>
```

---

## 7. `render.php` requirements

- `declare(strict_types=1);`; guard empty `items[]`.
- `get_block_wrapper_attributes()` on the root with BEM class + inline CSS vars (`--nextora-vs-*`) + `data-nextora-scroll-reveal` + `data-nextora-vs-autoplay`.
- Auto-number items `01`, `02`, … via CSS `counter` (preferred) or a PHP index; the `id` attribute is only a stable key.
- Render **all** item images as stacked layers (only `--active` visible), via `wp_get_attachment_image( $imageId, 'large', … )` with fallback to `imageUrl`.
- Prev/next chevron buttons with `aria-label="Previous"` / `"Next"` (translatable, `nextora`).
- Escape: `esc_html` titles/descriptions (plain text), `esc_attr`, `esc_url`.
- Colour resolve helper `nextora_vertical_showcase_resolve_color()` following the `docs/blocks.md` § PHP colour resolution reference order (8-digit hex before `sanitize_hex_color()`).

---

## 8. `view.ts` requirements

- Idempotent `initRoot()`; guard `data-nextora-vs-inited="1"`; re-listen on `nextora-vertical-showcase-reinit`.
- `REDUCED_MOTION = matchMedia('(prefers-reduced-motion: reduce)').matches` — skip autoplay and slide transitions (show static active item).
- State: `activeIndex`, `direction`; `setActive(direction)`, `next()`, `prev()`.
- Autoplay `setInterval(next, autoplayDuration)` (parse `data-nextora-vs-autoplay`); cleared on pause.
- Pause on `mouseenter`/`mouseleave` over the gallery (matches §2); also pause on `focusin` for keyboard users.
- Tab click / arrow click update `direction` and toggle `--active` classes; image slide uses CSS class with `translateY` origin (direction-aware).
- Root classes `nextora-vertical-showcase--loading` → `--ready` after init.
- Scroll reveal: follow `blocks/text-list-hover-image/view.ts` (IntersectionObserver + `is-visible`, threshold `0.15`), only when `data-nextora-scroll-reveal="1"`; reduced motion → add `is-visible` immediately.

---

## 9. `style.css` tokens

| Variable | Default |
|---|---|
| `--nextora-vs-title-size` | `var(--wp--preset--font-size--large)` |
| `--nextora-vs-description-size` | `var(--wp--preset--font-size--small)` |
| `--nextora-vs-title-color` | `var(--wp--preset--color--contrast)` |
| `--nextora-vs-description-color` | `var(--wp--preset--color--paragraph)` |
| `--nextora-vs-number-color` | `var(--wp--preset--color--paragraph)` |
| `--nextora-vs-active-indicator` | `var(--wp--preset--color--primary)` |

- Grid: 1 column → `lg: 12-col` (list `5/12`, gallery `7/12`); gallery `order` first on mobile.
- Image frame: `aspect-ratio` (reserve space, no layout jump), `overflow: hidden`, rounded, `1px` border.
- Progress rail: 2px track; active fill animates `transform: scaleY(0 → 1)` over `var(--nextora-vs-autoplay-duration, 5000ms)` linear, `transform-origin: top`.
- Image layers: `position: absolute; inset: 0; opacity: 0` → `--active` visible; direction-aware `translateY`.
- Arrows: 2.5rem ghost circle, `background: rgba`, `backdrop-filter`, `currentColor` chevron (match `image-gallery-slide` arrows).
- `--loading` state: subtle opacity for the gallery; `--ready` restores.
- `@media (prefers-reduced-motion: reduce)`: disable rail animation + transitions.

---

## 10. Accessibility

- List uses `role="tablist"` / `role="tab"` with `aria-selected`; or plain buttons with `aria-current` — pick one and keep `aria-controls` semantics consistent.
- Number `/01` and progress rail are decorative → `aria-hidden="true"`.
- Arrow buttons: translatable `aria-label`.
- Decorative gradient overlay → `aria-hidden="true"`.
- Autoplay pauses on hover **and** keyboard focus.
- `prefers-reduced-motion` disables autoplay + transitions; scroll reveal still ends visible without JS.

---

## 11. Acceptance criteria

1. Block registered as **`nextora/vertical-showcase`**, `textdomain` **`nextora`**.
2. `items[]` repeater matches `text-list-hover-image` UX (add / edit in modal / reorder / remove).
3. Colours stored as preset **slugs**; empty falls back to `theme.json` presets.
4. Autoplay + direction-aware slide + progress rail work on the front end; pause on hover/focus.
5. `enableScrollAnimation` toggle works; reduced motion disables autoplay + reveal.
6. Images load via attachment ID (`wp_get_attachment_image`), not committed URLs.
7. `npm run build:blocks`, `npm run typecheck`, `npm run lint:php:all` pass.
8. Multiple instances on one page init independently.
9. Inspector panel titles match `docs/blocks.md` (**Items**, **Autoplay**, **Typography**, **Colors**, **Animation**).

---

## 12. Closest reference blocks

| Need | Block |
|---|---|
| Items repeater + modal editing + colour utils | [`blocks/text-list-hover-image/`](../../blocks/text-list-hover-image/) |
| Colour slug storage + `PanelColorSettings` | [`blocks/advanced-icon/`](../../blocks/advanced-icon/) |
| Carousel arrows / init loading guards | [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/) |
| Scroll reveal toggle + reduced motion | [`blocks/text-list-hover-image/view.ts`](../../blocks/text-list-hover-image/view.ts) |
| Colour resolve helper | [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) |
