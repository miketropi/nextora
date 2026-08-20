import { Button, SelectControl } from '@wordpress/components';
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
	) => Promise<ImportApiResponse | undefined>;
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
	const compatibilityMsg =
		template.compatibility?.message ||
		__('Compatible with Nextora', 'nextora');
	const isCurrentSuccess = importSuccess && importSuccess.post_id > 0;

	return (
		<div className="nextora-cloud-card">
			<div className="nextora-cloud-card__preview">
				{template.thumbnailUrl ? (
					<img
						src={template.thumbnailUrl}
						alt={template.title}
						className="nextora-cloud-card__img"
						loading="lazy"
					/>
				) : (
					<div className="nextora-cloud-card__placeholder">
						<span>{template.title}</span>
					</div>
				)}
				<div className="nextora-cloud-card__badge-wrap">
					<span className="nextora-cloud-card__type-badge">
						{template.type}
					</span>
					<span
						className={`nextora-cloud-card__compat-badge ${
							isCompatible ? 'is-compatible' : 'is-incompatible'
						}`}
						title={compatibilityMsg}
					>
						{isCompatible ? (
							<CheckCircleIcon width={13} height={13} />
						) : (
							<AlertCircleIcon width={13} height={13} />
						)}
						{isCompatible ? `v${template.version}` : 'Incompatible'}
					</span>
				</div>
			</div>

			<div className="nextora-cloud-card__body">
				<div className="nextora-cloud-card__header">
					<h3 className="nextora-cloud-card__title" title={template.title}>
						{template.title}
					</h3>
					<span className="nextora-cloud-card__category">
						{template.category}
					</span>
				</div>

				<p className="nextora-cloud-card__slug">
					<code>{template.slug}</code>
				</p>

				<div className="nextora-cloud-card__actions">
					{isCurrentSuccess ? (
						<div className="nextora-cloud-card__success-state">
							<span className="nextora-cloud-card__success-msg">
								<CheckCircleIcon width={14} height={14} />
								{__('Imported!', 'nextora')}
							</span>
							<a
								href={importSuccess.edit_url}
								target="_blank"
								rel="noreferrer noopener"
								className="nextora-cloud-card__edit-btn"
							>
								{__('Edit Draft', 'nextora')}
								<ExternalLinkIcon width={12} height={12} />
							</a>
						</div>
					) : (
						<div className="nextora-cloud-card__btn-group">
							<Button
								variant="primary"
								className="nextora-cloud-card__import-btn"
								isBusy={isImporting}
								disabled={isImporting}
								onClick={() => onImport(template, 'page')}
							>
								<DownloadIcon width={14} height={14} />
								{isImporting
									? __('Importing...', 'nextora')
									: __('Import as Page', 'nextora')}
							</Button>
							<Button
								variant="secondary"
								className="nextora-cloud-card__template-btn"
								isBusy={isImporting}
								disabled={isImporting}
								onClick={() => onImport(template, 'template')}
								title={__(
									'Import as FSE Block Template',
									'nextora',
								)}
							>
								{__('FSE', 'nextora')}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
