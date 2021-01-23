/* eslint-disable react/no-find-dom-node */
import React, { useMemo, useState, lazy, memo } from 'react';
import Container from './Container';
import '../../css/ImageGrid.scss';
const ImageCard = lazy(() => import('./ImageCard'));
import { ProjectDataType } from '../../utils/global';
import { CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import { useMeasure } from 'react-use';
import { useEffect } from 'react';

interface ImageGridProps extends ProjectDataType {
  containerClasses?: string;
  imageCardClasses?: string;
  innerContainerClasses?: string;
  imageCardStyle?: CSSProperties;
}

const Grid = ({
  containerClasses,
  imageCardClasses,
  innerContainerClasses,
  images,
}: ImageGridProps): React.ReactElement => {
  const [ref, { width, height }] = useMeasure();
  const hasDimensions = useMemo(() => (width && height) !== 0, [width, height]);

  const [opacity, setVisibility] = useState<number>(0);

  useEffect(() => {
    hasDimensions && setVisibility(1);
  }, [hasDimensions]);

  return (
    <Container
      ref={ref}
      classes={'image-grid inner-container'}
      style={{ opacity }}
    >
      {images &&
        Object.keys(images).map((p: string, i: number) => (
          <ImageCard
            ContainerProps={{
              style: {
                margin: 0,
              },
              className: `${imageCardClasses}`,
            }}
            containerClasses={containerClasses}
            classes={`image-grid image ${innerContainerClasses}`}
            key={i}
            imageSource={{
              source: images[i]?.source[0],
              order: images[i]?.order || 0,
            }}
            alt={images[i]?.alt}
          />
        ))}
    </Container>
  );
};

export default memo(Grid);
