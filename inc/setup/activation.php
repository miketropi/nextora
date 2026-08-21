<?php

/**
 * Theme activation redirect — sends admins to the Nextora Addon Overview.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'admin_init', 'nextora_activation_redirect' );

/**
 * Redirect to the Nextora Addon Overview page after theme activation.
 *
 * WordPress appends ?activated=true after switching themes, so we
 * intercept that on admin_init (by which point the new theme is loaded).
 *
 * @return void
 */
function nextora_activation_redirect(): void {
	if ( ! isset( $_GET['activated'] ) || 'true' !== $_GET['activated'] ) {
		return;
	}

	if ( 'nextora' !== get_option( 'stylesheet' ) ) {
		return;
	}

	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	if ( isset( $_GET['page'] ) && 'nextora-addon-overview' === $_GET['page'] ) {
		return;
	}

	wp_safe_redirect( admin_url( 'admin.php?page=nextora-addon-overview' ) );
	exit;
}
