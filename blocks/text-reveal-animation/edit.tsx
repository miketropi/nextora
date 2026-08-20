import { __, sprintf } from '@wordpress/i18n';
import { useState, useMemo, useRef, useEffect } from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	Button,
	ColorPalette,
	Modal,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import { useFontFamilyOptions } from './font-family-utils';
import type {
	TextRevealAnimationAttributes,
	TextRevealRow,
	TextRevealElement,
} from './types';

const FONT_WEIGHT_OPTIONS = [
	{ label: __('400 — Regular', 'nextora'), value: '400' },
	{ label: __('500 — Medium', 'nextora'), value: '500' },
	{ label: __('600 — Semi Bold', 'nextora'), value: '600' },
	{ label: __('700 — Bold', 'nextora'), value: '700' },
	{ label: __('800 — Extra Bold', 'nextora'), value: '800' },
	{ label: __('900 — Black', 'nextora'), value: '900' },
];

const TEXT_TRANSFORM_OPTIONS = [
	{ label: __('Uppercase', 'nextora'), value: 'uppercase' },
	{ label: __('Capitalize', 'nextora'), value: 'capitalize' },
	{ label: __('Lowercase', 'nextora'), value: 'lowercase' },
	{ label: __('None', 'nextora'), value: 'none' },
];

const ROW_ALIGN_OPTIONS = [
	{ label: __('Center', 'nextora'), value: 'center' },
	{ label: __('Space Between', 'nextora'), value: 'space-between' },
	{ label: __('Flex Start', 'nextora'), value: 'flex-start' },
	{ label: __('Flex End', 'nextora'), value: 'flex-end' },
];

const ANIMATION_STYLE_OPTIONS = [
	{ label: __('Curtain (Shutters)', 'nextora'), value: 'curtain' },
	{ label: __('Width Expand (Center Open)', 'nextora'), value: 'expand' },
	{ label: __('Zoom In', 'nextora'), value: 'zoom' },
];

const SCATTERED_DELAYS = [
	1.1, 1.2, 0.4, 1.3, 0.6, 0.1, 1.0, 1.4, 0.3, 0.5, 0.7, 0.8, 1.5, 0.9, 1.1, 1.4, 1.2, 1.0,
];

const ICONS = {
	pencil:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
	chevronUp:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
	chevronDown:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
	trash:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
	plus:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
	image:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
	type:
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
};

function InlineSvg({ name, className }: { name: keyof typeof ICONS; className?: string }) {
	return (
		<span
			className={className}
			dangerouslySetInnerHTML={{ __html: ICONS[name] }}
			style={{ display: 'inline-flex', alignItems: 'center' }}
		/>
	);
}

function createUid(): string {
	return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

interface WPMediaSelection {
	id?: number;
	url?: string;
	alt?: string;
}

interface RowModalProps {
	row: TextRevealRow;
	rowIndex: number;
	colorPalette: ReturnType<typeof useThemeColorPalette>;
	lookupPalette: ReturnType<typeof getMergedPaletteEntries>;
	onSave: (updatedRow: TextRevealRow) => void;
	onClose: () => void;
}

function RowModal({ row, rowIndex, colorPalette, lookupPalette, onSave, onClose }: RowModalProps) {
	const [editRow, setEditRow] = useState<TextRevealRow>(JSON.parse(JSON.stringify(row)));
	const [editingElementId, setEditingElementId] = useState<string | null>(null);

	const elements = editRow.elements || [];

	const addElement = (type: 'text' | 'image') => {
		const newEl: TextRevealElement =
			type === 'text'
				? {
					id: createUid(),
					type: 'text',
					text: 'NEW TEXT',
					tag: 'div',
				}
				: {
					id: createUid(),
					type: 'image',
					imageId: 0,
					imageUrl: '',
					imageAlt: '',
					imageWidth: 200,
					animationStyle: 'curtain',
					imageStyle: 'rounded',
				};
		const updatedElements = [...elements, newEl];
		setEditRow({ ...editRow, elements: updatedElements });
		setEditingElementId(newEl.id);
	};

	const updateElement = (updated: TextRevealElement) => {
		const updatedElements = elements.map((el) => (el.id === updated.id ? updated : el));
		setEditRow({ ...editRow, elements: updatedElements });
	};

	const removeElement = (id: string) => {
		const updatedElements = elements.filter((el) => el.id !== id);
		setEditRow({ ...editRow, elements: updatedElements });
		if (editingElementId === id) {
			setEditingElementId(null);
		}
	};

	const moveElement = (index: number, direction: 'left' | 'right') => {
		const targetIndex = direction === 'left' ? index - 1 : index + 1;
		if (targetIndex < 0 || targetIndex >= elements.length) return;
		const updated = [...elements];
		const temp = updated[index];
		updated[index] = updated[targetIndex];
		updated[targetIndex] = temp;
		setEditRow({ ...editRow, elements: updated });
	};

	const activeElement = elements.find((el) => el.id === editingElementId);

	return (
		<Modal
			title={sprintf(__('Edit Row %d', 'nextora'), rowIndex + 1)}
			onRequestClose={onClose}
			className="nextora-tra-modal"
		>
			<div className="nextora-tra-modal__body">
				<div className="nextora-tra-modal__row-settings">
					<ToggleControl
						label={__('Show divider below this row', 'nextora')}
						checked={editRow.showDivider !== false}
						onChange={(val) => setEditRow({ ...editRow, showDivider: val })}
					/>
					<SelectControl
						label={__('Row alignment', 'nextora')}
						value={editRow.rowAlign || 'center'}
						options={ROW_ALIGN_OPTIONS}
						onChange={(val) =>
							setEditRow({
								...editRow,
								rowAlign: val as TextRevealRow['rowAlign'],
							})
						}
					/>
				</div>

				<h4 style={{ margin: '16px 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
					{__('Row Elements (In Order)', 'nextora')}
				</h4>

				<div className="nextora-tra-modal__elements-list">
					{elements.length === 0 && (
						<p style={{ color: '#666', fontSize: '13px', fontStyle: 'italic' }}>
							{__('No elements in this row yet. Add text or image segments below.', 'nextora')}
						</p>
					)}
					{elements.map((el, idx) => (
						<div
							key={el.id}
							className={`nextora-tra-modal__element-item ${el.id === editingElementId ? 'is-active' : ''}`}
							onClick={() => setEditingElementId(el.id)}
						>
							<div className="nextora-tra-modal__element-info">
								<span className="nextora-tra-modal__element-badge">
									{el.type === 'text' ? (
										<InlineSvg name="type" />
									) : (
										<InlineSvg name="image" />
									)}
									<span style={{ textTransform: 'capitalize' }}>{el.type}</span>
								</span>
								<strong className="nextora-tra-modal__element-title">
									{el.type === 'text'
										? el.text || __('(Empty text)', 'nextora')
										: el.imageUrl
											? el.imageAlt || __('Image selected', 'nextora')
											: __('Choose image...', 'nextora')}
								</strong>
							</div>

							<div
								className="nextora-tra-modal__element-actions"
								onClick={(e) => e.stopPropagation()}
							>
								<Button
									icon={<InlineSvg name="chevronUp" />}
									label={__('Move left', 'nextora')}
									onClick={() => moveElement(idx, 'left')}
									disabled={idx === 0}
									size="small"
								/>
								<Button
									icon={<InlineSvg name="chevronDown" />}
									label={__('Move right', 'nextora')}
									onClick={() => moveElement(idx, 'right')}
									disabled={idx === elements.length - 1}
									size="small"
								/>
								<Button
									icon={<InlineSvg name="trash" />}
									label={__('Remove element', 'nextora')}
									onClick={() => removeElement(el.id)}
									size="small"
									isDestructive
								/>
							</div>
						</div>
					))}
				</div>

				<div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
					<Button
						variant="secondary"
						icon={<InlineSvg name="plus" />}
						onClick={() => addElement('text')}
						size="small"
					>
						{__('Add Text', 'nextora')}
					</Button>
					<Button
						variant="secondary"
						icon={<InlineSvg name="plus" />}
						onClick={() => addElement('image')}
						size="small"
					>
						{__('Add Image', 'nextora')}
					</Button>
				</div>

				{activeElement && (
					<div className="nextora-tra-modal__element-editor">
						<h5 style={{ margin: '16px 0 12px 0', fontSize: '13px', fontWeight: 600 }}>
							{activeElement.type === 'text'
								? __('Edit Text Element', 'nextora')
								: __('Edit Image Element', 'nextora')}
						</h5>

						{activeElement.type === 'text' ? (
							<>
								<TextControl
									label={__('Text content', 'nextora')}
									value={activeElement.text || ''}
									onChange={(val) =>
										updateElement({ ...activeElement, text: val || '' })
									}
									help={__(
										'Characters will be animated in scattered order matching the design.',
										'nextora',
									)}
								/>
								<div style={{ marginTop: '12px' }}>
									<p
										className="components-base-control__label"
										style={{ marginBottom: '6px' }}
									>
										{__('Text Color (Optional custom color)', 'nextora')}
									</p>
									<ColorPalette
										colors={colorPalette}
										value={colorValueForPicker(
											activeElement.textColor || '',
											colorPalette,
											lookupPalette,
										)}
										onChange={(val) =>
											updateElement({
												...activeElement,
												textColor: normalizeColorForStorage(
													val,
													lookupPalette,
												),
											})
										}
										clearable
									/>
								</div>
								<TextControl
									label={__('Link URL (optional)', 'nextora')}
									value={activeElement.linkUrl || ''}
									onChange={(val) =>
										updateElement({ ...activeElement, linkUrl: val || '' })
									}
									placeholder="https://..."
								/>
							</>
						) : (
							<>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media: WPMediaSelection) => {
											updateElement({
												...activeElement,
												imageId: media.id || 0,
												imageUrl: media.url || '',
												imageAlt: media.alt || '',
											});
										}}
										allowedTypes={['image']}
										value={activeElement.imageId}
										render={({ open }) => (
											<div className="nextora-tra-modal__media-field">
												{activeElement.imageUrl ? (
													<div className="nextora-tra-modal__media-preview-wrap">
														<img
															src={activeElement.imageUrl}
															alt=""
															className="nextora-tra-modal__media-preview"
														/>
														<Button
															variant="secondary"
															size="small"
															onClick={open}
														>
															{__('Replace image', 'nextora')}
														</Button>
														<Button
															variant="link"
															isDestructive
															size="small"
															onClick={() =>
																updateElement({
																	...activeElement,
																	imageId: 0,
																	imageUrl: '',
																	imageAlt: '',
																})
															}
														>
															{__('Remove', 'nextora')}
														</Button>
													</div>
												) : (
													<div
														className="nextora-tra-modal__media-dropzone"
														onClick={open}
													>
														<InlineSvg name="image" />
														<span>{__('Select from Media Library', 'nextora')}</span>
													</div>
												)}
											</div>
										)}
									/>
								</MediaUploadCheck>

								<RangeControl
									label={__('Image Width (px)', 'nextora')}
									value={activeElement.imageWidth ?? 200}
									onChange={(val) =>
										updateElement({
											...activeElement,
											imageWidth: typeof val === 'number' ? val : 200,
										})
									}
									min={40}
									max={600}
									step={10}
								/>

								<SelectControl
									label={__('Animation Style', 'nextora')}
									value={activeElement.animationStyle || 'curtain'}
									options={ANIMATION_STYLE_OPTIONS}
									onChange={(val) =>
										updateElement({
											...activeElement,
											animationStyle: val as TextRevealElement['animationStyle'],
										})
									}
									help={__(
										'Curtain: sliding horizontal shutters. Width Expand: expands from center. Zoom: zoom in.',
										'nextora',
									)}
								/>

								<TextControl
									label={__('Image Alt Text', 'nextora')}
									value={activeElement.imageAlt || ''}
									onChange={(val) =>
										updateElement({
											...activeElement,
											imageAlt: val || '',
										})
									}
								/>
							</>
						)}
					</div>
				)}
			</div>

			<div className="nextora-tra-modal__actions">
				<Button variant="primary" onClick={() => onSave(editRow)}>
					{__('Save Row', 'nextora')}
				</Button>
				<Button variant="secondary" onClick={onClose}>
					{__('Cancel', 'nextora')}
				</Button>
			</div>
		</Modal>
	);
}

export default function TextRevealAnimationEdit({
	attributes,
	setAttributes,
}: {
	attributes: TextRevealAnimationAttributes;
	setAttributes: (attrs: Partial<TextRevealAnimationAttributes>) => void;
}) {
	const {
		rows = [],
		headingFontFamily = '',
		textScaleY = 1.35,
		fontWeight = '700',
		textTransform = 'uppercase',
		letterSpacing = 6,
		lineHeight = 1,
		maxWidth = '100%',
		rowGap = 0,
		elementGap = 20,
		imageHeight = 150,
		imageBorderRadius = 16,
		showDividers = true,
		dividerStyle = 'solid',
		dividerWidth = 1,
		dividerOpacity = 0.3,
		textColor = '',
		revealCoverColor = '',
		dividerColor = '',
		enableScrollAnimation = true,
		textRevealDuration = 2.4,
		imageRevealDuration = 1.0,
	} = attributes;

	const [editingRowIndex, setEditingRowIndex] = useState<number | null>(null);

	const fontFamilyOptions = useFontFamilyOptions();
	const colorPalette = useThemeColorPalette();
	const lookupPalette = useMemo(() => getMergedPaletteEntries(colorPalette), [colorPalette]);

	const setThemeColor = (key: keyof TextRevealAnimationAttributes, value: string | undefined) => {
		setAttributes({
			[key]: normalizeColorForStorage(value, lookupPalette),
		});
	};

	const resolveColor = (val?: string, fallback = ''): string => {
		if (!val) return fallback;
		if (val.startsWith('#') || val.startsWith('rgb') || val === 'transparent') return val;
		const entry = lookupPalette.find((p) => p.slug === val);
		if (entry?.color) return entry.color;
		return `var(--wp--preset--color--${val})`;
	};

	const resolvedText = resolveColor(textColor, '#B5A789');
	const resolvedCover = resolveColor(revealCoverColor, '#EBE6DC');
	const resolvedDivider = resolveColor(dividerColor, 'rgba(196, 187, 166, 0.3)');

	const addRow = () => {
		const newRow: TextRevealRow = {
			id: createUid(),
			showDivider: true,
			rowAlign: 'center',
			elements: [
				{
					id: createUid(),
					type: 'text',
					text: 'NEW ROW',
					tag: 'div',
				},
			],
		};
		setAttributes({ rows: [...rows, newRow] });
		setEditingRowIndex(rows.length);
	};

	const updateRow = (index: number, updatedRow: TextRevealRow) => {
		const updated = [...rows];
		updated[index] = updatedRow;
		setAttributes({ rows: updated });
		setEditingRowIndex(null);
	};

	const removeRow = (index: number) => {
		if (rows.length <= 1) return;
		const updated = rows.filter((_, i) => i !== index);
		setAttributes({ rows: updated });
	};

	const moveRow = (index: number, direction: 'up' | 'down') => {
		const target = direction === 'up' ? index - 1 : index + 1;
		if (target < 0 || target >= rows.length) return;
		const updated = [...rows];
		const temp = updated[index];
		updated[index] = updated[target];
		updated[target] = temp;
		setAttributes({ rows: updated });
	};

	const resolvedFontFamily =
		headingFontFamily && headingFontFamily.trim() !== ''
			? `var(--wp--preset--font-family--${headingFontFamily.trim()})`
			: undefined;

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const measureAccurateRowWidth = (row: HTMLElement, baseFontSize: number): number => {
			const textEl = row.querySelector<HTMLElement>('.nextora-tra__text');
			if (!textEl) return 0;

			let width = 0;
			Array.from(textEl.children).forEach((item) => {
				const el = item as HTMLElement;
				if (el.classList.contains('nextora-tra__char')) {
					width += el.getBoundingClientRect().width;
				} else if (el.classList.contains('nextora-tra__img-wrap')) {
					const customWidthStr =
						el.style.getPropertyValue('--tra-img-custom-width') ||
						el.style.getPropertyValue('--tra-el-width');
					const parsedWidth =
						parseFloat(customWidthStr) ||
						(el.classList.contains('small') ||
						el.classList.contains('nextora-tra__img-wrap--small')
							? 100
							: 200);
					const emWidth = (parsedWidth / 200) * 1.05;
					width += emWidth * baseFontSize + 0.24 * baseFontSize;
				}
			});
			return width;
		};

		const calculateFit = () => {
			const containerWidth = container.clientWidth;
			if (!containerWidth) return;

			container.style.fontSize = '100px';

			const rowElements = Array.from(
				container.querySelectorAll<HTMLElement>('.nextora-tra__row'),
			);
			let maxRowWidth = 0;
			rowElements.forEach((r) => {
				const w = measureAccurateRowWidth(r, 100);
				if (w > maxRowWidth) {
					maxRowWidth = w;
				}
			});

			if (maxRowWidth > 0) {
				const baseScale = (containerWidth * 0.95) / maxRowWidth;
				const baseFontSize = Math.round(100 * baseScale);
				const finalSize = Math.max(14, Math.min(130, baseFontSize));

				container.style.setProperty('--tra-auto-font-size', `${finalSize}px`);
				container.style.fontSize = `${finalSize}px`;

				// Find max accurate row width among all rows for equal divider length
				const rowWrappers = Array.from(
					container.querySelectorAll<HTMLElement>('.nextora-tra__row-wrapper'),
				);
				let longestTextWidth = 0;
				rowWrappers.forEach((rw) => {
					const w = Math.round(measureAccurateRowWidth(rw, finalSize));
					if (w > longestTextWidth) {
						longestTextWidth = w;
					}
				});

				// Set all dividers to equal the longest row's width
				rowWrappers.forEach((rw) => {
					const divider = rw.querySelector<HTMLElement>('.nextora-tra__divider');
					if (divider && longestTextWidth > 0) {
						divider.style.setProperty('--tra-divider-text-width', `${longestTextWidth}px`);
						divider.style.width = `${longestTextWidth}px`;
					}
				});
			}
		};

		calculateFit();

		if (typeof ResizeObserver !== 'undefined') {
			const ro = new ResizeObserver(() => {
				calculateFit();
			});
			ro.observe(container);
			return () => ro.disconnect();
		}
	}, [
		rows,
		headingFontFamily,
		textScaleY,
		letterSpacing,
		textTransform,
		fontWeight,
		maxWidth,
	]);

	const blockProps = useBlockProps({
		className: `wp-block-nextora-text-reveal-animation nextora-tra nextora-tra--editor${resolvedFontFamily ? ' nextora-tra--has-heading-font' : ''}`,
		style: {
			...(resolvedFontFamily ? { '--nextora-tra-heading-font-family': resolvedFontFamily } : {}),
			'--tra-text-color': resolvedText,
			'--tra-cover-color': resolvedCover,
			'--tra-divider-color': resolvedDivider,
			'--tra-font-weight': fontWeight,
			'--tra-text-scale-y': textScaleY,
			'--tra-text-transform': textTransform,
			'--tra-letter-spacing': `${letterSpacing}px`,
			'--tra-line-height': lineHeight,
			'--tra-max-width': maxWidth,
			'--tra-row-gap': `${rowGap}px`,
			'--tra-element-gap': `${elementGap}px`,
			'--tra-img-height': `${imageHeight}px`,
			'--tra-img-radius': `${imageBorderRadius}px`,
			'--tra-divider-style': dividerStyle,
			'--tra-divider-width': `${dividerWidth}px`,
			'--tra-divider-opacity': dividerOpacity,
			'--tra-reveal-duration': `${textRevealDuration}s`,
			'--tra-img-duration': `${imageRevealDuration}s`,
		} as React.CSSProperties,
	});

	return (
		<>
			<InspectorControls>
				{/* 1. Rows & Content */}
				<PanelBody title={__('Rows & Content', 'nextora')} initialOpen>
					<div className="nextora-tra-admin-rows">
						{rows.map((row, idx) => {
							const textSummary = row.elements
								.filter((e) => e.type === 'text')
								.map((e) => e.text)
								.join(' ');
							const imgCount = row.elements.filter((e) => e.type === 'image').length;

							return (
								<div key={row.id || idx} className="nextora-tra-admin-row-item">
									<div className="nextora-tra-admin-row-item__info">
										<strong>{sprintf(__('Row %d', 'nextora'), idx + 1)}</strong>
										<span className="nextora-tra-admin-row-item__preview">
											{textSummary || __('(No text)', 'nextora')}{' '}
											{imgCount > 0 && `(${imgCount} img)`}
										</span>
									</div>
									<div className="nextora-tra-admin-row-item__actions">
										<Button
											icon={<InlineSvg name="pencil" />}
											label={__('Edit Row', 'nextora')}
											onClick={() => setEditingRowIndex(idx)}
											size="small"
										/>
										<Button
											icon={<InlineSvg name="chevronUp" />}
											label={__('Move up', 'nextora')}
											onClick={() => moveRow(idx, 'up')}
											disabled={idx === 0}
											size="small"
										/>
										<Button
											icon={<InlineSvg name="chevronDown" />}
											label={__('Move down', 'nextora')}
											onClick={() => moveRow(idx, 'down')}
											disabled={idx === rows.length - 1}
											size="small"
										/>
										<Button
											icon={<InlineSvg name="trash" />}
											label={__('Remove Row', 'nextora')}
											onClick={() => removeRow(idx)}
											disabled={rows.length <= 1}
											size="small"
											isDestructive
										/>
									</div>
								</div>
							);
						})}
					</div>

					<Button
						variant="secondary"
						icon={<InlineSvg name="plus" />}
						onClick={addRow}
						style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
					>
						{__('Add Row', 'nextora')}
					</Button>
				</PanelBody>

				{/* 2. Typography */}
				<PanelBody title={__('Typography', 'nextora')} initialOpen={true}>
					<SelectControl
						label={__('Font Family', 'nextora')}
						value={headingFontFamily || ''}
						options={fontFamilyOptions}
						onChange={(v) => setAttributes({ headingFontFamily: v || '' })}
					/>
					<SelectControl
						label={__('Font Weight', 'nextora')}
						value={fontWeight}
						options={FONT_WEIGHT_OPTIONS}
						onChange={(v) => setAttributes({ fontWeight: v })}
					/>
					<SelectControl
						label={__('Text Transform', 'nextora')}
						value={textTransform}
						options={TEXT_TRANSFORM_OPTIONS}
						onChange={(v) =>
							setAttributes({
								textTransform: v as TextRevealAnimationAttributes['textTransform'],
							})
						}
					/>
					<RangeControl
						label={__('Letter Spacing (px)', 'nextora')}
						value={letterSpacing}
						onChange={(v) => setAttributes({ letterSpacing: v ?? 6 })}
						min={-4}
						max={30}
						step={1}
					/>
					<RangeControl
						label={__('Vertical Stretch (Scale Y)', 'nextora')}
						value={textScaleY ?? 1.35}
						onChange={(v) => setAttributes({ textScaleY: v ?? 1.35 })}
						min={0.8}
						max={2.5}
						step={0.05}
						help={__(
							'Scales the character height up or down for a tall condensed editorial look.',
							'nextora',
						)}
					/>
					<RangeControl
						label={__('Line Height', 'nextora')}
						value={lineHeight}
						onChange={(v) => setAttributes({ lineHeight: v ?? 1 })}
						min={0.7}
						max={2.0}
						step={0.05}
					/>
				</PanelBody>

				{/* 3. Layout & Spacing */}
				<PanelBody title={__('Layout & Spacing', 'nextora')} initialOpen={false}>
					<TextControl
						label={__('Max Width', 'nextora')}
						value={maxWidth}
						onChange={(v) => setAttributes({ maxWidth: v || '100%' })}
						help={__('e.g. 100%, 1200px, 1400px', 'nextora')}
					/>
					<RangeControl
						label={__('Row Gap (px)', 'nextora')}
						value={rowGap}
						onChange={(v) => setAttributes({ rowGap: v ?? 0 })}
						min={0}
						max={60}
						step={2}
					/>
					<RangeControl
						label={__('Element Gap (px)', 'nextora')}
						value={elementGap}
						onChange={(v) => setAttributes({ elementGap: v ?? 20 })}
						min={4}
						max={60}
						step={2}
					/>
					<RangeControl
						label={__('Image Height (px)', 'nextora')}
						value={imageHeight}
						onChange={(v) => setAttributes({ imageHeight: v ?? 150 })}
						min={40}
						max={300}
						step={5}
					/>
					<RangeControl
						label={__('Image Border Radius (px)', 'nextora')}
						value={imageBorderRadius}
						onChange={(v) => setAttributes({ imageBorderRadius: v ?? 16 })}
						min={0}
						max={50}
						step={1}
					/>

					<ToggleControl
						label={__('Show Dividers Between Rows', 'nextora')}
						checked={showDividers}
						onChange={(v) => setAttributes({ showDividers: v })}
					/>
					{showDividers && (
						<>
							<SelectControl
								label={__('Divider Style', 'nextora')}
								value={dividerStyle}
								options={[
									{ label: __('Solid', 'nextora'), value: 'solid' },
									{ label: __('Dashed', 'nextora'), value: 'dashed' },
									{ label: __('Dotted', 'nextora'), value: 'dotted' },
								]}
								onChange={(v) =>
									setAttributes({
										dividerStyle: v as TextRevealAnimationAttributes['dividerStyle'],
									})
								}
							/>
							<RangeControl
								label={__('Divider Width (px)', 'nextora')}
								value={dividerWidth}
								onChange={(v) => setAttributes({ dividerWidth: v ?? 1 })}
								min={1}
								max={6}
								step={1}
							/>
							<RangeControl
								label={__('Divider Opacity', 'nextora')}
								value={dividerOpacity}
								onChange={(v) => setAttributes({ dividerOpacity: v ?? 0.3 })}
								min={0.05}
								max={1}
								step={0.05}
							/>
						</>
					)}
				</PanelBody>

				{/* 4. Colors */}
				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colors={colorPalette}
					colorSettings={[
						{
							value: colorValueForPicker(textColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('textColor', v),
							label: __('Text Color', 'nextora'),
						},
						{
							value: colorValueForPicker(revealCoverColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('revealCoverColor', v),
							label: __('Reveal Shutter / Cover Color', 'nextora'),
						},
						{
							value: colorValueForPicker(dividerColor, colorPalette, lookupPalette),
							onChange: (v) => setThemeColor('dividerColor', v),
							label: __('Divider Color', 'nextora'),
						},
					]}
				/>

				{/* 5. Animation */}
				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						checked={enableScrollAnimation}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
						help={__(
							'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
					/>
					{enableScrollAnimation && (
						<>
							<RangeControl
								label={__('Text Reveal Duration (s)', 'nextora')}
								value={textRevealDuration}
								onChange={(v) => setAttributes({ textRevealDuration: v ?? 2.4 })}
								min={0.5}
								max={4.0}
								step={0.1}
							/>
							<RangeControl
								label={__('Image Shutter Duration (s)', 'nextora')}
								value={imageRevealDuration}
								onChange={(v) => setAttributes({ imageRevealDuration: v ?? 1.0 })}
								min={0.3}
								max={2.5}
								step={0.1}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>

			{/* Block Canvas Preview */}
			<div {...blockProps}>
				<div ref={containerRef} className="nextora-tra__container">
					{rows.map((row, rIdx) => {
						const isLast = rIdx === rows.length - 1;
						const rowDivider = showDividers && row.showDivider !== false && !isLast;
						let charCounter = 0;

						return (
							<div
								key={row.id || rIdx}
								className={`nextora-tra__row-wrapper nextora-tra__row-wrapper--align-${row.rowAlign || 'center'}`}
							>
								<div className="nextora-tra__row">
									<div className="nextora-tra__text">
										{row.elements.map((el, eIdx) => {
											if (el.type === 'text') {
												const chars = Array.from(el.text || '');
												const elColor = resolveColor(el.textColor);
												return chars.map((char, cIdx) => {
													const delay =
														SCATTERED_DELAYS[charCounter % SCATTERED_DELAYS.length];
													charCounter++;
													return (
														<span
															key={`${el.id}-${cIdx}`}
															className="nextora-tra__char"
															style={
																{
																	'--char-delay': `${delay}s`,
																	...(elColor ? { color: elColor } : {}),
																} as React.CSSProperties
															}
														>
															{char === ' ' ? '\u00A0' : char}
														</span>
													);
												});
											}

											// Image element
											const animStyle = el.animationStyle || 'curtain';

											let slotClass = '';
											let slotDelay = '0.5s';
											if (rIdx === 0 && eIdx === 0) {
												slotClass = 'i1';
												slotDelay = '1.0s';
											} else if (rIdx === 0) {
												slotClass = 'i2';
												slotDelay = '1.5s';
											} else if (rIdx === 1) {
												slotClass = 'center nextora-tra__img-wrap--center';
												slotDelay = '0.6s';
											} else if (rIdx === 2 && eIdx === 0) {
												slotClass = 'small i3 nextora-tra__img-wrap--small';
												slotDelay = '1.2s';
											} else if (rIdx === 2) {
												slotClass = 'small i4 nextora-tra__img-wrap--small';
												slotDelay = '0.8s';
											}

											const isSmall = slotClass.includes('small');
											const imgWidth =
												el.imageWidth ?? (isSmall ? 100 : 200);

											if (animStyle === 'expand' && !slotClass.includes('center')) {
												slotClass += ' nextora-tra__img-wrap--expand';
											}

											return (
												<div
													key={el.id || eIdx}
													className={`nextora-tra__img-wrap ${slotClass}`}
													style={
														{
															'--tra-img-custom-width': imgWidth,
															'--tra-el-width': `${imgWidth}px`,
															'--img-delay': slotDelay,
														} as React.CSSProperties
													}
												>
													{el.imageUrl ? (
														<img
															src={el.imageUrl}
															alt={el.imageAlt || ''}
															className="nextora-tra__img"
														/>
													) : (
														<div className="nextora-tra__img-placeholder">
															<InlineSvg name="image" />
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>

								{rowDivider && (
									<hr
										className="nextora-tra__divider"
										style={
											{
												'--tra-divider-delay': `${(0.4 + rIdx * 0.3).toFixed(1)}s`,
											} as React.CSSProperties
										}
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* Modal for editing a row */}
			{editingRowIndex !== null && rows[editingRowIndex] && (
				<RowModal
					row={rows[editingRowIndex]}
					rowIndex={editingRowIndex}
					colorPalette={colorPalette}
					lookupPalette={lookupPalette}
					onSave={(updated) => updateRow(editingRowIndex, updated)}
					onClose={() => setEditingRowIndex(null)}
				/>
			)}
		</>
	);
}
