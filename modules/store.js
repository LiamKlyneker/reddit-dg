import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducersCombined from './reducers-combined';

const composedMiddlewares = applyMiddleware(axiosMiddleware(Axios), thunkMiddleware);

const storeEnhancers = composeWithDevTools({
  name: 'Reddit DG',
})(composedMiddlewares);

export default function createReduxStore(initialState) {
  const store = createStore(reducersCombined, initialState, storeEnhancers);
  return store;
}
