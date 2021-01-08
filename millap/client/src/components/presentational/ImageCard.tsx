/* eslint-disable no-unused-vars */
import React, { HTMLAttributes } from 'react';
import Image from './Image';
import { ImageSize, ImageSizes } from '../../utils/constants';

export interface ImageCardProps extends React.HTMLAttributes<HTMLImageElement> {
  classes?: string;
  imageSource: Record<keyof ImageSizes, string> | string;
  ImageStyleProps?: HTMLAttributes<HTMLImageElement>;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  size?: ImageSize;
}

const ImageCard = ({
  style,
  onMouseMove,
  onMouseLeave,
  imageSource,
  ...props
}: ImageCardProps): React.ReactElement => {
  return (
    <div>
      <Image
        imageSource={imageSource}
        style={{ ...style }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default ImageCard;
