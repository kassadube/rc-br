import passport from 'passport';

import {r, DayAction} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/dayaction/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const action = await DayAction.get(req.params.id)
        .execute();
      res.send(action);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
    }
  }));
  // get all actions
  app.get('/api/dayaction/', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const actions = await DayAction.filter(q => (q('numOfAction').gt(0).or(q('numOfAction').eq(0)))).execute();
     /* const actions = await DayAction
       .merge(q => ({
         owner: 'gg',
       }))
      .execute();*/
      console.log(`ACTIONS = ${ actions}`);
      res.send(actions);
    } catch (e) {
      console.log(e);
      res.status(400).send({error: 'User does not exist'});
    }
  }));
};
