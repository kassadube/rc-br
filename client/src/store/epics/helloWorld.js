import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

import * as ActionTypes from '../actionTypes';

export const helloWorld = action$ => action$.ofType(ActionTypes.HELLO_WORLD)
    .switchMap(() =>
      Observable.timer(1000)// debounce
      .map(() => ({type: ActionTypes.HELLO_WORLD_END,
        payload: {
          world: 'world',
        }})),
    );

