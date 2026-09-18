<?php
/**
 * Vertical Showcase dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes.
 */

declare( strict_types=1 );

$items = $attributes['items'] ?? array();
if ( ! is_array( $items ) || empty( $items ) ) {
	return;
}

if ( ! function_exists( 'nextora_vertical_showcase_normalize_font_size' ) ) {
	/**
	 * Normalizes a font-size shorthand or preset name to standard Gutenberg size slug.
	 */
	function nextora_vertical_showcase_normalize_font_size( string $size ): string {
		$size = strtolower( trim( $size ) );
		$map  = array(
			'sm'          => 'small',
			'small'       => 'small',
			'base'        => 'base',
			'normal'      => 'base',
			'md'          => 'medium',
			'medium'      => 'medium',
			'medium-plus' => 'medium-plus',
			'lg'          => 'large',
			'large'       => 'large',
			'xl'          => 'x-large',
			'x-large'     => 'x-large',
			'2xl'         => 'xx-large',
			'xx-large'    => 'xx-large',
		);
		return $map[ $size ] ?? '';
	}
}

if ( ! function_exists( 'nextora_vertical_showcase_get_color_props' ) ) {
	/**
	 * Resolves a stored color attribute into standard Gutenberg classes and inline style.
	 * Compliant with Section 2.C & 2.D of gutenberg-block-standard.
	 *
	 * @param string $color Attribute value (slug, preset string, or hex/rgb).
	 * @param string $type  'color' (for text), 'background', or 'border'.
	 *
	 * @return array{class: string, style: string, slug: string, value: string}
	 */
	function nextora_vertical_showcase_get_color_props( string $color, string $type = 'color' ): array {
		$color = trim( $color );
		if ( '' === $color ) {
			return array( 'class' => '', 'style' => '', 'slug' => '', 'value' => '' );
		}

		// 1. Transparent keyword or zero-alpha custom color
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

		// 2. Preset slug 'transparent'
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

		// 3. Border color
		if ( 'border' === $type ) {
			$val = '' !== $slug ? 'var(--wp--preset--color--' . $slug . ')' : $color;
			return array(
				'class' => '',
				'style' => 'border-color:' . esc_attr( $val ) . ';',
				'slug'  => $slug,
				'value' => $val,
			);
		}

		// 4. Palette preset color
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

		// 5. Custom hex / rgb / hsl
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

if ( ! function_exists( 'nextora_vertical_showcase_resolve_color' ) ) {
	/**
	 * Resolves a stored color attribute into a valid CSS expression for CSS variables.
	 */
	function nextora_vertical_showcase_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if (
			'transparent' === $raw ||
			'rgba(0, 0, 0, 0)' === $raw ||
			'rgba(0,0,0,0)' === $raw ||
			preg_match( '/^#[0-9a-fA-F]{6}00$/i', $raw ) ||
			preg_match( '/^#[0-9a-fA-F]{3}0$/i', $raw )
		) {
			return 'transparent';
		}
		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $matches ) ) {
			if ( 'transparent' === strtolower( $matches[1] ) ) {
				return 'transparent';
			}
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $matches[1] ) ) . ')';
		}
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9_-]+$/i', $raw ) ) {
			if ( 'transparent' === strtolower( $raw ) ) {
				return 'transparent';
			}
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $raw ) ) . ')';
		}
		return '';
	}
}

$title_size       = nextora_vertical_showcase_normalize_font_size( (string) ( $attributes['titleSize'] ?? '' ) );
$description_size = nextora_vertical_showcase_normalize_font_size( (string) ( $attributes['descriptionSize'] ?? '' ) );
$autoplay         = ! empty( $attributes['autoplay'] );
$show_view_more   = ! isset( $attributes['showViewMore'] ) || ! empty( $attributes['showViewMore'] );
$show_arrows      = ! isset( $attributes['showArrows'] ) || ! empty( $attributes['showArrows'] );
$duration         = max( 2000, min( 15000, absint( $attributes['autoplayDuration'] ?? 5000 ) ) );
$scroll_animation = ! isset( $attributes['enableScrollAnimation'] ) || ! empty( $attributes['enableScrollAnimation'] );

$desc_color_props   = nextora_vertical_showcase_get_color_props( (string) ( $attributes['descriptionColor'] ?? '' ), 'color' );
$number_color_props = nextora_vertical_showcase_get_color_props( (string) ( $attributes['numberColor'] ?? '' ), 'color' );
$btn_color_props    = nextora_vertical_showcase_get_color_props( (string) ( $attributes['buttonColor'] ?? '' ), 'color' );

$css_vars = array(
	'--nextora-vs-autoplay-duration: ' . $duration . 'ms',
);

$color_map = array(
	'titleColor'           => '--nextora-vs-title-color',
	'inactiveTitleColor'   => '--nextora-vs-inactive-title-color',
	'activeIndicatorColor' => '--nextora-vs-active-indicator',
);
foreach ( $color_map as $attribute => $variable ) {
	$raw = (string) ( $attributes[ $attribute ] ?? '' );
	if ( '' !== $raw ) {
		$value = nextora_vertical_showcase_resolve_color( $raw );
		if ( '' !== $value ) {
			$css_vars[] = $variable . ': ' . $value;
		}
	}
}

$classes = array( 'wp-block-nextora-vertical-showcase', 'nextora-vertical-showcase--loading' );
if ( $scroll_animation ) {
	$classes[] = 'has-scroll-animation';
}
$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class'                      => implode( ' ', $classes ),
		'style'                      => implode( '; ', $css_vars ),
		'data-nextora-scroll-reveal' => $scroll_animation ? '1' : '0',
		'data-nextora-vs-autoplay'   => $autoplay ? (string) $duration : '0',
	),
);
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="nextora-vertical-showcase__grid">
		<div class="nextora-vertical-showcase__list" role="tablist" aria-label="<?php esc_attr_e( 'Showcase items', 'nextora' ); ?>">
			<?php foreach ( $items as $index => $item ) : ?>
				<?php if ( ! is_array( $item ) ) { continue; } ?>
				<?php
				$title       = sanitize_text_field( (string) ( $item['title'] ?? '' ) );
				$description = sanitize_textarea_field( (string) ( $item['description'] ?? '' ) );

				$title_classes = 'nextora-vertical-showcase__item-title';
				if ( '' !== $title_size ) {
					$title_classes .= ' has-' . sanitize_html_class( $title_size ) . '-font-size';
				}

				$desc_classes = 'nextora-vertical-showcase__item-description';
				if ( '' !== $description_size ) {
					$desc_classes .= ' has-' . sanitize_html_class( $description_size ) . '-font-size';
				}
				if ( '' !== $desc_color_props['class'] ) {
					$desc_classes .= ' ' . $desc_color_props['class'];
				}

				$num_classes = 'nextora-vertical-showcase__item-number';
				if ( '' !== $number_color_props['class'] ) {
					$num_classes .= ' ' . $number_color_props['class'];
				}

				$view_more_classes = 'nextora-vertical-showcase__view-more';
				if ( '' !== $btn_color_props['class'] ) {
					$view_more_classes .= ' ' . $btn_color_props['class'];
				}
				?>
				<button type="button" class="nextora-vertical-showcase__item<?php echo 0 === $index ? ' nextora-vertical-showcase__item--active' : ''; ?>" role="tab" aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>" data-nextora-vs-index="<?php echo esc_attr( (string) $index ); ?>">
					<span class="nextora-vertical-showcase__item-rail" aria-hidden="true"></span>
					<span class="<?php echo esc_attr( $num_classes ); ?>"<?php echo '' !== $number_color_props['style'] ? ' style="' . esc_attr( $number_color_props['style'] ) . '"' : ''; ?> aria-hidden="true">/<?php echo esc_html( str_pad( (string) ( (int) $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
					<span class="nextora-vertical-showcase__item-body">
						<h4 class="<?php echo esc_attr( $title_classes ); ?>"><?php echo esc_html( $title ); ?></h4>
						<?php
						$link                = esc_url( (string) ( $item['link'] ?? '#' ) );
						$item_show_view_more = ! isset( $item['showViewMore'] ) || ! empty( $item['showViewMore'] );
						$view_more_text      = sanitize_text_field( (string) ( $item['viewMoreText'] ?? __( 'View More', 'nextora' ) ) );
						$has_view_more       = $show_view_more && $item_show_view_more;
						$has_details         = '' !== $description || $has_view_more;
						$detail_classes      = array( 'nextora-vertical-showcase__item-details' );
						if ( '' !== $description ) {
							$detail_classes[] = 'nextora-vertical-showcase__item-details--has-description';
						}
						if ( $has_view_more ) {
							$detail_classes[] = 'nextora-vertical-showcase__item-details--has-link';
						}
						?>
						<?php if ( $has_details ) : ?><span class="<?php echo esc_attr( implode( ' ', $detail_classes ) ); ?>" data-nextora-vs-detail="<?php echo esc_attr( (string) $index ); ?>" aria-hidden="<?php echo 0 === $index ? 'false' : 'true'; ?>">
							<?php if ( '' !== $description ) : ?><span class="<?php echo esc_attr( $desc_classes ); ?>"<?php echo '' !== $desc_color_props['style'] ? ' style="' . esc_attr( $desc_color_props['style'] ) . '"' : ''; ?>><?php echo esc_html( $description ); ?></span><?php endif; ?>
							<?php if ( $has_view_more ) : ?>
								<a class="<?php echo esc_attr( $view_more_classes ); ?>"<?php echo '' !== $btn_color_props['style'] ? ' style="' . esc_attr( $btn_color_props['style'] ) . '"' : ''; ?> href="<?php echo '' !== $link ? $link : '#'; ?>"><?php echo esc_html( $view_more_text ?: __( 'View More', 'nextora' ) ); ?><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></svg></a>
							<?php endif; ?>
						</span><?php endif; ?>
					</span>
				</button>
			<?php endforeach; ?>
		</div>
		<div class="nextora-vertical-showcase__gallery" tabindex="-1">
			<div class="nextora-vertical-showcase__frame">
				<?php foreach ( $items as $index => $item ) : ?>
					<?php if ( ! is_array( $item ) ) { continue; } ?>
					<?php
					$image_id   = absint( $item['imageId'] ?? 0 );
					$image_url  = esc_url( (string) ( $item['imageUrl'] ?? '' ) );
					$image_alt  = sanitize_text_field( (string) ( $item['imageAlt'] ?? $item['title'] ?? '' ) );
					$image_html = $image_id > 0 ? wp_get_attachment_image( $image_id, 'large', false, array( 'class' => 'nextora-vertical-showcase__image', 'alt' => $image_alt, 'loading' => 0 === $index ? 'eager' : 'lazy' ) ) : '';
					if ( ! is_string( $image_html ) || '' === $image_html ) {
						$image_html = '' !== $image_url ? sprintf( '<img class="nextora-vertical-showcase__image" src="%s" alt="%s" loading="%s" />', $image_url, esc_attr( $image_alt ), 0 === $index ? 'eager' : 'lazy' ) : '';
					}
					if ( '' === $image_html ) { continue; }
					?>
					<div class="nextora-vertical-showcase__image-layer<?php echo 0 === $index ? ' nextora-vertical-showcase__image-layer--active' : ''; ?>" data-nextora-vs-image="<?php echo esc_attr( (string) $index ); ?>" aria-hidden="<?php echo 0 === $index ? 'false' : 'true'; ?>"><?php echo $image_html; ?></div>
				<?php endforeach; ?>
				<div class="nextora-vertical-showcase__image-gradient" aria-hidden="true"></div>
				<?php if ( $show_arrows ) : ?><div class="nextora-vertical-showcase__controls">
					<button type="button" class="nextora-vertical-showcase__arrow nextora-vertical-showcase__arrow--prev" aria-label="<?php esc_attr_e( 'Previous showcase item', 'nextora' ); ?>"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg></button>
					<button type="button" class="nextora-vertical-showcase__arrow nextora-vertical-showcase__arrow--next" aria-label="<?php esc_attr_e( 'Next showcase item', 'nextora' ); ?>"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></button>
				</div><?php endif; ?>
			</div>
		</div>
	</div>
</div>
