import { combineReducers } from 'redux-immutable';
import user from './userReducer';
import chat from './chatReducer';

export default combineReducers({
  user,
  chat,
});
