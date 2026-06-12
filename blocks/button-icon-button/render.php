<?php
/**
 * Button Icon — single button item render.
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

$parts = nextora_button_icon_button_parts( $attributes );

if ( '' === $parts['inner_html'] ) {
	return;
}

$aria_attr = '';
if ( '' !== $parts['aria_label'] ) {
	$aria_attr = ' aria-label="' . esc_attr( $parts['aria_label'] ) . '"';
}

if ( $parts['opens_modal'] ) {
	$modal_id    = nextora_button_icon_modal_sanitize_id( $parts['modal_id'] );
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
		$modal_body = nextora_button_icon_modal_strip_save_wrapper( $content );
	}

	$wrap_attrs = get_block_wrapper_attributes(
		array(
			'class' => 'nextora-button-icon-button-wrap nextora-button-icon-button-wrap--modal',
		),
	);

	$btn_class = $parts['classes'] . ' nextora-button-icon__button wp-element-button wp-block-nextora-button-icon-button';
	$btn_style = $parts['style'];
	?>
	<div <?php echo $wrap_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
		<button
			type="button"
			class="<?php echo esc_attr( $btn_class ); ?>"
			style="<?php echo esc_attr( $btn_style ); ?>"
			data-nextora-modal-open="<?php echo esc_attr( $modal_id ); ?>"
			aria-haspopup="dialog"
			<?php echo $aria_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		>
			<?php echo $parts['inner_html']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		</button>
		<?php
		echo nextora_button_icon_modal_render( $modal_id, $modal_title, $modal_body, $modal_width ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
	</div>
	<?php
	return;
}

if ( $parts['is_click_event'] ) {
	$event_id = nextora_button_icon_modal_sanitize_id( $parts['click_event_id'] );
	$script   = $parts['click_event_script'];

	$wrap_attrs = get_block_wrapper_attributes(
		array(
			'class' => 'nextora-button-icon-button-wrap nextora-button-icon-button-wrap--click-event',
		),
	);

	$btn_class = $parts['classes'] . ' nextora-button-icon__button wp-element-button wp-block-nextora-button-icon-button';
	$btn_style = $parts['style'];
	?>
	<div <?php echo $wrap_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
		<button
			type="button"
			class="<?php echo esc_attr( $btn_class ); ?>"
			style="<?php echo esc_attr( $btn_style ); ?>"
			data-nextora-button-icon-click-event="1"
			data-nextora-button-icon-event-id="<?php echo esc_attr( $event_id ); ?>"
			<?php echo $aria_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		>
			<?php echo $parts['inner_html']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		</button>
		<?php if ( '' !== trim( $script ) ) : ?>
			<script type="text/plain" id="<?php echo esc_attr( $event_id ); ?>" class="nextora-button-icon-event-script"><?php echo esc_html( $script ); ?></script>
		<?php endif; ?>
	</div>
	<?php
	return;
}

$wrapper = get_block_wrapper_attributes(
	array(
		'class' => $parts['classes'] . ' nextora-button-icon__button wp-element-button wp-block-nextora-button-icon-button',
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
