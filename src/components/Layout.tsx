import React from 'react';
import styles from '@styles/layout.module.scss';
import { NextComponentType } from 'next';
import { withRouter } from 'next/router';
import ExitPreviewButton from './ExitPreviewButton';
import Header from './Header';

interface Props
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  isPreview?: boolean;
  router?: Record<string, any>;
}

function Layout({ children, router }: Props) {
  return (
    <>
      {router.isPreview && <ExitPreviewButton />}
      <div className={styles.container}>
        <Header />
        <div className={styles.innerContainer}>{children}</div>
      </div>
    </>
  );
}

export default withRouter(Layout as NextComponentType<any, any, any>);
