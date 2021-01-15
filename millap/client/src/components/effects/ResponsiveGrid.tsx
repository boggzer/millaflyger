import React, { memo, Suspense, useCallback } from 'react';
import '../../css/ResponsiveGrid.scss';
import Lottie, { Options } from 'react-lottie';
import aniData from '../../assets/lottie/white-noise.json';
import Gallery from 'react-photo-gallery';
import { useWindowSize } from 'react-use';
export type ResponsiveGridImageType = {
  id: string;
  src: string;
  height: number | any;
  width: number;
};

interface ResponsiveGridProps {
  classes?: string;
  images: ResponsiveGridImageType[];
  mediaQueries?: string[];
  queriesCount?: number[];
  loading?: boolean;
  queriesDefaultCount?: number;
  isMounted?: () => boolean;
}

const ResponsiveGrid = ({ images }: ResponsiveGridProps): any => {
  const { width, height } = useWindowSize();

  const GridImage = ({ photo, top, left, direction: d, margin }: any) => {
    return (
      <div
        style={{
          margin: '1rem',
          height: photo.height,
          width: photo.width,
          cursor: 'pointer',
          overflow: 'hidden',
          position: d === 'column' ? 'absolute' : 'relative',
          left: d === 'column' ? left : 'initial',
          top: d === 'column' ? top : 'initial',
        }}
      >
        <img
          {...photo}
          style={{
            boxSizing: 'border-box',
            padding: '1rem',
          }}
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
    ({ index, left, top, key, photo, direction }: any) => (
      <Suspense
        key={key}
        fallback={
          <Lottie options={animationOptions} height={100} width={100} />
        }
      >
        <GridImage
          key={key}
          margin={'2px'}
          direction={direction}
          index={index}
          photo={photo}
          left={left}
          top={top}
        />
      </Suspense>
    ),
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
