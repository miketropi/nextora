<?php
/**
 * Advanced Button — container block render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Saved inner blocks HTML.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/../advanced-icon/lucide.php';

if ( ! function_exists( 'nextora_advanced_button_enqueue_view_script' ) ) {
	/**
	 * Queue block view script when scroll reveal may run.
	 */
	function nextora_advanced_button_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/advanced-button' );
		if ( ! $registry || empty( $registry->view_script_handles ) || ! is_array( $registry->view_script_handles ) ) {
			return;
		}

		foreach ( $registry->view_script_handles as $handle ) {
			if ( is_string( $handle ) && '' !== $handle ) {
				wp_enqueue_script( $handle );
			}
		}
	}
}

if ( ! function_exists( 'nextora_advanced_button_strip_inner_wrapper' ) ) {
	/**
	 * Remove the saved inner wrapper div from InnerBlocks markup.
	 *
	 * @param string $html Saved inner HTML.
	 */
	function nextora_advanced_button_strip_inner_wrapper( string $html ): string {
		$html = trim( $html );
		if ( '' === $html || 0 !== strpos( $html, '<div' ) ) {
			return $html;
		}

		if ( preg_match( '/^<div[^>]*class="[^"]*nextora-advanced-button__inner[^"]*"[^>]*>(.*)<\/div>\s*$/s', $html, $matches ) ) {
			return (string) $matches[1];
		}

		return $html;
	}
}

$button_align  = isset( $attributes['buttonAlign'] ) ? (string) $attributes['buttonAlign'] : 'left';
$enable_scroll = nextora_icon_scroll_animation_enabled( $attributes );

$allowed_align = array( 'left', 'center', 'right' );
if ( ! in_array( $button_align, $allowed_align, true ) ) {
	$button_align = 'left';
}

$buttons_html = '';
if ( $block instanceof WP_Block && $block->inner_blocks !== null && count( $block->inner_blocks ) > 0 ) {
	foreach ( $block->inner_blocks as $inner ) {
		if ( $inner instanceof WP_Block ) {
			$buttons_html .= $inner->render();
		}
	}
} elseif ( '' !== trim( $content ) ) {
	$buttons_html = nextora_advanced_button_strip_inner_wrapper( $content );
}

if ( '' === trim( $buttons_html ) ) {
	return;
}

$wrapper_classes = array(
	'nextora-advanced-button',
	'nextora-advanced-button--align-' . sanitize_html_class( $button_align ),
);

if ( ! $enable_scroll ) {
	$wrapper_classes[] = 'nextora-advanced-button--scroll-off';
	$wrapper_classes[] = 'nextora-scroll-animation--ready';
}

$wrapper_args = array(
	'class' => implode( ' ', $wrapper_classes ),
);

nextora_advanced_button_enqueue_view_script();

if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
} else {
	$wrapper_args['data-nextora-scroll-animation-init'] = '1';
}

$wrapper = get_block_wrapper_attributes( $wrapper_args );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-advanced-button__buttons">
		<?php echo $buttons_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>
</div>
