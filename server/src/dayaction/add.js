import passport from 'passport';
import moment from 'moment';

import {DayAction} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/dayAction/', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
     // get user input
     console.log(req.body);
    const {change, numOfAction, buyingDate} = req.body;

    // make sure text is not empty
    /* if (!text || !text.length) {
      res.status(400).send({error: 'Text should be present!'});
      return;
    }*/

    // validate date
    if (!moment(buyingDate, moment.ISO_8601).isValid()) {
      res.status(400).send({error: 'Date should be valid ISO Date!'});
      return;
    }
 console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr");
    // save new question
    const action = new DayAction({
      change,
      buyingDate: moment(buyingDate).toDate(),
      numOfAction,
    });
    // try add action
    console.log('ADD ACTION');
    await action.save();

    // send created question back
    res.send(action);
  }));
};
