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
| `animation-parallax` | Vertical parallax while scrolling (use with `data-parallax-speed`) |

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
  constants.ts       # Defaults, class list, selectors
  types.ts           # Shared TypeScript types
  presets.ts         # Animation preset registry + registerScrollAnimationPreset()
  parse-options.ts   # data-* parsing
  helpers.ts         # GSAP wiring per element
  scroll-animations.ts # scan, MutationObserver, boot
  index.ts           # Public exports

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
