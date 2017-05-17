// npm packages
import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';

const server = 'localhost:8090';// '207.232.46.92:8090';//;
// LOGIN EPIC ACTION
export const getAllQuestions = action$ => action$
  .ofType(ActionTypes.GET_ALL_QUESTIONS)
   .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get(`http://${server}/api/question`, headers)
  .map(res => res.response)
  .map(questions => ({
    type: ActionTypes.GET_ALL_QUESTIONS_SUCCESS,
    payload: {questions},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.GET_ALL_QUESTIONS_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );


export const answerQuestion = action$ => action$
  .ofType(ActionTypes.ANSWER_QUESTION)
   .map(signRequest)
  .switchMap(({headers, payload}) => Observable
  .ajax.post(`http://${server}/api/question/${payload.question.id}/answer`, payload.answer, headers)
  .map(res => res.response)
  .map(question => ({
    type: ActionTypes.ANSWER_QUESTION_SUCCESS,
    payload: {question},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.ANSWER_QUESTION_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );

export const addQuestion = action$ => action$
  .ofType(ActionTypes.ADD_QUESTION)
   .map(signRequest)
  .switchMap(({headers, payload}) => Observable
  .ajax.post(`http://${server}/api/question`, payload, headers)
  .map(res => res.response)
  .map(question => ({
    type: ActionTypes.ADD_QUESTION_SUCCESS,
    payload: {question},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.ADD_QUESTION_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );
