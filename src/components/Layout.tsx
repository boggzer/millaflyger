import React, { forwardRef, useMemo } from 'react';
import styles from '@styles/layout.module.scss';
import { NextComponentType } from 'next';
import { NextRouter, withRouter } from 'next/router';
import ExitPreviewButton from './ExitPreviewButton';
import Header from './Header';
import { PAGE_PATHS, isCurrentPage } from '@utils';
import SkipButton from './SkipButton';

interface Props
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  router?: NextRouter;
}

function Layout({ children, router }: Props, ref) {
  const isIndexPage = useMemo(
    () => isCurrentPage('/', router),
    [router?.pathname],
  );

  return (
    <>
      {router.isPreview && <ExitPreviewButton />}
      {isIndexPage && <SkipButton href={PAGE_PATHS.PROJECTS} />}
      <div ref={ref} className={styles.container}>
        <Header />
        <div className={styles['inner-container']}>{children}</div>
      </div>
    </>
  );
}

export default withRouter(
  forwardRef(Layout) as NextComponentType<any, any, any>,
);
