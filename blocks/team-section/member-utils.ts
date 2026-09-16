import type { TeamMember, TeamSectionAttributes, TeamSocialLink } from './types';

declare global {
	interface Window {
		nextoraTeamSection?: {
			photoPlaceholderUrl?: string;
		};
	}
}

function teamPhotoPlaceholderVar(): string {
	const url =
		typeof window !== 'undefined' ? window.nextoraTeamSection?.photoPlaceholderUrl : undefined;
	return url ? `url("${url}")` : 'none';
}

function resolveColorValue(raw: string): string {

	const value = raw.trim();
	if (value === '') {
		return '';
	}

	if (
		value.startsWith('#') ||
		value.startsWith('rgb') ||
		value.startsWith('hsl') ||
		value.startsWith('var(')
	) {
		return value;
	}

	if (/^[a-z0-9-]+$/i.test(value)) {
		return `var(--wp--preset--color--${value})`;
	}

	return value;
}

export function createMemberId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}
	return `member-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function normalizeMembers(members: TeamMember[] | undefined): TeamMember[] {
	if (!Array.isArray(members) || members.length === 0) {
		return [];
	}

	return members.map((raw, index) => {
		const tags = Array.isArray(raw?.tags)
			? raw.tags.map((t) => (typeof t === 'string' ? t : ''))
			: [];

		const socialLinks: TeamSocialLink[] = Array.isArray(raw?.socialLinks)
			? raw.socialLinks
					.filter((l) => l && typeof l === 'object')
					.map((l) => ({
						platform: typeof l.platform === 'string' ? l.platform : 'website',
						url: typeof l.url === 'string' ? l.url : '',
					}))
			: [];

		return {
			id:
				typeof raw?.id === 'string' && raw.id !== ''
					? raw.id
					: String(index + 1),
			photoId: typeof raw?.photoId === 'number' ? raw.photoId : 0,
			photoUrl: typeof raw?.photoUrl === 'string' ? raw.photoUrl : '',
			photoAlt: typeof raw?.photoAlt === 'string' ? raw.photoAlt : '',
			name: typeof raw?.name === 'string' ? raw.name : '',
			role: typeof raw?.role === 'string' ? raw.role : '',
			tags,
			bio: typeof raw?.bio === 'string' ? raw.bio : '',
			bioLineClamp:
				typeof raw?.bioLineClamp === 'number' ? Math.max(1, Math.min(5, raw.bioLineClamp)) : 3,
			detail: typeof raw?.detail === 'string' ? raw.detail : '',
			showSocialLinks: Boolean(raw?.showSocialLinks),
			socialLinks,
			cardBorderRadius:
				typeof raw?.cardBorderRadius === 'number' && raw.cardBorderRadius > 0
					? Math.max(0, Math.min(30, raw.cardBorderRadius))
					: 0,
		};
	});
}

export function getTemplateDefaultAttributes(
	template: string,
): Partial<TeamSectionAttributes> {
	if (template === 'template-02') {
		return {
			photoAspectRatio: '3/4',
			cardBorderRadius: 24,
		};
	}
	if (template === 'overlay-social') {
		return {
			photoAspectRatio: '3/4',
			cardBorderRadius: 20,
		};
	}
	return {
		photoAspectRatio: '3/4',
		cardBorderRadius: 16,
	};
}

export function resolvePhotoUrl(
	member: TeamMember,
	mediaUrlById: Map<number, string>,
): string | undefined {
	if (member.photoId > 0) {
		return mediaUrlById.get(member.photoId);
	}
	const url = member.photoUrl.trim();
	return url !== '' ? url : undefined;
}

export function buildSectionStyleVars(attrs: {
	sectionBackgroundColor?: string;
	paginationColor?: string;
	paginationActiveColor?: string;
	cardBackgroundColor?: string;
	tagBackgroundColor?: string;
	tagTextColor?: string;
	nameColor?: string;
	roleColor?: string;
	bioColor?: string;
	socialColor?: string;
	cardBorderRadius?: number;
	gridColumns?: number;
	gridColumnGap?: number;
	gridRowGap?: number;
	photoAspectRatio?: string;
	spaceBetween?: number;
	slidesPerView?: number;
	edgeFadeColor?: string;
}): Record<string, string> {
	const vars: Record<string, string> = {
		'--nextora-team-photo-placeholder': teamPhotoPlaceholderVar(),
		'--nextora-team-card-radius': `${attrs.cardBorderRadius ?? 16}px`,
		'--nextora-team-photo-aspect': attrs.photoAspectRatio ?? '3/4',
		'--nextora-team-space-between': `${attrs.spaceBetween ?? 24}px`,
		'--nextora-team-grid-column-gap': `${attrs.gridColumnGap ?? 24}px`,
		'--nextora-team-grid-row-gap': `${attrs.gridRowGap ?? 24}px`,
		'--nextora-team-slides-per-view': String(attrs.slidesPerView ?? 4),
	};
	if (attrs.gridColumns) vars['--nextora-team-grid-columns'] = String(attrs.gridColumns);
	if (attrs.sectionBackgroundColor) vars['--nextora-team-bg'] = resolveColorValue(attrs.sectionBackgroundColor);
	if (attrs.paginationColor) vars['--nextora-team-dot-color'] = resolveColorValue(attrs.paginationColor);
	if (attrs.paginationActiveColor) vars['--nextora-team-dot-active'] = resolveColorValue(attrs.paginationActiveColor);
	if (attrs.cardBackgroundColor) vars['--nextora-team-card-bg'] = resolveColorValue(attrs.cardBackgroundColor);
	if (attrs.tagBackgroundColor) vars['--nextora-team-tag-bg'] = resolveColorValue(attrs.tagBackgroundColor);
	if (attrs.tagTextColor) vars['--nextora-team-tag-color'] = resolveColorValue(attrs.tagTextColor);
	if (attrs.nameColor) vars['--nextora-team-name-color'] = resolveColorValue(attrs.nameColor);
	if (attrs.roleColor) vars['--nextora-team-role-color'] = resolveColorValue(attrs.roleColor);
	if (attrs.bioColor) vars['--nextora-team-bio-color'] = resolveColorValue(attrs.bioColor);
	if (attrs.socialColor) vars['--nextora-team-social-color'] = resolveColorValue(attrs.socialColor);
	if (attrs.edgeFadeColor) vars['--nextora-team-edge-fade-color'] = resolveColorValue(attrs.edgeFadeColor);
	return vars;
}
