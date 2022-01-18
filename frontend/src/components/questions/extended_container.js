import { connect } from 'react-redux';
import Extended from './extended';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answers_actions';

const jobArr = [
    'unemployed',
    'engineering',
    'programmering',
    'health-science',
    'business',
    'construction',
    'food-service',
    'deisgn',
    'law',
    'teaching'
]

const toJobStats = (answers) => {
    let stats = {}
    let prototype = {yes: 0, no: 0, pass: 0}
    jobArr.forEach(job => {
        return stats[job] = Object.assign({}, prototype)
    })
    // let count = 0;
    if(answers){
        answers.forEach(answer => {

            let response = 'pass';
            if (answer.input) {
                response='yes'
            } else if (answer.input === false) {
                response='no'
            }

            let job = 'unemployed'
            if (answer.user.job) {
                job = answer.user.job
            }
            // console.log(`response: ${response}`)
            // console.log(`before (${job} : ${stats[job][response]})`)
            stats[job][response] += 1
            // console.log(`after (${job} : ${stats[job][response]})`)
            // console.log('__________break__________')
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

