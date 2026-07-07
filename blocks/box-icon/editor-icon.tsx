import type { CSSProperties } from 'react';
import { useEffect, useState } from '@wordpress/element';
import { LucideSvgPreview } from '../advanced-icon/lucide-preview';
import type { LucideIconNode } from '../advanced-icon/types';
import { loadIconCatalog, storedColorToCss } from './icon-catalog';
import type { BoxIconIconSource, BoxIconIconStyle } from './types';

export interface EditorIconProps {
	iconSource?: BoxIconIconSource;
	iconName: string;
	uploadedIconUrl?: string;
	iconSize: number;
	strokeWidth: number;
	iconStyle: BoxIconIconStyle;
	iconCircleSize: number;
	iconCircleRadius: number;
	iconColor?: string;
	iconSurfaceBackgroundColor?: string;
	iconSurfaceBorderColor?: string;
	lookupPalette: { slug: string; color: string }[];
}

function cssVarIfSet(
	value: string | undefined,
	palette: { slug: string; color: string }[],
): string | undefined {
	if (!value || value === 'currentColor') {
		return undefined;
	}

	const resolved = storedColorToCss(value, palette);
	return resolved || undefined;
}

export default function BoxIconEditorIcon({
	iconSource = 'theme',
	iconName,
	uploadedIconUrl = '',
	iconSize,
	strokeWidth,
	iconStyle,
	iconCircleSize,
	iconCircleRadius,
	iconColor = '',
	iconSurfaceBackgroundColor = '',
	iconSurfaceBorderColor = '',
	lookupPalette,
}: EditorIconProps) {
	const [iconNodes, setIconNodes] = useState<LucideIconNode[] | null>(null);

	useEffect(() => {
		if (iconSource !== 'theme') {
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

	const iconStyleVars: Record<string, string | number> = {
		width: iconCircleSize,
		height: iconCircleSize,
	};

	const iconColorVar = cssVarIfSet(iconColor, lookupPalette);
	if (iconColorVar) {
		iconStyleVars['--nextora-box-icon-icon-color'] = iconColorVar;
	}

	if (iconStyle === 'stacked' || iconStyle === 'framed') {
		iconStyleVars.borderRadius = `${iconCircleRadius}%`;

		const surfaceBgVar = cssVarIfSet(iconSurfaceBackgroundColor, lookupPalette);
		if (surfaceBgVar) {
			iconStyleVars['--nextora-box-icon-icon-surface-bg'] = surfaceBgVar;
		}

		if (iconStyle === 'framed') {
			const surfaceBorderVar = cssVarIfSet(iconSurfaceBorderColor, lookupPalette);
			if (surfaceBorderVar) {
				iconStyleVars['--nextora-box-icon-icon-surface-border'] = surfaceBorderVar;
			}
		}
	}

	const iconInner =
		iconSource === 'upload' && uploadedIconUrl ? (
			<img
				src={uploadedIconUrl}
				alt=""
				className="nextora-box-icon__icon-img"
				width={iconSize}
				height={iconSize}
			/>
		) : iconSource === 'theme' && iconNodes ? (
			<LucideSvgPreview
				nodes={iconNodes}
				size={iconSize}
				color="currentColor"
				strokeWidth={strokeWidth}
			/>
		) : (
			<span className="nextora-box-icon__icon-fallback" aria-hidden="true" />
		);

	if (iconStyle === 'default') {
		return (
			<div
				className="nextora-box-icon__icon nextora-box-icon__icon--style-default"
				aria-hidden="true"
				style={iconStyleVars as CSSProperties}
			>
				{iconInner}
			</div>
		);
	}

	return (
		<div
			className={`nextora-box-icon__icon nextora-box-icon__icon--style-${iconStyle}`}
			aria-hidden="true"
			style={iconStyleVars as CSSProperties}
		>
			{iconInner}
		</div>
	);
}
