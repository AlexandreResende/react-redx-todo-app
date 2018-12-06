import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

import { store, persistor } from './store/index.js';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
