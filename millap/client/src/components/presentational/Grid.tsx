/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import Container from './Container';
import styles from '../../css/Grid.module.css';
import ImageCard from './ImageCard';
import { ratio } from '../../utils/constants';
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
  const { x, y } = useElementSize(ref, 0);
  const refChange = useRefChange(setRef);
  const { x: wX, y: wY } = useWindowSize();

  return (
    <Container
      classes={`${styles.innerContainer} ${outerContainerClasses}`}
      type='grid'
    >
      {images &&
        Object.keys(images).map((p: string, i: number) => (
          <ImageCard
            ref={refChange}
            ContainerProps={{
              style: {
                margin: x / 8.8 / 2,
                ...imageCardStyle,
              },
              className: imageCardClasses,
            }}
            classes={`${styles.image} ${innerContainerClasses}`}
            key={i}
            imageSource={images[i]?.source[0].S}
          />
        ))}
    </Container>
  );
};

export default Grid;
