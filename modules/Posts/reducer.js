import { FETCH_POSTS } from './constants';
import { success, failure } from '../utils';

const initialState = {
  isFetching: false,
  items: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case success(FETCH_POSTS):
      return {
        ...state,
        items: [],
        isFetching: false,
      };
    case failure(FETCH_POSTS):
      return {
        ...state,
        isFetching: false,
        error: 'Error on fetch...',
      };
    default:
      return state;
  }
}
