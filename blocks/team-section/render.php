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
			}
		}

		$out .= '</div><div class="nextora-team-section__card-body">';
		$out .= '<h3 class="nextora-team-section__card-name">' . esc_html( $name ) . '</h3>';

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

$header_layout = isset( $attributes['headerLayout'] ) ? (string) $attributes['headerLayout'] : 'split';
if ( ! in_array( $header_layout, array( 'split', 'stacked', 'left-aligned' ), true ) ) {
	$header_layout = 'split';
}

$heading_level = isset( $attributes['headingLevel'] ) ? (int) $attributes['headingLevel'] : 2;
$heading_level = max( 1, min( 6, $heading_level ) );
$heading_tag   = 'h' . $heading_level;

$content_max = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '1200px';
if ( '' === $content_max ) {
	$content_max = '1200px';
}

$card_radius    = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 30, (int) $attributes['cardBorderRadius'] ) ) : 16;

$bg_color     = nextora_team_section_resolve_color( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$heading_c    = nextora_team_section_resolve_color( isset( $attributes['headingColor'] ) ? (string) $attributes['headingColor'] : '' );
$desc_c       = nextora_team_section_resolve_color( isset( $attributes['descriptionColor'] ) ? (string) $attributes['descriptionColor'] : '' );
$eyebrow_c    = nextora_team_section_resolve_color( isset( $attributes['eyebrowColor'] ) ? (string) $attributes['eyebrowColor'] : '' );
$btn_border_c = nextora_team_section_resolve_color( isset( $attributes['buttonBorderColor'] ) ? (string) $attributes['buttonBorderColor'] : '' );
$btn_text_c   = nextora_team_section_resolve_color( isset( $attributes['buttonTextColor'] ) ? (string) $attributes['buttonTextColor'] : '' );
$dot_c        = nextora_team_section_resolve_color( isset( $attributes['paginationColor'] ) ? (string) $attributes['paginationColor'] : '' );
$dot_active_c = nextora_team_section_resolve_color( isset( $attributes['paginationActiveColor'] ) ? (string) $attributes['paginationActiveColor'] : '' );
$card_bg_c    = nextora_team_section_resolve_color( isset( $attributes['cardBackgroundColor'] ) ? (string) $attributes['cardBackgroundColor'] : '' );
$tag_bg_c     = nextora_team_section_resolve_color( isset( $attributes['tagBackgroundColor'] ) ? (string) $attributes['tagBackgroundColor'] : '' );
$tag_text_c   = nextora_team_section_resolve_color( isset( $attributes['tagTextColor'] ) ? (string) $attributes['tagTextColor'] : '' );

$btn_radius = isset( $attributes['buttonBorderRadius'] ) ? max( 0, min( 50, (int) $attributes['buttonBorderRadius'] ) ) : 50;
$btn_style  = isset( $attributes['buttonStyle'] ) ? (string) $attributes['buttonStyle'] : 'outline';
if ( ! in_array( $btn_style, array( 'outline', 'solid', 'link' ), true ) ) {
	$btn_style = 'outline';
}

$show_button = ! isset( $attributes['showButton'] ) || (bool) $attributes['showButton'];
$button_url  = isset( $attributes['buttonUrl'] ) ? trim( (string) $attributes['buttonUrl'] ) : '';
$button_text = isset( $attributes['buttonText'] ) ? trim( (string) $attributes['buttonText'] ) : __( 'View All Members', 'nextora' );
$button_tgt  = ! empty( $attributes['buttonTarget'] );

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

$eyebrow_html     = isset( $attributes['eyebrowText'] ) ? (string) $attributes['eyebrowText'] : '';
$heading_html     = isset( $attributes['headingText'] ) ? (string) $attributes['headingText'] : '';
$description_html = isset( $attributes['descriptionText'] ) ? (string) $attributes['descriptionText'] : '';

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
	'--nextora-team-max-width'         => $content_max,
	'--nextora-team-btn-radius'        => $btn_radius . 'px',
	'--nextora-team-card-radius'       => $card_radius . 'px',
);

// Only emit color tokens when customized — inline vars beat `.is-style-*` preset rules.
if ( '' !== $bg_color ) {
	$css_vars['--nextora-team-bg'] = $bg_color;
}
if ( '' !== $heading_c ) {
	$css_vars['--nextora-team-heading-color'] = $heading_c;
}
if ( '' !== $desc_c ) {
	$css_vars['--nextora-team-desc-color'] = $desc_c;
}
if ( '' !== $eyebrow_c ) {
	$css_vars['--nextora-team-eyebrow-color'] = $eyebrow_c;
}
if ( '' !== $btn_border_c ) {
	$css_vars['--nextora-team-btn-border'] = $btn_border_c;
}
if ( '' !== $btn_text_c ) {
	$css_vars['--nextora-team-btn-text'] = $btn_text_c;
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

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-team-section',
	'nextora-team-section--loading',
	'nextora-team-section--header-' . sanitize_html_class( $header_layout ),
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
		<header class="nextora-team-section__header nextora-team-section__header--<?php echo esc_attr( $header_layout ); ?>">
			<div class="nextora-team-section__header-main">
				<?php if ( '' !== trim( wp_strip_all_tags( $eyebrow_html ) ) ) : ?>
					<p class="nextora-team-section__eyebrow"><?php echo wp_kses_post( $eyebrow_html ); ?></p>
				<?php endif; ?>
				<?php if ( '' !== trim( wp_strip_all_tags( $heading_html ) ) ) : ?>
					<?php
					printf(
						'<%1$s class="nextora-team-section__heading">%2$s</%1$s>',
						$heading_tag, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- h1-h6.
						wp_kses_post( $heading_html ),
					);
					?>
				<?php endif; ?>
				<?php if ( '' !== trim( wp_strip_all_tags( $description_html ) ) ) : ?>
					<div class="nextora-team-section__description"><?php echo wp_kses_post( $description_html ); ?></div>
				<?php endif; ?>
			</div>
			<?php if ( $show_button && '' !== $button_text ) : ?>
				<div class="nextora-team-section__header-cta">
					<?php if ( '' !== $button_url ) : ?>
						<a
							class="nextora-team-section__btn nextora-team-section__btn--<?php echo esc_attr( $btn_style ); ?>"
							href="<?php echo esc_url( $button_url ); ?>"
							<?php echo $button_tgt ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
						>
							<?php echo esc_html( $button_text ); ?>
							<svg class="nextora-team-section__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
						</a>
					<?php else : ?>
						<span class="nextora-team-section__btn nextora-team-section__btn--<?php echo esc_attr( $btn_style ); ?>">
							<?php echo esc_html( $button_text ); ?>
							<svg class="nextora-team-section__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
						</span>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</header>

		<div
			class="nextora-team-section__carousel-root"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
		>
			<div class="swiper nextora-team-section__swiper">
				<div class="swiper-wrapper">
					<?php
					foreach ( $members as $member ) {
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
						echo nextora_team_section_render_member_slide( $member, $card_radius );
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
