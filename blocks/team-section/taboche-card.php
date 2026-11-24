<?php

/**
 * Taboche Editorial Team Member card template.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_team_section_render_member_slide_taboche' ) ) {
	/**
	 * Render Taboche (template-03) editorial member card.
	 *
	 * @param array<string, mixed>  $member        Normalized member.
	 * @param int                   $radius        Default card radius from section.
	 * @param bool                  $enable_popup  Whether member popup drawer is enabled.
	 * @param array<string, string> $color_options Color attributes for name, role, social.
	 */
	function nextora_team_section_render_member_slide_taboche( array $member, int $radius, bool $enable_popup = false, array $color_options = array() ): string {
		$name = (string) $member['name'];
		if ( '' === trim( wp_strip_all_tags( $name ) ) ) {
			return '';
		}

		$photo_id  = (int) $member['photoId'];
		$photo_alt = (string) $member['photoAlt'];
		$card_rad  = (int) $member['cardBorderRadius'] > 0 ? (int) $member['cardBorderRadius'] : $radius;
		$role      = (string) $member['role'];
		$show_soc  = ! empty( $member['showSocialLinks'] );
		$social    = is_array( $member['socialLinks'] ) ? $member['socialLinks'] : array();

		$name_props   = nextora_team_section_get_color_props( (string) ( $color_options['nameColor'] ?? '' ), 'color' );
		$role_props   = nextora_team_section_get_color_props( (string) ( $color_options['roleColor'] ?? '' ), 'color' );
		$social_props = nextora_team_section_get_color_props( (string) ( $color_options['socialColor'] ?? '' ), 'color' );

		$card_style = sprintf(
			'--nextora-team-card-radius:%dpx;',
			$card_rad,
		);

		$card_class = 'nextora-team-section__card nextora-team-section__card--taboche';
		$card_attrs = '';
		if ( $enable_popup ) {
			$card_class .= ' nextora-team-section__card--has-popup';
			$card_attrs  = sprintf(
				' role="button" tabindex="0" data-member-id="%s" aria-haspopup="dialog" aria-label="%s"',
				esc_attr( (string) $member['id'] ),
				esc_attr( sprintf( __( 'View details for %s', 'nextora' ), $name ) ),
			);
		}

		$out  = '<div class="swiper-slide">';
		$out .= '<article class="' . esc_attr( $card_class ) . '" style="' . esc_attr( $card_style ) . '"' . $card_attrs . '>';
		$out .= '<div class="nextora-team-section__card-photo" style="border-radius:' . esc_attr( (string) $card_rad ) . 'px;">';

		if ( $photo_id > 0 ) {
			$alt = $photo_alt;
			if ( '' === $alt ) {
				$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
			}
			$img = wp_get_attachment_image(
				$photo_id,
				'large',
				false,
				array(
					'class'    => 'nextora-team-section__card-img',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
					'sizes'    => '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw',
				),
			);
			if ( is_string( $img ) && '' !== $img ) {
				$out .= $img;
			} else {
				$out .= nextora_team_section_render_member_photo_fallback( $member );
			}
		} else {
			$out .= nextora_team_section_render_member_photo_fallback( $member );
		}

		$out .= '</div><div class="nextora-team-section__card-body">';

		$name_classes    = trim( 'nextora-team-section__card-name ' . $name_props['class'] );
		$name_style_attr = '' !== $name_props['style'] ? ' style="' . esc_attr( $name_props['style'] ) . '"' : '';
		$out            .= '<h4 class="' . esc_attr( $name_classes ) . '"' . $name_style_attr . '>' . esc_html( $name ) . '</h4>';

		if ( '' !== $role ) {
			$role_classes    = trim( 'nextora-team-section__card-role ' . $role_props['class'] );
			$role_style_attr = '' !== $role_props['style'] ? ' style="' . esc_attr( $role_props['style'] ) . '"' : '';
			$out            .= '<p class="' . esc_attr( $role_classes ) . '"' . $role_style_attr . '>' . esc_html( $role ) . '</p>';
		}

		if ( $show_soc && array() !== $social ) {
			$soc_classes = trim( 'nextora-team-section__card-social-icon ' . $social_props['class'] );
			$soc_style   = '' !== $social_props['style'] ? ' style="' . esc_attr( $social_props['style'] ) . '"' : '';
			$out        .= '<div class="nextora-team-section__card-social">';
			foreach ( $social as $link ) {
				if ( ! is_array( $link ) ) {
					continue;
				}
				$url      = isset( $link['url'] ) ? (string) $link['url'] : '';
				$platform = isset( $link['platform'] ) ? (string) $link['platform'] : 'website';
				if ( '' === $url ) {
					continue;
				}
				$label = nextora_team_section_social_platform_label( $platform );
				$out  .= '<a class="' . esc_attr( $soc_classes ) . '"' . $soc_style . ' href="' . esc_url( $url ) . '" target="_blank" rel="noopener noreferrer" aria-label="' . esc_attr( $label ) . '" title="' . esc_attr( $label ) . '">';
				$out  .= nextora_team_section_render_social_icon( $platform, 16 );
				$out  .= '</a>';
			}
			$out .= '</div>';
		}

		$out .= '</div></article></div>';

		return $out;
	}
}
