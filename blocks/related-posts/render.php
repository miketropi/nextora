<?php
/**
 * Related Posts — dynamic block server-side render.
 *
 * Queries posts related to the current single post by shared categories,
 * tags, or both. Renders a list of cards with small thumbnails.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks HTML (unused).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Resolve post ID: prefer the global post, fall back to the postId
// attribute passed by ServerSideRender (REST API context).
$current_post_id = (int) get_the_ID();
if ( $current_post_id <= 0 && ! empty( $attributes['postId'] ) && (int) $attributes['postId'] > 0 ) {
	$current_post_id = (int) $attributes['postId'];
}
if ( $current_post_id <= 0 ) {
	return;
}

// ---------------------------------------------------------------------------
// Parse attributes
// ---------------------------------------------------------------------------

$heading      = ! empty( $attributes['heading'] ) ? wp_kses( $attributes['heading'], array( 'strong' => array(), 'em' => array() ) ) : '';
$heading_tag  = in_array( $attributes['headingLevel'] ?? '', array( 'h2', 'h3', 'h4' ), true ) ? $attributes['headingLevel'] : 'h4';

$posts_to_show = isset( $attributes['postsToShow'] ) ? (int) $attributes['postsToShow'] : 3;
$posts_to_show = max( 1, min( 12, $posts_to_show ) );

$related_by = isset( $attributes['relatedBy'] ) && is_string( $attributes['relatedBy'] ) ? $attributes['relatedBy'] : 'category';
if ( ! in_array( $related_by, array( 'category', 'tag', 'both' ), true ) ) {
	$related_by = 'category';
}

$order_by = isset( $attributes['orderBy'] ) && is_string( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
$allowed_orderby = array( 'date', 'rand', 'comment_count', 'modified' );
if ( ! in_array( $order_by, $allowed_orderby, true ) ) {
	$order_by = 'date';
}

$order = isset( $attributes['order'] ) && is_string( $attributes['order'] ) ? strtoupper( $attributes['order'] ) : 'DESC';
$order = 'ASC' === $order ? 'ASC' : 'DESC';

$show_image = ! isset( $attributes['showFeaturedImage'] ) || (bool) $attributes['showFeaturedImage'];
$show_date  = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
$show_excerpt = ! empty( $attributes['showExcerpt'] );
$excerpt_len  = isset( $attributes['excerptLength'] ) ? (int) $attributes['excerptLength'] : 20;
$excerpt_len  = max( 8, min( 60, $excerpt_len ) );

// ---------------------------------------------------------------------------
// Collect term IDs from current post
// ---------------------------------------------------------------------------

$term_ids = array();

if ( 'category' === $related_by || 'both' === $related_by ) {
	$cats = get_the_terms( $current_post_id, 'category' );
	if ( is_array( $cats ) && array() !== $cats ) {
		foreach ( $cats as $cat ) {
			if ( $cat instanceof WP_Term ) {
				$term_ids[] = (int) $cat->term_id;
			}
		}
	}
}

if ( 'tag' === $related_by || 'both' === $related_by ) {
	$tags = get_the_terms( $current_post_id, 'post_tag' );
	if ( is_array( $tags ) && array() !== $tags ) {
		foreach ( $tags as $tag ) {
			if ( $tag instanceof WP_Term ) {
				$term_ids[] = (int) $tag->term_id;
			}
		}
	}
}

$term_ids = array_values( array_unique( $term_ids ) );

// No terms to match — nothing to show.
if ( array() === $term_ids ) {
	return;
}

// ---------------------------------------------------------------------------
// Build WP_Query
// ---------------------------------------------------------------------------

$tax_query = array( 'relation' => 'OR' );

if ( 'category' === $related_by || 'both' === $related_by ) {
	$cat_ids = array();
	$cats    = get_the_terms( $current_post_id, 'category' );
	if ( is_array( $cats ) ) {
		foreach ( $cats as $cat ) {
			if ( $cat instanceof WP_Term ) {
				$cat_ids[] = (int) $cat->term_id;
			}
		}
	}
	if ( array() !== $cat_ids ) {
		$tax_query[] = array(
			'taxonomy' => 'category',
			'field'    => 'term_id',
			'terms'    => $cat_ids,
		);
	}
}

if ( 'tag' === $related_by || 'both' === $related_by ) {
	$tag_ids = array();
	$tags    = get_the_terms( $current_post_id, 'post_tag' );
	if ( is_array( $tags ) ) {
		foreach ( $tags as $tag ) {
			if ( $tag instanceof WP_Term ) {
				$tag_ids[] = (int) $tag->term_id;
			}
		}
	}
	if ( array() !== $tag_ids ) {
		$tax_query[] = array(
			'taxonomy' => 'post_tag',
			'field'    => 'term_id',
			'terms'    => $tag_ids,
		);
	}
}

$query_args = array(
	'post_type'           => 'post',
	'post_status'         => 'publish',
	'posts_per_page'      => $posts_to_show,
	'post__not_in'        => array( $current_post_id ),
	'orderby'             => $order_by,
	'order'               => $order,
	'ignore_sticky_posts' => true,
	'no_found_rows'       => true,
	'tax_query'           => $tax_query,
);

$related_query = new WP_Query( $query_args );

// ---------------------------------------------------------------------------
// Wrapper
// ---------------------------------------------------------------------------

$wrapper_classes = array( 'nextora-related-posts' );
if ( $show_image ) {
	$wrapper_classes[] = 'nextora-related-posts--has-image';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $wrapper_classes ),
	),
);

// Heading tag sanitised at the top.
$heading_open  = '<' . $heading_tag . ' class="nextora-related-posts__heading">';
$heading_close = '</' . $heading_tag . '>';

// Enqueue view script (dynamic blocks don't always auto-enqueue viewScript).
if ( ! is_admin() && ! wp_script_is( 'nextora-related-posts-view-script', 'registered' ) ) {
	$view_path = __DIR__ . '/view.js';
	$view_uri  = (string) get_template_directory_uri() . '/blocks/related-posts/view.js';
	if ( is_readable( $view_path ) ) {
		wp_register_script(
			'nextora-related-posts-view-script',
			$view_uri,
			array(),
			(string) filemtime( $view_path ),
			true,
		);
		wp_enqueue_script( 'nextora-related-posts-view-script' );
	}
}

?>
<div <?php echo $wrapper_attributes; ?>>

	<?php if ( '' !== $heading ) : ?>
		<?php echo $heading_open . $heading . $heading_close; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	<?php endif; ?>

	<?php if ( $related_query->have_posts() ) : ?>
		<ul class="nextora-related-posts__grid">
			<?php
			while ( $related_query->have_posts() ) :
				$related_query->the_post();
			$post_id    = get_the_ID();
			if ( false === $post_id ) {
				continue;
			}
				$thumb_id   = (int) get_post_thumbnail_id( $post_id );
				$has_thumb  = $thumb_id > 0;
				$post_title = get_the_title();
				$post_link  = (string) get_permalink();
				$post_date  = (string) get_the_date( '', $post_id );
				$datetime   = (string) get_the_date( DATE_W3C, $post_id );
				$excerpt    = $show_excerpt ? wp_trim_words( get_the_excerpt( $post_id ), $excerpt_len, '…' ) : '';

				// Resolve thumbnail URL for view.js mouse-follow effect.
				$thumb_url = '';
				if ( $has_thumb ) {
					$thumb_src = wp_get_attachment_image_src( $thumb_id, 'medium_large' );
					if ( is_array( $thumb_src ) && ! empty( $thumb_src[0] ) ) {
						$thumb_url = (string) $thumb_src[0];
					}
				}
				?>
				<li class="nextora-related-posts__item">
					<article
						class="nextora-related-posts__card"
						<?php if ( '' !== $thumb_url ) : ?>
							data-nextora-rp-thumb="<?php echo esc_url( $thumb_url ); ?>"
						<?php endif; ?>
					>

						<?php if ( $show_image ) : ?>
							<a
								href="<?php echo esc_url( $post_link ); ?>"
								class="nextora-related-posts__image-link"
								tabindex="-1"
								aria-hidden="true"
							>
								<div class="nextora-related-posts__image-wrap">
									<?php if ( $has_thumb ) : ?>
										<?php
										echo wp_get_attachment_image(
											$thumb_id,
											'thumbnail',
											false,
											array(
												'class'   => 'nextora-related-posts__image',
												'loading' => 'lazy',
												'alt'     => esc_attr( get_post_meta( $thumb_id, '_wp_attachment_image_alt', true ) ?: $post_title ),
											),
										);
										?>
									<?php else : ?>
										<div class="nextora-related-posts__image-placeholder" aria-hidden="true">
											<span><?php esc_html_e( 'No image', 'nextora' ); ?></span>
										</div>
									<?php endif; ?>
								</div>
							</a>
						<?php endif; ?>

						<div class="nextora-related-posts__body">
							<h3 class="nextora-related-posts__title">
								<a href="<?php echo esc_url( $post_link ); ?>" class="nextora-related-posts__title-link">
									<?php echo esc_html( $post_title ); ?>
								</a>
							</h3>

							<?php if ( $show_date ) : ?>
								<time
									class="nextora-related-posts__date"
									datetime="<?php echo esc_attr( $datetime ); ?>"
								>
									<?php echo esc_html( $post_date ); ?>
								</time>
							<?php endif; ?>

							<?php if ( $show_excerpt && '' !== $excerpt ) : ?>
								<p class="nextora-related-posts__excerpt">
									<?php echo esc_html( $excerpt ); ?>
								</p>
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
		<p class="nextora-related-posts__empty">
			<?php esc_html_e( 'No related posts found.', 'nextora' ); ?>
		</p>
	<?php endif; ?>

</div>
