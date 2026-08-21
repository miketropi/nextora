<?php

declare( strict_types=1 );
/**
 * Register all blocks located in the /blocks directory.
 *
 * Each block folder must contain a block.json file.
 * WordPress reads block.json automatically — no need to list each block manually.
 *
 * Drop this into your theme's functions.php.
 */
function nextora_register_blocks(): void {
	$blocks_dir = get_template_directory() . '/blocks';

	if ( ! is_dir( $blocks_dir ) ) {
		return;
	}

	$block_dirs = glob( $blocks_dir . '/*', GLOB_ONLYDIR );
	if ( false === $block_dirs ) {
		return;
	}

	foreach ( $block_dirs as $block_dir ) {
		// Expects block.json + index.asset.php + index.js inside $block_dir
		register_block_type( $block_dir );
	}
}
add_action( 'init', 'nextora_register_blocks' );

$scrolling_promotion_styles = __DIR__ . '/scrolling-promotion/register-styles.php';
if ( is_readable( $scrolling_promotion_styles ) ) {
	require_once $scrolling_promotion_styles;
}

$scrolling_promotion_editor = __DIR__ . '/scrolling-promotion/register-editor.php';
if ( is_readable( $scrolling_promotion_editor ) ) {
	require_once $scrolling_promotion_editor;
}

$arc_gallery_styles = __DIR__ . '/arc-gallery-section/register-styles.php';
if ( is_readable( $arc_gallery_styles ) ) {
	require_once $arc_gallery_styles;
}

$team_section_styles = __DIR__ . '/team-section/register-styles.php';
if ( is_readable( $team_section_styles ) ) {
	require_once $team_section_styles;
}

$instagram_feed_styles = __DIR__ . '/instagram-feed/register-styles.php';
if ( is_readable( $instagram_feed_styles ) ) {
	require_once $instagram_feed_styles;
}
$advanced_icon_editor = __DIR__ . '/advanced-icon/register-editor.php';
if ( is_readable( $advanced_icon_editor ) ) {
	require_once $advanced_icon_editor;
}
$advanced_button_editor = __DIR__ . '/advanced-button/register-editor.php';
if ( is_readable( $advanced_button_editor ) ) {
	require_once $advanced_button_editor;
}

$advanced_button_button_editor = __DIR__ . '/advanced-button-button/register-editor.php';
if ( is_readable( $advanced_button_button_editor ) ) {
	require_once $advanced_button_button_editor;
}

$advanced_container_editor = __DIR__ . '/advanced-container/register-editor.php';
if ( is_readable( $advanced_container_editor ) ) {
	require_once $advanced_container_editor;
}

$box_icon_editor = __DIR__ . '/box-icon/register-editor.php';
if ( is_readable( $box_icon_editor ) ) {
	require_once $box_icon_editor;
}

$box_image_editor = __DIR__ . '/box-image/register-editor.php';
if ( is_readable( $box_image_editor ) ) {
	require_once $box_image_editor;
}

$event_editor = __DIR__ . '/event/register-editor.php';
if ( is_readable( $event_editor ) ) {
	require_once $event_editor;
}

$header_editor = __DIR__ . '/header/register-editor.php';
if ( is_readable( $header_editor ) ) {
	require_once $header_editor;
}

$scrolling_image_strip_editor = __DIR__ . '/scrolling-image-strip/register-editor.php';
if ( is_readable( $scrolling_image_strip_editor ) ) {
	require_once $scrolling_image_strip_editor;
}

$text_reveal_animation_editor = __DIR__ . '/text-reveal-animation/register-editor.php';
if ( is_readable( $text_reveal_animation_editor ) ) {
	require_once $text_reveal_animation_editor;
}
