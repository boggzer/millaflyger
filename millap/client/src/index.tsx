import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './Root';
/// <reference path="./utils/global.d.ts"/>
/// <reference path="./utils/reactroutertransition.d.ts"/>

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
