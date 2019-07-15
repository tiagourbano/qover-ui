import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Logout extends Component {
  componentWillMount() {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    this.props.setAuthentication(false);
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default connect(null, actions)(Logout);
