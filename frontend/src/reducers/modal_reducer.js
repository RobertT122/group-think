import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return { modalType: action.modalType }
        case CLOSE_MODAL:
            return { modalType: null }
        default:
            return state;
    }
}