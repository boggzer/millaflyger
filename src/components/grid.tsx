import React, { CSSProperties } from 'react';

import styles from '@styles/grid.module.scss';

interface Props extends React.PropsWithChildren {
  columns?: number;
  width?: string;
  desktopColumns?: number;
}

export default function Grid({
  children,
  width = '100%',
  columns = 2,
  desktopColumns = columns + 1,
}: Props) {
  return (
    <div
      className={styles.container}
      style={
        {
          '--columns': `repeat(${columns}, minmax(0, 1fr))`,
          '--columns-tablet-and-up': `repeat(${desktopColumns}, minmax(0, 1fr))`,
          '--width': width,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
