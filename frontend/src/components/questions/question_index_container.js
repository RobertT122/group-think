import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchUserQuestions } from '../../actions/question_actions';

const mapSTP = state => ({
    questions: Object.values(state.questions.user),
    currentUser: state.session.user
})

const mapDTP = dispatch => ({
    fetchUserQuestions: id => dispatch(fetchUserQuestions(id))
    //deactive function that will make question.active = false 
    
})

export default connect(mapSTP, mapDTP)(QuestionIndex); 