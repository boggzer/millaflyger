export type ProjectDataType = {
  id: string;
  title: string;
  description?: string;
  images: ProjectImageData[];
};

export type ProjectImageDataType = {
  order?: number;
  caption?: string;
  source: Record<'XS' | 'S' | 'M' | 'L' | 'XL', string>;
};
