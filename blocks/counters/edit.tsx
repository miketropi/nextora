import type { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';
import {
	FontSizePicker,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { buildTypographyStyleVars } from './counters-styles';
import type { CounterItem, CountersAttributes } from './types';

interface EditProps {
	attributes: CountersAttributes;
	setAttributes: (attrs: Partial<CountersAttributes>) => void;
}

const DEFAULT_ITEMS: CounterItem[] = [
	{
		id: '1',
		number: 100,
		suffix: 'k+',
		prefix: '',
		label: 'Books & Supplies Provided',
	},
	{
		id: '2',
		number: 50,
		suffix: '%',
		prefix: '',
		label: 'Student Satisfaction Rate',
	},
	{
		id: '3',
		number: 20,
		suffix: '+',
		prefix: '',
		label: 'Years of Experience',
	},
];

const textAlignOptions = [
	{ label: __('Center', 'nextora'), value: 'center' },
	{ label: __('Left', 'nextora'), value: 'left' },
	{ label: __('Right', 'nextora'), value: 'right' },
];

const easingOptions = [
	{ label: __('Linear', 'nextora'), value: 'linear' },
	{ label: __('Ease out cubic', 'nextora'), value: 'easeOutCubic' },
	{ label: __('Ease out expo', 'nextora'), value: 'easeOutExpo' },
];

function createId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function normalizeItems(items: CounterItem[] | undefined): CounterItem[] {
	if (!Array.isArray(items) || items.length === 0) {
		return DEFAULT_ITEMS.map((item) => ({ ...item }));
	}

	return items.map((item, index) => ({
		id: typeof item?.id === 'string' && item.id !== '' ? item.id : String(index + 1),
		number: typeof item?.number === 'number' ? item.number : parseFloat(String(item?.number)) || 0,
		prefix: typeof item?.prefix === 'string' ? item.prefix : '',
		suffix: typeof item?.suffix === 'string' ? item.suffix : '',
		label: typeof item?.label === 'string' ? item.label : '',
	}));
}

function formatNumber(value: number): string {
	return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatDisplay(item: CounterItem): string {
	return `${item.prefix}${formatNumber(item.number)}${item.suffix}`;
}

function normalizeFontSizeAttribute(
	value: number | string | undefined,
	selectedItem?: { slug?: string },
): string {
	if (value === undefined) {
		return '';
	}
	if (selectedItem?.slug) {
		return selectedItem.slug;
	}
	return String(value);
}

function clampColumns(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value));
}

interface FontFamilyPreset {
	slug?: string;
	name?: string;
}

interface FontFamilyOption {
	label: string;
	value: string;
}

function flattenFontFamilyPresets(grouped: unknown): FontFamilyPreset[] {
	if (Array.isArray(grouped)) {
		return grouped.filter((item): item is FontFamilyPreset => typeof item === 'object' && item !== null);
	}

	if (!grouped || typeof grouped !== 'object') {
		return [];
	}

	const presets: FontFamilyPreset[] = [];
	for (const group of Object.values(grouped as Record<string, unknown>)) {
		if (Array.isArray(group)) {
			presets.push(
				...group.filter((item): item is FontFamilyPreset => typeof item === 'object' && item !== null),
			);
		}
	}

	return presets;
}

function useFontFamilyOptions(): FontFamilyOption[] {
	return useSelect((select) => {
		const settings = select(blockEditorStore).getSettings() as {
			typography?: { fontFamilies?: unknown };
			__experimentalFeatures?: { typography?: { fontFamilies?: unknown } };
		};
		const grouped =
			settings?.__experimentalFeatures?.typography?.fontFamilies ??
			settings?.typography?.fontFamilies;
		const options: FontFamilyOption[] = [{ label: __('Default', 'nextora'), value: '' }];
		const seen = new Set<string>();

		for (const family of flattenFontFamilyPresets(grouped)) {
			const slug = typeof family.slug === 'string' ? family.slug : '';
			if (!slug || seen.has(slug)) {
				continue;
			}
			seen.add(slug);
			options.push({
				label: typeof family.name === 'string' && family.name !== '' ? family.name : slug,
				value: slug,
			});
		}

		return options;
	}, []);
}

export default function CountersEdit({ attributes, setAttributes }: EditProps) {
	const items = normalizeItems(attributes.items);
	const fontFamilyOptions = useFontFamilyOptions();

	const {
		columns = 3,
		columnsTablet = 2,
		columnsMobile = 1,
		columnGap = '',
		divider = false,
		dividerColor = '',
		textAlign = 'center',
		enableCountUp = true,
		countUpDuration = 2000,
		countUpEasing = 'easeOutCubic',
		numberColor = '',
		labelColor = '',
		numberFontSize = '',
		labelFontSize = '',
		numberFontFamily = '',
		labelFontFamily = '',
	} = attributes;

	const colsDesktop = clampColumns(columns, 1, 6);
	const colsTablet = clampColumns(columnsTablet, 1, 6);
	const colsMobile = clampColumns(columnsMobile, 1, 4);

	const typographyVars = buildTypographyStyleVars({
		numberColor,
		labelColor,
		numberFontSize,
		labelFontSize,
		numberFontFamily,
		labelFontFamily,
	});

	const blockProps = useBlockProps({
		className: [
			'nextora-counters',
			`nextora-counters--align-${textAlign}`,
			divider ? 'nextora-counters--divider' : '',
		]
			.filter(Boolean)
			.join(' '),
		style: {
			'--nextora-counters-cols-m': String(colsMobile),
			'--nextora-counters-cols-t': String(colsTablet),
			'--nextora-counters-cols-d': String(colsDesktop),
			...(columnGap ? { '--nextora-counters-gap': columnGap } : {}),
			...(dividerColor ? { '--nextora-counters-divider-color': dividerColor } : {}),
			...typographyVars,
		} as CSSProperties,
	});

	const updateItem = (id: string, field: keyof CounterItem, value: string | number): void => {
		setAttributes({
			items: items.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
		});
	};

	const addItem = (): void => {
		setAttributes({
			items: [
				...items,
				{ id: createId(), number: 0, prefix: '', suffix: '', label: '' },
			],
		});
	};

	const removeItem = (id: string): void => {
		if (items.length <= 1) {
			return;
		}
		setAttributes({ items: items.filter((item) => item.id !== id) });
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
			<InspectorControls>
				<PanelBody title={__('Counter items', 'nextora')} initialOpen>
					<div className="nextora-counters__inspector-items">
						{items.map((item, index) => (
							<div key={item.id} className="nextora-counters__inspector-item">
								<div className="nextora-counters__inspector-item-fields">
									<TextControl
										label={__('Prefix', 'nextora')}
										value={item.prefix}
										onChange={(value) => updateItem(item.id, 'prefix', value ?? '')}
										placeholder="$"
									/>
									<TextControl
										label={__('Number', 'nextora')}
										type="number"
										value={String(item.number)}
										onChange={(value) =>
											updateItem(item.id, 'number', parseFloat(value ?? '') || 0)
										}
									/>
									<TextControl
										label={__('Suffix', 'nextora')}
										value={item.suffix}
										onChange={(value) => updateItem(item.id, 'suffix', value ?? '')}
										placeholder="k+"
									/>
								</div>
								<TextControl
									label={__('Label', 'nextora')}
									value={item.label}
									onChange={(value) => updateItem(item.id, 'label', value ?? '')}
									placeholder={__('Books & Supplies Provided', 'nextora')}
								/>
								<div className="nextora-counters__inspector-item-actions">
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
										onClick={() => removeItem(item.id)}
									>
										{__('Remove', 'nextora')}
									</Button>
								</div>
							</div>
						))}
					</div>
					<PanelRow>
						<Button variant="primary" onClick={addItem}>
							{__('Add counter', 'nextora')}
						</Button>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Columns — small screens', 'nextora')}
						value={colsMobile}
						onChange={(value) =>
							setAttributes({
								columnsMobile: value != null ? clampColumns(value, 1, 4) : 1,
							})
						}
						min={1}
						max={4}
						step={1}
					/>
					<RangeControl
						label={__('Columns — medium (600px+)', 'nextora')}
						value={colsTablet}
						onChange={(value) =>
							setAttributes({
								columnsTablet: value != null ? clampColumns(value, 1, 6) : 2,
							})
						}
						min={1}
						max={6}
						step={1}
					/>
					<RangeControl
						label={__('Columns — large (960px+)', 'nextora')}
						value={colsDesktop}
						onChange={(value) =>
							setAttributes({ columns: value != null ? clampColumns(value, 1, 6) : 3 })
						}
						min={1}
						max={6}
						step={1}
					/>
					<TextControl
						label={__('Column gap', 'nextora')}
						value={columnGap}
						onChange={(value) => setAttributes({ columnGap: value ?? '' })}
						help={__('Leave empty to use the theme default spacing.', 'nextora')}
						placeholder="2rem"
					/>
					<ToggleControl
						label={__('Show dividers', 'nextora')}
						checked={divider}
						onChange={(value) => setAttributes({ divider: value })}
					/>
					<SelectControl
						label={__('Text alignment', 'nextora')}
						value={textAlign}
						options={textAlignOptions}
						onChange={(value) => setAttributes({ textAlign: value ?? 'center' })}
					/>
				</PanelBody>

				{divider && (
					<PanelColorSettings
						title={__('Divider', 'nextora')}
						colorSettings={[
							{
								value: dividerColor,
								onChange: (value) => setAttributes({ dividerColor: value ?? '' }),
								label: __('Divider color', 'nextora'),
							},
						]}
					/>
				)}

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: numberColor,
							onChange: (value) => setAttributes({ numberColor: value ?? '' }),
							label: __('Number', 'nextora'),
						},
						{
							value: labelColor,
							onChange: (value) => setAttributes({ labelColor: value ?? '' }),
							label: __('Label', 'nextora'),
						},
					]}
				/>

				<PanelBody title={__('Typography', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Number font', 'nextora')}
						value={numberFontFamily}
						options={fontFamilyOptions}
						onChange={(value) => setAttributes({ numberFontFamily: value ?? '' })}
						help={__(
							'Default inherits the surrounding typography.',
							'nextora',
						)}
					/>
					<SelectControl
						label={__('Label font', 'nextora')}
						value={labelFontFamily}
						options={fontFamilyOptions}
						onChange={(value) => setAttributes({ labelFontFamily: value ?? '' })}
						help={__(
							'Default inherits the surrounding typography.',
							'nextora',
						)}
					/>
					<BaseControl
						className="nextora-counters__font-size-control"
						label={__('Number font size', 'nextora')}
						id="nextora-counters-number-font-size"
						help={__(
							'Default uses the theme Extra Large preset.',
							'nextora',
						)}
					>
						<FontSizePicker
							value={numberFontSize || undefined}
							valueMode="slug"
							onChange={(value, selectedItem) =>
								setAttributes({
									numberFontSize: normalizeFontSizeAttribute(value, selectedItem),
								})
							}
						/>
					</BaseControl>
					<BaseControl
						className="nextora-counters__font-size-control"
						label={__('Label font size', 'nextora')}
						id="nextora-counters-label-font-size"
						help={__(
							'Default uses the theme Small preset.',
							'nextora',
						)}
					>
						<FontSizePicker
							value={labelFontSize || undefined}
							valueMode="slug"
							onChange={(value, selectedItem) =>
								setAttributes({
									labelFontSize: normalizeFontSizeAttribute(value, selectedItem),
								})
							}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable count-up', 'nextora')}
						help={__(
							'Numbers animate when the block enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableCountUp !== false}
						onChange={(value) => setAttributes({ enableCountUp: value })}
					/>
					{enableCountUp !== false && (
						<>
							<RangeControl
								label={__('Duration (ms)', 'nextora')}
								value={countUpDuration}
								onChange={(value) => setAttributes({ countUpDuration: value ?? 2000 })}
								min={300}
								max={5000}
								step={100}
							/>
							<SelectControl
								label={__('Easing', 'nextora')}
								value={countUpEasing}
								options={easingOptions}
								onChange={(value) =>
									setAttributes({ countUpEasing: value ?? 'easeOutCubic' })
								}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{items.map((item) => (
					<div key={item.id} className="nextora-counters__item">
						<span className="nextora-counters__number" aria-label={formatDisplay(item)}>
							{formatDisplay(item)}
						</span>
						<span className="nextora-counters__label">{item.label}</span>
					</div>
				))}
			</div>
		</>
	);
}
