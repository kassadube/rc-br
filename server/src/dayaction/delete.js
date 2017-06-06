// our packages
import passport from 'passport';

import {DayAction} from '../db';
import {asyncRequest} from '../util';



export default (app) => {
  app.delete('/api/dayaction/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
      console.log("DELLLLLLL");
    // get requested action
    const action = await DayAction.get(req.params.id);
    
    // delete
    await action.delete();

    // send success status
    res.sendStatus(204);
  }));
};
