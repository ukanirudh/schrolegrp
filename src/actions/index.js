
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

export function submitLogin(user) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "SUBMIT_LOGIN",
    payload: user
  };
}

export function registerUser(user) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "REGISTER_USER",
    payload: user
  };
}

export function forgotPassword(user) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "FORGOT_PASSWORD",
    payload: user
  };
}