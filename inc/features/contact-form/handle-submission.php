<?php

/**
 * Contact form — REST submission handler and mail helpers.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * KSES allowlist for Tiptap message HTML (mirrors comment field subset).
 *
 * @return array<string, array<string, bool>>
 */
function nextora_contact_form_allowed_message_html(): array {
	$allowed = array(
		'p'          => array(),
		'br'         => array(),
		'strong'     => array(),
		'b'          => array(),
		'em'         => array(),
		'i'          => array(),
		's'          => array(),
		'strike'     => array(),
		'code'       => array(),
		'blockquote' => array(),
		'a'          => array(
			'href'   => true,
			'rel'    => true,
			'class'  => true,
			'target' => true,
		),
	);

	/**
	 * @param array<string, array<string, bool>> $allowed Allowed HTML tags.
	 */
	return apply_filters( 'nextora_contact_form_allowed_message_html', $allowed );
}

/**
 * @param string $html Sanitized HTML message.
 */
function nextora_contact_form_message_is_empty( string $html ): bool {
	$stripped = trim( wp_strip_all_tags( $html, true ) );

	return '' === $stripped;
}

/**
 * Sanitize and validate message body from REST.
 *
 * @return string|WP_Error
 */
function nextora_contact_form_sanitize_message( string $raw ) {
	if ( strlen( $raw ) > 65525 ) {
		$raw = substr( $raw, 0, 65525 );
	}

	$message = wp_kses( $raw, nextora_contact_form_allowed_message_html() );
	if ( nextora_contact_form_message_is_empty( $message ) ) {
		return new WP_Error(
			'missing_message',
			__( 'Please enter your message.', 'nextora' ),
			array(
				'status' => 400,
				'fields' => array( 'message' ),
			),
		);
	}

	return $message;
}

/**
 * POST /nextora/v1/contact.
 *
 * @param WP_REST_Request<array<string, mixed>> $request Request.
 *
 * @return WP_REST_Response|WP_Error
 */
function nextora_handle_contact_form_submission( WP_REST_Request $request ) {
	$nonce = sanitize_text_field( (string) $request->get_param( '_wpnonce' ) );
	if ( ! wp_verify_nonce( $nonce, 'nextora_contact_form' ) ) {
		return new WP_Error(
			'invalid_nonce',
			__( 'Security check failed. Please reload the page and try again.', 'nextora' ),
			array( 'status' => 403 ),
		);
	}

	$full_name = sanitize_text_field( (string) $request->get_param( 'full_name' ) );
	$phone     = sanitize_text_field( (string) $request->get_param( 'phone' ) );
	$email     = sanitize_email( (string) $request->get_param( 'email' ) );
	$raw_msg   = (string) $request->get_param( 'message' );

	$missing_fields = array();
	if ( '' === $full_name ) {
		$missing_fields[] = 'full_name';
	}
	if ( '' === $email ) {
		$missing_fields[] = 'email';
	}
	if ( $missing_fields !== array() ) {
		return new WP_Error(
			'missing_fields',
			__( 'Please fill in all required fields.', 'nextora' ),
			array(
				'status' => 400,
				'fields' => $missing_fields,
			),
		);
	}

	if ( ! is_email( $email ) ) {
		return new WP_Error(
			'invalid_email',
			__( 'Please enter a valid email address.', 'nextora' ),
			array(
				'status' => 400,
				'fields' => array( 'email' ),
			),
		);
	}

	$message = nextora_contact_form_sanitize_message( $raw_msg );
	if ( is_wp_error( $message ) ) {
		$error_data = $message->get_error_data();
		if ( ! is_array( $error_data ) ) {
			$error_data = array();
		}
		$error_data['fields'] = array( 'message' );

		return new WP_Error(
			$message->get_error_code(),
			$message->get_error_message(),
			$error_data,
		);
	}

	$instance_index = (int) $request->get_param( 'instance_index' );
	if ( $instance_index < 0 ) {
		$instance_index = 0;
	}

	$post_id = (int) $request->get_param( 'post_id' );
	if ( $post_id < 0 ) {
		$post_id = 0;
	}

	$lookup_post_id = $post_id > 0 ? $post_id : null;

	$config_recaptcha_site_key = sanitize_text_field( (string) $request->get_param( 'config_recaptcha_site_key' ) );
	$config_recaptcha_token    = sanitize_text_field( (string) $request->get_param( 'config_recaptcha_token' ) );
	$recaptcha_config          = function_exists( 'nextora_contact_form_resolve_recaptcha_config' )
		? nextora_contact_form_resolve_recaptcha_config(
			$instance_index,
			$lookup_post_id,
			'' !== $config_recaptcha_site_key ? $config_recaptcha_site_key : null,
			'' !== $config_recaptcha_token ? $config_recaptcha_token : null,
		)
		: array(
			'enabled'    => false,
			'site_key'   => '',
			'secret_key' => '',
		);

	if ( $recaptcha_config['enabled'] ) {
		$recaptcha_token = sanitize_text_field( (string) $request->get_param( 'recaptcha_token' ) );
		$recaptcha_check = function_exists( 'nextora_contact_form_verify_recaptcha_token' )
			? nextora_contact_form_verify_recaptcha_token(
				$recaptcha_token,
				$recaptcha_config['secret_key'],
			)
			: new WP_Error(
				'recaptcha_unavailable',
				__( 'Security verification is temporarily unavailable. Please try again later.', 'nextora' ),
				array(
					'status' => 503,
					'fields' => array(),
				),
			);
		if ( is_wp_error( $recaptcha_check ) ) {
			return $recaptcha_check;
		}
	}

	$config_admin_email = sanitize_email( (string) $request->get_param( 'config_admin_email' ) );
	$config_admin_token = sanitize_text_field( (string) $request->get_param( 'config_admin_email_token' ) );

	$instance_attrs = function_exists( 'nextora_contact_form_get_instance_attrs' )
		? nextora_contact_form_get_instance_attrs( $instance_index, $lookup_post_id )
		: null;

	$site_name   = (string) get_bloginfo( 'name' );
	$site_url    = (string) get_bloginfo( 'url' );
	$admin_email = function_exists( 'nextora_contact_form_resolve_admin_email' )
		? nextora_contact_form_resolve_admin_email(
			$instance_index,
			$lookup_post_id,
			$config_admin_email,
			$config_admin_token,
		)
		: (string) apply_filters( 'nextora_contact_form_admin_email', get_option( 'admin_email' ) );

	if ( '' === $admin_email || ! is_email( $admin_email ) ) {
		return new WP_Error(
			'invalid_admin_email',
			__( 'This form is not configured to receive messages. Please contact the site owner.', 'nextora' ),
			array( 'status' => 500 ),
		);
	}

	$plain_msg = wp_strip_all_tags( $message, true );

	$admin_subject_default = null !== $instance_attrs
		? nextora_contact_form_attr(
			$instance_attrs,
			'adminEmailSubject',
			__( 'New contact form submission', 'nextora' ),
		)
		: __( 'New contact form submission', 'nextora' );

	$admin_subject = (string) apply_filters(
		'nextora_contact_form_admin_subject',
		$admin_subject_default,
	);

	$admin_body = (string) apply_filters(
		'nextora_contact_form_admin_body',
		sprintf(
			/* translators: 1: full name, 2: phone, 3: email, 4: message, 5: site URL */
			__(
				"You have received a new contact form submission.\n\nFull Name: %1\$s\nPhone: %2\$s\nEmail: %3\$s\nMessage:\n%4\$s\n\n---\nSent from: %5\$s",
				'nextora',
			),
			$full_name,
			$phone,
			$email,
			$plain_msg,
			$site_url,
		),
		$full_name,
		$phone,
		$email,
		$message,
		$plain_msg,
	);

	$admin_headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		sprintf( 'Reply-To: %s <%s>', $full_name, $email ),
	);

	$user_subject_default = null !== $instance_attrs
		? nextora_contact_form_attr(
			$instance_attrs,
			'userEmailSubject',
			__( 'Thank you for contacting us', 'nextora' ),
		)
		: __( 'Thank you for contacting us', 'nextora' );

	$user_subject = (string) apply_filters(
		'nextora_contact_form_user_subject',
		$user_subject_default,
	);

	$user_body = (string) apply_filters(
		'nextora_contact_form_user_body',
		sprintf(
			/* translators: 1: full name, 2: phone, 3: email, 4: message, 5: site name, 6: site URL */
			__(
				"Hi %1\$s,\n\nThank you for reaching out! We have received your message and will get back to you as soon as possible.\n\nHere is a copy of your submission:\n\nPhone: %2\$s\nEmail: %3\$s\nMessage:\n%4\$s\n\nBest regards,\n%5\$s\n%6\$s",
				'nextora',
			),
			$full_name,
			$phone,
			$email,
			$plain_msg,
			$site_name,
			$site_url,
		),
		$full_name,
		$phone,
		$email,
		$message,
		$plain_msg,
	);

	$user_headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		sprintf( 'From: %s <%s>', $site_name, $admin_email ),
	);

	$admin_sent = wp_mail( $admin_email, $admin_subject, $admin_body, $admin_headers );
	wp_mail( $email, $user_subject, $user_body, $user_headers );

	// Admin delivery is required; visitor copy is best-effort (local SMTP often blocks outbound mail).
	if ( ! $admin_sent ) {
		return new WP_Error(
			'mail_failed',
			__( 'Your message could not be sent. Please try again later.', 'nextora' ),
			array( 'status' => 500 ),
		);
	}

	$success_default = null !== $instance_attrs
		? nextora_contact_form_attr(
			$instance_attrs,
			'successMessage',
			__( 'Thank you! Your message has been sent.', 'nextora' ),
		)
		: __( 'Thank you! Your message has been sent.', 'nextora' );

	$response = array(
		'success' => true,
		'message' => $success_default,
	);

	$response = apply_filters( 'nextora_contact_form_rest_response', $response, $request, $message );

	return rest_ensure_response( $response );
}
