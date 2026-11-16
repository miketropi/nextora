import { useEffect, useState } from '@wordpress/element';
import { LucideSvgPreview } from '../advanced-icon/lucide-preview';
import type { LucideIconEntry, LucideIconNode } from '../advanced-icon/types';

let cachedIcons: LucideIconEntry[] | null = null;

export async function loadIconCatalog(): Promise<LucideIconEntry[]> {
	if (cachedIcons) {
		return cachedIcons;
	}

	const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? '';
	if (!iconsUrl) {
		return [];
	}

	try {
		const response = await fetch(iconsUrl);
		if (!response.ok) {
			return [];
		}
		const data = (await response.json()) as LucideIconEntry[];
		cachedIcons = Array.isArray(data) ? data : [];
		return cachedIcons;
	} catch {
		return [];
	}
}

export interface EventButtonIconProps {
	iconName?: string;
	size?: number;
	strokeWidth?: number;
	className?: string;
}

export function EventButtonIcon({
	iconName = 'calendar-days',
	size = 16,
	strokeWidth = 1.5,
	className = 'nextora-event__register-icon',
}: EventButtonIconProps): JSX.Element {
	const name = (iconName || 'calendar-days').trim();
	const [nodes, setNodes] = useState<LucideIconNode[] | null>(null);

	useEffect(() => {
		let active = true;
		loadIconCatalog().then((icons) => {
			if (!active) return;
			const found = icons.find((icon) => icon.name === name);
			setNodes(found?.nodes ?? null);
		});

		return () => {
			active = false;
		};
	}, [name]);

	let iconContent: JSX.Element;

	if (nodes) {
		iconContent = (
			<LucideSvgPreview
				nodes={nodes}
				size={size}
				color="currentColor"
				strokeWidth={strokeWidth}
			/>
		);
	} else if (name === 'ticket') {
		iconContent = (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				width={size}
				height={size}
				className="lucide lucide-ticket"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
				<path d="M13 5v2" />
				<path d="M13 17v2" />
				<path d="M13 11v2" />
			</svg>
		);
	} else {
		iconContent = (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				width={size}
				height={size}
				className="lucide lucide-calendar-days"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M8 2v4" />
				<path d="M16 2v4" />
				<rect width="18" height="18" x="3" y="4" rx="2" />
				<path d="M3 10h18" />
				<path d="M8 14h.01" />
				<path d="M12 14h.01" />
				<path d="M16 14h.01" />
				<path d="M8 18h.01" />
				<path d="M12 18h.01" />
				<path d="M16 18h.01" />
			</svg>
		);
	}

	return (
		<span className={className} aria-hidden="true">
			{iconContent}
		</span>
	);
}
