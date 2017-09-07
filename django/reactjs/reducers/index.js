import { combineReducers } from 'redux';
import VideoReducer from './reducer_video';

const rootReducer = combineReducers({
    selectedVideo: VideoReducer
});

export default rootReducer;
