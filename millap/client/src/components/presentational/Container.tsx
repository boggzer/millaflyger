import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import '../../css/Container.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classes?: string;
}

const Container = (
  { children, classes, ...props }: ContainerProps,
  ref: ForwardedRef<any>,
): React.ReactElement => (
  <div ref={ref} className={`container ${classes}`} {...props}>
    {children}
  </div>
);

export default forwardRef(Container);
