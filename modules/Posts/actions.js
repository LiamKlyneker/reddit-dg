import {
  FETCH_POSTS,
  DISMISS_POST,
  FETCH_POST_DETAILS,
  DISMISS_ALL_POSTS,
} from './constants';

export const fetchPosts = ({ limit, after }) => ({
  type: FETCH_POSTS,
  payload: {
    request: {
      url: 'https://www.reddit.com/r/all/top/.json',
      params: {
        limit,
        after,
      },
    },
  },
});

export const dismissPost = id => ({
  type: DISMISS_POST,
  payload: { id },
});

export const fetchPostDetails = id => ({
  type: FETCH_POST_DETAILS,
  payload: {
    request: {
      url: `https://www.reddit.com/by_id/${id}/.json`,
    },
  },
});

export const dismissAllPosts = () => ({ type: DISMISS_ALL_POSTS });
