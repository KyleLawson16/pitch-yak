import _ from 'lodash';
import { FETCH_VIDEO } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_VIDEO:
    // const post = action.payload.data;
    // const newState { ...state  };
    // newState[post.id] = post;
    // return newState;
    return { ...state, [action.payload.data.id]: action.payload.data };
  default:
    return state;
  }
}
