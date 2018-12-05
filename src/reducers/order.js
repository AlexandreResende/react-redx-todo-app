
const INITIAL_STATE = 'ORDER_BY_TODO';

export default function orderBy(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ORDER_BY':
      return action.orderedBy;
    default:
      return state;
  }
}
