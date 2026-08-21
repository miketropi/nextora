declare module '@wordpress/rich-text' {
	export interface RichTextValue {
		text: string;
		formats?: unknown;
		replacements?: unknown;
		start?: number;
		end?: number;
	}

	export function registerFormatType(
		name: string,
		settings: {
			title: string;
			tagName: string;
			className?: string;
			attributes?: Record<string, string>;
			edit?: (props: FormatEditProps) => JSX.Element | null;
		},
	): void;

	export interface FormatEditProps {
		isActive: boolean;
		activeAttributes: Record<string, string>;
		value: RichTextValue;
		onChange: (value: RichTextValue) => void;
		onFocus: () => void;
		contentRef: { readonly current: HTMLElement | null };
	}

	export function applyFormat(
		value: RichTextValue,
		format: {
			type: string;
			attributes?: Record<string, string>;
		},
		startIndex?: number,
		endIndex?: number,
	): RichTextValue;

	export function removeFormat(
		value: RichTextValue,
		format: { type: string },
		startIndex?: number,
		endIndex?: number,
	): RichTextValue;
}
