import {
  Container,
  ErrorBoundary,
  Footer,
  GlobalStyle,
  Home,
  Main,
  Navigation,
  Text,
} from '.';
import {
  IndexRouteProps,
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
  Route,
  BrowserRouter as Router,
  Routes,
  useMatch,
  useRoutes,
} from 'react-router-dom';
import React, { Suspense } from 'react';

import { CSSTransition } from 'react-transition-group';
import History from 'history';
import { ProjectType } from '../types';
import type { RouteObject } from 'react-router-dom';
import { Theme } from '../contexts';
import slugify from 'slugify';
import { useGetData } from '../hooks';

const Project = React.lazy(() => import('./presentational/Project'));
const About = React.lazy(() => import('./pages/About'));
const Overview = React.lazy(() => import('./pages/portfolio/Overview'));

type RouteType = {
  path: string;
  name?: string;
  pageTitle: string;
  Component: any;
  strict?: boolean;
  props?: Record<string, any>;
  exact?: boolean;
  lazy?: boolean;
};

const setPageTitle = (pageTitle: string) => {
  document.title = pageTitle;
  return null;
};

const Layout: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => {
  const { data, loading } = useGetData();

  const dynamicRoutes: (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] =
    (data &&
      data.map((project: ProjectType, index: number) => ({
        path: `/${project.slug?.current}`,
        element: <Project data={data[index]} />,
      }))) ||
    [];

  const routes: (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
    {
      index: true,
      element: <Home projects={data || []} />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/all',
      element: <Overview data={data} loading={loading} path='/all' />,
    },
    ...dynamicRoutes,
  ];

  const WithRef = ({
    children,
    pageTitle,
    props,
    show,
  }: Omit<RouteType, 'path' | 'Component'> & {
    show: boolean;
    children: React.ReactNode;
  }) => {
    const nodeRef = React.useRef(null);
    show && setPageTitle(pageTitle);
    return (
      <CSSTransition
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
  /*
  const filterRoutes = (location: { pathname: string; }) =>
    routes.filter(
      ({ path, strict, exact }) =>
        !!matchPath(location.pathname as string, {
          path,
          strict,
          exact,
        }),
    );
*/
  const currentComponent = (
    { Component, lazy, props, ...rest }: RouteType,
    matches: any | boolean | null,
  ): React.ReactNode | null => {
    if (matches !== null) {
      if (lazy) {
        return (
          <WithRef show={matches != null} {...rest}>
            <Suspense fallback={<div>loading</div>}>
              <Component {...(rest as Partial<RouteType>)} {...props} />
            </Suspense>
          </WithRef>
        );
      } else {
        return (
          <WithRef show={matches != null} {...rest}>
            <Component {...(rest as Partial<RouteType>)} {...props} />
          </WithRef>
        );
      }
    } else {
      return <></>;
    }
  };
console.log(children)
  return (
    <Theme>
      <GlobalStyle />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Theme>
  );
};

export default Layout;
