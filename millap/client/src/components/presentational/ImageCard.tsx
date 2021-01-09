/* eslint-disable no-unused-vars */
import React, { HTMLAttributes } from 'react';
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

const ImageCard = ({
  ContainerProps,
  ImageProps,
  ...props
}: ImageCardProps): React.ReactElement => {
  return (
    <div {...ContainerProps}>
      <Image {...ImageProps} {...props} />
    </div>
  );
};

export default ImageCard;
