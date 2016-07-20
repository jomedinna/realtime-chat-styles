import { createStore, applyMiddleware } from 'redux';
import { Iterable } from 'immutable';
import reducers from './reducers';
import initialState from './initialState';
import createLogger from 'redux-logger';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const logger = createLogger({
  stateTransformer,
});

let store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger)
)

export default store;
