import createImageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './config';

// import { definePreview } from 'next-sanity/preview';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max');

// TODO: Preview implementation
// export const usePreview = definePreview(sanityConfig);
