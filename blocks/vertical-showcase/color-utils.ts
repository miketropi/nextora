import type { CSSProperties } from 'react';

/**
 * Resolves stored color attribute (preset slug or custom color) into standard Gutenberg classes and inline styles.
 */
export function getGutenbergColorProps(
	color: string | undefined,
	type: 'color' | 'background' = 'color',
): { className: string; style: CSSProperties } {
	if (!color || color === 'currentColor' || color === 'inherit') {
		return { className: '', style: {} };
	}

	const trimmed = color.trim();
	if (
		/^#([A-Fa-f0-9]{3,8})$/.test(trimmed) ||
		trimmed.startsWith('rgb') ||
		trimmed.startsWith('hsl') ||
		trimmed.startsWith('color-mix')
	) {
		return {
			className: type === 'background' ? 'has-background' : 'has-text-color',
			style: type === 'background' ? { backgroundColor: trimmed } : { color: trimmed },
		};
	}

	const varMatch = trimmed.match(/^var\(--wp--preset--color--([a-z0-9-]+)/);
	if (varMatch) {
		const slug = varMatch[1];
		return {
			className:
				type === 'background'
					? `has-background has-${slug}-background-color`
					: `has-text-color has-${slug}-color`,
			style: {},
		};
	}

	const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)/i);
	if (presetMatch) {
		const slug = presetMatch[1].toLowerCase();
		return {
			className:
				type === 'background'
					? `has-background has-${slug}-background-color`
					: `has-text-color has-${slug}-color`,
			style: {},
		};
	}

	const slug = trimmed.toLowerCase();
	return {
		className:
			type === 'background'
				? `has-background has-${slug}-background-color`
				: `has-text-color has-${slug}-color`,
		style: {},
	};
}

export { getGutenbergColorProps as getColorProps };
