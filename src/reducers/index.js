import { combineReducers } from 'redux';
import PostReducer from './reducer_post';

const rootReducer = combineReducers({
  post: PostReducer
});

export default rootReducer;
