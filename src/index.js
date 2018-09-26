import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-unused-expressions */
injectGlobal`
  *, *:before, *:after { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    font-family: 'Oswald', sans-serif;
  }
`;
/* eslint-enable no-unused-expressions */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
