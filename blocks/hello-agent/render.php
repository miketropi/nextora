<?php
/**
 * Hello Agent — minimal dynamic block.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks HTML (empty).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<p style="margin:0;padding:1.5rem;text-align:center;">
		<?php echo esc_html__( 'Hello Nextora agent runtime', 'nextora' ); ?>
	</p>
</div>
