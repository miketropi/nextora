# Scroll animations (class-driven GSAP)

Utility-class scroll reveals for **any** Gutenberg block — no per-block JavaScript. Add classes under **Advanced → Additional CSS class(es)** and optional `data-*` attributes on the block wrapper (HTML block or `render.php`).

Source: `resources/ts/lib/scroll-animations/` (bundled in `assets/js/main.js` via `initScrollAnimations()`). Styles: `resources/css/modules/components/scroll-animations.css`.

## Animation classes

| Class | Effect |
|-------|--------|
| `animation-fade-in` | Fade in |
| `animation-fade-in-up` | Fade + move up |
| `animation-fade-in-down` | Fade + move down |
| `animation-fade-in-left` | Fade + move from left |
| `animation-fade-in-right` | Fade + move from right |
| `animation-zoom-in` | Fade + scale up |
| `animation-zoom-out` | Fade + scale down |
| `animation-fade-list-grid` | Each `ul > li` fades in up (`animation-fade-in-up`) when **that item** enters the viewport |
| `animation-inner-fade` | Each **direct child** (`> p`, `> div`, `> h4`, …) fades in up when it enters the viewport |
| `animation-parallax` | Vertical parallax while scrolling (use with `data-parallax-speed`) |
| `animation-image-clip-reveal` | Image wipe reveal via `clip-path` (targets nested `img`, or the `img` itself) |
| `animation-text-reveal-words` | Split heading into words; stagger fade + slide in on scroll |
| `animation-text-reveal-chars` | Split heading into characters; stagger fade + slide in on scroll |
| `animation-text-reveal-chars-rise` | Characters rise in with perspective + `back.out` easing |
| `animation-text-reveal-chars-scrub` | Characters brighten and slide in while scrolling (scrubbed) |
| `animation-text-typewriter` | Character-by-character typewriter with blinking caret on scroll (inspired by [MiMo Code](https://mimo.xiaomi.com/coder) hero subtitle) |

## Image & text reveal presets

These map from legacy Elementor utility classes (`at-animation-*`) to theme-native names. Add the class on a **Heading**, **Image**, or **Group** block wrapper via **Advanced → Additional CSS class(es)**.

| Class | Effect | Default timing |
|-------|--------|----------------|
| `animation-image-clip-reveal` | Horizontal clip-path wipe on `img` | `duration: 1.5`, `ease: power2.out`, trigger `top 90%` |
| `animation-text-reveal-words` | Word stagger, slide from right | `duration: 1`, `delay: 0.5`, `stagger: 0.05`, `distance: 20` |
| `animation-text-reveal-chars` | Character stagger, slide from right | `duration: 1`, `delay: 0.1`, `stagger: 0.03`, `distance: 20`, `ease: power2.out` |
| `animation-text-reveal-chars-rise` | 3D-style character rise | `duration: 1`, `stagger: 0.02`, `distance: 50`, `ease: back.out(1.7)` |
| `animation-text-reveal-chars-scrub` | Scroll-scrubbed character reveal | `duration: 0.7`, `stagger: 0.2`, scrub between `top 92%` → `top 60%` |
| `animation-text-typewriter` | Typewriter print + caret | `delay: 0.35`, `stagger: 0.055` (seconds per character), trigger `top 85%` |

All presets honor `data-delay`, `data-duration`, `data-ease`, `data-stagger`, and `data-distance` when set on the same element.

`animation-text-typewriter` uses `data-delay` as the pre-type pause (default `0.35`s) and `data-stagger` as per-character cadence in seconds (default `0.055` ≈ 55ms, matching MiMo). Text wraps naturally to the container width. On viewports ≤700px or when reduced motion is preferred, the full line is shown immediately.

### Image clip reveal

Put the class on an **Image** block or a **Group/Cover** wrapper that contains an `img`:

```html
<!-- wp:image {"className":"animation-image-clip-reveal"} -->
<figure class="wp-block-image animation-image-clip-reveal">
  <img src="…" alt="…" />
</figure>
<!-- /wp:image -->
```

### Text reveal (headings)

Put the class on the **Heading** block (not a parent Group). Text is split into spans at runtime — no GSAP SplitText plugin required.

```html
<!-- wp:heading {"className":"animation-text-reveal-chars"} -->
<h2 class="wp-block-heading animation-text-reveal-chars">Animated headline</h2>
<!-- /wp:heading -->
```

For scrubbed text, use `animation-text-reveal-chars-scrub` on longer headlines where scroll-linked motion reads well.

### Typewriter (paragraphs / subtitles)

Put the class on a **Paragraph** or **Heading** block. Text prints left-to-right with a blinking caret when the block enters the viewport — same motion language as the [MiMo Code](https://mimo.xiaomi.com/coder) `.hero__subtitle`.

```html
<!-- wp:paragraph {"className":"animation-text-typewriter"} -->
<p class="animation-text-typewriter" data-delay="0.35" data-stagger="0.055">
  A next-generation AI coding assistant for developers.
</p>
<!-- /wp:paragraph -->
```

**Legacy class mapping**

| Old (Elementor) | New (Nextora) |
|-----------------|---------------|
| `at-animation-image-style-1` | `animation-image-clip-reveal` |
| `at-animation-heading-style-1` | `animation-text-reveal-words` |
| `at-animation-heading-style-2` | `animation-text-reveal-chars` |
| `at-animation-heading-style-3` | `animation-text-reveal-chars-rise` |
| `at-animation-heading-style-4` | `animation-text-reveal-chars-scrub` |
| `at-animation-typewriter` | `animation-text-typewriter` |


## Data attributes (optional)

Add on the same element as the animation class:

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-delay` | `0` | Seconds before tween starts |
| `data-duration` | `0.8` | Tween duration (seconds) |
| `data-ease` | `power3.out` | GSAP ease string |
| `data-stagger` | — | When set, animates **direct children** with stagger delay (seconds) |
| `data-distance` | `40` | Pixel offset for fade-in directional presets |
| `data-parallax-speed` | `0.35` (with `animation-parallax`) | Parallax intensity |

## Gutenberg usage

### Single block

1. Select a block (Paragraph, Group, Image, theme block, etc.).
2. **Advanced → Additional CSS class(es):** `animation-fade-in-up`
3. (Optional) Switch to **Code editor** on a Group/HTML block to add attributes:

```html
<!-- wp:group {"className":"animation-fade-in-up","metadata":{"name":"Reveal"}} -->
<div class="wp-block-group animation-fade-in-up" data-duration="1" data-distance="56">
  <!-- nested blocks -->
</div>
<!-- /wp:group -->
```

### List grid (`animation-fade-list-grid`)

Put the class on a wrapper that contains a `<ul>`. Only **grid/post rows** animate (`ul > li` whose list is not inside another `li`) — e.g. post cards in `nextora/post-grid`, not category/tag `li` nested inside a card. Each item uses the same motion as **`animation-fade-in-up`** and has its **own** ScrollTrigger: every card already in the viewport reveals together (e.g. three columns), and items farther down reveal when you scroll them into view.

```html
<div class="wp-block-group animation-fade-list-grid" data-duration="0.8" data-distance="40">
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>
```

### Inner wrapper fade (`animation-inner-fade`)

Put the class on a wrapper (e.g. `entry-content`, post content Group). **Every direct child** gets `animation-fade-in-up` motion with its own viewport trigger — paragraphs, headings, lists, quotes, etc.

```html
<div class="entry-content wp-block-post-content animation-inner-fade" data-duration="0.8">
  <p>First paragraph</p>
  <blockquote>Quote</blockquote>
  <h4>Heading</h4>
  <ul class="wp-block-list">…</ul>
</div>
```

### Staggered children (Group / Columns)

Put the animation class on the **parent** and `data-stagger` — each direct child reveals in sequence:

```html
<div class="wp-block-group animation-fade-in-up" data-stagger="0.12">
  <div class="wp-block-group">…</div>
  <div class="wp-block-group">…</div>
  <div class="wp-block-group">…</div>
</div>
```

### Parallax

```html
<div class="wp-block-cover animation-parallax" data-parallax-speed="0.5">
  …
</div>
```

Combine reveal + parallax on one wrapper when needed.

**Theme blocks with built-in GSAP parallax:** `nextora/advanced-container` and `nextora/page-title` each have an **Enable parallax** toggle and a **Parallax speed** slider (0–1). When enabled, the block's background element moves with a smooth GSAP scrub-driven y-translate — no CSS `background-attachment: fixed` required. Both honour `prefers-reduced-motion: reduce`.

## HTML example (non-Gutenberg)

```html
<section class="animation-fade-in-up" data-delay="0.2" data-duration="0.9">
  <h2>Section title</h2>
  <p>Content fades up when the block enters the viewport.</p>
</section>
```

## File structure

```text
resources/ts/lib/scroll-animations/
  constants.ts           # Defaults, class list, selectors
  types.ts               # Shared TypeScript types
  presets.ts             # Animation preset registry + registerScrollAnimationPreset()
  parse-options.ts       # data-* parsing
  split-text.ts          # DOM word/char splitter (no SplitText plugin)
  special-animations.ts  # Image clip + text reveal handlers
  typewriter-text.ts     # MiMo-style typewriter preset
  helpers.ts             # GSAP wiring per element
  scroll-animations.ts   # scan, MutationObserver, boot
  index.ts               # Public exports

resources/css/modules/components/scroll-animations.css  # FOUC guard
resources/ts/main.ts                                    # initScrollAnimations()
```

## GSAP + ScrollTrigger registration

GSAP is a theme dependency (`package.json`). The module registers ScrollTrigger once:

```typescript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

Default ScrollTrigger options per reveal:

- `start: "top 85%"`
- `once: true` — plays once when entering the viewport, then stays visible (no reverse on scroll up)

Parallax uses `scrub: true` with `start: "top bottom"` / `end: "bottom top"`.

## Extending presets

Register new classes after `main.js` loads (child theme or small inline script):

```javascript
window.nextoraRegisterScrollAnimation?.("animation-flip-in", ({ distance }) => ({
  from: { opacity: 0, rotateX: 45, y: distance },
  to: { opacity: 1, rotateX: 0, y: 0 },
}));
```

Then use `animation-flip-in` in Additional CSS class(es). The scanner picks up dynamically registered classes via the preset registry.

## Performance best practices

1. **Prefer classes on block wrappers** — one ScrollTrigger per animated element; avoid hundreds on a single page.
2. **Use `data-stagger` on a parent** instead of duplicating classes on many siblings when the motion is identical.
3. **Images / layout:** the module calls `ScrollTrigger.refresh()` on `load`, `resize`, and after dynamic DOM inserts (MutationObserver, debounced).
4. **`prefers-reduced-motion`:** animations are skipped; content stays visible (no hidden state).
5. **Nested blocks:** classes on inner blocks work independently; parent stagger only affects direct children.
6. **Block-specific GSAP** (e.g. `blocks/page-title/view.ts`) remains separate for bespoke block behavior; use this system for editor-controlled utility animations.

## Dynamic / AJAX content

A `MutationObserver` on `document.body` rescans when nodes or `class` attributes change — compatible with lazy-loaded blocks and front-end injections without manual `init` calls.

Manual rescan (rare):

```typescript
import { scanScrollAnimations } from "./lib/scroll-animations";
scanScrollAnimations(subtreeElement);
```

## Related

- Block-level scroll toggles: [`docs/blocks.md`](./blocks.md) (`enableScrollAnimation` on theme blocks)
- Modal / other front-end libs: [`docs/extensibility.md`](./extensibility.md)
