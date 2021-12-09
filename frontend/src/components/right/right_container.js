import { connect } from 'react-redux';
import Right from './right';
import { openModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    curretUser: state.session.user 
})

const mapDTP = dispatch => ({
    //openMain: () => dispatch(openMain()),

    //for past res
    openModal: modalType => dispatch(openModal(modalType))
})

export default connect(mapSTP, mapDTP)(Right); 