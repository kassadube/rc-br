// npm packages
import test from 'tape';

// our packages
import {r, thinky} from '../src/db';
import {db as dbConfig} from '../config';
import login from './login';
import register from './register';
import general from './general';
//import user from './user';
//import question from './question';

thinky.dbReady().then(() => {
  // clean User table before starting tests
  test('Should clean DB', async (t) => {
   // await r.db(dbConfig.db).table('User').delete();
  //  await r.db(dbConfig.db).table('Question').delete();
    t.end();
  });
  register(test);
  // login(test);
 //  user(test);
 // question(test);
  general(test);
  
// close db connection
  test((t) => {
    setImmediate(() => r.getPoolMaster().drain());
    t.end();
  });
});

