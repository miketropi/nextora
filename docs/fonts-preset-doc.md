# Fonts preset to a WordPress Block Theme

## Overview

This document describes how to download Google Fonts and register them locally in a WordPress block theme using `theme.json`. Self-hosting fonts improves performance (no third-party requests), ensures GDPR compliance, and gives full control over font loading.

## Directory Structure

```
your-theme/
├── assets/
│   └── fonts/
│       ├── montserrat-regular.woff2
│       ├── montserrat-italic.woff2
│       ├── montserrat-bold.woff2
│       ├── montserrat-bold-italic.woff2
│       ├── open-sans-regular.woff2
│       ├── open-sans-italic.woff2
│       ├── open-sans-bold.woff2
│       └── open-sans-bold-italic.woff2
├── theme.json
├── templates/
├── parts/
└── styles/
```

All font files must be placed inside the theme directory under `assets/fonts/`. The `.woff2` format is required — it provides the best compression and is supported by all modern browsers.

## Step 1: Download Font Files

Download `.woff2` files from one of these sources:

- **Google Fonts** — https://fonts.google.com — Select a font family, choose the weights/styles needed, then use the "Download family" button. Extract the archive and locate the `.woff2` files. If only `.ttf` files are provided, convert them to `.woff2` using a tool such as https://cloudconvert.com/ttf-to-woff2.
- **google-webfonts-helper** — https://gwfh.mranftl.com/fonts — Select a font, choose charsets and styles, set the folder prefix to `./assets/fonts/`, download the ZIP, and extract the `.woff2` files.

Place the downloaded `.woff2` files into `assets/fonts/` within the theme directory.

## Step 2: Register Fonts in theme.json

Add each font family to `settings.typography.fontFamilies` in `theme.json`. Each font family contains a `fontFace` array that maps to `@font-face` declarations.

### Configuration Schema

```json
{
  "version": 3,
  "settings": {
    "typography": {
      "fontFamilies": [
        {
          "slug": "<unique-slug>",
          "name": "<Display Name>",
          "fontFamily": "<font-family CSS value>",
          "fontFace": [
            {
              "fontFamily": "<Font Name>",
              "fontWeight": "<weight>",
              "fontStyle": "<normal|italic>",
              "src": ["file:./assets/fonts/<filename>.woff2"]
            }
          ]
        }
      ]
    }
  }
}
```

### Field Reference

| Field | Location | Description |
|-------|----------|-------------|
| `slug` | fontFamilies[] | Unique identifier. Generates CSS variable `--wp--preset--font-family--<slug>`. Use lowercase kebab-case. |
| `name` | fontFamilies[] | Human-readable label shown in the Block Editor font picker. |
| `fontFamily` | fontFamilies[] | CSS `font-family` value including fallback stack (e.g., `"Montserrat, sans-serif"`). |
| `fontFace` | fontFamilies[] | Array of `@font-face` declarations for this family. |
| `fontFamily` | fontFace[] | Must match the exact font name used in the parent `fontFamily` CSS value. |
| `fontWeight` | fontFace[] | CSS font-weight value. Use `"400"` for regular, `"700"` for bold, or a range like `"100 900"` for variable fonts. |
| `fontStyle` | fontFace[] | Either `"normal"` or `"italic"`. |
| `src` | fontFace[] | Array of file paths. Always use the `file:` prefix with a path relative to the theme root. |

### Full Example

```json
{
  "version": 3,
  "settings": {
    "typography": {
      "fontFamilies": [
        {
          "slug": "montserrat",
          "name": "Montserrat",
          "fontFamily": "Montserrat, sans-serif",
          "fontFace": [
            {
              "fontFamily": "Montserrat",
              "fontWeight": "400",
              "fontStyle": "normal",
              "src": ["file:./assets/fonts/montserrat-regular.woff2"]
            },
            {
              "fontFamily": "Montserrat",
              "fontWeight": "400",
              "fontStyle": "italic",
              "src": ["file:./assets/fonts/montserrat-italic.woff2"]
            },
            {
              "fontFamily": "Montserrat",
              "fontWeight": "700",
              "fontStyle": "normal",
              "src": ["file:./assets/fonts/montserrat-bold.woff2"]
            },
            {
              "fontFamily": "Montserrat",
              "fontWeight": "700",
              "fontStyle": "italic",
              "src": ["file:./assets/fonts/montserrat-bold-italic.woff2"]
            }
          ]
        },
        {
          "slug": "open-sans",
          "name": "Open Sans",
          "fontFamily": "'Open Sans', sans-serif",
          "fontFace": [
            {
              "fontFamily": "Open Sans",
              "fontWeight": "400",
              "fontStyle": "normal",
              "src": ["file:./assets/fonts/open-sans-regular.woff2"]
            },
            {
              "fontFamily": "Open Sans",
              "fontWeight": "400",
              "fontStyle": "italic",
              "src": ["file:./assets/fonts/open-sans-italic.woff2"]
            },
            {
              "fontFamily": "Open Sans",
              "fontWeight": "700",
              "fontStyle": "normal",
              "src": ["file:./assets/fonts/open-sans-bold.woff2"]
            },
            {
              "fontFamily": "Open Sans",
              "fontWeight": "700",
              "fontStyle": "italic",
              "src": ["file:./assets/fonts/open-sans-bold-italic.woff2"]
            }
          ]
        }
      ]
    }
  }
}
```

## Step 3: Apply Fonts in Styles

Use the generated CSS variables to set default fonts for the entire site and specific elements.

```json
{
  "styles": {
    "typography": {
      "fontFamily": "var(--wp--preset--font-family--open-sans)",
      "fontSize": "16px",
      "lineHeight": "1.6"
    },
    "elements": {
      "heading": {
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--montserrat)",
          "fontWeight": "700",
          "lineHeight": "1.2"
        }
      },
      "h1": {
        "typography": {
          "fontSize": "2.5rem"
        }
      },
      "h2": {
        "typography": {
          "fontSize": "2rem"
        }
      },
      "h3": {
        "typography": {
          "fontSize": "1.5rem"
        }
      },
      "link": {
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--open-sans)"
        }
      },
      "button": {
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--montserrat)",
          "fontWeight": "700"
        }
      }
    }
  }
}
```

## Generated CSS Output

WordPress automatically generates the following CSS from the configuration above:

```css
/* @font-face declarations */
@font-face {
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  src: url('/wp-content/themes/your-theme/assets/fonts/montserrat-regular.woff2') format('woff2');
}
/* ... one @font-face per fontFace entry ... */

/* CSS custom properties */
:root {
  --wp--preset--font-family--montserrat: Montserrat, sans-serif;
  --wp--preset--font-family--open-sans: 'Open Sans', sans-serif;
}
```

No manual CSS or `functions.php` enqueue is needed. WordPress handles everything from `theme.json`.

## Variable Fonts (Optional)

For fonts that support variable weights, use a single file with a weight range instead of multiple files:

```json
{
  "slug": "inter",
  "name": "Inter",
  "fontFamily": "Inter, sans-serif",
  "fontFace": [
    {
      "fontFamily": "Inter",
      "fontWeight": "100 900",
      "fontStyle": "normal",
      "src": ["file:./assets/fonts/inter-variable.woff2"]
    },
    {
      "fontFamily": "Inter",
      "fontWeight": "100 900",
      "fontStyle": "italic",
      "src": ["file:./assets/fonts/inter-variable-italic.woff2"]
    }
  ]
}
```

Variable fonts reduce the total number of files and allow any weight between the specified range.

## Checklist

- [ ] Font files are in `.woff2` format
- [ ] Font files are placed in `assets/fonts/` within the theme directory
- [ ] Each font family has a unique `slug` in kebab-case
- [ ] `fontFamily` in `fontFace[]` matches the font name in the parent `fontFamily` CSS value
- [ ] All `src` paths use the `file:` prefix and are relative to the theme root
- [ ] Each weight/style combination has its own `fontFace` entry (or use a weight range for variable fonts)
- [ ] Fonts are applied via CSS variables in `styles.typography` and `styles.elements`
- [ ] No `functions.php` enqueue or external CDN link is used