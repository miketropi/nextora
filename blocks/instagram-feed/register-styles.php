<?php

/**
 * Instagram Feed block — editor placeholder localization.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_instagram_feed_editor_placeholder_url' ) ) {
	/**
	 * Square placeholder URL for editor preview.
	 */
	function nextora_instagram_feed_editor_placeholder_url(): string {
		$url = get_theme_file_uri( 'assets/images/placeholder/general-img-square.png' );

		/** @var string $url */
		$url = apply_filters( 'nextora_instagram_feed_placeholder_image_url', $url );

		return is_string( $url ) ? $url : '';
	}
}

add_action(
	'enqueue_block_editor_assets',
	static function (): void {
		$handle = 'nextora-instagram-feed-editor-script';
		if ( ! wp_script_is( $handle, 'registered' ) ) {
			return;
		}

		wp_localize_script(
			$handle,
			'nextoraInstagramFeed',
			array(
				'placeholderUrl' => nextora_instagram_feed_editor_placeholder_url(),
			),
		);
	},
	20,
);
