import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchUserQuestions, deactivate, removeQuestion, reactivate } from '../../actions/question_actions';

const mapSTP = state => ({
    questions: Object.values(state.questions.user),
    currentUser: state.session.user
})

const mapDTP = dispatch => ({
    fetchUserQuestions: id => dispatch(fetchUserQuestions(id)),
    deactivate: id => dispatch(deactivate(id)),
    removeQuestion: id => dispatch(removeQuestion(id)),
    reactivate: id => dispatch(reactivate(id)),
    
})

export default connect(mapSTP, mapDTP)(QuestionIndex); 
