import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { composeQuestion } from '../../actions/question_actions';

const mapSTP = state => ({
    currentUser: state.session.user
})

const mapDTP = dispatch => ({
    composeQuestion: data => dispatch(composeQuestion(data))
});

export default connect(mapSTP, mapDTP)(QuestionForm);