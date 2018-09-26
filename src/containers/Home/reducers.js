import createReducer from 'create-reducer-map';
import { FETCH_SEASONS, SEASONS_FETCHED } from './constants';

const initialState = {
  pending: false,
  seasons: [],
};

export default createReducer(initialState, {
  [FETCH_SEASONS]: state => Object.assign({}, state, { pending: true }),
  [SEASONS_FETCHED]: (state, { seasons }) => Object.assign({}, state, { seasons, pending: false }),
});
