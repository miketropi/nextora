<?php

/** Nuptse member card; loaded only for cardTemplate=template-nuptse. */
declare( strict_types=1 );

/**
 * Resolve preset classes or an explicitly selected custom color.
 *
 * @return array{class: string, style: string}
 */
function nextora_team_nuptse_color_props( string $color, bool $background = false ): array {
	if ( 'inherit' === $color ) {
		return array( 'class' => 'nextora-team-section__inherit-color', 'style' => '' );
	}
	$slug = '';
	if ( preg_match( '/^(?:var:preset\|color\|)?([a-z][a-z0-9-]*)$/i', $color, $match ) || preg_match( '/^var\(--wp--preset--color--([a-z0-9-]+)\)$/i', $color, $match ) ) {
		$slug = sanitize_html_class( strtolower( $match[1] ) );
	}
	if ( '' !== $slug ) {
		return array( 'class' => $background ? 'has-background has-' . $slug . '-background-color' : 'has-text-color has-' . $slug . '-color', 'style' => '' );
	}
	$value = nextora_team_section_resolve_color( $color );
	return array( 'class' => $background ? 'has-background' : 'has-text-color', 'style' => '' !== $value ? ( $background ? 'background-color:' : 'color:' ) . $value . ';' : '' );
}

/**
 * @param array<string, mixed> $member     Normalized member.
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_team_section_render_member_nuptse( array $member, int $radius, array $attributes ): string {
	$name = (string) $member['name'];
	$role = (string) $member['role'];
	$card_color = nextora_team_nuptse_color_props( (string) ( ( $attributes['cardBackgroundColor'] ?? '' ) ?: 'base' ), true );
	$name_color = nextora_team_nuptse_color_props( (string) ( ( $attributes['nameColor'] ?? '' ) ?: 'contrast' ) );
	$role_color = nextora_team_nuptse_color_props( (string) ( ( $attributes['roleColor'] ?? '' ) ?: 'primary' ) );
	$photo = '';
	$photo_id = (int) $member['photoId'];
	$alt = (string) $member['photoAlt'];
	if ( $photo_id > 0 ) {
		if ( '' === $alt ) {
			$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
		}
		$photo = wp_get_attachment_image( $photo_id, 'full', false, array( 'class' => 'nextora-team-section__card-img', 'alt' => '' !== $alt ? $alt : $name, 'loading' => 'lazy', 'decoding' => 'async' ) );
	}
	if ( ! $photo ) {
		$member['photoAlt'] = '' !== $alt ? $alt : $name;
		$photo = nextora_team_section_render_member_photo_fallback( $member );
	}
	$radius = (int) $member['cardBorderRadius'] > 0 ? (int) $member['cardBorderRadius'] : $radius;
	$out = '<div class="swiper-slide"><article class="nextora-team-section__card ' . esc_attr( $card_color['class'] ) . '" style="' . esc_attr( 'border-radius:' . $radius . 'px;' . $card_color['style'] ) . '">';
	$inherit_typography = ! empty( $attributes['inheritTypography'] );
	$out .= '<h3 class="nextora-team-section__card-name ' . esc_attr( $name_color['class'] ) . '" style="' . esc_attr( ( $inherit_typography ? '' : 'font-size:20px;' ) . $name_color['style'] ) . '">' . esc_html( $name ) . '</h3>';
	if ( '' !== $role ) {
		$out .= '<p class="nextora-team-section__card-role ' . esc_attr( $role_color['class'] ) . '" style="' . esc_attr( ( $inherit_typography ? '' : 'font-size:16px;' ) . $role_color['style'] ) . '">' . esc_html( $role ) . '</p>';
	}
	$out .= '<div class="nextora-team-section__card-photo' . ( ! $photo ? ' nextora-team-section__card-photo--empty' : '' ) . '">' . $photo . '</div></article></div>';
	return $out;
}
