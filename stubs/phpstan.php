<?php

/**
 * PHPStan stubs — merge with WordPress stubs where signatures differ.
 *
 * @package Nextora
 */

declare( strict_types=1 );

namespace {
	/**
	 * Nav menu items are {@see WP_Post} objects with extra fields from {@see wp_setup_nav_menu_item()}.
	 *
	 * @property string       $title
	 * @property list<string> $classes
	 * @property string       $attr_title
	 * @property string       $target
	 * @property string       $xfn
	 * @property string       $url
	 * @property int          $db_id
	 * @property int          $menu_item_parent
	 */
	class WP_Post {
	}

	/**
	 * @param array<string, mixed> $args
	 *
	 * @return string|false
	 */
	function wp_nav_menu( $args = array() ) {
		return '';
	}
}
