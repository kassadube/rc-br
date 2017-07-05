/* eslint no-console: 0 */
import {chalkSuccess, chalkProcessing} from './chalkConfig';

const path = require('path');
const express = require('express');
const webpack = require('webpack');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require(path.join(__dirname, '../webpack.config.dev.js'));

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3003 : process.env.PORT;
const app = express();
const open = require('open');


if (isDeveloping) {
  console.log(chalkProcessing('Starting development...'));
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
   // console.log("ff = " + path.join(__dirname, 'dist/index.html'));
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });
  open(`http://localhost:${port}/`);
  console.log(chalkSuccess(` open browser http://localhost:${port}/`));
} else {
  app.use(express.static(`${__dirname}/dist`));
  app.get('*', (req, res) => {
    console.log(chalkSuccess(` open browser http://localhost:${port}/`));
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info(chalkSuccess(`==> 🌎 Listening on port ${port}. Open up http://0.0.0.0:${port}/ in your browser.`));
});
