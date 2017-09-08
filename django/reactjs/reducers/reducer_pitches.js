import _ from 'lodash';
import { FETCH_PITCHES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_PITCHES:
    // const post = action.payload.data;
    // const newState { ...state  };
    // newState[post.id] = post;
    // return newState;
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
