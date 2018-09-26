import {
  pipe,
  path,
  reverse,
} from 'ramda';

export const formatSeasons = pipe(
  path(['MRData', 'SeasonTable', 'Seasons']),
  reverse,
);

export default {
  formatSeasons,
};
