import {
  FETCH_SEASONS,
  SEASONS_FETCHED,
} from './constants';
import { formatSeasons } from './utils';

export function fetchSeasons() {
  return async (dispatch) => {
    dispatch({ type: FETCH_SEASONS });
    const seasons = await fetch('//ergast.com/api/f1/seasons.json?&offset=59')
      .then(res => res.json());

    dispatch({
      type: SEASONS_FETCHED,
      payload: {
        seasons: formatSeasons(seasons),
      },
    });
  };
}

export default {
  fetchSeasons,
};
