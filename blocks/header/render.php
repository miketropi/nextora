<?php

/**
 * Server-side render: nextora/header.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks (unused).
 * @var WP_Block|null        $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once get_theme_file_path( 'blocks/advanced-icon/lucide.php' );

$attributes = is_array( $attributes ?? null ) ? $attributes : array();

if ( ! function_exists( 'nextora_header_block_sanitize_border_color' ) ) {
	/**
	 * Sanitize `bottomBorderColor` for a CSS `border-*-color` value.
	 *
	 * @param string $value Raw attribute.
	 */
	function nextora_header_block_sanitize_border_color( string $value ): string
	{
		$value = trim( $value );
		if ( '' === $value ) {
			return '';
		}

		// Serialized preset from block markup (Global Styles format).
		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $value, $preset_m ) ) {
			return 'var(--wp--preset--color--' . strtolower( $preset_m[1] ) . ')';
		}

		$hex = sanitize_hex_color( $value );
		if ( is_string( $hex ) && '' !== $hex ) {
			return $hex;
		}

		// 8-digit RGBA hex (common from the color picker with alpha).
		if ( preg_match( '/^#([0-9a-f]{8})$/i', $value ) ) {
			return strtolower( $value );
		}

		// Theme palette (CSS variable).
		if ( preg_match( '/^var\(\s*--wp--preset--color--[a-z0-9_-]+\s*\)$/i', $value ) ) {
			$normalized = preg_replace( '/\s+/', ' ', $value );

			return is_string( $normalized ) ? $normalized : '';
		}

		// rgb()/rgba() and hsl()/hsla() — comma or space + slash; reject obvious injection.
		if (
			strlen( $value ) <= 140
			&& ! preg_match( '/[;<>{}]|url\s*\(|expression\s*\(/i', $value )
			&& preg_match( '/^(?:rgb|hsl)a?\([^)]+\)$/i', $value )
		) {
			$normalized = preg_replace( '/\s+/', ' ', $value );

			return is_string( $normalized ) ? $normalized : '';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_header_block_append_border_color_to_wrapper' ) ) {
	/**
	 * Append border-bottom-color as the last declaration in the wrapper style attribute so it wins over
	 * block-support styles and other rules in the same inline style.
	 *
	 * @param string $wrapper_attributes Output from get_block_wrapper_attributes().
	 * @param string $san_border         Sanitized color value.
	 */
	function nextora_header_block_append_border_color_to_wrapper( string $wrapper_attributes, string $san_border ): string
	{
		if ( '' === $san_border ) {
			return $wrapper_attributes;
		}

		$declaration = 'border-bottom-color:' . $san_border;

		if ( preg_match( '/\bstyle="([^"]*)"/', $wrapper_attributes, $m ) ) {
			$existing = html_entity_decode( $m[1], ENT_QUOTES | ENT_HTML5, 'UTF-8' );
			$new_css  = trim( rtrim( $existing, ';' ) ) . ';' . $declaration;

			return (string) preg_replace(
				'/\bstyle="[^"]*"/',
				'style="' . esc_attr( $new_css ) . '"',
				$wrapper_attributes,
				1,
			);
		}

		return trim( $wrapper_attributes ) . ' style="' . esc_attr( $declaration ) . '"';
	}
}

if ( ! function_exists( 'nextora_header_block_sanitize_inner_max_width' ) ) {
	/**
	 * Sanitize custom max-width for `.nextora-header-block__inner` inline style only.
	 *
	 * @param string $value Raw attribute.
	 */
	function nextora_header_block_sanitize_inner_max_width( string $value ): string
	{
		$value = trim( $value );
		if ( '' === $value || strlen( $value ) > 120 ) {
			return '';
		}

		if ( preg_match( '/[;<>{}]|url\s*\(|expression\s*\(|\\\\/i', $value ) ) {
			return '';
		}

		if ( preg_match( '/^var\(\s*(--[a-zA-Z0-9][a-zA-Z0-9._-]*)\s*\)$/', $value, $var_m ) ) {
			return 'var(' . $var_m[1] . ')';
		}

		if ( preg_match( '/^(?:0|[0-9]*\.?[0-9]+)(?:px|rem|em|%|vw|vh|svw|svh|ch|cap)$/i', $value ) ) {
			return $value;
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_header_block_mobile_breakpoint_css' ) ) {
	/**
	 * Generate inline <style> tag that overrides @media breakpoints to the custom value.
	 *
	 * Returns empty string when $bp === 768 (theme default).
	 *
	 * @param int $bp Desktop breakpoint in pixels.
	 */
	function nextora_header_block_mobile_breakpoint_css( int $bp ): string
	{
		if ( 768 === $bp ) {
			return '';
		}

		$d  = $bp;         // desktop min-width
		$m2 = $bp - 0.02;  // mobile max-width (covers logo, inner grid, utilities, portal)

		return '<style id="nextora-header-mobile-bp-' . (int) $bp . '">' . "\n"

			// ================================================================
			// Desktop: apply custom breakpoint override for layout rules that
			// style.css normally applies at min-width:768px.
			// ================================================================
			. '@media (min-width: ' . $d . 'px) {' . "\n"

			// -- nav source visible -----------------------------------------
			. '  .nextora-header-block__nav-source{display:flex;}' . "\n"

			// -- menu toggle hidden -----------------------------------------
			. '  .nextora-header-block__menu-toggle{display:none !important;}' . "\n"

			// -- two-row layout ---------------------------------------------
			. '  .nextora-header-block--layout-two-row .nextora-header-block__inner{' . "\n"
			. '    gap:var(--wp--preset--spacing--10,0.85rem);' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block__row--nav{display:flex;align-items:center;justify-content:center;}' . "\n"
			. '  .nextora-header-block--layout-two-row .nextora-header-block__row--nav .nextora-header-block__nav-source{' . "\n"
			. '    flex:1 1 auto;justify-content:center;width:100%;' . "\n"
			. '  }' . "\n"

			// -- logo-nav-center layout -------------------------------------
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__inner{' . "\n"
			. '    display:grid;align-items:center;' . "\n"
			. '    column-gap:clamp(var(--wp--preset--spacing--10,1rem),2vw,var(--nextora-gutter,1.5rem));' . "\n"
			. '    row-gap:var(--wp--preset--spacing--10,0.85rem);' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__logo{' . "\n"
			. '    grid-column:1;z-index:3;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__nav-source{' . "\n"
			. '    grid-column:2;flex:0 1 auto;width:100%;max-width:100%;justify-self:center;justify-content:center;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__actions{' . "\n"
			. '    grid-column:3;justify-self:end;' . "\n"
			. '  }' . "\n"

			// -- nav-start-logo-center layout -------------------------------
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__inner{' . "\n"
			. '    display:grid;grid-template-columns:3fr 1fr 3fr;grid-template-rows:auto;grid-template-areas:"nav logo actions";' . "\n"
			. '    align-items:center;' . "\n"
			. '    column-gap:clamp(var(--wp--preset--spacing--10,1rem),2vw,var(--nextora-gutter,1.5rem));' . "\n"
			. '    width:100%;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__nav-source{' . "\n"
			. '    grid-area:nav;justify-self:start;align-self:center;width:fit-content;max-width:100%;min-width:0;' . "\n"
			. '    justify-content:flex-start;flex:0 1 auto;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__nav-source .nextora-header-block__nav-el{' . "\n"
			. '    width:auto;max-width:100%;min-width:0;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__logo{' . "\n"
			. '    grid-area:logo;justify-self:center;align-self:center;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__logo .nextora-header-block__logo-link{' . "\n"
			. '    justify-content:center;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__actions{' . "\n"
			. '    grid-area:actions;justify-self:end;align-self:center;width:fit-content;max-width:100%;min-width:0;' . "\n"
			. '  }' . "\n"

			// -- follow-us drawer (hide on desktop in nav source) ----------
			. '  .nextora-header-block__follow-us--drawer{display:none !important;}' . "\n"

			// -- portal hidden on desktop (nav-menus.css) -------------------
			. '  .nextora-primary-nav-portal,' . "\n"
			. '  .nextora-primary-nav-portal.nextora-primary-nav-portal--open{' . "\n"
			. '    display:none !important;visibility:hidden;pointer-events:none;' . "\n"
			. '  }' . "\n"

			// -- submenu accordion toggle hidden on desktop (nav-menus.css) -
			. '  .nextora-header-menu .nextora-submenu-toggle{display:none !important;}' . "\n"

			. '}' . "\n"

			// ================================================================
			// Mobile: reset everything that desktop rules (min-width:768px)
			// in style.css / nav-menus.css would otherwise set. The base
			// (non-media-query) rules already define the mobile defaults, but
			// we need !important guards so they override the 768px rules when
			// the viewport is below the custom breakpoint but above 768px.
			// ================================================================
			. '@media (max-width: ' . $m2 . 'px) {' . "\n"

			// -- force mobile nav-source + menu-toggle ----------------------
			. '  .nextora-header-block__nav-source{display:none !important;}' . "\n"
			. '  .nextora-header-block__menu-toggle{display:inline-flex !important;}' . "\n"

			// -- inner grid: mobile 2-column --------------------------------
			. '  .nextora-header-block__inner{grid-template-columns:1fr auto !important;}' . "\n"

			// -- reset logo-nav-center explicit child placements ------------
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__inner{' . "\n"
			. '    grid-template-columns:1fr auto !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__logo{' . "\n"
			. '    grid-column:auto !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__nav-source{' . "\n"
			. '    grid-column:auto !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-logo-nav-center .nextora-header-block__actions{' . "\n"
			. '    grid-column:auto !important;justify-self:auto !important;' . "\n"
			. '  }' . "\n"

			// -- reset nav-start-logo-center explicit child placements ------
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__inner{' . "\n"
			. '    grid-template-columns:1fr auto !important;grid-template-areas:none !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__logo{' . "\n"
			. '    grid-area:auto !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__nav-source{' . "\n"
			. '    grid-area:auto !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--layout-nav-start-logo-center .nextora-header-block__actions{' . "\n"
			. '    grid-area:auto !important;' . "\n"
			. '  }' . "\n"

			// -- reset two-row nav row visibility ---------------------------
			. '  .nextora-header-block__row--nav{display:none !important;}' . "\n"

			// -- logo swap --------------------------------------------------
			. '  .nextora-header-block__logo-img--desktop{display:none;}' . "\n"
			. '  .nextora-header-block__logo-img--mobile{' . "\n"
			. '    display:block;max-width:min(100%,var(--nextora-header-logo-max-width-mobile,var(--nextora-header-logo-max-width,150px)));' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block__logo-img:not(.nextora-header-block__logo-img--desktop):not(.nextora-header-block__logo-img--mobile){' . "\n"
			. '    max-width:min(100%,var(--nextora-header-logo-max-width-mobile,var(--nextora-header-logo-max-width,150px)));' . "\n"
			. '  }' . "\n"

			// Editor canvas mirror
			. '  .nextora-header-block--editor .nextora-header-block__logo-img--desktop{display:none;}' . "\n"
			. '  .nextora-header-block--editor .nextora-header-block__logo-img--mobile{' . "\n"
			. '    display:block;max-width:min(100%,var(--nextora-header-logo-max-width-mobile,var(--nextora-header-logo-max-width,150px)));' . "\n"
			. '  }' . "\n"
			. '  .nextora-header-block--editor .nextora-header-block__logo-img:not(.nextora-header-block__logo-img--desktop):not(.nextora-header-block__logo-img--mobile){' . "\n"
			. '    max-width:min(100%,var(--nextora-header-logo-max-width-mobile,var(--nextora-header-logo-max-width,150px)));' . "\n"
			. '  }' . "\n"

			// -- utility hide rules -----------------------------------------
			. '  .nextora-header-block__utilities--hide-follow-us-mobile .nextora-header-block__follow-us{display:none !important;}' . "\n"
			. '  .nextora-header-block__utilities--hide-search-mobile .nextora-header-block__search{display:none !important;}' . "\n"
			. '  .nextora-header-block__utilities--hide-cart-mobile .nextora-header-block__cart{display:none !important;}' . "\n"
			. '  .nextora-header-block__utilities--hide-cta-mobile .nextora-header-block__cta-wrap{display:none !important;}' . "\n"

			// -- icon sizes / touch target tweaks ---------------------------
			. '  .nextora-header-block__utilities .nextora-header-block__cart-link,' . "\n"
			. '  .nextora-header-block__utilities .nextora-header-block__cart--woo .wc-block-mini-cart__button,' . "\n"
			. '  .nextora-header-block__utilities .nextora-header-block__account-link,' . "\n"
			. '  .nextora-header-block__cart--woo .wc-block-mini-cart{width:2rem;height:2rem;}' . "\n"
			. '  .nextora-header-block__cart--woo .wc-block-mini-cart__icon{width:1.5rem;height:1.5rem;}' . "\n"
			. '  .nextora-header-block__cart-placeholder{width:2rem;height:2rem;}' . "\n"
			. '  .nextora-header-block__menu-toggle,' . "\n"
			. '  .nextora-header-block__search--spotlight button[data-nextora-modal-open]{width:2rem;height:2rem;}' . "\n"
			. '  .nextora-header-block__search--spotlight button[data-nextora-modal-open] svg{width:20px;height:20px;}' . "\n"

			// -- utilities / actions reflow --------------------------------
			. '  .nextora-header-block__utilities{column-gap:0.25rem;row-gap:0.25rem;align-items:center;min-width:0;flex-shrink:1;}' . "\n"
			. '  .nextora-header-block__actions{min-width:0;flex-shrink:1;}' . "\n"

			// -- follow-us toggle tightening ---------------------------------
			. '  .nextora-header-block__follow-us-toggle{font-size:0.8125rem;padding:0.3rem 0.4rem;}' . "\n"
			. '  .nextora-header-block__follow-us-panel{border-radius:1rem;}' . "\n"

			// -- simple search ----------------------------------------------
			. '  .nextora-header-block__search--simple{max-width:none;flex:1 1 8rem;}' . "\n"

			// -- follow-us drawer: force visible inside portal mount ---------
			// (overrides style.css @media min-width:768px display:none !important)
			. '  .nextora-primary-nav-portal__mount .nextora-header-block__follow-us--drawer{' . "\n"
			. '    display:block !important;' . "\n"
			. '  }' . "\n"

			// ================================================================
			// Portal mobile rules (from nav-menus.css @media max-width:767.98px)
			// ================================================================

			. '  .nextora-primary-nav-portal{' . "\n"
			. '    --nextora-nav-portal-dur:var(--nextora-offcanvas-dur);--nextora-nav-portal-ease:var(--nextora-offcanvas-ease);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal:not([hidden]){' . "\n"
			. '    display:flex !important;flex-direction:column;align-items:flex-end;justify-content:stretch;' . "\n"
			. '    min-height:100dvh;visibility:visible;opacity:0;pointer-events:none;' . "\n"
			. '    transition:opacity var(--nextora-nav-portal-dur) var(--nextora-nav-portal-ease);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal.nextora-primary-nav-portal--open{' . "\n"
			. '    display:flex !important;visibility:visible !important;' . "\n"
			. '    opacity:1;pointer-events:auto;' . "\n"
			. '    transition:opacity var(--nextora-nav-portal-dur) var(--nextora-nav-portal-ease);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--gsap.nextora-primary-nav-portal--open{opacity:1;transition:none;}' . "\n"
			. '  .nextora-primary-nav-portal--gsap .nextora-primary-nav-portal__backdrop,' . "\n"
			. '  .nextora-primary-nav-portal--gsap .nextora-primary-nav-portal__panel{transition:none !important;}' . "\n"
			. '  .nextora-primary-nav-portal__panel{' . "\n"
			. '    width:90%;max-width:90%;max-height:100dvh;margin:0;padding:0;' . "\n"
			. '    transform:translate3d(0,-0.5rem,0);transition:transform var(--nextora-nav-portal-dur) var(--nextora-nav-portal-ease);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel{transform:translate3d(0,0,0);}' . "\n"
			. '  .nextora-primary-nav-portal--gsap .nextora-primary-nav-portal__panel{transform:none;}' . "\n"
			. '  @media (prefers-reduced-motion:reduce){' . "\n"
			. '    .nextora-primary-nav-portal:not([hidden]){--nextora-nav-portal-dur:0.01ms;}' . "\n"
			. '    .nextora-primary-nav-portal__panel{transform:none;transition:none;}' . "\n"
			. '  }' . "\n"

			// Portal mount + panel mobile
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__mount{flex:1 1 auto;min-height:100%;}' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__mount--follow-us-open,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel--follow-us-open{overflow:visible;}' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__mount--follow-us-open>nav{position:relative;z-index:1;}' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel{' . "\n"
			. '    padding:4rem 1rem 0;background-color:var(--nextora-nav-mobile-drawer-bg);color:var(--nextora-nav-mobile-drawer-fg);' . "\n"
			. '    border-block-start:1px solid var(--nextora-nav-mobile-drawer-border);' . "\n"
			. '    box-shadow:var(--nextora-nav-mobile-drawer-shadow);box-sizing:border-box;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-navigation-from-location--primary{' . "\n"
			. '    flex-direction:column;align-items:stretch;justify-content:flex-start;row-gap:0;column-gap:0;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu{' . "\n"
			. '    flex-direction:column;flex-wrap:nowrap;align-items:stretch;justify-content:flex-start;' . "\n"
			. '    width:100%;gap:0;padding:0;margin:0;list-style:none;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li>a{' . "\n"
			. '    padding:var(--wp--preset--spacing--10,1rem) 0;font-size:var(--wp--preset--font-size--base,1rem);' . "\n"
			. '    font-weight:500;border-radius:0;background:transparent;box-shadow:none;' . "\n"
			. '    transition:background-color var(--nextora-nav-t,0.18s ease),color var(--nextora-nav-t,0.18s ease);color:inherit;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li>a:hover,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li>a:focus-visible{' . "\n"
			. '    color:var(--wp--preset--color--primary);background-color:transparent;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.menu-item-has-children{' . "\n"
			. '    display:flex;flex-wrap:wrap;align-items:center;gap:0 var(--wp--preset--spacing--05,0.5rem);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.menu-item-has-children>a{' . "\n"
			. '    flex:1 1 auto;min-width:0;border-bottom:none;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .menu-item-has-children>a::after{display:none;}' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-submenu-toggle{' . "\n"
			. '    flex:0 0 auto;display:inline-flex !important;align-items:center;justify-content:center;' . "\n"
			. '    width:2.5rem;height:2.5rem;margin:0;padding:0;border:none;border-radius:var(--wp--preset--spacing--05,0.375rem);' . "\n"
			. '    background:transparent;color:inherit;cursor:pointer;transition:background-color var(--nextora-nav-t),transform var(--nextora-nav-t);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-submenu-toggle:hover,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-submenu-toggle:focus-visible{' . "\n"
			. '    background:transparent;outline:none;outline-offset:0;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-submenu-toggle__icon{' . "\n"
			. '    display:flex;line-height:0;transition:transform var(--nextora-nav-t);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-submenu-toggle[aria-expanded="true"] .nextora-submenu-toggle__icon{' . "\n"
			. '    transform:rotate(180deg);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .menu-item-has-children>.sub-menu{' . "\n"
			. '    flex:1 0 100%;width:100%;box-sizing:border-box;margin:0;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu .menu-item-has-children{' . "\n"
			. '    display:flex;flex-wrap:wrap;align-items:center;gap:0 var(--wp--preset--spacing--05,0.5rem);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu .menu-item-has-children>a{' . "\n"
			. '    flex:1 1 auto;min-width:0;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu .menu-item-has-children>.sub-menu{' . "\n"
			. '    flex:1 0 100%;width:100%;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .menu-item-has-children:not(.nextora-submenu--open)>.sub-menu{' . "\n"
			. '    display:none !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu li.nextora-submenu--open>.sub-menu{' . "\n"
			. '    display:block !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu{' . "\n"
			. '    position:static;display:block;opacity:1;visibility:visible;transform:none;pointer-events:auto;' . "\n"
			. '    min-width:0;margin:0 0 var(--wp--preset--spacing--10,1rem);padding:0;' . "\n"
			. '    padding-inline-start:var(--wp--preset--spacing--10,1rem);border:none;border-radius:0;' . "\n"
			. '    box-shadow:none;background-color:transparent;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu .sub-menu{' . "\n"
			. '    margin-top:0;margin-inline-start:0;padding-inline-start:var(--wp--preset--spacing--10,1rem);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .menu-item-has-children::before{display:none;}' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu a{' . "\n"
			. '    padding:var(--wp--preset--spacing--05,0.5rem) 0;font-size:var(--wp--preset--font-size--small,0.9375rem);' . "\n"
			. '    width:auto;color:inherit;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu a:hover,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu a:focus-visible{' . "\n"
			. '    color:var(--wp--preset--color--primary);background-color:transparent;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu .current-menu-item>a,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu .sub-menu .current-menu-ancestor>a{' . "\n"
			. '    color:var(--nextora-nav-panel-active-fg);font-weight:600;background-color:transparent;' . "\n"
			. '  }' . "\n"

			// ================================================================
			// Beplus mega menu: accordion inside portal (all viewports).
			// Mirrors the <768px behavior — no dependency on plugin breakpoints.
			// ================================================================

			// ha-mega-menu item in portal: flex-wrap row
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu{' . "\n"
			. '    display:flex !important;flex-wrap:wrap;align-items:center;' . "\n"
			. '    gap:0 var(--wp--preset--spacing--05,0.5rem);width:100%;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>a{' . "\n"
			. '    flex:1 1 auto;min-width:0;border-bottom:none;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>a::after,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu::before,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu:hover::after,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu:focus-within::after{' . "\n"
			. '    display:none !important;' . "\n"
			. '  }' . "\n"

			// Mega panel: force static accordion (undo all beplus position/flyout/off-canvas)
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>.beplus-vmn-mega-panel{' . "\n"
			. '    position:static !important;top:auto !important;left:auto !important;right:auto !important;bottom:auto !important;' . "\n"
			. '    width:100% !important;max-width:none !important;transform:none !important;' . "\n"
			. '    flex:1 0 100% !important;box-shadow:none !important;border-radius:0 !important;' . "\n"
			. '    z-index:auto !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .beplus-vmn-mega-panel__inner{' . "\n"
			. '    padding:0 !important;' . "\n"
			. '  }' . "\n"

			// Accordion open/close via beplus-vmn--open class
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu:not(.beplus-vmn--open)>.beplus-vmn-mega-panel{' . "\n"
			. '    display:none !important;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu.beplus-vmn--open>.beplus-vmn-mega-panel{' . "\n"
			. '    display:block !important;overflow:visible;opacity:1;visibility:visible;pointer-events:auto;max-height:none;' . "\n"
			. '  }' . "\n"

			// Toggle button & icon — full beplus styles (needed at all widths
			// because plugin CSS restricts them to ≤1023px).
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>.beplus-vmn-toggle{' . "\n"
			. '    -webkit-appearance:none;appearance:none;flex:0 0 auto;align-self:center;' . "\n"
			. '    display:inline-flex !important;align-items:center;justify-content:center;' . "\n"
			. '    width:2.5rem;height:2.5rem;margin:0;margin-inline-start:auto;margin-inline-end:0;' . "\n"
			. '    padding:0;border:none;border-radius:var(--wp--preset--spacing--05,0.375rem);' . "\n"
			. '    background:transparent;color:inherit;font:inherit;line-height:1;' . "\n"
			. '    cursor:pointer;flex-shrink:0;' . "\n"
			. '    transition:background-color 0.15s ease;' . "\n"
			. '    --beplus-vmn-toggle-hover-bg:var(--nextora-nav-panel-hover-bg,color-mix(in srgb,currentColor 8%,transparent));' . "\n"
			. '    --beplus-vmn-toggle-active-bg:var(--nextora-nav-panel-hover-bg,color-mix(in srgb,currentColor 12%,transparent));' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>.beplus-vmn-toggle:hover,' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>.beplus-vmn-toggle:focus-visible{' . "\n"
			. '    background-color:var(--beplus-vmn-toggle-hover-bg);' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>.beplus-vmn-toggle:focus-visible{' . "\n"
			. '    outline:2px solid var(--wp--preset--color--primary,currentColor);outline-offset:2px;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .nextora-header-menu>li.has-mega-menu>.beplus-vmn-toggle[aria-expanded="true"]{' . "\n"
			. '    background-color:var(--beplus-vmn-toggle-active-bg);' . "\n"
			. '  }' . "\n"

			// Toggle icon
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .beplus-vmn-toggle__icon{' . "\n"
			. '    display:flex;align-items:center;justify-content:center;' . "\n"
			. '    width:0.75rem;height:0.75rem;line-height:0;' . "\n"
			. '    transition:transform 0.2s ease;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .beplus-vmn-toggle__icon svg{' . "\n"
			. '    display:block;width:100%;height:100%;' . "\n"
			. '  }' . "\n"
			. '  .nextora-primary-nav-portal--open .nextora-primary-nav-portal__panel .beplus-vmn-toggle[aria-expanded="true"] .beplus-vmn-toggle__icon{' . "\n"
			. '    transform:rotate(180deg);' . "\n"
			. '  }' . "\n"

			// Overlay — always hidden in portal (accordion doesn't need it)
			. '  .beplus-vmn-overlay{display:none !important;}' . "\n"

			. '}' . "\n"
			. '</style>' . "\n";
	}
}

if ( ! function_exists( 'nextora_header_block_logo_img_inline_style' ) ) {
	/**
	 * Inline max-width for logo images (editor SSR preview + front end).
	 *
	 * @param int $max_width Max display width in pixels.
	 */
	function nextora_header_block_logo_img_inline_style( int $max_width ): string
	{
		if ( $max_width < 1 ) {
			return 'width:auto;height:auto;';
		}

		return sprintf( 'max-width:min(100%%, %dpx);width:auto;height:auto;', $max_width );
	}
}

if ( ! function_exists( 'nextora_header_block_render_logo_image' ) ) {
	/**
	 * Logo `<img>` from a block-uploaded media attachment.
	 *
	 * @param int    $attachment_id  Attachment post ID.
	 * @param string $modifier_class Optional BEM modifier class(es) on the `<img>`.
	 * @param int    $max_width      Max display width in pixels.
	 */
	function nextora_header_block_render_logo_image(
		int $attachment_id,
		string $modifier_class = '',
		int $max_width = 0,
	): string {
		if ( $attachment_id <= 0 || ! wp_attachment_is_image( $attachment_id ) ) {
			return '';
		}

		$class = 'nextora-header-block__logo-img';
		if ( '' !== $modifier_class ) {
			$class .= ' ' . $modifier_class;
		}

		$img = wp_get_attachment_image(
			$attachment_id,
			'full',
			false,
			array(
				'class'    => $class,
				'style'    => nextora_header_block_logo_img_inline_style( $max_width ),
				'loading'  => 'eager',
				'decoding' => 'async',
			),
		);

		return is_string( $img ) ? $img : '';
	}
}

if ( ! function_exists( 'nextora_header_block_get_block_logo_attachment_id' ) ) {
	/**
	 * Resolve the block-uploaded logo attachment ID from saved attributes.
	 *
	 * Prefer `logoImageId`; fall back to resolving `logoImageUrl` when the ID was not persisted.
	 *
	 * @param array<string, mixed> $atts    Block attributes.
	 * @param string               $variant `default` or `mobile`.
	 */
	function nextora_header_block_get_block_logo_attachment_id( array $atts, string $variant = 'default' ): int
	{
		if ( 'mobile' === $variant ) {
			$id  = isset( $atts['logoImageIdMobile'] ) ? (int) $atts['logoImageIdMobile'] : 0;
			$url = isset( $atts['logoImageUrlMobile'] ) && is_string( $atts['logoImageUrlMobile'] ) ? trim( $atts['logoImageUrlMobile'] ) : '';
		} else {
			$id  = isset( $atts['logoImageId'] ) ? (int) $atts['logoImageId'] : 0;
			$url = isset( $atts['logoImageUrl'] ) && is_string( $atts['logoImageUrl'] ) ? trim( $atts['logoImageUrl'] ) : '';
		}

		if ( $id > 0 && wp_attachment_is_image( $id ) ) {
			return $id;
		}

		if ( '' === $url ) {
			return 0;
		}

		$resolved = attachment_url_to_postid( $url );
		return $resolved > 0 && wp_attachment_is_image( $resolved ) ? $resolved : 0;
	}
}

if ( ! function_exists( 'nextora_header_block_get_block_logo_image_url' ) ) {
	/**
	 * Raw logo image URL from block attributes (when attachment ID is unavailable).
	 *
	 * @param array<string, mixed> $atts    Block attributes.
	 * @param string               $variant `default` or `mobile`.
	 */
	function nextora_header_block_get_block_logo_image_url( array $atts, string $variant = 'default' ): string
	{
		if ( 'mobile' === $variant ) {
			$url = isset( $atts['logoImageUrlMobile'] ) && is_string( $atts['logoImageUrlMobile'] ) ? trim( $atts['logoImageUrlMobile'] ) : '';
		} else {
			$url = isset( $atts['logoImageUrl'] ) && is_string( $atts['logoImageUrl'] ) ? trim( $atts['logoImageUrl'] ) : '';
		}

		return $url;
	}
}

if ( ! function_exists( 'nextora_header_block_render_logo_image_markup' ) ) {
	/**
	 * Render logo `<img>` from attachment ID or raw URL.
	 *
	 * @param int    $attachment_id  Attachment post ID.
	 * @param string $image_url      Fallback image URL.
	 * @param string $alt            Accessible label.
	 * @param string $modifier_class Optional BEM modifier class(es) on the `<img>`.
	 * @param int    $max_width      Max display width in pixels.
	 */
	function nextora_header_block_render_logo_image_markup(
		int $attachment_id,
		string $image_url,
		string $alt,
		string $modifier_class = '',
		int $max_width = 0,
	): string {
		if ( $attachment_id > 0 ) {
			$markup = nextora_header_block_render_logo_image( $attachment_id, $modifier_class, $max_width );
			if ( '' !== $markup ) {
				return $markup;
			}
		}

		if ( '' === $image_url ) {
			return '';
		}

		$class = 'nextora-header-block__logo-img';
		if ( '' !== $modifier_class ) {
			$class .= ' ' . $modifier_class;
		}

		return sprintf(
			'<img class="%1$s" src="%2$s" alt="%3$s" style="%4$s" loading="eager" decoding="async" />',
			esc_attr( $class ),
			esc_url( $image_url ),
			esc_attr( $alt ),
			esc_attr( nextora_header_block_logo_img_inline_style( $max_width ) ),
		);
	}
}

if ( ! function_exists( 'nextora_header_block_render_simple_search_form' ) ) {
	/**
	 * HTML5 search markup for header “simple” mode: underline field plus icon-only submit.
	 *
	 * The submit is painted on the logical start (overlaid). DOM order puts the input first so tab order is field → button.
	 */
	function nextora_header_block_render_simple_search_form(): void
	{
		$form_action  = home_url( '/' );
		$placeholder = apply_filters( 'nextora_header_simple_search_placeholder', __( 'Search …', 'nextora' ) );
		if ( ! is_string( $placeholder ) ) {
			$placeholder = __( 'Search …', 'nextora' );
		}
		$search_query = get_search_query();
		$icon_svg     = '<svg class="nextora-header-block__search-submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>';
		$icon_svg     = apply_filters( 'nextora_header_simple_search_submit_icon_svg', $icon_svg );
		if ( ! is_string( $icon_svg ) || '' === trim( $icon_svg ) ) {
			$icon_svg = '<svg class="nextora-header-block__search-submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>';
		}
?>
		<form role="search" method="get" class="search-form" action="<?php echo esc_url( $form_action ); ?>">
			<div class="nextora-header-block__search-simple-field">
				<label>
					<span class="screen-reader-text"><?php echo esc_html_x( 'Search for:', 'label', 'nextora' ); ?></span>
					<input
						type="search"
						class="search-field"
						name="s"
						value="<?php echo esc_attr( $search_query ); ?>"
						placeholder="<?php echo esc_attr( $placeholder ); ?>"
						autocomplete="off" />
				</label>
				<button type="submit" class="search-submit">
					<span class="screen-reader-text"><?php echo esc_html_x( 'Search', 'submit button', 'nextora' ); ?></span>
					<?php
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- SVG from theme default or trusted filter-only replacement.
					echo $icon_svg;
					?>
				</button>
			</div>
		</form>
	<?php
	}
}

if ( ! function_exists( 'nextora_header_block_get_follow_us_social_icon_svg' ) ) {
	/**
	 * Monochrome social icon SVG for the Follow Us panel.
	 *
	 * @param string $network Network slug.
	 */
	function nextora_header_block_get_follow_us_social_icon_svg( string $network ): string
	{
		$icons = array(
			'instagram' => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
			'facebook'  => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
			'pinterest' => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>',
			'youtube'   => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
			'tiktok'    => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
			'x'         => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
		);

		$network = sanitize_key( $network );

		return isset( $icons[$network] ) ? $icons[$network] : '';
	}
}

if ( ! function_exists( 'nextora_header_block_get_follow_us_social_label' ) ) {
	/**
	 * Accessible label for a social network link.
	 *
	 * @param string $network Network slug.
	 */
	function nextora_header_block_get_follow_us_social_label( string $network ): string
	{
		$labels = array(
			'instagram' => __( 'Instagram', 'nextora' ),
			'facebook'  => __( 'Facebook', 'nextora' ),
			'pinterest' => __( 'Pinterest', 'nextora' ),
			'youtube'   => __( 'YouTube', 'nextora' ),
			'tiktok'    => __( 'TikTok', 'nextora' ),
			'x'         => __( 'X', 'nextora' ),
		);

		$network = sanitize_key( $network );

		return isset( $labels[$network] ) ? $labels[$network] : ucfirst( $network );
	}
}

if ( ! function_exists( 'nextora_header_block_normalize_follow_us_socials' ) ) {
	/**
	 * Normalize saved Follow Us social rows.
	 *
	 * @param array<string, mixed> $atts Block attributes.
	 *
	 * @return list<array{network: string, url: string, enabled: bool}>
	 */
	function nextora_header_block_normalize_follow_us_socials( array $atts ): array
	{
		$defaults = array(
			array(
				'network' => 'instagram',
				'url'     => '',
				'enabled' => true,
			),
			array(
				'network' => 'facebook',
				'url'     => '',
				'enabled' => true,
			),
			array(
				'network' => 'pinterest',
				'url'     => '',
				'enabled' => true,
			),
			array(
				'network' => 'youtube',
				'url'     => '',
				'enabled' => true,
			),
			array(
				'network' => 'tiktok',
				'url'     => '',
				'enabled' => true,
			),
			array(
				'network' => 'x',
				'url'     => '',
				'enabled' => true,
			),
		);

		$raw = isset( $atts['followUsSocials'] ) && is_array( $atts['followUsSocials'] ) ? $atts['followUsSocials'] : $defaults;
		$raw = (array) apply_filters( 'nextora_header_block_follow_us_socials', $raw, $atts );

		$by_network = array();
		foreach ( $raw as $row ) {
			if ( ! is_array( $row ) ) {
				continue;
			}
			$network = isset( $row['network'] ) && is_string( $row['network'] ) ? sanitize_key( $row['network'] ) : '';
			if ( '' === $network ) {
				continue;
			}
			$url = isset( $row['url'] ) && is_string( $row['url'] ) ? trim( $row['url'] ) : '';
			$by_network[$network] = array(
				'network' => $network,
				'url'     => $url,
				'enabled' => ! isset( $row['enabled'] ) || (bool) $row['enabled'],
			);
		}

		$out = array();
		foreach ( $defaults as $default_row ) {
			$network = $default_row['network'];
			$out[]   = $by_network[$network] ?? $default_row;
		}

		return $out;
	}
}

if ( ! function_exists( 'nextora_header_block_render_follow_us' ) ) {
	/**
	 * Follow Us trigger + dropdown panel markup.
	 *
	 * @param array<string, mixed> $atts    Block attributes.
	 * @param string               $uid     Unique instance id.
	 * @param string               $context `utilities` (header bar) or `drawer` (mobile canvas menu).
	 */
	function nextora_header_block_render_follow_us( array $atts, string $uid, string $context = 'utilities' ): string
	{
		do_action( 'nextora_header_block_before_follow_us', $atts );

		$is_drawer  = 'drawer' === $context;
		$panel_id   = sanitize_html_class( $uid ) . '-follow-us-panel';
		$label    = isset( $atts['followUsLabel'] ) && is_string( $atts['followUsLabel'] ) ? trim( $atts['followUsLabel'] ) : '';
		$label    = '' !== $label ? $label : __( 'Follow Us', 'nextora' );

		$support = isset( $atts['followUsSupportText'] ) && is_string( $atts['followUsSupportText'] ) ? trim( $atts['followUsSupportText'] ) : '';
		$support = '' !== $support ? $support : __( "We're here to help! Reach out anytime.", 'nextora' );

		$email = isset( $atts['followUsEmail'] ) && is_string( $atts['followUsEmail'] ) ? sanitize_email( trim( $atts['followUsEmail'] ) ) : '';
		$phone = isset( $atts['followUsPhone'] ) && is_string( $atts['followUsPhone'] ) ? trim( $atts['followUsPhone'] ) : '';

		$cta_text = isset( $atts['followUsContactButtonText'] ) && is_string( $atts['followUsContactButtonText'] ) ? trim( $atts['followUsContactButtonText'] ) : '';
		$cta_text = '' !== $cta_text ? $cta_text : __( 'Contact Us', 'nextora' );
		$cta_url  = isset( $atts['followUsContactButtonUrl'] ) && is_string( $atts['followUsContactButtonUrl'] ) ? trim( $atts['followUsContactButtonUrl'] ) : '';
		$cta_url  = '' !== $cta_url ? esc_url( $cta_url ) : '#';
		$cta_new  = ! empty( $atts['followUsContactButtonTarget'] );

		$socials = nextora_header_block_normalize_follow_us_socials( $atts );
		$links   = array();
		foreach ( $socials as $social ) {
			if ( ! $social['enabled'] || '' === $social['url'] ) {
				continue;
			}
			$links[] = $social;
		}

		$chevron_svg = '<svg class="nextora-header-block__follow-us-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

		$root_class = 'nextora-header-block__follow-us';
		if ( $is_drawer ) {
			$root_class .= ' nextora-header-block__follow-us--drawer';
		}

		ob_start();
	?>
		<div
			class="<?php echo esc_attr( $root_class ); ?>"
			data-nextora-header-follow-us
			<?php echo $is_drawer ? 'data-nextora-header-follow-us-drawer' : ''; ?>>
			<button
				type="button"
				class="nextora-header-block__follow-us-toggle"
				data-nextora-header-follow-us-toggle
				aria-expanded="false"
				aria-controls="<?php echo esc_attr( $panel_id ); ?>">
				<span class="nextora-header-block__follow-us-toggle-text"><?php echo esc_html( $label ); ?></span>
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Theme SVG.
				echo $chevron_svg;
				?>
			</button>
			<div
				class="nextora-header-block__follow-us-scrim"
				data-nextora-header-follow-us-scrim
				hidden
				tabindex="-1"
				aria-hidden="true"></div>
			<div
				id="<?php echo esc_attr( $panel_id ); ?>"
				class="nextora-header-block__follow-us-panel"
				data-nextora-header-follow-us-panel
				hidden>
				<?php if ( array() !== $links ) : ?>
					<ul class="nextora-header-block__follow-us-socials" role="list">
						<?php foreach ( $links as $social ) : ?>
							<?php
							$icon = nextora_header_block_get_follow_us_social_icon_svg( $social['network'] );
							if ( '' === $icon ) {
								continue;
							}
							$social_label = nextora_header_block_get_follow_us_social_label( $social['network'] );
							?>
							<li>
								<a
									class="nextora-header-block__follow-us-social-link"
									href="<?php echo esc_url( $social['url'] ); ?>"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="<?php echo esc_attr( $social_label ); ?>">
									<?php
									// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Theme SVG.
									echo $icon;
									?>
								</a>
							</li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>

				<?php if ( '' !== $support ) : ?>
					<p class="nextora-header-block__follow-us-support"><?php echo esc_html( $support ); ?></p>
				<?php endif; ?>

				<?php if ( '' !== $email || '' !== $phone ) : ?>
					<div class="nextora-header-block__follow-us-contacts">
						<?php if ( '' !== $email ) : ?>
							<a class="nextora-header-block__follow-us-contact" href="<?php echo esc_url( 'mailto:' . $email ); ?>">
								<span class="nextora-header-block__follow-us-contact-icon" aria-hidden="true">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail">
										<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
										<rect x="2" y="4" width="20" height="16" rx="2" />
									</svg></span>
								<span class="nextora-header-block__follow-us-contact-text"><?php echo esc_html( $email ); ?></span>
								<span class="nextora-header-block__follow-us-contact-chevron" aria-hidden="true">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
							</a>
						<?php endif; ?>
						<?php if ( '' !== $phone ) : ?>
							<?php
							$phone_href = preg_replace( '/[^0-9+]/', '', $phone );
							$phone_href = is_string( $phone_href ) ? $phone_href : '';
							?>
							<a class="nextora-header-block__follow-us-contact" href="<?php echo esc_url( 'tel:' . $phone_href ); ?>">
								<span class="nextora-header-block__follow-us-contact-icon" aria-hidden="true">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone">
										<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
									</svg> </span>
								<span class="nextora-header-block__follow-us-contact-text"><?php echo esc_html( $phone ); ?></span>
								<span class="nextora-header-block__follow-us-contact-chevron" aria-hidden="true">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
							</a>
						<?php endif; ?>
					</div>
				<?php endif; ?>

				<a
					class="nextora-header-block__follow-us-cta"
					href="<?php echo esc_url( $cta_url ); ?>"
					<?php echo $cta_new ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>>
					<?php echo esc_html( $cta_text ); ?>
				</a>
			</div>
		</div>
	<?php

		do_action( 'nextora_header_block_after_follow_us', $atts );

		return (string) ob_get_clean();
	}
}

if ( ! function_exists( 'nextora_header_block_sanitize_css_length' ) ) {
	/**
	 * Sanitize a CSS length for padding, radius, etc.
	 *
	 * @param string $value Raw attribute value.
	 */
	function nextora_header_block_sanitize_css_length( string $value ): string
	{
		$value = trim( $value );
		if ( '' === $value || '0' === $value ) {
			return '';
		}

		if ( preg_match( '/^var:preset\|spacing\|([a-z0-9_-]+)$/i', $value, $preset_m ) ) {
			return 'var(--wp--preset--spacing--' . strtolower( $preset_m[1] ) . ')';
		}

		if ( preg_match( '/^(\d+\.?\d*)(px|rem|em|%|vw|vh)$/i', $value, $length_m ) ) {
			return $length_m[1] . strtolower( $length_m[2] );
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_header_block_build_cta_inline_style' ) ) {
	/**
	 * Optional CTA overrides from block attributes (empty = theme.json defaults).
	 *
	 * @param array<string, mixed> $atts Block attributes.
	 */
	function nextora_header_block_build_cta_inline_style( array $atts ): string
	{
		$declarations = array();

		$padding = isset( $atts['ctaButtonPadding'] ) && is_array( $atts['ctaButtonPadding'] )
			? $atts['ctaButtonPadding']
			: array();

		foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
			if ( ! isset( $padding[ $side ] ) || ! is_scalar( $padding[ $side ] ) ) {
				continue;
			}

			$san = nextora_header_block_sanitize_css_length( (string) $padding[ $side ] );
			if ( '' !== $san ) {
				$declarations[] = 'padding-' . $side . ':' . $san;
			}
		}

		// Legacy px padding (pre–SpacingSizesControl).
		if ( array() === $padding || ! array_filter( $padding ) ) {
			$pad_y = isset( $atts['ctaButtonPaddingVertical'] ) ? (int) $atts['ctaButtonPaddingVertical'] : 0;
			$pad_x = isset( $atts['ctaButtonPaddingHorizontal'] ) ? (int) $atts['ctaButtonPaddingHorizontal'] : 0;

			if ( $pad_y > 0 ) {
				$declarations[] = 'padding-top:' . $pad_y . 'px';
				$declarations[] = 'padding-bottom:' . $pad_y . 'px';
			}

			if ( $pad_x > 0 ) {
				$declarations[] = 'padding-left:' . $pad_x . 'px';
				$declarations[] = 'padding-right:' . $pad_x . 'px';
			}
		}

		$radius_raw = $atts['ctaButtonBorderRadius'] ?? null;
		$corner_map = array(
			'topLeft'     => 'border-top-left-radius',
			'topRight'    => 'border-top-right-radius',
			'bottomLeft'  => 'border-bottom-left-radius',
			'bottomRight' => 'border-bottom-right-radius',
		);

		if ( is_string( $radius_raw ) ) {
			$san_radius = nextora_header_block_sanitize_css_length( $radius_raw );
			if ( '' !== $san_radius ) {
				$declarations[] = 'border-radius:' . $san_radius;
			}
		} elseif ( is_array( $radius_raw ) ) {
			foreach ( $corner_map as $corner => $property ) {
				if ( ! isset( $radius_raw[ $corner ] ) || ! is_scalar( $radius_raw[ $corner ] ) ) {
					continue;
				}

				$san_corner = nextora_header_block_sanitize_css_length( (string) $radius_raw[ $corner ] );
				if ( '' !== $san_corner ) {
					$declarations[] = $property . ':' . $san_corner;
				}
			}
		} elseif ( isset( $atts['ctaButtonBorderRadius'] ) && is_numeric( $atts['ctaButtonBorderRadius'] ) ) {
			$legacy_radius = (int) $atts['ctaButtonBorderRadius'];
			if ( $legacy_radius > 0 ) {
				$declarations[] = 'border-radius:' . $legacy_radius . 'px';
			}
		}

		return implode( ';', $declarations );
	}
}

$woo_on = static function (): bool {
	return class_exists( 'WooCommerce', false );
};

/**
 * Logo region.
 *
 * @param array<string, mixed> $atts Attributes.
 */
$render_logo = static function ( array $atts ): string {
	do_action( 'nextora_header_block_before_logo', $atts );

	$logo_href = isset( $atts['logoLink'] ) && is_string( $atts['logoLink'] ) ? trim( $atts['logoLink'] ) : '';
	$logo_href = '' !== $logo_href ? $logo_href : home_url( '/' );
	$logo_href = (string) apply_filters( 'nextora_header_block_logo_link', $logo_href, $atts );

	$logo_w = isset( $atts['logoWidth'] ) ? (int) $atts['logoWidth'] : 150;
	if ( $logo_w < 1 ) {
		$logo_w = 150;
	}

	$logo_w_mobile = isset( $atts['logoWidthMobile'] ) ? (int) $atts['logoWidthMobile'] : 0;
	if ( $logo_w_mobile < 1 ) {
		$logo_w_mobile = $logo_w;
	}

	$logo_type = isset( $atts['logoType'] ) && 'text' === $atts['logoType'] ? 'text' : 'image';

	$block_logo_id        = 'image' === $logo_type ? nextora_header_block_get_block_logo_attachment_id( $atts ) : 0;
	$block_logo_url       = 'image' === $logo_type ? nextora_header_block_get_block_logo_image_url( $atts ) : '';
	$block_logo_mobile_id  = 'image' === $logo_type ? nextora_header_block_get_block_logo_attachment_id( $atts, 'mobile' ) : 0;
	$block_logo_mobile_url = 'image' === $logo_type ? nextora_header_block_get_block_logo_image_url( $atts, 'mobile' ) : '';
	$has_desktop_logo      = $block_logo_id > 0 || '' !== $block_logo_url;
	$has_mobile_logo       = $block_logo_mobile_id > 0 || '' !== $block_logo_mobile_url;
	$use_dual_logos        = $has_desktop_logo && $has_mobile_logo;
	$logo_text            = isset( $atts['logoText'] ) && is_string( $atts['logoText'] ) ? trim( $atts['logoText'] ) : '';
	$logo_label           = '' !== $logo_text ? $logo_text : get_bloginfo( 'name' );
	$logo_style           = sprintf(
		'--nextora-header-logo-max-width:%1$dpx;--nextora-header-logo-max-width-mobile:%2$dpx;',
		$logo_w,
		$logo_w_mobile,
	);

	ob_start();
	?>
	<div class="nextora-header-block__logo" style="<?php echo esc_attr( $logo_style ); ?>">
		<a class="nextora-header-block__logo-link" href="<?php echo esc_url( $logo_href ); ?>" rel="home">
			<?php if ( 'text' === $logo_type ) : ?>
				<span class="nextora-header-block__logo-text"><?php echo esc_html( $logo_label ); ?></span>
			<?php elseif ( $has_desktop_logo || $has_mobile_logo ) : ?>
				<?php
				if ( $use_dual_logos ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in helper.
					echo nextora_header_block_render_logo_image_markup(
						$block_logo_id,
						$block_logo_url,
						$logo_label,
						'nextora-header-block__logo-img--desktop',
						$logo_w,
					);
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in helper.
					echo nextora_header_block_render_logo_image_markup(
						$block_logo_mobile_id,
						$block_logo_mobile_url,
						$logo_label,
						'nextora-header-block__logo-img--mobile',
						$logo_w_mobile,
					);
				} else {
					$single_logo_id  = $has_desktop_logo ? $block_logo_id : $block_logo_mobile_id;
					$single_logo_url = $has_desktop_logo ? $block_logo_url : $block_logo_mobile_url;
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in helper.
					echo nextora_header_block_render_logo_image_markup(
						$single_logo_id,
						$single_logo_url,
						$logo_label,
						'',
						$logo_w,
					);
				}
				?>
			<?php else : ?>
				<span class="nextora-header-block__logo-text"><?php echo esc_html( $logo_label ); ?></span>
			<?php endif; ?>
		</a>
	</div>
<?php

	do_action( 'nextora_header_block_after_logo', $atts );

	return (string) ob_get_clean();
};

/**
 * Nav markup.
 *
 * @param array<string, mixed> $atts        Attributes.
 * @param string               $menu_dom_id Menu ul id.
 * @param string               $uid         Instance id.
 */
$render_nav = static function ( array $atts, string $menu_dom_id, string $uid ): string {
	do_action( 'nextora_header_block_before_nav', $atts );

	$menu_db_id = isset( $atts['menuId'] ) ? (int) $atts['menuId'] : 0;
	$depth      = isset( $atts['menuDepth'] ) ? (int) $atts['menuDepth'] : 4;
	$loc        = isset( $atts['menuLocation'] ) && is_string( $atts['menuLocation'] ) ? $atts['menuLocation'] : 'primary';
	$loc        = sanitize_key( $loc );

	$has_menu = $menu_db_id > 0 || ( '' !== $loc && has_nav_menu( $loc ) );

	if ( ! $has_menu ) {
		do_action( 'nextora_header_block_after_nav', $atts );
		return '<div class="nextora-header-block__nav-empty" role="presentation"></div>';
	}

	$menu_class = 'nextora-header-menu wp-block-navigation__container is-responsive';

	$on_classes = static function ( $classes, $item, $args, $depth ) use ( $atts ): array {
		if ( ! is_object( $args ) || empty( $args->nextora_header_block ) ) {
			return is_array( $classes ) ? $classes : array();
		}
		$d = is_numeric( $depth ) ? (int) $depth : 0;
		$c = is_array( $classes ) ? $classes : array();

		return (array) apply_filters( 'nextora_header_block_menu_item_classes', $c, $item, $d, $atts );
	};

	$on_links = static function ( $atts_link, $item, $args, $depth ) use ( $atts ): array {
		if ( ! is_object( $args ) || empty( $args->nextora_header_block ) ) {
			return is_array( $atts_link ) ? $atts_link : array();
		}
		$d = is_numeric( $depth ) ? (int) $depth : 0;
		$a = is_array( $atts_link ) ? $atts_link : array();

		return (array) apply_filters( 'nextora_header_block_menu_link_attributes', $a, $item, $d, $atts );
	};

	add_filter( 'nav_menu_css_class', $on_classes, 10, 4 );
	add_filter( 'nav_menu_link_attributes', $on_links, 10, 4 );

	$nav_args = array(
		'nextora_header_block' => true,
		'container'            => false,
		'menu_class'           => $menu_class,
		'menu_id'              => $menu_dom_id,
		'fallback_cb'          => false,
		'item_spacing'         => 'discard',
		'depth'                => max( 1, min( $depth, 10 ) ),
		'echo'                 => false,
		'walker'               => new Nextora_Header_Block_Menu_Walker(),
	);

	if ( $menu_db_id > 0 ) {
		$nav_args['menu'] = $menu_db_id;
	} else {
		$nav_args['theme_location'] = $loc;
	}

	$nav_args = apply_filters( 'nextora_header_block_nav_menu_args', $nav_args, $atts );
	$nav_html = wp_nav_menu( $nav_args );
	$nav_html = is_string( $nav_html ) ? $nav_html : '';

	remove_filter( 'nav_menu_css_class', $on_classes, 10 );
	remove_filter( 'nav_menu_link_attributes', $on_links, 10 );

	if ( '' === trim( $nav_html ) ) {
		do_action( 'nextora_header_block_after_nav', $atts );
		return '<div class="nextora-header-block__nav-empty" role="presentation"></div>';
	}

	$aria = apply_filters( 'nextora_header_block_nav_aria_label', __( 'Primary navigation', 'nextora' ), $atts );
	$aria = is_string( $aria ) ? $aria : '';

	$just = 'right';
	if ( isset( $atts['headerLayout'] ) && is_string( $atts['headerLayout'] ) ) {
		switch ( $atts['headerLayout'] ) {
			case 'logo-nav-center':
			case 'two-row':
				$just = 'center';
				break;
			case 'nav-start-logo-center':
				$just = 'left';
				break;
			default:
				$just = 'right';
		}
	}

	$nav_classes = array(
		'wp-block-navigation',
		'is-horizontal',
		'is-content-justification-' . $just,
		'is-layout-flex',
		'nextora-navigation-from-location',
		'nextora-navigation-from-location--primary',
		'nextora-header-block__nav-el',
	);
	$nav_classes = (array) apply_filters( 'nextora_header_block_nav_wrapper_classes', $nav_classes, $atts );
	$nav_classes = array_filter( array_map( 'trim', $nav_classes ) );

	$nav_inline_style = '';
	$menu_item_spacing = isset( $atts['menuItemSpacing'] ) && is_string( $atts['menuItemSpacing'] ) ? trim( $atts['menuItemSpacing'] ) : '';
	if ( '' !== $menu_item_spacing ) {
		$nav_inline_style = ' style="--nextora-header-menu-item-spacing:var(--wp--preset--spacing--' . sanitize_key( $menu_item_spacing ) . ')"';
	}

	ob_start();
?>
	<nav
		class="<?php echo esc_attr( implode( ' ', $nav_classes ) ); ?>"
		aria-label="<?php echo esc_attr( $aria ); ?>"
		data-nextora-header-block-nav="<?php echo esc_attr( $uid ); ?>"<?php echo $nav_inline_style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
		<?php
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- From wp_nav_menu().
		echo $nav_html;
		?>
	</nav>
<?php

	do_action( 'nextora_header_block_after_nav', $atts );

	return (string) ob_get_clean();
};

/**
 * Utilities column.
 *
 * @param array<string, mixed> $atts      Attributes.
 * @param string               $block_uid Unique id prefix for this header instance (drawer DOM id).
 */
$render_utils = static function ( array $atts, string $block_uid ) use ( $woo_on ): string {
	$show_follow   = ! empty( $atts['showFollowUs'] );
	$show_search   = ! isset( $atts['showSearch'] ) || (bool) $atts['showSearch'];
	$show_cart     = ( ! isset( $atts['showMiniCart'] ) || (bool) $atts['showMiniCart'] ) && $woo_on();
	$show_acct     = ( ! isset( $atts['showMyAccount'] ) || (bool) $atts['showMyAccount'] ) && $woo_on();

	$show_follow_m   = isset( $atts['showFollowUsMobile'] ) && (bool) $atts['showFollowUsMobile'];
	$hide_follow_m   = $show_follow && ! $show_follow_m;
	$hide_search_m = isset( $atts['showSearchMobile'] ) && ! (bool) $atts['showSearchMobile'];
	$hide_cart_m   = isset( $atts['showCartMobile'] ) && ! (bool) $atts['showCartMobile'];
	$hide_cta_m    = isset( $atts['showCtaButtonMobile'] ) && ! (bool) $atts['showCtaButtonMobile'];
	$show_cta      = ! empty( $atts['showCtaButton'] );

	ob_start();

	do_action( 'nextora_header_block_utilities_start', $atts );
?>
	<div class="nextora-header-block__utilities<?php echo $hide_follow_m ? ' nextora-header-block__utilities--hide-follow-us-mobile' : ''; ?><?php echo $hide_search_m ? ' nextora-header-block__utilities--hide-search-mobile' : ''; ?><?php echo $hide_cart_m ? ' nextora-header-block__utilities--hide-cart-mobile' : ''; ?><?php echo $hide_cta_m ? ' nextora-header-block__utilities--hide-cta-mobile' : ''; ?>">
		<?php if ( $show_follow && function_exists( 'nextora_header_block_render_follow_us' ) ) : ?>
			<?php
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in helper.
			echo nextora_header_block_render_follow_us( $atts, $block_uid );
			?>
		<?php endif; ?>

		<?php if ( $show_search && apply_filters( 'nextora_show_header_search_modal', true ) ) : ?>
			<?php if ( isset( $atts['searchMode'] ) && 'simple' === $atts['searchMode'] ) : ?>
				<div class="nextora-header-block__search nextora-header-block__search--simple">
					<?php nextora_header_block_render_simple_search_form(); ?>
				</div>
			<?php elseif ( function_exists( 'nextora_merge_spotlight_search_block_modal_args' ) && function_exists( 'nextora_get_header_search_modal_markup' ) ) : ?>
				<?php
				// Header uses theme defaults for modal copy, IDs, and icon color. Customize via
				// the Spotlight search block or `nextora_spotlight_search_block_modal_args`.
				$sargs = nextora_merge_spotlight_search_block_modal_args( array() );
				if ( array() !== $sargs ) {
					$markup = nextora_get_header_search_modal_markup( $sargs );
					$markup = (string) apply_filters( 'nextora_header_search_modal_output', $markup, $sargs );
					if ( '' !== trim( $markup ) ) {
						$markup = (string) apply_filters( 'nextora_header_block_spotlight_search_output', $markup, $sargs, $atts );
						echo '<div class="nextora-header-block__search nextora-header-block__search--spotlight shrink-0">';
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						echo $markup;
						echo '</div>';
					}
				}
				?>
			<?php endif; ?>
		<?php endif; ?>

		<?php
		if ( $show_cart && function_exists( 'nextora_header_block_render_woo_mini_cart' ) ) :
			$cart_markup = nextora_header_block_render_woo_mini_cart( $atts );

			if ( '' !== trim( $cart_markup ) ) :
				do_action( 'nextora_header_block_before_cart', $atts );
		?>
				<div class="nextora-header-block__cart nextora-header-block__cart--woo">
					<?php
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce block markup.
					echo $cart_markup;
					?>
				</div>
		<?php
				do_action( 'nextora_header_block_after_cart', $atts );
			endif;
		endif;
		?>

		<?php if ( $show_acct && function_exists( 'wc_get_account_endpoint_url' ) ) : ?>
			<?php
			$show_acct_text = ! isset( $atts['myAccountIconOnly'] ) || ! (bool) $atts['myAccountIconOnly'];
			$acct_class       = 'nextora-header-block__account-link' . ( $show_acct_text ? ' nextora-header-block__account-link--with-text' : '' );
			?>
			<div class="nextora-header-block__account">
				<a class="<?php echo esc_attr( $acct_class ); ?>" href="<?php echo esc_url( wc_get_account_endpoint_url( 'dashboard' ) ); ?>" aria-label="<?php esc_attr_e( 'My account', 'nextora' ); ?>">
					<span class="nextora-header-block__account-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
							<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.7" />
						</svg>
					</span>
					<?php if ( $show_acct_text ) : ?>
						<span class="nextora-header-block__account-text">
							<?php echo is_user_logged_in() ? esc_html( wp_get_current_user()->display_name ) : esc_html__( 'Sign in', 'nextora' ); ?>
						</span>
					<?php endif; ?>
				</a>
			</div>
		<?php endif; ?>

		<?php
		if ( $show_cta ) :
			$cta_text = isset( $atts['ctaButtonText'] ) ? trim( (string) $atts['ctaButtonText'] ) : '';
			if ( '' !== $cta_text ) :
				$cta_url       = isset( $atts['ctaButtonUrl'] ) ? trim( (string) $atts['ctaButtonUrl'] ) : '';
				$cta_url       = '' !== $cta_url ? esc_url( $cta_url ) : '#';
				$cta_new       = ! empty( $atts['ctaButtonTarget'] );
				$cta_style     = isset( $atts['ctaButtonStyle'] ) && 'outline' === $atts['ctaButtonStyle'] ? 'outline' : 'solid';
				$cta_class     = 'nextora-header-block__cta nextora-header-block__cta--' . sanitize_html_class( $cta_style ) . ' wp-element-button';
				$cta_style_attr = nextora_header_block_build_cta_inline_style( $atts );

				$show_cta_icon  = ! empty( $atts['ctaButtonShowIcon'] );
				$cta_icon_name  = isset( $atts['ctaButtonIconName'] ) ? sanitize_key( (string) $atts['ctaButtonIconName'] ) : 'arrow-right';
				$cta_icon_pos   = isset( $atts['ctaButtonIconPosition'] ) && 'left' === $atts['ctaButtonIconPosition'] ? 'left' : 'right';
				$cta_icon_size  = isset( $atts['ctaButtonIconSize'] ) ? max( 12, (int) $atts['ctaButtonIconSize'] ) : 20;
				$cta_icon_sw    = isset( $atts['ctaButtonIconStrokeWidth'] ) ? (float) $atts['ctaButtonIconStrokeWidth'] : 2.0;

				$cta_icon_markup = '';
				if ( $show_cta_icon && '' !== $cta_icon_name ) {
					$cta_icon_markup = nextora_get_lucide_svg(
						$cta_icon_name,
						$cta_icon_size,
						'currentColor',
						$cta_icon_sw,
						'',
					);
				}
		?>
				<div class="nextora-header-block__cta-wrap">
					<a
						class="<?php echo esc_attr( $cta_class ); ?>"
						href="<?php echo esc_url( $cta_url ); ?>"
						<?php echo $cta_new ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
						<?php echo '' !== $cta_style_attr ? 'style="' . esc_attr( $cta_style_attr ) . '"' : ''; ?>>
						<?php if ( $show_cta_icon && 'left' === $cta_icon_pos && '' !== $cta_icon_markup ) : ?>
							<span class="nextora-header-block__cta-icon nextora-header-block__cta-icon--left" aria-hidden="true">
								<?php
								// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in nextora_get_lucide_svg().
								echo $cta_icon_markup;
								?>
							</span>
						<?php endif; ?>
						<span class="nextora-header-block__cta-text"><?php echo esc_html( $cta_text ); ?></span>
						<?php if ( $show_cta_icon && 'right' === $cta_icon_pos && '' !== $cta_icon_markup ) : ?>
							<span class="nextora-header-block__cta-icon nextora-header-block__cta-icon--right" aria-hidden="true">
								<?php
								// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in nextora_get_lucide_svg().
								echo $cta_icon_markup;
								?>
							</span>
						<?php endif; ?>
					</a>
				</div>
		<?php
			endif;
		endif;
		?>

		<?php do_action( 'nextora_header_block_utilities_end', $atts ); ?>
	</div>
<?php
	return (string) ob_get_clean();
};

// -----------------------------------------------------------------------------
// Layout.
// -----------------------------------------------------------------------------

$uid            = wp_unique_id( 'nextora-hb-' );
$source_id      = $uid . '-nav-source';
$portal_root_id = $uid . '-portal-root';
$portal_panel   = $uid . '-portal-panel';
$portal_title   = $uid . '-portal-title';
$menu_dom_id    = 'menu-' . sanitize_html_class( str_replace( 'nextora-hb-', 'hb-', $uid ) );

$mobile_bp = isset( $attributes['mobileBreakpoint'] ) ? (int) $attributes['mobileBreakpoint'] : 768;
if ( $mobile_bp < 320 ) {
	$mobile_bp = 768;
}

$wrapper_classes   = (array) apply_filters( 'nextora_header_block_wrapper_classes', array( 'nextora-header-block' ), $attributes );
$wrapper_classes   = array_filter( array_map( 'trim', $wrapper_classes ) );

if ( ! empty( $attributes['stickyHeader'] ) ) {
	$sticky_style = isset( $attributes['stickyStyle'] ) && 'always' === $attributes['stickyStyle'] ? 'always' : 'scroll-up';
	$wrapper_classes[] = 'nextora-header-block--sticky-' . $sticky_style;
}

if ( ! empty( $attributes['showBottomBorder'] ) ) {
	$wrapper_classes[] = 'nextora-header-block--border-bottom';
}

$layout_raw    = isset( $attributes['headerLayout'] ) && is_string( $attributes['headerLayout'] ) ? $attributes['headerLayout'] : 'logo-nav-end';
$layouts_ok    = array( 'logo-nav-end', 'logo-nav-center', 'nav-start-logo-center', 'two-row' );
$header_layout = in_array( $layout_raw, $layouts_ok, true ) ? $layout_raw : 'logo-nav-end';
$attributes['headerLayout'] = $header_layout;
$wrapper_classes[]          = 'nextora-header-block--layout-' . sanitize_html_class( str_replace( '_', '-', $header_layout ) );

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'role'  => 'banner',
);

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );

$raw_border = isset( $attributes['bottomBorderColor'] ) ? (string) $attributes['bottomBorderColor'] : '';
$san_border = nextora_header_block_sanitize_border_color( $raw_border );
if ( ! empty( $attributes['showBottomBorder'] ) && '' !== $san_border ) {
	$wrapper_attributes = nextora_header_block_append_border_color_to_wrapper( $wrapper_attributes, $san_border );
}

$open_label  = __( 'Open menu', 'nextora' );
$close_label = __( 'Close menu', 'nextora' );
$dialog_lab  = __( 'Menu', 'nextora' );

do_action( 'nextora_header_block_before', $attributes );

$logo_markup = $render_logo( $attributes );
$utils_markup  = $render_utils( $attributes, $uid );
$nav_markup    = $render_nav( $attributes, $menu_dom_id, $uid );

ob_start();
?>
<button
	type="button"
	class="nextora-header-block__menu-toggle nextora-header-block__menu-toggle--hamburger"
	data-nextora-nav-toggle
	data-nextora-nav-clone-source="#<?php echo esc_attr( $source_id ); ?>"
	data-nextora-nav-portal-root="<?php echo esc_attr( $portal_root_id ); ?>"
	data-nextora-nav-portal-panel="<?php echo esc_attr( $portal_panel ); ?>"
	data-nextora-nav-portal-title="<?php echo esc_attr( $portal_title ); ?>"
	data-nextora-nav-portal-dialog-label="<?php echo esc_attr( $dialog_lab ); ?>"
	data-nextora-nav-open-label="<?php echo esc_attr( $open_label ); ?>"
	data-nextora-nav-close-label="<?php echo esc_attr( $close_label ); ?>"
	data-nextora-mobile-breakpoint="<?php echo esc_attr( (string) $mobile_bp ); ?>"
	aria-expanded="false"
	aria-controls="<?php echo esc_attr( $portal_panel ); ?>"
	aria-label="<?php echo esc_attr( $open_label ); ?>">
	<span class="nextora-header-block__hamburger-line" aria-hidden="true"></span>
	<span class="nextora-header-block__hamburger-line" aria-hidden="true"></span>
	<span class="nextora-header-block__hamburger-line" aria-hidden="true"></span>
</button>
<?php
$menu_toggle_markup = (string) ob_get_clean();

ob_start();
?>
<div id="<?php echo esc_attr( $source_id ); ?>" class="nextora-header-block__nav-source" data-nextora-nav-source-panel>
	<?php
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- nav HTML from wp_nav_menu walker.
	echo $nav_markup;

	$show_follow_drawer = ! empty( $attributes['showFollowUs'] )
		&& ( ! isset( $attributes['showFollowUsMobile'] ) || ! (bool) $attributes['showFollowUsMobile'] );

	if ( $show_follow_drawer && function_exists( 'nextora_header_block_render_follow_us' ) ) :
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in helper.
		echo nextora_header_block_render_follow_us( $attributes, $uid . '-drawer', 'drawer' );
	endif;
	?>
</div>
<?php
$nav_source_markup = (string) ob_get_clean();

$inner_style_attr = '';
$raw_inner_max    = isset( $attributes['innerMaxWidth'] ) ? (string) $attributes['innerMaxWidth'] : '';
$san_inner_max    = nextora_header_block_sanitize_inner_max_width( $raw_inner_max );
if ( '' !== $san_inner_max ) {
	// Scoped to `.nextora-header-block__inner` only — does not alter the block wrapper or sibling markup.
	$inner_css        = 'max-width:' . $san_inner_max . ';margin-inline:auto;width:100%;box-sizing:border-box;';
	$inner_style_attr = ' style="' . esc_attr( $inner_css ) . '"';
}

ob_start();
if ( 'two-row' === $header_layout ) :
?>
	<div class="nextora-header-block__inner" <?php echo $inner_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_attr().
												?>>
		<div class="nextora-header-block__row nextora-header-block__row--top">
			<?php
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Logo region markup.
			echo $logo_markup;
			?>
			<div class="nextora-header-block__actions">
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Utilities column markup.
				echo $utils_markup;
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Toggle control markup.
				echo $menu_toggle_markup;
				?>
			</div>
		</div>
		<div class="nextora-header-block__row nextora-header-block__row--nav">
			<?php
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Nav + clone source wrapper.
			echo $nav_source_markup;
			?>
		</div>
	</div>
<?php
else :
?>
	<div class="nextora-header-block__inner" <?php echo $inner_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_attr().
												?>>
		<?php
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Logo region markup.
		echo $logo_markup;
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Nav + clone source wrapper.
		echo $nav_source_markup;
		?>
		<div class="nextora-header-block__actions">
			<?php
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Utilities column markup.
			echo $utils_markup;
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Toggle control markup.
			echo $menu_toggle_markup;
			?>
		</div>
	</div>
<?php
endif;
$header_inner_markup = (string) ob_get_clean();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		?>>
	<?php
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Inner layout rows.
	echo $header_inner_markup;
	?>
</div>
<?php
// Output custom breakpoint inline style when set to non-default value.
$breakpoint_css = nextora_header_block_mobile_breakpoint_css( $mobile_bp );
if ( '' !== $breakpoint_css ) {
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Generated CSS from closed-set int value.
	echo $breakpoint_css;
}
do_action( 'nextora_header_block_after', $attributes );
