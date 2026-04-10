export interface PostGridAttributes {
  heading: string;
  postsPerPage: number;
  columns: number;
  gridGap: string;
  orderBy: string;
  order: string;
  categoryIds: string;
  inheritArchiveContext: boolean;
  enablePagination: boolean;
  showFeaturedImage: boolean;
  imageRatio: string;
  imageSize: string;
  showDate: boolean;
  showAuthor: boolean;
  showCategories: boolean;
  showTags: boolean;
  maxTermsDisplay: number;
  showExcerpt: boolean;
  excerptWords: number;
  metaStyle: string;
}
