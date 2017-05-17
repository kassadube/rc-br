// import _ from 'lodash';

import * as ActionTypes from '../actionTypes';


const initialState = {questions: [], status: 'inited'};

export const questions = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_QUESTIONS:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_QUESTIONS_SUCCESS:
      return {
        questions: action.payload.questions,
        status: 'done',
      };
    case ActionTypes.GET_ALL_QUESTIONS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.ANSWER_QUESTION:
      return {
        ...state,
        status: 'getting...',
      };
    case ActionTypes.ANSWER_QUESTION_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.ADD_QUESTION:
      return {
        ...state,
        status: 'getting...',
      };
    case ActionTypes.ADD_QUESTION_SUCCESS:
      // const questionsClone = _.clone(state.questions);
     // questionsClone.push(action.payload);
      return {
        ...state,
       // questions: questionsClone,
        status: 'done',
      };
    case ActionTypes.ADD_QUESTION_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    default:
      return state;
  }
};
