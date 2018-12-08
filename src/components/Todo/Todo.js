
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'

import { TodoCard } from '../styled-components/TodoCard';
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

  converDateToString = (dayInMilliseconds) => {
    const dueDate = new Date(dayInMilliseconds);
    return `
      ${dueDate.getDate()}/${(dueDate.getMonth() % 12) + 1}/${dueDate.getFullYear()}
    `;
  }
  
  render() {
    const todo = this.props.todoData;
    const markAsDoneStyles = { color: 'white', backgroundColor: 'green', border: '1px solid green', marginRight: '5px' };
    const undoStyles = { color: 'white', backgroundColor: 'grey', border: '1px solid grey', marginRight: '5px' };
    const deleteStyles = { color: 'white', backgroundColor: 'red', border: '1px solid red' };
    return (
      <TodoCard completed={todo.isDone}>
        <p>{todo.title} - dueDate: {this.converDateToString(todo.dueDate)}</p>
        <p>Tags: {todo.tags.length > 0 ? todo.tags : 'No tags available'} - isDone: {todo.isDone.toString()}</p>
        {!todo.isDone
          ?
          <Button
          style={markAsDoneStyles}
          onClick={() => this.markTodoAsDoneHandler(todo._id)}>Mark as done!</Button>
          :
          <Button
          style={undoStyles}
          onClick={() => this.markTodoAsDoneHandler(todo._id)}>Undo!</Button>
        }
        <Button
          style={deleteStyles}
          onClick={() => this.removeTodoHandler(todo._id)}>Delete Todo</Button>
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