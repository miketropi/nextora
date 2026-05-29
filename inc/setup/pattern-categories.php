<?php

/**
 * Block pattern categories for theme patterns in patterns/.
 *
 * @package Nextora
 */

declare( strict_types=1 );

add_action(
	'init',
	static function (): void {
		register_block_pattern_category(
			'nextora-page-title',
			array(
				'label'       => __( 'Page Title', 'nextora' ),
				'description' => __( 'Internal page headers with breadcrumbs and title.', 'nextora' ),
			),
		);
		register_block_pattern_category(
			'nextora-core-values',
			array(
				'label'       => __( 'Core Values', 'nextora' ),
				'description' => __( 'Core values pattern with background color and padding.', 'nextora' ),
			),
		);
		register_block_pattern_category(
			'nextora-newsletter',
			array(
				'label'       => __( 'Newsletter', 'nextora' ),
				'description' => __( 'Newsletter section with background color and padding.', 'nextora' ),
			),
		);
	},
);
