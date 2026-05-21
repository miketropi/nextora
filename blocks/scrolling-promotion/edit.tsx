import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Disabled,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import type { ScrollingPromotionAttributes, ScrollingPromotionItem } from './types';

interface EditProps {
	attributes: ScrollingPromotionAttributes;
	setAttributes: (attrs: Partial<ScrollingPromotionAttributes>) => void;
}

const directionOptions = [
	{ label: __('Left', 'nextora'), value: 'left' },
	{ label: __('Right', 'nextora'), value: 'right' },
];

const separatorOptions = [
	{ label: __('Dot', 'nextora'), value: 'dot' },
	{ label: __('Dash', 'nextora'), value: 'dash' },
	{ label: __('Pipe', 'nextora'), value: 'pipe' },
	{ label: __('Star', 'nextora'), value: 'star' },
	{ label: __('Custom', 'nextora'), value: 'custom' },
	{ label: __('None', 'nextora'), value: 'none' },
];

const fontWeightOptions = [
	{ label: '400', value: '400' },
	{ label: '500', value: '500' },
	{ label: '600', value: '600' },
	{ label: '700', value: '700' },
	{ label: '800', value: '800' },
	{ label: '900', value: '900' },
];

const textTransformOptions = [
	{ label: __('None', 'nextora'), value: 'none' },
	{ label: __('Uppercase', 'nextora'), value: 'uppercase' },
	{ label: __('Lowercase', 'nextora'), value: 'lowercase' },
	{ label: __('Capitalize', 'nextora'), value: 'capitalize' },
];

function normalizeItems(items: ScrollingPromotionItem[] | undefined): ScrollingPromotionItem[] {
	if (!Array.isArray(items) || items.length === 0) {
		return [{ text: __('Your promotion here', 'nextora') }];
	}
	return items.map((item) => ({
		text: typeof item?.text === 'string' ? item.text : '',
	}));
}

export default function ScrollingPromotionEdit({
	attributes,
	setAttributes,
}: EditProps) {
	const [previewAnimating, setPreviewAnimating] = useState(false);
	const items = normalizeItems(attributes.items);

	const blockProps = useBlockProps({
		className: [
			'nextora-scrolling-promotion--editor',
			previewAnimating ? 'is-preview-animating' : '',
		]
			.filter(Boolean)
			.join(' '),
	});

	const updateItem = (index: number, text: string): void => {
		const next = items.map((item, i) => (i === index ? { text } : item));
		setAttributes({ items: next });
	};

	const addItem = (): void => {
		setAttributes({ items: [...items, { text: '' }] });
	};

	const removeItem = (index: number): void => {
		if (items.length <= 1) {
			return;
		}
		setAttributes({ items: items.filter((_, i) => i !== index) });
	};

	const moveItem = (index: number, delta: number): void => {
		const target = index + delta;
		if (target < 0 || target >= items.length) {
			return;
		}
		const next = [...items];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setAttributes({ items: next });
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={previewAnimating ? 'controls-pause' : 'controls-play'}
						label={
							previewAnimating
								? __('Stop animation preview', 'nextora')
								: __('Preview animation', 'nextora')
						}
						onClick={() => setPreviewAnimating((v) => !v)}
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__('Promotion items', 'nextora')} initialOpen>
					<div className="nextora-scrolling-promotion__inspector-items">
						{items.map((item, index) => (
							<div
								key={`item-${index}`}
								className="nextora-scrolling-promotion__inspector-item"
							>
								<TextControl
									label={__('Item', 'nextora') + ` ${index + 1}`}
									value={item.text}
									onChange={(text) => updateItem(index, text ?? '')}
								/>
								<div className="nextora-scrolling-promotion__inspector-item-actions">
									<Button
										variant="secondary"
										size="small"
										disabled={index === 0}
										onClick={() => moveItem(index, -1)}
									>
										{__('Up', 'nextora')}
									</Button>
									<Button
										variant="secondary"
										size="small"
										disabled={index >= items.length - 1}
										onClick={() => moveItem(index, 1)}
									>
										{__('Down', 'nextora')}
									</Button>
									<Button
										variant="secondary"
										size="small"
										isDestructive
										disabled={items.length <= 1}
										onClick={() => removeItem(index)}
									>
										{__('Remove', 'nextora')}
									</Button>
								</div>
							</div>
						))}
					</div>
					<PanelRow>
						<Button variant="primary" onClick={addItem}>
							{__('Add item', 'nextora')}
						</Button>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Direction', 'nextora')}
						value={attributes.direction}
						options={directionOptions}
						onChange={(direction) =>
							setAttributes({ direction: direction ?? 'left' })
						}
					/>
					<RangeControl
						label={__('Speed (seconds per cycle)', 'nextora')}
						help={__('Higher values scroll more slowly.', 'nextora')}
						value={attributes.speed}
						onChange={(speed) => setAttributes({ speed: speed ?? 30 })}
						min={5}
						max={120}
					/>
					<ToggleControl
						label={__('Pause on hover', 'nextora')}
						checked={attributes.pauseOnHover !== false}
						onChange={(pauseOnHover) => setAttributes({ pauseOnHover })}
					/>
				</PanelBody>

				<PanelBody title={__('Separator', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Type', 'nextora')}
						value={attributes.separatorType}
						options={separatorOptions}
						onChange={(separatorType) =>
							setAttributes({ separatorType: separatorType ?? 'dot' })
						}
					/>
					{attributes.separatorType === 'custom' && (
						<TextControl
							label={__('Custom character', 'nextora')}
							value={attributes.customSeparator}
							onChange={(customSeparator) =>
								setAttributes({ customSeparator: customSeparator ?? '✦' })
							}
						/>
					)}
					{attributes.separatorType !== 'none' && (
						<>
							<RangeControl
								label={__('Size (px)', 'nextora')}
								value={attributes.separatorSize}
								onChange={(separatorSize) =>
									setAttributes({ separatorSize: separatorSize ?? 6 })
								}
								min={4}
								max={16}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Font size (px)', 'nextora')}
						value={attributes.fontSize}
						onChange={(fontSize) => setAttributes({ fontSize: fontSize ?? 16 })}
						min={12}
						max={72}
					/>
					<SelectControl
						label={__('Font weight', 'nextora')}
						value={attributes.fontWeight}
						options={fontWeightOptions}
						onChange={(fontWeight) =>
							setAttributes({ fontWeight: fontWeight ?? '500' })
						}
					/>
					<SelectControl
						label={__('Text transform', 'nextora')}
						value={attributes.textTransform}
						options={textTransformOptions}
						onChange={(textTransform) =>
							setAttributes({ textTransform: textTransform ?? 'none' })
						}
					/>
					<RangeControl
						label={__('Letter spacing (px)', 'nextora')}
						value={attributes.letterSpacing}
						onChange={(letterSpacing) =>
							setAttributes({ letterSpacing: letterSpacing ?? 0 })
						}
						min={0}
						max={10}
						step={0.5}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: attributes.textColor,
							onChange: (textColor) =>
								setAttributes({ textColor: textColor ?? '' }),
							label: __('Text', 'nextora'),
						},
						{
							value: attributes.backgroundColor,
							onChange: (backgroundColor) =>
								setAttributes({ backgroundColor: backgroundColor ?? '' }),
							label: __('Background', 'nextora'),
						},
						...(attributes.separatorType !== 'none'
							? [
									{
										value: attributes.separatorColor,
										onChange: (separatorColor: string | undefined) =>
											setAttributes({ separatorColor: separatorColor ?? '' }),
										label: __('Separator', 'nextora'),
									},
								]
							: []),
					]}
				/>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Vertical padding (px)', 'nextora')}
						value={attributes.paddingVertical}
						onChange={(paddingVertical) =>
							setAttributes({ paddingVertical: paddingVertical ?? 16 })
						}
						min={0}
						max={60}
					/>
					<RangeControl
						label={__('Item gap (px)', 'nextora')}
						value={attributes.itemGap}
						onChange={(itemGap) => setAttributes({ itemGap: itemGap ?? 40 })}
						min={16}
						max={120}
					/>
					<ToggleControl
						label={__('Show top and bottom borders', 'nextora')}
						checked={attributes.showBorders}
						onChange={(showBorders) => setAttributes({ showBorders })}
					/>
					{attributes.showBorders && (
						<>
							<RangeControl
								label={__('Border width (px)', 'nextora')}
								value={attributes.borderWidth}
								onChange={(borderWidth) =>
									setAttributes({ borderWidth: borderWidth ?? 1 })
								}
								min={1}
								max={3}
							/>
						</>
					)}
				</PanelBody>

				{attributes.showBorders && (
					<PanelColorSettings
						title={__('Border', 'nextora')}
						colorSettings={[
							{
								value: attributes.borderColor,
								onChange: (borderColor) =>
									setAttributes({ borderColor: borderColor ?? '' }),
								label: __('Border color', 'nextora'),
							},
						]}
					/>
				)}

				<PanelBody title={__('Accessibility', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Region label', 'nextora')}
						value={attributes.ariaLabel}
						onChange={(ariaLabel) => setAttributes({ ariaLabel: ariaLabel ?? '' })}
						placeholder={__('Promotional announcements', 'nextora')}
						help={__(
							'Describes this strip for screen readers. Leave empty for the default.',
							'nextora'
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<Disabled>
					<ServerSideRender
						block="nextora/scrolling-promotion"
						attributes={attributes as unknown as Record<string, unknown>}
					/>
				</Disabled>
			</div>
		</>
	);
}
