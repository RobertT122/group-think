import { BACKGROUND } from '../actions/background_actions';

export default function backgroundReducer(state = 1, action) {
    Object.freeze(state);
    switch (action.type) {
        case BACKGROUND:
            return action.background;
        default:
            return state;
    }
}