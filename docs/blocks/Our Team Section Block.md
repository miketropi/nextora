# Our Team Section Block

**Version:** 1.1 (Nextora planning alignment)
**For:** AI Agent Development
**Status:** Implemented as **`nextora/team-section`** in [`blocks/team-section/`](../../blocks/team-section/). When changing behavior, follow **§15** and [`docs/blocks.md`](../blocks.md); do not copy §2–§14 plugin patterns as-is.

---

## Theme context (Nextora)

| Item | Generic spec (§2–§14) | Nextora target |
|------|------------------------|----------------|
| Block name | `custom/team-section` + `custom/team-member-card` | **`nextora/team-section`** (see §15.2 for one-block vs two-block) |
| Text domain | `team-section` | **`nextora`** |
| Registration | Standalone plugin + CDN Swiper | **[`blocks/blocks.php`](../../blocks/blocks.php)** — auto `register_block_type` per folder |
| Build | `@wordpress/scripts`, hand `edit.js` / `save.js` | **esbuild** [`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs) → `index.js` / `index.asset.php` |
| Front end | `save.js` static HTML | **`render.php`** + `save: () => null` (dynamic block) |
| Swiper | CDN enqueue in PHP | **npm `swiper@11`** bundled in **`view.ts`** (see [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts)) |
| Skills / rules | — | **nextora-add-theme-block**, **nextora-theme-styling-and-tokens**, [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc) |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md).

---

## 1. Overview

This document specifies a Gutenberg block that renders an **"Our Team" section** with a two-part layout:

- **Top row:** Section heading (left) + outline CTA button (right)
- **Bottom row:** A horizontal Swiper.js card carousel of team member cards

Each team member card displays a photo, name, role/title, skill tags, and a short bio. The carousel supports configurable slides-per-view, pagination dots, optional navigation arrows, autoplay, and responsive breakpoints.

**Reference:** See the attached screenshot showing a similar layout with "Discover Our Popular Classes" heading on the left, an outline "Discover All Course" button on the right, and 4 visible cards in a horizontal row with partial visibility of the next card.

---

## 2. Block Architecture — Two-Block System

Like the Hero Slider spec, this uses a **parent + child** block pattern:

| Block | Role |
|---|---|
| **Team Section** (`custom/team-section`) | Parent wrapper — heading, description, CTA button, Swiper carousel settings, pagination/arrows config |
| **Team Member Card** (`custom/team-member-card`) | Child block — individual team member: photo, name, role, tags, bio, social links |

The Team Section accepts **only** Team Member Card blocks as direct children. Each card is a self-contained editable block.

---

## 3. Block 1 — Team Section (Parent)

### 3.1 block.json Metadata

| Property | Value |
|---|---|
| `name` | `custom/team-section` |
| `title` | `Team Section` |
| `category` | `design` |
| `icon` | `groups` (Dashicon) |
| `description` | A team showcase section with heading, CTA button, and a Swiper card carousel of team members. |
| `textdomain` | `team-section` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.multiple` | `true` |
| `supports.anchor` | `true` |

### 3.2 Attributes — Header Area

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `eyebrowText` | `string` | `""` | RichText | Optional small text above the heading |
| `headingText` | `string` | `"Meet Our Amazing Team"` | RichText | Section heading |
| `headingLevel` | `number` | `2` | SelectControl (1–6) | Heading tag level |
| `descriptionText` | `string` | `""` | RichText | Short paragraph under the heading |
| `headerLayout` | `string` | `"split"` | SelectControl | Header layout: `"split"` (heading left, button right), `"stacked"` (all centered), `"left-aligned"` (all left) |
| `contentMaxWidth` | `string` | `"1200px"` | TextControl | Max-width of the content area |

### 3.3 Attributes — CTA Button

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `showButton` | `boolean` | `true` | ToggleControl | Show/hide the section CTA button |
| `buttonText` | `string` | `"View All Members"` | RichText | Button label |
| `buttonUrl` | `string` | `""` | URLInput | Button link URL |
| `buttonTarget` | `boolean` | `false` | ToggleControl | Open link in new tab |
| `buttonStyle` | `string` | `"outline"` | SelectControl | Button style: `"outline"`, `"solid"`, `"link"` |
| `buttonBorderColor` | `string` | `"#D4A843"` | ColorPicker | Outline border / solid bg color |
| `buttonTextColor` | `string` | `"#D4A843"` | ColorPicker | Button text color |
| `buttonBorderRadius` | `number` | `50` | RangeControl (0–50) | Button corner radius in px. 50 = pill shape |
| `buttonIcon` | `string` | `"arrow-right"` | TextControl | Optional trailing Dashicon name |

### 3.4 Attributes — Swiper Carousel

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `slidesPerView` | `number` | `4` | RangeControl (1–6) | Visible slides on desktop |
| `slidesPerViewTablet` | `number` | `2.5` | RangeControl (1–4, step 0.5) | Visible slides on tablet (768–1024px) |
| `slidesPerViewMobile` | `number` | `1.2` | RangeControl (1–2, step 0.1) | Visible slides on mobile (<768px) |
| `spaceBetween` | `number` | `24` | RangeControl (0–60) | Gap between cards in px |
| `speed` | `number` | `500` | RangeControl (100–2000, step 100) | Transition duration in ms |
| `loop` | `boolean` | `false` | ToggleControl | Infinite loop mode |
| `autoplay` | `boolean` | `false` | ToggleControl | Enable autoplay |
| `autoplayDelay` | `number` | `4000` | RangeControl (1000–10000, step 500) | Autoplay interval in ms |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause autoplay on hover |
| `showPagination` | `boolean` | `true` | ToggleControl | Show pagination dots |
| `paginationType` | `string` | `"bullets"` | SelectControl | Pagination type: `"bullets"`, `"fraction"`, `"progressbar"` |
| `showArrows` | `boolean` | `false` | ToggleControl | Show prev/next navigation arrows |
| `arrowStyle` | `string` | `"minimal"` | SelectControl | Arrow style: `"minimal"`, `"circle"`, `"square"` |
| `freeMode` | `boolean` | `false` | ToggleControl | Enable free scroll (no snap to slide) |
| `grabCursor` | `boolean` | `true` | ToggleControl | Show grab cursor on hover |

### 3.5 Attributes — Section Style

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `backgroundColor` | `string` | `""` | ColorPicker | Section background color |
| `headingColor` | `string` | `""` | ColorPicker | Heading text color |
| `descriptionColor` | `string` | `""` | ColorPicker | Description text color |
| `eyebrowColor` | `string` | `""` | ColorPicker | Eyebrow text color |
| `paddingTop` | `number` | `80` | RangeControl (0–200) | Section top padding in px |
| `paddingBottom` | `number` | `80` | RangeControl (0–200) | Section bottom padding in px |
| `paginationColor` | `string` | `""` | ColorPicker | Inactive dot / bar color |
| `paginationActiveColor` | `string` | `"#D4A843"` | ColorPicker | Active dot / bar color |

### 3.6 InnerBlocks Configuration

```js
// edit.js
<InnerBlocks
  allowedBlocks={['custom/team-member-card']}
  template={[
    ['custom/team-member-card'],
    ['custom/team-member-card'],
    ['custom/team-member-card'],
    ['custom/team-member-card'],
  ]}
  orientation="horizontal"
  renderAppender={InnerBlocks.ButtonBlockAppender}
/>
```

---

## 4. Block 2 — Team Member Card (Child)

### 4.1 block.json Metadata

| Property | Value |
|---|---|
| `name` | `custom/team-member-card` |
| `title` | `Team Member Card` |
| `category` | `design` |
| `icon` | `admin-users` (Dashicon) |
| `description` | A single team member card with photo, name, role, tags, and bio. |
| `textdomain` | `team-section` |
| `parent` | `["custom/team-section"]` |
| `supports.html` | `false` |
| `supports.reusable` | `false` |

### 4.2 Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `photoUrl` | `string` | `""` | MediaUpload | Member photo URL |
| `photoId` | `number` | `0` | — | WP media attachment ID |
| `photoAlt` | `string` | `""` | TextControl | Photo alt text |
| `photoFocalPoint` | `object` | `{"x":0.5,"y":0.3}` | FocalPointPicker | Photo crop focus point |
| `name` | `string` | `""` | RichText | Member full name |
| `role` | `string` | `""` | RichText | Job title / role |
| `tags` | `array` | `[]` | Repeater (TextControl) | Array of skill/expertise tag strings |
| `bio` | `string` | `""` | RichText | Short bio / description (2–3 lines max) |
| `bioLineClamp` | `number` | `3` | RangeControl (1–5) | Max visible lines of bio text (CSS line-clamp) |
| `showSocialLinks` | `boolean` | `false` | ToggleControl | Show social media icon links |
| `socialLinks` | `array` | `[]` | Repeater | Array of `{ platform, url }` objects |
| `cardBorderRadius` | `number` | `16` | RangeControl (0–30) | Card corner radius in px |
| `photoAspectRatio` | `string` | `"4/3"` | SelectControl | Photo aspect ratio: `"1/1"`, `"4/3"`, `"3/4"`, `"16/9"` |

Social link platforms supported: `linkedin`, `twitter`, `github`, `website`, `email`, `instagram`, `facebook`.

---

## 5. Frontend HTML Structure

### 5.1 Team Section (Parent)

```html
<div class="wp-block-team-section alignfull"
     data-slides-per-view="4"
     data-slides-per-view-tablet="2.5"
     data-slides-per-view-mobile="1.2"
     data-space-between="24"
     data-speed="500"
     data-loop="false"
     data-autoplay="false"
     data-autoplay-delay="4000"
     data-pause-on-hover="true"
     data-pagination="true"
     data-pagination-type="bullets"
     data-arrows="false"
     data-free-mode="false"
     data-grab-cursor="true"
     style="--ts-bg: #f9f8f5;
            --ts-heading-color: #1A1A2E;
            --ts-desc-color: #718096;
            --ts-btn-border: #D4A843;
            --ts-btn-text: #D4A843;
            --ts-btn-radius: 50px;
            --ts-dot-color: #D0D0D0;
            --ts-dot-active: #D4A843;
            --ts-padding-top: 80px;
            --ts-padding-bottom: 80px;">

  <!-- Header Row -->
  <div class="team-section__header team-section__header--split">
    <div class="team-section__header-left">
      <p class="team-section__eyebrow">Our People</p>
      <h2 class="team-section__heading">Meet Our Amazing Team</h2>
      <p class="team-section__description">
        The talented people behind our success and innovation.
      </p>
    </div>
    <div class="team-section__header-right">
      <a class="team-section__btn team-section__btn--outline" href="#">
        View All Members
        <svg aria-hidden="true"><!-- arrow icon --></svg>
      </a>
    </div>
  </div>

  <!-- Swiper Carousel -->
  <div class="swiper team-section__carousel">
    <div class="swiper-wrapper">
      <!-- Team Member Cards render here as swiper-slides -->
    </div>

    <!-- Pagination -->
    <div class="team-section__pagination swiper-pagination"></div>

    <!-- Arrows (optional) -->
    <button class="team-section__arrow team-section__arrow--prev" aria-label="Previous">
      <svg aria-hidden="true"><!-- chevron left --></svg>
    </button>
    <button class="team-section__arrow team-section__arrow--next" aria-label="Next">
      <svg aria-hidden="true"><!-- chevron right --></svg>
    </button>
  </div>

</div>
```

### 5.2 Team Member Card (Child)

```html
<div class="swiper-slide team-member-card">
  <div class="team-member-card__photo-wrapper">
    <img class="team-member-card__photo"
         src="{photoUrl}"
         alt="{photoAlt}"
         style="object-position: 50% 30%;" />
  </div>
  <div class="team-member-card__body">
    <h3 class="team-member-card__name">{name}</h3>
    <p class="team-member-card__role">{role}</p>
    <div class="team-member-card__tags">
      <span class="team-member-card__tag">Design</span>
      <span class="team-member-card__tag">Strategy</span>
    </div>
    <p class="team-member-card__bio">{bio}</p>
    <!-- Optional Social Links -->
    <div class="team-member-card__social">
      <a href="#" aria-label="LinkedIn">
        <svg aria-hidden="true"><!-- linkedin icon --></svg>
      </a>
      <a href="#" aria-label="Twitter">
        <svg aria-hidden="true"><!-- twitter icon --></svg>
      </a>
    </div>
  </div>
</div>
```

---

## 6. CSS Specification

### 6.1 Design Tokens

| Variable | Default | Description |
|---|---|---|
| `--ts-bg` | `transparent` | Section background |
| `--ts-padding-top` | `80px` | Top padding |
| `--ts-padding-bottom` | `80px` | Bottom padding |
| `--ts-heading-color` | `inherit` | Heading color |
| `--ts-desc-color` | `#718096` | Description / eyebrow color |
| `--ts-btn-border` | `#D4A843` | Button border & text color (outline) |
| `--ts-btn-text` | `#D4A843` | Button text color |
| `--ts-btn-radius` | `50px` | Button border radius |
| `--ts-dot-color` | `#D0D0D0` | Inactive pagination dot |
| `--ts-dot-active` | `#D4A843` | Active pagination dot |
| `--ts-card-radius` | `16px` | Card corner radius |
| `--ts-card-bg` | `#FFFFFF` | Card background |
| `--ts-tag-bg` | `#F5F5F0` | Tag pill background |
| `--ts-tag-color` | `#718096` | Tag pill text |

### 6.2 Section Styles

```css
.wp-block-team-section {
  background-color: var(--ts-bg, transparent);
  padding: var(--ts-padding-top, 80px) 0 var(--ts-padding-bottom, 80px);
}

/* Header — Split layout */
.team-section__header--split {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  max-width: var(--ts-max-width, 1200px);
  margin: 0 auto 40px;
  padding: 0 24px;
}

/* Header — Stacked layout */
.team-section__header--stacked {
  text-align: center;
  max-width: var(--ts-max-width, 1200px);
  margin: 0 auto 40px;
  padding: 0 24px;
}
.team-section__header--stacked .team-section__header-right {
  margin-top: 20px;
}

.team-section__eyebrow {
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--ts-btn-border, #D4A843);
  margin: 0 0 8px;
}

.team-section__heading {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--ts-heading-color, inherit);
  line-height: 1.15;
  margin: 0 0 12px;
}

.team-section__description {
  font-size: 16px;
  color: var(--ts-desc-color, #718096);
  line-height: 1.6;
  margin: 0;
  max-width: 480px;
}

/* CTA Button — Outline */
.team-section__btn--outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 28px;
  border: 1.5px solid var(--ts-btn-border, #D4A843);
  border-radius: var(--ts-btn-radius, 50px);
  color: var(--ts-btn-text, #D4A843);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  background: transparent;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}
.team-section__btn--outline:hover {
  background: var(--ts-btn-border, #D4A843);
  color: #FFFFFF;
}
.team-section__btn--outline svg {
  width: 16px;
  height: 16px;
}

/* CTA Button — Solid */
.team-section__btn--solid {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 28px;
  border: none;
  border-radius: var(--ts-btn-radius, 50px);
  background: var(--ts-btn-border, #D4A843);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.team-section__btn--solid:hover { opacity: 0.9; }

/* Carousel container */
.team-section__carousel {
  max-width: var(--ts-max-width, 1200px);
  margin: 0 auto;
  padding: 0 24px;
  overflow: visible;
}

/* Pagination dots */
.team-section__pagination {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 32px;
}
.team-section__pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ts-dot-color, #D0D0D0);
  opacity: 1;
  transition: all 0.3s ease;
}
.team-section__pagination .swiper-pagination-bullet-active {
  width: 24px;
  border-radius: 4px;
  background: var(--ts-dot-active, #D4A843);
}

/* Arrows */
.team-section__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255,255,255,0.9);
  border: 0.5px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.team-section__arrow:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.team-section__arrow--prev { left: 8px; }
.team-section__arrow--next { right: 8px; }
.team-section__arrow svg { width: 18px; height: 18px; }
```

### 6.3 Team Member Card Styles

```css
.team-member-card {
  background: var(--ts-card-bg, #FFFFFF);
  border-radius: var(--ts-card-radius, 16px);
  overflow: hidden;
  border: 0.5px solid rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: auto;
}
.team-member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

/* Photo */
.team-member-card__photo-wrapper {
  width: 100%;
  overflow: hidden;
}
.team-member-card__photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.team-member-card:hover .team-member-card__photo {
  transform: scale(1.05);
}

/* Body */
.team-member-card__body {
  padding: 16px 20px 20px;
}

.team-member-card__name {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 2px;
  color: inherit;
}

.team-member-card__role {
  font-size: 13px;
  color: var(--ts-desc-color, #718096);
  margin: 0 0 10px;
}

/* Tags */
.team-member-card__tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.team-member-card__tag {
  font-size: 12px;
  padding: 3px 12px;
  border-radius: 20px;
  background: var(--ts-tag-bg, #F5F5F0);
  color: var(--ts-tag-color, #718096);
  font-weight: 500;
}

/* Bio */
.team-member-card__bio {
  font-size: 14px;
  line-height: 1.6;
  color: var(--ts-desc-color, #718096);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: var(--ts-bio-clamp, 3);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Social links */
.team-member-card__social {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 0.5px solid rgba(0,0,0,0.06);
}
.team-member-card__social a {
  color: var(--ts-desc-color, #718096);
  transition: color 0.2s;
}
.team-member-card__social a:hover {
  color: var(--ts-btn-border, #D4A843);
}
.team-member-card__social svg {
  width: 18px;
  height: 18px;
}
```

### 6.4 Responsive

```css
@media (max-width: 768px) {
  .team-section__header--split {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .team-section__description {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .team-member-card__body {
    padding: 12px 16px 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .team-member-card,
  .team-member-card__photo {
    transition: none;
  }
  .team-member-card:hover {
    transform: none;
  }
  .team-member-card:hover .team-member-card__photo {
    transform: none;
  }
}
```

---

## 7. Swiper.js Frontend Initialization (view.js)

```js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wp-block-team-section').forEach((section) => {
    const el = section.querySelector('.swiper');
    if (!el) return;

    const d = section.dataset;

    const config = {
      slidesPerView: parseFloat(d.slidesPerViewMobile) || 1.2,
      spaceBetween: parseInt(d.spaceBetween) || 24,
      speed: parseInt(d.speed) || 500,
      loop: d.loop === 'true',
      freeMode: d.freeMode === 'true',
      grabCursor: d.grabCursor !== 'false',

      breakpoints: {
        768: {
          slidesPerView: parseFloat(d.slidesPerViewTablet) || 2.5,
        },
        1024: {
          slidesPerView: parseFloat(d.slidesPerView) || 4,
        },
      },

      autoplay: d.autoplay === 'true' ? {
        delay: parseInt(d.autoplayDelay) || 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: d.pauseOnHover === 'true',
      } : false,

      pagination: d.pagination === 'true' ? {
        el: section.querySelector('.team-section__pagination'),
        clickable: true,
        type: d.paginationType || 'bullets',
      } : false,

      navigation: d.arrows === 'true' ? {
        prevEl: section.querySelector('.team-section__arrow--prev'),
        nextEl: section.querySelector('.team-section__arrow--next'),
      } : false,

      keyboard: { enabled: true },
      a11y: {
        prevSlideMessage: 'Previous team member',
        nextSlideMessage: 'Next team member',
      },
    };

    new Swiper(el, config);
  });
});
```

**Key feature:** The `slidesPerView` uses **fractional values** (e.g., `4`, `2.5`, `1.2`) to create the "peek" effect — showing a partial slice of the next card to hint that more content is available by swiping.

---

## 8. Editor (edit.js) Behavior

### 8.1 Team Section (Parent)

- Render the header row (heading + button) with inline RichText editing.
- Below the header, render child Team Member Card blocks in a **horizontal flex row** (not a carousel) for easy editing.
- Show a label badge on each card ("Member 1", "Member 2", etc.)
- Use `InnerBlocks` with `allowedBlocks` restricted to `['custom/team-member-card']`.
- Optionally add a "Preview Carousel" toolbar button that activates a Swiper preview in the editor.

### 8.2 Team Member Card (Child)

- **Photo area:** `MediaUpload` with placeholder. When image is set, show the photo with `FocalPointPicker` for crop control.
- **Name:** `RichText`, `tagName="h3"`, `placeholder="Member Name"`
- **Role:** `RichText`, `tagName="p"`, `placeholder="Job Title"`
- **Tags:** Repeater in InspectorControls — each tag is a TextControl + remove button + "Add Tag" button
- **Bio:** `RichText`, `tagName="p"`, `placeholder="Short bio..."`, with line-clamp preview
- **Social Links:** Repeater in InspectorControls — each link has SelectControl (platform) + URLInput

### 8.3 Inspector Panel Layout — Team Section

**PanelBody: "Header Layout"**

- `SelectControl` — Layout: split / stacked / left-aligned
- `SelectControl` — Heading Level (h1–h6)
- `TextControl` — Content Max Width

**PanelBody: "CTA Button"**

- `ToggleControl` — Show Button
- `URLInput` — Button URL *(when visible)*
- `ToggleControl` — Open in New Tab *(when visible)*
- `SelectControl` — Button Style: outline / solid / link *(when visible)*
- `ColorPicker` — Button Border/BG Color *(when visible)*
- `ColorPicker` — Button Text Color *(when visible)*
- `RangeControl` — Border Radius (0–50 px) *(when visible)*
- `TextControl` — Trailing Icon (Dashicon name) *(when visible)*

**PanelBody: "Carousel Settings"**

- `RangeControl` — Slides Per View Desktop (1–6)
- `RangeControl` — Slides Per View Tablet (1–4, step 0.5)
- `RangeControl` — Slides Per View Mobile (1–2, step 0.1)
- `RangeControl` — Space Between (0–60 px)
- `RangeControl` — Speed (100–2000 ms)
- `ToggleControl` — Loop
- `ToggleControl` — Free Mode
- `ToggleControl` — Grab Cursor

**PanelBody: "Autoplay"**

- `ToggleControl` — Enable Autoplay
- `RangeControl` — Delay (1000–10000 ms) *(when autoplay)*
- `ToggleControl` — Pause on Hover *(when autoplay)*

**PanelBody: "Pagination"**

- `ToggleControl` — Show Pagination
- `SelectControl` — Type: bullets / fraction / progressbar *(when visible)*
- `ColorPicker` — Dot Color *(when visible)*
- `ColorPicker` — Active Dot Color *(when visible)*

**PanelBody: "Navigation Arrows"**

- `ToggleControl` — Show Arrows
- `SelectControl` — Arrow Style: minimal / circle / square *(when visible)*

**PanelBody: "Section Style"**

- `ColorPicker` — Background Color
- `ColorPicker` — Heading Color
- `ColorPicker` — Description Color
- `RangeControl` — Padding Top (0–200 px)
- `RangeControl` — Padding Bottom (0–200 px)

### 8.4 Inspector Panel — Team Member Card

**PanelBody: "Photo"**

- `MediaUpload` — Select / Replace photo
- `FocalPointPicker` — Crop focus point
- `SelectControl` — Aspect Ratio: 1/1, 4/3, 3/4, 16/9
- `TextControl` — Alt Text

**PanelBody: "Skill Tags"**

- Repeater: TextControl per tag + remove button + "Add Tag" button

**PanelBody: "Bio"**

- `RangeControl` — Line Clamp (1–5)

**PanelBody: "Social Links"**

- `ToggleControl` — Show Social Links
- Repeater: SelectControl (platform) + URLInput per link + remove + "Add Link"

**PanelBody: "Card Style"**

- `RangeControl` — Card Border Radius (0–30 px)

---

## 9. File Structure

```
team-section/
├── team-section/
│   ├── block.json                    // Parent block metadata
│   ├── index.js                      // registerBlockType
│   ├── edit.js                       // Editor (header + InnerBlocks row)
│   ├── save.js                       // Frontend (header + swiper wrapper)
│   ├── style.css                     // Frontend + editor shared styles
│   ├── editor.css                    // Editor-only styles
│   └── view.js                       // Swiper initialization (frontend only)
│
├── team-member-card/
│   ├── block.json                    // Child block metadata (parent constraint)
│   ├── index.js                      // registerBlockType
│   ├── edit.js                       // Editor (photo + RichText fields)
│   ├── save.js                       // Frontend card HTML
│   ├── style.css                     // Card styles
│   └── editor.css                    // Editor-only card styles
│
├── icons.js                          // Shared SVG icons (social, arrows)
├── team-section.php                  // Plugin registration
└── package.json
```

---

## 10. PHP Registration

```php
<?php
/**
 * Plugin Name: Team Section Block
 * Description: An Our Team Gutenberg block with Swiper.js card carousel.
 * Version: 1.0.0
 * Text Domain: team-section
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function ts_register_blocks() {
    register_block_type( __DIR__ . '/team-section' );
    register_block_type( __DIR__ . '/team-member-card' );
}
add_action( 'init', 'ts_register_blocks' );

function ts_enqueue_swiper() {
    if ( has_block( 'custom/team-section' ) ) {
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
add_action( 'wp_enqueue_scripts', 'ts_enqueue_swiper' );
```

---

## 11. Social Link SVG Icons

Each social platform icon — viewBox `0 0 24 24`, stroke: `currentColor`, stroke-width: `2`, size: `18×18px`:

| Platform | Icon description |
|---|---|
| `linkedin` | LinkedIn "in" logo path |
| `twitter` | Twitter/X bird or X mark |
| `github` | GitHub octocat mark |
| `instagram` | Camera/rounded-square icon |
| `facebook` | Facebook "f" mark |
| `website` | Globe icon |
| `email` | Mail envelope icon |

Use a shared `icons.js` module that exports each as a React component.

---

## 12. Accessibility

- Carousel must be keyboard navigable (left/right arrow keys).
- Each card photo must have `alt` text.
- Arrow buttons: `aria-label="Previous team member"` / `"Next team member"`.
- Social link anchors: `aria-label="{Platform} profile of {name}"`.
- SVG icons: `aria-hidden="true"`.
- Pagination dots: handled by Swiper's built-in `a11y` module.
- `prefers-reduced-motion`: disable card hover transforms and photo zoom transitions.

---

## 13. Acceptance Criteria

1. Both blocks register correctly — Team Section in "Design", Team Member Card only inside Team Section.
2. Header layout modes (split, stacked, left-aligned) render correctly.
3. CTA button styles (outline, solid, link) render correctly with configurable colors and pill radius.
4. Team Member Cards display photo, name, role, tags, bio, and optional social links.
5. Tags are manageable via a repeater in the Inspector.
6. Bio text respects line-clamp setting.
7. Social links display correct platform icons with hover color change.
8. Swiper carousel initializes on frontend with correct `slidesPerView`, spacing, speed, and loop settings.
9. Fractional `slidesPerView` creates visible "peek" of the next card.
10. Responsive breakpoints switch slides-per-view at tablet and mobile correctly.
11. Pagination (bullets/fraction/progressbar) renders and functions correctly.
12. Optional navigation arrows render and function correctly.
13. Autoplay with pause-on-hover works when enabled.
14. Card hover effect (lift + photo zoom) works smoothly.
15. `prefers-reduced-motion` disables all animations.
16. Multiple instances on one page work independently.
17. No block validation errors on save/reload.
18. Works with WordPress 6.4+ and Swiper 11+.

---

## 14. Notes for AI Agent

- Use `@wordpress/scripts` for build toolchain.
- Swiper.js must be **conditionally enqueued** — only on pages with the team section block.
- `view.js` should be registered via `viewScript` in `block.json` or enqueued in PHP after swiper-js.
- In the editor, do NOT initialize Swiper — show cards in a horizontal flex row for editing. Carousel is frontend-only.
- The `slidesPerView` fractional values (e.g., `2.5`) are what create the "partial card peek" effect seen in the reference screenshot — this is a core UX feature.
- The active pagination dot is **elongated** (width: 24px, border-radius: 4px) while inactive dots are circles (8×8px) — this is a custom Swiper pagination style, not the default.
- `save.js` for the parent must wrap child `<InnerBlocks.Content />` inside `<div class="swiper"><div class="swiper-wrapper">...</div></div>`.
- `save.js` for the child card must add `className="swiper-slide"` to the card's outer wrapper.
- The golden/amber accent color (`#D4A843`) from the reference is used for: button border, active dot, eyebrow text, and social link hover. This creates a cohesive accent color thread.
- `FocalPointPicker` on the photo lets editors control which part of the face is visible when the photo is cropped — critical for headshots.

---

## 15. Nextora theme implementation addendum (do not use generic spec as-is)

This section maps §1–§14 to the **Nextora** block theme (`wp-content/themes/nextora/`). **Do not** ship a standalone plugin, CDN Swiper, or `@wordpress/scripts` bundle. **Do not implement** until this addendum is agreed — the sections above remain the functional/product spec.

### 15.1 Identity and registration

| Spec (§2–§4) | Nextora |
|--------------|---------|
| `custom/team-section` | **`nextora/team-section`** |
| `custom/team-member-card` | **`nextora/team-member-card`** *only if* two-block architecture is chosen (§15.2) |
| `textdomain` `team-section` | **`nextora`** |
| Category `design` | **`design`** or **`media`** (team showcase content; pairs with `nextora/call-to-action`, `nextora/arc-gallery-section`) |
| Plugin `team-section.php` + CDN Swiper | **None** — [`blocks/blocks.php`](../../blocks/blocks.php) |
| `index.js` + `edit.js` + `save.js` | **`index.tsx`**, **`edit.tsx`**, **`types.ts`**, **`save.tsx` → `null`**, **`render.php`** |

Scaffold (single-block path): `npm run gen -- --name=team-section --ns=nextora --category=design`

Optional block styles (band presets): `blocks/team-section/register-styles.php` required from `blocks/blocks.php` — same pattern as [`blocks/scrolling-promotion/register-styles.php`](../../blocks/scrolling-promotion/register-styles.php).

### 15.2 Architecture: recommended vs spec

| Approach | Description | Nextora recommendation |
|----------|-------------|------------------------|
| **A — Spec (§2)** | Parent `InnerBlocks` + child `nextora/team-member-card` | Possible but **heavier**: dynamic parent must output header from attrs + **`$content`** for slides (see [`blocks/call-to-action/render.php`](../../blocks/call-to-action/render.php) inner HTML handling). Child needs `save.tsx` with `swiper-slide` class. |
| **B — Single block** | One `nextora/team-section`, `members[]` attribute array | **Recommended v1** — matches [`nextora/counters`](../../blocks/counters/) and [`nextora/scrolling-promotion`](../../blocks/scrolling-promotion/): repeater in inspector, all markup from **`render.php`**, no InnerBlocks validation edge cases. |

If **B** is chosen, drop §2 two-block table from implementation; map §4 card fields into each `members[]` object (see §15.9). Editor shows a **horizontal card row** (static flex) for WYSIWYG; carousel is front-end only.

### 15.3 File structure (revised)

**Single-block (recommended):**

```text
blocks/team-section/
├── block.json
├── index.tsx
├── edit.tsx
├── types.ts
├── render.php
├── style.css
├── editor.css
├── view.ts              # Swiper init (bundled)
├── view.css             # Swiper CSS imports (if split like image-gallery-slide)
├── register-styles.php  # optional band presets
└── (generated) index.js, index.asset.php, view.js
```

**Two-block (if required):**

```text
blocks/team-section/          # parent — header attrs + swiper shell in render.php
blocks/team-member-card/      # child — save.tsx serializes slide markup
```

**Remove from generic spec:** nested `team-section/team-section/` folders, plugin root `package.json`, CDN enqueue (§10), standalone `icons.js` npm package.

### 15.4 Front-end output: `render.php`, not `save.js`

- Section header (eyebrow, heading, description, CTA) from **attributes**, escaped (`wp_kses_post` for RichText fields).
- Carousel: Swiper markup with **`swiper` / `swiper-wrapper` / `swiper-slide`** classes; each slide from `members[]` or parsed inner content.
- **`get_block_wrapper_attributes()`** on the section root with inline CSS variables — not only `wp-block-team-section`.
- **`wp_get_attachment_image( $photoId, … )`** when `photoId` is set; do not persist bare `photoUrl` as source of truth (keep URL as editor fallback only if needed).
- Color attrs: preset slug or hex → `var(--wp--preset--color--{slug})` via helper like `nextora_scrolling_promotion_resolve_color()` in [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php).

Pass Swiper options to JS as **`data-swiper-opts`** JSON on the carousel root (pattern: [`blocks/image-gallery-slide/render.php`](../../blocks/image-gallery-slide/render.php)), not dozens of `data-*` kebab attributes — easier to type and mirror in `view.ts`.

### 15.5 Class and CSS variable naming

| Spec (§5–§6) | Nextora |
|--------------|---------|
| `wp-block-team-section` | `wp-block-nextora-team-section` + BEM **`nextora-team-section`** |
| `team-section__*` | **`nextora-team-section__*`** |
| `team-member-card__*` | **`nextora-team-section__card__*`** (single block) or **`nextora-team-member-card__*`** (child block) |
| `--ts-*` | **`--nextora-team-*`** (e.g. `--nextora-team-bg`, `--nextora-team-heading-color`, `--nextora-team-btn-border`, `--nextora-team-dot-active`, `--nextora-team-card-radius`) |

Default accent: use **`var(--wp--preset--color--primary)`** when custom color attrs are empty — not hard-coded `#D4A843` in CSS (reference mock only).

Typography / spacing: prefer **`theme.json`** presets in `style.css` (`var(--wp--preset--font-size--*)`, `var(--wp--preset--spacing--*)`).

### 15.6 Swiper.js (`view.ts` + npm)

| Spec (§7, §10) | Nextora |
|----------------|---------|
| Global `Swiper` from CDN | **`import Swiper from 'swiper'`** + modules in **`view.ts`**, built to **`view.js`** via `build:blocks` |
| `view.js` + `DOMContentLoaded` only | **Idempotent `initRoot()`**; `DOMContentLoaded` + optional re-init event; guard **`data-nextora-team-swiper-inited="1"`** / **`data-nextora-team-swiper-init-pending="1"`** |
| Read config from `dataset` on section | Parse **`data-swiper-opts`** JSON from PHP |
| — | Root classes **`nextora-team-section--loading`** → **`--ready`** after init ([`docs/blocks.md`](../blocks.md) JS layout table) |
| Fractional `slidesPerView` | Keep §7 behavior; **`roundSpv()`** helper like image-gallery-slide to avoid float noise |
| `prefers-reduced-motion` | Disable autoplay; dampen card hover (§6.4); carousel may still init for keyboard access |

`block.json`: `"viewScript": "file:./view.js"`, `"style": "file:./style.css"` (and `"view.css"` if Swiper CSS is split like image-gallery-slide).

**Do not** `wp_enqueue_script` Swiper from a CDN in theme PHP.

### 15.7 Scroll animation (`docs/blocks.md`)

Team section is a **content band** (header + cards). Include:

| Item | Nextora |
|------|---------|
| Attribute | **`enableScrollAnimation`** — `boolean`, default `true` |
| Sidebar | Panel **Animation** → **Animate on scroll** (standard help from [`docs/blocks.md`](../blocks.md)) |
| PHP | `data-nextora-scroll-reveal="1"` on **header row** and/or carousel wrapper when enabled |
| JS | **`view.ts`** (or separate scroll chunk): GSAP + ScrollTrigger, `once: true`; skip when `prefers-reduced-motion: reduce` — pattern [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |

Card hover lift / photo zoom (§6.3) stays **CSS**; scroll reveal is separate enter-viewport motion. Swiper autoplay is independent — respect reduced motion (no autoplay).

### 15.8 Design system and inspector panels

**Prefer `supports.color` / `supports.spacing` on the section** before duplicating every §3.5 picker.

| Spec attrs (§3–§4) | Nextora approach |
|--------------------|------------------|
| `backgroundColor`, `headingColor`, … | **`supports.color`** on wrapper + sidebar **Colors** (`PanelColorSettings`) for scoped overrides (`eyebrowColor`, `buttonBorderColor`, `paginationActiveColor`, …) |
| `paddingTop` / `paddingBottom` | **`supports.spacing`** or RangeControls under **Layout** |
| `buttonBorderColor`, `buttonTextColor`, `buttonBorderRadius` | Align CTA with **arc gallery** / **header** CTA: `buttonStyle` `solid` \| `outline` \| `link`; preset-based defaults; reuse [`resources/css/modules/components/buttons.css`](../../resources/css/modules/components/buttons.css) where possible |
| `buttonIcon` Dashicon name (§3.3) | **Defer v1** or **inline SVG** keys (`arrow-right`) in PHP — **no Dashicons** on front (see arc gallery §17.10) |
| Per-card `cardBorderRadius`, colors | Section-level CSS vars first; per-card radius optional v2 |

**Panel titles (inspector)** — use Nextora-standard names:

| Panel | Contents |
|-------|----------|
| **Content** | Eyebrow / heading / description (RichText in canvas where possible) |
| **Header layout** | `headerLayout`, `headingLevel`, `contentMaxWidth` |
| **CTA button** | `showButton`, URL, target, style (mirror arc gallery / header) |
| **Carousel** | Slides per view, spacing, speed, loop, freeMode, grabCursor |
| **Autoplay** | Autoplay toggle, delay, pause on hover |
| **Pagination** | Show, type, colors |
| **Navigation** | Arrows toggle, arrow style |
| **Layout** | Padding, content max width |
| **Colors** | Section + button + pagination overrides |
| **Animation** | **Animate on scroll** + note about reduced motion |
| **Members** (single-block) | Repeater: photo, name, role, tags, bio, social links |

Member-only panels (§8.4) collapse into **Members** repeater rows when using §15.2 approach B.

### 15.9 `members[]` attribute shape (single-block recommended)

```json
{
  "members": {
    "type": "array",
    "default": []
  }
}
```

Each member object:

```json
{
  "id": "member-1",
  "photoId": 0,
  "photoAlt": "",
  "photoFocalPoint": { "x": 0.5, "y": 0.3 },
  "name": "",
  "role": "",
  "tags": ["Design", "Strategy"],
  "bio": "",
  "bioLineClamp": 3,
  "photoAspectRatio": "4/3",
  "showSocialLinks": false,
  "socialLinks": [{ "platform": "linkedin", "url": "" }]
}
```

- **`photoId`** required for front-end `wp_get_attachment_image`; focal point → `object-position` inline style.
- **`tags`** / **`socialLinks`**: arrays in attributes (inspector repeaters), not child blocks.
- Stable **`id`** string per row for React keys (generate on add).

### 15.10 Editor behavior

| Spec (§8) | Nextora |
|-----------|---------|
| Swiper in editor | **No** — static horizontal flex row of cards (§8.1); optional toolbar **Preview carousel** toggles `is-preview-swiper` + init Swiper in editor only (nice-to-have) |
| `edit.js` | **`edit.tsx`** — canvas RichText for header; member fields in inspector (and optional compact card preview in canvas) |
| `ServerSideRender` only | **Insufficient** for member layout — use React preview row or SSR + refresh; prefer live card row in canvas for v1 |
| `FocalPointPicker` | Keep for headshots — store `photoFocalPoint` on member |
| `MediaUpload` | `allowedTypes`: `image` + common MIMEs (JPEG, PNG, WebP, GIF, AVIF, SVG if allowed) — same list as [`blocks/scrolling-promotion/types.ts`](../../blocks/scrolling-promotion/types.ts) `SCROLLING_PROMOTION_ITEM_MEDIA_TYPES` |

### 15.11 Social icons

| Spec (§11) | Nextora |
|------------|---------|
| Shared `icons.js` React module | **Inline SVG** in `edit.tsx` / PHP render (small map per platform); or Lucide only if already bundled — theme front **`main.ts`** does not load icon packs for blocks; keep icons inside block bundle |
| `aria-label` | `"{Platform} profile of {name}"` per §12 |

### 15.12 Accessibility (additions)

Keep §12, plus:

- When **`enableScrollAnimation`** runs, ensure final state is visible without JS (no opacity:0 lock).
- Swiper **`keyboard`** + **`a11y`** module enabled in `view.ts` (§7).
- Pagination: elongated active bullet (§14) — custom CSS on `.swiper-pagination-bullet-active` under `.nextora-team-section`.

### 15.13 Extensibility hooks (plan)

- `nextora_team_section_members`
- `nextora_team_section_wrapper_classes`
- `nextora_team_section_wrapper_attributes`
- `nextora_team_section_swiper_options` (filter JSON passed to `data-swiper-opts`)

### 15.14 Build and quality

- `npm run build:blocks` after TS/CSS; never hand-edit `index.js`, `index.asset.php`, `view.js`
- `npm run typecheck` for `edit.tsx` / `view.ts` / `types.ts`
- `npm run lint:php` on `render.php` (`declare(strict_types=1);`, PHPStan level 8)
- Add entry to **Reference blocks** table in [`docs/blocks.md`](../blocks.md) when implemented

### 15.15 Closest reference blocks

| Need | Block |
|------|--------|
| Swiper init, loading states, `data-swiper-opts` | [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/) |
| Section header + CTA + description | [`blocks/arc-gallery-section/`](../../blocks/arc-gallery-section/) |
| Items repeater + PHP render | [`blocks/counters/`](../../blocks/counters/), [`blocks/scrolling-promotion/`](../../blocks/scrolling-promotion/) |
| Scroll reveal toggle | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts), [`blocks/arc-gallery-section/`](../../blocks/arc-gallery-section/) |
| InnerBlocks + `$content` (only if §15.2 A) | [`blocks/call-to-action/`](../../blocks/call-to-action/) |
| Color resolve helper | [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) |

### 15.16 Acceptance criteria additions (Nextora)

21. Block registered as **`nextora/team-section`** with **`textdomain` `nextora`**.
22. **`npm run lint:php`** and **`npm run typecheck`** pass.
23. Swiper loaded from **bundled `view.js`**, not CDN.
24. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and autoplay.
25. Photos use **`photoId`** + **`wp_get_attachment_image`** on the front.
26. Empty color attributes fall back to **`theme.json`** presets, not spec hex defaults.
27. Inspector panel titles match [`docs/blocks.md`](../blocks.md) (**Content**, **Layout**, **Colors**, **Animation**, etc.).
28. Multiple block instances on one page init **independently** (per-root Swiper + init guards).

### 15.17 What not to add (v1)

- Standalone plugin or `@wordpress/scripts` package
- CDN Swiper CSS/JS
- Dashicons on front-end CTA
- Hard-coded `#D4A843` / `#718096` in committed CSS (use presets + CSS vars)
- `save.js` static carousel HTML in post content
- Child block complexity unless product explicitly requires per-member blocks in the inserter