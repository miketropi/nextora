import type { CSSProperties } from 'react';

/**
 * Resolves stored color attribute into standard Gutenberg classes and inline style.
 * Adheres to Section 2.C & 2.E of gutenberg-block-standard.
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

	// 1. Transparent keyword or zero-alpha custom color
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

	// 2. Custom hex / rgb / hsl / color-mix
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

	// 3. Preset slug resolution
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

/**
 * Normalizes font-size shorthand string to standard Gutenberg has-[slug]-font-size class.
 */
export function getGutenbergFontSizeClass(size: string | undefined): string {
	if (!size) {
		return '';
	}
	const map: Record<string, string> = {
		sm: 'small',
		small: 'small',
		base: 'base',
		normal: 'base',
		md: 'medium',
		medium: 'medium',
		'medium-plus': 'medium-plus',
		lg: 'large',
		large: 'large',
		xl: 'x-large',
		'x-large': 'x-large',
		'2xl': 'xx-large',
		'xx-large': 'xx-large',
	};
	const normalized = map[size.toLowerCase()] || size.toLowerCase();
	return `has-${normalized}-font-size`;
}

/**
 * Resolves a color attribute into a valid CSS expression for CSS variables.
 */
export function resolveColorToCSSValue(color: string | undefined): string {
	if (!color) {
		return '';
	}
	const trimmed = color.trim();
	if (
		trimmed === 'transparent' ||
		trimmed === 'rgba(0, 0, 0, 0)' ||
		trimmed === 'rgba(0,0,0,0)' ||
		/^#[0-9a-f]{6}00$/i.test(trimmed) ||
		/^#[0-9a-f]{3}0$/i.test(trimmed)
	) {
		return 'transparent';
	}
	if (
		/^#([A-Fa-f0-9]{3,8})$/.test(trimmed) ||
		trimmed.startsWith('rgb') ||
		trimmed.startsWith('hsl') ||
		trimmed.startsWith('color-mix')
	) {
		return trimmed;
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
		return 'transparent';
	}
	return `var(--wp--preset--color--${slug})`;
}

export { getGutenbergColorProps as getColorProps };
