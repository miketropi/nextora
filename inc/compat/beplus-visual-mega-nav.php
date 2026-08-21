<?php

/**
 * Nextora — Beplus Visual Mega Nav compatibility.
 *
 * Registers Nextora theme blocks in the mega menu Content Builder
 * via the plugin's `beplus_vmn_allowed_blocks` filter. Each block
 * is only added when it is actually registered (safe when the
 * plugin is used on another theme).
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter(
	'beplus_vmn_allowed_blocks',
	static function ( array $blocks ): array {
		$registry = WP_Block_Type_Registry::get_instance();

		$theme_blocks = array(
			'nextora/box-icon',
			'nextora/box-image',
			'nextora/advanced-button',
			'nextora/advanced-button-button',
			'nextora/counters',
			'nextora/advanced-icon',
			'nextora/advanced-list',
			'nextora/blog-list-carousel',
			'nextora/testimonials',
		);

		foreach ( $theme_blocks as $block_name ) {
			if ( $registry->is_registered( $block_name ) ) {
				$blocks[] = $block_name;
			}
		}

		return $blocks;
	},
);

/**
 * Make the Lucide icon catalog URL available on the frontend so that
 * the plugin's tab-container block can render per-tab icons.
 */
add_action(
	'wp_enqueue_scripts',
	static function (): void {
		if ( ! defined( 'NEXTORA_URI' ) || ! defined( 'NEXTORA_DIR' ) ) {
			return;
		}

		$json_path = NEXTORA_DIR . '/assets/data/lucide-icons.json';
		if ( ! is_readable( $json_path ) ) {
			return;
		}

		wp_add_inline_script(
			'beplus-vmn-tabs',
			'window.nextoraIconBlock = ' . wp_json_encode(
				array(
					'iconsUrl' => NEXTORA_URI . '/assets/data/lucide-icons.json',
				),
			) . ';',
			'before',
		);
	},
);

/**
 * Theme the mega panel / sub-menu / mobile portal background to the theme's
 * "base" preset color so the color-scheme switcher's dark/light presets flow
 * through the plugin's surfaces instead of staying hardcoded white.
 *
 * Loaded after the plugin's `beplus-vmn-front` stylesheet via a dependency,
 * so this override wins the cascade.
 */
add_action(
	'wp_enqueue_scripts',
	static function (): void {
		if ( ! wp_style_is( 'beplus-vmn-front', 'registered' ) && ! wp_style_is( 'beplus-vmn-front', 'enqueued' ) ) {
			return;
		}

		wp_register_style(
			'nextora-beplus-vmn-theme',
			false,
			array( 'beplus-vmn-front' ),
			NEXTORA_VERSION,
		);
		wp_enqueue_style( 'nextora-beplus-vmn-theme' );

		wp_add_inline_style(
			'nextora-beplus-vmn-theme',
			':root{--beplus-vmn-mega-bg:var(--wp--preset--color--base,#fff);}',
		);
	},
	20,
);
