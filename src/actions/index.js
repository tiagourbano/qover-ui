import {
    GET_SURVEY_ANSWERS,
    ADD_SURVEY_ANSWERS
 } from './types';

const data = {};

export const getSurveyAnswers = () => ({ type: GET_SURVEY_ANSWERS, data });
export const addSurveyAnswers = (formValues) => ({ type: ADD_SURVEY_ANSWERS, survey: formValues });
