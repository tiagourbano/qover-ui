import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="App">
          <Routes />
        </div>
        <Footer />
      </Provider>
    );
  }
}

export default App;
