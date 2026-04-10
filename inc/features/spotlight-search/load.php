<?php
/**
 * Spotlight search feature — bootstrap.
 *
 * Loads modal shell markup, live-search UI, script localization, block arg merge,
 * and the optional legacy PHP hook. CSS: `resources/css/modules/components/spotlight-search.css`.
 * JS: `resources/ts/lib/spotlight-search.ts`.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/modal-markup.php';
require_once __DIR__ . '/search-ui.php';
require_once __DIR__ . '/register-hooks.php';
