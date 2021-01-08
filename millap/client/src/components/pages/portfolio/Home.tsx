/* eslint-disable no-console */
import React, { useContext } from 'react';
import Image from '../../presentational/Image';
import Container from '../../presentational/Container';
import Navigation from '../../presentational/Navigation';
import { ImageCardProps } from '../../presentational/ImageCard';

const Home = (props: ImageCardProps | any): React.ReactElement => {
  return (
    <Container>
      <Navigation />
    </Container>
  );
};

export default Home;
