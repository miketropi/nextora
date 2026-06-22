import { __ } from '@wordpress/i18n';
import { Image as ImageIcon } from 'lucide';
import { ArrowRightIcon, LucideIcon } from './icons';

interface ExtensionCardProps {
	image?: string;
	title: string;
	description: string;
	url?: string;
	isActive?: boolean;
	isPremium?: boolean;
	isComingSoon?: boolean;
	author?: string;
}

export default function ExtensionCard({
	image,
	title,
	description,
	url,
	isActive,
	isPremium,
	isComingSoon,
	author,
}: ExtensionCardProps): JSX.Element {
	return (
		<div className="nextora-addon-card">
			{image ? (
				<img
					src={image}
					alt={title}
					className="nextora-addon-card__image"
				/>
			) : (
				<div className="nextora-addon-card__placeholder">
					<LucideIcon
						icon={ImageIcon}
						size={28}
						className="nextora-addon-card__placeholder-icon"
					/>
				</div>
			)}

			<h3 className="nextora-addon-card__title">{title}</h3>
			<p className="nextora-addon-card__desc">{description}</p>

			<div className="nextora-addon-card__meta">
				{author && (
					<span className="nextora-addon-card__author">
						{__('By', 'nextora')} {author}
					</span>
				)}
				{isComingSoon && (
					<span className="nextora-addon-card__tag nextora-addon-card__tag--soon">
						{__('Coming soon', 'nextora')}
					</span>
				)}
				{isPremium && (
					<span className="nextora-addon-card__tag nextora-addon-card__tag--premium">
						{__('Premium', 'nextora')}
					</span>
				)}
				{isActive !== undefined && (
					<span
						className={`nextora-addon-card__status${
							isActive
								? ' nextora-addon-card__status--active'
								: ' nextora-addon-card__status--inactive'
						}`}
					>
						{isActive ? __('Active', 'nextora') : __('Inactive', 'nextora')}
					</span>
				)}
			</div>

			{url && !isComingSoon && (
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="nextora-addon-card__link"
				>
					{__('Learn more', 'nextora')}
					<ArrowRightIcon className="nextora-addon-card__link-icon" />
				</a>
			)}
		</div>
	);
}
