export const benchesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        default:
            return state;
    }
} 