<?php
/**
 * Arc gallery section — server render.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_arc_gallery_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color.
	 */
	function nextora_arc_gallery_resolve_color( string $raw ): string {
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

if ( ! function_exists( 'nextora_arc_gallery_rotated_span' ) ) {
	/**
	 * Mirror of arc-math.ts rotatedSpan().
	 */
	function nextora_arc_gallery_rotated_span( int $width, int $height, float $rotation_deg ): float {
		$rad = deg2rad( $rotation_deg );
		return abs( $width * cos( $rad ) ) + abs( $height * sin( $rad ) );
	}
}

if ( ! function_exists( 'nextora_arc_gallery_resolve_layout' ) ) {
	/**
	 * Mirror of arc-math.ts resolveArcLayout() — prevents overlapping frames.
	 *
	 * @return array{arc_radius: int, arc_spread: int, gallery_height: int}
	 */
	function nextora_arc_gallery_resolve_layout(
		int $count,
		int $arc_radius,
		int $arc_spread,
		int $gallery_height,
		int $image_width,
		int $image_height,
	): array {
		$gap           = 24;
		$radius_min    = 300;
		$radius_max    = 1500;
		$spread_min    = 20;
		$spread_max    = 90;
		$gallery_min   = 250;
		$gallery_max   = 600;
		$stage_padding = 16;

		$arc_radius     = max( $radius_min, min( $radius_max, $arc_radius ) );
		$arc_spread     = max( $spread_min, min( $spread_max, $arc_spread ) );
		$gallery_height = max( $gallery_min, min( $gallery_max, $gallery_height ) );

		if ( $count <= 1 ) {
			return array(
				'arc_radius'     => $arc_radius,
				'arc_spread'     => $arc_spread,
				'gallery_height' => $gallery_height,
			);
		}

		$spread_rad  = deg2rad( (float) $arc_spread );
		$half_spread = $spread_rad / 2.0;
		$max_chord   = (float) ( $image_width + $gap );

		for ( $i = 0; $i < $count - 1; $i++ ) {
			$t1   = ( $i / ( $count - 1 ) ) * 2 - 1;
			$t2   = ( ( $i + 1 ) / ( $count - 1 ) ) * 2 - 1;
			$rot1 = rad2deg( $t1 * $half_spread );
			$rot2 = rad2deg( $t2 * $half_spread );
			$chord = (
				nextora_arc_gallery_rotated_span( $image_width, $image_height, $rot1 )
				+ nextora_arc_gallery_rotated_span( $image_width, $image_height, $rot2 )
			) / 2 + $gap;
			$max_chord = max( $max_chord, $chord );
		}

		$angle_step = $spread_rad / ( $count - 1 );
		$sin_half   = sin( $angle_step / 2 );

		if ( $sin_half > 0.0001 ) {
			$chord = 2 * $arc_radius * $sin_half;
			if ( $chord < $max_chord ) {
				$required_half   = 2 * asin( min( 1.0, $max_chord / ( 2 * $arc_radius ) ) );
				$required_spread = (int) ceil( rad2deg( $required_half * ( $count - 1 ) ) );
				$arc_spread      = min( $spread_max, max( $spread_min, $required_spread ) );
			}
		}

		$half_spread_rad = deg2rad( (float) $arc_spread ) / 2;
		$y_arc_max       = $arc_radius * ( 1 - cos( $half_spread_rad ) );
		$min_gallery     = (int) ceil( $image_height + $y_arc_max + $stage_padding );

		if ( $min_gallery > $gallery_height ) {
			$gallery_height = min( $gallery_max, max( $gallery_min, $min_gallery ) );
		}

		return array(
			'arc_radius'     => $arc_radius,
			'arc_spread'     => $arc_spread,
			'gallery_height' => $gallery_height,
		);
	}
}

if ( ! function_exists( 'nextora_arc_gallery_calculate_positions' ) ) {
	/**
	 * Mirror of blocks/arc-gallery-section/arc-math.ts.
	 *
	 * @return list<array{left: string, top: string, rotation: float}>
	 */
	function nextora_arc_gallery_calculate_positions(
		int $count,
		int $arc_radius,
		int $arc_spread,
		int $gallery_height,
		int $image_width,
		int $image_height,
	): array {
		if ( $count <= 0 ) {
			return array();
		}

		$resolved = nextora_arc_gallery_resolve_layout(
			$count,
			$arc_radius,
			$arc_spread,
			$gallery_height,
			$image_width,
			$image_height,
		);

		$arc_radius     = $resolved['arc_radius'];
		$arc_spread     = $resolved['arc_spread'];
		$gallery_height = $resolved['gallery_height'];

		if ( 1 === $count ) {
			return array(
				array(
					'left'     => 'calc(50% - ' . (int) ( $image_width / 2 ) . 'px)',
					'top'      => (string) (int) round( ( $gallery_height - $image_height ) / 2 ) . 'px',
					'rotation' => 0.0,
				),
			);
		}

		$spread_rad  = deg2rad( (float) $arc_spread );
		$half_spread = $spread_rad / 2;
		$positions   = array();

		for ( $i = 0; $i < $count; $i++ ) {
			$t     = ( $i / ( $count - 1 ) ) * 2 - 1;
			$angle = $t * $half_spread;
			$x     = $arc_radius * sin( $angle );
			$y_arc = $arc_radius * ( 1 - cos( $angle ) );
			$y     = $y_arc;
			$rotation_deg = rad2deg( $angle );

			$positions[] = array(
				'left'     => 'calc(50% + ' . (int) round( $x - $image_width / 2 ) . 'px)',
				'top'      => (string) (int) round( $y ) . 'px',
				'rotation' => round( $rotation_deg, 1 ),
			);
		}

		return $positions;
	}
}

if ( ! function_exists( 'nextora_arc_gallery_arrow_icon_svg' ) ) {
	function nextora_arc_gallery_arrow_icon_svg(): string {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
	}
}

$raw_images = isset( $attributes['images'] ) && is_array( $attributes['images'] ) ? $attributes['images'] : array();
$images     = array();

foreach ( $raw_images as $item ) {
	if ( ! is_array( $item ) ) {
		continue;
	}
	$id = isset( $item['id'] ) ? absint( $item['id'] ) : 0;
	if ( ! $id || ! wp_attachment_is_image( $id ) ) {
		continue;
	}
	$images[] = array(
		'id'  => $id,
		'alt' => isset( $item['alt'] ) ? (string) $item['alt'] : '',
	);
}

/** @var list<array{id: int, alt: string}> $images */
$images = array_values( (array) apply_filters( 'nextora_arc_gallery_section_images', $images, $attributes ) );

$image_width  = isset( $attributes['imageWidth'] ) ? (int) $attributes['imageWidth'] : 220;
$image_width  = max( 120, min( 400, $image_width ) );
$image_height = isset( $attributes['imageHeight'] ) ? (int) $attributes['imageHeight'] : 280;
$image_height = max( 150, min( 500, $image_height ) );

$arc_radius = isset( $attributes['arcRadius'] ) ? (int) $attributes['arcRadius'] : 600;
$arc_radius = max( 300, min( 1500, $arc_radius ) );
$arc_spread = isset( $attributes['arcSpread'] ) ? (int) $attributes['arcSpread'] : 50;
$arc_spread = max( 20, min( 90, $arc_spread ) );

$gallery_height = isset( $attributes['galleryHeight'] ) ? (int) $attributes['galleryHeight'] : 380;
$gallery_height = max( 250, min( 600, $gallery_height ) );

$gallery_overflow = ! isset( $attributes['galleryOverflow'] ) || (bool) $attributes['galleryOverflow'];

$image_radius = isset( $attributes['imageBorderRadius'] ) ? (int) $attributes['imageBorderRadius'] : 6;
$image_radius = max( 0, min( 24, $image_radius ) );
$image_border = isset( $attributes['imageBorderWidth'] ) ? (int) $attributes['imageBorderWidth'] : 3;
$image_border = max( 0, min( 8, $image_border ) );

$raw_border_color = isset( $attributes['imageBorderColor'] ) ? trim( (string) $attributes['imageBorderColor'] ) : '';
$image_border_color = nextora_arc_gallery_resolve_color( $raw_border_color );
if ( '' === $image_border_color ) {
	$hex = sanitize_hex_color( $raw_border_color );
	$image_border_color = $hex && '#ffffff' !== strtolower( $hex )
		? $hex
		: 'var(--wp--preset--color--base)';
}

$padding_top    = isset( $attributes['paddingTop'] ) ? (int) $attributes['paddingTop'] : 80;
$padding_top    = max( 0, min( 200, $padding_top ) );
$padding_bottom = isset( $attributes['paddingBottom'] ) ? (int) $attributes['paddingBottom'] : 80;
$padding_bottom = max( 0, min( 200, $padding_bottom ) );

$text_color = nextora_arc_gallery_resolve_color( isset( $attributes['textColor'] ) ? (string) $attributes['textColor'] : '' );
$bg_color   = nextora_arc_gallery_resolve_color( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$eyebrow_c  = nextora_arc_gallery_resolve_color( isset( $attributes['eyebrowColor'] ) ? (string) $attributes['eyebrowColor'] : '' );
$btn_bg     = nextora_arc_gallery_resolve_color( isset( $attributes['primaryButtonBg'] ) ? (string) $attributes['primaryButtonBg'] : '' );
$btn_color  = nextora_arc_gallery_resolve_color( isset( $attributes['primaryButtonColor'] ) ? (string) $attributes['primaryButtonColor'] : '' );

$text_align = isset( $attributes['textAlign'] ) ? (string) $attributes['textAlign'] : 'center';
if ( ! in_array( $text_align, array( 'left', 'center', 'right' ), true ) ) {
	$text_align = 'center';
}

$content_max = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '700px';
if ( '' === $content_max || ! preg_match( '/^\d+(\.\d+)?(px|rem|em|%)$/', $content_max ) ) {
	$content_max = '700px';
}

$content_offset_y = isset( $attributes['contentOffsetY'] ) ? (int) $attributes['contentOffsetY'] : 0;
$content_offset_y = max( -300, min( 300, $content_offset_y ) );

$heading_level = isset( $attributes['headingLevel'] ) ? (int) $attributes['headingLevel'] : 2;
$heading_level = max( 1, min( 6, $heading_level ) );
$heading_tag   = 'h' . $heading_level;

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$arc_base_config = array(
	'arcRadius'          => $arc_radius,
	'arcSpread'          => $arc_spread,
	'galleryHeight'      => $gallery_height,
	'imageWidth'         => $image_width,
	'imageHeight'        => $image_height,
	'contentOffsetY'     => $content_offset_y,
	'imageBorderRadius'  => $image_radius,
	'imageBorderWidth'   => $image_border,
);

$resolved_layout = nextora_arc_gallery_resolve_layout(
	count( $images ),
	$arc_radius,
	$arc_spread,
	$gallery_height,
	$image_width,
	$image_height,
);

$arc_radius     = $resolved_layout['arc_radius'];
$arc_spread     = $resolved_layout['arc_spread'];
$gallery_height = $resolved_layout['gallery_height'];

$css_vars = array(
	'--nextora-arc-bg'               => '' !== $bg_color ? $bg_color : 'transparent',
	'--nextora-arc-padding-top'      => $padding_top . 'px',
	'--nextora-arc-padding-bottom'   => $padding_bottom . 'px',
	'--nextora-arc-text'             => '' !== $text_color ? $text_color : 'var(--wp--preset--color--contrast)',
	'--nextora-arc-eyebrow'          => '' !== $eyebrow_c ? $eyebrow_c : 'var(--wp--preset--color--secondary)',
	'--nextora-arc-btn-bg'           => '' !== $btn_bg ? $btn_bg : 'var(--wp--preset--color--primary)',
	'--nextora-arc-btn-color'        => '' !== $btn_color ? $btn_color : 'var(--wp--preset--color--base)',
	'--nextora-arc-img-radius'       => $image_radius . 'px',
	'--nextora-arc-img-border'       => $image_border . 'px',
	'--nextora-arc-img-border-color' => $image_border_color,
	'--nextora-arc-gallery-height'  => $gallery_height . 'px',
	'--nextora-arc-content-offset-y' => $content_offset_y . 'px',
);

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-arc-gallery',
	'nextora-arc-gallery--align-' . sanitize_html_class( $text_align ),
);
if ( $gallery_overflow ) {
	$wrapper_classes[] = 'nextora-arc-gallery--overflow-visible';
}

$wrapper_classes = (array) apply_filters( 'nextora_arc_gallery_section_wrapper_classes', $wrapper_classes, $attributes );

$arc_base_json = wp_json_encode( $arc_base_config );
if ( ! is_string( $arc_base_json ) ) {
	$arc_base_json = '{}';
}

$wrapper_extra = array(
	'class'                 => implode( ' ', $wrapper_classes ),
	'style'                 => $inline_style,
	'data-nextora-arc-base' => $arc_base_json,
);
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-arc-animate'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters( 'nextora_arc_gallery_section_wrapper_attributes', $wrapper_attributes, $attributes );

$positions = nextora_arc_gallery_calculate_positions(
	count( $images ),
	$arc_radius,
	$arc_spread,
	$gallery_height,
	$image_width,
	$image_height,
);

$positions = (array) apply_filters( 'nextora_arc_gallery_section_arc_positions', $positions, $attributes, $images );

$gallery_label = sprintf(
	/* translators: %d: number of images */
	_n( 'Gallery of %d image arranged in an arc', 'Gallery of %d images arranged in an arc', count( $images ), 'nextora' ),
	count( $images ),
);

$eyebrow_html      = isset( $attributes['eyebrowText'] ) ? (string) $attributes['eyebrowText'] : '';
$heading_html      = isset( $attributes['headingText'] ) ? (string) $attributes['headingText'] : '';
$description_html  = isset( $attributes['descriptionText'] ) ? (string) $attributes['descriptionText'] : '';

$content_attrs = 'class="nextora-arc-gallery__content" style="max-width:' . esc_attr( $content_max ) . ';"';
if ( $enable_scroll ) {
	$content_attrs .= ' data-nextora-scroll-reveal="1"';
}

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div
		class="nextora-arc-gallery__stage"
		style="height:<?php echo esc_attr( (string) $gallery_height ); ?>px;"
		role="group"
		aria-label="<?php echo esc_attr( $gallery_label ); ?>"
	>
		<?php if ( array() !== $images ) : ?>
			<?php foreach ( $images as $index => $image ) : ?>
				<?php
				$pos = $positions[ $index ] ?? array(
					'left'     => 'calc(50% - ' . (int) ( $image_width / 2 ) . 'px)',
					'top'      => '0px',
					'rotation' => 0.0,
				);
				$item_style = sprintf(
					'width:%dpx;height:%dpx;left:%s;top:%s;--nextora-arc-rotation:%sdeg;',
					$image_width,
					$image_height,
					$pos['left'],
					$pos['top'],
					(string) $pos['rotation'],
				);
				$alt = '' !== $image['alt'] ? $image['alt'] : get_post_meta( $image['id'], '_wp_attachment_image_alt', true );
				$alt = is_string( $alt ) ? $alt : '';
				$img_url = wp_get_attachment_image_url( $image['id'], 'large' );
				?>
				<div class="nextora-arc-gallery__item" style="<?php echo esc_attr( $item_style ); ?>">
					<?php if ( is_string( $img_url ) && '' !== $img_url ) : ?>
						<div
							class="nextora-arc-gallery__media"
							role="img"
							aria-label="<?php echo esc_attr( $alt ); ?>"
							data-nextora-arc-media-url="<?php echo esc_url( $img_url ); ?>"
							style="background-image:url(<?php echo esc_url( $img_url ); ?>);"
						></div>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>

	<div <?php echo $content_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
		<?php if ( '' !== trim( wp_strip_all_tags( $eyebrow_html ) ) ) : ?>
			<p class="nextora-arc-gallery__eyebrow"><?php echo wp_kses_post( $eyebrow_html ); ?></p>
		<?php endif; ?>

		<?php if ( '' !== trim( wp_strip_all_tags( $heading_html ) ) ) : ?>
			<?php
			printf(
				'<%1$s class="nextora-arc-gallery__heading">%2$s</%1$s>',
				$heading_tag, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- h1-h6.
				wp_kses_post( $heading_html ),
			);
			?>
		<?php endif; ?>

		<?php if ( '' !== trim( wp_strip_all_tags( $description_html ) ) ) : ?>
			<div class="nextora-arc-gallery__description">
				<?php echo wp_kses_post( $description_html ); ?>
			</div>
		<?php endif; ?>

		<?php
		$show_primary   = ! isset( $attributes['showPrimaryButton'] ) || (bool) $attributes['showPrimaryButton'];
		$show_secondary = ! isset( $attributes['showSecondaryButton'] ) || (bool) $attributes['showSecondaryButton'];
		?>
		<?php if ( $show_primary || $show_secondary ) : ?>
			<div class="nextora-arc-gallery__buttons">
				<?php if ( $show_primary ) : ?>
					<?php
					$primary_text = isset( $attributes['primaryButtonText'] ) ? (string) $attributes['primaryButtonText'] : '';
					$primary_url  = isset( $attributes['primaryButtonUrl'] ) ? (string) $attributes['primaryButtonUrl'] : '';
					$primary_url  = '' !== $primary_url ? esc_url( $primary_url ) : '#';
					$primary_new  = ! empty( $attributes['primaryButtonTarget'] );
					$primary_style = isset( $attributes['primaryButtonStyle'] ) && 'outline' === $attributes['primaryButtonStyle'] ? 'outline' : 'solid';
					$btn_class    = 'nextora-arc-gallery__btn nextora-arc-gallery__btn--primary';
					if ( 'outline' === $primary_style ) {
						$btn_class .= ' is-outline';
					}
					?>
					<a
						class="<?php echo esc_attr( $btn_class ); ?>"
						href="<?php echo esc_url( $primary_url ); ?>"
						<?php echo $primary_new ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
					>
						<span><?php echo wp_kses_post( $primary_text ); ?></span>
					</a>
				<?php endif; ?>

				<?php if ( $show_secondary ) : ?>
					<?php
					$secondary_text = isset( $attributes['secondaryButtonText'] ) ? (string) $attributes['secondaryButtonText'] : '';
					$secondary_url  = isset( $attributes['secondaryButtonUrl'] ) ? (string) $attributes['secondaryButtonUrl'] : '';
					$secondary_url  = '' !== $secondary_url ? esc_url( $secondary_url ) : '#';
					$secondary_new  = ! empty( $attributes['secondaryButtonTarget'] );
					?>
					<a
						class="nextora-arc-gallery__btn nextora-arc-gallery__btn--link"
						href="<?php echo esc_url( $secondary_url ); ?>"
						<?php echo $secondary_new ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
					>
						<span><?php echo wp_kses_post( $secondary_text ); ?></span>
						<span class="nextora-arc-gallery__btn-icon"><?php echo nextora_arc_gallery_arrow_icon_svg(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?></span>
					</a>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	</div>
</div>
