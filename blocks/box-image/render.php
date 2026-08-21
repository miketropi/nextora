<?php
/**
 * Box Image — dynamic render (image cards, grid or slider).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_box_image_enqueue_view_script' ) ) {
	function nextora_box_image_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/box-image' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/box-image/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/box-image/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-box-image-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-box-image-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-box-image-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_box_image_resolve_color' ) ) {
	function nextora_box_image_resolve_color( string $raw ): string {
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

if ( ! function_exists( 'nextora_box_image_sanitize_css_length' ) ) {
	function nextora_box_image_sanitize_css_length( string $value ): string {
		$value = trim( $value );
		if ( '' === $value || '0' === $value ) {
			return '';
		}

		if ( preg_match( '/^var:preset\|spacing\|([a-z0-9_-]+)$/i', $value, $preset_m ) ) {
			return 'var(--wp--preset--spacing--' . strtolower( $preset_m[1] ) . ')';
		}

		if ( preg_match( '/^(\d+\.?\d*)(px|rem|em|%|vw|vh)$/i', $value, $length_m ) ) {
			return $length_m[1] . strtolower( $length_m[2] );
		}

		if ( preg_match( '/^var\(--[a-z0-9-]+\)$/i', $value ) ) {
			return $value;
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_box_image_normalize_item' ) ) {
	/**
	 * @param array<string, mixed> $raw Raw item from attributes.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_box_image_normalize_item( array $raw ): array {
		return array(
			'id'              => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'title'           => isset( $raw['title'] ) ? trim( (string) $raw['title'] ) : '',
			'description'     => isset( $raw['description'] ) ? trim( (string) $raw['description'] ) : '',
			'showLink'        => ! isset( $raw['showLink'] ) || (bool) $raw['showLink'],
			'linkLabel'       => isset( $raw['linkLabel'] ) ? trim( (string) $raw['linkLabel'] ) : '',
			'linkUrl'         => isset( $raw['linkUrl'] ) ? trim( (string) $raw['linkUrl'] ) : '',
			'linkTarget'      => isset( $raw['linkTarget'] ) && '_blank' === (string) $raw['linkTarget'] ? '_blank' : '_self',
			'imageId'         => isset( $raw['imageId'] ) ? (int) $raw['imageId'] : 0,
			'imageUrl'        => isset( $raw['imageUrl'] ) ? trim( (string) $raw['imageUrl'] ) : '',
			'backgroundColor' => isset( $raw['backgroundColor'] ) ? trim( (string) $raw['backgroundColor'] ) : '',
			'titleColor'      => isset( $raw['titleColor'] ) ? trim( (string) $raw['titleColor'] ) : '',
			'descriptionColor' => isset( $raw['descriptionColor'] ) ? trim( (string) $raw['descriptionColor'] ) : '',
			'linkColor'       => isset( $raw['linkColor'] ) ? trim( (string) $raw['linkColor'] ) : '',
			'badge'           => isset( $raw['badge'] ) ? trim( (string) $raw['badge'] ) : '',
			'linkWrapCard'    => ! empty( $raw['linkWrapCard'] ),
		);
	}
}

if ( ! function_exists( 'nextora_box_image_placeholder_url' ) ) {
	function nextora_box_image_placeholder_url(): string {
		return (string) get_template_directory_uri() . '/assets/images/placeholder/general-img-landscape.png';
	}
}

if ( ! function_exists( 'nextora_box_image_calculate_template4_height' ) ) {
	function nextora_box_image_calculate_template4_height( int $count, int $step_gap = 480 ): int {
		if ( $count <= 0 ) {
			return 0;
		}
		if ( 1 === $count ) {
			return 420;
		}
		$r = (int) round( $step_gap * 0.28 );
		$last_idx = $count - 1;
		$k = (int) floor( $last_idx / 2 );
		$last_top = ( 0 === $last_idx % 2 ) ? ( $k * $step_gap ) : ( $k * $step_gap + $r );
		return $last_top + 420;
	}
}

if ( ! function_exists( 'nextora_box_image_get_template4_position' ) ) {
	/**
	 * @return array<string, string>
	 */
	function nextora_box_image_get_template4_position( int $index, int $step_gap = 480 ): array {
		$r = (int) round( $step_gap * 0.28 );
		$is_even = ( 0 === $index % 2 );
		$k = (int) floor( $index / 2 );
		if ( $is_even ) {
			return array(
				'top'  => ( $k * $step_gap ) . 'px',
				'side' => 'left',
				'pos'  => '15%',
				'rot'  => '8deg',
			);
		}
		return array(
			'top'  => ( $k * $step_gap + $r ) . 'px',
			'side' => 'right',
			'pos'  => '10%',
			'rot'  => '-8deg',
		);
	}
}

if ( ! function_exists( 'nextora_box_image_get_template4_color_theme' ) ) {
	/**
	 * @return array<string, string>
	 */
	function nextora_box_image_get_template4_color_theme( int $index ): array {
		$themes = array(
			0 => array(
				'slug'   => 'primary',
				'theme'  => 'Primary',
				'accent' => 'var(--wp--preset--color--primary)',
				'bg'     => 'color-mix(in srgb, var(--wp--preset--color--primary) 8%, var(--wp--preset--color--base, #fff))',
				'border' => 'color-mix(in srgb, var(--wp--preset--color--primary) 25%, transparent)',
			),
			1 => array(
				'slug'   => 'secondary',
				'theme'  => 'Secondary',
				'accent' => 'var(--wp--preset--color--secondary)',
				'bg'     => 'color-mix(in srgb, var(--wp--preset--color--secondary) 8%, var(--wp--preset--color--base, #fff))',
				'border' => 'color-mix(in srgb, var(--wp--preset--color--secondary) 25%, transparent)',
			),
			2 => array(
				'slug'   => 'contrast',
				'theme'  => 'Contrast',
				'accent' => 'var(--wp--preset--color--contrast)',
				'bg'     => 'color-mix(in srgb, var(--wp--preset--color--contrast) 6%, var(--wp--preset--color--base, #fff))',
				'border' => 'color-mix(in srgb, var(--wp--preset--color--contrast) 20%, transparent)',
			),
		);
		return $themes[ $index % 3 ];
	}
}

if ( ! function_exists( 'nextora_box_image_get_template4_svg_path' ) ) {
	function nextora_box_image_get_template4_svg_path( int $count, int $step_gap = 480 ): string {
		if ( $count <= 1 ) {
			return '';
		}
		$r = (int) round( $step_gap * 0.28 );
		$get_y = static function( int $idx ) use ( $step_gap, $r ): int {
			$k = (int) floor( $idx / 2 );
			return ( 0 === $idx % 2 ) ? ( $k * $step_gap + 150 ) : ( $k * $step_gap + $r + 150 );
		};

		$path = '';
		for ( $i = 0; $i < $count - 1; $i++ ) {
			$y_curr = $get_y( $i );
			$y_next = $get_y( $i + 1 );
			if ( 0 === $i ) {
				$path = sprintf( 'M 290 %1$d C 500 %1$d, 550 %2$d, 710 %2$d', $y_curr, $y_next );
			} elseif ( 1 === $i ) {
				$mid_y = (int) round( ( $y_curr + $y_next ) / 2 );
				$path .= sprintf( ' C 850 %1$d, 500 %2$d, 290 %3$d', $y_curr, $mid_y, $y_next );
			} else {
				$is_even = ( 0 === $i % 2 );
				if ( $is_even ) {
					$path .= sprintf( ' C 290 %1$d, 550 %2$d, 750 %2$d', $y_curr + 100, $y_next );
				} else {
					$mid_y = (int) round( ( $y_curr + $y_next ) / 2 );
					$path .= sprintf( ' C 950 %1$d, 500 %2$d, 290 %3$d', $y_curr, $mid_y, $y_next );
				}
			}
		}
		return $path;
	}
}

if ( ! function_exists( 'nextora_box_image_render_template4_card' ) ) {
	/**
	 * @param array<string, mixed> $item
	 */
	function nextora_box_image_render_template4_card( array $item, int $index, int $step_gap = 480 ): string {
		$title       = (string) $item['title'];
		$description = (string) $item['description'];

		if ( '' === trim( wp_strip_all_tags( $title ) ) && '' === trim( wp_strip_all_tags( $description ) ) ) {
			return '';
		}

		$show_link   = ! empty( $item['showLink'] );
		$link_label  = (string) $item['linkLabel'];
		$link_url    = (string) $item['linkUrl'];
		$link_target = (string) $item['linkTarget'];
		$link_wrap   = ! empty( $item['linkWrapCard'] ) && ! empty( $item['showLink'] ) && '' !== $link_url;

		$image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
		$image_url = isset( $item['imageUrl'] ) ? (string) $item['imageUrl'] : '';

		$bg_color         = isset( $item['backgroundColor'] ) ? trim( (string) $item['backgroundColor'] ) : '';
		$title_color      = isset( $item['titleColor'] ) ? trim( (string) $item['titleColor'] ) : '';
		$description_color = isset( $item['descriptionColor'] ) ? trim( (string) $item['descriptionColor'] ) : '';
		$accent_color      = isset( $item['accentColor'] ) && '' !== trim( (string) $item['accentColor'] )
			? trim( (string) $item['accentColor'] )
			: ( isset( $item['linkColor'] ) ? trim( (string) $item['linkColor'] ) : '' );

		$pos         = nextora_box_image_get_template4_position( $index, $step_gap );
		$color_theme = nextora_box_image_get_template4_color_theme( $index );

		$wrap_style = sprintf(
			'--nextora-step-top:%s;--nextora-step-%s:%s;--nextora-step-rot:%s;',
			esc_attr( $pos['top'] ),
			esc_attr( $pos['side'] ),
			esc_attr( $pos['pos'] ),
			esc_attr( $pos['rot'] ),
		);

		$card_vars = array();

		if ( '' !== $accent_color ) {
			$resolved_accent = nextora_box_image_resolve_color( $accent_color );
			if ( '' !== $resolved_accent ) {
				$card_vars[] = '--nextora-step-accent:' . esc_attr( $resolved_accent );
				$card_vars[] = '--nextora-box-image-item-link-color:' . esc_attr( $resolved_accent );
				if ( '' === $bg_color ) {
					$card_vars[] = '--nextora-step-bg:color-mix(in srgb, ' . esc_attr( $resolved_accent ) . ' 8%, var(--wp--preset--color--base, #fff))';
					$card_vars[] = '--nextora-step-border:color-mix(in srgb, ' . esc_attr( $resolved_accent ) . ' 25%, transparent)';
				}
			}
		} else {
			$card_vars[] = '--nextora-step-accent:' . esc_attr( $color_theme['accent'] );
			if ( '' === $bg_color ) {
				$card_vars[] = '--nextora-step-bg:' . esc_attr( $color_theme['bg'] );
				$card_vars[] = '--nextora-step-border:' . esc_attr( $color_theme['border'] );
			}
		}

		if ( '' !== $bg_color ) {
			$resolved = nextora_box_image_resolve_color( $bg_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-step-bg:' . esc_attr( $resolved );
			}
		}

		if ( '' !== $title_color ) {
			$resolved = nextora_box_image_resolve_color( $title_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-title-color:' . esc_attr( $resolved );
			}
		}

		if ( '' !== $description_color ) {
			$resolved = nextora_box_image_resolve_color( $description_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-desc-color:' . esc_attr( $resolved );
			}
		}

		$card_style = '';
		if ( array() !== $card_vars ) {
			$card_style = ' style="' . implode( ';', $card_vars ) . '"';
		}

		$step_num = sprintf( '%02d', $index + 1 );

		$out = '<div class="nextora-box-image__step-card-wrap" style="' . $wrap_style . '">';

		if ( $link_wrap ) {
			$out .= sprintf(
				'<a class="nextora-box-image__card nextora-box-image__card--template4 nextora-box-image__card-link" href="%1$s"%2$s%3$s>',
				esc_url( $link_url ),
				$card_style,
				'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
			);
		} else {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template4"' . $card_style . '>';
		}

		$out .= '<div class="nextora-box-image__card-inner">';

		// 1. Image
		$out .= '<div class="nextora-box-image__image-wrap">';
		if ( '' !== $image_url ) {
			$url = esc_url( $image_url );
			if ( '' !== $url ) {
				$out .= sprintf(
					'<img class="nextora-box-image__card-image" src="%1$s" alt="" loading="lazy" decoding="async" />',
					$url,
				);
			}
		} elseif ( $image_id > 0 ) {
			$out .= wp_get_attachment_image(
				$image_id,
				'medium_large',
				false,
				array(
					'class'    => 'nextora-box-image__card-image',
					'loading'  => 'lazy',
					'decoding' => 'async',
					'alt'      => '',
				),
			);
		} else {
			$out .= sprintf(
				'<img class="nextora-box-image__card-image" src="%1$s" alt="" loading="lazy" decoding="async" />',
				esc_url( nextora_box_image_placeholder_url() ),
			);
		}
		$out .= '</div>';

		// 2. Step number
		$out .= '<span class="nextora-box-image__step-number" aria-hidden="true">' . esc_html( $step_num ) . '</span>';

		// 3. Title
		$out .= '<h4 class="nextora-box-image__title">' . esc_html( $title ) . '</h4>';

		// 4. Description
		if ( '' !== trim( wp_strip_all_tags( $description ) ) ) {
			$out .= '<p class="nextora-box-image__description">' . esc_html( $description ) . '</p>';
		}

		// 5. Link
		if ( ! $link_wrap && $show_link && '' !== $link_label ) {
			$arrow = '<span class="nextora-box-image__link-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
			if ( '' !== $link_url ) {
				$out .= sprintf(
					'<a class="nextora-box-image__link nextora-box-image__link--template4" href="%1$s"%2$s><span>%3$s</span>%4$s</a>',
					esc_url( $link_url ),
					'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
					esc_html( $link_label ),
					$arrow,
				);
			} else {
				$out .= sprintf(
					'<span class="nextora-box-image__link nextora-box-image__link--template4 nextora-box-image__link--static"><span>%1$s</span>%2$s</span>',
					esc_html( $link_label ),
					$arrow,
				);
			}
		}

		$out .= '</div>'; // close .nextora-box-image__card-inner
		$out .= $link_wrap ? '</a>' : '</article>';
		$out .= '</div>'; // close .nextora-box-image__step-card-wrap

		return $out;
	}
}

if ( ! function_exists( 'nextora_box_image_render_card' ) ) {
	/**
	 * @param array<string, mixed> $item     Normalized item.
	 * @param bool                 $as_slide Wrap in swiper-slide.
	 * @param string               $template Template name.
	 */
	function nextora_box_image_render_card(
		array $item,
		bool $as_slide = true,
		string $template = 'default',
		int $index = 0,
	): string {
		$title       = (string) $item['title'];
		$description = (string) $item['description'];

		if ( '' === trim( wp_strip_all_tags( $title ) ) && '' === trim( wp_strip_all_tags( $description ) ) ) {
			return '';
		}

		$show_link   = ! empty( $item['showLink'] );
		$link_label  = (string) $item['linkLabel'];
		$link_url    = (string) $item['linkUrl'];
		$link_target = (string) $item['linkTarget'];
		$link_wrap   = ! empty( $item['linkWrapCard'] ) && ! empty( $item['showLink'] ) && '' !== $link_url;

		$image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
		$image_url = isset( $item['imageUrl'] ) ? (string) $item['imageUrl'] : '';

		$badge            = isset( $item['badge'] ) ? trim( (string) $item['badge'] ) : '';
		$bg_color         = isset( $item['backgroundColor'] ) ? trim( (string) $item['backgroundColor'] ) : '';
		$title_color      = isset( $item['titleColor'] ) ? trim( (string) $item['titleColor'] ) : '';
		$description_color = isset( $item['descriptionColor'] ) ? trim( (string) $item['descriptionColor'] ) : '';
		$link_color       = isset( $item['linkColor'] ) ? trim( (string) $item['linkColor'] ) : '';

		$is_template1 = 'template1' === $template;
		$is_template2 = 'template2' === $template;
		$is_template3 = 'template3' === $template;
		$is_template4 = 'template4' === $template;

		$card_vars = array();
		if ( '' !== $bg_color ) {
			$resolved = nextora_box_image_resolve_color( $bg_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-bg:' . esc_attr( $resolved );
			}
		}
		if ( '' !== $title_color ) {
			$resolved = nextora_box_image_resolve_color( $title_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-title-color:' . esc_attr( $resolved );
			}
		}
		if ( '' !== $description_color ) {
			$resolved = nextora_box_image_resolve_color( $description_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-desc-color:' . esc_attr( $resolved );
			}
		}
		if ( '' !== $link_color ) {
			$resolved = nextora_box_image_resolve_color( $link_color );
			if ( '' !== $resolved ) {
				$card_vars[] = '--nextora-box-image-item-link-color:' . esc_attr( $resolved );
			}
		}

		$card_style = '';
		if ( array() !== $card_vars ) {
			$card_style = ' style="' . implode( ';', $card_vars ) . '"';
		}

		$out  = $as_slide ? '<div class="swiper-slide">' : '';
		if ( $link_wrap ) {
			$link_class = $is_template1 ? ' nextora-box-image__card--template1' : ( $is_template2 ? ' nextora-box-image__card--template2' : ( $is_template3 ? ' nextora-box-image__card--template3' : ( $is_template4 ? ' nextora-box-image__card--template4' : '' ) ) );
			$out .= sprintf(
				'<a class="nextora-box-image__card nextora-box-image__card-link%1$s" href="%2$s"%3$s%4$s>',
				$link_class,
				esc_url( $link_url ),
				$card_style,
				'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
			);
		} elseif ( $is_template1 ) {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template1"' . $card_style . '>';
		} elseif ( $is_template2 ) {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template2"' . $card_style . '>';
		} elseif ( $is_template3 ) {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template3"' . $card_style . '>';
		} elseif ( $is_template4 ) {
			$out .= '<article class="nextora-box-image__card nextora-box-image__card--template4"' . $card_style . '>';
		} else {
			$out .= '<article class="nextora-box-image__card"' . $card_style . '>';
		}

		if ( $is_template1 ) {
			$out .= '<div class="nextora-box-image__card-inner">';
		}

		$out .= '<div class="nextora-box-image__image-wrap">';
		if ( '' !== $image_url ) {
			$url = esc_url( $image_url );
			if ( '' !== $url ) {
				$out .= sprintf(
					'<img class="nextora-box-image__card-image" src="%1$s" alt="" loading="lazy" decoding="async" />',
					$url,
				);
			}
		} elseif ( $image_id > 0 ) {
			$out .= wp_get_attachment_image(
				$image_id,
				'medium_large',
				false,
				array(
					'class'    => 'nextora-box-image__card-image',
					'loading'  => 'lazy',
					'decoding' => 'async',
					'alt'      => '',
				),
			);
		} else {
			$out .= sprintf(
				'<img class="nextora-box-image__card-image" src="%1$s" alt="" loading="lazy" decoding="async" />',
				esc_url( nextora_box_image_placeholder_url() ),
			);
		}

		if ( ( $is_template1 || $is_template3 ) && '' !== $badge ) {
			$out .= '<span class="nextora-box-image__badge">' . esc_html( $badge ) . '</span>';
		}

		$out .= '</div>';

		if ( $is_template1 ) {
			$out .= '<div class="nextora-box-image__card-body">';
		}

		if ( $is_template3 ) {
			$out .= '<div class="nextora-box-image__card-body">';
		}

		if ( $is_template3 ) {

		$out .= '<h4 class="nextora-box-image__title">' . esc_html( $title ) . '</h4>';

			$desc_text = trim( wp_strip_all_tags( $description ) );
			if ( '' !== $desc_text ) {
				$bullets = preg_split( '/\r\n|\n|\r/', $desc_text );
				if ( false === $bullets ) {
					$bullets = array();
				}
				$bullets = array_filter( $bullets, static fn( string $line ): bool => '' !== trim( $line ) );
				if ( array() !== $bullets ) {
					$out .= '<ul class="nextora-box-image__bullets">';
					foreach ( $bullets as $bullet ) {
						$bullet = trim( $bullet );
						$out .= '<li><svg class="nextora-box-image__bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg><span>' . esc_html( $bullet ) . '</span></li>';
					}
					$out .= '</ul>';
				}
			}

			if ( ! $link_wrap && $show_link && '' !== $link_label ) {
				$arrow = '<span class="nextora-box-image__link-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
				if ( '' !== $link_url ) {
					$out .= sprintf(
						'<a class="nextora-box-image__link nextora-box-image__link--template3" href="%1$s"%2$s>%3$s%4$s</a>',
						esc_url( $link_url ),
						'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
						esc_html( $link_label ),
						$arrow,
					);
				} else {
					$out .= sprintf(
						'<span class="nextora-box-image__link nextora-box-image__link--template3 nextora-box-image__link--static">%1$s%2$s</span>',
						esc_html( $link_label ),
						$arrow,
					);
				}
			}

			$out .= '</div>';
			$out .= $link_wrap ? '</a>' : '</article>';
			$out .= $as_slide ? '</div>' : '';

			return $out;
		}

		if ( $is_template4 ) {
			$out .= '<div class="nextora-box-image__card-body">';
			$step_num = sprintf( '%02d', $index + 1 );
			$out .= '<span class="nextora-box-image__step-number" aria-hidden="true">' . esc_html( $step_num ) . '</span>';
			$out .= '<h4 class="nextora-box-image__title">' . esc_html( $title ) . '</h4>';

			if ( '' !== trim( wp_strip_all_tags( $description ) ) ) {
				$out .= '<p class="nextora-box-image__description">' . esc_html( $description ) . '</p>';
			}

			if ( ! $link_wrap && $show_link && '' !== $link_label ) {
				$arrow = '<span class="nextora-box-image__link-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
				if ( '' !== $link_url ) {
					$out .= sprintf(
						'<a class="nextora-box-image__link nextora-box-image__link--template4" href="%1$s"%2$s><span>%3$s</span>%4$s</a>',
						esc_url( $link_url ),
						'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
						esc_html( $link_label ),
						$arrow,
					);
				} else {
					$out .= sprintf(
						'<span class="nextora-box-image__link nextora-box-image__link--template4 nextora-box-image__link--static"><span>%1$s</span>%2$s</span>',
						esc_html( $link_label ),
						$arrow,
					);
				}
			}

			$out .= '</div>';
			$out .= $link_wrap ? '</a>' : '</article>';
			$out .= $as_slide ? '</div>' : '';

			return $out;
		}

		if ( ! $is_template1 ) {
		$out .= '<div class="nextora-box-image__card-body">';
	}

	$out .= '<h4 class="nextora-box-image__title">' . esc_html( $title ) . '</h4>';

	if ( '' !== trim( wp_strip_all_tags( $description ) ) ) {
		$out .= '<p class="nextora-box-image__description">' . esc_html( $description ) . '</p>';
	}

	if ( ! $link_wrap && $show_link && '' !== $link_label ) {
		$arrow = '<span class="nextora-box-image__link-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
		if ( $is_template1 ) {
			$link_class = 'nextora-box-image__link wp-block-button__link';
		} elseif ( $is_template2 ) {
			$link_class = 'nextora-box-image__link nextora-box-image__link--template2';
		} else {
			$link_class = 'nextora-box-image__link';
		}
		if ( '' !== $link_url ) {
			$out .= sprintf(
				'<a class="%1$s" href="%2$s"%3$s>%4$s%5$s</a>',
				$link_class,
				esc_url( $link_url ),
				'_blank' === $link_target ? ' target="_blank" rel="noopener noreferrer"' : '',
				esc_html( $link_label ),
				$arrow,
			);
		} else {
			$out .= sprintf(
				'<span class="%1$s nextora-box-image__link--static">%2$s%3$s</span>',
				$link_class,
				esc_html( $link_label ),
				$arrow,
			);
		}
	}

	if ( ! $is_template1 ) {
		$out .= '</div>';
	}

	if ( $is_template1 ) {
		$out .= '</div>';
		$out .= '</div>';
	}

	$out .= $link_wrap ? '</a>' : '</article>';
	$out .= $as_slide ? '</div>' : '';

	return $out;
}
}

/** @var list<array<string, mixed>> $items */
$items = array();
if ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) ) {
	foreach ( $attributes['items'] as $raw_item ) {
		if ( ! is_array( $raw_item ) ) {
			continue;
		}
		$normalized = nextora_box_image_normalize_item( $raw_item );
		if ( '' !== trim( (string) $normalized['title'] ) ) {
			$items[] = $normalized;
		}
	}
}

if ( array() === $items ) {
	return;
}

$items = array_values( (array) apply_filters( 'nextora_box_image_items', $items, $attributes ) );

$layout_mode = isset( $attributes['layoutMode'] ) ? (string) $attributes['layoutMode'] : 'slider';
if ( ! in_array( $layout_mode, array( 'slider', 'grid' ), true ) ) {
	$layout_mode = 'slider';
}

$template = isset( $attributes['template'] ) ? (string) $attributes['template'] : 'default';
if ( ! in_array( $template, array( 'default', 'template1', 'template2', 'template3', 'template4' ), true ) ) {
	$template = 'default';
}

$content_max = isset( $attributes['contentMaxWidth'] ) ? trim( (string) $attributes['contentMaxWidth'] ) : '';
$grid_cols   = isset( $attributes['gridColumns'] ) ? max( 1, min( 6, (int) $attributes['gridColumns'] ) ) : 4;
$grid_cols_tablet  = isset( $attributes['gridColumnsTablet'] ) ? max( 1, min( 4, (int) $attributes['gridColumnsTablet'] ) ) : 2;
$grid_cols_mobile  = isset( $attributes['gridColumnsMobile'] ) ? max( 1, min( 2, (int) $attributes['gridColumnsMobile'] ) ) : 1;
$grid_min    = isset( $attributes['gridMinWidth'] ) ? max( 480, min( 1200, (int) $attributes['gridMinWidth'] ) ) : 981;
$grid_no_carousel = ! empty( $attributes['disableResponsiveCarousel'] );
$card_min_h  = isset( $attributes['cardMinHeight'] ) ? max( 0, min( 600, (int) $attributes['cardMinHeight'] ) ) : 240;
$card_border = isset( $attributes['cardBorderWidth'] ) ? max( 0, min( 8, (int) $attributes['cardBorderWidth'] ) ) : 0;
$card_radius = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 32, (int) $attributes['cardBorderRadius'] ) ) : 8;
$aspect      = isset( $attributes['imageAspectRatio'] ) ? (string) $attributes['imageAspectRatio'] : '3/2';
$image_fit   = isset( $attributes['imageFit'] ) ? (string) $attributes['imageFit'] : 'cover';

$spv_mobile  = round( isset( $attributes['slidesPerViewMobile'] ) ? (float) $attributes['slidesPerViewMobile'] : 1.15, 3 );
$spv_tablet  = round( isset( $attributes['slidesPerViewTablet'] ) ? (float) $attributes['slidesPerViewTablet'] : 2.0, 3 );
$spv_desktop = round( isset( $attributes['slidesPerView'] ) ? (float) $attributes['slidesPerView'] : 4.0, 3 );
$space       = isset( $attributes['spaceBetween'] ) ? max( 0, min( 60, (int) $attributes['spaceBetween'] ) ) : 18;
$speed       = isset( $attributes['speed'] ) ? max( 100, min( 2000, (int) $attributes['speed'] ) ) : 500;
$loop        = ! empty( $attributes['loop'] );
$autoplay    = ! empty( $attributes['autoplay'] );
$autoplay_d  = isset( $attributes['autoplayDelay'] ) ? max( 1000, min( 10000, (int) $attributes['autoplayDelay'] ) ) : 4000;
$pause_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_pag    = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$show_arrows = ! empty( $attributes['showArrows'] );
$free_mode   = ! empty( $attributes['freeMode'] );
$grab_cursor = ! isset( $attributes['grabCursor'] ) || (bool) $attributes['grabCursor'];

$enable_scroll = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];
$scroll_style  = isset( $attributes['scrollAnimationStyle'] ) ? (string) $attributes['scrollAnimationStyle'] : 'default';
if ( ! in_array( $scroll_style, array( 'default', 'sequential' ), true ) ) {
	$scroll_style = 'default';
}
$enable_hover  = ! isset( $attributes['enableCardHover'] ) || (bool) $attributes['enableCardHover'];

$slide_count = count( $items );
$use_loop    = $loop && $slide_count > 1;

$swiper_opts = array(
	'loop'                 => $use_loop,
	'autoplay'             => $autoplay,
	'autoplayDelay'        => $autoplay_d,
	'pauseOnHover'         => $pause_hover,
	'showPagination'       => $show_pag && $slide_count > 1,
	'showArrows'           => $show_arrows && $slide_count > 1,
	'spaceBetween'         => $space,
	'speed'                => $speed,
	'freeMode'             => $free_mode,
	'grabCursor'           => $grab_cursor,
	'slidesPerView'        => $spv_mobile,
	'slidesPerViewTablet'  => $spv_tablet,
	'slidesPerViewDesktop' => $spv_desktop,
);

$swiper_opts = (array) apply_filters( 'nextora_box_image_swiper_options', $swiper_opts, $attributes, $items );

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$color_keys = array(
	'cardBorderColor'       => '--nextora-box-image-card-border-color',
	'cardBackgroundColor'   => '--nextora-box-image-card-bg',
	'cardHoverBackgroundColor' => '--nextora-box-image-card-hover-bg',
	'cardTitleColor'        => '--nextora-box-image-card-title-color',
	'cardDescriptionColor'  => '--nextora-box-image-card-desc-color',
	'descriptionHoverColor' => '--nextora-box-image-card-desc-hover-color',
	'linkColor'             => '--nextora-box-image-link-color',
	'linkHoverColor'        => '--nextora-box-image-link-hover-color',
	'paginationColor'       => '--nextora-box-image-dot-color',
	'paginationActiveColor' => '--nextora-box-image-dot-active',
	'arrowColor'            => '--nextora-box-image-arrow-color',
	'badgeBackgroundColor'  => '--nextora-box-image-badge-bg',
	'badgeTextColor'        => '--nextora-box-image-badge-text',
	'bulletIconColor'       => '--nextora-box-image-bullet-icon-color',
);

$css_vars = array(
	'--nextora-box-image-cols'              => (string) $grid_cols,
	'--nextora-box-image-card-min-height'   => $card_min_h . 'px',
	'--nextora-box-image-card-border-width' => $card_border . 'px',
	'--nextora-box-image-card-radius'       => $card_radius . 'px',
	'--nextora-box-image-aspect-ratio'      => $aspect,
	'--nextora-box-image-fit'               => $image_fit,
);

if ( '' !== $content_max ) {
	$css_vars['--nextora-box-image-max-width'] = $content_max;
}

$css_vars['--nextora-box-image-gap'] = $space . 'px';

foreach ( $color_keys as $attr_key => $var_name ) {
	$raw = isset( $attributes[ $attr_key ] ) ? (string) $attributes[ $attr_key ] : '';
	if ( 'currentColor' === $raw ) {
		continue;
	}
	$resolved = nextora_box_image_resolve_color( $raw );
	if ( '' !== $resolved && 'currentColor' !== $resolved ) {
		$css_vars[ $var_name ] = $resolved;
	}
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array(
	'nextora-box-image',
	'nextora-box-image--loading',
	'nextora-box-image--layout-' . sanitize_html_class( $layout_mode ),
);
if ( 'default' !== $template ) {
	$wrapper_classes[] = 'nextora-box-image--template-' . sanitize_html_class( $template );
}
if ( $enable_scroll ) {
	$wrapper_classes[] = 'nextora-box-image--reveal-pending';
}
if ( ! $enable_hover ) {
	$wrapper_classes[] = 'nextora-box-image--no-card-hover';
}

$wrapper_classes = (array) apply_filters(
	'nextora_box_image_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'style' => $inline_style,
);
if ( $enable_scroll ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
	$wrapper_extra['data-nextora-scroll-reveal-style'] = $scroll_style;
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_box_image_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

nextora_box_image_enqueue_view_script();

$show_bg_grid = ! isset( $attributes['showBackgroundGrid'] ) || (bool) $attributes['showBackgroundGrid'];
$step_gap     = isset( $attributes['stepVerticalGap'] ) ? max( 300, min( 700, (int) $attributes['stepVerticalGap'] ) ) : 480;

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-box-image__inner">
	<?php if ( 'template4' === $template ) :
		$t4_height = nextora_box_image_calculate_template4_height( $slide_count, $step_gap );
		$t4_svg_path = nextora_box_image_get_template4_svg_path( $slide_count, $step_gap );
	?>
		<div class="nextora-box-image__steps-wrapper">
			<?php if ( $show_bg_grid ) : ?>
				<div class="nextora-box-image__steps-bg-grid" aria-hidden="true"></div>
			<?php endif; ?>
			<div class="nextora-box-image__steps-stage" style="--nextora-steps-height: <?php echo esc_attr( (string) $t4_height ); ?>px;">
				<?php if ( $slide_count > 1 ) :
					$mask_id = 'nextora-curve-mask-' . wp_unique_id();
				?>
					<svg class="nextora-box-image__steps-curve" viewBox="0 0 1000 <?php echo esc_attr( (string) $t4_height ); ?>" preserveAspectRatio="none" aria-hidden="true">
						<defs>
							<mask id="<?php echo esc_attr( $mask_id ); ?>" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="<?php echo esc_attr( (string) $t4_height ); ?>">
								<path
									d="<?php echo esc_attr( $t4_svg_path ); ?>"
									class="nextora-box-image__steps-mask-path"
									stroke="white"
									stroke-width="24"
									fill="none"
									stroke-linecap="round"
									vector-effect="non-scaling-stroke"
								/>
							</mask>
						</defs>
						<path
							d="<?php echo esc_attr( $t4_svg_path ); ?>"
							class="nextora-box-image__steps-curve-path"
							mask="url(#<?php echo esc_attr( $mask_id ); ?>)"
							stroke="currentColor"
							stroke-width="2"
							stroke-dasharray="8 6"
							fill="none"
							stroke-linecap="round"
							vector-effect="non-scaling-stroke"
						/>
					</svg>
				<?php endif; ?>
				<?php
				foreach ( $items as $idx => $item ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
					echo nextora_box_image_render_template4_card( $item, (int) $idx, $step_gap );
				}
				?>
			</div>
		</div>
	<?php else : ?>
		<div
			class="nextora-box-image__carousel-root"
			data-layout-mode="<?php echo esc_attr( $layout_mode ); ?>"
			data-grid-min-width="<?php echo esc_attr( (string) $grid_min ); ?>"
			data-grid-columns="<?php echo esc_attr( (string) $grid_cols ); ?>"
			data-grid-columns-tablet="<?php echo esc_attr( (string) $grid_cols_tablet ); ?>"
			data-grid-columns-mobile="<?php echo esc_attr( (string) $grid_cols_mobile ); ?>"
			data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
			<?php if ( $grid_no_carousel ) : ?>
			data-disable-responsive-carousel="1"
			<?php endif; ?>
		>
			<div class="swiper nextora-box-image__swiper">
				<div class="swiper-wrapper">
				<?php
				foreach ( $items as $idx => $item ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built with esc_*.
					echo nextora_box_image_render_card( $item, true, $template, (int) $idx );
				}
				?>
				</div>
			</div>
			<?php if ( $show_arrows && $slide_count > 1 ) : ?>
				<button type="button" class="nextora-box-image__arrow nextora-box-image__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
				</button>
				<button type="button" class="nextora-box-image__arrow nextora-box-image__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
				</button>
			<?php endif; ?>
			<?php if ( $show_pag && $slide_count > 1 ) : ?>
				<div class="swiper-pagination nextora-box-image__pagination"></div>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	</div>
</div>
