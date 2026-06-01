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
    function nextora_blc_resolve_color( string $raw ): string {
        $raw = trim( $raw );
        if ( '' === $raw ) {
            return '';
        }
        $hex = sanitize_hex_color( $raw );
        if ( $hex ) {
            return $hex;
        }
        if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
            return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
        }
        return '';
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

// Categories
$categories = isset( $attributes['categories'] ) && is_array( $attributes['categories'] )
    ? $attributes['categories'] : array();
if ( array() !== $categories ) {
    $args['category__in'] = array_map( 'intval', $categories );
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
    $args['post__not_in'] = array_map( 'intval', explode( ',', $exclude ) );
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
$show_heading  = ! isset( $attributes['showHeading'] ) || (bool) $attributes['showHeading'];
$heading_text  = isset( $attributes['headingText'] ) && is_string( $attributes['headingText'] )
    ? esc_html( trim( $attributes['headingText'] ) ) : '';
$heading_level = isset( $attributes['headingLevel'] ) ? max( 1, min( 6, (int) $attributes['headingLevel'] ) ) : 2;
$heading_tag   = 'h' . (string) $heading_level;

$show_view_all    = ! isset( $attributes['showViewAll'] ) || (bool) $attributes['showViewAll'];
$view_all_text    = isset( $attributes['viewAllText'] ) && is_string( $attributes['viewAllText'] )
    ? esc_html( trim( $attributes['viewAllText'] ) ) : esc_html__( 'view all', 'nextora' );
$view_all_url     = isset( $attributes['viewAllUrl'] ) && is_string( $attributes['viewAllUrl'] )
    ? esc_url( trim( $attributes['viewAllUrl'] ) ) : '';
$view_all_target  = isset( $attributes['viewAllTarget'] ) && (bool) $attributes['viewAllTarget'];
$view_all_style   = isset( $attributes['viewAllStyle'] ) && is_string( $attributes['viewAllStyle'] )
    ? sanitize_html_class( $attributes['viewAllStyle'] ) : 'pill-outline';
$header_layout    = isset( $attributes['headerLayout'] ) && is_string( $attributes['headerLayout'] )
    ? sanitize_html_class( $attributes['headerLayout'] ) : 'split';

$valid_va_styles = array( 'pill-outline', 'pill-solid', 'text-link', 'arrow-link' );
if ( ! in_array( $view_all_style, $valid_va_styles, true ) ) {
    $view_all_style = 'pill-outline';
}
$valid_hl = array( 'split', 'stacked', 'left' );
if ( ! in_array( $header_layout, $valid_hl, true ) ) {
    $header_layout = 'split';
}

if ( '' === $view_all_url ) {
    $view_all_url = esc_url( (string) get_post_type_archive_link( $post_type ) );
}

// Card display
$show_image    = ! isset( $attributes['showImage'] ) || (bool) $attributes['showImage'];
$image_ratio   = isset( $attributes['imageAspectRatio'] ) && is_string( $attributes['imageAspectRatio'] )
    ? $attributes['imageAspectRatio'] : '16-10';
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

// Scroll animation
$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

// Style overrides
$bg_color           = nextora_blc_resolve_color( $attributes['backgroundColor'] ?? '' );
$heading_color      = nextora_blc_resolve_color( $attributes['headingColor'] ?? '' );
$title_color        = nextora_blc_resolve_color( $attributes['titleColor'] ?? '' );
$excerpt_color      = nextora_blc_resolve_color( $attributes['excerptColor'] ?? '' );
$meta_color         = nextora_blc_resolve_color( $attributes['metaColor'] ?? '' );
$view_all_color     = nextora_blc_resolve_color( $attributes['viewAllColor'] ?? '' );
$dot_color          = nextora_blc_resolve_color( $attributes['paginationColor'] ?? '' );
$dot_active         = nextora_blc_resolve_color( $attributes['paginationActiveColor'] ?? '' );
$padding_top        = isset( $attributes['paddingTop'] ) ? max( 0, min( 200, (int) $attributes['paddingTop'] ) ) : 80;
$padding_bottom     = isset( $attributes['paddingBottom'] ) ? max( 0, min( 200, (int) $attributes['paddingBottom'] ) ) : 80;
$content_max        = isset( $attributes['contentMaxWidth'] ) && is_string( $attributes['contentMaxWidth'] )
    ? esc_attr( trim( $attributes['contentMaxWidth'] ) ) : '1200px';
$img_radius         = isset( $attributes['imageBorderRadius'] ) ? max( 0, min( 24, (int) $attributes['imageBorderRadius'] ) ) : 8;
$card_radius        = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 24, (int) $attributes['cardBorderRadius'] ) ) : 0;
$card_bg            = nextora_blc_resolve_color( $attributes['cardBackground'] ?? '' );
$card_padding       = isset( $attributes['cardPadding'] ) ? max( 0, min( 24, (int) $attributes['cardPadding'] ) ) : 0;

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
    '--nextora-blc-bg'            => '' !== $bg_color ? $bg_color : 'transparent',
    '--nextora-blc-padding-top'   => $padding_top . 'px',
    '--nextora-blc-padding-bottom' => $padding_bottom . 'px',
    '--nextora-blc-max-width'     => $content_max,
    '--nextora-blc-heading-color' => '' !== $heading_color ? $heading_color : 'var(--wp--preset--color--contrast, #1A1A2E)',
    '--nextora-blc-title-color'   => '' !== $title_color ? $title_color : 'var(--wp--preset--color--contrast, #1A1A2E)',
    '--nextora-blc-excerpt-color' => '' !== $excerpt_color ? $excerpt_color : 'var(--wp--preset--color--secondary, #6B7280)',
    '--nextora-blc-meta-color'    => '' !== $meta_color ? $meta_color : 'var(--wp--preset--color--secondary, #9CA3AF)',
    '--nextora-blc-viewall-color' => '' !== $view_all_color ? $view_all_color : 'var(--wp--preset--color--secondary, #6B7280)',
    '--nextora-blc-dot-color'     => '' !== $dot_color ? $dot_color : 'color-mix(in srgb, currentColor 35%, transparent)',
    '--nextora-blc-dot-active'    => '' !== $dot_active ? $dot_active : 'var(--wp--preset--color--primary, currentColor)',
    '--nextora-blc-img-radius'    => $img_radius . 'px',
    '--nextora-blc-card-radius'   => $card_radius . 'px',
    '--nextora-blc-card-bg'       => '' !== $card_bg ? $card_bg : 'transparent',
    '--nextora-blc-card-padding'  => $card_padding . 'px',
    '--nextora-blc-img-ratio'     => '16/9' !== $css_ratio ? $css_ratio : '16/9',
    '--nextora-blc-title-clamp'   => (string) $title_clamp,
    '--nextora-blc-excerpt-clamp' => (string) $excerpt_clamp,
);

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
    $style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

// ── Wrapper attrs ──
$wrapper_classes = array(
    'nextora-blog-list-carousel',
    'nextora-blog-list-carousel--loading',
);

if ( $enable_scroll ) {
    $wrapper_classes[] = 'nextora-blog-list-carousel--reveal-pending';
}

$wrapper_extra = array(
    'class' => implode( ' ', $wrapper_classes ),
    'style' => $inline_style,
);
if ( $enable_scroll ) {
    $wrapper_extra['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );

// ── Heading ──
$heading_html = '';
if ( $show_heading && '' !== $heading_text ) {
    $heading_html = sprintf(
    	'<%1$s class="nextora-blc__heading">%2$s</%1$s>',
    	$heading_tag,
    	$heading_text,
    );
}

// ── View all ──
$arrow_svg  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
$view_all_html = '';
if ( $show_view_all && '' !== $view_all_url ) {
    $target_attr = $view_all_target ? ' target="_blank" rel="noopener noreferrer"' : '';
    $show_arrow  = in_array( $view_all_style, array( 'pill-outline', 'pill-solid', 'arrow-link' ), true );
    $view_all_html = sprintf(
    	'<a href="%s" class="nextora-blc__viewall nextora-blc__viewall--%s"%s>%s%s</a>',
    	$view_all_url,
    	$view_all_style,
    	$target_attr,
    	$view_all_text,
    	$show_arrow ? ' ' . $arrow_svg : '',
    );
}

// ── Header ──
$header_html = '';
if ( '' !== $heading_html || '' !== $view_all_html ) {
    $header_html = sprintf(
    	'<div class="nextora-blc__header nextora-blc__header--%s">%s%s</div>',
    	$header_layout,
    	$heading_html,
    	$view_all_html,
    );
}

// ── Build cards ──
$ratio_classes = array(
    '16-9'  => 'aspect-video',
    '16-10' => 'aspect-[16/10]',
    '4-3'   => 'aspect-[4/3]',
    '3-2'   => 'aspect-[3/2]',
    '1-1'   => 'aspect-square',
);
$ratio_class = isset( $ratio_classes[ $image_ratio ] ) ? $ratio_classes[ $image_ratio ] : 'aspect-[16/10]';

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
        $thumb_id  = (int) get_post_thumbnail_id( $post_id );
        $has_thumb = $thumb_id > 0;
        if ( $has_thumb ) {
            $alt = get_post_meta( $thumb_id, '_wp_attachment_image_alt', true );
            if ( ! is_string( $alt ) || '' === $alt ) {
                $alt = $title;
            }
            $img = wp_get_attachment_image(
            	$thumb_id,
            	$image_size,
            	false,
            	array(
                    'class'    => 'nextora-blc__card-img',
                    'alt'      => esc_attr( $alt ),
                    'loading'  => 'lazy',
                    'decoding' => 'async',
                ),
            );
            if ( is_string( $img ) && '' !== $img ) {
                $image_html = '<div class="nextora-blc__card-image">' . $img . '</div>';
            }
        } else {
            $image_html = '<div class="nextora-blc__card-image"><div class="nextora-blc__card-img-placeholder ' . esc_attr( $ratio_class ) . '" aria-hidden="true"><span>' . esc_html__( 'No image', 'nextora' ) . '</span></div></div>';
        }
    }

    // Title
    $title_html = '';
    if ( $show_title && '' !== $title ) {
        if ( 'title-only' === $card_link_behavior || 'full-card' === $card_link_behavior ) {
            $title_html = sprintf(
            	'<h3 class="nextora-blc__card-title"><a href="%s">%s</a></h3>',
            	$permalink,
            	esc_html( $title ),
            );
        } else {
            $title_html = '<h3 class="nextora-blc__card-title">' . esc_html( $title ) . '</h3>';
        }
    }

    // Excerpt
    $excerpt_html = '';
    if ( $show_excerpt ) {
        $raw_excerpt = get_the_excerpt();
        if ( '' === $raw_excerpt ) {
            $raw_excerpt = get_the_content();
        }
        $excerpt = wp_trim_words( wp_strip_all_tags( $raw_excerpt, true ), 0, '' );
        if ( mb_strlen( $excerpt ) > $excerpt_length ) {
            $excerpt = mb_substr( $excerpt, 0, $excerpt_length ) . '…';
        }
        $excerpt_html = '<p class="nextora-blc__card-excerpt">' . esc_html( $excerpt ) . '</p>';
    }

    // Meta
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

    $meta_html = '';
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

    // Read more
    $read_more_html = '';
    if ( $show_read_more ) {
        $read_more_html = sprintf(
        	'<a href="%s" class="nextora-blc__card-readmore">%s</a>',
        	$permalink,
        	$read_more_text,
        );
    }

    // Card body
    $card_body = $title_html . $excerpt_html . $meta_html . $read_more_html;

    // Card wrapper
    if ( 'full-card' === $card_link_behavior ) {
        $cards_html .= sprintf(
        	'<div class="swiper-slide"><div class="nextora-blc__card nextora-blc__card--linked">%s<div class="nextora-blc__card-body">%s</div></div></div>',
        	$image_html,
        	$card_body,
        );
    } else {
        $cards_html .= sprintf(
        	'<div class="swiper-slide"><div class="nextora-blc__card">%s<div class="nextora-blc__card-body">%s</div></div></div>',
        	$image_html,
        	$card_body,
        );
    }
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
	'<div %s><div class="nextora-blc__inner">%s<div class="nextora-blc__carousel-root" data-swiper-opts="%s"><div class="swiper nextora-blc__swiper"><div class="swiper-wrapper">%s</div></div>%s</div>%s</div></div>',
	$wrapper_attributes,
	$header_html,
	esc_attr( $opts_string ),
	$cards_html,
	$arrows_html,
	$pagination_html,
);

echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
