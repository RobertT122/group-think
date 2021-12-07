import { connect } from 'react-redux';
import QuestionForm from './question_form';

//need to import a question thunk action creator that would make a POST request to the backend & change state

const mapSTP = state => ({
    //dont really need to map anyting from the state 
});

const mapDTP = dispatch => ({
    createQuestion: question => dispatch(createQuestion(question))
});

export default connect(null, mapDTP)(QuestionForm);