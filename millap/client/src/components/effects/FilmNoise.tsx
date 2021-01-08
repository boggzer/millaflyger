import React, { CSSProperties, HTMLAttributes } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '../../css/FilmNoise.module.css';

interface FilmNoiseProps extends HTMLAttributes<HTMLDivElement> {
  absolute?: boolean;
  dark?: boolean;
  ContainerProps?: HTMLAttributes<HTMLDivElement>;
  InnerProps?: HTMLAttributes<HTMLDivElement> & CSSProperties;
  light?: boolean;
  height?: string;
  width?: string;
}

const FilmNoise = ({
  absolute = false,
  dark = false,
  ContainerProps,
  InnerProps,
  height = '100vw',
  width = '100vw',
}: FilmNoiseProps): React.ReactElement => {
  return (
    <div
      className={`${styles.container} ${absolute && styles.absolute}`}
      {...ContainerProps}
    >
      <div
        className={`${styles.effect} ${dark ? styles.dark : styles.light}`}
        style={{
          width,
          height,
        }}
        {...InnerProps}
      />
    </div>
  );
};

export default FilmNoise;
