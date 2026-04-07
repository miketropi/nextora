<?php
/**
 * PHPUnit bootstrap (no full WordPress load).
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/wordpress/' );
}

if ( ! defined( 'NEXTORA_VERSION' ) ) {
	define( 'NEXTORA_VERSION', '1.0.0' );
}

require dirname( __DIR__ ) . '/vendor/autoload.php';
