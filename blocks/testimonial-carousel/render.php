<?php
/**
 * Testimonial carousel — server render + Swiper markup (view.js).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_testimonial_carousel_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_testimonial_carousel_resolve_color( string $raw ): string {
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

if ( ! function_exists( 'nextora_testimonial_carousel_icon_svg' ) ) {
	/**
	 * Inline SVG for top decorator icon.
	 */
	function nextora_testimonial_carousel_icon_svg( string $type ): string {
		$icons = array(
			'sparkle' => '<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 8.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z"/>',
			'quote'   => '<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M7.5 8.5c0-2.2 1.8-4 4-4h.5M7.5 15.5V10M5 10h5M14.5 8.5c0-2.2 1.8-4 4-4h.5M14.5 15.5V10M12 10h5"/>',
			'star'    => '<path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.4l.9-5.4-3.9-3.8 5.4-.8L12 3.5z"/>',
			'heart'   => '<path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 20.5s-6.5-4.2-8.5-8.2C1.8 8.8 4.2 5.5 7.6 5.5c1.8 0 3.2 1 4.4 2.4C13.2 6.5 14.6 5.5 16.4 5.5 19.8 5.5 22.2 8.8 20.5 12.3 18.5 16.3 12 20.5 12 20.5z"/>',
		);
		$key = sanitize_key( $type );
		$body = isset( $icons[ $key ] ) ? $icons[ $key ] : $icons['sparkle'];
		return '<svg class="nextora-testimonial-carousel__icon-svg" viewBox="0 0 24 24" aria-hidden="true">' . $body . '</svg>';
	}
}

if ( ! function_exists( 'nextora_testimonial_carousel_normalize_item' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw testimonial.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_testimonial_carousel_normalize_item( array $raw ): array {
		$rating = isset( $raw['rating'] ) ? (int) $raw['rating'] : 0;
		$rating = max( 0, min( 5, $rating ) );

		return array(
			'id'              => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'quoteText'       => isset( $raw['quoteText'] ) ? trim( (string) $raw['quoteText'] ) : '',
			'authorName'      => isset( $raw['authorName'] ) ? trim( (string) $raw['authorName'] ) : '',
			'authorRole'      => isset( $raw['authorRole'] ) ? trim( (string) $raw['authorRole'] ) : '',
			'authorPhotoId'   => isset( $raw['authorPhotoId'] ) ? (int) $raw['authorPhotoId'] : 0,
			'authorPhotoUrl'  => isset( $raw['authorPhotoUrl'] ) ? trim( (string) $raw['authorPhotoUrl'] ) : '',
			'authorPhotoAlt'  => isset( $raw['authorPhotoAlt'] ) ? trim( (string) $raw['authorPhotoAlt'] ) : '',
			'showAuthorPhoto' => ! empty( $raw['showAuthorPhoto'] ),
			'rating'          => $rating,
			'quoteColor'      => nextora_testimonial_carousel_resolve_color( isset( $raw['quoteColor'] ) ? (string) $raw['quoteColor'] : '' ),
			'authorColor'     => nextora_testimonial_carousel_resolve_color( isset( $raw['authorColor'] ) ? (string) $raw['authorColor'] : '' ),
		);
	}
}

if ( ! function_exists( 'nextora_testimonial_carousel_render_stars' ) ) {
	/**
	 * @param int $rating 1–5.
	 */
	function nextora_testimonial_carousel_render_stars( int $rating ): string {
		if ( $rating < 1 ) {
			return '';
		}
		$filled = max( 1, min( 5, $rating ) );
		$out    = '<div class="nextora-testimonial-carousel__slide-rating" aria-label="' . esc_attr( sprintf( /* translators: %d: star count */ _n( '%d out of 5 stars', '%d out of 5 stars', $rating, 'nextora' ), $rating ) ) . '">';
		for ( $i = 0; $i < 5; $i++ ) {
			if ( $i < $filled ) {
				$out .= '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 18.8 5.8 21.6l1.2-6.9-5-4.9 6.9-1L12 2.5z"/></svg>';
			} else {
				$out .= '<svg viewBox="0 0 24 24" aria-hidden="true" class="nextora-testimonial-carousel__star--dim"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 2.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 18.8 5.8 21.6l1.2-6.9-5-4.9 6.9-1L12 2.5z"/></svg>';
			}
		}
		$out .= '</div>';
		return $out;
	}
}

if ( ! function_exists( 'nextora_testimonial_carousel_render_slide' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonial_carousel_render_slide( array $item ): string {
		$quote = (string) $item['quoteText'];
		if ( '' === $quote ) {
			return '';
		}

		$name      = (string) $item['authorName'];
		$role      = (string) $item['authorRole'];
		$photo_id   = (int) $item['authorPhotoId'];
		$photo_url  = isset( $item['authorPhotoUrl'] ) ? trim( (string) $item['authorPhotoUrl'] ) : '';
		$show_photo = ! empty( $item['showAuthorPhoto'] ) && ( $photo_id > 0 || '' !== $photo_url );
		$rating    = (int) $item['rating'];

		$slide_style = '';
		if ( '' !== (string) $item['quoteColor'] ) {
			$slide_style .= '--nextora-testimonial-slide-quote-color:' . (string) $item['quoteColor'] . ';';
		}
		if ( '' !== (string) $item['authorColor'] ) {
			$slide_style .= '--nextora-testimonial-slide-author-color:' . (string) $item['authorColor'] . ';';
		}

		$out  = '<div class="swiper-slide">';
		$out .= '<article class="nextora-testimonial-carousel__slide"' . ( '' !== $slide_style ? ' style="' . esc_attr( $slide_style ) . '"' : '' ) . '>';
		$out .= nextora_testimonial_carousel_render_stars( $rating );
		$out .= '<blockquote class="nextora-testimonial-carousel__slide-quote">' . esc_html( $quote ) . '</blockquote>';
		$out .= '<div class="nextora-testimonial-carousel__slide-author">';

		if ( $show_photo ) {
			$alt = (string) $item['authorPhotoAlt'];
			if ( '' === $alt && $photo_id > 0 ) {
				$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
			}
			if ( '' === $alt && '' !== $name ) {
				$alt = $name;
			}
			if ( '' === $alt ) {
				$alt = __( 'Author photo', 'nextora' );
			}

			$photo_markup = '';
			if ( '' !== $photo_url ) {
				$safe_url = esc_url( $photo_url );
				if ( '' !== $safe_url ) {
					$photo_markup = sprintf(
						'<img class="nextora-testimonial-carousel__slide-author-photo" src="%1$s" alt="%2$s" loading="lazy" decoding="async" />',
						$safe_url,
						esc_attr( $alt ),
					);
				}
			} elseif ( $photo_id > 0 ) {
				$img = wp_get_attachment_image(
					$photo_id,
					'thumbnail',
					false,
					array(
						'class'    => 'nextora-testimonial-carousel__slide-author-photo',
						'alt'      => $alt,
						'loading'  => 'lazy',
						'decoding' => 'async',
					),
				);
				if ( is_string( $img ) && '' !== $img ) {
					$photo_markup = $img;
				}
			}

			if ( '' !== $photo_markup ) {
				$out .= $photo_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
			}
		}

		if ( '' !== $name || '' !== $role ) {
			$out .= '<p class="nextora-testimonial-carousel__slide-author-line">';
			if ( '' !== $name ) {
				$out .= '— <strong class="nextora-testimonial-carousel__slide-author-name">' . esc_html( $name ) . '</strong>';
				if ( '' !== $role ) {
					$out .= ', <span class="nextora-testimonial-carousel__slide-author-role">' . esc_html( $role ) . '</span>';
				}
			} elseif ( '' !== $role ) {
				$out .= '<span class="nextora-testimonial-carousel__slide-author-role">' . esc_html( $role ) . '</span>';
			}
			$out .= '</p>';
		}

		$out .= '</div></article></div>';

		return $out;
	}
}

if ( ! function_exists( 'nextora_testimonial_carousel_render_slide_t1' ) ) {
	/**
	 * Template-1 card-style slide.
	 *
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonial_carousel_render_slide_t1( array $item ): string {
		$quote = (string) $item['quoteText'];
		if ( '' === $quote ) {
			return '';
		}

		$name      = (string) $item['authorName'];
		$role      = (string) $item['authorRole'];
		$photo_id   = (int) $item['authorPhotoId'];
		$photo_url  = isset( $item['authorPhotoUrl'] ) ? trim( (string) $item['authorPhotoUrl'] ) : '';
		$show_photo = ! empty( $item['showAuthorPhoto'] ) && ( $photo_id > 0 || '' !== $photo_url );
		$rating    = (int) $item['rating'];

		$slide_style = '';
		if ( '' !== (string) $item['quoteColor'] ) {
			$slide_style .= '--nextora-testimonial-slide-quote-color:' . (string) $item['quoteColor'] . ';';
		}
		if ( '' !== (string) $item['authorColor'] ) {
			$slide_style .= '--nextora-testimonial-slide-author-color:' . (string) $item['authorColor'] . ';';
		}

		$out  = '<div class="swiper-slide">';
		$out .= '<article class="nextora-testimonial-carousel__slide nextora-testimonial-carousel__slide--t1"' . ( '' !== $slide_style ? ' style="' . esc_attr( $slide_style ) . '"' : '' ) . '>';
		$out .= nextora_testimonial_carousel_render_stars( $rating );
		$out .= '<blockquote class="nextora-testimonial-carousel__slide-quote">' . esc_html( $quote ) . '</blockquote>';
		$out .= '<div class="nextora-testimonial-carousel__slide-author nextora-testimonial-carousel__slide-author--t1">';

		if ( $show_photo ) {
			$alt = (string) $item['authorPhotoAlt'];
			if ( '' === $alt && $photo_id > 0 ) {
				$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
			}
			if ( '' === $alt && '' !== $name ) {
				$alt = $name;
			}
			if ( '' === $alt ) {
				$alt = __( 'Author photo', 'nextora' );
			}

			$photo_markup = '';
			if ( '' !== $photo_url ) {
				$safe_url = esc_url( $photo_url );
				if ( '' !== $safe_url ) {
					$photo_markup = sprintf(
						'<img class="nextora-testimonial-carousel__slide-author-photo" src="%1$s" alt="%2$s" loading="lazy" decoding="async" />',
						$safe_url,
						esc_attr( $alt ),
					);
				}
			} elseif ( $photo_id > 0 ) {
				$img = wp_get_attachment_image(
					$photo_id,
					'thumbnail',
					false,
					array(
						'class'    => 'nextora-testimonial-carousel__slide-author-photo',
						'alt'      => $alt,
						'loading'  => 'lazy',
						'decoding' => 'async',
					),
				);
				if ( is_string( $img ) && '' !== $img ) {
					$photo_markup = $img;
				}
			}

			if ( '' !== $photo_markup ) {
				$out .= $photo_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
			}
		}

		if ( '' !== $name || '' !== $role ) {
			$out .= '<div class="nextora-testimonial-carousel__slide-author-text">';
			if ( '' !== $name ) {
				$out .= '<strong class="nextora-testimonial-carousel__slide-author-name">' . esc_html( $name ) . '</strong>';
			}
			if ( '' !== $role ) {
				$out .= '<span class="nextora-testimonial-carousel__slide-author-role">' . esc_html( $role ) . '</span>';
			}
			$out .= '</div>';
		}

		$out .= '</div></article></div>';

		return $out;
	}
}

if ( ! function_exists( 'nextora_testimonial_carousel_render_trust' ) ) {
	/**
	 * @param array<string, mixed> $attributes Block attributes.
	 */
	function nextora_testimonial_carousel_render_trust( array $attributes ): string {
		if ( empty( $attributes['showTrustIndicator'] ) ) {
			return '';
		}

		$trust_text = isset( $attributes['trustText'] ) ? trim( wp_strip_all_tags( (string) $attributes['trustText'] ) ) : '';
		$avatars    = isset( $attributes['trustAvatars'] ) && is_array( $attributes['trustAvatars'] ) ? $attributes['trustAvatars'] : array();
		$fallback   = isset( $attributes['trustAvatarFallback'] ) ? sanitize_key( (string) $attributes['trustAvatarFallback'] ) : 'initials';
		if ( ! in_array( $fallback, array( 'initials', 'icon', 'none' ), true ) ) {
			$fallback = 'initials';
		}

		$palette = array( '#C49A6C', '#7B8F6A', '#A0785C', '#6A7B8F', '#8F6A7B' );

		$out = '<div class="nextora-testimonial-carousel__trust">';
		if ( '' !== $trust_text ) {
			$out .= '<span class="nextora-testimonial-carousel__trust-text">' . esc_html( $trust_text ) . '</span>';
		}

		if ( 'none' !== $fallback || array() !== $avatars ) {
			$out .= '<div class="nextora-testimonial-carousel__avatars">';
			$index = 0;
			foreach ( $avatars as $avatar ) {
				if ( ! is_array( $avatar ) ) {
					continue;
				}
				$id  = isset( $avatar['id'] ) ? (int) $avatar['id'] : 0;
				$url = isset( $avatar['url'] ) ? trim( (string) $avatar['url'] ) : '';
				$alt = isset( $avatar['alt'] ) ? trim( (string) $avatar['alt'] ) : '';
				if ( '' !== $url ) {
					$safe_url = esc_url( $url );
					if ( '' !== $safe_url ) {
						$out .= sprintf(
							'<img class="nextora-testimonial-carousel__avatar" src="%1$s" alt="%2$s" loading="lazy" decoding="async" />',
							$safe_url,
							esc_attr( '' !== $alt ? $alt : __( 'Trust avatar', 'nextora' ) ),
						);
						++$index;
					}
				} elseif ( $id > 0 ) {
					$img = wp_get_attachment_image(
						$id,
						'thumbnail',
						false,
						array(
							'class'    => 'nextora-testimonial-carousel__avatar',
							'alt'      => '' !== $alt ? $alt : __( 'Trust avatar', 'nextora' ),
							'loading'  => 'lazy',
							'decoding' => 'async',
						),
					);
					if ( is_string( $img ) && '' !== $img ) {
						$out .= $img;
						++$index;
					}
			} elseif ( 'initials' === $fallback && '' !== $alt ) {
					$bg   = $palette[ $index % count( $palette ) ];
					$out .= '<span class="nextora-testimonial-carousel__avatar nextora-testimonial-carousel__avatar--initials" style="background-color:' . esc_attr( $bg ) . '">' . esc_html( strtoupper( substr( $alt, 0, 1 ) ) ) . '</span>';
					++$index;
				} elseif ( 'icon' === $fallback ) {
					$bg   = $palette[ $index % count( $palette ) ];
					$out .= '<span class="nextora-testimonial-carousel__avatar nextora-testimonial-carousel__avatar--icon" style="background-color:' . esc_attr( $bg ) . '" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5"/></svg></span>';
					++$index;
				}
			}
			if ( $index > 0 ) {
				$out .= '<span class="nextora-testimonial-carousel__avatar nextora-testimonial-carousel__avatar--count" aria-label="' . esc_attr__( 'And many more', 'nextora' ) . '">+</span>';
			}
			$out .= '</div>';
		}

		$out .= '</div>';

		return $out;
	}
}

$raw_items = isset( $attributes['testimonials'] ) && is_array( $attributes['testimonials'] ) ? $attributes['testimonials'] : array();
$items     = array();

foreach ( $raw_items as $raw ) {
	if ( ! is_array( $raw ) ) {
		continue;
	}
	$normalized = nextora_testimonial_carousel_normalize_item( $raw );
	if ( '' !== $normalized['quoteText'] ) {
		$items[] = $normalized;
	}
}

if ( array() === $items ) {
	return;
}

$template_style = isset( $attributes['templateStyle'] ) ? sanitize_key( (string) $attributes['templateStyle'] ) : 'default';
if ( ! in_array( $template_style, array( 'default', 'template-1' ), true ) ) {
	$template_style = 'default';
}
$is_template_1 = 'template-1' === $template_style;

$items_per_view_desktop = isset( $attributes['itemsPerViewDesktop'] ) ? max( 1, min( 5, (int) $attributes['itemsPerViewDesktop'] ) ) : 3;
$items_per_view_tablet  = isset( $attributes['itemsPerViewTablet'] ) ? max( 1, min( 4, (int) $attributes['itemsPerViewTablet'] ) ) : 2;
$items_per_view_mobile  = isset( $attributes['itemsPerViewMobile'] ) ? max( 1, min( 2, (int) $attributes['itemsPerViewMobile'] ) ) : 1;
$card_gap               = isset( $attributes['cardGap'] ) ? max( 0, min( 40, (int) $attributes['cardGap'] ) ) : 22;

$show_top_icon  = ! isset( $attributes['showTopIcon'] ) || (bool) $attributes['showTopIcon'];
$top_icon_type  = isset( $attributes['topIconType'] ) ? sanitize_key( (string) $attributes['topIconType'] ) : 'sparkle';
$custom_icon    = isset( $attributes['customIconSvg'] ) ? (string) $attributes['customIconSvg'] : '';
$show_top_label = ! isset( $attributes['showTopLabel'] ) || (bool) $attributes['showTopLabel'];
$top_label      = isset( $attributes['topLabelText'] ) ? trim( wp_strip_all_tags( (string) $attributes['topLabelText'] ) ) : '';

$effect       = isset( $attributes['effect'] ) ? sanitize_key( (string) $attributes['effect'] ) : 'fade';
if ( ! in_array( $effect, array( 'fade', 'slide' ), true ) ) {
	$effect = 'fade';
}
$speed        = isset( $attributes['speed'] ) ? max( 200, min( 2000, (int) $attributes['speed'] ) ) : 600;
$loop         = ! isset( $attributes['loop'] ) || (bool) $attributes['loop'];
$autoplay     = ! isset( $attributes['autoplay'] ) || (bool) $attributes['autoplay'];
$autoplay_d   = isset( $attributes['autoplayDelay'] ) ? max( 2000, min( 15000, (int) $attributes['autoplayDelay'] ) ) : 6000;
$pause_hover  = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag     = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$show_arrows  = ! empty( $attributes['showArrows'] );
$arrow_pos    = isset( $attributes['arrowPosition'] ) ? sanitize_key( (string) $attributes['arrowPosition'] ) : 'below-dots';
if ( ! in_array( $arrow_pos, array( 'below-dots', 'sides' ), true ) ) {
	$arrow_pos = 'below-dots';
}
$trust_pos = isset( $attributes['trustPosition'] ) ? sanitize_key( (string) $attributes['trustPosition'] ) : 'below-quote';
if ( ! in_array( $trust_pos, array( 'below-quote', 'above-dots', 'bottom' ), true ) ) {
	$trust_pos = 'below-quote';
}

$content_max    = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '680px';
if ( '' === $content_max ) {
	$content_max = '680px';
}
$top_icon_size  = isset( $attributes['topIconSize'] ) ? max( 12, min( 40, (int) $attributes['topIconSize'] ) ) : 20;
$avatar_size    = isset( $attributes['trustAvatarSize'] ) ? max( 24, min( 56, (int) $attributes['trustAvatarSize'] ) ) : 36;
$avatar_overlap = isset( $attributes['trustAvatarOverlap'] ) ? max( 0, min( 20, (int) $attributes['trustAvatarOverlap'] ) ) : 10;
$avatar_border  = isset( $attributes['trustAvatarBorderWidth'] ) ? max( 0, min( 5, (float) $attributes['trustAvatarBorderWidth'] ) ) : 2.5;

$bg_color          = nextora_testimonial_carousel_resolve_color( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$icon_color        = nextora_testimonial_carousel_resolve_color( isset( $attributes['topIconColor'] ) ? (string) $attributes['topIconColor'] : '' );
$label_color       = nextora_testimonial_carousel_resolve_color( isset( $attributes['labelColor'] ) ? (string) $attributes['labelColor'] : '' );
$quote_color       = nextora_testimonial_carousel_resolve_color( isset( $attributes['quoteColor'] ) ? (string) $attributes['quoteColor'] : '' );
$author_color      = nextora_testimonial_carousel_resolve_color( isset( $attributes['authorColor'] ) ? (string) $attributes['authorColor'] : '' );
$author_name_color = nextora_testimonial_carousel_resolve_color( isset( $attributes['authorNameColor'] ) ? (string) $attributes['authorNameColor'] : '' );
$trust_color       = nextora_testimonial_carousel_resolve_color( isset( $attributes['trustColor'] ) ? (string) $attributes['trustColor'] : '' );
$star_color        = nextora_testimonial_carousel_resolve_color( isset( $attributes['starColor'] ) ? (string) $attributes['starColor'] : '' );
$dot_color         = nextora_testimonial_carousel_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active        = nextora_testimonial_carousel_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );
$arrow_color       = nextora_testimonial_carousel_resolve_color( isset( $attributes['arrowColor'] ) ? (string) $attributes['arrowColor'] : '' );
$arrow_border      = nextora_testimonial_carousel_resolve_color( isset( $attributes['arrowBorderColor'] ) ? (string) $attributes['arrowBorderColor'] : '' );
$avatar_border_c   = nextora_testimonial_carousel_resolve_color( isset( $attributes['trustAvatarBorderColor'] ) ? (string) $attributes['trustAvatarBorderColor'] : '' );

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$slide_count = count( $items );
$use_loop    = $loop && $slide_count > 1;

$swiper_opts = array(
	'effect'          => $is_template_1 ? 'slide' : $effect,
	'loop'            => $use_loop,
	'autoplay'        => $autoplay,
	'autoplayDelay'   => $autoplay_d,
	'pauseOnHover'    => $pause_hover,
	'showPagination'  => $show_pag && $slide_count > 1,
	'showArrows'      => $show_arrows && $slide_count > 1,
	'speed'           => $speed,
	'arrowPosition'   => $is_template_1 ? 'below-dots' : $arrow_pos,
);
if ( $is_template_1 ) {
	$swiper_opts['templateStyle']        = 'template-1';
	$swiper_opts['itemsPerViewDesktop']  = $items_per_view_desktop;
	$swiper_opts['itemsPerViewTablet']   = $items_per_view_tablet;
	$swiper_opts['itemsPerViewMobile']   = $items_per_view_mobile;
	$swiper_opts['cardGap']              = $card_gap;
}

/** @var list<array<string, mixed>> $items */
$items = array_values( (array) apply_filters( 'nextora_testimonial_carousel_testimonials', $items, $attributes ) );

$swiper_opts = (array) apply_filters( 'nextora_testimonial_carousel_swiper_options', $swiper_opts, $attributes, $items );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$css_vars = array(
	'--nextora-testimonial-bg'                 => '' !== $bg_color ? $bg_color : 'transparent',
	'--nextora-testimonial-max-width'         => $content_max,
	'--nextora-testimonial-icon-size'         => $top_icon_size . 'px',
	'--nextora-testimonial-icon-color'        => '' !== $icon_color ? $icon_color : 'color-mix(in srgb, currentColor 50%, transparent)',
	'--nextora-testimonial-label-color'       => '' !== $label_color ? $label_color : 'var(--wp--preset--color--contrast, #0a0a0a)',
	'--nextora-testimonial-quote-color'       => '' !== $quote_color ? $quote_color : 'inherit',
	'--nextora-testimonial-author-color'      => '' !== $author_color ? $author_color : 'var(--wp--preset--color--contrast, #0a0a0a)',
	'--nextora-testimonial-author-name-color' => '' !== $author_name_color ? $author_name_color : 'inherit',
	'--nextora-testimonial-trust-color'       => '' !== $trust_color ? $trust_color : 'var(--wp--preset--color--contrast, #0a0a0a)',
	'--nextora-testimonial-star-color'        => '' !== $star_color ? $star_color : '#F59E0B',
	'--nextora-testimonial-dot-color'         => '' !== $dot_color ? $dot_color : 'color-mix(in srgb, currentColor 35%, transparent)',
	'--nextora-testimonial-dot-active'        => '' !== $dot_active ? $dot_active : 'var(--wp--preset--color--primary, currentColor)',
	'--nextora-testimonial-arrow-color'       => '' !== $arrow_color ? $arrow_color : 'var(--wp--preset--color--paragraph, #525252)',
	'--nextora-testimonial-arrow-border'      => '' !== $arrow_border ? $arrow_border : 'color-mix(in srgb, currentColor 35%, transparent)',
	'--nextora-testimonial-avatar-size'       => $avatar_size . 'px',
	'--nextora-testimonial-avatar-overlap'    => $avatar_overlap . 'px',
	'--nextora-testimonial-avatar-border'     => $avatar_border . 'px',
	'--nextora-testimonial-avatar-border-color' => '' !== $avatar_border_c ? $avatar_border_c : ( '' !== $bg_color ? $bg_color : 'var(--wp--preset--color--base, #fff)' ),
	'--nextora-testimonial-card-gap'            => $card_gap . 'px',
);

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-testimonial-carousel',
	'nextora-testimonial-carousel--loading',
);
if ( $is_template_1 ) {
	$wrapper_classes[] = 'nextora-testimonial-carousel--template-1';
}
if ( $show_arrows && 'sides' === $arrow_pos ) {
	$wrapper_classes[] = 'nextora-testimonial-carousel--arrows-sides';
}

$wrapper_classes = (array) apply_filters(
	'nextora_testimonial_carousel_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $inline_style,
);
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_testimonial_carousel_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

$trust_html = nextora_testimonial_carousel_render_trust( $attributes );

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-testimonial-carousel__inner">
		<?php if ( ! $is_template_1 && ( $show_top_icon || ( $show_top_label && '' !== $top_label ) ) ) : ?>
			<div class="nextora-testimonial-carousel__top">
				<?php if ( $show_top_icon ) : ?>
					<div class="nextora-testimonial-carousel__icon" aria-hidden="true">
						<?php
						if ( 'custom-svg' === $top_icon_type && '' !== trim( $custom_icon ) ) {
							echo wp_kses(
								$custom_icon,
								array(
									'svg'    => array(
										'class'       => true,
										'viewbox'     => true,
										'viewBox'     => true,
										'xmlns'       => true,
										'aria-hidden' => true,
										'fill'        => true,
										'stroke'      => true,
										'width'       => true,
										'height'      => true,
									),
									'path'   => array(
										'd'               => true,
										'fill'            => true,
										'stroke'          => true,
										'stroke-width'    => true,
										'stroke-linecap'  => true,
										'stroke-linejoin' => true,
									),
									'circle' => array(
										'cx'     => true,
										'cy'     => true,
										'r'      => true,
										'fill'   => true,
										'stroke' => true,
									),
									'line'   => array(
										'x1'     => true,
										'y1'     => true,
										'x2'     => true,
										'y2'     => true,
										'stroke' => true,
									),
								),
							);
						} else {
							echo nextora_testimonial_carousel_icon_svg( $top_icon_type ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						}
						?>
					</div>
				<?php endif; ?>
				<?php if ( $show_top_label && '' !== $top_label ) : ?>
					<p class="nextora-testimonial-carousel__label"><?php echo esc_html( $top_label ); ?></p>
				<?php endif; ?>
			</div>
		<?php endif; ?>

		<div
			class="nextora-testimonial-carousel__carousel-root"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
		>
			<div class="swiper nextora-testimonial-carousel__swiper">
				<div class="swiper-wrapper">
					<?php
					foreach ( $items as $item ) {
						if ( $is_template_1 ) {
							// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
							echo nextora_testimonial_carousel_render_slide_t1( $item );
						} else {
							// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
							echo nextora_testimonial_carousel_render_slide( $item );
						}
					}
					?>
				</div>
			</div>
			<?php if ( $show_arrows && 'sides' === $arrow_pos && ! $is_template_1 && $slide_count > 1 ) : ?>
				<div class="nextora-testimonial-carousel__arrows nextora-testimonial-carousel__arrows--sides">
					<button type="button" class="nextora-testimonial-carousel__arrow nextora-testimonial-carousel__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous testimonial', 'nextora' ); ?>">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
					</button>
					<button type="button" class="nextora-testimonial-carousel__arrow nextora-testimonial-carousel__arrow--next" aria-label="<?php echo esc_attr__( 'Next testimonial', 'nextora' ); ?>">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
					</button>
				</div>
			<?php endif; ?>
		</div>

		<?php if ( ! $is_template_1 && 'below-quote' === $trust_pos && '' !== $trust_html ) : ?>
			<?php echo $trust_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		<?php endif; ?>

		<?php if ( ! $is_template_1 && 'above-dots' === $trust_pos && '' !== $trust_html ) : ?>
			<?php echo $trust_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		<?php endif; ?>

		<?php if ( $show_pag && $slide_count > 1 ) : ?>
			<div class="nextora-testimonial-carousel__pagination swiper-pagination" aria-hidden="true"></div>
		<?php endif; ?>

		<?php if ( $show_arrows && 'below-dots' === $arrow_pos && $slide_count > 1 ) : ?>
			<div class="nextora-testimonial-carousel__arrows nextora-testimonial-carousel__arrows--below-dots">
				<button type="button" class="nextora-testimonial-carousel__arrow nextora-testimonial-carousel__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous testimonial', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
				</button>
				<button type="button" class="nextora-testimonial-carousel__arrow nextora-testimonial-carousel__arrow--next" aria-label="<?php echo esc_attr__( 'Next testimonial', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
				</button>
			</div>
		<?php endif; ?>

		<?php if ( ! $is_template_1 && 'bottom' === $trust_pos && '' !== $trust_html ) : ?>
			<?php echo $trust_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		<?php endif; ?>
	</div>
</div>
