export interface PageProps<T = any[]> extends React.PropsWithChildren {
  data?: T | null;
  status: number;
}

export enum TextType {
  PARAGRAPH,
  SPAN,
  FRAGMENT,
  H1,
}