<?php

/**
 * Color scheme switcher — bootstrap.
 *
 * Guest-facing appearance switcher. When the constant
 * NEXTORA_COLOR_SCHEME_SWITCHER is strictly `true`, visitors can switch
 * between color presets and font presets entirely client-side via JS
 * (popover UI), persist their choice (localStorage), and share it via URL
 * query params (?color=…&font=…). No PHP CSS generation.
 *
 * Presets are read from both parent and child theme so the feature works
 * under a child theme.
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
