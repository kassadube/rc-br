import passport from 'passport';

import {User} from '../db';
import {asyncRequest, hash} from '../util';
import {loginTaken} from '../auth';

export default (app) => {
  app.post('/api/user/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {login, password, passwordRepeat} = req.body;
    if (req.user.id !== req.params.id) {
      res.status(403).send({error: 'Not enough right to change others users profile'});
      return;
    }
    let user;
    try {
      user = await User.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
      return;
    }
    // check if user exist
    if (!user) {
      res.status(400).send({error: 'User does not exist'});
      return;
    }
    console.log(`user.login = ${user.login} new login = ${login}`);
    const loginChanged = login && user.login !== login;
    const passwordChanged = password && user.password !== hash(password);
    if (!loginChanged && !passwordChanged) {
      delete user.password;
      res.send(user);
      return;
    }
    // check password match
    if (passwordChanged && password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords not match'});
    }
    // check in new login is login Taken
    if (loginChanged) {
      const exists = await loginTaken(login);
      if (exists) {
        res.status(400).send({error: 'Login already taken'});
        return;
      }
    }
    // update data
    user.login = login;
    user.password = hash(password);
    // try  to save
    try {
      await User.update(user);
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
    delete user.password;
    res.send(user);
  }));
};
