<?php

/**
 * Block style presets for nextora/team-section.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Default team member photo placeholder asset (theme-relative).
 */
function nextora_team_section_photo_placeholder_url(): string {
	$url = get_template_directory_uri() . '/assets/images/placeholder/general-img-portrait.png';

	/** @var string $url */
	$url = apply_filters( 'nextora_team_section_photo_placeholder_url', $url );

	return $url;
}

/**
 * CSS `url(...)` value for `--nextora-team-photo-placeholder`.
 */
function nextora_team_section_photo_placeholder_var(): string {
	return sprintf( "url('%s')", esc_url( nextora_team_section_photo_placeholder_url() ) );
}

/**
 * Expose placeholder URL to the block editor script.
 */
function nextora_team_section_localize_editor_script(): void {
	wp_localize_script(
		'nextora-team-section-editor-script',
		'nextoraTeamSection',
		array(
			'photoPlaceholderUrl' => nextora_team_section_photo_placeholder_url(),
		),
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_team_section_localize_editor_script' );

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
