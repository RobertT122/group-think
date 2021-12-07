import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import './modal.css'; //styling the elements in the render function

function Modal( {modal, closeModal} ) { 
    if (!modal) { 
        return null 
    }

    let component; 
    switch (modal) {
        case 'example1':
            component = <Component />
            break; 
        case 'example2':
            component = <Component />
            break; 
        case 'example3':
            component = <Component />
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