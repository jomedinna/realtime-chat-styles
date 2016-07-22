import { fromJS } from 'immutable';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      if (action.messages === null) {
        action.messages = {};
      }
      return state.update('messages', () => fromJS(action.messages));
    default:
      return state;
  }
};
