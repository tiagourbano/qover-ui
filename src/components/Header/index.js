import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './index.scss';

class Header extends Component {
  render() {
    this.props.isAuthenticated();
    const { authenticated } = this.props;

    return (
      <div className="Header">
        <div className="logo">
          <span>{'< QOVER.ME'}</span>
        </div>

        <div className="logout-link">
          { authenticated ? <a href="/logout">Log Out</a> : '' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated.authenticated
});

export default connect(mapStateToProps, actions)(Header);
