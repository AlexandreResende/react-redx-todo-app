import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { connect } from 'react-redux';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/pt-br';

import { addTodo } from '../../actions/todo/actions';

import 'react-day-picker/lib/style.css';

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

  dueDateHandler = (day) => {
    console.log(day.getTime());
    this.setState({ dueDate: day.getTime() });
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
        <DayPickerInput
          format={'DD-MM-YYYY'}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date(), 'D-M-YYYY', 'pt-br')}`}
          onDayChange={this.dueDateHandler}/>
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
