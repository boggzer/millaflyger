import React, {
  HTMLAttributes,
  MouseEvent,
  useMemo,
  useRef,
  useState,
} from 'react';
import Container from '../presentational/Container';
import ImageCard from '../presentational/ImageCard';
import Text from '../presentational/Text';
import FilmNoise from '../effects/FilmNoise';
import AnimatedContainer from '../effects/AnimatedContainer';
import { ProjectDataType } from '../../utils/global';
import { useThrottledCallback } from 'use-debounce';
import animationData from '../../assets/lottie/detvarengangmendetvaringet_noreverse.json';
import animationData2 from '../../assets/lottie/detvarengangmendetvaringet.json';
import { useMouse } from 'react-use';
import Lottie, { LottieOptions } from 'lottie-react';
import bg from '../../assets/images/kvinna-i-hav_bg@1500x997.jpg';
import styled from 'styled-components';
import { useEffect } from 'react';
import Navigation from '../../components/presentational/Navigation';

/**
 *   &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 1px;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: ${(props) =>
      `translate(${props.x.toFixed(1)}px, ${props.y.toFixed(1)}px);`}
    transform-origin: center;
    box-shadow: 0 0 4rem 4rem white;
    mix-blend-mode: difference;
    background: white;
    z-index: 800;
  }
 */

const StyledBackground = styled.div<
  HTMLAttributes<HTMLDivElement> & { x: number; y: number; [key: string]: any }
>`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden !important;
  overflow-y: visible;
  transition: transform 200ms ease-in 500ms;
  .text {
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: absolute;
    width: fit-content;
    color: rgb(255, 255, 255);
    right: 10vw;
    top: 70vh;
    mix-blend-mode: difference;
    border-bottom: 0.5rem solid red;
    & > h2 {
      font-weight: 200 !important;
      font-size: 6rem !important;
      text-transform: lowercase;
    }
  }
  .start-image-container {
    z-index: 1;
    img {
      min-height: 100%;
      overflow-y: visible;
      width: 100%;
      right: 0;
      position: absolute;
      object-fit: cover;
      object-position: top;
    }
  }
  & > div:first-of-type {
    position: absolute;
    min-width: 40rem;
    max-width: 70rem;
    height: fit-content;
    max-height: 17rem;
    right: 0;
    z-index: 2;
    svg {
      z-index: 2;
      height: 100%;
      width: auto;
    }
  }
`;

interface StartProps {
  projects: ProjectDataType[];
}

const Start = ({ projects }: StartProps): React.ReactElement => {
  const [showFilmNoise, setShowFilmNoise] = useState<string>('');
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  const {
    callback: updatePosition,
    cancel: cancelUpdatePosition,
  } = useThrottledCallback(
    ({ clientX: x, clientY: y, ...rest }: MouseEventInit) =>
      x && y && setMousePos({ x, y }),
    100,
  );
  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      cancelUpdatePosition();
    };
  }, []);

  const animationProps: LottieOptions = {
    animationData,
    autoplay: true,
    loop: false,

    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };
  // {...mousePos}
  return (
    <StyledBackground className='start container fl-row'>
      <Lottie {...animationProps} />
      <Text type='h2'>Milla Flyger</Text>
      <ImageCard
        outerRef={ref}
        imageSource={bg}
        containerClasses='start-image-container'
      />
    </StyledBackground>
  );
};

export default Start;

/**
 * {content.map(({ animationCalc: calc, title, link, img }) => (
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

            <ImageCard classes='image' imageSource={img} />
          </Link>
        </AnimatedContainer>
      ))}
 */
