<?php

/**
 * Contact form feature — bootstrap.
 *
 * REST submission, mail handlers, and Tiptap mount registry for message fields.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/instances.php';
require_once __DIR__ . '/recaptcha.php';
require_once __DIR__ . '/handle-submission.php';
require_once __DIR__ . '/register-rest-route.php';
require_once __DIR__ . '/tiptap-mounts.php';
