<?php
/**
 * Testimonials — wrapper slider with shared heading.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Saved inner HTML.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_tm_resolve_color' ) ) {
	/**
	 * Map preset slug, hex, or var() to a safe CSS color value.
	 */
	function nextora_tm_resolve_color( string $raw, string $fallback ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return $fallback;
		}

		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}

		if ( strlen( $raw ) < 220 && preg_match( '/^var\(--wp--preset--color--[a-z0-9-]+\)$/', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_title( $raw ) . ')';
		}

		return $fallback;
	}
}

if ( ! function_exists( 'nextora_tm_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is loaded for Swiper and scroll reveal.
	 */
	function nextora_tm_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/testimonials' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
		}
	}
}

$heading       = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$heading_level = isset( $attributes['headingLevel'] ) ? (int) $attributes['headingLevel'] : 2;
$heading_level = max( 1, min( 6, $heading_level ) );
$show_accent   = ! array_key_exists( 'showAccent', $attributes ) || ! empty( $attributes['showAccent'] );
$accent_color  = nextora_tm_resolve_color(
	isset( $attributes['accentColor'] ) ? (string) $attributes['accentColor'] : '',
	'var(--wp--preset--color--primary)',
);

$show_nav   = ! empty( $attributes['showNav'] );
$show_pag   = ! array_key_exists( 'showPagination', $attributes ) || ! empty( $attributes['showPagination'] );
$loop       = ! array_key_exists( 'loop', $attributes ) || ! empty( $attributes['loop'] );
$autoplay   = ! empty( $attributes['autoplay'] );
$autoplay_d = isset( $attributes['autoplayDelay'] ) ? max( 1000, (int) $attributes['autoplayDelay'] ) : 5000;
$speed      = isset( $attributes['speed'] ) ? max( 100, (int) $attributes['speed'] ) : 600;
$pause      = ! array_key_exists( 'pauseOnHover', $attributes ) || ! empty( $attributes['pauseOnHover'] );
$effect     = isset( $attributes['effect'] ) && 'fade' === $attributes['effect'] ? 'fade' : 'slide';
$enable_scroll = ! array_key_exists( 'enableScrollAnimation', $attributes ) || ! empty( $attributes['enableScrollAnimation'] );

$items_html = '';
$item_count = 0;

if ( $block instanceof WP_Block && is_countable( $block->inner_blocks ) ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( ! $inner_block instanceof WP_Block ) {
			continue;
		}
		if ( 'nextora/testimonial-item' !== $inner_block->name ) {
			continue;
		}
		++$item_count;
		$items_html .= $inner_block->render();
	}
}

if ( 0 === $item_count && '' === trim( $heading ) ) {
	return;
}

$use_loop   = $loop && $item_count > 1;
$can_loop   = $use_loop && $item_count >= 4;
$use_rewind = $use_loop && ! $can_loop;

$swiper_opts = array(
	'loop'           => $can_loop,
	'rewind'         => $use_rewind,
	'autoplay'       => $autoplay && $item_count > 1,
	'autoplayDelay'  => $autoplay_d,
	'showNav'        => $show_nav && $item_count > 1,
	'showPagination' => $show_pag && $item_count > 1,
	'speed'          => $speed,
	'effect'         => $effect,
	'pauseOnHover'   => $pause,
);

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$classes = array(
	'nextora-testimonials',
	'nextora-testimonials--loading',
);

if ( $enable_scroll ) {
	$classes[] = 'nextora-testimonials--scroll-reveal';
}

nextora_tm_enqueue_view_script();

$wrapper_args = array(
	'class' => implode( ' ', $classes ),
	'style' => '--nextora-testimonials-accent:' . $accent_color . ';',
);

if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

$heading_tags = array(
	1 => 'h1',
	2 => 'h2',
	3 => 'h3',
	4 => 'h4',
	5 => 'h5',
	6 => 'h6',
);
$heading_tag = $heading_tags[ $heading_level ] ?? 'h2';
?>
<section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-testimonials__layout">
		<?php if ( $item_count > 0 ) : ?>
			<div
				class="nextora-testimonials__carousel"
				data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
			>
				<div class="swiper nextora-testimonials__swiper">
					<div class="swiper-wrapper">
						<?php echo $items_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
					</div>
				</div>

				<?php if ( $show_nav && $item_count > 1 ) : ?>
					<div class="nextora-testimonials__arrows">
						<button type="button" class="nextora-testimonials__arrow nextora-testimonials__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
							<svg class="nextora-testimonials__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="M15 18l-6-6 6-6" />
							</svg>
						</button>
						<button type="button" class="nextora-testimonials__arrow nextora-testimonials__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
							<svg class="nextora-testimonials__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
								<path d="M9 6l6 6-6 6" />
							</svg>
						</button>
					</div>
				<?php endif; ?>

				<?php if ( $show_pag && $item_count > 1 ) : ?>
					<div class="nextora-testimonials__pagination" aria-hidden="true"></div>
				<?php endif; ?>
			</div>
		<?php endif; ?>

		<div class="nextora-testimonials__heading-panel">
			<?php if ( $show_accent ) : ?>
				<div class="nextora-testimonials__accent" aria-hidden="true" style="<?php echo esc_attr( 'color:' . $accent_color ); ?>">
					<svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 12 C12 2, 22 22, 32 12 S52 2, 62 12 S72 22, 78 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>
					</svg>
				</div>
			<?php endif; ?>

			<?php if ( '' !== trim( $heading ) ) : ?>
				<?php
				echo wp_kses(
					sprintf(
						'<%1$s class="nextora-testimonials__heading">%2$s</%1$s>',
						$heading_tag,
						esc_html( $heading ),
					),
					array(
						'h1' => array( 'class' => true ),
						'h2' => array( 'class' => true ),
						'h3' => array( 'class' => true ),
						'h4' => array( 'class' => true ),
						'h5' => array( 'class' => true ),
						'h6' => array( 'class' => true ),
					),
				);
				?>
			<?php endif; ?>
		</div>
	</div>
</section>
