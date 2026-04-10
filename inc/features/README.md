# `inc/features/` — vertical feature slices

Each subfolder groups **all PHP** for one user-facing feature (load order, hooks, templates helpers). Front-end **CSS/TS** for the same feature usually stay under `resources/css/modules/` and `resources/ts/lib/`; the feature README points to those paths.

| Feature | Folder | Bootstrap |
|---------|--------|-----------|
| Spotlight search (modal + REST live search) | `spotlight-search/` | `load.php` (required from `functions.php` before `header-hooks.php`) |

Add a new feature by creating `inc/features/<slug>/load.php` and requiring it from `functions.php` in the right order relative to its dependencies.
