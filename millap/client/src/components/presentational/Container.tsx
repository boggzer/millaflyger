import React, { forwardRef, HTMLAttributes, MutableRefObject } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  & > .container {
    flex-direction: column;
    &.image-grid {
      display: flex;
      align-items: center;
      padding: 7rem 5vmin;
      @media screen and (min-width: 701px) {
        padding: 5vmin;
      }
    }
  }
`;
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classes?: string;
}

const Container = (
  { children, classes, ...props }: ContainerProps,
  ref: MutableRefObject<any> | ((_instance: never) => void) | null,
): React.ReactElement => (
  <StyledContainer ref={ref} className={`container ${classes}`} {...props}>
    {children}
  </StyledContainer>
);

export default forwardRef(Container);
