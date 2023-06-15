import Header from './header';
import React from 'react';
import styles from '@styles/layout.module.scss';
import { withRouter } from 'next/router';
import { NextComponentType } from 'next';

interface Props
  extends React.PropsWithChildren,
  React.HTMLAttributes<HTMLDivElement> { }

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
}

export default withRouter(Layout as NextComponentType<any, any, any>);
