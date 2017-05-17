import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import _ from 'lodash';

// import {getAllQuestionsAction, answerQuestionAction} from '../../store/actions';
import Navbar from '../../components/navbar';


const mapStateToProps = state => ({
  user: state.auth.user,
});

// const mapDispatchToProps = dispatch => ({
// });

const Home = ({user}) =>
   (
     <div>
       <Navbar user={user} />
       <div />
     </div>
  );

Home.propTypes = {
  user: PropTypes.object,
};
Home.defaultProps = {
  user: {},
};
export default connect(mapStateToProps)(Home);
