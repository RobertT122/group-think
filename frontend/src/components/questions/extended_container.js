import { connect } from 'react-redux';
import Extended from './extended';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answers_actions';

const toJobStats = (answers) => {
    const stats = {};
    if(answers){
        answers.forEach(answer => {
            let response = '';
            if (answer.input) response='yes'
            if (answer.input === false) response='no'
            stats[answer.user.job] = stats[answer.user.job] || {yes: 0, no: 0}
            stats[answer.user.job][response] += 1
        })
    }
    return stats;
}

const mapSTP = (state, ownProps) => ({
    jobStats: toJobStats(state.answers.question[ownProps.question._id])
});

const mapDTP = dispatch => ({
    fetchQuestionAnswers: id => dispatch(fetchQuestionAnswers(id)),
    fetchQuestion: id => dispatch(fetchQuestion(id)) //proved to be unnecessary since passing question via prop threading item-->extended
});

export default connect(mapSTP, mapDTP)(Extended);

