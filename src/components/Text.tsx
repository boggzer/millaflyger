import React from 'react';
import { TextType } from '@types';
import { PropsWithChildren } from 'react';

const textElements = {
  [TextType.PARAGRAPH]: ({ children, ...rest }) => <p>{children}</p>,
  [TextType.FRAGMENT]: ({ children }) => <>{children}</>,
  [TextType.H1]: ({ children, ...rest }) => <h1 {...rest}>{children}</h1>,
};

interface Props extends PropsWithChildren {
  type: TextType;
  className?: string;
}

export default function Text({
  children,
  type = TextType.SPAN,
  ...rest
}: Props) {
  const TextElement = textElements[type];

  return <TextElement {...rest}>{children}</TextElement>;
}
