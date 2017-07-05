// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
// styles
 // import 'bootstrap/dist/css/bootstrap.min.css';
// import '~/node_modules/bootstrap/dist/bootstrap.css';


// our packages
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Create from './pages/create';
import NotFound from './pages/notFound';
import App from './app';
import store from './store';
import {requireAuth} from './util';
import './css/general.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="Create" component={Create} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));

