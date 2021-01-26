/* eslint-disable no-unused-vars */
import React, { ImgHTMLAttributes, useState, memo } from 'react';
import { ImageSize, ImageSizes } from '../../utils/constants';
import { keys, isObject } from 'lodash';
import useRefChange from '../../hooks/useRefChange';
export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  ContainerProps?: React.HTMLProps<HTMLDivElement>;
  containerClasses?: string;
  classes?: string;
  imageSource:
    | { source: Record<keyof ImageSizes, string>; order?: number }
    | string;
  ImageProps?: ImgHTMLAttributes<HTMLImageElement>;
  // onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  size?: ImageSize;
  order?: number;
  outerRef?:
    | RefObject<HTMLDivElement | HTMLElement>
    | HTMLElement
    | HTMLDivElement;
  alt?: string;
}
import styled from 'styled-components';
import { RefObject } from 'react';

const StyledImageCardWrapper = styled.div<any>`
  &.project-image-card {
    width: fit-content;
    max-width: 1200px;
    max-height: 1200px;
    img {
      min-width: 300px;
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 80vh;
      object-fit: contain;
    }
    @media screen and (max-width: 700px) {
      width: 100% !important;
    }
    & + div {
      margin-top: 2vmin;
    }
  }
  img {
    height: auto;
    width: 100%;
  }
`;

const cache: {
  _cache: { [k: string]: Promise<any> | boolean };
  read: (src: string) => string | undefined | Promise<any> | boolean;
  clear: (src: string) => void;
} = {
  _cache: {},
  read(src: string) {
    // if no input img src
    if (!src) return;
    // if src does not exist in cache
    const key = keys(this._cache).find((k) => k.includes(src));
    if (!this._cache?.[key as string]) {
      this._cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this._cache[src] = true;
          resolve(this._cache[src]);
        };
        img.src = src;
        setTimeout(() => resolve({}), 7000);
      }).then((img) => {
        this._cache[src] = true;
      });
    }
    if (this._cache[src] instanceof Promise) throw this._cache[src];
    return this._cache[src];
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  clear: (src) => delete this._cache[src],
};

const StyledImage = styled.img`
  box-shadow: 0 2rem 4rem -5rem rgb(0 0 0);
`;

const ImageCard = ({
  alt,
  children,
  ContainerProps,
  containerClasses,
  classes,
  imageSource,
  ImageProps,
  title,
  size,
  style,
  outerRef,
  ...props
}: ImageCardProps): React.ReactElement => {
  const mediaQueries: ImageSizes = {
    S: '(min-width: 0px) and (max-width: 399px)',
    M: '(min-width: 400px) and (max-width: 599px)',
    L: '(min-width: 700px) and (max-width: 999px)',
    XL: '(min-width: 1000px)',
  };
  // const [ref, setRef] = useState<Element>();
  // const refChange = useRefChange(setRef);

  cache.read(
    typeof imageSource === 'string'
      ? imageSource
      : imageSource?.source['M'] || imageSource?.source['S'],
  );
  console.log(imageSource);
  return (
    <StyledImageCardWrapper
      className={containerClasses}
      ref={outerRef}
      {...props}
    >
      {children}
      <picture>
        {isObject(imageSource) ? (
          Object.keys(imageSource.source).map(
            (key: string, i: number, arr: string[]): React.ReactElement =>
              i !== arr.length - 1 ? (
                <React.Fragment key={key}>
                  {mediaQueries[key as keyof ImageSizes] && (
                    <source
                      media={`screen and ${
                        mediaQueries[key as keyof ImageSizes]
                      }`}
                      srcSet={imageSource.source[key as keyof ImageSizes]}
                    />
                  )}
                </React.Fragment>
              ) : (
                <StyledImage
                  alt={alt}
                  // ref={refChange}
                  key={key}
                  className={`${classes} image`}
                  src={imageSource.source.XL}
                  title={title}
                  {...ImageProps}
                />
              ),
          )
        ) : (
          <StyledImage
            alt={alt}
            // ref={refChange}
            className={`${classes} image`}
            src={imageSource}
            width={size}
            title={title}
            style={style}
            // {...props}
            {...ImageProps}
          />
        )}
      </picture>
    </StyledImageCardWrapper>
  );
  // {/* </Suspense> */}
};

export default memo(ImageCard);
