export function resolveFontFamily(raw: string | undefined): string | undefined {
	const value = (raw ?? '').trim();
	if (!value) {
		return undefined;
	}
	if (/^[a-z0-9-]+$/.test(value)) {
		return `var(--wp--preset--font-family--${value})`;
	}
	return value;
}

export function buildHeadingFontFamilyVar(
	headingFontFamily: string | undefined,
): Record<string, string> {
	const resolved = resolveFontFamily(headingFontFamily);
	if (!resolved) {
		return {};
	}
	return {
		'--nextora-box-image-heading-font-family': resolved,
	};
}
