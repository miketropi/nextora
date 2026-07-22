<?php

/**
 * Admin menu registration for the Nextora Addon page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Add the Nextora Addon top-level menu page and its submenu items.
 *
 * @return void
 */
function nextora_addon_add_menu_page(): void {
	$icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg>';
	add_menu_page(
		__( 'Nextora Addon', 'nextora' ),
		__( 'Nextora Addon', 'nextora' ),
		'manage_options',
		'nextora-addon',
		'nextora_addon_render_page',
		'data:image/svg+xml;base64,' . base64_encode( $icon ),
		60,
	);

	add_submenu_page(
		'nextora-addon',
		__( 'Overview', 'nextora' ),
		__( 'Overview', 'nextora' ),
		'manage_options',
		'nextora-addon-overview',
		'nextora_addon_render_overview_page',
	);
}

/**
 * Render the Nextora Addon admin page shell.
 *
 * Prints the root <div> where the React app mounts.
 *
 * @return void
 */
function nextora_addon_render_page(): void {
	echo '<div class="wrap">
		<div style="display: none;"><h1></h1></div>
		<div id="nextora-addon-root"></div> 
	</div>';
}

/**
 * Render the Nextora Addon Overview admin page shell.
 *
 * Prints the root <div> where the Overview React app mounts.
 *
 * @return void
 */
function nextora_addon_render_overview_page(): void {
	ob_start();
	?>
	<div class="nextora-overview-wrap">
		<div class="nextora-overview-hero">
			<div class="nextora-overview-skeleton nextora-overview-skeleton--badge" aria-hidden="true"></div>
			<div class="nextora-overview-skeleton nextora-overview-skeleton--title" aria-hidden="true"></div>
			<div class="nextora-overview-skeleton nextora-overview-skeleton--desc" aria-hidden="true"></div>
			<div class="nextora-overview-skeleton--meta" aria-hidden="true">
				<div class="nextora-overview-skeleton"></div>
				<div class="nextora-overview-skeleton"></div>
				<div class="nextora-overview-skeleton"></div>
			</div>
		</div>

		<div class="nextora-overview-content">
			<div class="nextora-overview-section">
				<div class="nextora-overview-skeleton nextora-overview-skeleton--section-title" aria-hidden="true"></div>
				<div class="nextora-overview-feature-grid">
					<?php for ( $i = 0; $i < 9; $i++ ) : ?>
					<div class="nextora-overview-feature-card">
						<div class="nextora-overview-skeleton nextora-overview-skeleton--card-icon" aria-hidden="true"></div>
						<div class="nextora-overview-skeleton nextora-overview-skeleton--card-title" aria-hidden="true"></div>
						<div class="nextora-overview-skeleton nextora-overview-skeleton--card-text" aria-hidden="true"></div>
						<div class="nextora-overview-skeleton nextora-overview-skeleton--card-text" aria-hidden="true"></div>
					</div>
					<?php endfor; ?>
				</div>
			</div>

			<div class="nextora-overview-section">
				<div class="nextora-overview-skeleton nextora-overview-skeleton--section-title" aria-hidden="true"></div>
				<div class="nextora-overview-gallery">
					<?php for ( $i = 0; $i < 6; $i++ ) : ?>
					<div class="nextora-overview-skeleton--gallery-item">
						<div class="nextora-overview-skeleton nextora-overview-skeleton--gallery-thumb" aria-hidden="true"></div>
						<div class="nextora-overview-skeleton--gallery-info">
							<div class="nextora-overview-skeleton nextora-overview-skeleton--gallery-title" aria-hidden="true"></div>
							<div class="nextora-overview-skeleton nextora-overview-skeleton--gallery-desc" aria-hidden="true"></div>
						</div>
					</div>
					<?php endfor; ?>
				</div>
			</div>

			<div class="nextora-overview-footer">
				<div class="nextora-overview-skeleton nextora-overview-skeleton--footer" aria-hidden="true"></div>
			</div>
		</div>

		<span class="screen-reader-text-loading"><?php esc_html_e( 'Loading...', 'nextora' ); ?></span>
	</div>
	<?php
	$skeleton = ob_get_clean();

	echo '<div class="wrap">
		<div style="display: none;"><h1></h1></div>
		<div id="nextora-addon-overview-root">' . $skeleton . '</div>
	</div>';
}

add_action( 'admin_menu', 'nextora_addon_add_menu_page' );
