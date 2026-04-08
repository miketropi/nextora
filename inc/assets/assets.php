<?php
/**
 * Front-end and editor assets.
 *
 * @package Nextora
 */

declare(strict_types=1);

/**
 * Google Fonts stylesheet (Hanken Grotesk, variable ital + weight).
 */
const NEXTORA_GOOGLE_FONT_STYLESHEET = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap';

add_filter(
	'wp_resource_hints',
	static function ( array $urls, string $relation_type ): array {
		if ( 'preconnect' !== $relation_type ) {
			return $urls;
		}
		$urls[] = array(
			'href'        => 'https://fonts.googleapis.com',
			'crossorigin' => 'anonymous',
		);
		$urls[] = array(
			'href'        => 'https://fonts.gstatic.com',
			'crossorigin' => 'anonymous',
		);
		return $urls;
	},
	10,
	2
);

/**
 * Load default typeface on the front end and in shared block editor assets.
 */
function nextora_enqueue_fonts(): void {
	wp_enqueue_style(
		'nextora-fonts',
		NEXTORA_GOOGLE_FONT_STYLESHEET,
		array(),
		null
	);
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_fonts', 5 );
add_action( 'enqueue_block_assets', 'nextora_enqueue_fonts', 5 );

/**
 * Enqueue compiled Tailwind / theme styles (front + block editor canvas).
 */
function nextora_enqueue_styles(): void {
	$rel  = '/assets/css/app.css';
	$path = NEXTORA_DIR . $rel;
	if ( ! is_readable( $path ) ) {
		return;
	}

	$deps = array( 'nextora-fonts' );
	// Load after WP global styles so unlayered theme rules can override block margins.
	if ( wp_style_is( 'global-styles', 'registered' ) ) {
		$deps[] = 'global-styles';
	}
	wp_enqueue_style(
		'nextora-app',
		NEXTORA_URI . $rel,
		$deps,
		(string) filemtime( $path )
	);
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_styles' );
add_action( 'enqueue_block_assets', 'nextora_enqueue_styles' );

add_action(
	'after_setup_theme',
	static function (): void {
		add_editor_style(
			array(
				NEXTORA_GOOGLE_FONT_STYLESHEET,
				'assets/css/app.css',
			)
		);
	}
);

/**
 * Enqueue TypeScript build output.
 */
function nextora_enqueue_scripts(): void {
	$rel  = '/assets/js/main.js';
	$path = NEXTORA_DIR . $rel;
	if ( ! is_readable( $path ) ) {
		return;
	}

	wp_enqueue_script(
		'nextora-main',
		NEXTORA_URI . $rel,
		array(),
		(string) filemtime( $path ),
		true
	);

	wp_localize_script(
		'nextora-main',
		'nextoraNav',
		array(
			'openMenu'     => __( 'Open menu', 'nextora' ),
			'closeMenu'    => __( 'Close menu', 'nextora' ),
			'openSubmenu'  => __( 'Open submenu', 'nextora' ),
			'closeSubmenu' => __( 'Close submenu', 'nextora' ),
		)
	);

	wp_localize_script(
		'nextora-main',
		'nextoraModal',
		array(
			'closeLabel' => __( 'Close dialog', 'nextora' ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_scripts' );
