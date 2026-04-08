<?php
/**
 * Contextual page heading (hero) for archives, search, and singular views.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Build heading data for the current main query, or null when none.
 *
 * Filter {@see 'nextora_page_heading_context'} to replace or extend.
 *
 * @return array<string, mixed>|null
 */
function nextora_get_page_heading_context(): ?array {
	static $memo_done = false;
	static $memo = null;

	if ( $memo_done ) {
		return $memo;
	}

	if ( is_feed() || is_embed() ) {
		$memo_done = true;
		$memo      = null;
		return null;
	}

	if ( ! apply_filters( 'nextora_show_page_heading', true ) ) {
		$memo_done = true;
		$memo      = null;
		return null;
	}

	$ctx = null;

	if ( is_singular() ) {
		$ctx = nextora_page_heading_context_singular();
	} elseif ( is_search() ) {
		$ctx = nextora_page_heading_context_search();
	} elseif ( is_category() || is_tag() || is_tax() ) {
		$ctx = nextora_page_heading_context_term();
	} elseif ( is_post_type_archive() ) {
		$ctx = nextora_page_heading_context_post_type_archive();
	} elseif ( is_author() ) {
		$ctx = nextora_page_heading_context_author();
	} elseif ( is_date() ) {
		$ctx = nextora_page_heading_context_date();
	} elseif ( is_archive() ) {
		$ctx = nextora_page_heading_context_generic_archive();
	} elseif ( is_home() ) {
		$ctx = nextora_page_heading_context_home();
	}

	/**
	 * Filter the resolved page heading context.
	 *
	 * @param array<string, mixed>|null $ctx  Context or null to hide.
	 * @param string                    $when Debug hint: `singular`, `search`, `term`, etc.
	 */
	$kind = is_array( $ctx ) && isset( $ctx['kind'] ) && is_string( $ctx['kind'] ) ? $ctx['kind'] : '';
	$memo = apply_filters( 'nextora_page_heading_context', $ctx, $kind );
	$memo_done = true;

	return $memo;
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_singular(): array {
	$post_id = get_queried_object_id();
	$type    = get_post_type( $post_id );

	$title = get_the_title( $post_id );
	$title = is_string( $title ) ? $title : '';

	$eyebrow = 'page' === $type
		? (string) apply_filters( 'nextora_page_heading_eyebrow_page', __( 'Page', 'nextora' ), $post_id )
		: (string) apply_filters( 'nextora_page_heading_eyebrow_post', __( 'Article', 'nextora' ), $post_id );

	$description = '';
	if ( 'post' === $type && has_excerpt( $post_id ) ) {
		$description = get_the_excerpt( $post_id );
		$description = is_string( $description ) ? wp_strip_all_tags( $description ) : '';
	}

	$image_id  = (int) get_post_thumbnail_id( $post_id );
	$image_url = $image_id ? wp_get_attachment_image_url( $image_id, 'full' ) : '';
	$image_url = is_string( $image_url ) ? $image_url : '';
	$image_url = (string) apply_filters( 'nextora_page_heading_image_url', $image_url, $post_id );

	$image_alt = $image_id ? (string) get_post_meta( $image_id, '_wp_attachment_image_alt', true ) : '';
	if ( '' === $image_alt ) {
		$image_alt = $title;
	}

	return array(
		'kind'        => 'singular',
		'eyebrow'     => $eyebrow,
		'title'       => $title,
		'description' => $description,
		'meta'        => array(),
		'image_url'   => $image_url,
		'image_alt'   => $image_alt,
	);
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_search(): array {
	global $wp_query;

	$total = isset( $wp_query->found_posts ) ? (int) $wp_query->found_posts : 0;
	$query = get_search_query();
	$query = is_string( $query ) ? trim( $query ) : '';

	$title = '' !== $query
		? sprintf(
			/* translators: %s: search query */
			__( 'Search results for "%s"', 'nextora' ),
			$query
		)
		: __( 'Search results', 'nextora' );

	$meta = array(
		array(
			'text' => sprintf(
				/* translators: %d: number of results */
				_n( '%d result found', '%d results found', $total, 'nextora' ),
				$total
			),
		),
	);

	return array(
		'kind'        => 'search',
		'eyebrow'     => __( 'Search', 'nextora' ),
		'title'       => $title,
		'description' => '',
		'meta'        => $meta,
		'image_url'   => '',
		'image_alt'   => '',
		'show_search' => true,
	);
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_term(): array {
	$term = get_queried_object();
	if ( ! $term instanceof WP_Term ) {
		return array(
			'kind'        => 'term',
			'eyebrow'     => __( 'Archive', 'nextora' ),
			'title'       => __( 'Archive', 'nextora' ),
			'description' => '',
			'meta'        => array(),
			'image_url'   => '',
			'image_alt'   => '',
		);
	}

	$tax = get_taxonomy( $term->taxonomy );
	$tax_label = ( $tax && isset( $tax->labels->singular_name ) ) ? $tax->labels->singular_name : __( 'Taxonomy', 'nextora' );
	$tax_label = is_string( $tax_label ) ? $tax_label : __( 'Taxonomy', 'nextora' );

	$desc = term_description( $term, $term->taxonomy );
	$desc = is_string( $desc ) ? wp_strip_all_tags( $desc ) : '';
	$desc = trim( $desc );

	$count = (int) $term->count;

	$meta = array(
		array(
			'text' => sprintf(
				/* translators: %d: post count */
				_n( '%d post', '%d posts', $count, 'nextora' ),
				$count
			),
		),
	);

	$image_url = (string) apply_filters( 'nextora_page_heading_term_image_url', '', $term );

	return array(
		'kind'        => 'term',
		'eyebrow'     => $tax_label,
		'title'       => $term->name,
		'description' => $desc,
		'meta'        => $meta,
		'image_url'   => $image_url,
		'image_alt'   => $term->name,
	);
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_post_type_archive(): array {
	$pto = get_queried_object();
	if ( ! $pto instanceof WP_Post_Type ) {
		return nextora_page_heading_context_home();
	}

	$title = post_type_archive_title( '', false );
	$title = is_string( $title ) ? $title : $pto->labels->name;

	$desc = function_exists( 'get_the_post_type_description' ) ? get_the_post_type_description() : '';
	$desc = is_string( $desc ) ? wp_strip_all_tags( $desc ) : '';
	$desc = trim( $desc );

	global $wp_query;
	$total = isset( $wp_query->found_posts ) ? (int) $wp_query->found_posts : 0;

	$meta = array(
		array(
			'text' => sprintf(
				/* translators: %d: item count */
				_n( '%d entry', '%d entries', $total, 'nextora' ),
				$total
			),
		),
	);

	return array(
		'kind'        => 'post_type_archive',
		'eyebrow'     => __( 'Archive', 'nextora' ),
		'title'       => $title,
		'description' => $desc,
		'meta'        => $meta,
		'image_url'   => '',
		'image_alt'   => '',
	);
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_author(): array {
	$author = get_queried_object();
	if ( ! $author instanceof WP_User ) {
		return array(
			'kind'        => 'author',
			'eyebrow'     => __( 'Author', 'nextora' ),
			'title'       => __( 'Author archive', 'nextora' ),
			'description' => '',
			'meta'        => array(),
			'image_url'   => '',
			'image_alt'   => '',
		);
	}

	$title = get_the_author_meta( 'display_name', $author->ID );
	$title = is_string( $title ) ? $title : '';

	$bio = get_the_author_meta( 'description', $author->ID );
	$bio = is_string( $bio ) ? wp_strip_all_tags( $bio ) : '';
	$bio = trim( $bio );

	global $wp_query;
	$total = isset( $wp_query->found_posts ) ? (int) $wp_query->found_posts : 0;

	$meta = array(
		array(
			'text' => sprintf(
				/* translators: %d: post count */
				_n( '%d post', '%d posts', $total, 'nextora' ),
				$total
			),
		),
	);

	return array(
		'kind'        => 'author',
		'eyebrow'     => __( 'Author', 'nextora' ),
		'title'       => $title,
		'description' => $bio,
		'meta'        => $meta,
		'image_url'   => '',
		'image_alt'   => '',
	);
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_date(): array {
	$title = get_the_archive_title();
	$title = is_string( $title ) ? wp_strip_all_tags( $title ) : '';

	$desc = get_the_archive_description();
	$desc = is_string( $desc ) ? wp_strip_all_tags( $desc ) : '';
	$desc = trim( $desc );

	global $wp_query;
	$total = isset( $wp_query->found_posts ) ? (int) $wp_query->found_posts : 0;

	$meta = array(
		array(
			'text' => sprintf(
				/* translators: %d: post count */
				_n( '%d post', '%d posts', $total, 'nextora' ),
				$total
			),
		),
	);

	return array(
		'kind'        => 'date',
		'eyebrow'     => __( 'Archive', 'nextora' ),
		'title'       => $title,
		'description' => $desc,
		'meta'        => $meta,
		'image_url'   => '',
		'image_alt'   => '',
	);
}

/**
 * @return array<string, mixed>
 */
/**
 * Fallback for archive views not matched above.
 *
 * @return array<string, mixed>
 */
function nextora_page_heading_context_generic_archive(): array {
	$title = get_the_archive_title();
	$title = is_string( $title ) ? wp_strip_all_tags( $title ) : '';

	$desc = get_the_archive_description();
	$desc = is_string( $desc ) ? wp_strip_all_tags( $desc ) : '';
	$desc = trim( $desc );

	global $wp_query;
	$total = isset( $wp_query->found_posts ) ? (int) $wp_query->found_posts : 0;

	$meta = array(
		array(
			'text' => sprintf(
				/* translators: %d: post count */
				_n( '%d post', '%d posts', $total, 'nextora' ),
				$total
			),
		),
	);

	return array(
		'kind'        => 'archive',
		'eyebrow'     => __( 'Archive', 'nextora' ),
		'title'       => $title,
		'description' => $desc,
		'meta'        => $meta,
		'image_url'   => '',
		'image_alt'   => '',
	);
}

/**
 * @return array<string, mixed>
 */
function nextora_page_heading_context_home(): array {
	$title = (string) apply_filters( 'nextora_page_heading_blog_title', __( 'Latest posts', 'nextora' ) );

	$desc = (string) apply_filters( 'nextora_page_heading_blog_description', '' );

	return array(
		'kind'        => 'blog',
		'eyebrow'     => __( 'Blog', 'nextora' ),
		'title'       => $title,
		'description' => $desc,
		'meta'        => array(),
		'image_url'   => '',
		'image_alt'   => '',
	);
}

/**
 * Content-shell classes for the heading inner wrapper: same horizontal inset and max-width
 * as the main column directly below ({@see single.php}, {@see page.php}, archive loop, search).
 *
 * @param array<string, mixed> $ctx Heading context (expects `kind` when built by this file).
 * @return string Space-separated class names.
 */
function nextora_get_page_heading_inner_shell_class( array $ctx ): string {
	$kind = isset( $ctx['kind'] ) && is_string( $ctx['kind'] ) ? $ctx['kind'] : '';

	if ( 'singular' === $kind ) {
		$post = get_queried_object();
		if ( $post instanceof WP_Post && 'page' === $post->post_type ) {
			return 'nextora-content-shell nextora-content-shell--wide-size';
		}

		return 'nextora-content-shell nextora-content-shell--wide-size';
	}

	$main_has_wide_grid = ( is_home() || is_archive() || is_search() ) && have_posts();
	if ( $main_has_wide_grid ) {
		return 'nextora-content-shell nextora-content-shell--wide';
	}

	return 'nextora-content-shell';
}

/**
 * Echo the page heading section if context exists.
 *
 * @param array<string, mixed> $args Optional overrides merged onto context.
 */
function nextora_render_page_heading( array $args = array() ): void {
	$ctx = nextora_get_page_heading_context();
	if ( null === $ctx ) {
		return;
	}

	if ( array() !== $args ) {
		$ctx = array_merge( $ctx, $args );
	}

	get_template_part( 'template-parts/page', 'heading', $ctx );
}
