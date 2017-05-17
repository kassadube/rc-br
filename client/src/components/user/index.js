/* eslint no-console: 0 */
// npm packages
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import {updateUserAction} from '../../store/actions';

/*
const mapStateToProps = state => ({

});
*/
const mapDispatchToProps = dispatch => ({
  updateUser: (payload) => { dispatch(updateUserAction(payload)); },
});

function User({user, edit, updateUser}) {
  if (user == null) return null;
  let userInput;
  let headerContent = '';
  let buttonText = '';
  const saveUser = () => {
    console.log(userInput.value);
    updateUser({id: user.id, login: userInput.value});
  };

  if (edit) {
    headerContent = <input defaultValue={user.login} ref={(i) => { userInput = i; }} />;
    buttonText = <div className="pull-right"><button className="btn btn-default" onClick={saveUser}>Save</button></div>;
  } else {
    headerContent = user.login;
  }

  return (
    <div className="panel panel-default" key={user.id}>
      <div className="panel-heading">User: {headerContent} {buttonText}</div>
      <div className="panel-body">
          Registration Date {user.registrationDate}
      </div>
    </div>
  );
}
User.propTypes = {
  user: PropTypes.object,
  edit: PropTypes.bool,
  updateUser: PropTypes.func,
};
User.defaultProps = {
  user: {},
  edit: false,
  updateUser: e => e,
};

// export default connect(mapStateToProps, mapDispatchToProps)(User);
export default connect({}, mapDispatchToProps)(User);
