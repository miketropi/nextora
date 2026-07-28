export default function LoadingState(): JSX.Element {
	return (
		<>
			<div className="nextora-overview-hero">
				<div className="nextora-overview-skeleton nextora-overview-skeleton--badge" aria-hidden="true" />
				<div className="nextora-overview-skeleton nextora-overview-skeleton--title" aria-hidden="true" />
				<div className="nextora-overview-skeleton nextora-overview-skeleton--desc" aria-hidden="true" />
				<div className="nextora-overview-skeleton--meta" aria-hidden="true">
					<div className="nextora-overview-skeleton" />
					<div className="nextora-overview-skeleton" />
					<div className="nextora-overview-skeleton" />
				</div>
			</div>

			<div className="nextora-overview-content">
				<div className="nextora-overview-section">
					<div className="nextora-overview-skeleton nextora-overview-skeleton--section-title" aria-hidden="true" />
					<div className="nextora-overview-feature-grid">
						{Array.from({ length: 9 }, (_, i) => (
							<div key={i} className="nextora-overview-feature-card">
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-icon" aria-hidden="true" />
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-title" aria-hidden="true" />
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-text" aria-hidden="true" />
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-text" aria-hidden="true" />
							</div>
						))}
					</div>
				</div>

				<div className="nextora-overview-section">
					<div className="nextora-overview-skeleton nextora-overview-skeleton--section-title" aria-hidden="true" />
					<div className="nextora-overview-gallery">
						{Array.from({ length: 6 }, (_, i) => (
							<div key={i} className="nextora-overview-skeleton--gallery-item">
								<div className="nextora-overview-skeleton nextora-overview-skeleton--gallery-thumb" aria-hidden="true" />
								<div className="nextora-overview-skeleton--gallery-info">
									<div className="nextora-overview-skeleton nextora-overview-skeleton--gallery-title" aria-hidden="true" />
									<div className="nextora-overview-skeleton nextora-overview-skeleton--gallery-desc" aria-hidden="true" />
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="nextora-overview-footer">
					<div className="nextora-overview-skeleton nextora-overview-skeleton--footer" aria-hidden="true" />
				</div>
			</div>

			<span className="screen-reader-text-loading">Loading...</span>
		</>
	);
}
