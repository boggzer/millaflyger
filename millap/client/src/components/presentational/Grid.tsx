import React, { useState } from 'react';
import Container from './Container';
import styles from '../../css/Grid.module.css';
import ImageCard from './ImageCard';
import { useLocation } from 'react-router';
import { ProjectDataType } from '../../utils/types';
import { CSSProperties } from 'react';
import useRefChange from '../../utils/useRefChange';
import useElementSize from '../../utils/useElementSize';
import useWindowSize from '../../utils/useWindowSize';

interface GridProps extends ProjectDataType {
  outerContainerClasses?: string;
  imageCardClasses?: string;
  innerContainerClasses?: string;
  imageCardStyle?: CSSProperties;
}

const Grid = ({
  outerContainerClasses,
  imageCardClasses,
  innerContainerClasses,
  images,
  imageCardStyle,
}: GridProps): React.ReactElement => {
  const [ref, setRef] = useState<HTMLDivElement | undefined>();
  const { pathname } = useLocation();
  const { x } = useElementSize(ref, 0);
  const refChange = useRefChange(setRef);

  const margins: { [key: string]: string } = {
    '/ett-frammande-motiv': x / 8.8 / 2 + 'px',
    '/kognition': x / 15.2 / 2 + 'px',
  };

  const is = {
    first: (num: number, arr: string[]) => num === 0 || num !== arr.length - 1,
    middle: (num: number, arr: string[]) => num !== 0 && num !== arr.length - 1,
    last: (num: number, arr: string[]) =>
      arr.length !== 1 && num === arr.length - 1,
  };

  return (
    <Container
      classes={`${styles.innerContainer} ${outerContainerClasses}`}
      type='grid'
    >
      {images &&
        Object.keys(images).map((p: string, i: number, arr: string[]) => (
          <ImageCard
            ref={refChange}
            ContainerProps={{
              style: {
                margin: `0 ${
                  is.first(i, arr) || is.middle(i, arr) ? margins[pathname] : 0
                } 0 ${
                  is.middle(i, arr) || is.last(i, arr) ? margins[pathname] : 0
                }`,
                ...imageCardStyle,
              },
              className: imageCardClasses,
            }}
            classes={`${styles.image} ${innerContainerClasses}`}
            key={i}
            imageSource={images[i]?.source[0]}
          />
        ))}
    </Container>
  );
};

export default Grid;
