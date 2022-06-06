/* eslint-disable no-console */

import './assets/fontface/zenantique/zenantique.css';
import './assets/fontface/chivo/chivo.css';
import './css/index.scss';

import { Home, Layout } from './components';
import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
  Route,
  Routes,
} from 'react-router';

import Amplify from 'aws-amplify';
import { ProjectType } from './types';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import awsExports from './aws-exports';
import { useGetData } from './hooks';

const Project = React.lazy(() => import('./components/presentational/Project'));
const About = React.lazy(() => import('./components/pages/About'));
const Overview = React.lazy(() => import('./components/pages/portfolio/Overview'));


Amplify.configure(awsExports);

const Root = (): React.ReactElement => {
  const { data, loading } = useGetData();

  const dynamicRoutes: (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] =
    (data &&
      data.map((project: ProjectType, index: number) => ({
        path: `${project.slug?.current}`,
        element: <Project data={data[index]} />,
      }))) ||
    [];

  const routes: (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
    {
      index: true,
      element: <Home projects={data || []} />,
    },
    {
      path: '*',
      element: <div>Not found</div>
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'all',
      element: <Overview data={data} loading={loading} path='/all' />,
    },
    ...dynamicRoutes,
  ];

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
