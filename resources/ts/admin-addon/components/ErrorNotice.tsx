import { AlertCircleIcon } from './icons';

interface ErrorNoticeProps {
	message: string;
}

export default function ErrorNotice({ message }: ErrorNoticeProps): JSX.Element {
	return (
		<div className="nextora-addon-error">
			<AlertCircleIcon className="nextora-addon-error__icon" />
			{message}
		</div>
	);
}
