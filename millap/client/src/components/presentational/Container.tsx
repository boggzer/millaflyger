import React, { CSSProperties } from 'react';

interface ContainerProps {
  type?: 'grid' | 'single' | 'thumbnail' | 'list';
  ContainerStyleProps?: CSSProperties;
  children?: React.ReactNode;
}

const Container = ({
  type,
  ContainerStyleProps,
  children,
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
    <div style={{ ...gridStyle, ...ContainerStyleProps }}>{children}</div>
  ) : type === 'thumbnail' ? (
    <div style={{ ...ContainerStyleProps }}>{children}</div>
  ) : type === 'list' ? (
    <div style={{ ...listStyle }}>{children}</div>
  ) : (
    <div style={{ ...ContainerStyleProps }}>{children}</div>
  );
};

export default Container;
