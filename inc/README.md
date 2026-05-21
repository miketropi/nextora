# `inc/` — PHP modules

Procedural theme code is grouped by role. `functions.php` loads these files in dependency order.

| Directory | Role |
|-----------|------|
| **`bootstrap/`** | Early defines (`NEXTORA_VERSION`, `NEXTORA_DIR`, `NEXTORA_URI`). |
| **`setup/`** | Theme support, text domain, nav menu registration (`after_setup_theme`). |
| **`navigation/`** | `core/navigation` ↔ menu locations; header block walker + Woo cart helpers. |
| **`features/`** | Self-contained features (e.g. `spotlight-search/`). See `features/README.md`. |
| **`comments/`** | Comment form args, Tiptap KSES, navigation filters. |
| **`assets/`** | Scripts, styles, editor integration, `wp_localize_script`. |
| **`Core/`** | PSR-4 classes (`Nextora\Core\…`). Composer maps `Nextora\` → `inc/`. |

Add new files to the folder that matches the concern, then `require_once` from `functions.php` (or from a feature `load.php` when scoped to one feature).
