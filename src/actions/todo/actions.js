
import {
  ADD_TODO,
  MARK_TODO_AS_DONE,
  REMOVE_TODO
} from '../../constants/actionTypes';

export const addTodo = (todoData) => {
  return {
    type: ADD_TODO,
    todoData,
  }
}

export const markTodoAsDone = (index) => {
  return {
    type: MARK_TODO_AS_DONE,
    todoIndex: index,
  }
}

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    todoIndex: index,
  }
}