/* eslint-disable no-unused-vars */
import React, { ElementType } from 'react';
import { ComponentPropsWithRef } from 'react';
import { useMountedState } from 'react-use';
import { ProjectDataType } from '../../utils/global';
import ImageInterpolation, {
  ImageInterpolationProps,
} from './ImageInterpolation';
import ResponsiveGrid from './ResponsiveGrid';
import { ResponsiveGridImageType } from './ResponsiveGrid';

interface AnimatedContainerProps {
  data?: ProjectDataType[];
  children?: React.ReactNode;
  classes?: string;
  images?: ResponsiveGridImageType[];
  loading?: boolean;
  type?: 'interpolation' | 'responsive grid';
  interpolationProps?: Pick<ImageInterpolationProps, 'calc'>;
}

const AnimatedContainer = ({
  data,
  interpolationProps,
  children,
  classes,
  loading = false,
  images,
  type,
}: AnimatedContainerProps): ComponentPropsWithRef<ElementType<any>> => {
  const isMounted = useMountedState();

  return (
    (type === 'responsive grid' && typeof images !== 'undefined' && (
      <ResponsiveGrid
        data={data}
        images={images}
        loading={loading}
        isMounted={isMounted}
        classes={classes}
      />
    )) ||
    (type === 'interpolation' && (
      <ImageInterpolation classes={classes} {...interpolationProps}>
        {children}
      </ImageInterpolation>
    ))
  );
};

export default AnimatedContainer;
