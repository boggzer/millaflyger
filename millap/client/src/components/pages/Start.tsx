import React, { useRef, useState, Suspense, lazy } from 'react';
const ImageCard = lazy(() => import('../presentational/ImageCard'));
const Text = lazy(() => import('../presentational/Text'));
import { ProjectDataType } from '../../utils/global';
import { useThrottledCallback } from 'use-debounce';
import animationData from '../../assets/lottie/detvarengangmendetvaringet_noreverse.json';
import Lottie, { LottieOptions, LottieRef } from 'lottie-react';
import bg from '../../assets/images/kvinna-i-hav_bg@1500x997.jpg';
import styled from 'styled-components';
import { useEffect } from 'react';
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

const StyledBackground = styled.div<{
  readonly x?: number;
  readonly y?: number;
}>`
  height: 100%;
  width: 100%;
  overflow: hidden !important;
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
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 1;
    img {
      min-height: 100%;
      overflow-y: visible;
      width: 100%;
      right: 0;
      // position: absolute;
      object-fit: cover;
      object-position: top;
    }
  }
  & > .start-lottie {
    position: absolute;
    min-width: 40rem;
    max-width: 70rem;
    height: fit-content;
    max-height: 17rem;
    right: 0;
    z-index: 2;
    width: 60vw;
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

const Start = (props: StartProps): React.ReactElement => {
  const lottieRef = useRef<any>();
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  /*
  const {
    callback: updatePosition,
    cancel: cancelUpdatePosition,
  } = useThrottledCallback(
    ({ clientX: x, clientY: y }: MouseEventInit) =>
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
*/
  const animationProps: LottieOptions = {
    animationData,
    autoplay: true,
    onDOMLoaded: () => (lottieRef as LottieRef)?.current?.setSpeed(3),
    loop: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return (
    <StyledBackground className='start container fl-row'>
      <Text type='h2'>Milla Flyger</Text>
      <Suspense fallback={<div>Loading</div>}>
        <Lottie
          className='start-lottie'
          lottieRef={lottieRef}
          {...animationProps}
        />
        <ImageCard
          outerRef={ref}
          imageSource={bg}
          containerClasses='start-image-container'
          alt=''
        />
      </Suspense>
    </StyledBackground>
  );
};

export default Start;
