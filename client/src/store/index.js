/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {createEpicMiddleware} from 'redux-observable';

import rootReducer from './rootReducer';
import rootEpics from './rootEpics';

const epicMiddleware = createEpicMiddleware(rootEpics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preparedRouterMiddleware = routerMiddleware(browserHistory);
const middlewares = composeEnhancers(
    applyMiddleware(epicMiddleware),
    applyMiddleware(preparedRouterMiddleware),
  );
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, middlewares);

export default store;
