import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Navigation = (): React.ReactElement => {
  return (
    <Container type='list'>
      <nav>
        <a>projects</a>
      </nav>
    </Container>
  );
};

export default Navigation;
