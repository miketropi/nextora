import { BlockControls } from '@wordpress/block-editor';
import {
	MenuItem,
	ToolbarDropdownMenu,
	ToolbarGroup,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	applyFormat,
	registerFormatType,
	removeFormat,
} from '@wordpress/rich-text';

const FORMAT_NAME = 'nextora/heading-font';

interface HeadingFontFamily {
	slug: string;
	name: string;
	fontFamily: string;
}

interface HeadingFontConfig {
	fonts: HeadingFontFamily[];
}

interface GroupedEditorFontFamilies {
	theme?: HeadingFontFamily[];
	custom?: HeadingFontFamily[];
	default?: HeadingFontFamily[];
	[key: string]: HeadingFontFamily[] | undefined;
}

interface RichTextValueWithSelection {
	text: string;
	start?: number;
	end?: number;
}

interface FormatEditProps {
	value: RichTextValueWithSelection;
	onChange: (value: RichTextValueWithSelection) => void;
	onFocus: () => void;
}

declare global {
	interface Window {
		nextoraHeadingFont?: HeadingFontConfig;
	}
}

function presetClassName(slug: string): string {
	return `has-${slug}-font-family`;
}

function buildFormatAttributes(font: HeadingFontFamily): Record<string, string> {
	return {
		class: presetClassName(font.slug),
		style: `font-family:${font.fontFamily}`,
		'data-font': font.slug,
	};
}

function flattenEditorFontFamilies(
	grouped: GroupedEditorFontFamilies | undefined,
): HeadingFontFamily[] {
	if (!grouped) {
		return [];
	}

	const bySlug = new Map<string, HeadingFontFamily>();
	const origins = ['theme', 'custom', 'default'];

	for (const origin of origins) {
		const group = grouped[origin];
		if (!Array.isArray(group)) {
			continue;
		}

		for (const family of group) {
			if (!family?.slug || !family?.fontFamily) {
				continue;
			}

			bySlug.set(family.slug, {
				slug: family.slug,
				name: family.name || family.slug,
				fontFamily: family.fontFamily,
			});
		}
	}

	for (const [key, group] of Object.entries(grouped)) {
		if (origins.includes(key) || !Array.isArray(group)) {
			continue;
		}

		for (const family of group) {
			if (!family?.slug || !family?.fontFamily) {
				continue;
			}

			bySlug.set(family.slug, {
				slug: family.slug,
				name: family.name || family.slug,
				fontFamily: family.fontFamily,
			});
		}
	}

	return [...bySlug.values()];
}

function hasTextSelection(value: RichTextValueWithSelection): boolean {
	return (
		typeof value.start === 'number' &&
		typeof value.end === 'number' &&
		value.start !== value.end
	);
}

function HeadingFontFormatEdit({
	value,
	onChange,
	onFocus,
}: FormatEditProps): JSX.Element | null {
	const selectionRef = useRef({ start: value.start, end: value.end });

	selectionRef.current = { start: value.start, end: value.end };

	const { isHeadingBlock, fonts } = useSelect((selectFn) => {
		const blockEditor = selectFn('core/block-editor') as {
			getSelectedBlock?: () => { name?: string } | null;
			getSettings?: () => {
				__experimentalFeatures?: {
					typography?: {
						fontFamilies?: GroupedEditorFontFamilies;
					};
				};
			};
		};

		const grouped =
			blockEditor.getSettings?.()?.__experimentalFeatures?.typography
				?.fontFamilies;
		const fromEditor = flattenEditorFontFamilies(grouped);

		return {
			isHeadingBlock:
				blockEditor.getSelectedBlock?.()?.name === 'core/heading',
			fonts:
				fromEditor.length > 0
					? fromEditor
					: (window.nextoraHeadingFont?.fonts ?? []),
		};
	}, []);

	if (!isHeadingBlock || fonts.length === 0) {
		return null;
	}

	const hasSelection = hasTextSelection(value);

	const applyFont = (font: HeadingFontFamily): void => {
		const { start, end } = selectionRef.current;

		if (
			typeof start !== 'number' ||
			typeof end !== 'number' ||
			start === end
		) {
			return;
		}

		onFocus();
		onChange(
			applyFormat(
				value,
				{
					type: FORMAT_NAME,
					attributes: buildFormatAttributes(font),
				},
				start,
				end,
			),
		);
	};

	const clearFont = (): void => {
		const { start, end } = selectionRef.current;

		if (
			typeof start !== 'number' ||
			typeof end !== 'number' ||
			start === end
		) {
			return;
		}

		onFocus();
		onChange(
			removeFormat(value, { type: FORMAT_NAME }, start, end),
		);
	};

	return (
		<BlockControls group="inline">
			<ToolbarGroup>
				<ToolbarDropdownMenu
					icon="editor-textcolor"
					label={__('Font', 'nextora')}
					text={__('Font', 'nextora')}
					popoverProps={{
						className: 'nextora-heading-inline-font-popover',
					}}
				>
					{({ onClose }) => (
						<>
							{!hasSelection && (
								<MenuItem disabled>
									{__('Select text in the heading first', 'nextora')}
								</MenuItem>
							)}
							{hasSelection &&
								fonts.map((font) => (
									<MenuItem
										key={font.slug}
										onMouseDown={(event) => {
											event.preventDefault();
										}}
										onClick={() => {
											applyFont(font);
											onClose();
										}}
										style={{ fontFamily: font.fontFamily }}
									>
										{font.name}
									</MenuItem>
								))}
							{hasSelection && (
								<MenuItem
									onMouseDown={(event) => {
										event.preventDefault();
									}}
									onClick={() => {
										clearFont();
										onClose();
									}}
								>
									{__('Remove font', 'nextora')}
								</MenuItem>
							)}
						</>
					)}
				</ToolbarDropdownMenu>
			</ToolbarGroup>
		</BlockControls>
	);
}

registerFormatType(FORMAT_NAME, {
	title: __('Font', 'nextora'),
	tagName: 'span',
	className: 'nextora-heading-inline-font',
	attributes: {
		class: 'class',
		style: 'style',
		'data-font': 'data-font',
	},
	edit: HeadingFontFormatEdit,
});

export { FORMAT_NAME };
