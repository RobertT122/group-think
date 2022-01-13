import { connect } from 'react-redux';
import Extended from './extended';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answers_actions';

const mapSTP = (state) => ({
    answers: state.answers.questions
});

const mapDTP = dispatch => ({
    fetchQuestionAnswers: id => dispatch(fetchQuestionAnswers(id)),
    fetchQuestion: id => dispatch(fetchQuestion(id)) //proved to be unnecessary since passing question via prop threading item-->extended
});

export default connect(mapSTP, mapDTP)(Extended);

