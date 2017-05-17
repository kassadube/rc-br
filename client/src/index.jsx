// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// our packages
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Create from './pages/Create';
import NotFound from './pages/notFound';
import App from './app';
import store from './store';
import {requireAuth} from './util';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="create" component={Create} />
        <Route path="register" component={Register} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));

/*
var child = require('child_process').execFile;
// var executablePath = "C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe";
var executablePath  = "C:\\Users\\noam\\RethinkDB\\rethinkdb.exe";

child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
*/
