<?php

/**
 * Block style presets for nextora/team-section.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Register team section style variations.
 */
function nextora_register_team_section_block_styles(): void {
	$block = 'nextora/team-section';

	register_block_style(
		$block,
		array(
			'name'  => 'soft-band',
			'label' => __( 'Soft band', 'nextora' ),
		),
	);

	register_block_style(
		$block,
		array(
			'name'  => 'contrast-band',
			'label' => __( 'Contrast band', 'nextora' ),
		),
	);
}
add_action( 'init', 'nextora_register_team_section_block_styles', 20 );
