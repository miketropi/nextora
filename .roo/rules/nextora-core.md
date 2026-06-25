# Nextora — core

> Always-on rule: naming, builds, generated assets, doc entry points, quality gate.

- **Briefing:** Read [`AGENTS.md`](../../AGENTS.md) first; feature details in [`docs/`](../../docs/).
- **Slug / i18n:** Text domain `nextora`; PHP hooks/functions `nextora_`; PSR-4 `Nextora\` → `inc/`.
- **After editing** `resources/css/**`, `resources/ts/**`, or block sources under `blocks/**`, run **`npm run build`** or **`npm run watch`** from the theme root.
- **Do not treat as source** (regenerate via npm): `assets/css/app.css`, `assets/js/main.js`, `blocks/*/index.js`, `blocks/*/index.asset.php`, `blocks/*/view.js`.
- **Target:** WordPress 6.4+, tested up to 6.9 (`style.css`); PHP 8.1+ (`declare(strict_types=1);` in new PHP).
- **PHP quality:** After any PHP change, run **`npm run lint:php:all`** (or `lint:php` + `lint:php:check`) from the theme root; fix until both pass (see [`.roo/rules/nextora-php.md`](.roo/rules/nextora-php.md)).
- **Pre-commit / CI:** Husky runs lint-staged + `lint:php:all` on commit; CI (GitHub Actions) runs `npm run ci` (typecheck + lint + build + test). Local parity: **`npm run precommit`** / **`npm run ci`**.

```text
❌ Editing assets/js/main.js by hand to fix a bug
✅ Fix resources/ts/** then npm run build (or watch:ts)
```
