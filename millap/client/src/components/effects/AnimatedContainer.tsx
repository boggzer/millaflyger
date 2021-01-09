/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentPropsWithRef } from 'react';
import { animated, UseSpringProps, useSpring } from 'react-spring';

interface AnimatedContainerProps {
  AnimationProps?:
    | UseSpringProps<any>
    | {
        interpolationCalc: (x: number, y: number) => number[];
      };
  children?: any;
  classes?: string;
  type?: 'interpolation';
}

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 8) / 20,
  (x - window.innerWidth / 8) / 20,
  1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimatedContainer = ({
  AnimationProps,
  classes,
  children,
  type,
}: AnimatedContainerProps): ComponentPropsWithRef<any> => {
  const [propss, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 2,
      tension: 20,
      friction: 50,
      easing: (num: number) => 4,
    },
  }));

  return (
    type === 'interpolation' && (
      <animated.div
        className={classes}
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({
            xys:
              typeof AnimationProps?.['interpolationCalc'] === 'undefined'
                ? calc(x, y)
                : AnimationProps.interpolationCalc(x, y),
          })
        }
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform:
            propss.xys?.interpolate && propss.xys.interpolate(trans as any),
        }}
      >
        {children}
      </animated.div>
    )
  );
};

export default AnimatedContainer;
