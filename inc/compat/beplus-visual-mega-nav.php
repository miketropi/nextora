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
			'nextora/blog-list-carousel',
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
