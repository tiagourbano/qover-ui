import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { ReactComponent as Logo } from './logo.svg';
import check from './checked-no-label.png';
import './index.scss';

class Login extends Component {
  state = {
    email: null,
    password: null,
    message: null,
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ message: this.props.location.state.message });
      this.props.location.state = null;
    }
  }

  onChange(field, value) {
    const state = Object.assign({}, this.state);
    state[field] = value;
    this.setState(state);
  }

  signIn = (event) => {
    event.preventDefault();

    const data = Object.assign({}, this.state);
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    fetch('http://localhost:3000/customer/authenticate', requestInfo)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Invalid email or passaword.');
      })
      .then((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('data', JSON.stringify(response.data));

        this.props.setAuthentication(true);
        this.props.history.push("/survey");
        return;
      })
      .catch(() => {
        this.setState({ message: 'Invalid email or passaword.' });
      });
  }

  render() {
    return (
      <div className="Login">
        <Logo />

        <form name="login" onSubmit={this.signIn}>
          <h1>Welcome at Qover</h1>

          {
            (this.state.message)
              ? <div className="error-message">{this.state.message}</div>
              : ''
          }

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={(ev) => this.onChange('email', ev.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(ev) => this.onChange('password', ev.target.value)}
            />
          </div>

          <div className="double-column">
            <div className="remember">
              <img src={check} alt="Remember me" /> Remember me
            </div>
            <div className="forgot-password">
              Forgot your password?
            </div>
          </div>

          <button>Sign in to your account</button>
        </form>

        <div className="request-access">
          Don't have an account? <a href="/">Ask access</a>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Login);
