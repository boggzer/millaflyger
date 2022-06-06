import React, { CSSProperties, HTMLAttributes, useMemo } from 'react';

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
  elRef?: HTMLElement;
  outerClasses?: string;
  show?: boolean;
  withPortal?: boolean;
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
  elRef,
  show = false,
  width = '100vw',
}: FilmNoiseProps): React.ReactElement => {
  const [elWidth, elHeight] = useMemo(() => {
    return [elRef?.offsetWidth || 0, elRef?.offsetHeight || 0];
  }, [elRef]);
  return (
    <div
      className={`film-noise container ${
        absolute && 'absolute'
      } ${outerClasses}`}
      {...ContainerProps}
    >
      {children}
      {show && (
        <div
          style={{
            width: elWidth || width,
            height: elHeight || height,
            opacity,
          }}
          className={`${dark ? 'dark' : 'light'} ${innerClasses}`}
          {...InnerProps}
        />
      )}
    </div>
  );
};

export default FilmNoise;
