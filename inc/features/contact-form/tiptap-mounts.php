<?php

/**
 * Contact form — merge Tiptap mount configs for message fields.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Append contact-form Tiptap mounts to the shared comment Tiptap config.
 *
 * @param array<string, mixed> $config JS config for initCommentTiptap().
 *
 * @return array<string, mixed>
 */
function nextora_contact_form_merge_tiptap_mounts( array $config ): array {
	$post = get_post();
	if ( ! $post instanceof WP_Post ) {
		return $config;
	}

	$instances = nextora_contact_form_get_instances( $post );
	if ( $instances === array() ) {
		return $config;
	}

	$mounts = isset( $config['mounts'] ) && is_array( $config['mounts'] ) ? $config['mounts'] : array();

	foreach ( $instances as $index => $attrs ) {
		if ( ! nextora_contact_form_uses_rich_text_message( $attrs ) ) {
			continue;
		}

		$mounts[] = array(
			'hostId'           => 'nextora-contact-form-message-host-' . (string) $index,
			'textareaSelector' => '#nextora-contact-form-message-sync-' . (string) $index,
			'labelId'          => 'nextora-contact-form-message-label-' . (string) $index,
			'toolbarSelector'  => '.nextora-tiptap-toolbar',
		);
	}

	$config['mounts'] = $mounts;

	return $config;
}

add_filter( 'nextora_comment_tiptap_js_config', 'nextora_contact_form_merge_tiptap_mounts' );
