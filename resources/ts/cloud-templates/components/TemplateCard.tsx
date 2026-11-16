import { __ } from '@wordpress/i18n';
import { CloudTemplateItem, ImportApiResponse } from '../types';
import {
	AlertCircleIcon,
	CheckCircleIcon,
	DownloadIcon,
	ExternalLinkIcon,
} from './icons';

interface TemplateCardProps {
	template: CloudTemplateItem;
	onImport: (
		template: CloudTemplateItem,
		importType: 'page' | 'template',
	) => Promise<ImportApiResponse | null | undefined>;
	isImporting: boolean;
	importSuccess: ImportApiResponse | null;
}

export function TemplateCard({
	template,
	onImport,
	isImporting,
	importSuccess,
}: TemplateCardProps) {
	const isCompatible = template.compatibility?.compatible ?? true;
	const isCurrentSuccess = Boolean(importSuccess && importSuccess.post_id > 0);

	return (
		<div className="nextora-addon-card nextora-cloud-card">
			<div className="nextora-cloud-card__preview">
				{template.thumbnailUrl ? (
					<img
						src={template.thumbnailUrl}
						alt={template.title}
						className="nextora-addon-card__image nextora-cloud-card__image"
						loading="lazy"
					/>
				) : (
					<div className="nextora-addon-card__placeholder nextora-cloud-card__placeholder">
						<span>{template.title}</span>
					</div>
				)}

				<div className="nextora-cloud-card__badges">
					<span className="nextora-cloud-card__type">
						{template.type}
					</span>
					<span
						className={`nextora-cloud-card__compat ${
							isCompatible ? 'is-compatible' : 'is-incompatible'
						}`}
						title={template.compatibility?.message}
					>
						{isCompatible ? (
							<CheckCircleIcon width={12} height={12} />
						) : (
							<AlertCircleIcon width={12} height={12} />
						)}
						v{template.version}
					</span>
				</div>
			</div>

			<h3 className="nextora-addon-card__title nextora-cloud-card__title">
				{template.title}
			</h3>

			<p className="nextora-addon-card__desc nextora-cloud-card__slug">
				<code>{template.slug}</code>
			</p>

			<div className="nextora-addon-card__meta">
				<span className="nextora-addon-card__tag nextora-addon-card__tag--premium">
					{template.category}
				</span>
				<span className="nextora-addon-card__status nextora-addon-card__status--active">
					{template.theme?.slug || 'nextora'}
				</span>
			</div>

			<div className="nextora-cloud-card__footer">
				{isCurrentSuccess && importSuccess ? (
					<div className="nextora-cloud-card__success">
						<span className="nextora-cloud-card__success-text">
							<CheckCircleIcon width={14} height={14} />
							{__('Imported!', 'nextora')}
						</span>
						<a
							href={importSuccess.edit_url}
							target="_blank"
							rel="noreferrer noopener"
							className="nextora-addon-card__link"
						>
							{__('Edit Draft', 'nextora')}
							<ExternalLinkIcon width={13} height={13} className="nextora-addon-card__link-icon" />
						</a>
					</div>
				) : (
					<div className="nextora-cloud-card__btn-group">
						<button
							type="button"
							className="nextora-cloud-btn nextora-cloud-btn--primary"
							disabled={isImporting}
							onClick={() => onImport(template, 'page')}
						>
							<DownloadIcon width={14} height={14} />
							{isImporting
								? __('Importing…', 'nextora')
								: __('Import as Page', 'nextora')}
						</button>
						<button
							type="button"
							className="nextora-cloud-btn nextora-cloud-btn--secondary"
							disabled={isImporting}
							onClick={() => onImport(template, 'template')}
							title={__('Import as FSE Block Template', 'nextora')}
						>
							{__('FSE', 'nextora')}
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
