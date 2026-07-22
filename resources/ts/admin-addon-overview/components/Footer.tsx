import { __ } from '@wordpress/i18n';

export default function OverviewFooter(): JSX.Element {
	return (
		<div className="nextora-overview-footer">
			<p className="nextora-overview-footer__text">
				{__('Thank you for choosing Nextora. Built with care by Beplus Themes.', 'nextora')}
			</p>
		</div>
	);
}
