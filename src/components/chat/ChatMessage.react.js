import React, { PropTypes } from 'react';

class ChatMessage extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <li>
        <strong>{message.get('from')}</strong>: {message.get('text')}
      </li>
    );
  }
}

export default ChatMessage;
