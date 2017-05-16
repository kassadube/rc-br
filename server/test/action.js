// npm packages
import request from 'supertest';
import moment from 'moment';
// our packages
import app from '../src/app';

export default (test) => {
  const sendData = {change: 500, numOfAction: 5, dateOfAction: moment().add(1, 'days').toDate()};
  test('add new day action', (t) => {
    request(app)
      .post('/api/dayaction')
       .set('x-access-token', app.get('token'))
      .send(sendData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const actualBody = res.body;
        // delete actualBody.id;
        t.error(err, 'No Error');
        t.equal(actualBody.change, sendData.change, 'retrieve same change');
        t.equal(actualBody.numOfAction, sendData.numOfAction, 'retrieve same change');
        t.equal(moment(actualBody.buyingDate).isSame(sendData.buyingDate), true, 'retrieve same date');
        t.end();
      });
  });
};
