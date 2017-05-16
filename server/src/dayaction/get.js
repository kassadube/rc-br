import passport from 'passport';

import {DayAction} from '../db';
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
};
