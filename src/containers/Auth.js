import Auth from '../components/auth/Auth.react';
import { connect } from 'react-redux';
import { authActions } from '../redux/actions';

const mapStateToProps = state => ({
  displayName: state.getIn(['user', 'displayName']),
});

export default connect(mapStateToProps, authActions)(Auth);
