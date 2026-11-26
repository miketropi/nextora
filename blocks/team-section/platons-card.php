<?php

/**
 * Platons polaroid team card.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_team_section_render_member_slide_platons' ) ) {
	/**
	 * Render a non-interactive member portrait and its caption.
	 *
	 * @param array<string, mixed>  $member        Normalized member.
	 * @param array<string, string> $color_options Name and role colors.
	 */
	function nextora_team_section_render_member_slide_platons( array $member, array $color_options = array() ): string {
		$name = (string) $member['name'];
		if ( '' === trim( wp_strip_all_tags( $name ) ) ) {
			return '';
		}
		$photo_id = (int) $member['photoId'];
		$alt      = trim( (string) $member['photoAlt'] );
		if ( '' === $alt && $photo_id > 0 ) {
			$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
		}
		if ( '' === $alt ) {
			$alt = $name;
		}
		$photo_member             = $member;
		$photo_member['photoAlt'] = $alt;
		$image = $photo_id > 0 ? wp_get_attachment_image(
			$photo_id,
			'large',
			false,
			array(
				'class'    => 'nextora-team-section__card-img',
				'alt'      => $alt,
				'loading'  => 'lazy',
				'decoding' => 'async',
				'sizes'    => '(max-width: 1023px) 45vw, 270px',
			),
		) : '';
		if ( ! is_string( $image ) || '' === $image ) {
			$image = nextora_team_section_render_member_photo_fallback( $photo_member );
		}
		$name_props = nextora_team_section_get_color_props( (string) ( $color_options['nameColor'] ?? '' ), 'color' );
		$role_props = nextora_team_section_get_color_props( (string) ( $color_options['roleColor'] ?? '' ), 'color' );
		$out = '<div class="swiper-slide"><figure class="nextora-team-section__card nextora-team-section__card--platons">';
		$out .= '<div class="nextora-team-section__card-photo">' . $image . '</div><figcaption class="nextora-team-section__card-body">';
		$out .= '<p class="' . esc_attr( trim( 'nextora-team-section__card-name ' . $name_props['class'] ) ) . '"';
		if ( '' !== $name_props['style'] ) {
			$out .= ' style="' . esc_attr( $name_props['style'] ) . '"';
		}
		$out .= '><strong>' . esc_html( $name ) . '</strong></p>';
		$role = trim( (string) $member['role'] );
		if ( '' !== $role ) {
			$out .= '<p class="' . esc_attr( trim( 'nextora-team-section__card-role ' . $role_props['class'] ) ) . '"';
			if ( '' !== $role_props['style'] ) {
				$out .= ' style="' . esc_attr( $role_props['style'] ) . '"';
			}
			$out .= '>' . esc_html( $role ) . '</p>';
		}
		return $out . '</figcaption></figure></div>';
	}
}
