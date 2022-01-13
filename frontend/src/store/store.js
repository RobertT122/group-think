import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
<<<<<<< HEAD
    applyMiddleware(thunk, logger)
=======
    applyMiddleware(thunk, logger),
>>>>>>> questions-extended
    // applyMiddleware(thunk)
    )
);

export default configureStore;