// npm packages
import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';

const server = 'localhost:8070';// '207.232.46.92:8090';//;
// LOGIN EPIC ACTION
export const getAllDays = action$ => action$
  .ofType(ActionTypes.GET_ALL_DAYS)
   .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get(`http://${server}/api/dayaction`, headers)
  .map(res => res.response)
  .map(actions => ({
    type: ActionTypes.GET_ALL_DAYS_SUCCESS,
    payload: {actions},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.GET_ALL_DAYS_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );

export const addDay = action$ => action$
  .ofType(ActionTypes.ADD_DAY)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
  .ajax.post(`http://${server}/api/dayAction`, payload, headers)
  .map(res => res.response)
  .map(action => ({
    type: ActionTypes.ADD_DAY_SUCCESS,
    payload: {action},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.ADD_DAY_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );
