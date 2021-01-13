import React, { useState } from 'react';
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
  const [ref, setRef] = useState<HTMLElement | undefined>();
  const { pathname } = useLocation();
  const { x, y } = useElementSize(ref, 0);
  const refChange = useRefChange(setRef);

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
      padding: `${y * 0.07}px ${x * 0.22}px ${y * 0.18}px ${x * 0.22}px`,
    },
    '/hjartat-i-halsgropen': {
      padding: '1rem 11%',
      // gridTemplateRows: 'repeat(3, auto-fill',
      gridTemplateAreas: `
        "one two"
        "three three"
        "four five"`,
    },
    '/syster': {
      columnGap: `${x / 16}px`,
      padding: '9% 6.25% 21% 6.25%',
      gridTemplateAreas: `
        "one two three four"
        "five six seven eight"`,
    },
    '/ett-frammande-motiv': {
      columnGap: `${x / 10}px`,
      padding: `${x / 10 / 2}px ${x / 10 / 2}px ${x / 9.2 / 2}px ${
        x / 10 / 2
      }px`,
    },
  };

  const childGridStyles: { [key: string]: (number | string)[] } = {
    '/hjartat-i-halsgropen': ['one', 'two', 'three', 'four', 'five'],
    '/syster': ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  };

  const is = {
    first: (num: number, arr: string[]) => num === 0 || num !== arr.length - 1,
    middle: (num: number, arr: string[]) => num !== 0 && num !== arr.length - 1,
    last: (num: number, arr: string[]) =>
      arr.length !== 1 && num === arr.length - 1,
  };
  /**
 *
            ContainerProps={{
              style: {
                margin: `0 ${
                  is.first(i, arr) || is.middle(i, arr) ? margins[pathname] : 0
                } 0 ${
                  is.middle(i, arr) || is.last(i, arr) ? margins[pathname] : 0
                }`,
                ...imageCardStyle,
              },
 */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && ref) {
      ref.onload = () => console.log(ref);
    }
  }, []);

  return (
    <Container
      classes={`image-grid inner-container ${outerContainerClasses}`}
      style={{ ...parentGridStyles?.[pathname] }}
      type='grid'
    >
      {console.log(x, y, isLoading)}
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
              className: imageCardClasses,
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
