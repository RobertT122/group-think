import React from 'react'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Tutorial from '../main/explain';
import './modal.css'; 

function Modal( {modal, closeModal} ) { 
    if (!modal) { 
        return null 
    }

    let component; 
    switch (modal) {
        case 'tutorial':
            component = <Tutorial />
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
    closeModal: () => dispatch(closeModal()) 
});

export default connect(mapSTP, mapDTP)(Modal);