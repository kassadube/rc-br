// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';

// our packages
import {auth as authConfig} from '../config';
import {logger} from './util';

import setupAuthRoutes from './auth';
import setupActionRoutes from './dayaction';

// init app
const app = express();

// use cors form cross domain requests
app.use(cors());
// setup logging
app.use(morgan('combined', {stream: logger.stream}));

// setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// add cookie parsing
app.use(cookieParser());

// add session support
app.use(session({
  secret: authConfig.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false},
}));

// add password.js
app.use(passport.initialize());
app.use(passport.session());
// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.get('/tauth', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('auth!');
});


setupAuthRoutes(app);
setupActionRoutes(app);
//setupUserRoutes(app);
//setQuestionRoutes(app);

//  catch all unhandled errors
app.use((err, req, res, next) => {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});
// export app
export default app;
