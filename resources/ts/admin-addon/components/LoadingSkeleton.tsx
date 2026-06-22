export default function LoadingSkeleton(): JSX.Element {
	return (
		<div className="nextora-addon-skeleton-grid">
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={i} className="nextora-addon-skeleton">
					<div className="nextora-addon-skeleton__thumb nextora-addon-skeleton__shimmer" />
					<div
						className="nextora-addon-skeleton__line nextora-addon-skeleton__shimmer"
						style={{ width: '70%' }}
					/>
					<div
						className="nextora-addon-skeleton__line--short nextora-addon-skeleton__shimmer"
					/>
				</div>
			))}
		</div>
	);
}
