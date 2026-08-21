export interface SpacingSides {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
}

export function resolveSpacingCSSValue(value: string | undefined): string {
	if (!value) {
		return '';
	}

	const trimmed = value.trim();
	if ('' === trimmed || '0' === trimmed) {
		return '';
	}

	const presetMatch = trimmed.match(/^var:preset\|spacing\|([a-z0-9_-]+)$/i);
	if (presetMatch) {
		return `var(--wp--preset--spacing--${presetMatch[1].toLowerCase()})`;
	}

	if (/^(\d+\.?\d*)(px|rem|em|%|vw|vh)$/i.test(trimmed)) {
		return trimmed;
	}

	if (/^var\(--[a-z0-9-]+\)$/i.test(trimmed)) {
		return trimmed;
	}

	return '';
}

export function normalizeCardPadding(raw: unknown): SpacingSides {
	if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
		const obj = raw as Record<string, unknown>;
		return {
			top: typeof obj.top === 'string' ? obj.top : undefined,
			right: typeof obj.right === 'string' ? obj.right : undefined,
			bottom: typeof obj.bottom === 'string' ? obj.bottom : undefined,
			left: typeof obj.left === 'string' ? obj.left : undefined,
		};
	}

	if (typeof raw === 'string' && raw.trim() !== '') {
		const parts = raw.trim().split(/\s+/);
		if (parts.length === 1) {
			return { top: parts[0], right: parts[0], bottom: parts[0], left: parts[0] };
		}
		if (parts.length === 2) {
			return { top: parts[0], right: parts[1], bottom: parts[0], left: parts[1] };
		}
		if (parts.length >= 4) {
			return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[3] };
		}
	}

	return {};
}

export function cardPaddingToCss(raw: unknown): string {
	const padding = normalizeCardPadding(raw);
	const top = resolveSpacingCSSValue(padding.top);
	const right = resolveSpacingCSSValue(padding.right) || top;
	const bottom = resolveSpacingCSSValue(padding.bottom) || top;
	const left = resolveSpacingCSSValue(padding.left) || right || top;

	if (!top && !right && !bottom && !left) {
		return '';
	}

	return `${top || '0'} ${right || top || '0'} ${bottom || top || '0'} ${left || right || top || '0'}`;
}

export function cardPaddingToStyleVars(raw: unknown): Record<string, string> {
	const padding = normalizeCardPadding(raw);
	const vars: Record<string, string> = {};

	const sides: Array<keyof SpacingSides> = ['top', 'right', 'bottom', 'left'];
	for (const side of sides) {
		const resolved = resolveSpacingCSSValue(padding[side]);
		if (resolved) {
			vars[`--nextora-box-icon-card-padding-${side}`] = resolved;
		}
	}

	const shorthand = cardPaddingToCss(raw);
	if (shorthand) {
		vars['--nextora-box-icon-card-padding'] = shorthand;
	}

	return vars;
}
