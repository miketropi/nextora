import { useCallback, useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useAddonData } from './hooks/useAddonData';
import { normalizeVideos } from './lib/videos';
import { readTabFromLocation, syncTabToLocation, tabHref } from './lib/tabs-url';
import Header from './components/Header';
import Tabs, { OVERVIEW_TABS } from './components/Tabs';
import type { OverviewTabId } from './components/Tabs';
import GettingStartedNotice from './components/GettingStartedNotice';
import FeatureGrid from './components/FeatureGrid';
import GalleryGrid from './components/GalleryGrid';
import VideoWorkspace from './components/VideoWorkspace';
import OverviewFooter from './components/Footer';
import LoadingState from './components/LoadingState';
import type { OverviewData } from './types';

const [FEATURES_TAB, VIDEOS_TAB] = OVERVIEW_TABS;

export default function App(): JSX.Element {
	const { data, isLoading, error } = useAddonData<OverviewData>('overview');
	// Initial tab comes from `?tab=` so links can open a specific section.
	const [activeTab, setActiveTab] = useState<OverviewTabId>(readTabFromLocation);

	const handleTabChange = useCallback((id: OverviewTabId): void => {
		setActiveTab(id);
		syncTabToLocation(id);
	}, []);

	const videos = useMemo(() => normalizeVideos(data?.videos), [data?.videos]);

	if (isLoading) {
		return (
			<div className="nextora-overview-wrap" aria-busy="true">
				<LoadingState />
			</div>
		);
	}

	if (error || !data) {
		return (
			<div className="nextora-overview-wrap">
				<div className="nextora-overview-error" role="alert">
					<p>{error || __('Unable to load overview data.', 'nextora')}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="nextora-overview-wrap">
			<div className="nextora-overview-page">
				<Header />

				<Tabs active={activeTab} onChange={handleTabChange} />

				<div className="nextora-overview-content">
					<section
						id={FEATURES_TAB.panelId}
						role="tabpanel"
						aria-labelledby={FEATURES_TAB.tabId}
						hidden={activeTab !== FEATURES_TAB.id}
					>
						{videos.length > 0 && (
							<GettingStartedNotice
								href={tabHref(VIDEOS_TAB.id)}
								onOpen={() => handleTabChange(VIDEOS_TAB.id)}
							/>
						)}
						<FeatureGrid features={data.features} />
						<GalleryGrid
							title={__('See it in action', 'nextora')}
							items={data.gallery}
						/>
						<GalleryGrid
							title={__('Extensions', 'nextora')}
							items={data.extensionsGallery ?? []}
						/>
					</section>

					<section
						id={VIDEOS_TAB.panelId}
						role="tabpanel"
						aria-labelledby={VIDEOS_TAB.tabId}
						hidden={activeTab !== VIDEOS_TAB.id}
					>
						<VideoWorkspace videos={videos} isActive={activeTab === VIDEOS_TAB.id} />
					</section>
				</div>

				<OverviewFooter />
			</div>
		</div>
	);
}
