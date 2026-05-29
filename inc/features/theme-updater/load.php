<?php

/**
 * Theme update check via WP Update Hub.
 *
 * Hooks into the WordPress theme update transient and the theme information
 * API to provide GitHub-hosted release updates through a WP Update Hub server.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Fetch theme update metadata from the WP Update Hub API.
 *
 * @return array<string, mixed>|null Decoded JSON body, or null on failure.
 */
function nextora_fetch_theme_update_info(): ?array {
	$url = add_query_arg(
		array(
			'repo' => NEXTORA_UPDATE_GITHUB_REPO,
			'type' => 'theme',
		),
		NEXTORA_UPDATE_SERVER_URL . '/update',
	);

	$response = wp_remote_get( $url, array( 'timeout' => 15 ) );

	if ( is_wp_error( $response ) ) {
		return null;
	}

	if ( 200 !== wp_remote_retrieve_response_code( $response ) ) {
		return null;
	}

	$body = wp_remote_retrieve_body( $response );
	$data = json_decode( $body, true );

	if ( JSON_ERROR_NONE !== json_last_error() || ! is_array( $data ) || empty( $data['version'] ) ) {
		return null;
	}

	return $data;
}

/**
 * Inject a theme update entry when a newer version is available.
 *
 * @param mixed $transient Update transient.
 *
 * @return mixed Filtered transient.
 */
add_filter( 'pre_set_site_transient_update_themes', static function ( $transient ) {
	if ( ! is_object( $transient ) ) {
		return $transient;
	}

	$t_arr = (array) $transient;

	if ( empty( $t_arr['checked'] ) ) {
		return $transient;
	}

	$theme_slug      = get_template();
	$current_version = $t_arr['checked'][ $theme_slug ] ?? NEXTORA_VERSION;
	$update          = nextora_fetch_theme_update_info();

	if ( null === $update || version_compare( (string) $update['version'], (string) $current_version, '<=' ) ) {
		return $transient;
	}

	$t_arr['response'][ $theme_slug ] = array(
		'theme'        => $theme_slug,
		'new_version'  => $update['version'],
		'url'          => 'https://github.com/' . NEXTORA_UPDATE_GITHUB_REPO,
		'package'      => $update['download_url'] ?? '',
		'requires'     => $update['requires'] ?? '',
		'requires_php' => $update['requires_php'] ?? '',
	);

	return (object) $t_arr;
} );

/**
 * Populate theme API response for the "View details" modal.
 *
 * @param false|object|array $result Default result.
 * @param string             $action Request action.
 * @param object             $args   Request arguments.
 *
 * @return false|object|array Filtered result.
 */
add_filter( 'themes_api', static function ( $result, string $action, object $args ) {
	if ( 'theme_information' !== $action ) {
		return $result;
	}

	$theme_slug = get_template();

	if ( ( $args->slug ?? '' ) !== $theme_slug ) {
		return $result;
	}

	$update = nextora_fetch_theme_update_info();

	if ( null === $update ) {
		return $result;
	}

	$theme = wp_get_theme( $theme_slug );

	return (object) array(
		'slug'          => $theme_slug,
		'name'          => $update['name'] ?? $theme->get( 'Name' ),
		'version'       => $update['version'],
		'download_link' => $update['download_url'] ?? '',
		'requires'      => $update['requires'] ?? '',
		'tested'        => $update['tested'] ?? '',
		'requires_php'  => $update['requires_php'] ?? '',
		'last_updated'  => $update['last_updated'] ?? '',
		'homepage'      => 'https://github.com/' . NEXTORA_UPDATE_GITHUB_REPO,
		'author'        => $theme->get( 'Author' ),
		'sections'      => array(
			'description' => $update['sections']['description'] ?? '',
			'changelog'   => $update['sections']['changelog'] ?? '',
		),
	);
}, 10, 3 );

/**
 * Refresh the download URL just before WordPress begins the upgrade.
 *
 * @param array<string, mixed> $options Upgrader package options.
 *
 * @return array<string, mixed> Filtered options.
 */
add_filter( 'upgrader_package_options', static function ( array $options ): array {
	if ( empty( $options['package'] ) ) {
		return $options;
	}

	if ( false === strpos( (string) $options['package'], NEXTORA_UPDATE_SERVER_URL ) ) {
		return $options;
	}

	$update = nextora_fetch_theme_update_info();

	if ( null !== $update && ! empty( $update['download_url'] ) ) {
		$options['package'] = $update['download_url'];
	}

	return $options;
} );
