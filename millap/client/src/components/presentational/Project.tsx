import React, { useRef, useCallback, useState, MutableRefObject } from 'react';
import slugify from 'slugify';
import { ProjectDataType } from '../../utils/types';
import Container from './Container';
import styles from '../../css/Project.module.css';
import Text from './Text';
import Grid from './Grid';

interface ProjectProps {
  content: ProjectDataType;
}

const Project = ({ content }: ProjectProps): React.ReactElement => {
  return (
    content && (
      <Container classes={styles.container}>
        <Text>{content.title}</Text>
        {content?.description && <Text>{content.description}</Text>}
        <Grid
          {...content}
          // imageCardStyle={{ margin: x / 8.8 / 2 }}
          imageCardClasses={`${styles.imageCard}`}
          outerContainerClasses={`${styles.main} ${
            styles[slugify(content['title'], { lower: true })]
          }`}
        />
      </Container>
    )
  );
};

export default Project;
