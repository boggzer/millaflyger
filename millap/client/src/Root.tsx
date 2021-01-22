/* eslint-disable no-console */
import React from 'react';
import './assets/fontface/librebaskerville/librebaskerville.css';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import './css/index.scss';
import { PortalProvider } from 'react-portal-hook';
import Layout from './components/Layout';
import ProjectsProvider from './contexts/projectsContext';
Amplify.configure(awsExports);

const Root = (): React.ReactElement => {
  return (
    <ProjectsProvider>
      <PortalProvider>
        <Layout />
      </PortalProvider>
    </ProjectsProvider>
  );
};

export default Root;
