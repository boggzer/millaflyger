import { Container, Grid, ImageCard } from '../../';
import { ImageRowType, ImagesType, ProjectType } from '../../../types';

import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface OverviewProps {
  data: ProjectType[];
  loading: boolean;
  path: string;
}

type GridCellProps = Record<
  'mobile' | 'desktop',
  Record<'gridRowStart' | 'gridRowEnd', number> & { gridColumn: string }
>;

const StyledImageCard = styled(ImageCard)`
  padding-right: ${({ theme }) => theme.main.gap.mobile};
  padding-bottom: ${({ theme }) => theme.main.gap.mobile};

  @media screen and ${({ theme }) => theme.utils.mq.min.tablet} {
    padding-right: ${({ theme }) => theme.main.gap.desktop};
    padding-bottom: ${({ theme }) => theme.main.gap.desktop};
  }
`;

const Overview: React.FunctionComponent<OverviewProps> = ({
  data,
  loading,
}): React.ReactElement => {
  const [projects, setProjects] = React.useState<
    NonNullable<{
      data: OverviewProps['data'];
      styles: GridCellProps[];
    }>
  >();

  React.useEffect(() => {
    if (loading || (projects?.data && projects?.data.length)) return;

    // Filter all projects with at least one image to use as preview
    const previewImages = data.filter(
      ({ images }) => !!images?.[0]?.imageRow?.[0],
    );

    /**
     * Calculate grid span styles
     * TODO: Add comments on how the calculation works
     * TODO: Refactor
     */
    const styles = previewImages.reduce(
      (prev: GridCellProps[], { images }, currIndex) => {
        const image = (
          (images as NonNullable<ImagesType>)?.[0]
            .imageRow as NonNullable<ImageRowType>
        )?.[0];
        // Column span for mobile and desktop
        const colMobile = (currIndex % 2) + 1;
        const colDesktop = (currIndex % 3) + 1;

        // 5 is some sort of magic number that sets the span correctly.
        const diff = 5;
        const aspectRatio = image?.file?.metadata.dimensions.aspectRatio || 0.7;

        prev.push({
          mobile: {
            gridColumn: `${colMobile} / ${colMobile}`,
            gridRowStart:
              currIndex > 1 ? prev?.[currIndex - 2]?.mobile.gridRowEnd : 1,
            gridRowEnd:
              (currIndex > 1 ? prev?.[currIndex - 2]?.mobile.gridRowEnd : 0) +
              (prev?.[0]?.mobile
                ? Math.floor((1 / aspectRatio) * prev[0].mobile.gridRowEnd) -
                  diff
                : Math.floor((1 - aspectRatio) * 100)),
          },
          desktop: {
            gridColumn: `${colDesktop} / ${colDesktop}`,
            gridRowStart:
              currIndex > 2 ? prev?.[currIndex - 3]?.desktop.gridRowEnd : 1,
            gridRowEnd:
              (currIndex > 2 ? prev?.[currIndex - 3]?.desktop.gridRowEnd : 0) +
              (prev?.[0]?.desktop
                ? Math.floor((1 / aspectRatio) * prev[0].desktop.gridRowEnd) -
                  diff
                : Math.floor((1 - aspectRatio) * 100)),
          },
        });

        return prev;
      },
      [],
    );

    setProjects({ data: previewImages, styles });
  }, [data]);

  const columns = {
    desktop: 3,
    mobile: 2,
  };

  return !loading && projects && projects.data.length ? (
    <Container>
      <Grid columns={columns} gap>
        {projects.data.map(({ images, slug }, index) => (
          <ImageCard
            key={index}
            href={`/${slug?.current}`}
            styles={projects.styles[index] as any}
            {...(
              (images as NonNullable<ImagesType>)?.[0]
                .imageRow as NonNullable<ImageRowType>
            )?.[0]}
          />
        ))}
      </Grid>
    </Container>
  ) : (
    <></>
  );
};

export default Overview;
