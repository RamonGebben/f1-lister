import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import home from './containers/Home/reducers';
import season from './containers/Season/reducers';

const rootReducer = combineReducers({
  home, season,
});

const actionTransformer = action => ({
  ...action,
  type: String(action.type),
});

const logger = createLogger({
  collapsed: true,
  actionTransformer,
});

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(thunk))
  : compose(applyMiddleware(thunk, logger));

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept(
      [
        './containers/Home/reducers',
        './containers/Season/reducers',
      ],
      () => store.replaceReducer(rootReducer),
    );
  }

  return store;
}
