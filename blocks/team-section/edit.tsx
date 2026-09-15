import type { CSSProperties } from 'react';
import { useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Modal,
	PanelBody,
	RadioControl,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import type { TeamMember, TeamSectionAttributes } from './types';
import {
	buildSectionStyleVars,
	createMemberId,
	getTemplateDefaultAttributes,
	normalizeMembers,
	resolvePhotoUrl,
} from './member-utils';
import MemberEditForm from './member-edit-form';
import {
	normalizeColorForStorage,
	colorValueForPicker,
	useThemeColorPalette,
	getColorProps,
} from './color-utils';

interface EditProps {
	attributes: TeamSectionAttributes;
	setAttributes: (attrs: Partial<TeamSectionAttributes>) => void;
}

const layoutModeOptions = [
	{ label: __('Carousel', 'nextora'), value: 'carousel' },
	{ label: __('Grid', 'nextora'), value: 'grid' },
];

const cardTemplateOptions = [
	{ label: __('Default', 'nextora'), value: 'default' },
	{ label: __('Template 01', 'nextora'), value: 'overlay-social' },
	{ label: __('Template 02', 'nextora'), value: 'template-02' },
];

const photoAspectRatioOptions = [
	{ label: __('Portrait 3:4', 'nextora'), value: '3/4' },
	{ label: __('Landscape 4:3', 'nextora'), value: '4/3' },
	{ label: __('Square 1:1', 'nextora'), value: '1/1' },
	{ label: __('Widescreen 16:9', 'nextora'), value: '16/9' },
];

const paginationTypeOptions = [
	{ label: __('Bullets', 'nextora'), value: 'bullets' },
	{ label: __('Fraction', 'nextora'), value: 'fraction' },
	{ label: __('Progress bar', 'nextora'), value: 'progressbar' },
];

const ICONS = {
	pencil:
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
	chevronUp:
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
	chevronDown:
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
	trash:
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
	plus:
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
};

function InlineSvg({ name, className }: { name: keyof typeof ICONS; className?: string }): JSX.Element {
	return (
		<span
			className={className}
			dangerouslySetInnerHTML={{ __html: ICONS[name] }}
			style={{ display: 'inline-flex', alignItems: 'center' }}
		/>
	);
}

function renderSocialIcon(platform: string): JSX.Element {
	switch (platform) {
		case 'linkedin':
			return (
				<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
					<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
				</svg>
			);
		case 'email':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
				</svg>
			);
		case 'twitter':
		case 'x':
			return (
				<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
				</svg>
			);
		case 'github':
			return (
				<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
					<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
				</svg>
			);
		case 'instagram':
			return (
				<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
					<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
				</svg>
			);
		case 'facebook':
			return (
				<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
				</svg>
			);
		case 'website':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
				</svg>
			);
		default:
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
				</svg>
			);
	}
}

const socialPlatformLabels: Record<string, string> = {
	linkedin: 'LinkedIn',
	twitter: 'Twitter / X',
	x: 'Twitter / X',
	github: 'GitHub',
	instagram: 'Instagram',
	facebook: 'Facebook',
	website: __('Website', 'nextora'),
	email: __('Email', 'nextora'),
};

function getSocialPlatformLabel(platform: string): string {
	const key = (platform || '').toLowerCase().trim();
	return socialPlatformLabels[key] || (key ? key.charAt(0).toUpperCase() + key.slice(1) : __('Website', 'nextora'));
}

export default function TeamSectionEdit({ attributes, setAttributes }: EditProps) {
	const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
	const [activeDeckIndex, setActiveDeckIndex] = useState(0);

	const palette = useThemeColorPalette();

	useEffect(() => {
		const raw = attributes as unknown as Record<string, unknown>;
		if (typeof raw.backgroundColor === 'string' && raw.backgroundColor !== '' && !attributes.sectionBackgroundColor) {
			setAttributes({ sectionBackgroundColor: normalizeColorForStorage(raw.backgroundColor as string, palette) });
		}
	}, []);

	const members = normalizeMembers(attributes.members);
	const editingMember = editingMemberId
		? members.find((m) => m.id === editingMemberId)
		: undefined;
	const photoIds = members.map((m) => m.photoId).filter((id) => id > 0);

	const mediaRecords = useSelect(
		(select) => {
			const { getMedia } = select('core') as {
				getMedia: (id: number) => { source_url?: string } | undefined;
			};
			return photoIds.map((id) => getMedia(id));
		},
		[photoIds.join(',')],
	);

	const mediaUrlById = new Map<number, string>();
	photoIds.forEach((id, i) => {
		const url = mediaRecords[i]?.source_url;
		if (url) {
			mediaUrlById.set(id, url);
		}
	});

	const {
		layoutMode = 'carousel',
		gridColumns = 4,
		gridColumnGap = 24,
		gridRowGap = 24,
		cardTemplate = 'default',
		photoAspectRatio = '3/4',
		slidesPerView = 4,
		slidesPerViewTablet = 2.5,
		slidesPerViewMobile = 1.2,
		spaceBetween = 24,
		speed = 500,
		loop = false,
		autoplay = false,
		autoplayDelay = 4000,
		pauseOnHover = true,
		showPagination = true,
		paginationType = 'bullets',
		showArrows = false,
		freeMode = false,
		grabCursor = true,
		sectionBackgroundColor = '',
		paginationColor = '',
		paginationActiveColor = '',
		cardBackgroundColor = '',
		tagBackgroundColor = '',
		tagTextColor = '',
		cardBorderRadius,
		nameColor = '',
		roleColor = '',
		bioColor = '',
		socialColor = '',
		enableScrollAnimation = true,
		enablePopup = false,
	} = attributes;

	const templateDefaults = getTemplateDefaultAttributes(cardTemplate);
	const effectiveCardBorderRadius = cardBorderRadius ?? templateDefaults.cardBorderRadius ?? 16;
	const effectivePhotoAspectRatio = photoAspectRatio ?? templateDefaults.photoAspectRatio ?? '3/4';

	const nameColorProps = getColorProps(nameColor, 'color');
	const roleColorProps = getColorProps(roleColor, 'color');
	const bioColorProps = getColorProps(bioColor, 'color');
	const socialColorProps = getColorProps(socialColor, 'color');
	const cardBgProps = getColorProps(cardBackgroundColor, 'background');
	const tagBgProps = getColorProps(tagBackgroundColor, 'background');
	const tagTextColorProps = getColorProps(tagTextColor, 'color');
	const sectionBgProps = getColorProps(sectionBackgroundColor, 'background');

	const blockProps = useBlockProps({
		className: [
			'nextora-team-section',
			'nextora-team-section--editor',
			`nextora-team-section--layout-${layoutMode}`,
			`nextora-team-section--template-${cardTemplate}`,
			sectionBgProps.className,
		]
			.filter(Boolean)
			.join(' '),
		style: {
			...buildSectionStyleVars({
				gridColumns,
				gridColumnGap,
				gridRowGap,
				photoAspectRatio: effectivePhotoAspectRatio,
				spaceBetween,
				slidesPerView,
				sectionBackgroundColor,
				paginationColor,
				paginationActiveColor,
				cardBackgroundColor,
				tagBackgroundColor,
				tagTextColor,
				nameColor,
				roleColor,
				bioColor,
				socialColor,
				cardBorderRadius: effectiveCardBorderRadius,
			}),
			...sectionBgProps.style,
		} as CSSProperties,
	});

	const setMembers = (next: TeamMember[]): void => {
		setAttributes({ members: next });
	};

	const patchMember = (id: string, patch: Partial<TeamMember>): void => {
		setMembers(members.map((m) => (m.id === id ? { ...m, ...patch } : m)));
	};

	const addMember = (): void => {
		const id = createMemberId();
		setMembers([
			...members,
			{
				id,
				photoId: 0,
				photoUrl: '',
				photoAlt: '',
				name: '',
				role: '',
				tags: [],
				bio: '',
				bioLineClamp: 3,
				detail: '',
				showSocialLinks: false,
				socialLinks: [],
				cardBorderRadius,
			},
		]);
		setEditingMemberId(id);
	};

	const removeMember = (id: string): void => {
		if (members.length <= 1) {
			return;
		}
		setMembers(members.filter((m) => m.id !== id));
		if (editingMemberId === id) {
			setEditingMemberId(null);
		}
	};

	const openMemberEditor = (id: string): void => {
		setEditingMemberId(id);
	};

	const moveMember = (id: string, delta: number): void => {
		const index = members.findIndex((m) => m.id === id);
		const target = index + delta;
		if (index < 0 || target < 0 || target >= members.length) {
			return;
		}
		const next = [...members];
		const tmp = next[index];
		next[index] = next[target];
		next[target] = tmp;
		setMembers(next);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Members', 'nextora')} initialOpen>
					{members.length === 0 && (
						<p className="components-base-control__help" style={{ marginBottom: '8px' }}>
							{__('No members yet. Click "Add member" to create one.', 'nextora')}
						</p>
					)}
					{members.map((member, index) => {
						const photoUrl = resolvePhotoUrl(member, mediaUrlById);
						return (
							<div
								key={member.id}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '6px',
									marginBottom: '6px',
									padding: '6px 8px',
									background: '#f9f9f9',
									border: '1px solid #ddd',
									borderRadius: '4px',
								}}
							>
								<div
									style={{
										flex: 1,
										display: 'flex',
										alignItems: 'center',
										gap: '8px',
										overflow: 'hidden',
										minWidth: 0,
									}}
								>
									{photoUrl ? (
										<img
											src={photoUrl}
											alt=""
											style={{
												width: '32px',
												height: '24px',
												objectFit: 'cover',
												borderRadius: '2px',
												flexShrink: 0,
											}}
										/>
									) : null}
									<span
										style={{
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											whiteSpace: 'nowrap',
											fontSize: '12px',
											lineHeight: '1.4',
											fontWeight: 500,
										}}
									>
										{member.name || sprintf(__('Member %d', 'nextora'), index + 1)}
									</span>
								</div>
								<Button
									icon={<InlineSvg name="pencil" />}
									label={__('Edit', 'nextora')}
									onClick={() => openMemberEditor(member.id)}
									isSmall
								/>
								<Button
									icon={<InlineSvg name="chevronUp" />}
									label={__('Move up', 'nextora')}
									onClick={() => moveMember(member.id, -1)}
									disabled={index === 0}
									isSmall
								/>
								<Button
									icon={<InlineSvg name="chevronDown" />}
									label={__('Move down', 'nextora')}
									onClick={() => moveMember(member.id, 1)}
									disabled={index >= members.length - 1}
									isSmall
								/>
								<Button
									icon={<InlineSvg name="trash" />}
									label={__('Remove', 'nextora')}
									onClick={() => removeMember(member.id)}
									disabled={members.length <= 1}
									isSmall
									isDestructive
								/>
							</div>
						);
					})}
					<Button
						variant="secondary"
						onClick={addMember}
						icon={<InlineSvg name="plus" />}
						style={{ width: '100%', justifyContent: 'center', marginTop: members.length > 0 ? '4px' : '0' }}
					>
						{__('Add member', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Card template', 'nextora')}
						help={__('Choose the visual style for team member cards.', 'nextora')}
						value={cardTemplate}
						options={cardTemplateOptions}
						onChange={(v) => {
							const nextTpl = (v as TeamSectionAttributes['cardTemplate']) ?? 'default';
							setAttributes({
								cardTemplate: nextTpl,
								...getTemplateDefaultAttributes(nextTpl),
							});
						}}
					/>

					<RadioControl
						label={__('Photo aspect ratio', 'nextora')}
						selected={photoAspectRatio}
						options={photoAspectRatioOptions}
						onChange={(v) =>
							setAttributes({ photoAspectRatio: (v as TeamSectionAttributes['photoAspectRatio']) ?? '3/4' })
						}
					/>

					{cardTemplate !== 'template-02' && (
						<>
							<SelectControl
								label={__('Desktop layout', 'nextora')}
								help={
									layoutMode === 'grid'
										? __(
												'Desktop shows a grid; tablet and mobile use a carousel.',
												'nextora',
											)
										: __(
												'All screen sizes use a carousel.',
												'nextora',
											)
								}
								value={layoutMode}
								options={layoutModeOptions}
								onChange={(v) =>
									setAttributes({ layoutMode: (v as TeamSectionAttributes['layoutMode']) ?? 'carousel' })
								}
							/>

							{layoutMode === 'grid' && (
								<>
									<RangeControl
										label={__('Grid columns', 'nextora')}
										value={gridColumns}
										onChange={(v) => setAttributes({ gridColumns: v ?? 4 })}
										min={1}
										max={6}
									/>
									<RangeControl
										label={__('Column gap (px)', 'nextora')}
										value={gridColumnGap}
										onChange={(v) => setAttributes({ gridColumnGap: v ?? 24 })}
										min={0}
										max={60}
									/>
									<RangeControl
										label={__('Row gap (px)', 'nextora')}
										value={gridRowGap}
										onChange={(v) => setAttributes({ gridRowGap: v ?? 24 })}
										min={0}
										max={60}
									/>
								</>
							)}

							<p className="nextora-team-section__inspector-subheading">
								{layoutMode === 'grid'
									? __('Carousel (tablet & mobile)', 'nextora')
									: __('Carousel', 'nextora')}
							</p>

							{layoutMode === 'carousel' && (
								<RangeControl
									label={__('Slides per view (desktop)', 'nextora')}
									value={slidesPerView}
									onChange={(v) => setAttributes({ slidesPerView: v ?? 4 })}
									min={1}
									max={6}
									step={0.5}
								/>
							)}
							<RangeControl
								label={__('Slides per view (tablet)', 'nextora')}
								value={slidesPerViewTablet}
								onChange={(v) => setAttributes({ slidesPerViewTablet: v ?? 2.5 })}
								min={1}
								max={4}
								step={0.5}
							/>
							<RangeControl
								label={__('Slides per view (mobile)', 'nextora')}
								help={__(
									'Fractional values show a peek of the next card.',
									'nextora',
								)}
								value={slidesPerViewMobile}
								onChange={(v) => setAttributes({ slidesPerViewMobile: v ?? 1.2 })}
								min={1}
								max={2}
								step={0.1}
							/>
							<RangeControl
								label={__('Space between (px)', 'nextora')}
								help={
									layoutMode === 'grid'
										? __('Spacing for tablet & mobile carousel only (desktop uses Column/Row gap).', 'nextora')
										: undefined
								}
								value={spaceBetween}
								onChange={(v) => setAttributes({ spaceBetween: v ?? 24 })}
								min={0}
								max={60}
							/>
						</>
					)}

					<RangeControl
						label={__('Transition speed (ms)', 'nextora')}
						value={speed}
						onChange={(v) => setAttributes({ speed: v ?? 500 })}
						min={100}
						max={2000}
						step={100}
					/>
					<ToggleControl
						label={__('Loop', 'nextora')}
						checked={loop}
						onChange={(v) => setAttributes({ loop: v })}
					/>
					{cardTemplate !== 'template-02' && (
						<>
							<ToggleControl
								label={__('Free mode', 'nextora')}
								checked={freeMode}
								onChange={(v) => setAttributes({ freeMode: v })}
							/>
							<ToggleControl
								label={__('Grab cursor', 'nextora')}
								checked={grabCursor}
								onChange={(v) => setAttributes({ grabCursor: v })}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Autoplay', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable autoplay', 'nextora')}
						checked={autoplay}
						onChange={(v) => setAttributes({ autoplay: v })}
					/>
					{autoplay && (
						<>
							<RangeControl
								label={__('Delay (ms)', 'nextora')}
								value={autoplayDelay}
								onChange={(v) => setAttributes({ autoplayDelay: v ?? 4000 })}
								min={1000}
								max={10000}
								step={500}
							/>
							<ToggleControl
								label={__('Pause on hover', 'nextora')}
								checked={pauseOnHover}
								onChange={(v) => setAttributes({ pauseOnHover: v })}
							/>
						</>
					)}
				</PanelBody>

				{cardTemplate !== 'template-02' && (
					<PanelBody title={__('Pagination', 'nextora')} initialOpen={false}>
						<ToggleControl
							label={__('Show pagination', 'nextora')}
							checked={showPagination}
							onChange={(v) => setAttributes({ showPagination: v })}
						/>
						{showPagination && (
							<SelectControl
								label={__('Type', 'nextora')}
								value={paginationType}
								options={paginationTypeOptions}
								onChange={(v) =>
									setAttributes({
										paginationType:
											(v as TeamSectionAttributes['paginationType']) ?? 'bullets',
									})
								}
							/>
						)}
					</PanelBody>
				)}

				<PanelBody title={__('Navigation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show arrows', 'nextora')}
						checked={showArrows}
						onChange={(v) => setAttributes({ showArrows: v })}
					/>
				</PanelBody>

				<PanelColorSettings
					enableAlpha
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: colorValueForPicker(sectionBackgroundColor, palette),
							onChange: (v) => setAttributes({ sectionBackgroundColor: normalizeColorForStorage(v, palette) }),
							label: __('Background', 'nextora'),
						},
						{
							value: colorValueForPicker(nameColor, palette),
							onChange: (v: string | undefined) => setAttributes({ nameColor: normalizeColorForStorage(v, palette) }),
							label: __('Heading / Name', 'nextora'),
						},
						{
							value: colorValueForPicker(roleColor, palette),
							onChange: (v: string | undefined) => setAttributes({ roleColor: normalizeColorForStorage(v, palette) }),
							label: __('Role', 'nextora'),
						},
						...(cardTemplate !== 'overlay-social'
							? [
									{
										value: colorValueForPicker(bioColor, palette),
										onChange: (v: string | undefined) => setAttributes({ bioColor: normalizeColorForStorage(v, palette) }),
										label: __('Description / Bio', 'nextora'),
									},
									{
										value: colorValueForPicker(cardBackgroundColor, palette),
										onChange: (v: string | undefined) => setAttributes({ cardBackgroundColor: normalizeColorForStorage(v, palette) }),
										label: __('Card background', 'nextora'),
									},
									{
										value: colorValueForPicker(tagBackgroundColor, palette),
										onChange: (v: string | undefined) => setAttributes({ tagBackgroundColor: normalizeColorForStorage(v, palette) }),
										label: __('Tag background', 'nextora'),
									},
									{
										value: colorValueForPicker(tagTextColor, palette),
										onChange: (v: string | undefined) => setAttributes({ tagTextColor: normalizeColorForStorage(v, palette) }),
										label: __('Tag text', 'nextora'),
									},
							  ]
							: []),
						{
							value: colorValueForPicker(socialColor, palette),
							onChange: (v: string | undefined) => setAttributes({ socialColor: normalizeColorForStorage(v, palette) }),
							label: __('Social links', 'nextora'),
						},
						...(showPagination && cardTemplate !== 'template-02'
							? [
									{
										value: colorValueForPicker(paginationColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ paginationColor: normalizeColorForStorage(v, palette) }),
										label: __('Pagination dot', 'nextora'),
									},
									{
										value: colorValueForPicker(paginationActiveColor, palette),
										onChange: (v: string | undefined) =>
											setAttributes({ paginationActiveColor: normalizeColorForStorage(v, palette) }),
										label: __('Active pagination', 'nextora'),
									},
								]
							: []),
					]}
				/>

				<PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Animate on scroll', 'nextora')}
						help={__(
							'Fade content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
							'nextora',
						)}
						checked={enableScrollAnimation !== false}
						onChange={(v) => setAttributes({ enableScrollAnimation: v })}
					/>
				</PanelBody>

				<PanelBody title={__('Popup Drawer', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Enable member detail popup', 'nextora')}
						help={__(
							'When enabled, clicking a team member opens a slide-over panel from the right with full details.',
							'nextora',
						)}
						checked={enablePopup === true}
						onChange={(v) => setAttributes({ enablePopup: v })}
					/>
				</PanelBody>
			</InspectorControls>

			{editingMember && (
				<Modal
					className="nextora-team-section__member-modal"
					title={
						editingMember.name
							? sprintf(__('Edit: %s', 'nextora'), editingMember.name)
							: __('Edit team member', 'nextora')
					}
					headerActions={
						<Button variant="primary" onClick={() => setEditingMemberId(null)}>
							{__('Done', 'nextora')}
						</Button>
					}
					onRequestClose={() => setEditingMemberId(null)}
				>
					<MemberEditForm
						member={editingMember}
						photoUrl={resolvePhotoUrl(editingMember, mediaUrlById)}
						cardTemplate={cardTemplate}
						enablePopup={enablePopup}
						onPatch={(patch) => patchMember(editingMember.id, patch)}
					/>
				</Modal>
			)}

			<div {...blockProps}>
				<div className="nextora-team-section__inner">
					{cardTemplate === 'template-02' ? (
						(() => {
							const safeActiveDeckIndex =
								members.length > 0
									? ((activeDeckIndex % members.length) + members.length) % members.length
									: 0;
							const currentDeckMember = members[safeActiveDeckIndex] ?? members[0];

							return (
								<div className="nextora-team-section__deck-container">
									<div className="nextora-team-section__deck-grid">
										<div className="nextora-team-section__deck-photo-col">
											<div className="nextora-team-section__deck-photo-stack">
												{members.map((member, idx) => {
													const photoUrl = resolvePhotoUrl(member, mediaUrlById);
													const isCurrent = idx === safeActiveDeckIndex;
													const offsetFromCurrent =
														(idx - safeActiveDeckIndex + members.length) % members.length;
													const rotateDeg = isCurrent ? 0 : ((offsetFromCurrent * 6) % 15) - 6;
													const zIndex = isCurrent ? 10 : members.length - offsetFromCurrent;
													const memberRadius =
														member.cardBorderRadius && member.cardBorderRadius > 0
															? member.cardBorderRadius
															: effectiveCardBorderRadius;

													return (
														<div
															key={member.id}
															className={`nextora-team-section__deck-photo-card ${isCurrent ? 'is-active' : ''} ${cardBgProps.className}`.trim()}
															style={{
																transform: `rotate(${rotateDeg}deg) scale(${isCurrent ? 1 : 0.94})`,
																zIndex,
																borderRadius: `${memberRadius}px`,
																...cardBgProps.style,
															}}
															onClick={() => setActiveDeckIndex(idx)}
														>
															<button
																type="button"
																className="nextora-team-section__card-edit"
																onClick={(e) => {
																	e.stopPropagation();
																	openMemberEditor(member.id);
																}}
															>
																{__('Edit member', 'nextora')}
															</button>
															{photoUrl ? (
																<img src={photoUrl} alt="" className="nextora-team-section__deck-photo-img" />
															) : (
																<div className="nextora-team-section__card-photo--empty" />
															)}
														</div>
													);
												})}
											</div>
										</div>
										{currentDeckMember && (
											<div className="nextora-team-section__deck-info-col">
												<div className="nextora-team-section__deck-info-stack">
													<div className="nextora-team-section__deck-info-pane is-active">
														<h4
															className={`nextora-team-section__deck-name ${nameColorProps.className}`.trim()}
															style={nameColorProps.style}
														>
															{currentDeckMember.name || __('Member name', 'nextora')}
														</h4>
														{currentDeckMember.role ? (
															<p
																className={`nextora-team-section__deck-role ${roleColorProps.className}`.trim()}
																style={roleColorProps.style}
															>
																{currentDeckMember.role}
															</p>
														) : null}
														{currentDeckMember.bio ? (
															<div
																className={`nextora-team-section__deck-bio ${bioColorProps.className}`.trim()}
																style={bioColorProps.style}
															>
																{currentDeckMember.bio}
															</div>
														) : null}

														{currentDeckMember.showSocialLinks && currentDeckMember.socialLinks.length > 0 && (
															<div className="nextora-team-section__deck-social">
																{currentDeckMember.socialLinks.map((link, lIdx) => (
																	<span
																		key={lIdx}
																		className={`nextora-team-section__deck-social-link ${socialColorProps.className}`.trim()}
																		style={socialColorProps.style}
																	>
																		<span>{getSocialPlatformLabel(link.platform)}</span>
																	</span>
																))}
															</div>
														)}

														{showArrows && members.length > 1 && (
															<div className="nextora-team-section__deck-nav">
																<button
																	type="button"
																	className="nextora-team-section__deck-nav-btn nextora-team-section__deck-nav-btn--prev"
																	aria-label={__('Previous', 'nextora')}
																	onClick={() =>
																		setActiveDeckIndex(
																			(prev) => (prev - 1 + members.length) % members.length,
																		)
																	}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nextora-team-section__deck-nav-icon"><path d="m15 18-6-6 6-6"/></svg>
																</button>
																<button
																	type="button"
																	className="nextora-team-section__deck-nav-btn nextora-team-section__deck-nav-btn--next"
																	aria-label={__('Next', 'nextora')}
																	onClick={() =>
																		setActiveDeckIndex((prev) => (prev + 1) % members.length)
																	}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nextora-team-section__deck-nav-icon"><path d="m9 18 6-6-6-6"/></svg>
																</button>
															</div>
														)}
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							);
						})()
					) : (
						<div className="nextora-team-section__carousel-root">
							<div className="nextora-team-section__members-row" aria-label={__('Team members', 'nextora')}>
								{members.map((member) => {
									const photoUrl = resolvePhotoUrl(member, mediaUrlById);
									const memberRadius =
										member.cardBorderRadius && member.cardBorderRadius > 0
											? member.cardBorderRadius
											: effectiveCardBorderRadius;

									return (
										<article
											key={member.id}
											className={`nextora-team-section__card nextora-team-section__card--editable ${cardTemplate === 'overlay-social' ? 'nextora-team-section__card--overlay' : ''} ${cardBgProps.className}`.trim()}
											style={
												{
													'--nextora-team-bio-clamp': member.bioLineClamp,
													borderRadius: `${memberRadius}px`,
													...cardBgProps.style,
												} as CSSProperties
											}
										>
											<button
												type="button"
												className="nextora-team-section__card-edit"
												onClick={() => openMemberEditor(member.id)}
											>
												{__('Edit member', 'nextora')}
											</button>
											<div
												className={
													photoUrl
														? 'nextora-team-section__card-photo'
														: 'nextora-team-section__card-photo nextora-team-section__card-photo--empty'
												}
											>
												{photoUrl ? (
													<img
														src={photoUrl}
														alt=""
														className="nextora-team-section__card-img"
													/>
												) : null}
												{cardTemplate === 'overlay-social' && member.showSocialLinks && member.socialLinks.length > 0 && (
													<div className="nextora-team-section__card-social-overlay">
														{member.socialLinks.map((link, lIdx) => (
															<span key={lIdx} className="nextora-team-section__card-social-link-overlay" aria-label={link.platform}>
																{renderSocialIcon(link.platform)}
															</span>
														))}
													</div>
												)}
											</div>
											<div className="nextora-team-section__card-body">
												<h4
													className={`nextora-team-section__card-name ${nameColorProps.className}`.trim()}
													style={nameColorProps.style}
												>
													{member.name || __('Member name', 'nextora')}
												</h4>
												{member.role ? (
													<p
														className={`nextora-team-section__card-role ${roleColorProps.className}`.trim()}
														style={roleColorProps.style}
													>
														{member.role}
													</p>
												) : null}
												{cardTemplate !== 'overlay-social' && member.tags.length > 0 && (
													<div className="nextora-team-section__card-tags">
														{member.tags.map((tag) =>
															tag ? (
																<span
																	key={tag}
																	className={`nextora-team-section__card-tag ${tagBgProps.className} ${tagTextColorProps.className}`.trim()}
																	style={{ ...tagBgProps.style, ...tagTextColorProps.style }}
																>
																	{tag}
																</span>
															) : null,
														)}
													</div>
												)}
												{cardTemplate !== 'overlay-social' && member.bio ? (
													<p
														className={`nextora-team-section__card-bio ${bioColorProps.className}`.trim()}
														style={bioColorProps.style}
													>
														{member.bio}
													</p>
												) : null}
												{cardTemplate === 'default' && member.showSocialLinks && member.socialLinks.length > 0 && (
													<div className="nextora-team-section__card-social">
														{member.socialLinks.map((link, lIdx) => (
															<span
																key={lIdx}
																className={`nextora-team-section__card-social-link ${socialColorProps.className}`.trim()}
																style={socialColorProps.style}
															>
																{getSocialPlatformLabel(link.platform)}
															</span>
														))}
													</div>
												)}
											</div>
										</article>
									);
								})}
							</div>

							{layoutMode === 'carousel' && showArrows && members.length > 1 && (
								<>
									<button
										type="button"
										className="nextora-team-section__arrow nextora-team-section__arrow--prev"
										aria-label={__('Previous team member', 'nextora')}
									>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
									</button>
									<button
										type="button"
										className="nextora-team-section__arrow nextora-team-section__arrow--next"
										aria-label={__('Next team member', 'nextora')}
									>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
									</button>
								</>
							)}

							{layoutMode === 'carousel' && showPagination && members.length > 1 && (
								<div className={`nextora-team-section__pagination swiper-pagination swiper-pagination-${paginationType}`} aria-hidden="true">
									{paginationType === 'bullets' &&
										members.map((_, i) => (
											<span
												key={i}
												className={`swiper-pagination-bullet ${i === 0 ? 'swiper-pagination-bullet-active' : ''}`}
											/>
										))}
									{paginationType === 'fraction' && (
										<span className="swiper-pagination-current">1 / {members.length}</span>
									)}
									{paginationType === 'progressbar' && (
										<span
											className="swiper-pagination-progressbar-fill"
											style={{ width: `${Math.round(100 / members.length)}%` }}
										/>
									)}
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
