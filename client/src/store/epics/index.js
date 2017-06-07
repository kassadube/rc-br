import {helloWorld} from './helloWorld';
import {login, register} from './auth';
import {getAllDays, addDay} from './dayActions';
import {getUser, updateUser} from './users';

export default [
  // auth
  login,
  register,
  helloWorld,
  getAllDays,
  getUser,
  addDay,
  updateUser,
];
