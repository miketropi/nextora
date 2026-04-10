<?php
/**
 * Hero Section — dynamic block render template.
 *
 * Available variables (injected automatically by WordPress):
 *
 * @var array    $attributes  Block attributes defined in block.json.
 * @var string   $content     Inner blocks HTML (empty for this block).
 * @var WP_Block $block       Block instance.
 */

$heading = wp_kses( $attributes['heading'] ?? '', [ 'strong' => [], 'em' => [] ] );
$content = wp_kses_post( $attributes['content'] ?? '' );

// Nothing to render
if ( ! $heading && ! $content ) {
	return;
}

/**
 * get_block_wrapper_attributes() merges:
 *  - default class: wp-block-nextora-hero-section
 *  - Global Styles overrides (color, spacing, typography supports)
 *  - custom class/style added by the editor user
 */
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attributes; ?>>

	<?php if ( $heading ) : ?>
		<h2 class="hero-section__heading"><?php echo $heading; ?></h2>
	<?php endif; ?>

	<?php if ( $content ) : ?>
		<p class="hero-section__content"><?php echo $content; ?></p>
	<?php endif; ?>

</div>
