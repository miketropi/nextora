<?php
/**
 * Constants available while analysing theme PHP with PHPStan.
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/wordpress/' );
}
if ( ! defined( 'NEXTORA_VERSION' ) ) {
	define( 'NEXTORA_VERSION', '1.0.0' );
}
if ( ! defined( 'NEXTORA_DIR' ) ) {
	define( 'NEXTORA_DIR', __DIR__ );
}
if ( ! defined( 'NEXTORA_URI' ) ) {
	define( 'NEXTORA_URI', 'https://example.test/wp-content/themes/nextora' );
}
