import Auth from '../components/auth/Auth.react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  displayName: state.getIn(['user', 'displayName'])
})

export default connect(mapStateToProps)(Auth);
