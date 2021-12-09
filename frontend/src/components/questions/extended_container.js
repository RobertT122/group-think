import { connect } from 'react-redux';
import Extended from './extended';
import { fetchQuestionAnswers } from '../../actions/answers_actions';

const mapSTP = state => ({
    answers: state.answers.question
    //subscribing extended questions to answers slice of state bec passed down as props--
});

const mapDTP = dispatch => ({
    //need to fetch question specific answers 
    fetchQuestionAnswers: id => dispatch(fetchQuestionAnswers(id))
});

export default connect(mapSTP, mapDTP)(Extended);

