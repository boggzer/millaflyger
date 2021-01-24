import React, { lazy, Suspense, useMemo } from 'react';
import slugify from 'slugify';
const Container = lazy(() => import('./Container'));
const Grid = lazy(() => import('./Grid'));
import Text from './Text';
import WrappedSvgText from './WrappedSvgText';

import { ProjectDataType } from '../../utils/global';
import '../../css/Project.scss';

export interface ProjectProps {
  content: ProjectDataType;
}

const Project = ({ content }: ProjectProps): React.ReactElement => {
  const { pathname } = document.location;

  const showText = useMemo(
    () => pathname === `/${slugify(content?.title, { lower: true })}`,
    [content, pathname],
  );

  return (
    content && (
      <Container
        classes={`container container project-wrapper project-${slugify(
          content?.['title'],
          {
            lower: true,
          },
        )}`}
      >
        <Grid
          {...content}
          withLightbox
          imageCardClasses='image-card'
          containerClasses={`${slugify(content?.['title'], {
            lower: true,
          })} project-image-card`}
        />
        <Suspense fallback={<div>loading</div>}>
          <WrappedSvgText showText={showText} withPortal portalId='title-text'>
            {content?.title}
          </WrappedSvgText>
          {content?.description && <Text>{content.description}</Text>}
        </Suspense>
      </Container>
    )
  );
};

export default Project;
