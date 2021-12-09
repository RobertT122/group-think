export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modalType => ({
    type: OPEN_MODAL,
    modalType: modalType
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

//actions hit the reducers hit the state and changes the components being rendered by the modal 