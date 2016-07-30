import React, {
	PropTypes
}
from 'react';

class ChatHeader extends React.Component {

	constructor() {
		super();
		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		this.props.signOut();
	}

	render() {
		const {
			displayName
		} = this.props;
		return ( < div >
				< div className = "background-div" > < /div>
        <p>
          You are signed in as <strong>{displayName}</strong > {
					' '
				} < a href = "#"
				onClick = {
					this.signOut
				} > < i className = "material-icons" > exit_to_app < /i> Sign Out < /a >
				< /p >
			< h4 > Chat < /h4 >
				< /div >
		);
	}
}

ChatHeader.propTypes = {
	displayName: PropTypes.string.isRequired,
	signOut: PropTypes.func.isRequired,
}

export
default ChatHeader;