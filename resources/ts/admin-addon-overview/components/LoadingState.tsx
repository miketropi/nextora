import { LoaderIcon } from './icons';

export default function LoadingState(): JSX.Element {
	return (
		<div className="nextora-overview-loading">
			<LoaderIcon size={28} className="nextora-overview-loading__icon" />
			<p className="nextora-overview-loading__text">Loading overview...</p>
		</div>
	);
}
