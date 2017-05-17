export const loginErrorToMessage = (error) => {
  if (error.status === 401) {
    return 'Wrong login or password, please try again!';
  }
  return error.message;
};

export const registerErrorToMessage = (error) => {
  if (error.status === 401) {
    return 'Wrong login or password, please try again!';
  }
  return error.message;
};
