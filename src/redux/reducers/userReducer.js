export default (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return state.update('isAuthenticated', () => true)
                  .update('displayName', () => action.email);
    case 'SIGNUP_SUCCESS':
      return state.update('isAuthenticated', () => true)
                  .update('displayName', () => action.email);
    case 'SIGNOUT_SUCCESS':
      return state.update('isAuthenticated', () => false)
                  .update('displayName', () => 'Guest');
    default:
      return state;
  }
};
