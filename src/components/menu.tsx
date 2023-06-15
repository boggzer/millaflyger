import React, { AriaAttributes, useCallback, useEffect } from 'react';
import { Button, Icon } from '@components';
import { COMPONENT_ID, PAGE_PATHS, isCurrentPage } from '@utils';
import { IconType, Link } from '@components';

import { NextRouter } from 'next/router';
import styles from '@styles/menu.module.scss';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  router?: NextRouter;
}

export default function Menu({ isOpen, toggle, router, ...rest }: Props) {
  const links = [
    {
      path: PAGE_PATHS.INDEX,
      label: 'Home',
    },
    {
      path: PAGE_PATHS.ABOUT,
      label: 'About',
    },
    {
      path: PAGE_PATHS.PROJECTS,
      label: 'Projects',
    },
  ];

  const getAttrs = ({ path }): Pick<AriaAttributes, 'aria-current'> | null =>
    isCurrentPage(path, router) ? { 'aria-current': 'page' } : null;

  const getWrapperClasses = useCallback(() => {
    if (isOpen) {
      return [styles.container, styles.open].join(' ');
    }

    return styles.container;
  }, [isOpen]);

  const closeMenu = () => {
    if (isOpen) {
      toggle();
    }
  };

  useEffect(() => {
    closeMenu();

    return closeMenu;
  }, [router.asPath]);

  return (
    <>
      <div className={getWrapperClasses()}>
        <div role='navigation' className={styles['list-container']}>
          {/* TODO: Add desktop nav inside here as well https://stackoverflow.com/a/15668258 */}
          <nav id={COMPONENT_ID.NAV_MOBILE} aria-label='Main'>
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={`menu-item-${link.label}`}>
                  <Link href={link.path} {...getAttrs(link)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button onClick={toggle} aria-controls={COMPONENT_ID.NAV_MOBILE}>
            <Icon type={IconType.MENU} />
          </Button>
        </div>
        <div className={styles['click-area']} onClick={toggle}></div>
      </div>
    </>
  );
}
