import { FETCH_POSTS } from './constants';
import { success, failure } from '../utils';

const initialState = {
  isFetching: false,
  items: [],
  meta: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case success(FETCH_POSTS):
      return {
        ...state,
        items: [...state.items, ...action.payload.data.data.children],
        meta: {
          after: action.payload.data.data.after,
        },
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
