/*
This file will be responsible for combining our reducers that handle errors.

Import combineReducers from the redux library.
Also import the sessionErrorsReducer function we just created!
The errorsReducer should use combineReducers and will only have a single key-value pair for now named session which points to the sessionErrorsReducer. We will add more error reducers to this later.
Remember, the combineReducers function accepts a single argument: an object whose properties will represent properties of our application state, and values that correspond to domain-specific reducing functions.
export default errorsReducer.
*/

import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

export const errorsReducer = combineReducers({
    session: sessionErrorsReducer;
})