// require babel require hook
require('babel-core/register');
// require server code
process.env.NODE_ENV = 'prod';
require('./src');
