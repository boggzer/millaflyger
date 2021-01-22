/* eslint-disable no-unused-vars */
import React, { ElementType, lazy } from 'react';
import { ComponentPropsWithRef } from 'react';
import { useMountedState } from 'react-use';
import { ProjectDataType } from '../../utils/global';
import ImageInterpolation, {
  ImageInterpolationProps,
} from './ImageInterpolation';
const ResponsiveGrid = lazy(() => import('./ResponsiveGrid'));
import { ResponsiveGridImageType } from './ResponsiveGrid';

interface AnimatedContainerProps {
  data?: ProjectDataType[];
  children?: React.ReactNode;
  classes?: string;
  images?: ResponsiveGridImageType[];
  loading?: boolean;
  type?: 'interpolation' | 'responsive grid';
  interpolationProps?: Pick<ImageInterpolationProps, 'calc'>;
  withLink?: boolean;
}

const AnimatedContainer = ({
  data,
  interpolationProps,
  children,
  classes,
  loading = false,
  images,
  type,
  ...props
}: AnimatedContainerProps): ComponentPropsWithRef<ElementType<any>> =>
  (type === 'responsive grid' && typeof images !== 'undefined' && (
    <ResponsiveGrid images={images} classes={classes} {...props} />
  )) ||
  (type === 'interpolation' && (
    <ImageInterpolation classes={classes} {...interpolationProps}>
      {children}
    </ImageInterpolation>
  ));

export default AnimatedContainer;
