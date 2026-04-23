<?php
/**
 * Image gallery (grid) — server render, CSS grid (no JavaScript).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Unused.
 * @var WP_Block $block      Block instance.
 */

if ( ! function_exists( 'nextora_ig_sanitize_slide_bg' ) ) {
	/**
	 * @param string $raw User input.
	 * @return string Safe value or empty string.
	 */
	function nextora_ig_sanitize_slide_bg( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( strlen( $raw ) < 220 && preg_match( '/^var\(([^)]+)\)$/', $raw, $m ) && ! preg_match( '/[<>\'\"\\\\;]/', $m[1] ) ) {
			return $raw;
		}
		return '';
	}
}

$layout_raw = isset( $attributes['gridLayout'] ) ? (string) $attributes['gridLayout'] : 'classic';
$allowed_layouts = array( 'classic', 'bento', 'spotlight', 'editorial' );
$layout = in_array( $layout_raw, $allowed_layouts, true ) ? $layout_raw : 'classic';

$raw_ids = isset( $attributes['imageIds'] ) && is_array( $attributes['imageIds'] ) ? array_map( 'absint', $attributes['imageIds'] ) : array();
$raw_ids = array_values( array_filter( $raw_ids ) );

$ids = array();
foreach ( $raw_ids as $id ) {
	if ( $id && wp_attachment_is_image( $id ) ) {
		$ids[] = $id;
	}
}

if ( ! $ids ) {
	return;
}

$is_creative = 'classic' !== $layout;
if ( $is_creative ) {
	$ids = array_slice( $ids, 0, 6 );
	if ( count( $ids ) < 3 ) {
		$layout         = 'classic';
		$is_creative    = false;
	}
}

$cols_m = isset( $attributes['columnsMobile'] ) ? max( 1, min( 4, (int) $attributes['columnsMobile'] ) ) : 2;
$cols_t = isset( $attributes['columnsTablet'] ) ? max( 1, min( 6, (int) $attributes['columnsTablet'] ) ) : 3;
$cols_d = isset( $attributes['columnsDesktop'] ) ? max( 1, min( 6, (int) $attributes['columnsDesktop'] ) ) : 4;
$gap    = isset( $attributes['gap'] ) ? max( 0, min( 48, (int) $attributes['gap'] ) ) : 12;

$fit = isset( $attributes['imageFit'] ) && 'contain' === $attributes['imageFit'] ? 'contain' : 'cover';
$bg  = nextora_ig_sanitize_slide_bg( isset( $attributes['imageAreaBackground'] ) ? (string) $attributes['imageAreaBackground'] : '' );

$show_captions = ! isset( $attributes['showCaptions'] ) || (bool) $attributes['showCaptions'];

$classes = array( 'nextora-igg' );
$classes[] = 'nextora-igg--layout-' . $layout;
if ( 'contain' === $fit ) {
	$classes[] = 'nextora-igg--fit-contain';
}

$count = count( $ids );
$style_bits = array(
	'--nextora-igg-gap:' . (string) (int) $gap . 'px',
	'--nextora-igg-cols-m:' . (string) (int) $cols_m,
	'--nextora-igg-cols-t:' . (string) (int) $cols_t,
	'--nextora-igg-cols-d:' . (string) (int) $cols_d,
	'--nextora-igg-count:' . (string) (int) $count,
);
if ( $bg ) {
	$style_bits[] = '--nextora-igg-image-bg:' . $bg;
}

$wrapper = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $classes ),
		'style' => implode( ';', $style_bits ),
	)
);

$list_classes = array( 'nextora-igg__list' );
if ( $is_creative ) {
	$list_classes[] = 'nextora-igg__list--' . $layout;
	$list_tag_attrs = ' class="' . esc_attr( implode( ' ', $list_classes ) ) . '" data-nextora-n="' . (string) (int) $count . '" role="list"';
} else {
	$list_tag_attrs = ' class="' . esc_attr( implode( ' ', $list_classes ) ) . '" role="list"';
}
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<ul<?php echo $list_tag_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<?php foreach ( $ids as $attachment_id ) : ?>
			<?php
			$image = wp_get_attachment_image(
				$attachment_id,
				'large',
				false,
				array(
					'class'   => 'nextora-igg__img',
					'loading' => 'lazy',
					'decoding' => 'async',
				)
			);
			if ( ! $image ) {
				continue;
			}
			$caption = '';
			$post    = get_post( $attachment_id );
			if ( $post && ! empty( $post->post_excerpt ) ) {
				$caption = $post->post_excerpt;
			}
			?>
			<li class="nextora-igg__item">
				<div class="nextora-igg__media">
					<?php echo $image; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
				<?php if ( $show_captions && $caption ) : ?>
					<div class="nextora-igg__caption"><?php echo esc_html( $caption ); ?></div>
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ul>
</div>
