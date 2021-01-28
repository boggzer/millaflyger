import React, { useState, memo, useRef } from 'react';
// import slugify from 'slugify';
import { Link, useLocation } from 'react-router-dom';
import FilmNoise from '../effects/FilmNoise';
import { ProjectDataType } from '../../utils/global';
import Text from '../presentational/Text';
import styled from 'styled-components';
import menuIcon from '../../assets/lottie/menu.json';
import Lottie, { LottieOptions, LottieRef } from 'lottie-react';
import { useWindowSize } from 'react-use';
import { useEffect } from 'react';

interface NavigationProps {
  classes?: string;
  projects?: ProjectDataType[];
  horizontal?: boolean;
}

const StyledNavigationModal = styled.div.attrs<{ show: boolean }>((props) => ({
  role: 'modal',
}))<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 100vw !important;
  height: 100vh !important;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 245, 0.95);
  left: -999px;
  .text {
    margin: 1rem !important;
    z-index: 3;
    font-size: 5rem !important;
    transform: translateY(-4rem);
  }
`;

const StyledMenuIcon = styled.div`
  & > *:hover {
    cursor: pointer;
  }
  button {
    border: unset;
    color: unset;
    background: unset;
  }
  position: relative;
  height: calc(5rem + 1vw);
  width: calc(5rem + 1vw);
  z-index: 6;
  top: 0;
  left: 0;
  display: block;
  & > * {
    height: inherit;
    width: inherit;
  }
  #menuButton {
    height: 100%;
    width: 100%;
    transform: translate3d(0px, 0px, 0px);
  }
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const StyledNavigation = styled.div.attrs(() => ({
  role: 'navigation',
}))<{ readonly pathname: string }>`
  position: sticky;
  top: unset;
  z-index: 3;
  @media screen and (min-width: 701px) {
    top: min(30%, 15rem);
    width: 13rem;
    padding: 2rem;
    position: ${({ pathname }) => (pathname === '/' ? 'absolute' : 'relative')};
    height: fit-content;
  }
  nav {
    position: fixed;
    display: none;
    .text {
      font-size: 2rem;
    }
    @media screen and (min-width: 701px) {
      display: block;
    }
  }
  nav,
  .nav-modal {
    width: 13rem;
    left: 0;
    z-index: 3;
    height: 100%;
    .film-noise {
      border-radius: 0.3rem;
      height: 3rem;
    }
    .text {
      text-transform: lowercase;
      font-weight: bold !important;
      border: none !important;
      overflow: hidden;
      z-index: 3;
      &:hover {
        // box-shadow: inset 0px -2px 0 -1px rgba(20, 20, 20, 0.5);
      }
    }
    .inner-film-noise {
      transform: translateY(-1rem);
      z-index: -1;
    }
  }
`;

const Navigation = ({ classes }: NavigationProps): React.ReactElement | any => {
  const iconRef: LottieRef = useRef<any>();
  const { width } = useWindowSize();
  const { pathname } = useLocation();
  const [showFilmNoise, setShowFilmNoise] = useState('');
  const [showMenuModal, setShowMenuModal] = useState<boolean>(false);

  useEffect(() => {
    width > 700 && setShowMenuModal(false);
  }, [width]);

  const handleClick = () => {
    if (!showMenuModal) {
      setShowMenuModal(true);
      iconRef?.current?.playSegments([0, 25], true);
      return;
    }
    setShowMenuModal(false);
    iconRef?.current?.playSegments([40, 75], false);
  };

  const animationOptions: LottieOptions = {
    start: 0,
    lottieRef: iconRef,
    loop: false,
    autoplay: false,
    renderer: 'svg',
    animationData: menuIcon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
    onDOMLoaded: () => {
      (iconRef as LottieRef)?.current?.setSpeed(4);
      (iconRef as LottieRef)?.current?.stop();
    },
    onClick: handleClick,
  };
  /*
  const getProjectLinks = useMemo(
    () =>
      (projects as any).map(({ title }: ProjectDataType) => ({
        title,
        link: slugify(title, { lower: true }),
        classes: 'sublink',
      })),
    [projects],
  );
  */
  const content = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/all' },
    // ...getProjectLinks,
  ];

  return (
    <StyledNavigation role='navigation' pathname={pathname} className={classes}>
      {width > 700 ? (
        <nav className='fl-col p-m fixed'>
          {content.map(({ title, link }) => (
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
              <Text
                aria-labelledby={title}
                key={`nav-${link}`}
                containerClasses='w-fit'
                onlyContainer
              >
                <Link
                  to={link}
                  id={title}
                  onMouseEnter={({ target }) =>
                    setShowFilmNoise((target as Element)?.id)
                  }
                  onMouseLeave={() => setShowFilmNoise('')}
                  style={{
                    display: 'absolute',
                    zIndex: 5,
                    width: '100%',
                  }}
                >
                  {title}
                </Link>
              </Text>
            </FilmNoise>
          ))}
        </nav>
      ) : (
        <StyledMenuIcon aria-labelledby='menuButton' className='p-s'>
          <button id='menuButton' aria-label='Menu'>
            <Lottie aria-hidden='true' {...animationOptions} />
          </button>
        </StyledMenuIcon>
      )}
      {
        <StyledNavigationModal
          className='nav-modal fl-col p-m'
          show={showMenuModal}
        >
          {content.map(({ title, link }) => (
            <Text key={`nav-${link}`} containerClasses='w-fit' onlyContainer>
              <Link
                onClick={handleClick}
                to={link}
                id={title}
                onMouseEnter={({ target }) =>
                  setShowFilmNoise((target as Element)?.id)
                }
                onMouseLeave={() => setShowFilmNoise('')}
                style={{
                  display: 'absolute',
                  zIndex: 5,
                  width: '100%',
                }}
              >
                {title}
              </Link>
            </Text>
          ))}
        </StyledNavigationModal>
      }
    </StyledNavigation>
  );
};

export default memo(Navigation);
