export default (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return state.update('isAuthenticated', () => true)
    default:
      return state;
  }
}
