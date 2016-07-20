import Auth from '../components/auth/Auth.react';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import { browserHistory } from 'react-router';

const mapStateToProps = state => ({
  displayName: state.getIn(['user', 'displayName'])
})

export default connect(mapStateToProps, authActions)(Auth);
