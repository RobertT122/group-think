import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchUserQuestions } from '../../actions/question_actions';

const mapSTP = state => ({
    questions: Object.values(state.questions),
    currentUser: state.session.user
})

const mapDTP = dispatch => ({
    fetchUserQuestions: id => dispatch(fetchUserQuestions(id))
})

export default connect(mapSTP, mapDTP)(QuestionIndex); 
