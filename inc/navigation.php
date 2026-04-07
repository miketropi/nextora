<?php
/**
 * Navigation block ↔ classic menu locations ({@see register_nav_menus()}).
 *
 * Core only resolves `__unstableLocation` when the Gutenberg plugin is active; this
 * filter mirrors that for vanilla WordPress so **Appearance → Menus → Display location** works.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * When a Navigation block declares `__unstableLocation`, has no `ref`, and has no saved
 * inner blocks, render the menu assigned to that location via `wp_nav_menu()`.
 *
 * @param string $block_content Rendered block HTML.
 * @param array  $block         Parsed block array.
 * @return string
 */
function nextora_render_navigation_from_menu_location( string $block_content, array $block ): string {
	if ( ( $block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $block_content;
	}

	$attrs = $block['attrs'] ?? array();
	if ( empty( $attrs['__unstableLocation'] ) || ! is_string( $attrs['__unstableLocation'] ) ) {
		return $block_content;
	}

	$location = $attrs['__unstableLocation'];
	if ( ! has_nav_menu( $location ) ) {
		/* No “Footer Menu” assigned: hide the block (avoid a page-list fallback in the footer). */
		return 'footer' === $location ? '' : $block_content;
	}

	if ( ! empty( $attrs['ref'] ) ) {
		return $block_content;
	}

	if ( ! empty( $block['innerBlocks'] ) ) {
		return $block_content;
	}

	$menu_class = 'nextora-header-menu wp-block-navigation__container is-responsive';
	if ( 'footer' === $location ) {
		$menu_class = 'nextora-footer-menu wp-block-navigation__container is-responsive';
	}

	$args = array(
		'theme_location' => $location,
		'container'      => false,
		'menu_class'     => $menu_class,
		'menu_id'        => 'menu-' . sanitize_html_class( $location ),
		'fallback_cb'    => false,
		'depth'          => 4,
		'echo'           => false,
	);

	$menu_html = wp_nav_menu( $args );
	if ( ! is_string( $menu_html ) || '' === $menu_html ) {
		return $block_content;
	}

	$nav_classes = array(
		'wp-block-navigation',
		'is-horizontal',
		'is-content-justification-right',
		'is-layout-flex',
		'nextora-navigation-from-location',
		'nextora-navigation-from-location--' . sanitize_html_class( $location ),
	);

	if ( 'footer' === $location ) {
		$nav_classes[] = 'is-content-justification-center';
		$nav_classes   = array_diff( $nav_classes, array( 'is-content-justification-right' ) );
	}

	$aria = isset( $attrs['ariaLabel'] ) && is_string( $attrs['ariaLabel'] ) ? trim( $attrs['ariaLabel'] ) : '';
	$aria = '' !== $aria ? ' aria-label="' . esc_attr( $aria ) . '"' : '';

	return '<nav class="' . esc_attr( implode( ' ', $nav_classes ) ) . '"' . $aria . '>' . $menu_html . '</nav>';
}

add_filter( 'render_block', 'nextora_render_navigation_from_menu_location', 10, 2 );
