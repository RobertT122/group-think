import { getUserAnswers, getQuestionAnswers, createAnswer } from "../util/answer_api_util";

export const RECEIVE_QUESTION_ANSWERS = 'RECEIVE_QUESTION_ANSWERS'; 
export const RECEIVE_USER_ANSWERS = 'RECEIVE_USER_ANSWERS';
export const RECEIVE_NEW_ANSWER = 'RECEIVE_NEW_ANSWER';

//grabbing the answers for a particular question
export const receiveQuestionAnswers = (answers, id) => ({
    type: RECEIVE_QUESTION_ANSWERS,
    answers,
    id
})

//will be necessary for the user answers index page 
export const receiveUserAnswers = answers => ({
    type: RECEIVE_USER_ANSWERS,
    answers
}); 

//will also be necessary for when the user creates a new question
export const receiveNewAnswer = answer => ({
    type: RECEIVE_NEW_ANSWER,
    answer
});

//thunk action creators for 1.creating answers  2.grabbing answers for a particular user 3.grabbing answers for a particular question 

//creating answers 
export const postAnswer = data => dispatch => (
    createAnswer(data)
        .then(answer => dispatch(receiveNewAnswer(answer)))
        .catch(err => console.log(err))
);

//grabbing a users answers 
export const fetchUserAnswers = id => dispatch => (
    getUserAnswers(id)
        .then(answers => dispatch(receiveUserAnswers(answers)))
        .catch(err => console.log(err))
)

export const fetchQuestionAnswers = id => dispatch => (
    getQuestionAnswers(id)
        .then(answers => dispatch(receiveQuestionAnswers(answers, id)))
        .catch(err => console.log(err))
)