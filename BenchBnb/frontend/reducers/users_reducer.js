/*
The usersReducer should only listen for 1 action type right now and should respond like so:

RECEIVE_CURRENT_USER - use Object.assign to add the action's user to the state and set the key to the id of the user. Object.assign({}, state, { [action.user.id]: action.user })
*/

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    //let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
            //newState[action.currentUser.id] = action.currentUser;
            //return newState;
        default:
            return state;
    }
}