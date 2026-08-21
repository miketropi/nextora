import { __ } from '@wordpress/i18n';
import { Mail } from 'lucide';
import { LucideIcon } from './icons';

export default function Header(): JSX.Element {
	return (
		<div className="nextora-addon-header">
			<h1 className="nextora-addon-header__title">
				{__('Nextora Addon', 'nextora')}
			</h1>
			<p className="nextora-addon-header__description">
				{__(
					'Explore child themes, supported extensions, and services available for your Nextora-powered site.',
					'nextora',
				)}
			</p>
			<p className="nextora-addon-header__contact">
				<LucideIcon icon={Mail} size={14} className="nextora-addon-header__contact-icon" />
				{__('Need help? Reach us at', 'nextora')}{' '}
				<a href="mailto:admin@beplusthemes.com">
					admin@beplusthemes.com
				</a>
			</p>
		</div>
	);
}
