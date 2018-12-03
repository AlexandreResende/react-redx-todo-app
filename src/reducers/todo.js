
const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, action.todoData ];
    case 'MARK_TODO_AS_DONE':
      return state.map(
        todo =>
          todo._id === action.todoIndex ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo._id !== action.todoIndex);
    default:
      return state;
  }
}
