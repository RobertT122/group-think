import axios from 'axios';

//fetch all questions for the user without filters 
export const getQuestions = () => {
    return axios.get('/api/questions')
}

//fetch all the questions for a particular user 
export const getUserQuestions = id => {
    return axios.get(`/api/questions/user/${id}`)
}

//posting / creating a new questions for others to ans 
export const createQuestion = data => {
    return axios.post('/api/questions/', data) //passing down the data to make a post request 
}

//PATCH request to deactivate question 
export const deactivateQuestion = id => {
    return axios.patch(`/api/questions/${id}/deactivate`)
}

// grab next question
export const nextQuestion = () => {
    return axios.get(`/api/questions/next`)
}

//get specific question with id
export const getQuestion = id => {
    return axios.get(`/api/questions/${id}`)
}

//delete question 
export const deleteQuestion = id => {
    return axios.delete(`/api/questions/${id}/delete`)
}

//reactivate question 
export const reactivateQuestion = id => {
    return axios.patch(`/api/questions/${id}/reactivate`)
}