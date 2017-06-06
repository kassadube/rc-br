import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';

import {User} from '../db';
import {hash} from '../util';
import {auth as authConfig} from '../../config';

passport.serializeUser((user, done) => { done(null, user.id); });

passport.deserializeUser(async (id, done) => {
  let user = null;
  try {
    user = await User.get(id).run();
  } catch (e) {
    return done(e, false);
  }
  return done(null, user);
});


passport.use(new LocalStrategy({usernameField: 'login'}, async (login, password, done) => {
  console.log("PASSS login = " + login);
  console.log("PASSS password = " + password);
  const users = await User.filter({login}).limit(1);
  console.log("USERS = " + users);
  const user = users[0];
  if (!user) {
    return done(null, false);
  }
  if (user.password !== hash(password)) {
    return done(null, false);
  }
  return done(null, user);
}));

// jwt Strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: authConfig.jwtSecret,
};
passport.use(new JwtStrategy(jwtOpts, async(payload, done) => {
  const user = await User.get(payload.id);
  if (!user) {
    return done(null, false);
  }
  // return the user if succed
  return done(null, user);
}));
