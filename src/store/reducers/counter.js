import { INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER } from "../actionTypes";

// TODO: Could save someone's default state in our database, and fetch it on the initial component render.
const DEFAULT_STATE = [{id: 0, count: 0}]

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case INCREMENT:
      return state.map((counter) => {
        if (action.currentCounter.id === counter.id) {
          return {...counter, count: action.currentCounter.count + 3}
        }
        return counter;
      });
    case DECREMENT:
    return state.map((counter) => {
      if (action.currentCounter.id === counter.id) {
        return {...counter, count: action.currentCounter.count - 3}
      }
      return counter;
    });
    case ADD_COUNTER:
      return [...state, {id: state.length , count: 0}]
    case REMOVE_COUNTER:
      console.log([...state.slice(0, state.length - 1)])
      return [...state.slice(0, state.length - 1)]
    default:
      return state;
  }
};
