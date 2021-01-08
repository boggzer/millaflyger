/* eslint-disable no-unused-vars */
import React, { CSSProperties } from 'react';
import Image from './Image';
import { ImageSize, ImageSizes } from '../../utils/constants';

export interface ImageCardProps {
  alt?: string;
  imageSource: Record<keyof ImageSizes, string> | string;
  ImageStyleProps?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  title?: string;
  size?: ImageSize;
}

const ImageCard = (props: ImageCardProps): React.ReactElement => {
  return (
    <div>
      <Image {...props} />
    </div>
  );
};

export default ImageCard;
