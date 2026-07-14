<?php
/**
 * Advanced Button — single button item render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Saved inner blocks HTML (modal body).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/button-markup.php';
require_once __DIR__ . '/modal-render.php';

$parts = nextora_advanced_button_button_parts( $attributes );

if ( '' === $parts['inner_html'] ) {
	return;
}

$aria_attr = '';
if ( '' !== $parts['aria_label'] ) {
	$aria_attr = ' aria-label="' . esc_attr( $parts['aria_label'] ) . '"';
}

$btn_class = $parts['classes'] . ' nextora-advanced-button__button wp-element-button wp-block-nextora-advanced-button-button';
$btn_style = $parts['style'];

if ( $parts['opens_modal'] ) {
	$modal_id    = nextora_advanced_button_modal_sanitize_id( $parts['modal_id'] );
	$modal_title = isset( $attributes['modalTitle'] ) ? trim( (string) $attributes['modalTitle'] ) : '';
	$modal_width = isset( $attributes['modalWidth'] ) ? $attributes['modalWidth'] : 896;

	$modal_body = '';
	if ( $block instanceof WP_Block && $block->inner_blocks !== null && count( $block->inner_blocks ) > 0 ) {
		foreach ( $block->inner_blocks as $inner ) {
			if ( $inner instanceof WP_Block ) {
				$modal_body .= $inner->render();
			}
		}
	} elseif ( '' !== trim( $content ) ) {
		$modal_body = nextora_advanced_button_modal_strip_save_wrapper( $content );
	}

	$button_attrs = get_block_wrapper_attributes(
		array(
			'class' => $btn_class,
			'style' => $btn_style,
		),
	);
	?>
	<div class="nextora-advanced-button-button-wrap nextora-advanced-button-button-wrap--modal">
		<button
			type="button"
			<?php echo $button_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
			data-nextora-modal-open="<?php echo esc_attr( $modal_id ); ?>"
			aria-haspopup="dialog"
			<?php echo $aria_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		>
			<?php echo $parts['inner_html']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		</button>
		<?php
		echo nextora_advanced_button_modal_render( $modal_id, $modal_title, $modal_body, $modal_width ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
	</div>
	<?php
	return;
}

if ( $parts['is_click_event'] ) {
	$event_id = nextora_advanced_button_modal_sanitize_id( $parts['click_event_id'] );
	$script   = $parts['click_event_script'];

	$button_attrs = get_block_wrapper_attributes(
		array(
			'class' => $btn_class,
			'style' => $btn_style,
		),
	);
	?>
	<div class="nextora-advanced-button-button-wrap nextora-advanced-button-button-wrap--click-event">
		<button
			type="button"
			<?php echo $button_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
			data-nextora-advanced-button-click-event="1"
			data-nextora-advanced-button-event-id="<?php echo esc_attr( $event_id ); ?>"
			<?php echo $aria_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		>
			<?php echo $parts['inner_html']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		</button>
		<?php if ( '' !== trim( $script ) ) : ?>
			<script type="text/plain" id="<?php echo esc_attr( $event_id ); ?>" class="nextora-advanced-button-event-script"><?php echo esc_html( $script ); ?></script>
		<?php endif; ?>
	</div>
	<?php
	return;
}

$wrapper = get_block_wrapper_attributes(
	array(
		'class' => $parts['classes'] . ' nextora-advanced-button__button wp-element-button wp-block-nextora-advanced-button-button',
		'style' => $parts['style'],
	),
);

$extra_attrs = '';
if ( in_array( $parts['target'], array( '_self', '_blank' ), true ) ) {
	$extra_attrs .= ' target="' . esc_attr( $parts['target'] ) . '"';
}

if ( '' !== trim( $parts['rel'] ) ) {
	$extra_attrs .= ' rel="' . esc_attr( trim( $parts['rel'] ) ) . '"';
}
?>
<a href="<?php echo esc_url( $parts['href'] ); ?>" <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?><?php echo $extra_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?><?php echo $aria_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php echo $parts['inner_html']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
</a>
