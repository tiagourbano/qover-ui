import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
