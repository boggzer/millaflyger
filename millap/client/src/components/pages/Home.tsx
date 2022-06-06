import Lottie, { LottieOptions, LottieRef } from 'lottie-react';
import React, { Suspense, forwardRef, lazy, useRef, useState } from 'react';

import Container from '../presentational/Container';
import Image from '../presentational/Image';
import { Project } from '../../types/sanitySchema';
import { ProjectDataType } from '../../utils/global';
import Text from '../presentational/Text';
import animationData from '../../assets/lottie/detvarengangmendetvaringet_noreverse.json';
import bg from '../../assets/images/kvinna-i-hav_bg@1500x997.jpg';
import placeholder from '../../assets/graphics/placeholder.svg';
import rippedPaperBg from '../../assets/images/ripped_paper.webp';
import styled from 'styled-components';
import useActivePath from '../../hooks/useActivePath';

const ImageCard = lazy(() => import('../presentational/Image'));

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

const _StyledBackground = styled.div<{
  readonly x?: number;
  readonly y?: number;
}>`
  justify-content: center;
  background-size: cover;
  background-image: url('${bg}');
  position: relative;
  background-position: top;
  overflow: hidden !important;
  transition: transform 200ms ease-in 500ms;
  & > .container.start-text-wrapper {
    max-width: 900px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    width: fit-content;
    height: inherit;
    align-items: flex-end;
    color: rgb(255, 255, 255);
    transition: padding 300ms ease;
    @supports (mix-blend-mode: difference) {
      &::before {
        content: '';
        display: block;
        top: 0;
        left: 0;
        position: absolute;
        width: 0;
        height: 0;
        background: rgb(0, 0, 0);
        mix-blend-mode: difference;
      }
    }
    & > .text {
      display: flex;
      flex-direction: column;
      width: fit-content;
      text-transform: lowercase;
      z-index: 2;
      & h4 {
        font-weight: normal !important;
        letter-spacing: 0.08rem;
      }
      &.h1 {
        @supports not (mix-blend-mode: difference) {
          background: rgb(0, 0, 0);
        }
        position: relative;
        mix-blend-mode: difference;
        & > h1 {
          white-space: nowrap;
          font-weight: 200 !important;
          font-size: 6rem;
          border-bottom: 0.5rem solid red;
        }
      }
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
    max-width: 60rem;
    height: fit-content;
    max-height: 17rem;
    right: 0;
    z-index: 2;
    width: 60vw;
    opacity: 0;

    transition: opacity 200ms cubic-bezier(0.67, 0.91, 0.64, 0.68);
    @media screen and (min-width: 701px) {
      opacity: 1;
    }
    svg {
      z-index: 2;
      height: 100%;
      width: auto;
      top: -2rem;
      transform: translate3d(0px, 0px, 0px) rotate(354deg) translateY(-2rem) !important;
      path {
        transform: rotate(5deg) !important;
      }
    }
  }
  @media screen and (max-width: 950px) {
    .container.start-text-wrapper {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media screen and (max-width: 530px) {
    .container:first-of-type {
      .text {
        & > h1 {
          font-size: calc(1rem + 10vmin) !important;
        }
        right: unset;
        text-align: center;
      }
    }
    justify-content: center;
  }
`;

const StyledContainer = styled(Container)`
  width: fit-content;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.main.pageMargin};

  & :first-child {
    margin-bottom: 0;
  }

  & :last-child {
    margin-top: 0;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
`;

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.main.baseTextSize}px;
`;

interface StartProps {
  projects: Project[];
}

const Home: React.ForwardRefRenderFunction<HTMLDivElement, StartProps> = (props, forwardedRef: any): React.ReactElement => {
  const lottieRef = useRef<any>();
  const ref = useRef(null);
  const active = useActivePath('/');
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
  console.log(active);
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
    <>
      <StyledContainer ref={forwardedRef}>
        <Text textType='h1' lowercase>
          Milla Flyger
        </Text>
        <StyledText textType='h2' font='text'>
          A photographer&apos;s portfolio
        </StyledText>
      </StyledContainer>
      <StyledImage src={placeholder} />
      {/* <Lottie
        className='start-lottie'
        lottieRef={lottieRef}
        {...animationProps}
      /> */}
    </>
  );
};

export default forwardRef(Home);
