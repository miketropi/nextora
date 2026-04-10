# Spotlight search (feature)

PHP for the header spotlight / live search modal. Loaded via `inc/features/spotlight-search/load.php` from `functions.php` **before** `inc/hooks/header-hooks.php` (mobile nav reuses `nextora_header_search_modal_kses_svg()` for icon sanitization).

| File | Role |
|------|------|
| `load.php` | Requires the modules below |
| `modal-markup.php` | Trigger + dialog shell: `nextora_get_header_search_modal_markup()`, `nextora_get_header_search_modal_markup_args()`, SVG helpers |
| `search-ui.php` | `nextora_get_spotlight_search_inner_html()`, `nextora_localize_spotlight_search()`, `nextora_merge_spotlight_search_block_modal_args()` |
| `register-hooks.php` | `nextora_header_search_modal_trigger()` + optional `nextora_header_after_primary_nav` action |

**Block:** `blocks/spotlight-search/` (`nextora/spotlight-search`). **Assets:** `resources/css/modules/components/spotlight-search.css`, `resources/ts/lib/spotlight-search.ts`.

Hooks and filters are documented in [docs/spotlight-search.md](../../../docs/spotlight-search.md) and [docs/extensibility.md](../../../docs/extensibility.md).
