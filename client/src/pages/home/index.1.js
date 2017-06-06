import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import _ from 'lodash';

// import {getAllQuestionsAction, answerQuestionAction} from '../../store/actions';
import Navbar from '../../components/navbar';
import MyTable from '../../components/myTable';


const mapStateToProps = state => ({
  user: state.auth.user,
});

// const mapDispatchToProps = dispatch => ({
// });

const Home = ({user}) => {
  const dataSource = ['dd', 'frf'];
  return (
    <div>
      <Navbar user={user} />
      <div>
         <MyTable colums={[2, 3, 4]} dataSource={dataSource} />
       </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object,
};
Home.defaultProps = {
  user: {},
};
export default connect(mapStateToProps)(Home);
