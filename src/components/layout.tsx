import React from 'react';
import styles from '@styles/layout.module.scss';
import { NextComponentType } from 'next';
import { withRouter } from 'next/router';
import ExitPreviewButton from './ExitPreviewButton';
import Header from './Header';

interface Props
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  preview?: boolean;
}

function Layout({ children, preview }: Props) {
  return (
    <>
      {preview && <ExitPreviewButton />}
      <div className={styles.container}>
        <Header />
        <div className={styles.innerContainer}>{children}</div>
      </div>
    </>
  );
}

export default withRouter(Layout as NextComponentType<any, any, any>);
