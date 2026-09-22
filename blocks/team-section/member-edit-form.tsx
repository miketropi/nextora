import { __, sprintf } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	RangeControl,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import type { TeamMember, TeamCardTemplate, TeamSocialPlatform } from './types';
import { TEAM_SECTION_MEDIA_TYPES } from './types';
import {
	SOCIAL_PLATFORMS,
	socialPlatformOptions,
	getSocialPlaceholder,
	getSocialPlatformLabel,
	renderSocialIcon,
	ICONS,
} from './social-utils';

interface WPMedia {
	id?: number;
	url?: string;
	alt?: string;
}

export interface MemberEditFormProps {
	member: TeamMember;
	photoUrl?: string;
	cardTemplate: TeamCardTemplate;
	enablePopup?: boolean;
	onPatch: (patch: Partial<TeamMember>) => void;
}

export default function MemberEditForm({ member, photoUrl, cardTemplate, enablePopup, onPatch }: MemberEditFormProps) {
	const isOverlay = cardTemplate === 'overlay-social';
	const showTags = cardTemplate === 'default';

	return (
		<div className="nextora-team-section__member-form">
			<div className="nextora-team-section__member-form-photo">
				<h4 className="nextora-team-section__member-form-section-heading">
					{__('Photo', 'nextora')}
				</h4>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media: WPMedia) =>
							onPatch({
								photoId: media.id ?? 0,
								photoAlt: media.alt ?? member.photoAlt,
							})
						}
						allowedTypes={[...TEAM_SECTION_MEDIA_TYPES]}
						value={member.photoId > 0 ? member.photoId : undefined}
						render={({ open }) => (
							<div className="nextora-team-section__member-form-media">
								{photoUrl ? (
									<div className="nextora-team-section__member-form-media-preview-wrap">
										<img
											src={photoUrl}
											alt=""
											className="nextora-team-section__member-form-media-preview"
										/>
									</div>
								) : (
									<div className="nextora-team-section__member-form-media-empty">
										<span
											className="nextora-team-section__member-form-media-empty-icon"
											aria-hidden="true"
										/>
										<span>{__('No photo selected', 'nextora')}</span>
									</div>
								)}
								<div className="nextora-team-section__member-form-media-actions">
									<Button variant="secondary" onClick={open}>
										{member.photoId
											? __('Replace photo', 'nextora')
											: __('Choose photo', 'nextora')}
									</Button>
									{member.photoId > 0 ? (
										<Button
											variant="link"
											isDestructive
											onClick={() =>
												onPatch({
													photoId: 0,
													photoAlt: '',
												})
											}
										>
											{__('Remove photo', 'nextora')}
										</Button>
									) : null}
								</div>
							</div>
						)}
					/>
				</MediaUploadCheck>
				{member.photoId > 0 && (
					<TextControl
						label={__('Photo alt text', 'nextora')}
						value={member.photoAlt}
						onChange={(photoAlt) => onPatch({ photoAlt: photoAlt ?? '' })}
					/>
				)}
			</div>

			<div className="nextora-team-section__member-form-fields">
				<div className="nextora-team-section__member-form-section">
					<h4 className="nextora-team-section__member-form-section-heading">
						{__('Profile', 'nextora')}
					</h4>
					<TextControl
						label={__('Name', 'nextora')}
						value={member.name}
						onChange={(name) => onPatch({ name: name ?? '' })}
					/>
					<TextControl
						label={__('Role', 'nextora')}
						value={member.role}
						onChange={(role) => onPatch({ role: role ?? '' })}
					/>
					{!isOverlay && (
						<>
							<TextareaControl
								label={__('Bio', 'nextora')}
								value={member.bio}
								onChange={(bio) => onPatch({ bio: bio ?? '' })}
								help={__('Short description shown on the member card.', 'nextora')}
							/>
							{cardTemplate !== 'template-02' && (
								<RangeControl
									label={__('Bio line clamp', 'nextora')}
									value={member.bioLineClamp}
									onChange={(bioLineClamp) => onPatch({ bioLineClamp: bioLineClamp ?? 3 })}
									min={1}
									max={5}
								/>
							)}
						</>
					)}
				</div>

				{enablePopup && (
					<div className="nextora-team-section__member-form-section">
						<h4 className="nextora-team-section__member-form-section-heading">
							{__('Popup Detail Info', 'nextora')}
						</h4>
						<TextareaControl
							label={__('Detailed Biography / Story', 'nextora')}
							value={member.detail ?? ''}
							onChange={(detail) => onPatch({ detail: detail ?? '' })}
							help={__('Extended biography, experience, and in-depth details shown in the side popup drawer.', 'nextora')}
							rows={6}
						/>
					</div>
				)}

				{showTags && (
					<div className="nextora-team-section__member-form-section">
						<div className="nextora-team-section__member-form-section-header">
							<h4 className="nextora-team-section__member-form-section-heading">
								{__('Tags', 'nextora')}
							</h4>
							<Button
								variant="secondary"
								size="compact"
								onClick={() => onPatch({ tags: [...member.tags, ''] })}
							>
								{__('Add tag', 'nextora')}
							</Button>
						</div>
						{member.tags.length > 0 && (
							<div className="nextora-team-section__member-form-items">
								{member.tags.map((tag, tagIndex) => (
									<div
										key={`${member.id}-tag-${tagIndex}`}
										className="nextora-team-section__member-form-row"
									>
										<TextControl
											label={__('Tag', 'nextora')}
											value={tag}
											onChange={(v) => {
												const tags = [...member.tags];
												tags[tagIndex] = v ?? '';
												onPatch({ tags });
											}}
										/>
										<Button
											variant="secondary"
											size="compact"
											isDestructive
											onClick={() => {
												const tags = member.tags.filter((_, i) => i !== tagIndex);
												onPatch({ tags });
											}}
										>
											{__('Remove', 'nextora')}
										</Button>
									</div>
								))}
							</div>
						)}
					</div>
				)}

				<div className="nextora-team-section__member-form-section">
					<ToggleControl
						label={__('Show social links', 'nextora')}
						checked={member.showSocialLinks}
						onChange={(showSocialLinks) => onPatch({ showSocialLinks })}
					/>
					{member.showSocialLinks && (
						<div className="nextora-team-section__social-manager">
							<div className="nextora-team-section__member-form-section-header">
								<div>
									<h4 className="nextora-team-section__member-form-section-heading">
										{__('Social links', 'nextora')}
									</h4>
								</div>
								<Button
									variant="secondary"
									size="compact"
									icon={ICONS.plus}
									onClick={() =>
										onPatch({
											socialLinks: [
												...member.socialLinks,
												{ platform: 'linkedin', url: '' },
											],
										})
									}
								>
									{__('Add link', 'nextora')}
								</Button>
							</div>

							<div className="nextora-team-section__social-presets">
								<span className="nextora-team-section__social-presets-label">
									{__('Quick add:', 'nextora')}
								</span>
								<div className="nextora-team-section__social-presets-list">
									{SOCIAL_PLATFORMS.map((item) => (
										<button
											key={item.value}
											type="button"
											className="nextora-team-section__social-preset-btn"
											onClick={() =>
												onPatch({
													socialLinks: [
														...member.socialLinks,
														{ platform: item.value, url: '' },
													],
												})
											}
											title={sprintf(__('Add %s link', 'nextora'), item.label)}
										>
											<span className="nextora-team-section__social-preset-icon">
												{renderSocialIcon(item.value, 14)}
											</span>
											<span>{item.label}</span>
										</button>
									))}
								</div>
							</div>

							{member.socialLinks.length === 0 ? (
								<div className="nextora-team-section__social-empty">
									<span>
										{__('No social links yet. Use quick add above or click "Add link".', 'nextora')}
									</span>
								</div>
							) : (
								<div className="nextora-team-section__social-list">
									{member.socialLinks.map((link, linkIndex) => (
										<div
											key={`${member.id}-social-${linkIndex}`}
											className="nextora-team-section__social-row"
										>
											<div
												className="nextora-team-section__social-icon-badge"
												title={getSocialPlatformLabel(link.platform)}
												aria-hidden="true"
											>
												{renderSocialIcon(link.platform, 16)}
											</div>

											<div className="nextora-team-section__social-platform-select">
												<SelectControl
													aria-label={__('Platform', 'nextora')}
													value={link.platform}
													options={socialPlatformOptions}
													onChange={(platform) => {
														const socialLinks = [...member.socialLinks];
														socialLinks[linkIndex] = {
															...socialLinks[linkIndex],
															platform: (platform as TeamSocialPlatform) ?? 'website',
														};
														onPatch({ socialLinks });
													}}
													__nextHasNoMarginBottom
												/>
											</div>

											<div className="nextora-team-section__social-url-input">
												<TextControl
													aria-label={__('URL', 'nextora')}
													value={link.url}
													placeholder={getSocialPlaceholder(link.platform)}
													onChange={(url) => {
														const socialLinks = [...member.socialLinks];
														socialLinks[linkIndex] = {
															...socialLinks[linkIndex],
															url: url ?? '',
														};
														onPatch({ socialLinks });
													}}
													autoComplete="off"
													__nextHasNoMarginBottom
												/>
											</div>

											<div className="nextora-team-section__social-row-actions">
												<Button
													icon={ICONS.chevronUp}
													label={__('Move up', 'nextora')}
													size="compact"
													disabled={linkIndex === 0}
													onClick={() => {
														if (linkIndex <= 0) return;
														const socialLinks = [...member.socialLinks];
														const temp = socialLinks[linkIndex];
														socialLinks[linkIndex] = socialLinks[linkIndex - 1];
														socialLinks[linkIndex - 1] = temp;
														onPatch({ socialLinks });
													}}
												/>
												<Button
													icon={ICONS.chevronDown}
													label={__('Move down', 'nextora')}
													size="compact"
													disabled={linkIndex >= member.socialLinks.length - 1}
													onClick={() => {
														if (linkIndex >= member.socialLinks.length - 1) return;
														const socialLinks = [...member.socialLinks];
														const temp = socialLinks[linkIndex];
														socialLinks[linkIndex] = socialLinks[linkIndex + 1];
														socialLinks[linkIndex + 1] = temp;
														onPatch({ socialLinks });
													}}
												/>
												<Button
													icon={ICONS.trash}
													label={__('Remove link', 'nextora')}
													isDestructive
													size="compact"
													onClick={() => {
														const socialLinks = member.socialLinks.filter(
															(_, i) => i !== linkIndex,
														);
														onPatch({ socialLinks });
													}}
												/>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
