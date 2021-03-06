/* eslint-disable no-case-declarations */
import {
  FETCH_POSTS,
  DISMISS_POST,
  FETCH_POST_DETAILS,
  DISMISS_ALL_POSTS,
} from './constants';
import { success, failure } from '../utils';

const initialState = {
  isFetching: false,
  items: [],
  meta: {},
  error: null,

  isFetchingPostDetails: false,
  postDetailsData: null,
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
        items: [...state.items, ...parsePosts(action.payload.data.data.children)],
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

    case DISMISS_POST:
      return {
        ...state,
        items: [...state.items].filter(item => item.data.id !== action.payload.id),
      };

    case FETCH_POST_DETAILS:
      return {
        ...state,
        isFetchingPostDetails: true,
        postDetailsData: null,
        error: null,
      };
    case success(FETCH_POST_DETAILS):
      const dataToSet = action.payload.data.data.children.pop().data;
      const indexToUpdate = state.items.findIndex(item => item.data.id === dataToSet.id);
      const newItemsToSet = [...state.items];
      newItemsToSet[indexToUpdate].new = false;
      return {
        ...state,
        items: newItemsToSet,
        postDetailsData: dataToSet,
        isFetchingPostDetails: false,
      };
    case failure(FETCH_POST_DETAILS):
      return {
        ...state,
        isFetchingPostDetails: false,
        error: 'Error on fetch...',
      };

    case DISMISS_ALL_POSTS:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

const parsePosts = items => items.map(item => ({ ...item, new: true }));
