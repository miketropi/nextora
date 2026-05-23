<?php

/**
 * Nextora block theme bootstrap.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/inc/bootstrap/constants.php';

if ( is_readable( NEXTORA_DIR . '/vendor/autoload.php' ) ) {
	require_once NEXTORA_DIR . '/vendor/autoload.php';
}

require_once NEXTORA_DIR . '/inc/setup/theme-support.php';
require_once NEXTORA_DIR . '/inc/setup/elementor.php';
require_once NEXTORA_DIR . '/inc/navigation/navigation.php';
require_once NEXTORA_DIR . '/inc/navigation/header-block-woocommerce.php';
require_once NEXTORA_DIR . '/inc/navigation/class-nextora-header-block-walker.php';
require_once NEXTORA_DIR . '/inc/features/spotlight-search/load.php';
require_once NEXTORA_DIR . '/inc/comments/comments.php';
require_once NEXTORA_DIR . '/inc/assets/assets.php';
require_once NEXTORA_DIR . '/blocks/blocks.php';

/**
 * Add custom template type for Save the World home page.
 */
add_filter(
	'default_template_types',
	static function ( array $template_types ): array {
		$template_types['home-save-the-world'] = array(
			'title'       => __( 'Home — Save the World', 'nextora' ),
			'description' => __(
				'Campaign homepage for Save the World: arc gallery hero, partner logo marquee, impact story with counters, volunteer team carousel, and testimonials.',
				'nextora',
			),
		);

		return $template_types;
	},
);
