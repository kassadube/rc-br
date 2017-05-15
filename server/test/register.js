// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('Should failed register with password mismatch', (t) => {
    request(app)
      .post('/api/register')
      .send({login: 'test', password: '123', passwordRepeat: '1234'})
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = {error: 'Passwords do not match'};
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
  test('Should register with login and password', (t) => {
    request(app)
      .post('/api/register')
      .send({login: 'test', password: '123', passwordRepeat: '123'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = {success: true};
        const actualBody = res.body;

        t.error(err, 'No Error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve body');
        t.end();
      });
  });
};
