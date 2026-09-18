import { __ } from '@wordpress/i18n';
import { CloudIcon, MailIcon } from './icons';

interface HeaderProps {
	activeTheme: string;
	parentTheme: string;
	isChildTheme: boolean;
	themeVersion: string;
}

export default function Header({
	activeTheme,
	parentTheme,
	isChildTheme,
	themeVersion,
}: HeaderProps): JSX.Element {
	return (
		<div className="nextora-addon-header nextora-cloud-header">
			<div className="nextora-cloud-header__top">
				<div>
					<h1 className="nextora-addon-header__title">
						{__('Nextora Cloud Templates', 'nextora')}
					</h1>
					<p className="nextora-addon-header__description">
						{__(
							'Browse and import production-ready block templates directly into your WordPress site.',
							'nextora',
						)}
					</p>
				</div>
				<div className="nextora-cloud-header__badges">
					<span className="nextora-cloud-badge">
						<CloudIcon width={14} height={14} />
						{isChildTheme
							? `${activeTheme} (Child of ${parentTheme})`
							: activeTheme}
					</span>
					<span className="nextora-cloud-badge nextora-cloud-badge--version">
						v{themeVersion}
					</span>
				</div>
			</div>

			<p className="nextora-addon-header__contact">
				<MailIcon width={14} height={14} className="nextora-addon-header__contact-icon" />
				{__('Need help? Reach us at', 'nextora')}{' '}
				<a href="mailto:admin@beplusthemes.com">
					admin@beplusthemes.com
				</a>
			</p>
		</div>
	);
}
