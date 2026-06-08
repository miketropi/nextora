# AI Agent Briefing — Nextora Theme

**Root URL:** `https://github.com/miketropi/nextora` — prepend to any relative path in this document to fetch that file from GitHub.

**Purpose:** This document is the single-source briefing for third-party AI agents (OpenAI, Claude, etc.) to generate **demo templates, sample patterns, and block markup** that are consistent with the Nextora theme's design system, platform conventions, and tooling.

**Target platform:** WordPress 6.4+ block theme (FSE) — HTML templates in `templates/`, template parts in `parts/`, global styles in `theme.json` v3.

---

## 1. Platform Fundamentals

### 1.1 What you are generating

You generate **WordPress block markup** — HTML interspersed with `<!-- wp:block-name { ... } -->` comments. This markup lives in:

| File type | Path | Example |
|-----------|------|---------|
| Templates | `templates/*.html` | `templates/front-page.html` |
| Template parts | `parts/*.html` | `parts/header.html`, `parts/footer.html` |
| Block patterns | In-editor registration | PHP `register_block_pattern()` |

### 1.2 Block markup format

```html
<!-- wp:group {"tagName":"main","className":"nextora-main nextora-content-shell","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}},"layout":{"type":"constrained"}} -->
<main class="wp-block-group nextora-main nextora-content-shell" style="padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)">
    <!-- inner blocks here -->
</main>
<!-- /wp:group -->
```

Key rules:
- JSON attributes are single-quoted in the HTML comment, double-quoted inside JSON.
- Style property values use the syntax `var:preset|type|slug` (e.g., `var:preset|spacing|30`, `var:preset|color|base`).
- The rendered HTML includes the actual CSS variable (`var(--wp--preset--spacing--30)`).
- Both the comment and the rendered markup must match.

---

## 2. Design Tokens

### 2.1 Color Palette

Every color in templates must reference these presets — **never hard-code hex values**.

| Slug | Value | Tailwind class | Role |
|------|-------|---------------|------|
| `base` | `#ffffff` | `bg-base`, `text-base` | Primary background, white |
| `contrast` | `#0a0a0a` | `bg-contrast`, `text-contrast` | Body text, dark backgrounds |
| `primary` | `#000000` | `bg-primary`, `text-primary` | Links, button backgrounds |
| `secondary` | `#525252` | `bg-secondary`, `text-secondary` | Muted text, borders, separators |
| `surface` | `#f4f4f4` | `bg-surface`, `text-surface` | Light gray backgrounds, cards |

**CSS variable syntax:** `var(--wp--preset--color--{slug})`

**JSON preset syntax:** `var:preset|color|{slug}`

**Usage in templates:**
```html
<!-- wp:group {"backgroundColor":"surface","textColor":"contrast","style":{...}} -->
<div class="wp-block-group has-contrast-color has-surface-background-color has-text-color has-background">
```

**Usage in inline styles:**
```json
"color": {"text": "var:preset|color|base"},
"backgroundColor": "contrast"
```

### 2.2 Font Families

| Slug | CSS Value | Use |
|------|-----------|-----|
| `sans` | `Arial, Helvetica, sans-serif` | Default body/heading font |
| `mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Code blocks |
| `hanken-grotesk` | `"Hanken Grotesk", sans-serif` | Custom display font (self-hosted woff2) |
| `josefin-sans` | `"Josefin Sans", sans-serif` | Custom display font (self-hosted woff2) |

**CSS variable:** `var(--wp--preset--font-family--{slug})`

### 2.3 Font Sizes

| Slug | Clamp range | Approximate size |
|------|------------|------------------|
| `small` | `0.8rem`–`0.95rem` | ~13–15px |
| `base` | `0.9375rem`–`1.0625rem` | ~15–17px |
| `medium` | `1rem`–`1.2rem` | ~16–19px |
| `large` | `1.3125rem`–`1.6875rem` | ~21–27px |
| `x-large` | `1.5rem`–`2.125rem` | ~24–34px |
| `xx-large` | `1.75rem`–`2.625rem` | ~28–42px |

**CSS variable:** `var(--wp--preset--font-size--{slug})`

**JSON preset:** `"fontSize":"x-large"` or `"style":{"typography":{"fontSize":"var:preset|font-size|x-large"}}`

### 2.4 Spacing Scale

| Slug | Clamp range | Approximate |
|------|------------|-------------|
| `30` | `1.5rem`–`2rem` | ~24–32px (inline horizontal padding) |
| `40` | `1.8rem`–`3rem` | ~29–48px (section padding, margins) |
| `50` | `2.5rem`–`4.5rem` | ~40–72px (large section padding) |
| `60` | `3.75rem`–`7rem` | ~60–112px (hero padding) |
| `70` | `5rem`–`8rem` | ~80–128px |
| `80` | `7rem`–`11rem` | ~112–176px |

**Default inline padding:** `var:preset|spacing|30` (horizontal), `var:preset|spacing|50` (vertical section).

**CSS variable:** `var(--wp--preset--spacing--{slug})`

### 2.5 Layout Widths

| Token | Value | CSS Class |
|-------|-------|-----------|
| Content width | `720px` | `layout":{"type":"constrained"}` |
| Wide width | `1200px` | `"align":"wide"` + `.nextora-content-shell--wide-size` |
| Full width | 100% | `"align":"full"` |

---

## 3. Template Structure (HTML Conventions)

### 3.1 Every template must have

```html
<!-- 1. Header (template part) -->
<!-- wp:template-part {"slug":"header","theme":"nextora","tagName":"header","area":"header"} /-->

<!-- 2. Main content area with landmarks -->
<!-- wp:group {"tagName":"main","className":"nextora-main nextora-content-shell",...} -->
<main class="wp-block-group nextora-main nextora-content-shell" ...>
    <!-- page content -->
</main>
<!-- /wp:group -->

<!-- 3. Footer (template part) -->
<!-- wp:template-part {"slug":"footer","theme":"nextora","tagName":"footer","area":"footer"} /-->
```

### 3.2 Landmarks

| Element | How |
|---------|-----|
| Header | `<!-- wp:template-part ... {"tagName":"header","area":"header"} /-->` |
| Main | `<main>` via `"tagName":"main"` with classes `nextora-main nextora-content-shell` |
| Footer | `<!-- wp:template-part ... {"tagName":"footer","area":"footer"} /-->` |
| Nav | `<nav>` via `"tagName":"nav"` with `"ariaLabel":"..."` |

### 3.3 Heading hierarchy

- **One `<h1>` per page** (typically `post-title` in single/page templates).
- For sections within a page, start at `<h2>`.
- Use `core/heading` block with `"level":2` etc., not styled `<p>` or `<div>`.

### 3.4 Content shell classes

```
.nextora-main             — applied to <main> tag
.nextora-content-shell     — constrains content to layout width
.nextora-content-shell--wide-size  — allows wide-aligned children
.nextora-links-style-decoration     — enables underline styles on links within
.wp-site-blocks           — WordPress core class (on outer group)
```

### 3.5 Typical section wrapper pattern

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)">
    <!-- section content -->
</div>
<!-- /wp:group -->
```

---

## 4. Scroll Animations

### 4.1 Utility animation classes

Add these classes to blocks for GSAP-powered scroll reveals (no extra JS needed — `assets/js/main.js` handles them):

| Class | Effect |
|-------|--------|
| `animation-fade-in-up` | Fade in + translateY(30px→0) |
| `animation-fade-in-right` | Fade in + translateX(-30px→0) |
| `animation-fade-in-left` | Fade in + translateX(30px→0) |
| `animation-zoom-in` | Scale 0.95→1 + fade in |
| `animation-zoom-out` | Scale 1.05→1 + fade in |
| `animation-inner-fade` | Fades direct children in (staggered) |
| `animation-fade-list-grid` | Fades `<li>` children of `<ul>` in (staggered) |

**Usage:**
```html
<!-- wp:heading {"className":"animation-fade-in-up","level":2} -->
<h2 class="wp-block-heading animation-fade-in-up">Section Title</h2>
<!-- /wp:heading -->
```

Elements start with `opacity: 0` (set in CSS) and are revealed by GSAP ScrollTrigger. The `prefers-reduced-motion: reduce` media query forces `opacity: 1` to keep content visible.

### 4.2 Block-level scroll animation attribute

Theme blocks use `enableScrollAnimation` (boolean) in `block.json`. When enabled, PHP adds `data-nextora-scroll-reveal="1"` to the block root. The block's `view.ts` handles the GSAP + ScrollTrigger logic.

---

## 5. CSS Conventions

### 5.1 Tailwind v4 with WordPress

- Tailwind **Preflight is disabled** (to avoid breaking WordPress block editor chrome).
- Utility classes like `text-contrast`, `bg-base`, `rounded-md` are available.
- New component CSS goes in `resources/css/modules/` with `@layer` directives.

### 5.2 @theme tokens (from app.css)

In addition to WordPress presets, these Nextora-specific tokens are available:

```
--nextora-gutter              — horizontal gutter
--nextora-main-pad-y          — vertical section padding
--nextora-hero-gap            — hero section gap
--nextora-nav-*               — navigation colors (header/footer/panels)
--nextora-offcanvas-*         — mobile drawer motion (dur, ease)
--nextora-pagination-*        — pagination colors
--nextora-comments-*          — comment list spacing
```

### 5.3 CSS module load order

```
base → components → prose → overrides
```

Do not add random CSS in templates. Use existing utility classes or block-level styles.

---

## 6. JavaScript Libraries

### 6.1 Available on the front end

| Library | Global | Version | Notes |
|---------|--------|---------|-------|
| GSAP + ScrollTrigger | `gsap`, `ScrollTrigger` | 3.x | Scroll animations, mobile nav drawer |
| Swiper | `Swiper` | 11.x | Carousels (`image-gallery-slide`, `testimonial-carousel`) |
| Tiptap | N/A (bundled in `main.ts`) | 2.x | Rich-text comment editor |
| Lucide | `lucide` | Latest | Icons (used in comment toolbar) |

### 6.2 window.* globals (localized by PHP)

| Global | Contents |
|--------|----------|
| `window.nextoraNav` | Mobile nav labels (`openLabel`, `closeLabel`, `drawerTitle`) |
| `window.nextoraHeaderSticky` | Sticky header labels |
| `window.nextoraModal` | Modal layer strings (`closeLabel`) |
| `window.nextoraSpotlight` | Spotlight search strings, REST endpoint |
| `window.nextoraComments` | Comment editor labels, KSES allowed tags |

### 6.3 Block `view.js` / `view.ts`

- Block view scripts get `gsap` and `ScrollTrigger` from CDN (already enqueued).
- `Swiper` is available globally.
- Block init must be idempotent — use `data-nextora-{slug}-inited="1"` guards.
- Loading pattern: root class `nextora-{slug}--loading` → `--ready` after init.

---

## 7. Shared Component Patterns

When generating templates that include common UI elements, follow these patterns exactly:

### 7.1 Buttons (theme default)

```html
<!-- wp:button {"backgroundColor":"contrast","textColor":"base","className":"is-style-fill","style":{"spacing":{"padding":{"left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-base-color has-contrast-background-color has-text-color has-background has-link-color wp-element-button" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)">Button Text</a></div>
<!-- /wp:button -->
```

**Button groups:**
```html
<!-- wp:buttons {"style":{"spacing":{"blockGap":{"top":"0","left":"var:preset|spacing|30"}}},"layout":{"type":"flex","justifyContent":"center","orientation":"horizontal","flexWrap":"wrap"}} -->
<div class="wp-block-buttons">
    <!-- wp:button ... /-->
    <!-- wp:button ... /-->
</div>
<!-- /wp:buttons -->
```

### 7.2 CTA / "View All" action buttons

Shared across Team Section, Hero Section, Call to Action blocks:
- Font: `var(--wp--preset--font-size--small)` (~14px)
- Weight: `600`
- Border: `1.5px` on outline variants
- Padding: `0.625rem 1.75rem`
- Radius: `50px` (pill)
- Hover: `opacity: 0.9`

### 7.3 Carousel arrows

```html
<button type="button" class="{slug}__arrow--prev" aria-label="Previous slide">
    <svg><!-- left chevron --></svg>
</button>
<button type="button" class="{slug}__arrow--next" aria-label="Next slide">
    <svg><!-- right chevron --></svg>
</button>
```

- Must use `<button type="button">` + `aria-label` (i18n via `esc_attr__( 'Previous slide', 'nextora' )` in PHP).
- Decorative SVGs: `aria-hidden="true"`.

### 7.4 Scroll reveal pattern (for view.ts blocks)

```typescript
// In block view.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initScrollReveal(root: HTMLElement): void {
    if (!root.hasAttribute('data-nextora-scroll-reveal')) return;
    if (root.hasAttribute('data-nextora-{slug}-scroll-init')) return;
    if (prefersReducedMotion()) return;

    root.setAttribute('data-nextora-{slug}-scroll-init', '1');
    // GSAP ScrollTrigger animation here
}
```

---

## 8. Accessibility (Non-Negotiable)

### 8.1 Every template/part must respect

| Rule | Detail |
|------|--------|
| **Landmarks** | Use `"tagName":"header"`, `"tagName":"main"`, `"tagName":"footer"` — not unlabeled `<div>` |
| **Headings** | One `h1` per page; use real heading blocks (`core/heading` with `"level"`) |
| **i18n** | All `aria-label` values use `<?php echo esc_attr__( 'Text', 'nextora' ); ?>` in PHP render; in JS use `window.nextoraModal.closeLabel` etc. |
| **Focus** | Never use `outline: none` without a `:focus-visible` replacement |
| **Reduced motion** | Every animation must check `prefers-reduced-motion: reduce` |
| **Semantics** | `<button type="button">` for actions; `<a href>` for navigation; no clickable `<div>`/`<span>` |
| **Images** | Non-empty `alt` attributes (set via block attributes or media library) |
| **Decorative elements** | `aria-hidden="true"` on backgrounds, separators, duplicate marquee items |

### 8.2 Required ARIA on common elements

```html
<!-- Navigation -->
<nav aria-label="Main navigation">...</nav>

<!-- Icon-only buttons -->
<button type="button" aria-label="Open menu">
    <svg aria-hidden="true">...</svg>
</button>

<!-- Carousel region -->
<section role="region" aria-label="Testimonials">...</section>

<!-- Modal dialog -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" data-nextora-modal>...</div>
```

---

## 9. Naming Conventions

| Kind | Convention | Example |
|------|-----------|---------|
| Text domain / i18n | `nextora` | `__('…', 'nextora')` |
| PHP functions | `nextora_*` | `nextora_get_hero()` |
| PHP namespace | `Nextora\` | `Nextora\Blocks\Hero` |
| Theme blocks | `nextora/{slug}` | `nextora/hero-section` |
| BEM classes | `nextora-{block}__{element}` | `nextora-header__logo` |
| Data attributes | `data-nextora-{name}` | `data-nextora-scroll-reveal` |
| CSS variables | `--nextora-{name}` | `--nextora-nav-header-link` |
| Block init guards | `data-nextora-{slug}-inited` | `data-nextora-image-gallery-inited` |
| PHP constants | `NEXTORA_*` | `NEXTORA_VERSION` |

---

## 10. Available Theme Blocks

These theme blocks can be used in templates. Use the exact names and attribute keys from their `block.json`.

| Block name | Purpose | Key attributes |
|-----------|---------|---------------|
| `nextora/header` | Site header | `logoType`, `menuId`, `stickyHeader`, `showCtaButton`, `headerLayout` |
| `nextora/spotlight-search` | Live search modal | Trigger placement |
| `nextora/hero-section` | Hero band | Background image/video, overlay, heading, buttons |
| `nextora/call-to-action` | CTA band | Background, text, buttons, `enableScrollAnimation` |
| `nextora/post-grid` | Post grid + pagination | Query settings, columns, `enableScrollAnimation` |
| `nextora/image-gallery-grid` | Image grid + scroll reveal | Images array, layout preset, `enableScrollAnimation` |
| `nextora/image-gallery-slide` | Swiper carousel | Images array, slides per view, navigation |
| `nextora/scrolling-promotion` | CSS marquee | Items (text or images), speed, separator |
| `nextora/testimonial-carousel` | Fade testimonial Swiper | `testimonials[]`, ratings, trust avatars |
| `nextora/counters` | Animated stat counters | `items[]` with number, prefix, suffix, label |
| `nextora/team-section` | Team member carousel | `members[]`, layout style |
| `nextora/blog-list-carousel` | Blog post carousel | Query, heading, layout |
| `nextora/instagram-feed` | Instagram tiles + lightbox | `posts[]`, Swiper, modal |
| `nextora/page-title` | Dynamic page heading | Background, parallax, overlay, breadcrumbs |
| `nextora/arc-gallery-section` | Arc gallery layout | `images[]`, arc math |
| `nextora/contact-form` | Contact form | REST submission, Tiptap message field |
| `nextora/google-maps` | Map embed | Iframe or JS API, markers |

---

## 11. Template Examples

### 11.1 Minimal section with heading + paragraph + button

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)">

<!-- wp:heading {"className":"animation-fade-in-up","textAlign":"center","level":2} -->
<h2 class="wp-block-heading has-text-align-center animation-fade-in-up">Section Title</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"animation-fade-in-up","align":"center"} -->
<p class="has-text-align-center animation-fade-in-up">Supporting text that explains the section purpose.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"className":"animation-fade-in-up","style":{"spacing":{"blockGap":{"top":"0","left":"var:preset|spacing|30"}}},"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons animation-fade-in-up">
<!-- wp:button {"backgroundColor":"contrast","textColor":"base","style":{"spacing":{"padding":{"left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-base-color has-contrast-background-color has-text-color has-background has-link-color wp-element-button" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)">Get Started</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->

</div>
<!-- /wp:group -->
```

### 11.2 Two-column layout with image + text

```html
<!-- wp:columns {"verticalAlignment":"center","align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|40","left":"var:preset|spacing|50"}}}} -->
<div class="wp-block-columns alignwide are-vertically-aligned-center">

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center">
<!-- wp:image {"className":"animation-zoom-in","sizeSlug":"full","style":{"border":{"radius":{"topLeft":"16px","topRight":"16px","bottomLeft":"16px","bottomRight":"16px"}}}} -->
<figure class="wp-block-image size-full has-custom-border animation-zoom-in"><img src="..." alt="Descriptive alt text" style="border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-left-radius:16px;border-bottom-right-radius:16px"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"1rem"}}} -->
<div class="wp-block-column is-vertically-aligned-center">
<!-- wp:heading {"className":"animation-fade-in-up","level":2} -->
<h2 class="wp-block-heading animation-fade-in-up">Heading Text</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"animation-fade-in-up"} -->
<p class="animation-fade-in-up">Body copy describing the feature or service.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"className":"animation-fade-in-up"} -->
<div class="wp-block-buttons animation-fade-in-up">
<!-- wp:button {"backgroundColor":"contrast","textColor":"base"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-base-color has-contrast-background-color has-text-color has-background has-link-color wp-element-button">Learn More</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:column -->

</div>
<!-- /wp:columns -->
```

### 11.3 Full template skeleton (page template)

```html
<!-- wp:template-part {"slug":"header","theme":"nextora","tagName":"header","area":"header"} /-->

<!-- wp:nextora/page-title {"backgroundType":"color","backgroundColor":"surface","textColor":"contrast","enableParallax":false,"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} /-->

<!-- wp:group {"tagName":"main","className":"nextora-main nextora-content-shell","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<main class="wp-block-group nextora-main nextora-content-shell" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)">

<!-- wp:post-featured-image {"align":"wide","className":"animation-fade-in-up","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|40"}},"border":{"radius":{"topLeft":"10px","topRight":"10px","bottomLeft":"10px","bottomRight":"10px"}}}} /-->

<!-- wp:post-content {"lock":{"move":false,"remove":true},"className":"animation-inner-fade","layout":{"type":"constrained"}} /-->

</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","theme":"nextora","tagName":"footer","area":"footer"} /-->
```

### 11.4 Section with counters

```html
<!-- wp:nextora/counters {"items":[{"id":"1","number":10,"prefix":"","suffix":"M+","label":"Trees protected"},{"id":"2","number":25,"prefix":"","suffix":"K+","label":"People supported"},{"id":"3","number":98,"prefix":"","suffix":"%","label":"Direct program funding"}],"className":"animation-fade-in-up","style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"0","right":"0"},"blockGap":"0"}}} /-->
```

### 11.5 Footer template part (with contrast background)

```html
<!-- wp:group {"align":"full","className":"nextora-links-style-decoration","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}},"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"backgroundColor":"contrast","textColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull nextora-links-style-decoration has-base-color has-contrast-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--30)">
    <!-- columns with nav links, social icons, etc. -->
</div>
<!-- /wp:group -->
```

---

## 12. Rules for Generated Output

### 12.1 Do

- Use `var:preset|color|{slug}` and `var:preset|spacing|{slug}` for all colors and spacing.
- Add `animation-fade-in-up` to headings, paragraphs, images for scroll reveals.
- Wrap sections in `wp:group` with constrained layout and standard padding.
- Use `"align":"wide"` or `"align":"full"` on inner blocks that should break out.
- Set `"tagName":"main"` on the primary content group.
- Add `className":"nextora-content-shell` to main content wrappers.
- Include `"layout":{"type":"constrained"}` on section wrappers.
- Set margin top/bottom to `"0"` on section groups to avoid double gaps.

### 12.2 Don't

- Don't hard-code hex colors (`#ffffff`, `#0a0a0a`) — use presets.
- Don't use `px` values for spacing — use presets.
- Don't add `<style>` blocks or raw CSS in templates.
- Don't create `<div>`-only structures without `tagName` for landmarks.
- Don't stack multiple `h1` elements on one template.
- Don't set `"defaultSpacingSizes":false` in inline styles (it's a theme-level setting).
- Don't use `outline: none` on interactive elements.
- Don't forget `alt` text on images.
- Don't generate PHP files unless explicitly asked — templates are HTML with block comments.

### 12.3 i18n

When generating PHP render code (not HTML templates):
- All user-facing strings: `__( 'Text', 'nextora' )`
- All `aria-label` values: `esc_attr__( 'Text', 'nextora' )`
- JS localized strings: use `window.nextoraModal`, `window.nextoraSpotlight`, etc.

---

## 13. Quick Reference Card

```
COLORS          font/text: contrast, base
                links: primary → secondary (hover)
                bg: base, surface
                separators: secondary
                footers: contrast bg + base text

FONTS           body: sans (Arial)
                headings: sans, weight 600–700
                code: mono

SPACING         inline pad: 30 (~24-32px)
                section pad: 50 (~40-72px)
                gap: 1rem typical

LAYOUT          content: 720px | wide: 1200px
                .nextora-content-shell constrains
                alignwide/alignfull breaks out

ANIMATION       animation-fade-in-up (most common)
                animation-fade-in-right/left
                animation-zoom-in
                animation-inner-fade (stagger children)
                data-nextora-scroll-reveal="1" (block attribute)

LANDMARKS       header (template part, tagName header)
                main (group, tagName main)
                footer (template part, tagName footer)

BUTTONS         bg: contrast, text: base
                padding: 1.25em × 0.65em
                radius: 0.375rem
                weight: 600
```

---

## 14. Related Docs

| Doc | URL | When to read |
|-----|-----|-------------|
| `AGENTS.md` | [AGENTS.md](https://github.com/miketropi/nextora/blob/main/AGENTS.md) | Full theme overview, build commands, file conventions |
| `README.md` | [README.md](https://github.com/miketropi/nextora/blob/main/README.md) | Architecture diagrams, scripts reference, constants |
| `theme.json` | [theme.json](https://github.com/miketropi/nextora/blob/main/theme.json) | Global colors, fonts, spacing, template parts, block styles |
| `docs/blocks.md` | [docs/blocks.md](https://github.com/miketropi/nextora/blob/main/docs/blocks.md) | Block development standards, scroll animation, shared components |
| `docs/accessibility.md` | [docs/accessibility.md](https://github.com/miketropi/nextora/blob/main/docs/accessibility.md) | WCAG 2.1 AA checklist, ARIA patterns |
| `docs/modal.md` | [docs/modal.md](https://github.com/miketropi/nextora/blob/main/docs/modal.md) | Modal layer API (`data-nextora-modal`) |
| `docs/spotlight-search.md` | [docs/spotlight-search.md](https://github.com/miketropi/nextora/blob/main/docs/spotlight-search.md) | Spotlight search REST + ARIA |
| `docs/scroll-animations.md` | [docs/scroll-animations.md](https://github.com/miketropi/nextora/blob/main/docs/scroll-animations.md) | Class-driven GSAP reveals |
| `docs/fonts-preset-doc.md` | [docs/fonts-preset-doc.md](https://github.com/miketropi/nextora/blob/main/docs/fonts-preset-doc.md) | How to add self-hosted fonts via `theme.json` |
| `.cursor/rules/` | [.cursor/rules/](https://github.com/miketropi/nextora/tree/main/.cursor/rules) | Agent rules for blocks, PHP, front-end, a11y, theme.json |
| `resources/css/app.css` | [resources/css/app.css](https://github.com/miketropi/nextora/blob/main/resources/css/app.css) | Tailwind `@theme` tokens, CSS import order |
| `resources/ts/main.ts` | [resources/ts/main.ts](https://github.com/miketropi/nextora/blob/main/resources/ts/main.ts) | Front-end boot order |
| `templates/` | [templates/](https://github.com/miketropi/nextora/tree/main/templates) | Block template HTML files |
| `parts/` | [parts/](https://github.com/miketropi/nextora/tree/main/parts) | Template part HTML files |
| `blocks/` | [blocks/](https://github.com/miketropi/nextora/tree/main/blocks) | All theme blocks with `block.json` + `render.php` |
