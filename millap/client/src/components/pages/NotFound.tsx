import React, { forwardRef, useEffect, useState } from 'react';
import Container from '../presentational/Container';
import Text from '../presentational/Text';
import Lottie, { LottieOptions, LottieRef } from 'lottie-react';
import animationData from '../../assets/lottie/sadface.json';
import styled from 'styled-components';

const StyledAnimation = styled.div`
  width: 6rem;
  height: 6rem;
  transform: translateY(-2rem);
`;

const StyledTextContainer = styled.div`
  transform: translateY(-2rem);
  h2 {
    @media screen and (max-width: 400px) {
      font-size: calc(1.5rem + 4.5vw);
    }
  }
`;

interface NotFoundProps {
  innerText?: string;
}

const NotFound = ({ innerText = undefined }: NotFoundProps, ref: any) => {
  const lottieRef = React.createRef<any>();
  const [hasLoaded, setHasLoaded] = useState(false);

  const animationOptions: LottieOptions = {
    animationData,
    autoplay: true,
    loop: true,
    lottieRef,
  };

  useEffect(() => {
    lottieRef.current && (lottieRef as LottieRef)?.current?.setSpeed(1.2);
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      ref={ref}
      classes='fl-col vw-full vh-full align-center justify-center'
    >
      {hasLoaded && (
        <>
          <StyledTextContainer className='p-s container'>
            <Text type='h2'>Page not found</Text>
          </StyledTextContainer>
          {innerText && <Container classes='p-s'>{innerText}</Container>}
          <StyledAnimation className='p-m'>
            <Lottie {...animationOptions} />
          </StyledAnimation>
        </>
      )}
    </Container>
  );
};

export default forwardRef(NotFound);
