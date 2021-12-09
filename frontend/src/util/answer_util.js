import axios from 'axios';
export const createAnswer = (answer) => {
  return axios.post('/api/answers', answer)
}