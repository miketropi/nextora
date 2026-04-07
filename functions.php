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

require_once __DIR__ . '/inc/constants.php';

define( 'NEXTORA_DIR', get_template_directory() );
define( 'NEXTORA_URI', get_template_directory_uri() );

if ( is_readable( NEXTORA_DIR . '/vendor/autoload.php' ) ) {
	require_once NEXTORA_DIR . '/vendor/autoload.php';
}

require_once NEXTORA_DIR . '/inc/theme-support.php';
require_once NEXTORA_DIR . '/inc/post-placeholder.php';
require_once NEXTORA_DIR . '/inc/article-template.php';
require_once NEXTORA_DIR . '/inc/comments.php';
require_once NEXTORA_DIR . '/inc/assets.php';
