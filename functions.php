<?php
/**
 * Nextora hybrid theme bootstrap.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/inc/bootstrap/constants.php';

define( 'NEXTORA_DIR', get_template_directory() );
define( 'NEXTORA_URI', get_template_directory_uri() );

if ( is_readable( NEXTORA_DIR . '/vendor/autoload.php' ) ) {
	require_once NEXTORA_DIR . '/vendor/autoload.php';
}

require_once NEXTORA_DIR . '/inc/setup/theme-support.php';
require_once NEXTORA_DIR . '/inc/setup/elementor.php';
require_once NEXTORA_DIR . '/inc/navigation/navigation.php';
require_once NEXTORA_DIR . '/inc/features/spotlight-search/load.php';
require_once NEXTORA_DIR . '/inc/hooks/header-hooks.php';
require_once NEXTORA_DIR . '/inc/hooks/footer-hooks.php';
require_once NEXTORA_DIR . '/inc/template/post-placeholder.php';
require_once NEXTORA_DIR . '/inc/template/article-template.php';
require_once NEXTORA_DIR . '/inc/template/article-share.php';
require_once NEXTORA_DIR . '/inc/template/page-heading.php';
require_once NEXTORA_DIR . '/inc/comments/comments.php';
require_once NEXTORA_DIR . '/inc/assets/assets.php';

require_once NEXTORA_DIR . '/blocks/blocks.php';