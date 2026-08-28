<?php
/**
 * Rope Gallery — dynamic block render template.
 *
 * A container block with InnerBlocks content on top and a 3D rope + hanging
 * cards gallery as the footer decoration.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks HTML.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_rg_sanitize_item' ) ) {
	/**
	 * Normalize one gallery item into safe front-end values.
	 *
	 * @param array<string, mixed> $item Raw item from block attributes.
	 *
	 * @return array<string, string> Sanitized item fields.
	 */
	function nextora_rg_sanitize_item( array $item ): array {
		return array(
			'title'    => isset( $item['title'] ) && is_string( $item['title'] ) ? trim( $item['title'] ) : '',
			'subtitle' => isset( $item['subtitle'] ) && is_string( $item['subtitle'] ) ? trim( $item['subtitle'] ) : '',
			'link'     => isset( $item['link'] ) && is_string( $item['link'] ) ? trim( $item['link'] ) : '',
			'imageUrl' => isset( $item['imageUrl'] ) && is_string( $item['imageUrl'] ) ? trim( $item['imageUrl'] ) : '',
			'imageAlt' => isset( $item['imageAlt'] ) && is_string( $item['imageAlt'] ) ? trim( $item['imageAlt'] ) : '',
		);
	}
}

if ( ! function_exists( 'nextora_rg_item_hue' ) ) {
	/**
	 * Deterministic hue for the procedural fallback art (matches the editor preview).
	 */
	function nextora_rg_item_hue( int $index ): int {
		return ( $index * 47 + 15 ) % 360;
	}
}

if ( ! function_exists( 'nextora_rg_render_sr_list' ) ) {
	/**
	 * Screen-reader list of gallery items.
	 *
	 * @param array<int, array<string, string>> $items Sanitized items.
	 */
	function nextora_rg_render_sr_list( array $items ): string {
		if ( array() === $items ) {
			return '';
		}

		$html = '<ul class="wp-block-nextora-rope-gallery__sr-list">';
		foreach ( $items as $item ) {
			$title = $item['title'];
			if ( '' === $title ) {
				$title = __( 'Untitled gallery card', 'nextora' );
			}
			if ( '' !== $item['link'] ) {
				$html .= '<li><a href="' . esc_url( $item['link'] ) . '">' . esc_html( $title ) . '</a></li>';
			} else {
				$html .= '<li>' . esc_html( $title ) . '</li>';
			}
		}
		$html .= '</ul>';

		return $html;
	}
}

if ( ! function_exists( 'nextora_rg_render_static_card' ) ) {
	/**
	 * One static fallback card (reduced-motion / no-JS grid).
	 *
	 * @param array<string, string> $item  Sanitized item.
	 * @param int                   $index Item index for the fallback hue.
	 */
	function nextora_rg_render_static_card( array $item, int $index ): string {
		$hue = nextora_rg_item_hue( $index );

		if ( '' !== $item['imageUrl'] ) {
			$media = '<img src="' . esc_url( $item['imageUrl'] ) . '" alt="' . esc_attr( $item['imageAlt'] ) . '" loading="lazy" decoding="async" />';
		} else {
			$media = '<span class="wp-block-nextora-rope-gallery__static-media-fallback" style="--nextora-rg-hue:' . $hue . '"></span>';
		}

		$title = '' !== $item['title'] ? esc_html( $item['title'] ) : esc_html__( 'Untitled', 'nextora' );
		$caption = '';
		if ( '' !== $item['subtitle'] ) {
			$caption = '<span class="wp-block-nextora-rope-gallery__static-subtitle">' . esc_html( $item['subtitle'] ) . '</span>';
		}

		if ( '' !== $item['link'] ) {
			return '<figure class="wp-block-nextora-rope-gallery__static-card"><a href="' . esc_url( $item['link'] ) . '" class="wp-block-nextora-rope-gallery__static-link">' . $media . '<figcaption class="wp-block-nextora-rope-gallery__static-caption">' . $title . $caption . '</figcaption></a></figure>';
		}

		return '<figure class="wp-block-nextora-rope-gallery__static-card">' . $media . '<figcaption class="wp-block-nextora-rope-gallery__static-caption">' . $title . $caption . '</figcaption></figure>';
	}
}

if ( ! function_exists( 'nextora_rg_render_static_grid' ) ) {
	/**
	 * Static card grid shown when JS is off or motion is reduced.
	 *
	 * @param array<int, array<string, string>> $items Sanitized items.
	 */
	function nextora_rg_render_static_grid( array $items ): string {
		if ( array() === $items ) {
			return '';
		}

		$html = '<div class="wp-block-nextora-rope-gallery__static" aria-hidden="true">';
		foreach ( $items as $index => $item ) {
			$html .= nextora_rg_render_static_card( $item, $index );
		}
		$html .= '</div>';

		return $html;
	}
}

// ── Attributes ──
$items_raw = $attributes['items'] ?? array();
$items     = array();
if ( is_array( $items_raw ) ) {
	foreach ( $items_raw as $raw ) {
		if ( is_array( $raw ) ) {
			$items[] = nextora_rg_sanitize_item( $raw );
		}
	}
}

$card_count   = max( 3, min( 20, absint( $attributes['cardCount'] ?? 8 ) ) );
$rope_color   = sanitize_hex_color( (string) ( $attributes['ropeColor'] ?? '#D2CEC4' ) );
$rope_accent  = sanitize_hex_color( (string) ( $attributes['ropeAccentColor'] ?? '#9C978B' ) );
$accent_color = sanitize_hex_color( (string) ( $attributes['accentColor'] ?? '#20BF49' ) );

$rope_color   = is_string( $rope_color ) && '' !== $rope_color ? $rope_color : '#D2CEC4';
$rope_accent  = is_string( $rope_accent ) && '' !== $rope_accent ? $rope_accent : '#9C978B';
$accent_color = is_string( $accent_color ) && '' !== $accent_color ? $accent_color : '#20BF49';

$animation_enabled = ! isset( $attributes['animationEnabled'] ) || (bool) $attributes['animationEnabled'];
$scroll_enabled    = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

// ── Inner blocks content (iterate parsed blocks, same as advanced-container) ──
$inner_blocks_html = '';
if ( $block instanceof WP_Block && is_countable( $block->inner_blocks ) && count( $block->inner_blocks ) > 0 ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( $inner_block instanceof WP_Block ) {
			$inner_blocks_html .= $inner_block->render();
		} elseif ( is_array( $inner_block ) ) {
			$inner_blocks_html .= (string) render_block( $inner_block );
		}
	}
}

// ── JS opts (color + items only; rendering state stays server-side) ──
$opts = array(
	'cardCount'     => $card_count,
	'ropeColor'     => $rope_color,
	'ropeAccentColor' => $rope_accent,
	'accentColor'   => $accent_color,
	'animationEnabled' => $animation_enabled,
	'items'         => $items,
);

$opts_json   = wp_json_encode( $opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

// ── Wrapper ──
$wrapper_classes = array(
	'wp-block-nextora-rope-gallery',
	'nextora-rope-gallery--loading',
);

$wrapper_extra = array(
	'class'                     => implode( ' ', $wrapper_classes ),
	'data-nextora-rope-gallery-opts' => $opts_string,
	'data-card-count'           => (string) $card_count,
	'data-rope-color'           => $rope_color,
	'data-accent-color'         => $accent_color,
	'style'                     => '--nextora-rg-rope:' . $rope_color . ';--nextora-rg-rope-accent:' . $rope_accent . ';--nextora-rg-accent:' . $accent_color . ';',
);

if ( $scroll_enabled ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );

$sr_list_html     = nextora_rg_render_sr_list( $items );
$static_grid_html = nextora_rg_render_static_grid( $items );
?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="wp-block-nextora-rope-gallery__content">
		<?php echo $inner_blocks_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>

	<div class="wp-block-nextora-rope-gallery__rope-area">
		<canvas class="wp-block-nextora-rope-gallery__canvas" aria-hidden="true"></canvas>

		<div
			class="wp-block-nextora-rope-gallery__hit"
			role="group"
			aria-label="<?php echo esc_attr__( 'Hanging photo gallery. Use the left and right arrow keys to move the line.', 'nextora' ); ?>"
			tabindex="0"
		></div>

		<p class="wp-block-nextora-rope-gallery__hint" aria-hidden="true">
			<?php echo esc_html__( 'Drag or scroll to explore', 'nextora' ); ?>
		</p>

		<?php echo $sr_list_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>

		<?php echo $static_grid_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>

	<noscript>
		<style>
			.wp-block-nextora-rope-gallery__static{display:grid!important}
			.wp-block-nextora-rope-gallery__canvas,
			.wp-block-nextora-rope-gallery__hit,
			.wp-block-nextora-rope-gallery__hint{display:none!important}
		</style>
	</noscript>
</div>
