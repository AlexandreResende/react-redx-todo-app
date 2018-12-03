
import { combineReducers } from 'redux';
import todoReducers from './todo';

const combinedReducers = combineReducers({
  todos: todoReducers,
});

export default combinedReducers;
