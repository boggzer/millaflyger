import React, { type ComponentProps, type HTMLProps } from 'react';
import Image from './Image';
import { PortableText } from '@portabletext/react';

interface Props
  extends ComponentProps<typeof PortableText>,
    Pick<HTMLProps<any>, 'style'> {}

const components: Props['components'] = {
  types: {
    image: ({ value }) => {
      return <Image src={value} />;
    },
    indexPageImage: ({ value }) => {
      return <Image fullscreen src={value} />;
    },
  },
  block: ({ children }): React.ReactElement => {
    if (
      Array.isArray(children) &&
      children.length === 1 &&
      !children[0].length
    ) {
      return <></>;
    }
    return <>{children}</>;
  },
};

export default function PortableContent({ style, ...rest }: Props) {
  if (style) {
    return (
      <div style={style}>
        <PortableText components={components} {...rest} />
      </div>
    );
  }
  return <PortableText components={components} {...rest} />;
}
