<?php

/**
 * Nextora Addon — Dashboard pointer to the getting-started video playlist.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'admin_notices', 'nextora_addon_dashboard_guide_notice' );

/**
 * Point site admins at the Overview video playlist from the Dashboard.
 *
 * The Overview page requires `manage_options`, so the notice is limited to
 * users who can open the link, and the message is dropped when no lesson
 * ships — a filtered-out playlist must not be advertised.
 *
 * @return void
 */
function nextora_addon_dashboard_guide_notice(): void {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$screen = get_current_screen();

	if ( ! $screen || 'dashboard' !== $screen->id ) {
		return;
	}

	if ( array() === apply_filters( 'nextora_addon_overview_videos', nextora_get_overview_lessons() ) ) {
		return;
	}

	$overview_url = admin_url( 'admin.php?page=nextora-addon-overview&tab=videos' );
	?>
	<div class="notice notice-info">
		<p>
			<strong><?php esc_html_e( 'New to Nextora?', 'nextora' ); ?></strong>
			<?php esc_html_e( 'Follow the setup guides to tour the parent theme, activate your license, and import the Home demo.', 'nextora' ); ?>
			<a href="<?php echo esc_url( $overview_url ); ?>">
				<?php esc_html_e( 'Watch the videos', 'nextora' ); ?>
			</a>
		</p>
	</div>
	<?php
}
