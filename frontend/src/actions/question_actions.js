import { getQuestions, getUserQuestions, createQuestion, deactivateQuestion, nextQuestion, getQuestion } from "../util/question_api_util"; //grabbing the api utils that hit the backend 

//exporting constants 
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_USER_QUESTIONS = 'RECEIVE_USER_QUESTIONS';
export const RECEIVE_NEW_QUESTION = 'RECEIVE_NEW_QUESTION';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_NEXT_QUESTION = 'RECEIVE_NEXT_QUESTION';

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
}); 

export const receiveUserQuestions = questions => ({
    type: RECEIVE_USER_QUESTIONS,
    questions
}); 

export const receiveNewQuestion = question => ({
    type: RECEIVE_NEW_QUESTION,
    question
});

export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
})

export const receiveNextQuestion = question => ({
    type: RECEIVE_NEXT_QUESTION,
    question
})

//thunk action creators:

//questions index 
export const fetchQuestions = () => dispatch => (
    getQuestions()
        .then(questions => dispatch(receiveQuestions(questions)))
        .catch(err => console.log(err))
);

//questions index for a particular user 
export const fetchUserQuestions = id => dispatch => (
    getUserQuestions(id)
        .then(questions => dispatch(receiveUserQuestions(questions)))
        .catch(err => console.log(err))
);

//posting a question
export const composeQuestion = data => dispatch => (
    createQuestion(data)
        .then(question => dispatch(receiveNewQuestion(question)))
        .catch(err => console.log(err))
);

//getting a question by id and putting it on the state 
export const fetchQuestion = id => dispatch => (
    getQuestion(id)
        .then(question => dispatch(receiveQuestion(question)))
        .catch(err => console.log(err))
);

//deactive question
export const deactivate = id => dispatch => (
    deactivateQuestion(id)
        .then(question => dispatch(receiveQuestion(question)))
        .catch(err => console.log(err))
);


export const fetchNextQuestion = () => dispatch => (
    nextQuestion()
        .then(question => dispatch(receiveNextQuestion(question)))
        .catch(err => console.log(err))
);