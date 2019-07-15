import {
    IS_AUTHENTICATED,
    SET_AUTHENTICATION
 } from '../actions/types';

 export default (state = { authenticated: false }, action) => {
     switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                authenticated: (localStorage.getItem('token') !== null)
            };
        case SET_AUTHENTICATION:
            return {
                ...state,
                authenticated: action.authenticated
            };
        default:
            return state;
    }
};
