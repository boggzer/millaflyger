/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { isObject } from 'lodash';
import { ImageSizes } from '../../utils/constants';
import { ImageCardProps } from './ImageCard';
import { some, includes, keys } from 'lodash';

interface ImageComponentProps extends ImageCardProps {
  pictureClasses?: string;
}

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

const ImageComponent = ({
  classes,
  imageSource,
  ImageProps,
  onClick,
  pictureClasses,
  title,
  size,
  style,
  ...props
}: ImageComponentProps): React.ReactElement => {
  const mediaQueries: ImageSizes = {
    XS: '(min-width: 0px) and (max-width: 399px)',
    S: '(min-width: 400px) and (max-width: 699px)',
    M: '(min-width: 700px) and (max-width: 1499px)',
    L: '(min-width: 1500px) and (max-width: 1999px)',
    XL: '(min-width: 2000px)',
  };

  cache.read(
    typeof imageSource === 'string'
      ? imageSource
      : imageSource?.source['M'] || imageSource?.source['S'],
  );

  return (
    // <Suspense fallback={<div>Hello</div>}>
    <picture onClick={onClick} className={pictureClasses}>
      {/* {<Shadow />} */}
      {isObject(imageSource) ? (
        Object.keys(imageSource).map(
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
              <img
                // onPointerEnter={(e) => <Shadow x={e.clientX} y={e.clientY} />}
                // onMouseLeave={() => {}}
                key={key}
                className={classes}
                src={imageSource.source.M}
                title={title}
                {...ImageProps}
              />
            ),
        )
      ) : (
        <img
          className={classes}
          src={imageSource}
          width={size}
          title={title}
          style={style}
          {...props}
          {...ImageProps}
        />
      )}
    </picture>
    // </Suspense>
  );
};

export default ImageComponent;
