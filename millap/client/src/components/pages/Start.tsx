import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../presentational/Container';
import styles from '../../css/Start.module.css';
import Image from '../presentational/Image';
import Text from '../presentational/Text';
import FilmNoise from '../effects/FilmNoise';
import imageOne from './kognition_1_m.jpg';
import imageTwo from './aska_1_m.jpg';
import AnimatedContainer from '../effects/AnimatedContainer';

const Start = (): React.ReactElement => {
  const [showFilmNoise, setShowFilmNoise] = useState<string>('');

  const onMouseEnter = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setShowFilmNoise((event?.target as HTMLDivElement)?.id);
  };

  const content = [
    {
      animationCalc: (x: number, y: number) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 4) / 20,
        1,
      ],
      title: 'Story',
      link: 'story',
      img: imageOne,
    },
    {
      animationCalc: (x: number, y: number) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 1.25) / 20,
        1,
      ],
      title: 'Portfolio',
      link: 'all',
      img: imageTwo,
    },
  ];

  return (
    <Container type='grid' classes={styles.container}>
      {content.map(({ animationCalc: calc, title, link, img }) => (
        <AnimatedContainer
          key={title}
          type='interpolation'
          interpolationProps={{ calc }}
        >
          <Link to={`/${link}`} style={{ width: '50vw' }}>
            <Text
              textClasses={styles.text}
              containerClasses={styles.textContainer}
            >
              {title}
            </Text>
            <Container
              id={title}
              onMouseEnter={onMouseEnter}
              onMouseLeave={() => setShowFilmNoise('')}
              style={{
                width: '50vw',
                height: '100vh',
                zIndex: 2,
                position: 'absolute',
              }}
            />
            <FilmNoise
              absolute
              show={showFilmNoise === title}
              InnerProps={{ width: 'inherit', height: '100vh' }}
            />

            <Image classes={styles.image} imageSource={img} />
          </Link>
        </AnimatedContainer>
      ))}
    </Container>
  );
};

export default Start;
