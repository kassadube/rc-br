import {helloWorld} from './helloWorld';
import {login, register} from './auth';
import {getAllQuestions, answerQuestion, addQuestion} from './questions';
import {getUser, updateUser} from './users';

export default [
  // auth
  login,
  register,
  helloWorld,
  getAllQuestions,
  answerQuestion,
  addQuestion,
  getUser,
  updateUser,
];
