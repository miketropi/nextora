import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	FontSizePicker,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';
import CompactColorSettings from '../event/compact-settings';
import type { EventTecAttributes, EventTecColorAttribute } from './types';
import {
	colorValueForPicker,
	getMergedPaletteEntries,
	normalizeColorForStorage,
	useThemeColorPalette,
} from '../advanced-icon/color-utils';
import { buildEventColorStyleVars } from './event-color-map';
import { IconPicker } from '../advanced-icon/icon-picker';
import { EventButtonIcon } from '../event/button-icon';

function normalizeFontSizeAttribute(
	value: number | string | undefined,
	selectedItem?: { slug?: string },
): string {
	if (value === undefined || value === '') {
		return '';
	}
	const raw = (selectedItem?.slug || String(value)).trim().toLowerCase();
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
	return map[raw] || raw;
}

interface EditProps {
	attributes: EventTecAttributes;
	setAttributes: (attrs: Partial<EventTecAttributes>) => void;
}

export default function Edit({ attributes, setAttributes }: EditProps): JSX.Element {
	const [buttonIconPickerOpen, setButtonIconPickerOpen] = useState(false);
	const {
		template,
		template3Alternating,
		postsPerPage,
		category,
		timeframe,
		orderBy,
		order,
		excludeIds,
		showRegisterButton = true,
		showDate = true,
		showImage = true,
		showLocation = true,
		showTime = true,
		showDescription = true,
		registerButtonText,
		registerButtonIcon = 'calendar-days',
		cardBackgroundColor,
		cardBorderColor,
		dateBackgroundColor,
		dateDayColor,
		dateAccentColor,
		titleColor,
		titleFontSize = '',
		descriptionFontSize = '',
		metaColor,
		metaIconColor,
		registerBackgroundColor,
		registerTextColor,
		registerBorderColor,
		registerHoverTextColor,
		registerHoverBackgroundColor,
		registerHoverBorderColor,
		paginationColor,
		paginationActiveColor,
		enableScrollAnimation,
		enableAnimation = false,
		animationStyle = 'sequential',
		autoplay,
		autoplayDelay,
		loop,
		speed,
		showArrows,
		showPagination,
		slidesPerView = 3,
		spaceBetween = 24,
		tabletSlides = 2,
		mobileSlides = 1,
		edgeFadeColor = '',
	} = attributes;

	const containerRef = useRef<HTMLDivElement>(null);
	const isSliderTemplate = template === 'template1' || template === 'template2';
	const blockProps = useBlockProps({
		ref: containerRef,
		className: [
			'nextora-event-tec-editor-wrapper',
			template === 'template4' ? ['nextora-event--template4', enableAnimation ? `nextora-event--animation-${animationStyle || 'sequential'}` : ''].filter(Boolean).join(' ') : '',
			template === 'template1' ? 'nextora-event--template1-editor' : '',
			template === 'template2' ? 'nextora-event--template2-editor' : '',
			template === 'template3' ? 'nextora-event--template3-editor' : '',
			(slidesPerView % 1) !== 0 ? 'has-edge-fade-desktop' : '',
			(tabletSlides % 1) !== 0 ? 'has-edge-fade-tablet' : '',
			(mobileSlides % 1) !== 0 ? 'has-edge-fade-mobile' : '',
		].filter(Boolean).join(' '),
		style: {
			...(buildEventColorStyleVars({
				cardBackgroundColor,
				cardBorderColor,
				dateBackgroundColor,
				dateDayColor,
				dateAccentColor,
				titleColor,
				metaColor,
				metaIconColor,
				registerBackgroundColor,
				registerTextColor,
				registerBorderColor,
				registerHoverTextColor,
				registerHoverBackgroundColor,
				registerHoverBorderColor,
				paginationColor,
				paginationActiveColor,
			}) as CSSProperties),
			...(edgeFadeColor ? { '--nextora-event-edge-fade-color': edgeFadeColor } as CSSProperties : {}),
			...(isSliderTemplate
				? ({
						'--nextora-event-editor-slides': String(slidesPerView),
						'--nextora-event-editor-gap': `${spaceBetween}px`,
				  } as CSSProperties)
				: {}),
		},
	});

	// Enable slider interactions in editor (arrow navigation and drag-to-scroll)
	useEffect(() => {
		const root = containerRef.current;
		if (!root || !isSliderTemplate) return;

		const onRootClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;

			const prevBtn = target.closest<HTMLElement>('.nextora-event__arrow--prev');
			const nextBtn = target.closest<HTMLElement>('.nextora-event__arrow--next');
			const swiper = root.querySelector<HTMLElement>('.swiper-wrapper');
			if (!swiper) return;

			const slide = swiper.querySelector<HTMLElement>('.swiper-slide');
			const scrollStep = slide ? slide.offsetWidth + spaceBetween : 320;

			if (prevBtn) {
				e.preventDefault();
				e.stopPropagation();
				swiper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
			} else if (nextBtn) {
				e.preventDefault();
				e.stopPropagation();
				swiper.scrollBy({ left: scrollStep, behavior: 'smooth' });
			}
		};

		let isDown = false;
		let startX = 0;
		let scrollStart = 0;

		const onMouseDown = (e: MouseEvent) => {
			if (e.button !== 0) return;
			const target = e.target as HTMLElement | null;
			if (!target || target.closest('.nextora-event__arrow')) return;

			const swiper = root.querySelector<HTMLElement>('.swiper-wrapper');
			if (!swiper) return;

			const rect = swiper.getBoundingClientRect();
			if (e.clientY > rect.bottom - 16) return;

			isDown = true;
			startX = e.pageX;
			scrollStart = swiper.scrollLeft;
		};

		const onMouseMove = (e: MouseEvent) => {
			if (!isDown) return;
			const swiper = root.querySelector<HTMLElement>('.swiper-wrapper');
			if (!swiper) return;

			const dx = e.pageX - startX;
			if (Math.abs(dx) > 3) {
				swiper.scrollLeft = scrollStart - dx;
				swiper.style.cursor = 'grabbing';
				swiper.style.userSelect = 'none';
			}
		};

		const onMouseUp = () => {
			if (!isDown) return;
			isDown = false;
			const swiper = root.querySelector<HTMLElement>('.swiper-wrapper');
			if (swiper) {
				swiper.style.cursor = '';
				swiper.style.removeProperty('user-select');
			}
		};

		const doc = root.ownerDocument || document;
		const win = doc.defaultView || window;

		root.addEventListener('click', onRootClick);
		root.addEventListener('mousedown', onMouseDown);
		win.addEventListener('mousemove', onMouseMove);
		win.addEventListener('mouseup', onMouseUp);

		return () => {
			root.removeEventListener('click', onRootClick);
			root.removeEventListener('mousedown', onMouseDown);
			win.removeEventListener('mousemove', onMouseMove);
			win.removeEventListener('mouseup', onMouseUp);
		};
	}, [template, slidesPerView, spaceBetween, isSliderTemplate]);

	const themePalette = useThemeColorPalette();
	const lookupPalette = useMemo(
		() => getMergedPaletteEntries(themePalette),
		[themePalette]
	);

	// Fetch event categories for taxonomy tribe_events_cat
	const categories = useSelect((select) => {
		const core = (select as (storeName: string) => Record<string, Function>)('core');
		if (!core || typeof core.getEntityRecords !== 'function') {
			return null;
		}
		return core.getEntityRecords('taxonomy', 'tribe_events_cat', {
			per_page: -1,
		}) as Array<{ id: number; name: string; slug: string }> | null;
	}, []);

	const categoryOptions = useMemo(() => {
		const base: Array<{ label: string; value: string }> = [
			{ label: __('All Categories', 'nextora'), value: '' },
		];
		if (!categories || !Array.isArray(categories)) {
			return base;
		}
		return base.concat(
			categories.map((cat) => ({
				label: cat.name,
				value: String(cat.id),
			}))
		);
	}, [categories]);

	const colorProps = (
		attrKey: EventTecColorAttribute,
		label: string
	) => ({
		value: colorValueForPicker(attributes[attrKey] || '', themePalette, lookupPalette),
		onChange: (next: string | undefined) =>
			setAttributes({
				[attrKey]: normalizeColorForStorage(next || '', lookupPalette),
			} as Partial<EventTecAttributes>),
		label,
	});

	return (
		<>
			<InspectorControls>
				{/* ── Query Settings ── */}
				<PanelBody title={__('Query Settings', 'nextora')} initialOpen={true}>
					<RangeControl
						label={__('Number of Events', 'nextora')}
						value={postsPerPage}
						onChange={(val) => setAttributes({ postsPerPage: val ?? 4 })}
						min={1}
						max={20}
					/>
					<SelectControl
						label={__('Event Category', 'nextora')}
						value={category}
						options={categoryOptions}
						onChange={(val) => setAttributes({ category: val })}
					/>
					<SelectControl
						label={__('Timeframe', 'nextora')}
						value={timeframe as 'all' | 'upcoming' | 'past'}
						options={[
							{ label: __('Upcoming Events', 'nextora'), value: 'upcoming' },
							{ label: __('Past Events', 'nextora'), value: 'past' },
							{ label: __('All Events', 'nextora'), value: 'all' },
						]}
						onChange={(val) => setAttributes({ timeframe: val })}
					/>
					<SelectControl
						label={__('Order By', 'nextora')}
						value={orderBy as 'title' | 'date' | 'rand' | 'event_date'}
						options={[
							{ label: __('Event Start Date', 'nextora'), value: 'event_date' },
							{ label: __('Publish Date', 'nextora'), value: 'date' },
							{ label: __('Event Title', 'nextora'), value: 'title' },
							{ label: __('Random', 'nextora'), value: 'rand' },
						]}
						onChange={(val) => setAttributes({ orderBy: val })}
					/>
					<SelectControl
						label={__('Order', 'nextora')}
						value={order as 'desc' | 'asc'}
						options={[
							{ label: __('Ascending (ASC)', 'nextora'), value: 'asc' },
							{ label: __('Descending (DESC)', 'nextora'), value: 'desc' },
						]}
						onChange={(val) => setAttributes({ order: val })}
					/>
					<TextControl
						label={__('Exclude Event IDs', 'nextora')}
						value={excludeIds}
						help={__('Comma-separated event IDs to exclude (e.g. 102, 105).', 'nextora')}
						onChange={(val) => setAttributes({ excludeIds: val })}
					/>
				</PanelBody>

				{/* ── Layout & Template ── */}
				<PanelBody title={__('Layout & Template', 'nextora')} initialOpen={true}>
					<SelectControl
						label={__('Template', 'nextora')}
						value={template as 'default' | 'template1' | 'template2' | 'template3' | 'template4'}
						options={[
							{ label: __('Default (List)', 'nextora'), value: 'default' },
							{ label: __('Template 1 (Card Slider)', 'nextora'), value: 'template1' },
							{ label: __('Template 2 (Horizontal Card Slider)', 'nextora'), value: 'template2' },
							{ label: __('Template 3 (Editorial Alternating)', 'nextora'), value: 'template3' },
							{ label: __('Template 4 — Compact List', 'nextora'), value: 'template4' },
						]}
						onChange={(val) => setAttributes({ template: val })}
					/>
					{template === 'template3' && (
						<ToggleControl
							label={__('Alternating Layout', 'nextora')}
							help={__('Alternates the direction of odd/even items.', 'nextora')}
							checked={Boolean(template3Alternating)}
							onChange={(val) => setAttributes({ template3Alternating: val })}
						/>
					)}
				</PanelBody>

				{/* ── Settings / Button Settings ── */}
				<PanelBody title={template === 'template4' ? __('Settings', 'nextora') : __('Register Button', 'nextora')} initialOpen={false}>
					{template === 'template4' ? (
						<>
							<ToggleControl
								label={__('Show date badge', 'nextora')}
								checked={showDate !== false}
								onChange={(val) => setAttributes({ showDate: val })}
							/>
							<ToggleControl
								label={__('Show image', 'nextora')}
								checked={showImage !== false}
								onChange={(val) => setAttributes({ showImage: val })}
							/>
							<ToggleControl
								label={__('Show location', 'nextora')}
								checked={showLocation !== false}
								onChange={(val) => setAttributes({ showLocation: val })}
							/>
							<ToggleControl
								label={__('Show time', 'nextora')}
								checked={showTime !== false}
								onChange={(val) => setAttributes({ showTime: val })}
							/>
							<ToggleControl
								label={__('Show description', 'nextora')}
								checked={showDescription !== false}
								onChange={(val) => setAttributes({ showDescription: val })}
							/>
							<ToggleControl
								label={__('Show event arrow', 'nextora')}
								checked={showRegisterButton !== false}
								onChange={(val) => setAttributes({ showRegisterButton: val })}
							/>
						</>
					) : (
						<>
							<ToggleControl
								label={__('Show Register Button', 'nextora')}
								checked={showRegisterButton !== false}
								onChange={(val) => setAttributes({ showRegisterButton: val })}
							/>
							{showRegisterButton && (
								<>
									<TextControl
										label={__('Default Button Text', 'nextora')}
										value={registerButtonText}
										onChange={(val) => setAttributes({ registerButtonText: val })}
									/>
									<BaseControl
										label={__('Button icon', 'nextora')}
										help={__(
											'Choose an icon before the button label (e.g. calendar-days for Register, ticket for Get ticket).',
											'nextora',
										)}
									>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '10px',
												marginTop: '6px',
												flexWrap: 'wrap',
											}}
										>
											<Button
												variant="secondary"
												onClick={() => setButtonIconPickerOpen(true)}
											>
												{__('Choose icon', 'nextora')}
											</Button>
											<div
												style={{
													display: 'inline-flex',
													alignItems: 'center',
													gap: '8px',
													padding: '4px 10px',
													background: '#f0f0f1',
													borderRadius: '4px',
												}}
											>
												<EventButtonIcon
													iconName={registerButtonIcon || 'calendar-days'}
													size={16}
												/>
												<code style={{ fontSize: '13px', background: 'transparent' }}>
													{registerButtonIcon || 'calendar-days'}
												</code>
											</div>
											{registerButtonIcon && registerButtonIcon !== 'calendar-days' ? (
												<Button
													variant="link"
													isDestructive
													onClick={() => setAttributes({ registerButtonIcon: 'calendar-days' })}
												>
													{__('Reset', 'nextora')}
												</Button>
											) : null}
										</div>
									</BaseControl>
									{buttonIconPickerOpen ? (
										<IconPicker
											currentIcon={registerButtonIcon || 'calendar-days'}
											onSelect={(iconName) => {
												setAttributes({ registerButtonIcon: iconName });
												setButtonIconPickerOpen(false);
											}}
											onClose={() => setButtonIconPickerOpen(false)}
										/>
									) : null}
								</>
							)}
						</>
					)}
				</PanelBody>

				{/* ── Slider Settings ── */}
				{isSliderTemplate && (
					<PanelBody title={__('Slider Settings', 'nextora')} initialOpen={false}>
						<RangeControl
							label={__('Slides Per View (Desktop)', 'nextora')}
							value={slidesPerView}
							onChange={(val) => setAttributes({ slidesPerView: val !== undefined ? Math.round(val * 100) / 100 : 3 })}
							min={1}
							max={6}
							step={0.1}
						/>
						<RangeControl
							label={__('Slides Per View (Tablet)', 'nextora')}
							value={tabletSlides}
							onChange={(val) => setAttributes({ tabletSlides: val !== undefined ? Math.round(val * 100) / 100 : 2 })}
							min={1}
							max={4}
							step={0.1}
						/>
						<RangeControl
							label={__('Slides Per View (Mobile)', 'nextora')}
							value={mobileSlides}
							onChange={(val) => setAttributes({ mobileSlides: val !== undefined ? Math.round(val * 100) / 100 : 1 })}
							min={1}
							max={3}
							step={0.1}
						/>
						<RangeControl
							label={__('Space Between Slides (px)', 'nextora')}
							value={spaceBetween}
							onChange={(val) => setAttributes({ spaceBetween: val ?? 24 })}
							min={0}
							max={60}
						/>
						<ToggleControl
							label={__('Autoplay', 'nextora')}
							checked={autoplay}
							onChange={(val) => setAttributes({ autoplay: val })}
						/>
						{autoplay && (
							<RangeControl
								label={__('Autoplay Delay (ms)', 'nextora')}
								value={autoplayDelay}
								onChange={(val) => setAttributes({ autoplayDelay: val ?? 5000 })}
								min={2000}
								max={15000}
								step={500}
							/>
						)}
						<ToggleControl
							label={__('Loop', 'nextora')}
							checked={loop}
							onChange={(val) => setAttributes({ loop: val })}
						/>
						<RangeControl
							label={__('Transition Speed (ms)', 'nextora')}
							value={speed}
							onChange={(val) => setAttributes({ speed: val ?? 600 })}
							min={200}
							max={2000}
							step={50}
						/>
						<ToggleControl
							label={__('Show Arrows', 'nextora')}
							checked={showArrows}
							onChange={(val) => setAttributes({ showArrows: val })}
						/>
						<ToggleControl
							label={__('Show Pagination Dots', 'nextora')}
							checked={showPagination}
							onChange={(val) => setAttributes({ showPagination: val })}
						/>
					</PanelBody>
				)}

				{/* ── Color Settings ── */}
				{template === 'template4' ? <CompactColorSettings attributes={attributes} setAttributes={setAttributes} /> : <PanelColorSettings
					title={__('Color Settings', 'nextora')}
					colorSettings={[
						colorProps('cardBackgroundColor', __('Card background', 'nextora')),
						colorProps('cardBorderColor', __('Card border', 'nextora')),
						colorProps('dateBackgroundColor', __('Date badge background', 'nextora')),
						colorProps('dateDayColor', __('Date day text', 'nextora')),
						colorProps('dateAccentColor', __('Date label', 'nextora')),
						colorProps('titleColor', __('Event title', 'nextora')),
						colorProps('metaColor', __('Details meta text', 'nextora')),
						colorProps('metaIconColor', __('Details icon color', 'nextora')),
						colorProps('registerBackgroundColor', __('Register button background', 'nextora')),
						colorProps('registerTextColor', __('Register button text', 'nextora')),
						colorProps('registerBorderColor', __('Register button border', 'nextora')),
						colorProps('registerHoverBackgroundColor', __('Register button hover background', 'nextora')),
						colorProps('registerHoverTextColor', __('Register button hover text', 'nextora')),
						colorProps('registerHoverBorderColor', __('Register button hover border', 'nextora')),
						...(isSliderTemplate
							? [
									colorProps('paginationColor', __('Pagination dot', 'nextora')),
									colorProps('paginationActiveColor', __('Pagination dot active', 'nextora')),
									colorProps('edgeFadeColor', __('Edge fade color', 'nextora')),
								]
							: []),
					]}
				/>}

				{/* ── Animation Settings ── */}
				{template === 'template4' && (
					<PanelBody
						title={__('Animation', 'nextora')}
						initialOpen={Boolean(enableAnimation)}
					>
						<ToggleControl
							label={__('Enable Sequential Animation', 'nextora')}
							help={__(
								'Sequential: cards appear one by one with a gentle upward motion.',
								'nextora',
							)}
							checked={Boolean(enableAnimation)}
							onChange={(val) => setAttributes({ enableAnimation: val })}
						/>
						{enableAnimation && (
							<SelectControl
								label={__('Animation Style', 'nextora')}
								value={animationStyle || 'sequential'}
								options={[
									{
										label: __(
											'Sequential (Cards appear one by one)',
											'nextora',
										),
										value: 'sequential',
									},
									{
										label: __(
											'Fade Up (All items together)',
											'nextora',
										),
										value: 'default',
									},
								]}
								onChange={(val) =>
									setAttributes({
										animationStyle: val as 'sequential' | 'default',
									})
								}
								help={__(
									'Default: all items fade up together. Sequential: cards appear one by one with a gentle upward motion.',
									'nextora',
								)}
							/>
						)}
					</PanelBody>
				)}

				{/* ── Typography Settings ── */}
				<PanelBody title={__('Typography', 'nextora')} initialOpen={template === 'template3'}>
					<BaseControl
						label={__('Card title font size', 'nextora')}
						id="nextora-event-tec-title-font-size"
						help={template === 'template4' ? __('Default: 14px for Compact List.', 'nextora') : __('Default inherits global heading size.', 'nextora')}
					>
						<FontSizePicker
							value={titleFontSize || undefined}
							valueMode="slug"
							onChange={(value, selectedItem) =>
								setAttributes({
									titleFontSize: normalizeFontSizeAttribute(value, selectedItem),
								})
							}
						/>
					</BaseControl>
					<BaseControl
						label={__('Card description font size', 'nextora')}
						id="nextora-event-tec-description-font-size"
						help={template === 'template4' ? __('Default: 12px for Compact List.', 'nextora') : __('Default inherits global body size.', 'nextora')}
					>
						<FontSizePicker
							value={descriptionFontSize || undefined}
							valueMode="slug"
							onChange={(value, selectedItem) =>
								setAttributes({
									descriptionFontSize: normalizeFontSizeAttribute(value, selectedItem),
								})
							}
						/>
					</BaseControl>
				</PanelBody>

				{/* ── Animation Settings ── */}
				{template !== 'template4' && (
					<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
						<ToggleControl
							label={__('Enable scroll reveal animation', 'nextora')}
							checked={enableScrollAnimation}
							onChange={(val) => setAttributes({ enableScrollAnimation: val })}
						/>
					</PanelBody>
				)}
			</InspectorControls>

			<div {...blockProps}>
				<ServerSideRender
					block="nextora/event-the-events-calendar"
					attributes={attributes as unknown as Record<string, unknown>}
				/>
			</div>
		</>
	);
}
