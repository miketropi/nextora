<?php
/**
 * Post grid — dynamic block (WP_Query loop).
 *
 * @package Nextora
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks (unused).
 * @var WP_Block $block      Block instance.
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$heading = isset( $attributes['heading'] ) && is_string( $attributes['heading'] )
	? wp_kses( $attributes['heading'], array( 'strong' => array(), 'em' => array() ) )
	: '';

$enable_pagination = isset( $attributes['enablePagination'] ) && (bool) $attributes['enablePagination'];
$inherit_archive   = ! isset( $attributes['inheritArchiveContext'] ) || (bool) $attributes['inheritArchiveContext'];

$posts_per_page = isset( $attributes['postsPerPage'] ) ? (int) $attributes['postsPerPage'] : 6;
$posts_per_page = max( 1, min( $enable_pagination ? 48 : 24, $posts_per_page ) );

$columns = isset( $attributes['columns'] ) ? (int) $attributes['columns'] : 3;
$columns = max( 1, min( 4, $columns ) );

$grid_gap_key = isset( $attributes['gridGap'] ) && is_string( $attributes['gridGap'] ) ? $attributes['gridGap'] : 'md';
$gap_classes  = array(
	'none' => 'gap-0',
	'xs'   => 'gap-3',
	'sm'   => 'gap-4',
	'md'   => 'gap-6',
	'lg'   => 'gap-8',
	'xl'   => 'gap-10',
);
$grid_gap_class = $gap_classes[ $grid_gap_key ] ?? 'gap-6';

$order_by = isset( $attributes['orderBy'] ) && is_string( $attributes['orderBy'] )
	? $attributes['orderBy']
	: 'date';
$allowed_orderby = array( 'date', 'modified', 'title', 'rand' );
if ( ! in_array( $order_by, $allowed_orderby, true ) ) {
	$order_by = 'date';
}

$order = isset( $attributes['order'] ) && is_string( $attributes['order'] ) ? strtoupper( $attributes['order'] ) : 'DESC';
$order = 'ASC' === $order ? 'ASC' : 'DESC';

$show_image = ! isset( $attributes['showFeaturedImage'] ) || (bool) $attributes['showFeaturedImage'];
$ratio_key  = isset( $attributes['imageRatio'] ) && is_string( $attributes['imageRatio'] ) ? $attributes['imageRatio'] : '16-9';
$ratio_wrap_classes = array(
	'16-9' => 'aspect-video',
	'4-3'  => 'aspect-[4/3]',
	'3-2'  => 'aspect-[3/2]',
	'1-1'  => 'aspect-square',
	'3-4'  => 'aspect-[3/4]',
	'auto' => '',
);
$ratio_class = $ratio_wrap_classes[ $ratio_key ] ?? 'aspect-video';

$image_size = isset( $attributes['imageSize'] ) && is_string( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'medium_large';
$allowed_sizes = array( 'thumbnail', 'medium', 'medium_large', 'large', 'full' );
if ( ! in_array( $image_size, $allowed_sizes, true ) ) {
	$image_size = 'medium_large';
}

$show_date         = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
$show_author       = ! isset( $attributes['showAuthor'] ) || (bool) $attributes['showAuthor'];
$show_categories   = ! isset( $attributes['showCategories'] ) || (bool) $attributes['showCategories'];
$show_tags         = isset( $attributes['showTags'] ) && (bool) $attributes['showTags'];
$show_excerpt      = ! isset( $attributes['showExcerpt'] ) || (bool) $attributes['showExcerpt'];
$excerpt_words     = isset( $attributes['excerptWords'] ) ? (int) $attributes['excerptWords'] : 22;
$excerpt_words     = max( 8, min( 48, $excerpt_words ) );
$max_terms         = isset( $attributes['maxTermsDisplay'] ) ? (int) $attributes['maxTermsDisplay'] : 4;
$max_terms         = max( 1, min( 8, $max_terms ) );
$meta_stacked      = isset( $attributes['metaStyle'] ) && is_string( $attributes['metaStyle'] ) && 'stacked' === $attributes['metaStyle'];

$category_in = array();
if ( isset( $attributes['categoryIds'] ) && is_string( $attributes['categoryIds'] ) && '' !== trim( $attributes['categoryIds'] ) ) {
	foreach ( preg_split( '/\s*,\s*/', $attributes['categoryIds'] ) as $piece ) {
		$cid = absint( $piece );
		if ( $cid > 0 ) {
			$category_in[] = $cid;
		}
	}
	$category_in = array_values( array_unique( $category_in ) );
}

$paged = (int) get_query_var( 'paged' );
if ( $paged < 1 ) {
	$paged = (int) get_query_var( 'page' );
}
if ( $paged < 1 ) {
	$paged = 1;
}

$query_args = array(
	'post_type'           => 'post',
	'post_status'         => 'publish',
	'posts_per_page'      => $posts_per_page,
	'orderby'             => $order_by,
	'order'               => $order,
	'ignore_sticky_posts' => true,
	'no_found_rows'       => ! $enable_pagination,
);

if ( $enable_pagination ) {
	$query_args['paged'] = $paged;
}

$archive_category_locked = false;

if ( $inherit_archive ) {
	if ( is_category() ) {
		$cat_id = (int) get_queried_object_id();
		if ( $cat_id > 0 ) {
			$query_args['cat'] = $cat_id;
			$archive_category_locked = true;
		}
	} elseif ( is_tag() ) {
		$tag_id = (int) get_queried_object_id();
		if ( $tag_id > 0 ) {
			$query_args['tag_id'] = $tag_id;
		}
	} elseif ( is_tax() ) {
		$term = get_queried_object();
		if ( $term instanceof WP_Term ) {
			if ( 'category' === $term->taxonomy ) {
				$query_args['cat'] = (int) $term->term_id;
				$archive_category_locked = true;
			} elseif ( 'post_tag' === $term->taxonomy ) {
				$query_args['tag_id'] = (int) $term->term_id;
			} else {
				$query_args['tax_query'] = array(
					array(
						'taxonomy' => $term->taxonomy,
						'field'    => 'term_id',
						'terms'    => (int) $term->term_id,
					),
				);
			}
		}
	} elseif ( is_author() ) {
		$author_obj = get_queried_object();
		if ( $author_obj instanceof WP_User ) {
			$query_args['author'] = (int) $author_obj->ID;
		}
	} elseif ( is_search() ) {
		$search_q = get_search_query();
		if ( '' !== $search_q ) {
			$query_args['s'] = $search_q;
		}
	}
}

if ( ! $archive_category_locked && array() !== $category_in ) {
	$query_args['category__in'] = $category_in;
}

/**
 * Filter WP_Query arguments for the post grid block.
 *
 * @param array<string, mixed> $query_args Query arguments.
 * @param array<string, mixed> $attributes Block attributes.
 */
$query_args = apply_filters( 'nextora_post_grid_query_args', $query_args, is_array( $attributes ) ? $attributes : array() );
$query_args = is_array( $query_args ) ? $query_args : array();

$grid_query = new WP_Query( $query_args );

$wrapper = get_block_wrapper_attributes(
	array(
		'class' => 'nextora-post-grid',
	)
);

$column_classes = array(
	1 => 'grid-cols-1',
	2 => 'grid-cols-1 sm:grid-cols-2',
	3 => 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
	4 => 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
);
$grid_col_class = $column_classes[ $columns ] ?? $column_classes[3];

ob_start();
?>
<div <?php echo $wrapper; ?>>
	<?php if ( '' !== $heading ) : ?>
		<h2 class="nextora-post-grid__heading mb-8 text-2xl font-semibold tracking-tight text-contrast md:text-3xl">
			<?php echo $heading; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_kses above. ?>
		</h2>
	<?php endif; ?>

	<?php if ( $grid_query->have_posts() ) : ?>
		<ul class="nextora-post-grid__list <?php echo esc_attr( '!m-0 grid list-none !p-0 ' . $grid_gap_class . ' ' . $grid_col_class ); ?>">
			<?php
			while ( $grid_query->have_posts() ) :
				$grid_query->the_post();
				$post_id    = get_the_ID();
				$thumb_id   = (int) get_post_thumbnail_id( $post_id );
				$has_thumb  = $thumb_id > 0;
				$meta_items = array();

				if ( $show_date ) {
					$meta_items[] = sprintf(
						'<time class="nextora-post-grid__date whitespace-nowrap" datetime="%1$s">%2$s</time>',
						esc_attr( get_the_date( DATE_W3C ) ),
						esc_html( get_the_date() )
					);
				}

				if ( $show_author ) {
					$author_id   = (int) get_the_author_meta( 'ID' );
					$author_name = get_the_author_meta( 'display_name', $author_id );
					if ( '' !== $author_name ) {
						$author_url = get_author_posts_url( $author_id );
						$meta_items[] = sprintf(
							'<span class="nextora-post-grid__author whitespace-nowrap"><span class="text-secondary/70">%s</span> <a class="font-medium text-contrast no-underline hover:underline" href="%s">%s</a></span>',
							esc_html__( 'By', 'nextora' ),
							esc_url( $author_url ),
							esc_html( $author_name )
						);
					}
				}

				$meta_sep_outer = $meta_stacked ? ' flex flex-col items-start gap-1 ' : ' flex flex-row flex-wrap items-center gap-x-2 gap-y-1 ';
				?>
				<li class="nextora-post-grid__item min-w-0">
					<article <?php post_class( 'nextora-post-grid__card group flex h-full flex-col overflow-hidden rounded-xl border border-secondary/10 bg-base hover:border-primary/25 transition-all duration-200' ); ?>>
						<?php if ( $show_image ) : ?>
							<a href="<?php the_permalink(); ?>" class="nextora-post-grid__media-link relative block shrink-0 overflow-hidden bg-secondary/5 outline-none ring-contrast/20 focus-visible:ring-2" tabindex="-1" aria-hidden="true">
								<?php
								$media_box = 'relative w-full overflow-hidden ' . ( '' !== $ratio_class ? $ratio_class : 'max-h-64' );
								?>
								<div class="<?php echo esc_attr( $media_box ); ?>">
									<?php
									if ( $has_thumb ) {
										echo wp_get_attachment_image(
											$thumb_id,
											$image_size,
											false,
											array(
												'class'   => 'nextora-post-grid__image h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]',
												'loading' => 'lazy',
												'alt'     => esc_attr( get_post_meta( $thumb_id, '_wp_attachment_image_alt', true ) ?: get_the_title() ),
											)
										);
									} else {
										?>
										<div class="flex h-full min-h-[8rem] w-full items-center justify-center bg-gradient-to-br from-secondary/10 to-secondary/5 text-secondary/40" aria-hidden="true">
											<span class="text-sm font-medium tracking-wide"><?php esc_html_e( 'No image', 'nextora' ); ?></span>
										</div>
										<?php
									}
									?>
								</div>
							</a>
						<?php endif; ?>

						<div class="nextora-post-grid__body flex flex-1 flex-col gap-3 p-5 md:p-6">
							<?php if ( $show_categories ) : ?>
								<?php
								$cats = get_the_terms( $post_id, 'category' );
								if ( is_array( $cats ) && array() !== $cats ) :
									$cats = array_values(
										array_filter(
											$cats,
											static function ( $t ) {
												return $t instanceof WP_Term;
											}
										)
									);
									$cats = array_slice( $cats, 0, $max_terms );
									?>
									<ul class="nextora-post-grid__categories !m-0 flex list-none flex-wrap gap-1.5 !p-0">
										<?php foreach ( $cats as $cat ) : ?>
											<?php
											if ( ! $cat instanceof WP_Term ) {
												continue;
											} 
											$cat_link = get_term_link( $cat );
											if ( is_wp_error( $cat_link ) ) {
												continue;
											}
											?>
											<li>
												<a href="<?php echo esc_url( $cat_link ); ?>" class="inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-secondary no-underline transition-colors hover:bg-primary/15 hover:text-primary">
													<?php echo esc_html( $cat->name ); ?>
												</a>
											</li>
										<?php endforeach; ?>
									</ul>
								<?php endif; ?>
							<?php endif; ?>

							<h3 class="nextora-post-grid__title order-0 !m-0 text-lg font-semibold leading-snug tracking-tight  md:text-xl">
								<a href="<?php the_permalink(); ?>" class="text-inherit !no-underline decoration-secondary/30 decoration-2 underline-offset-4 transition-colors !text-contrast hover:!text-primary">
									<?php the_title(); ?>
								</a>
							</h3>

							<?php if ( array() !== $meta_items ) : ?>
								<div class="nextora-post-grid__meta text-sm text-secondary<?php echo esc_attr( $meta_sep_outer ); ?>">
									<?php
									$count = count( $meta_items );
									foreach ( $meta_items as $i => $item ) {
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_* in sprintf above.
										echo $item;
										if ( $i < $count - 1 ) {
											if ( $meta_stacked ) {
												echo '';
											} else {
												echo '<span class="text-secondary/35 select-none" aria-hidden="true">·</span>';
											}
										}
									}
									?>
								</div>
							<?php endif; ?>

							<?php
							$tag_items = array();
							if ( $show_tags ) {
								$tags = get_the_terms( $post_id, 'post_tag' );
								if ( is_array( $tags ) && array() !== $tags ) {
									$tags = array_values(
										array_filter(
											$tags,
											static function ( $t ) {
												return $t instanceof WP_Term;
											}
										)
									);
									$tags = array_slice( $tags, 0, $max_terms );
									foreach ( $tags as $tag ) {
										if ( ! $tag instanceof WP_Term ) {
											continue;
										}
										$turl = get_term_link( $tag );
										if ( is_wp_error( $turl ) ) {
											continue;
										}
										$tag_items[] = sprintf(
											'<a class="font-medium text-contrast no-underline hover:underline" href="%s">%s</a>',
											esc_url( $turl ),
											esc_html( $tag->name )
										);
									}
								}
							}
							$has_tag_row = array() !== $tag_items;
							$has_footer  = $has_tag_row;
							?>

							<?php if ( $show_excerpt ) : ?>
								<p class="nextora-post-grid__excerpt m-0 text-sm leading-relaxed text-secondary">
									<?php echo esc_html( wp_trim_words( get_the_excerpt(), $excerpt_words, '…' ) ); ?>
								</p>
							<?php endif; ?>

							<?php if ( $has_footer ) : ?>
							<div class="nextora-post-grid__footer mt-auto flex flex-col gap-3">

								<?php if ( $has_tag_row ) : ?>
									<?php if ( $meta_stacked ) : ?>
								<div class="nextora-post-grid__tags flex flex-col items-start gap-1 text-sm text-secondary">
									<span class="text-secondary/70"><?php esc_html_e( 'Tags', 'nextora' ); ?></span>
									<div class="flex flex-row flex-wrap items-center gap-x-2 gap-y-1">
										<?php
										foreach ( $tag_items as $ti => $tag_html ) {
											if ( $ti > 0 ) {
												echo '<span class="text-secondary/35 select-none" aria-hidden="true">·</span>';
											}
											// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_* in sprintf above.
											echo $tag_html;
										}
										?>
									</div>
								</div>
									<?php else : ?>
								<div class="nextora-post-grid__tags pt-5 border-t border-secondary/20 flex flex-row flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary">
									<span class="whitespace-nowrap text-secondary/70"><?php esc_html_e( 'Tags', 'nextora' ); ?></span>
									<span class="text-secondary/35 select-none" aria-hidden="true">·</span>
										<?php
										foreach ( $tag_items as $ti => $tag_html ) {
											if ( $ti > 0 ) {
												echo '<span class="text-secondary/35 select-none" aria-hidden="true">·</span>';
											}
											// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_* in sprintf above.
											echo $tag_html;
										}
										?>
								</div>
									<?php endif; ?>
								<?php endif; ?>
							</div>
							<?php endif; ?>
						</div>
					</article>
				</li>
				<?php
			endwhile;
			wp_reset_postdata();
			?>
		</ul>
	<?php else : ?>
		<p class="nextora-post-grid__empty m-0 rounded-xl border border-dashed border-secondary/25 bg-secondary/5 px-6 py-10 text-center text-sm text-secondary">
			<?php esc_html_e( 'No posts found.', 'nextora' ); ?>
		</p>
	<?php endif; ?>

	<?php
	if ( $enable_pagination && $grid_query->max_num_pages > 1 ) :
		$pagination_args = array(
			'total'     => $grid_query->max_num_pages,
			'current'   => $paged,
			'type'      => 'list',
			'mid_size'  => 1,
			'prev_text' => __( 'Newer', 'nextora' ),
			'next_text' => __( 'Older', 'nextora' ),
		);
		/**
		 * Filter arguments passed to {@see paginate_links()} for the post grid block.
		 *
		 * @param array<string, mixed> $pagination_args Arguments for paginate_links.
		 * @param WP_Query             $grid_query      Block query instance.
		 * @param array<string, mixed> $attributes      Block attributes.
		 */
		$pagination_args = apply_filters( 'nextora_post_grid_pagination_args', $pagination_args, $grid_query, is_array( $attributes ) ? $attributes : array() );
		$pagination_args = is_array( $pagination_args ) ? $pagination_args : array();
		$links           = paginate_links( $pagination_args );
		if ( is_string( $links ) && '' !== $links ) :
			?>
		<nav class="nextora-post-grid__pagination nextora-pagination-wrap nextora-pagination-wrap--archive" aria-label="<?php esc_attr_e( 'Pagination', 'nextora' ); ?>">
			<?php echo $links; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- paginate_links() from core. ?>
		</nav>
			<?php
		endif;
	endif;
	?>
</div>
<?php
$html = (string) ob_get_clean();

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_* inside template.
echo apply_filters( 'nextora_post_grid_output', $html, $query_args, is_array( $attributes ) ? $attributes : array() );
