import React, {
  ComponentProps,
  PropsWithChildren,
  HTMLProps,
  useEffect,
  useRef,
  useState,
} from 'react';

import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import styles from '../styles/image.module.scss';
import { urlForImage } from '../lib/sanity';
import { mergeClasses } from '@utils';

interface Props
  extends Omit<HTMLProps<HTMLImageElement>, 'src'>,
    PropsWithChildren {
  aspectRatio?: string;
  height?: number;
  lazy?: boolean;
  link?: ComponentProps<typeof Link>['href'];
  lqip?: string;
  source: SanityImageSource;
  width?: number;
}

export default function Image({
  aspectRatio,
  children,
  className,
  height,
  lazy = false,
  lqip,
  source,
  style,
  width,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>();
  useEffect(() => {
    if (imgRef.current?.complete && lazy) {
      setLoaded(true);
    }
  }, []);

  let url = urlForImage(source);

  if (width) {
    url = url.width(width);
  }

  if (height) {
    url = url.height(height);
  }

  return (
    <figure
      className={mergeClasses([
        styles.container,
        lazy ? styles.lazy : null,
        className,
      ])}
      style={style}
      {...rest}
    >
      <img
        className={mergeClasses([
          styles.content,
          lazy ? styles.lazy : null,
          loaded ? styles.loaded : null,
        ])}
        src={url.url()}
        ref={imgRef}
        style={style}
        //loading='lazy'
      />
      {children}
    </figure>
  );
}
