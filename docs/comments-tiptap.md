# Comment field — Tiptap rich text

The reply form’s **Comment** control uses **[Tiptap](https://tiptap.dev/)** in the browser: a visible editor mounts on `#nextora-tiptap-host`, while WordPress still submits the standard **`textarea#comment`** (kept in the DOM for accessibility and core behavior, visually hidden). Toolbar buttons use **[Lucide](https://lucide.dev/)** icons (`lucide` npm package, `createElement` + icon nodes).

For filters that affect the rest of the theme (header, footer, page heading), see [extensibility.md](./extensibility.md).

## Source map

| Piece | Path |
|--------|------|
| Comment form markup, KSES for saved HTML | `inc/comments/comments.php` |
| Toolbar strings → `window.nextoraComments` | `inc/assets/assets.php` (`wp_localize_script` on `nextora-main`) |
| Editor init, toolbar, sync, submit guard | `resources/ts/lib/comment-tiptap.ts` |
| Boot | `resources/ts/main.ts` (`initCommentTiptap()`) |
| Prose + toolbar styles | `resources/css/modules/base/comments.css` |
| Shared form utilities (if any) | `resources/css/modules/components/form-fields.css` |

`functions.php` loads `inc/comments/comments.php`. The script bundle includes **Tiptap v3** (`@tiptap/core`, `@tiptap/starter-kit`, `@tiptap/extension-placeholder`, link support via StarterKit) and **`lucide`** as a dependency in `package.json`.

## Markup contract (PHP)

`nextora_get_comment_form_args()` outputs:

1. A **label** with `id="nextora-comment-field-label"` (click focuses the editor in JS).
2. A shell **`div.nextora-tiptap-shell`** containing:
   - **`div.nextora-tiptap-toolbar`** — empty placeholder; replaced on init with the real toolbar.
   - **`div#nextora-tiptap-host`** — Tiptap root; `data-placeholder` holds the translated placeholder string.
3. **`textarea#comment`** — `name="comment"`, `maxlength="65525"`, classes include `nextora-comment-textarea-sync` and screen-reader-only utilities; `tabindex="-1"` and `aria-hidden="true"` so keyboard users stay in the ProseMirror surface (which has `aria-labelledby` pointing at the label).

If `#nextora-tiptap-host` or `textarea#comment` is missing, initialization no-ops.

## JavaScript behavior

- **Sync**: On create/update, editor HTML is written to `#comment` (empty document → empty string). Length is capped at **65525** characters by truncating the HTML string if needed.
- **Submit**: On form submit (capture phase), sync runs again; if the document is empty, submit is **prevented** and focus returns to the editor.
- **Toolbar**: `role="toolbar"`; toggle buttons for bold, italic, strikethrough, inline code, blockquote; **link** prompts for a URL (`window.prompt`) and sets/unsets the link mark.
- **StarterKit** is configured with headings, lists, code block, horizontal rule, etc. **disabled**; **link** is enabled with `rel` / `class` on anchors to match theme + KSES.
- **Placeholder** uses the string from `data-placeholder` on the host.

## `window.nextoraComments`

Localized on `nextora-main` as `nextoraComments`. Used for toolbar `aria-label`, `title` tooltips, and the link prompt.

| Key | Purpose |
|-----|---------|
| `toolbarLabel` | `aria-label` on the toolbar. |
| `toolBold`, `toolBoldHint` | Bold control label + tooltip. |
| `toolItalic`, `toolItalicHint` | Italic. |
| `toolStrike`, `toolStrikeHint` | Strikethrough. |
| `toolCode`, `toolCodeHint` | Inline code. |
| `toolQuote`, `toolQuoteHint` | Blockquote. |
| `toolLink`, `toolLinkHint` | Link control. |
| `linkPromptTitle`, `linkPromptDefault` | `prompt()` title and default URL string. |

Override strings with `wp_localize_script` on your own hook (merge or replace the `nextoraComments` object before/after the theme) or by filtering the PHP array if you add a theme filter later.

## KSES (saved comment HTML)

WordPress runs **`pre_comment_content`** through KSES. By default, tags like **`p`** / **`br`** and some **link** attributes used by Tiptap can be stripped.

The theme adds **`nextora_kses_allowed_html_comment_tiptap`** on `wp_kses_allowed_html` when the context is `pre_comment_content`:

- Allows **`p`** and **`br`**.
- On **`a`**, allows **`rel`** and **`class`** (in addition to whatever Core already allows).

Adjust or remove this filter in a child theme if your site policy should disallow rich HTML in comments.

## Build notes

After changing TypeScript or adding npm dependencies, run from the theme root:

```bash
npm install
npm run build:ts
```

The front end loads **`assets/js/main.js`** (esbuild bundle, minified in `build:ts`). CSS changes go through `npm run build:css` (or `npm run build` for both).

## Accessibility

- Visible label remains the native **Comment** label; the editor is associated via **`aria-labelledby`**.
- Toolbar buttons are **icon-only** in the UI but expose names via **`aria-label`** and **`title`** from `nextoraComments`.
- The sync textarea is hidden from the tab order and accessibility tree as described above so interaction stays on one surface; do not remove the textarea without providing an alternative that still satisfies `comment_form` and server-side validation.
