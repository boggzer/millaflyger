import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  & > .container {
    flex-direction: column;
  }
`;
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classes?: string;
}

const Container = (
  { children, classes, ...props }: ContainerProps,
  ref: ForwardedRef<any>,
): React.ReactElement => (
  <StyledContainer ref={ref} className={`container ${classes}`} {...props}>
    {children}
  </StyledContainer>
);

export default forwardRef(Container);
