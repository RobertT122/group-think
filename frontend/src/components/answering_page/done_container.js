import { connect }  from 'react-redux';
import Done from './done';

const mSTP = state => ({
    //need to pass down a specific question
    //and then will access input of the question (true, false, null) --> yes no 
    question: state.questions.all[0]
})

const mDTP = dispatch => ({
    //need to fetch the recently answered question in queue
})

export default connect(mSTP, mDTP)(Done); 