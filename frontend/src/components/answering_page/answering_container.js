import { connect }  from 'react-redux';
import Answering from './answering';

const mSTP = state => ({
    //need to pass down a specific question
    question: state.questions.all[0]
})

const mDTP = dispatch => ({
    //need to fetch the next question in queue
    
})

export default connect(mSTP, mDTP)(Answering); 