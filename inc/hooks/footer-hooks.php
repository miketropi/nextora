<?php
/**
 * Extensibility around the site footer (social links, legal strip, shortcodes, etc.).
 *
 * ## Actions
 *
 * - `nextora_footer_before` — Before the footer template part (inside `<footer class="site-footer">`).
 * - `nextora_footer_after` — After the footer template part.
 * - `nextora_footer_after_footer_nav` — Echo markup immediately after the **footer** navigation
 *   block inside `.nextora-footer-nav-cluster` (same row as the footer menu, centered with it).
 *
 * ## Filters
 *
 * - `nextora_footer_after_footer_nav_html` — (string $html, array $block) Adjust or replace the HTML
 *   collected from `nextora_footer_after_footer_nav` before it is appended.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Append plugin / child-theme output after the footer navigation block.
 *
 * Runs at priority 15 so it runs after {@see nextora_render_navigation_from_menu_location()} (10).
 *
 * @param string $block_content Rendered block HTML.
 * @param array  $block         Parsed block array.
 * @return string
 */
function nextora_append_footer_nav_suffix( string $block_content, array $block ): string {
	if ( ( $block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $block_content;
	}

	$attrs = $block['attrs'] ?? array();
	$location = isset( $attrs['__unstableLocation'] ) && is_string( $attrs['__unstableLocation'] )
		? $attrs['__unstableLocation']
		: '';
	if ( 'footer' !== $location ) {
		return $block_content;
	}

	ob_start();
	/**
	 * Fires after the footer navigation block markup; output is placed at the end of the footer nav cluster.
	 *
	 * Example — social icons row:
	 *
	 *     add_action( 'nextora_footer_after_footer_nav', static function (): void {
	 *         echo '<ul class="nextora-footer-social flex gap-3" aria-label="' . esc_attr__( 'Social', 'textdomain' ) . '">';
	 *         echo '<li><a href="#">…</a></li>';
	 *         echo '</ul>';
	 *     } );
	 */
	do_action( 'nextora_footer_after_footer_nav' );

	$html = ob_get_clean();
	$html = is_string( $html ) ? $html : '';
	$html = apply_filters( 'nextora_footer_after_footer_nav_html', $html, $block );

	if ( ! is_string( $html ) || '' === trim( $html ) ) {
		return $block_content;
	}

	return $block_content . '<div class="nextora-footer-nav-suffix">' . $html . '</div>';
}

add_filter( 'render_block', 'nextora_append_footer_nav_suffix', 15, 2 );
