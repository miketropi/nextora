<?php

/**
 * Blog list carousel — dynamic block (WP_Query loop + Swiper markup).
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks (unused).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! function_exists( 'nextora_blc_resolve_color' ) ) {
    /**
     * Preset slug, hex, or Global Styles token → CSS color value.
     */
    function nextora_blc_resolve_color( string $raw ): string {
        $raw = trim( $raw );
        if ( '' === $raw ) {
            return '';
        }

        if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $preset_m ) ) {
            return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $preset_m[1] ) ) . ')';
        }

        $hex = sanitize_hex_color( $raw );
        if ( is_string( $hex ) && '' !== $hex ) {
            return $hex;
        }

        if ( preg_match( '/^#([0-9a-f]{8})$/i', $raw ) ) {
            return strtolower( $raw );
        }

        if ( preg_match( '/^var\(\s*--wp--preset--color--[a-z0-9_-]+\s*\)$/i', $raw ) ) {
            $normalized = preg_replace( '/\s+/', ' ', $raw );

            return is_string( $normalized ) ? $normalized : $raw;
        }

        if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
            return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
        }

        return $raw;
    }
}

if ( ! function_exists( 'nextora_blc_merge_block_support_styles' ) ) {
    /**
     * Merge block-support spacing/color inline CSS (Dimensions panel) into custom vars.
     *
     * @param array<string, mixed> $attributes Block attributes.
     */
    function nextora_blc_merge_block_support_styles( string $inline_style, array $attributes ): string {
        if ( ! function_exists( 'wp_style_engine_get_styles' ) ) {
            return $inline_style;
        }

        $style = isset( $attributes['style'] ) && is_array( $attributes['style'] ) ? $attributes['style'] : array();
        if ( array() === $style ) {
            return $inline_style;
        }

        $engine_styles = wp_style_engine_get_styles( $style );
        $css           = isset( $engine_styles['css'] ) && is_string( $engine_styles['css'] )
            ? trim( $engine_styles['css'] ) : '';

        if ( '' === $css ) {
            return $inline_style;
        }

        return '' !== $inline_style ? $inline_style . ';' . $css : $css;
    }
}

if ( ! function_exists( 'nextora_blc_post_placeholder_image_url' ) ) {
    /**
     * Landscape placeholder when a post has no featured image.
     */
    function nextora_blc_post_placeholder_image_url(): string {
        $url = get_theme_file_uri( 'assets/images/placeholder/general-img-landscape.png' );

        /** @var string $url */
        $url = apply_filters( 'nextora_blog_list_carousel_post_placeholder_image_url', $url );

        return $url;
    }
}

if ( ! function_exists( 'nextora_blc_render_placeholder_image_html' ) ) {
    /**
     * Placeholder markup for cards without a usable featured image.
     */
    function nextora_blc_render_placeholder_image_html( string $placeholder_url ): string {
        return sprintf(
        	'<div class="nextora-blc__card-image"><img src="%1$s" alt="" class="nextora-blc__card-img nextora-blc__card-img-placeholder" loading="lazy" decoding="async" aria-hidden="true" /></div>',
        	esc_url( $placeholder_url ),
        );
    }
}

if ( ! function_exists( 'nextora_blc_render_card_image_html' ) ) {
    /**
     * Featured image markup, falling back to the theme placeholder when missing or broken.
     */
    function nextora_blc_render_card_image_html(
    	int $post_id,
    	string $title,
    	string $image_size,
    	string $placeholder_url,
    ): string {
        $thumb_id = (int) get_post_thumbnail_id( $post_id );
        if ( $thumb_id > 0 ) {
            $src = wp_get_attachment_image_src( $thumb_id, $image_size );
            if ( is_array( $src ) && ! empty( $src[0] ) ) {
                $alt = get_post_meta( $thumb_id, '_wp_attachment_image_alt', true );
                if ( ! is_string( $alt ) || '' === $alt ) {
                    $alt = $title;
                }
                $img     = wp_get_attachment_image(
                	$thumb_id,
                	$image_size,
                	false,
                	array(
                        'class'                         => 'nextora-blc__card-img',
                        'alt'                           => esc_attr( $alt ),
                        'loading'                       => 'lazy',
                        'decoding'                      => 'async',
                        'data-nextora-blc-fallback-src' => esc_url( $placeholder_url ),
                    ),
                );
                if ( is_string( $img ) && '' !== $img ) {
                    return '<div class="nextora-blc__card-image">' . $img . '</div>';
                }
            }
        }

        return nextora_blc_render_placeholder_image_html( $placeholder_url );
    }
}

if ( ! function_exists( 'nextora_blc_render_readmore_arrow_icon' ) ) {
	/**
	 * Decorative arrow for template-1 read-more links.
	 */
	function nextora_blc_render_readmore_arrow_icon(): string {
		return '<span class="nextora-blc__card-readmore-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
	}
}

if ( ! function_exists( 'nextora_blc_render_meta_icon' ) ) {
	/**
	 * Lucide-style meta icons for template-1 cards.
	 */
	function nextora_blc_render_meta_icon( string $type ): string {
		if ( 'calendar' === $type ) {
			return '<span class="nextora-blc__card-meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>';
		}

		return '<span class="nextora-blc__card-meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.59-6.59a1 1 0 0 0 0-1.41L12 2z"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/></svg></span>';
	}
}

// ── Build WP_Query args ──
$post_type = isset( $attributes['postType'] ) && is_string( $attributes['postType'] )
    ? sanitize_text_field( $attributes['postType'] ) : 'post';

$posts_per_page = isset( $attributes['postsPerPage'] ) ? (int) $attributes['postsPerPage'] : 6;
$posts_per_page = max( 1, min( 24, $posts_per_page ) );

$order_by = isset( $attributes['orderBy'] ) && is_string( $attributes['orderBy'] )
    ? $attributes['orderBy'] : 'date';
$allowed_orderby = array( 'date', 'title', 'modified', 'rand', 'menu_order', 'comment_count' );
if ( ! in_array( $order_by, $allowed_orderby, true ) ) {
    $order_by = 'date';
}

$order = isset( $attributes['order'] ) && is_string( $attributes['order'] )
    ? strtoupper( $attributes['order'] ) : 'DESC';
$order = 'ASC' === $order ? 'ASC' : 'DESC';

$offset        = isset( $attributes['offset'] ) ? max( 0, min( 20, (int) $attributes['offset'] ) ) : 0;
$ignore_sticky = ! isset( $attributes['ignoreSticky'] ) || (bool) $attributes['ignoreSticky'];

$args = array(
    'post_type'           => $post_type,
    'posts_per_page'      => $posts_per_page,
    'orderby'             => $order_by,
    'order'               => $order,
    'offset'              => $offset,
    'ignore_sticky_posts' => $ignore_sticky,
    'post_status'         => 'publish',
    'no_found_rows'       => true,
);

$query_related = isset( $attributes['queryRelated'] ) && (bool) $attributes['queryRelated'];

if ( $query_related && is_singular( $post_type ) ) {
    $current_post_id = (int) get_queried_object_id();
    if ( $current_post_id <= 0 ) {
        $current_post_id = (int) get_the_ID();
    }

    if ( $current_post_id > 0 ) {
        $related_cats = wp_get_post_categories( $current_post_id, array( 'fields' => 'ids' ) );
        if ( is_array( $related_cats ) && array() !== $related_cats ) {
            $args['category__in'] = array_map( 'intval', $related_cats );
        } else {
            $args['post__in'] = array( 0 );
        }

        $args['post__not_in'] = array( $current_post_id );
    }
} else {
    $categories = isset( $attributes['categories'] ) && is_array( $attributes['categories'] )
        ? $attributes['categories'] : array();
    if ( array() !== $categories ) {
        $args['category__in'] = array_map( 'intval', $categories );
    }
}

// Tags
$tags = isset( $attributes['tags'] ) && is_array( $attributes['tags'] )
    ? $attributes['tags'] : array();
if ( array() !== $tags ) {
    $args['tag__in'] = array_map( 'intval', $tags );
}

// Custom taxonomy
$tax_query_slug = isset( $attributes['taxonomyQuery'] ) && is_string( $attributes['taxonomyQuery'] )
    ? sanitize_text_field( $attributes['taxonomyQuery'] ) : '';
$tax_terms = isset( $attributes['taxonomyTerms'] ) && is_array( $attributes['taxonomyTerms'] )
    ? $attributes['taxonomyTerms'] : array();
if ( '' !== $tax_query_slug && array() !== $tax_terms ) {
    $args['tax_query'] = array(
        array(
            'taxonomy' => $tax_query_slug,
            'field'    => 'slug',
            'terms'    => array_map( 'sanitize_text_field', $tax_terms ),
        ),
    );
}

// Exclude IDs
$exclude = isset( $attributes['excludeIds'] ) && is_string( $attributes['excludeIds'] )
    ? trim( $attributes['excludeIds'] ) : '';
if ( '' !== $exclude ) {
    $manual_exclude = array_filter(
    	array_map( 'intval', explode( ',', $exclude ) ),
    	static fn( int $id ): bool => $id > 0,
    );
    $existing_exclude = isset( $args['post__not_in'] ) && is_array( $args['post__not_in'] )
        ? $args['post__not_in'] : array();
    $args['post__not_in'] = array_values(
    	array_unique( array_merge( $existing_exclude, $manual_exclude ) ),
    );
}

/**
 * Filter WP_Query arguments for the blog list carousel block.
 *
 * @param array<string, mixed> $args       Query arguments.
 * @param array<string, mixed> $attributes Block attributes.
 */
$args = (array) apply_filters( 'nextora_blog_list_carousel_query_args', $args, $attributes );

$query = new WP_Query( $args );

// ── No posts ──
if ( ! $query->have_posts() ) {
    $wrapper_attributes = get_block_wrapper_attributes(
    	array( 'class' => 'nextora-blog-list-carousel' ),
    );
    echo '<div ' . $wrapper_attributes . '><p class="nextora-blc__empty">' . esc_html__( 'No posts found.', 'nextora' ) . '</p></div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    return;
}

// ── Extract display attrs ──
// Card display
$show_image    = ! isset( $attributes['showImage'] ) || (bool) $attributes['showImage'];
$image_ratio   = isset( $attributes['imageAspectRatio'] ) && is_string( $attributes['imageAspectRatio'] )
    ? $attributes['imageAspectRatio'] : '4-3';
$allowed_ratios = array( '16-9', '16-10', '4-3', '3-2', '1-1' );
if ( ! in_array( $image_ratio, $allowed_ratios, true ) ) {
    $image_ratio = '4-3';
}
$image_size    = isset( $attributes['imageSize'] ) && is_string( $attributes['imageSize'] )
    ? $attributes['imageSize'] : 'medium_large';
$allowed_sizes = array( 'thumbnail', 'medium', 'medium_large', 'large', 'full' );
if ( ! in_array( $image_size, $allowed_sizes, true ) ) {
    $image_size = 'medium_large';
}

$show_title      = ! isset( $attributes['showTitle'] ) || (bool) $attributes['showTitle'];
$title_clamp     = isset( $attributes['titleLineClamp'] ) ? max( 1, min( 4, (int) $attributes['titleLineClamp'] ) ) : 2;
$show_excerpt    = ! isset( $attributes['showExcerpt'] ) || (bool) $attributes['showExcerpt'];
$excerpt_clamp   = isset( $attributes['excerptLineClamp'] ) ? max( 1, min( 5, (int) $attributes['excerptLineClamp'] ) ) : 3;
$excerpt_length  = isset( $attributes['excerptLength'] ) ? max( 40, min( 300, (int) $attributes['excerptLength'] ) ) : 120;
$show_date       = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
$date_format     = isset( $attributes['dateFormat'] ) && is_string( $attributes['dateFormat'] )
    ? $attributes['dateFormat'] : 'd M Y';
$show_category   = ! isset( $attributes['showCategory'] ) || (bool) $attributes['showCategory'];
$show_author     = isset( $attributes['showAuthor'] ) && (bool) $attributes['showAuthor'];
$show_read_more  = isset( $attributes['showReadMore'] ) && (bool) $attributes['showReadMore'];
$read_more_text  = isset( $attributes['readMoreText'] ) && is_string( $attributes['readMoreText'] )
    ? esc_html( trim( $attributes['readMoreText'] ) ) : esc_html__( 'Read More →', 'nextora' );
$card_link_behavior = isset( $attributes['cardLinkBehavior'] ) && is_string( $attributes['cardLinkBehavior'] )
    ? $attributes['cardLinkBehavior'] : 'full-card';
$valid_link_behaviors = array( 'full-card', 'title-only', 'read-more' );
if ( ! in_array( $card_link_behavior, $valid_link_behaviors, true ) ) {
    $card_link_behavior = 'full-card';
}

// Carousel
$spv         = isset( $attributes['slidesPerView'] ) ? round( (float) $attributes['slidesPerView'], 3 ) : 3.0;
$spv_tablet  = isset( $attributes['slidesPerViewTablet'] ) ? round( (float) $attributes['slidesPerViewTablet'], 3 ) : 2.0;
$spv_mobile  = isset( $attributes['slidesPerViewMobile'] ) ? round( (float) $attributes['slidesPerViewMobile'], 3 ) : 1.15;
$gap         = isset( $attributes['spaceBetween'] ) ? max( 0, (int) $attributes['spaceBetween'] ) : 24;
$speed_val   = isset( $attributes['speed'] ) ? max( 100, min( 2000, (int) $attributes['speed'] ) ) : 500;
$loop        = isset( $attributes['loop'] ) && (bool) $attributes['loop'];
$autoplay    = isset( $attributes['autoplay'] ) && (bool) $attributes['autoplay'];
$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 2000, min( 12000, (int) $attributes['autoplayDelay'] ) ) : 5000;
$pause_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag    = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$show_arrows = isset( $attributes['showArrows'] ) && (bool) $attributes['showArrows'];
$arrow_style_val = isset( $attributes['arrowStyle'] ) && is_string( $attributes['arrowStyle'] )
    ? sanitize_html_class( $attributes['arrowStyle'] ) : 'minimal';
$free_mode   = isset( $attributes['freeMode'] ) && (bool) $attributes['freeMode'];
$grab_cursor = ! isset( $attributes['grabCursor'] ) || (bool) $attributes['grabCursor'];

$card_template_raw = isset( $attributes['cardTemplate'] ) ? (string) $attributes['cardTemplate'] : 'default';
$card_template     = in_array( $card_template_raw, array( 'template-1', 'news-grid' ), true )
    ? 'template-1'
    : 'default';

// Layout
$layout_mode = isset( $attributes['layoutMode'] ) && 'grid' === (string) $attributes['layoutMode'] ? 'grid' : 'carousel';
$grid_cols   = isset( $attributes['gridColumns'] ) ? max( 1, min( 6, (int) $attributes['gridColumns'] ) ) : 3;
$grid_min    = isset( $attributes['gridMinWidth'] ) ? max( 480, min( 1200, (int) $attributes['gridMinWidth'] ) ) : 981;
$grid_col_gap = isset( $attributes['gridColumnGap'] )
    ? max( 0, min( 60, (int) $attributes['gridColumnGap'] ) )
    : $gap;
$grid_row_gap = isset( $attributes['gridRowGap'] )
    ? max( 0, min( 60, (int) $attributes['gridRowGap'] ) )
    : $gap;

// Scroll animation
$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

// Style overrides
$title_color   = nextora_blc_resolve_color( isset( $attributes['cardTitleColor'] ) ? (string) $attributes['cardTitleColor'] : '' );
$excerpt_color      = nextora_blc_resolve_color( isset( $attributes['cardExcerptColor'] ) ? (string) $attributes['cardExcerptColor'] : '' );
$meta_color      = nextora_blc_resolve_color( isset( $attributes['cardMetaColor'] ) ? (string) $attributes['cardMetaColor'] : '' );
$read_more_color = nextora_blc_resolve_color( isset( $attributes['readMoreLinkColor'] ) ? (string) $attributes['readMoreLinkColor'] : '' );
$dot_color       = nextora_blc_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active         = nextora_blc_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );
$arrow_color    = nextora_blc_resolve_color( isset( $attributes['arrowColor'] ) ? (string) $attributes['arrowColor'] : '' );
$img_radius         = isset( $attributes['imageBorderRadius'] ) ? max( 0, min( 24, (int) $attributes['imageBorderRadius'] ) ) : 8;
$card_radius        = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 32, (int) $attributes['cardBorderRadius'] ) ) : 0;
$card_bg            = nextora_blc_resolve_color( isset( $attributes['cardBackgroundColor'] ) ? (string) $attributes['cardBackgroundColor'] : '' );
$card_border_color  = nextora_blc_resolve_color( isset( $attributes['cardBorderColor'] ) ? (string) $attributes['cardBorderColor'] : '' );
$card_padding       = isset( $attributes['cardPadding'] ) ? max( 0, min( 32, (int) $attributes['cardPadding'] ) ) : 0;

// ── Swiper opts JSON ──
$post_count = (int) $query->post_count;
$use_loop   = $loop && $post_count > 1 && $post_count >= 4;

$swiper_opts = array(
    'slidesPerView'       => $spv,
    'slidesPerViewTablet' => $spv_tablet,
    'slidesPerViewMobile' => $spv_mobile,
    'spaceBetween'        => $gap,
    'speed'               => $speed_val,
    'loop'                => $use_loop,
    'freeMode'            => $free_mode,
    'grabCursor'          => $grab_cursor,
    'autoplay'            => $autoplay,
    'autoplayDelay'       => $autoplay_d,
    'pauseOnHover'        => $pause_hover,
    'showPagination'      => $show_pag && $post_count > 1,
    'showArrows'          => $show_arrows && $post_count > 1,
    'arrowStyle'          => $arrow_style_val,
);

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

// ── CSS vars ──
$css_ratio = str_replace( '-', '/', $image_ratio );

$css_vars = array(
    '--nextora-blc-grid-cols'         => (string) $grid_cols,
    '--nextora-blc-gap'               => $gap . 'px',
    '--nextora-blc-grid-column-gap'   => $grid_col_gap . 'px',
    '--nextora-blc-grid-row-gap'      => $grid_row_gap . 'px',
    '--nextora-blc-img-radius'        => $img_radius . 'px',
    '--nextora-blc-card-radius'   => $card_radius . 'px',
    '--nextora-blc-card-padding'  => $card_padding . 'px',
    '--nextora-blc-img-ratio'     => $css_ratio,
    '--nextora-blc-title-clamp'   => (string) $title_clamp,
    '--nextora-blc-excerpt-clamp' => (string) $excerpt_clamp,
);

// Only emit color tokens when customized — avoids overriding block preset colors.
if ( '' !== $title_color ) {
    $css_vars['--nextora-blc-title-color'] = $title_color;
}
if ( '' !== $excerpt_color ) {
    $css_vars['--nextora-blc-excerpt-color'] = $excerpt_color;
}
if ( '' !== $meta_color ) {
    $css_vars['--nextora-blc-meta-color'] = $meta_color;
}
if ( '' !== $read_more_color ) {
    $css_vars['--nextora-blc-readmore-color'] = $read_more_color;
}
if ( '' !== $dot_color ) {
    $css_vars['--nextora-blc-dot-color'] = $dot_color;
}
if ( '' !== $dot_active ) {
    $css_vars['--nextora-blc-dot-active'] = $dot_active;
}
if ( '' !== $arrow_color ) {
    $css_vars['--nextora-blc-arrow-color'] = $arrow_color;
}
if ( '' !== $card_bg ) {
    $css_vars['--nextora-blc-card-bg'] = $card_bg;
}
if ( '' !== $card_border_color ) {
    $css_vars['--nextora-blc-card-border-color'] = $card_border_color;
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
    $style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

// ── Wrapper attrs ──
$wrapper_classes = array(
    'nextora-blog-list-carousel',
    'nextora-blog-list-carousel--loading',
    'nextora-blog-list-carousel--layout-' . sanitize_html_class( $layout_mode ),
    'nextora-blog-list-carousel--template-' . sanitize_html_class( $card_template ),
);

if ( $enable_scroll ) {
    $wrapper_classes[] = 'nextora-blog-list-carousel--reveal-pending';
}

$placeholder_url = nextora_blc_post_placeholder_image_url();

$inline_style = nextora_blc_merge_block_support_styles( $inline_style, $attributes );

$wrapper_extra = array(
    'class' => implode( ' ', $wrapper_classes ),
    'style' => $inline_style,
    'data-nextora-blc-placeholder-src' => esc_url( $placeholder_url ),
);
if ( $enable_scroll ) {
    $wrapper_extra['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );

// ── Build cards ──
$cards_html = '';

while ( $query->have_posts() ) :
    $query->the_post();
    $post_id = get_the_ID();
    if ( ! is_int( $post_id ) || $post_id <= 0 ) {
        continue;
    }

    $permalink  = esc_url( (string) get_the_permalink() );
    $title      = get_the_title();

    // Image
    $image_html = '';
    if ( $show_image ) {
        $image_html = nextora_blc_render_card_image_html(
        	$post_id,
        	$title,
        	$image_size,
        	$placeholder_url,
        );
    }

    // Title
    $title_html = '';
    $title_tag  = 'template-1' === $card_template ? 'h3' : ( 'title-only' === $card_link_behavior || 'full-card' === $card_link_behavior ? 'h4' : 'h3' );
    if ( $show_title && '' !== $title ) {
        if ( 'title-only' === $card_link_behavior || 'full-card' === $card_link_behavior ) {
            $title_html = sprintf(
            	'<%1$s class="nextora-blc__card-title"><a href="%2$s">%3$s</a></%1$s>',
            	$title_tag,
            	$permalink,
            	esc_html( $title ),
            );
        } else {
            $title_html = sprintf(
            	'<%1$s class="nextora-blc__card-title">%2$s</%1$s>',
            	$title_tag,
            	esc_html( $title ),
            );
        }
    }

    // Excerpt (character trim server-side; line clamp via CSS).
    $excerpt_html = '';
    if ( $show_excerpt ) {
        $raw_excerpt = get_the_excerpt();
        if ( '' === $raw_excerpt ) {
            $raw_excerpt = get_the_content();
        }
        $excerpt = trim( (string) preg_replace( '/\s+/', ' ', (string) wp_strip_all_tags( $raw_excerpt, true ) ) );
        if ( '' !== $excerpt && mb_strlen( $excerpt ) > $excerpt_length ) {
            $excerpt = mb_substr( $excerpt, 0, $excerpt_length ) . '…';
        }
        if ( '' !== $excerpt ) {
            $excerpt_html = '<p class="nextora-blc__card-excerpt">' . esc_html( $excerpt ) . '</p>';
        }
    }

    // Meta
    $meta_html = '';
    if ( 'template-1' === $card_template ) {
        $meta_items = array();
        if ( $show_date ) {
            $meta_items[] = sprintf(
            	'<span class="nextora-blc__card-meta-item">%1$s<time class="nextora-blc__card-date" datetime="%2$s">%3$s</time></span>',
            	nextora_blc_render_meta_icon( 'calendar' ),
            	esc_attr( (string) get_the_date( 'c' ) ),
            	esc_html( (string) get_the_date( $date_format ) ),
            );
        }
        if ( $show_category ) {
            $cats = get_the_category();
            if ( is_array( $cats ) && array() !== $cats ) {
                $cat = $cats[0];
                if ( $cat instanceof WP_Term ) {
                    $cat_link = get_term_link( $cat );
                    $cat_label = esc_html( $cat->name );
                    $cat_inner = nextora_blc_render_meta_icon( 'tag' );
                    if ( ! is_wp_error( $cat_link ) && is_string( $cat_link ) ) {
                        $cat_inner .= '<a href="' . esc_url( $cat_link ) . '" class="nextora-blc__card-cat">' . $cat_label . '</a>';
                    } else {
                        $cat_inner .= '<span class="nextora-blc__card-cat">' . $cat_label . '</span>';
                    }
                    $meta_items[] = '<span class="nextora-blc__card-meta-item">' . $cat_inner . '</span>';
                }
            }
        }
        if ( $show_author ) {
            $meta_items[] = sprintf(
            	'<span class="nextora-blc__card-meta-item">%1$s<span class="nextora-blc__card-author">%2$s</span></span>',
            	nextora_blc_render_meta_icon( 'tag' ),
            	esc_html( (string) get_the_author() ),
            );
        }
        if ( array() !== $meta_items ) {
            $meta_html = '<div class="nextora-blc__card-meta nextora-blc__card-meta--template-1">' . implode( '', $meta_items ) . '</div>';
        }
    } else {
        $meta_parts = array();
        if ( $show_date ) {
            $meta_parts[] = sprintf(
            	'<time class="nextora-blc__card-date" datetime="%s">%s</time>',
            	esc_attr( (string) get_the_date( 'c' ) ),
            	esc_html( (string) get_the_date( $date_format ) ),
            );
        }
        if ( $show_category ) {
            $cats = get_the_category();
            if ( is_array( $cats ) && array() !== $cats ) {
                $cat = $cats[0];
                if ( $cat instanceof WP_Term ) {
                    $cat_link = get_term_link( $cat );
                    if ( ! is_wp_error( $cat_link ) && is_string( $cat_link ) ) {
                        $meta_parts[] = '<a href="' . esc_url( $cat_link ) . '" class="nextora-blc__card-cat">' . esc_html( $cat->name ) . '</a>';
                    } else {
                        $meta_parts[] = '<span class="nextora-blc__card-cat">' . esc_html( $cat->name ) . '</span>';
                    }
                }
            }
        }
        if ( $show_author ) {
            $meta_parts[] = '<span class="nextora-blc__card-author">' . esc_html( (string) get_the_author() ) . '</span>';
        }

        if ( array() !== $meta_parts ) {
            $divider = '<span class="nextora-blc__card-divider" aria-hidden="true"></span>';
            $parts   = array();
            $count   = count( $meta_parts );
            foreach ( $meta_parts as $i => $part ) {
                $parts[] = $part;
                if ( $i < $count - 1 ) {
                    $parts[] = $divider;
                }
            }
            $meta_html = '<div class="nextora-blc__card-meta">' . implode( '', $parts ) . '</div>';
        }
    }

    // Read more
    $read_more_html = '';
    if ( $show_read_more ) {
        $read_more_arrow = 'template-1' === $card_template ? nextora_blc_render_readmore_arrow_icon() : '';
        $read_more_html  = sprintf(
        	'<a href="%1$s" class="nextora-blc__card-readmore%3$s">%2$s%4$s</a>',
        	$permalink,
        	$read_more_text,
        	'template-1' === $card_template ? ' nextora-blc__card-readmore--template-1' : '',
        	$read_more_arrow,
        );
    }

    // Card body
    if ( 'template-1' === $card_template ) {
        $card_body = $meta_html . $title_html . $read_more_html;
    } else {
        $card_body = $title_html . $excerpt_html . $meta_html . $read_more_html;
    }

    $card_class = 'nextora-blc__card';
    if ( 'full-card' === $card_link_behavior ) {
        $card_class .= ' nextora-blc__card--linked';
    }
    if ( 'template-1' === $card_template ) {
        $card_class .= ' nextora-blc__card--template-1';
    }

    // Card wrapper
    $cards_html .= sprintf(
    	'<div class="swiper-slide"><article class="%1$s">%2$s<div class="nextora-blc__card-body">%3$s</div></article></div>',
    	esc_attr( $card_class ),
    	$image_html,
    	$card_body,
    );
endwhile;
wp_reset_postdata();

// ── Arrows ──
$arrows_html = '';
if ( $show_arrows && $post_count > 1 ) {
    $prev_svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';
    $next_svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
    $arrows_html = sprintf(
    	'<button type="button" class="nextora-blc__arrow nextora-blc__arrow--prev nextora-blc__arrow--%s" aria-label="%s">%s</button><button type="button" class="nextora-blc__arrow nextora-blc__arrow--next nextora-blc__arrow--%s" aria-label="%s">%s</button>',
    	$arrow_style_val,
    	esc_attr__( 'Previous posts', 'nextora' ),
    	$prev_svg,
    	$arrow_style_val,
    	esc_attr__( 'Next posts', 'nextora' ),
    	$next_svg,
    );
}

// ── Pagination ──
$pagination_html = '';
if ( $show_pag && $post_count > 1 ) {
    $pagination_html = '<div class="nextora-blc__pagination swiper-pagination" aria-hidden="true"></div>';
}

// ── Assemble output ──
$output = sprintf(
	'<div %s><div class="nextora-blc__inner"><div class="nextora-blc__carousel-root" data-layout-mode="%s" data-grid-min-width="%s" data-grid-columns="%s" data-swiper-opts="%s"><div class="swiper nextora-blc__swiper"><div class="swiper-wrapper">%s</div></div>%s</div>%s</div></div>',
	$wrapper_attributes,
	esc_attr( $layout_mode ),
	esc_attr( (string) $grid_min ),
	esc_attr( (string) $grid_cols ),
	esc_attr( $opts_string ),
	$cards_html,
	$arrows_html,
	$pagination_html,
);

echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
