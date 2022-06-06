import React from 'react';
import { constants } from '../utils';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100vw;
  max-width: ${({ theme }) => theme.utils.devices.laptop}px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Main: React.FunctionComponent<React.HTMLProps<HTMLElement>> = ({
  children,
}): React.ReactElement => {
  return <StyledMain role='main'>{children}</StyledMain>;
};

export default Main;