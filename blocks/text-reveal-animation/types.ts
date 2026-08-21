export interface TextRevealElement {
	id: string;
	type: 'text' | 'image';
	text?: string;
	textColor?: string;
	tag?: 'div' | 'h2' | 'h3' | 'span' | 'p';
	imageId?: number;
	imageUrl?: string;
	imageAlt?: string;
	imageWidth?: number;
	imageRatio?: string;
	imageStyle?: 'default' | 'rounded' | 'pill' | 'circle';
	animationStyle?: 'curtain' | 'expand' | 'zoom';
	linkUrl?: string;
	linkTarget?: '_self' | '_blank';
}

export interface TextRevealRow {
	id: string;
	elements: TextRevealElement[];
	showDivider?: boolean;
	rowAlign?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
}

export interface TextRevealAnimationAttributes {
	rows: TextRevealRow[];
	headingFontFamily?: string;
	textScaleY?: number;
	fontWeight?: string;
	textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
	letterSpacing?: number;
	lineHeight?: number;
	maxWidth?: string;
	rowGap?: number;
	elementGap?: number;
	imageHeight?: number;
	imageBorderRadius?: number;
	showDividers?: boolean;
	dividerStyle?: 'solid' | 'dashed' | 'dotted';
	dividerWidth?: number;
	dividerOpacity?: number;
	textColor?: string;
	revealCoverColor?: string;
	dividerColor?: string;
	imageOverlayColor?: string;
	enableScrollAnimation?: boolean;
	animationTrigger?: 'scroll' | 'load';
	textRevealDuration?: number;
	imageRevealDuration?: number;
	ariaLabel?: string;
}
