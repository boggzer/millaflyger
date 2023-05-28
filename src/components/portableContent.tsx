import { ComponentProps } from 'react';
import Image from './image';
import { PortableText } from '@portabletext/react';

interface Props extends ComponentProps<typeof PortableText> {}

const components: Props['components'] = {
  types: {
    image: ({ value }) => {
      return <Image source={value} />;
    },
  },
};

export default function PortableContent(props: Props) {
  return <PortableText {...{ components, ...props }} />;
}
