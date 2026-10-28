import { __ } from '@wordpress/i18n';
import { getFeatureIcon, LucideIcon } from './icons';
import type { Feature } from '../types';

interface FeatureGridProps {
	features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps): JSX.Element {
	return (
		<>
			<h2 className="nextora-overview-section-title">
				{__('Theme features', 'nextora')}
			</h2>
			<div className="nextora-overview-features">
				{features.map((feature) => (
					<article key={feature.title} className="nextora-overview-feature">
						<span className="nextora-overview-feature__icon" aria-hidden="true">
							<LucideIcon icon={getFeatureIcon(feature.icon)} size={18} />
						</span>
						<div className="nextora-overview-feature__body">
							<h3 className="nextora-overview-feature__title">{feature.title}</h3>
							<p className="nextora-overview-feature__desc">{feature.description}</p>
						</div>
					</article>
				))}
			</div>
		</>
	);
}
