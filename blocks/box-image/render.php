<?php
/**
 * Box Image — dynamic render (image cards, grid or slider).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_box_image_enqueue_view_script' ) ) {
	function nextora_box_image_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/box-image' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/box-image/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/box-image/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-box-image-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-box-image-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-box-image-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_box_image_resolve_color' ) ) {
	function nextora_box_image_resolve_color( string $raw ): string {
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

if ( ! function_exists( 'nextora_box_image_sanitize_css_length' ) ) {
	function nextora_box_image_sanitize_css_length( string $value ): string {
		$value = trim( $value );
		if ( '' === $value || '0' === $value ) {
			return '';
		}

		if ( preg_match( '/^var:preset\|spacing\|([a-z0-9_-]+)$/i', $value, $preset_m ) ) {
			return 'var(--wp--preset--spacing--' . strtolower( $preset_m[1] ) . ')';
		}

		if ( preg_match( '/^(\d+\.?\d*)(px|rem|em|%|vw|vh)$/i', $value, $length_m ) ) {
			return $length_m[1] . strtolower( $length_m[2] );
		}

		if ( preg_match( '/^var\(--[a-z0-9-]+\)$/i', $value ) ) {
			return $value;
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_box_image_normalize_item' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw item from attributes.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_box_image_normalize_item( array $raw ): array {
		return array(
			'id'              => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'title'           => isset( $raw['title'] ) ? trim( (string) $raw['title'] ) : '',
			'description'     => isset( $raw['description'] ) ? trim( (string) $raw['description'] ) : '',
			'showLink'        => ! isset( $raw['showLink'] ) || (bool) $raw['showLink'],
			'linkLabel'       => isset( $raw['linkLabel'] ) ? trim( (string) $raw['linkLabel'] ) : '',
			'linkUrl'         => isset( $raw['linkUrl'] ) ? trim( (string) $raw['linkUrl'] ) : '',
			'linkTarget'      => isset( $raw['linkTarget'] ) && '_blank' === (string) $raw['linkTarget'] ? '_blank' : '_self',
			'imageId'         => isset( $raw['imageId'] ) ? (int) $raw['imageId'] : 0,
			'imageUrl'        => isset( $raw['imageUrl'] ) ? trim( (string) $raw['imageUrl'] ) : '',
			'backgroundColor' => isset( $raw['backgroundColor'] ) ? trim( (string) $raw['backgroundColor'] ) : '',
			'titleColor'      => isset( $raw['titleColor'] ) ? trim( (string) $raw['titleColor'] ) : '',
			'descriptionColor' => isset( $raw['descriptionColor'] ) ? trim( (string) $raw['descriptionColor'] ) : '',
			'linkColor'       => isset( $raw['linkColor'] ) ? trim( (string) $raw['linkColor'] ) : '',
			'badge'           => isset( $raw['badge'] ) ? trim( (string) $raw['badge'] ) : '',
		);
	}
}

if ( ! function_exists( 'nextora_box_image_placeholder_url' ) ) {
	function nextora_box_image_placeholder_url(): string {
		return (string) get_template_directory_uri() . '/assets/images/placeholder/general-img-landscape.png';
	}
}

if ( ! function_exists( 'nextora_box_image_render_card' ) ) {
	/**
	 * @param array<string, mixed> $item     Normalized item.
	 * @param bool                 $as_slide Wrap in swiper-slide.
	 * @param string               $template Template name.
	 */
	function nextora_box_image_render_card(
		array $item,
		bool $as_slide = true,
		string $template = 'default',
	): string {
		$title       = (string) $item['title'];
		$description = (string) $item['description'];

		if ( '' === trim( wp_strip_all_tags( $title ) ) && '' === trim( wp_strip_all_tags( $description ) ) ) {
			return '';
		}

		$show_link   = ! empty( $item['showLink'] );
		$link_label  = (string) $item['linkLabel'];
		$link_url    = (string) $item['linkUrl'];
		$link_target = (string) $item['linkTarget'];

		$image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
		$image_url = isset( $item['imageUrl'] ) ? (string) $item['imageUrl'] : '';

		$badge            = isset( $item['badge'] ) ? trim( (string) $item['badge'] ) : '';
		$bg_color         = isset( $item['backgroundColor'] ) ? trim( (string) $item['backgroundColor'] ) : '';
		$title_color      = isset( $item['titleColor'] ) ? trim( (string) $item['titleColor'] ) : '';
		$description_color = isset( $item['descriptionColor'] ) ? trim( (string) $item['descriptionColor'] ) : '';
		$link_color       = isset( $item['linkColor'] ) ? trim( (string) $item['linkColor'] ) : '';

		$is_template1 = 'template1' === $template;
		$is_template2     = 'template2' === $template;

		$card_vars = array();
		if ( '' !== $bg_color ) {
			$resolved = nextora_box_image_resolve_color( $bg_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-bg:' . esc_attr( $resolved );
			}
		}
		if ( '' !== $title_color ) {
			$resolved = nextora_box_image_resolve_color( $title_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-title-color:' . esc_attr( $resolved );
			}
		}
		if ( '' !== $description_color ) {
			$resolved = nextora_box_image_resolve_color( $description_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-desc-color:' . esc_attr( $resolved );
			}
		}
		if ( '' !== $link_color ) {
			$resolved = nextora_box_image_resolve_color( $link_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-link-color:' . esc_attr( $resolved );
			}
		}

		$card_style = '';
		if ( array() !== $card_vars ) {
			$card_style = ' style="' . implode( ';', $card_vars ) . '"';
		}

		$out  = $as_slide ? '<div class="swiper-slide">' : '';
		if ( $is_template1 ) {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template1"' . $card_style . '>';
		} elseif ( $is_template2 ) {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template2"' . $card_style . '>';
		} else {
			$out .= '<article class="nextora-box-image__card"' . $card_style . '>';
		}

		if ( $is_template1 ) {
			$out .= '<div class="nextora-box-image__card-inner">';
		}

		$out .= '<div class="nextora-box-image__image-wrap">';
		if ( $image_id > 0 ) {
			$out .= wp_get_attachment_image(
				$image_id,
				'medium_large',
				false,
				array(
					'class'    => 'nextora-box-image__card-image',
					'loading'  => 'lazy',
					'decoding' => 'async',
					'alt'      => '',
				),
			);
		} elseif ( '' !== $image_url ) {
			$url = esc_url( $image_url );
			if ( '' !== $url ) {
				$out .= sprintf(
					'<img class="nextora-box-image__card-image" src="%1$s" alt="" loading="lazy" decoding="async" />',
					$url,
				);
			}
		} else {
			$out .= sprintf(
				'<img class="nextora-box-image__card-image" src="%1$s" alt="" loading="lazy" decoding="async" />',
				esc_url( nextora_box_image_placeholder_url() ),
			);
		}

		if ( $is_template1 && '' !== $badge ) {
			$out .= '<span class="nextora-box-image__badge">' . esc_html( $badge ) . '</span>';
		}

		$out .= '</div>';

		if ( $is_template1 ) {
			$out .= '<div class="nextora-box-image__card-body">';
		}

		$out .= '<h3 class="nextora-box-image__title">' . esc_html( $title ) . '</h3>';

		if ( '' !== trim( wp_strip_all_tags( $description ) ) ) {
			$out .= '<p class="nextora-box-image__description">' . esc_html( $description ) . '</p>';
		}

		if ( $show_link && '' !== $link_label ) {
			$arrow = '<span class="nextora-box-image__link-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
			if ( $is_template1 ) {
				$link_class = 'nextora-box-image__link wp-block-button__link';
			} elseif ( $is_template2 ) {
				$link_class = 'nextora-box-image__link nextora-box-image__link--template2';
			} else {
				$link_class = 'nextora-box-image__link';
			}
			if ( '' !== $link_url ) {
				$out .= sprintf(
					'<a class="%1$s" href="%2$s"%3$s>%4$s%5$s</a>',
					$link_class,
					esc_url( $link_url ),
					'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
					esc_html( $link_label ),
					$arrow,
				);
			} else {
				$out .= sprintf(
					'<span class="%1$s nextora-box-image__link--static">%2$s%3$s</span>',
					$link_class,
					esc_html( $link_label ),
					$arrow,
				);
			}
		}

		if ( $is_template1 ) {
			$out .= '</div>';
			$out .= '</div>';
		}

		$out .= '</article>';
		$out .= $as_slide ? '</div>' : '';

		return $out;
	}
}

/** @var list<array<string, mixed>> $items */
$items = array();
if ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) ) {
	foreach ( $attributes['items'] as $raw_item ) {
		if ( ! is_array( $raw_item ) ) {
			continue;
		}
		$normalized = nextora_box_image_normalize_item( $raw_item );
		if ( '' !== trim( (string) $normalized['title'] ) ) {
			$items[] = $normalized;
		}
	}
}

if ( array() === $items ) {
	return;
}

$items = array_values( (array) apply_filters( 'nextora_box_image_items', $items, $attributes ) );

$layout_mode = isset( $attributes['layoutMode'] ) ? (string) $attributes['layoutMode'] : 'slider';
if ( ! in_array( $layout_mode, array( 'slider', 'grid' ), true ) ) {
	$layout_mode = 'slider';
}

$template = isset( $attributes['template'] ) ? (string) $attributes['template'] : 'default';
if ( ! in_array( $template, array( 'default', 'template1', 'template2' ), true ) ) {
	$template = 'default';
}

$content_max = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '';
$grid_cols   = isset( $attributes['gridColumns'] ) ? max( 1, min( 6, (int) $attributes['gridColumns'] ) ) : 4;
$grid_min    = isset( $attributes['gridMinWidth'] ) ? max( 480, min( 1200, (int) $attributes['gridMinWidth'] ) ) : 981;
$card_min_h  = isset( $attributes['cardMinHeight'] ) ? max( 0, min( 600, (int) $attributes['cardMinHeight'] ) ) : 240;
$card_border = isset( $attributes['cardBorderWidth'] ) ? max( 0, min( 8, (int) $attributes['cardBorderWidth'] ) ) : 0;
$card_radius = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 32, (int) $attributes['cardBorderRadius'] ) ) : 8;
$aspect      = isset( $attributes['imageAspectRatio'] ) ? (string) $attributes['imageAspectRatio'] : '3/2';
$image_fit   = isset( $attributes['imageFit'] ) ? (string) $attributes['imageFit'] : 'cover';

$spv_mobile  = round( isset( $attributes['slidesPerViewMobile'] ) ? (float) $attributes['slidesPerViewMobile'] : 1.15, 3 );
$spv_tablet  = round( isset( $attributes['slidesPerViewTablet'] ) ? (float) $attributes['slidesPerViewTablet'] : 2.0, 3 );
$spv_desktop = round( isset( $attributes['slidesPerView'] ) ? (float) $attributes['slidesPerView'] : 4.0, 3 );
$space       = isset( $attributes['spaceBetween'] ) ? max( 0, min( 60, (int) $attributes['spaceBetween'] ) ) : 18;
$speed       = isset( $attributes['speed'] ) ? max( 100, min( 2000, (int) $attributes['speed'] ) ) : 500;
$loop        = ! empty( $attributes['loop'] );
$autoplay    = ! empty( $attributes['autoplay'] );
$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 1000, min( 10000, (int) $attributes['autoplayDelay'] ) ) : 4000;
$pause_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag    = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$show_arrows = ! empty( $attributes['showArrows'] );
$free_mode   = ! empty( $attributes['freeMode'] );
$grab_cursor = ! isset( $attributes['grabCursor'] ) || (bool) $attributes['grabCursor'];

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$slide_count = count( $items );
$use_loop    = $loop && $slide_count > 1;

$swiper_opts = array(
	'loop'                 => $use_loop,
	'autoplay'             => $autoplay,
	'autoplayDelay'        => $autoplay_d,
	'pauseOnHover'         => $pause_hover,
	'showPagination'       => $show_pag && $slide_count > 1,
	'showArrows'           => $show_arrows && $slide_count > 1,
	'spaceBetween'         => $space,
	'speed'                => $speed,
	'freeMode'             => $free_mode,
	'grabCursor'           => $grab_cursor,
	'slidesPerView'        => $spv_mobile,
	'slidesPerViewTablet'  => $spv_tablet,
	'slidesPerViewDesktop' => $spv_desktop,
);

$swiper_opts = (array) apply_filters( 'nextora_box_image_swiper_options', $swiper_opts, $attributes, $items );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$color_keys = array(
	'cardBorderColor'       => '--nextora-box-image-card-border-color',
	'cardBackgroundColor'   => '--nextora-box-image-card-bg',
	'cardHoverBackgroundColor' => '--nextora-box-image-card-hover-bg',
	'cardTitleColor'        => '--nextora-box-image-card-title-color',
	'cardDescriptionColor'  => '--nextora-box-image-card-desc-color',
	'descriptionHoverColor' => '--nextora-box-image-card-desc-hover-color',
	'linkColor'             => '--nextora-box-image-link-color',
	'linkHoverColor'        => '--nextora-box-image-link-hover-color',
	'paginationColor'       => '--nextora-box-image-dot-color',
	'paginationActiveColor' => '--nextora-box-image-dot-active',
	'arrowColor'            => '--nextora-box-image-arrow-color',
);

$css_vars = array(
	'--nextora-box-image-cols'              => (string) $grid_cols,
	'--nextora-box-image-card-min-height'   => $card_min_h . 'px',
	'--nextora-box-image-card-border-width' => $card_border . 'px',
	'--nextora-box-image-card-radius'       => $card_radius . 'px',
	'--nextora-box-image-aspect-ratio'      => $aspect,
	'--nextora-box-image-fit'               => $image_fit,
);

if ( '' !== $content_max ) {
	$css_vars['--nextora-box-image-max-width'] = $content_max;
}

$css_vars['--nextora-box-image-gap'] = $space . 'px';

foreach ( $color_keys as $attr_key => $var_name ) {
	$raw = isset( $attributes[ $attr_key ] ) ? (string) $attributes[ $attr_key ] : '';
	if ( 'currentColor' === $raw ) {
		continue;
	}
	$resolved = nextora_box_image_resolve_color( $raw );
	if ( '' !== $resolved && 'currentColor' !== $resolved ) {
		$css_vars[ $var_name ] = $resolved;
	}
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-box-image',
	'nextora-box-image--loading',
	'nextora-box-image--layout-' . sanitize_html_class( $layout_mode ),
);
if ( 'default' !== $template ) {
	$wrapper_classes[] = 'nextora-box-image--template-' . sanitize_html_class( $template );
}
if ( $enable_scroll ) {
	$wrapper_classes[] = 'nextora-box-image--reveal-pending';
}

$wrapper_classes = (array) apply_filters(
	'nextora_box_image_wrapper_classes',
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
	'nextora_box_image_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

nextora_box_image_enqueue_view_script();

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-box-image__inner">
		<div
			class="nextora-box-image__carousel-root"
			data-layout-mode="<?php echo esc_attr( $layout_mode ); ?>"
			data-grid-min-width="<?php echo esc_attr( (string) $grid_min ); ?>"
			data-grid-columns="<?php echo esc_attr( (string) $grid_cols ); ?>"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
		>
			<div class="swiper nextora-box-image__swiper">
				<div class="swiper-wrapper">
				<?php
				foreach ( $items as $item ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
					echo nextora_box_image_render_card( $item, true, $template );
				}
				?>
				</div>
			</div>
			<?php if ( $show_arrows && $slide_count > 1 ) : ?>
				<button type="button" class="nextora-box-image__arrow nextora-box-image__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
				</button>
				<button type="button" class="nextora-box-image__arrow nextora-box-image__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
				</button>
			<?php endif; ?>
			<?php if ( $show_pag && $slide_count > 1 ) : ?>
				<div class="swiper-pagination nextora-box-image__pagination"></div>
			<?php endif; ?>
		</div>
	</div>
</div>
