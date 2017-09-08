import { combineReducers } from 'redux';
import PitchesReducer from './reducer_pitches';

const rootReducer = combineReducers({
    pitches: PitchesReducer
});

export default rootReducer;
