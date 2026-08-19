# Lucide Icon Animation Integration

## Purpose

This document records the working Lucide animation integration used by the
`nextora/advanced-icon` block. Use it as the implementation guide when adding
the same behavior to other blocks.

The animation source and visual behavior are based on
[`gorkem-bwl/animated-icons`](https://github.com/gorkem-bwl/animated-icons).
The integration is CSS-only at runtime. JavaScript is not required to trigger
the hover animation.

## Current Scope

The feature is currently enabled only by `nextora/advanced-icon`.

The block attribute is:

```json
"enableIconAnimation": {
  "type": "boolean",
  "default": false
}
```

Animation is allowed only when:

```text
iconSource === "theme"
```

Uploaded icons must never receive Lucide animation classes or animation CSS.

The current `advanced-icon` implementation uses hover/focus as its trigger. The
animation system is also designed to support automatic triggers for future
blocks without changing the per-node metadata or CSS animation primitives.

## Trigger Modes

Animation trigger and animation style are separate concerns:

- **Trigger**: when the animation starts.
- **Style**: what the SVG nodes do after the trigger.

Supported trigger modes for future block integrations should be:

### Hover/focus

Current behavior. The animation starts when the block, button, card, or link is
hovered. Keyboard users should receive the same effect through `:focus-within`
or `:focus-visible`.

```text
hover/focus -> play animation
```

### Once on page load

The animation runs once after the frontend markup is ready. This is suitable
for a small hero icon or a single decorative icon near the top of the page.

```text
DOMContentLoaded -> play once -> stay at the normal end state
```

Do not use this mode for every icon on a page. It can create a noisy first
impression and may animate content before the visitor reaches it.

### Once when entering the viewport

The animation runs once when the icon becomes visible. This is the recommended
automatic mode for repeated content, cards, lists, and long pages.

```text
element enters viewport -> play once
```

Use `IntersectionObserver` for lightweight CSS-only triggering. The observer
should add a state class or data attribute and then disconnect when `once` is
enabled.

Example contract:

```html
<div
  class="nextora-advanced-icon"
  data-nextora-icon-animation="once-in-view"
>
  <svg class="animated-lucide-icon">...</svg>
</div>
```

```css
.nextora-advanced-icon[data-nextora-icon-animation-state="playing"]
  .animated-lucide-icon .al-anim-heart-beat {
  animation: nextora-al-heart-beat 800ms ease both;
}
```

### Continuous loop

The animation repeats continuously while the icon is active or visible.

```text
element active/visible -> repeat animation
```

Continuous animation should be reserved for icons whose meaning supports an
ongoing state, such as a loader, signal, activity indicator, or ambient weather
icon. It should not be the default for normal content icons.

Prefer pausing the loop when the icon is outside the viewport to reduce CPU and
visual noise. For example, the implementation can add a `playing` class only
while `IntersectionObserver` reports the element as visible.

### Once on page load or once in viewport: difference

- `when-visible`: starts immediately if the icon is already visible at
  initialization, otherwise waits until the visitor scrolls to it.
- `loop`: repeats while active/visible.
- `hover/focus`: starts from user interaction and is the current default.

Do not combine `on-load` and `once-in-view` for the same icon unless replaying
the animation is explicitly required.

## Recommended Trigger Attributes

For a block with one icon, use a single trigger attribute with a safe default:

```json
"iconAnimationTrigger": {
  "type": "string",
  "enum": ["hover", "when-visible", "loop"],
  "default": "hover"
}
```

For the existing `advanced-icon` MVP, `enableIconAnimation: false` remains the
backward-compatible master switch. If automatic modes are added, the runtime
should treat them as disabled unless that switch is enabled.

For repeater blocks, use item-level values only when different items need
different behavior:

```json
{
  "iconName": "bell",
  "enableIconAnimation": true,
  "iconAnimationTrigger": "once-in-view"
}
```

Avoid adding separate booleans such as `animateOnLoad`, `animateOnScroll`, and
`animateForever` to the same block. A single enum is easier to understand and
prevents contradictory settings.

## Automatic Trigger Implementation

The per-node metadata remains unchanged. Only the trigger state changes.

Recommended frontend state classes:

```text
nextora-icon-animation--idle
nextora-icon-animation--playing
nextora-icon-animation--played
```

Recommended data attributes:

```text
data-nextora-icon-animation="hover"
data-nextora-icon-animation-state="idle"
```

For automatic modes, the view script should:

1. Find elements with `data-nextora-icon-animation`.
2. Skip elements that do not contain `.animated-lucide-icon`.
3. Skip all animation setup when reduced motion is preferred.
4. For `when-visible`, use `IntersectionObserver`. An icon already visible at
   initialization is reported immediately by the observer.
6. For `loop`, add `playing` while visible and remove it when hidden.
7. For one-shot modes, change `playing` to `played` after the longest node
   delay plus animation duration.
8. Disconnect observers for one-shot animations after they have played.

The runtime should be idempotent. A block can appear in editor previews,
partial renders, or AJAX-inserted content without creating duplicate
observers or event listeners.

## Automatic Animation CSS

Hover selectors should remain available even when an automatic trigger exists.
Use a shared trigger selector for automatic playback:

```css
.nextora-icon-animation--playing .al-anim-heart-beat {
  animation: nextora-al-heart-beat 800ms ease var(--al-delay, 0ms) both;
}
```

For loop mode, replay the existing one-shot animation after a pause. Do not
slow down the animation itself and do not use an infinite CSS animation for the
whole icon. The current `advanced-icon` loop keeps each semantic animation's
normal speed, waits about 1.8 seconds after the cycle starts, then restarts it
only while the icon remains visible.

```css
.nextora-icon-animation--loop .al-anim-pulse-element {
  animation-iteration-count: 1;
}
```

Do not put `animation-iteration-count: infinite` on the outer SVG. That changes
the original animation timing and makes every child animation loop without a
pause.

## Reduced Motion Rules for Automatic Modes

`prefers-reduced-motion: reduce` must disable all automatic motion, not just
hover motion.

```css
@media (prefers-reduced-motion: reduce) {
  .nextora-icon-animation--playing .animated-lucide-icon *,
  .nextora-icon-animation--loop .animated-lucide-icon * {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
```

The view script should also avoid creating `IntersectionObserver` instances or
continuous loop timers when reduced motion is enabled. The icon must remain
visible and in its normal static state.

## Automatic Trigger UX Guidance

- Use `hover` for interactive buttons, links, and cards.
- Use `when-visible` for decorative icons in repeated sections or hero icons.
- Use `loop` only for status, loading, signal, or ambient icons.
- Keep `default` as `hover` for backward compatibility and predictable pages.
- Do not make animation necessary to identify the icon or understand content.
- Avoid simultaneous automatic animation of many icons in a grid.
- Respect `prefers-reduced-motion` before starting any automatic mode.

## Architecture

```text
lucide-static/icon-nodes.json
        +
build-time animation strategies
        ↓
assets/data/lucide-icons.json
        ↓
nextora_get_lucide_svg()
        ↓
classes/styles on individual SVG child nodes
        ↓
scoped CSS hover/focus animations
```

The animation is applied to individual SVG child elements such as `path`,
`circle`, `rect`, and `line`. Do not animate only the outer `<svg>` if the goal
is to match the upstream demo.

## Important Files

### Build pipeline

- `scripts/build-lucide-icons.mjs`
  - Reads Lucide icon nodes and tags.
  - Classifies icons into animation families.
  - Assigns animation classes per SVG node.
  - Adds delay classes and custom CSS variables.
- `assets/data/lucide-icons.json`
  - Generated output. Do not edit manually.

Run the generator with:

```bash
npm run build:icons
```

Generated metadata has this shape:

```json
{
  "name": "mail",
  "nodes": [
    ["path", { "d": "..." }],
    ["rect", { "x": "2", "y": "4" }]
  ],
  "animation": {
    "type": "pop-envelope",
    "nodes": [
      {
        "classes": ["al-primary", "al-anim-mail-flap", "al-delay-0"],
        "styles": {}
      },
      {
        "classes": ["al-secondary", "al-anim-fill", "al-delay-1"],
        "styles": {}
      }
    ]
  }
}
```

### PHP renderer

- `blocks/advanced-icon/lucide.php`
  - Loads icon data from `assets/data/lucide-icons.json`.
  - `nextora_build_svg_nodes()` applies animation classes/styles to each node.
  - `nextora_get_lucide_svg()` accepts the final boolean `$animate` argument.
- `blocks/advanced-icon/render.php`
  - Enables animation only for Lucide theme icons:

```php
$enable_icon_animation = 'theme' === $source && ! empty( $attributes['enableIconAnimation'] );
```

### CSS

- `blocks/advanced-icon/style.css`
  - Contains scoped animation primitives.
  - Supports hover and keyboard focus through `:focus-within`.
  - Includes reduced-motion overrides.

## Animation Classes

Common classes include:

- `al-anim-fill`
- `al-anim-fade`
- `al-anim-scale-pop`
- `al-anim-dot-appear`
- `al-anim-bar`
- `al-anim-pulse-element`
- `al-anim-gear`
- `al-anim-nudge`
- `al-anim-bell-ring`
- `al-anim-heart-beat`
- `al-anim-mail-flap`
- `al-anim-shake`
- `al-anim-spin`
- `al-anim-rocket-lift`
- `al-anim-handle-lift`
- `al-anim-draw`
- `al-anim-wave`
- `al-anim-locate`
- `al-anim-shield`
- `al-anim-ambient`

Delay classes use 80ms increments:

```text
al-delay-0 ... al-delay-7
```

Custom properties currently used include:

```text
--al-tx
--al-ty
--al-rotation
--al-dash-len
```

## Representative Output

### Heart

```html
<path class="al-primary al-anim-heart-beat al-delay-0">
```

### Mail

```html
<path class="al-primary al-anim-mail-flap al-delay-0">
<rect class="al-secondary al-anim-fill al-delay-1">
```

### Settings

```html
<path class="al-primary al-anim-gear al-delay-0"
  style="--al-rotation:90deg">
<circle class="al-secondary al-anim-gear al-delay-1"
  style="--al-rotation:90deg">
```

### Pencil

```html
<path class="al-primary al-anim-draw al-delay-0">
<path class="al-secondary al-anim-fade al-delay-1">
```

## Bugs and Fixes

### 1. One zoom animation for every icon

#### Symptom

Every animated icon zoomed with the same effect.

#### Cause

The implementation animated the outer `<svg>` using one global keyframe.

#### Fix

Generate animation metadata per SVG child node at build time. The outer SVG
only acts as the hover/focus context.

Do not add a new global animation family by checking only the icon name in PHP.
Use the build pipeline instead.

### 2. Icon appears dim before hover

#### Symptom

Icons appeared faded or gray before the user hovered them.

#### Cause

The secondary animation class was given a default opacity:

```css
.al-secondary {
  opacity: 0.82;
}
```

#### Fix

Do not set default opacity on primary or secondary color classes. The default
state must look exactly like the normal Lucide icon. Opacity changes belong
inside hover/focus animation rules only.

### 3. Apple icon was clipped while zooming

#### Symptom

The apple icon on `/disability/` was cut off when it scaled on hover.

#### Cause

Two overflow layers were involved:

- The SVG could clip transformed children within its view box.
- On mobile, `.wp-site-blocks` had `overflow: hidden`.

#### Fix

The SVG uses:

```css
.wp-block-nextora-advanced-icon svg.animated-lucide-icon {
  overflow: visible;
}
```

The responsive site shell uses:

```css
@media (max-width: 768px) {
  .wp-site-blocks {
    overflow-x: clip;
    overflow-y: visible;
  }
}
```

Do not restore `overflow: hidden` on the mobile site shell without checking
transformed icons and other intentional overflow effects.

### 4. Icon color was overridden by animation CSS

#### Symptom

The editor/frontend icon was configured as white but rendered brown or as the
parent text color.

#### Cause

This rule was added and incorrectly used `!important`:

```css
stroke: currentColor !important;
```

It overrode the SVG presentation attribute generated by PHP:

```html
stroke="var(--wp--preset--color--base)"
```

#### Fix

Animation CSS must not set `stroke` or `color` on the animated SVG or its
children. The final working rule is only:

```css
.wp-block-nextora-advanced-icon svg.animated-lucide-icon {
  overflow: visible;
}
```

The PHP-resolved `stroke` attribute must remain authoritative. Always verify
both values in DevTools:

```js
const svg = document.querySelector('.nextora-advanced-icon svg');
const child = svg.querySelector('path, circle, rect, line');
getComputedStyle(svg).stroke;
getComputedStyle(child).stroke;
```

Both should match the selected icon color.

### 5. Draw animation does not visibly draw

#### Symptom

An icon assigned `al-anim-draw` only scales or does not animate.

#### Cause

Stroke draw animation requires dash attributes. A class alone is not enough.

#### Fix

The renderer adds:

```html
stroke-dasharray="..."
stroke-dashoffset="..."
```

The build metadata may provide `--al-dash-len`. Keep this behavior when adding
new draw strategies.

### 6. Legacy group-level animation class remains in markup

#### Symptom

The SVG contains classes such as:

```text
nextora-lucide-animation--toggle
```

and both old and new animations can affect the icon.

#### Cause

The previous prototype animated the outer SVG by family.

#### Fix

Do not emit the legacy `nextora-lucide-animation--*` class. The correct outer
class is only:

```text
animated-lucide-icon
```

The actual animation class belongs on each SVG child node.

## Integrating Another Block

### Block with a single Lucide icon

1. Add an opt-in boolean attribute. Use `false` as the default for existing
   blocks.
2. Add a sidebar toggle only when the source is Lucide/theme icon.
3. Call `nextora_get_lucide_svg()` with the final `$animate` boolean.
4. Do not apply the boolean to uploaded images or arbitrary SVG markup.
5. Ensure the block's wrapper does not clip transformed children.
6. Make sure the block's CSS does not override `stroke` or `color`.

Example:

```php
$animate = 'theme' === $source && ! empty( $attributes['enableIconAnimation'] );

$svg = nextora_get_lucide_svg(
  $icon_name,
  $size,
  $color,
  $stroke_width,
  $aria_label,
  $animate,
);
```

### Block with repeater icons

Prefer an item-level boolean if each item can behave independently:

```json
{
  "iconName": "heart",
  "enableIconAnimation": false
}
```

If the entire block should share one setting, use a block-level attribute.
Avoid adding both levels unless there is a concrete authoring requirement.

### Parent hover behavior

The current `advanced-icon` behavior triggers when the block is hovered or when
it contains a focused link:

```css
.nextora-advanced-icon:hover .animated-lucide-icon ...
.nextora-advanced-icon:focus-within .animated-lucide-icon ...
```

For a button/card block, scope the trigger to the interactive parent while
keeping the same child animation classes:

```css
.nextora-card:hover .animated-lucide-icon .al-anim-nudge,
.nextora-card:focus-within .animated-lucide-icon .al-anim-nudge {
  transform: translate(var(--al-tx), var(--al-ty));
}
```

### Uploaded/custom icons

Uploaded images and custom SVGs should remain untouched unless a separate,
explicit animation system is designed for them. Do not assume arbitrary SVG
markup has the same trusted node structure as Lucide.

## Accessibility and Motion

- Animation is hover/focus triggered by default. Automatic modes must be
  explicitly selected by the block author.
- Keep `aria-hidden`, `role`, and `aria-label` behavior unchanged.
- Preserve keyboard focus behavior with `:focus-within` or `:focus-visible`.
- Respect `prefers-reduced-motion: reduce`.
- Reduced motion must disable child animations and transitions.
- Animation must not be required to understand the icon or content.

## Validation Checklist

Before integrating into another block:

- [ ] Lucide-only condition is enforced.
- [ ] Uploaded icon output has no `animated-lucide-icon` class.
- [ ] Default icon is not dimmed.
- [ ] Default icon color matches the selected custom/preset color.
- [ ] Hover triggers node-level animation.
- [ ] Keyboard focus triggers the intended animation.
- [ ] `prefers-reduced-motion` disables the animation.
- [ ] SVG and ancestor containers do not clip transformed children.
- [ ] No CSS rule uses `stroke: currentColor !important` on animated icons.
- [ ] Draw animations include dash attributes.
- [ ] No legacy `nextora-lucide-animation--*` class remains.
- [ ] `npm run build:icons` passes.
- [ ] `npm run build:css` passes.
- [ ] `npm run typecheck` passes when editor TypeScript changes.
- [ ] `npm run lint:php:all` passes when PHP changes.

## Representative DevTools Checks

Check the rendered SVG:

```js
const svg = document.querySelector('.nextora-advanced-icon svg');
const children = [...svg.querySelectorAll(':scope > path, :scope > circle, :scope > rect, :scope > line')];
({
  svgClass: svg.className.baseVal,
  svgStroke: getComputedStyle(svg).stroke,
  childStrokes: children.map((node) => getComputedStyle(node).stroke),
  childClasses: children.map((node) => node.getAttribute('class')),
  svgOverflow: getComputedStyle(svg).overflow,
});
```

Expected properties:

- `svgClass` contains `animated-lucide-icon` only, without legacy family class.
- `childClasses` contain `al-anim-*` and `al-delay-*` when enabled.
- `svgStroke` and `childStrokes` match the selected icon color.
- `svgOverflow` is `visible`.
