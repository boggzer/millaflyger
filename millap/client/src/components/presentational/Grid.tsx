/* eslint-disable no-console */
import React, { useContext } from 'react';
import Container from './Container';
import Navigation from './Navigation';
import styles from '../../css/Grid.module.css';
import ImageCard from './ImageCard';
import { ratio } from '../../utils/constants';
import { ProjectDataType, ProjectImageDataType } from '../../utils/types';

interface GridProps {
  content?: ProjectDataType;
}

const Grid = (props: GridProps | any): React.ReactElement => {
  console.log('poop', props, props.content['images'][0]);
  return (
    <Container classes={styles.outerContainer} type='grid'>
      <Navigation />
      <Container classes={styles.innerContainer} type='grid'>
        <p>poo</p>
        {props.content &&
          Object.keys(props.content['images']).map((p: string, i: number) => (
            <ImageCard
              ContainerProps={{
                style: {
                  margin: ratio.SIX,
                  height: 'fit-content',
                },
              }}
              classes={styles.image}
              key={i}
              imageSource={props.content['images'][i]?.source[0].S}
            />
          ))}
      </Container>
    </Container>
  );
};

export default Grid;
