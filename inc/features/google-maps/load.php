<?php

/**
 * Google Maps feature — bootstrap.
 *
 * API key accessor, block instance detection, conditional Maps SDK enqueue.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/api-key.php';
require_once __DIR__ . '/instances.php';
require_once __DIR__ . '/enqueue.php';
