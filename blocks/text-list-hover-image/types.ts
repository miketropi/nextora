export interface TextListHoverImageItem {
  id: string;
  title: string;
  description: string;
  year: string;
  link: string;
  imageId: number;
  imageUrl: string;
  imageAlt: string;
}

export interface TextListHoverImageAttributes extends Record<string, unknown> {
  items: TextListHoverImageItem[];
  titleSize: string;
  descriptionSize: string;
  yearSize: string;
  titleWeight: string;
  imageWidth: number;
  imageHeight: number;
  showArrow: boolean;
  titleColor: string;
  descriptionColor: string;
  hoverHighlightColor: string;
  numberColor: string;
  enableScrollAnimation: boolean;
}
