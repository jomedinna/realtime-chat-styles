import firebase from '../../firebase';

const messages = firebase.database().ref('/messages');

export function fetchMessages() {
  return dispatch => {
    messages.on('value', (snapshot) => {
      dispatch({
        type: 'FETCH_MESSAGES',
        messages: snapshot.val(),
      });
    });
  };
};

export function createMessage(text, messageFrom) {
  const message = {
    text,
    from: messageFrom,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };

  return () => messages.push(message);
};
