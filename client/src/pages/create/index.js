import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addDayAction} from '../../store/actions';

import Navbar from '../../components/navbar';

const mapStateToProps = state => ({
  user: state.auth.user,
  addStatus: state.dayActions.status,
});

const mapDispatchToProps = dispatch => ({
  addDayClick: params => dispatch(addDayAction(params)),
});


class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // this.changeInput;
    // this.numOfActionInput;
    // this.buyingDateInput;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addDayClick({
      change: this.changeInput.value,
      numOfAction: this.numOfActionInput.value,
      buyingDate: this.buyingDateInput.value,
    });
  }

  render() {
    console.log(this.props.addStatus);
    return (

      <div>
        <Navbar user={this.props.user} />
        <div className="jumbotron">
          <h2>Experts portal:</h2>
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="changeInput" className="col-sm-2 control-label">Change:</label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  id="changeInput"
                  placeholder="change"
                  ref={(i) => { this.changeInput = i; }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="numOfActionInput" className="col-sm-2 control-label">Num Of Action:</label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  id="numOfActionInput"
                  placeholder="Num Of Action"
                  ref={(i) => { this.numOfActionInput = i; }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-2 control-label">Buying Date:</label>
              <div className="col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  id="buyingDateInput"
                  placeholder="buying Date"
                  ref={(i) => { this.buyingDateInput = i; }}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default" onClick={e => this.handleClick(e)}>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

Create.propTypes = {
  user: PropTypes.object,
  addStatus: PropTypes.string,
};
Create.defaultProps = {
  user: {},
  addStatus: '',
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
