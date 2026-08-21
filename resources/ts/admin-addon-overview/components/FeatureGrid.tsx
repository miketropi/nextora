import { __ } from '@wordpress/i18n';
import { LucideIcon, getFeatureIcon } from './icons';
import type { Feature } from '../types';

const ICON_COLORS: Array<{ bg: string; color: string }> = [
	{ bg: '#f0fdf6', color: '#008c54' },
	{ bg: '#f4f0fd', color: '#7c3aed' },
	{ bg: '#fef8ee', color: '#b45309' },
	{ bg: '#eef4ff', color: '#2563eb' },
	{ bg: '#fdf0f5', color: '#be185d' },
	{ bg: '#f0fdf9', color: '#0f766e' },
	{ bg: '#fef6ee', color: '#c2410c' },
	{ bg: '#f0f1fd', color: '#4338ca' },
	{ bg: '#f5fdec', color: '#4d7c0f' },
];

interface FeatureGridProps {
	features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps): JSX.Element {
	return (
		<div className="nextora-overview-section">
			<h2 className="nextora-overview-section__title">{__('Everything you get', 'nextora')}</h2>
			<div className="nextora-overview-feature-grid">
				{features.map((feature, idx) => {
					const Icon = getFeatureIcon(feature.icon);
					const color = ICON_COLORS[idx % ICON_COLORS.length];
					return (
						<div key={feature.title} className="nextora-overview-feature-card">
							<div
								className="nextora-overview-feature-card__icon"
								style={{ background: color.bg, color: color.color }}
							>
								<LucideIcon icon={Icon} size={16} />
							</div>
							<h3 className="nextora-overview-feature-card__title">{feature.title}</h3>
							<p className="nextora-overview-feature-card__desc">{feature.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
