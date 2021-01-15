import React, { useState, memo, useMemo } from 'react';
import slugify from 'slugify';
import { Link, useLocation } from 'react-router-dom';
import FilmNoise from '../effects/FilmNoise';
import { ProjectDataType } from '../../utils/global';
import Container from './Container';
import '../../css/Navigation.scss';
import Text from '../presentational/Text';
interface NavigationProps {
  projects?: ProjectDataType[];
}

const Navigation = ({
  projects,
}: NavigationProps): React.ReactElement | any => {
  const { pathname } = useLocation();
  const [showFilmNoise, setShowFilmNoise] = useState('');

  const getProjectLinks = useMemo(
    () =>
      (projects as any).map(({ title }: ProjectDataType) => ({
        title,
        link: slugify(title, { lower: true }),
        classes: 'sublink',
      })),
    [projects],
  );
  const content = [
    { title: 'Start', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'All projects', link: '/all' },
    ...getProjectLinks,
  ];

  return (
    pathname !== '/' && (
      <Container classes='navigation-container' type='list'>
        <nav className='nav'>
          {content.map(({ title, link, classes }) => (
            <FilmNoise
              key={`nav-link-${title}-${link}`}
              show={showFilmNoise === title}
              ContainerProps={{
                id: title,
              }}
              opacity={0.4}
              outerClasses='film-noise'
              innerClasses='inner-film-noise'
            >
              <Text onlyContainer>
                <Link
                  className={classes}
                  id={title}
                  onMouseEnter={({ target }) =>
                    setShowFilmNoise((target as Element)?.id)
                  }
                  onMouseLeave={() => setShowFilmNoise('')}
                  to={link}
                >
                  {title}
                </Link>
              </Text>
            </FilmNoise>
          ))}
        </nav>
      </Container>
    )
  );
};

export default memo(Navigation);
