import Head from 'next/head';
import React from 'react';

export default function Error({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Milla Flyger</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=yes' />
      </Head>
      <div>Error</div>
    </>
  );
}
