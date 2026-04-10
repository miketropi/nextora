# `inc/` — PHP modules

Procedural theme code is grouped by role. `functions.php` loads these files in dependency order (see comments there).

| Directory | Role |
|-----------|------|
| **`bootstrap/`** | Very early defines (e.g. `NEXTORA_VERSION`) before Composer autoload. |
| **`setup/`** | Theme support, text domain, nav menu registration (`after_setup_theme`). |
| **`navigation/`** | Navigation block ↔ classic menu locations. |
| **`hooks/`** | Header/footer extensibility (`render_block`, `do_action`). |
| **`features/`** | Self-contained features (e.g. `spotlight-search/`). See `features/README.md`. |
| **`template/`** | Article/loop helpers and post placeholders. |
| **`comments/`** | Comment form args, list callback, navigation filters. |
| **`assets/`** | Scripts, styles, font URLs, editor integration. |
| **`Core/`** | PSR-4 classes (`Nextora\Core\…`). Composer maps `Nextora\` → `inc/`. |

Add new files to the folder that matches the concern, then `require_once` from `functions.php` (or from another `inc` file if it is a private helper used in one feature only).
