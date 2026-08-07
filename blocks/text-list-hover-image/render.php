<?php
/**
 * Text List Hover Image — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes defined in block.json.
 * @var string               $content    Inner blocks HTML (empty for this block).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

$items = $attributes['items'] ?? array();
if ( ! is_array( $items ) || empty( $items ) ) {
    return;
}

$title_size         = sanitize_text_field( $attributes['titleSize'] ?? 'medium' );
$description_size   = sanitize_text_field( $attributes['descriptionSize'] ?? 'small' );
$year_size          = sanitize_text_field( $attributes['yearSize'] ?? 'small' );
$title_weight       = sanitize_text_field( $attributes['titleWeight'] ?? '500' );
$image_width        = absint( $attributes['imageWidth'] ?? 280 );
$image_height       = absint( $attributes['imageHeight'] ?? 180 );
$show_arrow         = $attributes['showArrow'] ?? true;
$enable_scroll      = $attributes['enableScrollAnimation'] ?? true;

$valid_font_sizes = array( 'small', 'base', 'medium', 'medium-plus', 'large', 'x-large', 'xx-large' );
if ( ! in_array( $title_size, $valid_font_sizes, true ) ) {
    $title_size = 'medium';
}
if ( ! in_array( $description_size, $valid_font_sizes, true ) ) {
    $description_size = 'small';
}
if ( ! in_array( $year_size, $valid_font_sizes, true ) ) {
    $year_size = 'small';
}

$valid_weights = array( '400', '500', '600', '700', '800', '900' );
if ( ! in_array( $title_weight, $valid_weights, true ) ) {
    $title_weight = '500';
}

$image_width  = max( 120, min( 600, $image_width ) );
$image_height = max( 80, min( 400, $image_height ) );

function nextora_thli_resolve_color( string $raw ): string {
    $raw = trim( $raw );
    if ( '' === $raw || 'transparent' === $raw ) {
        return 'transparent';
    }
    if ( str_starts_with( $raw, '#' ) ) {
        if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
            return $raw;
        }
        return sanitize_hex_color( $raw ) ?: 'transparent';
    }
    if ( str_starts_with( $raw, 'var:preset|color|' ) ) {
        $slug = str_replace( 'var:preset|color|', '', $raw );
        return 'var(--wp--preset--color--' . sanitize_html_class( $slug ) . ')';
    }
    return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
}

$title_color            = nextora_thli_resolve_color( $attributes['titleColor'] ?? '' );
$description_color      = nextora_thli_resolve_color( $attributes['descriptionColor'] ?? '' );
$hover_highlight_color  = nextora_thli_resolve_color( $attributes['hoverHighlightColor'] ?? '' );
$number_color           = nextora_thli_resolve_color( $attributes['numberColor'] ?? '' );

$css_vars = array();

if ( ! in_array( $title_color, array( '', 'transparent' ), true ) ) {
    $css_vars[] = '--nextora-thli-title-color: ' . $title_color;
}
if ( ! in_array( $description_color, array( '', 'transparent' ), true ) ) {
    $css_vars[] = '--nextora-thli-description-color: ' . $description_color;
}
if ( ! in_array( $hover_highlight_color, array( '', 'transparent' ), true ) ) {
    $css_vars[] = '--nextora-thli-hover-bg: ' . $hover_highlight_color;
}
if ( ! in_array( $number_color, array( '', 'transparent' ), true ) ) {
    $css_vars[] = '--nextora-thli-number-color: ' . $number_color;
}

$css_vars[] = '--nextora-thli-image-width: ' . $image_width . 'px';
$css_vars[] = '--nextora-thli-image-height: ' . $image_height . 'px';
$css_vars[] = '--nextora-thli-title-size: var(--wp--preset--font-size--' . esc_attr( $title_size ) . ')';
$css_vars[] = '--nextora-thli-description-size: var(--wp--preset--font-size--' . esc_attr( $description_size ) . ')';
$css_vars[] = '--nextora-thli-year-size: var(--wp--preset--font-size--' . esc_attr( $year_size ) . ')';
$css_vars[] = '--nextora-thli-title-weight: ' . $title_weight;

$css_vars_string = implode( '; ', $css_vars );

$wrapper_classes = array( 'wp-block-nextora-text-list-hover-image' );
if ( $enable_scroll ) {
    $wrapper_classes[] = 'has-scroll-animation';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
        'class' => implode( ' ', $wrapper_classes ),
        'data-nextora-scroll-reveal' => $enable_scroll ? '1' : '0',
        'style' => $css_vars_string,
    ),
);

/**
 * @param array<string, mixed> $item
 */
function nextora_thli_render_image( array $item, int $width, int $height ): string {
    $image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
    $image_url = isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '';
    $image_alt = isset( $item['imageAlt'] ) ? trim( (string) $item['imageAlt'] ) : '';

    $inline_style = sprintf(
    	'width:%dpx;height:%dpx;object-fit:cover',
    	$width,
    	$height,
    );

    if ( $image_id > 0 ) {
        $alt = $image_alt;
        if ( '' === $alt ) {
            $alt = (string) get_post_meta( $image_id, '_wp_attachment_image_alt', true );
        }

        $filter = static function ( array $attr ) use ( $inline_style ): array {
            unset( $attr['width'], $attr['height'] );
            $attr['style'] = $inline_style;
            return $attr;
        };
        add_filter( 'wp_get_attachment_image_attributes', $filter );

        $html = wp_get_attachment_image(
        	$image_id,
        	array( $width, $height ),
        	false,
        	array(
                'class'   => 'nextora-text-list-hover-image__hover-img',
                'alt'     => $alt,
            ),
        );

        remove_filter( 'wp_get_attachment_image_attributes', $filter );

        if ( is_string( $html ) && '' !== $html ) {
            return $html;
        }
    }

    if ( '' === $image_url ) {
        return '';
    }

    return sprintf(
    	'<img class="nextora-text-list-hover-image__hover-img" src="%1$s" alt="%2$s" style="%3$s" />',
    	esc_url( $image_url ),
    	esc_attr( $image_alt ),
    	esc_attr( $inline_style ),
    );
}

/**
 * Build all hover image tags as hidden elements. JS will show the correct one on hover.
 *
 * @param array<int, array<string, mixed>> $items
 */
function nextora_thli_build_images_html( array $items, int $width, int $height ): string {
    $html = '';
    foreach ( $items as $index => $item ) {
        if ( ! is_array( $item ) ) {
            continue;
        }
        $img_html = nextora_thli_render_image( $item, $width, $height );
        if ( '' === $img_html ) {
            continue;
        }
        $html .= sprintf(
        	'<img class="nextora-text-list-hover-image__hover-img" data-thli-index="%d" src="%s" alt="" style="width:%dpx;height:%dpx;object-fit:cover" />',
        	$index,
        	esc_url( $item['imageUrl'] ?? '' ),
        	$width,
        	$height,
        );
    }
    return $html;
}

// Pre-render images for the hover layer
$images_html = '';
foreach ( $items as $index => $item ) {
    if ( ! is_array( $item ) ) {
        continue;
    }
    $image_url = isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '';
    if ( '' === $image_url ) {
        continue;
    }
    $images_html .= sprintf(
    	'<img class="nextora-text-list-hover-image__hover-img" data-thli-index="%d" src="%s" alt="" style="width:%dpx;height:%dpx;object-fit:cover" />',
    	$index,
    	esc_url( $image_url ),
    	$image_width,
    	$image_height,
    );
}
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="nextora-text-list-hover-image__items">
        <?php foreach ( $items as $index => $item ) : ?>
            <?php
            $item_id      = sanitize_text_field( $item['id'] ?? '' );
            $item_title   = wp_kses_post( $item['title'] ?? '' );
            $item_desc    = wp_kses_post( $item['description'] ?? '' );
            $item_year    = sanitize_text_field( $item['year'] ?? '' );
            $item_link    = esc_url( $item['link'] ?? '' );
            $has_link     = '' !== $item_link;
            $tag          = $has_link ? 'a' : 'div';

            // Mobile inline image
            $mobile_image_url = isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '';
            $mobile_image_alt = isset( $item['imageAlt'] ) ? trim( (string) $item['imageAlt'] ) : '';
            $mobile_image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
            $mobile_image_html = '';
            if ( '' !== $mobile_image_url ) {
                if ( $mobile_image_id > 0 ) {
                    $mobile_alt = $mobile_image_alt ?: (string) get_post_meta( $mobile_image_id, '_wp_attachment_image_alt', true );
                    $mobile_image_html = wp_get_attachment_image(
                    	$mobile_image_id,
                    	array( 120, 90 ),
                    	false,
                    	array(
                            'class'   => 'nextora-text-list-hover-image__item-thumb-img',
                            'alt'     => $mobile_alt,
                            'loading' => 'lazy',
                        ),
                    );
                }
                if ( ! is_string( $mobile_image_html ) || '' === $mobile_image_html ) {
                    $mobile_image_html = sprintf(
                    	'<img class="nextora-text-list-hover-image__item-thumb-img" src="%s" alt="%s" loading="lazy" />',
                    	esc_url( $mobile_image_url ),
                    	esc_attr( $mobile_image_alt ),
                    );
                }
            }
            ?>
            <<?php echo $tag; ?>
                class="nextora-text-list-hover-image__item"
                data-thli-index="<?php echo esc_attr( (string) $index ); ?>"
                <?php if ( $has_link ) : ?>
                    href="<?php echo esc_url( $item_link ); ?>"
                <?php endif; ?>
            >
                <div class="nextora-text-list-hover-image__item-border"></div>
                <span class="nextora-text-list-hover-image__item-number" aria-hidden="true"></span>
                <?php if ( '' !== $mobile_image_html ) : ?>
                    <div class="nextora-text-list-hover-image__item-thumb" aria-hidden="true">
                        <?php echo $mobile_image_html; ?>
                    </div>
                <?php endif; ?>
                <div class="nextora-text-list-hover-image__item-content">
                    <div class="nextora-text-list-hover-image__item-main">
                        <h3 class="nextora-text-list-hover-image__item-title">
                            <?php echo esc_html( $item_title ); ?>
                        </h3>
                    </div>
                    <?php if ( '' !== $item_desc ) : ?>
                        <p class="nextora-text-list-hover-image__item-description"><?php echo esc_html( $item_desc ); ?></p>
                    <?php endif; ?>
                </div>
                <div class="nextora-text-list-hover-image__item-action">
                    <svg
                        class="nextora-text-list-hover-image__item-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </div>
            </<?php echo $tag; ?>>
        <?php endforeach; ?>
    </div>

    <?php if ( '' !== $images_html ) : ?>
        <div class="nextora-text-list-hover-image__hover-image">
            <div class="nextora-text-list-hover-image__hover-image-inner">
                <?php echo $images_html; ?>
                <div class="nextora-text-list-hover-image__hover-image-gradient"></div>
            </div>
        </div>
    <?php endif; ?>
</div>
