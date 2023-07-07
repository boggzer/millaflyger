// Libs
import React, { ComponentProps, PropsWithChildren } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Internal
import styles from '@styles/image.module.scss';
import { mergeClasses } from '@utils';
import { imageBuilder } from '../lib/sanity';
import { CSSProperties } from 'styled-components';

interface Props
  extends PropsWithChildren,
    Omit<ComponentProps<typeof NextImage>, 'alt'> {
  aspectRatio?: string | number;
  fullscreen?: boolean;
  height?: number;
  lazy?: boolean;
  link?: ComponentProps<typeof NextLink>['href'];
  src: any;
  width?: number;
  alt?: string;
}

export default function Image({
  children,
  className,
  fullscreen,
  height,
  src,
  blurDataURL,
  alt = '',
  aspectRatio,
  ...rest
}: Props) {
  const loader = ({ width: srcWidth }) =>
    imageBuilder
      .image(src)
      .width(srcWidth)
      .height(Number(height || 256))
      .auto('format')
      .fit('clip')
      .url() ?? '';

  return (
    <figure
      className={mergeClasses([
        styles.container,
        fullscreen ? styles.fullscreen : '',
        className,
      ])}
      style={
        aspectRatio ? ({ '--aspect-ratio': aspectRatio } as CSSProperties) : {}
      }
      {...rest}
    >
      <NextImage
        fill
        loader={loader}
        className={styles.content}
        src={imageBuilder.image(src).url()?.toString() ?? ''}
        alt={alt}
        {...(blurDataURL && { placeholder: 'blur', blurDataURL })}
      />
      {children}
    </figure>
  );
}
