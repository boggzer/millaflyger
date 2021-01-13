import React, { useMemo, useState } from 'react';
import Container from '../../presentational/Container';
import '../../../css/Overview.scss';
import AnimatedContainer from '../../effects/AnimatedContainer';
import { ProjectDataType, ProjectImageDataType } from '../../../utils/global';
import { ResponsiveGridImageType } from '../../effects/ResponsiveGrid';

interface OverviewProps {
  all?: boolean;
  children?: React.ReactNode;
  data: ProjectDataType[];
}

interface Yo extends ResponsiveGridImageType {
  height: number;
  width: number;
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
      height: img.height || 0,
      width: img.width || 0,
    }));
    console.log(size());
    img.src = orgImage['src'];
    return { id, src: orgImage['src'], ...size() };
  };

  const imageSources = useMemo(
    () =>
      data.reduce((acc: Yo[], { id, images }) => {
        if (all) {
          images.forEach(
            ({ source }: Pick<ProjectImageDataType, 'source'>, i) => {
              const imageData = getImageValues({ source, id });
              acc.push({
                ...imageData,
              });
              acc.length - 1 === i && setIsLoading(false);
            },
          );
        } else {
          const imageData = getImageValues({
            source: images[0].source,
            id,
          });
          acc.push({
            ...imageData,
          });
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
          images={imageSources}
          loading={isLoading}
        />
        {/* {children} */}
      </Container>
    </>
  );
};

export default Overview;
