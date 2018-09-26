import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import Season from './containers/Season';

import configureStore from './configureStore';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/seasons/:season" component={Season} exact />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
