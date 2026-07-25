<?php
/**
 * Hero Paper Roll — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks HTML.
 * @var WP_Block             $block      Block instance.
 */

$min_height          = $attributes['minHeight'] ?? '100vh';
$bg_overlay_color    = $attributes['bgOverlayColor'] ?? '#000000';
$bg_overlay_opacity  = (float) ( $attributes['bgOverlayOpacity'] ?? 0 );
$content_max_width   = $attributes['contentMaxWidth'] ?? 'content';

$max_width_map = array(
	'content' => 'var(--wp--style--global--content-size, 780px)',
	'wide'    => 'var(--wp--style--global--wide-size, 1200px)',
	'full'    => 'none',
);
$max_width_value = $max_width_map[ $content_max_width ] ?? $max_width_map['content'];
$overlay_class    = 'hero-paper-roll__overlay hero-paper-roll__overlay--max-' . esc_attr( $content_max_width );

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'style' => 'min-height:' . esc_attr( $min_height ),
	),
);

$inner_blocks_html = '';
if ( $block instanceof WP_Block && $block->inner_blocks->count() > 0 ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( ! $inner_block instanceof WP_Block ) {
			continue;
		}
		$inner_blocks_html .= $inner_block->render();
	}
}
?>

<div <?php echo $wrapper_attributes; ?>>
	<canvas
		class="hero-paper-roll__canvas"
		aria-hidden="true"
	></canvas>

	<?php if ( $bg_overlay_opacity > 0 ) : ?>
		<div
			class="hero-paper-roll__bg-overlay"
			style="background-color:<?php echo esc_attr( $bg_overlay_color ); ?>;opacity:<?php echo esc_attr( (string) ( $bg_overlay_opacity / 100 ) ); ?>"
			aria-hidden="true"
		></div>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $overlay_class ); ?>" style="--hero-paper-roll--content-max-width:<?php echo esc_attr( $max_width_value ); ?>">
		<?php echo $inner_blocks_html; ?>
	</div>
</div>
