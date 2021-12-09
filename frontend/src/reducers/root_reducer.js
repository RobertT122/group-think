import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import answer from "./answer_reducer"

const RootReducer = combineReducers({
  session,
  errors,
  answer
});

export default RootReducer;