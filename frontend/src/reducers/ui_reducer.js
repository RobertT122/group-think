import { combineReducers } from "redux";

import modal from './modal_reducer'; 
import background from './background_reducer';

export default combineReducers({
    modal, 
    background,
});