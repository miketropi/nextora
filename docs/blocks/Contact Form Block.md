# Contact Form Block

**Version:** 1.2 (Nextora planning alignment)  
**For:** AI Agent Development  
**Status:** Implemented as **`nextora/contact-form`** in [`blocks/contact-form/`](../../blocks/contact-form/). When changing behavior, follow **§15** and [`docs/blocks.md`](../blocks.md); do not copy §1–§7 generic patterns as-is.

§1–§7 below are the **product / UX spec** (reference design and behavior). **§15** maps that spec to the Nextora theme (`blocks/`, `inc/features/`, `docs/blocks.md`, Cursor rules/skills). **Do not implement** from §1–§7 alone — follow §15 when building.

---

## Theme context (Nextora)

| Item | Generic / legacy spec (§1–§7) | Nextora target |
|------|-------------------------------|----------------|
| Block name | `mytheme/contact-form` | **`nextora/contact-form`** |
| Text domain | `mytheme` | **`nextora`** |
| Registration | Manual `register_block_type` in `functions.php` | **[`blocks/blocks.php`](../../blocks/blocks.php)** — auto `register_block_type` per folder |
| Build | Hand-edited `index.js`, standalone `assets/js/contact-form.js` | **esbuild** [`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs) → `index.js` / `index.asset.php` / `view.js` |
| Front end | `render.php` + separate theme script enqueue | **`render.php`** + **`view.ts`** bundled as **`viewScript`** in `block.json` |
| REST / mail | Procedural code in `functions.php` or `inc/contact-form.php` | Feature slice **`inc/features/contact-form/`** required from [`functions.php`](../../functions.php) |
| REST namespace | `mytheme/v1` | **`nextora/v1`** |
| PHP functions | `mytheme_handle_contact_form` | **`nextora_*`** prefixed procedural handlers (or `Nextora\Features\ContactForm\` under `inc/`) |
| Form / button CSS | Hard-coded hex in block `style.css` only | **`theme.json` presets** + shared **[`form-fields.css`](../../resources/css/modules/components/form-fields.css)** + block BEM; CTA aligned with **team section** / **call to action** |
| Message field | Plain `<textarea>` | **Tiptap** rich text via shared **`nextora-tiptap-toolbar`** ([`docs/comments-tiptap.md`](../comments-tiptap.md)) — sync `textarea[name="message"]`, init through **`initCommentTiptap()`** in `main.ts` |
| Skills / rules | — | **nextora-add-theme-block**, **nextora-theme-styling-and-tokens**, [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc), [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc) |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), [`docs/accessibility.md`](../accessibility.md), [`docs/comments-tiptap.md`](../comments-tiptap.md).

---

## 1. Overview

This document specifies a Gutenberg block that renders a **“Get In Touch”** contact form section. On successful submission it:

- Sends an **admin notification** email to the site owner.
- Sends a **confirmation email** to the visitor who submitted the form.

The form collects four fields: **Full Name**, **Phone**, **Email**, and **Message**. Phone is optional; the other three are required.

**No form plugin dependency** — Contact Form 7, WPForms, Gravity Forms, etc. must not be required. All submission, validation, and mail logic lives in the theme.

---

## 2. Visual Design Reference

```
┌──────────────────────────────────────────────────┐
│ Get In Touch                                     │
│ We'd love to hear from you! If you have any      │
│ questions                                        │
│                                                  │
│  Full Name              Phone Number             │
│  [____________________] [____________________]   │
│                                                  │
│  Email                                           │
│  [________________________________________]      │
│                                                  │
│  Message                                         │
│  [B][I][S][code][quote] [link]  ← tiptap toolbar │
│  ┌────────────────────────────────────────────┐  │
│  │ Rich text editor (Tiptap)                  │  │
│  │                                            │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
│  [        Send Message        ]  ← accent CTA    │
└──────────────────────────────────────────────────┘
```

**Design notes (reference mock — map to presets in §15):**

| Element | Mock reference | Nextora default |
|---------|----------------|-----------------|
| Section background | `#F3F3F3` light gray | `var(--wp--preset--color--surface)` (`surface` in [`theme.json`](../../theme.json)) |
| Inputs | White, rounded, light border | Shared **`.nextora-form`** field styles from [`form-fields.css`](../../resources/css/modules/components/form-fields.css) |
| CTA button | Golden yellow `#F5C518`, full width, pill radius | **`var(--wp--preset--color--primary)`** fill, contrast text, radius `50px` — match **[`blocks/team-section/style.css`](../../blocks/team-section/style.css)** `__btn--solid` (see [`docs/blocks.md`](../blocks.md) § Shared component styles) |
| Typography | Bold large heading, muted subheading | `var(--wp--preset--font-size--*)` presets; `supports.typography` on the block |
| Layout | 2-column row for name + phone; full-width email, message, submit | CSS grid in `blocks/contact-form/style.css`; single column below `600px` |
| Message editor | Single-line textarea in mock | **`nextora-tiptap-shell`** with **`nextora-tiptap-toolbar`** + Tiptap host (same chrome as comment field) |

---

## 3. Form Fields Specification

| Field label | `name` / param | Input type | Required | Default placeholder (i18n key) |
|-------------|----------------|------------|----------|--------------------------------|
| Full Name | `full_name` | `text` | Yes | “Enter your full name” |
| Phone Number | `phone` | `tel` | No | “Enter your phone number” |
| Email | `email` | `email` | Yes | “Enter your email address” |
| Message | `message` | **rich text** (Tiptap → sync `textarea`) | Yes | “Your message” |

### 3.1 Message — `nextora-tiptap-toolbar` integration

The **Message** field uses the theme’s existing Tiptap stack — not a plain visible `<textarea>` and **not** a second toolbar implementation in the block bundle.

| Piece | Contract |
|-------|----------|
| **Shell** | `div.nextora-tiptap-shell` — bordered focus ring container (mirror comment field) |
| **Toolbar placeholder** | Empty `div.nextora-tiptap-toolbar` — replaced on init by [`comment-tiptap.ts`](../../resources/ts/lib/comment-tiptap.ts) `buildToolbar()` |
| **Editor host** | `div` with unique `id`, class `nextora-tiptap-host` pattern, `data-placeholder` for translated placeholder |
| **Sync field** | `textarea[name="message"]` — `maxlength="65525"`, `tabindex="-1"`, `aria-hidden="true"`, class `sr-only` / `nextora-contact-form__message-sync`; holds HTML synced from Tiptap |
| **Label** | Unique `id` on `<label>`; host editor uses `aria-labelledby` pointing at it |
| **Toolbar i18n** | Reuse **`window.nextoraComments`** strings ([`inc/assets/assets.php`](../../inc/assets/assets.php)) — same bold/italic/link labels as the comment field |
| **Init** | Additional mount entry merged into **`window.nextoraCommentTiptap.mounts`** via filter **`nextora_comment_tiptap_js_config`** ([`docs/comments-tiptap.md`](../comments-tiptap.md), [`docs/extensibility.md`](../extensibility.md)) |
| **Allowed markup** | Same subset as comments: bold, italic, strike, inline code, blockquote, links — **no** headings, lists, or code blocks (StarterKit config in `comment-tiptap.ts`) |
| **Stored / emailed value** | HTML sanitized server-side (§15.6); **plain-text emails** (§4) use `wp_strip_all_tags()` on the sanitized HTML |

**Editor toggle:** attribute **`enableRichTextMessage`** (`boolean`, default `true`). When `false`, render a normal `<textarea>` (no shell/toolbar) for sites that want plain text only.

**Merge note:**  
Earlier designs split **First Name** and **Last Name**. This implementation uses a single **`full_name`** field only — do not split into `first_name` + `last_name`.

Field labels, placeholders, validation messages, and email copy must use the **`nextora`** text domain (`__()`, `esc_attr__()` in PHP; `wp.i18n` or localized `data-*` strings for `view.ts`).

---

## 4. Email Behavior

### 4.1 Admin notification

Triggered on every **successful** form submission.

| Property | Value |
|----------|-------|
| **To** | `get_option( 'admin_email' )` (filterable — see §15.13) |
| **Subject** | Default: “New contact form submission” — overridable via block attribute `adminEmailSubject` |
| **Body** | Full Name, Phone, Email, Message — plain text (HTML optional v2) |
| **Reply-To** | Visitor name + submitted email |

**Plain-text body template:**

```text
You have received a new contact form submission.

Full Name:    {full_name}
Phone:        {phone}
Email:        {email}
Message:
{message}

---
Sent from: {site_url}
```

### 4.2 User confirmation

Triggered on every **successful** submission, sent to the visitor’s `email`.

| Property | Value |
|----------|-------|
| **To** | Submitted `email` |
| **Subject** | Default: “Thank you for contacting us” — overridable via `userEmailSubject` |
| **Body** | Acknowledgement + copy of submitted data |
| **From name** | `get_bloginfo( 'name' )` |
| **From email** | Admin email (filterable; document SMTP/plugin interaction) |

**Plain-text body template:**

```text
Hi {full_name},

Thank you for reaching out! We have received your message and will get back to you as soon as possible.

Here is a copy of your submission:

Phone:   {phone}
Email:   {email}
Message:
{message}

Best regards,
{site_name}
{site_url}
```

Both templates must be filterable for child themes / plugins (§15.13). Do not hard-code English in committed PHP without `__()` wrappers.

---

## 5. Editable Block Content (attributes)

These strings are editor-controlled defaults (RichText or `TextControl` in the inspector). Empty attribute → fall back to translated PHP defaults in `render.php`.

| Attribute | Type | Default (English reference) | Inspector panel |
|-----------|------|----------------------------|-----------------|
| `heading` | `string` | “Get In Touch” | **Content** |
| `subheading` | `string` | “We'd love to hear from you! If you have any questions” | **Content** |
| `buttonLabel` | `string` | “Send Message” | **Content** |
| `adminEmailSubject` | `string` | “New contact form submission” | **Email** |
| `userEmailSubject` | `string` | “Thank you for contacting us” | **Email** |
| `successMessage` | `string` | “Thank you! Your message has been sent.” | **Email** |
| `headingLevel` | `number` | `2` | **Content** (`SelectControl` 2–4) |
| `enableRichTextMessage` | `boolean` | `true` | **Content** — **Rich text message** (`ToggleControl`); off = plain `<textarea>` |
| `messagePlaceholder` | `string` | “Your message” | **Content** |
| `enableScrollAnimation` | `boolean` | `true` | **Animation** (standard toggle — [`docs/blocks.md`](../blocks.md)) |

Optional color overrides (only if `supports.color` is insufficient): `sectionBackgroundColor`, `buttonBackgroundColor`, `buttonTextColor` — sidebar panel **Colors**, same help pattern as sibling blocks.

---

## 6. Functional Rules & Constraints

| Rule | Detail |
|------|--------|
| **No plugin dependency** | Native theme block only — no CF7, WPForms, etc. |
| **Single full name field** | Never split into first/last name |
| **Dual email** | Every successful submission sends **exactly two** emails (admin + user) |
| **Nonce** | Verify CSRF token before processing (§15.6) |
| **Sanitize** | `sanitize_text_field`, `sanitize_email` on text fields; **message** via `wp_kses()` with the same allowlist as comment Tiptap (§15.6) |
| **Rich text message** | Reuse **`nextora-tiptap-toolbar`** + **`initCommentTiptap()`** — do not bundle a second Tiptap instance in `view.js` |
| **REST submission** | POST to `nextora/v1/contact` — not `admin-ajax.php` |
| **Accessible form** | Real `<form>`, associated `<label>`, `type="submit"`, live region for status (§15.11) |
| **No inline styles** | No `style=""` on fields or notices — use BEM modifiers in `style.css` |
| **i18n** | Text domain **`nextora`** for all user-visible and assistive copy |
| **Quality gate** | `npm run lint:php:all`, `npm run typecheck`, `npm run build:blocks` before shipping |

---

## 7. Glossary

| Term | Meaning |
|------|---------|
| `full_name` | Single merged name field (replaces first + last) |
| `admin_email` | `get_option( 'admin_email' )` — site owner inbox |
| `nonce` | WordPress CSRF token verified server-side |
| `render.php` | Dynamic block template — all front-end markup |
| `view.ts` | Block front-end script — fetch submit, validation UX, notice UI |
| `nextora-tiptap-toolbar` | Shared formatting bar (`role="toolbar"`) built by `comment-tiptap.ts`; bold, italic, strike, code, blockquote, link |
| `nextora-tiptap-shell` | Wrapper around toolbar + Tiptap host; styles in [`comments.css`](../../resources/css/modules/base/comments.css) |
| `wp_mail()` | WordPress mail API for both notification emails |

---

## 15. Nextora implementation

**Follow this section when generating or modifying code.** §1–§7 describe *what* to build; §15 describes *how* in this theme.

### 15.1 Identity and registration

| Spec | Nextora |
|------|---------|
| `mytheme/contact-form` | **`nextora/contact-form`** |
| `textdomain` `mytheme` | **`nextora`** |
| Category | **`design`** (content band — pairs with `nextora/call-to-action`, `nextora/team-section`) |
| Plugin / standalone JS | **None** — [`blocks/blocks.php`](../../blocks/blocks.php) |

Scaffold:

```bash
npm run gen -- --name=contact-form --ns=nextora --category=design
```

Then extend generated files per §15.3–§15.12.

### 15.2 Architecture

Single dynamic block — no InnerBlocks, no child blocks.

| Layer | Responsibility |
|-------|----------------|
| **`blocks/contact-form/`** | Markup (`render.php`), editor (`edit.tsx`), styles, `view.ts` submit UX |
| **`inc/features/contact-form/`** | REST route registration, request validation, `wp_mail()` handlers, Tiptap mount registry, filters |
| **`resources/ts/lib/comment-tiptap.ts`** | Tiptap editor + **`nextora-tiptap-toolbar`** (loaded via `main.ts` — not duplicated in block `view.js`) |
| **`resources/css/modules/components/form-fields.css`** | Shared input/textarea/select baseline (already loaded via `app.css`) |
| **`resources/css/modules/base/comments.css`** | Toolbar + prose styles under **`.nextora-tiptap-shell`** (reuse classes on the message shell) |

Require the feature bootstrap from [`functions.php`](../../functions.php) after dependencies, same pattern as [`inc/features/spotlight-search/load.php`](../../inc/features/spotlight-search/load.php):

```php
require_once NEXTORA_DIR . '/inc/features/contact-form/load.php';
```

Update [`inc/features/README.md`](../../inc/features/README.md) with the new row when implemented.

### 15.3 File structure

```text
blocks/contact-form/
├── block.json
├── index.tsx
├── edit.tsx
├── types.ts
├── render.php
├── style.css
├── editor.css
├── view.ts                 # Form submit + notice UI (bundled)
└── (generated) index.js, index.asset.php, view.js

inc/features/contact-form/
├── load.php                # Requires siblings; hooks rest_api_init
├── register-rest-route.php # register_rest_route( 'nextora/v1', '/contact', … )
├── handle-submission.php   # nextora_handle_contact_form_submission()
└── tiptap-mounts.php       # parse_blocks + nextora_comment_tiptap_js_config merge
```

**Remove from legacy spec:**

- `assets/js/contact-form.js` — do not add standalone theme scripts; use **`viewScript`**
- `wp_enqueue_script` in `functions.php` conditioned on `has_block()` — WordPress enqueues `view.js` when the block is present
- Hand-edited `blocks/contact-form/index.js`

### 15.4 `block.json`

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "nextora/contact-form",
  "title": "Contact form",
  "category": "design",
  "description": "Get in touch form — emails the site admin and sends a confirmation to the visitor.",
  "keywords": ["contact", "form", "email", "nextora"],
  "textdomain": "nextora",
  "supports": {
    "html": false,
    "align": ["wide", "full"],
    "anchor": true,
    "color": {
      "background": true,
      "text": true
    },
    "spacing": {
      "padding": true,
      "margin": true
    },
    "typography": {
      "fontSize": true,
      "lineHeight": true
    }
  },
  "attributes": {},
  "editorScript": "file:./index.js",
  "editorStyle": "file:./editor.css",
  "style": "file:./style.css",
  "viewScript": "file:./view.js",
  "render": "file:./render.php"
}
```

Populate `attributes` per §5. Include **`enableScrollAnimation`** (`boolean`, default `true`).

### 15.5 Front-end markup (`render.php`)

| Legacy spec | Nextora |
|-------------|---------|
| `<div class="wp-block-mytheme-contact-form">` | **`get_block_wrapper_attributes()`** on root — classes `wp-block-nextora-contact-form` + `nextora-contact-form` |
| `contact-form__*` BEM | **`nextora-contact-form__*`** |
| Global IDs `cf_full_name`, `cf_submit_btn` | **Per-instance IDs** — suffix with `wp_unique_id( 'nextora-contact-form-' )` so multiple blocks per page do not collide |
| `type="button"` + click handler | **`<form>`** with **`method="post"`**, **`novalidate`** (custom validation), **`<button type="submit">`** |
| `style="display:none"` on notice | Class **`nextora-contact-form__notice--hidden`**; toggle in `view.ts` |
| Bare English labels | **`esc_html_e()` / `esc_attr__()`** with domain `nextora` |

**Wrapper contract for JS:**

```html
<form
  class="nextora-form nextora-contact-form__form"
  data-nextora-contact-form="1"
  data-rest-url="…"
  data-nonce="…"
  novalidate
>
```

- Wrap fields in **`.nextora-form`** so [`form-fields.css`](../../resources/css/modules/components/form-fields.css) applies (border, focus ring, `:focus-visible`).
- Pass **`data-rest-url`** = `esc_url( rest_url( 'nextora/v1/contact' ) )`.
- Pass **`data-nonce`** = `wp_create_nonce( 'nextora_contact_form' )` (hidden field `_wpnonce` is fine too).
- Optional **`data-success-message`**, **`data-sending-label`** for i18n strings from PHP.

**Scroll animation:** when `enableScrollAnimation` is true, add `data-nextora-scroll-reveal="1"` on the block root (or inner content wrapper). Implement reveal in `view.ts` with GSAP + ScrollTrigger — pattern [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts). Skip animation when `prefers-reduced-motion: reduce`.

**Color attrs:** map preset slugs to `var(--wp--preset--color--{slug})` via a small `nextora_contact_form_resolve_color()` helper (mirror [`blocks/counters/render.php`](../../blocks/counters/render.php)).

#### 15.5.1 Message field markup (Tiptap)

When **`enableRichTextMessage`** is true, output the same contract as [`nextora_get_comment_form_args()`](../../inc/comments/comments.php) (`docs/comments-tiptap.md` § Markup contract):

```html
<div class="nextora-contact-form__field nextora-contact-form__field--message">
  <label id="{label_id}" for="{host_id}" class="…">
    …Message… <span aria-hidden="true">*</span>
  </label>
  <div class="nextora-tiptap-shell …">
    <div class="nextora-tiptap-toolbar min-h-0"></div>
    <div
      id="{host_id}"
      class="nextora-tiptap-host"
      data-placeholder="…"
    ></div>
  </div>
  <textarea
    id="{textarea_id}"
    name="message"
    maxlength="65525"
    class="nextora-contact-form__message-sync sr-only"
    tabindex="-1"
    aria-hidden="true"
    required
  ></textarea>
</div>
```

| Requirement | Detail |
|-------------|--------|
| **Unique IDs** | `{label_id}`, `{host_id}`, `{textarea_id}` per block instance — e.g. `nextora-contact-form-message-host-0` where `0` matches the instance index from the shared collector (below) |
| **Shell class** | Keep **`nextora-tiptap-shell`** so toolbar CSS from [`comments.css`](../../resources/css/modules/base/comments.css) applies without redeclaration |
| **Prose** | Tiptap surface uses class **`nextora-tiptap-prose`** (set in JS). Add contact-form scoped prose rules in `style.css` if needed: `.nextora-contact-form .nextora-tiptap-prose { … }` mirroring `.nextora-comments .nextora-tiptap-prose` |
| **Plain fallback** | When `enableRichTextMessage` is false: single visible `<textarea>` with standard `.nextora-form` styling — no shell, no mount |

**Tiptap mount registration (`tiptap-mounts.php`):**

`initCommentTiptap()` runs from [`main.ts`](../../resources/ts/main.ts) on `DOMContentLoaded` and reads **`window.nextoraCommentTiptap.mounts`**. Mounts must be known at **`wp_enqueue_scripts`** time (before `render.php` runs), so use a **shared block-instance collector**:

1. **`nextora_contact_form_get_instances( ?WP_Post $post )`** — `parse_blocks()` (recursive walk), return ordered list of `nextora/contact-form` blocks on the current singular post (same order as front-end render).
2. **`tiptap-mounts.php`** — on filter **`nextora_comment_tiptap_js_config`**, append one mount per instance:

```php
array(
    'hostId'           => 'nextora-contact-form-message-host-' . $index,
    'textareaSelector' => '#nextora-contact-form-message-sync-' . $index,
    'labelId'          => 'nextora-contact-form-message-label-' . $index,
    'toolbarSelector'  => '#nextora-contact-form-message-shell-' . $index . ' .nextora-tiptap-toolbar',
)
```

3. **`render.php`** — use the **same index** when rendering IDs (`$shell_id`, etc.) so PHP markup matches the localized mount config.

Do **not** initialize Tiptap inside **`blocks/contact-form/view.ts`** — that would duplicate the Tiptap bundle in `view.js`. The block script only reads `textarea[name="message"]` after the shared editor has synced content.

When `enableRichTextMessage` is false, skip mount registration for that instance.

### 15.6 REST API (`inc/features/contact-form/`)

Register on `rest_api_init`:

```php
register_rest_route(
    'nextora/v1',
    '/contact',
    array(
        'methods'             => 'POST',
        'callback'            => 'nextora_handle_contact_form_submission',
        'permission_callback' => '__return_true',
        'args'                => array(
            'full_name' => array( 'required' => true, 'type' => 'string' ),
            'email'     => array( 'required' => true, 'type' => 'string' ),
            'message'   => array( 'required' => true, 'type' => 'string' ),
            'phone'     => array( 'required' => false, 'type' => 'string' ),
            '_wpnonce'  => array( 'required' => true, 'type' => 'string' ),
        ),
    )
);
```

**Handler requirements:**

1. `declare( strict_types=1 );` on all new PHP files.
2. Verify nonce: `wp_verify_nonce( $nonce, 'nextora_contact_form' )` → `WP_Error` `403` with translatable message.
3. Sanitize text fields with `sanitize_text_field` / `sanitize_email`.
4. **Message:** run `wp_kses( $message, nextora_contact_form_allowed_message_html() )` — allowlist mirrors comment Tiptap (`p`, `br`, `strong`, `em`, `s`, `code`, `blockquote`, `a` with `href` / `rel` / `class`). Reject empty document after stripping (`<p></p>` only). Max length **65525** bytes (match Tiptap sync cap).
5. Validate required fields + `is_email( $email )` → `400` `WP_Error`.
6. **Email bodies (§4):** insert `wp_strip_all_tags( $message_sanitized )` into plain-text templates — do not send raw HTML in v1 mail.
7. Call `wp_mail()` twice (§4) — check return values; if either fails, return `500` with safe user message (do not leak mailer errors).
8. Success: `rest_ensure_response( array( 'success' => true, 'message' => … ) )` — `message` from block attr or default translated string.

**Security (v1 minimum):**

- Nonce required on every POST.
- Optional honeypot field `company_website` — reject if non-empty (silent success or `400`; document choice in code).
- Rate limiting is **recommended v2** (`transient` per IP/email) — note in code comments, not required for first ship.

Do **not** use `admin-ajax.php`. Namespace is **`nextora/v1`**, not `mytheme/v1`.

### 15.7 Front-end script (`view.ts`)

| Legacy `assets/js/contact-form.js` | Nextora `view.ts` |
|----------------------------------|-------------------|
| `DOMContentLoaded` + global IDs | **Idempotent `initContactFormRoot( root: HTMLElement )`**; query `[data-nextora-contact-form="1"]` |
| Hard-coded `/wp-json/mytheme/v1/contact` | Read **`dataset.restUrl`** from form |
| Hard-coded English strings | Read from `dataset` / `window` localized object; defaults via `wp.i18n` only in editor — front strings come from PHP |
| No init guard | Set **`data-nextora-contact-form-inited="1"`** after binding |

**Submit flow:**

1. `submit` event → `preventDefault()`.
2. Read **`message`** from `textarea[name="message"]` (sync field). Tiptap keeps it updated on `onUpdate`; optionally blur the ProseMirror surface first so the final keystroke is flushed.
3. **Empty rich message:** treat as invalid if value is empty or only whitespace / empty `<p></p>` (mirror `editor.isEmpty` behavior in `comment-tiptap.ts`).
4. Client-side check other required fields (mirror server rules).
5. Disable submit button; swap label to “Sending…” (from `data-sending-label`).
6. `fetch( restUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': … } , body: JSON } )` — POST sanitized HTML string as `message`; include `_wpnonce` in body.
7. On success: show notice (`role="status"`, `aria-live="polite"`), add `--success` modifier, reset form and clear Tiptap (set sync textarea to `''` and dispatch input event, or call editor API if exposed later).
8. On error: show `--error` notice with server `message` or fallback.
9. Re-enable submit; restore button label.
10. Honor **`prefers-reduced-motion: reduce`** — no decorative transitions on notice/button beyond opacity (CSS `@media`).

**Tiptap:** no init code in `view.ts`. Rely on **`initCommentTiptap()`** in `main.ts` + mounts from §15.5.1. Block `view.ts` only handles REST submit and notices.

Build: **`npm run build:blocks`** for block TS; after changes to **`comment-tiptap.ts`**, run **`npm run build:ts`** (or **`npm run build`**). Never edit `view.js` / `main.js` by hand.

### 15.8 Styles (`style.css` + shared modules)

| Legacy | Nextora |
|--------|---------|
| `#f3f3f3`, `#F5C518`, `#111` hex | CSS variables with preset fallbacks |
| `outline: none` on `:focus` | **Do not** — rely on **`form-fields.css`** `:focus-visible` rings |
| Block-only field rules duplicating globals | Layout/spacing/section chrome only; inputs inherit **`.nextora-form`** |
| Duplicate toolbar CSS | Reuse **`.nextora-tiptap-shell`** + [`comments.css`](../../resources/css/modules/base/comments.css); extend with `.nextora-contact-form .nextora-tiptap-prose` only if comment-scoped prose rules do not apply |

**Section shell example (tokens, not mock hex):**

```css
.nextora-contact-form {
  --nextora-contact-form-bg: var(--wp--preset--color--surface, #f4f4f4);
  background-color: var(--nextora-contact-form-bg);
  padding: var(--wp--preset--spacing--60, 2.5rem);
  border-radius: 0.75rem;
}
```

**Submit button** — copy dimensions from team-section solid CTA ([`docs/blocks.md`](../blocks.md)):

- `font-size: var(--wp--preset--font-size--small, 0.875rem)`
- `font-weight: 600`
- `padding: 0.625rem 1.75rem` (full-width: `width: 100%` for this block)
- `border-radius: 50px`
- `background: var(--nextora-contact-form-btn-bg, var(--wp--preset--color--primary))`
- `color: var(--nextora-contact-form-btn-text, var(--wp--preset--color--base))`
- Hover: `opacity: 0.9` (match team-section), not arbitrary hex darkening

**Notices:**

```css
.nextora-contact-form__notice--hidden { display: none; }
.nextora-contact-form__notice--success { /* preset-based success surface */ }
.nextora-contact-form__notice--error { /* preset-based error surface */ }
```

Use `color-mix(in srgb, …)` with contrast/secondary presets where needed — same approach as other block modules.

`editor.css`: mirror layout in the canvas; inspector preview may use static “success” state only in the editor if needed.

### 15.9 Editor (`edit.tsx`)

| Panel | Controls |
|-------|----------|
| **Content** | `heading`, `subheading`, `buttonLabel`, `headingLevel`, **`enableRichTextMessage`**, `messagePlaceholder` (RichText on canvas where practical) |
| **Email** | `adminEmailSubject`, `userEmailSubject`, `successMessage` |
| **Colors** | Optional overrides (`sectionBackgroundColor`, `buttonBackgroundColor`, …) — only if `supports.color` is insufficient |
| **Animation** | **Animate on scroll** — `enableScrollAnimation` + standard help from [`docs/blocks.md`](../blocks.md) |

Use panel titles **Content**, **Email**, **Colors**, **Animation** — not one-off names.

Preview: static form layout in the editor (non-functional submit, **no live Tiptap** in the block editor canvas v1 — show shell + toolbar placeholder or a styled `<textarea>` preview). Optionally `ServerSideRender` for parity — if used, refresh on attribute change.

### 15.10 Class and CSS variable naming

| Spec | Nextora |
|------|---------|
| `wp-block-mytheme-contact-form` | `wp-block-nextora-contact-form` + **`nextora-contact-form`** |
| `contact-form__*` | **`nextora-contact-form__*`** |
| — | **`--nextora-contact-form-*`** for overrides (`--nextora-contact-form-bg`, `--nextora-contact-form-btn-bg`, …) |

### 15.11 Accessibility

Required on first commit ([`docs/accessibility.md`](../accessibility.md), [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc)):

| Item | Implementation |
|------|----------------|
| Form landmark | `<form>` with `aria-label="<?php echo esc_attr__( 'Contact form', 'nextora' ); ?>"` or visible `<h2>` heading |
| Labels | Every input has `<label for="…">` matching unique `id` |
| Required fields | `required` attribute + `aria-required="true"`; optional `aria-describedby` linking to error text |
| Submit | `<button type="submit">` — not `<div>` / `type="button"` |
| Status | Notice region: `role="status"` + `aria-live="polite"`; remove `--hidden` on message |
| Focus | `:focus-visible` from `form-fields.css` / `buttons.css` — never `outline: none` without replacement |
| Errors | Associate field errors with `aria-invalid="true"` and `aria-describedby` pointing to error id |
| i18n | All `aria-label`, placeholders, notices via **`nextora`** domain |
| Motion | Scroll reveal off under `prefers-reduced-motion: reduce`; no essential info hidden behind JS |
| Rich text message | Label click focuses Tiptap (`comment-tiptap.ts`); toolbar `role="toolbar"` + `aria-label` from **`nextoraComments`**; sync textarea off tab order (`tabindex="-1"`, `aria-hidden="true"`); ProseMirror surface is the interactive control (`role="textbox"`, `aria-multiline="true"`, `aria-labelledby`) |

### 15.12 Extensibility hooks (plan)

| Hook | Purpose |
|------|---------|
| `nextora_contact_form_admin_email` | Override admin recipient |
| `nextora_contact_form_admin_subject` | Filter admin subject |
| `nextora_contact_form_admin_body` | Filter admin body |
| `nextora_contact_form_user_subject` | Filter user subject |
| `nextora_contact_form_user_body` | Filter user body |
| `nextora_contact_form_rest_response` | Filter success payload |
| `nextora_contact_form_wrapper_attributes` | Filter `get_block_wrapper_attributes()` array |
| `nextora_contact_form_allowed_message_html` | Filter KSES allowlist for stored / submitted message HTML |
| `nextora_comment_tiptap_js_config` | Append per-instance Tiptap mounts (already documented in [`docs/extensibility.md`](../extensibility.md)) |

### 15.13 Build and quality

| Step | Command |
|------|---------|
| Block TS/CSS | `npm run build:blocks` or `npm run watch` |
| Global CSS (if new module) | `npm run build:css` / `npm run build` |
| PHP | `npm run lint:php:all` after `render.php` and `inc/features/contact-form/**` |
| Types | `npm run typecheck` for `edit.tsx` / `view.ts` / `types.ts` |
| Tiptap / main bundle | `npm run build:ts` when touching [`comment-tiptap.ts`](../../resources/ts/lib/comment-tiptap.ts) or mount config |
| CI parity | `npm run precommit` or `npm run ci` before PR |

Never commit hand-edited `index.js`, `index.asset.php`, or `view.js`.

When implemented, add a row to the **Reference blocks** table in [`docs/blocks.md`](../blocks.md).

### 15.14 Closest reference blocks

| Need | Block / doc |
|------|-------------|
| Dynamic `render.php` + inspector repeaters | [`blocks/counters/`](../../blocks/counters/) |
| REST + localized UX | [`blocks/spotlight-search/`](../../blocks/spotlight-search/), [`inc/features/spotlight-search/`](../../inc/features/spotlight-search/) |
| CTA button styling | [`blocks/team-section/`](../../blocks/team-section/), [`blocks/call-to-action/`](../../blocks/call-to-action/) |
| Scroll reveal toggle | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |
| Color resolve helper | [`blocks/counters/render.php`](../../blocks/counters/render.php) |
| Shared form field baseline | [`resources/css/modules/components/form-fields.css`](../../resources/css/modules/components/form-fields.css) |
| Tiptap toolbar + mount pattern | [`docs/comments-tiptap.md`](../comments-tiptap.md), [`resources/ts/lib/comment-tiptap.ts`](../../resources/ts/lib/comment-tiptap.ts), [`inc/comments/comments.php`](../../inc/comments/comments.php) |

### 15.15 Acceptance criteria (Nextora)

1. Block registered as **`nextora/contact-form`** with **`textdomain` `nextora`**.
2. Submission via **`POST /wp-json/nextora/v1/contact`** with nonce verification.
3. Successful submit sends **two** emails (admin + user) per §4.
4. Single **`full_name`** field — no first/last split.
5. Markup uses **`get_block_wrapper_attributes()`**, **`.nextora-form`**, and **`nextora-contact-form__*`** BEM.
6. Submit UX lives in bundled **`view.ts`** / `view.js` — no `assets/js/contact-form.js`.
7. REST/mail logic in **`inc/features/contact-form/`** — not loose code in `functions.php`.
8. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal.
9. Empty color attrs fall back to **`theme.json`** presets — no committed mock hex (`#F5C518`, `#F3F3F3`) as defaults.
10. All user-facing and assistive strings use **`nextora`** i18n.
11. **`npm run lint:php:all`** and **`npm run typecheck`** pass.
12. Multiple block instances on one page work independently (unique field ids, per-root `view.ts` init).
13. Inspector panels use standard titles (**Content**, **Email**, **Colors**, **Animation**).
14. Message field renders **`nextora-tiptap-shell`** + **`nextora-tiptap-toolbar`** when `enableRichTextMessage` is true; Tiptap mounts via **`nextora_comment_tiptap_js_config`** (not block `view.js`).
15. Toolbar buttons reuse **`window.nextoraComments`** i18n; formatting matches the comment field.
16. Server sanitizes message HTML with the comment-equivalent allowlist; emails use plain text (`wp_strip_all_tags`).
17. Multiple block instances each get independent Tiptap mounts (matching IDs between `tiptap-mounts.php` and `render.php`).

### 15.16 What not to add (v1)

- Contact Form 7 / WPForms / third-party form plugins
- `admin-ajax.php` handlers
- Standalone `assets/js/contact-form.js` or manual `wp_enqueue_script` for this block
- Global fixed element IDs (`cf_full_name`, `cf_submit_btn`)
- `mytheme/*` namespace or text domain
- Hard-coded English in `aria-label` or email bodies without `__()`
- `outline: none` on inputs without `:focus-visible` replacement
- Hand-edited generated `index.js` / `view.js`
- Second Tiptap bundle or custom toolbar inside `blocks/contact-form/view.ts`
- Visible plain `<textarea>` for Message when `enableRichTextMessage` is true (sync field stays screen-reader-only / `sr-only`)

---

*End of document — Contact Form Block specification v1.2 (Nextora)*
