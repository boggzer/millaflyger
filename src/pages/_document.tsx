import Document, { Head, Html, Main, NextScript } from 'next/document'

import React from 'react'

// MOVE HEAD CODED HERE
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="L9_m6ilQGeydKRRTjVlTUx3rQXr81OTRAPaBOWNaVVo" />
          <meta httpEquiv="Content-Security-Policy" content="" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#f0f0f0" />
          <meta name="description" content="Milla Flyger online portfolio" />
          <link rel="apple-touch-icon" href="favicon-apple-touch.png" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="manifest.json" />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise" noModule dangerouslySetInnerHTML={{ __html: `` }} />
        </Head>
        
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument      
