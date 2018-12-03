
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TodoCard } from './TodoCard';
import {
  markTodoAsDone,
  removeTodo
} from '../../actions/todo/actions';

class Todo extends PureComponent {
  markTodoAsDoneHandler = (index) => {
    this.props.markAsDone(index);
  }

  removeTodoHandler = (index) => {
    this.props.removeTodo(index);
  }
  
  render() {
    const todo = this.props.todoData;
    const doneTodoStyle = { color: 'green', border: '3px solid green'};
    return (
      <TodoCard style={todo.isDone ? doneTodoStyle : null}>
        <p>{todo.title}</p>
        <p>Tags: {todo.tags.length > 0 ? todo.tags : 'No tags available'} - isDone: {todo.isDone.toString()}</p>
        <button
          style={{marginRight: '5px'}}
          onClick={() => this.removeTodoHandler(todo._id)}>Delete Todo</button>
        <button
          onClick={() => this.markTodoAsDoneHandler(todo._id)}>Mark as done!</button>
      </TodoCard>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => {
  return {
    markAsDone: (index) => dispatch(markTodoAsDone(index)),
    removeTodo: (index) => dispatch(removeTodo(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);