import React, { useCallback } from 'react';
import slugify from 'slugify';
import { Link } from 'react-router-dom';
import { ProjectDataType } from '../../utils/types';
import Container from './Container';
import styles from '../../css/Navigation.module.css';
interface NavigationProps {
  projects?: ProjectDataType[];
}

const Navigation = ({ projects }: NavigationProps): React.ReactElement => {
  const navStyle = {};

  const projectLinks = useCallback(
    () =>
      projects &&
      projects.map(({ title }, i) => (
        <Link key={`nav-link-${i}`} to={`/${slugify(title)}`}>
          {title}
        </Link>
      )),
    [projects],
  );

  return (
    <Container type='list'>
      <nav className={styles.test}>
        {projectLinks()}
        <Link to='/about'>About</Link>
      </nav>
    </Container>
  );
};

export default Navigation;
