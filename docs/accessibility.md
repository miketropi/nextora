# Accessibility (Nextora)

Nextora targets **WCAG 2.1 Level AA** for theme-owned UI: block templates, theme blocks, front-end TypeScript, and shared CSS. WordPress core blocks, WooCommerce, Elementor, GiftFlow, and site-authored content remain shared responsibility — this doc maps what the theme guarantees and how to extend it without breaking patterns.

For feature-level contracts, see [modal.md](./modal.md), [spotlight-search.md](./spotlight-search.md), [comments-tiptap.md](./comments-tiptap.md), [scroll-animations.md](./scroll-animations.md), and [blocks.md](./blocks.md). Theme overview: [AGENTS.md](../AGENTS.md).

---

## Source map

| Area | Edit (source) | Accessibility notes |
|------|----------------|---------------------|
| FSE templates / parts | `templates/*.html`, `parts/*.html` | Landmarks (`header`, `main`, `footer`); heading levels in block markup |
| Global tokens / contrast | `theme.json`, `resources/css/app.css` `@theme` | Palette presets; mirror tokens for Tailwind utilities |
| Shared focus / buttons | `resources/css/modules/components/buttons.css` | `:focus-visible` rings on buttons, links, form controls |
| Navigation | `blocks/header/render.php`, `inc/navigation/class-nextora-header-block-walker.php`, `resources/ts/header-nav.ts`, `resources/css/modules/base/nav-menus.css` | Mobile drawer portal, submenu toggles, focus styles |
| Modals | `resources/ts/lib/modal.ts`, `resources/css/modules/components/modal.css` | Focus trap, Escape, restore focus, reduced motion |
| Spotlight search | `inc/features/spotlight-search/`, `resources/ts/lib/spotlight-search.ts` | Combobox hints, live region, keyboard results |
| Comments | `inc/comments/comments.php`, `resources/ts/lib/comment-tiptap.ts` | Label + toolbar `aria-label`; sync textarea hidden from tree |
| Scroll reveals | `resources/ts/lib/scroll-animations/`, `resources/css/modules/components/scroll-animations.css` | Skip tweens when `prefers-reduced-motion: reduce` |
| Theme blocks | `blocks/<slug>/render.php`, `view.ts`, `style.css` | Per-block ARIA, carousel controls, `enableScrollAnimation` |
| i18n strings | PHP `__()` / `esc_attr_e()` with text domain **`nextora`**; `wp_localize_script` in `inc/assets/assets.php` | All visible and `aria-*` copy must be translatable |
| Built output | `assets/css/app.css`, `assets/js/main.js` | Regenerate via **`npm run build`** — do not patch by hand |

---

## Conventions

### Naming and i18n

- **Text domain:** `nextora` (`Nextora\Core\ThemeConfig::SLUG`).
- **PHP hooks / functions:** prefix `nextora_`; filters for header nav labels include `nextora_header_block_nav_aria_label`, `nextora_header_block_submenu_toggle_label`.
- **Data attributes:** `data-nextora-*` for JS contracts (modal, nav portal, scroll reveal, block init guards). Prefer attributes over class-only hooks when filters may rename BEM classes.
- **BEM:** block-specific classes use `nextora-{block-slug}__*`; shared shell uses `nextora-modal__*`, `nextora-spotlight__*`, etc.
- **User-facing and assistive strings:** always wrapped in `__()`, `_e()`, `esc_attr__()`, or localized onto `window.nextoraModal`, `window.nextoraSpotlight`, `window.nextoraComments`.

### Visually hidden text

| Class | Origin | Use |
|-------|--------|-----|
| `sr-only` | Tailwind utility (in compiled `app.css`) | Off-screen headings, spotlight field label |
| `screen-reader-text` | WordPress core pattern | Simple header search form (`blocks/header/render.php`) |

Icon-only controls **must** expose a name via `aria-label` (and usually `title` for tooltips). Decorative SVGs: `aria-hidden="true"`; star ratings and similar: `aria-label` on the container.

### Focus indicators

Do not remove focus outlines without a replacement. Theme defaults live in:

- `resources/css/modules/components/buttons.css` — `.nextora-main button:focus-visible`, block buttons, Elementor buttons
- `resources/css/modules/base/nav-menus.css` — header/footer links, mobile drawer close, submenu toggles
- `resources/css/modules/components/modal.css`, `spotlight-search.css`, `form-fields.css`, `comments.css`, `pagination.css`

Use **`:focus-visible`**, not bare `:focus`, where the theme already does.

### Reduced motion

Every motion feature must honor **`prefers-reduced-motion: reduce`**:

| Layer | Behavior |
|-------|----------|
| CSS | `@media (prefers-reduced-motion: reduce)` in `modal.css`, `nav-menus.css`, `scroll-animations.css`, block `style.css` files, etc. |
| TS utility | `prefersReducedMotion()` in `resources/ts/lib/scroll-animations/helpers.ts`; inline checks in `header-nav.ts`, block `view.ts` files |
| Scroll animations | No tweens; FOUC guard sets `opacity: 1` ([scroll-animations.md](./scroll-animations.md)) |
| Carousels | May still init; skip autoplay / aggressive transitions when reduced motion is on ([blocks.md](./blocks.md)) |
| Marquee | `nextora/scrolling-promotion` pauses animation under reduced motion (`blocks/scrolling-promotion/style.css`) |

---

## Page structure (block theme)

### Landmarks

Default templates use WordPress FSE **`tagName`** for landmarks:

- **`parts/header.html`** — template part with `area: header` (wraps `nextora/header` and optional `nextora/scrolling-promotion`).
- **`templates/*.html`** — `<main>` via `<!-- wp:group {"tagName":"main",…} -->` with classes such as `nextora-main`, `nextora-content-shell`.
- **`parts/footer.html`** — footer region; footer nav uses `core/navigation` with `ariaLabel` (e.g. `"Footer"`).

When adding templates, keep **one `<main>`** per view and preserve semantic wrappers — avoid replacing landmarks with unlabeled `<div>`-only shells.

### Headings

- **Single post:** `templates/single.html` uses `post-title` at **level 1**.
- **Archives / index:** list titles are typically linked headings below `h1` — verify Site Editor content does not stack multiple `h1` blocks on one page.
- **Theme blocks:** use real heading elements (`nextora/page-title`, block titles in `render.php`) — not styled paragraphs.

### Skip link

Nextora does **not** ship a skip link in `parts/header.html` today. For production sites, add one as the first focusable element in the header template part, target the main landmark (e.g. `href="#content"` on an id applied to `<main>`), and style `:focus` visibility. WordPress block themes often use:

```html
<a class="skip-link screen-reader-text" href="#content">Skip to content</a>
```

Pair with a visible-on-focus rule in CSS if core skip-link styles are insufficient.

---

## Built-in UI patterns

### Modal layer

Documented in [modal.md](./modal.md). Summary for accessibility:

- Dialog surface: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` or `aria-label`, `tabindex="-1"`, `data-nextora-modal-surface`.
- **Focus trap**, **Escape** closes topmost modal, **focus restore** to trigger.
- Events: `nextora:modalopen`, `nextora:modalclose` on `[data-nextora-modal]`.
- Close control: `data-nextora-modal-dismiss`, `aria-label` from `window.nextoraModal.closeLabel` (`inc/assets/assets.php`).

Used by spotlight search, programmatic dialogs, and can be reused by custom blocks.

### Header (`nextora/header`)

| Concern | Implementation |
|---------|----------------|
| Primary nav | `<nav aria-label="…">` — label from `nextora_header_block_nav_aria_label` filter |
| Mobile menu | `[data-nextora-nav-toggle]`: `aria-expanded`, `aria-controls`, open/close `aria-label` from `data-nextora-nav-*-label` |
| Mobile drawer | Body portal (`header-nav.ts`): `role="dialog"`, `aria-modal="true"`, `sr-only` title, Escape closes, focus moves to first link |
| Submenus (mobile) | `Nextora_Header_Block_Menu_Walker`: `<button class="nextora-submenu-toggle" aria-expanded aria-haspopup aria-label="Toggle submenu for …">` |
| Submenus (desktop) | Hover/focus CSS in `nav-menus.css`; `aria-current="page"` from `wp_nav_menu` on current item |
| Icon utilities | Cart, account, search: `aria-label`; badges `aria-hidden="true"` where count is duplicated in label |
| Mini cart drawer | `role="dialog"`, `aria-modal`, `aria-labelledby`; close button labeled |
| Spotlight / simple search | Spotlight → modal contract; simple search uses `screen-reader-text` labels |

Boot order: `initHeaderNavigation()` runs early in `resources/ts/main.ts` (after sticky header).

### Spotlight search

See [spotlight-search.md](./spotlight-search.md) § Accessibility notes:

- Dialog: `aria-label` + `aria-describedby` on hint.
- Form: `role="search"`; combobox-style `aria-controls`, `aria-expanded`, `aria-autocomplete`, `aria-activedescendant`.
- Results: `role="listbox"` / `role="option"`; `[data-spotlight-status]` live region (`aria-live="polite"`).
- Arrow keys + Enter; Escape delegated to modal layer.

Do not mount duplicate spotlight modals on one page (header + standalone block).

### Comments (Tiptap)

See [comments-tiptap.md](./comments-tiptap.md):

- Visible `<label id="nextora-comment-field-label">`; editor `aria-labelledby`.
- Toolbar `role="toolbar"`; buttons use `aria-label` / `title` from `window.nextoraComments`.
- `#comment` textarea remains for POST + validation; `tabindex="-1"`, `aria-hidden="true"`, class `sr-only`.

### Scroll animations

Class-driven GSAP reveals ([scroll-animations.md](./scroll-animations.md)):

- Utility classes `animation-fade-in-up`, etc. on block wrappers.
- Theme blocks: attribute **`enableScrollAnimation`** → `data-nextora-scroll-reveal="1"` in `render.php`.
- Reduced motion: content stays visible; JS does not run reveal tweens.

### Footer navigation

`core/navigation` with `__unstableLocation: footer` — wired in `inc/navigation/navigation.php`. Styling and `:focus-visible` in `nav-menus.css` under `.nextora-navigation-from-location--footer`.

---

## Theme blocks — development checklist

Align with [blocks.md](./blocks.md). Every interactive or motion block should satisfy:

- [ ] **Semantic controls:** `<button type="button">` for actions; `<a href>` for navigation — not clickable `<div>` without `role` + keyboard support.
- [ ] **Carousel / slider:** prev/next `aria-label` (translated); decorative pagination may be `aria-hidden="true"` when arrows suffice; respect reduced motion in `view.ts`.
- [ ] **Decorative layers:** backgrounds, scrims, separators — `aria-hidden="true"` (see `nextora/call-to-action`, `nextora/page-title`).
- [ ] **Informative images:** `alt` from attributes or media library; arc gallery uses `role="img"` + `aria-label` when appropriate.
- [ ] **Marquee:** `role="region"` + `aria-label`; duplicate track items marked `aria-hidden="true"` (`nextora/scrolling-promotion`).
- [ ] **Scroll toggle:** `enableScrollAnimation` in `block.json`; `data-nextora-scroll-reveal="1"` when enabled.
- [ ] **Loading states:** `--loading` / `--ready` classes so layout does not collapse before JS (helps zoom and reflow).
- [ ] **PHP:** escaped attributes; `npm run lint:php:all` after `render.php` changes.
- [ ] **Build:** `npm run build:blocks` and/or `npm run build` after `view.ts` / block CSS changes.

### Reference blocks (accessibility patterns)

| Block | Pattern |
|-------|---------|
| `nextora/header` | Nav ARIA, drawer portal, Woo mini cart dialog |
| `nextora/spotlight-search` | Modal + combobox search |
| `nextora/scrolling-promotion` | `role="region"`, reduced-motion pause |
| `nextora/image-gallery-slide`, `nextora/team-section`, `nextora/testimonial-carousel`, `nextora/testimonials` | Labeled arrows; Swiper init + reduced motion |
| `nextora/arc-gallery-section` | `role="group"` + `aria-label` on gallery |
| `nextora/counters`, `nextora/page-title`, `nextora/call-to-action` | Reduced motion in `view.ts` |

---

## Colour and contrast

- **Palette:** `theme.json` → `--wp--preset--color--*` (base, contrast, primary, secondary, surface).
- **Tailwind / CSS:** `resources/css/app.css` `@theme` mirrors presets (`--color-contrast`, `--nextora-nav-*`, etc.).
- **Validation:** test common pairings (body text on base, links on surface, header on base background) with a contrast checker when changing presets or Global Styles.
- **Non-text UI:** focus rings and icon buttons should meet **3:1** against adjacent colors; body copy **4.5:1** (large text **3:1**).

Do not rely on color alone for state — pair with text, icons, or `aria-*` state (e.g. submenu `aria-expanded`).

---

## Forms

| Form | Location | Notes |
|------|----------|-------|
| Comment reply | `inc/comments/comments.php` | Label + Tiptap; see above |
| Spotlight search | `inc/features/spotlight-search/search-ui.php` | `sr-only` label; submit fallback button |
| Header simple search | `blocks/header/render.php` | `screen-reader-text` + visible submit icon with label |
| Core / plugin forms | Site content | Contact Form 7, WooCommerce checkout — not theme-owned; audit per plugin |

Theme form field styling: `resources/css/modules/components/form-fields.css` (`:focus-visible` included).

---

## Integrations (limited theme ownership)

| Integration | Accessibility scope |
|-------------|---------------------|
| **WooCommerce** | Mini cart / account in header block; checkout and catalog templates largely plugin + block markup |
| **Elementor** | Focus styles extended in `buttons.css` for `.elementor-button`; page content is author-controlled |
| **GiftFlow** | Campaign UI from plugin when `add_theme_support( 'giftflow' )` |
| **WordPress core blocks** | Post content, navigation block in footer — follow core block guidance in Site Editor |

Flag plugin popups, sliders, or autplaying media during site QA — replace or configure at plugin level.

---

## Development workflow

From the theme root ([AGENTS.md](../AGENTS.md)):

1. Edit **source** files (`resources/**`, `blocks/**`, `inc/**`, templates) — not compiled `assets/**` or `blocks/*/index.js`.
2. After CSS / TS / block sources: **`npm run build`** (or **`npm run watch`**).
3. PHP changes: **`npm run lint:php:all`** (PHPStan + style lint).
4. TypeScript: **`npm run typecheck`** when changing `resources/**` or `blocks/**`.
5. Pre-commit / CI: **`npm run precommit`**, **`npm run ci`**.

### Manual QA (theme-owned UI)

Test on a page using default `parts/header.html` and representative templates (`front-page`, `single`, `archive`):

- [ ] Tab through header utilities, primary nav (desktop hover/focus + mobile drawer), footer nav.
- [ ] Open spotlight search: focus in field, type query, arrow through results, Enter to navigate, Escape to close, focus returns to trigger.
- [ ] Open mobile menu: focus trap, submenu toggles update `aria-expanded`, Escape closes, focus returns to hamburger.
- [ ] Open mini cart (if WooCommerce): dialog semantics, close control, keyboard dismiss.
- [ ] Submit empty comment: prevented, focus stays in editor; toolbar buttons announced.
- [ ] Enable `prefers-reduced-motion: reduce` in OS/browser: marquees pause, scroll reveals skip, modal/nav motion shortened.
- [ ] 320px width and 400% zoom: no critical horizontal scroll in theme shell (`.nextora-content-shell`, header block).
- [ ] Spot-check focus visibility on buttons, links, and form fields.

### Automated scans

Run axe DevTools, WAVE, or Lighthouse on key templates. Automated tools catch many issues but **not** focus restore, live region timing, or mobile drawer behavior — combine with manual keyboard and screen reader passes (NVDA + Firefox or VoiceOver + Safari).

---

## Agent audit checklist (Nextora-specific)

When auditing or implementing accessibility fixes, inspect these areas and report **PASS**, **FAIL**, or **NEEDS_MANUAL_CHECK**:

| ID | Check | Where to look |
|----|-------|----------------|
| A01 | One `<main>` landmark per template | `templates/*.html` |
| A02 | Header/footer landmarks present | `parts/header.html`, `parts/footer.html`, template parts |
| A03 | Sensible heading hierarchy (typically one `h1` per view) | Site Editor content + templates |
| A04 | Skip link to main (if required by project) | `parts/header.html` — **not bundled by default** |
| A05 | Nav labels and `aria-current="page"` | `blocks/header/render.php`, `wp_nav_menu` output |
| A06 | Mobile nav: `aria-expanded`, dialog, Escape, focus | `header-nav.ts`, `nav-menus.css` |
| A07 | Modals: dialog roles, trap, Escape, focus restore | `modal.ts`, spotlight + mini cart markup |
| A08 | Spotlight: combobox ARIA + live region | `search-ui.php`, `spotlight-search.ts` |
| A09 | Comments: label, toolbar names, submit guard | `comments.php`, `comment-tiptap.ts` |
| A10 | Reduced motion honored | `view.ts`, `scroll-animations/`, block + component CSS |
| A11 | Focus visible on interactive theme UI | `buttons.css`, `nav-menus.css`, block styles |
| A12 | Theme block carousels: labeled controls | `blocks/*/render.php` for arrow buttons |
| A13 | Images / alt in theme blocks | Block `render.php`, media attributes |
| A14 | Palette contrast for default presets | `theme.json`, Global Styles |
| A15 | No duplicate spotlight modals | Single trigger per view |
| A16 | i18n: no hard-coded English in `aria-label` | PHP `esc_attr__()` / localized JS objects |

### Report format

```text
A-ID: [e.g. A07]
status: PASS | FAIL | NEEDS_MANUAL_CHECK
details: [What was found]
element: [Selector or file:line]
recommendation: [Fix, if FAIL]
```

---

## Related docs

- [modal.md](./modal.md) — modal markup and API
- [spotlight-search.md](./spotlight-search.md) — search modal and REST
- [comments-tiptap.md](./comments-tiptap.md) — comment field
- [scroll-animations.md](./scroll-animations.md) — utility-class motion
- [blocks.md](./blocks.md) — block standards and `enableScrollAnimation`
- [extensibility.md](./extensibility.md) — header filters and hooks
