import { useMemo } from 'react';
import { ResponsiveGridImageType } from '../components/effects/ResponsiveGrid';

const useImageLoad = (
  src: string | ResponsiveGridImageType[],
  grid = false,
): any => {
  const data = useMemo(() => {
    if (typeof src === 'string') {
      const img = new Image();
      const dimensions = (img.onload = () => ({
        height: img.height,
        width: img.width,
      }));
      const { height, width } = dimensions();
      return grid ? [{ src, height, width }] : { src, height, width };
    } else {
      const images: ResponsiveGridImageType[] = [];
      src &&
        src.map(({ src: imgSource }) => {
          const img = new Image();
          const dimensions = (img.onload = () => ({
            height: img.height,
            width: img.width,
          }));
          img.src = imgSource;
          const { height, width } = dimensions();
          images.push({ src: imgSource, height, width });
        });
      return images;
    }
  }, [src]);

  return data;
};

export default useImageLoad;
