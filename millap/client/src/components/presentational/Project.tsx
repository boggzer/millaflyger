import React, { Suspense, lazy, useMemo, useTransition } from 'react';

import Image from './Image';
import { ProjectType } from '../../types';
import Text from './Text';
import WrappedSvgText from './WrappedSvgText';
import styled from 'styled-components';

const Container = lazy(() => import('./Container'));
const Grid = lazy(() => import('./Grid'));

interface ProjectProps {
  data: ProjectType;
}

const StyledContainer = styled(Container)`
  margin: 0 ${({ theme }) => theme.main.pageMargin.mobile};

  @media screen and ${({ theme }) => theme.utils.mq.min.tablet} {
    margin-top: ${({ theme }) => theme.main.pageMargin.desktop};
  }
`;

const Project: React.FunctionComponent<ProjectProps> = ({
  data,
}): React.ReactElement => {
  const { pathname } = document.location;
  const images = data.images && data.images.length ? data.images : [];

  const showText = useMemo(() => pathname === `/${data.slug?.current}`, [
    data,
    pathname,
  ]);

  const imageRows = images.map(({ imageRow }, rowIndex) => {
    if (imageRow && imageRow.length) {
      return imageRow.map((image, imageIndex) => (
        <Image
          key={`${rowIndex}${imageIndex}`}
          rowLength={imageRow.length}
          {...image}
        />
      ));
    } else {
      <></>;
    }
  });

  return (
    data && (
      <StyledContainer className={`project-${data.slug?.current}`}>
        <Suspense fallback={<div>loading</div>}>
          <Grid flex gap>
            {imageRows}
          </Grid>
          {data?.title}
        </Suspense>
      </StyledContainer>
    )
  );
};

export default Project;
