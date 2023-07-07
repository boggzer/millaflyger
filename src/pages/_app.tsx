import React from 'react';
import type { AppProps } from 'next/app';
import { Chivo, Zen_Antique } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { Layout, PageContentWrapper } from '@components';
import '@styles/_globals';

const chivo = Chivo({
  weight: ['200', '400'],
  display: 'fallback',
  subsets: ['latin'],
});

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

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --serif: ${zenAntique.style.fontFamily};
          --sans-serif: ${chivo.style.fontFamily};
          --grey: #dfdfdf;
          --color-bg: repeat 250px url('/assets/noise-bg.svg'), var(--grey);
          --cross-overlay: top / cover no-repeat url('/assets/cross.svg');
          --main-bg: var(--img-bg, var(--color-bg));
        }
      `}</style>
      <Layout preview={pageProps?.preview}>
        <AnimatePresence initial={false} mode='popLayout'>
          <PageContentWrapper key={router.asPath}>
            <Component {...pageProps} />
          </PageContentWrapper>
        </AnimatePresence>
      </Layout>
    </>
  );
}
