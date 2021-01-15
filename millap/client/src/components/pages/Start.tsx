import React, { MouseEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../presentational/Container';
import '../../css/Start.scss';
import Image from '../presentational/ImageComponent';
import Text from '../presentational/Text';
import FilmNoise from '../effects/FilmNoise';
import AnimatedContainer from '../effects/AnimatedContainer';
import { ProjectDataType, ProjectImageDataType } from '../../utils/global';

interface StartProps {
  projects: ProjectDataType[];
}

const Start = ({ projects }: StartProps): React.ReactElement => {
  const [showFilmNoise, setShowFilmNoise] = useState<string>('');

  const [imageOne, imageTwo] = useMemo(
    () =>
      projects.reduce((acc: any, { title, images }: ProjectDataType) => {
        if (title === 'Aska') {
          acc[0] = images[0].source[0]['L'];
        }
        if (title === 'Syster') {
          acc[1] = images[0].source[0]['L'];
        }
        return acc;
      }, []),
    [projects],
  );
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
    <Container type='grid' classes='start container'>
      {content.map(({ animationCalc: calc, title, link, img }) => (
        <AnimatedContainer
          key={title}
          type='interpolation'
          interpolationProps={{ calc }}
        >
          <Link to={`/${link}`} style={{ width: '50vw' }}>
            <Text textClasses='text' containerClasses='text-container'>
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

            <Image classes='image' imageSource={img} />
          </Link>
        </AnimatedContainer>
      ))}
    </Container>
  );
};

export default Start;
