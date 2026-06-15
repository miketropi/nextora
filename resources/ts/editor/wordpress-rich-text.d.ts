declare module '@wordpress/rich-text' {
	export interface RichTextValue {
		text: string;
		formats?: unknown;
		replacements?: unknown;
	}

	export function registerFormatType(
		name: string,
		settings: {
			title: string;
			tagName: string;
			className?: string;
			attributes?: Record<string, string>;
			edit?: (props: unknown) => JSX.Element | null;
		},
	): void;

	export function create(options: { html: string }): RichTextValue;

	export function toHTMLString(options: { value: RichTextValue }): string;

	export function applyFormat(
		value: RichTextValue,
		format: {
			type: string;
			attributes?: Record<string, string>;
		},
		startIndex?: number,
		endIndex?: number,
	): RichTextValue;
}

declare module '@wordpress/compose' {
	export function createHigherOrderComponent<
		T extends (...args: never[]) => unknown,
	>(
		mapFn: T,
		namespace: string,
	): T;
}
