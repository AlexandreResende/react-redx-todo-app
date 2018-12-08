
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends Component {
  createTodoList = () => {
    const sortedTodoList = this.sortTodoList(this.props.todos);
    return sortedTodoList.map(todo => {
      return (
        <Todo
          key={todo._id}
          todoData={todo}>
        </Todo>
      );
    });
  }

  sortTodoList = (todoList) => {
    const sortBy = this.props.orderBy === 'ORDER_BY_TODO' ? 'title' : 'dueDate';
    return todoList.sort((td1, td2) => td1[sortBy] - td2[sortBy]);
  }

  render() {
    console.log(this.props.todos);
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
  orderBy: state.orderBy,
});

export default connect(mapStateToProps, null)(TodoList);
