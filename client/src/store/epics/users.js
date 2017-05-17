// npm packages
import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';

const server = 'localhost:8090';// '207.232.46.92:8090';//;
// LOGIN EPIC ACTION
export const getUser = action$ => action$
  .ofType(ActionTypes.GET_USER)
   .map(signRequest)
  .switchMap(({payload, headers}) => Observable
  .ajax.get(`http://${server}/api/user/${payload.id}`, headers)
  .map(res => res.response)
  .map(user => ({
    type: ActionTypes.GET_USER_SUCCESS,
    payload: {user},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.GET_USER_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );

export const updateUser = action$ => action$
  .ofType(ActionTypes.UPDATE_USER)
   .map(signRequest)
  .switchMap(({payload, headers}) => Observable
  .ajax.post(`http://${server}/api/user/${payload.id}`, payload, headers)
  .map(res => res.response)
  .map(user => ({
    type: ActionTypes.UPDATE_USER_SUCCESS,
    payload: {user},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.UPDATE_USER_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );

