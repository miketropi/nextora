# Header spotlight search

The theme ships a **magnifying-glass control** in the header that opens a modal with **live search** over site content. Results come from the WordPress REST API (`wp/v2/search`), with debounced `fetch`, request cancellation for stale queries, and keyboard navigation inside the results list.

For the **modal shell** (focus trap, scrim, stacking), see [modal.md](./modal.md). For **actions and filters** that also affect the rest of the header, see [extensibility.md](./extensibility.md).

## Source map

| Piece | Path |
|--------|------|
| **Block (default placement)** — `nextora/spotlight-search` | `blocks/spotlight-search/` (`block.json`, `edit.tsx`, `render.php`); included in `parts/header.html` inside `nextora-header-nav-cluster` |
| **PHP feature bundle** | `inc/features/spotlight-search/` (`load.php`, `modal-markup.php`, `search-ui.php`, `register-hooks.php`) — see `inc/features/spotlight-search/README.md` |
| Trigger + modal markup (title, body, close) | `inc/features/spotlight-search/modal-markup.php` — `nextora_get_header_search_modal_markup()` |
| Block attrs → modal args | `inc/features/spotlight-search/search-ui.php` — `nextora_merge_spotlight_search_block_modal_args()`; filter `nextora_spotlight_search_block_modal_args` |
| Form fragment (input, results container, hints) | `inc/features/spotlight-search/search-ui.php` — `nextora_get_spotlight_search_inner_html()` |
| REST config + strings → `window.nextoraSpotlight` | `inc/features/spotlight-search/search-ui.php` (`nextora_localize_spotlight_search`) |
| Client behavior | `resources/ts/lib/spotlight-search.ts` |
| Styles | `resources/css/modules/components/spotlight-search.css` |
| Boot order | `resources/ts/main.ts` (`initSpotlightSearch()` after `initModals()`) |

`functions.php` loads `inc/features/spotlight-search/load.php`. **By default** the spotlight UI is **not** hooked into `nextora_header_after_primary_nav`; it is rendered by the **`nextora/spotlight-search` block** in the header template part.

**Legacy PHP-only injection** (no block in the header): add

```php
add_filter( 'nextora_header_spotlight_search_use_php_hook', '__return_true' );
```

That restores `nextora_header_search_modal_trigger()` on `nextora_header_after_primary_nav` (priority **20**). Do not use both the block and this hook on the same header, or you will get duplicate modals.

## Markup structure

1. **Modal** — Built like any Nextora modal: root `[data-nextora-modal]`, scrim, dialog surface with **`data-nextora-modal-surface`** (see [modal.md](./modal.md)).
2. **Surface** — `<header>` holds the dialog **title** (`h2` + `title_id`) and optional **subtitle**; **`nextora-modal__body`** wraps only the form. The **close** button is a sibling **after** the body, absolutely positioned over the header so **tab order** reaches the search field before the close control.
3. **Form** — `nextora_get_spotlight_search_inner_html()` outputs a `<form class="nextora-spotlight" data-nextora-spotlight role="search" method="get" action="…">` that degrades to a normal site search if scripts are off.

## JavaScript contract

`initSpotlightSearch()` selects every **`[data-nextora-spotlight]`** form and binds handlers if these exist:

| Selector / attribute | Role |
|----------------------|------|
| `input[name="s"]` | Query field; drives debounced REST requests. |
| `[data-spotlight-results]` | Results region (`role="listbox"` in default markup). |
| `[data-spotlight-status]` | Polite live region for loading / screen reader status. |
| `[data-spotlight-spinner]` | Optional loading indicator. |
| `[data-spotlight-hint]` | Shown when the query is shorter than `minQueryLength`. |
| `[data-spotlight-empty]` | “No results” or error message container. |

If `window.nextoraSpotlight` is missing or has no `restUrl`, initialization no-ops (no requests).

### Modal integration

When the form sits inside `[data-nextora-modal]`, the script listens for **`nextora:modalopen`** on that root: it **focuses** the query input and **selects** its text, and on **`nextora:modalclose`** it **clears** the value, aborts in-flight fetch, and resets the UI.

### REST request

- **URL**: `nextoraSpotlight.restUrl` (default `…/wp-json/wp/v2/search`).
- **Query**: `search=<trimmed query>`, `per_page=<number>`.
- **Credentials**: `same-origin`; **Accept**: `application/json`.

Items are expected to match the Core search controller shape (`title`, `url`, `type`, `subtype`). The client renders links with subtype-based labels (post / page / other) and a path snippet for context.

### Keyboard

With results visible: **ArrowDown** / **ArrowUp** move active option (wraps); **Enter** opens the active URL (or submits selection on form submit). **Escape** is handled by the modal layer (closes the dialog).

## `window.nextoraSpotlight`

Localized onto the `nextora-main` script as `nextoraSpotlight` (see `nextora_localize_spotlight_search()`). Keys:

| Key | Meaning |
|-----|---------|
| `restUrl` | Search endpoint URL. |
| `debounceMs` | Delay after input before fetch (minimum 80 ms enforced in TS). |
| `minQueryLength` | Characters required before searching (default 2). |
| `perPage` | `per_page` query argument. |
| `loading`, `noResults`, `error` | User-visible strings. |
| `typePost`, `typePage`, `typeOther` | Subtype labels in result rows. |
| `keyboardHint` | Available for UI copy (keyboard instructions). |

## PHP filters (spotlight-specific)

Defined or consumed in `inc/features/spotlight-search/search-ui.php` unless noted.

| Filter | Purpose |
|--------|---------|
| `nextora_spotlight_rest_url` | Override REST base URL. |
| `nextora_spotlight_debounce_ms` | Debounce milliseconds. |
| `nextora_spotlight_min_query_length` | Minimum query length. |
| `nextora_spotlight_per_page` | Result page size. |
| `nextora_spotlight_search_inner_html` | Replace the entire inner form HTML (`$html`, `$args`). |

**Modal + trigger** (classes, labels, full HTML) use the hooks in `header-hooks.php`, e.g. `nextora_header_search_modal_markup_args`, `nextora_header_search_modal_form_html`, `nextora_header_search_modal_output`. See [extensibility.md](./extensibility.md#header).

## Disabling

Hide the built-in trigger and modal:

```php
add_filter( 'nextora_show_header_search_modal', '__return_false' );
```

You can still reuse `nextora_get_spotlight_search_inner_html()` or the same `data-nextora-spotlight` markup inside another modal or page section, provided `nextora-main` loads and `window.nextoraSpotlight` is present.

## Styling

Component styles live under `.nextora-spotlight*` and `.nextora-modal__surface--spotlight` in `resources/css/modules/components/spotlight-search.css`. The modal token layer remains in `modal.css`.

## Accessibility notes

- Dialog: `aria-labelledby` on the surface points at the visible `h2`; optional `aria-describedby` when a subtitle is output (see `header-hooks.php`).
- Combobox-style hints: input uses `aria-controls`, `aria-expanded`, `aria-autocomplete="list"`, and `aria-activedescendant` when an option is active.
- Results links use `role="option"` while the listbox is open; status updates use a live region.
