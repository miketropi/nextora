import { useAddonData } from './hooks/useAddonData';
import OverviewHeader from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import GalleryGrid from './components/GalleryGrid';
import OverviewFooter from './components/Footer';
import LoadingState from './components/LoadingState';
import type { OverviewData } from './types';

export default function App(): JSX.Element {
	const { data, isLoading, error } = useAddonData<OverviewData>('overview');

	if (isLoading) {
		return (
			<div className="nextora-overview-wrap">
				<LoadingState />
			</div>
		);
	}

	if (error || !data) {
		return (
			<div className="nextora-overview-wrap">
				<div className="nextora-overview-error">
					<p>{error || 'Unable to load overview data.'}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="nextora-overview-wrap">
			<OverviewHeader
				theme={data.theme}
				featureCount={data.features.length}
				changelogCount={data.changelog.length}
			/>
			<div className="nextora-overview-content">
				<FeatureGrid features={data.features} />
				<GalleryGrid items={data.gallery} />
				<OverviewFooter />
			</div>
		</div>
	);
}
