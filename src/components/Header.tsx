import React, { useMemo, useState } from 'react';
import type { CSSProperties } from 'styled-components';
import { type NextRouter, withRouter } from 'next/router';
import { Button, Icon, IconType, Link, Menu } from '@components';
import { PAGE_PATHS, isCurrentPage, mergeClasses } from '@utils';
import styles from '@styles/header.module.scss';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  router?: NextRouter;
}

function Header({ router }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isIndexPage = useMemo(
    () => isCurrentPage('/', router),
    [router?.pathname],
  );

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const titleContainerAttrs = useMemo(() => {
    const staticClasses = mergeClasses([
      styles.container,
      menuIsOpen ? styles['menu-open'] : '',
    ]);
    if (!isIndexPage) {
      return {
        className: staticClasses,
        style: {
          '--translate-x': 0,
          '--translate-y': 0,
          '--size': 0,
          '--bg': 'var(--main-bg)',
        } as CSSProperties,
      };
    }

    return {
      className: mergeClasses([staticClasses, styles['is-index-page']]),
    };
  }, [isIndexPage]);

  return (
    <header
      style={titleContainerAttrs?.style}
      className={titleContainerAttrs.className}
    >
      <span className='visually-hidden'>
        <Link href={isIndexPage ? PAGE_PATHS.PROJECTS : PAGE_PATHS.INDEX}>
          <h5 className={mergeClasses([styles.title])}>milla flyger</h5>
          <p className={styles.subtitle} style={titleContainerAttrs?.style}>
            A photographer&apos;s portfolio
          </p>
        </Link>
      </span>
      <Menu isOpen={menuIsOpen} toggle={toggleMenu} router={router} />
      <Button onClick={toggleMenu} className={styles['menu-button']}>
        <Icon type={IconType.MENU} fill={isIndexPage ? 'white' : 'black'} />
      </Button>
      <div
        className={mergeClasses([styles['title-container']])}
        aria-hidden='true'
      >
        <Link href={isIndexPage ? PAGE_PATHS.PROJECTS : PAGE_PATHS.INDEX}>
          <h5 className={mergeClasses([styles.title])}>milla flyger</h5>
          <p className={styles.subtitle} style={titleContainerAttrs?.style}>
            A photographer&apos;s portfolio
          </p>
        </Link>
      </div>
    </header>
  );
}

export default withRouter(Header);
