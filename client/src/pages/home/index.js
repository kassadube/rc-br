import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../../components/navbar';
import MyTable from '../../components/myTable';


const mapStateToProps = state => ({
  user: state.auth.user,
});

// const mapDispatchToProps = dispatch => ({
// });
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataSource = ['dd', 'frf', 'rfrf', 'ff'];
    return (
      <div>
        <Navbar user={this.props.user} />
        <div>
          <MyTable colums={[2, 3, 4]} dataSource={dataSource} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object,
};
Home.defaultProps = {
  user: {},
};
export default connect(mapStateToProps)(Home);
