import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAllDayAction} from '../../store/actions';

import Navbar from '../../components/navbar';
import MyTable from '../../components/myTable';


const mapStateToProps = state => ({
  user: state.auth.user,
  actions: state.dayActions.actions,
});

const mapDispatchToProps = dispatch => ({
  getAllDayActions: () => dispatch(getAllDayAction()),
});

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.schema = [
    {key: 'buyingDate', label: 'Date', type: 'date'},
    {key: 'change', label: 'Daily Change', type: 'number'},
    {key: 'numOfAction', label: '# of actions', type: 'number'},
    ];
    props.getAllDayActions();
   // setImmediate(() => props.getAllDayActions());
  }
  render() {
    console.log(this.props.actions);
    return (
      <div>
        <Navbar user={this.props.user} />
        <div>
          <MyTable schema={this.schema} rows={this.props.actions} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.array,
  getAllDayActions: PropTypes.func,
};
Home.defaultProps = {
  user: {},
  actions: [],
  getAllDayActions: e => e,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
