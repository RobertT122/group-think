import { RECEIVE_QUESTION_ANSWERS, RECEIVE_USER_ANSWERS, RECEIVE_NEW_ANSWER } from "../actions/answers_actions";

const defaultState = { question: {}, user: {}, new: undefined }; 

export default function AnswersReducer(state = defaultState, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state); 
    switch(action.type) {
      case RECEIVE_QUESTION_ANSWERS:
        newState.question[action.id] = action.answers.data;
        return newState;
      case RECEIVE_USER_ANSWERS:
        newState.user = action.answers.data;
        return newState;
      case RECEIVE_NEW_ANSWER:
        newState.new = action.answer.data
        return newState;
      default:
        return state;
    }
}