import { __ } from '@wordpress/i18n';
import type { ChangelogEntry } from '../types';

interface ChangelogTimelineProps {
	changelog: ChangelogEntry[];
}

export default function ChangelogTimeline({ changelog }: ChangelogTimelineProps): JSX.Element {
	if (changelog.length === 0) {
		return (
			<div className="nextora-overview-section">
				<h2 className="nextora-overview-section__title">{__('Version History', 'nextora')}</h2>
				<p className="nextora-overview-hero__desc" style={{ margin: 0 }}>
					{__('No changelog entries yet.', 'nextora')}
				</p>
			</div>
		);
	}

	return (
		<div className="nextora-overview-section">
			<h2 className="nextora-overview-section__title">{__('Version History', 'nextora')}</h2>
			<div className="nextora-overview-changelog">
				{changelog.map((entry, index) => (
					<div key={entry.version} className="nextora-overview-changelog__entry">
						<div className="nextora-overview-changelog__head">
							<div className="nextora-overview-changelog__version">v{entry.version}</div>
							{index === 0 && (
								<span className="nextora-overview-changelog__latest">
									{__('Latest', 'nextora')}
								</span>
							)}
						</div>
						<ul className="nextora-overview-changelog__list">
							{entry.changes.map((change, i) => (
								<li key={i}>{change}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
