import React from 'react';
import { Layout } from '@components';
import '@styles/_globals';
import { AppProps } from 'next/app';
import { Chivo, Zen_Antique } from 'next/font/google';

const chivo = Chivo({ display: 'fallback', subsets: ['latin'] });

const zenAntique = Zen_Antique({
  weight: '400',
  display: 'fallback',
  subsets: ['latin'],
});

/*
TODO save for later
<Head>
  <title>Milla Flyger</title>
  <meta name='viewport' content='width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=yes' />
</Head> */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --serif: ${zenAntique.style.fontFamily};
          --sans-serif: ${chivo.style.fontFamily};
        }
      `}</style>
      <Layout preview={pageProps?.preview}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
