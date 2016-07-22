import firebase from '../../firebase';

const messages = firebase.database().ref('/messages');

function fetchMessages() {
  return dispatch => {
    messages.on('value', (snapshot) => {
      dispatch({
        type: 'FETCH_MESSAGES',
        messages: snapshot.val(),
      });
    });
  };
}

function createMessage(text, messageFrom) {
  const message = {
    text,
    from: messageFrom,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };

  return () => messages.push(message);
}

export default {
  createMessage,
  fetchMessages,
};
