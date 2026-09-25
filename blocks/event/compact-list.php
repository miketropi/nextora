<?php
/**
 * Isolated Compact List template renderer for Event block.
 *
 * @package Nextora
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_event_decode_text' ) ) {
	/**
	 * Decode escaped unicode sequences and HTML entities for event text.
	 *
	 * @param string $text Raw text.
	 *
	 * @return string Decoded string.
	 */
	function nextora_event_decode_text( string $text ): string {
		if ( '' === $text ) {
			return '';
		}
		if ( str_contains( $text, '\u' ) || str_contains( $text, 'u0026' ) || str_contains( $text, 'u0022' ) || str_contains( $text, 'u0027' ) ) {
			$text = (string) preg_replace( '/\\\\u0026|u0026/i', '&', $text );
			$text = (string) preg_replace( '/\\\\u0022|u0022/i', '"', $text );
			$text = (string) preg_replace( '/\\\\u0027|u0027/i', "'", $text );
			$text = (string) preg_replace( '/\\\\u003c|u003c/i', '<', $text );
			$text = (string) preg_replace( '/\\\\u003e|u003e/i', '>', $text );
		}
		return html_entity_decode( $text, ENT_QUOTES | ENT_HTML5, 'UTF-8' );
	}
}

/**
 * Render the isolated fourth template without changing legacy template defaults.
 *
 * @param array<int, array<string, mixed>> $events          Normalized event records.
 * @param array<string, mixed>             $attributes      Block attributes.
 * @param callable                         $get_color_props Existing block color helper.
 * @param callable                         $resolve_color   Existing block CSS color resolver.
 */
function nextora_event_render_compact_list( array $events, array $attributes, callable $get_color_props, callable $resolve_color ): string {
	$show_date     = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
	$show_image    = ! isset( $attributes['showImage'] ) || (bool) $attributes['showImage'];
	$show_location = ! isset( $attributes['showLocation'] ) || (bool) $attributes['showLocation'];
	$show_time     = ! isset( $attributes['showTime'] ) || (bool) $attributes['showTime'];
	$show_desc     = ! isset( $attributes['showDescription'] ) || (bool) $attributes['showDescription'];
	$show_register = ! isset( $attributes['showRegisterButton'] ) || (bool) $attributes['showRegisterButton'];
	$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

	$value = static function ( string $key, string $fallback = '' ) use ( $attributes ): string {
		$raw = isset( $attributes[ $key ] ) ? trim( (string) $attributes[ $key ] ) : '';
		return '' !== $raw ? $raw : $fallback;
	};

	$props = static function ( string $name, array $colors = array(), string $size = '', string $fallback_size = '', string $extra_style = '' ) use ( $get_color_props ): string {
		$classes = array( 'nextora-event-compact__' . $name );
		$styles  = array();
		if ( '' !== $extra_style ) {
			$styles[] = $extra_style;
		}
		foreach ( $colors as $type => $color ) {
			if ( '' === trim( (string) $color ) ) {
				continue;
			}
			$resolved = $get_color_props( (string) $color, $type );
			if ( ! empty( $resolved['class'] ) ) {
				$classes[] = $resolved['class'];
			}
			if ( ! empty( $resolved['style'] ) ) {
				$styles[] = $resolved['style'];
			}
		}
		if ( '' === $size ) {
			$size = $fallback_size;
		}
		if ( '' !== $size ) {
			if ( preg_match( '/^\d+(\.\d+)?(px|rem|em|%)?$/', $size ) ) {
				$styles[] = 'font-size:' . ( is_numeric( $size ) ? $size . 'px' : $size ) . ';';
			} else {
				$aliases   = array(
					'sm'     => 'small',
					'md'     => 'medium',
					'lg'     => 'large',
					'xl'     => 'x-large',
					'2xl'    => 'xx-large',
					'normal' => 'base',
				);
				$classes[] = 'has-' . sanitize_html_class( $aliases[ $size ] ?? $size ) . '-font-size';
			}
		}
		$class_attr = 'class="' . esc_attr( implode( ' ', array_filter( $classes ) ) ) . '"';
		$style_attr = ! empty( $styles ) ? ' style="' . esc_attr( implode( '', $styles ) ) . '"' : '';
		return $class_attr . $style_attr;
	};

	$hover_style = '';
	foreach ( array( 'registerHoverBackgroundColor' => 'bg', 'registerHoverTextColor' => 'text-color', 'registerHoverBorderColor' => 'border-color' ) as $key => $suffix ) {
		if ( '' !== $value( $key ) ) {
			$hover_style .= '--nextora-event-register-hover-' . $suffix . ':' . $resolve_color( $value( $key ) ) . ';';
		}
	}

	$enable_anim = ! empty( $attributes['enableAnimation'] );
	$anim_style  = sanitize_key( (string) ( $attributes['animationStyle'] ?? 'sequential' ) );
	if ( ! in_array( $anim_style, array( 'default', 'sequential' ), true ) ) {
		$anim_style = 'sequential';
	}

	$classes = array( 'nextora-event', 'nextora-event--template4' );
	if ( $enable_anim ) {
		$classes[] = 'nextora-event--animation-' . $anim_style;
	}

	$wrapper_args = array(
		'class' => implode( ' ', $classes ),
	);
	if ( '' !== $hover_style ) {
		$wrapper_args['style'] = $hover_style;
	}
	if ( $enable_anim ) {
		$wrapper_args['data-nextora-scroll-reveal']       = '1';
		$wrapper_args['data-nextora-scroll-reveal-style'] = $anim_style;
	}
	$wrapper = get_block_wrapper_attributes( $wrapper_args );
	ob_start();
	?>
	<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>><div class="nextora-event-compact__list">
	<?php if ( empty( $events ) ) : ?>
		<p><?php esc_html_e( 'No upcoming events found.', 'nextora' ); ?></p>
	<?php endif; ?>
	<?php
	$default_pastels = array(
		array( '#f0edff', '#7063ed' ),
		array( '#e4f6ef', '#39a88c' ),
		array( '#fff0ec', '#d68571' ),
	);
	foreach ( $events as $index => $event ) :
		$title           = trim( nextora_event_decode_text( (string) ( $event['title'] ?? '' ) ) );
		$description     = trim( nextora_event_decode_text( wp_strip_all_tags( (string) ( $event['description'] ?? '' ) ) ) );
		$location        = trim( nextora_event_decode_text( (string) ( $event['location'] ?? '' ) ) );
		$time            = trim( nextora_event_decode_text( (string) ( $event['time'] ?? '' ) ) );
		$day             = trim( (string) ( $event['day'] ?? '' ) );
		$month           = trim( (string) ( $event['month'] ?? '' ) );
		$year            = trim( (string) ( $event['year'] ?? '' ) );
		$image_url       = ! empty( $event['imageId'] ) ? wp_get_attachment_image_url( (int) $event['imageId'], 'medium' ) : '';
		$image_url       = $image_url ?: (string) ( $event['imageUrl'] ?? '' );
		$url             = esc_url( (string) ( $event['linkUrl'] ?? '' ) );
		$has_custom_bg   = '' !== $value( 'registerBackgroundColor' );
		$has_custom_text = '' !== $value( 'registerTextColor' );
		$pastel_pair     = $default_pastels[ $index % 3 ];
		$background      = $has_custom_bg ? $value( 'registerBackgroundColor' ) : $pastel_pair[0];
		$foreground      = $has_custom_text ? $value( 'registerTextColor' ) : $pastel_pair[1];
		$action_vars     = '--compact-action-bg:' . $resolve_color( $background ) . ';--compact-action-color:' . $resolve_color( $foreground ) . ';--compact-action-border:' . ( $resolve_color( $value( 'registerBorderColor' ) ) ?: 'transparent' ) . ';';
		$has_meta        = ( $show_location && '' !== $location ) || ( $show_time && '' !== $time );
		?>
		<article <?php echo $props( 'item', array( 'background' => $value( 'cardBackgroundColor' ), 'border' => $value( 'cardBorderColor' ) ) ); ?>>
			<?php if ( $show_date && ( '' !== $month || '' !== $day || '' !== $year ) ) : ?>
				<div <?php echo $props( 'date', array( 'background' => $value( 'dateBackgroundColor' ) ) ); ?>>
					<?php if ( '' !== $month ) : ?><span <?php echo $props( 'month', array( 'color' => $value( 'dateAccentColor' ) ) ); ?>><?php echo esc_html( $month ); ?></span><?php endif; ?>
					<?php if ( '' !== $day ) : ?><b <?php echo $props( 'day', array( 'color' => $value( 'dateDayColor' ) ) ); ?>><?php echo esc_html( $day ); ?></b><?php endif; ?>
					<?php if ( '' !== $year ) : ?><small <?php echo $props( 'year', array( 'color' => $value( 'dateAccentColor' ) ) ); ?>><?php echo esc_html( $year ); ?></small><?php endif; ?>
				</div>
			<?php endif; ?>
			<?php if ( $show_image && '' !== $image_url ) : ?><img class="nextora-event-compact__image" src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( (string) ( $event['imageAlt'] ?? '' ) ); ?>" loading="lazy" /><?php endif; ?>
			<div class="nextora-event-compact__content">
				<h4 <?php echo $props( 'title', array( 'color' => $value( 'titleColor' ) ), $value( 'titleFontSize' ), '14px' ); ?>><?php if ( '' !== $url ) : ?><a class="nextora-event-compact__title-link" href="<?php echo $url; ?>"<?php echo '_blank' === ( $event['linkTarget'] ?? '' ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>><?php echo esc_html( $title ); ?></a><?php else : ?><?php echo esc_html( $title ); ?><?php endif; ?></h4>
				<?php if ( $has_meta ) : ?>
					<div class="nextora-event-compact__meta-row">
						<?php if ( $show_location && '' !== $location ) : ?>
							<div <?php echo $props( 'location', array( 'color' => $value( 'metaColor' ) ) ); ?>>
								<svg <?php echo $props( 'pin', array( 'color' => $value( 'metaIconColor' ) ) ); ?> viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span><?php echo esc_html( $location ); ?></span>
							</div>
						<?php endif; ?>
						<?php if ( $show_time && '' !== $time ) : ?>
							<div <?php echo $props( 'time', array( 'color' => $value( 'metaColor' ) ) ); ?>>
								<svg <?php echo $props( 'clock', array( 'color' => $value( 'metaIconColor' ) ) ); ?> viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span><?php echo esc_html( $time ); ?></span>
							</div>
						<?php endif; ?>
					</div>
				<?php endif; ?>
				<?php if ( $show_desc && '' !== $description ) : ?><p <?php echo $props( 'description', array( 'color' => $value( 'compactDescriptionColor' ) ), $value( 'descriptionFontSize' ), '12px' ); ?>><?php echo esc_html( $description ); ?></p><?php endif; ?>
			</div>
			<?php if ( $show_register && '' !== $url ) : ?>
				<a <?php echo $props( 'action', array( 'background' => $background, 'color' => $foreground, 'border' => $value( 'registerBorderColor' ) ), '', '', $action_vars ); ?> href="<?php echo $url; ?>"<?php echo '_blank' === ( $event['linkTarget'] ?? '' ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?> aria-label="<?php echo esc_attr( sprintf( __( 'View event: %s', 'nextora' ), $title ?: __( 'Event', 'nextora' ) ) ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
				</a>
			<?php endif; ?>
		</article>
	<?php endforeach; ?>
	</div></div>
	<?php
	return (string) ob_get_clean();
}
