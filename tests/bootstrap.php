<?php

/**
 * PHPUnit bootstrap (no full WordPress load).
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/wordpress/' );
}

require dirname( __DIR__ ) . '/inc/bootstrap/version.php';
require dirname( __DIR__ ) . '/vendor/autoload.php';
