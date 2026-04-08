<?php
/**
 * Extensibility around the site header (CTAs, WooCommerce mini cart, etc.).
 *
 * ## Actions
 *
 * - `nextora_header_before` — Before the header template part (inside `<header class="site-header">`).
 * - `nextora_header_after` — After the header template part.
 * - `nextora_header_after_primary_nav` — Echo markup immediately after the **primary** navigation
 *   block inside `.nextora-header-nav-cluster` (same row as the menu, end-aligned cluster).
 *   The theme registers a default handler (priority 20): search icon → modal with
 *   Spotlight-style AJAX search ({@see nextora_get_spotlight_search_inner_html()}).
 *   Disable with `add_filter( 'nextora_show_header_search_modal', '__return_false' );`.
 * - Primary navigation (mobile): a hamburger toggle is injected **before** the nav via
 *   {@see nextora_wrap_primary_navigation_mobile_toggle()} (`render_block` priority 12).
 *   Disable with `add_filter( 'nextora_show_header_nav_mobile_toggle', '__return_false' );`.
 * - `nextora_header_search_modal_before` — (array $args) Before the search modal markup is printed.
 * - `nextora_header_search_modal_after` — (array $args) After the search modal markup is printed.
 *
 * ## Filters
 *
 * - `nextora_header_after_primary_nav_html` — (string $html, array $block) Adjust suffix HTML.
 * - `nextora_show_header_nav_mobile_toggle` — (bool) Return false to omit the mobile menu button + drawer wrapper.
 * - `nextora_header_nav_mobile_toggle_args` — (array $args) Classes, ids, labels (`toggle_id`, `panel_id`, `portal_root_id`, `portal_panel_id`, `portal_title_id`, `portal_dialog_label`, …).
 * - `nextora_header_nav_mobile_toggle_icon_svg` — (string $svg, array $args) Hamburger icon markup (`wp_kses` SVG).
 * - `nextora_show_header_search_modal` — (bool) Return false to disable the built-in search modal.
 * - `nextora_header_search_modal_id` — (string) DOM id for the modal root (default `nextora-search-modal`).
 * - `nextora_header_search_modal_markup_args` — (array $args) Tailwind + structural classes, labels, text.
 *   Keys include `modal_id`, `title_id`, `title_text`, `open_label`, `close_label`, `form_aria_label`,
 *   `wrap_class`, `trigger_class`, `trigger_icon_wrap_class`, `modal_root_class`, `scrim_class`,
 *   `surface_class`, `spotlight_modal_header_class`, `spotlight_modal_header_text_class`, `spotlight_body_class`,
 *   `spotlight_close_wrap_class`, `spotlight_close_class`, `close_icon_wrap_class`, `spotlight_title_class`, `spotlight_subtitle_class`,
 *   `spotlight_subtitle_text`, `subtitle_id`, `header_class`, `title_class`, `close_button_class`, `body_class`.
 * - `nextora_header_search_modal_icon_svg` — (string $svg, array $args) Search trigger icon markup (sanitized SVG).
 * - `nextora_header_search_modal_close_icon_svg` — (string $svg, array $args) Close button icon markup.
 * - `nextora_header_search_modal_form_html` — (string $form_html, array $args) Spotlight inner HTML (legacy filter name).
 * - `nextora_spotlight_search_inner_html` — (string $html, array $args) Spotlight form markup from {@see nextora_get_spotlight_search_inner_html()}.
 * - `nextora_header_search_modal_output` — (string $html, array $args) Final HTML for the trigger + modal (full replace).
 *   If you replace the dialog panel, keep `data-nextora-modal-surface` and `role="dialog"` on it so {@see openModal()} can bind.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Allowed tags for small inline SVG icons (trigger + close).
 *
 * @return array<string, array<string, bool>>
 */
function nextora_header_search_modal_kses_svg(): array {
	return array(
		'svg'    => array(
			'color'       => true,
			'style'       => true,
			'class'       => true,
			'width'       => true,
			'height'      => true,
			'viewbox'     => true,
			'viewBox'     => true,
			'fill'        => true,
			'xmlns'       => true,
			'aria-hidden' => true,
			'focusable'   => true,
		),
		'circle' => array(
			'cx'            => true,
			'cy'            => true,
			'r'             => true,
			'stroke'        => true,
			'stroke-width'  => true,
		),
		'path'   => array(
			'd'               => true,
			'stroke'          => true,
			'stroke-width'    => true,
			'stroke-linecap'  => true,
			'stroke-linejoin' => true,
		),
	);
}

/**
 * Sanitize a string for use as an HTML id attribute.
 */
function nextora_header_search_modal_sanitize_id( string $id ): string {
	$id = preg_replace( '/[^a-zA-Z0-9_-]/', '-', $id );
	$id = is_string( $id ) ? trim( $id, '-' ) : '';
	return '' !== $id ? $id : 'nextora-search-modal';
}

/**
 * Arguments for header search modal markup (classes use Tailwind utilities; keep `nextora-modal*` where JS/CSS require them).
 *
 * @return array<string, string>
 */
function nextora_get_header_search_modal_markup_args(): array {
	$modal_id = nextora_header_search_modal_sanitize_id(
		(string) apply_filters( 'nextora_header_search_modal_id', 'nextora-search-modal' )
	);

	$defaults = array(
		'modal_id'                => $modal_id,
		'title_id'                => $modal_id . '-title',
		'title_text'              => __( 'Search', 'nextora' ),
		'subtitle_id'             => '',
		'spotlight_modal_header_class' => 'nextora-spotlight__modal-header nextora-modal__header shrink-0 border-b border-secondary/12 px-4 py-3 pe-14 sm:px-5 sm:pe-16',
		'spotlight_modal_header_text_class' => 'nextora-spotlight__modal-header-text min-w-0',
		'spotlight_title_class'   => 'nextora-spotlight__title-modal !m-0 text-lg font-semibold tracking-tight text-contrast sm:text-xl',
		'spotlight_subtitle_class' => 'nextora-spotlight__subtitle-modal mt-1.5 mb-0 max-w-prose text-sm leading-snug text-secondary',
		'spotlight_subtitle_text' => __( 'Search posts, pages, and other site content.', 'nextora' ),
		'open_label'              => __( 'Open search', 'nextora' ),
		'close_label'             => __( 'Close dialog', 'nextora' ),
		'form_aria_label'         => __( 'Search this site', 'nextora' ),
		'wrap_class'              => 'flex shrink-0 items-center',
		'trigger_class'           => 'inline-flex size-10 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base',
		'trigger_icon_wrap_class' => 'flex leading-none',
		'modal_root_class'        => 'nextora-modal',
		'scrim_class'             => 'nextora-modal__scrim',
		'surface_class'           => 'nextora-modal__surface nextora-modal__surface--spotlight relative flex flex-col overflow-hidden',
		'spotlight_body_class'    => 'nextora-modal__body nextora-modal__body--spotlight flex min-h-0 min-w-0 flex-1 flex-col !border-t-0 !px-0 !pb-0 !pt-0',
		'spotlight_close_wrap_class' => 'nextora-spotlight__close-wrap pointer-events-none absolute end-2 top-2 z-10 sm:end-3 sm:top-3',
		'spotlight_close_class'   => 'nextora-modal__close nextora-spotlight__close pointer-events-auto inline-flex size-9 shrink-0 items-center justify-center rounded-md border-0 bg-transparent text-secondary transition-colors hover:bg-secondary/10 hover:text-contrast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
		'close_icon_wrap_class'   => 'nextora-modal__close-icon flex leading-none text-lg',
		/* Legacy keys kept for filters that still merge them; spotlight layout uses spotlight_* instead of header. */
		'header_class'            => 'nextora-modal__header',
		'title_class'             => 'nextora-modal__title',
		'close_button_class'      => 'nextora-modal__close',
		'body_class'              => 'nextora-modal__body',
	);

	$args = apply_filters( 'nextora_header_search_modal_markup_args', $defaults );
	$args = is_array( $args ) ? wp_parse_args( $args, $defaults ) : $defaults;

	foreach ( array_keys( $defaults ) as $key ) {
		if ( isset( $args[ $key ] ) && is_string( $args[ $key ] ) ) {
			continue;
		}
		$args[ $key ] = $defaults[ $key ];
	}

	$args['modal_id'] = nextora_header_search_modal_sanitize_id( (string) $args['modal_id'] );

	$title_raw = isset( $args['title_id'] ) ? (string) $args['title_id'] : '';
	$title_raw = preg_replace( '/[^a-zA-Z0-9_-]/', '-', $title_raw );
	$title_raw = is_string( $title_raw ) ? trim( $title_raw, '-' ) : '';
	if ( '' === $title_raw || $title_raw === $args['modal_id'] ) {
		$args['title_id'] = $args['modal_id'] . '-title';
	} else {
		$args['title_id'] = $title_raw;
	}

	$sub_id = isset( $args['subtitle_id'] ) ? trim( (string) $args['subtitle_id'] ) : '';
	$args['subtitle_id'] = '' !== $sub_id ? nextora_header_search_modal_sanitize_id( $sub_id ) : $args['modal_id'] . '-subtitle';

	return $args;
}

/**
 * Default search (magnifying glass) icon SVG.
 */
function nextora_header_search_modal_default_icon_svg(): string {
	return '<svg width="22" height="22" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>';
}

/**
 * Default close icon SVG.
 */
function nextora_header_search_modal_default_close_icon_svg(): string {
	return '<svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12" /></svg>';
}

/**
 * Build search modal HTML (trigger button + dialog). Escaped for output.
 *
 * @param array<string, string> $args {@see nextora_get_header_search_modal_markup_args()}.
 */
function nextora_get_header_search_modal_markup( array $args ): string {
	$kses = nextora_header_search_modal_kses_svg();

	$icon_svg = (string) apply_filters(
		'nextora_header_search_modal_icon_svg',
		nextora_header_search_modal_default_icon_svg(),
		$args
	);
	$icon_svg = wp_kses( $icon_svg, $kses );

	$close_icon_svg = (string) apply_filters(
		'nextora_header_search_modal_close_icon_svg',
		nextora_header_search_modal_default_close_icon_svg(),
		$args
	);
	$close_icon_svg = wp_kses( $close_icon_svg, $kses );

	$form_html = function_exists( 'nextora_get_spotlight_search_inner_html' )
		? nextora_get_spotlight_search_inner_html( $args )
		: '';
	if ( '' === $form_html ) {
		ob_start();
		get_search_form(
			array(
				'aria_label' => $args['form_aria_label'],
			)
		);
		$form_html = (string) ob_get_clean();
	}
	$form_html = apply_filters( 'nextora_header_search_modal_form_html', $form_html, $args );

	$has_spotlight_subtitle = isset( $args['spotlight_subtitle_text'] ) && '' !== trim( (string) $args['spotlight_subtitle_text'] );

	ob_start();
	?>
	<div class="<?php echo esc_attr( $args['wrap_class'] ); ?>">
		<button
			type="button"
			class="<?php echo esc_attr( $args['trigger_class'] ); ?>"
			data-nextora-modal-open="<?php echo esc_attr( $args['modal_id'] ); ?>"
			aria-label="<?php echo esc_attr( $args['open_label'] ); ?>"
		>
			<span class="<?php echo esc_attr( $args['trigger_icon_wrap_class'] ); ?>" aria-hidden="true">
				<?php echo $icon_svg; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_kses() above. ?>
			</span>
		</button>
	</div>
	<div
		id="<?php echo esc_attr( $args['modal_id'] ); ?>"
		class="<?php echo esc_attr( $args['modal_root_class'] ); ?>"
		hidden
		data-nextora-modal
		aria-hidden="true"
	>
		<div class="<?php echo esc_attr( $args['scrim_class'] ); ?>" data-nextora-modal-dismiss tabindex="-1"></div>
		<div
			class="<?php echo esc_attr( $args['surface_class'] ); ?>"
			data-nextora-modal-surface
			role="dialog"
			aria-modal="true"
			aria-labelledby="<?php echo esc_attr( $args['title_id'] ); ?>"
			<?php if ( $has_spotlight_subtitle ) : ?>
			aria-describedby="<?php echo esc_attr( $args['subtitle_id'] ); ?>"
			<?php endif; ?>
			tabindex="-1"
		>
			<header class="<?php echo esc_attr( $args['spotlight_modal_header_class'] ); ?>">
				<div class="<?php echo esc_attr( $args['spotlight_modal_header_text_class'] ); ?>">
					<h2 id="<?php echo esc_attr( $args['title_id'] ); ?>" class="<?php echo esc_attr( $args['spotlight_title_class'] ); ?>">
						<?php echo esc_html( (string) $args['title_text'] ); ?>
					</h2>
					<?php if ( $has_spotlight_subtitle ) : ?>
						<p id="<?php echo esc_attr( $args['subtitle_id'] ); ?>" class="<?php echo esc_attr( $args['spotlight_subtitle_class'] ); ?>">
							<?php echo esc_html( (string) $args['spotlight_subtitle_text'] ); ?>
						</p>
					<?php endif; ?>
				</div>
			</header>
			<div class="<?php echo esc_attr( $args['spotlight_body_class'] ); ?>">
				<div class="p-2 pb-3">
					<?php echo $form_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Theme spotlight / filtered markup. ?>
				</div>
			</div>
			<div class="<?php echo esc_attr( $args['spotlight_close_wrap_class'] ); ?>">
				<button type="button" class="<?php echo esc_attr( $args['spotlight_close_class'] ); ?>" data-nextora-modal-dismiss aria-label="<?php echo esc_attr( $args['close_label'] ); ?>">
					<span class="<?php echo esc_attr( $args['close_icon_wrap_class'] ); ?>" aria-hidden="true">
						<?php echo esc_html( '×' ); ?>
					</span>
				</button>
			</div>
		</div>
	</div>
	<?php
	return (string) ob_get_clean();
}

/**
 * Default hamburger icon SVG for the mobile primary nav toggle.
 */
function nextora_header_nav_mobile_toggle_default_icon_svg(): string {
	return '<svg width="22" color="white" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>';
}

/**
 * Class names, ids, and labels for the mobile nav toggle + panel wrapper.
 *
 * @return array<string, string>
 */
function nextora_get_header_nav_mobile_toggle_args(): array {
	$defaults = array(
		'toggle_id'              => 'nextora-primary-nav-toggle',
		'panel_id'               => 'nextora-primary-nav-panel',
		'portal_root_id'         => 'nextora-primary-nav-portal-root',
		'portal_panel_id'        => 'nextora-primary-nav-portal-panel',
		'portal_title_id'        => 'nextora-primary-nav-portal-title',
		'portal_dialog_label'    => __( 'Primary navigation', 'nextora' ),
		'shell_class'            => 'nextora-primary-nav-shell relative z-[1] flex min-w-0 flex-1 items-center justify-end gap-2',
		'toggle_class'           => 'nextora-nav-menu-toggle inline-flex size-10 shrink-0 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base text-inherit transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base md:hidden',
		'toggle_icon_wrap_class' => 'flex leading-none',
		'panel_class'            => 'nextora-primary-nav-panel nextora-primary-nav-panel--source hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-end',
		'open_label'             => __( 'Open menu', 'nextora' ),
		'close_label'            => __( 'Close menu', 'nextora' ),
	);

	$args = apply_filters( 'nextora_header_nav_mobile_toggle_args', $defaults );
	$args = is_array( $args ) ? wp_parse_args( $args, $defaults ) : $defaults;

	foreach ( array_keys( $defaults ) as $key ) {
		if ( isset( $args[ $key ] ) && is_string( $args[ $key ] ) ) {
			continue;
		}
		$args[ $key ] = $defaults[ $key ];
	}

	return $args;
}

/**
 * Wrap primary `core/navigation` with a mobile hamburger toggle and sliding panel.
 *
 * Priority 12: after {@see nextora_render_navigation_from_menu_location()} (10),
 * before {@see nextora_append_header_primary_nav_suffix()} (15).
 *
 * @param string $block_content Rendered block HTML.
 * @param array  $block         Parsed block array.
 * @return string
 */
function nextora_wrap_primary_navigation_mobile_toggle( string $block_content, array $block ): string {
	if ( ! apply_filters( 'nextora_show_header_nav_mobile_toggle', true ) ) {
		return $block_content;
	}

	if ( ( $block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $block_content;
	}

	$attrs = $block['attrs'] ?? array();
	$location = isset( $attrs['__unstableLocation'] ) && is_string( $attrs['__unstableLocation'] )
		? $attrs['__unstableLocation']
		: '';
	if ( 'primary' !== $location ) {
		return $block_content;
	}

	if ( '' === trim( $block_content ) ) {
		return $block_content;
	}

	$args     = nextora_get_header_nav_mobile_toggle_args();
	$kses     = nextora_header_search_modal_kses_svg();
	$icon_svg = (string) apply_filters(
		'nextora_header_nav_mobile_toggle_icon_svg',
		nextora_header_nav_mobile_toggle_default_icon_svg(),
		$args
	);
	$icon_svg = wp_kses( $icon_svg, $kses );

	$toggle_id        = $args['toggle_id'];
	$panel_id         = $args['panel_id'];
	$portal_root_id   = $args['portal_root_id'];
	$portal_panel_id  = $args['portal_panel_id'];
	$portal_title_id  = $args['portal_title_id'];
	$source_selector  = '#' . $panel_id;

	ob_start();
	?>
	<div class="<?php echo esc_attr( $args['shell_class'] ); ?>">
		<button
			type="button"
			id="<?php echo esc_attr( $toggle_id ); ?>"
			class="<?php echo esc_attr( $args['toggle_class'] ); ?>"
			data-nextora-nav-toggle
			aria-controls="<?php echo esc_attr( $portal_panel_id ); ?>"
			aria-expanded="false"
			aria-haspopup="dialog"
			aria-label="<?php echo esc_attr( $args['open_label'] ); ?>"
			data-nextora-nav-open-label="<?php echo esc_attr( $args['open_label'] ); ?>"
			data-nextora-nav-close-label="<?php echo esc_attr( $args['close_label'] ); ?>"
			data-nextora-nav-clone-source="<?php echo esc_attr( $source_selector ); ?>"
			data-nextora-nav-portal-root="<?php echo esc_attr( $portal_root_id ); ?>"
			data-nextora-nav-portal-panel="<?php echo esc_attr( $portal_panel_id ); ?>"
			data-nextora-nav-portal-title="<?php echo esc_attr( $portal_title_id ); ?>"
			data-nextora-nav-portal-dialog-label="<?php echo esc_attr( $args['portal_dialog_label'] ); ?>"
		>
			<span class="<?php echo esc_attr( $args['toggle_icon_wrap_class'] ); ?>" aria-hidden="true">
				<?php echo $icon_svg; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_kses() above. ?>
			</span>
		</button>
		<div
			id="<?php echo esc_attr( $panel_id ); ?>"
			class="<?php echo esc_attr( $args['panel_class'] ); ?>"
			data-nextora-nav-source-panel
		>
			<?php echo $block_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Core / theme navigation HTML. ?>
		</div>
	</div>
	<?php
	return (string) ob_get_clean();
}

add_filter( 'render_block', 'nextora_wrap_primary_navigation_mobile_toggle', 12, 2 );

/**
 * Append plugin / child-theme output after the header primary navigation.
 *
 * Runs at priority 15 so it runs after {@see nextora_render_navigation_from_menu_location()} (10).
 *
 * @param string $block_content Rendered block HTML.
 * @param array  $block         Parsed block array.
 * @return string
 */
function nextora_append_header_primary_nav_suffix( string $block_content, array $block ): string {
	if ( ( $block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $block_content;
	}

	$attrs = $block['attrs'] ?? array();
	$location = isset( $attrs['__unstableLocation'] ) && is_string( $attrs['__unstableLocation'] )
		? $attrs['__unstableLocation']
		: '';
	if ( 'primary' !== $location ) {
		return $block_content;
	}

	ob_start();
	/**
	 * Fires after the primary navigation block markup; output is placed at the end of the nav cluster.
	 *
	 * Example — outline button CTA:
	 *
	 *     add_action( 'nextora_header_after_primary_nav', static function (): void {
	 *         printf(
	 *             '<a class="nextora-header-cta" href="%s">%s</a>',
	 *             esc_url( home_url( '/contact/' ) ),
	 *             esc_html__( 'Contact', 'textdomain' )
	 *         );
	 *     } );
	 *
	 * Example — WooCommerce (plugin-specific; only when Woo is active):
	 *
	 *     add_action( 'nextora_header_after_primary_nav', static function (): void {
	 *         if ( ! function_exists( 'woocommerce_mini_cart' ) ) {
	 *             return;
	 *         }
	 *         echo '<div class="nextora-header-mini-cart">';
	 *         woocommerce_mini_cart();
	 *         echo '</div>';
	 *     } );
	 */
	do_action( 'nextora_header_after_primary_nav' );

	$html = ob_get_clean();
	$html = is_string( $html ) ? $html : '';
	$html = apply_filters( 'nextora_header_after_primary_nav_html', $html, $block );

	if ( ! is_string( $html ) || '' === trim( $html ) ) {
		return $block_content;
	}

	return $block_content . '<div class="nextora-header-nav-suffix shrink-0">' . $html . '</div>';
}

add_filter( 'render_block', 'nextora_append_header_primary_nav_suffix', 15, 2 );

/**
 * Search icon after the primary nav; opens the shared Nextora modal (`docs/modal.md`).
 *
 * @return void
 */
function nextora_header_search_modal_trigger(): void {
	if ( ! apply_filters( 'nextora_show_header_search_modal', true ) ) {
		return;
	}

	static $did = false;
	if ( $did ) {
		return;
	}
	$did = true;

	$args = nextora_get_header_search_modal_markup_args();

	/**
	 * Fires before the header search modal markup is output.
	 *
	 * @param array<string, string> $args {@see nextora_get_header_search_modal_markup_args()}.
	 */
	do_action( 'nextora_header_search_modal_before', $args );

	$html = nextora_get_header_search_modal_markup( $args );
	$html = apply_filters( 'nextora_header_search_modal_output', $html, $args );
	$html = is_string( $html ) ? $html : '';

	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Filter may return full HTML; core pattern.
	echo $html;

	/**
	 * Fires after the header search modal markup is output.
	 *
	 * @param array<string, string> $args {@see nextora_get_header_search_modal_markup_args()}.
	 */
	do_action( 'nextora_header_search_modal_after', $args );
}

add_action( 'nextora_header_after_primary_nav', 'nextora_header_search_modal_trigger', 20 );
