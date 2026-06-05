<?php

/**
 * Contact form — block instance indexing for Tiptap mounts + render.php IDs.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Recursively collect `nextora/contact-form` blocks in document order.
 *
 * @param array<int, array<string, mixed>> $blocks Parsed blocks.
 *
 * @return list<array<string, mixed>>
 */
function nextora_contact_form_walk_blocks( array $blocks ): array {
	$instances = array();

	foreach ( $blocks as $block ) {
		$name = isset( $block['blockName'] ) && is_string( $block['blockName'] ) ? $block['blockName'] : '';
		if ( 'nextora/contact-form' === $name ) {
			$attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
			$instances[] = $attrs;
		}

		$inner = isset( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ? $block['innerBlocks'] : array();
		if ( $inner !== array() ) {
			$instances = array_merge( $instances, nextora_contact_form_walk_blocks( $inner ) );
		}
	}

	return $instances;
}

/**
 * All contact-form block attribute sets on the current singular post content.
 *
 * @param WP_Post|null $post Post object.
 *
 * @return list<array<string, mixed>>
 */
function nextora_contact_form_get_instances( ?WP_Post $post = null ): array {
	if ( null === $post ) {
		$post = get_post();
	}

	if ( ! $post instanceof WP_Post ) {
		return array();
	}

	/** @var array<int, array<string, mixed>> $parsed */
	$parsed = parse_blocks( $post->post_content );

	return nextora_contact_form_walk_blocks( $parsed );
}

/**
 * Take the next render index for the current request (matches parse_blocks order).
 */
function nextora_contact_form_take_render_index(): int {
	static $index = 0;
	$current      = $index;
	++$index;

	return $current;
}

/**
 * Whether rich-text Tiptap is enabled for attrs.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_uses_rich_text_message( array $attributes ): bool {
	if ( ! isset( $attributes['enableRichTextMessage'] ) ) {
		return true;
	}

	return (bool) $attributes['enableRichTextMessage'];
}

/**
 * Whether the phone field is shown for attrs.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_uses_phone_field( array $attributes ): bool {
	if ( ! isset( $attributes['enablePhoneField'] ) ) {
		return true;
	}

	return (bool) $attributes['enablePhoneField'];
}

/**
 * Block attributes for a contact-form instance on a post (render order index).
 *
 * @param int      $index   Zero-based instance index.
 * @param int|null $post_id Post that contains the form; required during REST submit.
 *
 * @return array<string, mixed>|null
 */
function nextora_contact_form_get_instance_attrs( int $index, ?int $post_id = null ): ?array {
	$post = null;
	if ( null !== $post_id && $post_id > 0 ) {
		$post = get_post( $post_id );
	}

	$instances = nextora_contact_form_get_instances( $post instanceof WP_Post ? $post : null );
	if ( ! isset( $instances[ $index ] ) ) {
		return null;
	}

	return $instances[ $index ];
}

/**
 * HMAC for admin email configured at render time (survives REST + template blocks).
 */
function nextora_contact_form_admin_email_token( int $post_id, int $instance_index, string $email ): string {
	$normalized = strtolower( trim( $email ) );

	return wp_hash(
		$post_id . '|' . $instance_index . '|' . $normalized,
		'nextora_contact_form_admin_email',
	);
}

/**
 * @param int    $post_id        Source post ID from the form.
 * @param int    $instance_index Block instance index.
 * @param string $email          Configured admin email.
 * @param string $token          Token from `data-admin-email-token`.
 */
function nextora_contact_form_verify_admin_email_token(
	int $post_id,
	int $instance_index,
	string $email,
	string $token,
): bool {
	if ( $post_id <= 0 || $email === '' || $token === '' || ! is_email( $email ) ) {
		return false;
	}

	$expected = nextora_contact_form_admin_email_token( $post_id, $instance_index, $email );

	return hash_equals( $expected, $token );
}

/**
 * Extract a valid admin email from block attributes.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_admin_email_from_attrs( array $attributes ): string {
	if ( ! isset( $attributes['adminEmail'] ) || ! is_string( $attributes['adminEmail'] ) ) {
		return '';
	}

	$email = sanitize_email( trim( $attributes['adminEmail'] ) );

	return is_email( $email ) ? $email : '';
}

/**
 * Resolve admin recipient for a block instance (falls back to site admin email).
 *
 * @param int         $instance_index Zero-based instance index from the form.
 * @param int|null    $post_id        Post ID from the form page (REST has no global post).
 * @param string|null $config_email   Email signed at render time (`data-admin-email`).
 * @param string|null $config_token   Matching `data-admin-email-token`.
 */
function nextora_contact_form_resolve_admin_email(
	int $instance_index,
	?int $post_id = null,
	?string $config_email = null,
	?string $config_token = null,
): string {
	$fallback = (string) apply_filters( 'nextora_contact_form_admin_email', get_option( 'admin_email' ) );

	$attrs = nextora_contact_form_get_instance_attrs( $instance_index, $post_id );
	if ( null !== $attrs ) {
		$from_post = nextora_contact_form_admin_email_from_attrs( $attrs );
		if ( '' !== $from_post ) {
			return $from_post;
		}
	}

	$signed_email = null !== $config_email ? sanitize_email( trim( $config_email ) ) : '';
	$signed_token = null !== $config_token ? trim( $config_token ) : '';
	if (
		'' !== $signed_email
		&& is_email( $signed_email )
		&& null !== $post_id
		&& $post_id > 0
		&& nextora_contact_form_verify_admin_email_token( $post_id, $instance_index, $signed_email, $signed_token )
	) {
		return $signed_email;
	}

	return is_email( $fallback ) ? $fallback : '';
}

/**
 * Read a string block attribute with i18n default.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_contact_form_attr( array $attributes, string $key, string $default ): string {
	if ( ! isset( $attributes[ $key ] ) || ! is_string( $attributes[ $key ] ) ) {
		return $default;
	}
	$value = trim( $attributes[ $key ] );

	return '' !== $value ? $value : $default;
}
