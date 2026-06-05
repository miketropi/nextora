<?php

/**
 * Contact form — REST route registration.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register POST /nextora/v1/contact.
 */
function nextora_contact_form_register_rest_route(): void {
	register_rest_route(
		'nextora/v1',
		'/contact',
		array(
			'methods'             => 'POST',
			'callback'            => 'nextora_handle_contact_form_submission',
			'permission_callback' => '__return_true',
			'args'                => array(
				'full_name' => array(
					'required'          => true,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
				),
				'email'     => array(
					'required'          => true,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_email',
				),
				'message'   => array(
					'required' => true,
					'type'     => 'string',
				),
				'phone'     => array(
					'required'          => false,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => '',
				),
				'_wpnonce'  => array(
					'required'          => true,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
				),
				'instance_index' => array(
					'required'          => false,
					'type'              => 'integer',
					'sanitize_callback' => 'absint',
					'default'           => 0,
				),
				'post_id'        => array(
					'required'          => false,
					'type'              => 'integer',
					'sanitize_callback' => 'absint',
					'default'           => 0,
				),
				'config_admin_email' => array(
					'required'          => false,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_email',
					'default'           => '',
				),
				'config_admin_email_token' => array(
					'required'          => false,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => '',
				),
				'config_recaptcha_site_key' => array(
					'required'          => false,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => '',
				),
				'config_recaptcha_token' => array(
					'required'          => false,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => '',
				),
				'recaptcha_token' => array(
					'required'          => false,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => '',
				),
			),
		),
	);
}

add_action( 'rest_api_init', 'nextora_contact_form_register_rest_route' );
