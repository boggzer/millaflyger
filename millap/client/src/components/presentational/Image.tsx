/* eslint-disable no-unused-vars */
import React, { HTMLAttributes } from 'react';
import { isObject } from 'lodash';
import { ImageSizes } from '../../utils/constants';
import { ImageCardProps } from './ImageCard';

const Image = ({
  classes,
  imageSource,
  ImageStyleProps,
  onClick,
  title,
  size,
  style,
  ...props
}: ImageCardProps): React.ReactElement => {
  console.log(props);
  return (
    <picture onClick={onClick} style={{ ...style }}>
      {isObject(imageSource) ? (
        Object.keys(imageSource).map(
          (key: string, i: number, arr: string[]): React.ReactElement =>
            i !== arr.length - 1 ? (
              <source key={key} srcSet={imageSource[key as keyof ImageSizes]} />
            ) : (
              <img
                src={imageSource[key as keyof ImageSizes]}
                title={title}
                {...ImageStyleProps}
              />
            ),
        )
      ) : (
        <img
          className={classes}
          src={imageSource}
          width={size}
          title={title}
          {...ImageStyleProps}
        />
      )}
    </picture>
  );
};

export default Image;
