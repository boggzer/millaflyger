import '@styles/_globals';

import { Chivo, Zen_Antique } from 'next/font/google';

import { Layout } from '@components';
import React from 'react';

const chivo = Chivo({ display: 'fallback', subsets: ['latin'] });

const zenAntique = Zen_Antique({
  weight: '400',
  display: 'fallback',
  subsets: ['latin']
});

interface Props {
  Component: typeof React.Component;
  pageProps?: any;
}

/*
TODO save for later
<Head>
  <title>Milla Flyger</title>
  <meta name='viewport' content='width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=yes' />
</Head> */

export default function App({ Component, pageProps }: Props) {
  return (
    <>
      <style jsx global>{`
        :root {
          --serif: ${zenAntique.style.fontFamily};
          --sans-serif: ${chivo.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
