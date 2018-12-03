import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions/todo/actions';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: [],
      dueDate: 0,
      isDone: false,
    };
  }

  titleHandler = (event) => {
    /* this.setState(prevState => {
      return {
        ...prevState,
        title: event.target.value,
      }
    }); */
    this.setState({ title: event.target.value });
  }

  tagsHandler = (event) => {
    this.setState({ tags: [ ...event.target.value.split(';')] });
  }

  dueDateHandler = (event) => {
    this.setState({ dueDate: event.target.value.getMilliseconds() });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo({ ...this.state, _id: Math.random() });
  }

  render() {
    return (
      <form>
        <p>Add your Todos here:</p>
        Add todo:
        <input
          type='text'
          placeholder='Add your todo here'
          value={this.state.title}
          onChange={this.titleHandler}></input>
        <br></br><br></br>
        Add some tags:
        <input
          type='text'
          placeholder='Add the tags'
          value={this.state.tags}
          onChange={this.tagsHandler}></input>
        <br></br><br></br>
        Due date:
        <input
          type='text'
          placeholder='DD/MM/AAAA'
          value={this.state.dueDate}
          onChange={this.dueDateHandler}></input>
        <br></br><br></br>
        <button
          onClick={this.submitHandler}
        >Submit</button>
      </form>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
