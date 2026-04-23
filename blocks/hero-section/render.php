<?php
/**
 * Hero Section — dynamic block render template.
 *
 * WordPress passes $content built from innerContent string chunks plus rendered inner
 * blocks, so it includes the save() outer div (useBlockProps). Wrapping that string
 * nests both columns in one grid cell — wrong layout. Render direct inner blocks only.
 *
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Pre-merged inner HTML (may include duplicate save wrapper).
 * @var WP_Block $block      Block instance.
 */

/**
 * Remove the outermost wrapper div (used when only $content is available).
 *
 * @param string $html Full HTML that starts with a single root <div>…</div>.
 * @return string Inner HTML.
 */
if ( ! function_exists( 'nextora_hero_section_strip_outer_wrapper' ) ) {
	function nextora_hero_section_strip_outer_wrapper( string $html ): string {
		$html = trim( $html );
		if ( 0 !== strpos( $html, '<div' ) ) {
			return $html;
		}

		$len = strlen( $html );
		$i   = 0;

		while ( $i < $len && preg_match( '/\s/', $html[ $i ] ) ) {
			++$i;
		}
		if ( 0 !== stripos( substr( $html, $i ), '<div' ) ) {
			return $html;
		}

		$gt = strpos( $html, '>', $i );
		if ( false === $gt ) {
			return $html;
		}

		$depth         = 1;
		$content_start = $gt + 1;
		$i              = $content_start;

		while ( $i < $len && $depth > 0 ) {
			$next_div_open  = stripos( $html, '<div', $i );
			$next_div_close = stripos( $html, '</div>', $i );

			if ( false === $next_div_close ) {
				break;
			}

			if ( false !== $next_div_open && $next_div_open < $next_div_close ) {
				++$depth;
				$i = $next_div_open + 4;
				continue;
			}

			--$depth;
			if ( 0 === $depth ) {
				return substr( $html, $content_start, $next_div_close - $content_start );
			}
			$i = $next_div_close + 6;
		}

		return $html;
	}
}

$split    = $attributes['columnSplit'] ?? '50-50';
$creative = $attributes['creativePosition'] ?? 'right';
$stack    = $attributes['stackOrder'] ?? 'content-first';
$v_align  = $attributes['verticalAlign'] ?? 'center';
$sticky   = isset( $attributes['stickyColumn'] ) ? (string) $attributes['stickyColumn'] : 'none';

$legacy_heading = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$legacy_content = isset( $attributes['content'] ) ? (string) $attributes['content'] : '';

$split_to_cols = array(
	'50-50' => 'minmax(0, 1fr) minmax(0, 1fr)',
	'40-60' => 'minmax(0, 2fr) minmax(0, 3fr)',
	'60-40' => 'minmax(0, 3fr) minmax(0, 2fr)',
	'33-66' => 'minmax(0, 1fr) minmax(0, 2fr)',
	'66-33' => 'minmax(0, 2fr) minmax(0, 1fr)',
);

$align_map = array(
	'top'    => 'start',
	'center' => 'center',
	'bottom' => 'end',
);

$css_cols = $split_to_cols[ $split ] ?? $split_to_cols['50-50'];
$align    = $align_map[ $v_align ] ?? 'center';

$has_from_inner_blocks = is_object( $block ) && ! empty( $block->inner_blocks );
$has_content_string    = is_string( $content ) && '' !== trim( $content );
$has_legacy            = ( $legacy_heading !== '' || $legacy_content !== '' );
$is_legacy             = ( ! $has_from_inner_blocks && ! $has_content_string ) && $has_legacy;

if ( ! $has_from_inner_blocks && ! $has_content_string && ! $has_legacy ) {
	return;
}

$classes = array(
	'nextora-hero--split',
	'nextora-hero--split-' . sanitize_title( $split ),
	'nextora-hero--align-v-' . sanitize_title( $v_align ),
	'left' === $creative ? 'nextora-hero--creative-left' : 'nextora-hero--creative-right',
	'nextora-hero--stack-' . ( 'creative-first' === $stack ? 'creative-first' : 'content-first' ),
);
$allowed_sticky = array( 'none', 'content', 'creative' );
if ( in_array( $sticky, $allowed_sticky, true ) && 'none' !== $sticky ) {
	$classes[] = 'nextora-hero--sticky-' . $sticky;
}

if ( $is_legacy ) {
	$classes[] = 'nextora-hero--legacy';
}

$style_rules = array(
	'--nextora-hero--cols:' . $css_cols,
	'--nextora-hero--align:' . $align,
);

$wrapper = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $classes ),
		'style' => implode( ';', $style_rules ),
	)
);

if ( $is_legacy ) {
	$title = $legacy_heading ? wp_kses( $legacy_heading, array( 'strong' => array(), 'em' => array() ) ) : '';
	$lede  = $legacy_content ? wp_kses_post( $legacy_content ) : '';
	$inner = '<div class="nextora-hero__grid nextora-hero__grid--legacy">';
	$inner .= '<div class="nextora-hero__column nextora-hero__column--content wp-block-group">';
	if ( $title ) {
		$inner .= '<h2 class="nextora-hero__legacy-heading">' . $title . '</h2>';
	}
	if ( $lede ) {
		$inner .= '<div class="nextora-hero__legacy-content">' . $lede . '</div>';
	}
	$inner .= '</div></div>';
} elseif ( $has_from_inner_blocks ) {
	$inner_html = '';
	foreach ( $block->inner_blocks as $inner_block ) {
		$inner_html .= $inner_block->render();
	}
	$inner = '<div class="nextora-hero__grid">' . $inner_html . '</div>';
} else {
	$inner_html = nextora_hero_section_strip_outer_wrapper( (string) $content );
	$inner        = '<div class="nextora-hero__grid">' . $inner_html . '</div>';
}

echo '<div ' . $wrapper . '>' . $inner . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
