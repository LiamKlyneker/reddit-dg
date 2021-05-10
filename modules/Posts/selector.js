import { createSelector } from 'reselect';
import { POSTS } from '#modules/Posts/constants';

export const selectTransactionsData = () => state => state[POSTS];

export const getPostsData = () => createSelector(selectTransactionsData(), state => state);
