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
	<?php if ( ! empty( $na['show_featured_media'] ) && has_post_thumbnail() ) : ?>
		<figure class="nextora-article-featured m-0 mb-[clamp(0.75rem,2.25vw,1.5rem)] overflow-hidden rounded-lg bg-surface">
			<?php
			the_post_thumbnail(
				'large',
				array(
					'class'         => 'h-auto w-full max-h-[min(70vh,36rem)] object-cover',
					'alt'           => wp_strip_all_tags( $na['title'] ),
					'loading'       => 'eager',
					'fetchpriority' => 'high',
					'decoding'      => 'async',
				)
			);
			?>
		</figure>
	<?php elseif ( ! empty( $na['show_featured_media'] ) && ! empty( $na['show_placeholder'] ) && '' !== $na['placeholder_url'] ) : ?>
		<figure class="nextora-article-featured m-0 mb-[clamp(0.75rem,2.25vw,1.5rem)] overflow-hidden rounded-lg bg-surface" aria-label="<?php esc_attr_e( 'Placeholder — no featured image', 'nextora' ); ?>">
			<img
				src="<?php echo esc_url( $na['placeholder_url'] ); ?>"
				alt=""
				width="1200"
				height="675"
				class="h-auto w-full max-h-[min(70vh,36rem)] object-cover"
				loading="lazy"
				decoding="async"
			/>
		</figure>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $na['inner_classes'] ); ?>">
		<?php get_template_part( 'template-parts/content-article', 'title-meta', $na ); ?>
		<?php get_template_part( 'template-parts/content-article', 'entry', $na ); ?>
	</div>
</article>
