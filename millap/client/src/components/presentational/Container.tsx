import React, { PropsWithoutRef } from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-left: ${({ theme }) => theme.main.pageMargin.mobile};
  margin-right: ${({ theme }) => theme.main.pageMargin.mobile};

  @media screen and ${({ theme }) => theme.utils.mq.min.laptop} {
    margin-left: ${({ theme }) => theme.main.pageMargin.desktop};
    margin-right: ${({ theme }) => theme.main.pageMargin.desktop};
  }
`;
interface ContainerProps
  extends PropsWithoutRef<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  classes?: string;
}

const Container: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ children, classes, className, ...props }, ref): React.ReactElement => (
  <StyledContainer
    className={`container${className ? ` ${className}` : ''}`}
    ref={ref}
    {...props}
  >
    {children}
  </StyledContainer>
);

export default React.forwardRef(Container);
