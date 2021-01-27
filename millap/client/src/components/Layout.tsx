import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Route, matchPath } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import slugify from 'slugify';

const NotFound = lazy(() => import('./pages/NotFound'));
const Overview = lazy(() => import('./pages/portfolio/Overview'));
const Project = lazy(() => import('./presentational/Project'));
import About from './pages/About';
import Container from './presentational/Container';
import ErrorBoundary from '../utils/ErrorBoundary';
import Navigation from './presentational/Navigation';
import Start from './pages/Start';

import { ProjectDataType } from '../utils/global';
import { ProjectsContext } from '../contexts/projectsContext';

type RouteType = {
  path: string;
  name?: string;
  pageTitle: string;
  Component: any;
  props?: Record<string, any>;
  exact?: boolean;
};

const Layout = (): React.ReactElement => {
  const { projects } = useContext(ProjectsContext);
  const { full, singles } = React.useMemo(
    () => ({ full: projects?.full || [], singles: projects?.singles || [] }),
    [projects],
  );

  const setPageTitle = (pageTitle: string) => {
    document.title = pageTitle;
    return null;
  };

  const relPaths = full.map((p: ProjectDataType, i: number) => ({
    path: `/${slugify(p?.title, { lower: true })}`,
    key: document.location.href,
    name: p?.title,
    pageTitle: `Milla Flyger | ${p?.title}`,
    Component: Project,
    props: { content: full[i] },
  }));

  const routes: RouteType[] = [
    {
      path: '/',
      name: 'Start',
      pageTitle: 'Milla Flyger | Portfolio',
      Component: Start,
      props: { projects: full },
      exact: true,
    },
    {
      path: '/about',
      name: 'Milla Flyger | About',
      pageTitle: 'About',
      Component: About,
      exact: false,
    },
    {
      path: '/all',
      name: 'Projects',
      pageTitle: 'Milla Flyger | All projects',
      Component: Overview,
      exact: false,
      props: {
        data: singles,
      },
    },
    ...relPaths,
  ];

  const WithRef = ({
    show,
    children,
    pageTitle,
    ...props
  }: Omit<RouteType, 'path' | 'Component'> & {
    show: boolean;
    children: React.ReactNode;
  }) => {
    const nodeRef = React.useRef();
    show && setPageTitle(pageTitle);
    return (
      <CSSTransition
        className='tr-w'
        in={show}
        nodeRef={nodeRef}
        timeout={500}
        classNames='page'
        unmountOnExit
        {...props}
      >
        <Container
          style={{ width: '100%', height: '100%' }}
          ref={nodeRef}
          {...props}
        >
          {children}
        </Container>
      </CSSTransition>
    );
  };

  const filterRoutes = (location: any) =>
    routes.filter(
      ({ path, strict, exact }: any) =>
        !!matchPath(location.pathname, {
          path,
          strict,
          exact,
        }),
    );
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div>loading</div>}>
          <Navigation projects={full} />
          <Container classes='content'>
            {routes.map(({ path, Component, props, ...rest }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <WithRef show={match != null} {...rest}>
                    <Component {...(rest as any)} {...props} />
                  </WithRef>
                )}
              </Route>
            ))}
            <Route
              render={({ location }) => {
                if (!filterRoutes(location).length) {
                  setPageTitle('Milla Flyger | 404');
                  return <NotFound />;
                }
              }}
            />
          </Container>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default Layout;
