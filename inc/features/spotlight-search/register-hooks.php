<?php
/**
 * Spotlight search — optional legacy PHP hook (`nextora_header_after_primary_nav`).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Search icon after the primary nav; opens the shared Nextora modal (`docs/modal.md`).
 *
 * @return void
 */
function nextora_header_search_modal_trigger(): void {
	if ( ! apply_filters( 'nextora_show_header_search_modal', true ) ) {
		return;
	}

	static $did = false;
	if ( $did ) {
		return;
	}
	$did = true;

	$args = nextora_get_header_search_modal_markup_args();

	/**
	 * Fires before the header search modal markup is output.
	 *
	 * @param array<string, string> $args {@see nextora_get_header_search_modal_markup_args()}.
	 */
	do_action( 'nextora_header_search_modal_before', $args );

	$html = nextora_get_header_search_modal_markup( $args );
	$html = apply_filters( 'nextora_header_search_modal_output', $html, $args );
	$html = is_string( $html ) ? $html : '';

	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Filter may return full HTML; core pattern.
	echo $html;

	/**
	 * Fires after the header search modal markup is output.
	 *
	 * @param array<string, string> $args {@see nextora_get_header_search_modal_markup_args()}.
	 */
	do_action( 'nextora_header_search_modal_after', $args );
}

if ( apply_filters( 'nextora_header_spotlight_search_use_php_hook', false ) ) {
	add_action( 'nextora_header_after_primary_nav', 'nextora_header_search_modal_trigger', 20 );
}
