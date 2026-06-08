<?php

/**
 * Contact form — Google reCAPTCHA v3 verification.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * HMAC proving reCAPTCHA site key was rendered for this form instance.
 */
function nextora_contact_form_recaptcha_config_token(
	int $post_id,
	int $instance_index,
	string $site_key,
): string {
	return wp_hash(
		$post_id . '|' . $instance_index . '|' . strtolower( trim( $site_key ) ),
		'nextora_contact_form_recaptcha',
	);
}

/**
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_recaptcha_site_key_from_attrs( array $attributes ): string {
	if ( ! isset( $attributes['recaptchaSiteKey'] ) || ! is_string( $attributes['recaptchaSiteKey'] ) ) {
		return '';
	}

	return trim( $attributes['recaptchaSiteKey'] );
}

/**
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_recaptcha_secret_from_attrs( array $attributes ): string {
	if ( ! isset( $attributes['recaptchaSecretKey'] ) || ! is_string( $attributes['recaptchaSecretKey'] ) ) {
		return '';
	}

	return trim( $attributes['recaptchaSecretKey'] );
}

/**
 * Whether reCAPTCHA v3 should run for block attrs.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_uses_recaptcha( array $attributes ): bool {
	if ( ! isset( $attributes['enableRecaptcha'] ) || ! (bool) $attributes['enableRecaptcha'] ) {
		return false;
	}

	$site_key   = nextora_contact_form_recaptcha_site_key_from_attrs( $attributes );
	$secret_key = nextora_contact_form_recaptcha_secret_from_attrs( $attributes );

	return '' !== $site_key && '' !== $secret_key;
}

/**
 * Resolve reCAPTCHA credentials for a form instance.
 *
 * @return array{enabled: bool, site_key: string, secret_key: string}
 */
function nextora_contact_form_resolve_recaptcha_config(
	int $instance_index,
	?int $post_id,
	?string $config_site_key = null,
	?string $config_token = null,
): array {
	$empty = array(
		'enabled'    => false,
		'site_key'   => '',
		'secret_key' => '',
	);

	$attrs = function_exists( 'nextora_contact_form_get_instance_attrs' )
		? nextora_contact_form_get_instance_attrs( $instance_index, $post_id )
		: null;

	if ( null !== $attrs && nextora_contact_form_uses_recaptcha( $attrs ) ) {
		return array(
			'enabled'    => true,
			'site_key'   => nextora_contact_form_recaptcha_site_key_from_attrs( $attrs ),
			'secret_key' => nextora_contact_form_recaptcha_secret_from_attrs( $attrs ),
		);
	}

	$site_key = null !== $config_site_key ? trim( $config_site_key ) : '';
	$token    = null !== $config_token ? trim( $config_token ) : '';
	if (
		'' !== $site_key
		&& null !== $post_id
		&& $post_id > 0
		&& '' !== $token
		&& hash_equals(
			nextora_contact_form_recaptcha_config_token( $post_id, $instance_index, $site_key ),
			$token,
		)
	) {
		$secret = null !== $attrs ? nextora_contact_form_recaptcha_secret_from_attrs( $attrs ) : '';
		if ( '' !== $secret ) {
			return array(
				'enabled'    => true,
				'site_key'   => $site_key,
				'secret_key' => $secret,
			);
		}
	}

	return $empty;
}

/**
 * Verify a reCAPTCHA v3 token with Google.
 *
 * @return true|WP_Error
 */
function nextora_contact_form_verify_recaptcha_token( string $token, string $secret_key ) {
	$token = trim( $token );
	if ( '' === $token ) {
		return new WP_Error(
			'recaptcha_missing',
			__( 'Security verification failed. Please reload the page and try again.', 'nextora' ),
			array(
				'status' => 403,
				'fields' => array(),
			),
		);
	}

	if ( '' === trim( $secret_key ) ) {
		return new WP_Error(
			'recaptcha_misconfigured',
			__( 'reCAPTCHA is not configured correctly. Please contact the site owner.', 'nextora' ),
			array(
				'status' => 500,
				'fields' => array(),
			),
		);
	}

	$response = wp_remote_post(
		'https://www.google.com/recaptcha/api/siteverify',
		array(
			'timeout' => 15,
			'body'    => array(
				'secret'   => $secret_key,
				'response' => $token,
			),
		),
	);

	if ( is_wp_error( $response ) ) {
		return new WP_Error(
			'recaptcha_unreachable',
			__( 'Security verification is temporarily unavailable. Please try again later.', 'nextora' ),
			array(
				'status' => 503,
				'fields' => array(),
			),
		);
	}

	$code = (int) wp_remote_retrieve_response_code( $response );
	$body = json_decode( (string) wp_remote_retrieve_body( $response ), true );
	if ( 200 !== $code || ! is_array( $body ) ) {
		return new WP_Error(
			'recaptcha_invalid_response',
			__( 'Security verification failed. Please try again.', 'nextora' ),
			array(
				'status' => 403,
				'fields' => array(),
			),
		);
	}

	if ( empty( $body['success'] ) ) {
		return new WP_Error(
			'recaptcha_failed',
			__( 'Security verification failed. Please try again.', 'nextora' ),
			array(
				'status' => 403,
				'fields' => array(),
			),
		);
	}

	$min_score = (float) apply_filters( 'nextora_contact_form_recaptcha_min_score', 0.5 );
	$score     = isset( $body['score'] ) ? (float) $body['score'] : 0.0;
	if ( $score < $min_score ) {
		return new WP_Error(
			'recaptcha_low_score',
			__( 'Security verification failed. Please try again.', 'nextora' ),
			array(
				'status' => 403,
				'fields' => array(),
			),
		);
	}

	return true;
}
