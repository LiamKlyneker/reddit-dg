import { combineReducers } from 'redux';

import { POSTS } from '#modules/Posts/constants';
import postsReducer from '#modules/Posts/reducer';

const rootReducer = combineReducers({
  [POSTS]: postsReducer,
});

export default rootReducer;
