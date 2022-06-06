type _key = { _key: string };
type _type = { _type: string };

export type ProjectDataType = {
  images: ImageRowType[];
  slug: Record<'_type' | 'current', string>;
  tags: string[];
} & Record<'title' | '_createdAt' | '_id' | '_rev' | '_updatedAt', string> &
  _type;

type ImageRowType = {
  imageRow: ImageType[];
} & _key;

export type ImageType = Record<'alt' | 'file', string> &
  _type &
  _key;
