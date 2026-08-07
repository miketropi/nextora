<?php
/**
 * Scrolling promotion marquee — server render (CSS loop, duplicated items).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

$lucide_path = __DIR__ . '/../advanced-icon/lucide.php';
if ( is_readable( $lucide_path ) ) {
	require_once $lucide_path;
}

if ( ! function_exists( 'nextora_scrolling_promotion_enqueue_view_script' ) ) {
	/**
	 * Ensure the block view script is queued (marquee loop fill).
	 *
	 * Dynamic blocks with a PHP render callback do not always get viewScript
	 * auto-enqueued on the front end.
	 */
	function nextora_scrolling_promotion_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/scrolling-promotion' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/scrolling-promotion/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/scrolling-promotion/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-scrolling-promotion-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-scrolling-promotion-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-scrolling-promotion-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_scrolling_promotion_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
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

if ( ! function_exists( 'nextora_scrolling_promotion_get_color_attr' ) ) {
	/**
	 * Read a color from block attributes or nested style.color (block toolbar).
	 *
	 * @param array<string, mixed> $attributes Block attributes.
	 */
	function nextora_scrolling_promotion_get_color_attr( array $attributes, string $attribute_key ): string {
		$raw = isset( $attributes[ $attribute_key ] ) ? trim( (string) $attributes[ $attribute_key ] ) : '';
		if ( '' !== $raw ) {
			return nextora_scrolling_promotion_resolve_color( $raw );
		}

		$style = isset( $attributes['style'] ) && is_array( $attributes['style'] ) ? $attributes['style'] : array();
		$color = isset( $style['color'] ) && is_array( $style['color'] ) ? $style['color'] : array();

		if ( 'textColor' === $attribute_key && isset( $color['text'] ) ) {
			return nextora_scrolling_promotion_resolve_color( (string) $color['text'] );
		}

		if ( 'backgroundColor' === $attribute_key && isset( $color['background'] ) ) {
			return nextora_scrolling_promotion_resolve_color( (string) $color['background'] );
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_render_separator' ) ) {
	/**
	 * @param string               $type   dot|dash|pipe|star|custom|none.
	 * @param string               $custom Custom character.
	 * @param array<string, mixed> $atts   Block attributes for classes.
	 */
	function nextora_scrolling_promotion_render_separator( string $type, string $custom, array $atts ): string {
		if ( 'none' === $type ) {
			return '';
		}

		$classes = array( 'nextora-scrolling-promotion__sep' );
		if ( in_array( $type, array( 'dash', 'pipe', 'star', 'custom' ), true ) ) {
			$classes[] = 'nextora-scrolling-promotion__sep--' . $type;
		}

		$class_str = esc_attr( implode( ' ', $classes ) );

		if ( 'star' === $type ) {
			return '<span class="' . $class_str . '" aria-hidden="true">✦</span>';
		}
		if ( 'custom' === $type ) {
			$char = '' !== trim( $custom ) ? $custom : '✦';
			return '<span class="' . $class_str . '" aria-hidden="true">' . esc_html( $char ) . '</span>';
		}

		return '<span class="' . $class_str . '" aria-hidden="true"></span>';
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_normalize_item_type' ) ) {
	/**
	 * @param array<string, mixed> $item Raw item from attributes.
	 */
	function nextora_scrolling_promotion_normalize_item_type( array $item ): string {
		$type = isset( $item['itemType'] ) ? (string) $item['itemType'] : 'text';
		if ( in_array( $type, array( 'text', 'image', 'text-image', 'icon-text' ), true ) ) {
			return $type;
		}
		return 'text';
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_item_has_content' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized item row.
	 */
	function nextora_scrolling_promotion_item_has_content( array $item ): bool {
		$type = isset( $item['itemType'] ) ? (string) $item['itemType'] : 'text';
		$text = isset( $item['text'] ) ? trim( (string) $item['text'] ) : '';

		if ( 'text' === $type ) {
			return '' !== $text;
		}

		$image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
		$image_url = isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '';

		if ( 'image' === $type ) {
			return $image_id > 0 || '' !== $image_url;
		}

		if ( 'icon-text' === $type ) {
			$icon_name = isset( $item['iconName'] ) ? trim( (string) $item['iconName'] ) : '';
			return '' !== $text && '' !== $icon_name;
		}

		return '' !== $text || $image_id > 0 || '' !== $image_url;
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_media_inline_style' ) ) {
	/**
	 * Inline sizing for logo / image items (overrides attachment width/height attrs).
	 */
	function nextora_scrolling_promotion_media_inline_style( int $image_height ): string {
		$image_height = max( 16, min( 120, $image_height ) );

		return sprintf(
			'height:%1$dpx;width:auto;object-fit:contain',
			$image_height,
		);
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_render_item_image' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized item row.
	 */
	function nextora_scrolling_promotion_render_item_image( array $item, int $image_height ): string {
		$image_id    = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
		$image_url   = isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '';
		$image_alt   = isset( $item['imageAlt'] ) ? trim( (string) $item['imageAlt'] ) : '';
		$inline_style = nextora_scrolling_promotion_media_inline_style( $image_height );

		if ( $image_id > 0 ) {
			$alt = $image_alt;
			if ( '' === $alt ) {
				$alt = (string) get_post_meta( $image_id, '_wp_attachment_image_alt', true );
			}

			$filter = static function ( array $attr ) use ( $inline_style ): array {
				unset( $attr['width'], $attr['height'] );
				$attr['style'] = $inline_style;

				return $attr;
			};
			add_filter( 'wp_get_attachment_image_attributes', $filter );

			$html = wp_get_attachment_image(
				$image_id,
				'full',
				false,
				array(
					'class'    => 'nextora-scrolling-promotion__media',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
					'style'    => $inline_style,
				),
			);

			remove_filter( 'wp_get_attachment_image_attributes', $filter );

			if ( is_string( $html ) && '' !== $html ) {
				return $html;
			}
		}

		if ( '' === $image_url ) {
			return '';
		}

		return sprintf(
			'<img class="nextora-scrolling-promotion__media" src="%1$s" alt="%2$s" style="%3$s" loading="lazy" decoding="async" />',
			esc_url( $image_url ),
			esc_attr( $image_alt ),
			esc_attr( $inline_style ),
		);
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_render_item_body' ) ) {
	/**
	 * @param array<string, mixed> $item Normalized item row.
	 */
	function nextora_scrolling_promotion_render_item_body( array $item, int $image_height ): string {
		$type = isset( $item['itemType'] ) ? (string) $item['itemType'] : 'text';
		$text = isset( $item['text'] ) ? trim( (string) $item['text'] ) : '';
		$img  = nextora_scrolling_promotion_render_item_image( $item, $image_height );

		$parts = array();

		if ( 'image' === $type ) {
			if ( '' !== $img ) {
				$parts[] = $img;
			}
			return implode( '', $parts );
		}

		if ( 'icon-text' === $type ) {
			$icon_name = isset( $item['iconName'] ) ? trim( (string) $item['iconName'] ) : '';
			$icon_size = isset( $item['iconSize'] ) ? (int) $item['iconSize'] : 24;
			$icon_size = max( 12, min( 48, $icon_size ) );
			$icon_html = '';

			if ( '' !== $icon_name && function_exists( 'nextora_get_lucide_svg' ) ) {
				$icon_html = nextora_get_lucide_svg( $icon_name, $icon_size, 'currentColor', 2, '' );
			}

			$inner = '';
			if ( '' !== $icon_html ) {
				$inner .= $icon_html;
			}
			if ( '' !== $text ) {
				$inner .= '<span class="nextora-scrolling-promotion__text">' . esc_html( $text ) . '</span>';
			}
			if ( '' === $inner ) {
				return '';
			}
			return '<span class="nextora-scrolling-promotion__item-body nextora-scrolling-promotion__item-body--icon-text">' . $inner . '</span>';
		}

		if ( 'text-image' === $type ) {
			$inner = '';
			if ( '' !== $img ) {
				$inner .= $img;
			}
			if ( '' !== $text ) {
				$inner .= '<span class="nextora-scrolling-promotion__text">' . esc_html( $text ) . '</span>';
			}
			if ( '' === $inner ) {
				return '';
			}
			return '<span class="nextora-scrolling-promotion__item-body nextora-scrolling-promotion__item-body--text-image">' . $inner . '</span>';
		}

		if ( '' === $text ) {
			return '';
		}

		return '<span class="nextora-scrolling-promotion__text">' . esc_html( $text ) . '</span>';
	}
}

if ( ! function_exists( 'nextora_scrolling_promotion_render_items' ) ) {
	/**
	 * @param list<array<string, mixed>> $items       Promotion items.
	 * @param bool                       $aria_hidden Duplicate set for screen readers.
	 * @param array<string, mixed>       $attributes  Block attributes.
	 */
	function nextora_scrolling_promotion_render_items( array $items, bool $aria_hidden, array $attributes ): string {
		$type   = isset( $attributes['separatorType'] ) ? (string) $attributes['separatorType'] : 'dot';
		$custom = isset( $attributes['customSeparator'] ) ? (string) $attributes['customSeparator'] : '✦';
		$sep    = nextora_scrolling_promotion_render_separator( $type, $custom, $attributes );
		$out    = '';

		$image_height = isset( $attributes['imageHeight'] ) ? (int) $attributes['imageHeight'] : 32;
		$image_height = max( 16, min( 120, $image_height ) );

		foreach ( $items as $item ) {
			if ( ! nextora_scrolling_promotion_item_has_content( $item ) ) {
				continue;
			}

			$item_type   = isset( $item['itemType'] ) ? (string) $item['itemType'] : 'text';
			$body        = nextora_scrolling_promotion_render_item_body( $item, $image_height );
			$hidden_attr = $aria_hidden ? ' aria-hidden="true"' : '';
			$item_class  = 'nextora-scrolling-promotion__item nextora-scrolling-promotion__item--' . sanitize_html_class( $item_type );

			$out .= '<span class="' . esc_attr( $item_class ) . '"' . $hidden_attr . '>';
			$out .= $sep;
			$out .= $body;
			$out .= '</span>';
		}

		return $out;
	}
}

$raw_items = isset( $attributes['items'] ) && is_array( $attributes['items'] ) ? $attributes['items'] : array();
$items     = array();

foreach ( $raw_items as $item ) {
	if ( ! is_array( $item ) ) {
		continue;
	}
	$normalized = array(
		'itemType' => nextora_scrolling_promotion_normalize_item_type( $item ),
		'text'     => isset( $item['text'] ) ? trim( (string) $item['text'] ) : '',
		'imageId'  => isset( $item['imageId'] ) ? (int) $item['imageId'] : 0,
		'imageUrl' => isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '',
		'imageAlt' => isset( $item['imageAlt'] ) ? trim( (string) $item['imageAlt'] ) : '',
		'iconName' => isset( $item['iconName'] ) ? trim( (string) $item['iconName'] ) : '',
		'iconSize' => isset( $item['iconSize'] ) ? (int) $item['iconSize'] : 24,
	);
	if ( nextora_scrolling_promotion_item_has_content( $normalized ) ) {
		$items[] = $normalized;
	}
}

if ( array() === $items ) {
	$items[] = array(
		'itemType' => 'text',
		'text'     => __( 'Your promotion here', 'nextora' ),
		'imageId'  => 0,
		'imageUrl' => '',
		'imageAlt' => '',
		'iconName' => '',
		'iconSize' => 24,
	);
}

$direction = isset( $attributes['direction'] ) && 'right' === $attributes['direction'] ? 'right' : 'left';
$speed     = isset( $attributes['speed'] ) ? (float) $attributes['speed'] : 30.0;
$speed     = max( 5.0, min( 120.0, $speed ) );

$pause_on_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];

$font_size = isset( $attributes['fontSize'] ) ? (int) $attributes['fontSize'] : 16;
$font_size = max( 12, min( 72, $font_size ) );

$font_weight = isset( $attributes['fontWeight'] ) ? (string) $attributes['fontWeight'] : '500';
$allowed_fw  = array( '400', '500', '600', '700', '800', '900' );
if ( ! in_array( $font_weight, $allowed_fw, true ) ) {
	$font_weight = '500';
}

$text_transform = isset( $attributes['textTransform'] ) ? (string) $attributes['textTransform'] : 'none';
$allowed_tt     = array( 'none', 'uppercase', 'lowercase', 'capitalize' );
if ( ! in_array( $text_transform, $allowed_tt, true ) ) {
	$text_transform = 'none';
}

$letter_spacing = isset( $attributes['letterSpacing'] ) ? (float) $attributes['letterSpacing'] : 0.0;
$letter_spacing = max( 0.0, min( 10.0, $letter_spacing ) );

$padding_vertical = isset( $attributes['paddingVertical'] ) ? (int) $attributes['paddingVertical'] : 16;
$padding_vertical = max( 0, min( 60, $padding_vertical ) );

$item_gap = isset( $attributes['itemGap'] ) ? (int) $attributes['itemGap'] : 40;
$item_gap = max( 16, min( 120, $item_gap ) );

$image_height = isset( $attributes['imageHeight'] ) ? (int) $attributes['imageHeight'] : 32;
$image_height = max( 16, min( 120, $image_height ) );

$separator_size = isset( $attributes['separatorSize'] ) ? (int) $attributes['separatorSize'] : 6;
$separator_size = max( 4, min( 16, $separator_size ) );

$show_borders = ! empty( $attributes['showBorders'] );
$border_width = isset( $attributes['borderWidth'] ) ? (int) $attributes['borderWidth'] : 1;
$border_width = max( 1, min( 3, $border_width ) );

$text_color = nextora_scrolling_promotion_get_color_attr( $attributes, 'textColor' );
$bg_color   = nextora_scrolling_promotion_get_color_attr( $attributes, 'backgroundColor' );
$sep_color  = nextora_scrolling_promotion_resolve_color(
	isset( $attributes['separatorColor'] ) ? (string) $attributes['separatorColor'] : '',
);
$border_color = nextora_scrolling_promotion_resolve_color(
	isset( $attributes['borderColor'] ) ? (string) $attributes['borderColor'] : '',
);

nextora_scrolling_promotion_enqueue_view_script();

$aria_label = isset( $attributes['ariaLabel'] ) ? trim( (string) $attributes['ariaLabel'] ) : '';
if ( '' === $aria_label ) {
	$aria_label = __( 'Promotional announcements', 'nextora' );
}
$aria_label = (string) apply_filters( 'nextora_scrolling_promotion_aria_label', $aria_label, $attributes );

/** @var list<array<string, mixed>> $items */
$items = array_values( (array) apply_filters( 'nextora_scrolling_promotion_items', $items, $attributes ) );

$css_vars = array(
	'--nextora-marquee-bg'              => '' !== $bg_color ? $bg_color : 'transparent',
	'--nextora-marquee-text'            => '' !== $text_color ? $text_color : 'inherit',
	'--nextora-marquee-font-size'       => 'clamp(0.875rem, 2.5vw, ' . $font_size . 'px)',
	'--nextora-marquee-font-weight'     => $font_weight,
	'--nextora-marquee-text-transform'  => $text_transform,
	'--nextora-marquee-letter-spacing'  => $letter_spacing . 'px',
	'--nextora-marquee-padding'         => $padding_vertical . 'px',
	'--nextora-marquee-gap'             => $item_gap . 'px',
	'--nextora-marquee-image-height'    => $image_height . 'px',
	'--nextora-marquee-speed'           => $speed . 's',
	'--nextora-marquee-sep-size'        => $separator_size . 'px',
	'--nextora-marquee-sep-color'       => '' !== $sep_color ? $sep_color : 'currentColor',
	'--nextora-marquee-border-color'    => $show_borders
		? ( '' !== $border_color ? $border_color : 'currentColor' )
		: 'transparent',
	'--nextora-marquee-border-width'    => $show_borders ? $border_width . 'px' : '0px',
);

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-scrolling-promotion',
	'nextora-scrolling-promotion--dir-' . $direction,
);
if ( ! $pause_on_hover ) {
	$wrapper_classes[] = 'nextora-scrolling-promotion--no-pause-on-hover';
}

$wrapper_classes = (array) apply_filters(
	'nextora_scrolling_promotion_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $inline_style,
	'role'  => 'region',
);

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_scrolling_promotion_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

$inner_class   = 'nextora-scrolling-promotion__inner nextora-scrolling-promotion__inner--' . esc_attr( $direction );
$sequence_html = nextora_scrolling_promotion_render_items( $items, false, $attributes );
$dup_html      = nextora_scrolling_promotion_render_items( $items, true, $attributes );

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?> aria-label="<?php echo esc_attr( $aria_label ); ?>">
	<div class="nextora-scrolling-promotion__track">
		<div class="<?php echo esc_attr( $inner_class ); ?>">
			<div class="nextora-scrolling-promotion__half" data-nextora-marquee-half="primary">
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_html().
				echo $sequence_html;
				?>
			</div>
			<div class="nextora-scrolling-promotion__half" data-nextora-marquee-half="duplicate" aria-hidden="true">
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_html().
				echo $dup_html;
				?>
			</div>
		</div>
	</div>
</div>
