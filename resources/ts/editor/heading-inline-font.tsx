import { BlockControls } from '@wordpress/block-editor';
import {
	MenuItem,
	ToolbarDropdownMenu,
	ToolbarGroup,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import {
	applyFormat,
	create,
	registerFormatType,
	toHTMLString,
} from '@wordpress/rich-text';
import { createHigherOrderComponent } from '@wordpress/compose';

const FORMAT_NAME = 'nextora/heading-font';

interface HeadingFontFamily {
	slug: string;
	name: string;
	fontFamily: string;
}

interface HeadingFontConfig {
	fonts: HeadingFontFamily[];
}

interface BlockSelectionPoint {
	clientId?: string;
	attributeKey?: string;
	offset?: number;
}

interface HeadingBlockEditProps {
	name: string;
	clientId: string;
	isSelected: boolean;
	attributes: {
		content?: string;
	};
	setAttributes: (attrs: { content: string }) => void;
}

declare global {
	interface Window {
		nextoraHeadingFont?: HeadingFontConfig;
	}
}

function buildFontStyle(fontFamily: string): string {
	return `font-family:${fontFamily}`;
}

function normalizeSelectionPoint(
	point: BlockSelectionPoint | number | string | undefined,
): BlockSelectionPoint | undefined {
	if (typeof point === 'number') {
		return { attributeKey: 'content', offset: point };
	}

	if (typeof point === 'string') {
		return undefined;
	}

	return point;
}

function isContentSelection(
	startPoint: BlockSelectionPoint | undefined,
	endPoint: BlockSelectionPoint | undefined,
	blockClientId: string,
): boolean {
	if (!startPoint || !endPoint) {
		return false;
	}

	if (startPoint.clientId !== blockClientId || endPoint.clientId !== blockClientId) {
		return false;
	}

	if (startPoint.attributeKey !== 'content' || endPoint.attributeKey !== 'content') {
		return false;
	}

	return true;
}

function getSelectionOffset(point: BlockSelectionPoint | undefined): number | null {
	if (!point || typeof point.offset !== 'number') {
		return null;
	}

	return point.offset;
}

function HeadingFontToolbar({
	clientId,
	isSelected,
	attributes,
	setAttributes,
}: HeadingBlockEditProps): JSX.Element | null {
	const fonts = window.nextoraHeadingFont?.fonts ?? [];

	const { hasSelection, start, end } = useSelect(
		(select) => {
			if (!isSelected) {
				return { hasSelection: false, start: 0, end: 0 };
			}

			const blockEditor = select('core/block-editor') as {
				getSelectionStart?: () => BlockSelectionPoint | undefined;
				getSelectionEnd?: () => BlockSelectionPoint | undefined;
				getBlockSelectionStart?: (
					id: string,
				) => BlockSelectionPoint | string | undefined;
				getBlockSelectionEnd?: (
					id: string,
				) => BlockSelectionPoint | string | undefined;
			};

			let startPoint = blockEditor.getSelectionStart?.();
			let endPoint = blockEditor.getSelectionEnd?.();

			if (!startPoint || !endPoint) {
				startPoint = normalizeSelectionPoint(
					blockEditor.getBlockSelectionStart?.(clientId),
				);
				endPoint = normalizeSelectionPoint(
					blockEditor.getBlockSelectionEnd?.(clientId),
				);
			}
			const startOffset = getSelectionOffset(startPoint);
			const endOffset = getSelectionOffset(endPoint);

			if (
				startOffset === null ||
				endOffset === null ||
				!isContentSelection(startPoint, endPoint, clientId) ||
				startOffset === endOffset
			) {
				return { hasSelection: false, start: 0, end: 0 };
			}

			return {
				hasSelection: true,
				start: Math.min(startOffset, endOffset),
				end: Math.max(startOffset, endOffset),
			};
		},
		[clientId, isSelected],
	);

	const applyFont = (font: HeadingFontFamily): void => {
		const html = attributes.content ?? '';
		if (!html || !hasSelection) {
			return;
		}

		const value = create({ html });
		const nextValue = applyFormat(
			value,
			{
				type: FORMAT_NAME,
				attributes: {
					style: buildFontStyle(font.fontFamily),
				},
			},
			start,
			end,
		);

		setAttributes({
			content: toHTMLString({ value: nextValue }),
		});
	};

	if (!isSelected || fonts.length === 0) {
		return null;
	}

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
										onClick={() => {
											applyFont(font);
											onClose();
										}}
										style={{ fontFamily: font.fontFamily }}
									>
										{font.name}
									</MenuItem>
								))}
						</>
					)}
				</ToolbarDropdownMenu>
			</ToolbarGroup>
		</BlockControls>
	);
}

const withHeadingFontToolbar = createHigherOrderComponent(
	(BlockEdit: (props: HeadingBlockEditProps) => JSX.Element) => {
		return (props: HeadingBlockEditProps) => {
			if (props.name !== 'core/heading') {
				return <BlockEdit {...props} />;
			}

			return (
				<>
					<HeadingFontToolbar {...props} />
					<BlockEdit {...props} />
				</>
			);
		};
	},
	'nextora/withHeadingFontToolbar',
);

registerFormatType(FORMAT_NAME, {
	title: __('Font', 'nextora'),
	tagName: 'span',
	className: 'nextora-heading-inline-font',
	attributes: {
		style: 'style',
	},
});

addFilter(
	'editor.BlockEdit',
	'nextora/heading-inline-font-toolbar',
	withHeadingFontToolbar,
);

export { FORMAT_NAME };
