import React from 'react';
import { Text } from '..';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Text>Footer</Text>
    </StyledFooter>
  );
};

export default Footer;
