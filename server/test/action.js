// npm packages
import request from 'supertest';
import moment from 'moment';
// our packages
import app from '../src/app';

export default (test) => {
  const sendData = {change: 500, numOfAction: 5, dateOfAction: moment().add(1, 'days').toDate()};
  const sendDataDate = {change: 500, numOfAction: 5, dateOfAction: '2017-06-04'};
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
        console.log(`ID = ${actualBody.id}`);
        app.set('ActionId', actualBody.id);
        t.error(err, 'No Error');
        t.equal(actualBody.change, sendData.change, 'retrieve same change');
        t.equal(actualBody.numOfAction, sendData.numOfAction, 'retrieve same change');
       // t.equal(moment(actualBody.buyingDate).isSame(sendData.buyingDate), true, 'retrieve same date');
        t.end();
      });
  });
  test('GET all day action', (t) => {
    request(app)
      .get('/api/dayaction')
      .set('x-access-token', app.get('token'))
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const actualBody = res.body;
        console.log(actualBody);

        t.error(err, 'No Error');
        t.equal(actualBody.length, 17, 'retrieve same array');
        t.end();
      });
  });
  test('delete day action', (t) => {
    request(app)
      .delete(`/api/dayaction/${app.get('ActionId')}`)
       .set('x-access-token', app.get('token'))
      // .send(sendData)
      .expect(204)
      .end((err) => {
        t.error(err, 'No Error');
        t.end();
      });
  });

  test('add new day action with string data', (t) => {
    request(app)
      .post('/api/dayaction')
       .set('x-access-token', app.get('token'))
      .send(sendDataDate)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const actualBody = res.body;
        // delete actualBody.id;
        console.log(`ID = ${actualBody.id}`);
        t.error(err, 'No Error');
        t.equal(actualBody.change, sendData.change, 'retrieve same change');
        t.equal(actualBody.numOfAction, sendData.numOfAction, 'retrieve same change');
       // t.equal(moment(actualBody.buyingDate).isSame(sendData.buyingDate), true, 'retrieve same date');
        t.end();
      });
  });
};
