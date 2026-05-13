# Custom Header Block — Technical Documentation

> **Block Name:** `mytheme/header`
> **Category:** Theme Blocks
> **Render:** Server-Side (PHP) + Editor UI (React/JS)
> **Version:** 1.0.0

---

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Block Registration](#3-block-registration)
4. [Feature: Logo](#4-feature-logo)
5. [Feature: Navigation Menu](#5-feature-navigation-menu)
6. [Feature: Search / Mini Cart / My Account](#6-feature-search--mini-cart--my-account)
7. [Feature: Filter & Hook System](#7-feature-filter--hook-system)
8. [Feature: Responsive — Tablet & Mobile](#8-feature-responsive--tablet--mobile)
9. [File Structure](#9-file-structure)
10. [block.json — Full Schema](#10-blockjson--full-schema)
11. [PHP: Server-Side Render](#11-php-server-side-render)
12. [JS: Editor Component](#12-js-editor-component)
13. [CSS: Styling & Responsive](#13-css-styling--responsive)
14. [Integration with theme.json](#14-integration-with-themejson)
15. [WooCommerce Conditional Loading](#15-woocommerce-conditional-loading)
16. [Hooks Reference](#16-hooks-reference)
17. [Accessibility](#17-accessibility)
18. [Testing Checklist](#18-testing-checklist)

---

## 1. Overview

### What this block does

The Header block is a **self-contained, theme-level block** that provides:

- **Logo** — image upload or text fallback, linked to home
- **Navigation Menu** — custom menu system using `wp_nav_menu()`, independent from `core/navigation`
- **Utility Bar** — Search toggle, WooCommerce Mini Cart, My Account link (conditional on Woo)
- **Extensibility** — PHP filters/actions + JS hooks for child themes and plugins
- **Responsive** — mobile hamburger menu with off-canvas drawer

### What this block does NOT do

- Does **not** replace or conflict with `core/navigation` block
- Does **not** require Full Site Editing (works in both FSE and classic templates)
- Does **not** bundle WooCommerce — features degrade gracefully when Woo is inactive

### Why not use core/navigation?

| Concern | core/navigation | This block |
|---|---|---|
| Logo + Nav + Utilities in one unit | ❌ Separate blocks needed | ✅ Single block |
| Custom dropdown/mega menu control | Limited | Full control |
| WooCommerce integration | Manual | Built-in |
| Hook system for extensibility | Limited | Full filter/action API |
| Consistent responsive behavior | Varies by theme | Controlled by block |

---

## 2. Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Header Block                       │
│                                                      │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   Logo   │  │   Nav Menu   │  │  Utility Bar  │  │
│  │          │  │              │  │               │  │
│  │ - Image  │  │ - Menu       │  │ - Search      │  │
│  │ - Text   │  │   Select     │  │ - Mini Cart   │  │
│  │ - Link   │  │ - Walker     │  │ - My Account  │  │
│  │          │  │ - Submenu    │  │ - Custom slot │  │
│  └──────────┘  └──────────────┘  └───────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │         Mobile: Off-Canvas Drawer              │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  Hooks: do_action / apply_filters at every section   │
└─────────────────────────────────────────────────────┘
```

### Render Strategy

- **Editor (JS):** React components with `InspectorControls` for settings. Uses placeholder/preview components since actual menu rendering happens server-side.
- **Frontend (PHP):** `render_callback` in PHP. This ensures `wp_nav_menu()`, WooCommerce functions, and WordPress hooks all work natively.

---

## 3. Block Registration

### Plugin or Theme?

Register as part of the theme in `functions.php` or a dedicated `inc/blocks/header/` directory.

```php
// functions.php
add_action('init', 'mytheme_register_header_block');

function mytheme_register_header_block() {
    register_block_type(__DIR__ . '/blocks/header', [
        'render_callback' => 'mytheme_render_header_block',
    ]);
}
```

### block.json

```json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "mytheme/header",
    "version": "1.0.0",
    "title": "Header",
    "category": "theme",
    "icon": "admin-home",
    "description": "Site header with logo, navigation, search, and WooCommerce utilities.",
    "keywords": ["header", "navigation", "logo", "menu"],
    "supports": {
        "html": false,
        "align": ["full", "wide"],
        "color": {
            "background": true,
            "text": true
        },
        "spacing": {
            "padding": true,
            "margin": ["top", "bottom"]
        },
        "typography": {
            "fontSize": true
        },
        "multiple": false
    },
    "attributes": {},
    "textdomain": "mytheme",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css",
    "viewScript": "file:./view.js",
    "render": "file:./render.php"
}
```

> `"multiple": false` — chỉ cho phép 1 Header block trên mỗi template.

---

## 4. Feature: Logo

### Attributes

```json
{
    "logoType": {
        "type": "string",
        "enum": ["image", "text"],
        "default": "image"
    },
    "logoImageId": {
        "type": "number",
        "default": 0
    },
    "logoImageUrl": {
        "type": "string",
        "default": ""
    },
    "logoText": {
        "type": "string",
        "default": ""
    },
    "logoWidth": {
        "type": "number",
        "default": 150
    },
    "logoLink": {
        "type": "string",
        "default": ""
    },
    "useSiteLogo": {
        "type": "boolean",
        "default": true
    }
}
```

### Editor (JS)

```jsx
// components/Logo.js
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, TextControl, ToggleControl, RangeControl } from '@wordpress/components';

export default function LogoEditor({ attributes, setAttributes }) {
    const { logoType, logoImageUrl, logoText, logoWidth, useSiteLogo } = attributes;

    return (
        <div className="mytheme-header__logo">
            <ToggleControl
                label="Use Site Logo"
                checked={useSiteLogo}
                onChange={(val) => setAttributes({ useSiteLogo: val })}
            />

            {!useSiteLogo && (
                <>
                    {/* Toggle between image and text */}
                    {logoType === 'image' ? (
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => setAttributes({
                                    logoImageId: media.id,
                                    logoImageUrl: media.url,
                                })}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    logoImageUrl
                                        ? <img src={logoImageUrl} alt="Logo"
                                               style={{ maxWidth: logoWidth }}
                                               onClick={open} />
                                        : <Button onClick={open} variant="secondary">
                                              Upload Logo
                                          </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    ) : (
                        <TextControl
                            label="Logo Text"
                            value={logoText}
                            onChange={(val) => setAttributes({ logoText: val })}
                        />
                    )}

                    <RangeControl
                        label="Logo Width"
                        value={logoWidth}
                        onChange={(val) => setAttributes({ logoWidth: val })}
                        min={50}
                        max={400}
                    />
                </>
            )}
        </div>
    );
}
```

### PHP Render

```php
function mytheme_render_logo($attributes) {
    $use_site_logo = $attributes['useSiteLogo'] ?? true;
    $logo_link     = $attributes['logoLink'] ?: home_url('/');
    $logo_width    = $attributes['logoWidth'] ?? 150;

    // Allow override via filter
    $logo_link = apply_filters('mytheme_header_logo_link', $logo_link);

    ob_start();
    ?>
    <div class="mytheme-header__logo">
        <a href="<?php echo esc_url($logo_link); ?>" rel="home">
            <?php if ($use_site_logo && has_custom_logo()) : ?>
                <?php
                    echo wp_get_attachment_image(
                        get_theme_mod('custom_logo'),
                        'full',
                        false,
                        ['style' => "max-width:{$logo_width}px;height:auto;"]
                    );
                ?>
            <?php elseif ($attributes['logoType'] === 'image' && !empty($attributes['logoImageUrl'])) : ?>
                <img src="<?php echo esc_url($attributes['logoImageUrl']); ?>"
                     alt="<?php echo esc_attr(get_bloginfo('name')); ?>"
                     style="max-width:<?php echo esc_attr($logo_width); ?>px;height:auto;" />
            <?php else : ?>
                <span class="mytheme-header__logo-text">
                    <?php echo esc_html($attributes['logoText'] ?: get_bloginfo('name')); ?>
                </span>
            <?php endif; ?>
        </a>
    </div>
    <?php
    return ob_get_clean();
}
```

---

## 5. Feature: Navigation Menu

### Strategy

Use WordPress's built-in menu system (`wp_nav_menu`) for frontend render, and a menu selector in the editor. This gives us:

- Full WordPress menu management UI (Appearance > Menus or Navigation screen)
- Walker class for custom HTML output
- Submenu/dropdown support
- No conflict with `core/navigation` block

### Attributes

```json
{
    "menuId": {
        "type": "number",
        "default": 0
    },
    "menuLocation": {
        "type": "string",
        "default": "primary"
    },
    "menuDepth": {
        "type": "number",
        "default": 3
    },
    "submenuAnimation": {
        "type": "string",
        "enum": ["fade", "slide", "none"],
        "default": "fade"
    }
}
```

### Register Menu Location

```php
// functions.php
add_action('after_setup_theme', function () {
    register_nav_menus([
        'header-primary'   => __('Header — Primary Menu', 'mytheme'),
        'header-secondary' => __('Header — Secondary Menu', 'mytheme'),
    ]);
});
```

### Editor (JS) — Menu Selector

```jsx
// components/NavMenu.js
import { SelectControl, Placeholder } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export default function NavMenuEditor({ attributes, setAttributes }) {
    const { menuId } = attributes;

    // Fetch all menus from REST API
    const menus = useSelect((select) => {
        return select(coreStore).getMenus({ per_page: -1 }) || [];
    }, []);

    const menuOptions = [
        { label: '— Select a Menu —', value: 0 },
        ...menus.map((menu) => ({
            label: menu.name,
            value: menu.id,
        })),
    ];

    return (
        <div className="mytheme-header__nav-editor">
            {menus.length === 0 ? (
                <Placeholder
                    icon="menu"
                    label="Navigation Menu"
                    instructions="Create a menu in Appearance → Menus first."
                />
            ) : (
                <SelectControl
                    label="Select Menu"
                    value={menuId}
                    options={menuOptions}
                    onChange={(val) => setAttributes({ menuId: parseInt(val) })}
                />
            )}

            {menuId > 0 && (
                <div className="mytheme-header__nav-preview">
                    {/* Server-side preview via ServerSideRender or static placeholder */}
                    <p className="mytheme-header__nav-placeholder">
                        Menu preview renders on frontend
                    </p>
                </div>
            )}
        </div>
    );
}
```

### Custom Walker Class

```php
// inc/class-header-menu-walker.php
class Mytheme_Header_Menu_Walker extends Walker_Nav_Menu {

    public function start_lvl(&$output, $depth = 0, $args = null) {
        $indent  = str_repeat("\t", $depth);
        $classes = ['mytheme-submenu', "mytheme-submenu--depth-{$depth}"];
        $classes = apply_filters('mytheme_header_submenu_classes', $classes, $depth);
        $output .= "\n{$indent}<ul class=\"" . implode(' ', $classes) . "\">\n";
    }

    public function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0) {
        $item    = $data_object;
        $classes = $item->classes ?: [];
        $classes[] = 'mytheme-menu-item';
        $classes[] = "mytheme-menu-item--depth-{$depth}";

        if (in_array('menu-item-has-children', $classes)) {
            $classes[] = 'mytheme-menu-item--has-children';
        }

        $classes = apply_filters('mytheme_header_menu_item_classes', $classes, $item, $depth);

        $output .= '<li class="' . esc_attr(implode(' ', array_filter($classes))) . '">';

        $link_attrs = [
            'href'  => esc_url($item->url),
            'class' => 'mytheme-menu-link',
        ];

        if ($item->target) {
            $link_attrs['target'] = $item->target;
        }

        // Allow filtering of individual menu item
        $link_attrs = apply_filters('mytheme_header_menu_link_attrs', $link_attrs, $item, $depth);

        $attrs_string = '';
        foreach ($link_attrs as $key => $val) {
            $attrs_string .= sprintf(' %s="%s"', esc_attr($key), esc_attr($val));
        }

        $output .= "<a{$attrs_string}>";
        $output .= apply_filters('mytheme_header_menu_item_title', esc_html($item->title), $item, $depth);
        $output .= '</a>';

        // Submenu toggle button for items with children
        if (in_array('menu-item-has-children', $item->classes ?: [])) {
            $output .= '<button class="mytheme-submenu-toggle" aria-expanded="false" aria-label="' .
                        esc_attr(sprintf(__('Expand submenu for %s', 'mytheme'), $item->title)) . '">';
            $output .= apply_filters('mytheme_header_submenu_icon', '<svg width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>');
            $output .= '</button>';
        }
    }
}
```

### PHP Render — Nav Section

```php
function mytheme_render_nav($attributes) {
    $menu_id = $attributes['menuId'] ?? 0;

    // Action before nav
    do_action('mytheme_header_before_nav');

    ob_start();
    ?>
    <nav class="mytheme-header__nav" role="navigation"
         aria-label="<?php esc_attr_e('Primary Navigation', 'mytheme'); ?>">
        <?php
        $nav_args = [
            'container'      => false,
            'menu_class'     => 'mytheme-menu',
            'depth'          => $attributes['menuDepth'] ?? 3,
            'walker'         => new Mytheme_Header_Menu_Walker(),
            'fallback_cb'    => false,
            'item_spacing'   => 'discard',
        ];

        if ($menu_id > 0) {
            $nav_args['menu'] = $menu_id;
        } else {
            $nav_args['theme_location'] = 'header-primary';
        }

        $nav_args = apply_filters('mytheme_header_nav_args', $nav_args, $attributes);

        wp_nav_menu($nav_args);
        ?>
    </nav>
    <?php

    do_action('mytheme_header_after_nav');

    return ob_get_clean();
}
```

---

## 6. Feature: Search / Mini Cart / My Account

### Attributes

```json
{
    "showSearch": {
        "type": "boolean",
        "default": true
    },
    "showMiniCart": {
        "type": "boolean",
        "default": true
    },
    "showMyAccount": {
        "type": "boolean",
        "default": true
    },
    "searchStyle": {
        "type": "string",
        "enum": ["icon-toggle", "inline", "overlay"],
        "default": "icon-toggle"
    },
    "myAccountIconOnly": {
        "type": "boolean",
        "default": true
    }
}
```

### PHP Render — Utilities

```php
function mytheme_render_utilities($attributes) {
    ob_start();
    ?>
    <div class="mytheme-header__utilities">
        <?php do_action('mytheme_header_utilities_start'); ?>

        <?php // --- SEARCH --- ?>
        <?php if ($attributes['showSearch'] ?? true) : ?>
            <div class="mytheme-header__search"
                 data-style="<?php echo esc_attr($attributes['searchStyle'] ?? 'icon-toggle'); ?>">

                <button class="mytheme-header__search-toggle"
                        aria-label="<?php esc_attr_e('Open search', 'mytheme'); ?>"
                        aria-expanded="false">
                    <?php echo apply_filters('mytheme_header_search_icon', mytheme_icon('search')); ?>
                </button>

                <div class="mytheme-header__search-form" hidden>
                    <?php
                    echo apply_filters(
                        'mytheme_header_search_form',
                        get_search_form(['echo' => false])
                    );
                    ?>
                </div>
            </div>
        <?php endif; ?>

        <?php // --- MINI CART (WooCommerce) --- ?>
        <?php if (($attributes['showMiniCart'] ?? true) && mytheme_is_woo_active()) : ?>
            <div class="mytheme-header__cart">
                <?php do_action('mytheme_header_before_cart'); ?>

                <a href="<?php echo esc_url(wc_get_cart_url()); ?>"
                   class="mytheme-header__cart-link"
                   aria-label="<?php esc_attr_e('Shopping cart', 'mytheme'); ?>">

                    <?php echo apply_filters('mytheme_header_cart_icon', mytheme_icon('cart')); ?>

                    <span class="mytheme-header__cart-count">
                        <?php echo WC()->cart ? WC()->cart->get_cart_contents_count() : 0; ?>
                    </span>
                </a>

                <?php
                // Mini cart dropdown — uses WooCommerce template
                if (apply_filters('mytheme_header_show_cart_dropdown', true)) : ?>
                    <div class="mytheme-header__cart-dropdown" hidden>
                        <?php woocommerce_mini_cart(); ?>
                    </div>
                <?php endif; ?>

                <?php do_action('mytheme_header_after_cart'); ?>
            </div>
        <?php endif; ?>

        <?php // --- MY ACCOUNT (WooCommerce) --- ?>
        <?php if (($attributes['showMyAccount'] ?? true) && mytheme_is_woo_active()) : ?>
            <div class="mytheme-header__account">
                <a href="<?php echo esc_url(wc_get_account_endpoint_url('dashboard')); ?>"
                   class="mytheme-header__account-link"
                   aria-label="<?php esc_attr_e('My Account', 'mytheme'); ?>">

                    <?php echo apply_filters('mytheme_header_account_icon', mytheme_icon('user')); ?>

                    <?php if (!($attributes['myAccountIconOnly'] ?? true)) : ?>
                        <span class="mytheme-header__account-text">
                            <?php
                            echo is_user_logged_in()
                                ? esc_html(wp_get_current_user()->display_name)
                                : esc_html__('Sign In', 'mytheme');
                            ?>
                        </span>
                    <?php endif; ?>
                </a>
            </div>
        <?php endif; ?>

        <?php
        // Custom slot — other plugins/child themes can add items here
        do_action('mytheme_header_utilities_end');
        ?>
    </div>
    <?php
    return ob_get_clean();
}

// Helper: Check WooCommerce active
function mytheme_is_woo_active() {
    return class_exists('WooCommerce');
}
```

### AJAX Cart Count Update

```php
// Enqueue cart fragment support
add_action('wp_enqueue_scripts', function () {
    if (mytheme_is_woo_active()) {
        wp_enqueue_script('wc-cart-fragments');
    }
});

// Cart fragment for header count
add_filter('woocommerce_add_to_cart_fragments', function ($fragments) {
    $count = WC()->cart->get_cart_contents_count();
    $fragments['.mytheme-header__cart-count'] =
        '<span class="mytheme-header__cart-count">' . esc_html($count) . '</span>';
    return $fragments;
});
```

---

## 7. Feature: Filter & Hook System

### Design Principles

1. Every render section has `before` and `after` actions
2. Every output element has a corresponding filter
3. Hooks follow WordPress naming: `mytheme_header_{section}_{element}`
4. Filters return modified content; actions return void

### Complete Hooks Reference

#### Actions (do_action)

| Hook | Location | Parameters |
|---|---|---|
| `mytheme_header_before` | Before entire header | `$attributes` |
| `mytheme_header_after` | After entire header | `$attributes` |
| `mytheme_header_before_logo` | Before logo section | — |
| `mytheme_header_after_logo` | After logo section | — |
| `mytheme_header_before_nav` | Before nav section | — |
| `mytheme_header_after_nav` | After nav section | — |
| `mytheme_header_utilities_start` | Start of utility bar | — |
| `mytheme_header_utilities_end` | End of utility bar (custom slot) | — |
| `mytheme_header_before_cart` | Before cart icon | — |
| `mytheme_header_after_cart` | After cart dropdown | — |
| `mytheme_header_mobile_drawer_start` | Top of mobile drawer | — |
| `mytheme_header_mobile_drawer_end` | Bottom of mobile drawer | — |

#### Filters (apply_filters)

| Filter | What it filters | Parameters | Return |
|---|---|---|---|
| `mytheme_header_logo_link` | Logo link URL | `$url` | `string` |
| `mytheme_header_nav_args` | `wp_nav_menu` arguments | `$args`, `$attributes` | `array` |
| `mytheme_header_menu_item_classes` | Menu item CSS classes | `$classes`, `$item`, `$depth` | `array` |
| `mytheme_header_menu_item_title` | Menu item title text | `$title`, `$item`, `$depth` | `string` |
| `mytheme_header_menu_link_attrs` | Menu link HTML attrs | `$attrs`, `$item`, `$depth` | `array` |
| `mytheme_header_submenu_classes` | Submenu UL classes | `$classes`, `$depth` | `array` |
| `mytheme_header_submenu_icon` | Submenu toggle icon SVG | `$svg` | `string` |
| `mytheme_header_search_form` | Search form HTML | `$html` | `string` |
| `mytheme_header_search_icon` | Search button icon | `$svg` | `string` |
| `mytheme_header_cart_icon` | Cart button icon | `$svg` | `string` |
| `mytheme_header_account_icon` | Account button icon | `$svg` | `string` |
| `mytheme_header_show_cart_dropdown` | Show/hide cart dropdown | `$bool` | `bool` |
| `mytheme_header_mobile_breakpoint` | Breakpoint in px | `$px` (default 1024) | `int` |
| `mytheme_header_wrapper_classes` | Wrapper CSS classes | `$classes`, `$attributes` | `array` |

### Usage Examples

```php
// Child theme: Add a "Call Us" button in the utility bar
add_action('mytheme_header_utilities_end', function () {
    echo '<a href="tel:+1234567890" class="header-phone-btn">📞 Call Us</a>';
});

// Plugin: Replace search form with custom AJAX search
add_filter('mytheme_header_search_form', function ($html) {
    return '<form class="ajax-search" role="search">
                <input type="search" name="s" placeholder="Search products..."
                       autocomplete="off" />
                <div class="ajax-search-results"></div>
            </form>';
});

// Child theme: Add a badge to cart icon
add_filter('mytheme_header_cart_icon', function ($svg) {
    return $svg . '<span class="sale-badge">SALE</span>';
});

// Plugin: Add mega menu class to specific menu items
add_filter('mytheme_header_menu_item_classes', function ($classes, $item, $depth) {
    if ($depth === 0 && in_array('mega-menu', $item->classes)) {
        $classes[] = 'mytheme-menu-item--mega';
    }
    return $classes;
}, 10, 3);
```

### JS Hooks (Editor Side)

```js
import { addFilter } from '@wordpress/hooks';

// Add custom panel to Header block inspector
addFilter(
    'mytheme.header.inspectorControls',
    'myplugin/extra-panel',
    (panels) => {
        return [
            ...panels,
            {
                title: 'Extra Settings',
                component: MyExtraPanel,
            },
        ];
    }
);
```

---

## 8. Feature: Responsive — Tablet & Mobile

### Breakpoint Strategy

```
Desktop:  > 1024px   → Full horizontal header
Tablet:   768–1024px → Compact header, hamburger menu
Mobile:   < 768px    → Stacked logo, hamburger, minimal utilities
```

The breakpoint is filterable:

```php
$breakpoint = apply_filters('mytheme_header_mobile_breakpoint', 1024);
```

### Attributes

```json
{
    "mobileBreakpoint": {
        "type": "number",
        "default": 1024
    },
    "mobileMenuStyle": {
        "type": "string",
        "enum": ["drawer-left", "drawer-right", "fullscreen"],
        "default": "drawer-right"
    },
    "showSearchMobile": {
        "type": "boolean",
        "default": true
    },
    "showCartMobile": {
        "type": "boolean",
        "default": true
    }
}
```

### HTML: Mobile Drawer

```php
function mytheme_render_mobile_drawer($attributes) {
    ob_start();
    ?>
    <!-- Hamburger Toggle (visible on mobile) -->
    <button class="mytheme-header__hamburger"
            aria-label="<?php esc_attr_e('Open menu', 'mytheme'); ?>"
            aria-expanded="false"
            aria-controls="mytheme-mobile-drawer">
        <span class="mytheme-header__hamburger-line"></span>
        <span class="mytheme-header__hamburger-line"></span>
        <span class="mytheme-header__hamburger-line"></span>
    </button>

    <!-- Off-Canvas Drawer -->
    <div id="mytheme-mobile-drawer"
         class="mytheme-header__drawer mytheme-header__drawer--<?php echo esc_attr($attributes['mobileMenuStyle'] ?? 'drawer-right'); ?>"
         hidden
         aria-modal="true"
         role="dialog"
         aria-label="<?php esc_attr_e('Mobile Navigation', 'mytheme'); ?>">

        <div class="mytheme-header__drawer-header">
            <button class="mytheme-header__drawer-close"
                    aria-label="<?php esc_attr_e('Close menu', 'mytheme'); ?>">
                <?php echo mytheme_icon('close'); ?>
            </button>
        </div>

        <div class="mytheme-header__drawer-body">
            <?php do_action('mytheme_header_mobile_drawer_start'); ?>

            <?php
            wp_nav_menu(apply_filters('mytheme_header_mobile_nav_args', [
                'theme_location' => 'header-primary',
                'menu_class'     => 'mytheme-mobile-menu',
                'container'      => false,
                'depth'          => 3,
                'walker'         => new Mytheme_Header_Menu_Walker(),
                'fallback_cb'    => false,
            ]));
            ?>

            <?php do_action('mytheme_header_mobile_drawer_end'); ?>
        </div>
    </div>

    <!-- Overlay -->
    <div class="mytheme-header__overlay" hidden></div>
    <?php
    return ob_get_clean();
}
```

### JS: Drawer Toggle (view.js)

```js
// view.js — runs on frontend only
document.addEventListener('DOMContentLoaded', () => {
    const header    = document.querySelector('.mytheme-header');
    if (!header) return;

    const hamburger = header.querySelector('.mytheme-header__hamburger');
    const drawer    = header.querySelector('.mytheme-header__drawer');
    const overlay   = header.querySelector('.mytheme-header__overlay');
    const closeBtn  = header.querySelector('.mytheme-header__drawer-close');

    if (!hamburger || !drawer) return;

    function openDrawer() {
        drawer.hidden = false;
        if (overlay) overlay.hidden = false;
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        // Focus trap
        closeBtn?.focus();
    }

    function closeDrawer() {
        drawer.hidden = true;
        if (overlay) overlay.hidden = true;
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
    }

    hamburger.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', closeDrawer);

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !drawer.hidden) {
            closeDrawer();
        }
    });

    // Submenu toggles (mobile accordion)
    header.querySelectorAll('.mytheme-submenu-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            const submenu = btn.closest('.mytheme-menu-item')?.querySelector('.mytheme-submenu');
            if (submenu) {
                submenu.hidden = expanded;
            }
        });
    });
});
```

### CSS: Responsive Layout

```css
/* --- Desktop Layout --- */
.mytheme-header__inner {
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: var(--wp--style--global--wide-size, 1200px);
    margin: 0 auto;
    padding: 0 1rem;
}

.mytheme-header__logo { flex-shrink: 0; }
.mytheme-header__nav { flex-grow: 1; }
.mytheme-header__utilities {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
}

.mytheme-header__hamburger { display: none; }

/* --- Tablet & Mobile --- */
@media (max-width: 1024px) {
    .mytheme-header__nav { display: none; }
    .mytheme-header__hamburger { display: flex; }

    /* Drawer */
    .mytheme-header__drawer {
        position: fixed;
        top: 0;
        bottom: 0;
        width: min(85vw, 400px);
        background: var(--wp--preset--color--base, #fff);
        z-index: 9999;
        overflow-y: auto;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
    .mytheme-header__drawer--drawer-right { right: 0; }
    .mytheme-header__drawer--drawer-left  { left: 0; transform: translateX(-100%); }
    .mytheme-header__drawer:not([hidden]) { transform: translateX(0); }

    .mytheme-header__overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9998;
    }
}

/* --- Mobile specific --- */
@media (max-width: 767px) {
    .mytheme-header__inner {
        flex-wrap: wrap;
        padding: 0.5rem 1rem;
    }
    .mytheme-header__logo {
        order: 1;
        flex: 1;
    }
    .mytheme-header__utilities {
        order: 2;
        gap: 0.5rem;
    }
    .mytheme-header__hamburger {
        order: 3;
    }
}
```

---

## 9. File Structure

```
theme/
├── blocks/
│   └── header/
│       ├── block.json            # Block metadata & attributes
│       ├── index.js              # Editor entry (compiled from src/)
│       ├── index.css             # Editor styles
│       ├── style-index.css       # Frontend styles
│       ├── view.js               # Frontend JS (hamburger, dropdowns)
│       ├── render.php            # Server-side render callback
│       └── src/                  # Source files (pre-build)
│           ├── edit.js           # Main edit component
│           ├── save.js           # Returns null (server-rendered)
│           ├── index.js          # registerBlockType
│           ├── components/
│           │   ├── Logo.js
│           │   ├── NavMenu.js
│           │   ├── Utilities.js
│           │   └── Inspector.js
│           └── styles/
│               ├── editor.scss
│               └── style.scss
│
├── inc/
│   ├── class-header-menu-walker.php
│   └── blocks/
│       └── header.php           # render functions, helpers
│
├── parts/
│   └── header.html              # Block theme template part
│
└── functions.php                # register_block_type call
```

### Template Part (parts/header.html)

```html
<!-- wp:mytheme/header {"align":"full"} /-->
```

---

## 10. block.json — Full Schema

```json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "mytheme/header",
    "version": "1.0.0",
    "title": "Header",
    "category": "theme",
    "icon": "admin-home",
    "description": "Site header with logo, navigation, search, and WooCommerce utilities.",
    "keywords": ["header", "navigation", "logo", "menu", "cart"],
    "supports": {
        "html": false,
        "align": ["full", "wide"],
        "color": {
            "background": true,
            "text": true,
            "link": true
        },
        "spacing": {
            "padding": true,
            "margin": ["top", "bottom"]
        },
        "typography": {
            "fontSize": true,
            "fontFamily": true
        },
        "multiple": false
    },
    "attributes": {
        "logoType": { "type": "string", "enum": ["image", "text"], "default": "image" },
        "logoImageId": { "type": "number", "default": 0 },
        "logoImageUrl": { "type": "string", "default": "" },
        "logoText": { "type": "string", "default": "" },
        "logoWidth": { "type": "number", "default": 150 },
        "logoLink": { "type": "string", "default": "" },
        "useSiteLogo": { "type": "boolean", "default": true },
        "menuId": { "type": "number", "default": 0 },
        "menuLocation": { "type": "string", "default": "primary" },
        "menuDepth": { "type": "number", "default": 3 },
        "submenuAnimation": { "type": "string", "enum": ["fade", "slide", "none"], "default": "fade" },
        "showSearch": { "type": "boolean", "default": true },
        "showMiniCart": { "type": "boolean", "default": true },
        "showMyAccount": { "type": "boolean", "default": true },
        "searchStyle": { "type": "string", "enum": ["icon-toggle", "inline", "overlay"], "default": "icon-toggle" },
        "myAccountIconOnly": { "type": "boolean", "default": true },
        "mobileBreakpoint": { "type": "number", "default": 1024 },
        "mobileMenuStyle": { "type": "string", "enum": ["drawer-left", "drawer-right", "fullscreen"], "default": "drawer-right" },
        "showSearchMobile": { "type": "boolean", "default": true },
        "showCartMobile": { "type": "boolean", "default": true },
        "stickyHeader": { "type": "boolean", "default": false },
        "stickyStyle": { "type": "string", "enum": ["always", "scroll-up"], "default": "scroll-up" }
    },
    "textdomain": "mytheme",
    "editorScript": "file:./index.js",
    "editorStyle": "file:./index.css",
    "style": "file:./style-index.css",
    "viewScript": "file:./view.js",
    "render": "file:./render.php"
}
```

---

## 11. PHP: Server-Side Render

### Main Render Function (render.php)

```php
<?php
/**
 * Server-side render for mytheme/header block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content (empty for dynamic blocks).
 * @param WP_Block $block      Block instance.
 */

// Build wrapper classes
$classes = ['mytheme-header'];

if ($attributes['stickyHeader'] ?? false) {
    $classes[] = 'mytheme-header--sticky';
    $classes[] = 'mytheme-header--sticky-' . ($attributes['stickyStyle'] ?? 'scroll-up');
}

$classes = apply_filters('mytheme_header_wrapper_classes', $classes, $attributes);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $classes),
    'data-mobile-breakpoint' => $attributes['mobileBreakpoint'] ?? 1024,
]);

do_action('mytheme_header_before', $attributes);
?>

<header <?php echo $wrapper_attributes; ?>>
    <div class="mytheme-header__inner">

        <?php do_action('mytheme_header_before_logo'); ?>
        <?php echo mytheme_render_logo($attributes); ?>
        <?php do_action('mytheme_header_after_logo'); ?>

        <?php echo mytheme_render_nav($attributes); ?>

        <?php echo mytheme_render_utilities($attributes); ?>

        <?php echo mytheme_render_mobile_drawer($attributes); ?>

    </div>
</header>

<?php do_action('mytheme_header_after', $attributes); ?>
```

---

## 12. JS: Editor Component

### edit.js

```jsx
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';
import LogoEditor from './components/Logo';
import NavMenuEditor from './components/NavMenu';
import UtilitiesEditor from './components/Utilities';
import { applyFilters } from '@wordpress/hooks';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({ className: 'mytheme-header' });

    // Allow plugins to add inspector panels
    const extraPanels = applyFilters('mytheme.header.inspectorControls', [], attributes, setAttributes);

    return (
        <>
            <InspectorControls>
                <PanelBody title="Logo Settings" initialOpen>
                    <LogoEditor attributes={attributes} setAttributes={setAttributes} />
                </PanelBody>

                <PanelBody title="Navigation" initialOpen={false}>
                    <NavMenuEditor attributes={attributes} setAttributes={setAttributes} />

                    <RangeControl
                        label="Menu Depth"
                        value={attributes.menuDepth}
                        onChange={(val) => setAttributes({ menuDepth: val })}
                        min={1}
                        max={5}
                    />

                    <SelectControl
                        label="Submenu Animation"
                        value={attributes.submenuAnimation}
                        options={[
                            { label: 'Fade', value: 'fade' },
                            { label: 'Slide', value: 'slide' },
                            { label: 'None', value: 'none' },
                        ]}
                        onChange={(val) => setAttributes({ submenuAnimation: val })}
                    />
                </PanelBody>

                <PanelBody title="Utilities" initialOpen={false}>
                    <ToggleControl
                        label="Show Search"
                        checked={attributes.showSearch}
                        onChange={(val) => setAttributes({ showSearch: val })}
                    />
                    <ToggleControl
                        label="Show Mini Cart (WooCommerce)"
                        checked={attributes.showMiniCart}
                        onChange={(val) => setAttributes({ showMiniCart: val })}
                    />
                    <ToggleControl
                        label="Show My Account (WooCommerce)"
                        checked={attributes.showMyAccount}
                        onChange={(val) => setAttributes({ showMyAccount: val })}
                    />
                </PanelBody>

                <PanelBody title="Responsive" initialOpen={false}>
                    <RangeControl
                        label="Mobile Breakpoint (px)"
                        value={attributes.mobileBreakpoint}
                        onChange={(val) => setAttributes({ mobileBreakpoint: val })}
                        min={480}
                        max={1400}
                        step={10}
                    />
                    <SelectControl
                        label="Mobile Menu Style"
                        value={attributes.mobileMenuStyle}
                        options={[
                            { label: 'Drawer Right', value: 'drawer-right' },
                            { label: 'Drawer Left', value: 'drawer-left' },
                            { label: 'Fullscreen', value: 'fullscreen' },
                        ]}
                        onChange={(val) => setAttributes({ mobileMenuStyle: val })}
                    />
                </PanelBody>

                <PanelBody title="Sticky Header" initialOpen={false}>
                    <ToggleControl
                        label="Enable Sticky Header"
                        checked={attributes.stickyHeader}
                        onChange={(val) => setAttributes({ stickyHeader: val })}
                    />
                    {attributes.stickyHeader && (
                        <SelectControl
                            label="Sticky Behavior"
                            value={attributes.stickyStyle}
                            options={[
                                { label: 'Always visible', value: 'always' },
                                { label: 'Show on scroll up', value: 'scroll-up' },
                            ]}
                            onChange={(val) => setAttributes({ stickyStyle: val })}
                        />
                    )}
                </PanelBody>

                {/* Extra panels from plugins/child themes */}
                {extraPanels.map((panel, i) => (
                    <PanelBody key={i} title={panel.title} initialOpen={false}>
                        <panel.component attributes={attributes} setAttributes={setAttributes} />
                    </PanelBody>
                ))}
            </InspectorControls>

            <div {...blockProps}>
                <div className="mytheme-header__inner mytheme-header__editor-preview">
                    <LogoEditor attributes={attributes} setAttributes={setAttributes} />
                    <NavMenuEditor attributes={attributes} setAttributes={setAttributes} />
                    <UtilitiesEditor attributes={attributes} setAttributes={setAttributes} />
                </div>
            </div>
        </>
    );
}
```

### save.js

```js
// Dynamic block — render handled by PHP
export default function Save() {
    return null;
}
```

---

## 13. CSS: Styling & Responsive

See Section 8 for the responsive CSS. Additional styling considerations:

```css
/* Sticky Header */
.mytheme-header--sticky-always {
    position: sticky;
    top: 0;
    z-index: 1000;
}

.mytheme-header--sticky-scroll-up {
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: transform 0.3s ease;
}
.mytheme-header--sticky-scroll-up.is-hidden {
    transform: translateY(-100%);
}

/* Submenu styling */
.mytheme-submenu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background: var(--wp--preset--color--base, #fff);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
}
.mytheme-menu-item--has-children:hover > .mytheme-submenu,
.mytheme-menu-item--has-children:focus-within > .mytheme-submenu {
    opacity: 1;
    visibility: visible;
}

/* Cart count badge */
.mytheme-header__cart-count {
    position: absolute;
    top: -6px;
    right: -6px;
    background: var(--wp--preset--color--primary, #e00);
    color: #fff;
    font-size: 11px;
    min-width: 18px;
    height: 18px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

---

## 14. Integration with theme.json

```json
{
    "settings": {
        "blocks": {
            "mytheme/header": {
                "color": {
                    "palette": [
                        { "slug": "header-bg", "color": "#ffffff", "name": "Header Background" },
                        { "slug": "header-text", "color": "#1a1a1a", "name": "Header Text" }
                    ]
                }
            }
        }
    },
    "styles": {
        "blocks": {
            "mytheme/header": {
                "color": {
                    "background": "var(--wp--preset--color--header-bg)",
                    "text": "var(--wp--preset--color--header-text)"
                },
                "spacing": {
                    "padding": {
                        "top": "1rem",
                        "bottom": "1rem"
                    }
                }
            }
        }
    }
}
```

---

## 15. WooCommerce Conditional Loading

```php
// Only load WooCommerce-related assets when Woo is active
add_action('wp_enqueue_scripts', function () {
    if (!mytheme_is_woo_active()) {
        return;
    }

    wp_enqueue_script('wc-cart-fragments');

    wp_enqueue_style(
        'mytheme-header-woo',
        get_template_directory_uri() . '/blocks/header/woo.css',
        ['mytheme-header-style'],
        '1.0.0'
    );
});

// Conditionally register WooCommerce attributes
add_filter('register_block_type_args', function ($args, $name) {
    if ($name !== 'mytheme/header') return $args;

    if (!mytheme_is_woo_active()) {
        // Remove WooCommerce-specific attributes
        unset($args['attributes']['showMiniCart']);
        unset($args['attributes']['showMyAccount']);
    }

    return $args;
}, 10, 2);
```

---

## 16. Hooks Reference

(See Section 7 for the complete table.)

Quick copy-paste for child theme `functions.php`:

```php
/**
 * Available actions:
 *
 * mytheme_header_before             ($attributes)
 * mytheme_header_after              ($attributes)
 * mytheme_header_before_logo
 * mytheme_header_after_logo
 * mytheme_header_before_nav
 * mytheme_header_after_nav
 * mytheme_header_utilities_start
 * mytheme_header_utilities_end       ← best place to add custom items
 * mytheme_header_before_cart
 * mytheme_header_after_cart
 * mytheme_header_mobile_drawer_start
 * mytheme_header_mobile_drawer_end
 *
 * Available filters:
 *
 * mytheme_header_logo_link           ($url) → string
 * mytheme_header_nav_args            ($args, $attributes) → array
 * mytheme_header_menu_item_classes   ($classes, $item, $depth) → array
 * mytheme_header_menu_item_title     ($title, $item, $depth) → string
 * mytheme_header_menu_link_attrs     ($attrs, $item, $depth) → array
 * mytheme_header_submenu_classes     ($classes, $depth) → array
 * mytheme_header_submenu_icon        ($svg) → string
 * mytheme_header_search_form         ($html) → string
 * mytheme_header_search_icon         ($svg) → string
 * mytheme_header_cart_icon           ($svg) → string
 * mytheme_header_account_icon        ($svg) → string
 * mytheme_header_show_cart_dropdown  ($bool) → bool
 * mytheme_header_mobile_breakpoint   ($px) → int
 * mytheme_header_wrapper_classes     ($classes, $attributes) → array
 */
```

---

## 17. Accessibility

### Requirements Checklist

- `<header>` landmark with proper role
- `<nav>` with `aria-label` for each navigation region
- `aria-expanded` on all toggle buttons (hamburger, submenus, search)
- `aria-controls` linking toggles to their target panels
- `role="dialog"` and `aria-modal="true"` on the mobile drawer
- Focus trap inside the mobile drawer when open
- ESC key closes drawer and returns focus to hamburger
- Submenu items reachable via keyboard (Tab + Enter/Space)
- `aria-current="page"` on current page menu item (handled by `wp_nav_menu`)
- All icons have `aria-label` or are `aria-hidden` with adjacent text
- Color contrast meets WCAG 2.1 AA (4.5:1 for text, 3:1 for large text)
- Touch targets minimum 44×44px on mobile

### Skip Link

```php
// Ensure skip link in theme header.html template part
// <a class="skip-link screen-reader-text" href="#main-content">Skip to content</a>
```

---

## 18. Testing Checklist

### Functional

- [ ] Logo displays from Site Logo when `useSiteLogo` is true
- [ ] Logo displays from custom upload when `useSiteLogo` is false
- [ ] Logo falls back to site name text
- [ ] Menu selector shows all registered menus
- [ ] Selected menu renders correctly with submenus
- [ ] Submenu hover/focus works on desktop
- [ ] Search toggle opens/closes search form
- [ ] Mini Cart shows correct count
- [ ] Cart count updates via AJAX on add-to-cart
- [ ] My Account shows login link when logged out
- [ ] My Account shows user name when logged in

### Responsive

- [ ] Hamburger appears at defined breakpoint
- [ ] Desktop nav hides at breakpoint
- [ ] Drawer opens from correct side
- [ ] Drawer closes on overlay click
- [ ] Drawer closes on ESC key
- [ ] Submenu accordion works in drawer
- [ ] Touch targets are at least 44px
- [ ] No horizontal scroll on mobile

### WooCommerce

- [ ] Block works when WooCommerce is not installed
- [ ] Cart/Account icons don't show without WooCommerce
- [ ] Cart fragment updates work
- [ ] Mini cart dropdown renders product list

### Hooks

- [ ] `mytheme_header_utilities_end` action adds content
- [ ] `mytheme_header_search_form` filter replaces search
- [ ] `mytheme_header_nav_args` filter modifies menu output
- [ ] `mytheme_header_wrapper_classes` filter adds classes

### Editor

- [ ] Block renders in Site Editor
- [ ] InspectorControls panels all functional
- [ ] Only one instance allowed per template
- [ ] Block works in `parts/header.html`

### Accessibility

- [ ] Keyboard navigation through all menu items
- [ ] Screen reader announces menu structure
- [ ] Focus trap in mobile drawer
- [ ] ESC returns focus to trigger element
- [ ] Contrast meets WCAG AA