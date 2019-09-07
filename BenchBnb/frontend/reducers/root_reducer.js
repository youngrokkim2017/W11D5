import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { entitiesReducer } from './entities_reducer';
import { errorsReducer } from './errors_reducer';

export const rootReducer = combineReducer({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
})