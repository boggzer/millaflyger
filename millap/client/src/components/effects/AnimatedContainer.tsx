/* eslint-disable no-unused-vars */
import React, { ElementType } from 'react';
import { ComponentPropsWithRef } from 'react';
import ImageInterpolation, {
  ImageInterpolationProps,
} from './ImageInterpolation';
import ResponsiveGrid from './ResponsiveGrid';
import { ResponsiveGridImageType } from './ResponsiveGrid';

interface AnimatedContainerProps {
  children?: React.ReactNode;
  classes?: string;
  images?: ResponsiveGridImageType[];
  type?: 'interpolation' | 'responsive grid';
  interpolationProps?: Pick<ImageInterpolationProps, 'calc'>;
}

const AnimatedContainer = ({
  interpolationProps,
  children,
  classes,
  images,
  type,
}: AnimatedContainerProps): ComponentPropsWithRef<ElementType<any>> => {
  return (
    (type === 'responsive grid' && typeof images !== 'undefined' && (
      <ResponsiveGrid images={images} />
    )) ||
    (type === 'interpolation' && (
      <ImageInterpolation classes={classes} {...interpolationProps}>
        {children}
      </ImageInterpolation>
    ))
  );
};

export default AnimatedContainer;
