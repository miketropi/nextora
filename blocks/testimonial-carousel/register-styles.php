<?php

/**
 * Block style presets for nextora/testimonial-carousel.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Register testimonial carousel style variations.
 */
function nextora_register_testimonial_carousel_block_styles(): void {
	$block = 'nextora/testimonial-carousel';

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
add_action( 'init', 'nextora_register_testimonial_carousel_block_styles', 20 );
