import React, {
	PropTypes
}
from 'react';

class AuthForm extends React.Component {

	constructor() {
		super();
		this.signInViaEmail = this.signInViaEmail.bind(this);
		this.signUpViaEmail = this.signUpViaEmail.bind(this);
	}

	signInViaEmail() {
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		this.props.signIn(email, password);
	}

	signUpViaEmail() {
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		this.props.signUp(email, password);
	}

	render() {
		return ( < form className = "col s12" >
			< div className = "row" >
			< div className = "input-field col s12" >
			< i className = "material-icons prefix" > email < /i>
            <input id="email" type="email" ref="email" / >
			< label htmlFor = "email" > your@ email.com < /label>
          </div >
			< /div>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i >
			< input id = "password"
			type = "password"
			ref = "password" / >
			< label htmlFor = "password" > password < /label>
          </div >
			< /div>
        <div className="row buttons">
          <button
            className="btn waves-effect green waves-light"
            type="button"
            onClick={this.signInViaEmail}
          >
            Login
            <i className="material-icons right">send</i >
			< /button>
          {' '}
          <button
            className="btn waves-effect blue waves-light"
            type="button"
            onClick={this.signUpViaEmail}
          >
            Register
            <i className="material-icons right">add_circle</i >
			< /button>
        </div >
			< div className = "md-space" > < /div>
				< /form >
		);
	}
}

AuthForm.propTypes = {
	signIn: PropTypes.func.isRequired,
	signUp: PropTypes.func.isRequired,
};

export
default AuthForm;