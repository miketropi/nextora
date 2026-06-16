<?php

/**
 * Theme font families for the heading inline-font format.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Flatten grouped font-family presets from global settings.
 *
 * `wp_get_global_settings()` returns presets grouped by origin (`theme`, `custom`, `default`).
 *
 * @param mixed $families Raw or grouped font family presets.
 *
 * @return list<array<string, mixed>>
 */
function nextora_flatten_global_font_families( mixed $families ): array {
	if ( ! is_array( $families ) || array() === $families ) {
		return array();
	}

	if ( isset( $families[0] ) && is_array( $families[0] ) && isset( $families[0]['slug'] ) ) {
		/** @var list<array<string, mixed>> $families */
		return $families;
	}

	$flat       = array();
	$origins    = array( 'theme', 'custom', 'default' );
	$origin_set = array_flip( $origins );

	foreach ( $origins as $origin ) {
		if ( ! isset( $families[ $origin ] ) || ! is_array( $families[ $origin ] ) ) {
			continue;
		}

		foreach ( $families[ $origin ] as $family ) {
			if ( ! is_array( $family ) || ! isset( $family['slug'] ) ) {
				continue;
			}

			$slug = sanitize_key( (string) $family['slug'] );
			if ( '' === $slug ) {
				continue;
			}

			$flat[ $slug ] = $family;
		}
	}

	foreach ( $families as $key => $group ) {
		if ( isset( $origin_set[ $key ] ) || ! is_array( $group ) ) {
			continue;
		}

		foreach ( $group as $family ) {
			if ( ! is_array( $family ) || ! isset( $family['slug'] ) ) {
				continue;
			}

			$slug = sanitize_key( (string) $family['slug'] );
			if ( '' === $slug ) {
				continue;
			}

			$flat[ $slug ] = $family;
		}
	}

	return array_values( $flat );
}

/**
 * Build a slug => font-family stack map from raw theme.json font presets.
 *
 * @return array<string, string>
 */
function nextora_get_theme_json_font_family_map(): array {
	$theme_json_path = NEXTORA_DIR . '/theme.json';
	if ( ! is_readable( $theme_json_path ) ) {
		return array();
	}

	/** @var mixed $theme_json */
	$theme_json = json_decode( (string) file_get_contents( $theme_json_path ), true );
	if ( ! is_array( $theme_json ) ) {
		return array();
	}

	$families = $theme_json['settings']['typography']['fontFamilies'] ?? array();
	if ( ! is_array( $families ) ) {
		return array();
	}

	$map = array();

	foreach ( nextora_flatten_global_font_families( $families ) as $family ) {
		$slug = isset( $family['slug'] ) ? sanitize_key( (string) $family['slug'] ) : '';
		$font_family = isset( $family['fontFamily'] ) ? (string) $family['fontFamily'] : '';

		if ( '' === $slug || '' === $font_family ) {
			continue;
		}

		$map[ $slug ] = $font_family;
	}

	return $map;
}

/**
 * Resolve a preset CSS var to a concrete font-family stack when possible.
 *
 * @param string                $font_family Font family value (stack or CSS var).
 * @param array<string, string> $preset_map  Slug => stack map.
 */
function nextora_resolve_heading_font_family_stack( string $font_family, array $preset_map ): string {
	if ( preg_match( '/var\(--wp--preset--font-family--([a-z0-9-]+)\)/', $font_family, $matches ) ) {
		$slug = sanitize_key( $matches[1] );

		if ( isset( $preset_map[ $slug ] ) ) {
			return nextora_resolve_heading_font_family_stack( $preset_map[ $slug ], $preset_map );
		}
	}

	return $font_family;
}

/**
 * Build slug => stack map from grouped or flat font presets.
 *
 * @param mixed $families Raw or grouped font family presets.
 *
 * @return array<string, string>
 */
function nextora_build_font_family_preset_map( mixed $families ): array {
	$map = array();

	foreach ( nextora_flatten_global_font_families( $families ) as $family ) {
		$slug = isset( $family['slug'] ) ? sanitize_key( (string) $family['slug'] ) : '';
		$font_family = isset( $family['fontFamily'] ) ? (string) $family['fontFamily'] : '';

		if ( '' === $slug || '' === $font_family ) {
			continue;
		}

		$map[ $slug ] = $font_family;
	}

	return $map;
}

/**
 * Normalize theme.json font family presets for the editor script.
 *
 * @param list<array<string, mixed>> $families   Raw font family presets.
 * @param array<string, string>      $preset_map Slug => stack map for var() resolution.
 *
 * @return list<array{slug: string, name: string, fontFamily: string}>
 */
function nextora_normalize_heading_font_families( array $families, array $preset_map ): array {
	$fonts = array();

	foreach ( $families as $family ) {
		if ( ! is_array( $family ) ) {
			continue;
		}

		$slug = isset( $family['slug'] ) ? sanitize_key( (string) $family['slug'] ) : '';
		$name = isset( $family['name'] ) ? sanitize_text_field( (string) $family['name'] ) : $slug;
		$font_family = isset( $family['fontFamily'] ) ? (string) $family['fontFamily'] : '';

		if ( '' === $slug ) {
			continue;
		}

		if ( '' === $font_family ) {
			$font_family = $preset_map[ $slug ] ?? 'var(--wp--preset--font-family--' . $slug . ')';
		}

		$font_family = nextora_resolve_heading_font_family_stack( $font_family, $preset_map );

		if ( str_starts_with( $font_family, 'var(' ) ) {
			continue;
		}

		$preset_map[ $slug ] = $font_family;

		$fonts[] = array(
			'slug'       => $slug,
			'name'       => $name,
			'fontFamily' => $font_family,
		);
	}

	return $fonts;
}

/**
 * Font presets exposed to the block editor inline-font picker.
 *
 * Uses merged global settings (theme + user typeset) so Site Editor font changes are reflected.
 *
 * @return list<array{slug: string, name: string, fontFamily: string}>
 */
function nextora_get_heading_inline_font_families(): array {
	$preset_map = nextora_get_theme_json_font_family_map();

	if ( function_exists( 'wp_get_global_settings' ) ) {
		/** @var mixed $raw_families */
		$raw_families = wp_get_global_settings( array( 'typography', 'fontFamilies' ) );

		if ( is_array( $raw_families ) && array() !== $raw_families ) {
			$preset_map = array_merge(
				$preset_map,
				nextora_build_font_family_preset_map( $raw_families ),
			);

			/** @var list<array<string, mixed>> $families */
			$families = nextora_flatten_global_font_families( $raw_families );
			$fonts    = nextora_normalize_heading_font_families( $families, $preset_map );

			if ( array() !== $fonts ) {
				return $fonts;
			}
		}
	}

	if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
		$theme_data = WP_Theme_JSON_Resolver::get_merged_data();
		$settings   = $theme_data->get_settings();
		$raw_families = $settings['typography']['fontFamilies'] ?? array();

		if ( is_array( $raw_families ) && array() !== $raw_families ) {
			$preset_map = array_merge(
				$preset_map,
				nextora_build_font_family_preset_map( $raw_families ),
			);

			/** @var list<array<string, mixed>> $families */
			$families = nextora_flatten_global_font_families( $raw_families );
			$fonts    = nextora_normalize_heading_font_families( $families, $preset_map );

			if ( array() !== $fonts ) {
				return $fonts;
			}
		}
	}

	/** @var list<array<string, mixed>> $theme_families */
	$theme_families = array();

	foreach ( $preset_map as $slug => $font_family ) {
		$theme_families[] = array(
			'slug'       => $slug,
			'name'       => ucwords( str_replace( '-', ' ', $slug ) ),
			'fontFamily' => $font_family,
		);
	}

	return nextora_normalize_heading_font_families( $theme_families, $preset_map );
}
