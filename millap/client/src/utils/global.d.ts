/* eslint-disable @typescript-eslint/no-empty-interface */

export type ProjectDataType = {
  id: string;
  title: string;
  description?: string | null;
  images: ProjectImageData[];
};

export type ProjectsType = {
  full: ProjectDataType[];
  singles: ProjectDataType[];
};

export type ProjectImageDataType = {
  alt?: string;
  sizes?: Record<any, any>[];
  order?: number | null;
  caption?: string | null;
  source: Record<'XS' | 'S' | 'M' | 'L' | 'XL', string>[];
};
