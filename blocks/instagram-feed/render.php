<?php
/**
 * Instagram Feed — dynamic render + Swiper carousel + lightbox modal.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_instagram_feed_enqueue_view_script' ) ) {
	/**
	 * Ensure the block view script is queued.
	 */
	function nextora_instagram_feed_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/instagram-feed' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/instagram-feed/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/instagram-feed/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-instagram-feed-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-instagram-feed-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-instagram-feed-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_instagram_feed_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_instagram_feed_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
		}
		return '';
	}
}

if ( ! function_exists( 'nextora_instagram_feed_format_handle' ) ) {
	/**
	 * Ensure handle includes @ prefix for display.
	 */
	function nextora_instagram_feed_format_handle( string $handle ): string {
		$handle = trim( $handle );
		if ( '' === $handle ) {
			return '@yourbrand';
		}
		return str_starts_with( $handle, '@' ) ? $handle : '@' . $handle;
	}
}

if ( ! function_exists( 'nextora_instagram_feed_normalize_post' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw post from attributes.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_instagram_feed_normalize_post( array $raw ): array {
		$media_id   = isset( $raw['mediaId'] ) ? (int) $raw['mediaId'] : 0;
		$media_type = isset( $raw['mediaType'] ) && 'video' === $raw['mediaType'] ? 'video' : 'image';
		$video_url  = isset( $raw['videoUrl'] ) ? trim( (string) $raw['videoUrl'] ) : '';

		if ( $media_id > 0 ) {
			$mime = get_post_mime_type( $media_id );
			if ( is_string( $mime ) && str_starts_with( $mime, 'video/' ) ) {
				$media_type = 'video';
			}
		}

		if ( 'video' === $media_type && '' === $video_url && $media_id > 0 ) {
			$attachment_url = wp_get_attachment_url( $media_id );
			if ( is_string( $attachment_url ) && '' !== $attachment_url ) {
				$video_url = $attachment_url;
			}
		}

		return array(
			'id'         => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'mediaType'  => $media_type,
			'mediaId'    => $media_id,
			'mediaUrl'   => isset( $raw['mediaUrl'] ) ? trim( (string) $raw['mediaUrl'] ) : '',
			'mediaAlt'   => isset( $raw['mediaAlt'] ) ? trim( (string) $raw['mediaAlt'] ) : '',
			'posterId'   => isset( $raw['posterId'] ) ? (int) $raw['posterId'] : 0,
			'posterUrl'  => isset( $raw['posterUrl'] ) ? trim( (string) $raw['posterUrl'] ) : '',
			'videoUrl'   => $video_url,
			'caption'    => isset( $raw['caption'] ) ? trim( (string) $raw['caption'] ) : '',
			'permalink'  => isset( $raw['permalink'] ) ? trim( (string) $raw['permalink'] ) : '',
		);
	}
}

if ( ! function_exists( 'nextora_instagram_feed_post_has_media' ) ) {
	/**
	 * @param array<string, mixed> $post Normalized post.
	 */
	function nextora_instagram_feed_post_has_media( array $post ): bool {
		if ( (int) $post['mediaId'] > 0 ) {
			return true;
		}
		if ( '' !== trim( (string) ( $post['mediaUrl'] ?? '' ) ) ) {
			return true;
		}
		if ( '' !== trim( (string) ( $post['posterUrl'] ?? '' ) ) ) {
			return true;
		}
		return '' !== trim( (string) $post['videoUrl'] );
	}
}

if ( ! function_exists( 'nextora_instagram_feed_placeholder_image_url' ) ) {
	/**
	 * Square placeholder when tile media is missing or fails to load.
	 */
	function nextora_instagram_feed_placeholder_image_url(): string {
		$url = get_theme_file_uri( 'assets/images/placeholder/general-img-square.png' );

		/** @var string $url */
		$url = apply_filters( 'nextora_instagram_feed_placeholder_image_url', $url );

		return is_string( $url ) ? $url : '';
	}
}

if ( ! function_exists( 'nextora_instagram_feed_render_placeholder_image_html' ) ) {
	/**
	 * Placeholder `<img>` for empty or broken tile media.
	 */
	function nextora_instagram_feed_render_placeholder_image_html( string $placeholder_url, string $alt = '' ): string {
		if ( '' === $placeholder_url ) {
			return '<span class="nextora-instagram-feed__tile-placeholder" aria-hidden="true"></span>';
		}

		$aria = '' === trim( $alt ) ? ' aria-hidden="true"' : '';

		return sprintf(
			'<img class="nextora-instagram-feed__tile-img nextora-instagram-feed__tile-img--placeholder" src="%1$s" alt="%2$s" loading="lazy" decoding="async"%3$s />',
			esc_url( $placeholder_url ),
			esc_attr( $alt ),
			$aria,
		);
	}
}

if ( ! function_exists( 'nextora_instagram_feed_get_media_url' ) ) {
	/**
	 * @param array<string, mixed> $post Normalized post.
	 */
	function nextora_instagram_feed_get_media_url( array $post ): string {
		$media_id   = (int) $post['mediaId'];
		$media_url  = isset( $post['mediaUrl'] ) ? trim( (string) $post['mediaUrl'] ) : '';
		$video_url  = isset( $post['videoUrl'] ) ? trim( (string) $post['videoUrl'] ) : '';
		$media_type = nextora_instagram_feed_resolve_media_type( $post );

		if ( $media_id > 0 ) {
			$url = wp_get_attachment_url( $media_id );
			if ( is_string( $url ) && '' !== $url ) {
				return $url;
			}
		}

		if ( 'video' === $media_type ) {
			if ( '' !== $video_url ) {
				$sanitized = esc_url_raw( $video_url );
				return is_string( $sanitized ) ? $sanitized : '';
			}
			return '';
		}

		if ( '' !== $media_url ) {
			$sanitized = esc_url_raw( $media_url );
			if ( is_string( $sanitized ) && '' !== $sanitized ) {
				return $sanitized;
			}
		}

		if ( '' !== $video_url ) {
			$sanitized = esc_url_raw( $video_url );
			return is_string( $sanitized ) ? $sanitized : '';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_instagram_feed_get_poster_url' ) ) {
	/**
	 * @param array<string, mixed> $post Normalized post.
	 */
	function nextora_instagram_feed_get_poster_url( array $post ): string {
		$poster_id  = (int) $post['posterId'];
		$poster_url = isset( $post['posterUrl'] ) ? trim( (string) $post['posterUrl'] ) : '';

		if ( $poster_id > 0 ) {
			$url = wp_get_attachment_url( $poster_id );
			if ( is_string( $url ) && '' !== $url ) {
				return $url;
			}
		}

		if ( '' !== $poster_url ) {
			$sanitized = esc_url_raw( $poster_url );
			if ( is_string( $sanitized ) && '' !== $sanitized ) {
				return $sanitized;
			}
		}

		if ( 'image' === $post['mediaType'] ) {
			return nextora_instagram_feed_get_media_url( $post );
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_instagram_feed_resolve_media_type' ) ) {
	/**
	 * Resolve effective media type (handles video attachments saved as image).
	 *
	 * @param array<string, mixed> $post Normalized post.
	 */
	function nextora_instagram_feed_resolve_media_type( array $post ): string {
		if ( isset( $post['mediaType'] ) && 'video' === $post['mediaType'] ) {
			return 'video';
		}

		$media_id = isset( $post['mediaId'] ) ? (int) $post['mediaId'] : 0;
		if ( $media_id > 0 ) {
			$mime = get_post_mime_type( $media_id );
			if ( is_string( $mime ) && str_starts_with( $mime, 'video/' ) ) {
				return 'video';
			}
		}

		return 'image';
	}
}

if ( ! function_exists( 'nextora_instagram_feed_get_video_mime_type' ) ) {
	/**
	 * @param array<string, mixed> $post Normalized post.
	 */
	function nextora_instagram_feed_get_video_mime_type( array $post ): string {
		$media_id = isset( $post['mediaId'] ) ? (int) $post['mediaId'] : 0;
		if ( $media_id > 0 ) {
			$mime = get_post_mime_type( $media_id );
			if ( is_string( $mime ) && str_starts_with( $mime, 'video/' ) ) {
				return $mime;
			}
		}

		$url = nextora_instagram_feed_get_media_url( $post );
		$ext = strtolower( pathinfo( (string) wp_parse_url( $url, PHP_URL_PATH ), PATHINFO_EXTENSION ) );
		if ( 'webm' === $ext ) {
			return 'video/webm';
		}
		if ( 'mov' === $ext ) {
			return 'video/quicktime';
		}

		return 'video/mp4';
	}
}

if ( ! function_exists( 'nextora_instagram_feed_build_post_payload' ) ) {
	/**
	 * @param array<string, mixed> $post Normalized post.
	 *
	 * @return array<string, string>
	 */
	function nextora_instagram_feed_build_post_payload( array $post ): array {
		$media_type = nextora_instagram_feed_resolve_media_type( $post );

		return array(
			'mediaType'  => $media_type,
			'mediaUrl'   => nextora_instagram_feed_get_media_url( $post ),
			'posterUrl'  => nextora_instagram_feed_get_poster_url( $post ),
			'mediaAlt'   => (string) $post['mediaAlt'],
			'caption'    => (string) $post['caption'],
			'permalink'  => (string) $post['permalink'],
		);
	}
}

if ( ! function_exists( 'nextora_instagram_feed_render_tile_media' ) ) {
	/**
	 * @param array<string, mixed> $post            Normalized post.
	 * @param string               $image_size      WP image size.
	 * @param string               $placeholder_url Theme placeholder URL.
	 */
	function nextora_instagram_feed_render_tile_media( array $post, string $image_size, string $placeholder_url ): string {
		$media_id   = (int) $post['mediaId'];
		$alt        = (string) $post['mediaAlt'];
		$media_type = nextora_instagram_feed_resolve_media_type( $post );

		if ( 'video' === $media_type ) {
			$video_url = nextora_instagram_feed_get_media_url( $post );
			if ( '' === $video_url ) {
				return nextora_instagram_feed_render_placeholder_image_html( $placeholder_url, $alt );
			}

			$poster_url  = nextora_instagram_feed_get_poster_url( $post );
			$poster_attr = '' !== $poster_url ? sprintf( ' poster="%s"', esc_url( $poster_url ) ) : '';
			$mime_type   = nextora_instagram_feed_get_video_mime_type( $post );
			$safe_url    = esc_url( $video_url );
			if ( '' === $safe_url ) {
				return nextora_instagram_feed_render_placeholder_image_html( $placeholder_url, $alt );
			}

			return sprintf(
				'<video class="nextora-instagram-feed__tile-video" muted playsinline loop autoplay preload="auto" aria-hidden="true"%1$s><source src="%2$s" type="%3$s" /></video>',
				$poster_attr,
				$safe_url,
				esc_attr( $mime_type ),
			);
		}

		if ( $media_id > 0 ) {
			if ( '' === $alt ) {
				$alt = (string) get_post_meta( $media_id, '_wp_attachment_image_alt', true );
			}
			$img = wp_get_attachment_image(
				$media_id,
				$image_size,
				false,
				array(
					'class'    => 'nextora-instagram-feed__tile-img',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
				),
			);
			if ( is_string( $img ) && '' !== $img ) {
				if ( '' !== $placeholder_url ) {
					$img = str_replace(
						'class="nextora-instagram-feed__tile-img"',
						sprintf(
							'class="nextora-instagram-feed__tile-img" data-nextora-instagram-fallback-src="%s"',
							esc_url( $placeholder_url ),
						),
						$img,
					);
				}
				return $img;
			}
		}

		$image_url = nextora_instagram_feed_get_media_url( $post );
		if ( '' !== $image_url ) {
			$safe_url = esc_url( $image_url );
			if ( '' !== $safe_url ) {
				$fallback_attr = '' !== $placeholder_url
					? sprintf( ' data-nextora-instagram-fallback-src="%s"', esc_url( $placeholder_url ) )
					: '';

				return sprintf(
					'<img class="nextora-instagram-feed__tile-img" src="%1$s" alt="%2$s" loading="lazy" decoding="async"%3$s />',
					$safe_url,
					esc_attr( $alt ),
					$fallback_attr,
				);
			}
		}

		return nextora_instagram_feed_render_placeholder_image_html( $placeholder_url, $alt );
	}
}

if ( ! function_exists( 'nextora_instagram_feed_get_tile_icon_svg' ) ) {
	/**
	 * Decorative Instagram camera icon for feed tiles.
	 */
	function nextora_instagram_feed_get_tile_icon_svg(): string {
		$svg = '<svg class="nextora-instagram-feed__tile-icon-graphic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-linecap="round" /></svg>';

		/**
		 * Filter the SVG markup for the Instagram tile overlay icon.
		 *
		 * @param string $svg Inline SVG markup.
		 */
		return (string) apply_filters( 'nextora_instagram_feed_tile_icon_svg', $svg );
	}
}

if ( ! function_exists( 'nextora_instagram_feed_render_tile_icon_html' ) ) {
	/**
	 * Centered Instagram icon overlay on feed tiles.
	 */
	function nextora_instagram_feed_render_tile_icon_html(): string {
		$svg = nextora_instagram_feed_get_tile_icon_svg();
		if ( '' === trim( $svg ) ) {
			return '';
		}

		return sprintf(
			'<span class="nextora-instagram-feed__tile-icon" aria-hidden="true">%s</span>',
			$svg,
		);
	}
}

$raw_posts = isset( $attributes['posts'] ) && is_array( $attributes['posts'] ) ? $attributes['posts'] : array();
$posts     = array();

foreach ( $raw_posts as $raw ) {
	if ( ! is_array( $raw ) ) {
		continue;
	}
	$normalized = nextora_instagram_feed_normalize_post( $raw );
	$posts[]    = $normalized;
}

if ( array() === $posts ) {
	return;
}

/** @var list<array<string, mixed>> $posts */
$posts = array_values( (array) apply_filters( 'nextora_instagram_feed_posts', $posts, $attributes ) );

$header_layout = isset( $attributes['headerLayout'] ) ? (string) $attributes['headerLayout'] : 'split';
if ( ! in_array( $header_layout, array( 'split', 'stacked', 'left-aligned' ), true ) ) {
	$header_layout = 'split';
}

$handle_level = isset( $attributes['handleLevel'] ) ? (int) $attributes['handleLevel'] : 4;
$handle_level = max( 1, min( 6, $handle_level ) );
$handle_tag   = 'h' . $handle_level;

$content_max = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '1200px';
if ( '' === $content_max ) {
	$content_max = '1200px';
}

$tile_radius   = isset( $attributes['tileBorderRadius'] ) ? max( 0, min( 24, (int) $attributes['tileBorderRadius'] ) ) : 8;
$tile_bg       = nextora_instagram_feed_resolve_color( isset( $attributes['tileBackground'] ) ? (string) $attributes['tileBackground'] : '' );
$show_overlay  = ! empty( $attributes['showTileOverlay'] );
$image_size    = isset( $attributes['tileImageSize'] ) ? sanitize_key( (string) $attributes['tileImageSize'] ) : 'large';
if ( '' === $image_size ) {
	$image_size = 'large';
}

$placeholder_url = nextora_instagram_feed_placeholder_image_url();

$bg_color       = nextora_instagram_feed_resolve_color( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$eyebrow_c      = nextora_instagram_feed_resolve_color( isset( $attributes['eyebrowColor'] ) ? (string) $attributes['eyebrowColor'] : '' );
$handle_c       = nextora_instagram_feed_resolve_color( isset( $attributes['handleColor'] ) ? (string) $attributes['handleColor'] : '' );
$btn_border_c   = nextora_instagram_feed_resolve_color( isset( $attributes['buttonBorderColor'] ) ? (string) $attributes['buttonBorderColor'] : '' );
$btn_text_c     = nextora_instagram_feed_resolve_color( isset( $attributes['buttonTextColor'] ) ? (string) $attributes['buttonTextColor'] : '' );
$overlay_c      = nextora_instagram_feed_resolve_color( isset( $attributes['tileOverlayColor'] ) ? (string) $attributes['tileOverlayColor'] : '' );
$dot_c          = nextora_instagram_feed_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active_c   = nextora_instagram_feed_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );
$sidebar_bg_c   = nextora_instagram_feed_resolve_color( isset( $attributes['lightboxSidebarBackground'] ) ? (string) $attributes['lightboxSidebarBackground'] : '' );

$btn_radius = isset( $attributes['buttonBorderRadius'] ) ? max( 0, min( 50, (int) $attributes['buttonBorderRadius'] ) ) : 50;
$btn_style  = isset( $attributes['buttonStyle'] ) ? (string) $attributes['buttonStyle'] : 'outline';
if ( ! in_array( $btn_style, array( 'outline', 'solid', 'link' ), true ) ) {
	$btn_style = 'outline';
}

$show_button = ! isset( $attributes['showButton'] ) || (bool) $attributes['showButton'];
$button_url  = isset( $attributes['buttonUrl'] ) ? trim( (string) $attributes['buttonUrl'] ) : '';
$button_text = isset( $attributes['buttonText'] ) ? trim( (string) $attributes['buttonText'] ) : __( 'Follow on Instagram', 'nextora' );
$button_tgt  = ! empty( $attributes['buttonTarget'] );

$spv_mobile  = round( isset( $attributes['slidesPerViewMobile'] ) ? (float) $attributes['slidesPerViewMobile'] : 2.15, 3 );
$spv_tablet  = round( isset( $attributes['slidesPerViewTablet'] ) ? (float) $attributes['slidesPerViewTablet'] : 3.0, 3 );
$spv_desktop = round( isset( $attributes['slidesPerView'] ) ? (float) $attributes['slidesPerView'] : 5.0, 3 );
$space       = isset( $attributes['spaceBetween'] ) ? max( 0, min( 48, (int) $attributes['spaceBetween'] ) ) : 16;
$speed       = isset( $attributes['speed'] ) ? max( 200, min( 2000, (int) $attributes['speed'] ) ) : 500;
$loop        = ! empty( $attributes['loop'] );
$autoplay    = ! empty( $attributes['autoplay'] );
$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 2000, min( 15000, (int) $attributes['autoplayDelay'] ) ) : 5000;
$pause_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag    = ! empty( $attributes['showPagination'] );
$pag_type    = isset( $attributes['paginationType'] ) ? (string) $attributes['paginationType'] : 'bullets';
if ( ! in_array( $pag_type, array( 'bullets', 'fraction', 'progressbar' ), true ) ) {
	$pag_type = 'bullets';
}
$show_arrows = ! empty( $attributes['showArrows'] );
$free_mode   = ! empty( $attributes['freeMode'] );
$grab_cursor = ! isset( $attributes['grabCursor'] ) || (bool) $attributes['grabCursor'];

$enable_lightbox     = ! isset( $attributes['enableLightbox'] ) || (bool) $attributes['enableLightbox'];
$lightbox_arrows     = ! isset( $attributes['lightboxShowArrows'] ) || (bool) $attributes['lightboxShowArrows'];
$lightbox_caption    = ! isset( $attributes['lightboxShowCaption'] ) || (bool) $attributes['lightboxShowCaption'];
$lightbox_link_text  = isset( $attributes['lightboxLinkText'] ) ? trim( (string) $attributes['lightboxLinkText'] ) : __( 'View on Instagram', 'nextora' );
$lightbox_handle_raw = isset( $attributes['lightboxHandleOverride'] ) ? trim( (string) $attributes['lightboxHandleOverride'] ) : '';
$handle_text_raw     = isset( $attributes['handleText'] ) ? trim( (string) $attributes['handleText'] ) : '@yourbrand';
$lightbox_handle     = nextora_instagram_feed_format_handle( '' !== $lightbox_handle_raw ? $lightbox_handle_raw : $handle_text_raw );

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$eyebrow_html = isset( $attributes['eyebrowText'] ) ? (string) $attributes['eyebrowText'] : '';
$handle_html  = nextora_instagram_feed_format_handle( $handle_text_raw );

$slide_count = count( $posts );
$use_loop    = $loop && $slide_count > 1;

$swiper_opts = array(
	'loop'                 => $use_loop,
	'autoplay'             => $autoplay,
	'autoplayDelay'        => $autoplay_d,
	'pauseOnHover'         => $pause_hover,
	'showPagination'       => $show_pag && $slide_count > 1,
	'paginationType'       => $pag_type,
	'showArrows'           => $show_arrows && $slide_count > 1,
	'spaceBetween'         => $space,
	'speed'                => $speed,
	'freeMode'             => $free_mode,
	'grabCursor'           => $grab_cursor,
	'slidesPerView'        => $spv_mobile,
	'slidesPerViewTablet'  => $spv_tablet,
	'slidesPerViewDesktop' => $spv_desktop,
);

$swiper_opts = (array) apply_filters( 'nextora_instagram_feed_swiper_options', $swiper_opts, $attributes, $posts );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$post_payloads = array();
foreach ( $posts as $post ) {
	$post_payloads[] = nextora_instagram_feed_build_post_payload( $post );
}

$posts_json   = wp_json_encode( $post_payloads );
$posts_string = is_string( $posts_json ) ? $posts_json : '[]';

$block_id = '';
if ( isset( $block->parsed_block['attrs']['anchor'] ) && is_string( $block->parsed_block['attrs']['anchor'] ) ) {
	$block_id = sanitize_html_class( $block->parsed_block['attrs']['anchor'] );
}
if ( '' === $block_id ) {
	$block_id = wp_unique_id( 'nextora-instagram-feed-' );
}

$modal_id = $block_id . '-lightbox';

$css_vars = array(
	'--nextora-instagram-max-width'   => $content_max,
	'--nextora-instagram-tile-radius' => $tile_radius . 'px',
	'--nextora-instagram-tile-gap'    => $space . 'px',
	'--nextora-instagram-btn-radius'  => $btn_radius . 'px',
);

if ( '' !== $bg_color ) {
	$css_vars['--nextora-instagram-bg'] = $bg_color;
}
if ( '' !== $eyebrow_c ) {
	$css_vars['--nextora-instagram-eyebrow-color'] = $eyebrow_c;
}
if ( '' !== $handle_c ) {
	$css_vars['--nextora-instagram-handle-color'] = $handle_c;
}
if ( '' !== $btn_border_c ) {
	$css_vars['--nextora-instagram-btn-border'] = $btn_border_c;
}
if ( '' !== $btn_text_c ) {
	$css_vars['--nextora-instagram-btn-text'] = $btn_text_c;
}
if ( '' !== $tile_bg ) {
	$css_vars['--nextora-instagram-tile-bg'] = $tile_bg;
}
if ( '' !== $overlay_c ) {
	$css_vars['--nextora-instagram-tile-overlay'] = $overlay_c;
}
if ( '' !== $dot_c ) {
	$css_vars['--nextora-instagram-dot-color'] = $dot_c;
}
if ( '' !== $dot_active_c ) {
	$css_vars['--nextora-instagram-dot-active'] = $dot_active_c;
}
if ( '' !== $sidebar_bg_c ) {
	$css_vars['--nextora-instagram-lightbox-sidebar-bg'] = $sidebar_bg_c;
}
if ( '' !== $placeholder_url ) {
	$css_vars['--nextora-instagram-tile-placeholder-image'] = sprintf( "url('%s')", esc_url( $placeholder_url ) );
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-instagram-feed',
	'nextora-instagram-feed--loading',
	'nextora-instagram-feed--header-' . sanitize_html_class( $header_layout ),
);
if ( $enable_scroll ) {
	$wrapper_classes[] = 'nextora-instagram-feed--reveal-pending';
}
if ( $show_overlay ) {
	$wrapper_classes[] = 'nextora-instagram-feed--tile-overlay';
}

$wrapper_classes = (array) apply_filters(
	'nextora_instagram_feed_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $inline_style,
	'id'    => $block_id,
);
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
}
$wrapper_extra['data-nextora-instagram-posts'] = $posts_string;
$wrapper_extra['data-nextora-instagram-handle'] = $lightbox_handle;
$wrapper_extra['data-nextora-instagram-link-text'] = $lightbox_link_text;
if ( '' !== $placeholder_url ) {
	$wrapper_extra['data-nextora-instagram-placeholder-src'] = esc_url( $placeholder_url );
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_instagram_feed_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

nextora_instagram_feed_enqueue_view_script();

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-instagram-feed__inner">
		<header class="nextora-instagram-feed__header nextora-instagram-feed__header--<?php echo esc_attr( $header_layout ); ?>">
			<div class="nextora-instagram-feed__header-copy">
				<?php if ( '' !== trim( wp_strip_all_tags( $eyebrow_html ) ) ) : ?>
					<p class="nextora-instagram-feed__eyebrow"><?php echo wp_kses_post( $eyebrow_html ); ?></p>
				<?php endif; ?>
				<?php
				printf(
					'<%1$s class="nextora-instagram-feed__handle">%2$s</%1$s>',
					$handle_tag, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- h1-h6.
					esc_html( $handle_html ),
				);
				?>
			</div>
			<?php if ( $show_button && '' !== $button_text ) : ?>
				<div class="nextora-instagram-feed__header-cta">
					<?php if ( '' !== $button_url ) : ?>
						<a
							class="nextora-instagram-feed__btn nextora-instagram-feed__btn--<?php echo esc_attr( $btn_style ); ?>"
							href="<?php echo esc_url( $button_url ); ?>"
							<?php echo $button_tgt ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
						>
							<?php echo esc_html( $button_text ); ?>
						</a>
					<?php else : ?>
						<span class="nextora-instagram-feed__btn nextora-instagram-feed__btn--<?php echo esc_attr( $btn_style ); ?>">
							<?php echo esc_html( $button_text ); ?>
						</span>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</header>

		<div
			class="nextora-instagram-feed__carousel-root"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
		>
			<div class="swiper nextora-instagram-feed__swiper">
				<div class="swiper-wrapper">
					<?php
					foreach ( $posts as $index => $post ) {
						$tile_label = sprintf(
							/* translators: %d: post number */
							__( 'Open Instagram post %d', 'nextora' ),
							$index + 1,
						);
						$permalink = (string) $post['permalink'];
						?>
						<div class="swiper-slide">
							<?php if ( $enable_lightbox ) : ?>
								<button
									type="button"
									class="nextora-instagram-feed__tile"
									data-nextora-instagram-open="<?php echo esc_attr( (string) $index ); ?>"
									aria-label="<?php echo esc_attr( $tile_label ); ?>"
								>
									<span class="nextora-instagram-feed__tile-media">
										<?php
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
										echo nextora_instagram_feed_render_tile_media( $post, $image_size, $placeholder_url );
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static SVG from theme.
										echo nextora_instagram_feed_render_tile_icon_html();
										?>
									</span>
								</button>
							<?php elseif ( '' !== $permalink ) : ?>
								<a
									class="nextora-instagram-feed__tile nextora-instagram-feed__tile--link"
									href="<?php echo esc_url( $permalink ); ?>"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="<?php echo esc_attr( $tile_label ); ?>"
								>
									<span class="nextora-instagram-feed__tile-media">
										<?php
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
										echo nextora_instagram_feed_render_tile_media( $post, $image_size, $placeholder_url );
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static SVG from theme.
										echo nextora_instagram_feed_render_tile_icon_html();
										?>
									</span>
								</a>
							<?php else : ?>
								<div class="nextora-instagram-feed__tile nextora-instagram-feed__tile--static">
									<span class="nextora-instagram-feed__tile-media">
										<?php
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
										echo nextora_instagram_feed_render_tile_media( $post, $image_size, $placeholder_url );
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static SVG from theme.
										echo nextora_instagram_feed_render_tile_icon_html();
										?>
									</span>
								</div>
							<?php endif; ?>
						</div>
						<?php
					}
					?>
				</div>
			</div>
			<?php if ( $show_arrows && $slide_count > 1 ) : ?>
				<button type="button" class="nextora-instagram-feed__arrow nextora-instagram-feed__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
				</button>
				<button type="button" class="nextora-instagram-feed__arrow nextora-instagram-feed__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
				</button>
			<?php endif; ?>
			<?php if ( $show_pag && $slide_count > 1 ) : ?>
				<div class="nextora-instagram-feed__pagination swiper-pagination" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
	</div>

	<?php if ( $enable_lightbox ) : ?>
		<div
			id="<?php echo esc_attr( $modal_id ); ?>"
			class="nextora-modal nextora-instagram-feed__lightbox"
			hidden
			data-nextora-modal
			aria-hidden="true"
		>
			<div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
			<div
				class="nextora-modal__surface nextora-modal__surface--instagram"
				data-nextora-modal-surface
				role="dialog"
				aria-modal="true"
				aria-labelledby="<?php echo esc_attr( $modal_id ); ?>-title"
				tabindex="-1"
			>
				<div class="nextora-instagram-feed__lightbox-layout">
					<div class="nextora-instagram-feed__lightbox-media" data-nextora-instagram-lightbox-media>
						<div class="nextora-instagram-feed__lightbox-media-inner" data-nextora-instagram-lightbox-media-inner></div>
						<?php if ( $lightbox_arrows && $slide_count > 1 ) : ?>
							<button
								type="button"
								class="nextora-instagram-feed__lightbox-arrow nextora-instagram-feed__lightbox-arrow--prev"
								data-nextora-instagram-lightbox-prev
								aria-label="<?php echo esc_attr__( 'Previous post', 'nextora' ); ?>"
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
							</button>
							<button
								type="button"
								class="nextora-instagram-feed__lightbox-arrow nextora-instagram-feed__lightbox-arrow--next"
								data-nextora-instagram-lightbox-next
								aria-label="<?php echo esc_attr__( 'Next post', 'nextora' ); ?>"
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
							</button>
						<?php endif; ?>
					</div>
					<aside class="nextora-instagram-feed__lightbox-sidebar">
						<div class="nextora-instagram-feed__lightbox-header">
							<p id="<?php echo esc_attr( $modal_id ); ?>-title" class="nextora-instagram-feed__lightbox-handle">
								<?php echo esc_html( $lightbox_handle ); ?>
							</p>
							<button type="button" class="nextora-modal__close" data-nextora-modal-dismiss aria-label="<?php echo esc_attr__( 'Close', 'nextora' ); ?>">
								<span class="nextora-modal__close-icon" aria-hidden="true">&times;</span>
							</button>
						</div>
						<?php if ( $lightbox_caption ) : ?>
							<div class="nextora-instagram-feed__lightbox-caption" data-nextora-instagram-lightbox-caption hidden></div>
						<?php endif; ?>
						<a
							class="nextora-instagram-feed__lightbox-link"
							data-nextora-instagram-lightbox-link
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							hidden
						>
							<?php echo esc_html( $lightbox_link_text ); ?>
						</a>
					</aside>
				</div>
			</div>
		</div>
	<?php endif; ?>
</div>
