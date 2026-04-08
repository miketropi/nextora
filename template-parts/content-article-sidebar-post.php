<?php
/**
 * Single post sidebar — compact meta + prev/next (sticky from lg).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();
if ( $post_id <= 0 || 'post' !== get_post_type( $post_id ) ) {
	return;
}

$meta_sep = esc_html__( ', ', 'nextora' );
$title    = get_the_title( $post_id );
$title    = is_string( $title ) ? $title : '';

$prev_post = get_adjacent_post( false, '', true );
$next_post = get_adjacent_post( false, '', false );

$label_class = 'm-0 text-xs font-medium text-contrast/70';
$link_row    = 'text-sm leading-relaxed text-contrast [&_a]:text-primary [&_a]:font-medium [&_a]:no-underline [&_a]:underline-offset-2 [&_a:hover]:underline';
?>
<aside
	class="nextora-entry-sidebar w-full min-w-0 shrink-0 lg:w-[15rem] lg:max-w-[15rem] xl:w-[16rem] xl:max-w-[16rem]"
	aria-label="<?php esc_attr_e( 'Post details', 'nextora' ); ?>"
>
	<div class="nextora-entry-sidebar__panel lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
		<?php if ( has_post_thumbnail( $post_id ) ) : ?>
			<figure class="m-0 mb-5 overflow-hidden rounded-md bg-contrast/[0.04] leading-[0px]">
				<?php
				echo get_the_post_thumbnail(
					$post_id,
					'medium_large',
					array(
						'class'    => 'aspect-[4/3] h-auto w-full object-cover',
						'alt'      => wp_strip_all_tags( $title ),
						'decoding' => 'async',
						'loading'  => 'lazy',
					)
				);
				?>
			</figure>
		<?php endif; ?>

		<div class="space-y-5">
			<?php if ( post_type_supports( 'post', 'author' ) ) : ?>
				<?php
				$author_id   = (int) get_post_field( 'post_author', $post_id );
				$author_name = $author_id > 0 ? get_the_author_meta( 'display_name', $author_id ) : '';
				$author_name = is_string( $author_name ) ? $author_name : '';
				$author_url  = $author_id > 0 ? get_author_posts_url( $author_id ) : '';
				$author_url  = is_string( $author_url ) ? $author_url : '';
				?>
				<div>
					<p class="<?php echo esc_attr( $label_class ); ?>"><?php esc_html_e( 'Author', 'nextora' ); ?></p>
					<div class="mt-1.5 flex items-center gap-3">
						<?php
						if ( $author_id > 0 ) {
							echo get_avatar(
								$author_id,
								40,
								'',
								'',
								array(
									'class' => 'size-10 shrink-0 rounded-full',
								)
							);
						}
						?>
						<div class="min-w-0 flex-1">
							<?php if ( '' !== $author_url && '' !== $author_name ) : ?>
								<a href="<?php echo esc_url( $author_url ); ?>" class="block truncate text-sm font-semibold text-contrast no-underline hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><?php echo esc_html( $author_name ); ?></a>
							<?php elseif ( '' !== $author_name ) : ?>
								<p class="m-0 truncate text-sm font-semibold text-contrast"><?php echo esc_html( $author_name ); ?></p>
							<?php endif; ?>
						</div>
					</div>
				</div>
			<?php endif; ?>

			<div>
				<p class="<?php echo esc_attr( $label_class ); ?>"><?php esc_html_e( 'Published', 'nextora' ); ?></p>
				<?php
				$published_w3c = get_the_date( DATE_W3C, $post_id );
				$published     = get_the_date( '', $post_id );
				$published_w3c = is_string( $published_w3c ) ? $published_w3c : '';
				$published     = is_string( $published ) ? $published : '';
				?>
				<p class="m-0 mt-1.5 text-sm font-medium text-contrast">
					<time datetime="<?php echo esc_attr( $published_w3c ); ?>"><?php echo esc_html( $published ); ?></time>
				</p>
			</div>

			<?php
			$cats = get_the_category( $post_id );
			if ( ! empty( $cats ) ) :
				?>
				<div>
					<p class="<?php echo esc_attr( $label_class ); ?>"><?php esc_html_e( 'Categories', 'nextora' ); ?></p>
					<p class="<?php echo esc_attr( 'm-0 mt-1.5 ' . $link_row ); ?>">
						<?php echo wp_kses_post( get_the_category_list( $meta_sep, '', $post_id ) ); ?>
					</p>
				</div>
			<?php endif; ?>

			<?php
			$tags = get_the_tags( $post_id );
			if ( ! empty( $tags ) ) :
				?>
				<div>
					<p class="<?php echo esc_attr( $label_class ); ?>"><?php esc_html_e( 'Tags', 'nextora' ); ?></p>
					<p class="<?php echo esc_attr( 'm-0 mt-1.5 flex flex-wrap gap-x-1 gap-y-1 ' . $link_row ); ?>">
						<?php echo wp_kses_post( get_the_tag_list( '', $meta_sep, '', $post_id ) ); ?>
					</p>
				</div>
			<?php endif; ?>

			<?php if ( $prev_post instanceof WP_Post || $next_post instanceof WP_Post ) : ?>
				<div class="mt-6 space-y-3">
					<p class="<?php echo esc_attr( $label_class ); ?>"><?php esc_html_e( 'More posts', 'nextora' ); ?></p>
					<nav aria-label="<?php esc_attr_e( 'Adjacent posts', 'nextora' ); ?>">
						<ul class="m-0 flex list-none flex-col gap-4 p-0">
							<?php if ( $prev_post instanceof WP_Post ) : ?>
								<li class="m-0">
									<a href="<?php echo esc_url( get_permalink( $prev_post ) ); ?>" class="group block no-underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary !no-underline">
										<span class="block text-xs font-medium text-contrast/65"><?php esc_html_e( '← Previous', 'nextora' ); ?></span>
										<span class="mt-0.5 block text-sm font-semibold leading-snug text-contrast group-hover:text-primary"><?php echo esc_html( get_the_title( $prev_post ) ); ?></span>
									</a>
								</li>
							<?php endif; ?>
							<?php if ( $next_post instanceof WP_Post ) : ?>
								<li class="m-0">
									<a href="<?php echo esc_url( get_permalink( $next_post ) ); ?>" class="group block no-underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary !no-underline">
										<span class="block text-xs font-medium text-contrast/65"><?php esc_html_e( 'Next →', 'nextora' ); ?></span>
										<span class="mt-0.5 block text-sm font-semibold leading-snug text-contrast group-hover:text-primary"><?php echo esc_html( get_the_title( $next_post ) ); ?></span>
									</a>
								</li>
							<?php endif; ?>
						</ul>
					</nav>
				</div>
			<?php endif; ?>
		</div>
	</div>
</aside>
