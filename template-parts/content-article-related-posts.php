<?php
/**
 * Related posts list (singular post only) — below entry in {@see content-article-default.php}.
 *
 * Minimal list: small thumbnail, title, one meta line (author, date, category & tag links).
 * Related by shared categories or tags — {@see nextora_get_related_posts_query()}.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! isset( $args ) || ! is_array( $args ) ) {
	return;
}

$na = $args;
if ( 'post' !== ( $na['content_type'] ?? '' ) || ! is_singular( 'post' ) ) {
	return;
}

$post_id = get_the_ID();
if ( $post_id <= 0 ) {
	return;
}

$query = nextora_get_related_posts_query( $post_id );
if ( null === $query ) {
	return;
}

$placeholder_url = nextora_get_post_placeholder_image_url();
$default_size    = 'thumbnail';

/**
 * Section heading (plain text; escaped when printed).
 *
 * @param string $heading Default translated “Related posts”.
 * @param int    $post_id Post ID.
 */
$heading = apply_filters( 'nextora_related_posts_heading', __( 'Related posts', 'nextora' ), $post_id );
$heading = is_string( $heading ) ? $heading : __( 'Related posts', 'nextora' );

$heading_id = 'nextora-related-posts-' . (string) $post_id;

$dot = '<span class="text-contrast/25" aria-hidden="true"> · </span>';
?>
<section
	class="nextora-related-posts mt-[clamp(2.5rem,6vw,4rem)] border-t border-contrast/10 pt-[clamp(2rem,5vw,3rem)]"
	aria-labelledby="<?php echo esc_attr( $heading_id ); ?>"
>
	<?php do_action( 'nextora_before_related_posts', $post_id ); ?>
	<h2
		id="<?php echo esc_attr( $heading_id ); ?>"
		class="text-lg font-semibold tracking-tight text-contrast sm:text-xl !mt-1 !mb-1"
	>
		<?php echo esc_html( $heading ); ?>
	</h2>
	<ul class="nextora-related-posts__list m-0 mt-5 list-none border-t border-contrast/10 p-0 divide-y divide-contrast/10">
		<?php
		while ( $query->have_posts() ) {
			$query->the_post();
			$rel_id    = get_the_ID();
			$rel_link  = get_permalink();
			$rel_link  = is_string( $rel_link ) ? $rel_link : '';
			$rel_title = get_the_title();
			$rel_title = is_string( $rel_title ) ? $rel_title : '';

			$date_iso   = get_the_date( 'c' );
			$date_iso   = is_string( $date_iso ) ? $date_iso : '';
			$date_human = get_the_date();
			$date_human = is_string( $date_human ) ? $date_human : '';

			$author_name = get_the_author();
			$author_name = is_string( $author_name ) ? $author_name : '';

			$categories = get_the_category();
			$categories = is_array( $categories ) ? $categories : array();
			$tags       = get_the_tags();
			$tags       = is_array( $tags ) ? $tags : array();

			/**
			 * Registered image size for the small list thumbnail.
			 *
			 * @param string $size    Default `thumbnail`.
			 * @param int    $rel_id  Related post ID.
			 * @param int    $post_id Current singular post ID.
			 */
			$thumb_size = apply_filters( 'nextora_related_posts_thumbnail_size', $default_size, $rel_id, $post_id );
			$thumb_size = is_string( $thumb_size ) && '' !== $thumb_size ? $thumb_size : $default_size;

			$thumb_attrs = array(
				'class'    => 'size-full object-cover',
				'alt'      => '' !== $rel_title ? wp_strip_all_tags( $rel_title ) : '',
				'decoding' => 'async',
				'loading'  => 'lazy',
			);

			$meta_parts = array();
			if ( '' !== $author_name ) {
				$meta_parts[] = '<span class="text-contrast/60">' . esc_html__( 'By', 'nextora' ) . '</span> ' . esc_html( $author_name );
			}
			if ( '' !== $date_human ) {
				$meta_parts[] = '<time datetime="' . esc_attr( $date_iso ) . '" class="tabular-nums">' . esc_html( $date_human ) . '</time>';
			}

			$cat_links = array();
			foreach ( $categories as $cat ) {
				if ( ! $cat instanceof WP_Term ) {
					continue;
				}
				$tlink = get_term_link( $cat );
				if ( is_wp_error( $tlink ) ) {
					continue;
				}
				$cat_links[] = '<a href="' . esc_url( $tlink ) . '">' . esc_html( $cat->name ) . '</a>';
			}
			if ( ! empty( $cat_links ) ) {
				$meta_parts[] = implode( ', ', $cat_links );
			}

			$tag_links = array();
			foreach ( $tags as $tag ) {
				if ( ! $tag instanceof WP_Term ) {
					continue;
				}
				$tlink = get_term_link( $tag );
				if ( is_wp_error( $tlink ) ) {
					continue;
				}
				$tag_links[] = '<a href="' . esc_url( $tlink ) . '">' . esc_html( $tag->name ) . '</a>';
			}
			if ( ! empty( $tag_links ) ) {
				$meta_parts[] = implode( ', ', $tag_links );
			}

			$meta_html = implode( $dot, $meta_parts );

			/**
			 * Full meta line HTML (author, date, term links). Passed through `wp_kses_post` before output.
			 *
			 * @param string $html    Built default string.
			 * @param int    $rel_id  Related post ID.
			 * @param int    $post_id Current singular post ID.
			 */
			$meta_html = apply_filters( 'nextora_related_posts_meta_line_html', $meta_html, $rel_id, $post_id );
			$meta_html = is_string( $meta_html ) ? wp_kses_post( $meta_html ) : '';
			?>
		<li class="m-0 !py-4 first:pt-0 last:pb-0">
			<div class="flex gap-3 sm:gap-4">
				<?php if ( '' !== $rel_link ) : ?>
				<a
					href="<?php echo esc_url( $rel_link ); ?>"
					class="nextora-related-posts__thumb-link relative mt-0.5 size-14 shrink-0 overflow-hidden rounded-md bg-surface outline-none ring-offset-base transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 sm:size-16"
					tabindex="-1"
					aria-hidden="true"
				>
					<?php if ( has_post_thumbnail() ) : ?>
						<?php echo get_the_post_thumbnail( $rel_id, $thumb_size, $thumb_attrs ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<?php elseif ( '' !== $placeholder_url ) : ?>
						<img
							src="<?php echo esc_url( $placeholder_url ); ?>"
							alt=""
							width="150"
							height="150"
							class="size-full object-cover opacity-80"
							loading="lazy"
							decoding="async"
						/>
					<?php endif; ?>
				</a>
				<?php else : ?>
				<div class="relative mt-0.5 size-14 shrink-0 overflow-hidden rounded-md bg-surface sm:size-16">
					<?php if ( has_post_thumbnail() ) : ?>
						<?php echo get_the_post_thumbnail( $rel_id, $thumb_size, $thumb_attrs ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<?php elseif ( '' !== $placeholder_url ) : ?>
						<img
							src="<?php echo esc_url( $placeholder_url ); ?>"
							alt=""
							width="150"
							height="150"
							class="size-full object-cover opacity-80"
							loading="lazy"
							decoding="async"
						/>
					<?php endif; ?>
				</div>
				<?php endif; ?>

				<div class="min-w-0 flex-1">
					<?php if ( '' !== $rel_link ) : ?>
					<a
						href="<?php echo esc_url( $rel_link ); ?>"
						rel="bookmark"
						class="text-md font-semibold leading-snug !text-contrast !no-underline transition-colors duration-200 hover:!text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 !focus-visible:ring-primary/35 focus-visible:ring-offset-2 !focus-visible:ring-offset-base"
					>
						<?php echo esc_html( $rel_title ); ?>
					</a>
					<?php else : ?>
					<span class="text-[0.9375rem] font-semibold leading-snug text-contrast"><?php echo esc_html( $rel_title ); ?></span>
					<?php endif; ?>

					<?php if ( '' !== $meta_html ) : ?>
					<p class="nextora-related-posts__meta m-0 !mt-1.5 text-[0.8125rem] leading-relaxed text-secondary [&_a]:text-secondary [&_a]:underline-offset-2 [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-primary [&_a:hover]:underline">
						<?php echo $meta_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- kses above. ?>
					</p>
					<?php endif; ?>

					<?php
					$append = apply_filters( 'nextora_related_posts_item_append_html', '', $rel_id, $post_id );
					$append = is_string( $append ) ? wp_kses_post( $append ) : '';
					if ( '' !== $append ) {
						echo '<div class="mt-2 text-[0.8125rem]">' . $append . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					}
					?>
				</div>
			</div>
		</li>
		<?php } ?>
		<?php
		wp_reset_postdata();
		?>
	</ul>
	<?php do_action( 'nextora_after_related_posts', $post_id ); ?>
</section>
