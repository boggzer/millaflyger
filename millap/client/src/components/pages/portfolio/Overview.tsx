import React, { memo, useMemo } from 'react';
import '../../../css/Overview.scss';
import AnimatedContainer from '../../effects/AnimatedContainer';
import { ProjectDataType } from '../../../utils/global';
import { ResponsiveGridImageType } from '../../effects/ResponsiveGrid';
import useImageSize from '../../../hooks/useImageSize';
interface OverviewProps {
  children?: React.ReactNode;
  data: ProjectDataType[];
}

const Overview = ({ data }: OverviewProps): React.ReactElement => {
  const imagesWithDimensions = useMemo(
    () =>
      data.reduce(
        (acc: ResponsiveGridImageType[], { images: [{ source }] }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { width, height } = useImageSize(
            source[0]['S'] || source[0]['M'],
          );
          acc.push({
            src: source[0]['S'] || source[0]['M'],
            height: height || 200,
            width: width || 200,
          });
          return acc;
          /*
          images.map(({ source }: any, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { width, height } = useImageSize(
              source[0]['S'] || source[0]['M'],
            );
            acc.push({
              src: source[0]['S'] || source[0]['M'],
              height: height || 200,
              width: width || 200,
            });
          });
          */
        },
        [],
      ),
    [data],
  );

  return (
    <>
      {/* <Container type='grid' classes='overview container'> */}
      <AnimatedContainer
        data={data}
        classes='overview-container'
        type='responsive grid'
        images={imagesWithDimensions}
      />
      {/* {children} */}
      {/* </Container> */}
    </>
  );
};

export default memo(Overview);
