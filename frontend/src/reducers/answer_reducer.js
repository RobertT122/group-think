import { RECEIVE_ANSWER } from "../actions/answer_actions"

const answerReducer = (state = {}, action) => {
  switch ( action.type ){
    case RECEIVE_ANSWER:
      return action.answer;
    default:
      return state
  }
}

export default answerReducer