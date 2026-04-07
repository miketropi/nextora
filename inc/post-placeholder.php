<?php
/**
 * Featured image fallback asset (SVG).
 *
 * @package Nextora
 */

declare(strict_types=1);

/**
 * Public URL for the post thumbnail placeholder SVG.
 *
 * @return string
 */
function nextora_get_post_placeholder_image_url(): string {
	$url = get_theme_file_uri( 'assets/images/original-f7c030d80b39dbf1b8c6ee15c130989d.webp' );
	$url = is_string( $url ) ? $url : '';

	return (string) apply_filters( 'nextora_post_placeholder_image_url', $url );
}
