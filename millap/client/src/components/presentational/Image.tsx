/* eslint-disable no-unused-vars */
import React, { HTMLAttributes } from 'react';
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
  style,
  ...props
}: ImageProps): React.ReactElement => {
  return (
    <picture onClick={onClick} className={pictureClasses}>
      {isObject(imageSource) ? (
        Object.keys(imageSource).map(
          (key: string, i: number, arr: string[]): React.ReactElement =>
            i !== arr.length - 1 ? (
              <source key={key} srcSet={imageSource[key as keyof ImageSizes]} />
            ) : (
              <img
                className={classes}
                src={imageSource[key as keyof ImageSizes]}
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
