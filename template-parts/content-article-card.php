<?php
/**
 * Article layout: card (blog grid) — media, title/meta, excerpt, read more.
 *
 * Expects `$args` from {@see get_template_part()} — {@see nextora_content_article_vars()}.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! isset( $args ) || ! is_array( $args ) ) {
	return;
}

$na               = $args;
$is_card_lead     = ! empty( $na['is_card_lead'] );
$placeholder_url  = $na['placeholder_url'];
$permalink        = $na['permalink'];
$card_media_class = $na['card_media_class'];
$card_thumb_size  = $na['card_thumb_size'];
$thumb_attrs      = $na['thumb_attrs'];
$thumb_img_class  = $na['thumb_img_class'];
?>
<article <?php post_class( $na['post_classes'] ); ?><?php echo $is_card_lead ? ' data-nextora-card-lead="1"' : ''; ?>>
	<?php if ( has_post_thumbnail() || '' !== $placeholder_url ) : ?>
		<?php if ( '' !== $permalink ) : ?>
			<a
				href="<?php echo esc_url( $permalink ); ?>"
				class="<?php echo esc_attr( $card_media_class ); ?>"
				tabindex="-1"
				aria-hidden="true"
			>
		<?php else : ?>
			<div class="<?php echo esc_attr( $card_media_class ); ?>" aria-hidden="true">
		<?php endif; ?>
			<?php if ( has_post_thumbnail() ) : ?>
				<?php the_post_thumbnail( $card_thumb_size, $thumb_attrs ); ?>
			<?php else : ?>
				<?php
				$ph_class = ( '' !== $permalink ? $thumb_img_class : 'size-full object-cover' );
				if ( $is_card_lead ) {
					$ph_class .= ' md:absolute md:inset-0 md:h-full md:w-full';
				}
				?>
				<img
					src="<?php echo esc_url( $placeholder_url ); ?>"
					alt=""
					width="1200"
					height="675"
					class="<?php echo esc_attr( $ph_class ); ?>"
					loading="<?php echo esc_attr( $is_card_lead ? 'eager' : 'lazy' ); ?>"
					decoding="async"
					<?php echo $is_card_lead ? 'fetchpriority="high"' : ''; ?>
				/>
			<?php endif; ?>
		<?php if ( '' !== $permalink ) : ?>
			</a>
		<?php else : ?>
			</div>
		<?php endif; ?>
	<?php endif; ?>

	<div class="<?php echo esc_attr( $na['inner_classes'] ); ?>">
		<?php get_template_part( 'template-parts/content-article', 'title-meta', $na ); ?>
		<?php get_template_part( 'template-parts/content-article', 'entry', $na ); ?>
	</div>
</article>
