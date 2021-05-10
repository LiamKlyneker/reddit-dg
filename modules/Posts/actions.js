import { FETCH_POSTS } from './constants';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: {
    request: {
      url: 'https://www.reddit.com/r/all/top/.json',
      params: {
        limit: 20,
      },
    },
  },
});
