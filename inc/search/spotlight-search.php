<?php
/**
 * Spotlight-style AJAX search (REST) for the header search modal.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Inner markup for the spotlight search UI (form, input, results region).
 *
 * @param array<string, string> $args {@see nextora_get_header_search_modal_markup_args()}.
 */
function nextora_get_spotlight_search_inner_html( array $args ): string {
	$modal_id = $args['modal_id'];
	$input_id   = $modal_id . '-query';
	$list_id    = $modal_id . '-results';
	$form_id    = $modal_id . '-form';
	$status_id  = $modal_id . '-status';

	ob_start();
	?>
	<form
		id="<?php echo esc_attr( $form_id ); ?>"
		class="nextora-spotlight"
		role="search"
		method="get"
		action="<?php echo esc_url( home_url( '/' ) ); ?>"
		data-nextora-spotlight
	>
		<label class="sr-only" for="<?php echo esc_attr( $input_id ); ?>">
			<?php echo esc_html( $args['form_aria_label'] ); ?>
		</label>
		<div class="nextora-spotlight__field">
			<span class="nextora-spotlight__field-icon" aria-hidden="true">
				<svg width="20" height="20" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
					<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
					<path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</span>
			<input
				type="search"
				class="nextora-spotlight__input"
				name="s"
				id="<?php echo esc_attr( $input_id ); ?>"
				autocomplete="off"
				autocorrect="off"
				autocapitalize="off"
				spellcheck="false"
				placeholder="<?php esc_attr_e( 'Search…', 'nextora' ); ?>"
				aria-controls="<?php echo esc_attr( $list_id ); ?>"
				aria-expanded="false"
				aria-autocomplete="list"
			/>
			<span
				id="<?php echo esc_attr( $status_id ); ?>"
				class="nextora-spotlight__status"
				role="status"
				aria-live="polite"
				aria-atomic="true"
				data-spotlight-status
				hidden
			></span>
			<span class="nextora-spotlight__spinner" data-spotlight-spinner hidden aria-hidden="true"></span>
		</div>
		<div
			id="<?php echo esc_attr( $list_id ); ?>"
			class="nextora-spotlight__results"
			role="listbox"
			aria-label="<?php esc_attr_e( 'Search results', 'nextora' ); ?>"
			hidden
			data-spotlight-results
		></div>
		<p class="nextora-spotlight__hint" data-spotlight-hint>
			<?php esc_html_e( 'Type at least two characters to search this site.', 'nextora' ); ?>
		</p>
		<p class="nextora-spotlight__empty" data-spotlight-empty hidden role="status"></p>
		<button type="submit" class="sr-only" tabindex="-1"><?php esc_html_e( 'Submit search', 'nextora' ); ?></button>
	</form>
	<?php
	$html = (string) ob_get_clean();

	return (string) apply_filters( 'nextora_spotlight_search_inner_html', $html, $args );
}

/**
 * Pass REST + UX config to `nextora-main` for {@see resources/ts/lib/spotlight-search.ts}.
 */
function nextora_localize_spotlight_search(): void {
	if ( ! wp_script_is( 'nextora-main', 'registered' ) ) {
		return;
	}

	$rest_url = (string) apply_filters( 'nextora_spotlight_rest_url', rest_url( 'wp/v2/search' ) );

	wp_localize_script(
		'nextora-main',
		'nextoraSpotlight',
		array(
			'restUrl'          => $rest_url,
			'debounceMs'       => (int) apply_filters( 'nextora_spotlight_debounce_ms', 280 ),
			'minQueryLength'   => (int) apply_filters( 'nextora_spotlight_min_query_length', 2 ),
			'perPage'          => (int) apply_filters( 'nextora_spotlight_per_page', 12 ),
			'loading'          => __( 'Searching…', 'nextora' ),
			'noResults'        => __( 'No results found.', 'nextora' ),
			'error'            => __( 'Something went wrong. Try again.', 'nextora' ),
			'typePost'         => __( 'Post', 'nextora' ),
			'typePage'         => __( 'Page', 'nextora' ),
			'typeOther'        => __( 'Content', 'nextora' ),
			'keyboardHint'     => __( 'Use ↑ ↓ to choose · Enter to open · Esc to close', 'nextora' ),
		)
	);
}

add_action( 'wp_enqueue_scripts', 'nextora_localize_spotlight_search', 12 );
