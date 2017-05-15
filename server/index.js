// require babel require hook
require('babel-core/register');
// require server code
process.env.NODE_ENV = 'debug';
require('./src');
