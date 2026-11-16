import type { CSSProperties } from 'react';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { TeamMember, TeamSectionAttributes } from './types';

function colorProps(color: string, background = false): { className: string; style: CSSProperties } {
	if (color === 'inherit') return {className: 'nextora-team-section__inherit-color', style: {}};
	const match = color.match(/^(?:var:preset\|color\|)?([a-z][a-z0-9-]*)$/i) || color.match(/^var\(--wp--preset--color--([a-z0-9-]+)\)$/i);
	if (match) return { className: background ? `has-background has-${match[1]}-background-color` : `has-text-color has-${match[1]}-color`, style: {} };
	return { className: background ? 'has-background' : 'has-text-color', style: background ? { backgroundColor: color } : { color } };
}

export default function NuptseMemberCard({ member, photoUrl, attributes, onEdit }: {
	member: TeamMember;
	photoUrl: string | undefined;
	attributes: TeamSectionAttributes;
	onEdit: () => void;
}): JSX.Element {
	const card = colorProps(attributes.cardBackgroundColor || 'base', true);
	const name = colorProps(attributes.nameColor || 'contrast');
	const role = colorProps(attributes.roleColor || 'primary');
	return (
		<article className={`nextora-team-section__card nextora-team-section__card--editable ${card.className}`} style={{ borderRadius: member.cardBorderRadius || attributes.cardBorderRadius, ...card.style }}>
			<Button className="nextora-team-section__card-edit" onClick={onEdit}>{__('Edit member', 'nextora')}</Button>
			<h3 className={`nextora-team-section__card-name ${name.className}`} style={{ fontSize: attributes.inheritTypography ? undefined : 20, ...name.style }}>{member.name || __('Member name', 'nextora')}</h3>
			{member.role && <p className={`nextora-team-section__card-role ${role.className}`} style={{ fontSize: attributes.inheritTypography ? undefined : 16, ...role.style }}>{member.role}</p>}
			<div className={`nextora-team-section__card-photo${photoUrl ? '' : ' nextora-team-section__card-photo--empty'}`}>
				{photoUrl && <img className="nextora-team-section__card-img" src={photoUrl} alt={member.photoAlt || member.name} />}
			</div>
		</article>
	);
}
