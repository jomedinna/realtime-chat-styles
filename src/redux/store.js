import { createStore, applyMiddleware } from 'redux';
import { Iterable } from 'immutable';
import reducers from './reducers';
import initialState from './initialState';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  return state;
};

const logger = createLogger({
  stateTransformer,
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, logger)
);

export default store;
