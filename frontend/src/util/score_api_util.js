import axios from "axios";

export const fetchScore = id => {
    return axios.get(`api/users/score/${id}`)
}