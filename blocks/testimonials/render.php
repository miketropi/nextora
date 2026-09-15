<?php
/**
 * Testimonials (split layout) — server render + Swiper markup (view.js).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_testimonials_resolve_font_family' ) ) {
	/**
	 * Preset slug or custom font-family stack → CSS font-family value.
	 */
	function nextora_testimonials_resolve_font_family( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--font-family--' . sanitize_html_class( $raw ) . ')';
		}
		return $raw;
	}
}

if ( ! function_exists( 'nextora_testimonials_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_testimonials_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( 'transparent' === $raw || 'rgba(0,0,0,0)' === $raw || '#00000000' === $raw ) {
			return 'transparent';
		}
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}

		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			$slug = sanitize_html_class( strtolower( $raw ) );
			return 'transparent' === $slug ? 'transparent' : 'var(--wp--preset--color--' . $slug . ')';
		}
		return '';
	}
}

if ( ! function_exists( 'nextora_testimonials_resolve_font_size' ) ) {
	/**
	 * Preset slug or custom CSS size → font-size value.
	 */
	function nextora_testimonials_resolve_font_size( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--font-size--' . sanitize_html_class( $raw ) . ')';
		}
		if ( preg_match( '/^clamp\(.+\)$/i', $raw ) || preg_match( '/^[\d.]+(?:rem|px|em|vw|vh|%)$/i', $raw ) ) {
			return $raw;
		}
		if ( preg_match( '/^[\d.]+$/', $raw ) ) {
			return $raw . 'px';
		}
		return '';
	}
}

if ( ! function_exists( 'nextora_testimonials_get_gutenberg_color_props' ) ) {
	/**
	 * Resolve Gutenberg standard color classes and inline styles.
	 *
	 * @param string $color Raw color attribute value.
	 * @param string $type  'text' or 'background'.
	 *
	 * @return array{class: string, style: string}
	 */
	function nextora_testimonials_get_gutenberg_color_props( string $color, string $type = 'text' ): array {
		$color = trim( $color );
		if ( '' === $color || 'inherit' === $color || 'currentColor' === $color ) {
			return array(
				'class' => '',
				'style' => '',
			);
		}

		if (
			'transparent' === $color ||
			'rgba(0,0,0,0)' === $color ||
			'#00000000' === $color
		) {
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-transparent-background-color',
					'style' => 'background-color:transparent;',
				);
			}
			return array(
				'class' => 'has-text-color has-transparent-color',
				'style' => 'color:transparent;',
			);
		}

		$slug = '';
		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $color, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i', $color, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^[a-z0-9_-]+$/i', $color ) && ! preg_match( '/^[0-9a-f]{3,8}$/i', $color ) ) {
			$slug = sanitize_html_class( strtolower( $color ) );
		}

		if ( 'transparent' === $slug ) {
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-transparent-background-color',
					'style' => 'background-color:transparent;',
				);
			}
			return array(
				'class' => 'has-text-color has-transparent-color',
				'style' => 'color:transparent;',
			);
		}

		if ( '' !== $slug ) {
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-' . $slug . '-background-color',
					'style' => '',
				);
			}
			return array(
				'class' => 'has-text-color has-' . $slug . '-color',
				'style' => '',
			);
		}

		if ( 'background' === $type ) {
			return array(
				'class' => 'has-background',
				'style' => 'background-color:' . esc_attr( $color ) . ';',
			);
		}
		return array(
			'class' => 'has-text-color',
			'style' => 'color:' . esc_attr( $color ) . ';',
		);
	}
}

if ( ! function_exists( 'nextora_testimonials_get_font_size_props' ) ) {
	function nextora_testimonials_get_font_size_props( string $size ): array {
		$size = trim( $size );
		if ( '' === $size ) {
			return array( 'class' => '', 'style' => '' );
		}
		if ( preg_match( '/^[a-z0-9-]+$/i', $size ) ) {
			return array(
				'class' => 'has-' . sanitize_html_class( strtolower( $size ) ) . '-font-size',
				'style' => '',
			);
		}
		if ( preg_match( '/^clamp\(.+\)$/i', $size ) || preg_match( '/^[\d.]+(?:rem|px|em|vw|vh|%)$/i', $size ) ) {
			return array(
				'class' => '',
				'style' => 'font-size:' . esc_attr( $size ) . ';',
			);
		}
		if ( preg_match( '/^[\d.]+$/', $size ) ) {
			return array(
				'class' => '',
				'style' => 'font-size:' . esc_attr( $size ) . 'px;',
			);
		}
		return array( 'class' => '', 'style' => '' );
	}
}

if ( ! function_exists( 'nextora_testimonials_get_font_family_props' ) ) {
	function nextora_testimonials_get_font_family_props( string $family ): array {
		$family = trim( $family );
		if ( '' === $family ) {
			return array( 'class' => '', 'style' => '' );
		}
		if ( preg_match( '/^[a-z0-9-]+$/i', $family ) ) {
			return array(
				'class' => 'has-' . sanitize_html_class( strtolower( $family ) ) . '-font-family',
				'style' => '',
			);
		}
		return array(
			'class' => '',
			'style' => 'font-family:' . esc_attr( $family ) . ';',
		);
	}
}

if ( ! function_exists( 'nextora_testimonials_normalize_item' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw testimonial.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_testimonials_normalize_item( array $raw ): array {
		return array(
			'id'             => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'quoteText'      => isset( $raw['quoteText'] ) ? trim( (string) $raw['quoteText'] ) : '',
			'authorName'     => isset( $raw['authorName'] ) ? trim( (string) $raw['authorName'] ) : '',
			'authorAge'      => isset( $raw['authorAge'] ) ? trim( (string) $raw['authorAge'] ) : '',
			'authorLocation' => isset( $raw['authorLocation'] ) ? trim( (string) $raw['authorLocation'] ) : '',
			'portraitId'     => isset( $raw['portraitId'] ) ? (int) $raw['portraitId'] : 0,
			'portraitUrl'    => isset( $raw['portraitUrl'] ) ? trim( (string) $raw['portraitUrl'] ) : '',
			'portraitAlt'    => isset( $raw['portraitAlt'] ) ? trim( (string) $raw['portraitAlt'] ) : '',
		);
	}
}

if ( ! function_exists( 'nextora_testimonials_build_author_meta' ) ) {
	/**
	 * Build " / Age, Location" suffix for attribution line.
	 */
	function nextora_testimonials_build_author_meta( string $age, string $location ): string {
		$parts = array();
		if ( '' !== $age ) {
			$parts[] = $age;
		}
		if ( '' !== $location ) {
			$parts[] = $location;
		}
		if ( array() === $parts ) {
			return '';
		}
		return '/ ' . implode( ', ', $parts );
	}
}

if ( ! function_exists( 'nextora_testimonials_render_portrait_fallback' ) ) {
	/**
	 * URL portrait or placeholder when no attachment is available.
	 *
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonials_render_portrait_fallback( array $item, string $alt ): string {
		$portrait_url = isset( $item['portraitUrl'] ) ? trim( (string) $item['portraitUrl'] ) : '';

		if ( '' !== $portrait_url ) {
			$url = esc_url( $portrait_url );
			if ( '' !== $url ) {
				return sprintf(
					'<img class="nextora-testimonials__portrait" src="%1$s" alt="%2$s" loading="lazy" decoding="async" sizes="(min-width: 768px) 50vw, 100vw" />',
					$url,
					esc_attr( $alt ),
				);
			}
		}

		return '<div class="nextora-testimonials__portrait-placeholder" aria-hidden="true"></div>';
	}
}

if ( ! function_exists( 'nextora_testimonials_render_portrait' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonials_render_portrait( array $item ): string {
		$portrait_id = (int) $item['portraitId'];
		$name        = (string) $item['authorName'];
		$alt         = (string) $item['portraitAlt'];

		if ( '' === $alt && $portrait_id > 0 ) {
			$alt = (string) get_post_meta( $portrait_id, '_wp_attachment_image_alt', true );
		}
		if ( '' === $alt && '' !== $name ) {
			$alt = $name;
		}
		if ( '' === $alt ) {
			$alt = __( 'Testimonial portrait', 'nextora' );
		}

		$out  = '<figure class="nextora-testimonials__figure">';

		if ( $portrait_id > 0 ) {
			$img = wp_get_attachment_image(
				$portrait_id,
				'large',
				false,
				array(
					'class'    => 'nextora-testimonials__portrait',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
					'sizes'    => '(min-width: 768px) 50vw, 100vw',
				),
			);
			if ( is_string( $img ) && '' !== $img ) {
				$out .= $img;
			} else {
				$out .= nextora_testimonials_render_portrait_fallback( $item, $alt );
			}
		} else {
			$out .= nextora_testimonials_render_portrait_fallback( $item, $alt );
		}

		$out .= '</figure>';

		return $out;
	}
}

if ( ! function_exists( 'nextora_testimonials_render_media_item' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonials_render_media_item( array $item, int $index, bool $is_active ): string {
		$classes = array( 'nextora-testimonials__media-item' );
		if ( $is_active ) {
			$classes[] = 'is-active';
		}

		return sprintf(
			'<div class="%s" data-media-index="%d">%s</div>',
			esc_attr( implode( ' ', $classes ) ),
			$index,
			nextora_testimonials_render_portrait( $item ), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
		);
	}
}

if ( ! function_exists( 'nextora_testimonials_render_avatar' ) ) {
	/**
	 * Render a small round avatar for template-02 author section.
	 *
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonials_render_avatar( array $item ): string {
		$portrait_id  = (int) $item['portraitId'];
		$portrait_url = isset( $item['portraitUrl'] ) ? trim( (string) $item['portraitUrl'] ) : '';
		$name         = (string) $item['authorName'];
		$alt          = (string) $item['portraitAlt'];

		if ( '' === $alt && $portrait_id > 0 ) {
			$alt = (string) get_post_meta( $portrait_id, '_wp_attachment_image_alt', true );
		}
		if ( '' === $alt && '' !== $name ) {
			$alt = $name;
		}
		if ( '' === $alt ) {
			$alt = __( 'Testimonial avatar', 'nextora' );
		}

		if ( $portrait_id > 0 ) {
			$img = wp_get_attachment_image(
				$portrait_id,
				'thumbnail',
				false,
				array(
					'class'    => 'nextora-testimonials__avatar-img',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
				),
			);
			if ( is_string( $img ) && '' !== $img ) {
				return '<div class="nextora-testimonials__avatar">' . $img . '</div>';
			}
		}

		if ( '' !== $portrait_url ) {
			$url = esc_url( $portrait_url );
			if ( '' !== $url ) {
				return sprintf(
					'<div class="nextora-testimonials__avatar"><img class="nextora-testimonials__avatar-img" src="%1$s" alt="%2$s" loading="lazy" decoding="async" /></div>',
					$url,
					esc_attr( $alt ),
				);
			}
		}

		return '<div class="nextora-testimonials__avatar nextora-testimonials__avatar--placeholder" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5"/></svg></div>';
	}
}

if ( ! function_exists( 'nextora_testimonials_render_content_slide' ) ) {
	/**
	 * @param array<string, mixed>  $item          Normalized testimonial.
	 * @param string                $template      Template type.
	 * @param array<string, string> $context_props Color and typography classes/styles.
	 */
	function nextora_testimonials_render_content_slide( array $item, string $template = 'default', array $context_props = array() ): string {
		$quote = (string) $item['quoteText'];
		if ( '' === $quote ) {
			return '';
		}

		$name     = (string) $item['authorName'];
		$location = (string) $item['authorLocation'];
		$meta     = nextora_testimonials_build_author_meta(
			(string) $item['authorAge'],
			$location,
		);

		$quote_class = ! empty( $context_props['quote_class'] ) ? ' ' . $context_props['quote_class'] : '';
		$quote_style = ! empty( $context_props['quote_style'] ) ? ' style="' . esc_attr( $context_props['quote_style'] ) . '"' : '';

		$name_class = ! empty( $context_props['author_name_class'] ) ? ' ' . $context_props['author_name_class'] : '';
		$name_style = ! empty( $context_props['author_name_style'] ) ? ' style="' . esc_attr( $context_props['author_name_style'] ) . '"' : '';

		$meta_class = ! empty( $context_props['author_meta_class'] ) ? ' ' . $context_props['author_meta_class'] : '';
		$meta_style = ! empty( $context_props['author_meta_style'] ) ? ' style="' . esc_attr( $context_props['author_meta_style'] ) . '"' : '';

		$out  = '<div class="swiper-slide nextora-testimonials__slide">';

		if ( 'template-01' === $template || 'template-02' === $template ) {
			$out .= '<svg class="nextora-testimonials__quote-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.5 4C6 4 4 6.5 4 10v10h8v-9H7.5C7.5 8 8.3 7 10 7zm9 0C15 4 13 6.5 13 10v10h8v-9h-4.5C16.5 8 17.3 7 19 7z"/></svg>';
		}

		$out .= '<div class="nextora-testimonials__quote' . esc_attr( $quote_class ) . '"' . $quote_style . '><p>' . esc_html( $quote ) . '</p></div>';

		if ( 'template-02' === $template ) {
			if ( '' !== $name || '' !== $location ) {
				$out .= '<footer class="nextora-testimonials__author nextora-testimonials__author--with-avatar">';
				$out .= nextora_testimonials_render_avatar( $item );
				$out .= '<div class="nextora-testimonials__author-text">';
				if ( '' !== $name ) {
					$out .= '<strong class="nextora-testimonials__author-name' . esc_attr( $name_class ) . '"' . $name_style . '>' . esc_html( $name ) . '</strong>';
				}
				if ( '' !== $location ) {
					$out .= '<span class="nextora-testimonials__author-meta' . esc_attr( $meta_class ) . '"' . $meta_style . '>' . esc_html( $location ) . '</span>';
				}
				$out .= '</div>';
				$out .= '</footer>';
			}
		} elseif ( '' !== $name || '' !== $meta ) {
			$out .= '<footer class="nextora-testimonials__author">';
			if ( '' !== $name ) {
				$out .= '<strong class="nextora-testimonials__author-name' . esc_attr( $name_class ) . '"' . $name_style . '>' . esc_html( $name ) . '</strong>';
			}
			if ( '' !== $meta ) {
				$out .= '<span class="nextora-testimonials__author-meta' . esc_attr( $meta_class ) . '"' . $meta_style . '>' . esc_html( $meta ) . '</span>';
			}
			$out .= '</footer>';
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
	$normalized = nextora_testimonials_normalize_item( $raw );
	if ( '' !== $normalized['quoteText'] ) {
		$items[] = $normalized;
	}
}

if ( array() === $items ) {
	return;
}

/** @var list<array<string, mixed>> $items */
$items = array_values( (array) apply_filters( 'nextora_testimonials_items', $items, $attributes ) );

$template = isset( $attributes['template'] ) ? sanitize_key( (string) $attributes['template'] ) : 'default';
if ( ! in_array( $template, array( 'default', 'template-01', 'template-02' ), true ) ) {
	$template = 'default';
}

$heading_text   = isset( $attributes['headingText'] ) ? trim( wp_strip_all_tags( (string) $attributes['headingText'] ) ) : '';
$heading_level  = isset( $attributes['headingLevel'] ) ? max( 2, min( 4, (int) $attributes['headingLevel'] ) ) : 4;
$image_position = isset( $attributes['imagePosition'] ) ? sanitize_key( (string) $attributes['imagePosition'] ) : 'left';
if ( ! in_array( $image_position, array( 'left', 'right' ), true ) ) {
	$image_position = 'left';
}

$image_ratio = isset( $attributes['imageColumnRatio'] ) ? max( 40, min( 60, (int) $attributes['imageColumnRatio'] ) ) : 50;

$effect_raw = isset( $attributes['effect'] ) ? sanitize_key( (string) $attributes['effect'] ) : 'fade';
$effect     = match ( $effect_raw ) {
	'slide' => 'slide',
	'fadeup' => 'fadeUp',
	default => 'fade',
};
$speed       = isset( $attributes['speed'] ) ? max( 200, min( 2000, (int) $attributes['speed'] ) ) : 600;
$loop        = ! isset( $attributes['loop'] ) || (bool) $attributes['loop'];
$autoplay    = ! isset( $attributes['autoplay'] ) || (bool) $attributes['autoplay'];
$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 2000, min( 15000, (int) $attributes['autoplayDelay'] ) ) : 6000;
$pause_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag    = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$show_arrows = ! empty( $attributes['showArrows'] );

$content_bg_raw        = isset( $attributes['contentBackgroundColor'] ) ? (string) $attributes['contentBackgroundColor'] : '';
$heading_color_raw     = isset( $attributes['headingColor'] ) ? (string) $attributes['headingColor'] : '';
$quote_color_raw       = isset( $attributes['quoteColor'] ) ? (string) $attributes['quoteColor'] : '';
$author_name_color_raw = isset( $attributes['authorNameColor'] ) ? (string) $attributes['authorNameColor'] : '';
$author_meta_color_raw = isset( $attributes['authorMetaColor'] ) ? (string) $attributes['authorMetaColor'] : '';
$heading_font_size_raw = isset( $attributes['headingFontSize'] ) ? (string) $attributes['headingFontSize'] : '';
$quote_font_size_raw   = isset( $attributes['quoteFontSize'] ) ? (string) $attributes['quoteFontSize'] : '';
$quote_font_family_raw = isset( $attributes['quoteFontFamily'] ) ? (string) $attributes['quoteFontFamily'] : '';

$content_bg_props        = nextora_testimonials_get_gutenberg_color_props( $content_bg_raw, 'background' );
$heading_color_props     = nextora_testimonials_get_gutenberg_color_props( $heading_color_raw, 'text' );
$quote_color_props       = nextora_testimonials_get_gutenberg_color_props( $quote_color_raw, 'text' );
$author_name_color_props = nextora_testimonials_get_gutenberg_color_props( $author_name_color_raw, 'text' );
$author_meta_color_props = nextora_testimonials_get_gutenberg_color_props( $author_meta_color_raw, 'text' );

$heading_size_props = nextora_testimonials_get_font_size_props( $heading_font_size_raw );
$quote_size_props   = nextora_testimonials_get_font_size_props( $quote_font_size_raw );
$quote_family_props = nextora_testimonials_get_font_family_props( $quote_font_family_raw );

$dot_color  = nextora_testimonials_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active = nextora_testimonials_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );

$context_props = array(
	'quote_class'       => trim( $quote_color_props['class'] . ' ' . $quote_size_props['class'] . ' ' . $quote_family_props['class'] ),
	'quote_style'       => trim( $quote_color_props['style'] . ' ' . $quote_size_props['style'] . ' ' . $quote_family_props['style'] ),
	'author_name_class' => $author_name_color_props['class'],
	'author_name_style' => $author_name_color_props['style'],
	'author_meta_class' => $author_meta_color_props['class'],
	'author_meta_style' => $author_meta_color_props['style'],
);

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$slide_count = count( $items );
$use_loop    = $loop && $slide_count > 1;

$swiper_opts = array(
	'effect'         => $effect,
	'loop'           => $use_loop,
	'autoplay'       => $autoplay,
	'autoplayDelay'  => $autoplay_d,
	'pauseOnHover'   => $pause_hover,
	'showPagination' => $show_pag && $slide_count > 1,
	'showArrows'     => $show_arrows && $slide_count > 1,
	'speed'          => $speed,
);

$swiper_opts = (array) apply_filters( 'nextora_testimonials_swiper_options', $swiper_opts, $attributes, $items );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$portrait_placeholder_url = get_theme_file_uri( 'assets/images/placeholder/general-img-portrait.png' );

$css_vars = array(
	'--nextora-testimonials-portrait-placeholder-image' => 'url(' . esc_url( $portrait_placeholder_url ) . ')',
	'--nextora-testimonials-image-ratio'                => $image_ratio . '%',
	'--nextora-testimonials-dot-color'                  => '' !== $dot_color ? $dot_color : 'color-mix(in srgb, currentColor 35%, transparent)',
	'--nextora-testimonials-dot-active'                 => '' !== $dot_active ? $dot_active : 'var(--wp--preset--color--primary, currentColor)',
);

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$effect_class = match ( $effect ) {
	'fadeUp' => 'fade-up',
	'slide' => 'slide',
	default => 'fade',
};

$wrapper_classes = array(
	'nextora-testimonials',
	'nextora-testimonials--loading',
	'nextora-testimonials--template-' . $template,
	'nextora-testimonials--image-' . $image_position,
	'nextora-testimonials--effect-' . $effect_class,
);

$wrapper_classes = (array) apply_filters(
	'nextora_testimonials_wrapper_classes',
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
	'nextora_testimonials_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

$heading_tag = 'h' . (string) $heading_level;

$heading_classes   = array_filter( array( 'nextora-testimonials__heading', $heading_color_props['class'], $heading_size_props['class'] ) );
$heading_style_str = trim( $heading_color_props['style'] . ' ' . $heading_size_props['style'] );
$heading_style_att = '' !== $heading_style_str ? ' style="' . esc_attr( $heading_style_str ) . '"' : '';

$content_classes   = array_filter( array( 'nextora-testimonials__content', $content_bg_props['class'] ) );
$content_style_att = '' !== $content_bg_props['style'] ? ' style="' . esc_attr( $content_bg_props['style'] ) . '"' : '';
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div
		class="nextora-testimonials__root"
		data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
	>
		<div class="nextora-testimonials__layout">
			<?php if ( 'template-02' !== $template ) : ?>
			<div class="nextora-testimonials__media">
				<div class="nextora-testimonials__media-stack">
					<?php
					foreach ( $items as $index => $item ) {
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
						echo nextora_testimonials_render_media_item( $item, (int) $index, 0 === (int) $index );
					}
					?>
				</div>
			</div>
			<?php endif; ?>

			<div class="<?php echo esc_attr( implode( ' ', $content_classes ) ); ?>"<?php echo $content_style_att; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
				<div class="nextora-testimonials__content-inner">
					<?php if ( '' !== $heading_text && 'default' === $template ) : ?>
						<div class="nextora-testimonials__header">
							<<?php echo $heading_tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?> class="<?php echo esc_attr( implode( ' ', $heading_classes ) ); ?>"<?php echo $heading_style_att; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
								<?php echo esc_html( $heading_text ); ?>
							</<?php echo $heading_tag; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
						</div>
					<?php endif; ?>

					<div class="nextora-testimonials__carousel">
						<div class="swiper nextora-testimonials__content-swiper">
							<div class="swiper-wrapper">
								<?php
								foreach ( $items as $item ) {
									// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
									echo nextora_testimonials_render_content_slide( $item, $template, $context_props );
								}
								?>
							</div>
						</div>
					</div>

					<div class="nextora-testimonials__footer">
						<?php if ( $show_pag && $slide_count > 1 ) : ?>
							<div class="nextora-testimonials__pagination swiper-pagination"></div>
						<?php endif; ?>
						<?php if ( $show_arrows && $slide_count > 1 ) : ?>
							<div class="nextora-testimonials__arrows">
								<button type="button" class="nextora-testimonials__arrow nextora-testimonials__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous testimonial', 'nextora' ); ?>">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
								</button>
								<button type="button" class="nextora-testimonials__arrow nextora-testimonials__arrow--next" aria-label="<?php echo esc_attr__( 'Next testimonial', 'nextora' ); ?>">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
								</button>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
