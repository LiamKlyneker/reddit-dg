import { FETCH_POSTS } from './constants';

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
