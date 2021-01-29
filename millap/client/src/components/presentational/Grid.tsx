/* eslint-disable react/no-find-dom-node */
import React, { useMemo, useState, lazy, memo, Suspense } from 'react';
import Container from './Container';
import '../../css/Grid.scss';
const ImageCard = lazy(() => import('./ImageCard'));
import { ProjectDataType } from '../../utils/global';
import { useMeasure } from 'react-use';
import { useEffect } from 'react';
import Lightbox from './Lightbox';

interface GridProps extends ProjectDataType {
  containerClasses?: string;
  imageCardClasses?: string;
  innerContainerClasses?: string;
  withLightbox?: boolean;
}

const Grid = ({
  withLightbox = false,
  containerClasses,
  imageCardClasses,
  innerContainerClasses,
  images,
  ...props
}: GridProps): React.ReactElement => {
  const [ref, { width, height }] = useMeasure();
  const hasDimensions = useMemo(() => (width && height) !== 0, [width, height]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [opacity, setVisibility] = useState<number>(0);

  useEffect(() => {
    hasDimensions && setVisibility(1);
  }, [hasDimensions]);

  const defaultProps = {
    ContainerProps: {
      style: {
        margin: 0,
      },
      className: `${imageCardClasses}`,
    },
    containerClasses: containerClasses,
    classes: `image-grid image ${innerContainerClasses}`,
  };

  return (
    <Container
      ref={ref}
      classes={'image-grid inner-container'}
      style={{ opacity }}
    >
      {images && withLightbox && (
        <Lightbox
          handleHide={() => setActiveIndex(-1)}
          content={{ images, ...props }}
          setActive={(index: number) => setActiveIndex(index)}
          activeIndex={activeIndex}
          imageCount={images.length}
          {...props}
        />
      )}
      <Suspense fallback={<div>...</div>}>
        {images &&
          Object.keys(images).map((p: string, i: number) =>
            withLightbox ? (
              <ImageCard
                data-index={`${i}`}
                key={i}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  e.preventDefault();
                  setActiveIndex(
                    parseInt(e?.currentTarget?.dataset?.['index'] || '-1'),
                  );
                }}
                imageSource={{
                  source: images[i]?.source[0],
                  order: images[i]?.order || 0,
                }}
                alt={images[i]?.alt}
                {...defaultProps}
              />
            ) : (
              <ImageCard
                key={i}
                imageSource={{
                  source: images[i]?.source[0],
                  order: images[i]?.order || 0,
                }}
                alt={images[i]?.alt}
                {...defaultProps}
              />
            ),
          )}
      </Suspense>
    </Container>
  );
};

export default memo(Grid);
