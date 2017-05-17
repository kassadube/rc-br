import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';

import {loginAction} from '../../store/actions';
import {loginErrorToMessage} from '../../util';


const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  navToHome: () => dispatch(push('/')),
  onLoginClick: params => dispatch(loginAction(params)),
});

const Login = ({onLoginClick, token, navToHome, error}) => {
  let usernameInput;
  let passwordInput;
  let rememberMeInput;

  const handleClick = (e) => {
    e.preventDefault();
    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
      rememberMe: rememberMeInput.checked,
    });
  };
  if (token) {
    setImmediate(() => navToHome());
  }
  return (
    <div className="jumbotron">
      <h3>Login Page</h3>
      <p>please log in Or <Link to="/register" >register </Link> </p>
      {error ? (<div className="alert alert-danger" role="alert">{loginErrorToMessage(error)}</div>)
      : ''}
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            placeholder="username"
            ref={(i) => { usernameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            ref={(i) => { passwordInput = i; }}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              ref={(i) => { rememberMeInput = i; }}
            /> Check me out
        </label>
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick} >Submit</button>
      </form>
    </div>
  );
};


Login.propTypes = {
  onLoginClick: PropTypes.func,
  token: PropTypes.string,
  navToHome: PropTypes.func,
  error: PropTypes.object,
};
Login.defaultProps = {
  onLoginClick: e => e,
  token: '',
  navToHome: e => e,
  error: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

