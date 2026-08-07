<?php
/**
 * Our Team section — dynamic render + Swiper carousel markup.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_team_section_enqueue_view_script' ) ) {
	/**
	 * Ensure the block view script is queued (Swiper + scroll reveal).
	 *
	 * Dynamic blocks with a PHP render callback do not always get viewScript
	 * auto-enqueued on the front end.
	 */
	function nextora_team_section_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/team-section' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/team-section/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/team-section/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-team-section-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-team-section-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-team-section-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_team_section_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_team_section_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}

		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
		}
		return '';
	}
}

if ( ! function_exists( 'nextora_team_section_social_platform_label' ) ) {
	/**
	 * Human-readable label for a social platform slug.
	 */
	function nextora_team_section_social_platform_label( string $platform ): string {
		$labels = array(
			'linkedin'  => __( 'LinkedIn', 'nextora' ),
			'twitter'   => __( 'Twitter / X', 'nextora' ),
			'github'    => __( 'GitHub', 'nextora' ),
			'instagram' => __( 'Instagram', 'nextora' ),
			'facebook'  => __( 'Facebook', 'nextora' ),
			'website'   => __( 'Website', 'nextora' ),
			'email'     => __( 'Email', 'nextora' ),
		);

		$key = sanitize_key( $platform );

		return isset( $labels[ $key ] ) ? $labels[ $key ] : ucfirst( $key );
	}
}

if ( ! function_exists( 'nextora_team_section_social_platform_label' ) ) {
	/**
	 * Human-readable label for a social platform slug.
	 */
	function nextora_team_section_social_platform_label( string $platform ): string {
		$labels = array(
			'linkedin'  => __( 'LinkedIn', 'nextora' ),
			'twitter'   => __( 'Twitter / X', 'nextora' ),
			'github'    => __( 'GitHub', 'nextora' ),
			'instagram' => __( 'Instagram', 'nextora' ),
			'facebook'  => __( 'Facebook', 'nextora' ),
			'website'   => __( 'Website', 'nextora' ),
			'email'     => __( 'Email', 'nextora' ),
		);

		$key = sanitize_key( $platform );

		return isset( $labels[ $key ] ) ? $labels[ $key ] : ucfirst( $key );
	}
}

if ( ! function_exists( 'nextora_team_section_normalize_member' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw member from attributes.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_team_section_normalize_member( array $raw ): array {
		$tags = array();
		if ( isset( $raw['tags'] ) && is_array( $raw['tags'] ) ) {
			foreach ( $raw['tags'] as $tag ) {
				$t = trim( (string) $tag );
				if ( '' !== $t ) {
					$tags[] = $t;
				}
			}
		}

		$social = array();
		if ( isset( $raw['socialLinks'] ) && is_array( $raw['socialLinks'] ) ) {
			foreach ( $raw['socialLinks'] as $link ) {
				if ( ! is_array( $link ) ) {
					continue;
				}
				$url = isset( $link['url'] ) ? trim( (string) $link['url'] ) : '';
				if ( '' === $url ) {
					continue;
				}
				$social[] = array(
					'platform' => isset( $link['platform'] ) ? sanitize_key( (string) $link['platform'] ) : 'website',
					'url'      => esc_url_raw( $url ),
				);
			}
		}

		return array(
			'id'               => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'photoId'          => isset( $raw['photoId'] ) ? (int) $raw['photoId'] : 0,
			'photoUrl'         => isset( $raw['photoUrl'] ) ? trim( (string) $raw['photoUrl'] ) : '',
			'photoAlt'         => isset( $raw['photoAlt'] ) ? trim( (string) $raw['photoAlt'] ) : '',
			'name'             => isset( $raw['name'] ) ? trim( (string) $raw['name'] ) : '',
			'role'             => isset( $raw['role'] ) ? trim( (string) $raw['role'] ) : '',
			'tags'             => $tags,
			'bio'              => isset( $raw['bio'] ) ? trim( (string) $raw['bio'] ) : '',
			'bioLineClamp'     => isset( $raw['bioLineClamp'] ) ? max( 1, min( 5, (int) $raw['bioLineClamp'] ) ) : 3,
			'showSocialLinks'  => ! empty( $raw['showSocialLinks'] ),
			'socialLinks'      => $social,
			'cardBorderRadius' => isset( $raw['cardBorderRadius'] ) ? max( 0, min( 30, (int) $raw['cardBorderRadius'] ) ) : 16,
		);
	}
}

if ( ! function_exists( 'nextora_team_section_render_member_photo_fallback' ) ) {
	/**
	 * URL photo when no attachment is available.
	 *
	 * @param array<string, mixed> $member Normalized member.
	 */
	function nextora_team_section_render_member_photo_fallback( array $member ): string {
		$photo_url = isset( $member['photoUrl'] ) ? trim( (string) $member['photoUrl'] ) : '';
		$photo_alt = isset( $member['photoAlt'] ) ? trim( (string) $member['photoAlt'] ) : '';

		if ( '' === $photo_url ) {
			return '';
		}

		$url = esc_url( $photo_url );
		if ( '' === $url ) {
			return '';
		}

		return sprintf(
			'<img class="nextora-team-section__card-img" src="%1$s" alt="%2$s" loading="lazy" decoding="async" />',
			$url,
			esc_attr( $photo_alt ),
		);
	}
}

if ( ! function_exists( 'nextora_team_section_render_member_slide' ) ) {
	/**
	 * @param array<string, mixed> $member Normalized member.
	 * @param int                  $radius Default card radius from section.
	 */
	function nextora_team_section_render_member_slide( array $member, int $radius ): string {
		$name = (string) $member['name'];
		if ( '' === trim( wp_strip_all_tags( $name ) ) ) {
			return '';
		}

		$photo_id   = (int) $member['photoId'];
		$photo_alt  = (string) $member['photoAlt'];
		$card_rad   = (int) $member['cardBorderRadius'] > 0 ? (int) $member['cardBorderRadius'] : $radius;
		$clamp      = (int) $member['bioLineClamp'];
		$role       = (string) $member['role'];
		$bio        = (string) $member['bio'];
		$tags       = is_array( $member['tags'] ) ? $member['tags'] : array();
		$show_soc   = ! empty( $member['showSocialLinks'] );
		$social     = is_array( $member['socialLinks'] ) ? $member['socialLinks'] : array();

		$card_style = sprintf(
			'border-radius:%dpx;--nextora-team-card-radius:%dpx;--nextora-team-bio-clamp:%d;',
			$card_rad,
			$card_rad,
			$clamp,
		);

		$out  = '<div class="swiper-slide">';
		$out .= '<article class="nextora-team-section__card" style="' . esc_attr( $card_style ) . '">';
		$out .= '<div class="nextora-team-section__card-photo">';

		if ( $photo_id > 0 ) {
			$alt = $photo_alt;
			if ( '' === $alt ) {
				$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
			}
			$img = wp_get_attachment_image(
				$photo_id,
				'full',
				false,
				array(
					'class'    => 'nextora-team-section__card-img',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
				),
			);
			if ( is_string( $img ) && '' !== $img ) {
				$out .= $img;
			} else {
				$out .= nextora_team_section_render_member_photo_fallback( $member ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
			}
		} else {
			$out .= nextora_team_section_render_member_photo_fallback( $member ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
		}

		$out .= '</div><div class="nextora-team-section__card-body">';
		$out .= '<h4 class="nextora-team-section__card-name">' . esc_html( $name ) . '</h4>';

		if ( '' !== $role ) {
			$out .= '<p class="nextora-team-section__card-role">' . esc_html( $role ) . '</p>';
		}

		if ( array() !== $tags ) {
			$out .= '<div class="nextora-team-section__card-tags">';
			foreach ( $tags as $tag ) {
				$out .= '<span class="nextora-team-section__card-tag">' . esc_html( (string) $tag ) . '</span>';
			}
			$out .= '</div>';
		}

		if ( '' !== $bio ) {
			$out .= '<p class="nextora-team-section__card-bio">' . esc_html( $bio ) . '</p>';
		}

		if ( $show_soc && array() !== $social ) {
			$out .= '<div class="nextora-team-section__card-social">';
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
				$out  .= '<a class="nextora-team-section__card-social-link" href="' . esc_url( $url ) . '" target="_blank" rel="noopener noreferrer">';
				$out  .= esc_html( $label );
				$out  .= '</a>';
			}
			$out .= '</div>';
		}

		$out .= '</div></article></div>';

		return $out;
	}
}

if ( ! function_exists( 'nextora_team_section_render_member_slide_overlay' ) ) {
	/**
	 * Render overlay-social template card.
	 *
	 * @param array<string, mixed> $member Normalized member.
	 * @param int                  $radius Default card radius from section.
	 */
	function nextora_team_section_render_member_slide_overlay( array $member, int $radius ): string {
		$name = (string) $member['name'];
		if ( '' === trim( wp_strip_all_tags( $name ) ) ) {
			return '';
		}

		$photo_id   = (int) $member['photoId'];
		$photo_alt  = (string) $member['photoAlt'];
		$card_rad   = (int) $member['cardBorderRadius'] > 0 ? (int) $member['cardBorderRadius'] : $radius;
		$role       = (string) $member['role'];
		$show_soc   = ! empty( $member['showSocialLinks'] );
		$social     = is_array( $member['socialLinks'] ) ? $member['socialLinks'] : array();

		$card_style = sprintf(
			'border-radius:%dpx;--nextora-team-card-radius:%dpx;',
			$card_rad,
			$card_rad,
		);

		$out  = '<div class="swiper-slide">';
		$out .= '<article class="nextora-team-section__card nextora-team-section__card--overlay" style="' . esc_attr( $card_style ) . '">';
		$out .= '<div class="nextora-team-section__card-photo">';

		if ( $photo_id > 0 ) {
			$alt = $photo_alt;
			if ( '' === $alt ) {
				$alt = (string) get_post_meta( $photo_id, '_wp_attachment_image_alt', true );
			}
			$img = wp_get_attachment_image(
				$photo_id,
				'full',
				false,
				array(
					'class'    => 'nextora-team-section__card-img',
					'alt'      => $alt,
					'loading'  => 'lazy',
					'decoding' => 'async',
				),
			);
			if ( is_string( $img ) && '' !== $img ) {
				$out .= $img;
			} else {
				$out .= nextora_team_section_render_member_photo_fallback( $member ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
			}
		} else {
			$out .= nextora_team_section_render_member_photo_fallback( $member ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
		}

		// Social overlay (only show if enabled and has links).
		if ( $show_soc && array() !== $social ) {
			$out .= '<div class="nextora-team-section__card-social-overlay">';
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
				$out  .= '<a class="nextora-team-section__card-social-link-overlay" href="' . esc_url( $url ) . '" target="_blank" rel="noopener noreferrer" aria-label="' . esc_attr( $label ) . '">';

				// Icon based on platform.
				if ( 'linkedin' === $platform ) {
					$out .= '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>';
				} elseif ( 'email' === $platform ) {
					$out .= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>';
				} elseif ( 'twitter' === $platform ) {
					$out .= '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
				} elseif ( 'github' === $platform ) {
					$out .= '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>';
				} elseif ( 'instagram' === $platform ) {
					$out .= '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>';
				} elseif ( 'facebook' === $platform ) {
					$out .= '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
				} elseif ( 'website' === $platform ) {
					$out .= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';
				} else {
					// Default icon.
					$out .= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
				}

				$out .= '</a>';
			}
			$out .= '</div>';
		}

		$out .= '</div><div class="nextora-team-section__card-body">';
		$out .= '<h4 class="nextora-team-section__card-name">' . esc_html( $name ) . '</h4>';

		if ( '' !== $role ) {
			$out .= '<p class="nextora-team-section__card-role">' . esc_html( $role ) . '</p>';
		}

		$out .= '</div></article></div>';

		return $out;
	}
}

$raw_members = isset( $attributes['members'] ) && is_array( $attributes['members'] ) ? $attributes['members'] : array();
$members     = array();

foreach ( $raw_members as $raw ) {
	if ( ! is_array( $raw ) ) {
		continue;
	}
	$normalized = nextora_team_section_normalize_member( $raw );
	if ( '' !== trim( (string) $normalized['name'] ) ) {
		$members[] = $normalized;
	}
}

if ( array() === $members ) {
	return;
}

$layout_mode = isset( $attributes['layoutMode'] ) ? (string) $attributes['layoutMode'] : 'carousel';
if ( ! in_array( $layout_mode, array( 'carousel', 'grid' ), true ) ) {
	$layout_mode = 'carousel';
}

$card_template = isset( $attributes['cardTemplate'] ) ? (string) $attributes['cardTemplate'] : 'default';
if ( ! in_array( $card_template, array( 'default', 'overlay-social' ), true ) ) {
	$card_template = 'default';
}

$photo_aspect = isset( $attributes['photoAspectRatio'] ) ? (string) $attributes['photoAspectRatio'] : '3/4';
if ( ! in_array( $photo_aspect, array( '3/4', '4/3', '1/1', '16/9' ), true ) ) {
	$photo_aspect = '3/4';
}

$grid_columns   = isset( $attributes['gridColumns'] ) ? max( 1, min( 6, (int) $attributes['gridColumns'] ) ) : 4;
$grid_min_width = isset( $attributes['gridMinWidth'] ) ? max( 320, (int) $attributes['gridMinWidth'] ) : 981;
$grid_col_gap   = isset( $attributes['gridColumnGap'] ) ? max( 0, min( 60, (int) $attributes['gridColumnGap'] ) ) : 24;
$grid_row_gap   = isset( $attributes['gridRowGap'] ) ? max( 0, min( 60, (int) $attributes['gridRowGap'] ) ) : 24;

$card_radius = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 30, (int) $attributes['cardBorderRadius'] ) ) : 16;

$bg_color     = nextora_team_section_resolve_color( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$dot_c        = nextora_team_section_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active_c = nextora_team_section_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );
$card_bg_c    = nextora_team_section_resolve_color( isset( $attributes['cardBackgroundColor'] ) ? (string) $attributes['cardBackgroundColor'] : '' );
$tag_bg_c     = nextora_team_section_resolve_color( isset( $attributes['tagBackgroundColor'] ) ? (string) $attributes['tagBackgroundColor'] : '' );
$tag_text_c   = nextora_team_section_resolve_color( isset( $attributes['tagTextColor'] ) ? (string) $attributes['tagTextColor'] : '' );
$name_c       = nextora_team_section_resolve_color( isset( $attributes['nameColor'] ) ? (string) $attributes['nameColor'] : '' );
$role_c       = nextora_team_section_resolve_color( isset( $attributes['roleColor'] ) ? (string) $attributes['roleColor'] : '' );

$spv_mobile  = round( isset( $attributes['slidesPerViewMobile'] ) ? (float) $attributes['slidesPerViewMobile'] : 1.2, 3 );
$spv_tablet  = round( isset( $attributes['slidesPerViewTablet'] ) ? (float) $attributes['slidesPerViewTablet'] : 2.5, 3 );
$spv_desktop = round( isset( $attributes['slidesPerView'] ) ? (float) $attributes['slidesPerView'] : 4.0, 3 );
$space       = isset( $attributes['spaceBetween'] ) ? max( 0, min( 60, (int) $attributes['spaceBetween'] ) ) : 24;
$speed       = isset( $attributes['speed'] ) ? max( 100, min( 2000, (int) $attributes['speed'] ) ) : 500;
$loop        = ! empty( $attributes['loop'] );
$autoplay    = ! empty( $attributes['autoplay'] );
$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 1000, min( 10000, (int) $attributes['autoplayDelay'] ) ) : 4000;
$pause_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag    = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$pag_type    = isset( $attributes['paginationType'] ) ? (string) $attributes['paginationType'] : 'bullets';
if ( ! in_array( $pag_type, array( 'bullets', 'fraction', 'progressbar' ), true ) ) {
	$pag_type = 'bullets';
}
$show_arrows = ! empty( $attributes['showArrows'] );
$free_mode   = ! empty( $attributes['freeMode'] );
$grab_cursor = ! isset( $attributes['grabCursor'] ) || (bool) $attributes['grabCursor'];

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

/** @var list<array<string, mixed>> $members */
$members = array_values( (array) apply_filters( 'nextora_team_section_members', $members, $attributes ) );

$slide_count = count( $members );
$use_loop    = $loop && $slide_count > 1;

$swiper_opts = array(
	'loop'                => $use_loop,
	'autoplay'            => $autoplay,
	'autoplayDelay'       => $autoplay_d,
	'pauseOnHover'        => $pause_hover,
	'showPagination'      => $show_pag && $slide_count > 1,
	'paginationType'      => $pag_type,
	'showArrows'          => $show_arrows && $slide_count > 1,
	'spaceBetween'        => $space,
	'speed'               => $speed,
	'freeMode'            => $free_mode,
	'grabCursor'          => $grab_cursor,
	'slidesPerView'        => $spv_mobile,
	'slidesPerViewTablet'  => $spv_tablet,
	'slidesPerViewDesktop' => $spv_desktop,
);

$swiper_opts = (array) apply_filters( 'nextora_team_section_swiper_options', $swiper_opts, $attributes, $members );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$css_vars = array(
	'--nextora-team-photo-placeholder' => nextora_team_section_photo_placeholder_var(),
	'--nextora-team-card-radius'       => $card_radius . 'px',
	'--nextora-team-grid-columns'      => (string) $grid_columns,
	'--nextora-team-grid-column-gap'   => $grid_col_gap . 'px',
	'--nextora-team-grid-row-gap'      => $grid_row_gap . 'px',
	'--nextora-team-photo-aspect'      => $photo_aspect,
	'--nextora-team-space-between'     => $space . 'px',
);

// Only emit color tokens when customized — inline vars beat `.is-style-*` preset rules.
if ( '' !== $bg_color ) {
	$css_vars['--nextora-team-bg'] = $bg_color;
}
if ( '' !== $dot_c ) {
	$css_vars['--nextora-team-dot-color'] = $dot_c;
}
if ( '' !== $dot_active_c ) {
	$css_vars['--nextora-team-dot-active'] = $dot_active_c;
}
if ( '' !== $card_bg_c ) {
	$css_vars['--nextora-team-card-bg'] = $card_bg_c;
}
if ( '' !== $tag_bg_c ) {
	$css_vars['--nextora-team-tag-bg'] = $tag_bg_c;
}
if ( '' !== $tag_text_c ) {
	$css_vars['--nextora-team-tag-color'] = $tag_text_c;
}
if ( '' !== $name_c ) {
	$css_vars['--nextora-team-name-color'] = $name_c;
}
if ( '' !== $role_c ) {
	$css_vars['--nextora-team-role-color'] = $role_c;
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-team-section',
	'nextora-team-section--loading',
	'nextora-team-section--layout-' . sanitize_html_class( $layout_mode ),
	'nextora-team-section--template-' . sanitize_html_class( $card_template ),
);
if ( $enable_scroll ) {
	$wrapper_classes[] = 'nextora-team-section--reveal-pending';
}

$wrapper_classes = (array) apply_filters(
	'nextora_team_section_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $inline_style,
);
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_team_section_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

nextora_team_section_enqueue_view_script();

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-team-section__inner">
		<div
			class="nextora-team-section__carousel-root"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
			data-layout-mode="<?php echo esc_attr( $layout_mode ); ?>"
			data-grid-min-width="<?php echo esc_attr( (string) $grid_min_width ); ?>"
		>
			<div class="swiper nextora-team-section__swiper">
				<div class="swiper-wrapper">
					<?php
					foreach ( $members as $member ) {
						if ( 'overlay-social' === $card_template ) {
							// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
							echo nextora_team_section_render_member_slide_overlay( $member, $card_radius );
						} else {
							// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
							echo nextora_team_section_render_member_slide( $member, $card_radius );
						}
					}
					?>
				</div>
			</div>
			<?php if ( $show_arrows && $slide_count > 1 ) : ?>
				<button type="button" class="nextora-team-section__arrow nextora-team-section__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous team member', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
				</button>
				<button type="button" class="nextora-team-section__arrow nextora-team-section__arrow--next" aria-label="<?php echo esc_attr__( 'Next team member', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
				</button>
			<?php endif; ?>
			<?php if ( $show_pag && $slide_count > 1 ) : ?>
				<div class="nextora-team-section__pagination swiper-pagination" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
	</div>
</div>
