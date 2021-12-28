import { connect } from 'react-redux';
import Extended from './extended';
import { fetchQuestionAnswers } from '../../actions/answers_actions';


const mapSTP = state => ({
    answers: state.answers.question
    //subscribing extended questions to answers slice of state bec passed down as props--
});

const mapDTP = dispatch => ({
    // getQuestion: id => dispatch()
});

export default connect(mapSTP, mapDTP)(Extended);

