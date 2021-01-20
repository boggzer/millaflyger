import React, { memo, useCallback, useMemo } from 'react';
import '../../css/ResponsiveGrid.scss';
import Lottie, { LottieOptions } from 'lottie-react';
import aniData from '../../assets/lottie/white-noise.json';
import ImageCard from '../presentational/ImageCard';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import { useWindowSize } from 'react-use';
import { ProjectDataType } from '../../utils/global';

export type ResponsiveGridImageType = {
  id?: string;
  src: string;
  height: number | any;
  width: number;
};

interface ResponsiveGridProps {
  data?: ProjectDataType[];
  classes?: string;
  images: ResponsiveGridImageType[];
  loading?: boolean;
  isMounted?: () => boolean;
}

const ResponsiveGrid = ({
  data,
  images,
  classes,
}: ResponsiveGridProps): any => {
  const { width = 1 } = useWindowSize();

  const GridImage = ({
    photo: { src, srcSet, sizes, height, width, ...image },
    onClick,
    index,
    direction,
    top,
    left,
  }: RenderImageProps): any => {
    // const startLeft = customNanTypeCheck(left, NaN, 'left1');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <div
        key={image.key}
        style={{
          position: 'absolute',
          height,
          width,
          top,
          left,
        }}
      >
        <ImageCard
          imageSource={src}
          ImageProps={{
            height,
            width,
            ...image,
          }}
        />
      </div>
    );
  };

  const animationOptions: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: aniData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const imageRenderer = useCallback(
    ({ index, key, photo: { src, ...rest }, direction, ...props }: any) => {
      return (
        <GridImage
          key={key}
          margin={'2px'}
          direction={direction}
          index={index}
          photo={{
            src,
            ...rest,
          }}
          {...props}
        />
      );
    },
    [],
  );

  const getColumnSize = useMemo(() => {
    if (width > 0 && width < 600) {
      return 1;
    } else if (width > 600 && width < 850) {
      return 2;
    } else if (width > 850) {
      return 3;
    }
    return undefined;
  }, [width]);

  return (
    <div className={`responsive-grid ${classes}`}>
      <Gallery
        margin={10}
        photos={images}
        columns={getColumnSize}
        direction='column'
        renderImage={imageRenderer}
      />
    </div>
  );
};

export default memo(ResponsiveGrid);
