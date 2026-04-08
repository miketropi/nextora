<?php
/**
 * Article layout: default (single / page) — featured image, title/meta, entry.
 *
 * Expects `$args` from {@see get_template_part()} — {@see nextora_content_article_vars()}.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! isset( $args ) || ! is_array( $args ) ) {
	return;
}

$na = $args;
?>
<article <?php post_class( $na['post_classes'] ); ?>>

	<?php do_action( 'nextora_before_article_content', $na ); ?>

	<div class="<?php echo esc_attr( $na['inner_classes'] ); ?>">
		<?php get_template_part( 'template-parts/content-article', 'title-meta', $na ); ?>
		<?php get_template_part( 'template-parts/content-article', 'entry', $na ); ?>
		<?php get_template_part( 'template-parts/content-article', 'related-posts', $na ); ?>
	</div>

	<?php do_action( 'nextora_after_article_content', $na ); ?>
	
</article>
