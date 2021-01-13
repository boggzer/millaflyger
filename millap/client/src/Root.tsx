/* eslint-disable no-console */
import React from 'react';
import './assets/fontface/librebaskerville/librebaskerville.css';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
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
/*
    <div
      style={{
        fontFamily: 'Didot',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-6.5rem',
        letterSpacing: '0.02rem',
        fontWeight: 'bold',
        color: 'rgb(14, 13, 13)',
      }}
    >
      <Home />
      <p style={{ margin: 0, fontSize: '3.2rem' }}>Milla Flyger</p>
      <p>coming soon</p>
    </div>
    */
