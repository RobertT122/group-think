import { connect }  from 'react-redux';
import Reading from './reading';

const mSTP = state => ({
    //need to pass down a specific question
    //and then will access the person who wrote the question
    //access the question text 
    question: state.questions.all[0]
})

const mDTP = dispatch => ({
    //need to fetch the next question in queue
})

export default connect(mSTP, mDTP)(Reading); 