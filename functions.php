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
require_once NEXTORA_DIR . '/inc/setup/pattern-categories.php';
require_once NEXTORA_DIR . '/inc/setup/elementor.php';
require_once NEXTORA_DIR . '/inc/navigation/navigation.php';
require_once NEXTORA_DIR . '/inc/navigation/header-block-woocommerce.php';
require_once NEXTORA_DIR . '/inc/navigation/class-nextora-header-block-walker.php';
require_once NEXTORA_DIR . '/inc/features/spotlight-search/load.php';
require_once NEXTORA_DIR . '/inc/features/theme-updater/load.php';
require_once NEXTORA_DIR . '/inc/comments/comments.php';
require_once NEXTORA_DIR . '/inc/features/contact-form/load.php';
require_once NEXTORA_DIR . '/inc/features/google-maps/load.php';
require_once NEXTORA_DIR . '/inc/assets/assets.php';
require_once NEXTORA_DIR . '/inc/features/heading-inline-font/load.php';
require_once NEXTORA_DIR . '/inc/features/color-scheme-switcher/load.php';
require_once NEXTORA_DIR . '/blocks/blocks.php';
require_once NEXTORA_DIR . '/inc/compat/beplus-visual-mega-nav.php';
require_once NEXTORA_DIR . '/extensions/load.php';
