import * as ActionTypes from '../actionTypes';

const initialState = {
  token: localStorage.getItem('user.token'),
  user: JSON.parse(localStorage.getItem('user.data')),
  error: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        redirectToLogin: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user.token', action.payload.token);
      localStorage.setItem('user.data', JSON.stringify(action.payload.user));
      return {
        ...action.payload,

      };
    case ActionTypes.DO_LOGOUT:
      localStorage.removeItem('user.token');
      localStorage.removeItem('user.data');
      return {};
    case ActionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem('user.token');
      localStorage.removeItem('user.data');
      return {};
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.REGISTER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;// {...state, ...action.payload};
  }
};
