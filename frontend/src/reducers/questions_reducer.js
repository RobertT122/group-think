import { RECEIVE_QUESTIONS, RECEIVE_USER_QUESTIONS, RECEIVE_NEW_QUESTION } from "../actions/question_actions";

//creating questions slice of state:

//all corresponds to all the questions that're active on our database => answering questions functionality
//user corresponds to a particular users questions 
//new corresponds to a new question just posted 
const defaultState = { all: {}, user: {}, new: undefined }; 

const QuestionsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state); 
    switch(action.type) {
      case RECEIVE_QUESTIONS:
        newState.all = action.questions.data;
        return newState;
      case RECEIVE_USER_QUESTIONS:
        newState.user = action.questions.data;
        return newState;
      case RECEIVE_NEW_TWEET:
        newState.new = action.question.data
        return newState;
      default:
        return state;
    }
}

export default QuestionsReducer;