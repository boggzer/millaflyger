import React, { type ForwardedRef, forwardRef } from 'react';

interface Props extends React.PropsWithChildren {}

const PageContentWrapper = (
  { children }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return <div ref={ref}>{children}</div>;
};

export default forwardRef(PageContentWrapper);
