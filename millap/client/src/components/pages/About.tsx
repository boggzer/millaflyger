import React, { useState } from 'react';
import Container from '../presentational/Container';
import Text from '../presentational/Text';
import '../../css/About.scss';
import FilmNoise from '../effects/FilmNoise';
import useRefChange from '../../hooks/useRefChange';

const About = (): React.ReactElement => {
  const [showFilmNoise, setShowFilmNoise] = useState<boolean>(false);
  const [ref, setRef] = useState<any>();
  const refChange = useRefChange(setRef);

  const onMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setShowFilmNoise(true);
  };

  return (
    <Container flexStart classes='container about-container'>
      <Container flexStart>
        <Text bold type='h6'>
          Exhibitions
        </Text>
        <Container column flexStart classes='text-block'>
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
      <Container flexStart>
        <Text bold type='h6'>
          Education
        </Text>
        <Container column flexStart classes='text-block'>
          <Text>
            2016 Filmarbetare Tärna Folkhögskola
            <br />
            2018 Högre Fotografisk utbildning Kulturama
            <br />
            2019 Dokumentärfotografi Fotoskolan Kungälv
            <br />
            2020 Konstnärligt Kandidatprogram i Fotografi HDK-Valan
          </Text>
        </Container>
      </Container>
      <Container flexStart>
        <Text bold type='h6'>
          About
        </Text>
        <Text>
          Milla Flyger is a Gothenburg based artist working with photography and
          film.
        </Text>
        <Text bold type='h6'>
          Contact
        </Text>
        <Text
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => setShowFilmNoise(false)}
          containerClasses='email-link-container'
          onlyContainer
        >
          <FilmNoise
            elRef={ref}
            withPortal
            outerClasses='film-noise'
            show={showFilmNoise}
            innerClasses='inner-film-noise'
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
  );
};

export default About;
