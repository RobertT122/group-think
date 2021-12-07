import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapSTP = state => ({
    questions: Object.values(state.questions) 
})

const mapDTP = dispatch => ({
    //fetchQuestions --> responsible for fetching all questions  
    //toggleActive --> responsible for toggling the active / not active status of each question 
})

export default connect(mapSTP, mapDTP)(QuestionIndex); 
