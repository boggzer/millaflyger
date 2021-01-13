/* eslint-disable no-unused-vars */
import React, { HTMLAttributes, forwardRef } from 'react';
import Image from './Image';
import { ImageSize, ImageSizes } from '../../utils/constants';

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  ContainerProps?: React.HTMLProps<HTMLDivElement>;
  classes?: string;
  imageSource: Record<keyof ImageSizes, string> | string;
  ImageProps?: HTMLAttributes<HTMLImageElement>;
  // onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  size?: ImageSize;
}

const ImageCard = (
  { ContainerProps, ImageProps, ...props }: ImageCardProps,
  ref: any,
): React.ReactElement => {
  return (
    <div ref={ref} {...ContainerProps}>
      <Image {...ImageProps} {...props} />
    </div>
  );
};

export default forwardRef(ImageCard);