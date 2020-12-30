import React from 'react';
import './assets/fontface/didot/didot.css';
// import Amplify from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

const Root = (): React.ReactElement => (
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
    <p style={{ margin: 0, fontSize: '3.2rem' }}>Milla Flyger</p>
    <p>coming soon</p>
  </div>
);

export default Root;
