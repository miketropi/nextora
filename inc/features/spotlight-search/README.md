# Spotlight search (feature)

PHP for the spotlight / live search modal. Loaded via `inc/features/spotlight-search/load.php` from `functions.php`.

| File | Role |
|------|------|
| `load.php` | Requires the modules below |
| `modal-markup.php` | Trigger + dialog shell: `nextora_get_header_search_modal_markup()`, `nextora_get_header_search_modal_markup_args()`, SVG helpers |
| `search-ui.php` | `nextora_get_spotlight_search_inner_html()`, `nextora_localize_spotlight_search()`, `nextora_merge_spotlight_search_block_modal_args()` |
| `register-hooks.php` | Legacy optional hook registration (deprecated — use `nextora/header` or `nextora/spotlight-search` block) |

**Blocks:** `nextora/header` (default in `parts/header.html`, spotlight search mode) and standalone `blocks/spotlight-search/`.

**Assets:** `resources/css/modules/components/spotlight-search.css`, `resources/ts/lib/spotlight-search.ts`, `resources/ts/spotlight-search-portal.ts`.

Hooks and filters: [docs/spotlight-search.md](../../../docs/spotlight-search.md), [docs/extensibility.md](../../../docs/extensibility.md).
