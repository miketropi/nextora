import type { TeamMember, TeamSocialLink } from './types';

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
			showSocialLinks: Boolean(raw?.showSocialLinks),
			socialLinks,
			cardBorderRadius:
				typeof raw?.cardBorderRadius === 'number'
					? Math.max(0, Math.min(30, raw.cardBorderRadius))
					: 16,
		};
	});
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
	cardBorderRadius?: number;
	gridColumns?: number;
	gridColumnGap?: number;
	gridRowGap?: number;
	photoAspectRatio?: string;
	spaceBetween?: number;
}): Record<string, string> {
	const vars: Record<string, string> = {
		'--nextora-team-photo-placeholder': teamPhotoPlaceholderVar(),
		'--nextora-team-card-radius': `${attrs.cardBorderRadius ?? 16}px`,
		'--nextora-team-photo-aspect': attrs.photoAspectRatio ?? '3/4',
		'--nextora-team-space-between': `${attrs.spaceBetween ?? 24}px`,
		'--nextora-team-grid-column-gap': `${attrs.gridColumnGap ?? 24}px`,
		'--nextora-team-grid-row-gap': `${attrs.gridRowGap ?? 24}px`,
	};
	if (attrs.gridColumns) vars['--nextora-team-grid-columns'] = String(attrs.gridColumns);
	if (attrs.sectionBackgroundColor) vars['--nextora-team-bg'] = attrs.sectionBackgroundColor;
	if (attrs.paginationColor) vars['--nextora-team-dot-color'] = attrs.paginationColor;
	if (attrs.paginationActiveColor) vars['--nextora-team-dot-active'] = attrs.paginationActiveColor;
	if (attrs.cardBackgroundColor) vars['--nextora-team-card-bg'] = attrs.cardBackgroundColor;
	if (attrs.tagBackgroundColor) vars['--nextora-team-tag-bg'] = attrs.tagBackgroundColor;
	if (attrs.tagTextColor) vars['--nextora-team-tag-color'] = attrs.tagTextColor;
	if (attrs.nameColor) vars['--nextora-team-name-color'] = attrs.nameColor;
	if (attrs.roleColor) vars['--nextora-team-role-color'] = attrs.roleColor;
	return vars;
}
