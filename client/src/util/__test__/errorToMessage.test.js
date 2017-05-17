/* eslint-disable no-unused-vars */
/* global test, expect */

import {loginErrorToMessage} from '../errorToMessage';

test('Wrong password', () => {
  // Render a checkbox with label in the document
  expect(loginErrorToMessage({status: 401})).toEqual('Wrong login or password, please try again!');
});
