<?php
/**
 * Text Reveal Animation — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes defined in block.json.
 * @var string               $content    Inner blocks HTML (empty for this block).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

$rows = $attributes['rows'] ?? array();
if ( ! is_array( $rows ) || empty( $rows ) ) {
	return;
}

$heading_font_family_raw = sanitize_text_field( (string) ( $attributes['headingFontFamily'] ?? '' ) );
$font_weight             = sanitize_text_field( (string) ( $attributes['fontWeight'] ?? '700' ) );
$text_transform          = sanitize_text_field( (string) ( $attributes['textTransform'] ?? 'uppercase' ) );
$letter_spacing          = (int) ( $attributes['letterSpacing'] ?? 6 );
$line_height             = (float) ( $attributes['lineHeight'] ?? 1.0 );
$max_width               = sanitize_text_field( (string) ( $attributes['maxWidth'] ?? '100%' ) );
$row_gap                 = absint( $attributes['rowGap'] ?? 0 );
$element_gap             = absint( $attributes['elementGap'] ?? 20 );
$image_height            = absint( $attributes['imageHeight'] ?? 150 );
$image_border_radius     = absint( $attributes['imageBorderRadius'] ?? 16 );
$show_dividers           = ! isset( $attributes['showDividers'] ) || (bool) $attributes['showDividers'];
$divider_style           = sanitize_text_field( (string) ( $attributes['dividerStyle'] ?? 'solid' ) );
$divider_width           = absint( $attributes['dividerWidth'] ?? 1 );
$divider_opacity         = (float) ( $attributes['dividerOpacity'] ?? 0.3 );
$enable_scroll           = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];
$text_reveal_duration    = (float) ( $attributes['textRevealDuration'] ?? 2.4 );
$image_duration          = (float) ( $attributes['imageRevealDuration'] ?? 1.0 );
$text_scale_y            = (float) ( $attributes['textScaleY'] ?? 1.35 );

if ( ! function_exists( 'nextora_tra_resolve_font_family' ) ) {
	/**
	 * Preset slug or custom font-family stack → CSS font-family value.
	 */
	function nextora_tra_resolve_font_family( string $raw ): string {
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

if ( ! function_exists( 'nextora_tra_resolve_color' ) ) {
	/**
	 * Resolves color string into CSS value (hex, preset var, etc.).
	 */
	function nextora_tra_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		if ( 'transparent' === $raw ) {
			return 'transparent';
		}

		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $m ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $m[1] ) ) . ')';
		}

		// 8-digit hex with alpha — MUST come before sanitize_hex_color()
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}

		$hex = sanitize_hex_color( $raw );
		if ( is_string( $hex ) && '' !== $hex ) {
			return $hex;
		}

		if ( preg_match( '/^[a-z0-9-]+$/i', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $raw ) ) . ')';
		}

		return '';
	}
}

$heading_font_family = nextora_tra_resolve_font_family( $heading_font_family_raw );
$text_color          = nextora_tra_resolve_color( (string) ( $attributes['textColor'] ?? '' ) );
$reveal_cover        = nextora_tra_resolve_color( (string) ( $attributes['revealCoverColor'] ?? '' ) );
$divider_color       = nextora_tra_resolve_color( (string) ( $attributes['dividerColor'] ?? '' ) );

if ( '' === $text_color ) {
	$text_color = '#B5A789';
}
if ( '' === $reveal_cover ) {
	$reveal_cover = 'var(--wp--preset--color--base, #EBE6DC)';
}
if ( '' === $divider_color ) {
	$divider_color = 'rgba(196, 187, 166, 0.3)';
}

$inline_styles = array();
if ( '' !== $heading_font_family ) {
	$inline_styles[] = '--nextora-tra-heading-font-family: ' . $heading_font_family;
}
$inline_styles[] = '--tra-text-color: ' . $text_color;
$inline_styles[] = '--tra-cover-color: ' . $reveal_cover;
$inline_styles[] = '--tra-divider-color: ' . $divider_color;
$inline_styles[] = '--tra-font-weight: ' . $font_weight;
$inline_styles[] = '--tra-text-scale-y: ' . $text_scale_y;
$inline_styles[] = '--tra-text-transform: ' . $text_transform;
$inline_styles[] = '--tra-letter-spacing: ' . $letter_spacing . 'px';
$inline_styles[] = '--tra-line-height: ' . $line_height;
$inline_styles[] = '--tra-max-width: ' . $max_width;
$inline_styles[] = '--tra-row-gap: ' . $row_gap . 'px';
$inline_styles[] = '--tra-element-gap: ' . $element_gap . 'px';
$inline_styles[] = '--tra-img-height: ' . $image_height . 'px';
$inline_styles[] = '--tra-img-radius: ' . $image_border_radius . 'px';
$inline_styles[] = '--tra-divider-style: ' . $divider_style;
$inline_styles[] = '--tra-divider-width: ' . $divider_width . 'px';
$inline_styles[] = '--tra-divider-opacity: ' . $divider_opacity;
$inline_styles[] = '--tra-reveal-duration: ' . $text_reveal_duration . 's';
$inline_styles[] = '--tra-img-duration: ' . $image_duration . 's';

$custom_style = implode( '; ', $inline_styles );

$wrapper_classes = array( 'wp-block-nextora-text-reveal-animation', 'nextora-tra' );
if ( '' !== $heading_font_family ) {
	$wrapper_classes[] = 'nextora-tra--has-heading-font';
}
if ( ! $enable_scroll ) {
	$wrapper_classes[] = 'is-revealed';
}

$wrapper_args = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $custom_style,
);

if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

$theme_uri = get_template_directory_uri();
$placeholder_landscape = $theme_uri . '/assets/images/placeholder/general-img-landscape.png';
$placeholder_square    = $theme_uri . '/assets/images/placeholder/general-img-square.png';

// Scattered delay sequence from original HTML/CSS
$scattered_delays = array(
	1.1, 1.2, 0.4, 1.3, 0.6, 0.1, 1.0, 1.4, 0.3, 0.5, 0.7, 0.8, 1.5, 0.9, 1.1, 1.4, 1.2, 1.0,
);
$scattered_count = count( $scattered_delays );

$row_count = count( $rows );
?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="nextora-tra__container">
		<?php foreach ( $rows as $r_idx => $row ) : ?>
			<?php
			if ( ! is_array( $row ) ) {
				continue;
			}
			$elements     = is_array( $row['elements'] ?? null ) ? $row['elements'] : array();
			$row_align    = sanitize_html_class( (string) ( $row['rowAlign'] ?? 'center' ) );
			$is_last      = ( $r_idx === $row_count - 1 );
			$show_divider = $show_dividers && ( ! isset( $row['showDivider'] ) || (bool) $row['showDivider'] ) && ! $is_last;
			$char_counter = 0;
			?>
			<div class="nextora-tra__row-wrapper nextora-tra__row-wrapper--align-<?php echo esc_attr( $row_align ); ?>">
				<div class="nextora-tra__row">
					<div class="nextora-tra__text">
						<?php foreach ( $elements as $e_idx => $el ) : ?>
							<?php
							if ( ! is_array( $el ) ) {
								continue;
							}
							$type  = (string) ( $el['type'] ?? 'text' );
							$el_id = (string) ( $el['id'] ?? '' );
							?>

							<?php if ( 'text' === $type ) : ?>
								<?php
								$text = (string) ( $el['text'] ?? '' );
								if ( '' === $text ) {
									continue;
								}
								$link_url    = isset( $el['linkUrl'] ) ? esc_url( (string) $el['linkUrl'] ) : '';
								$link_target = ( ( $el['linkTarget'] ?? '_self' ) === '_blank' ) ? '_blank' : '_self';

								$el_text_color     = isset( $el['textColor'] ) ? nextora_tra_resolve_color( (string) $el['textColor'] ) : '';
								$custom_char_style = '' !== $el_text_color ? 'color: ' . $el_text_color . ';' : '';

								/** @var list<string> $chars */
								$chars = function_exists( 'mb_str_split' )
									? mb_str_split( $text, 1, 'UTF-8' )
									: preg_split( '//u', $text, -1, PREG_SPLIT_NO_EMPTY );
								if ( false === $chars ) {
									$chars = str_split( $text );
								}
								?>
								<?php if ( ! empty( $link_url ) ) : ?>
									<a href="<?php echo esc_url( $link_url ); ?>" class="nextora-tra__link" target="<?php echo esc_attr( $link_target ); ?>" <?php echo '_blank' === $link_target ? 'rel="noopener noreferrer"' : ''; ?>>
								<?php endif; ?>

								<?php foreach ( $chars as $char ) : ?>
									<?php
									$delay = $scattered_delays[ $char_counter % $scattered_count ];
									$char_counter++;
									$display_char = ( ' ' === $char ) ? "\u{00A0}" : $char;
									$char_inline  = '--char-delay: ' . $delay . 's;' . ( '' !== $custom_char_style ? ' ' . $custom_char_style : '' );
									?>
									<span class="nextora-tra__char" style="<?php echo esc_attr( $char_inline ); ?>"><?php echo esc_html( $display_char ); ?></span>
								<?php endforeach; ?>

								<?php if ( ! empty( $link_url ) ) : ?>
									</a>
								<?php endif; ?>

							<?php elseif ( 'image' === $type ) : ?>
								<?php
								$img_id     = absint( $el['imageId'] ?? 0 );
								$img_url    = (string) ( $el['imageUrl'] ?? '' );
								$img_alt    = (string) ( $el['imageAlt'] ?? '' );
								$anim_style = sanitize_html_class( (string) ( $el['animationStyle'] ?? 'curtain' ) );
								$img_width  = absint( $el['imageWidth'] ?? 200 );

								// Slot classes and delays matching HTML demo
								$slot_class = '';
								$slot_delay = '0.5s';
								$is_small   = false;

								if ( 0 === $r_idx && 0 === $e_idx ) {
									$slot_class = 'i1';
									$slot_delay = '1.0s';
								} elseif ( 0 === $r_idx ) {
									$slot_class = 'i2';
									$slot_delay = '1.5s';
								} elseif ( 1 === $r_idx ) {
									$slot_class = 'center nextora-tra__img-wrap--center';
									$slot_delay = '0.6s';
								} elseif ( 2 === $r_idx && 0 === $e_idx ) {
									$slot_class = 'small i3 nextora-tra__img-wrap--small';
									$slot_delay = '1.2s';
									$is_small   = true;
								} elseif ( 2 === $r_idx ) {
									$slot_class = 'small i4 nextora-tra__img-wrap--small';
									$slot_delay = '0.8s';
									$is_small   = true;
								}

								if ( empty( $img_url ) && $img_id > 0 ) {
									$src = wp_get_attachment_image_url( $img_id, 'large' );
									if ( $src ) {
										$img_url = $src;
									}
									if ( empty( $img_alt ) ) {
										$img_alt = (string) get_post_meta( $img_id, '_wp_attachment_image_alt', true );
									}
								}

								// Fallback to general placeholder image if empty
								if ( empty( $img_url ) ) {
									$img_url = $is_small ? $placeholder_square : $placeholder_landscape;
								}

								$wrap_classes = array( 'nextora-tra__img-wrap' );
								if ( ! empty( $slot_class ) ) {
									$wrap_classes[] = $slot_class;
								}
								if ( 'expand' === $anim_style && ! str_contains( $slot_class, 'center' ) ) {
									$wrap_classes[] = 'nextora-tra__img-wrap--expand';
								}

								$wrap_style = array(
									'--tra-img-custom-width: ' . $img_width,
									'--tra-el-width: ' . $img_width . 'px',
									'--img-delay: ' . $slot_delay,
								);
								?>
								<div class="<?php echo esc_attr( implode( ' ', $wrap_classes ) ); ?>" style="<?php echo esc_attr( implode( '; ', $wrap_style ) ); ?>">
									<img
										src="<?php echo esc_url( $img_url ); ?>"
										alt="<?php echo esc_attr( $img_alt ); ?>"
										class="nextora-tra__img"
										loading="lazy"
									/>
								</div>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				</div>

				<?php if ( $show_divider ) : ?>
					<?php $divider_delay = sprintf( '%.1fs', 0.4 + (float) $r_idx * 0.3 ); ?>
					<hr class="nextora-tra__divider" style="--tra-divider-delay: <?php echo esc_attr( $divider_delay ); ?>;" />
				<?php endif; ?>
			</div>
		<?php endforeach; ?>
	</div>
</div>
