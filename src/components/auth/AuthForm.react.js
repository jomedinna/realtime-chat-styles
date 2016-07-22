import React, { PropTypes } from 'react';

class AuthForm extends React.Component {

  constructor() {
    super();
    this.signInViaEmail = this.signInViaEmail.bind(this);
  }

  signInViaEmail() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.signIn(email, password);
  }

  render() {
    return (
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" ref="email" />
            <label htmlFor="email">your@email.com</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">lock</i>
            <input id="password" type="password" ref="password" />
            <label htmlFor="password">password</label>
          </div>
        </div>
        <div className="row">
          <button
            className="btn waves-effect waves-light"
            type="button"
            onClick={this.signInViaEmail}
          >
            Sign In
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    );
  }
}

AuthForm.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default AuthForm;
