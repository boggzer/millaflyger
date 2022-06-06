import { ErrorBoundary } from './utils';
import React from 'react';
import Root from './Root';
import { createRoot } from 'react-dom/client';

/// <reference path="./utils/global.d.ts"/>

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
  </React.StrictMode>,
);
