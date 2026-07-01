<?php

/**
 * Events — upcoming events list (Haven / .events-list design).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_event_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued for scroll reveal.
	 */
	function nextora_event_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/event' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/event/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/event/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-event-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-event-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-event-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_event_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_event_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $preset_m ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $preset_m[1] ) ) . ')';
		}

		$hex = sanitize_hex_color( $raw );
		if ( is_string( $hex ) && '' !== $hex ) {
			return $hex;
		}

		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_event_placeholder_image_url' ) ) {
	/**
	 * Landscape placeholder when an event has no image.
	 */
	function nextora_event_placeholder_image_url(): string {
		$url = get_theme_file_uri( 'assets/images/placeholder/general-img-landscape.png' );

		/** @var string $url */
		$url = apply_filters( 'nextora_event_placeholder_image_url', $url );

		return $url;
	}
}

if ( ! function_exists( 'nextora_event_detail_icon' ) ) {
	/**
	 * Lucide-style detail icons (map-pin, clock, ticket).
	 */
	function nextora_event_detail_icon( string $type ): string {
		$svg = '';
		if ( 'map-pin' === $type ) {
			$svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C10.539 20.193 5 14.993 5 10a7 7 0 1 1 14 0"/><circle cx="12" cy="10" r="3"/></svg>';
		} elseif ( 'clock' === $type ) {
			$svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
		} else {
			$svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-icon lucide-ticket"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>';
		}

		return '<span class="nextora-event__detail-icon">' . $svg . '</span>';
	}
}

if ( ! function_exists( 'nextora_event_register_arrow_icon' ) ) {
	/**
	 * Decorative arrow for register links.
	 */
	function nextora_event_register_arrow_icon(): string {
		return '<span class="nextora-event__register-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
	}
}

if ( ! function_exists( 'nextora_event_render_image_html' ) ) {
	/**
	 * Event thumbnail markup.
	 */
	function nextora_event_render_image_html(
		int $image_id,
		string $image_url,
		string $image_alt,
		string $title,
		string $placeholder_url,
	): string {
		if ( $image_id > 0 ) {
			$src = wp_get_attachment_image_src( $image_id, 'medium' );
			if ( is_array( $src ) && ! empty( $src[0] ) ) {
				$alt = $image_alt;
				if ( '' === $alt ) {
					$meta_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
					$alt      = is_string( $meta_alt ) && '' !== $meta_alt ? $meta_alt : $title;
				}
				$img = wp_get_attachment_image(
					$image_id,
					'medium',
					false,
					array(
						'class'    => 'nextora-event__thumb-img',
						'alt'      => esc_attr( $alt ),
						'loading'  => 'lazy',
						'decoding' => 'async',
					),
				);
				if ( is_string( $img ) && '' !== $img ) {
					return '<div class="nextora-event__thumb">' . $img . '</div>';
				}
			}
		}

		if ( '' !== trim( $image_url ) ) {
			$alt = '' !== $image_alt ? $image_alt : $title;
			return sprintf(
				'<div class="nextora-event__thumb"><img src="%1$s" alt="%2$s" class="nextora-event__thumb-img" loading="lazy" decoding="async" /></div>',
				esc_url( $image_url ),
				esc_attr( $alt ),
			);
		}

		return sprintf(
			'<div class="nextora-event__thumb"><img src="%1$s" alt="" class="nextora-event__thumb-img nextora-event__thumb-img--placeholder" loading="lazy" decoding="async" aria-hidden="true" /></div>',
			esc_url( $placeholder_url ),
		);
	}
}

nextora_event_enqueue_view_script();

$raw_events = isset( $attributes['events'] ) && is_array( $attributes['events'] ) ? $attributes['events'] : array();
$events     = array();

foreach ( $raw_events as $index => $item ) {
	if ( ! is_array( $item ) ) {
		continue;
	}

	$events[] = array(
		'id'            => isset( $item['id'] ) ? (string) $item['id'] : (string) ( $index + 1 ),
		'day'           => isset( $item['day'] ) ? (string) $item['day'] : '',
		'month'         => isset( $item['month'] ) ? (string) $item['month'] : '',
		'title'         => isset( $item['title'] ) ? (string) $item['title'] : '',
		'location'      => isset( $item['location'] ) ? (string) $item['location'] : '',
		'time'          => isset( $item['time'] ) ? (string) $item['time'] : '',
		'price'         => isset( $item['price'] ) ? (string) $item['price'] : '',
		'imageId'       => isset( $item['imageId'] ) ? (int) $item['imageId'] : 0,
		'imageUrl'      => isset( $item['imageUrl'] ) ? (string) $item['imageUrl'] : '',
		'imageAlt'      => isset( $item['imageAlt'] ) ? (string) $item['imageAlt'] : '',
		'linkUrl'       => isset( $item['linkUrl'] ) ? (string) $item['linkUrl'] : '',
		'linkTarget'    => isset( $item['linkTarget'] ) ? (string) $item['linkTarget'] : '_self',
		'registerLabel' => isset( $item['registerLabel'] ) ? (string) $item['registerLabel'] : '',
	);
}

if ( array() === $events ) {
	$events = array(
		array(
			'id'            => '1',
			'day'           => '14',
			'month'         => 'Jul',
			'title'         => __( 'Run for the Children — Charity 10K', 'nextora' ),
			'location'      => __( 'Riverside Park', 'nextora' ),
			'time'          => '7:00 AM',
			'price'         => __( 'From $25', 'nextora' ),
			'imageId'       => 0,
			'imageUrl'      => '',
			'imageAlt'      => '',
			'linkUrl'       => '',
			'linkTarget'    => '_self',
			'registerLabel' => __( 'Register', 'nextora' ),
		),
	);
}

$show_register     = ! isset( $attributes['showRegisterButton'] ) || (bool) $attributes['showRegisterButton'];
$default_register  = isset( $attributes['registerButtonText'] ) ? (string) $attributes['registerButtonText'] : __( 'Register', 'nextora' );
$enable_scroll     = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$color_keys = array(
	'cardBackgroundColor'          => '--nextora-event-card-bg',
	'cardBorderColor'              => '--nextora-event-card-border-color',
	'dateBackgroundColor'          => '--nextora-event-date-bg',
	'dateDayColor'                 => '--nextora-event-date-day-color',
	'dateAccentColor'              => '--nextora-event-date-month-color',
	'titleColor'                   => '--nextora-event-title-color',
	'metaColor'                    => '--nextora-event-meta-color',
	'metaIconColor'                => '--nextora-event-meta-icon-color',
	'registerTextColor'            => '--nextora-event-register-text-color',
	'registerBorderColor'          => '--nextora-event-register-border-color',
	'registerHoverTextColor'       => '--nextora-event-register-hover-text-color',
	'registerHoverBackgroundColor' => '--nextora-event-register-hover-bg',
);

$css_vars = array();
foreach ( $color_keys as $attr_key => $var_name ) {
	$raw      = isset( $attributes[ $attr_key ] ) ? (string) $attributes[ $attr_key ] : '';
	$resolved = nextora_event_resolve_color( $raw );
	if ( '' !== $resolved ) {
		$css_vars[ $var_name ] = $resolved;
	}
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array( 'nextora-event' );
if ( $enable_scroll ) {
	$wrapper_classes[] = 'nextora-event--reveal-pending';
}

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
);
if ( '' !== $inline_style ) {
	$wrapper_extra['style'] = $inline_style;
}
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );

$placeholder_url = nextora_event_placeholder_image_url();
$items_html      = '';

foreach ( $events as $event ) {
	$title = trim( $event['title'] );
	if ( '' === $title ) {
		continue;
	}

	$image_html = nextora_event_render_image_html(
		$event['imageId'],
		$event['imageUrl'],
		$event['imageAlt'],
		$title,
		$placeholder_url,
	);

	$day   = trim( $event['day'] );
	$month = trim( $event['month'] );

	$details = array();
	if ( '' !== trim( $event['location'] ) ) {
		$details[] = sprintf(
			'<span class="nextora-event__detail">%1$s%2$s</span>',
			nextora_event_detail_icon( 'map-pin' ),
			esc_html( $event['location'] ),
		);
	}
	if ( '' !== trim( $event['time'] ) ) {
		$details[] = sprintf(
			'<span class="nextora-event__detail">%1$s%2$s</span>',
			nextora_event_detail_icon( 'clock' ),
			esc_html( $event['time'] ),
		);
	}
	if ( '' !== trim( $event['price'] ) ) {
		$details[] = sprintf(
			'<span class="nextora-event__detail">%1$s%2$s</span>',
			nextora_event_detail_icon( 'ticket' ),
			esc_html( $event['price'] ),
		);
	}

	$details_html = array() !== $details
		? '<div class="nextora-event__details">' . implode( '', $details ) . '</div>'
		: '';

	$register_html = '';
	if ( $show_register ) {
		$label = trim( $event['registerLabel'] );
		if ( '' === $label ) {
			$label = $default_register;
		}
		$link_url    = trim( $event['linkUrl'] );
		$link_target = '_blank' === $event['linkTarget'] ? '_blank' : '_self';
		$rel         = '_blank' === $link_target ? 'noopener noreferrer' : '';

		if ( '' !== $link_url ) {
			$register_html = sprintf(
				'<a href="%1$s" class="nextora-event__register" target="%2$s"%3$s>%4$s%5$s</a>',
				esc_url( $link_url ),
				esc_attr( $link_target ),
				'' !== $rel ? ' rel="' . esc_attr( $rel ) . '"' : '',
				esc_html( $label ),
				nextora_event_register_arrow_icon(),
			);
		} else {
			$register_html = sprintf(
				'<span class="nextora-event__register nextora-event__register--static">%1$s%2$s</span>',
				esc_html( $label ),
				nextora_event_register_arrow_icon(),
			);
		}
	}

	$items_html .= sprintf(
		'<li class="nextora-event__item-wrap"><article class="nextora-event__item">%1$s%2$s<div class="nextora-event__info"><h3 class="nextora-event__title">%3$s</h3>%4$s</div>%5$s</article></li>',
		'' !== $day || '' !== $month
			? sprintf(
				'<div class="nextora-event__date"><b class="nextora-event__date-day">%1$s</b><span class="nextora-event__date-month">%2$s</span></div>',
				esc_html( $day ),
				esc_html( $month ),
			)
			: '',
		$image_html,
		esc_html( $title ),
		$details_html,
		$register_html,
	);
}

$list_html = '' !== $items_html
	? '<ul class="nextora-event__list">' . $items_html . '</ul>'
	: '';

if ( '' === $list_html ) {
	return;
}

echo sprintf(
	'<div %1$s><div class="nextora-event__inner">%2$s</div></div>',
	$wrapper_attributes,
	$list_html,
); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
