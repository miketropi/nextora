<?php

/**
 * Nextora Addon — bootstrap.
 *
 * Admin page showcasing child themes, supported plugins/extensions,
 * and business services in a React-powered UI.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/data/child-themes.php';
require_once __DIR__ . '/data/plugins.php';
require_once __DIR__ . '/data/business-services.php';
require_once __DIR__ . '/data/overview.php';
require_once __DIR__ . '/rest-routes.php';
require_once __DIR__ . '/admin-menu.php';
require_once __DIR__ . '/admin-enqueue.php';
