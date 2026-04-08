# Nextora theme — agent briefing

Use this file when changing code under `wp-content/themes/nextora/`. Authoritative detail also lives in `README.md`.

## What this theme is

- **Hybrid WordPress theme**: classic PHP templates (`header.php`, `footer.php`, `index.php`, `page.php`, `single.php`) plus **`theme.json` v3** and block **template parts** in `parts/*.html` (loaded via `block_template_part()` in the shell templates).
- **Stack**: PHP 8.1+ (`declare(strict_types=1);`), Tailwind CSS v4 (PostCSS), TypeScript bundled with esbuild, optional Composer autoload + PHPStan/PHPUnit.

## Naming and constants

- **Text domain / slug**: `nextora` (`Nextora\Core\ThemeConfig::SLUG`).
- **PHP hooks and functions**: prefix `nextora_` (see `Nextora\Core\ThemeConfig::prefix()`).
- **Constants**: `NEXTORA_VERSION` (in `inc/bootstrap/constants.php`), `NEXTORA_DIR`, `NEXTORA_URI` (in `functions.php`).
- **PSR-4**: `Nextora\` maps to `inc/` (e.g. `Nextora\Core\ThemeConfig` → `inc/Core/ThemeConfig.php`). Procedural includes live in grouped subfolders under `inc/` — see `inc/README.md`.

## Files you usually touch

| Area | Edit | Do not edit as “source” |
|------|------|-------------------------|
| Global styles / presets | `theme.json` | — |
| Tailwind tokens / utilities | `resources/css/app.css` (`@theme` maps to `--wp--preset--*`) | `assets/css/app.css` (build output) |
| Front-end JS | `resources/ts/main.ts` | `assets/js/main.js` (build output) |
| PHP behavior | `functions.php`, `inc/**/*.php` | — |
| Markup | `template-parts/*.php`, `parts/*.html`, root `*.php` templates | — |

After changing CSS or TS, run **`npm run build`** (or `watch`) so `assets/` stays in sync. The theme skips loading compiled files if they are missing or unreadable.

## Design system alignment

- **Colors / fonts / spacing**: defined in `theme.json`; mirror new palette entries in `resources/css/app.css` `@theme` (with hex fallbacks) so Tailwind utilities (`text-primary`, `bg-base`, etc.) match the editor.
- **Fonts**: Hanken Grotesk from Google Fonts — URL and preconnect in `inc/assets/assets.php`; family slugs in `theme.json` (`sans`, `mono`).
- **Tailwind**: Preflight is **disabled** on purpose so the block editor UI is not reset; see comment at top of `resources/css/app.css`.
- **Layout**: Content width uses `theme.json` `layout.contentSize` / `wideSize` and classes like `.nextora-content-shell` (do not arbitrarily max-width the main wrapper in ways that fight block constrained layouts).

## Article / loop templates

- Entry layouts are driven by `template-parts/content-article.php` and related partials; **`nextora_content_article_vars()`** in `inc/template/article-template.php` centralizes class strings and flags (`layout` `default` vs `card`, optional `card_lead` for a subtle accent + LCP hints, meta, excerpt, linked title, etc.). Prefer extending that function rather than duplicating long class lists across partials.

## Quality checks (from theme root)

- `npm run build` — CSS + JS
- `npm run typecheck` — TypeScript
- `npm run lint:php` — PHPStan (`composer phpstan`)
- `composer test` — PHPUnit

## Cloning

- `npm run theme:clone -- --slug=...` produces a sibling theme with rewritten slug/namespace/constants; not used for day-to-day Nextora edits.

## WordPress version

- Target **WordPress 6.4+** (see `README.md` / `style.css` for tested version).
