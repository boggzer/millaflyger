import { DefaultTheme, ThemeProvider } from 'styled-components';

import React from 'react';

const base = 15;
const ratio = 1.33;

const theme: DefaultTheme = {
  main: {
    background: 'rgb(233, 231, 230)',
    pageMargin: {
      desktop: '24px',
      mobile: '20px',
    },
    baseTextSize: 16,
    gap: {
      desktop: '16px',
      mobile: '13px',
    },
    text: {
      family: {
        main: 'Chivo, Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        heading: 'Zen Antique, Lucida Bright, Georgia, serif',
      },
      sizes: {
        base,
        mobile: {
          h1: Math.floor(base * Math.pow(ratio, 6) * 0.6),
          h2: Math.floor(base * Math.pow(ratio, 5) * 0.6),
          h3: Math.floor(base * Math.pow(ratio, 4) * 0.6),
          h4: Math.floor(base * Math.pow(ratio, 3) * 0.6),
          h5: Math.floor(base * Math.pow(ratio, 2) * 0.6),
          h6: Math.floor(base * Math.pow(ratio, 1) * 0.6),
        },
        desktop: {
          h1: Math.floor(base * Math.pow(ratio, 6)),
          h2: Math.floor(base * Math.pow(ratio, 5)),
          h3: Math.floor(base * Math.pow(ratio, 4)),
          h4: Math.floor(base * Math.pow(ratio, 3)),
          h5: Math.floor(base * Math.pow(ratio, 2)),
          h6: Math.floor(base * Math.pow(ratio, 1)),
        },
      },
    },
  },
  utils: {
    visuallyHidden: {
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      position: 'absolute',
      clip: 'rect(1px, 1px, 1px, 1px)',
      'white-space': 'nowrap',
      'clip-path': 'inset(50%)',
    },
    devices: {
      phone: 640,
      tablet: 1007,
      laptop: 1280,
    },
    mq: {
      max: {
        phone: '(max-width: 640px)',
        tablet: '(max-width: 1007px)',
        laptop: '(max-width: 1280px)',
      },
      min: {
        tablet: '(min-width: 641px)',
        laptop: '(min-width: 1008px)',
        desktop: '(min-width: 1281px)',
      },
    },
  },
} as const;

const Theme: React.FunctionComponent<{ children?: React.ReactNode }> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
