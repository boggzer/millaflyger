import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Projects
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Project title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Finish writing the project title and then click 'generate'.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Images — `array`
   *
   * * Required
   */
  images?: Array<
    SanityKeyed<{
      /**
       * Image row — `array`
       *
       *
       */
      imageRow?: Array<
        SanityKeyed<{
          _type: "Image";
          /**
           * Alternative text — `string`
           *
           * Write a sentence of what the image depicts. This is important for SEO and accessibility.
           */
          alt?: string;

          /**
           * Image file — `image`
           *
           * * Required
           */
          file?: {
            _type: "image";
            asset: SanityReference<SanityImageAsset>;
            crop?: SanityImageCrop;
            hotspot?: SanityImageHotspot;
          };
        }>
      >;
    }>
  >;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;
}

/**
 * Tags
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Tag name — `string`
   *
   *
   */
  title?: string;
}

/**
 * Index Page
 *
 *
 */
export interface Index extends SanityDocument {
  _type: "index";

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;
}

/**
 * About Page
 *
 *
 */
export interface About extends SanityDocument {
  _type: "about";

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;
}

export type Content = Array<SanityKeyed<SanityBlock>>;

export type Documents = Project | Tag | Index | About;
