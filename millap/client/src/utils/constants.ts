/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
enum ImageSize {
  S,
  M,
  L,
  XL,
}

export type ImageSizes = {
  S: string;
  M: string;
  L: string;
  XL: string;
  XXL?: string;
};

export const mqSizes = {
  phone: 360,
  tablet: 640,
  laptop: 1024,
  desktop: 1440
} as const;

/**
 * Default is phoneS (320px)
 */ 
export const mqMin = {
  phone: `(min-width: ${mqSizes.phone}px)`,
  tablet: `(min-width: ${mqSizes.tablet}px)`,
  laptop: `(min-width: ${mqSizes.laptop}px)`,
  desktop: `(min-width: ${mqSizes.desktop}px)`,
}
export const mqMax = {
  phone: `(max-width: ${mqSizes.phone - 1}px)`,
  tablet: `(max-width: ${mqSizes.tablet - 1}px)`,
  laptop: `(max-width: ${mqSizes.laptop - 1}px)`,
  desktop: `(max-width: ${mqSizes.desktop - 1}px)`,
}

export type SizeType = { x: number; y: number };

enum ratio {
  ONE = 1.62,
  TWO = 3.2,
  THREE = 4.9,
  FOUR = 6.5,
  FIVE = 8.1,
  SIX = 9.7,
  SEVEN = 11.3,
  EIGHT = 12.9,
  NINE = 14.6,
}

export { ImageSize, ratio };
