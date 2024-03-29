import { RECEIVE_QUESTIONS, RECEIVE_USER_QUESTIONS, RECEIVE_NEW_QUESTION, RECEIVE_QUESTION, RECEIVE_NEXT_QUESTION, DELETE_QUESTION, REMOVE_QUESTION } from "../actions/question_actions";

//creating questions slice of state:

//all corresponds to all the questions that're active on our database => answering questions functionality
//user corresponds to a particular users questions 
//new corresponds to a new question just posted 
const defaultState = { all: {}, user: {}, new: undefined, next: [{}], }; 

export default function QuestionsReducer(state = defaultState, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state); 
    switch(action.type) {
      case RECEIVE_QUESTIONS:
        newState.all = action.questions.data;
        return newState;
      case RECEIVE_USER_QUESTIONS:
        newState.user = action.questions.data;
        return newState;
      case RECEIVE_NEW_QUESTION:
        newState.new = action.question.data
        return newState;
      case RECEIVE_QUESTION:
        let idx = newState.user.findIndex(obj => obj._id === action.question.data._id)
        newState.user[idx] = action.question.data
        return newState;
      case RECEIVE_NEXT_QUESTION:
        newState.next = action.question.data
        return newState;
      case REMOVE_QUESTION:
        let index = newState.user.findIndex(obj => obj._id === action.id)
        newState.user.splice(index, 1)
        return newState;
      default:
        return state;
    }
}