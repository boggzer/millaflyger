import React, { useLayoutEffect, useMemo, useState } from 'react';
import Container from './Container';
import '../../css/ImageGrid.scss';
import ImageCard from './ImageCard';
// import { useLocation } from 'react-router';
import { ProjectDataType } from '../../utils/global';
import { CSSProperties } from 'react';
import useRefChange from '../../hooks/useRefChange';
import useElementSize from '../../hooks/useElementSize';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useMeasure from '../../hooks/useMeasure';
import useImageSize from '../../hooks/useImageSize';

interface ImageGridProps extends ProjectDataType {
  outerContainerClasses?: string;
  imageCardClasses?: string;
  innerContainerClasses?: string;
  imageCardStyle?: CSSProperties;
}

const ImageGrid = ({
  outerContainerClasses,
  imageCardClasses,
  innerContainerClasses,
  images,
  imageCardStyle,
}: ImageGridProps): React.ReactElement => {
  const [ref, setRef] = useState<any>();
  const { pathname } = useLocation();
  const { x = 0, y = 0 } = useElementSize(ref, 10);
  const refChange = useRefChange(setRef);
  const [l, isL] = useState(true);

  const paddings: { [key: string]: (string | number)[] } = {
    '/hjartat-i-halsgropen': [
      x / 16.0526 / 2 + 'px',
      '22.1%',
      x / 16.0526 / 2 + 'px',
    ],
  };
  const parentGridStyles: {
    [key: string]: { [key: string]: string } | CSSProperties;
  } = {
    '/kognition': {
      columnGap: `${x / 15.2}px`,
      padding:
        (x || y) !== 0
          ? `${y * 0.07}px ${x * 0.22}px ${y * 0.18}px ${x * 0.22}px`
          : '0px',
    },
    '/hjartat-i-halsgropen': {
      padding: `${~~(y / 7.6)}px ${~~(y / 3.4)}px ${~~(y / 3.4)}px ${~~(
        y / 3.8
      )}px`,
      // gridTemplateRows: 'repeat(3, auto-fill',
      gridTemplateAreas: `
        "one two"
        "three three"
        "four five"`,
    },
    '/syster': {
      columnGap: `${x / 16}px`,
      padding: '9% 6.25% 21% 6.25%',
      //   gridTemplateAreas: `
      //     "one two three four"
      //     "five six seven eight"`,
      // }
    },
    '/ett-frammande-motiv': {
      columnGap: `${x / 10}px`,
      padding: `${~~(x / 10 / 2)}px ${~~(x / 10 / 2)}px ${~~(
        x /
        9.2 /
        2
      )}px ${~~(x / 10 / 2)}px`,
    },
    '/max': {
      padding: `${~~(y / 1.9)}px ${~~(y / 7.7)}px ${~~(y / 1.8)}px ${~~(
        y / 7.7
      )}px`,
      columnGap: `${1.9}%`,
      // gridTemplateAreas: `
      //   "one two three four"`,
    },
    '/nattmara': {
      padding: `${~~(y / 4)}px ${~~(x / 3.75)}px ${~~(y / 2.5)}px ${~~(
        x / 3.75
      )}px`,
    },
  };
  const childGridStyles: { [key: string]: (number | string)[] } = {
    '/hjartat-i-halsgropen': ['one', 'two', 'three', 'four', 'five'],
    // '/syster': ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  };

  const mediaQueryClasses: { [key: string]: string } = {
    '/syster': 'br',
    '/max': 'br',
  };

  return (
    <Container
      classes={`image-grid inner-container ${mediaQueryClasses?.[pathname]} ${outerContainerClasses}`}
      style={{ ...parentGridStyles?.[pathname] }}
      type='grid'
    >
      {images &&
        Object.keys(images).map((p: string, i: number, arr: string[]) => (
          <ImageCard
            ref={refChange}
            ContainerProps={{
              style: {
                margin: 0,
                padding: paddings?.[pathname]?.[images[i]?.order - 1] || 0,
                gridArea: childGridStyles?.[pathname]?.[i],
                ...imageCardStyle,
              },
              className: `${imageCardClasses}`,
            }}
            classes={`image-grid image ${innerContainerClasses}`}
            key={i}
            imageSource={{
              source: images[i]?.source[0],
              order: images[i]?.order || 0,
            }}
          />
        ))}
    </Container>
  );
};

export default ImageGrid;
