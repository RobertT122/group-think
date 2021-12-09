import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import questions from './questions_reducer';
import answers from './answers_reducer';

const RootReducer = combineReducers({
  questions,
  answers,
  session,
  errors, 
  ui,
});

export default RootReducer;