import React from 'react';
import { isObject } from 'lodash';
import { ImageSizes } from '../../utils/constants';
import { ImageCardProps } from './ImageCard';

const Image = ({
  alt,
  imageSource,
  ImageStyleProps,
  onClick,
  title,
  size,
  ...props
}: ImageCardProps): React.ReactElement => {
  return (
    <picture onClick={onClick}>
      {isObject(imageSource) ? (
        Object.keys(imageSource).map(
          (key: string, i: number, arr: string[]): React.ReactElement =>
            i !== arr.length - 1 ? (
              <source key={key} srcSet={imageSource[key as keyof ImageSizes]} />
            ) : (
              <img
                style={{ ...ImageStyleProps }}
                alt={alt}
                src={imageSource[key as keyof ImageSizes]}
                title={title}
              />
            ),
        )
      ) : (
        <img
          style={{ ...ImageStyleProps }}
          alt={alt}
          src={imageSource}
          width={size}
          title={title}
        />
      )}
    </picture>
  );
};

export default Image;
