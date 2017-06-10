import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';

const App = (props) => (
  <BrowserRouter>
    <div className="App container-fluid">
      <div className="App-reddit-selector">
        <Link to="/">Front</Link> - <Link to="/create">All</Link> |
        
      </div>
      <div className="App-header">
        
        <strong>Reactit!</strong> An Example ReactJs Reddit front-end
      </div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/create" component={Create}/>
    </div>
  </BrowserRouter>
);

export default App;