import passport from 'passport';
import jwt from 'jsonwebtoken';

import {auth as authConfig} from '../../config';

export default(app) => {
    // login method
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    console.log(req.user);
    if (req.user) {
      const token = jwt.sign(req.user, authConfig.jwtSecret);
      res.send({user: req.user, token});
    } else {
      res.status(403).send({error: 'Error logging in'});
    }
  });
  app.post('/apit/login', (req, res) => {
    const {login, password} = req.body;
    if (login === 'test' && password === '123') {
      res.send({login, id: 1});
      return;
    }

    res.status(401).send({error: 'Incorrect username or password'});
  });

  app.get('/api/login', passport.authenticate('local'), (req, res) => {
    res.send('Hello ddddddworld!');
  });
 
};


