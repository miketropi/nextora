<?php
/**
 * Elementor compatibility (editor + Elementor Pro Theme Builder locations).
 *
 * @package Nextora
 */

declare(strict_types=1);

/**
 * Hide the theme page-heading band on singular views built with Elementor so titles/heroes are not duplicated.
 *
 * Disable with: `add_filter( 'nextora_elementor_hide_page_heading', '__return_false' );`
 */
add_filter(
	'nextora_show_page_heading',
	static function ( bool $show ): bool {
		if ( ! $show ) {
			return false;
		}

		if ( ! apply_filters( 'nextora_elementor_hide_page_heading', true ) ) {
			return true;
		}

		if ( ! is_singular() ) {
			return $show;
		}

		$post_id = (int) get_queried_object_id();
		if ( $post_id <= 0 ) {
			return $show;
		}

		if ( get_post_meta( $post_id, '_elementor_edit_mode', true ) !== 'builder' ) {
			return $show;
		}

		return false;
	},
	11
);

// Giới hạn Elementor history 10 steps
add_filter('elementor/editor/localize_settings', function($settings) {
	$settings['historyStepsCount'] = 5;
	return $settings;
});