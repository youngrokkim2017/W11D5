/*
The sessionReducer should listen for 2 action types and respond to them like so:

RECEIVE_CURRENT_USER - sets id to the action's user.id
LOGOUT_CURRENT_USER - sets id to null

Your sessionReducer should maintain its own default state. To do that pass in an object as a default argument to sessionReducer with id set to null.

Remember to use both Object.freeze() and Object.assign to prevent the state from being accidentally mutated.
*/

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = {id: null};

export const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.currentUser.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            return initialState;
        default:
            return state;
    }
}
