import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import '../../css/Container.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  centerX?: boolean;
  centerY?: boolean;
  flexStart?: boolean;
  children?: React.ReactNode;
  scrollX?: boolean;
  classes?: string;
  row?: boolean;
  column?: boolean;
  type?: 'grid' | 'single' | 'thumbnail' | 'list';
  padding?: 's' | 'm' | 'l';
}

const Container = (
  {
    centerX,
    centerY,
    children,
    flexStart,
    classes,
    row,
    scrollX,
    column = false,
    type,
    padding,
    ...props
  }: ContainerProps,
  ref: ForwardedRef<any>,
): React.ReactElement => (
  <div
    ref={ref}
    className={`container ${typeof type !== 'undefined' && `${type}`} ${
      column && 'column'
    } ${row && 'row'} ${flexStart && 'flex-start'} ${centerY && 'center-y'} ${
      centerX && 'center-x'
    } ${classes} ${padding && `padding-${padding}`} ${scrollX && 'scroll-x'}`}
    {...props}
  >
    {children}
  </div>
);

export default forwardRef(Container);
