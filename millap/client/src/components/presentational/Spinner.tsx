import React, { CSSProperties, memo, useRef, useState } from 'react';
import Lottie, { LottieOptions, LottieRef } from 'lottie-react';
import { SVGRendererConfig } from 'lottie-web';
import animationData from '../../assets/lottie/line-animation-loading-line.json';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div<
  Partial<Record<keyof CSSProperties, string | number>>
>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  position: ${({ position }) => position};

  z-index: 4;
  pointer-events: none !important;
  cursor: none !important;
  div {
    z-index: 3;
    transform: translateY(-5%);
    position: relative;
    display: inline-flex;
    width: inherit;
    height: 50%;
  }
  svg {
    z-index: 4;
    position: relative;
  }
`;

interface SpinnerProps extends Partial<Record<keyof CSSProperties, any>> {
  lottieProps?: Omit<LottieOptions, 'animationData'>;
  type?: 'image' | 'fullscreen';
}

const Spinner = ({
  width = '100vw',
  height = '100vh',
  position = 'absolute',
  type = 'fullscreen',
  // backgroundColor = 'rgba(0, 0, 0, 0.5)',
  lottieProps,
  ...props
}: SpinnerProps): React.ReactElement => {
  const spinnerRef = useRef() as LottieRef;
  const [done, setDone] = useState(false);

  const viewBoxSize =
    (lottieProps?.rendererSettings as SVGRendererConfig)?.viewBoxSize ||
    '0 0 400 150';

  const animationOptions: LottieOptions = {
    lottieRef: spinnerRef,
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      viewBoxSize,
    },
  };

  const typeStyles = type === 'image' ? { height: '100%', width: '100%' } : {};

  useEffect(() => {
    let timeout: boolean | NodeJS.Timeout = setTimeout(() => {
      (spinnerRef as LottieRef)?.current?.setSpeed(0.3);
      setDone(true);
    }, 500);
    timeout;
    return () => {
      clearTimeout(timeout as NodeJS.Timeout);
      timeout = false;
    };
  }, []);

  return (
    <StyledSpinner
      className='fl-row align-center spinner'
      height={height}
      width={width}
      position={position}
      // backgroundColor={backgroundColor}
      {...props}
      {...typeStyles}
    >
      {done && (
        <Lottie
          className='lottie-spinner'
          {...animationOptions}
          height={100}
          width={100}
        />
      )}
    </StyledSpinner>
  );
};

export default memo(Spinner);
