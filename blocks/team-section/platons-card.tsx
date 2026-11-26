import type { CSSProperties } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import type { TeamMember } from './types';

interface ColorProps {
	className: string;
	style: CSSProperties;
}

interface PlatonsCardProps {
	member: TeamMember;
	photoUrl?: string;
	nameColorProps: ColorProps;
	roleColorProps: ColorProps;
	onEdit: () => void;
}

export default function PlatonsCard({ member, photoUrl, nameColorProps, roleColorProps, onEdit }: PlatonsCardProps) {
	return (
		<figure className="nextora-team-section__card nextora-team-section__card--platons nextora-team-section__card--editable">
			<button type="button" className="nextora-team-section__card-edit" onClick={onEdit} aria-label={sprintf(__('Edit %s', 'nextora'), member.name)}>
				{__('Edit member', 'nextora')}
			</button>
			<div className={`nextora-team-section__card-photo${photoUrl ? '' : ' nextora-team-section__card-photo--empty'}`}>
				{photoUrl && <img src={photoUrl} alt={member.photoAlt || member.name} className="nextora-team-section__card-img" />}
			</div>
			<figcaption className="nextora-team-section__card-body">
				<p className={`nextora-team-section__card-name ${nameColorProps.className}`.trim()} style={nameColorProps.style}>
					<strong>{member.name || __('Member name', 'nextora')}</strong>
				</p>
				{member.role && <p className={`nextora-team-section__card-role ${roleColorProps.className}`.trim()} style={roleColorProps.style}>{member.role}</p>}
			</figcaption>
		</figure>
	);
}
