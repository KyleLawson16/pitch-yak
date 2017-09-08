import { combineReducers } from 'redux';
import PitchesReducer from './reducer_pitches';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    pitches: PitchesReducer,
    form: formReducer
});

export default rootReducer;
