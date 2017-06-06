import React, {Component} from 'react';
import {connect} from 'react-redux';

import {logoutAction} from '../../store/actions';


const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutAction()),
});


class Create extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }


  render() {
    return (
      <div >ddddddd4ddd</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
