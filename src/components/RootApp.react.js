import './RootApp.scss';
import React, { PropTypes } from 'react';
import 'materialize-css/bin/materialize.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
