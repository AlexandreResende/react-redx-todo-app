import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { connect } from 'react-redux';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import { Button } from '@material-ui/core';

import 'moment/locale/pt-br';

import { addTodo } from '../../actions/todo/actions';

import 'react-day-picker/lib/style.css';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: [],
      dueDate: null,
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

  dueDateHandler = (day) => {
    this.setState({ dueDate: day.getTime() });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo({ ...this.state, _id: Math.random() });
    this.setState({
      title: '',
      tags: [],
      dueDate: null,
      isDone: false,
    });
  }

  render() {
    const submitStyles = { color: 'white', backgroundColor: 'black' };
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
        <DayPickerInput
          format={'DD-MM-YYYY'}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date(), 'D-M-YYYY', 'pt-br')}`}
          onDayChange={this.dueDateHandler}/>
        <br></br><br></br>
        <Button
          style={submitStyles}
          onClick={this.submitHandler}
        >Submit</Button>
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
