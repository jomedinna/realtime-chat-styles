import firebase from '../../firebase';
import { browserHistory } from 'react-router';

const { auth } = firebase;

function signIn(email, password) {
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
}

export default {
  signIn,
};
