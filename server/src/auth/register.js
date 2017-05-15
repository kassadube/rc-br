import {User} from '../db';
import {hash, asyncRequest} from '../util';


export const loginTaken = async (login) => {
// check if login already taken
  const users = await User.filter({login}).filter(1).run();
  return users.length > 0;
};

export default(app) => {
    // login method
  app.post('/api/register', asyncRequest(async(req, res) => {
    const {login, password, passwordRepeat} = req.body;
    if (!password) {
      res.status(400).send({error: 'Password does not exist'});
      return;
    }
    if (password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords do not match'});
      return;
    }
    // hash passport
    const hashedPassword = hash(password);

    // check if login already taken
    const exists = await loginTaken(login);
    if (exists) {
      res.status(403).send({error: 'User already exists'});
      return;
    }
    const user = new User({
      login,
      password: hashedPassword,
    });
    await user.save();
    res.send({success: true});
  }));
};
