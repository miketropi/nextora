<?php
/**
 * Icon — dynamic block render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/lucide.php';

$source           = isset( $attributes['iconSource'] ) ? (string) $attributes['iconSource'] : 'theme';
$icon_name        = isset( $attributes['iconName'] ) ? sanitize_key( (string) $attributes['iconName'] ) : 'star';
$upload_url       = isset( $attributes['uploadedIconUrl'] ) ? (string) $attributes['uploadedIconUrl'] : '';
$size             = isset( $attributes['iconSize'] ) ? max( 1, (int) $attributes['iconSize'] ) : 24;
$stroke_w         = isset( $attributes['strokeWidth'] ) ? (float) $attributes['strokeWidth'] : 2.0;
$align            = isset( $attributes['iconAlign'] ) ? (string) $attributes['iconAlign'] : 'left';
$icon_style       = isset( $attributes['iconStyle'] ) ? (string) $attributes['iconStyle'] : 'default';
$border_radius    = isset( $attributes['borderRadius'] ) ? max( 0, (int) $attributes['borderRadius'] ) : 8;
$surface_padding  = isset( $attributes['surfacePadding'] ) ? max( 0, (int) $attributes['surfacePadding'] ) : 16;
$background_color = isset( $attributes['surfaceBackgroundColor'] )
	? (string) $attributes['surfaceBackgroundColor']
	: ( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$surface_gradient  = isset( $attributes['surfaceGradient'] ) ? trim( (string) $attributes['surfaceGradient'] ) : '';
$border_color     = isset( $attributes['surfaceBorderColor'] )
	? (string) $attributes['surfaceBorderColor']
	: ( isset( $attributes['borderColor'] ) ? (string) $attributes['borderColor'] : '' );
$link_url         = isset( $attributes['linkUrl'] ) ? trim( (string) $attributes['linkUrl'] ) : '';
$link_target      = isset( $attributes['linkTarget'] ) ? (string) $attributes['linkTarget'] : '_self';
$aria_label       = isset( $attributes['ariaLabel'] ) ? trim( (string) $attributes['ariaLabel'] ) : '';
$icon_color       = isset( $attributes['iconColor'] ) ? (string) $attributes['iconColor'] : '';
$is_editor        = ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || is_admin();
$enable_icon_animation = ! $is_editor && 'theme' === $source && ! empty( $attributes['enableIconAnimation'] );
$icon_animation_trigger = isset( $attributes['iconAnimationTrigger'] ) ? (string) $attributes['iconAnimationTrigger'] : 'hover';
$icon_animation_loop_pause = isset( $attributes['iconAnimationLoopPause'] ) ? max( 0, min( 3000, (int) $attributes['iconAnimationLoopPause'] ) ) : 600;
$allowed_icon_animation_triggers = array( 'hover', 'when-visible', 'loop' );
if ( ! in_array( $icon_animation_trigger, $allowed_icon_animation_triggers, true ) ) {
	$icon_animation_trigger = 'hover';
}
$enable_scroll    = nextora_icon_scroll_animation_enabled( $attributes );

$allowed_align = array( 'left', 'center', 'right' );
if ( ! in_array( $align, $allowed_align, true ) ) {
	$align = 'left';
}

$allowed_styles = array( 'default', 'stacked', 'framed' );
if ( ! in_array( $icon_style, $allowed_styles, true ) ) {
	$icon_style = 'default';
}

$color = nextora_icon_resolve_color( $icon_color );

$icon_markup = '';

if ( 'upload' === $source && '' !== $upload_url ) {
	$alt        = $aria_label;
	$aria_attrs = '' !== $aria_label ? '' : 'aria-hidden="true"';
	$icon_markup = sprintf(
		'<img src="%1$s" width="%2$d" height="%2$d" alt="%3$s" class="nextora-advanced-icon__img" %4$s loading="lazy" decoding="async" />',
		esc_url( $upload_url ),
		$size,
		esc_attr( $alt ),
		$aria_attrs,
	);
} elseif ( 'theme' === $source ) {
	$svg_aria = '' !== $link_url ? '' : $aria_label;
	$icon_markup = nextora_get_lucide_svg( $icon_name, $size, $color, $stroke_w, $svg_aria, $enable_icon_animation );
}

if ( '' === $icon_markup ) {
	return;
}

$has_surface = in_array( $icon_style, array( 'stacked', 'framed' ), true );
if ( $has_surface ) {
	$icon_markup = sprintf(
		'<span class="nextora-advanced-icon__surface">%s</span>',
		$icon_markup,
	);
}

if ( '' !== $link_url ) {
	$rel    = '_blank' === $link_target ? ' rel="noopener noreferrer"' : '';
	$a_aria = '' !== $aria_label ? ' aria-label="' . esc_attr( $aria_label ) . '"' : '';
	$icon_markup = sprintf(
		'<a href="%1$s" target="%2$s"%3$s class="nextora-advanced-icon__link"%4$s>%5$s</a>',
		esc_url( $link_url ),
		esc_attr( in_array( $link_target, array( '_self', '_blank' ), true ) ? $link_target : '_self' ),
		$rel,
		$a_aria,
		$icon_markup,
	);
}

$wrapper_classes = array(
	'nextora-advanced-icon',
	'nextora-advanced-icon--align-' . sanitize_html_class( $align ),
	'nextora-advanced-icon--style-' . sanitize_html_class( $icon_style ),
);

if ( ! $enable_scroll ) {
	$wrapper_classes[] = 'nextora-advanced-icon--scroll-off';
	$wrapper_classes[] = 'nextora-scroll-animation--ready';
}

$inline_styles = array(
	sprintf( '--nextora-advanced-icon-size:%dpx;', $size ),
);

if ( $has_surface ) {
	$inline_styles[] = sprintf( '--nextora-advanced-icon-radius:%dpx;', $border_radius );
	$inline_styles[] = sprintf( '--nextora-advanced-icon-padding:%dpx;', $surface_padding );
}

if ( 'stacked' === $icon_style ) {
	if ( '' !== $surface_gradient ) {
		$wrapper_classes[] = 'nextora-advanced-icon--bg-gradient';
		$gradient_value    = $surface_gradient;
		if ( preg_match( '/^[a-z0-9-]+$/i', $surface_gradient ) ) {
			$gradient_value = 'var(--wp--preset--gradient--' . sanitize_html_class( $surface_gradient ) . ')';
		}
		$inline_styles[] = sprintf(
			'--nextora-advanced-icon-bg-gradient:%s;',
			esc_attr( $gradient_value ),
		);
	} elseif ( '' !== $background_color ) {
		$inline_styles[] = sprintf(
			'--nextora-advanced-icon-bg:%s;',
			esc_attr( nextora_icon_resolve_color( $background_color ) ),
		);
	} elseif ( '' !== $icon_color ) {
		$wrapper_classes[] = 'nextora-advanced-icon--bg-auto';
		$inline_styles[]  = sprintf(
			'--nextora-advanced-icon-auto-bg:%s;',
			esc_attr( nextora_icon_resolve_color( $icon_color ) ),
		);
	}
}

if ( 'framed' === $icon_style && '' !== $border_color ) {
	$inline_styles[] = sprintf(
		'--nextora-advanced-icon-border-color:%s;',
		esc_attr( nextora_icon_resolve_color( $border_color ) ),
	);
}

$wrapper_args = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => implode( ' ', $inline_styles ),
);

if ( $enable_icon_animation ) {
	$wrapper_args['data-nextora-icon-animation']            = $icon_animation_trigger;
	$wrapper_args['data-nextora-icon-animation-state']      = 'idle';
	$wrapper_args['data-nextora-icon-animation-loop-pause'] = (string) $icon_animation_loop_pause;
}

nextora_icon_enqueue_view_script();

if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
} else {
	$wrapper_args['data-nextora-scroll-animation-init'] = '1';
}

$wrapper = get_block_wrapper_attributes( $wrapper_args );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php echo $icon_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
</div>


