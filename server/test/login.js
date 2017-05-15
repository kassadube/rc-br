// npm packages
import request from 'supertest';
import jwt from 'jsonwebtoken';

// our packages
import app from '../src/app';
import {auth as authConfig} from '../config';

export default (test) => {
  test('should login success test', (t) => {
    request(app)
    .post('/api/login')
    .send({login: 'test', password: '123'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actualBody = res.body;
      const decodedUser = jwt.decode(actualBody.token, authConfig.jwtSecret);
      delete decodedUser.iat;
      t.error(err, 'No error');
      t.ok(actualBody.user, 'User exists');
      t.ok(actualBody.token, 'Token exists');
      t.equal(actualBody.user.login, 'test', 'Login matches request');
      t.deepEqual(actualBody.user, decodedUser, 'User Match token');
      // use in the other tests
      app.set('token', actualBody.token);
      app.set('user', actualBody.user);
      t.end();
    });
  });
  test('should Fail login when password not valid return 401 test', (t) => {
    request(app)
    .post('/api/login')
    .send({login: 'test1', password: '123'})
    .expect(401)
    .end((err) => {
      t.error(err, 'No error');
      t.end();
    });
  });
  test('should Fail login when login not valid return 401 test', (t) => {
    request(app)
    .post('/api/login')
    .send({login: 'test', password: '1233'})
    .expect(401)
    .end((err) => {
      t.error(err, 'No Error');
      t.end();
    });
  });
  test('CLIENT failed return 400 test', (t) => {
    request(app)
    .post('/api/login')
    .send({ username: 'test1', password: '123', rememberMe: true})
    .expect(400)
    .end((err) => {
      t.error(err, 'No error');
      t.end();
    });
  });
};

