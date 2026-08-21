import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import ChildThemesTab from './components/ChildThemesTab';
import PluginsTab from './components/PluginsTab';
import BusinessServicesTab from './components/BusinessServicesTab';
import { PaletteIcon, PuzzleIcon, BriefcaseIcon } from './components/icons';

export type TabId = 'child-themes' | 'extensions' | 'business-services';

const tabs = [
	{ id: 'child-themes' as TabId, label: __('Child Themes', 'nextora'), Icon: PaletteIcon },
	{ id: 'extensions' as TabId, label: __('Extensions', 'nextora'), Icon: PuzzleIcon },
	{ id: 'business-services' as TabId, label: __('Business Services', 'nextora'), Icon: BriefcaseIcon },
];

function renderContent(tab: TabId): JSX.Element {
	switch (tab) {
		case 'child-themes':
			return <ChildThemesTab />;
		case 'extensions':
			return <PluginsTab />;
		case 'business-services':
			return <BusinessServicesTab />;
	}
}

export default function App(): JSX.Element {
	const [activeTab, setActiveTab] = useState<TabId>('child-themes');

	return (
		<div className="nextora-addon-wrap">
			<Header />

			<nav className="nextora-addon-nav" aria-label="Addon sections">
				{tabs.map(({ id, label, Icon }) => (
					<button
						key={id}
						type="button"
						className={`nextora-addon-nav__item${activeTab === id ? ' is-active' : ''}`}
						onClick={() => setActiveTab(id)}
						aria-current={activeTab === id ? 'true' : undefined}
					>
						<Icon className="nextora-addon-nav__icon" />
						{label}
					</button>
				))}
			</nav>

			<div className="nextora-addon-content" key={activeTab}>
				{renderContent(activeTab)}
			</div>

			<Footer />
		</div>
	);
}
