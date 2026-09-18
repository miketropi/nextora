import { useEffect, useState } from '@wordpress/element';
import { LucideSvgPreview } from '../advanced-icon/lucide-preview';
import type { LucideIconNode } from '../advanced-icon/types';
import { loadIconCatalog } from './icon-catalog';
import type { BoxImageItem } from './types';

export interface BoxImageEditorIconProps {
	item: BoxImageItem;
	size?: number;
	strokeWidth?: number;
}

export default function BoxImageEditorIcon({
	item,
	size = 48,
	strokeWidth = 1.8,
}: BoxImageEditorIconProps) {
	const [iconNodes, setIconNodes] = useState<LucideIconNode[] | null>(null);

	const iconSource = item.iconSource || (item.iconType === 'custom' ? 'upload' : 'theme');
	const iconName = item.iconName || (item.iconPreset === 'plant' ? 'leaf' : item.iconPreset || '');
	const uploadedIconUrl = item.uploadedIconUrl || item.iconUrl || '';

	useEffect(() => {
		if (iconSource !== 'theme' || !iconName) {
			setIconNodes(null);
			return;
		}

		let active = true;
		loadIconCatalog().then((icons) => {
			if (!active) {
				return;
			}
			const found = icons.find((icon) => icon.name === iconName);
			setIconNodes(found?.nodes ?? null);
		});

		return () => {
			active = false;
		};
	}, [iconSource, iconName]);

	if (iconSource === 'upload' && uploadedIconUrl) {
		return (
			<div className="nextora-box-image__icon">
				<img src={uploadedIconUrl} alt="" className="nextora-box-image__icon-img" />
			</div>
		);
	}

	if (iconSource === 'theme' && iconNodes) {
		return (
			<div className="nextora-box-image__icon">
				<LucideSvgPreview
					nodes={iconNodes}
					size={size}
					color="currentColor"
					strokeWidth={strokeWidth}
				/>
			</div>
		);
	}

	return null;
}
