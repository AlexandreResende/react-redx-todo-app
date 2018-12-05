
import { combineReducers } from 'redux';
import todoReducers from './todo';
import orderBy from './order';

const combinedReducers = combineReducers({
  todos: todoReducers,
  orderBy: orderBy,
});

export default combinedReducers;
