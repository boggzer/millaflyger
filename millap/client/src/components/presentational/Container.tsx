import React, { CSSProperties, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string;
  type?: 'grid' | 'single' | 'thumbnail' | 'list';
  children?: React.ReactNode;
}

const Container = ({
  classes,
  type,
  children,
  ...props
}: ContainerProps): React.ReactElement => {
  const gridStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-evenly',
    width: '100%',
  };

  const thumbnailStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
  };

  const listStyle: CSSProperties = { display: 'flex', flexDirection: 'column' };

  return type === 'grid' ? (
    <div className={classes} style={{ ...gridStyle, ...props }}>
      {children}
    </div>
  ) : type === 'thumbnail' ? (
    <div className={classes} style={{ ...props }}>
      {children}
    </div>
  ) : type === 'list' ? (
    <div className={classes} style={{ ...props }}>
      {children}
    </div>
  ) : (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;
