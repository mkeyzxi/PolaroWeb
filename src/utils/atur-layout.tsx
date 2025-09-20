// utils/layoutConfig.ts
export type LayoutType = '3strip' | '4strip' | 'square' | 'wide';

export interface LayoutResult {
  width: number;
  height: number;
  maxPhotos: number;
}

export const getLayoutConfig = (type: LayoutType): LayoutResult => {
  switch (type) {
    case '3strip':
      return { width: 400, height: 600, maxPhotos: 3 };
    case '4strip':
      return { width: 400, height: 800, maxPhotos: 4 };
    case 'square':
      return { width: 500, height: 500, maxPhotos: 1 };
    case 'wide':
      return { width: 800, height: 400, maxPhotos: 1 };
    default:
      return { width: 400, height: 600, maxPhotos: 1 };
  }
};
export default getLayoutConfig;