/*
Create a new reducer in a new file reducers/session_errors_reducer.js to keep track of any error messages.
The sessionErrorsReducer should listen for 2 action types and respond to them like so:

RECEIVE_SESSION_ERRORS - sets errors to the action's errors
RECEIVE_CURRENT_USER - clears the errors
*/

import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

export const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}