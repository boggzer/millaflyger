import React, { memo, Suspense, useCallback } from 'react';
import '../../css/ResponsiveGrid.scss';
import Lottie, { Options } from 'react-lottie';
import aniData from '../../assets/lottie/white-noise.json';
import ImageComponent from '../presentational/ImageComponent';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import { useWindowSize } from 'react-use';
import useImageSize from '../../hooks/useImageSize';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { isNaN } from 'lodash';

export type ResponsiveGridImageType = {
  id?: string;
  src: string;
  height: number | any;
  width: number;
};

interface ResponsiveGridProps {
  classes?: string;
  images: ResponsiveGridImageType[];
  loading?: boolean;
  isMounted?: () => boolean;
}

const ResponsiveGrid = ({ images, classes }: ResponsiveGridProps): any => {
  const { width = 1 } = useWindowSize();

  const GridImage = ({
    photo: { src, srcSet, sizes, height, width, ...image },
    onClick,
    index,
    direction,
    top,
    left,
  }: RenderImageProps): any => {
    return (
      <div
        key={image.key}
        style={{
          position: 'absolute',
          height,
          width,
          top: isNaN(top) ? '1px' : top,
          left: isNaN(left) ? '1px' : left,
        }}
      >
        <ImageComponent
          imageSource={src}
          ImageProps={{ height, width, ...image }}
        />
      </div>
    );
  };

  const animationOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: aniData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const imageRenderer = useCallback(
    ({
      index,
      key,
      photo: { height = 250, width = 250, src, ...rest },
      direction,
      ...props
    }: any) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { width: originalWidth, height: originalHeight } = useImageSize(
        src,
      );
      return (
        <GridImage
          key={key}
          margin={'2px'}
          direction={direction}
          index={index}
          photo={{
            width: isNaN(width) ? originalWidth : width,
            height: isNaN(height) ? originalHeight : height,
            src,
            ...rest,
          }}
          {...props}
        />
      );
    },
    [],
  );

  const getColumnSize = (w: number): number | undefined => {
    if (w > 0 && w < 600) {
      return 1;
    } else if (w > 600 && w < 850) {
      return 2;
    } else if (w > 850) {
      return 3;
    }
    return undefined;
  };

  return (
    <div className={`responsive-grid ${classes}`}>
      <Gallery
        photos={images}
        columns={getColumnSize(width)}
        direction='column'
        renderImage={imageRenderer}
      />
    </div>
  );
};

export default memo(ResponsiveGrid);
