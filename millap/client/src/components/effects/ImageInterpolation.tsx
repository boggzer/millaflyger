/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { animated, useSpring } from 'react-spring';

export interface ImageInterpolationProps {
  classes?: string;
  children?: React.ReactNode;
  calc?: (x: number, y: number) => number[];
}

const ImageInterpolation = ({
  classes,
  children,
  calc,
}: ImageInterpolationProps): React.ReactElement => {
  const [interpolationProps, setInterpolationProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 2,
      tension: 20,
      friction: 50,
      easing: (num?: number) => 4,
    },
  }));

  const interpolationDefaultCalc = (x: number, y: number) => [
    -(y - window.innerHeight / 8) / 20,
    (x - window.innerWidth / 8) / 20,
    1,
  ];

  const interpolationTranslate = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  return (
    <animated.div
      className={classes}
      onMouseMove={({ clientX: x, clientY: y }) =>
        setInterpolationProps({
          xys:
            typeof calc === 'undefined'
              ? interpolationDefaultCalc(x, y)
              : calc(x, y),
        })
      }
      onMouseLeave={() => setInterpolationProps({ xys: [0, 0, 1] })}
      style={{
        transform:
          interpolationProps.xys?.interpolate &&
          interpolationProps.xys.interpolate(interpolationTranslate as any),
      }}
    >
      {children}
    </animated.div>
  );
};

export default ImageInterpolation;
