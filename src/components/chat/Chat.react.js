import React, { PropTypes } from 'react';
import ChatMessage from './ChatMessage.react';

class Chat extends React.Component {
  constructor() {
    super();
    this.createMessage = this.createMessage.bind(this);
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  createMessage() {
    const text = this.refs.inputMessage.value;
    const messageFrom = this.props.displayName;
    this.props.createMessage(text, messageFrom);
    this.refs.inputMessage.value = '';
  }

  render() {
    const { messages } = this.props;
    const createMessage = (message, index) => <ChatMessage key={index} message={message} />;
    return (
      <div>
        <h4>Chat</h4>
        <ul>
          {messages.map(createMessage)}
        </ul>
        <input type="text" ref="inputMessage" />
        <button
          onClick={this.createMessage}
          className="waves-effect waves-light btn"
        >
          Send
        </button>
      </div>
    );
  }

}

Chat.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default Chat;
