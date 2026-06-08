<?php
/**
 * Google Maps — dynamic block render.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_google_maps_marker_allowed_html' ) ) {
	/**
	 * @return array<string, array<string, bool>>
	 */
	function nextora_google_maps_marker_allowed_html(): array {
		return (array) apply_filters(
			'nextora_google_maps_marker_kses_allowed_html',
			array(
				'strong' => array(),
				'em'     => array(),
				'br'     => array(),
				'a'      => array(
					'href'  => true,
					'rel'   => true,
					'class' => true,
				),
			),
		);
	}
}

if ( ! function_exists( 'nextora_google_maps_sanitize_markers' ) ) {
	/**
	 * @param mixed $raw Markers attribute.
	 *
	 * @return list<array<string, mixed>>
	 */
	function nextora_google_maps_sanitize_markers( $raw ): array {
		if ( ! is_array( $raw ) ) {
			return array();
		}

		$allowed_html = nextora_google_maps_marker_allowed_html();
		$markers      = array();

		foreach ( $raw as $marker ) {
			if ( ! is_array( $marker ) ) {
				continue;
			}

			$icon_url = isset( $marker['iconUrl'] ) && is_string( $marker['iconUrl'] )
				? esc_url_raw( trim( $marker['iconUrl'] ) )
				: '';

			$markers[] = array(
				'id'       => sanitize_key( (string) ( $marker['id'] ?? '' ) ),
				'lat'      => isset( $marker['lat'] ) ? (float) $marker['lat'] : 0.0,
				'lng'      => isset( $marker['lng'] ) ? (float) $marker['lng'] : 0.0,
				'title'    => sanitize_text_field( (string) ( $marker['title'] ?? '' ) ),
				'infoHtml' => wp_kses( (string) ( $marker['infoHtml'] ?? '' ), $allowed_html ),
				'iconUrl'  => $icon_url,
			);
		}

		return $markers;
	}
}

if ( ! function_exists( 'nextora_google_maps_build_embed_api_url' ) ) {
	/**
	 * Maps Embed API (requires API key).
	 *
	 * @param array<string, mixed> $args Embed query args.
	 */
	function nextora_google_maps_build_embed_api_url( array $args ): string {
		$base = 'https://www.google.com/maps/embed/v1/place';

		return (string) apply_filters(
			'nextora_google_maps_embed_url',
			add_query_arg( $args, $base ),
			$args,
		);
	}
}

if ( ! function_exists( 'nextora_google_maps_build_iframe_src' ) ) {
	/**
	 * Iframe `src` — Embed API when a key exists, otherwise keyless Google Maps embed.
	 */
	function nextora_google_maps_build_iframe_src(
		string $address,
		float $lat,
		float $lng,
		int $zoom,
		string $api_key,
		bool $show_controls,
	): string {
		$query = '' !== trim( $address ) ? trim( $address ) : (string) $lat . ',' . (string) $lng;

		if ( '' !== $api_key ) {
			$embed_args = array(
				'key'  => $api_key,
				'q'    => $query,
				'zoom' => (string) $zoom,
			);
			if ( ! $show_controls ) {
				$embed_args['zoomControl']       = 'false';
				$embed_args['streetViewControl'] = 'false';
				$embed_args['maptypeControl']    = 'false';
				$embed_args['fullscreenControl'] = 'false';
			}

			return nextora_google_maps_build_embed_api_url( $embed_args );
		}

		$keyless_args = array(
			'q'      => $query,
			'output' => 'embed',
			'z'      => (string) $zoom,
		);

		return (string) apply_filters(
			'nextora_google_maps_iframe_src',
			add_query_arg( $keyless_args, 'https://maps.google.com/maps' ),
			$keyless_args,
			$address,
			$lat,
			$lng,
			$zoom,
			$show_controls,
		);
	}
}

if ( ! function_exists( 'nextora_google_maps_location_label' ) ) {
	function nextora_google_maps_location_label( string $address, float $lat, float $lng ): string {
		$address = trim( $address );
		if ( '' !== $address ) {
			return $address;
		}

		return sprintf(
			/* translators: %1$s: latitude, %2$s: longitude */
			__( 'Map at %1$s, %2$s', 'nextora' ),
			(string) $lat,
			(string) $lng,
		);
	}
}

if ( ! function_exists( 'nextora_google_maps_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued (dynamic PHP render blocks may skip auto-enqueue).
	 */
	function nextora_google_maps_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/google-maps' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( ! is_string( $handle ) || '' === $handle ) {
					continue;
				}
				wp_enqueue_script( $handle );
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/google-maps/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/google-maps/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-google-maps-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-google-maps-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-google-maps-view-fallback' );
		}
	}
}

$map_mode      = isset( $attributes['mapMode'] ) && is_string( $attributes['mapMode'] ) ? $attributes['mapMode'] : 'iframe';
$address       = isset( $attributes['address'] ) && is_string( $attributes['address'] ) ? trim( $attributes['address'] ) : '';
$lat           = isset( $attributes['lat'] ) ? (float) $attributes['lat'] : 21.0285;
$lng           = isset( $attributes['lng'] ) ? (float) $attributes['lng'] : 105.8542;
$zoom          = isset( $attributes['zoom'] ) ? max( 1, min( 20, (int) $attributes['zoom'] ) ) : 15;
$map_height    = isset( $attributes['mapHeight'] ) ? max( 200, min( 1200, (int) $attributes['mapHeight'] ) ) : 450;
$show_controls = ! isset( $attributes['showControls'] ) || (bool) $attributes['showControls'];
$markers       = nextora_google_maps_sanitize_markers( $attributes['markers'] ?? array() );
$style_json    = isset( $attributes['mapStyleJson'] ) && is_string( $attributes['mapStyleJson'] ) ? trim( $attributes['mapStyleJson'] ) : '';
$show_directions = isset( $attributes['showDirections'] ) && (bool) $attributes['showDirections'];
$scroll_reveal = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];
$is_api_mode   = 'api' === $map_mode;

$api_key = function_exists( 'nextora_google_maps_resolve_api_key' )
	? nextora_google_maps_resolve_api_key( $attributes )
	: '';

$location_label = nextora_google_maps_location_label( $address, $lat, $lng );
$map_aria_label = esc_attr(
	sprintf(
		/* translators: %s: address or coordinates */
		__( 'Map showing %s', 'nextora' ),
		$location_label,
	),
);

$markers_json = wp_json_encode( $markers );
if ( ! is_string( $markers_json ) ) {
	$markers_json = '[]';
}

$border_radius = isset( $attributes['borderRadius'] ) ? max( 0, min( 999, (int) $attributes['borderRadius'] ) ) : 0;

$inline_style = '--nextora-google-maps-height:' . $map_height . 'px;height:' . $map_height . 'px';
if ( $border_radius > 0 ) {
	$inline_style .= ';border-radius:' . $border_radius . 'px';
}

$wrapper_args = array(
	'class' => implode(
		' ',
		array_filter(
			array(
				'nextora-google-maps',
				'nextora-google-maps--mode-' . sanitize_html_class( $map_mode ),
				$is_api_mode ? 'nextora-google-maps--loading' : '',
				( 'iframe' === $map_mode && ! $show_controls ) ? 'nextora-google-maps--hide-controls' : '',
			),
		),
	),
	'style' => $inline_style,
	'data-nextora-google-maps' => '1',
	'data-nextora-google-maps-mode' => esc_attr( $map_mode ),
	'data-nextora-google-maps-lat' => (string) $lat,
	'data-nextora-google-maps-lng' => (string) $lng,
	'data-nextora-google-maps-zoom' => (string) $zoom,
	'data-nextora-google-maps-show-controls' => $show_controls ? 'true' : 'false',
	'data-nextora-google-maps-markers' => esc_attr( $markers_json ),
	'data-nextora-google-maps-style' => esc_attr( $style_json ),
	'data-nextora-google-maps-show-directions' => $show_directions ? 'true' : 'false',
	'data-nextora-google-maps-error' => esc_attr__( 'Unable to load the map.', 'nextora' ),
);

if ( $scroll_reveal ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}

$wrapper_args = apply_filters( 'nextora_google_maps_wrapper_attributes', $wrapper_args, $attributes, $block );

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

nextora_google_maps_enqueue_view_script();

if ( $is_api_mode && function_exists( 'nextora_google_maps_enqueue_sdk' ) ) {
	nextora_google_maps_enqueue_sdk();
}
?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php if ( 'iframe' === $map_mode ) : ?>
		<?php
		$iframe_src = nextora_google_maps_build_iframe_src(
			$address,
			$lat,
			$lng,
			$zoom,
			$api_key,
			$show_controls,
		);
		?>
		<iframe
			class="nextora-google-maps__iframe"
			src="<?php echo esc_url( $iframe_src ); ?>"
			width="100%"
			height="100%"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="<?php echo $map_aria_label; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>"
		></iframe>
	<?php else : ?>
		<?php if ( '' === $api_key ) : ?>
			<p class="nextora-google-maps__fallback">
				<?php echo esc_html__( 'Google Maps API key is not configured.', 'nextora' ); ?>
			</p>
		<?php else : ?>
			<div
				class="nextora-google-maps__canvas"
				role="img"
				aria-label="<?php echo $map_aria_label; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>"
			></div>
		<?php endif; ?>
	<?php endif; ?>
</div>
