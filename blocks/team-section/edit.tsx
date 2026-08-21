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
import { buildSectionStyleVars, createMemberId, normalizeMembers, resolvePhotoUrl } from './member-utils';
import MemberEditForm from './member-edit-form';
import {
	normalizeColorForStorage,
	colorValueForPicker,
	useThemeColorPalette,
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

export default function TeamSectionEdit({ attributes, setAttributes }: EditProps) {
	const [editingMemberId, setEditingMemberId] = useState<string | null>(null);

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
		cardBorderRadius = 16,
		nameColor = '',
		roleColor = '',
		enableScrollAnimation = true,
	} = attributes;

	const blockProps = useBlockProps({
		className: [
			'nextora-team-section',
			'nextora-team-section--editor',
			`nextora-team-section--layout-${layoutMode}`,
			`nextora-team-section--template-${cardTemplate}`,
		].join(' '),
		style: buildSectionStyleVars({
			gridColumns,
			gridColumnGap,
			gridRowGap,
			photoAspectRatio,
			spaceBetween,
			sectionBackgroundColor,
			paginationColor,
			paginationActiveColor,
			cardBackgroundColor,
			tagBackgroundColor,
			tagTextColor,
			nameColor,
			roleColor,
			cardBorderRadius,
		}) as CSSProperties,
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
						onChange={(v) =>
							setAttributes({ cardTemplate: (v as TeamSectionAttributes['cardTemplate']) ?? 'default' })
						}
					/>

					<RadioControl
						label={__('Photo aspect ratio', 'nextora')}
						selected={photoAspectRatio}
						options={photoAspectRatioOptions}
						onChange={(v) =>
							setAttributes({ photoAspectRatio: (v as TeamSectionAttributes['photoAspectRatio']) ?? '3/4' })
						}
					/>

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
						...(cardTemplate === 'overlay-social'
							? [
									{
										value: colorValueForPicker(nameColor, palette),
										onChange: (v: string | undefined) => setAttributes({ nameColor: normalizeColorForStorage(v, palette) }),
										label: __('Name', 'nextora'),
									},
									{
										value: colorValueForPicker(roleColor, palette),
										onChange: (v: string | undefined) => setAttributes({ roleColor: normalizeColorForStorage(v, palette) }),
										label: __('Role', 'nextora'),
									},
								]
							: [
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
								]),
						...(showPagination
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
						onPatch={(patch) => patchMember(editingMember.id, patch)}
					/>
				</Modal>
			)}

			<div {...blockProps}>
				<div className="nextora-team-section__inner">
					<div className="nextora-team-section__members-row" aria-label={__('Team members', 'nextora')}>
						{members.map((member) => {
							const photoUrl = resolvePhotoUrl(member, mediaUrlById);

							return (
								<article
									key={member.id}
									className="nextora-team-section__card nextora-team-section__card--editable"
									style={
										{
											'--nextora-team-bio-clamp': member.bioLineClamp,
											borderRadius: member.cardBorderRadius || cardBorderRadius,
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
									</div>
									<div className="nextora-team-section__card-body">
										<h4 className="nextora-team-section__card-name">
											{member.name || __('Member name', 'nextora')}
										</h4>
										{member.role ? (
											<p className="nextora-team-section__card-role">{member.role}</p>
										) : null}
										{member.tags.length > 0 && (
											<div className="nextora-team-section__card-tags">
												{member.tags.map((tag) =>
													tag ? (
														<span key={tag} className="nextora-team-section__card-tag">
															{tag}
														</span>
													) : null,
												)}
											</div>
										)}
										{member.bio ? (
											<p className="nextora-team-section__card-bio">{member.bio}</p>
										) : null}
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
