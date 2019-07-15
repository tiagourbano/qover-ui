import {
  GET_SURVEY_ANSWERS,
  ADD_SURVEY_ANSWERS,
  IS_AUTHENTICATED,
  SET_AUTHENTICATION
 } from './types';

const data = {};

export const getSurveyAnswers = () => ({
  type: GET_SURVEY_ANSWERS,
  data
});

export const addSurveyAnswers = (formValues) => ({
  type: ADD_SURVEY_ANSWERS,
  survey: formValues
});

export const isAuthenticated = () => ({
  type: IS_AUTHENTICATED,
  data
});

export const setAuthentication = (auth) => ({
  type: SET_AUTHENTICATION,
  authenticated: auth
});
