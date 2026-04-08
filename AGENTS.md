# Nextora theme — agent briefing

Use this file when changing code under `wp-content/themes/nextora/`. **Deeper feature docs** live in [`docs/`](./docs/) (see table below). Authoritative project overview: `README.md`. PHP layout notes: `inc/README.md`.

## What this theme is

- **Hybrid WordPress theme**: classic PHP templates (`header.php`, `footer.php`, `index.php`, `page.php`, `single.php`) plus **`theme.json` v3** and block **template parts** in `parts/*.html` (loaded via `block_template_part()` in the shell templates).
- **Stack**: PHP 8.1+ (`declare(strict_types=1);`), **Tailwind CSS v4** (PostCSS), **TypeScript** bundled with **esbuild** (minified in `build:ts`), **npm dependencies** for comments UI (Tiptap, Lucide). Optional Composer autoload + PHPStan/PHPUnit.

## Docs index (`docs/`)

| Doc | Purpose |
|-----|---------|
| [`docs/extensibility.md`](./docs/extensibility.md) | Hooks, filters, header/footer, page heading, article title/meta/share, paths to PHP/CSS |
| [`docs/modal.md`](./docs/modal.md) | Modal layer (`data-nextora-modal`, `openModalDialog`, events, a11y) |
| [`docs/spotlight-search.md`](./docs/spotlight-search.md) | Header spotlight search, REST, `window.nextoraSpotlight` |
| [`docs/comments-tiptap.md`](./docs/comments-tiptap.md) | Tiptap comment field, KSES, `window.nextoraComments` |

## Naming and constants

- **Text domain / slug**: `nextora` (`Nextora\Core\ThemeConfig::SLUG`).
- **PHP hooks and functions**: prefix `nextora_` (see `Nextora\Core\ThemeConfig::prefix()`).
- **Constants**: `NEXTORA_VERSION` (`inc/bootstrap/constants.php`), `NEXTORA_DIR`, `NEXTORA_URI` (`functions.php`).
- **PSR-4**: `Nextora\` → `inc/` (e.g. `Nextora\Core\ThemeConfig` → `inc/Core/ThemeConfig.php`). Procedural code is grouped under `inc/` — see `inc/README.md`.

## Files you usually touch

| Area | Edit (source) | Do not edit as source |
|------|----------------|------------------------|
| Global styles / presets | `theme.json` | — |
| Tailwind tokens / `@import` order | `resources/css/app.css` (`@theme` maps to `--wp--preset--*`; feature CSS in `resources/css/modules/`) | `assets/css/app.css` |
| Feature CSS slices | `resources/css/modules/**/*.css` | `assets/css/app.css` |
| Front-end JS | `resources/ts/main.ts`, `resources/ts/**/*.ts` | `assets/js/main.js` |
| PHP behavior | `functions.php`, `inc/**/*.php` | — |
| Markup | `template-parts/*.php`, `parts/*.html`, root `*.php` templates | — |

After changing CSS or TS, run **`npm run build`** (or **`npm run watch`**) so `assets/` stays in sync. The theme skips loading compiled files if they are missing or unreadable.

### `resources/css/app.css` import order

Imports are intentional: **base** → **components** → **prose** → **overrides** (see file header comment). Current modules:

- **Base**: `body.css`, `nav-menus.css`, `layout-shell.css`, `search-form.css`, `articles-shell.css`, `comments.css`, `pagination.css`, `entry-column.css`
- **Components**: `buttons.css`, `form-fields.css`, `modal.css`, `spotlight-search.css`
- **Prose**: `entry-content.css`
- **Overrides**: `layout-tweaks.css`

`@theme` also defines **Nextora-specific tokens** (e.g. `--nextora-nav-*`, `--nextora-pagination-*`, `--nextora-comments-*`) used by `nav-menus.css`, pagination, and comments — keep new menu/pagination/comment colors in `@theme` when possible.

### `resources/ts` entry (`main.ts`)

Boot order matters where noted:

1. `initHeaderNavigation()` — primary menu drawer / accordion (`header-nav.ts`); strings from `wp_localize_script` → `window.nextoraNav` in `inc/assets/assets.php`
2. `initModals()` / `attachModalGlobals()` — `lib/modal.ts`; `window.nextoraModal` localized in `assets.php`
3. `initSpotlightSearch()` — after modals; `lib/spotlight-search.ts`; `window.nextoraSpotlight`
4. `initArticleShare()` — `lib/article-share.ts`; `window.nextoraArticleShare` (filter `nextora_article_share_script_vars`)
5. `initCommentTiptap()` — `lib/comment-tiptap.ts`; Tiptap + Lucide bundles; `window.nextoraComments`

**npm `dependencies`**: `@tiptap/*`, `lucide`. **devDependencies**: Tailwind, PostCSS, esbuild, TypeScript.

## PHP load map (`functions.php`)

Not exhaustive — key includes:

- `inc/navigation/navigation.php` — Navigation block ↔ menu locations (`render_block` filter)
- `inc/search/spotlight-search.php` — Spotlight REST + localization
- `inc/hooks/header-hooks.php`, `inc/hooks/footer-hooks.php`
- `inc/template/article-template.php`, `article-share.php`, `page-heading.php`, `post-placeholder.php`
- `inc/comments/comments.php`
- `inc/assets/assets.php` — fonts, `nextora-app` / `nextora-main`, all `wp_localize_script` payloads for front-end JS

## Design system alignment

- **Colors / fonts / spacing**: `theme.json`; mirror new palette in `resources/css/app.css` `@theme` (with fallbacks) so utilities (`text-primary`, `bg-base`, etc.) match the editor.
- **Fonts**: Hanken Grotesk — `NEXTORA_GOOGLE_FONT_STYLESHEET` and preconnect in `inc/assets/assets.php`; families in `theme.json`.
- **Tailwind**: Preflight is **disabled** (see top of `resources/css/app.css`) so block editor chrome is not reset.
- **Layout**: Use `theme.json` `layout.contentSize` / `wideSize` and classes like `.nextora-content-shell`; avoid fighting core constrained layouts.

## Navigation (header menu)

- **PHP**: `inc/navigation/navigation.php` — replaces empty `core/navigation` with `wp_nav_menu()` when `__unstableLocation` is set; classes `nextora-header-menu`, `nextora-navigation-from-location--primary|footer`.
- **CSS**: `resources/css/modules/base/nav-menus.css` — desktop flyouts (**CSS** `:focus-within` + `(hover: hover)` hover); mobile/tablet **full-height off-canvas** panel, **portal** mount (see below).
- **JS**: `resources/ts/header-nav.ts` — no GSAP; class toggles, `document.body` **`.nextora-nav-portal`** for fixed positioning, accordion **`.nextora-submenu-toggle`**, Escape / backdrop / resize.

## Article / loop templates

- **`nextora_content_article_vars()`** and related live in **`inc/template/article-template.php`** (not the old single-file path). Prefer extending that API rather than duplicating class strings across `template-parts/`.

## Quality checks (from theme root)

- `npm run build` — CSS + JS
- `npm run typecheck` — TypeScript
- `npm run lint:php` — PHPStan (`composer phpstan`)
- `composer test` — PHPUnit

## Cloning

- `npm run theme:clone -- --slug=...` — sibling theme with rewritten slug/namespace/constants.

## WordPress version

- Target **WordPress 6.4+** (see `README.md` / `style.css`).
