import { createStore, applyMiddleware } from 'redux';
import { Iterable } from 'immutable';
import reducers from './reducers';
import initialState from './initialState';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');

  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    return state;
  };

  const logger = createLogger({
    stateTransformer,
  });
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
