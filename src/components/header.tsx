import { Button, Icon, IconType, Link, Menu } from '@components';
import { useCallback, useState } from 'react';

import { CSSProperties } from 'styled-components';
import { WithRouterProps } from 'next/dist/client/with-router';
import { isCurrentPage, mergeClasses } from '@utils';
import styles from '@styles/header.module.scss';
import { withRouter } from 'next/router';

interface Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    WithRouterProps {}

function Header({ router }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isIndexPage = isCurrentPage('/', router);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const getTitleContainerStyles = useCallback(() => {
    if (!isIndexPage) {
      return {
        '--translate-x': 0,
        '--translate-y': 0,
        '--pad-bottom': 0,
        '--size': 0,
      } as CSSProperties;
    }
  }, [isIndexPage]);

  return (
    <header className={styles.container} style={getTitleContainerStyles()}>
      <Menu isOpen={menuIsOpen} toggle={toggleMenu} router={router} />
      <Button onClick={toggleMenu} className={styles['menu-button']}>
        <Icon type={IconType.MENU} />
      </Button>
      <div className={styles['title-container']}>
        <Link href='/'>
          <h5
            className={mergeClasses([
              styles.title,
              isIndexPage ? styles.enlarge : '',
            ])}
          >
            milla flyger
          </h5>
          <p className={styles.subtitle} style={getTitleContainerStyles()}>
            A photographer's portfolio
          </p>
        </Link>
      </div>
    </header>
  );
}

export default withRouter(Header);
