<?php

/**
 * Color scheme switcher — data layer.
 *
 * Builds the preset payload exposed to the front-end script:
 *
 *   - colorPresets: named palettes (slug => { title, colors }).
 *   - fontPresets:  named body/heading pairs (slug => { title, body, heading }).
 *   - themes:       bundled color + font presets (slug => { title, colors, body, heading }).
 *   - fonts:        font registry (slug => { name, family }).
 *   - config:       merged scheme-switcher.json (initial + section visibility).
 *
 * Sources are read from BOTH the parent and child theme (child wins on slug),
 * so the feature keeps working when a child theme is active. A root
 * `scheme-switcher.json` (parent + child) curates the presets (on/off, order,
 * labels), the first-visit defaults, and section visibility.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Glob preset JSON files across parent + child theme.
 *
 * Parent files are listed first, child files last, so later entries
 * override earlier ones when merged by slug.
 *
 * @param string $rel_glob Glob relative to the theme root (e.g. "styles/color-scheme/*.json").
 *
 * @return list<string> Unique, readable file paths.
 */
function nextora_glob_preset_files( string $rel_glob ): array {
	$bases = array_unique(
		array(
			get_template_directory(),
			get_stylesheet_directory(),
		),
	);

	$files = array();

	foreach ( $bases as $base ) {
		$found = glob( $base . '/' . $rel_glob ) ?: array();
		$files = array_merge( $files, $found );
	}

	return array_values( array_unique( $files ) );
}

/**
 * Parse a single color-preset JSON file into a normalized preset.
 *
 * Accepts any theme.json-style file that carries a `settings.color.palette`.
 *
 * @param string $file Absolute path to the JSON file.
 *
 * @return array{ title: string, colors: array<string, string> }|null
 */
function nextora_parse_color_preset( string $file ): ?array {
	if ( ! is_readable( $file ) ) {
		return null;
	}

	/** @var mixed $data */
	$data = json_decode( (string) file_get_contents( $file ), true );

	if ( ! is_array( $data ) ) {
		return null;
	}

	$palette = $data['settings']['color']['palette'] ?? null;
	if ( ! is_array( $palette ) || array() === $palette ) {
		return null;
	}

	$colors = array();

	/** @var mixed $color */
	foreach ( $palette as $color ) {
		if ( ! is_array( $color ) || empty( $color['slug'] ) || empty( $color['color'] ) ) {
			continue;
		}

		$colors[ _wp_to_kebab_case( (string) $color['slug'] ) ] = (string) $color['color'];
	}

	if ( array() === $colors ) {
		return null;
	}

	$title = isset( $data['title'] ) && is_string( $data['title'] ) && '' !== $data['title']
		? $data['title']
		: basename( $file, '.json' );

	return array(
		'title'  => $title,
		'colors' => $colors,
	);
}

/**
 * Color presets (schemes) merged from parent + child theme.
 *
 * Sources (later wins on slug):
 *   1. {parent}/styles/color-scheme/*.json
 *   2. {child}/styles/color-scheme/*.json
 *   3. {parent}/styles/*.json  (top-level style variations)
 *   4. {child}/styles/*.json   (top-level style variations)
 *
 * @return array<string, array{ title: string, colors: array<string, string> }>
 */
function nextora_get_color_presets(): array {
	$presets = array();

	foreach ( array( 'styles/color-scheme/*.json', 'styles/*.json' ) as $rel_glob ) {
		foreach ( nextora_glob_preset_files( $rel_glob ) as $file ) {
			$preset = nextora_parse_color_preset( $file );
			if ( null === $preset ) {
				continue;
			}

			$presets[ sanitize_title( $preset['title'] ) ] = $preset;
		}
	}

	return $presets;
}

/**
 * Font registry: slug => { name, family } for fonts actually available on the
 * site (theme + child + user customizations).
 *
 * Reuses the merged font list already built for the heading inline-font
 * editor feature, which guarantees the returned stacks are concrete
 * (resolved, not `var(--wp--preset--font-family--…)`).
 *
 * @return array<string, array{ name: string, family: string }>
 */
function nextora_get_font_registry(): array {
	$registry = array();

	if ( ! function_exists( 'nextora_get_heading_inline_font_families' ) ) {
		return $registry;
	}

	foreach ( nextora_get_heading_inline_font_families() as $font ) {
		$slug   = isset( $font['slug'] ) ? sanitize_key( (string) $font['slug'] ) : '';
		$family = isset( $font['fontFamily'] ) ? (string) $font['fontFamily'] : '';

		if ( '' === $slug || '' === $family ) {
			continue;
		}

		$registry[ $slug ] = array(
			'name'   => isset( $font['name'] ) ? (string) $font['name'] : $slug,
			'family' => $family,
		);
	}

	return $registry;
}

/**
 * Font presets: named body/heading pairs merged from parent + child theme.
 *
 * Reads `styles/font-preset/*.json` with the schema:
 *
 *     { "title": "Elegant", "body": "josefin-sans", "heading": "noto-serif-display" }
 *
 * `body` / `heading` reference font-registry slugs. `heading` falls back to
 * `body` when omitted or unknown. When no files exist, one preset per
 * available font is generated (body = heading = that font).
 *
 * @param array<string, array{ name: string, family: string }> $fonts Font registry.
 *
 * @return array<string, array{ title: string, body: string, heading: string }>
 */
function nextora_get_font_presets( array $fonts ): array {
	$presets = array();

	foreach ( nextora_glob_preset_files( 'styles/font-preset/*.json' ) as $file ) {
		if ( ! is_readable( $file ) ) {
			continue;
		}

		/** @var mixed $data */
		$data = json_decode( (string) file_get_contents( $file ), true );

		if ( ! is_array( $data ) || empty( $data['title'] ) ) {
			continue;
		}

		$title = (string) $data['title'];
		$slug  = sanitize_title( $title );

		$body    = isset( $data['body'] ) ? sanitize_key( (string) $data['body'] ) : '';
		$heading = isset( $data['heading'] ) ? sanitize_key( (string) $data['heading'] ) : '';

		if ( '' === $body || ! isset( $fonts[ $body ] ) ) {
			continue;
		}

		if ( '' === $heading || ! isset( $fonts[ $heading ] ) ) {
			$heading = $body;
		}

		$presets[ $slug ] = array(
			'title'   => $title,
			'body'    => $body,
			'heading' => $heading,
		);
	}

	if ( array() === $presets ) {
		foreach ( $fonts as $slug => $font ) {
			$presets[ $slug ] = array(
				'title'   => $font['name'],
				'body'    => $slug,
				'heading' => $slug,
			);
		}
	}

	return $presets;
}

/**
 * Parse a preset file into a bundled theme (color palette + font pairing).
 *
 * A file is a "theme" only when it carries BOTH a color palette and a font.
 * Fonts come from `settings.typography.fontFamilies` (first entry = body,
 * second = heading) or, when absent, are resolved from the `styles` element
 * mappings. Unresolvable font values make the file a color-only preset
 * (not a theme).
 *
 * @param string                $file     Absolute path to the JSON file.
 * @param array<string, string> $font_map Font registry slug => family stack.
 *
 * @return array{ title: string, colors: array<string, string>, body: string, heading: string }|null
 */
function nextora_parse_theme_preset( string $file, array $font_map ): ?array {
	if ( ! is_readable( $file ) ) {
		return null;
	}

	/** @var mixed $data */
	$data = json_decode( (string) file_get_contents( $file ), true );

	if ( ! is_array( $data ) ) {
		return null;
	}

	$palette = $data['settings']['color']['palette'] ?? null;
	if ( ! is_array( $palette ) || array() === $palette ) {
		return null;
	}

	$colors = array();

	/** @var mixed $color */
	foreach ( $palette as $color ) {
		if ( ! is_array( $color ) || empty( $color['slug'] ) || empty( $color['color'] ) ) {
			continue;
		}

		$colors[ _wp_to_kebab_case( (string) $color['slug'] ) ] = (string) $color['color'];
	}

	if ( array() === $colors ) {
		return null;
	}

	$body    = null;
	$heading = null;

	$file_fonts = $data['settings']['typography']['fontFamilies'] ?? null;
	if ( is_array( $file_fonts ) && array() !== $file_fonts ) {
		$first  = isset( $file_fonts[0] ) && is_array( $file_fonts[0] ) ? $file_fonts[0] : null;
		$second = isset( $file_fonts[1] ) && is_array( $file_fonts[1] ) ? $file_fonts[1] : null;

		if ( null !== $first && isset( $first['fontFamily'] ) && is_string( $first['fontFamily'] ) && '' !== $first['fontFamily'] ) {
			$body = $first['fontFamily'];
		}

		if ( null !== $second && isset( $second['fontFamily'] ) && is_string( $second['fontFamily'] ) && '' !== $second['fontFamily'] ) {
			$heading = $second['fontFamily'];
		}
	}

	if ( null === $body ) {
		$styles = $data['styles'] ?? null;
		if ( is_array( $styles ) ) {
			$body_var = $styles['typography']['fontFamily'] ?? null;
			if ( is_string( $body_var ) && '' !== $body_var ) {
				$body = nextora_resolve_heading_font_family_stack( $body_var, $font_map );
			}

			$heading_var = $styles['elements']['heading']['typography']['fontFamily'] ?? null;
			if ( is_string( $heading_var ) && '' !== $heading_var ) {
				$heading = nextora_resolve_heading_font_family_stack( $heading_var, $font_map );
			}
		}
	}

	if ( null === $body || str_starts_with( $body, 'var(' ) ) {
		return null;
	}

	if ( null === $heading || '' === $heading || str_starts_with( $heading, 'var(' ) ) {
		$heading = $body;
	}

	$title = isset( $data['title'] ) && is_string( $data['title'] ) && '' !== $data['title']
		? $data['title']
		: basename( $file, '.json' );

	return array(
		'title'   => $title,
		'colors'  => $colors,
		'body'    => $body,
		'heading' => $heading,
	);
}

/**
 * Bundled themes: presets that combine a color palette AND a font pairing,
 * merged from parent + child (sources match the color presets).
 *
 * @param array<string, array{ name: string, family: string }> $fonts Font registry.
 *
 * @return array<string, array{ title: string, colors: array<string, string>, body: string, heading: string }>
 */
function nextora_get_themes( array $fonts ): array {
	$font_map = array();

	foreach ( $fonts as $slug => $font ) {
		$font_map[ $slug ] = $font['family'];
	}

	$themes = array();

	foreach ( array( 'styles/color-scheme/*.json', 'styles/*.json' ) as $rel_glob ) {
		foreach ( nextora_glob_preset_files( $rel_glob ) as $file ) {
			$theme = nextora_parse_theme_preset( $file, $font_map );
			if ( null === $theme ) {
				continue;
			}

			$themes[ sanitize_title( $theme['title'] ) ] = $theme;
		}
	}

	return $themes;
}

/**
 * Load and merge `scheme-switcher.json` from the parent + child theme.
 *
 * Returns a normalized config; missing keys fall back to defaults. The child
 * theme (when present) wins over the parent. `presets.*` arrays are replaced
 * wholesale by the later file (not merged by index).
 *
 * @return array{
 *   initial: array{ theme: string, color: string, font: string },
 *   sections: array{
 *     themes: array{ enabled: bool, showDefault: bool },
 *     colors: array{ enabled: bool, showDefault: bool },
 *     fonts: array{ enabled: bool, showDefault: bool }
 *   },
 *   presets: array{
 *     themes: ?list<array<string, mixed>>,
 *     colors: ?list<array<string, mixed>>,
 *     fonts: ?list<array<string, mixed>>
 *   }
 * }
 */
function nextora_get_switcher_config(): array {
	$config = array(
		'initial'  => array( 'theme' => '', 'color' => '', 'font' => '' ),
		'sections' => array(
			'themes' => array( 'enabled' => true, 'showDefault' => true ),
			'colors' => array( 'enabled' => true, 'showDefault' => true ),
			'fonts'  => array( 'enabled' => true, 'showDefault' => true ),
		),
		'presets'  => array( 'themes' => null, 'colors' => null, 'fonts' => null ),
	);

	$bases = array_unique(
		array(
			get_template_directory(),
			get_stylesheet_directory(),
		),
	);

	foreach ( $bases as $base ) {
		$file = $base . '/scheme-switcher.json';
		if ( ! is_readable( $file ) ) {
			continue;
		}

		/** @var mixed $data */
		$data = json_decode( (string) file_get_contents( $file ), true );
		if ( ! is_array( $data ) ) {
			continue;
		}

		$initial = $data['initial'] ?? null;
		if ( is_array( $initial ) ) {
			foreach ( array( 'theme', 'color', 'font' ) as $key ) {
				if ( isset( $initial[ $key ] ) && is_string( $initial[ $key ] ) ) {
					$config['initial'][ $key ] = $initial[ $key ];
				}
			}
		}

		$sections = $data['sections'] ?? null;
		if ( is_array( $sections ) ) {
			foreach ( array( 'themes', 'colors', 'fonts' ) as $axis ) {
				$section = $sections[ $axis ] ?? null;
				if ( ! is_array( $section ) ) {
					continue;
				}

				if ( isset( $section['enabled'] ) && is_bool( $section['enabled'] ) ) {
					$config['sections'][ $axis ]['enabled'] = $section['enabled'];
				}

				if ( isset( $section['showDefault'] ) && is_bool( $section['showDefault'] ) ) {
					$config['sections'][ $axis ]['showDefault'] = $section['showDefault'];
				}
			}
		}

		$presets = $data['presets'] ?? null;
		if ( is_array( $presets ) ) {
			foreach ( array( 'themes', 'colors', 'fonts' ) as $axis ) {
				if ( ! array_key_exists( $axis, $presets ) ) {
					continue;
				}

				$raw = $presets[ $axis ];
				if ( ! is_array( $raw ) ) {
					$config['presets'][ $axis ] = null;
					continue;
				}

				$rules = array();
				foreach ( $raw as $rule ) {
					if ( is_array( $rule ) ) {
						$rules[] = $rule;
					}
				}

				$config['presets'][ $axis ] = $rules;
			}
		}
	}

	return $config;
}

/**
 * Full payload exposed to the switcher script.
 *
 * Color/font/theme presets are filtered, ordered and labelled per the merged
 * `scheme-switcher.json` allowlists; a null allowlist keeps auto-discovery.
 * `initial` slugs are validated against the filtered sets.
 *
 * @return array{
 *   colorPresets: array<string, array{ title: string, colors: array<string, string> }>,
 *   fontPresets: array<string, array{ title: string, body: string, heading: string }>,
 *   themes: array<string, array{ title: string, colors: array<string, string>, body: string, heading: string }>,
 *   fonts: array<string, array{ name: string, family: string }>,
 *   config: array{
 *     initial: array{ theme: string, color: string, font: string },
 *     sections: array{
 *       themes: array{ enabled: bool, showDefault: bool },
 *       colors: array{ enabled: bool, showDefault: bool },
 *       fonts: array{ enabled: bool, showDefault: bool }
 *     }
 *   }
 * }
 */
function nextora_get_switcher_payload(): array {
	$fonts  = nextora_get_font_registry();
	$config = nextora_get_switcher_config();

	$color_presets = nextora_get_color_presets();
	$color_rules   = $config['presets']['colors'];

	if ( null !== $color_rules ) {
		/** @var array<string, array{ title: string, colors: array<string, string> }> $filtered_colors */
		$filtered_colors = array();

		foreach ( $color_rules as $rule ) {
			if ( ! is_array( $rule ) ) {
				continue;
			}

			$slug = isset( $rule['slug'] ) ? sanitize_title( (string) $rule['slug'] ) : '';
			if ( '' === $slug || ! isset( $color_presets[ $slug ] ) ) {
				continue;
			}

			if ( isset( $rule['enabled'] ) && false === $rule['enabled'] ) {
				continue;
			}

			$preset = $color_presets[ $slug ];

			if ( isset( $rule['label'] ) && is_string( $rule['label'] ) && '' !== $rule['label'] ) {
				$preset['title'] = $rule['label'];
			}

			$filtered_colors[ $slug ] = $preset;
		}

		$color_presets = $filtered_colors;
	}

	$font_presets = nextora_get_font_presets( $fonts );
	$font_rules   = $config['presets']['fonts'];

	if ( null !== $font_rules ) {
		/** @var array<string, array{ title: string, body: string, heading: string }> $filtered_fonts */
		$filtered_fonts = array();

		foreach ( $font_rules as $rule ) {
			if ( ! is_array( $rule ) ) {
				continue;
			}

			$slug = isset( $rule['slug'] ) ? sanitize_title( (string) $rule['slug'] ) : '';
			if ( '' === $slug || ! isset( $font_presets[ $slug ] ) ) {
				continue;
			}

			if ( isset( $rule['enabled'] ) && false === $rule['enabled'] ) {
				continue;
			}

			$preset = $font_presets[ $slug ];

			if ( isset( $rule['label'] ) && is_string( $rule['label'] ) && '' !== $rule['label'] ) {
				$preset['title'] = $rule['label'];
			}

			$filtered_fonts[ $slug ] = $preset;
		}

		$font_presets = $filtered_fonts;
	}

	$themes      = nextora_get_themes( $fonts );
	$theme_rules = $config['presets']['themes'];

	if ( null !== $theme_rules ) {
		/** @var array<string, array{ title: string, colors: array<string, string>, body: string, heading: string }> $filtered_themes */
		$filtered_themes = array();

		foreach ( $theme_rules as $rule ) {
			if ( ! is_array( $rule ) ) {
				continue;
			}

			$slug = isset( $rule['slug'] ) ? sanitize_title( (string) $rule['slug'] ) : '';
			if ( '' === $slug || ! isset( $themes[ $slug ] ) ) {
				continue;
			}

			if ( isset( $rule['enabled'] ) && false === $rule['enabled'] ) {
				continue;
			}

			$preset = $themes[ $slug ];

			if ( isset( $rule['label'] ) && is_string( $rule['label'] ) && '' !== $rule['label'] ) {
				$preset['title'] = $rule['label'];
			}

			$filtered_themes[ $slug ] = $preset;
		}

		$themes = $filtered_themes;
	}

	$initial_theme = '' !== $config['initial']['theme'] && isset( $themes[ $config['initial']['theme'] ] )
		? $config['initial']['theme']
		: '';

	$initial_color = '' !== $config['initial']['color'] && isset( $color_presets[ $config['initial']['color'] ] )
		? $config['initial']['color']
		: '';

	$initial_font = '' !== $config['initial']['font'] && isset( $font_presets[ $config['initial']['font'] ] )
		? $config['initial']['font']
		: '';

	return array(
		'colorPresets' => $color_presets,
		'fontPresets'  => $font_presets,
		'themes'       => $themes,
		'fonts'        => $fonts,
		'config'       => array(
			'initial'  => array(
				'theme' => $initial_theme,
				'color' => $initial_color,
				'font'  => $initial_font,
			),
			'sections' => $config['sections'],
		),
	);
}
