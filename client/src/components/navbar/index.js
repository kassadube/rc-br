// npm packages
import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';


export default function navbar({user}) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Brand</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/other">page Not Found</Link></li>
          <li className="active"><Link to="/">Browse questions</Link></li>
          <li><Link to="/create">Create new questions</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/profile/me">{user.login}</Link></li>
          <li><Link to="/logout">logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}


navbar.propTypes = {
  user: PropTypes.object,
};
navbar.defaultProps = {
  user: {},
};
