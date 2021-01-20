import React from 'react';
import Lottie, { LottieOptions } from 'lottie-react';
import animationData from '../../assets/lottie/line-animation-loading-line.json';

const Spinner = (): React.ReactElement => {
  const animationOptions: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div style={{ height: '100vh', width: '100vw', margin: '10%' }}>
      <Lottie {...animationOptions} height={100} width={100} />
    </div>
  );
};

export default Spinner;
