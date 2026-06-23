<?php
/**
 * Advanced List — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes defined in block.json.
 * @var string               $content    Inner blocks HTML (empty for this block).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

// Get items array
$items = $attributes['items'] ?? array();
if ( ! is_array( $items ) || empty( $items ) ) {
	return;
}

// Get icon settings
$icon_size         = absint( $attributes['iconSize'] ?? 14 );
$icon_circle_size  = absint( $attributes['iconCircleSize'] ?? 32 );
$icon_style        = sanitize_text_field( $attributes['iconStyle'] ?? 'stacked' );
$stroke_width      = (float) ( $attributes['strokeWidth'] ?? 2.5 );
$border_radius     = absint( $attributes['borderRadius'] ?? 50 );
$icon_color        = $attributes['iconColor'] ?? '';
$icon_bg_color     = $attributes['iconBackgroundColor'] ?? '';
$icon_border_color = $attributes['iconBorderColor'] ?? '';
$icon_text_gap     = absint( $attributes['iconTextGap'] ?? 14 );

// Validate icon style
$allowed_styles = array( 'default', 'stacked', 'framed' );
if ( ! in_array( $icon_style, $allowed_styles, true ) ) {
	$icon_style = 'stacked';
}

// Scroll animation
$enable_scroll_animation = $attributes['enableScrollAnimation'] ?? true;

// Resolve colors
require_once get_theme_file_path( 'blocks/advanced-icon/lucide.php' );

$resolved_icon_color = '';
if ( $icon_color ) {
	if ( strpos( $icon_color, 'var:' ) === 0 ) {
		$slug                = str_replace( 'var:preset|color|', '', $icon_color );
		$resolved_icon_color = "var(--wp--preset--color--{$slug})";
	} elseif ( strpos( $icon_color, '#' ) === 0 ) {
		$resolved_icon_color = $icon_color;
	} else {
		$resolved_icon_color = "var(--wp--preset--color--{$icon_color})";
	}
}

$resolved_icon_bg_color = '';
if ( $icon_bg_color ) {
	if ( 'transparent' === $icon_bg_color ) {
		$resolved_icon_bg_color = 'transparent';
	} elseif ( strpos( $icon_bg_color, 'var:' ) === 0 ) {
		$slug                   = str_replace( 'var:preset|color|', '', $icon_bg_color );
		$resolved_icon_bg_color = "var(--wp--preset--color--{$slug})";
	} elseif ( strpos( $icon_bg_color, '#' ) === 0 ) {
		$resolved_icon_bg_color = $icon_bg_color;
	} else {
		$resolved_icon_bg_color = "var(--wp--preset--color--{$icon_bg_color})";
	}
}

$resolved_icon_border_color = '';
if ( $icon_border_color ) {
	if ( strpos( $icon_border_color, 'var:' ) === 0 ) {
		$slug                       = str_replace( 'var:preset|color|', '', $icon_border_color );
		$resolved_icon_border_color = "var(--wp--preset--color--{$slug})";
	} elseif ( strpos( $icon_border_color, '#' ) === 0 ) {
		$resolved_icon_border_color = $icon_border_color;
	} else {
		$resolved_icon_border_color = "var(--wp--preset--color--{$icon_border_color})";
	}
}

// Build CSS variables
$css_vars = array();
if ( $resolved_icon_color ) {
	$css_vars[] = '--nextora-list-icon-color: ' . $resolved_icon_color;
}
if ( $resolved_icon_bg_color ) {
	$css_vars[] = '--nextora-list-icon-bg: ' . $resolved_icon_bg_color;
}
if ( $resolved_icon_border_color ) {
	$css_vars[] = '--nextora-list-icon-border: ' . $resolved_icon_border_color;
}
$css_vars[] = '--nextora-list-icon-size: ' . $icon_size . 'px';
$css_vars[] = '--nextora-list-icon-circle-size: ' . $icon_circle_size . 'px';
$css_vars[] = '--nextora-list-icon-text-gap: ' . $icon_text_gap . 'px';
$css_vars[] = '--nextora-list-border-radius: ' . $border_radius . '%';
$css_vars[] = '--nextora-list-stroke-width: ' . $stroke_width;

$style_attr = count( $css_vars ) > 0 ? ' style="' . esc_attr( implode( '; ', $css_vars ) ) . '"' : '';

// Wrapper attributes
$wrapper_classes = array(
	'wp-block-nextora-advanced-list',
	'wp-block-nextora-advanced-list--style-' . $icon_style,
);
if ( $enable_scroll_animation ) {
	$wrapper_classes[] = 'has-scroll-animation';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $wrapper_classes ),
		'data-nextora-scroll-reveal' => $enable_scroll_animation ? '1' : '0',
	),
);
?>

<div <?php echo $wrapper_attributes; ?><?php echo $style_attr; ?>>
	<ul class="nextora-advanced-list__items">
		<?php foreach ( $items as $item ) : ?>
			<?php
			$item_id   = $item['id'] ?? '';
			$item_text = wp_kses_post( $item['text'] ?? '' );
			$icon_name = sanitize_text_field( $item['iconName'] ?? 'check' );

			if ( ! $item_text ) {
				continue;
			}

			// Get icon SVG from lucide
			$icon_svg = nextora_get_lucide_svg( $icon_name, $icon_size, 'currentColor', $stroke_width, '' );
			?>
			<li class="nextora-advanced-list__item" data-item-id="<?php echo esc_attr( $item_id ); ?>">
				<span class="nextora-advanced-list__icon" aria-hidden="true">
					<?php echo $icon_svg; ?>
				</span>
				<span class="nextora-advanced-list__text"><?php echo $item_text; ?></span>
			</li>
		<?php endforeach; ?>
	</ul>
</div>
