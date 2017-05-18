import React, {Component} from 'react';

// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {logoutAction} from '../../store/actions';
import store from '../../store';


const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  navToHome: () => dispatch(push('/')),
  onLogout: () => dispatch(logoutAction()),
});

class Logout extends Component {
  constructor() {
    super();
    this.state = {editing: false};
  }
  componentWillMount() {
    store.dispatch(logoutAction());
  }

  render() {
    return (
      <div />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);
