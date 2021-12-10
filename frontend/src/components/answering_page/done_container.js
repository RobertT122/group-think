import { connect }  from 'react-redux';
import { postAnswer } from '../../actions/answers_actions';
import Done from './done';

const mSTP = state => ({
    //need to pass down a specific question
    //and then will access input of the question (true, false, null) --> yes no 
})

const mDTP = (dispatch, ownProps) => ({
    //need to fetch the recently answered question in queue
    submitAnswer: (answer) => dispatch(postAnswer(answer))
})

export default connect(mSTP, mDTP)(Done); 