import { __ } from '@wordpress/i18n';

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
		</div>
	);
}
