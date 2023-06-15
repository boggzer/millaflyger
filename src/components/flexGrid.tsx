import React, { CSSProperties, PropsWithChildren } from 'react';
import styles from '@styles/flexGrid.module.scss';

interface Props extends PropsWithChildren {
  gap?: string;
}

export default function FlexGrid({ children, gap }: Props) {
  const style = {
    '--gap': gap,
    '--negative-gap': `-${gap}`
  } as CSSProperties;

  return <div className={styles.container} style={style}>{children}</div>;
}
