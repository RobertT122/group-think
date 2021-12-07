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
