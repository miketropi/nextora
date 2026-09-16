import type { EventTecColorAttribute } from './types';

/** Attribute key → CSS custom property on the block root. */
export const EVENT_COLOR_ATTR_TO_VAR: Record<EventTecColorAttribute, string> = {
	cardBackgroundColor: '--nextora-event-card-bg',
	cardBorderColor: '--nextora-event-card-border-color',
	dateBackgroundColor: '--nextora-event-date-bg',
	dateDayColor: '--nextora-event-date-day-color',
	dateAccentColor: '--nextora-event-date-month-color',
	titleColor: '--nextora-event-title-color',
	metaColor: '--nextora-event-meta-color',
	metaIconColor: '--nextora-event-meta-icon-color',
	registerBackgroundColor: '--nextora-event-register-bg',
	registerTextColor: '--nextora-event-register-text-color',
	registerBorderColor: '--nextora-event-register-border-color',
	registerHoverTextColor: '--nextora-event-register-hover-text-color',
	registerHoverBackgroundColor: '--nextora-event-register-hover-bg',
	registerHoverBorderColor: '--nextora-event-register-hover-border-color',
	paginationColor: '--nextora-event-dot-color',
	paginationActiveColor: '--nextora-event-dot-active',
	edgeFadeColor: '--nextora-event-edge-fade-color',
};

/**
 * Resolve stored slug, preset string, or hex/rgb for CSS variable assignment.
 */
export function resolveEventColorForCss(raw: string): string {
	const trimmed = raw.trim();
	if ( '' === trimmed ) {
		return '';
	}

	if ( trimmed === 'transparent' ) {
		return 'transparent';
	}

	if ( trimmed.startsWith( 'var(' ) || trimmed.startsWith( '#' ) || trimmed.startsWith( 'rgb' ) || trimmed.startsWith( 'hsl' ) ) {
		return trimmed;
	}

	const presetMatch = trimmed.match( /^var:preset\|color\|([a-z0-9_-]+)$/i );
	if ( presetMatch ) {
		const slug = presetMatch[1].toLowerCase();
		if ( slug === 'transparent' ) {
			return 'transparent';
		}
		return `var(--wp--preset--color--${slug})`;
	}

	if ( /^[a-z0-9-]+$/i.test( trimmed ) ) {
		const slug = trimmed.toLowerCase();
		if ( slug === 'transparent' ) {
			return 'transparent';
		}
		return `var(--wp--preset--color--${slug})`;
	}

	return trimmed;
}

export function buildEventColorStyleVars(
	attrs: Partial<Record<EventTecColorAttribute, string>>,
): Record<string, string> {
	const vars: Record<string, string> = {};

	for ( const [attrKey, cssVar] of Object.entries( EVENT_COLOR_ATTR_TO_VAR ) ) {
		const raw = attrs[attrKey as EventTecColorAttribute];
		if ( typeof raw !== 'string' || '' === raw.trim() ) {
			continue;
		}
		const resolved = resolveEventColorForCss( raw );
		if ( '' !== resolved ) {
			vars[cssVar] = resolved;
		}
	}

	return vars;
}

