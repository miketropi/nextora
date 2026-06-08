# Google Maps Block

**Version:** 1.0 (Nextora planning alignment)  
**For:** AI Agent Development  
**Status:** Implemented as **`nextora/google-maps`** in [`blocks/google-maps/`](../../blocks/google-maps/). When changing behavior, follow **§15** and [`docs/blocks.md`](../blocks.md); do not copy §1–§8 generic patterns as-is.

§1–§8 below are the **product / UX spec** (reference design and behavior). **§15** maps that spec to the Nextora theme (`blocks/`, `inc/features/`, `docs/blocks.md`, Cursor rules/skills). **Do not implement** from §1–§8 alone — follow §15 when building.

---

## Theme context (Nextora)

| Item | Generic / legacy spec (§1–§8) | Nextora target |
|------|--------------------------------|----------------|
| Block name | `mytheme/google-maps` | **`nextora/google-maps`** |
| Text domain | `mytheme` | **`nextora`** |
| Registration | Manual `register_block_type` in `functions.php` | **[`blocks/blocks.php`](../../blocks/blocks.php)** — auto `register_block_type` per folder |
| Build | Hand-edited `index.js`, standalone `assets/js/google-maps.js` | **esbuild** [`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs) → `index.js` / `index.asset.php` / `view.js` |
| Front end | `render.php` + theme-level script enqueue | **`render.php`** + **`view.ts`** bundled as **`viewScript`** in `block.json` (API mode only; iframe mode needs no runtime JS) |
| Script enqueue | Procedural code in `functions.php` or `inc/google-maps.php` | Feature slice **`inc/features/google-maps/`** required from [`functions.php`](../../functions.php) |
| API key option | `mytheme_google_maps_api_key` | **`nextora_google_maps_api_key`** — read via **`nextora_google_maps_get_api_key()`** with filter **`nextora_google_maps_api_key`** |
| JS global config | `MythemeMapConfig` | **`window.nextoraGoogleMaps`** (localized from PHP; mirror [`window.nextoraSpotlight`](../../docs/spotlight-search.md)) |
| Init callback | `window.mythemeInitGoogleMaps` | **`window.nextoraInitGoogleMaps`** — invoked by Google Maps async loader; defined in **`view.ts`** |
| CSS classes | `wp-block-mytheme-google-maps`, `.mytheme-map-api-canvas` | **`wp-block-nextora-google-maps`** + BEM **`nextora-google-maps__*`** |
| PHP helpers | `mytheme_page_has_map_api_mode()` | **`nextora_google_maps_page_has_api_mode()`** in **`inc/features/google-maps/instances.php`** |
| Skills / rules | — | **nextora-add-theme-block**, **nextora-theme-styling-and-tokens**, [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc), [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc) |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), [`docs/accessibility.md`](../accessibility.md).

---

## 1. Overview

This document specifies a Gutenberg block that renders a **full-width interactive Google Map** with two selectable embed modes:

| Mode | Description |
|------|-------------|
| **Iframe** | Embeds Google Maps via the Maps Embed API (`/maps/embed/v1/place`) inside an `<iframe>`. Requires a site-wide API key (see §4). |
| **API** | Uses the Google Maps JavaScript API for programmatic control (custom markers, styled maps, directions). Requires the same site-wide API key. |

The block is **full-width only** — no card overlay, no sidebar column beside the map. The map fills its container horizontally; height is controlled by the **`mapHeight`** attribute.

**No map plugin dependency** — WP Google Maps, MapPress, etc. must not be required. Embed markup, script loading, and API key handling live in the theme.

---

## 2. Visual Design Reference

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                  [ Google Map — full width ]                 │
│                                                              │
│   (map tiles, markers, controls rendered inside here)        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Design notes (reference mock — map to presets in §15):**

| Element | Mock reference | Nextora default |
|---------|----------------|-----------------|
| Map width | `100%` of block wrapper | `width: 100%` on `.nextora-google-maps`; honor `align: wide` / `full` via `get_block_wrapper_attributes()` |
| Map height | Configurable px (default `450`) | Inline `--nextora-google-maps-height` or `style="height: …px"` from **`mapHeight`** attribute — never hard-code `450px` in CSS |
| Overlays | None | No overlaid cards, text bands, or CTAs on the map surface |
| Editor preview | Placeholder with mode label + address | Placeholder uses **`var(--wp--preset--color--surface)`** / contrast tokens — not raw `#e8eaed` |
| Controls | Zoom + street view toggles (API mode) | Respect **`showControls`**; when off, hide zoom and street-view UI |

In the block editor (`wp-admin`), show a **non-interactive placeholder** with the selected mode label and address/coordinates — not a live Google Map in the canvas (avoids API key exposure and editor CSP issues).

---

## 3. Block Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `mapMode` | `string` | `"iframe"` | Embed mode: `"iframe"` or `"api"` |
| `address` | `string` | `""` | Human-readable address or place name |
| `lat` | `number` | `21.0285` | Latitude (API mode + iframe fallback when address empty) |
| `lng` | `number` | `105.8542` | Longitude (API mode + iframe fallback when address empty) |
| `zoom` | `number` | `15` | Zoom level (1–20) |
| `mapHeight` | `number` | `450` | Map container height in pixels (min 200, max 1200 in editor) |
| `showControls` | `boolean` | `true` | Show/hide zoom buttons and street view control |
| `markers` | `array` | `[]` | Marker objects (**API mode only**) |
| `mapStyleJson` | `string` | `""` | Custom map style JSON string (**API mode only**) |
| `showDirections` | `boolean` | `false` | Draw driving route between first and last marker (**API mode**, requires ≥ 2 markers) |
| `enableScrollAnimation` | `boolean` | `true` | Standard scroll reveal toggle ([`docs/blocks.md`](../blocks.md)) |

The Google Maps API key is **never stored per block**. It is read once from theme settings (§15.5) via `nextora_google_maps_get_api_key()`.

### 3.1 Marker object schema

Each item in the `markers` array:

```json
{
  "id": "marker_1",
  "lat": 21.0285,
  "lng": 105.8542,
  "title": "Our Office",
  "infoHtml": "<strong>Our Office</strong><br>123 Example Street",
  "iconUrl": ""
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier for this marker |
| `lat` | `number` | Yes | Marker latitude |
| `lng` | `number` | Yes | Marker longitude |
| `title` | `string` | Yes | Tooltip text on hover |
| `infoHtml` | `string` | No | HTML for the info popup window (sanitized server-side before output) |
| `iconUrl` | `string` | No | URL to a custom marker icon. Empty = default pin |

---

## 4. Embed modes

### 4.1 Iframe mode

Iframe `src` is built from:

```text
https://www.google.com/maps/embed/v1/place
  ?key={API_KEY}
  &q={address OR lat,lng}
  &zoom={zoom}
  [&zoomControl=0&streetViewControl=0 when showControls is false]
```

| Condition | `q` parameter value |
|-----------|---------------------|
| `address` is not empty | `urlencode( address )` |
| `address` is empty | `{lat},{lng}` |

**Note:** The Embed API (`/maps/embed/v1/place`) requires a valid API key with the **Maps Embed API** enabled in Google Cloud Console. This is separate from the Maps JavaScript API but can be the same key if both APIs are enabled.

When the API key is missing, render a translatable fallback notice inside the block wrapper (do not output a broken iframe).

### 4.2 API mode

- Markup: empty canvas div **`nextora-google-maps__canvas`** inside the block root.
- Front-end init: **`view.ts`** reads `data-*` attributes, constructs `google.maps.Map`, renders markers and optional directions.
- Google Maps JS SDK is enqueued **only** when at least one API-mode block exists on the current singular view (§15.6).

### 4.3 Directions (API mode)

When **`showDirections`** is `true` and **`markers.length >= 2`**:

- Origin: first marker (`markers[0]`)
- Destination: last marker (`markers[markers.length - 1]`)
- Travel mode: `google.maps.TravelMode.DRIVING`
- Requires **Directions API** enabled in Google Cloud Console

---

## 5. Custom map style (API mode)

The editor sidebar exposes a **Custom style JSON** field bound to **`mapStyleJson`**.

| Rule | Detail |
|------|--------|
| **Validation** | Before saving in the editor, `JSON.parse()` the value; on error show inline help and do not persist invalid JSON |
| **Front end** | Escaped JSON on `data-nextora-google-maps-style`; `view.ts` parses and passes to `google.maps.Map` as `styles` |
| **Iframe mode** | Attribute has no effect — ignore in `render.php` when `mapMode === 'iframe'` |

---

## 6. Editor controls (inspector)

Use standard panel titles from [`docs/blocks.md`](../blocks.md). Do not invent one-off panel names.

| Panel | Controls |
|-------|----------|
| **Settings** | `RadioControl` — Map mode: Iframe / API; `TextControl` — Address / location; `RangeControl` — Zoom (1–20); `NumberControl` — Map height (px, min 200, max 1200); `ToggleControl` — Show map controls |
| **Markers** | Visible only when `mapMode === 'api'`: add/remove marker rows (`title`, lat, lng, info HTML, icon URL); `TextareaControl` — Custom style JSON; `ToggleControl` — Show directions (visible only when `markers.length >= 2`) |
| **Animation** | **Animate on scroll** — `enableScrollAnimation` + standard help from [`docs/blocks.md`](../blocks.md) |

Help text pattern: one line per control explaining what it affects and that empty values fall back to theme defaults where applicable.

---

## 7. Google Cloud Console requirements

| API to enable | Required for |
|---------------|--------------|
| **Maps Embed API** | Iframe mode (`/maps/embed/v1/place`) |
| **Maps JavaScript API** | API mode (JS SDK) |
| **Directions API** | Route / directions feature in API mode |
| **Geocoding API** | Optional v2: resolving address string to lat/lng server-side |

All enabled under one project. The same API key can cover all of the above if each API is enabled.

**Allowed referrers** must be set in the API key restrictions to the site domain to prevent unauthorized usage.

Document this in site-owner-facing help (Customizer field description or theme docs) — not in committed JS.

---

## 8. Functional rules and constraints

| Rule | Detail |
|------|--------|
| **Never hardcode API key** | Key always from `nextora_google_maps_get_api_key()` — never in block attributes, `block.json`, or source TS/JS |
| **Two modes, one block** | `mapMode` switches behavior. Do not create separate blocks for iframe vs API |
| **Iframe needs API key** | Maps Embed API requires a key. Do not use legacy keyless embed URL formats |
| **Full-width layout** | No card overlay, no text column beside the map. Container is always 100% wide within alignment |
| **Height is configurable** | Always read **`mapHeight`**. Never hardcode `450px` in templates or CSS defaults |
| **Markers are API-mode only** | Ignore `markers` in iframe render |
| **Style JSON is API-mode only** | Ignore `mapStyleJson` in iframe render |
| **Directions only with 2+ markers** | Only enable directions UI when `markers.length >= 2` and `showDirections === true` |
| **Load JS API conditionally** | Enqueue `maps.googleapis.com/maps/api/js` only when the page has at least one API-mode block |
| **Accessible iframe** | Always include translatable `title` on `<iframe>`; `loading="lazy"` |
| **i18n** | Text domain **`nextora`** for all user-visible and assistive copy |
| **Quality gate** | `npm run lint:php:all`, `npm run typecheck`, `npm run build:blocks` before shipping |

---

## 9. Glossary

| Term | Meaning |
|------|---------|
| `mapMode` | Selects embed strategy: `"iframe"` or `"api"` |
| `Embed API` | `maps.googleapis.com/maps/embed/v1` — iframe embed, needs API key |
| `JS API` | `maps.googleapis.com/maps/api/js` — client-side SDK for markers, styles, directions |
| `marker` | A pin at lat/lng with optional popup |
| `infoHtml` | HTML string shown in an info window when a marker is clicked |
| `mapStyleJson` | JSON array of style rules (e.g. from Snazzy Maps) applied in API mode |
| `showDirections` | When true, draws a driving route between first and last marker |
| `nextoraInitGoogleMaps` | Global callback invoked after the Google Maps script loads |
| `nextora_google_maps_page_has_api_mode()` | Returns true when the current singular post contains at least one API-mode map block |

---

## 15. Nextora implementation

**Follow this section when generating or modifying code.** §1–§9 describe *what* to build; §15 describes *how* in this theme.

### 15.1 Identity and registration

| Spec | Nextora |
|------|---------|
| `mytheme/google-maps` | **`nextora/google-maps`** |
| `textdomain` `mytheme` | **`nextora`** |
| Category | **`design`** (content band — pairs with `nextora/contact-form`, `nextora/call-to-action`) |
| Plugin / standalone JS | **None** — [`blocks/blocks.php`](../../blocks/blocks.php) |

Scaffold:

```bash
npm run gen -- --name=google-maps --ns=nextora --category=design
```

Then extend generated files per §15.3–§15.14.

### 15.2 Architecture

Single dynamic block — no InnerBlocks, no child blocks.

| Layer | Responsibility |
|-------|----------------|
| **`blocks/google-maps/`** | Markup (`render.php`), editor (`edit.tsx`), `types.ts`, styles, `view.ts` (API mode init) |
| **`inc/features/google-maps/`** | API key accessor, block-instance collector, conditional Google SDK enqueue, filters |
| **`inc/assets/assets.php`** | Optional: merge `window.nextoraGoogleMaps` defaults if shared with other features (prefer feature-local localize on the block view handle) |

Require the feature bootstrap from [`functions.php`](../../functions.php) after dependencies, same pattern as [`inc/features/contact-form/load.php`](../../inc/features/contact-form/load.php):

```php
require_once NEXTORA_DIR . '/inc/features/google-maps/load.php';
```

Update [`inc/features/README.md`](../../inc/features/README.md) with the new row when implemented.

### 15.3 File structure

```text
blocks/google-maps/
├── block.json
├── index.tsx              → built index.js
├── edit.tsx
├── types.ts               → MapMode, MarkerItem, block attributes
├── render.php
├── style.css
├── editor.css
├── view.ts                → built view.js (API mode map init)
└── index.asset.php        → generated

inc/features/google-maps/
├── load.php               → require siblings
├── api-key.php            → nextora_google_maps_get_api_key()
├── instances.php          → parse_blocks collector + nextora_google_maps_page_has_api_mode()
└── enqueue.php            → conditional maps.googleapis.com script + wp_localize_script
```

**Do not add:**

- `assets/js/google-maps.js`
- `inc/google-maps.php` at theme root
- Hand-edited `blocks/google-maps/index.js` or `view.js`

### 15.4 `block.json`

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "nextora/google-maps",
  "title": "Google Maps",
  "category": "design",
  "description": "Embeds a Google Map via iframe or JavaScript API with full editor controls.",
  "keywords": ["map", "google", "location", "nextora"],
  "textdomain": "nextora",
  "icon": "location-alt",
  "supports": {
    "html": false,
    "align": ["wide", "full"],
    "anchor": true,
    "spacing": {
      "margin": true,
      "padding": true
    }
  },
  "attributes": {
    "mapMode": {
      "type": "string",
      "default": "iframe",
      "enum": ["iframe", "api"]
    },
    "address": { "type": "string", "default": "" },
    "lat": { "type": "number", "default": 21.0285 },
    "lng": { "type": "number", "default": 105.8542 },
    "zoom": { "type": "number", "default": 15 },
    "mapHeight": { "type": "number", "default": 450 },
    "showControls": { "type": "boolean", "default": true },
    "markers": { "type": "array", "default": [] },
    "mapStyleJson": { "type": "string", "default": "" },
    "showDirections": { "type": "boolean", "default": false },
    "enableScrollAnimation": { "type": "boolean", "default": true }
  },
  "editorScript": "file:./index.js",
  "editorStyle": "file:./editor.css",
  "style": "file:./style.css",
  "viewScript": "file:./view.js",
  "render": "file:./render.php"
}
```

Run **`npm run build:blocks`** after editing `index.tsx`, `edit.tsx`, or `view.ts`.

### 15.5 API key management (`inc/features/google-maps/api-key.php`)

| Legacy | Nextora |
|--------|---------|
| `get_option( 'mytheme_google_maps_api_key' )` | **`get_option( 'nextora_google_maps_api_key', '' )`** |
| Direct reads in render | **`nextora_google_maps_get_api_key(): string`** wrapping option + filter |

```php
function nextora_google_maps_get_api_key(): string {
    $key = get_option( 'nextora_google_maps_api_key', '' );
    return (string) apply_filters( 'nextora_google_maps_api_key', $key );
}
```

**v1 storage:** site owners set the option via **`update_option()`** in a child theme, a small admin settings snippet, or a future theme settings UI. Do **not** add a per-block API key attribute.

**Editor:** never localize the secret key into the block editor bundle. Editor shows placeholder only; live maps render on the front end.

### 15.6 Script enqueue (`inc/features/google-maps/enqueue.php`)

| Legacy `functions.php` closure | Nextora |
|--------------------------------|---------|
| `has_block( 'mytheme/google-maps' )` + manual `assets/js/google-maps.js` | Block **`viewScript`** auto-enqueued when block renders; feature slice enqueues **Google Maps SDK** only when needed |
| `MythemeMapConfig` | **`window.nextoraGoogleMaps`** on the block view handle |

Hook **`wp_enqueue_scripts`** (priority after block registration):

1. If **`! nextora_google_maps_page_has_api_mode()`** on singular views, skip Google SDK (iframe-only pages need no external JS).
2. When API mode exists, ensure the block **`view.js`** handle is enqueued (mirror [`nextora_contact_form_enqueue_view_script()`](../../blocks/contact-form/render.php) fallback if dynamic render skips auto-enqueue).
3. `wp_localize_script( $view_handle, 'nextoraGoogleMaps', array( 'apiKey' => nextora_google_maps_get_api_key(), … ) )` — **apiKey used only on front end** for SDK URL query arg; do not log or expose in editor.
4. Register Google SDK with `callback=nextoraInitGoogleMaps`, `loading=async`, dependency on the block view handle.

**Instance detection** — `inc/features/google-maps/instances.php`:

```php
function nextora_google_maps_page_has_api_mode( ?WP_Post $post = null ): bool {
    // parse_blocks() recursive walk; true when any nextora/google-maps has mapMode === 'api'
}
```

Also expose **`nextora_google_maps_get_instances( ?WP_Post $post )`** for ordered block list (multi-instance pages).

### 15.7 `render.php`

Requirements:

1. **`declare( strict_types=1 );`** and standard `@var` docblock (see [`blocks/counters/render.php`](../../blocks/counters/render.php)).
2. Root wrapper via **`get_block_wrapper_attributes()`** — merge classes `nextora-google-maps`, mode modifier `nextora-google-maps--mode-iframe` / `--mode-api`, optional `nextora-google-maps--loading` until JS ready (API mode).
3. When **`enableScrollAnimation`**, add **`data-nextora-scroll-reveal="1"`** on the root ([`docs/blocks.md`](../blocks.md)).
4. Height from **`mapHeight`**: set `--nextora-google-maps-height: {N}px` and/or inline `style="height: …"`.
5. Pass config via **`data-*`** attributes (escaped):

| Attribute | Purpose |
|-----------|---------|
| `data-nextora-google-maps="1"` | Root marker for `view.ts` query |
| `data-nextora-google-maps-mode` | `iframe` \| `api` |
| `data-nextora-google-maps-lat` / `-lng` / `-zoom` | Map center |
| `data-nextora-google-maps-show-controls` | `true` \| `false` |
| `data-nextora-google-maps-markers` | `wp_json_encode()` of sanitized marker array |
| `data-nextora-google-maps-style` | Escaped JSON string |
| `data-nextora-google-maps-show-directions` | `true` \| `false` |

6. **Iframe branch:** build Embed API URL with `nextora_google_maps_get_api_key()`. If key empty, output **`nextora-google-maps__fallback`** with `esc_html__( '…', 'nextora' )` — not a broken iframe.
7. **Iframe `title`:** `esc_attr__( 'Map showing %s', 'nextora' )` with address or coordinates — never hard-coded English `'Google Map'`.
8. **API branch:** output **`<div class="nextora-google-maps__canvas" role="img" aria-label="…">`** — translatable label from address or lat/lng.
9. **Marker `infoHtml`:** run through **`wp_kses()`** with a small allowlist (`strong`, `em`, `br`, `a` with `href`) before JSON encoding.
10. Call **`nextora_google_maps_enqueue_view_script()`** (or equivalent) when API mode so `view.js` is guaranteed on dynamic render.

### 15.8 Front-end script (`view.ts`)

| Legacy `assets/js/google-maps.js` | Nextora `view.ts` |
|-----------------------------------|-------------------|
| IIFE + `DOMContentLoaded` | **`initGoogleMapsRoot( root: HTMLElement )`**; query `[data-nextora-google-maps="1"]:not([data-nextora-google-maps-inited="1"])` |
| Reads `block.dataset.mode` | Reads `data-nextora-google-maps-*` attributes |
| Global callback only | Define **`window.nextoraInitGoogleMaps`** to call idempotent init for all pending roots |
| No init guard | Set **`data-nextora-google-maps-inited="1"`** after successful map construction |
| No loading state | Root **`nextora-google-maps--loading`** → **`--ready`** after init; reserve height in CSS |

**API mode flow:**

1. Skip roots where `data-nextora-google-maps-mode !== 'api'`.
2. Wait for `google.maps` (callback already fired or poll briefly).
3. Parse markers JSON; parse style JSON (empty → `[]`).
4. Construct map on **`.nextora-google-maps__canvas`**.
5. Add markers + optional info windows.
6. If **`showDirections`** and `markers.length >= 2`, run DirectionsService / DirectionsRenderer (§4.3).
7. On failure (missing key, SDK error), add **`nextora-google-maps--error`** and show fallback text from localized strings — do not throw uncaught errors.

**Scroll reveal:** when `data-nextora-scroll-reveal="1"`, use GSAP + ScrollTrigger with `once: true`; **no animation** when `prefers-reduced-motion: reduce` (pattern: [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts)).

**Iframe mode:** `view.ts` may no-op for iframe-only roots (no map JS required). Still safe to load the bundle when any block instance exists.

Build: **`npm run build:blocks`**. Never edit `view.js` by hand.

### 15.9 Editor (`edit.tsx`)

| Panel | Controls |
|-------|----------|
| **Settings** | Map mode, address, zoom, height, show controls |
| **Markers** | API-mode-only marker repeater, style JSON, show directions |
| **Animation** | **Animate on scroll** — `enableScrollAnimation` |

Implementation notes:

- Source in **`edit.tsx`**; entry **`index.tsx`** registers block with `save: () => null`.
- Validate **`mapStyleJson`** on change with try/catch `JSON.parse`.
- Marker repeater: generate stable **`id`** per row (`marker_${Date.now()}` or UUID pattern from sibling blocks).
- Canvas preview: static placeholder div with Dashicon **`location-alt`**, mode label, truncated address — class **`nextora-google-maps--editor-placeholder`**.
- Optional **`ServerSideRender`** for front-end parity — if used, refresh on attribute change.
- Align control labels and help strings with **Settings** / **Markers** / **Animation** panels in [`docs/blocks.md`](../blocks.md).

### 15.10 Styles (`style.css` + `editor.css`)

| Legacy | Nextora |
|--------|---------|
| `#e8eaed` placeholder | `var(--wp--preset--color--surface)` / contrast tokens |
| `.mytheme-map-api-canvas` | **`.nextora-google-maps__canvas`** |
| Hard-coded heights | **`height: var(--nextora-google-maps-height, 450px)`** on root |

**Front end (`style.css`):**

```css
.nextora-google-maps {
  --nextora-google-maps-height: 450px;
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  height: var(--nextora-google-maps-height);
  line-height: 0;
}

.nextora-google-maps__iframe,
.nextora-google-maps__canvas {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.nextora-google-maps--loading .nextora-google-maps__canvas {
  opacity: 0.85;
}

.nextora-google-maps--ready .nextora-google-maps__canvas {
  opacity: 1;
}
```

**Editor (`editor.css`):** placeholder flex layout using preset colors; match block wrapper class **`wp-block-nextora-google-maps`**.

Respect **`prefers-reduced-motion: reduce`** — no essential map content hidden behind JS; iframe mode works without JS.

### 15.11 Class and CSS variable naming

| Spec | Nextora |
|------|---------|
| `wp-block-mytheme-google-maps` | **`wp-block-nextora-google-maps`** + **`nextora-google-maps`** |
| `mytheme-map-api-canvas` | **`nextora-google-maps__canvas`** |
| — | **`--nextora-google-maps-height`** for height override |
| — | Modifiers: **`nextora-google-maps--mode-api`**, **`--loading`**, **`--ready`**, **`--error`**, **`--editor-placeholder`** |

### 15.12 Accessibility

Required on first commit ([`docs/accessibility.md`](../accessibility.md), [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc)):

| Item | Implementation |
|------|----------------|
| Iframe | Translatable **`title`**; `loading="lazy"`; `referrerpolicy="no-referrer-when-downgrade"` |
| API canvas | **`role="img"`** + **`aria-label`** describing location (from address or coordinates) |
| Fallback notice | Visible text when API key missing — not color-only |
| i18n | All `title`, `aria-label`, fallback copy via **`nextora`** domain (`esc_attr__()`, `esc_html__()`) |
| Motion | Scroll reveal off under `prefers-reduced-motion: reduce` |
| Focus | If interactive controls are added later, use `:focus-visible` from shared form/button CSS — never `outline: none` without replacement |

Info window HTML is author-controlled; keep allowlist tight in PHP before encoding to `data-*`.

### 15.13 Extensibility hooks (plan)

| Hook | Purpose |
|------|---------|
| `nextora_google_maps_api_key` | Filter API key string |
| `nextora_google_maps_embed_url` | Filter iframe `src` before output |
| `nextora_google_maps_map_options` | Filter JS map options array (API mode) |
| `nextora_google_maps_marker_kses_allowed_html` | Filter allowlist for marker `infoHtml` |
| `nextora_google_maps_wrapper_attributes` | Filter `get_block_wrapper_attributes()` array |

### 15.14 Build and quality

| Step | Command |
|------|---------|
| Block TS/CSS | `npm run build:blocks` or `npm run watch` |
| PHP | `npm run lint:php:all` after `render.php` and `inc/features/google-maps/**` |
| Types | `npm run typecheck` for `edit.tsx` / `view.ts` / `types.ts` |
| CI parity | `npm run precommit` or `npm run ci` before PR |

Never commit hand-edited `index.js`, `index.asset.php`, or `view.js`.

When implemented, add a row to the **Reference blocks** table in [`docs/blocks.md`](../blocks.md).

### 15.15 Closest reference blocks

| Need | Block / doc |
|------|-------------|
| Dynamic `render.php` + inspector repeaters | [`blocks/counters/`](../../blocks/counters/) |
| Feature slice + conditional enqueue | [`inc/features/contact-form/`](../../inc/features/contact-form/), [`inc/features/spotlight-search/`](../../inc/features/spotlight-search/) |
| `view.ts` init guards + loading classes | [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts) |
| Scroll reveal toggle | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |
| View script enqueue fallback on dynamic render | [`blocks/contact-form/render.php`](../../blocks/contact-form/render.php) |
| Color / token resolve helper | [`blocks/counters/render.php`](../../blocks/counters/render.php) |

### 15.16 Acceptance criteria (Nextora)

1. Block registered as **`nextora/google-maps`** with **`textdomain` `nextora`**.
2. API key read only via **`nextora_google_maps_get_api_key()`** — never in block attributes or editor bundle.
3. Iframe mode uses Maps Embed API URL with key; missing key shows translatable fallback — not a broken iframe.
4. API mode initializes via bundled **`view.ts`** / `view.js` — no `assets/js/google-maps.js`.
5. Google Maps JS SDK enqueued **only** when the page has at least one API-mode instance.
6. Markup uses **`get_block_wrapper_attributes()`**, BEM **`nextora-google-maps__*`**, and standard **`data-nextora-*`** init attributes.
7. Script loading / instance detection in **`inc/features/google-maps/`** — not loose code in `functions.php`.
8. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal.
9. Inspector panels use standard titles (**Settings**, **Markers**, **Animation**).
10. All user-facing and assistive strings use **`nextora`** i18n.
11. **`npm run lint:php:all`** and **`npm run typecheck`** pass.
12. Multiple block instances on one page each init independently (per-root `view.ts` init + unique wrapper ids if needed).
13. Marker `infoHtml` sanitized server-side before JSON output.
14. **`npm run build:blocks`** run; no hand-edited generated JS.

### 15.17 What not to add (v1)

- WP Google Maps / third-party map plugins as dependencies
- `assets/js/google-maps.js` or manual theme-level enqueue for this block (beyond Google SDK in feature slice)
- Per-block API key attributes
- `mytheme/*` namespace or text domain
- Hard-coded English in `aria-label`, iframe `title`, or fallback notices without `__()`
- Legacy keyless Google iframe embed URLs (conflicts with Embed API requirement in §4.1)
- Hand-edited generated `index.js` / `view.js`
- Live interactive Google Map in the block editor canvas (API key + CSP risk)
- Card overlays, sidebar columns, or CTAs baked into this block (out of scope)

---

*End of document — Google Maps Block specification v1.0 (Nextora)*
