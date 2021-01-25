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
      data &&
      data.reduce(
        (acc: ResponsiveGridImageType[], { title, images: [{ source }] }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { width, height } = useImageSize(
            source[0]['S'] || source[0]['M'],
          );
          acc.push({
            src: source[0]['S'] || source[0]['M'],
            height: height || 200,
            width: width || 200,
            title,
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

  return imagesWithDimensions ? (
    <>
      <AnimatedContainer
        withLink
        classes='overview-container'
        type='responsive grid'
        images={imagesWithDimensions}
      />
    </>
  ) : (
    <div>No data found</div>
  );
};

export default Overview;
