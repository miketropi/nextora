import { PackageIcon } from './icons';

interface EmptyStateProps {
	label: string;
	title?: string;
}

export default function EmptyState({ label, title }: EmptyStateProps): JSX.Element {
	return (
		<div className="nextora-addon-empty">
			<div className="nextora-addon-empty__icon">
				<PackageIcon />
			</div>
			{title && <p className="nextora-addon-empty__title">{title}</p>}
			<p className="nextora-addon-empty__text">{label}</p>
		</div>
	);
}
