# Modal layer (JS + CSS)

Built-in modal utilities live in `resources/ts/lib/modal.ts` and `resources/css/modules/components/modal.css`. They are initialized from `resources/ts/main.ts` (`initModals()`, `attachModalGlobals()`).

## Custom events (integrations)

Bubbles on the modal root (`[data-nextora-modal]`):

| Event | `detail` | When |
|-------|----------|------|
| `nextora:modalopen` | `{ root: HTMLElement }` | After open animation starts and initial focus runs. |
| `nextora:modalclose` | `{ root: HTMLElement }` | When the modal begins closing (before transition end). |

The header **Spotlight search** listens to these to focus the query field and reset state.

## Features

- **Declarative**: `data-nextora-modal-open="id"` on a button opens `#id`.
- **Programmatic**: `openModalDialog({ title, body, … })` returns `{ close() }` for alerts, confirm-style flows, AJAX content, etc.
- **Accessibility**: `role="dialog"`, `aria-modal`, focus trap, **Escape** closes topmost modal, focus restore to the trigger.
- **Motion**: Backdrop blur + panel scale/fade; **`prefers-reduced-motion`** shortens animations.
- **Scroll lock**: `html.nextora-modal-scroll-lock` while a modal is open.
- **Stacking**: Multiple modals increase `z-index`; only the **topmost** modal can be closed by id (see below).

## Declarative markup

**Contract (what `modal.ts` requires)**

1. **Root**: `[data-nextora-modal]` (usually also `class="nextora-modal"`, `hidden`, `aria-hidden="true"`).
2. **Scrim** (optional but typical): first interactive dismiss layer, class `nextora-modal__scrim`, `data-nextora-modal-dismiss`.
3. **Dialog panel**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing at a visible title id, `tabindex="-1"`, and **`data-nextora-modal-surface`** (recommended) **or** class `nextora-modal__surface`. The script resolves the panel with `[data-nextora-modal-surface]` first, then `.nextora-modal__surface`. Without both, the modal will not open.

### Classic layout (header + body)

```html
<button type="button" data-nextora-modal-open="info-modal">Open</button>

<div
	id="info-modal"
	class="nextora-modal"
	hidden
	data-nextora-modal
	aria-hidden="true"
>
	<div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
	<div
		class="nextora-modal__surface nextora-modal__surface--lg"
		data-nextora-modal-surface
		role="dialog"
		aria-modal="true"
		aria-labelledby="info-modal-title"
		tabindex="-1"
	>
		<header class="nextora-modal__header">
			<h2 id="info-modal-title" class="nextora-modal__title">Title</h2>
			<button type="button" class="nextora-modal__close" data-nextora-modal-dismiss aria-label="Close">
				<span class="nextora-modal__close-icon" aria-hidden="true">…</span>
			</button>
		</header>
		<div class="nextora-modal__body">
			<p>Content.</p>
		</div>
		<footer class="nextora-modal__footer">
			<!-- optional actions -->
		</footer>
	</div>
</div>
```

### Spotlight search modal (theme default)

Built in **`inc/hooks/header-hooks.php`**: same root + scrim + **one** `data-nextora-modal-surface` panel with `nextora-modal__surface--spotlight`. Inside the panel, a **`<header>`** holds the dialog title and subtitle; **`nextora-modal__body`** wraps only the search form (field, results, hints). The close button is **after** the body in the DOM and positioned over the header row so tab order reaches the query field first. Full behavior, REST filters, and `data-*` hooks are documented in **[spotlight-search.md](./spotlight-search.md)**.

- **`data-nextora-modal-dismiss`**: click closes that modal (scrim, close button, “Cancel” links).
- **Surface widths / variants**: `nextora-modal__surface--sm`, `--lg`, `--spotlight`, etc. Keep `nextora-modal__surface` **or** rely on `data-nextora-modal-surface` if you rename classes via filters.

## `window` helpers (after bundle loads)

| Call | Purpose |
|------|---------|
| `nextoraOpenModal('my-modal')` | Same as opening `#my-modal`. |
| `nextoraOpenModalDialog({ title, body, footer?, … })` | Temporary modal; `body` / `footer` can be HTML string or `HTMLElement`. |
| `nextoraCloseModal()` | Closes the topmost modal. |

Typed imports (blocks, custom entrypoints):

```ts
import {
	openModal,
	closeModal,
	openModalById,
	openModalDialog,
	initModals,
} from "./lib/modal";
```

## PHP / i18n

`nextoraModal.closeLabel` is localized in `inc/assets/assets.php` for the programmatic close button.

## Customizing look

Override CSS variables on `.nextora-modal` (see `modal.css`), e.g. `--nextora-modal-scrim`, `--nextora-modal-radius`, `--nextora-modal-surface-bg`.
