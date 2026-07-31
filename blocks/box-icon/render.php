<?php
/**
 * Box Icon — dynamic render (icon cards, grid or slider).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

$lucide_path = (string) get_template_directory() . '/blocks/advanced-icon/lucide.php';
if ( is_readable( $lucide_path ) ) {
	require_once $lucide_path;
}

if ( ! function_exists( 'nextora_box_icon_enqueue_view_script' ) ) {
	/**
	 * Ensure the block view script is queued.
	 */
	function nextora_box_icon_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/box-icon' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/box-icon/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/box-icon/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-box-icon-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-box-icon-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-box-icon-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_box_icon_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value. Empty string stays empty (unlike icon helper).
	 */
	function nextora_box_icon_resolve_color( string $raw ): string {
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

		if ( function_exists( 'nextora_icon_resolve_color' ) ) {
			$resolved = nextora_icon_resolve_color( $raw );
			if ( 'currentColor' !== $resolved ) {
				return $resolved;
			}
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_box_icon_resolve_font_family' ) ) {
	/**
	 * Preset slug or custom font-family stack → CSS font-family value.
	 */
	function nextora_box_icon_resolve_font_family( string $raw ): string {
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

if ( ! function_exists( 'nextora_box_icon_sanitize_css_length' ) ) {
	/**
	 * Sanitize a CSS length for inline styles.
	 */
	function nextora_box_icon_sanitize_css_length( string $value ): string {
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

if ( ! function_exists( 'nextora_box_icon_card_padding_css_vars' ) ) {
	/**
	 * @param array<string, mixed> $attributes Block attributes.
	 *
	 * @return array<string, string>
	 */
	function nextora_box_icon_card_padding_css_vars( array $attributes ): array {
		$vars = array();

		if ( isset( $attributes['cardPadding'] ) && is_string( $attributes['cardPadding'] ) ) {
			$legacy = trim( (string) $attributes['cardPadding'] );
			if ( '' !== $legacy ) {
				$vars['--nextora-box-icon-card-padding'] = $legacy;
				return $vars;
			}
		}

		$padding = isset( $attributes['cardPadding'] ) && is_array( $attributes['cardPadding'] )
			? $attributes['cardPadding']
			: array();

		$sides = array(
			'top'    => '--nextora-box-icon-card-padding-top',
			'right'  => '--nextora-box-icon-card-padding-right',
			'bottom' => '--nextora-box-icon-card-padding-bottom',
			'left'   => '--nextora-box-icon-card-padding-left',
		);

		foreach ( $sides as $side => $var_name ) {
			if ( ! isset( $padding[ $side ] ) || ! is_scalar( $padding[ $side ] ) ) {
				continue;
			}

			$san = nextora_box_icon_sanitize_css_length( (string) $padding[ $side ] );
			if ( '' !== $san ) {
				$vars[ $var_name ] = $san;
			}
		}

		$top    = $vars['--nextora-box-icon-card-padding-top'] ?? '';
		$right  = $vars['--nextora-box-icon-card-padding-right'] ?? $top;
		$bottom = $vars['--nextora-box-icon-card-padding-bottom'] ?? $top;
		$left   = $vars['--nextora-box-icon-card-padding-left'] ?? $right;

		if ( '' !== $top || '' !== $right || '' !== $bottom || '' !== $left ) {
			$vars['--nextora-box-icon-card-padding'] = sprintf(
				'%1$s %2$s %3$s %4$s',
				'' !== $top ? $top : '0',
				'' !== $right ? $right : ( '' !== $top ? $top : '0' ),
				'' !== $bottom ? $bottom : ( '' !== $top ? $top : '0' ),
				'' !== $left ? $left : ( '' !== $right ? $right : ( '' !== $top ? $top : '0' ) ),
			);
		}

		return $vars;
	}
}

if ( ! function_exists( 'nextora_box_icon_normalize_item' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw item from attributes.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_box_icon_normalize_item( array $raw ): array {
		return array(
			'id'                         => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'number'                     => isset( $raw['number'] ) ? (string) $raw['number'] : '',
			'title'                      => isset( $raw['title'] ) ? trim( (string) $raw['title'] ) : '',
			'description'                => isset( $raw['description'] ) ? trim( (string) $raw['description'] ) : '',
			'showLink'                   => ! isset( $raw['showLink'] ) || (bool) $raw['showLink'],
			'linkLabel'                  => isset( $raw['linkLabel'] ) ? trim( (string) $raw['linkLabel'] ) : '',
			'linkUrl'                    => isset( $raw['linkUrl'] ) ? trim( (string) $raw['linkUrl'] ) : '',
			'linkTarget'                 => isset( $raw['linkTarget'] ) && '_blank' === (string) $raw['linkTarget'] ? '_blank' : '_self',
			'iconSource'                 => isset( $raw['iconSource'] ) && 'upload' === (string) $raw['iconSource'] ? 'upload' : 'theme',
			'iconName'                   => isset( $raw['iconName'] ) && '' !== trim( (string) $raw['iconName'] ) ? sanitize_key( (string) $raw['iconName'] ) : 'star',
			'uploadedIconId'             => isset( $raw['uploadedIconId'] ) ? (int) $raw['uploadedIconId'] : 0,
			'uploadedIconUrl'            => isset( $raw['uploadedIconUrl'] ) ? trim( (string) $raw['uploadedIconUrl'] ) : '',
			'iconColor'                  => isset( $raw['iconColor'] ) ? (string) $raw['iconColor'] : '',
			'iconSurfaceBackgroundColor' => isset( $raw['iconSurfaceBackgroundColor'] ) ? (string) $raw['iconSurfaceBackgroundColor'] : '',
			'highlightAccentColor'       => isset( $raw['highlightAccentColor'] ) ? (string) $raw['highlightAccentColor'] : '',
		);
	}
}

if ( ! function_exists( 'nextora_box_icon_render_icon' ) ) {
	/**
	 * @param array<string, mixed> $item            Normalized item.
	 * @param array<string, mixed> $global_defaults Global icon defaults from block attrs.
	 */
	function nextora_box_icon_render_icon( array $item, array $global_defaults ): string {
		$icon_source = '' !== (string) $item['iconSource'] ? (string) $item['iconSource'] : (string) $global_defaults['iconSource'];
		$icon_size   = (int) $global_defaults['iconSize'];
		$stroke_w    = (float) $global_defaults['strokeWidth'];
		$circle_size = (int) $global_defaults['iconCircleSize'];
		$circle_rad  = (int) $global_defaults['iconCircleRadius'];
		$icon_style  = isset( $global_defaults['iconStyle'] ) ? (string) $global_defaults['iconStyle'] : 'stacked';

		$allowed_styles = array( 'default', 'stacked', 'framed' );
		if ( ! in_array( $icon_style, $allowed_styles, true ) ) {
			$icon_style = 'stacked';
		}

		$has_surface = in_array( $icon_style, array( 'stacked', 'framed' ), true );

		$icon_color = nextora_box_icon_resolve_color(
			'' !== (string) $item['iconColor'] ? (string) $item['iconColor'] : (string) $global_defaults['iconColor'],
		);
		$surface_bg = nextora_box_icon_resolve_color(
			'' !== (string) $item['iconSurfaceBackgroundColor']
				? (string) $item['iconSurfaceBackgroundColor']
				: (string) $global_defaults['iconSurfaceBackgroundColor'],
		);
		$surface_border = nextora_box_icon_resolve_color( (string) $global_defaults['iconSurfaceBorderColor'] );

		$style_parts = array();
		if ( $circle_size > 0 ) {
			$style_parts[] = '--nextora-box-icon-icon-circle-size:' . $circle_size . 'px';
		}
		if ( $icon_size > 0 ) {
			$style_parts[] = '--nextora-box-icon-icon-size:' . $icon_size . 'px';
		}
		if ( '' !== $icon_color && 'currentColor' !== $icon_color ) {
			$style_parts[] = '--nextora-box-icon-icon-color:' . $icon_color;
		}
		if ( $has_surface && '' !== $surface_bg && 'currentColor' !== $surface_bg ) {
			$style_parts[] = '--nextora-box-icon-icon-surface-bg:' . $surface_bg;
		}
		if ( $has_surface && '' !== $surface_border && 'currentColor' !== $surface_border ) {
			$style_parts[] = '--nextora-box-icon-icon-surface-border:' . $surface_border;
		}
		if ( $has_surface && $circle_rad >= 0 ) {
			$style_parts[] = 'border-radius:' . max( 0, min( 50, $circle_rad ) ) . '%';
		}

		$inner = '';
		if ( 'upload' === $icon_source ) {
			$attachment_id = (int) $item['uploadedIconId'];
			if ( $attachment_id > 0 ) {
				$inner = wp_get_attachment_image(
					$attachment_id,
					'thumbnail',
					false,
					array(
						'class'   => 'nextora-box-icon__icon-img',
						'loading' => 'lazy',
						'decoding' => 'async',
						'alt'     => '',
					),
				);
			} elseif ( '' !== (string) $item['uploadedIconUrl'] ) {
				$url = esc_url( (string) $item['uploadedIconUrl'] );
				if ( '' !== $url ) {
					$inner = sprintf(
						'<img class="nextora-box-icon__icon-img" src="%1$s" alt="" loading="lazy" decoding="async" />',
						$url,
					);
				}
			}
		} elseif ( function_exists( 'nextora_get_lucide_svg' ) ) {
			$inner = nextora_get_lucide_svg(
				(string) $item['iconName'],
				$icon_size,
				'currentColor',
				$stroke_w,
				'',
			);
		}

		if ( '' === $inner ) {
			return '';
		}

		$icon_style_attr = implode( ';', $style_parts );

		return sprintf(
			'<div class="nextora-box-icon__icon nextora-box-icon__icon--style-%3$s" style="%1$s" aria-hidden="true">%2$s</div>',
			esc_attr( $icon_style_attr ),
			$inner, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped in helpers.
			esc_attr( $icon_style ),
		);
	}
}

if ( ! function_exists( 'nextora_box_icon_render_card' ) ) {
	/**
	 * @param array<string, mixed> $item            Normalized item.
	 * @param array<string, mixed> $global_defaults Global icon defaults.
	 * @param bool                 $as_slide        Wrap in swiper-slide.
	 * @param int                  $card_index      Zero-based card index (ghost label).
	 * @param string               $card_template   Card template slug.
	 */
	function nextora_box_icon_render_card(
		array $item,
		array $global_defaults,
		bool $as_slide = true,
		int $card_index = 0,
		string $card_template = 'default',
		bool $show_timeline_time = true,
	): string {
	$title = (string) $item['title'];
	$number = isset( $item['number'] ) ? (string) $item['number'] : '';
	if ( '' === trim( wp_strip_all_tags( $title ) ) && '' === trim( wp_strip_all_tags( $number ) ) ) {
			return '';
		}

		$description = (string) $item['description'];
		$show_link   = ! empty( $item['showLink'] );
		$link_label  = (string) $item['linkLabel'];
		$link_url    = (string) $item['linkUrl'];
		$link_target = (string) $item['linkTarget'];

		$icon_html = nextora_box_icon_render_icon( $item, $global_defaults );

	$highlight_accent = '';
	$highlight_accent_style = '';
	if ( 'highlights' === $card_template ) {
		$highlight_accent = isset( $item['highlightAccentColor'] ) ? (string) $item['highlightAccentColor'] : '';
		$resolved = nextora_box_icon_resolve_color( $highlight_accent );
		if ( '' !== $resolved && 'currentColor' !== $resolved ) {
			$highlight_accent_style = '--__hl-accent:' . $resolved . ';';
		}
	}

	$out  = $as_slide ? '<div class="swiper-slide">' : '';

	$is_minimal_link = 'minimal' === $card_template && $show_link && '' !== $link_url;

	if ( $is_minimal_link ) {
		$out .= sprintf(
			'<a class="nextora-box-icon__card nextora-box-icon__card-link" href="%1$s"%2$s>',
			esc_url( $link_url ),
			'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
		);
	} elseif ( '' !== $highlight_accent_style ) {
		$out .= '<article class="nextora-box-icon__card" style="' . esc_attr( $highlight_accent_style ) . '">';
	} else {
		$out .= '<article class="nextora-box-icon__card">';
	}

	if ( 'highlights' === $card_template ) {
		if ( '' !== $icon_html ) {
			$out .= $icon_html;
		}
		$stat_number  = '' !== $number ? $number : $title;
		$stat_label   = '' !== $number ? $title : $description;
		$stat_subtitle = '' !== $number ? $description : $link_label;
		$out .= '<b class="nextora-box-icon__stat-number">' . esc_html( $stat_number ) . '</b>';
		if ( '' !== trim( wp_strip_all_tags( $stat_label ) ) ) {
			$out .= '<span class="nextora-box-icon__stat-label">' . esc_html( $stat_label ) . '</span>';
		}
		if ( '' !== trim( wp_strip_all_tags( $stat_subtitle ) ) ) {
			$out .= '<small class="nextora-box-icon__stat-subtitle">' . esc_html( $stat_subtitle ) . '</small>';
		}
		$out .= '</article>';
		$out .= $as_slide ? '</div>' : '';
		return $out;
	}

	if ( 'timeline' === $card_template ) {
		if ( '' !== $icon_html ) {
			$out .= $icon_html;
		}
		if ( $show_timeline_time ) {
			$out .= '<time class="nextora-box-icon__timeline-time">' . esc_html( $number ) . '</time>';
		}
		$out .= '<h3 class="nextora-box-icon__title">' . esc_html( $title ) . '</h3>';
		if ( '' !== trim( wp_strip_all_tags( $description ) ) ) {
			$out .= '<p class="nextora-box-icon__description">' . esc_html( $description ) . '</p>';
		}
		$out .= '</article>';
		$out .= $as_slide ? '</div>' : '';
		return $out;
	}

	if ( 'ways' === $card_template ) {
			$ghost = str_pad( (string) ( $card_index + 1 ), 2, '0', STR_PAD_LEFT );
			$out  .= sprintf(
				'<h5 class="nextora-box-icon__card-ghost" aria-hidden="true">%s</h5>',
				esc_html( $ghost ),
			);
		}

		if ( '' !== $icon_html ) {
			$out .= $icon_html;
		}

		if ( 'minimal' === $card_template ) {
			$out .= '<div class="nextora-box-icon__card-body">';
		}

		$out .= '<h3 class="nextora-box-icon__title">' . esc_html( $title ) . '</h3>';

		if ( '' !== trim( wp_strip_all_tags( $description ) ) ) {
			$out .= '<p class="nextora-box-icon__description">' . esc_html( $description ) . '</p>';
		}

		if ( 'minimal' === $card_template ) {
			$out .= '</div>';
		}

		if ( 'minimal' === $card_template && $show_link && '' !== $link_url ) {
			$out .= '</a>';
		} else {
			$out .= '</article>';
		}
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
		$normalized = nextora_box_icon_normalize_item( $raw_item );
		if ( '' !== trim( (string) $normalized['title'] ) ) {
			$items[] = $normalized;
		}
	}
}

if ( array() === $items ) {
	return;
}

$items = array_values( (array) apply_filters( 'nextora_box_icon_items', $items, $attributes ) );

$layout_mode = isset( $attributes['layoutMode'] ) ? (string) $attributes['layoutMode'] : 'slider';
if ( ! in_array( $layout_mode, array( 'slider', 'grid' ), true ) ) {
	$layout_mode = 'slider';
}

$card_template = isset( $attributes['cardTemplate'] ) ? (string) $attributes['cardTemplate'] : 'default';
$allowed_card_templates = array( 'default', 'ways', 'minimal', 'highlights', 'timeline' );
if ( ! in_array( $card_template, $allowed_card_templates, true ) ) {
	$card_template = 'default';
}

$content_max = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '';
$grid_cols   = isset( $attributes['gridColumns'] ) ? max( 1, min( 6, (int) $attributes['gridColumns'] ) ) : 4;
$grid_cols_tablet  = isset( $attributes['gridColumnsTablet'] ) ? max( 1, min( 4, (int) $attributes['gridColumnsTablet'] ) ) : 2;
$grid_cols_mobile  = isset( $attributes['gridColumnsMobile'] ) ? max( 1, min( 2, (int) $attributes['gridColumnsMobile'] ) ) : 1;
$grid_min    = isset( $attributes['gridMinWidth'] ) ? max( 480, min( 1200, (int) $attributes['gridMinWidth'] ) ) : 981;
$grid_no_carousel = ! empty( $attributes['disableResponsiveCarousel'] );
$card_min_h  = isset( $attributes['cardMinHeight'] ) ? max( 160, min( 400, (int) $attributes['cardMinHeight'] ) ) : 240;
$card_border = isset( $attributes['cardBorderWidth'] ) ? max( 0, min( 4, (int) $attributes['cardBorderWidth'] ) ) : 2;
$card_radius = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 24, (int) $attributes['cardBorderRadius'] ) ) : 8;

$icon_style_attr = isset( $attributes['iconStyle'] ) ? (string) $attributes['iconStyle'] : 'stacked';
$allowed_icon_styles = array( 'default', 'stacked', 'framed' );
if ( ! in_array( $icon_style_attr, $allowed_icon_styles, true ) ) {
	$icon_style_attr = 'stacked';
}

$icon_defaults = array(
	'iconSource'                 => isset( $attributes['iconSource'] ) && 'upload' === (string) $attributes['iconSource'] ? 'upload' : 'theme',
	'iconSize'                   => isset( $attributes['iconSize'] ) ? max( 12, min( 48, (int) $attributes['iconSize'] ) ) : 25,
	'strokeWidth'                => isset( $attributes['strokeWidth'] ) ? max( 1, min( 4, (float) $attributes['strokeWidth'] ) ) : 2.0,
	'iconCircleSize'             => isset( $attributes['iconCircleSize'] ) ? max( 32, min( 80, (int) $attributes['iconCircleSize'] ) ) : 54,
	'iconCircleRadius'           => isset( $attributes['iconCircleRadius'] ) ? max( 0, min( 50, (int) $attributes['iconCircleRadius'] ) ) : 50,
	'iconStyle'                  => $icon_style_attr,
	'iconColor'                  => isset( $attributes['iconColor'] ) ? (string) $attributes['iconColor'] : '',
	'iconSurfaceBackgroundColor' => isset( $attributes['iconSurfaceBackgroundColor'] ) ? (string) $attributes['iconSurfaceBackgroundColor'] : '',
	'iconSurfaceBorderColor'     => isset( $attributes['iconSurfaceBorderColor'] ) ? (string) $attributes['iconSurfaceBorderColor'] : '',
);

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
$scroll_style  = isset( $attributes['scrollAnimationStyle'] ) ? (string) $attributes['scrollAnimationStyle'] : 'default';
if ( ! in_array( $scroll_style, array( 'default', 'sequential' ), true ) ) {
	$scroll_style = 'default';
}
$show_timeline_line = ! isset( $attributes['showTimelineLine'] ) || (bool) $attributes['showTimelineLine'];
$show_timeline_time = ! isset( $attributes['showTimelineTime'] ) || (bool) $attributes['showTimelineTime'];
$timeline_align     = isset( $attributes['timelineAlign'] ) && in_array( (string) $attributes['timelineAlign'], array( 'left', 'center', 'right' ), true ) ? (string) $attributes['timelineAlign'] : 'left';
$enable_hover  = ! isset( $attributes['enableCardHover'] ) || (bool) $attributes['enableCardHover'];

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

$swiper_opts = (array) apply_filters( 'nextora_box_icon_swiper_options', $swiper_opts, $attributes, $items );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

	$color_keys = array(
		'eyebrowColor'                 => '--nextora-box-icon-eyebrow-color',
		'headingColor'                 => '--nextora-box-icon-heading-color',
		'descriptionColor'             => '--nextora-box-icon-description-color',
		'cardBorderColor'              => '--nextora-box-icon-card-border-color',
		'cardBackgroundColor'          => '--nextora-box-icon-card-bg',
		'cardHoverBackgroundColor'     => '--nextora-box-icon-card-hover-bg',
		'cardTitleColor'               => '--nextora-box-icon-card-title-color',
		'cardDescriptionColor'         => '--nextora-box-icon-card-desc-color',
		'descriptionHoverColor'        => '--nextora-box-icon-card-desc-hover-color',
		'linkColor'                    => '--nextora-box-icon-link-color',
		'linkHoverColor'               => '--nextora-box-icon-link-hover-color',
		'waysAccentColor1'             => '--nextora-box-icon-ways-accent-1',
		'waysAccentColor2'             => '--nextora-box-icon-ways-accent-2',
		'waysAccentColor3'             => '--nextora-box-icon-ways-accent-3',
		'highlightAccentColor1'        => '--nextora-box-icon-highlight-accent-1',
		'highlightAccentColor2'        => '--nextora-box-icon-highlight-accent-2',
		'highlightAccentColor3'        => '--nextora-box-icon-highlight-accent-3',
		'highlightAccentColor4'        => '--nextora-box-icon-highlight-accent-4',
		'protocolTimelineColor'        => '--nextora-box-icon-timeline-line-color',
		'paginationColor'              => '--nextora-box-icon-dot-color',
		'paginationActiveColor'        => '--nextora-box-icon-dot-active',
		'arrowColor'                   => '--nextora-box-icon-arrow-color',
		'iconColor'                    => '--nextora-box-icon-icon-color',
		'iconSurfaceBackgroundColor'   => '--nextora-box-icon-icon-surface-bg',
		'iconSurfaceBorderColor'       => '--nextora-box-icon-icon-surface-border',
		'iconHoverColor'               => '--nextora-box-icon-icon-hover-color',
		'iconHoverSurfaceBackgroundColor' => '--nextora-box-icon-icon-hover-surface-bg',
	);

$css_vars = array(
	'--nextora-box-icon-cols'              => (string) $grid_cols,
	'--nextora-box-icon-card-min-height'   => $card_min_h . 'px',
	'--nextora-box-icon-card-border-width' => $card_border . 'px',
	'--nextora-box-icon-card-radius'       => $card_radius . 'px',
	'--nextora-box-icon-icon-circle-size'  => (string) $icon_defaults['iconCircleSize'] . 'px',
	'--nextora-box-icon-icon-size'         => (string) $icon_defaults['iconSize'] . 'px',
);

if ( '' !== $content_max ) {
	$css_vars['--nextora-box-icon-max-width'] = $content_max;
}

$legacy_gap = isset( $attributes['columnGap'] ) ? trim( (string) $attributes['columnGap'] ) : '';
$css_vars['--nextora-box-icon-gap'] = '' !== $legacy_gap ? $legacy_gap : $space . 'px';

$css_vars = array_merge( $css_vars, nextora_box_icon_card_padding_css_vars( $attributes ) );

$heading_font_family = isset( $attributes['headingFontFamily'] )
	? nextora_box_icon_resolve_font_family( (string) $attributes['headingFontFamily'] )
	: '';
if ( '' !== $heading_font_family ) {
	$css_vars['--nextora-box-icon-heading-font-family'] = $heading_font_family;
}

foreach ( $color_keys as $attr_key => $var_name ) {
	$raw = isset( $attributes[ $attr_key ] ) ? (string) $attributes[ $attr_key ] : '';
	if ( 'currentColor' === $raw ) {
		continue;
	}
	$resolved = nextora_box_icon_resolve_color( $raw );
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
	'nextora-box-icon',
	'nextora-box-icon--loading',
	'nextora-box-icon--layout-' . sanitize_html_class( $layout_mode ),
	'nextora-box-icon--template-' . sanitize_html_class( $card_template ),
);
if ( $enable_scroll ) {
	$wrapper_classes[] = 'nextora-box-icon--reveal-pending';
}
if ( '' !== $heading_font_family ) {
	$wrapper_classes[] = 'nextora-box-icon--has-heading-font';
}
if ( ! $enable_hover ) {
	$wrapper_classes[] = 'nextora-box-icon--no-card-hover';
}

$wrapper_classes = (array) apply_filters(
	'nextora_box_icon_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $inline_style,
);
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
	$wrapper_extra['data-nextora-scroll-reveal-style'] = $scroll_style;
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_box_icon_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

nextora_box_icon_enqueue_view_script();

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-box-icon__inner">
		<?php if ( 'timeline' === $card_template ) : ?>
			<div class="nextora-box-icon__timeline-grid<?php echo ! $show_timeline_line ? ' nextora-box-icon__timeline-grid--no-line' : ''; ?><?php echo 'left' !== $timeline_align ? ' nextora-box-icon--timeline-align-' . esc_attr( $timeline_align ) : ''; ?>">
				<?php
				foreach ( $items as $index => $item ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
					echo nextora_box_icon_render_card(
						$item,
						$icon_defaults,
						false,
						(int) $index,
						$card_template,
						$show_timeline_time,
					);
				}
				?>
			</div>
		<?php else : ?>
		<div
			class="nextora-box-icon__carousel-root"
			data-layout-mode="<?php echo esc_attr( $layout_mode ); ?>"
			data-grid-min-width="<?php echo esc_attr( (string) $grid_min ); ?>"
			data-grid-columns="<?php echo esc_attr( (string) $grid_cols ); ?>"
			data-grid-columns-tablet="<?php echo esc_attr( (string) $grid_cols_tablet ); ?>"
			data-grid-columns-mobile="<?php echo esc_attr( (string) $grid_cols_mobile ); ?>"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
			<?php if ( $grid_no_carousel ) : ?>
			data-disable-responsive-carousel="1"
			<?php endif; ?>
		>
			<div class="swiper nextora-box-icon__swiper">
				<div class="swiper-wrapper">
					<?php
					foreach ( $items as $index => $item ) {
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
						echo nextora_box_icon_render_card(
							$item,
							$icon_defaults,
							true,
							(int) $index,
							$card_template,
						);
					}
					?>
				</div>
			</div>
			<?php if ( $show_arrows && $slide_count > 1 ) : ?>
				<button type="button" class="nextora-box-icon__arrow nextora-box-icon__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
				</button>
				<button type="button" class="nextora-box-icon__arrow nextora-box-icon__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
				</button>
			<?php endif; ?>
			<?php if ( $show_pag && $slide_count > 1 ) : ?>
				<div class="swiper-pagination nextora-box-icon__pagination"></div>
			<?php endif; ?>
		</div>
		<?php endif; ?>
	</div>
</div>
