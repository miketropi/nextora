export interface ArcGalleryImage {
	id: number;
	alt: string;
}

export interface ArcGallerySectionAttributes {
	images: ArcGalleryImage[];
	imageWidth: number;
	imageHeight: number;
	imageBorderRadius: number;
	imageBorderWidth: number;
	imageBorderColor: string;
	arcRadius: number;
	arcSpread: number;
	arcDirection: string;
	galleryHeight: number;
	galleryOverflow: boolean;
	eyebrowText: string;
	headingText: string;
	descriptionText: string;
	headingLevel: number;
	textAlign: string;
	contentMaxWidth: string;
	contentOffsetY: number;
	showPrimaryButton: boolean;
	primaryButtonText: string;
	primaryButtonUrl: string;
	primaryButtonTarget: boolean;
	primaryButtonStyle: string;
	showSecondaryButton: boolean;
	secondaryButtonText: string;
	secondaryButtonUrl: string;
	secondaryButtonTarget: boolean;
	backgroundColor: string;
	textColor: string;
	eyebrowColor: string;
	primaryButtonBg: string;
	primaryButtonColor: string;
	paddingTop: number;
	paddingBottom: number;
	enableScrollAnimation: boolean;
}
