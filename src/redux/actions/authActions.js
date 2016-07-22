import firebase from '../../firebase';
import { browserHistory } from 'react-router';

const { auth } = firebase;

export function signIn(email, password) {
  return (dispatch) => {
    auth().signInWithEmailAndPassword(email, password)
    .then(authData => {
      dispatch({
        type: 'SIGNIN_SUCCESS',
        email: authData.email,
      });
      browserHistory.replace('/');
    })
    .catch(error => {
      console.log(error);
    });
  };
};

export function signUp(email, password) {
  return (dispatch) => {
    auth().createUserWithEmailAndPassword(email, password)
    .then(userData => {
      dispatch({
        type: 'SIGNUP_SUCCESS',
        email: userData.email,
      });
      browserHistory.replace('/');
    })
    .catch(error => {
      console.log(error);
    });
  };
};

export function signOut() {
  return (dispatch) => auth().signOut().then(() => {
    dispatch({
      type: 'SIGNOUT_SUCCESS'
    })
    browserHistory.replace('/auth')
  });
};
