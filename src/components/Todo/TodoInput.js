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
import { orderBy } from '../../actions/order/actions';

import 'react-day-picker/lib/style.css';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: '',
        tags: '',
        dueDate: null,
        isDone: false,
      },
  };
  }

  titleHandler = (event) => {
    /* this.setState(prevState => {
      return {
        ...prevState,
        title: event.target.value,
      }
    }); */
    this.setState({ todo: { ...this.state.todo, title: event.target.value } });
  }

  tagsHandler = (event) => {
    this.setState({ todo: { ...this.state.todo, tags: event.target.value } });
  }

  dueDateHandler = (day) => {
    this.setState({ todo: { ...this.state.todo, dueDate: day.getTime() } });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo({ ...this.state.todo, _id: Math.random() });
    this.setState({
        todo: {
        title: '',
        tags: [],
        dueDate: null,
        isDone: false,
      }
    });
  }

  orderByDueDate = () => {
    this.props.orderBy('ORDER_BY_DUE_DATE');
  }

  orderByTodo = () => {
    this.props.orderBy('ORDER_BY_TODO');
  }

  render() {
    const submitStyles = { color: 'white', backgroundColor: '#515A5A', marginBottom: '1em' };
    const orderByDueDateStyles = { color: 'white', backgroundColor: '#2980B9', marginRight: '1em' };
    const orderByTodoStyles = { color: 'white', backgroundColor: '#2980B9' };
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
        <br></br>
        <Button
          style={orderByDueDateStyles}
          onClick={this.orderByDueDate}
        >Order by due date</Button>
        <Button
          style={orderByTodoStyles}
          onClick={this.orderByTodo}
        >Order by Todo</Button>
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
    orderBy: orderedBy => dispatch(orderBy(orderedBy)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
