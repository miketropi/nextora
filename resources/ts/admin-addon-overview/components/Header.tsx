import { __ } from '@wordpress/i18n';
import { Mail } from 'lucide';
import type { IconNode } from 'lucide';
import { LucideIcon } from './icons';

export default function Header(): JSX.Element {
	return (
		<div className="nextora-overview-header">
			<h1 className="nextora-overview-header__title">
				{__('Nextora Overview', 'nextora')}
			</h1>
			<p className="nextora-overview-header__description">
				{__('Explore the theme and build your first site step by step.', 'nextora')}
			</p>
			<p className="nextora-overview-header__contact">
				<LucideIcon
					icon={Mail as IconNode}
					size={14}
					className="nextora-overview-header__contact-icon"
				/>
				{__('Need help? Reach us at', 'nextora')}{' '}
				<a href="mailto:admin@beplusthemes.com">
					admin@beplusthemes.com
				</a>
			</p>
		</div>
	);
}
