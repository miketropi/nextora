import { createElement } from '@wordpress/element';
import type { IconNode } from 'lucide';

import {
	Palette,
	Puzzle,
	Briefcase,
	ArrowRight,
	AlertCircle,
	Package,
	LifeBuoy,
	ShieldCheck,
	HeartHandshake,
	Search,
	ShoppingCart,
	LayoutPanelTop,
	Heart,
	Settings,
	BriefcaseBusiness,
	TrendingUp,
	Database,
	Mail,
	Zap,
	Shield,
	Upload,
	ArrowLeftRight,
	Accessibility,
	User,
} from 'lucide';

/* ------------------------------------------------------------------ */
/*  Generic Lucide icon wrapper                                       */
/* ------------------------------------------------------------------ */

interface IconProps {
	size?: number;
	className?: string;
}

interface LucideIconProps extends IconProps {
	icon: IconNode;
}

export function LucideIcon({ icon, size = 20, className }: LucideIconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			className={className}
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{icon.map(([tag, attrs], i) =>
				createElement(tag, { ...attrs, key: i }),
			)}
		</svg>
	);
}

/* ------------------------------------------------------------------ */
/*  Named icon exports (for direct usage in components)               */
/* ------------------------------------------------------------------ */

export function PaletteIcon({ size = 18, className }: IconProps) {
	return <LucideIcon icon={Palette} size={size} className={className} />;
}

export function PuzzleIcon({ size = 18, className }: IconProps) {
	return <LucideIcon icon={Puzzle} size={size} className={className} />;
}

export function BriefcaseIcon({ size = 18, className }: IconProps) {
	return <LucideIcon icon={Briefcase} size={size} className={className} />;
}

export function ArrowRightIcon({ size = 14, className }: IconProps) {
	return <LucideIcon icon={ArrowRight} size={size} className={className} />;
}

export function AlertCircleIcon({ size = 16, className }: IconProps) {
	return <LucideIcon icon={AlertCircle} size={size} className={className} />;
}

export function PackageIcon({ size = 22, className }: IconProps) {
	return <LucideIcon icon={Package} size={size} className={className} />;
}

export function LifeBuoyIcon({ size = 20, className }: IconProps) {
	return <LucideIcon icon={LifeBuoy} size={size} className={className} />;
}

export function ShieldCheckIcon({ size = 20, className }: IconProps) {
	return <LucideIcon icon={ShieldCheck} size={size} className={className} />;
}

export function HeartHandshakeIcon({ size = 20, className }: IconProps) {
	return <LucideIcon icon={HeartHandshake} size={size} className={className} />;
}

export function SearchIcon({ size = 14, className }: IconProps) {
	return <LucideIcon icon={Search} size={size} className={className} />;
}

/* ------------------------------------------------------------------ */
/*  Card icon resolver (maps dashicon slugs → Lucide icons)           */
/* ------------------------------------------------------------------ */

const cardIconMap: Record<string, IconNode> = {
	'dashicons-cart': ShoppingCart,
	'dashicons-layout': LayoutPanelTop,
	'dashicons-heart': Heart,
	'dashicons-admin-customizer': Settings,
	'dashicons-admin-appearance': Palette,
	'dashicons-admin-plugins': Puzzle,
	'dashicons-admin-tools': BriefcaseBusiness,
	'dashicons-chart-area': TrendingUp,
	'dashicons-database': Database,
	'dashicons-email': Mail,
	'dashicons-performance': Zap,
	'dashicons-shield': Shield,
	'dashicons-chart-line': TrendingUp,
	'dashicons-backup': Upload,
	'dashicons-migrate': ArrowLeftRight,
	'dashicons-universal-access': Accessibility,
	'dashicons-businessman': User,
};

export function resolveCardIcon(slug: string, size = 20): JSX.Element {
	const icon = cardIconMap[slug] || Settings;
	return <LucideIcon icon={icon} size={size} />;
}
