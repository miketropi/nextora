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
 * Normalize theme.json font family presets for the editor script.
 *
 * @param list<array<string, mixed>> $families Raw font family presets.
 *
 * @return list<array{slug: string, name: string, fontFamily: string}>
 */
function nextora_normalize_heading_font_families( array $families ): array {
	$fonts = array();

	foreach ( $families as $family ) {
		if ( ! is_array( $family ) ) {
			continue;
		}

		$slug = isset( $family['slug'] ) ? sanitize_key( (string) $family['slug'] ) : '';
		$name = isset( $family['name'] ) ? sanitize_text_field( (string) $family['name'] ) : $slug;
		$font_family = isset( $family['fontFamily'] ) ? (string) $family['fontFamily'] : '';

		if ( '' === $slug || '' === $font_family ) {
			continue;
		}

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
 * @return list<array{slug: string, name: string, fontFamily: string}>
 */
function nextora_get_heading_inline_font_families(): array {
	if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
		$theme_data = WP_Theme_JSON_Resolver::get_theme_data();
		$settings   = $theme_data->get_settings();
		$families   = $settings['typography']['fontFamilies'] ?? array();

		if ( is_array( $families ) && array() !== $families ) {
			/** @var list<array<string, mixed>> $families */
			$fonts = nextora_normalize_heading_font_families( $families );
			if ( array() !== $fonts ) {
				return $fonts;
			}
		}
	}

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

	/** @var list<array<string, mixed>> $families */
	return nextora_normalize_heading_font_families( $families );
}
