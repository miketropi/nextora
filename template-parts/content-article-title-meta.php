<?php
/**
 * Article header: title (optional link), meta row, share + copy link.
 *
 * Expects `$args` from {@see get_template_part()} — same array as {@see nextora_content_article_vars()}.
 * Third parties: see {@see 'nextora_article_meta_pieces'}, {@see 'nextora_article_share_items'},
 * and related hooks in `docs/extensibility.md`.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! isset( $args ) || ! is_array( $args ) ) {
	return;
}

$na = $args;

$post_id = (int) get_the_ID();

$title_heading = $na['title_heading'];
if ( ! is_string( $title_heading ) || ( 'h1' !== $title_heading && 'h2' !== $title_heading ) ) {
	$title_heading = 'h1';
}

$show_title = ! empty( $na['show_entry_title'] );
$title      = is_string( $na['title'] ) ? $na['title'] : '';
$permalink  = is_string( $na['permalink'] ) ? $na['permalink'] : '';
$link_title = ! empty( $na['link_title'] );
$show_meta  = ! empty( $na['show_meta'] );

/**
 * Filter the title string shown in the article header (default layout / cards).
 *
 * @param string               $title        Post title.
 * @param array<string, mixed> $article_args Vars from {@see nextora_content_article_vars()}.
 */
$title = apply_filters( 'nextora_article_display_title', $title, $na );
$title = is_string( $title ) ? $title : '';

/**
 * Filter permalink used for the title link and share/copy targets.
 *
 * @param string               $permalink    Canonical URL.
 * @param array<string, mixed> $article_args Article args.
 */
$permalink = apply_filters( 'nextora_article_permalink', $permalink, $na );
$permalink = is_string( $permalink ) ? $permalink : '';

$show_share = ! empty( $na['show_share_actions'] ) && '' !== $permalink;
$show_share = (bool) apply_filters( 'nextora_show_article_share_actions', $show_share, $post_id, $na );

/**
 * Filter classes on the article header wrapper (`<header>`).
 *
 * @param string               $classes      Space-separated classes.
 * @param array<string, mixed> $article_args Article args.
 */
$header_classes = apply_filters( 'nextora_article_header_classes', $na['header_classes'], $na );
$header_classes = is_string( $header_classes ) ? $header_classes : $na['header_classes'];

/**
 * Filter classes on the article title element (`h1` / `h2`).
 *
 * @param string               $classes      Space-separated classes.
 * @param array<string, mixed> $article_args Article args.
 */
$title_classes = apply_filters( 'nextora_article_title_classes', $na['title_classes'], $na );
$title_classes = is_string( $title_classes ) ? $title_classes : $na['title_classes'];

/**
 * Filter classes on the linked title anchor (when the title is a link).
 *
 * @param string               $classes      Space-separated classes.
 * @param array<string, mixed> $article_args Article args.
 */
$title_link_classes = apply_filters( 'nextora_article_title_link_classes', $na['title_link_classes'], $na );
$title_link_classes = is_string( $title_link_classes ) ? $title_link_classes : $na['title_link_classes'];

/**
 * Fires immediately before the article title/meta `<header>` element.
 *
 * @param array<string, mixed> $article_args Article args.
 */
do_action( 'nextora_before_article_title_meta_header', $na );
?>

<header class="<?php echo esc_attr( $header_classes ); ?>">
	<?php
	/**
	 * Fires at the start of the article title/meta header (inside `<header>`).
	 *
	 * @param array<string, mixed> $article_args Article args.
	 */
	do_action( 'nextora_article_title_meta_header_start', $na );
	?>

	<?php if ( $show_title ) : ?>
		<<?php echo esc_attr( $title_heading ); ?> class="<?php echo esc_attr( $title_classes ); ?>">
			<?php if ( $link_title && '' !== $permalink ) : ?>
				<a href="<?php echo esc_url( $permalink ); ?>" class="<?php echo esc_attr( $title_link_classes ); ?>" rel="bookmark"><?php echo esc_html( $title ); ?></a>
			<?php else : ?>
				<?php echo esc_html( $title ); ?>
			<?php endif; ?>
		</<?php echo esc_attr( $title_heading ); ?>>
	<?php endif; ?>

	<?php
	if ( $show_meta && 'post' === get_post_type() ) :
		$published_w3c = get_the_date( DATE_W3C );
		$published     = get_the_date();
		$published_w3c = is_string( $published_w3c ) ? $published_w3c : '';
		$published     = is_string( $published ) ? $published : '';

		$meta_pieces = array();

		if ( '' !== $published_w3c ) {
			$meta_pieces[] = '<time datetime="' . esc_attr( $published_w3c ) . '">' . esc_html( $published ) . '</time>';
		}

		if ( post_type_supports( 'post', 'author' ) ) {
			$author_id = (int) get_the_author_meta( 'ID' );
			if ( $author_id > 0 ) {
				$author_name = get_the_author();
				$author_name = is_string( $author_name ) ? $author_name : '';
				$author_url  = get_author_posts_url( $author_id );
				$author_url  = is_string( $author_url ) ? $author_url : '';
				if ( '' !== $author_name ) {
					if ( '' !== $author_url ) {
						$meta_pieces[] = '<a href="' . esc_url( $author_url ) . '">' . esc_html( $author_name ) . '</a>';
					} else {
						$meta_pieces[] = esc_html( $author_name );
					}
				}
			}
		}

		$meta_sep = is_string( $na['meta_sep'] ) ? $na['meta_sep'] : ', ';
		$cat_list = get_the_category_list( $meta_sep );
		$cat_list = is_string( $cat_list ) ? $cat_list : '';
		if ( '' !== $cat_list ) {
			$meta_pieces[] = wp_kses_post( $cat_list );
		}

		/**
		 * Filter meta row HTML fragments (each piece is wrapped in a span; separated by a middot).
		 *
		 * @param list<string>         $meta_pieces  HTML fragments (already escaped where needed).
		 * @param int                  $post_id      Post ID.
		 * @param array<string, mixed> $article_args Article args.
		 */
		$meta_pieces = apply_filters( 'nextora_article_meta_pieces', $meta_pieces, $post_id, $na );
		$meta_pieces = is_array( $meta_pieces ) ? array_values( array_filter( $meta_pieces, 'is_string' ) ) : array();

		if ( ! empty( $meta_pieces ) ) :
			/**
			 * Filter classes on the meta row wrapper.
			 *
			 * @param string               $classes      Space-separated classes.
			 * @param array<string, mixed> $article_args Article args.
			 */
			$meta_row_classes = apply_filters( 'nextora_article_meta_row_classes', $na['meta_row_classes'], $na );
			$meta_row_classes = is_string( $meta_row_classes ) ? $meta_row_classes : $na['meta_row_classes'];

			/**
			 * HTML between meta pieces (default: middot in a span).
			 *
			 * @param string               $separator    Raw HTML snippet.
			 * @param int                  $post_id      Post ID.
			 * @param array<string, mixed> $article_args Article args.
			 */
			$meta_sep_html = apply_filters(
				'nextora_article_meta_between_pieces_html',
				'<span class="text-secondary/60" aria-hidden="true"> · </span>',
				$post_id,
				$na
			);
			$meta_sep_html = is_string( $meta_sep_html ) ? $meta_sep_html : '';

			$meta_out = '';
			$first    = true;
			foreach ( $meta_pieces as $piece ) {
				if ( ! $first && '' !== $meta_sep_html ) {
					$meta_out .= $meta_sep_html;
				}
				$meta_out .= '<span class="nextora-article-meta__piece inline max-w-full">' . $piece . '</span>';
				$first     = false;
			}
			?>
			<div class="<?php echo esc_attr( $meta_row_classes ); ?>">
				<?php echo wp_kses_post( $meta_out ); ?>
			</div>
			<?php
		endif;
	endif;

	if ( $show_share ) {
		nextora_render_article_share_block( $na, $permalink, $title );
	}

	/**
	 * Fires at the end of the article title/meta header (inside `<header>`, before `</header>`).
	 *
	 * @param array<string, mixed> $article_args Article args.
	 */
	do_action( 'nextora_article_title_meta_header_end', $na );
	?>
</header>
<?php
/**
 * Fires immediately after the article title/meta `</header>`.
 *
 * @param array<string, mixed> $article_args Article args.
 */
do_action( 'nextora_after_article_title_meta_header', $na );
