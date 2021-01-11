import React from 'react';
import Container from '../../presentational/Container';
import Navigation from '../../presentational/Navigation';
import styles from '../../../css/Overview.module.css';
import AnimatedContainer from '../../effects/AnimatedContainer';
import { ProjectDataType, ProjectImageDataType } from '../../../utils/types';
import { ResponsiveGridImageType } from '../../effects/ResponsiveGrid';

interface OverviewProps {
  children: React.ReactNode;
  data: ProjectDataType[];
}

const Overview = ({ data }: OverviewProps): React.ReactElement => {
  const imageSources = data.reduce(
    (acc: ResponsiveGridImageType[], { images }) => {
      images.map(({ source }: Pick<ProjectImageDataType, 'source'>) => {
        const orgImage = { src: source[0]['M'], height: 0 };
        const img = new Image();
        img.src = orgImage['src'];
        const size = (img.onload = () => ({
          height: img.height,
          width: img.width,
        }));
        acc.push({ src: orgImage['src'], ...size() });
      });
      return acc;
    },
    [],
  );

  return (
    <>
      <Navigation />
      <Container type='grid' classes={styles.container}>
        <AnimatedContainer type='responsive grid' images={imageSources} />
        {/* {children} */}
      </Container>
    </>
  );
};

export default Overview;
