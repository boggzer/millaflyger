import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Container from '../presentational/Container';
import { ratio } from '../../utils/constants';
import Image from '../presentational/Image';
import Text from '../presentational/Text';
import imageOne from './kognition_1_m.jpg';
import imageTwo from './aska_1_m.jpg';

const Start = () => {
  const imageStyle: CSSProperties = {
    width: '50vw',
    height: '100vh',
    objectFit: 'cover',
  };

  const containerStyle: CSSProperties = {
    overflow: 'hidden',
    height: '100vh',
    alignItems: 'center',
  };

  const innerContainerStyle: CSSProperties = {
    height: '100vh',
    width: 'inherit',
    position: 'absolute',
    backgroundColor: `rgba(0, 0, 0, 0.${ratio.TWO.toFixed()})`,
  };

  const textStyle: CSSProperties = {
    fontSize: 'calc(.7rem + 7vw)',
    color: '#FFF',
    margin: '0 auto',
    width: 'fit-content',
  };

  return (
    <Container type='grid' ContainerStyleProps={{ ...containerStyle }}>
      <Link to='/story' style={{ width: '50vw' }}>
        <Text
          TextStyleProps={{ ...textStyle }}
          ContainerStyleProps={{
            position: 'absolute',
            width: '50vw',
            zIndex: 2,
          }}
        >
          Story
        </Text>
        <Container ContainerStyleProps={{ ...innerContainerStyle }} />
        <Container>
          <Image imageSource={imageOne} ImageStyleProps={{ ...imageStyle }} />
        </Container>
      </Link>
      <Link to='/home' style={{ width: '50vw' }}>
        <Text
          TextStyleProps={{ ...textStyle }}
          ContainerStyleProps={{
            position: 'absolute',
            width: '50vw',
            zIndex: 2,
          }}
        >
          Portfolio
        </Text>
        <Container ContainerStyleProps={{ ...innerContainerStyle }} />
        <Container>
          <Image imageSource={imageTwo} ImageStyleProps={{ ...imageStyle }} />
        </Container>
      </Link>
    </Container>
  );
};

export default Start;
