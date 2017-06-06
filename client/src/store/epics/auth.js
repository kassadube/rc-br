// npm packages
import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

// our packages
import * as ActionTypes from '../actionTypes';


const server = 'localhost:8070';// 'localhost:8090';// '207.232.46.92:8090';//;
// LOGIN EPIC ACTION
export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
  .ajax.post(`http://${server}/api/login`, payload)
  .map(res => res.response)
  .map(response => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: response,
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.LOGIN_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );

// REGISTER EPIC ACTION
export const register = action$ => action$
  .ofType(ActionTypes.DO_REGISTER)
  .switchMap(({payload}) => Observable
  .ajax.post(`http://${server}/api/register`, payload)
  .map(res => res.response)
  .map(response => ({
    type: ActionTypes.REGISTER_SUCCESS,
    payload: response,
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.REGISTER_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );

