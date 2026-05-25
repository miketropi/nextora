<?php
/**
 * Testimonial item — two-column slide for Swiper.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Saved inner HTML.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$image_html   = '';
$content_html = '';

if ( $block instanceof WP_Block && is_countable( $block->inner_blocks ) ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( ! $inner_block instanceof WP_Block ) {
			continue;
		}

		$rendered = $inner_block->render();
		if ( 'core/image' === $inner_block->name ) {
			$image_html .= $rendered;
			continue;
		}

		if ( in_array( $inner_block->name, array( 'core/heading', 'core/paragraph' ), true ) ) {
			$content_html .= $rendered;
		}
	}
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'swiper-slide nextora-testimonial-item',
	),
);
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-testimonial-item__image-col">
		<?php echo $image_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>
	<div class="nextora-testimonial-item__content-col">
		<?php echo $content_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>
</div>
