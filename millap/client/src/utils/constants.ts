/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
enum ImageSize {
  XS,
  S,
  M,
  L,
  XL,
}

export type ImageSizes = {
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
};

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
