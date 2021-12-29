import { RECEIVE_SCORE } from "../actions/score_actions";

const initialState = {};

const scoreReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SCORE:
      return { score: action.score.data };
    default:
      return state;
  }
}

export default scoreReducer