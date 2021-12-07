import { connect } from 'react-redux';
import Right from './right';
import { openModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    curretUser: state.session.user 
    //need to grab the questions of the current user that have been resolved
})

const mapDTP = dispatch => ({
    //need a function to open the answer questions page
    //openMain: () => dispatch(openMain()),

    //need a function to open the modal for past questions --> need to  make a modal component
    openModal: modalType => dispatch(openModal(modalType))
})

export default connect(mapSTP, mapDTP)(Right); 