import createReducer from 'create-reducer-map';
import {
  FETCH_SEASON,
  SEASON_FETCHED,
  TOGGLE_FAVORITE,
} from './constants';

const initialState = {
  pending: false,
  races: [],
  userFavorites: JSON.parse(global.localStorage.getItem('userFavorites') || '[]') || [],
};

export default createReducer(initialState, {
  [FETCH_SEASON]: state => Object.assign({}, state, { pending: true }),
  [SEASON_FETCHED]: (state, { races }) => Object.assign({}, state, { races, pending: false }),
  [TOGGLE_FAVORITE]: (state, { userFavorites }) => Object.assign({}, state, { userFavorites }),
});
