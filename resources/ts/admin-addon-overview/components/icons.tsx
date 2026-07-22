import { createElement } from '@wordpress/element';
import type { IconNode } from 'lucide';

import {
	LayoutDashboard,
	Paintbrush,
	Play,
	Search,
	MessageSquare,
	ShoppingCart,
	Heart,
	Boxes,
	Accessibility,
	Info,
	CheckCircle2,
	Clock,
	ExternalLink,
	AlertTriangle,
	Loader2,
} from 'lucide';

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

const featureIconMap: Record<string, IconNode> = {
	layout: LayoutDashboard,
	brush: Paintbrush,
	play: Play,
	search: Search,
	'message-square': MessageSquare,
	'shopping-cart': ShoppingCart,
	heart: Heart,
	boxes: Boxes,
	accessibility: Accessibility,
};

export function getFeatureIcon(name: string): IconNode {
	return featureIconMap[name] || Info;
}

export function InfoIcon({ size = 14, className }: IconProps) {
	return <LucideIcon icon={Info} size={size} className={className} />;
}

export function CheckIcon({ size = 16, className }: IconProps) {
	return <LucideIcon icon={CheckCircle2} size={size} className={className} />;
}

export function ClockIcon({ size = 14, className }: IconProps) {
	return <LucideIcon icon={Clock} size={size} className={className} />;
}

export function ExternalLinkIcon({ size = 16, className }: IconProps) {
	return <LucideIcon icon={ExternalLink} size={size} className={className} />;
}

export function AlertIcon({ size = 16, className }: IconProps) {
	return <LucideIcon icon={AlertTriangle} size={size} className={className} />;
}

export function LoaderIcon({ size = 28, className }: IconProps) {
	return <LucideIcon icon={Loader2} size={size} className={className} />;
}
