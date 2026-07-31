# Block: Chart

**Version:** 1.0
**Status:** Planned — implemented as **`nextora/chart`** in [`blocks/chart/`](../../blocks/chart/).
**For:** AI Agent Development

This specification targets the **Nextora theme** block system. Follow [`docs/blocks.md`](../blocks.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**, and rules in [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc) / [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc) when implementing. Do **not** treat this block as a standalone plugin.

---

## 1. Overview

The **Chart** block (`nextora/chart`) renders data visualisations using **Chart.js v4** bundled via esbuild. It supports three chart types with configurable data labels, colours, grid lines, legend, tooltip, and scroll animation.

**Chart types:**

- **Line** — line chart with dots at each data point; data labels display values above each dot
- **Bar** — vertical bar chart; data labels display values above each bar
- **Doughnut** — doughnut (ring) chart; data labels display label + percentage inside or beside each slice

**Design direction:**

- Clean, minimal chart with theme-aligned colours
- Data labels always visible on chart elements (not just on hover)
- Responsive canvas that fills the container width
- GSAP scroll reveal (fade-in) when the chart enters the viewport

**Architecture:** Single dynamic block with a **`dataPoints[]` repeater** (same pattern as [`nextora/counters`](../../blocks/counters/)). No InnerBlocks. Markup from **`render.php`**; Chart.js initialisation from bundled **`view.ts`**.

---

## 2. Theme context

| Item | Value |
|------|--------|
| **Block name** | `nextora/chart` |
| **Title** | Chart |
| **Category** | `design` (content band) |
| **Text domain** | `nextora` |
| **PHP prefix** | `nextora_` |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `types.ts`, `render.php`, `style.css`, `editor.css`, `view.ts` |
| **Build** | `npm run build:blocks` (or `npm run watch`) — do **not** hand-edit `index.js` / `index.asset.php` / `view.js` |
| **Dependencies** | `chart.js` ^4.x, `chartjs-plugin-datalabels` ^2.x — bundled into `view.js` by esbuild |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md).

---

## 3. Chart types

| Type | `chartType` value | Data labels position | Notes |
|------|-------------------|---------------------|-------|
| **Line** | `"line"` | Above each dot (anchor: `end`, align: `top`) | Smooth curve (`tension: 0.3`), filled area below line |
| **Bar** | `"bar"` | Top of each bar (anchor: `end`, align: `top`) | Uniform bar colour |
| **Doughnut** | `"doughnut"` | Inside slice — label + percentage | Cutout `60%`; no axes/scales |

When `showDataLabels` is `false`, the `datalabels` plugin is disabled globally for the chart instance.

---

## 4. Architecture

```
nextora/chart                              ← single dynamic block, no InnerBlocks
├── attributes.chartType                   ← "line" | "bar" | "doughnut"
├── attributes.dataPoints[]                ← repeater (id, label, value)
├── attributes.showDataLabels              ← boolean toggle
├── attributes.showLegend                  ← boolean toggle
├── attributes.legendPosition              ← "top" | "bottom" | "left" | "right"
├── attributes.showTooltip                 ← boolean toggle
├── attributes.chartHeight                 ← canvas height (px)
├── attributes.lineColor                   ← preset slug or custom hex
├── attributes.fillColor                   ← preset slug or custom hex (line/doughnut)
├── attributes.textColor                   ← preset slug or custom hex (ticks, datalabels)
├── attributes.gridColor                   ← preset slug or custom hex
├── attributes.showXGrid                   ← boolean toggle
├── attributes.showYGrid                   ← boolean toggle
├── attributes.showXTickLabels             ← boolean toggle
├── attributes.showYTickLabels             ← boolean toggle
├── attributes.enableScrollAnimation       ← GSAP scroll reveal toggle
├── edit.tsx                               ← InspectorControls + data-points table
├── render.php                             ← canvas + resolved config JSON
├── view.ts                                ← Chart.js init + datalabels + scroll reveal
└── style.css                              ← container, loading/ready, reveal states
```

---

## 5. Inspector panels

| Panel | Contents |
|-------|----------|
| **Data** | Add/remove data points (label + value); chart type selector |
| **Display** | Show data labels, show legend, legend position, show tooltip, chart height |
| **Colors** | Line/bar colour, fill colour, text/tick colour, grid colour |
| **Grid & Axis** | Show X grid, show Y grid, X tick labels, Y tick labels |
| **Animation** | **Animate on scroll** toggle |
| **Advanced** | WordPress block supports (spacing, anchor) |

---

## 6. Attributes schema

### 6.1 Chart type & data

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `chartType` | `string` | `"line"` | SelectControl | `line` \| `bar` \| `doughnut` |
| `dataPoints` | `array` | `[{id, label: "Item 1", value: 50}, {id, label: "Item 2", value: 80}]` | Repeater table | Chart data rows |

### 6.2 Data point object — `dataPoints[]`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stable key (`crypto.randomUUID()` on add) |
| `label` | `string` | yes | X-axis label or slice name |
| `value` | `number` | yes | Y-axis value or slice value |

### 6.3 Display options

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `showDataLabels` | `boolean` | `true` | ToggleControl | Show values on chart elements |
| `showLegend` | `boolean` | `true` | ToggleControl | Show legend |
| `legendPosition` | `string` | `"top"` | SelectControl | `top` \| `bottom` \| `left` \| `right` |
| `showTooltip` | `boolean` | `true` | ToggleControl | Show tooltip on hover |
| `chartHeight` | `number` | `400` | RangeControl (200–800) | Canvas height in px |

### 6.4 Colours

Colours follow the § Custom colour options pattern from [`docs/blocks.md`](../blocks.md):
- Store preset **slugs**, not resolved hex
- `PanelColorSettings` in a **Colors** panel
- Resolve slugs to actual hex in `render.php` for Chart.js (canvas needs real values)

| Attribute | Affects | Empty fallback |
|-----------|---------|----------------|
| `lineColor` | Line stroke / bar fill / doughnut arc | `primary` preset |
| `fillColor` | Area below line / doughnut arc hover | `lineColor` at 15 % opacity |
| `textColor` | Tick labels, data label text | `contrast` preset |
| `gridColor` | X and Y grid lines | `transparent` (no grid visible) |

### 6.5 Grid & axis

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `showXGrid` | `boolean` | `true` | ToggleControl | Show vertical grid lines |
| `showYGrid` | `boolean` | `true` | ToggleControl | Show horizontal grid lines |
| `showXTickLabels` | `boolean` | `true` | ToggleControl | Show X-axis labels |
| `showYTickLabels` | `boolean` | `true` | ToggleControl | Show Y-axis labels |

### 6.6 Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | **Animate on scroll** — standard help text |

---

## 7. Frontend HTML structure

```html
<div
  class="wp-block-nextora-chart nextora-chart nextora-chart--type-line nextora-chart--loading"
  style="--nextora-chart-height: 400px;"
  data-nextora-chart-config='{"type":"line","data":{…},"options":{…}}'
  data-nextora-scroll-reveal="1"
>
  <div class="nextora-chart__canvas-wrapper" style="height: var(--nextora-chart-height);">
    <canvas class="nextora-chart__canvas"></canvas>
  </div>
</div>
```

**PHP requirements:**

- `declare(strict_types=1);`
- `get_block_wrapper_attributes()` on section root
- Resolve colour preset slugs → actual hex values (Chart.js canvas needs real colour strings)
- Output full Chart.js config as JSON in `data-nextora-chart-config`
- `data-nextora-scroll-reveal="1"` only when `enableScrollAnimation` is `true`
- Enqueue `view.js` only when block present (block.json `viewScript`)

---

## 8. Data labels specification

### 8.1 Plugin

Uses **`chartjs-plugin-datalabels` v2** (MIT, bundled into `view.js`). Registered globally via `Chart.register(ChartDataLabels)`.

### 8.2 Per-chart-type behaviour

| Chart type | `anchor` | `align` | `formatter` |
|------------|----------|---------|-------------|
| **Line** | `"end"` | `"top"` | `(v: number) => v.toLocaleString('vi-VN')` |
| **Bar** | `"end"` | `"top"` | `(v: number) => v.toLocaleString('vi-VN')` |
| **Doughnut** | `"center"` | `"center"` | `(v: number, ctx: any) => v > 0 ? \`${ctx.chart.data.labels[ctx.dataIndex]}\n${v.toLocaleString('vi-VN')}\` : ''` |

### 8.3 Styling

- `color`: matches `textColor` (resolved hex)
- `font.weight`: `600`
- `font.size`: `12`
- `offset`: `6` (line/bar), `0` (doughnut)
- `display`: `"auto"` — auto-hide when overlapping

When `showDataLabels` is `false`, the entire `datalabels` plugin config sets `display: false`.

---

## 9. Editor behaviour

| Topic | Rule |
|-------|------|
| Chart in editor | **Static preview** — shows data points in a styled list with a colour swatch and bar visualisation |
| Chart type switch | Preview updates immediately (list → bar visualisation, doughnut preview unavailable) |
| Data point editing | Table of rows in **Data** panel — each row has Label (`TextControl`) and Value (`NumberControl`) inline |
| Add / remove | Buttons at bottom of Data panel |
| `chartType` help | Line: *Line chart with dots and data labels.* Bar: *Vertical bar chart with data labels.* Doughnut: *Ring chart with centred labels.* |
| No data | If `dataPoints` is empty (0 rows), show placeholder with *Add data points to preview the chart* |

---

## 10. Accessibility

- **Canvas fallback:** `canvas` element includes `role="img"` and `aria-label` describing the chart
- **Data table:** PHP outputs a visually-hidden `<table>` of data points (`.screen-reader-text`) as a screen-reader fallback
- **Colour:** Data labels provide a non-colour way to identify values
- **Motion:** Honour `prefers-reduced-motion` in CSS and TS — skip scroll reveal and Chart.js animation
- **i18n:** all `aria-label` and chart labels use text domain **`nextora`**

---

## 11. Responsive

| Viewport | Behaviour |
|----------|-----------|
| **Desktop** (≥ 768 px) | Full chart with data labels enabled |
| **Mobile** (< 768 px) | Data labels hidden (`display: false` on datalabels plugin) to avoid clutter; legend moved to `bottom` |
| **All** | Canvas responsive — `maintainAspectRatio: false`, parent has fixed `height` and `width: 100 %` |

Chart.js `responsive: true` handles resize automatically.

---

## 12. Acceptance criteria

1. Block registered as **`nextora/chart`** with **`textdomain` `nextora`**.
2. Three chart types work: `line` (with dots + fill), `bar`, and `doughnut`.
3. Data labels display values on every chart element when `showDataLabels` is `true`.
4. Data labels use `vi-VN` locale formatting (thousands separator).
5. All colour attributes accept both theme presets and custom hex; resolved to actual hex in PHP for Chart.js.
6. Grid lines, tick labels, legend, and tooltip are individually toggleable.
7. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and Chart.js startup animation.
8. Multiple chart instances on one page init independently (no ID collision; `canvas` gets unique `id`).
9. Screen-reader fallback table is present but visually hidden.
10. Chart renders at correct height; responsive on window resize.

---

## 13. What not to add (v1)

- Multi-dataset support (multiple lines/bars per chart)
- Pie chart variant (use doughnut with `cutout: 0` if needed)
- Real-time / auto-refreshing data
- CSV / JSON import
- CDN Chart.js or runtime script loading
- Hand-edited `index.js` / `view.js` artifacts
- Chart.js animation config panel (uses sensible defaults)

---

## 14. Closest reference blocks

| Need | Block / doc |
|------|----------------|
| Data repeater + PHP render | [`blocks/counters/`](../../blocks/counters/), [`blocks/team-section/`](../../blocks/team-section/) |
| Canvas + JS init pattern | [`blocks/google-maps/`](../../blocks/google-maps/) |
| Scroll reveal toggle | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |
| Colour preset → hex resolution | [`blocks/team-section/render.php`](../../blocks/team-section/render.php) (`nextora_team_section_resolve_color`) |
| Loading/ready states | [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/) |
