import React, { Component } from 'react';
import CounterListContainer from "./containers/CounterListContainer"
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CounterListContainer />
      </Provider>

    );
  }
}

export default App;
