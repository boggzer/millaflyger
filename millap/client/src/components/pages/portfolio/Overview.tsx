import React, { useMemo, useState } from 'react';
import Container from '../../presentational/Container';
import '../../../css/Overview.scss';
import AnimatedContainer from '../../effects/AnimatedContainer';
import { ProjectDataType, ProjectImageDataType } from '../../../utils/global';
import { ResponsiveGridImageType } from '../../effects/ResponsiveGrid';

interface OverviewProps {
  all?: boolean;
  children: React.ReactNode;
  data: ProjectDataType[];
}

const Overview = ({ data, all }: OverviewProps): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const getImageValues = ({
    source,
    id,
  }: Pick<ProjectImageDataType, 'source'> & Pick<ProjectDataType, 'id'>) => {
    const orgImage = { src: source[0]['S'] || source[0]['M'], height: 0 };
    const img = new Image();
    const size = (img.onload = () => ({
      height: img.height,
      width: img.width,
    }));
    img.src = orgImage['src'];
    return { id, src: orgImage['src'], ...size() };
  };

  const imageSources = useMemo(
    () =>
      data.reduce((acc: ResponsiveGridImageType[], { id, images }) => {
        if (all) {
          images.forEach(
            ({ source }: Pick<ProjectImageDataType, 'source'>, i) => {
              const imageData = getImageValues({ source, id });
              acc.push(imageData);
              acc.length - 1 === i && setIsLoading(false);
            },
          );
        } else {
          const imageData = getImageValues({
            source: images[0].source,
            id,
          });
          acc.push(imageData);
          acc.length === data.length && setIsLoading(false);
        }
        return acc;
      }, []),
    [data],
  );

  return (
    <>
      <Container type='grid' classes='overview container'>
        <AnimatedContainer
          type='responsive grid'
          images={imageSources.reverse()}
          loading={isLoading}
        />
        {/* {children} */}
      </Container>
    </>
  );
};

export default Overview;
