import {
    GET_SURVEY_ANSWERS,
    ADD_SURVEY_ANSWERS
 } from '../actions/types';

 export default (state = {}, action) => {
    switch(action.type) {
        case GET_SURVEY_ANSWERS:
            // console.log('state: ', state);
            // console.log('action: ', action);
            return {
                ...state,
                survey: state.survey
            };
        case ADD_SURVEY_ANSWERS:
            return {
                ...state,
                survey: action.survey
            };
        default:
            return state;
    }
}
