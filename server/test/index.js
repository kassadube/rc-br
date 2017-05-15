// require babel require hook
require('babel-core/register');
// require server code
 //require('./login');
//require('./register');
process.env.NODE_ENV = 'debug';
require('./main');
