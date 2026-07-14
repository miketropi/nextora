<?php

/**
 * Color scheme data — read styles/color-scheme/*.json.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Read styles/color-scheme/*.json and return a minimal schemes map:
 * [ slug => [ 'title' => string, 'colors' => [ colorSlug => colorValue ] ] ]
 *
 * @return array<string, array{ title: string, colors: array<string, string> }>
 */
function nextora_get_color_schemes(): array {
	$schemes = array();
	$files   = glob( get_stylesheet_directory() . '/styles/color-scheme/*.json' );

	if ( empty( $files ) ) {
		return $schemes;
	}

	foreach ( $files as $file ) {
		$data = json_decode( (string) file_get_contents( $file ), true );

		if ( empty( $data['settings']['color']['palette'] ) || ! is_array( $data['settings']['color']['palette'] ) ) {
			continue;
		}

		$slug   = sanitize_title( $data['title'] ?? basename( $file, '.json' ) );
		$colors = array();

		foreach ( $data['settings']['color']['palette'] as $color ) {
			if ( empty( $color['slug'] ) || empty( $color['color'] ) ) {
				continue;
			}

			$colors[ _wp_to_kebab_case( (string) $color['slug'] ) ] = $color['color'];
		}

		if ( $colors ) {
			$schemes[ $slug ] = array(
				'title'  => $data['title'] ?? $slug,
				'colors' => $colors,
			);
		}
	}

	return $schemes;
}
