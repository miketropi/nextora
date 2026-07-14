<?php

/**
 * Color scheme switcher — bootstrap.
 *
 * Guest-facing color scheme switcher. When the constant
 * NEXTORA_COLOR_SCHEME_SWITCHER is strictly `true`, visitors can
 * switch between color presets defined in styles/color-scheme/*.json
 * entirely client-side via JS. No PHP CSS generation.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'NEXTORA_COLOR_SCHEME_SWITCHER' ) || true !== NEXTORA_COLOR_SCHEME_SWITCHER ) {
	return;
}

require_once __DIR__ . '/scheme-data.php';
require_once __DIR__ . '/enqueue.php';
