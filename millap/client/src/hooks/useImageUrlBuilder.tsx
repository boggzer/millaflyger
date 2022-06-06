import sanityImageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from '../client';

const builder = sanityImageUrlBuilder(client);

const useImageUrlBuilder = (source: SanityImageSource): ImageUrlBuilder =>
  builder.image(source);

export default useImageUrlBuilder;
