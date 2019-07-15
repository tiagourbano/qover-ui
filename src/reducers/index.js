import { combineReducers } from 'redux';
import surveyReducer from './surveyReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    survey: surveyReducer,
    authenticated: authReducer
});

export default rootReducer;
