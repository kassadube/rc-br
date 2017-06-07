// import _ from 'lodash';

import * as ActionTypes from '../actionTypes';


const initialState = {actions: [], status: 'inited'};

export const dayActions = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_DAYS:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_DAYS_SUCCESS:
      return {
        actions: action.payload.actions,
        status: 'done',
      };
    case ActionTypes.ADD_DAY:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.ADD_DAY_SUCCESS:
      return {
        ...state,
        status: 'done',
      };
    case ActionTypes.GET_ALL_DAYS_ERROR:
    case ActionTypes.ADD_DAY_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    default:
      return state;
  }
};
