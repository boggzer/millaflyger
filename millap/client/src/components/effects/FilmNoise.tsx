import React, { CSSProperties, HTMLAttributes } from 'react';
import styles from '../../css/FilmNoise.module.css';

interface FilmNoiseProps extends HTMLAttributes<HTMLDivElement> {
  absolute?: boolean;
  ContainerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
  dark?: boolean;
  height?: string;
  opacity?: number;
  innerClasses?: string;
  InnerProps?: Omit<
    HTMLAttributes<HTMLDivElement> & CSSProperties,
    'className'
  >;
  light?: boolean;
  outerClasses?: string;
  show?: boolean;
  width?: string;
}

const FilmNoise = ({
  absolute = false,
  children,
  ContainerProps,
  dark = false,
  height = '100vw',
  opacity = 0.3,
  innerClasses,
  InnerProps,
  outerClasses,
  show = false,
  width = '100vw',
}: FilmNoiseProps): React.ReactElement => (
  <div
    className={`${styles.container} ${
      absolute && styles.absolute
    } ${outerClasses}`}
    {...ContainerProps}
  >
    {children}
    {show && (
      <div
        style={{
          width,
          height,
          opacity,
        }}
        className={`${styles.effect} ${
          dark ? styles.dark : styles.light
        } ${innerClasses}`}
        {...InnerProps}
      />
    )}
  </div>
);

export default FilmNoise;
