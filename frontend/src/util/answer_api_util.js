import axios from 'axios';

//fetch user answers
export const getUserAnswers = id => {
    return axios.get(`api/answers/user/${id}`)
};
//fetch question answers 
export const getQuestionAnswers = id => {
    return axios.get(`api/answers/question/${id}`)
};
//create answer 
export const createAnswer = data => {
    return axios.post('/api/answers/', data)
};

