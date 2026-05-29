<?php
/**
 * Testimonials (split layout) — server render + Swiper markup (view.js).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_testimonials_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_testimonials_resolve_color( string $raw ): string {
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
	 * Build " / Age - Location" suffix for attribution line.
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
		return '/ ' . implode( ' - ', $parts );
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

if ( ! function_exists( 'nextora_testimonials_render_content_slide' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized testimonial.
	 */
	function nextora_testimonials_render_content_slide( array $item ): string {
		$quote = (string) $item['quoteText'];
		if ( '' === $quote ) {
			return '';
		}

		$name     = (string) $item['authorName'];
		$meta     = nextora_testimonials_build_author_meta(
			(string) $item['authorAge'],
			(string) $item['authorLocation'],
		);

		$out  = '<div class="swiper-slide nextora-testimonials__slide">';
		$out .= '<div class="nextora-testimonials__quote"><p>' . esc_html( $quote ) . '</p></div>';

		if ( '' !== $name || '' !== $meta ) {
			$out .= '<footer class="nextora-testimonials__author">';
			if ( '' !== $name ) {
				$out .= '<strong class="nextora-testimonials__author-name">' . esc_html( $name ) . '</strong>';
			}
			if ( '' !== $meta ) {
				$out .= '<span class="nextora-testimonials__author-meta">' . esc_html( $meta ) . '</span>';
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

$content_bg = nextora_testimonials_resolve_color( isset( $attributes['contentBackgroundColor'] ) ? (string) $attributes['contentBackgroundColor'] : '' );
$heading_color     = nextora_testimonials_resolve_color( isset( $attributes['headingColor'] ) ? (string) $attributes['headingColor'] : '' );
$quote_color       = nextora_testimonials_resolve_color( isset( $attributes['quoteColor'] ) ? (string) $attributes['quoteColor'] : '' );
$author_name_color = nextora_testimonials_resolve_color( isset( $attributes['authorNameColor'] ) ? (string) $attributes['authorNameColor'] : '' );
$author_meta_color = nextora_testimonials_resolve_color( isset( $attributes['authorMetaColor'] ) ? (string) $attributes['authorMetaColor'] : '' );
$dot_color         = nextora_testimonials_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active        = nextora_testimonials_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );
$heading_font_size = nextora_testimonials_resolve_font_size( isset( $attributes['headingFontSize'] ) ? (string) $attributes['headingFontSize'] : '' );
$quote_font_size   = nextora_testimonials_resolve_font_size( isset( $attributes['quoteFontSize'] ) ? (string) $attributes['quoteFontSize'] : '' );

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
	'--nextora-testimonials-content-bg'        => '' !== $content_bg ? $content_bg : 'var(--wp--preset--color--base, #fff)',
	'--nextora-testimonials-heading-color'     => '' !== $heading_color ? $heading_color : 'inherit',
	'--nextora-testimonials-quote-color'       => '' !== $quote_color ? $quote_color : 'inherit',
	'--nextora-testimonials-author-name-color' => '' !== $author_name_color ? $author_name_color : 'inherit',
	'--nextora-testimonials-author-meta-color' => '' !== $author_meta_color ? $author_meta_color : 'color-mix(in srgb, currentColor 65%, transparent)',
	'--nextora-testimonials-dot-color'         => '' !== $dot_color ? $dot_color : 'color-mix(in srgb, currentColor 35%, transparent)',
	'--nextora-testimonials-dot-active'        => '' !== $dot_active ? $dot_active : 'var(--wp--preset--color--contrast, currentColor)',
);

if ( '' !== $heading_font_size ) {
	$css_vars['--nextora-testimonials-heading-size'] = $heading_font_size;
}
if ( '' !== $quote_font_size ) {
	$css_vars['--nextora-testimonials-quote-size'] = $quote_font_size;
}

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

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div
		class="nextora-testimonials__root"
		data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
	>
		<div class="nextora-testimonials__layout">
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

			<div class="nextora-testimonials__content">
				<div class="nextora-testimonials__content-inner">
					<?php if ( '' !== $heading_text ) : ?>
						<div class="nextora-testimonials__header">
							<h4 class="nextora-testimonials__heading">
								<?php echo esc_html( $heading_text ); ?>
							</h4>
						</div>
					<?php endif; ?>

					<div class="nextora-testimonials__carousel">
						<div class="swiper nextora-testimonials__content-swiper">
							<div class="swiper-wrapper">
								<?php
								foreach ( $items as $item ) {
									// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
									echo nextora_testimonials_render_content_slide( $item );
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
