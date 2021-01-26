import React, { Suspense, lazy, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  matchPath,
  RouteChildrenProps,
  RouteComponentProps,
} from 'react-router-dom';
// import { ProjectsContext } from '../contexts/projectsContext';
import Navigation from './presentational/Navigation';
// const Overview = lazy(() => import('./pages/portfolio/Overview'));
import ErrorBoundary from '../utils/ErrorBoundary';
// import { full, singles } from './data';
import Container from './presentational/Container';
import { CSSTransition } from 'react-transition-group';
const NotFound = lazy(() => import('./pages/NotFound'));
const Overview = lazy(() => import('./pages/portfolio/Overview'));
import About from './pages/About';
import Start from './pages/Start';
const Project = lazy(() => import('./presentational/Project'));
import slugify from 'slugify';
import { ProjectDataType, ProjectsType } from '../utils/global';
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
  /*
  const fetched = data.reduce((acc: any, { images }, ind: number) => {
    const d = data;
    const h = images.map((v: any, ing: any) => {
      const newD: any = d[ind].images[ing]['sizes'];
      data[ind].images[ing]['sizes'] = [];
      return keys(images[ing]?.source[0]).reduce(
        (acct: any, v: any, i: any) => {
          d[ind].images[ing]['sizes'] = [];
          const size = { [v]: getImageSize(d[ind].images[ing].source[0]?.[v] }
          getImageSize(d[ind].images[ing].source[0]?.[v]);
          const dd = getImageSize(d[ind].images[ing].source[0]?.[v] || '');
          newD.push({ [v]: dd });
          acct = data;
          return { ...acct, ...data };
        },
        {},
      );
    });
    return {
      ...acc,
      h,
    };
  }, {});
*/
  /*
    data.map(({ images, ...rest }, index: number) => {
      images.map((v: any, i: number, arr: any[]) => {
        keys(data[index]?.images[i]?.source[0]).map((k) => {
          // data[index].images[i]['sizes'][0][k] = {
          //   ...getImageSize(data[index]?.images[i]?.source[0]?.[k]),
          // };
          console.log(v);
        });
        console.log();
      });
    });
    */
  // console.log(fetched, 'hello');

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
    setPageTitle(pageTitle);
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
            {/* <Switch> */}
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
            {/* </Switch> */}
          </Container>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default Layout;
