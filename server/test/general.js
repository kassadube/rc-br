// npm packages
import request from 'supertest';

// our packages
import app from '../src/app';

export default (test) => {
  test('GET /', (t) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Hello world!';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
  });
};
