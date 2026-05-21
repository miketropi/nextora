<?php

/**
 * Markup walker for {@see nextora/header} primary menu — adds a submenu toggle control
 * for `.nextora-primary-nav-portal` accordion behavior (see `header-nav.ts` + `nav-menus.css`).
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Nav menu walker for the header block.
 */
class Nextora_Header_Block_Menu_Walker extends Walker_Nav_Menu {

	/**
	 * Starts the list before the elements are added.
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 */
	public function start_lvl( &$output, $depth = 0, $args = null ): void { // phpcs:ignore Universal.NamingConventions.NoReservedKeywordParameterNames
		if ( ! is_object( $args ) ) {
			$args = new stdClass();
		}

		$indent  = "\n" . str_repeat( "\t", (int) $depth + 1 );
		$classes = array( 'sub-menu' );

		$class_names = join( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		$output .= "{$indent}<ul$class_names>\n";
	}

	/**
	 * Ends the list after the elements are added.
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 */
	public function end_lvl( &$output, $depth = 0, $args = null ): void { // phpcs:ignore Universal.NamingConventions.NoReservedKeywordParameterNames
		$indent  = "\n" . str_repeat( "\t", (int) $depth + 1 );
		$output .= "{$indent}</ul>\n";
	}

	/**
	 * Starts the element output.
	 *
	 * @param string   $output            Used to append additional content (passed by reference).
	 * @param WP_Post  $data_object       Menu item data object.
	 * @param int      $depth             Depth of menu item. Used for padding.
	 * @param stdClass $args              An object of wp_nav_menu() arguments.
	 * @param int      $current_object_id Optional. ID of the current menu item. Default 0.
	 */
	public function start_el( &$output, $data_object, $depth = 0, $args = null, $current_object_id = 0 ): void { // phpcs:ignore Universal.NamingConventions.NoReservedKeywordParameterNames
		if ( ! is_object( $args ) ) {
			$args = new stdClass();
		}

		if ( ! $data_object instanceof WP_Post ) {
			return;
		}

		$item = $data_object;

		$indent = ( $depth ) ? str_repeat( "\t", (int) $depth ) : '';

		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;

		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		$id_attr = apply_filters( 'nav_menu_item_id', 'menu-item-' . (string) $item->ID, $item, $args, $depth );
		$id_attr = $id_attr ? ' id="' . esc_attr( $id_attr ) . '"' : '';

		$output .= $indent . '<li' . $id_attr . $class_names . '>';

		$atts           = array();
		$atts['title']  = ! empty( $item->attr_title ) ? (string) $item->attr_title : '';
		$atts['target'] = ! empty( $item->target ) ? (string) $item->target : '';
		$atts['rel']    = ! empty( $item->xfn ) ? (string) $item->xfn : '';
		$atts['href']   = ! empty( $item->url ) ? (string) $item->url : '';

		$atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

		$attributes = '';
		foreach ( $atts as $attr => $value ) {
			if ( is_scalar( $value ) && '' !== $value && false !== $value ) {
				$value       = ( 'href' === $attr ) ? esc_url( (string) $value ) : esc_attr( (string) $value );
				$attributes .= ' ' . $attr . '="' . $value . '"';
			}
		}

		$link_before = isset( $args->link_before ) ? (string) $args->link_before : '';
		$link_after  = isset( $args->link_after ) ? (string) $args->link_after : '';

		$title = apply_filters( 'nav_menu_item_title', $item->title, $item, $args, $depth );

		$output .= '<a' . $attributes . '>';
		$output .= $link_before . $title . $link_after;
		$output .= '</a>';

		$has_children = in_array( 'menu-item-has-children', $item->classes, true );
		if ( $has_children ) {
			$icon = apply_filters(
				'nextora_header_block_submenu_toggle_icon',
				'<span class="nextora-submenu-toggle__icon" aria-hidden="true"><svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
				$item,
				(int) $depth,
			);

			$label = apply_filters(
				'nextora_header_block_submenu_toggle_label',
				sprintf(
					/* translators: %s: navigation menu item label */
					__( 'Toggle submenu for %s', 'nextora' ),
					wp_strip_all_tags( (string) $item->title ),
				),
				$item,
				(int) $depth,
			);

			$output .= '<button type="button" class="nextora-submenu-toggle" aria-expanded="false" aria-haspopup="true" aria-label="' . esc_attr( $label ) . '">';
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Theme filter returns icon markup.
			$output .= $icon;
			$output .= '</button>';
		}
	}

	/**
	 * Ends the element output, if needed.
	 *
	 * @param string   $output      Used to append additional content (passed by reference).
	 * @param WP_Post  $data_object Menu item data object. Empty for `end_el`.
	 * @param int      $depth       Depth of menu item. Used for padding.
	 * @param stdClass $args        An object of wp_nav_menu() arguments.
	 */
	public function end_el( &$output, $data_object, $depth = 0, $args = null ): void { // phpcs:ignore Universal.NamingConventions.NoReservedKeywordParameterNames
		$output .= "</li>\n";
	}
}
