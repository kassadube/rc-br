import * as ActionTypes from '../actionTypes';

export const helloWorldAction = () => ({type: ActionTypes.HELLO_WORLD});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const logoutAction = () => ({
  type: ActionTypes.DO_LOGOUT,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

export const getAllQuestionsAction = () => ({
  type: ActionTypes.GET_ALL_QUESTIONS,
});

export const answerQuestionAction = payload => ({
  type: ActionTypes.ANSWER_QUESTION,
  payload,
});

export const addQuestionAction = payload => ({
  type: ActionTypes.ADD_QUESTION,
  payload,
});

// users actions

export const getUserAction = payload => ({
  type: ActionTypes.GET_USER,
  payload,
});

export const updateUserAction = payload => ({
  type: ActionTypes.UPDATE_USER,
  payload,
});
