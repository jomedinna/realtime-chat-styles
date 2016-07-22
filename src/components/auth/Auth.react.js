import React, { PropTypes } from 'react';
import AuthForm from './AuthForm.react';

class Auth extends React.Component {

  render() {
    return (
      <section className="row">
        <h5>Welcome <strong>{this.props.displayName}</strong></h5>
        <AuthForm signIn={this.props.signIn} />
      </section>
    );
  }

}

Auth.propTypes = {
  displayName: PropTypes.string,
  signIn: PropTypes.func,
};

export default Auth;
