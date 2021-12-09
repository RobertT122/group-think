import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { fetchUserAnswers } from '../../actions/answers_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    answers: Object.values(state.answers.user),
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    fetchUserAnswers: id => dispatch(fetchUserAnswers(id)), //upon mounting 
    openModal: modalType => dispatch(openModal(modalType)) //question modal 
});

export default connect(mSTP, mDTP)(AnswerIndex);