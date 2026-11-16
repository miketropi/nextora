import type { CSSProperties } from 'react';

/**
 * Resolves stored color attribute (preset slug or custom color) into standard Gutenberg classes and inline styles.
 */
export function getGutenbergColorProps(
	color: string | undefined,
	type: 'color' | 'background' | 'border' = 'color',
): { className: string; style: CSSProperties } {
	if (!color || color === 'currentColor' || color === 'inherit') {
		return { className: '', style: {} };
	}

	const trimmed = color.trim();
	if (!trimmed) {
		return { className: '', style: {} };
	}

	if (
		trimmed === 'transparent' ||
		trimmed === 'rgba(0, 0, 0, 0)' ||
		trimmed === 'rgba(0,0,0,0)' ||
		/^#[0-9a-f]{6}00$/i.test(trimmed) ||
		/^#[0-9a-f]{3}0$/i.test(trimmed)
	) {
		if (type === 'border') {
			return { className: '', style: { borderColor: 'transparent' } };
		}
		if (type === 'background') {
			return {
				className: 'has-background has-transparent-background-color',
				style: { backgroundColor: 'transparent' },
			};
		}
		return {
			className: 'has-text-color has-transparent-color',
			style: { color: 'transparent' },
		};
	}

	if (
		/^#([A-Fa-f0-9]{3,8})$/.test(trimmed) ||
		trimmed.startsWith('rgb') ||
		trimmed.startsWith('hsl') ||
		trimmed.startsWith('color-mix')
	) {
		if (type === 'border') {
			return { className: '', style: { borderColor: trimmed } };
		}
		return {
			className: type === 'background' ? 'has-background' : 'has-text-color',
			style: type === 'background' ? { backgroundColor: trimmed } : { color: trimmed },
		};
	}

	let slug = '';
	const varMatch = trimmed.match(/^var\(--wp--preset--color--([a-z0-9-]+)/);
	if (varMatch) {
		slug = varMatch[1].toLowerCase();
	} else {
		const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)/i);
		if (presetMatch) {
			slug = presetMatch[1].toLowerCase();
		} else {
			slug = trimmed.toLowerCase();
		}
	}

	if (slug === 'transparent') {
		if (type === 'border') {
			return { className: '', style: { borderColor: 'transparent' } };
		}
		if (type === 'background') {
			return {
				className: 'has-background has-transparent-background-color',
				style: { backgroundColor: 'transparent' },
			};
		}
		return {
			className: 'has-text-color has-transparent-color',
			style: { color: 'transparent' },
		};
	}

	if (type === 'border') {
		return {
			className: '',
			style: { borderColor: `var(--wp--preset--color--${slug})` },
		};
	}

	return {
		className:
			type === 'background'
				? `has-background has-${slug}-background-color`
				: `has-text-color has-${slug}-color`,
		style: {},
	};
}

export { getGutenbergColorProps as getColorProps };
