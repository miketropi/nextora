<?php

/**
 * Shared button markup builder for nextora/advanced-button-button.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/../advanced-icon/lucide.php';

if ( ! function_exists( 'nextora_advanced_button_button_color_attr' ) ) {
	/**
	 * Read a scoped colour attribute with legacy fallback.
	 *
	 * @param array<string, mixed> $attributes Block attributes.
	 * @param string               $key        Primary attribute key.
	 * @param string               $legacy_key Legacy attribute key.
	 */
	function nextora_advanced_button_button_color_attr(
		array $attributes,
		string $key,
		string $legacy_key = '',
	): string {
		if ( isset( $attributes[ $key ] ) && '' !== (string) $attributes[ $key ] ) {
			return trim( (string) $attributes[ $key ] );
		}

		if ( '' !== $legacy_key && isset( $attributes[ $legacy_key ] ) ) {
			return trim( (string) $attributes[ $legacy_key ] );
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_advanced_button_button_parts' ) ) {
	/**
	 * Build classes, CSS variables, and inner markup for one button.
	 *
	 * @param array<string, mixed> $attributes Block attributes.
	 *
	 * @return array{
	 *     classes: string,
	 *     style: string,
	 *     inner_html: string,
	 *     href: string,
	 *     target: string,
	 *     rel: string,
	 *     aria_label: string,
	 *     opens_modal: bool,
	 *     modal_id: string,
	 *     is_click_event: bool,
	 *     click_event_id: string,
	 *     click_event_script: string
	 * }
	 */
	function nextora_advanced_button_button_parts( array $attributes ): array {
		$text                   = isset( $attributes['text'] ) ? (string) $attributes['text'] : 'Button';
		$url                    = isset( $attributes['url'] ) ? trim( (string) $attributes['url'] ) : '#';
		$link_target            = isset( $attributes['linkTarget'] ) ? (string) $attributes['linkTarget'] : '_self';
		$rel                    = isset( $attributes['rel'] ) ? trim( (string) $attributes['rel'] ) : '';
		$link_type              = isset( $attributes['linkType'] ) ? (string) $attributes['linkType'] : 'url';
		$modal_id               = isset( $attributes['modalId'] ) ? trim( (string) $attributes['modalId'] ) : '';
		$click_event_id         = isset( $attributes['clickEventId'] ) ? trim( (string) $attributes['clickEventId'] ) : '';
		$click_event_script     = isset( $attributes['clickEventScript'] ) ? (string) $attributes['clickEventScript'] : '';
		$button_style           = isset( $attributes['buttonStyle'] ) ? (string) $attributes['buttonStyle'] : 'fill';
		$border_radius          = isset( $attributes['borderRadius'] ) ? max( 0, (int) $attributes['borderRadius'] ) : 50;
		$icon_position          = isset( $attributes['iconPosition'] ) ? (string) $attributes['iconPosition'] : 'left';
		$icon_source            = isset( $attributes['iconSource'] ) ? (string) $attributes['iconSource'] : 'theme';
		$icon_name              = isset( $attributes['iconName'] ) ? sanitize_key( (string) $attributes['iconName'] ) : 'arrow-right';
		$upload_url             = isset( $attributes['uploadedIconUrl'] ) ? (string) $attributes['uploadedIconUrl'] : '';
		$icon_size              = isset( $attributes['iconSize'] ) ? max( 1, (int) $attributes['iconSize'] ) : 20;
		$stroke_w               = isset( $attributes['strokeWidth'] ) ? (float) $attributes['strokeWidth'] : 2.0;
		$icon_style             = isset( $attributes['iconStyle'] ) ? (string) $attributes['iconStyle'] : 'default';
		$icon_border_radius     = isset( $attributes['iconBorderRadius'] ) ? max( 0, (int) $attributes['iconBorderRadius'] ) : 8;
		$background_color       = nextora_advanced_button_button_color_attr( $attributes, 'buttonBackgroundColor', 'backgroundColor' );
		$text_color             = nextora_advanced_button_button_color_attr( $attributes, 'buttonTextColor', 'textColor' );
		$border_color           = nextora_advanced_button_button_color_attr( $attributes, 'buttonBorderColor', 'borderColor' );
		$icon_color             = isset( $attributes['iconColor'] ) ? (string) $attributes['iconColor'] : '';
		$icon_background_color  = isset( $attributes['iconBackgroundColor'] ) ? (string) $attributes['iconBackgroundColor'] : '';
		$hover_effect           = isset( $attributes['hoverEffect'] ) ? (string) $attributes['hoverEffect'] : 'opacity';
		$hover_background_color = isset( $attributes['hoverBackgroundColor'] ) ? (string) $attributes['hoverBackgroundColor'] : '';
		$hover_text_color       = isset( $attributes['hoverTextColor'] ) ? (string) $attributes['hoverTextColor'] : '';
		$hover_border_color     = isset( $attributes['hoverBorderColor'] ) ? (string) $attributes['hoverBorderColor'] : '';
		$hover_icon_color       = isset( $attributes['hoverIconColor'] ) ? (string) $attributes['hoverIconColor'] : '';
		$aria_label             = isset( $attributes['ariaLabel'] ) ? trim( (string) $attributes['ariaLabel'] ) : '';
		$show_icon              = ! isset( $attributes['showIcon'] ) || false !== $attributes['showIcon'];

		if ( '' === $url ) {
			$url = '#';
		}

		$allowed_button_styles = array( 'fill', 'outline' );
		if ( ! in_array( $button_style, $allowed_button_styles, true ) ) {
			$button_style = 'fill';
		}

		$allowed_positions = array( 'left', 'right', 'only' );
		if ( ! in_array( $icon_position, $allowed_positions, true ) ) {
			$icon_position = 'left';
		}

		$allowed_icon_styles = array( 'default', 'stacked', 'framed' );
		if ( ! in_array( $icon_style, $allowed_icon_styles, true ) ) {
			$icon_style = 'default';
		}

		$allowed_hover_effects = array( 'opacity', 'none', 'color-swap', 'lift' );
		if ( ! in_array( $hover_effect, $allowed_hover_effects, true ) ) {
			$hover_effect = 'opacity';
		}

		$opens_modal = 'modal' === $link_type;
		$is_click_event = 'click-event' === $link_type;
		if ( $opens_modal ) {
			$modal_id = preg_replace( '/[^a-zA-Z0-9_-]/', '', $modal_id ) ?? '';
			if ( '' === $modal_id ) {
				$modal_id = 'nextora-advanced-button-modal';
			}
		}
		if ( $is_click_event ) {
			$click_event_id = preg_replace( '/[^a-zA-Z0-9_-]/', '', $click_event_id ) ?? '';
			if ( '' === $click_event_id ) {
				$click_event_id = 'nextora-advanced-button-event';
			}
		}

		$is_icon_only = $show_icon && 'only' === $icon_position;
		$show_label   = ! $is_icon_only && '' !== trim( $text );

		$resolved_icon_color = '' !== $icon_color
			? nextora_icon_resolve_color( $icon_color )
			: ( '' !== $text_color ? nextora_icon_resolve_color( $text_color ) : 'currentColor' );

		$icon_markup = '';

		if ( $show_icon ) {
			if ( 'upload' === $icon_source && '' !== $upload_url ) {
				$icon_markup = sprintf(
					'<img src="%1$s" width="%2$d" height="%2$d" alt="" class="nextora-advanced-button__img" aria-hidden="true" loading="lazy" decoding="async" />',
					esc_url( $upload_url ),
					$icon_size,
				);
			} elseif ( 'theme' === $icon_source ) {
				$icon_markup = nextora_get_lucide_svg( $icon_name, $icon_size, 'currentColor', $stroke_w, '' );
			}
		}

		$has_surface = in_array( $icon_style, array( 'stacked', 'framed' ), true );
		if ( '' !== $icon_markup && $has_surface ) {
			$icon_markup = sprintf(
				'<span class="nextora-advanced-button__icon-surface">%s</span>',
				$icon_markup,
			);
		}

		$icon_html = '';
		if ( '' !== $icon_markup ) {
			$icon_html = sprintf(
				'<span class="nextora-advanced-button__icon nextora-advanced-button__icon--%1$s" aria-hidden="true">%2$s</span>',
				esc_attr( $icon_position ),
				$icon_markup,
			);
		}

		$label_html = $show_label
			? sprintf(
				'<span class="nextora-advanced-button__label">%s</span>',
				esc_html( $text ),
			)
			: '';

		$button_inner = '';
		if ( ! $show_icon || $is_icon_only ) {
			$button_inner = $show_icon ? $icon_html : $label_html;
		} elseif ( 'right' === $icon_position ) {
			$button_inner = $label_html . $icon_html;
		} else {
			$button_inner = $icon_html . $label_html;
		}

		$link_rel = $rel;
		if ( '_blank' === $link_target ) {
			$link_rel = trim( $link_rel . ' noopener noreferrer' );
		}

		$effective_aria = '';
		if ( $is_icon_only || ! $show_label ) {
			$effective_aria = '' !== $aria_label ? $aria_label : trim( $text );
		}

		$style_vars = array(
			sprintf( '--nextora-advanced-button-radius:%dpx;', $border_radius ),
			'--nextora-advanced-button-gap:0.5rem;',
			sprintf( '--nextora-advanced-button-icon-size:%dpx;', $icon_size ),
		);

		if ( $show_icon && $has_surface ) {
			$style_vars[] = sprintf( '--nextora-advanced-button-icon-radius:%dpx;', $icon_border_radius );
		}

		if ( '' !== $background_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-bg:%s;',
				esc_attr( nextora_icon_resolve_color( $background_color ) ),
			);
		}

		if ( '' !== $text_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-text:%s;',
				esc_attr( nextora_icon_resolve_color( $text_color ) ),
			);
		}

		if ( '' !== $border_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-border:%s;',
				esc_attr( nextora_icon_resolve_color( $border_color ) ),
			);
		}

		if ( $show_icon && 'stacked' === $icon_style && '' !== $icon_background_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-icon-bg:%s;',
				esc_attr( nextora_icon_resolve_color( $icon_background_color ) ),
			);
		}

	if ( $show_icon && 'framed' === $icon_style && '' !== $border_color ) {
		$style_vars[] = sprintf(
			'--nextora-advanced-button-icon-border:%s;',
			esc_attr( nextora_icon_resolve_color( $border_color ) ),
		);
	}

	if ( $show_icon && '' !== $icon_color ) {
		$style_vars[] = sprintf(
			'--nextora-advanced-button-icon-color:%s;',
			esc_attr( nextora_icon_resolve_color( $icon_color ) ),
		);
	}

	if ( '' !== $hover_background_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-hover-bg:%s;',
				esc_attr( nextora_icon_resolve_color( $hover_background_color ) ),
			);
		}

		if ( '' !== $hover_text_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-hover-text:%s;',
				esc_attr( nextora_icon_resolve_color( $hover_text_color ) ),
			);
		}

		if ( '' !== $hover_border_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-hover-border:%s;',
				esc_attr( nextora_icon_resolve_color( $hover_border_color ) ),
			);
		}

		if ( $show_icon && '' !== $hover_icon_color ) {
			$style_vars[] = sprintf(
				'--nextora-advanced-button-hover-icon-color:%s;',
				esc_attr( nextora_icon_resolve_color( $hover_icon_color ) ),
			);
		}

		$item_classes = array(
			'nextora-advanced-button-button',
			'nextora-advanced-button-button--style-' . sanitize_html_class( $button_style ),
			'nextora-advanced-button-button--icon-' . sanitize_html_class( $icon_style ),
			'nextora-advanced-button-button--hover-' . sanitize_html_class( $hover_effect ),
		);

		if ( ! $show_icon ) {
			$item_classes[] = 'nextora-advanced-button-button--no-icon';
		}

		if ( $opens_modal ) {
			$item_classes[] = 'nextora-advanced-button-button--opens-modal';
		}
		if ( $is_click_event ) {
			$item_classes[] = 'nextora-advanced-button-button--click-event';
		}

		return array(
			'classes'            => implode( ' ', $item_classes ),
			'style'              => implode( ' ', $style_vars ),
			'inner_html'         => $button_inner,
			'href'               => $url,
			'target'             => in_array( $link_target, array( '_self', '_blank' ), true ) ? $link_target : '_self',
			'rel'                => trim( $link_rel ),
			'aria_label'         => $effective_aria,
			'opens_modal'        => $opens_modal,
			'modal_id'           => $modal_id,
			'is_click_event'     => $is_click_event,
			'click_event_id'     => $click_event_id,
			'click_event_script' => $click_event_script,
		);
	}
}
