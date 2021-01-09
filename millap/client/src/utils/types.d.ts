export type ProjectDataType = {
  id: string;
  title: string;
  description?: string | null;
  images: ProjectImageData[];
};

export type ProjectImageDataType = {
  order?: number | null;
  caption?: string | null;
  source: Record<'XS' | 'S' | 'M' | 'L' | 'XL', string>[];
};
