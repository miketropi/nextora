import { __ } from '@wordpress/i18n';
import { Zap } from 'lucide';
import { LucideIcon, LifeBuoyIcon, ShieldCheckIcon, HeartHandshakeIcon } from './icons';

const items = [
	{
		Icon: LifeBuoyIcon,
		title: __('Get help when you need it', 'nextora'),
		description: __(
			'With detailed documentation and a global support team, help is always available if you need it.',
			'nextora',
		),
	},
	{
		Icon: ShieldCheckIcon,
		title: __('You can trust', 'nextora'),
		description: __(
			'Built by our own team or by our trusted partners, so you can be sure of its quality.',
			'nextora',
		),
	},
	{
		Icon: HeartHandshakeIcon,
		title: __('Support the ecosystem', 'nextora'),
		description: __(
			'Our team and partners are continuously improving your extensions, themes, and experience.',
			'nextora',
		),
	},
	{
		Icon: function ZapIcon({ className }: { size?: number; className?: string }) {
			return <LucideIcon icon={Zap} size={20} className={className} />;
		},
		title: __('Fast & reliable', 'nextora'),
		description: __(
			'Every extension is optimised for performance so your site stays fast and dependable.',
			'nextora',
		),
	},
];

export default function Footer(): JSX.Element {
	return (
		<footer className="nextora-addon-footer">
			<div className="nextora-addon-footer__head">
				<h3 className="nextora-addon-footer__head-title">
					{__('Built with care', 'nextora')}
				</h3>
				<p className="nextora-addon-footer__head-desc">
					{__(
						'Every theme, plugin, and service in this collection is maintained to the highest standard.',
						'nextora',
					)}
				</p>
			</div>

			<div className="nextora-addon-footer__grid">
				{items.map(({ Icon, title, description }) => (
					<div key={title} className="nextora-addon-footer__item">
						<Icon className="nextora-addon-footer__icon" />
						<div>
							<h4 className="nextora-addon-footer__title">{title}</h4>
							<p className="nextora-addon-footer__desc">{description}</p>
						</div>
					</div>
				))}
			</div>

			<p className="nextora-addon-footer__thanks">
				{__('Thank you for choosing Nextora.', 'nextora')}
			</p>
		</footer>
	);
}
