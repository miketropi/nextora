import type { CSSProperties } from 'react';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import type { TeamMember, TeamSectionAttributes } from './types';
import { TEAM_SECTION_MEDIA_TYPES } from './types';
import { buildSectionStyleVars, createMemberId, normalizeMembers } from './member-utils';

interface EditProps {
	attributes: TeamSectionAttributes;
	setAttributes: (attrs: Partial<TeamSectionAttributes>) => void;
}

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
}

const headerLayoutOptions = [
	{ label: __('Split (heading left, button right)', 'nextora'), value: 'split' },
	{ label: __('Stacked (centered)', 'nextora'), value: 'stacked' },
	{ label: __('Left aligned', 'nextora'), value: 'left-aligned' },
];

const buttonStyleOptions = [
	{ label: __('Outline', 'nextora'), value: 'outline' },
	{ label: __('Solid', 'nextora'), value: 'solid' },
	{ label: __('Link', 'nextora'), value: 'link' },
];

const paginationTypeOptions = [
	{ label: __('Bullets', 'nextora'), value: 'bullets' },
	{ label: __('Fraction', 'nextora'), value: 'fraction' },
	{ label: __('Progress bar', 'nextora'), value: 'progressbar' },
];

const arrowStyleOptions = [
	{ label: __('Minimal', 'nextora'), value: 'minimal' },
	{ label: __('Circle', 'nextora'), value: 'circle' },
	{ label: __('Square', 'nextora'), value: 'square' },
];

const socialPlatformOptions = [
	{ label: 'LinkedIn', value: 'linkedin' },
	{ label: 'Twitter / X', value: 'twitter' },
	{ label: 'GitHub', value: 'github' },
	{ label: 'Instagram', value: 'instagram' },
	{ label: 'Facebook', value: 'facebook' },
	{ label: __('Website', 'nextora'), value: 'website' },
	{ label: __('Email', 'nextora'), value: 'email' },
];

const HEADING_LEVELS = [
	{ label: 'H1', value: '1' },
	{ label: 'H2', value: '2' },
	{ label: 'H3', value: '3' },
	{ label: 'H4', value: '4' },
	{ label: 'H5', value: '5' },
	{ label: 'H6', value: '6' },
];

function clampHeading(level: number): number {
	return Math.max(1, Math.min(6, level));
}

export default function TeamSectionEdit({ attributes, setAttributes }: EditProps) {
	const members = normalizeMembers(attributes.members);
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
		eyebrowText = '',
		headingText = '',
		headingLevel = 2,
		descriptionText = '',
		headerLayout = 'split',
		contentMaxWidth = '1200px',
		showButton = true,
		buttonText = '',
		buttonUrl = '',
		buttonTarget = false,
		buttonStyle = 'outline',
		buttonBorderColor = '',
		buttonTextColor = '',
		buttonBorderRadius = 50,
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
		arrowStyle = 'minimal',
		freeMode = false,
		grabCursor = true,
		backgroundColor = '',
		headingColor = '',
		descriptionColor = '',
		eyebrowColor = '',
		paddingTop = 80,
		paddingBottom = 80,
		paginationColor = '',
		paginationActiveColor = '',
		cardBackgroundColor = '',
		tagBackgroundColor = '',
		tagTextColor = '',
		cardBorderRadius = 16,
		enableScrollAnimation = true,
	} = attributes;

	const headingTag = `h${clampHeading(headingLevel)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	const blockProps = useBlockProps({
		className: [
			'nextora-team-section',
			'nextora-team-section--editor',
			`nextora-team-section--header-${headerLayout}`,
		].join(' '),
		style: buildSectionStyleVars({
			backgroundColor,
			headingColor,
			descriptionColor,
			eyebrowColor,
			buttonBorderColor,
			buttonTextColor,
			buttonBorderRadius,
			paddingTop,
			paddingBottom,
			contentMaxWidth,
			paginationColor,
			paginationActiveColor,
			cardBackgroundColor,
			tagBackgroundColor,
			tagTextColor,
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
		setMembers([
			...members,
			{
				id: createMemberId(),
				photoId: 0,
				photoAlt: '',
				photoFocalPoint: { x: 0.5, y: 0.3 },
				name: '',
				role: '',
				tags: [],
				bio: '',
				bioLineClamp: 3,
				photoAspectRatio: '4/3',
				showSocialLinks: false,
				socialLinks: [],
				cardBorderRadius,
			},
		]);
	};

	const removeMember = (id: string): void => {
		if (members.length <= 1) {
			return;
		}
		setMembers(members.filter((m) => m.id !== id));
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
					{members.map((member, index) => (
						<div key={member.id} className="nextora-team-section__inspector-member">
							<p className="components-base-control__label">
								{__('Member', 'nextora') + ` ${index + 1}`}
							</p>
							<TextControl
								label={__('Name', 'nextora')}
								value={member.name}
								onChange={(name) => patchMember(member.id, { name: name ?? '' })}
							/>
							<TextControl
								label={__('Role', 'nextora')}
								value={member.role}
								onChange={(role) => patchMember(member.id, { role: role ?? '' })}
							/>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media: WPMedia) =>
										patchMember(member.id, {
											photoId: media.id ?? 0,
											photoAlt: media.alt ?? '',
										})
									}
									allowedTypes={[...TEAM_SECTION_MEDIA_TYPES]}
									value={member.photoId > 0 ? member.photoId : undefined}
									render={({ open }) => (
										<div className="nextora-team-section__inspector-media">
											{member.photoId > 0 && mediaUrlById.get(member.photoId) ? (
												<img
													src={mediaUrlById.get(member.photoId)}
													alt=""
													className="nextora-team-section__inspector-media-preview"
												/>
											) : null}
											<Button variant="secondary" onClick={open}>
												{member.photoId
													? __('Replace photo', 'nextora')
													: __('Choose photo', 'nextora')}
											</Button>
										</div>
									)}
								/>
							</MediaUploadCheck>
							{member.photoId > 0 && (
								<TextControl
									label={__('Photo alt text', 'nextora')}
									value={member.photoAlt}
									onChange={(photoAlt) =>
										patchMember(member.id, { photoAlt: photoAlt ?? '' })
									}
								/>
							)}
							<p className="components-base-control__label">{__('Tags', 'nextora')}</p>
								{member.tags.map((tag, tagIndex) => (
									<div key={`${member.id}-tag-${tagIndex}`} className="nextora-team-section__inspector-tag-row">
										<TextControl
											label={__('Tag', 'nextora')}
											value={tag}
											onChange={(v) => {
												const tags = [...member.tags];
												tags[tagIndex] = v ?? '';
												patchMember(member.id, { tags });
											}}
										/>
										<Button
											variant="secondary"
											isDestructive
											onClick={() => {
												const tags = member.tags.filter((_, i) => i !== tagIndex);
												patchMember(member.id, { tags });
											}}
										>
											{__('Remove', 'nextora')}
										</Button>
									</div>
								))}
								<Button
									variant="secondary"
									onClick={() => patchMember(member.id, { tags: [...member.tags, ''] })}
								>
									{__('Add tag', 'nextora')}
								</Button>
							<TextControl
								label={__('Bio', 'nextora')}
								value={member.bio}
								onChange={(bio) => patchMember(member.id, { bio: bio ?? '' })}
							/>
							<RangeControl
								label={__('Bio line clamp', 'nextora')}
								value={member.bioLineClamp}
								onChange={(bioLineClamp) =>
									patchMember(member.id, { bioLineClamp: bioLineClamp ?? 3 })
								}
								min={1}
								max={5}
							/>
							<ToggleControl
								label={__('Show social links', 'nextora')}
								checked={member.showSocialLinks}
								onChange={(showSocialLinks) =>
									patchMember(member.id, { showSocialLinks })
								}
							/>
							{member.showSocialLinks && (
								<>
									{member.socialLinks.map((link, linkIndex) => (
										<div
											key={`${member.id}-social-${linkIndex}`}
											className="nextora-team-section__inspector-social-row"
										>
											<SelectControl
												label={__('Platform', 'nextora')}
												value={link.platform}
												options={socialPlatformOptions}
												onChange={(platform) => {
													const socialLinks = [...member.socialLinks];
													socialLinks[linkIndex] = {
														...socialLinks[linkIndex],
														platform: platform ?? 'website',
													};
													patchMember(member.id, { socialLinks });
												}}
											/>
											<p className="components-base-control__label">{__('URL', 'nextora')}</p>
											<URLInput
												value={link.url}
												onChange={(url) => {
													const socialLinks = [...member.socialLinks];
													socialLinks[linkIndex] = {
														...socialLinks[linkIndex],
														url: url ?? '',
													};
													patchMember(member.id, { socialLinks });
												}}
											/>
											<Button
												variant="secondary"
												isDestructive
												onClick={() => {
													const socialLinks = member.socialLinks.filter(
														(_, i) => i !== linkIndex,
													);
													patchMember(member.id, { socialLinks });
												}}
											>
												{__('Remove', 'nextora')}
											</Button>
										</div>
									))}
									<Button
										variant="secondary"
										onClick={() =>
											patchMember(member.id, {
												socialLinks: [
													...member.socialLinks,
													{ platform: 'linkedin', url: '' },
												],
											})
										}
									>
										{__('Add social link', 'nextora')}
									</Button>
								</>
							)}
							<div className="nextora-team-section__inspector-tag-row">
								<Button
									variant="secondary"
									disabled={index === 0}
									onClick={() => moveMember(member.id, -1)}
								>
									{__('Up', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									disabled={index >= members.length - 1}
									onClick={() => moveMember(member.id, 1)}
								>
									{__('Down', 'nextora')}
								</Button>
								<Button
									variant="secondary"
									isDestructive
									disabled={members.length <= 1}
									onClick={() => removeMember(member.id)}
								>
									{__('Remove member', 'nextora')}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addMember}>
						{__('Add member', 'nextora')}
					</Button>
				</PanelBody>

				<PanelBody title={__('Header layout', 'nextora')} initialOpen={false}>
					<SelectControl
						label={__('Layout', 'nextora')}
						value={headerLayout}
						options={headerLayoutOptions}
						onChange={(v) =>
							setAttributes({
								headerLayout: (v as TeamSectionAttributes['headerLayout']) ?? 'split',
							})
						}
					/>
					<SelectControl
						label={__('Heading level', 'nextora')}
						value={String(headingLevel)}
						options={HEADING_LEVELS}
						onChange={(v) => setAttributes({ headingLevel: parseInt(v, 10) || 2 })}
					/>
					<TextControl
						label={__('Content max width', 'nextora')}
						value={contentMaxWidth}
						onChange={(v) => setAttributes({ contentMaxWidth: v ?? '1200px' })}
						help={__('e.g. 1200px, 75rem', 'nextora')}
					/>
				</PanelBody>

				<PanelBody title={__('CTA button', 'nextora')} initialOpen={false}>
					<ToggleControl
						label={__('Show button', 'nextora')}
						checked={showButton}
						onChange={(v) => setAttributes({ showButton: v })}
					/>
					{showButton && (
						<>
							<TextControl
								label={__('Button text', 'nextora')}
								value={buttonText}
								onChange={(v) => setAttributes({ buttonText: v ?? '' })}
							/>
							<p className="components-base-control__label">{__('Button URL', 'nextora')}</p>
							<URLInput
								value={buttonUrl}
								onChange={(v) => setAttributes({ buttonUrl: v ?? '' })}
							/>
							<ToggleControl
								label={__('Open in new tab', 'nextora')}
								checked={buttonTarget}
								onChange={(v) => setAttributes({ buttonTarget: v })}
							/>
							<SelectControl
								label={__('Button style', 'nextora')}
								value={buttonStyle}
								options={buttonStyleOptions}
								onChange={(v) =>
									setAttributes({
										buttonStyle: (v as TeamSectionAttributes['buttonStyle']) ?? 'outline',
									})
								}
							/>
							<RangeControl
								label={__('Border radius (px)', 'nextora')}
								value={buttonBorderRadius}
								onChange={(v) => setAttributes({ buttonBorderRadius: v ?? 50 })}
								min={0}
								max={50}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__('Carousel', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Slides per view (desktop)', 'nextora')}
						value={slidesPerView}
						onChange={(v) => setAttributes({ slidesPerView: v ?? 4 })}
						min={1}
						max={6}
						step={0.5}
					/>
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
					{showArrows && (
						<SelectControl
							label={__('Arrow style', 'nextora')}
							value={arrowStyle}
							options={arrowStyleOptions}
							onChange={(v) =>
								setAttributes({
									arrowStyle: (v as TeamSectionAttributes['arrowStyle']) ?? 'minimal',
								})
							}
						/>
					)}
				</PanelBody>

				<PanelBody title={__('Layout', 'nextora')} initialOpen={false}>
					<RangeControl
						label={__('Padding top (px)', 'nextora')}
						value={paddingTop}
						onChange={(v) => setAttributes({ paddingTop: v ?? 80 })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Padding bottom (px)', 'nextora')}
						value={paddingBottom}
						onChange={(v) => setAttributes({ paddingBottom: v ?? 80 })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Card border radius (px)', 'nextora')}
						value={cardBorderRadius}
						onChange={(v) => setAttributes({ cardBorderRadius: v ?? 16 })}
						min={0}
						max={30}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Colors', 'nextora')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (v) => setAttributes({ backgroundColor: v ?? '' }),
							label: __('Background', 'nextora'),
						},
						{
							value: headingColor,
							onChange: (v) => setAttributes({ headingColor: v ?? '' }),
							label: __('Heading', 'nextora'),
						},
						{
							value: descriptionColor,
							onChange: (v) => setAttributes({ descriptionColor: v ?? '' }),
							label: __('Description', 'nextora'),
						},
						{
							value: eyebrowColor,
							onChange: (v) => setAttributes({ eyebrowColor: v ?? '' }),
							label: __('Eyebrow', 'nextora'),
						},
						...(showButton
							? [
									{
										value: buttonBorderColor,
										onChange: (v: string | undefined) =>
											setAttributes({ buttonBorderColor: v ?? '' }),
										label: __('Button border / fill', 'nextora'),
									},
									{
										value: buttonTextColor,
										onChange: (v: string | undefined) =>
											setAttributes({ buttonTextColor: v ?? '' }),
										label: __('Button text', 'nextora'),
									},
								]
							: []),
						{
							value: cardBackgroundColor,
							onChange: (v) => setAttributes({ cardBackgroundColor: v ?? '' }),
							label: __('Card background', 'nextora'),
						},
						{
							value: tagBackgroundColor,
							onChange: (v) => setAttributes({ tagBackgroundColor: v ?? '' }),
							label: __('Tag background', 'nextora'),
						},
						{
							value: tagTextColor,
							onChange: (v) => setAttributes({ tagTextColor: v ?? '' }),
							label: __('Tag text', 'nextora'),
						},
						...(showPagination
							? [
									{
										value: paginationColor,
										onChange: (v: string | undefined) =>
											setAttributes({ paginationColor: v ?? '' }),
										label: __('Pagination dot', 'nextora'),
									},
									{
										value: paginationActiveColor,
										onChange: (v: string | undefined) =>
											setAttributes({ paginationActiveColor: v ?? '' }),
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

			<div {...blockProps}>
				<div className="nextora-team-section__inner">
					<header
						className={`nextora-team-section__header nextora-team-section__header--${headerLayout}`}
					>
						<div className="nextora-team-section__header-main">
							<RichText
								tagName="p"
								className="nextora-team-section__eyebrow"
								value={eyebrowText}
								onChange={(v) => setAttributes({ eyebrowText: v })}
								placeholder={__('Our People', 'nextora')}
								allowedFormats={[]}
							/>
							<RichText
								tagName={headingTag}
								className="nextora-team-section__heading"
								value={headingText}
								onChange={(v) => setAttributes({ headingText: v })}
								placeholder={__('Meet Our Amazing Team', 'nextora')}
								allowedFormats={[]}
							/>
							<RichText
								tagName="div"
								className="nextora-team-section__description"
								value={descriptionText}
								onChange={(v) => setAttributes({ descriptionText: v })}
								placeholder={__(
									'The talented people behind our success…',
									'nextora',
								)}
								allowedFormats={['core/bold', 'core/italic', 'core/link']}
							/>
						</div>
						{showButton && (
							<div className="nextora-team-section__header-cta">
								<span
									className={`nextora-team-section__btn nextora-team-section__btn--${buttonStyle}`}
								>
									{buttonText || __('View All Members', 'nextora')}
									<svg
										className="nextora-team-section__btn-icon"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										aria-hidden
									>
										<path d="M5 12h14M13 6l6 6-6 6" />
									</svg>
								</span>
							</div>
						)}
					</header>

					<div className="nextora-team-section__members-row" aria-label={__('Team members', 'nextora')}>
						{members.map((member, index) => {
							const photoUrl =
								member.photoId > 0 ? mediaUrlById.get(member.photoId) : undefined;

							return (
								<article
									key={member.id}
									className="nextora-team-section__card"
									style={
										{
											'--nextora-team-bio-clamp': member.bioLineClamp,
											borderRadius: member.cardBorderRadius || cardBorderRadius,
										} as CSSProperties
									}
								>
									<p className="nextora-team-section__member-badge">
										{__('Member', 'nextora')} {index + 1}
									</p>
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
										) : (
											__('Add photo in sidebar', 'nextora')
										)}
									</div>
									<div className="nextora-team-section__card-body">
										<h3 className="nextora-team-section__card-name">
											{member.name || __('Member name', 'nextora')}
										</h3>
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
