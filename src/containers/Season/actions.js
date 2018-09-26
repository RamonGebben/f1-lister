import {
  FETCH_SEASON,
  SEASON_FETCHED,
  TOGGLE_FAVORITE,
} from './constants';
import { getRaces } from './utils';

export function fetchRaces(year) {
  return async (dispatch) => {
    dispatch({ type: FETCH_SEASON });
    const season = await fetch(`//ergast.com/api/f1/${year}/results.json?limit=9999`)
      .then(res => res.json());

    dispatch({
      type: SEASON_FETCHED,
      payload: {
        races: getRaces(season),
      },
    });
  };
}

export function toggleFavorite(driverName) {
  return (dispatch) => {
    const prevFavs = JSON.parse(global.localStorage.getItem('userFavorites')) || [];
    const newFavs = prevFavs.includes(driverName)
      ? prevFavs.filter(x => x !== driverName)
      : prevFavs.concat(driverName);

    global.localStorage.setItem('userFavorites', JSON.stringify(newFavs));

    dispatch({
      type: TOGGLE_FAVORITE,
      payload: {
        userFavorites: newFavs,
      },
    });
  };
}
