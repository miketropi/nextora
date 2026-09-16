<?php

/**
 * Event - The Events Calendar block renderer.
 *
 * Dynamically queries events from The Events Calendar plugin (`tribe_events`)
 * and renders them in the exact same templates (default, template1, template2, template3)
 * as nextora/event.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_event_tec_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued for scroll reveal / Swiper.
	 */
	function nextora_event_tec_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/event-the-events-calendar' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/event-the-events-calendar/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/event-the-events-calendar/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-event-tec-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-event-tec-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-event-tec-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_event_tec_resolve_color' ) ) {
	/**
	 * Preset slug, var(), rgb(), hsl(), or hex → CSS color value.
	 */
	function nextora_event_tec_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		if ( 'transparent' === $raw ) {
			return 'transparent';
		}

		if ( str_starts_with( $raw, 'var(' ) || str_starts_with( $raw, 'rgb' ) || str_starts_with( $raw, 'hsl' ) ) {
			return $raw;
		}

		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $preset_m ) ) {
			$slug = sanitize_html_class( strtolower( $preset_m[1] ) );
			if ( 'transparent' === $slug ) {
				return 'transparent';
			}
			return 'var(--wp--preset--color--' . $slug . ')';
		}

		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}

		$hex = sanitize_hex_color( $raw );
		if ( is_string( $hex ) && '' !== $hex ) {
			return $hex;
		}

		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			$slug = sanitize_html_class( strtolower( $raw ) );
			if ( 'transparent' === $slug ) {
				return 'transparent';
			}
			return 'var(--wp--preset--color--' . $slug . ')';
		}

		return $raw;
	}
}

if ( ! function_exists( 'nextora_event_tec_get_color_props' ) ) {
	/**
	 * Resolves a stored color attribute into standard Gutenberg classes and inline style.
	 *
	 * @param string $color Attribute value (slug, preset string, or hex/rgb).
	 * @param string $type  'color' (for text), 'background', or 'border'.
	 *
	 * @return array{class: string, style: string, slug: string, value: string}
	 */
	function nextora_event_tec_get_color_props( string $color, string $type = 'color' ): array {
		$color = trim( $color );
		if ( '' === $color ) {
			return array( 'class' => '', 'style' => '', 'slug' => '', 'value' => '' );
		}

		// Direct transparent keyword or 0-alpha rgba/hex
		if (
			'transparent' === $color ||
			'rgba(0, 0, 0, 0)' === $color ||
			'rgba(0,0,0,0)' === $color ||
			preg_match( '/^#[0-9a-f]{6}00$/i', $color ) ||
			preg_match( '/^#[0-9a-f]{3}0$/i', $color )
		) {
			if ( 'border' === $type ) {
				return array(
					'class' => '',
					'style' => 'border-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-transparent-background-color',
					'style' => 'background-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			return array(
				'class' => 'has-text-color has-transparent-color',
				'style' => 'color:transparent;',
				'slug'  => 'transparent',
				'value' => 'transparent',
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
			if ( 'border' === $type ) {
				return array(
					'class' => '',
					'style' => 'border-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-transparent-background-color',
					'style' => 'background-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			return array(
				'class' => 'has-text-color has-transparent-color',
				'style' => 'color:transparent;',
				'slug'  => 'transparent',
				'value' => 'transparent',
			);
		}

		if ( 'border' === $type ) {
			$val = '' !== $slug ? 'var(--wp--preset--color--' . $slug . ')' : $color;
			return array(
				'class' => '',
				'style' => 'border-color:' . esc_attr( $val ) . ';',
				'slug'  => $slug,
				'value' => $val,
			);
		}

		if ( '' !== $slug ) {
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-' . $slug . '-background-color',
					'style' => '',
					'slug'  => $slug,
					'value' => 'var(--wp--preset--color--' . $slug . ')',
				);
			}
			return array(
				'class' => 'has-text-color has-' . $slug . '-color',
				'style' => '',
				'slug'  => $slug,
				'value' => 'var(--wp--preset--color--' . $slug . ')',
			);
		}

		// Custom hex / rgb / hsl
		if ( 'background' === $type ) {
			return array(
				'class' => 'has-background',
				'style' => 'background-color:' . esc_attr( $color ) . ';',
				'slug'  => '',
				'value' => $color,
			);
		}
		return array(
			'class' => 'has-text-color',
			'style' => 'color:' . esc_attr( $color ) . ';',
			'slug'  => '',
			'value' => $color,
		);
	}
}

if ( ! function_exists( 'nextora_event_tec_placeholder_image_url' ) ) {
	/**
	 * Landscape placeholder when an event has no image.
	 */
	function nextora_event_tec_placeholder_image_url(): string {
		$url = get_theme_file_uri( 'assets/images/placeholder/general-img-landscape.png' );
		/** @var string $url */
		$url = apply_filters( 'nextora_event_placeholder_image_url', $url );
		return $url;
	}
}

$lucide_path = dirname( __DIR__ ) . '/advanced-icon/lucide.php';
if ( file_exists( $lucide_path ) ) {
	require_once $lucide_path;
}

if ( ! function_exists( 'nextora_event_tec_detail_icon' ) ) {
	/**
	 * Lucide-style detail icons (map-pin, clock, ticket).
	 *
	 * @param string                $type       Icon type.
	 * @param array<string, string> $icon_props Optional color classes and styles.
	 */
	function nextora_event_tec_detail_icon( string $type, array $icon_props = array() ): string {
		$svg = '';
		if ( function_exists( 'nextora_get_lucide_svg' ) ) {
			$svg = nextora_get_lucide_svg( $type, 24, 'currentColor', 2 );
		}

		if ( '' === $svg ) {
			if ( 'map-pin' === $type ) {
				$svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true" focusable="false"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>';
			} elseif ( 'clock' === $type ) {
				$svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
			} else {
				$svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket" aria-hidden="true" focusable="false"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>';
			}
		}

		$icon_classes = array( 'nextora-event__detail-icon' );
		if ( ! empty( $icon_props['class'] ) ) {
			$icon_classes[] = $icon_props['class'];
		}
		$icon_style_attr = ! empty( $icon_props['style'] ) ? ' style="' . esc_attr( $icon_props['style'] ) . '"' : '';

		return sprintf( '<span class="%1$s"%2$s>%3$s</span>', esc_attr( implode( ' ', $icon_classes ) ), $icon_style_attr, $svg );
	}
}

if ( ! function_exists( 'nextora_event_tec_register_arrow_icon' ) ) {
	function nextora_event_tec_register_arrow_icon(): string {
		$svg = '';
		if ( function_exists( 'nextora_get_lucide_svg' ) ) {
			$svg = nextora_get_lucide_svg( 'arrow-right', 16, 'currentColor', 2 );
		}
		if ( '' === $svg ) {
			$svg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
		}
		return '<span class="nextora-event__register-icon" aria-hidden="true">' . $svg . '</span>';
	}
}

if ( ! function_exists( 'nextora_event_tec_calendar_icon' ) ) {
	function nextora_event_tec_calendar_icon(): string {
		$svg = '';
		if ( function_exists( 'nextora_get_lucide_svg' ) ) {
			$svg = nextora_get_lucide_svg( 'calendar-days', 16, 'currentColor', 2 );
		}
		if ( '' === $svg ) {
			$svg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days" aria-hidden="true" focusable="false"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>';
		}
		return '<span class="nextora-event__register-icon" aria-hidden="true">' . $svg . '</span>';
	}
}

if ( ! function_exists( 'nextora_event_tec_render_image_html' ) ) {
	function nextora_event_tec_render_image_html(
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
					return $img;
				}
			}
		}

		if ( '' !== trim( $image_url ) ) {
			$alt = '' !== $image_alt ? $image_alt : $title;
			return sprintf(
				'<img src="%1$s" alt="%2$s" class="nextora-event__thumb-img" loading="lazy" decoding="async" />',
				esc_url( $image_url ),
				esc_attr( $alt ),
			);
		}

		return sprintf(
			'<img src="%1$s" alt="" class="nextora-event__thumb-img nextora-event__thumb-img--placeholder" loading="lazy" decoding="async" aria-hidden="true" />',
			esc_url( $placeholder_url ),
		);
	}
}

nextora_event_tec_enqueue_view_script();

$template     = isset( $attributes['template'] ) ? (string) $attributes['template'] : 'default';
$is_template1 = 'template1' === $template;
$is_template2 = 'template2' === $template;
$is_template3 = 'template3' === $template;

// ── Query events from The Events Calendar ──
$posts_per_page = isset( $attributes['postsPerPage'] ) ? max( 1, min( 50, (int) $attributes['postsPerPage'] ) ) : 4;
$category       = isset( $attributes['category'] ) ? trim( (string) $attributes['category'] ) : '';
$timeframe      = isset( $attributes['timeframe'] ) ? (string) $attributes['timeframe'] : 'upcoming';
$order_by       = isset( $attributes['orderBy'] ) ? (string) $attributes['orderBy'] : 'event_date';
$order          = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'ASC';
$exclude_ids    = isset( $attributes['excludeIds'] ) ? trim( (string) $attributes['excludeIds'] ) : '';

$events = array();

if ( function_exists( 'tribe_get_events' ) ) {
	$query_args = array(
		'posts_per_page' => $posts_per_page,
		'post_status'    => 'publish',
	);

	if ( 'upcoming' === $timeframe ) {
		$query_args['eventDisplay'] = 'list';
	} elseif ( 'past' === $timeframe ) {
		$query_args['eventDisplay'] = 'past';
	} else {
		$query_args['eventDisplay'] = 'custom';
	}

	if ( '' !== $category ) {
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'tribe_events_cat',
				'field'    => is_numeric( $category ) ? 'term_id' : 'slug',
				'terms'    => is_numeric( $category ) ? (int) $category : $category,
			),
		);
	}

	if ( 'event_date' === $order_by ) {
		$query_args['orderby'] = 'event_date';
	} elseif ( 'rand' === $order_by ) {
		$query_args['orderby'] = 'rand';
	} elseif ( 'title' === $order_by ) {
		$query_args['orderby'] = 'title';
	} else {
		$query_args['orderby'] = 'date';
	}
	$query_args['order'] = 'DESC' === $order ? 'DESC' : 'ASC';

	if ( '' !== $exclude_ids ) {
		$excluded = array_filter( array_map( 'absint', explode( ',', $exclude_ids ) ) );
		if ( ! empty( $excluded ) ) {
			$query_args['post__not_in'] = $excluded;
		}
	}

	$queried_posts = tribe_get_events( $query_args );
} else {
	// Fallback standard WP query for tribe_events
	$query_args = array(
		'post_type'      => 'tribe_events',
		'posts_per_page' => $posts_per_page,
		'post_status'    => 'publish',
		'order'          => 'DESC' === $order ? 'DESC' : 'ASC',
	);

	if ( 'event_date' === $order_by ) {
		$query_args['meta_key'] = '_EventStartDate';
		$query_args['orderby']  = 'meta_value';
	} elseif ( 'rand' === $order_by ) {
		$query_args['orderby'] = 'rand';
	} elseif ( 'title' === $order_by ) {
		$query_args['orderby'] = 'title';
	} else {
		$query_args['orderby'] = 'date';
	}

	if ( '' !== $category ) {
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'tribe_events_cat',
				'field'    => is_numeric( $category ) ? 'term_id' : 'slug',
				'terms'    => is_numeric( $category ) ? (int) $category : $category,
			),
		);
	}

	if ( '' !== $exclude_ids ) {
		$excluded = array_filter( array_map( 'absint', explode( ',', $exclude_ids ) ) );
		if ( ! empty( $excluded ) ) {
			$query_args['post__not_in'] = $excluded;
		}
	}

	$queried_posts = get_posts( $query_args );
}

$default_register = isset( $attributes['registerButtonText'] ) ? (string) $attributes['registerButtonText'] : __( 'Register', 'nextora' );

if ( ! empty( $queried_posts ) && is_array( $queried_posts ) ) {
	foreach ( $queried_posts as $item_post ) {
		$post_id = $item_post instanceof WP_Post ? (int) $item_post->ID : (int) $item_post;

		// Day & Month
		if ( function_exists( 'tribe_get_start_date' ) ) {
			$day   = (string) tribe_get_start_date( $post_id, false, 'd' );
			$month = (string) tribe_get_start_date( $post_id, false, 'M' );
			$time  = (string) tribe_get_start_date( $post_id, false, 'g:i A' );
		} else {
			$raw_start = get_post_meta( $post_id, '_EventStartDate', true );
			if ( is_string( $raw_start ) && '' !== $raw_start ) {
				$time_ts = strtotime( $raw_start );
				$day     = $time_ts ? date( 'd', $time_ts ) : '';
				$month   = $time_ts ? date( 'M', $time_ts ) : '';
				$time    = $time_ts ? date( 'g:i A', $time_ts ) : '';
			} else {
				$day   = get_the_date( 'd', $post_id );
				$month = get_the_date( 'M', $post_id );
				$time  = '';
			}
		}

		// Venue / Location
		$location = '';
		if ( function_exists( 'tribe_get_venue' ) ) {
			$venue = (string) tribe_get_venue( $post_id );
			$city  = function_exists( 'tribe_get_city' ) ? (string) tribe_get_city( $post_id ) : '';
			if ( '' !== $venue && '' !== $city ) {
				$location = $venue . ', ' . $city;
			} elseif ( '' !== $venue ) {
				$location = $venue;
			} else {
				$location = $city;
			}
		}

		// Price / Cost
		$price = function_exists( 'tribe_get_cost' ) ? (string) tribe_get_cost( $post_id, true ) : '';
		if ( '' === $price ) {
			$raw_cost = get_post_meta( $post_id, '_EventCost', true );
			$price    = is_string( $raw_cost ) ? $raw_cost : '';
		}

		// Category
		$category_name = '';
		$terms         = get_the_terms( $post_id, 'tribe_events_cat' );
		if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
			$first_term    = reset( $terms );
			$category_name = false !== $first_term ? (string) $first_term->name : '';
		}

		// Title & Description
		$title   = get_the_title( $post_id );
		$excerpt = has_excerpt( $post_id )
			? get_the_excerpt( $post_id )
			: wp_trim_words( (string) get_post_field( 'post_content', $post_id ), 20 );

		// Image
		$image_id  = (int) get_post_thumbnail_id( $post_id );
		$image_url = $image_id > 0 ? (string) wp_get_attachment_image_url( $image_id, 'medium' ) : '';
		$image_alt = $image_id > 0 ? (string) get_post_meta( $image_id, '_wp_attachment_image_alt', true ) : $title;

		// Link
		$link_url = (string) get_permalink( $post_id );

		$events[] = array(
			'id'            => (string) $post_id,
			'day'           => $day,
			'month'         => $month,
			'category'      => $category_name,
			'title'         => $title,
			'description'   => $excerpt,
			'location'      => $location,
			'time'          => $time,
			'price'         => $price,
			'imageId'       => $image_id,
			'imageUrl'      => $image_url,
			'imageAlt'      => $image_alt,
			'linkUrl'       => $link_url,
			'linkTarget'    => '_self',
			'registerLabel' => $default_register,
		);
	}
}

$show_register = ! isset( $attributes['showRegisterButton'] ) || (bool) $attributes['showRegisterButton'];
$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$color_keys = array(
	'cardBackgroundColor'          => '--nextora-event-card-bg',
	'cardBorderColor'              => '--nextora-event-card-border-color',
	'dateBackgroundColor'          => '--nextora-event-date-bg',
	'dateDayColor'                 => '--nextora-event-date-day-color',
	'dateAccentColor'              => '--nextora-event-date-month-color',
	'titleColor'                   => '--nextora-event-title-color',
	'metaColor'                    => '--nextora-event-meta-color',
	'metaIconColor'                => '--nextora-event-meta-icon-color',
	'registerBackgroundColor'      => '--nextora-event-register-bg',
	'registerTextColor'            => '--nextora-event-register-text-color',
	'registerBorderColor'          => '--nextora-event-register-border-color',
	'registerHoverTextColor'       => '--nextora-event-register-hover-text-color',
	'registerHoverBackgroundColor' => '--nextora-event-register-hover-bg',
	'registerHoverBorderColor'     => '--nextora-event-register-hover-border-color',
	'paginationColor'              => '--nextora-event-dot-color',
	'paginationActiveColor'        => '--nextora-event-dot-active',
);

$css_vars = array();
foreach ( $color_keys as $attr_key => $var_name ) {
	$raw      = isset( $attributes[ $attr_key ] ) ? (string) $attributes[ $attr_key ] : '';
	$resolved = nextora_event_tec_resolve_color( $raw );
	if ( '' !== $resolved ) {
		$css_vars[ $var_name ] = $resolved;
	}
}

$slides = isset( $attributes['slidesPerView'] ) ? max( 1, min( 6, (float) $attributes['slidesPerView'] ) ) : 3.0;
$tablet = isset( $attributes['tabletSlides'] ) ? max( 1, min( 4, (float) $attributes['tabletSlides'] ) ) : 2.0;
$mobile = isset( $attributes['mobileSlides'] ) ? max( 1, min( 3, (float) $attributes['mobileSlides'] ) ) : 1.0;

$is_desktop_fractional = ( fmod( (float) $slides, 1.0 ) > 0.001 );
$is_tablet_fractional  = ( fmod( (float) $tablet, 1.0 ) > 0.001 );
$is_mobile_fractional  = ( fmod( (float) $mobile, 1.0 ) > 0.001 );
$has_any_fractional    = $is_desktop_fractional || $is_tablet_fractional || $is_mobile_fractional;

$edge_fade_color = nextora_event_tec_resolve_color( isset( $attributes['edgeFadeColor'] ) ? (string) $attributes['edgeFadeColor'] : '' );
$css_vars['--nextora-event-edge-fade-color'] = '' !== $edge_fade_color ? $edge_fade_color : 'var(--wp--preset--color--base, #ffffff)';

$is_editor = is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST );

if ( $is_editor && ( $is_template1 || $is_template2 ) ) {
	$slides = isset( $attributes['slidesPerView'] ) ? max( 1, min( 6, (float) $attributes['slidesPerView'] ) ) : 3;
	$space  = isset( $attributes['spaceBetween'] ) ? max( 0, min( 60, (int) $attributes['spaceBetween'] ) ) : 24;
	$css_vars['--nextora-event-editor-slides'] = (string) $slides;
	$css_vars['--nextora-event-editor-gap']    = $space . 'px';
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array( 'nextora-event', 'nextora-event-tec' );
if ( $is_editor ) {
	$wrapper_classes[] = 'nextora-event--editor';
}
if ( $is_template1 ) {
	$wrapper_classes[] = 'nextora-event--template1';
	if ( $is_editor ) {
		$wrapper_classes[] = 'nextora-event--template1-editor';
	} else {
		$wrapper_classes[] = 'nextora-event--loading';
	}
} elseif ( $is_template2 ) {
	$wrapper_classes[] = 'nextora-event--template2';
	if ( $is_editor ) {
		$wrapper_classes[] = 'nextora-event--template2-editor';
	} else {
		$wrapper_classes[] = 'nextora-event--loading';
	}
} elseif ( $is_template3 ) {
	$wrapper_classes[] = 'nextora-event--template3';
	if ( $is_editor ) {
		$wrapper_classes[] = 'nextora-event--template3-editor';
	}
	if ( ! empty( $attributes['template3Alternating'] ) ) {
		$wrapper_classes[] = 'nextora-event--template3-alternating';
	}
} elseif ( $enable_scroll && ! $is_editor ) {
	$wrapper_classes[] = 'nextora-event--reveal-pending';
}

if ( $is_desktop_fractional ) {
	$wrapper_classes[] = 'has-edge-fade-desktop';
}
if ( $is_tablet_fractional ) {
	$wrapper_classes[] = 'has-edge-fade-tablet';
}
if ( $is_mobile_fractional ) {
	$wrapper_classes[] = 'has-edge-fade-mobile';
}

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
);
if ( '' !== $inline_style ) {
	$wrapper_extra['style'] = $inline_style;
}
if ( $enable_scroll && ! $is_template1 && ! $is_editor ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
}
if ( $is_template1 || $is_template2 ) {
	$wrapper_extra['data-nextora-event-template'] = $template;
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );

$title_color_raw   = isset( $attributes['titleColor'] ) ? (string) $attributes['titleColor'] : '';
$title_color_props = nextora_event_tec_get_color_props( $title_color_raw, 'color' );

$card_bg_raw     = isset( $attributes['cardBackgroundColor'] ) ? (string) $attributes['cardBackgroundColor'] : '';
$card_border_raw = isset( $attributes['cardBorderColor'] ) ? (string) $attributes['cardBorderColor'] : '';
$card_bg_props     = nextora_event_tec_get_color_props( $card_bg_raw, 'background' );
$card_border_props = nextora_event_tec_get_color_props( $card_border_raw, 'border' );
$card_styles       = array_filter( array( $card_bg_props['style'], $card_border_props['style'] ) );
$card_props        = array(
	'class' => $card_bg_props['class'],
	'style' => ! empty( $card_styles ) ? implode( ' ', $card_styles ) : '',
);

$date_bg_raw    = isset( $attributes['dateBackgroundColor'] ) ? (string) $attributes['dateBackgroundColor'] : '';
$date_day_raw   = isset( $attributes['dateDayColor'] ) ? (string) $attributes['dateDayColor'] : '';
$date_month_raw = isset( $attributes['dateAccentColor'] ) ? (string) $attributes['dateAccentColor'] : '';
$date_props     = array(
	'bg'    => nextora_event_tec_get_color_props( $date_bg_raw, 'background' ),
	'day'   => nextora_event_tec_get_color_props( $date_day_raw, 'color' ),
	'month' => nextora_event_tec_get_color_props( $date_month_raw, 'color' ),
);

$meta_color_raw = isset( $attributes['metaColor'] ) ? (string) $attributes['metaColor'] : '';
$meta_icon_raw  = isset( $attributes['metaIconColor'] ) ? (string) $attributes['metaIconColor'] : '';
$meta_props     = array(
	'text' => nextora_event_tec_get_color_props( $meta_color_raw, 'color' ),
	'icon' => nextora_event_tec_get_color_props( $meta_icon_raw, 'color' ),
);

$reg_bg_raw     = isset( $attributes['registerBackgroundColor'] ) ? (string) $attributes['registerBackgroundColor'] : '';
$reg_text_raw   = isset( $attributes['registerTextColor'] ) ? (string) $attributes['registerTextColor'] : '';
$reg_border_raw = isset( $attributes['registerBorderColor'] ) ? (string) $attributes['registerBorderColor'] : '';

$reg_bg_props     = nextora_event_tec_get_color_props( $reg_bg_raw, 'background' );
$reg_text_props   = nextora_event_tec_get_color_props( $reg_text_raw, 'color' );
$reg_border_props = nextora_event_tec_get_color_props( $reg_border_raw, 'border' );

$reg_btn_classes = array_filter( array( $reg_bg_props['class'], $reg_text_props['class'] ) );
$reg_btn_styles  = array_filter( array( $reg_bg_props['style'], $reg_text_props['style'], $reg_border_props['style'] ) );

$reg_btn_props = array(
	'class' => ! empty( $reg_btn_classes ) ? implode( ' ', $reg_btn_classes ) : '',
	'style' => ! empty( $reg_btn_styles ) ? implode( ' ', $reg_btn_styles ) : '',
);

$placeholder_url = nextora_event_tec_placeholder_image_url();

if ( empty( $events ) ) {
	echo sprintf(
		'<div %1$s><div class="nextora-event__inner"><div class="nextora-event__empty" style="text-align:center;padding:40px 20px;color:var(--wp--preset--color--contrast,#333);"><p>%2$s</p></div></div></div>',
		$wrapper_attributes,
		esc_html__( 'No upcoming events found.', 'nextora' ),
	);
	return;
}

if ( ! function_exists( 'nextora_event_tec_render_card' ) ) {
	/**
	 * Render a single event card for template1 slider.
	 *
	 * @param array<string, mixed>                 $event             Event data.
	 * @param array<string, string>                $title_color_props Title color classes/styles.
	 * @param array<string, string>                $card_props        Card classes/styles.
	 * @param array<string, string>                $reg_btn_props     Register button classes/styles.
	 * @param array<string, array<string, string>> $date_props        Date block classes/styles.
	 * @param array<string, mixed>                 $meta_props        Meta icon/text classes/styles.
	 */
	function nextora_event_tec_render_card(
		array $event,
		string $placeholder_url,
		bool $show_register,
		string $default_register,
		array $title_color_props = array(),
		array $card_props = array(),
		array $reg_btn_props = array(),
		array $date_props = array(),
		array $meta_props = array(),
	): string {
		$title = trim( $event['title'] );
		if ( '' === $title ) {
			return '';
		}

		$image_html = nextora_event_tec_render_image_html(
			$event['imageId'],
			$event['imageUrl'],
			$event['imageAlt'],
			$title,
			$placeholder_url,
		);

		$day   = trim( $event['day'] );
		$month = trim( $event['month'] );

		$icon_props        = $meta_props['icon'] ?? array();
		$meta_text_classes = ! empty( $meta_props['text']['class'] ) ? ' ' . $meta_props['text']['class'] : '';
		$meta_text_style   = ! empty( $meta_props['text']['style'] ) ? ' style="' . esc_attr( $meta_props['text']['style'] ) . '"' : '';

		$details = array();
		if ( '' !== trim( $event['location'] ) ) {
			$details[] = sprintf(
				'<span class="nextora-event__detail%1$s"%2$s>%3$s%4$s</span>',
				$meta_text_classes,
				$meta_text_style,
				nextora_event_tec_detail_icon( 'map-pin', $icon_props ),
				esc_html( $event['location'] ),
			);
		}
		if ( '' !== trim( $event['time'] ) ) {
			$details[] = sprintf(
				'<span class="nextora-event__detail%1$s"%2$s>%3$s%4$s</span>',
				$meta_text_classes,
				$meta_text_style,
				nextora_event_tec_detail_icon( 'clock', $icon_props ),
				esc_html( $event['time'] ),
			);
		}
		if ( '' !== trim( $event['price'] ) ) {
			$details[] = sprintf(
				'<span class="nextora-event__detail%1$s"%2$s>%3$s%4$s</span>',
				$meta_text_classes,
				$meta_text_style,
				nextora_event_tec_detail_icon( 'ticket', $icon_props ),
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

			$reg_classes = array( 'nextora-event__register-card', 'wp-element-button', 'wp-block-button__link' );
			if ( ! empty( $reg_btn_props['class'] ) ) {
				$reg_classes = array_merge( $reg_classes, explode( ' ', trim( $reg_btn_props['class'] ) ) );
			}
			$reg_class_attr = esc_attr( implode( ' ', array_filter( $reg_classes ) ) );
			$reg_style_attr = ! empty( $reg_btn_props['style'] ) ? ' style="' . esc_attr( $reg_btn_props['style'] ) . '"' : '';

			if ( '' !== $link_url ) {
				$register_html = sprintf(
					'<a href="%1$s" class="%2$s" target="%3$s"%4$s%5$s>%6$s%7$s</a>',
					esc_url( $link_url ),
					$reg_class_attr,
					esc_attr( $link_target ),
					'' !== $rel ? ' rel="' . esc_attr( $rel ) . '"' : '',
					$reg_style_attr,
					nextora_event_tec_calendar_icon(),
					esc_html( $label ),
				);
			} else {
				$register_html = sprintf(
					'<span class="%1$s nextora-event__register-card--static"%2$s>%3$s%4$s</span>',
					$reg_class_attr,
					$reg_style_attr,
					nextora_event_calendar_icon(),
					esc_html( $label ),
				);
			}
		}

		$date_bg_class    = ! empty( $date_props['bg']['class'] ) ? ' ' . $date_props['bg']['class'] : '';
		$date_bg_style    = ! empty( $date_props['bg']['style'] ) ? ' style="' . esc_attr( $date_props['bg']['style'] ) . '"' : '';
		$date_day_class   = ! empty( $date_props['day']['class'] ) ? ' ' . $date_props['day']['class'] : '';
		$date_day_style   = ! empty( $date_props['day']['style'] ) ? ' style="' . esc_attr( $date_props['day']['style'] ) . '"' : '';
		$date_month_class = ! empty( $date_props['month']['class'] ) ? ' ' . $date_props['month']['class'] : '';
		$date_month_style = ! empty( $date_props['month']['style'] ) ? ' style="' . esc_attr( $date_props['month']['style'] ) . '"' : '';

		$date_badge = '' !== $day || '' !== $month
			? sprintf(
				'<div class="nextora-event__date%1$s"%2$s><b class="nextora-event__date-day%3$s"%4$s>%5$s</b><span class="nextora-event__date-month%6$s"%7$s>%8$s</span></div>',
				$date_bg_class,
				$date_bg_style,
				$date_day_class,
				$date_day_style,
				esc_html( $day ),
				$date_month_class,
				$date_month_style,
				esc_html( $month ),
			)
			: '';

		$image_with_date = sprintf(
			'<div class="nextora-event__card-thumb">%1$s%2$s</div>',
			$date_badge,
			$image_html,
		);

		$card_classes = array( 'nextora-event__card' );
		if ( ! empty( $card_props['class'] ) ) {
			$card_classes[] = $card_props['class'];
		}
		$card_style_attr = ! empty( $card_props['style'] ) ? ' style="' . esc_attr( $card_props['style'] ) . '"' : '';

		$title_classes = array( 'nextora-event__title' );
		if ( ! empty( $title_color_props['class'] ) ) {
			$title_classes[] = $title_color_props['class'];
		}
		$title_style_attr = ! empty( $title_color_props['style'] ) ? ' style="' . esc_attr( $title_color_props['style'] ) . '"' : '';

		return sprintf(
			'<div class="swiper-slide"><article class="%1$s"%2$s>%3$s<div class="nextora-event__card-info"><h4 class="%4$s"%5$s>%6$s</h4>%7$s%8$s</div></article></div>',
			esc_attr( implode( ' ', $card_classes ) ),
			$card_style_attr,
			$image_with_date,
			esc_attr( implode( ' ', $title_classes ) ),
			$title_style_attr,
			esc_html( $title ),
			$details_html,
			$register_html,
		);
	}
}

if ( ! function_exists( 'nextora_event_tec_render_list_item' ) ) {
	/**
	 * Render a single event list item for default template.
	 *
	 * @param array<string, mixed>                 $event             Event data.
	 * @param array<string, string>                $title_color_props Title color classes/styles.
	 * @param array<string, string>                $card_props        Card classes/styles.
	 * @param array<string, string>                $reg_btn_props     Register button classes/styles.
	 * @param array<string, array<string, string>> $date_props        Date block classes/styles.
	 * @param array<string, mixed>                 $meta_props        Meta icon/text classes/styles.
	 */
	function nextora_event_tec_render_list_item(
		array $event,
		string $placeholder_url,
		bool $show_register,
		string $default_register,
		array $title_color_props = array(),
		array $card_props = array(),
		array $reg_btn_props = array(),
		array $date_props = array(),
		array $meta_props = array(),
	): string {
		$title = trim( $event['title'] );
		if ( '' === $title ) {
			return '';
		}

		$image_html = nextora_event_tec_render_image_html(
			$event['imageId'],
			$event['imageUrl'],
			$event['imageAlt'],
			$title,
			$placeholder_url,
		);

		$day   = trim( $event['day'] );
		$month = trim( $event['month'] );

		$icon_props        = $meta_props['icon'] ?? array();
		$meta_text_classes = ! empty( $meta_props['text']['class'] ) ? ' ' . $meta_props['text']['class'] : '';
		$meta_text_style   = ! empty( $meta_props['text']['style'] ) ? ' style="' . esc_attr( $meta_props['text']['style'] ) . '"' : '';

		$details = array();
		if ( '' !== trim( $event['location'] ) ) {
			$details[] = sprintf(
				'<span class="nextora-event__detail%1$s"%2$s>%3$s%4$s</span>',
				$meta_text_classes,
				$meta_text_style,
				nextora_event_tec_detail_icon( 'map-pin', $icon_props ),
				esc_html( $event['location'] ),
			);
		}
		if ( '' !== trim( $event['time'] ) ) {
			$details[] = sprintf(
				'<span class="nextora-event__detail%1$s"%2$s>%3$s%4$s</span>',
				$meta_text_classes,
				$meta_text_style,
				nextora_event_tec_detail_icon( 'clock', $icon_props ),
				esc_html( $event['time'] ),
			);
		}
		if ( '' !== trim( $event['price'] ) ) {
			$details[] = sprintf(
				'<span class="nextora-event__detail%1$s"%2$s>%3$s%4$s</span>',
				$meta_text_classes,
				$meta_text_style,
				nextora_event_tec_detail_icon( 'ticket', $icon_props ),
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

			$reg_classes = array( 'nextora-event__register', 'wp-element-button' );
			if ( ! empty( $reg_btn_props['class'] ) ) {
				$reg_classes = array_merge( $reg_classes, explode( ' ', trim( $reg_btn_props['class'] ) ) );
			}
			$reg_class_attr = esc_attr( implode( ' ', array_filter( $reg_classes ) ) );
			$reg_style_attr = ! empty( $reg_btn_props['style'] ) ? ' style="' . esc_attr( $reg_btn_props['style'] ) . '"' : '';

			if ( '' !== $link_url ) {
				$register_html = sprintf(
					'<a href="%1$s" class="%2$s" target="%3$s"%4$s%5$s>%6$s%7$s</a>',
					esc_url( $link_url ),
					$reg_class_attr,
					esc_attr( $link_target ),
					'' !== $rel ? ' rel="' . esc_attr( $rel ) . '"' : '',
					$reg_style_attr,
					esc_html( $label ),
					nextora_event_tec_register_arrow_icon(),
				);
			} else {
				$register_html = sprintf(
					'<span class="%1$s nextora-event__register--static"%2$s>%3$s%4$s</span>',
					$reg_class_attr,
					$reg_style_attr,
					esc_html( $label ),
					nextora_event_tec_register_arrow_icon(),
				);
			}
		}

		$item_classes = array( 'nextora-event__item' );
		if ( ! empty( $card_props['class'] ) ) {
			$item_classes[] = $card_props['class'];
		}
		$item_style_attr = ! empty( $card_props['style'] ) ? ' style="' . esc_attr( $card_props['style'] ) . '"' : '';

		$title_classes = array( 'nextora-event__title' );
		if ( ! empty( $title_color_props['class'] ) ) {
			$title_classes[] = $title_color_props['class'];
		}
		$title_style_attr = ! empty( $title_color_props['style'] ) ? ' style="' . esc_attr( $title_color_props['style'] ) . '"' : '';

		$date_bg_class    = ! empty( $date_props['bg']['class'] ) ? ' ' . $date_props['bg']['class'] : '';
		$date_bg_style    = ! empty( $date_props['bg']['style'] ) ? ' style="' . esc_attr( $date_props['bg']['style'] ) . '"' : '';
		$date_day_class   = ! empty( $date_props['day']['class'] ) ? ' ' . $date_props['day']['class'] : '';
		$date_day_style   = ! empty( $date_props['day']['style'] ) ? ' style="' . esc_attr( $date_props['day']['style'] ) . '"' : '';
		$date_month_class = ! empty( $date_props['month']['class'] ) ? ' ' . $date_props['month']['class'] : '';
		$date_month_style = ! empty( $date_props['month']['style'] ) ? ' style="' . esc_attr( $date_props['month']['style'] ) . '"' : '';

		return sprintf(
			'<li class="nextora-event__item-wrap"><article class="%1$s"%2$s>%3$s<div class="nextora-event__thumb">%4$s</div><div class="nextora-event__info"><h4 class="%5$s"%6$s>%7$s</h4>%8$s</div>%9$s</article></li>',
			esc_attr( implode( ' ', $item_classes ) ),
			$item_style_attr,
			'' !== $day || '' !== $month
				? sprintf(
					'<div class="nextora-event__date%1$s"%2$s><b class="nextora-event__date-day%3$s"%4$s>%5$s</b><span class="nextora-event__date-month%6$s"%7$s>%8$s</span></div>',
					$date_bg_class,
					$date_bg_style,
					$date_day_class,
					$date_day_style,
					esc_html( $day ),
					$date_month_class,
					$date_month_style,
					esc_html( $month ),
				)
				: '',
			$image_html,
			esc_attr( implode( ' ', $title_classes ) ),
			$title_style_attr,
			esc_html( $title ),
			$details_html,
			$register_html,
		);
	}
}

if ( ! function_exists( 'nextora_event_tec_render_template2_item' ) ) {
	/**
	 * Render an Awakenur-inspired event card for template2.
	 *
	 * @param array<string, mixed>                 $event             Event data.
	 * @param array<string, string>                $title_color_props Title color classes/styles.
	 * @param array<string, string>                $card_props        Card classes/styles.
	 * @param array<string, string>                $reg_btn_props     Register button classes/styles.
	 * @param array<string, array<string, string>> $date_props        Date block classes/styles.
	 * @param array<string, mixed>                 $meta_props        Meta icon/text classes/styles.
	 */
	function nextora_event_tec_render_template2_item(
		array $event,
		string $placeholder_url,
		bool $show_register,
		string $default_register,
		array $title_color_props = array(),
		array $card_props = array(),
		array $reg_btn_props = array(),
		array $date_props = array(),
		array $meta_props = array(),
	): string {
		$title = trim( $event['title'] );
		if ( '' === $title ) {
			return '';
		}

		$image_html  = nextora_event_tec_render_image_html( $event['imageId'], $event['imageUrl'], $event['imageAlt'], $title, $placeholder_url );
		$day         = trim( $event['day'] );
		$month       = trim( $event['month'] );
		$label       = trim( $event['registerLabel'] );
		$label       = '' !== $label ? $label : $default_register;
		$link_url    = trim( $event['linkUrl'] );
		$link_target = '_blank' === $event['linkTarget'] ? '_blank' : '_self';
		$rel         = '_blank' === $link_target ? ' rel="noopener noreferrer"' : '';
		$description = isset( $event['description'] ) ? trim( (string) $event['description'] ) : '';

		$icon_props      = $meta_props['icon'] ?? array();
		$meta_text_class = ! empty( $meta_props['text']['class'] ) ? ' ' . $meta_props['text']['class'] : '';
		$meta_text_style = ! empty( $meta_props['text']['style'] ) ? ' style="' . esc_attr( $meta_props['text']['style'] ) . '"' : '';

		$details = array();
		if ( '' !== trim( $event['time'] ) ) {
			$details[] = sprintf( '<span class="nextora-event__template2-meta%1$s"%2$s>%3$s<span>%4$s</span></span>', $meta_text_class, $meta_text_style, nextora_event_tec_detail_icon( 'clock', $icon_props ), esc_html( $event['time'] ) );
		}
		if ( '' !== trim( $event['location'] ) ) {
			$details[] = sprintf( '<span class="nextora-event__template2-meta%1$s"%2$s>%3$s<span>%4$s</span></span>', $meta_text_class, $meta_text_style, nextora_event_tec_detail_icon( 'map-pin', $icon_props ), esc_html( $event['location'] ) );
		}

		$title_classes = array( 'nextora-event__template2-title' );
		if ( ! empty( $title_color_props['class'] ) ) {
			$title_classes[] = $title_color_props['class'];
		}
		$title_style_attr = ! empty( $title_color_props['style'] ) ? ' style="' . esc_attr( $title_color_props['style'] ) . '"' : '';

		$title_html = '' !== $link_url
			? sprintf( '<a href="%1$s" target="%2$s"%3$s>%4$s</a>', esc_url( $link_url ), esc_attr( $link_target ), $rel, esc_html( $title ) )
			: esc_html( $title );

		$action_html = '';
		if ( $show_register ) {
			$reg_classes = array( 'nextora-event__template2-action', 'wp-element-button' );
			if ( ! empty( $reg_btn_props['class'] ) ) {
				$reg_classes = array_merge( $reg_classes, explode( ' ', trim( $reg_btn_props['class'] ) ) );
			}
			$reg_class_attr = esc_attr( implode( ' ', array_filter( $reg_classes ) ) );
			$reg_style_attr = ! empty( $reg_btn_props['style'] ) ? ' style="' . esc_attr( $reg_btn_props['style'] ) . '"' : '';

			$arrow_svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
			if ( '' !== $link_url ) {
				$action_html = sprintf(
					'<a href="%1$s" class="%2$s" target="%3$s"%4$s aria-label="%5$s"%6$s>%7$s</a>',
					esc_url( $link_url ),
					$reg_class_attr,
					esc_attr( $link_target ),
					$rel,
					esc_attr( '' !== $label ? $label : $title ),
					$reg_style_attr,
					$arrow_svg,
				);
			} else {
				$action_html = sprintf(
					'<span class="%1$s" aria-hidden="true"%2$s>%3$s</span>',
					$reg_class_attr,
					$reg_style_attr,
					$arrow_svg,
				);
			}
		}

		$date_bg_class    = ! empty( $date_props['bg']['class'] ) ? ' ' . $date_props['bg']['class'] : '';
		$date_bg_style    = ! empty( $date_props['bg']['style'] ) ? ' style="' . esc_attr( $date_props['bg']['style'] ) . '"' : '';
		$date_day_class   = ! empty( $date_props['day']['class'] ) ? ' class="' . esc_attr( $date_props['day']['class'] ) . '"' : '';
		$date_day_style   = ! empty( $date_props['day']['style'] ) ? ' style="' . esc_attr( $date_props['day']['style'] ) . '"' : '';
		$date_month_class = ! empty( $date_props['month']['class'] ) ? ' class="' . esc_attr( $date_props['month']['class'] ) . '"' : '';
		$date_month_style = ! empty( $date_props['month']['style'] ) ? ' style="' . esc_attr( $date_props['month']['style'] ) . '"' : '';

		$date_html = ( '' !== $day || '' !== $month )
			? sprintf( '<div class="nextora-event__template2-date%1$s"%2$s><b%3$s%4$s>%5$s</b><span%6$s%7$s>%8$s</span></div>', $date_bg_class, $date_bg_style, $date_day_class, $date_day_style, esc_html( $day ), $date_month_class, $date_month_style, esc_html( $month ) )
			: '';

		$desc_html = '' !== $description
			? sprintf( '<p class="nextora-event__template2-desc">%1$s</p>', esc_html( $description ) )
			: '';

		$footer_html = sprintf(
			'<div class="nextora-event__template2-footer"><div class="nextora-event__template2-details">%1$s</div>%2$s</div>',
			implode( '', $details ),
			$action_html,
		);

		$card_classes = array( 'nextora-event__template2-card' );
		if ( ! empty( $card_props['class'] ) ) {
			$card_classes[] = $card_props['class'];
		}
		$card_style_attr = ! empty( $card_props['style'] ) ? ' style="' . esc_attr( $card_props['style'] ) . '"' : '';

		return sprintf(
			'<div class="swiper-slide"><article class="%1$s"%2$s><div class="nextora-event__template2-media">%3$s%4$s</div><div class="nextora-event__template2-content"><h4 class="%5$s"%6$s>%7$s</h4>%8$s%9$s</div></article></div>',
			esc_attr( implode( ' ', $card_classes ) ),
			$card_style_attr,
			$image_html,
			$date_html,
			esc_attr( implode( ' ', $title_classes ) ),
			$title_style_attr,
			$title_html,
			$desc_html,
			$footer_html,
		);
	}
}

if ( ! function_exists( 'nextora_event_tec_render_template3_item' ) ) {
	/**
	 * Render an editorial event list item for template3.
	 *
	 * @param array<string, mixed>                 $event             Event data.
	 * @param array<string, string>                $title_color_props Title color classes/styles.
	 * @param array<string, string>                $card_props        Card classes/styles.
	 * @param array<string, string>                $reg_btn_props     Register button classes/styles.
	 * @param array<string, array<string, string>> $date_props        Date block classes/styles.
	 * @param array<string, mixed>                 $meta_props        Meta icon/text classes/styles.
	 */
	function nextora_event_tec_render_template3_item(
		array $event,
		string $placeholder_url,
		bool $show_register,
		array $title_color_props = array(),
		array $card_props = array(),
		array $reg_btn_props = array(),
		array $date_props = array(),
		array $meta_props = array(),
	): string {
		$title = trim( $event['title'] );
		if ( '' === $title ) {
			return '';
		}

		$link_url    = trim( $event['linkUrl'] );
		$link_target = '_blank' === $event['linkTarget'] ? '_blank' : '_self';
		$rel         = '_blank' === $link_target ? ' rel="noopener noreferrer"' : '';
		$title_html  = '' !== $link_url
			? sprintf( '<a href="%1$s" target="%2$s"%3$s>%4$s</a>', esc_url( $link_url ), esc_attr( $link_target ), $rel, esc_html( $title ) )
			: esc_html( $title );
		$image_html  = nextora_event_tec_render_image_html( $event['imageId'], $event['imageUrl'], $event['imageAlt'], $title, $placeholder_url );
		$category    = trim( $event['category'] );
		$description = trim( $event['description'] );
		$month       = strtoupper( trim( $event['month'] ) );
		$register_label = trim( $event['registerLabel'] );
		$register_label = '' !== $register_label ? $register_label : __( 'Register', 'nextora' );
		$arrow_svg      = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true" focusable="false"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
		$register_icon  = '<span class="nextora-event__template3-register-icon" aria-hidden="true">' . $arrow_svg . '</span>';

		$reg_classes = array( 'nextora-event__template3-register', 'wp-element-button' );
		if ( ! empty( $reg_btn_props['class'] ) ) {
			$reg_classes = array_merge( $reg_classes, explode( ' ', trim( $reg_btn_props['class'] ) ) );
		}
		$reg_class_attr = esc_attr( implode( ' ', array_filter( $reg_classes ) ) );
		$reg_style_attr = ! empty( $reg_btn_props['style'] ) ? ' style="' . esc_attr( $reg_btn_props['style'] ) . '"' : '';

		$register_html  = ! $show_register ? '' : ( '' !== $link_url
			? sprintf( '<a class="%1$s" href="%2$s" target="%3$s"%4$s%5$s>%6$s%7$s</a>', $reg_class_attr, esc_url( $link_url ), esc_attr( $link_target ), $rel, $reg_style_attr, esc_html( $register_label ), $register_icon )
			: sprintf( '<span class="%1$s nextora-event__template3-register--static"%2$s>%3$s%4$s</span>', $reg_class_attr, $reg_style_attr, esc_html( $register_label ), $register_icon ) );

		$item_classes = array( 'nextora-event__template3-item' );
		if ( ! empty( $card_props['class'] ) ) {
			$item_classes[] = $card_props['class'];
		}
		$item_style_attr = ! empty( $card_props['style'] ) ? ' style="' . esc_attr( $card_props['style'] ) . '"' : '';

		$title_classes = array( 'nextora-event__template3-title' );
		if ( ! empty( $title_color_props['class'] ) ) {
			$title_classes[] = $title_color_props['class'];
		}
		$title_style_attr = ! empty( $title_color_props['style'] ) ? ' style="' . esc_attr( $title_color_props['style'] ) . '"' : '';

		$date_bg_class    = ! empty( $date_props['bg']['class'] ) ? ' ' . $date_props['bg']['class'] : '';
		$date_bg_style    = ! empty( $date_props['bg']['style'] ) ? ' style="' . esc_attr( $date_props['bg']['style'] ) . '"' : '';
		$date_day_class   = ! empty( $date_props['day']['class'] ) ? ' class="' . esc_attr( $date_props['day']['class'] ) . '"' : '';
		$date_day_style   = ! empty( $date_props['day']['style'] ) ? ' style="' . esc_attr( $date_props['day']['style'] ) . '"' : '';
		$date_month_class = ! empty( $date_props['month']['class'] ) ? ' class="' . esc_attr( $date_props['month']['class'] ) . '"' : '';
		$date_month_style = ! empty( $date_props['month']['style'] ) ? ' style="' . esc_attr( $date_props['month']['style'] ) . '"' : '';

		$date_badge_html = sprintf(
			'<div class="nextora-event__template3-date-frame"><div class="nextora-event__template3-date%1$s"%2$s><span%3$s%4$s>%5$s</span><b%6$s%7$s>%8$s</b><small>%9$s</small></div></div>',
			$date_bg_class,
			$date_bg_style,
			$date_month_class,
			$date_month_style,
			esc_html( '' !== $month ? $month : __( 'TBC', 'nextora' ) ),
			$date_day_class,
			$date_day_style,
			esc_html( trim( $event['day'] ) ),
			esc_html( __( 'Day', 'nextora' ) ),
		);

		$icon_props      = $meta_props['icon'] ?? array();
		$meta_text_class = ! empty( $meta_props['text']['class'] ) ? ' ' . $meta_props['text']['class'] : '';
		$meta_text_style = ! empty( $meta_props['text']['style'] ) ? ' style="' . esc_attr( $meta_props['text']['style'] ) . '"' : '';

		$meta_time = '' !== trim( $event['time'] )
			? sprintf( '<span class="%1$s"%2$s>%3$s%4$s</span>', esc_attr( trim( 'nextora-event__template3-meta-item' . $meta_text_class ) ), $meta_text_style, nextora_event_tec_detail_icon( 'clock', $icon_props ), esc_html( $event['time'] ) )
			: '';
		$meta_location = '' !== trim( $event['location'] )
			? sprintf( '<span class="%1$s"%2$s>%3$s%4$s</span>', esc_attr( trim( 'nextora-event__template3-meta-item' . $meta_text_class ) ), $meta_text_style, nextora_event_tec_detail_icon( 'map-pin', $icon_props ), esc_html( $event['location'] ) )
			: '';

		return sprintf(
			'<article class="%1$s"%2$s>%3$s<div class="nextora-event__template3-content">%4$s<h4 class="%5$s"%6$s>%7$s</h4><div class="nextora-event__template3-meta">%8$s%9$s</div>%10$s%11$s</div><div class="nextora-event__template3-media">%12$s</div></article>',
			esc_attr( implode( ' ', $item_classes ) ),
			$item_style_attr,
			$date_badge_html,
			'' !== $category ? '<div class="nextora-event__template3-category">' . esc_html( $category ) . '</div>' : '',
			esc_attr( implode( ' ', $title_classes ) ),
			$title_style_attr,
			$title_html,
			$meta_time,
			$meta_location,
			'' !== $description ? '<p class="nextora-event__template3-description">' . esc_html( $description ) . '</p>' : '',
			$register_html,
			$image_html,
		);
	}
}

if ( $is_template1 ) {
	// --- Template 1: Slider ---
	$slide_count = count( $events );

	$autoplay    = ! isset( $attributes['autoplay'] ) || (bool) $attributes['autoplay'];
	$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 2000, min( 15000, (int) $attributes['autoplayDelay'] ) ) : 5000;
	$loop        = ! isset( $attributes['loop'] ) || (bool) $attributes['loop'];
	$speed       = isset( $attributes['speed'] ) ? max( 200, min( 2000, (int) $attributes['speed'] ) ) : 600;
	$show_arrows = ! empty( $attributes['showArrows'] );
	$show_pag    = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
	$slides      = isset( $attributes['slidesPerView'] ) ? max( 1, min( 6, (float) $attributes['slidesPerView'] ) ) : 3.0;
	$space       = isset( $attributes['spaceBetween'] ) ? max( 0, min( 60, (int) $attributes['spaceBetween'] ) ) : 24;
	$tablet      = isset( $attributes['tabletSlides'] ) ? max( 1, min( 4, (float) $attributes['tabletSlides'] ) ) : 2.0;
	$mobile      = isset( $attributes['mobileSlides'] ) ? max( 1, min( 3, (float) $attributes['mobileSlides'] ) ) : 1.0;

	$use_loop = $loop && $slide_count > 1;

	$swiper_opts = array(
		'autoplay'       => $autoplay,
		'autoplayDelay'  => $autoplay_d,
		'loop'           => $use_loop,
		'speed'          => $speed,
		'showArrows'     => $show_arrows && $slide_count > 1,
		'showPagination' => $show_pag && $slide_count > 1,
		'slidesPerView'  => $slides,
		'spaceBetween'   => $space,
		'tabletSlides'   => $tablet,
		'mobileSlides'   => $mobile,
	);

	$opts_json   = wp_json_encode( $swiper_opts );
	$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

	$cards_html = '';
	foreach ( $events as $event ) {
		$card = nextora_event_tec_render_card( $event, $placeholder_url, $show_register, $default_register, $title_color_props, $card_props, $reg_btn_props, $date_props, $meta_props );
		if ( '' !== $card ) {
			$cards_html .= $card;
		}
	}

	if ( '' === $cards_html ) {
		return;
	}

	$pagination_html = '';
	if ( $show_pag && $slide_count > 1 ) {
		$pagination_html = '<div class="nextora-event__pagination swiper-pagination" aria-hidden="true"></div>';
	}

	$arrows_html = '';
	if ( $show_arrows && $slide_count > 1 ) {
		$arrows_html = sprintf(
			'<button type="button" class="nextora-event__arrow nextora-event__arrow--prev" aria-label="%1$s">'
				. '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>'
				. '</button>'
				. '<button type="button" class="nextora-event__arrow nextora-event__arrow--next" aria-label="%2$s">'
				. '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
				. '</button>',
			esc_attr__( 'Previous events', 'nextora' ),
			esc_attr__( 'Next events', 'nextora' ),
		);
	}

	$edge_overlay_html = $has_any_fractional ? '<div class="nextora-event__edge-overlay" aria-hidden="true"></div>' : '';

	echo sprintf(
		'<div %1$s><div class="nextora-event__inner">'
			. '<div class="nextora-event__carousel-root" data-swiper-opts="%2$s">'
			. '<div class="swiper nextora-event__swiper"><div class="swiper-wrapper">%3$s</div></div>'
			. '%4$s'
			. '%5$s'
			. '</div>'
			. '%6$s'
			. '</div></div>',
		$wrapper_attributes,
		esc_attr( $opts_string ),
		$cards_html,
		$arrows_html,
		$edge_overlay_html,
		$pagination_html,
	);
} elseif ( 'template2' === $template ) {
	$items_html = '';
	foreach ( $events as $event ) {
		$item = nextora_event_tec_render_template2_item( $event, $placeholder_url, $show_register, $default_register, $title_color_props, $card_props, $reg_btn_props, $date_props, $meta_props );
		if ( '' !== $item ) {
			$items_html .= $item;
		}
	}
	if ( '' === $items_html ) {
		return;
	}
	$slide_count = count( $events );
	$swiper_opts = array(
		'autoplay'       => ! isset( $attributes['autoplay'] ) || (bool) $attributes['autoplay'],
		'autoplayDelay'  => isset( $attributes['autoplayDelay'] ) ? max( 2000, min( 15000, (int) $attributes['autoplayDelay'] ) ) : 5000,
		'loop'           => ( ! empty( $attributes['loop'] ) ) && $slide_count > 1,
		'speed'          => isset( $attributes['speed'] ) ? max( 200, min( 2000, (int) $attributes['speed'] ) ) : 600,
		'showArrows'     => ! empty( $attributes['showArrows'] ) && $slide_count > 1,
		'showPagination' => ( ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'] ) && $slide_count > 1,
		'slidesPerView'  => isset( $attributes['slidesPerView'] ) ? max( 1, min( 6, (float) $attributes['slidesPerView'] ) ) : 3.0,
		'spaceBetween'   => isset( $attributes['spaceBetween'] ) ? max( 0, min( 60, (int) $attributes['spaceBetween'] ) ) : 24,
		'tabletSlides'   => isset( $attributes['tabletSlides'] ) ? max( 1, min( 4, (float) $attributes['tabletSlides'] ) ) : 2.0,
		'mobileSlides'   => isset( $attributes['mobileSlides'] ) ? max( 1, min( 3, (float) $attributes['mobileSlides'] ) ) : 1.0,
	);
	$opts_json   = wp_json_encode( $swiper_opts );
	$opts_string = is_string( $opts_json ) ? $opts_json : '{}';
	$pagination_html = $swiper_opts['showPagination'] ? '<div class="nextora-event__pagination swiper-pagination" aria-hidden="true"></div>' : '';
	$arrows_html     = $swiper_opts['showArrows']
		? '<button type="button" class="nextora-event__arrow nextora-event__arrow--prev" aria-label="' . esc_attr__( 'Previous events', 'nextora' ) . '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button><button type="button" class="nextora-event__arrow nextora-event__arrow--next" aria-label="' . esc_attr__( 'Next events', 'nextora' ) . '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>'
		: '';
	$edge_overlay_html = $has_any_fractional ? '<div class="nextora-event__edge-overlay" aria-hidden="true"></div>' : '';
	echo sprintf(
		'<div %1$s><div class="nextora-event__inner"><div class="nextora-event__carousel-root" data-swiper-opts="%2$s"><div class="swiper nextora-event__swiper"><div class="swiper-wrapper">%3$s</div></div>%4$s%5$s%6$s</div></div></div>',
		$wrapper_attributes,
		esc_attr( $opts_string ),
		$items_html,
		$arrows_html,
		$edge_overlay_html,
		$pagination_html,
	);
} elseif ( 'template3' === $template ) {
	$items_html = '';
	foreach ( $events as $event ) {
		$items_html .= nextora_event_tec_render_template3_item( $event, $placeholder_url, $show_register, $title_color_props, $card_props, $reg_btn_props, $date_props, $meta_props );
	}
	if ( '' === $items_html ) {
		return;
	}
	echo sprintf(
		'<div %1$s><div class="nextora-event__inner"><div class="nextora-event__template3-list">%2$s</div></div></div>',
		$wrapper_attributes,
		$items_html,
	);
} else {
	// --- Default template: List ---
	$items_html = '';

	foreach ( $events as $event ) {
		$item = nextora_event_tec_render_list_item( $event, $placeholder_url, $show_register, $default_register, $title_color_props, $card_props, $reg_btn_props, $date_props, $meta_props );
		if ( '' !== $item ) {
			$items_html .= $item;
		}
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
	);
}
