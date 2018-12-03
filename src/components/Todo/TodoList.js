
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends Component {
  createTodoList = () => {
    return this.props.todos.map(todo => {
      return (
        <Todo
          key={todo._id}
          todoData={todo}>
        </Todo>
      );
    });
  }

  render() {
    const todoList = this.createTodoList();
    return (
      <div>
        <p>Todo list</p>
        {todoList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(TodoList);
