import React, { Component } from 'react';

import './App.css';

import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
