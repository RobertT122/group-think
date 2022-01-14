import { connect } from 'react-redux';
import UserProfile from "./user_profile";
import { getScore } from '../../actions/score_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapSTP = ({ session, score }) => ({
    currentUser: session.user,
    score
})

const mDTP = dispatch => ({
    getScore: id => dispatch(getScore(id)),
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapSTP, mDTP)(UserProfile); 