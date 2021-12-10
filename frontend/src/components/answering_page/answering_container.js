import { connect }  from 'react-redux';
import Answering from './answering';

const mSTP = state => ({
    //need to pass down a specific question
})

const mDTP = dispatch => ({
    //need to fetch the next question in queue
    
})

export default connect(mSTP, mDTP)(Answering); 