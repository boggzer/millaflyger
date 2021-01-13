/* eslint-disable no-unused-vars */
import React, { ElementType } from 'react';
import { ComponentPropsWithRef } from 'react';
import { useMountedState } from 'react-use';
import ImageInterpolation, {
  ImageInterpolationProps,
} from './ImageInterpolation';
import ResponsiveGrid from './ResponsiveGrid';
import { ResponsiveGridImageType } from './ResponsiveGrid';

interface AnimatedContainerProps {
  children?: React.ReactNode;
  classes?: string;
  images?: ResponsiveGridImageType[];
  loading?: boolean;
  type?: 'interpolation' | 'responsive grid';
  interpolationProps?: Pick<ImageInterpolationProps, 'calc'>;
}

const AnimatedContainer = ({
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
      <ResponsiveGrid images={images} loading={loading} isMounted={isMounted} />
    )) ||
    (type === 'interpolation' && (
      <ImageInterpolation classes={classes} {...interpolationProps}>
        {children}
      </ImageInterpolation>
    ))
  );
};

export default AnimatedContainer;
