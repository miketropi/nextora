# Nextora theme — agent briefing

Use this file when changing code under `wp-content/themes/nextora/`. **Deeper feature docs** live in [`docs/`](./docs/) (see table below). Authoritative project overview: `README.md`. PHP layout notes: `inc/README.md`.

## Cursor / IDE

- **Cursor rules (concise constraints):** [`.cursor/rules/*.mdc`](./.cursor/rules/) — always-on and file-pattern rules for blocks, PHP, front-end, accessibility, and `theme.json`/templates.
- **Cursor skills (workflows):** [`.cursor/skills/`](./.cursor/skills/) — e.g. adding theme blocks, styling and token alignment. Invoke by skill name when relevant.
- Long-form context stays in this file and in `docs/`; avoid duplicating large sections into rules.

## What this theme is

- **WordPress block theme (FSE):** HTML templates in `templates/`, template parts in `parts/`, global styles in **`theme.json` v3**. No classic root PHP templates (`header.php`, `single.php`, etc.).
- **Stack**: PHP 8.1+ (`declare(strict_types=1);`), **Tailwind CSS v4** (PostCSS), **TypeScript** bundled with **esbuild**, npm deps for comments UI (Tiptap, Lucide), GSAP, Swiper. Optional Composer autoload + PHPStan/PHPUnit.

## Docs index (`docs/`)

| Doc | Purpose |
|-----|---------|
| [`docs/extensibility.md`](./docs/extensibility.md) | Hooks, filters, header block, navigation, comments |
| [`docs/modal.md`](./docs/modal.md) | Modal layer (`data-nextora-modal`, `openModalDialog`, events, a11y) |
| [`docs/scroll-animations.md`](./docs/scroll-animations.md) | Class-driven GSAP scroll reveals (`animation-fade-in-up`, data-* attrs) |
| [`docs/spotlight-search.md`](./docs/spotlight-search.md) | Spotlight search, REST, `window.nextoraSpotlight` |
| [`docs/comments-tiptap.md`](./docs/comments-tiptap.md) | Tiptap comment field, KSES, `window.nextoraComments` |
| [`docs/blocks.md`](./docs/blocks.md) | Theme block standards |
| [`docs/accessibility.md`](./docs/accessibility.md) | WCAG 2.1 AA patterns, source map, block checklist, QA workflow |

## Naming and constants

- **Text domain / slug**: `nextora` (`Nextora\Core\ThemeConfig::SLUG`).
- **PHP hooks and functions**: prefix `nextora_` (see `Nextora\Core\ThemeConfig::prefix()`).
- **Constants**: `NEXTORA_VERSION` (`inc/bootstrap/constants.php`), `NEXTORA_DIR`, `NEXTORA_URI` (`functions.php`).
- **PSR-4**: `Nextora\` → `inc/` (e.g. `Nextora\Core\ThemeConfig` → `inc/Core/ThemeConfig.php`). Procedural code is grouped under `inc/` — see `inc/README.md`.

## Files you usually touch

| Area | Edit (source) | Do not edit as source |
|------|----------------|------------------------|
| Global styles / presets | `theme.json` | — |
| Block templates / parts | `templates/*.html`, `parts/*.html` | — |
| Tailwind tokens / `@import` order | `resources/css/app.css` | `assets/css/app.css` |
| Feature CSS slices | `resources/css/modules/**/*.css` | `assets/css/app.css` |
| Front-end JS | `resources/ts/main.ts`, `resources/ts/**/*.ts` | `assets/js/main.js` |
| Theme blocks (editor) | `blocks/<name>/` | `blocks/<name>/index.js`, `index.asset.php` |
| PHP behavior | `functions.php`, `inc/**/*.php` | — |

After changing CSS, TS, or block sources, run **`npm run build`** (or **`npm run watch`**).

### Theme blocks (`blocks/`)

- **Standards:** [`docs/blocks.md`](./docs/blocks.md)
- **Registration**: `blocks/blocks.php` — globs `blocks/*/block.json`, requires built `index.js` + `index.asset.php`.
- **Build**: `scripts/build-blocks.mjs` — `@wordpress/*` → `window.wp.*`.
- **Scaffold**: `npm run gen -- --name=slug --ns=nextora`
- **Examples**: `blocks/header/`, `blocks/spotlight-search/`, `blocks/hero-section/`, `blocks/post-grid/`, `blocks/image-gallery-grid/`, `blocks/image-gallery-slide/`, `blocks/call-to-action/`

### Default template parts

- **`parts/header.html`** — `nextora/header` (logo, nav, spotlight search, Woo cart/account)
- **`parts/footer.html`** — footer `core/navigation` + credits

### `resources/css/app.css` import order

**base** → **components** → **prose** → **overrides**

- **Base**: `body.css`, `nav-menus.css`, `layout-shell.css`, `search-form.css`, `articles-shell.css`, `comments.css`, `pagination.css`, `entry-column.css`
- **Components**: `buttons.css`, `form-fields.css`, `modal.css`, `spotlight-search.css`
- **Prose**: `entry-content.css`
- **Overrides**: `layout-tweaks.css`

`@theme` defines **Nextora-specific tokens** (`--nextora-nav-*`, `--nextora-pagination-*`, `--nextora-comments-*`).

### `resources/ts` entry (`main.ts`)

Boot order matters:

1. `initHeaderSticky()` — `header-sticky.ts`
2. `initHeaderNavigation()` — `header-nav.ts` (GSAP mobile drawer)
3. `mountHeaderMiniCartPortalToBody()` — `mini-cart-portal.ts`
4. `mountSpotlightSearchPortalToBody()` — `spotlight-search-portal.ts`
5. `initModals()` / `attachModalGlobals()` — `lib/modal.ts`
6. `bindHeaderMiniCartAfterAjaxAdd()`
7. `initSpotlightSearch()` — `lib/spotlight-search.ts`
8. `initArticleShare()` — `lib/article-share.ts` (for `[data-nextora-article-share]` markup)
9. `initCommentTiptap()` — `lib/comment-tiptap.ts`
10. `initScrollAnimations()` — `lib/scroll-animations/` (class-driven GSAP reveals)

## PHP load map (`functions.php`)

- `inc/setup/theme-support.php` — WooCommerce, GiftFlow, Elementor, nav menus, `custom-logo`
- `inc/setup/elementor.php` — Elementor editor settings
- `inc/navigation/navigation.php` — `core/navigation` ↔ menu locations
- `inc/navigation/header-block-woocommerce.php` — mini cart fragments
- `inc/features/spotlight-search/load.php` — search modal + REST localization
- `inc/comments/comments.php` — comment form + Tiptap KSES
- `inc/assets/assets.php` — fonts, `nextora-app`, `nextora-main`, `wp_localize_script`
- `blocks/blocks.php` — registers theme blocks

### GiftFlow and WooCommerce

- **GiftFlow**: `add_theme_support( 'giftflow' )` — campaign UI from the plugin
- **WooCommerce**: theme support; mini cart/account in `nextora/header` block

## Design system alignment

- **Colors / fonts / spacing**: `theme.json`; mirror in `resources/css/app.css` `@theme`
- **Tailwind**: Preflight **disabled** (block editor chrome)
- **Layout**: `theme.json` `layout.contentSize` / `wideSize`, `.nextora-content-shell`

## Navigation

- **PHP**: `inc/navigation/navigation.php` — `core/navigation` with `__unstableLocation` → `wp_nav_menu()`
- **Header block**: `nextora/header` uses its own menu picker + walker (`Nextora_Header_Block_Menu_Walker`)
- **CSS**: `resources/css/modules/base/nav-menus.css`
- **JS**: `resources/ts/header-nav.ts` — portal + GSAP drawer on mobile

## Quality checks (from theme root)

PHP changes are not done until **`npm run lint:php:all`** passes (PHPStan + style lint).

Auto-fix formatting: **`npm run lint:php:fix`**, then re-run the two checks above.

**Git pre-commit (Husky):** staged PHP is auto-formatted, then **`npm run lint:php:all`** runs. TypeScript **`npm run typecheck`** runs when staged `resources/**` or `blocks/**` `.ts`/`.tsx` files change. Manual dry-run: **`npm run precommit`**.

**CI:** GitHub Actions (`.github/workflows/ci.yml`) on `main` / `develop` — full gate via **`npm run ci`** locally.

Also:

- `npm run build`
- `npm run typecheck`
- `composer test`

## Cloning

- `npm run theme:clone -- --slug=...`

## WordPress version

- Target **WordPress 6.4+** (see `README.md` / `style.css`).
