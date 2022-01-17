import React from 'react'
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import Tutorial from '../main/explain';
import ExplainForm from '../main/explain_form';
import './modal.css'; 

function Modal( {modal, openModal, closeModal} ) { 
    if (!modal) { 
        return null 
    }

    let component; 
    switch (modal) {
        case 'tutorial':
            component = <Tutorial openModal={openModal} />
            break;
        case 'form':
            component = <ExplainForm openModal={openModal} />
            break;
        default:
           return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className={`modal-child-${modal}`} onClick={e => e.stopPropagation()}> 
                { component }
            </div>
        </div>
    )
}

const mapSTP = state => ({
    modal: state.ui.modal.modalType
});

const mapDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: modalType => dispatch(openModal(modalType))
});

export default connect(mapSTP, mapDTP)(Modal);