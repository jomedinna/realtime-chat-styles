import './RootApp.scss';
import React from 'react';
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

export default App;
