import { INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER} from "../actionTypes"

export function increment(currentCounter){
  // console.log("currentCounter in action", currentCounter);
  // debugger;
  return {
    type: INCREMENT,
    currentCounter
  }
}

export function decrement(currentCounter){
  // console.log("currentCounter in action", currentCounter);
  // debugger;
  return {
    type: DECREMENT,
    currentCounter
  }
}

export function addCounter(){
  return {
    type: ADD_COUNTER
  }
}

export function removeCounter(){
  return {
    type: REMOVE_COUNTER
  }
}
