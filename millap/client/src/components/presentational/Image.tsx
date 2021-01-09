/* eslint-disable no-unused-vars */
import React from 'react';
import { isObject } from 'lodash';
import { ImageSizes } from '../../utils/constants';
import { ImageCardProps } from './ImageCard';

interface ImageProps extends ImageCardProps {
  pictureClasses?: string;
}

const Image = ({
  classes,
  imageSource,
  ImageProps,
  onClick,
  pictureClasses,
  title,
  size,
  ...props
}: ImageProps): React.ReactElement => {
  const mediaQueries: ImageSizes = {
    XS: '(min-width: 0px) and (max-width: 399px)',
    S: '(min-width: 400px) and (max-width: 699px)',
    M: '(min-width: 700px) and (max-width: 1499px)',
    L: '(min-width: 1500px) and (max-width: 1999px)',
    XL: '(min-width: 2000px)',
  };

  return (
    <picture onClick={onClick} className={pictureClasses}>
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
                    srcSet={imageSource[key as keyof ImageSizes]}
                  />
                )}
              </React.Fragment>
            ) : (
              <img
                key={key}
                className={classes}
                src={imageSource.M}
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
          {...ImageProps}
        />
      )}
    </picture>
  );
};

export default Image;
