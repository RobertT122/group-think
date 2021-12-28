import { fetchScore } from "../util/score_api_util";

export const RECEIVE_SCORE = 'RECEIVE_SCORE';

export const receiveScore = score => ({
    type: RECEIVE_SCORE, 
    score
});

export const getScore = id => dispatch => {
    return fetchScore(id)
            .then(response => dispatch(receiveScore(response)))
            .catch(err => console.log(err))
}