import { createAnswer } from "../util/answer_util";

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
})

export const composeAnswer = data => dispatch => (
  createAnswer(data)
    .then(answer => dispatch(receiveAnswer(answer)))
)