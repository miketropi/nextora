<?php

/** Image selection for Box Image template 6. */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_box_image_render_template6_image' ) ) {
	/**
	 * Prefer a matching local attachment, but never let a stale imported ID mask a URL.
	 */
	function nextora_box_image_render_template6_image( int $image_id, string $image_url ): string {
		$image_url = trim( $image_url );
		$use_id    = $image_id > 0;
		if ( $use_id && '' !== $image_url ) {
			$attachment_url = wp_get_attachment_url( $image_id );
			$medium         = wp_get_attachment_image_src( $image_id, 'medium_large' );
			$without_query  = static fn( string $url ): string => strtok( $url, '?#' ) ?: '';
			$stored_url     = $without_query( $image_url );
			$use_id         = ( is_string( $attachment_url ) && $stored_url === $without_query( $attachment_url ) )
				|| ( is_array( $medium ) && isset( $medium[0] ) && is_string( $medium[0] ) && $stored_url === $without_query( $medium[0] ) )
				|| attachment_url_to_postid( $image_url ) === $image_id;
		}

		if ( $use_id ) {
			$image = wp_get_attachment_image( $image_id, 'medium_large', false, array( 'class' => 'nextora-box-image__card-image', 'loading' => 'lazy', 'decoding' => 'async' ) );
			if ( is_string( $image ) && '' !== $image ) {
				return $image;
			}
		}

		if ( '' !== $image_url ) {
			return '<img class="nextora-box-image__card-image" src="' . esc_url( $image_url ) . '" alt="" loading="lazy" decoding="async" />';
		}

		return '';
	}
}
