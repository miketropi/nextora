<?php
/**
 * Spotlight search — modal shell (trigger + dialog).
 *
 * Markup uses Nextora modal attributes (`data-nextora-modal`, `data-nextora-modal-surface`).
 * Inner form comes from {@see nextora_get_spotlight_search_inner_html()} in `search-ui.php`.
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
		'trigger_icon_color'      => '',
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

	$trigger_style_attr = '';
	if ( isset( $args['trigger_icon_color'] ) && is_string( $args['trigger_icon_color'] ) ) {
		$icon_color = sanitize_hex_color( trim( $args['trigger_icon_color'] ) );
		if ( '' !== $icon_color ) {
			$trigger_style_attr = ' style="' . esc_attr( 'color:' . $icon_color . ';' ) . '"';
		}
	}

	ob_start();
	?>
	<div class="<?php echo esc_attr( $args['wrap_class'] ); ?>">
		<button
			type="button"
			class="<?php echo esc_attr( $args['trigger_class'] ); ?>"
			data-nextora-modal-open="<?php echo esc_attr( $args['modal_id'] ); ?>"
			aria-label="<?php echo esc_attr( $args['open_label'] ); ?>"
			<?php echo $trigger_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_attr() on color value. ?>
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
