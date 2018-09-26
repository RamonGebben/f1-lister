import {
  path,
} from 'ramda';

export const getRaces = path(['MRData', 'RaceTable', 'Races']);

export default {
  getRaces,
};
