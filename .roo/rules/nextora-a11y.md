# Nextora — accessibility

> Always-on: WCAG 2.1 AA for all theme-owned UI (blocks, TS, CSS, templates). Covers blocks, front-end, and templates.

Full guide: [`docs/accessibility.md`](../../docs/accessibility.md). Target **WCAG 2.1 AA** for theme-owned UI (blocks, TS, CSS, templates). Plugin/content (Woo checkout, Elementor pages) is shared responsibility. All new theme UI must meet AA on first commit — no deferred a11y.

## Must-do on every a11y touch

- **i18n:** All visible and assistive copy uses text domain **`nextora`** — `esc_attr__()`, `__()`, or `window.nextoraModal` / `nextoraSpotlight` / `nextoraComments`. No hard-coded English in `aria-label`.
- **Icon-only controls:** `aria-label` required; decorative SVGs `aria-hidden="true"`.
- **Focus:** Never `outline: none` without a `:focus-visible` replacement. Shared styles: `buttons.css`, `nav-menus.css`, `modal.css`, `form-fields.css`.
- **Reduced motion:** Honor `prefers-reduced-motion: reduce` in CSS **and** TS (`prefersReducedMotion()` in scroll-animations helpers, or inline `matchMedia` in `view.ts`).
- **Semantics:** `<button type="button">` for actions; `<a href>` for navigation — not clickable `<div>`/`<span>` without full keyboard + ARIA.
- **Dialogs:** Reuse [`modal.ts`](../../resources/ts/lib/modal.ts) — `role="dialog"`, `aria-modal`, focus trap, Escape, focus restore ([`docs/modal.md`](../../docs/modal.md)).

## Block accessibility (`blocks/**`)

Standards: [`docs/accessibility.md`](../../docs/accessibility.md) · [`docs/blocks.md`](../../docs/blocks.md).

### Interactive markup (`render.php`)

- **Carousel / slider arrows:** `<button type="button">` + `aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>"` (match sibling blocks).
- **Decorative layers** (backgrounds, scrims, separators, duplicate marquee items): `aria-hidden="true"`.
- **Informative images:** non-empty `alt`; arc-style tiles may use `role="img"` + `aria-label`.
- **Marquee** (`scrolling-promotion`): wrapper `role="region"` + translatable `aria-label`; dup track items `aria-hidden="true"`.
- **Headings:** real `<h1>`–`<h6>` in PHP — not styled `<p>`/`<div>`.

### Motion blocks (`view.ts` + `style.css`)

- **`enableScrollAnimation`** in `block.json`; PHP emits `data-nextora-scroll-reveal="1"` when on.
- Skip GSAP / autoplay when `prefers-reduced-motion: reduce`; carousels may init but without aggressive motion.
- **`--loading` → `--ready`** CSS so layout is stable before JS (reflow / zoom).

### Reuse theme patterns

- **Modals / search:** `data-nextora-modal`, `data-nextora-modal-surface` — do not roll a one-off dialog ([`docs/modal.md`](../../docs/modal.md)).
- **Reference blocks:** `header`, `spotlight-search`, `testimonial-carousel`, `scrolling-promotion`, `arc-gallery-section`.

After `render.php` edits: **`npm run lint:php:all`**. After `view.ts` / block CSS: **`npm run build:blocks`** (or **`npm run build`**).

```text
❌ <div class="arrow" onclick="…">
✅ <button type="button" class="…__arrow--prev" aria-label="…">
```

## Front-end accessibility (`resources/`)

Details: [`docs/accessibility.md`](../../docs/accessibility.md), [`docs/modal.md`](../../docs/modal.md), [`docs/spotlight-search.md`](../../docs/spotlight-search.md).

### TypeScript (`resources/ts/`)

- **Modals** (`lib/modal.ts`): focus trap, Escape closes topmost, restore focus to trigger; emit `nextora:modalopen` / `nextora:modalclose`. Do not bypass when adding new overlays.
- **Header nav** (`header-nav.ts`): mobile portal `role="dialog"`, `aria-modal`, `aria-expanded` on toggle, Escape + focus to first link / back to hamburger.
- **Spotlight** (`lib/spotlight-search.ts`): combobox ARIA + `[data-spotlight-status]` live region; listen to modal events for focus/clear.
- **Comments** (`lib/comment-tiptap.ts`): toolbar `role="toolbar"`; button `aria-label` from `window.nextoraComments`; keep sync `#comment` for POST.
- **Scroll animations** (`lib/scroll-animations/`): call `prefersReducedMotion()` — no tweens when reduce is on.
- **Block `view.ts`:** same reduced-motion guard; update dynamic ARIA state (`aria-expanded`, `aria-selected`) on interaction.

### CSS (`resources/css/modules/`)

- Use **`:focus-visible`**, not bare `:focus`, for new interactive styles.
- Add **`@media (prefers-reduced-motion: reduce)`** when introducing animation, transition, or marquee motion.
- New component focus rings: extend existing modules (`buttons.css`, `nav-menus.css`) before one-off rules.

Compile with **`npm run build`** — do not edit `assets/css/app.css` or `assets/js/main.js` directly.

```text
❌ .my-btn:focus { outline: none; }
✅ .my-btn:focus-visible { outline: 2px solid …; outline-offset: 2px; }
```

## Template accessibility (`templates/`, `parts/`)

Guide: [`docs/accessibility.md`](../../docs/accessibility.md) § Page structure.

### Landmarks

- **Header:** template part `area: header` (`parts/header.html`) — wraps `nextora/header`.
- **Main:** one `<main>` per template via `tagName: main` (classes `nextora-main`, `nextora-content-shell`).
- **Footer:** template part `area: footer`; footer `core/navigation` should set **`ariaLabel`** (e.g. `"Footer"`).

Do not replace landmarks with unlabeled `<div>`-only shells.

### Headings

- **Single:** `post-title` at level **1** in `templates/single.html`.
- **Archives / index:** list titles below `h1` — avoid stacking multiple `h1` blocks on one view.
- Site Editor content: authors control hierarchy; do not add extra `h1` in template parts without intent.

### Skip link (site responsibility)

Theme does **not** ship a skip link by default. When adding one, place it first in `parts/header.html`, target main (`href="#content"` + `id` on `<main>`), visible on `:focus`.

```text
❌ wp:group wrapper only — no header/main/footer tagName
✅ wp:template-part tagName header + wp:group tagName main + footer part
```

---

```text
❌ aria-label="Close" hard-coded in render.php
✅ aria-label="<?php echo esc_attr__( 'Close', 'nextora' ); ?>"
```
