import React, { useState, lazy } from 'react';
import Container from '../presentational/Container';
import Text from '../presentational/Text';
const FilmNoise = lazy(() => import('../effects/FilmNoise'));
import useRefChange from '../../hooks/useRefChange';
import styled from 'styled-components';

const StyledAboutWrapper = styled.div`
  box-sizing: border-box;
  justify-content: flex-start;
  position: relative;
  top: 5vh;
  color: rgb(10, 20, 10);
  & > div {
    height: min-content;
    justify-content: center;
  }
  & > div > div {
    display: flex;
    flex-direction: row;
    height: fit-content;
    min-width: 20rem;
    width: 100%;
    max-width: 35rem;
    box-sizing: border-box;
  }
  .text {
    &.h1 {
      text-transform: lowercase;
      transform: translateX(-5%);
      align-items: center;
      width: 50%;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
  }
  div + .h6,
  div > .h6 {
    & > * {
      // margin-top: $padding !important;
    }
  }
  .email-container {
    align-items: center;
    height: 4rem;
    justify-content: flex-start;
    .film-noise {
      a {
        z-index: 1;
        width: inherit;
        width: inherit;
        position: relative;
        padding: 0.2rem;
      }
    }
    .inner-film-noise {
      z-index: -1;
      position: absolute;
      padding: 0.2rem;
      border-radius: 0.1rem;
    }
  }
`;

const About = (): React.ReactElement => {
  const [showFilmNoise, setShowFilmNoise] = useState<boolean>(false);
  const [ref, setRef] = useState<HTMLElement | undefined>();
  const refChange = useRefChange(setRef);

  const onMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setShowFilmNoise(true);
  };

  return (
    <StyledAboutWrapper className='about-wrapper w-full h-fit flow-hide fl-row align-start wrap p-m'>
      <Text tabIndex={0} textClasses='p-m' type='h1'>
        About
      </Text>
      <Container classes='fl-row w-full wrap p-s'>
        <Container classes='p-s'>
          <Text bold type='h6'>
            Exhibitions
          </Text>
          <Container classes='text-wrapper'>
            <Text>
              Galleri Kontrast, Sweden
              <br />
              APART
              <br />
              HFU Kulturama Slututställning/HFU Kulturama graduation exhibition
              <br />
              2019
            </Text>
            <Text>
              {/* Affisch: http://www.top-ev.de/wp-content/uploads/2018/12/hysteria_poster__utannamn_print3-768x635.png */}
              Top Project Space, Germany
              <br />
              HYSTERIA
              <br />
              2019
            </Text>
            <Text>
              We Are Stockholm Festival, Sweden
              <br />
              Say my name
              <br />
              2013
            </Text>
          </Container>
        </Container>
        <Container classes='p-s'>
          <Text bold type='h6'>
            Education
          </Text>
          <Container classes='text-wrapper'>
            <Text>
              2016 Filmarbetare Tärna Folkhögskola
              <br />
              2018 Högre Fotografisk utbildning Kulturama
              <br />
              2019 Dokumentärfotografi Fotoskolan Kungälv
              <br />
              2020 Konstnärligt Kandidatprogram i Fotografi HDK-Valand
            </Text>
          </Container>
        </Container>
      </Container>
      <Container classes='fl-row w-full wrap p-s'>
        <Container classes='p-s'>
          <Text bold type='h6'>
            About
          </Text>
          <Container classes='text-wrapper'>
            <Text>
              Milla Flyger is a Gothenburg based artist working with photography
              and film.
            </Text>
          </Container>
        </Container>
        <Container classes='p-s'>
          <Text bold type='h6'>
            Contact
          </Text>
          <Container classes='text-wrapper'>
            <Text
              onMouseEnter={onMouseEnter}
              onMouseLeave={() => setShowFilmNoise(false)}
              containerClasses='email-container fl-row w-fit h-fit'
              onlyContainer
            >
              <FilmNoise
                elRef={ref}
                withPortal
                outerClasses='film-noise'
                show={showFilmNoise}
                innerClasses='inner-film-noise flow-hide'
              >
                <Text
                  ref={refChange}
                  type='link'
                  href='mailto:millaflyger.jpg@gmail.com'
                >
                  millaflyger.jpg@gmail.com
                </Text>
              </FilmNoise>
            </Text>
          </Container>
        </Container>
      </Container>
    </StyledAboutWrapper>
  );
};

export default About;
